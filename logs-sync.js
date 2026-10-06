/* =========================================================
   Logs Sync | مزامنة التتبع اليومي مع جدول logs في Supabase
   المصدر المحلي (localStorage) يبقى للعرض السريع،
   وSupabase هو السجل الدائم الذي يحلله الذكاء الاصطناعي.
   ========================================================= */

const KEY_TO_HABIT_NAME = {
  Fajr: "صلاة الفجر",
  Dhuhr: "صلاة الظهر",
  Asr: "صلاة العصر",
  Maghrib: "صلاة المغرب",
  Isha: "صلاة العشاء",
  Duha: "صلاة الضحى",
  Witr: "صلاة الوتر",
  Quran: "ورد قرآن يومي",
  MorningAdhkar: "أذكار الصباح",
  EveningAdhkar: "أذكار المساء",
  AdhkarAfterPrayer: "أذكار بعد الصلاة",
  SleepAdhkar: "أذكار النوم"
};

// حذف التشكيل وتوحيد الهمزات حتى لا تفشل المطابقة بسبب اختلاف بسيط
function normAr(text) {
  return String(text || "")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[إأآ]/g, "ا")
    .replace(/\s+/g, " ")
    .trim();
}

let habitIdByKey = null;

async function loadHabitMap() {
  if (habitIdByKey) return habitIdByKey;

  const { data, error } = await supabaseClient
    .from("habits_library")
    .select("id,name");

  if (error) {
    console.error("habits_library read failed", error);
    return null;
  }

  const byName = new Map(data.map(h => [normAr(h.name), h.id]));
  habitIdByKey = {};

  for (const [key, name] of Object.entries(KEY_TO_HABIT_NAME)) {
    const id = byName.get(normAr(name));
    if (id) habitIdByKey[key] = id;
  }

  return habitIdByKey;
}

async function currentUserId() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session?.user?.id || null;
}

// تسجيل أو إلغاء عبادة اليوم في قاعدة البيانات
async function syncLog(key, done) {
  try {
    const map = await loadHabitMap();
    const habitId = map?.[key];
    const userId = await currentUserId();

    if (!habitId || !userId) return;

    const logDate = today();

    if (done) {
      const { data: existing } = await supabaseClient
        .from("logs")
        .select("id")
        .eq("user_id", userId)
        .eq("habit_id", habitId)
        .eq("log_date", logDate)
        .limit(1);

      if (existing && existing.length) {
        await supabaseClient
          .from("logs")
          .update({ status: "done" })
          .eq("id", existing[0].id);
      } else {
        const { error } = await supabaseClient.from("logs").insert({
          user_id: userId,
          habit_id: habitId,
          log_date: logDate,
          status: "done"
        });
        if (error) console.error("log insert failed", error);
      }
    } else {
      const { error } = await supabaseClient
        .from("logs")
        .delete()
        .eq("user_id", userId)
        .eq("habit_id", habitId)
        .eq("log_date", logDate);
      if (error) console.error("log delete failed", error);
    }
    if (typeof refreshStreak === "function") refreshStreak();
  } catch (e) {
    console.error("syncLog error", e);
  }
}

// عند فتح التطبيق: ندمج إنجازات اليوم المحفوظة في القاعدة مع الحالة المحلية
async function loadTodayFromLogs() {
  try {
    const map = await loadHabitMap();
    const userId = await currentUserId();
    if (!map || !userId) return;

    const { data, error } = await supabaseClient
      .from("logs")
      .select("habit_id,status")
      .eq("user_id", userId)
      .eq("log_date", today());

    if (error || !data) return;

    const keyById = {};
    for (const [key, id] of Object.entries(map)) keyById[id] = key;

    const prayers = getPrayerState();
    const daily = getDailyHabits();
    const prayerKeys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    for (const row of data) {
      if (String(row.status).toLowerCase() !== "done") continue;
      const key = keyById[row.habit_id];
      if (!key) continue;

      if (prayerKeys.includes(key)) prayers.done[key] = true;
      else daily.habits[key] = true;
    }

    savePrayerState(prayers);
    saveDailyHabits(daily);
  } catch (e) {
    console.error("loadTodayFromLogs error", e);
  }
}