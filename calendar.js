/* =========================================================
   Calendar | تقويم العبادات الشهري
   يقرأ جدول logs من Supabase ويعرض كل يوم بحالة الصلوات
   ويظهر التاريخ الهجري مع الميلادي. اضغطي على أي يوم لرؤية تفاصيله.
   ========================================================= */

const CAL_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const CAL_EN = {
  Fajr: "Fajr", Dhuhr: "Dhuhr", Asr: "Asr", Maghrib: "Maghrib", Isha: "Isha",
  Duha: "Duha prayer", Witr: "Witr prayer", Quran: "Daily Quran",
  MorningAdhkar: "Morning adhkar", EveningAdhkar: "Evening adhkar",
  AdhkarAfterPrayer: "Adhkar after prayer", SleepAdhkar: "Sleep adhkar"
};
const CAL_OTHER_KEYS = [
  "Duha", "Witr", "Quran", "MorningAdhkar", "EveningAdhkar",
  "AdhkarAfterPrayer", "SleepAdhkar"
];

let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth(); // 0-11
let calSelected = null;               // "YYYY-MM-DD"
let calNameById = null;               // habit_id -> name

const calEsc = s => String(s ?? "").replace(/[&<>"']/g, c => (
  { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
));

const calKey = (y, m, d) =>
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

function calShift(n) {
  calMonth += n;
  while (calMonth < 0) { calMonth += 12; calYear--; }
  while (calMonth > 11) { calMonth -= 12; calYear++; }
  calSelected = null;
  render(true);
}

function calToToday() {
  const d = new Date();
  calYear = d.getFullYear();
  calMonth = d.getMonth();
  calSelected = today();
  render(true);
}

function calSelect(dateStr) {
  calSelected = calSelected === dateStr ? null : dateStr;
  render(true);
}

// تسجيل أو إلغاء عبادة ليوم سابق (اليوم الحالي يُسجَّل من صفحة "يومي")
async function calToggle(key, dateStr) {
  try {
    if (dateStr >= today()) return;

    const map = await loadHabitMap();
    const userId = await currentUserId();
    const habitId = map?.[key];

    if (!habitId || !userId) {
      toast(L("تعذر الحفظ الآن", "Could not save right now"));
      return;
    }

    const { data: existing, error: readErr } = await supabaseClient
      .from("logs")
      .select("id")
      .eq("user_id", userId)
      .eq("habit_id", habitId)
      .eq("log_date", dateStr);

    if (readErr) throw readErr;

    if (existing && existing.length) {
      const { error } = await supabaseClient
        .from("logs")
        .delete()
        .eq("user_id", userId)
        .eq("habit_id", habitId)
        .eq("log_date", dateStr);
      if (error) throw error;
    } else {
      const { error } = await supabaseClient.from("logs").insert({
        user_id: userId,
        habit_id: habitId,
        log_date: dateStr,
        status: "done"
      });
      if (error) throw error;
    }

    if (typeof refreshStreak === "function") refreshStreak();
    render(true);
  } catch (e) {
    console.error("calendar toggle failed", e);
    toast(L("تعذر الحفظ، حاولي مرة أخرى", "Could not save, please try again"));
  }
}

async function calLoadNames() {
  if (calNameById) return calNameById;

  const { data, error } = await supabaseClient
    .from("habits_library")
    .select("id,name");

  if (error || !data) {
    console.error("calendar: habits_library read failed", error);
    return {};
  }

  calNameById = {};
  for (const h of data) calNameById[h.id] = h.name;
  return calNameById;
}

// { "YYYY-MM-DD": Set(habit_id) } للشهر المعروض
async function calLoadMonth(userId) {
  const last = new Date(calYear, calMonth + 1, 0).getDate();
  const from = calKey(calYear, calMonth, 1);
  const to = calKey(calYear, calMonth, last);

  const { data, error } = await supabaseClient
    .from("logs")
    .select("habit_id,log_date,status")
    .eq("user_id", userId)
    .gte("log_date", from)
    .lte("log_date", to);

  if (error || !data) {
    console.error("calendar: logs read failed", error);
    return null;
  }

  const byDay = {};
  for (const r of data) {
    if (String(r.status).toLowerCase() !== "done") continue;
    (byDay[r.log_date] = byDay[r.log_date] || new Set()).add(r.habit_id);
  }
  return byDay;
}

function calWeekdayLabels(startDay) {
  const fmt = new Intl.DateTimeFormat(isEn() ? "en" : "ar", { weekday: "short" });
  // 2024-01-07 كان يوم أحد
  return Array.from({ length: 7 }, (_, i) =>
    fmt.format(new Date(2024, 0, 7 + ((startDay + i) % 7)))
  );
}

function calHijriDay(date) {
  try {
    return new Intl.DateTimeFormat(
      isEn() ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura",
      { day: "numeric" }
    ).format(date);
  } catch (e) {
    return "";
  }
}

function calHijriTitle(firstDay, lastDay) {
  try {
    const f = new Intl.DateTimeFormat(
      isEn() ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura",
      { month: "long", year: "numeric" }
    );
    const a = f.format(firstDay);
    const b = f.format(lastDay);
    return a === b ? a : `${a} – ${b}`;
  } catch (e) {
    return "";
  }
}

async function calendarPage() {
  const userId = await currentUserId();
  const map = await loadHabitMap();

  const header = head(
    "📅",
    tr("calendar"),
    L("تابعي التزامك يوماً بيوم", "Follow your consistency day by day")
  );

  if (!userId || !map) {
    return `<div class="wrap">${header}<div class="card"><p>${L(
      "تعذر تحميل بيانات التقويم الآن.",
      "Could not load calendar data right now."
    )}</p></div></div>`;
  }

  const [byDay, names] = await Promise.all([calLoadMonth(userId), calLoadNames()]);

  if (!byDay) {
    return `<div class="wrap">${header}<div class="card"><p>${L(
      "تعذر تحميل بيانات التقويم الآن.",
      "Could not load calendar data right now."
    )}</p></div></div>`;
  }

  const prayerIds = {};
  CAL_PRAYERS.forEach(k => { if (map[k]) prayerIds[k] = map[k]; });
  const prayerIdSet = new Set(Object.values(prayerIds));

  const startDay = isEn() ? 0 : 6; // السبت أولاً بالعربي
  const first = new Date(calYear, calMonth, 1);
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const offset = (first.getDay() - startDay + 7) % 7;
  const todayStr = today();

  let fullDays = 0;
  let prayersDone = 0;
  let prayersPossible = 0;

  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(`<div class="cal-cell empty"></div>`);

  for (let d = 1; d <= daysInMonth; d++) {
    const key = calKey(calYear, calMonth, d);
    const ids = byDay[key] || new Set();
    const n = [...ids].filter(id => prayerIdSet.has(id)).length;
    const hasOther = [...ids].some(id => !prayerIdSet.has(id));
    const isFuture = key > todayStr;

    if (!isFuture) {
      prayersPossible += CAL_PRAYERS.length;
      prayersDone += n;
      if (n === CAL_PRAYERS.length) fullDays++;
    }

    const state = n >= CAL_PRAYERS.length ? "full" : n > 0 ? "part" : "none";
    const cls = [
      "cal-cell",
      isFuture ? "future" : state,
      key === todayStr ? "today" : "",
      key === calSelected ? "sel" : ""
    ].join(" ");

    const hijri = calHijriDay(new Date(calYear, calMonth, d));

    cells.push(`
      <button class="${cls}" onclick="calSelect('${key}')">
        <b>${d}</b>
        <small>${hijri}</small>
        ${!isFuture && (n > 0 || hasOther)
          ? `<span class="cal-n">${n}/${CAL_PRAYERS.length}${hasOther ? " ·" : ""}</span>`
          : ""}
      </button>`);
  }

  const monthTitle = new Intl.DateTimeFormat(
    isEn() ? "en" : "ar-u-ca-gregory",
    { month: "long", year: "numeric" }
  ).format(first);

  const hijriTitle = calHijriTitle(first, new Date(calYear, calMonth, daysInMonth));
  const labels = calWeekdayLabels(startDay);

  // تفاصيل اليوم المحدد (ويمكن تعديل الأيام السابقة)
  let detail = "";
  if (calSelected) {
    const ids = byDay[calSelected] || new Set();
    const editable = calSelected < todayStr;
    const isToday = calSelected === todayStr;
    const knownIds = new Set(Object.values(map));

    const labelFor = k =>
      isEn() ? CAL_EN[k] : (names[map[k]] || KEY_TO_HABIT_NAME[k]);

    const row = k => {
      if (!map[k]) return "";
      const ok = ids.has(map[k]);
      const mark = ok ? "✓" : "○";
      const label = calEsc(labelFor(k));
      return editable
        ? `<li class="${ok ? "ok" : "no"}"><button class="cal-tog" onclick="calToggle('${k}','${calSelected}')"><span>${mark}</span> ${label}</button></li>`
        : `<li class="${ok ? "ok" : "no"}"><span>${mark}</span> ${label}</li>`;
    };

    const prayerRows = CAL_PRAYERS.map(row).join("");
    const otherRows = CAL_OTHER_KEYS.map(row).join("");

    // عبادات من المكتبة غير مربوطة بالواجهة (عرض فقط)
    const extra = [...ids]
      .filter(id => !knownIds.has(id))
      .map(id => `<li class="ok"><span>✓</span> ${calEsc(names[id] || "")}</li>`)
      .join("");

    const dateLabel = new Intl.DateTimeFormat(isEn() ? "en" : "ar-u-ca-gregory", {
      weekday: "long", day: "numeric", month: "long"
    }).format(new Date(calSelected + "T00:00:00"));

    const hint = editable
      ? L("فاتك التسجيل؟ اضغطي على أي عبادة لتسجيلها أو إلغائها لهذا اليوم.",
          "Missed logging? Tap any item to mark or unmark it for this day.")
      : isToday
        ? L("اليوم يُسجَّل من صفحة «يومي مع رفيق».", "Today is logged from the “My Day” page.")
        : L("لا يمكن التسجيل لأيام قادمة.", "You can't log future days.");

    detail = `
      <div class="card cal-detail">
        <h2 style="font-size:17px">${calEsc(dateLabel)}</h2>
        <small style="color:var(--mut)">${hint}</small>
        <ul>${prayerRows}</ul>
        <small style="color:var(--mut)">${L("عبادات أخرى", "Other worship")}</small>
        <ul>${otherRows}${extra}</ul>
      </div>`;
  }

  return `
    <div class="wrap">
      ${header}

      <div class="card">
        <div class="row" style="justify-content:space-between;align-items:center">
          <button class="chip" onclick="calShift(${isEn() ? -1 : 1})" aria-label="prev">${isEn() ? "‹" : "›"}</button>
          <div style="text-align:center">
            <h2 style="font-size:18px">${calEsc(monthTitle)}</h2>
            <small style="color:var(--mut)">${calEsc(hijriTitle)}</small>
          </div>
          <button class="chip" onclick="calShift(${isEn() ? 1 : -1})" aria-label="next">${isEn() ? "›" : "‹"}</button>
        </div>

        <div class="cal-grid cal-head">
          ${labels.map(l => `<div>${calEsc(l)}</div>`).join("")}
        </div>
        <div class="cal-grid">
          ${cells.join("")}
        </div>

        <div class="cal-legend">
          <span><i class="d full"></i>${L("٥ صلوات", "All 5 prayers")}</span>
          <span><i class="d part"></i>${L("بعض الصلوات", "Some prayers")}</span>
          <span><i class="d none"></i>${L("لا شيء", "None")}</span>
        </div>

        <button class="btn o small-btn" style="margin-top:10px" onclick="calToToday()">
          ${L("اليوم", "Today")}
        </button>
      </div>

      ${detail}

      <div class="card" style="margin-top:14px">
        <h2 style="font-size:17px">${L("ملخص الشهر", "Month summary")}</h2>
        <div class="row w" style="margin-top:10px;gap:10px">
          <div class="cal-stat"><b>${fullDays}</b><small>${L("أيام كاملة الصلوات", "Days with all prayers")}</small></div>
          <div class="cal-stat"><b>${prayersDone}/${prayersPossible}</b><small>${L("صلوات محافظ عليها", "Prayers kept")}</small></div>
        </div>
      </div>
    </div>`;
}