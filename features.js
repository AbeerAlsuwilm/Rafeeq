/* =========================================================
   Features | الأذكار + الستريك + التحليل بالذكاء الاصطناعي
   يُحمَّل قبل app.js
   ========================================================= */

const esc = v => String(v ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* =========================
   الأذكار (النصوص والعدد والمصدر)
   راجعوا النصوص والمصادر مع مختص قبل الإطلاق
========================= */

const ADHKAR_SETS = {
  morning: {
    habit: "MorningAdhkar",
    icon: "🌅",
    title: "أذكار الصباح",
    sub: "من بعد الفجر إلى الضحى",
    items: [
      { text: "اللّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", count: 1, source: "آية الكرسي - سورة البقرة (255)" },
      { text: "قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", count: 3, source: "سورة الإخلاص - رواه أبو داود والترمذي" },
      { text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", count: 3, source: "سورة الفلق - رواه أبو داود والترمذي" },
      { text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَٰهِ النَّاسِ * مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ", count: 3, source: "سورة الناس - رواه أبو داود والترمذي" },
      { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", count: 1, source: "رواه مسلم" },
      { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count: 1, source: "سيد الاستغفار - رواه البخاري" },
      { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3, source: "رواه أبو داود والترمذي" },
      { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100, source: "رواه مسلم" }
    ]
  },

  evening: {
    habit: "EveningAdhkar",
    icon: "🌙",
    title: "أذكار المساء",
    sub: "من بعد العصر إلى المغرب",
    items: [
      { text: "اللّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", count: 1, source: "آية الكرسي - سورة البقرة (255)" },
      { text: "قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", count: 3, source: "سورة الإخلاص - رواه أبو داود والترمذي" },
      { text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", count: 3, source: "سورة الفلق - رواه أبو داود والترمذي" },
      { text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَٰهِ النَّاسِ * مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ", count: 3, source: "سورة الناس - رواه أبو داود والترمذي" },
      { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", count: 1, source: "رواه مسلم" },
      { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count: 1, source: "سيد الاستغفار - رواه البخاري" },
      { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3, source: "رواه أبو داود والترمذي" },
      { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100, source: "رواه مسلم" }
    ]
  },

  afterPrayer: {
    habit: "AdhkarAfterPrayer",
    icon: "🤲",
    title: "أذكار بعد الصلاة",
    sub: "بعد السلام من الصلاة المفروضة",
    items: [
      { text: "أَسْتَغْفِرُ اللَّهَ", count: 3, source: "رواه مسلم" },
      { text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", count: 1, source: "رواه مسلم" },
      { text: "سُبْحَانَ اللَّهِ", count: 33, source: "رواه مسلم" },
      { text: "الْحَمْدُ لِلَّهِ", count: 33, source: "رواه مسلم" },
      { text: "اللَّهُ أَكْبَرُ", count: 33, source: "رواه مسلم" },
      { text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", count: 1, source: "تمام المئة - رواه مسلم" }
    ]
  },

  sleep: {
    habit: "SleepAdhkar",
    icon: "😴",
    title: "أذكار النوم",
    sub: "قبل النوم",
    items: [
      { text: "اللّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", count: 1, source: "رواه البخاري" },
      { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", count: 1, source: "رواه البخاري" },
      { text: "سُبْحَانَ اللَّهِ", count: 33, source: "متفق عليه" },
      { text: "الْحَمْدُ لِلَّهِ", count: 33, source: "متفق عليه" },
      { text: "اللَّهُ أَكْبَرُ", count: 34, source: "متفق عليه" }
    ]
  }
};


const isEn = () => typeof lang !== "undefined" && lang === "en";
const L = (ar, en) => (isEn() ? en : ar);

// معنى كل ذكر بالإنجليزية (يظهر تحت النص العربي عند تغيير اللغة)
const DHIKR_EN = [
  ["اللّهُ لَا إِلَٰهَ", "Allah: there is no god but Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs all that is in the heavens and the earth. Who can intercede with Him except by His permission? He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. His Throne extends over the heavens and the earth, and preserving them does not tire Him. He is the Most High, the Most Great."],
  ["قُلْ هُوَ اللَّهُ أَحَدٌ", "Say: He is Allah, the One. Allah, the Self-Sufficient. He neither begets nor is born, and there is none comparable to Him."],
  ["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies."],
  ["قُلْ أَعُوذُ بِرَبِّ النَّاسِ", "Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whispering retreating whisperer, who whispers in the hearts of mankind, among jinn and mankind."],
  ["أَصْبَحْنَا", "We have reached the morning and the dominion belongs to Allah. All praise is for Allah. There is no god but Allah alone, with no partner. His is the dominion, His is the praise, and He is over all things capable."],
  ["أَمْسَيْنَا", "We have reached the evening and the dominion belongs to Allah. All praise is for Allah. There is no god but Allah alone, with no partner. His is the dominion, His is the praise, and He is over all things capable."],
  ["اللَّهُمَّ أَنْتَ رَبِّي", "O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I keep Your covenant and promise as best I can. I seek refuge in You from the evil I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for none forgives sins but You."],
  ["بِسْمِ اللَّهِ الَّذِي", "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing."],
  ["سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "Glory be to Allah and praise be to Him."],
  ["أَسْتَغْفِرُ اللَّهَ", "I seek Allah's forgiveness."],
  ["اللَّهُمَّ أَنْتَ السَّلَامُ", "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of Majesty and Honor."],
  ["لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ", "There is no god but Allah alone, with no partner. His is the dominion, His is the praise, and He is over all things capable."],
  ["بِاسْمِكَ اللَّهُمَّ", "In Your name, O Allah, I die and I live."]
];
const DHIKR_EN_EXACT = {
  "سُبْحَانَ اللَّهِ": "Glory be to Allah.",
  "الْحَمْدُ لِلَّهِ": "All praise is for Allah.",
  "اللَّهُ أَكْبَرُ": "Allah is the Greatest."
};

function dhikrEn(text) {
  if (DHIKR_EN_EXACT[text]) return DHIKR_EN_EXACT[text];
  const hit = DHIKR_EN.find(([start]) => text.startsWith(start));
  return hit ? hit[1] : "";
}

const KEY_EN = {
  Fajr: "Fajr prayer", Dhuhr: "Dhuhr prayer", Asr: "Asr prayer", Maghrib: "Maghrib prayer", Isha: "Isha prayer",
  Duha: "Duha prayer", Witr: "Witr prayer", Quran: "Daily Quran portion",
  MorningAdhkar: "Morning adhkar", EveningAdhkar: "Evening adhkar",
  AdhkarAfterPrayer: "After-prayer adhkar", SleepAdhkar: "Sleep adhkar"
};

const SET_EN = {
  morning: ["Morning adhkar", "After Fajr until mid-morning"],
  evening: ["Evening adhkar", "After Asr until Maghrib"],
  afterPrayer: ["After-prayer adhkar", "After the obligatory prayer"],
  sleep: ["Sleep adhkar", "Before going to sleep"]
};

function srcText(src) {
  if (!isEn()) return src;
  return src
    .replace("آية الكرسي - سورة البقرة (255)", "Ayat al-Kursi, Al-Baqarah (255)")
    .replace("سورة الإخلاص", "Surah Al-Ikhlas")
    .replace("سورة الفلق", "Surah Al-Falaq")
    .replace("سورة الناس", "Surah An-Nas")
    .replace("سيد الاستغفار", "Sayyid al-Istighfar")
    .replace("تمام المئة", "Completing the hundred")
    .replace("متفق عليه", "Agreed upon (Bukhari and Muslim)")
    .replace("رواه أبو داود والترمذي", "Narrated by Abu Dawud and al-Tirmidhi")
    .replace("رواه البخاري", "Narrated by al-Bukhari")
    .replace("رواه مسلم", "Narrated by Muslim");
}

function setTitle(key) { return isEn() ? SET_EN[key][0] : ADHKAR_SETS[key].title; }
function setSub(key)   { return isEn() ? SET_EN[key][1] : ADHKAR_SETS[key].sub; }

let adhkarOpen = null;

function getAdhkarProgress() {
  const d = S("adhkarProgress", null);
  return d && d.date === today() ? d : { date: today(), sets: {} };
}

function setDone(setKey) {
  return !!getDailyHabits().habits[ADHKAR_SETS[setKey].habit];
}

function openAdhkar(setKey) {
  adhkarOpen = setKey || null;
  if (page !== "adhkar") go("adhkar");
  else render();
}

function tapDhikr(setKey, idx) {
  const set = ADHKAR_SETS[setKey];
  const prog = getAdhkarProgress();
  const cur = prog.sets[setKey] || {};
  const need = set.items[idx].count;

  if ((cur[idx] || 0) >= need) return;
  cur[idx] = (cur[idx] || 0) + 1;
  prog.sets[setKey] = cur;
  W("adhkarProgress", prog);

  const finished = set.items.every((it, i) => (cur[i] || 0) >= it.count);
  if (finished && !setDone(setKey)) {
    toast(L("ما شاء الله، أتممت " + set.title, "MashaAllah, you completed " + setTitle(setKey)));
    setHabit(set.habit, true);
  } else {
    render(true);
  }
}

function resetAdhkar(setKey) {
  const prog = getAdhkarProgress();
  delete prog.sets[setKey];
  W("adhkarProgress", prog);
  setHabit(ADHKAR_SETS[setKey].habit, false);
}

function setProgress(setKey) {
  const set = ADHKAR_SETS[setKey];
  const cur = getAdhkarProgress().sets[setKey] || {};
  const total = set.items.reduce((n, it) => n + it.count, 0);
  const done = set.items.reduce((n, it, i) => n + Math.min(cur[i] || 0, it.count), 0);
  return setDone(setKey) ? 100 : Math.round((done / total) * 100);
}

function adhkarPage() {
  if (adhkarOpen && ADHKAR_SETS[adhkarOpen]) return adhkarSetView(adhkarOpen);

  return `
    <div class="wrap">
      ${head("📿", L("الأذكار", "Adhkar"), L("اختر مجموعة الأذكار، واقرأ كل ذكر واضغط عليه للعد.", "Choose a set, read each dhikr and tap to count."))}
      <div class="adhkar-grid">
        ${Object.entries(ADHKAR_SETS).map(([key, set]) => {
          const pct = setProgress(key);
          return `
            <button class="card adhkar-card ${pct === 100 ? "done" : ""}" onclick="openAdhkar('${key}')">
              <span class="adhkar-ico">${set.icon}</span>
              <h3>${setTitle(key)}</h3>
              <p>${setSub(key)}</p>
              <div class="progress" style="margin-top:12px"><div style="width:${pct}%"></div></div>
              <small>${pct === 100 ? L("✓ تمّت اليوم", "✓ Done today") : pct + "%"}</small>
            </button>`;
        }).join("")}
      </div>
    </div>`;
}

function adhkarSetView(setKey) {
  const set = ADHKAR_SETS[setKey];
  const cur = getAdhkarProgress().sets[setKey] || {};
  const done = setDone(setKey);

  return `
    <div class="wrap">
      <button class="btn o small-btn" onclick="openAdhkar(null)">${L("← الأذكار", "← Adhkar")}</button>
      ${head(set.icon, setTitle(setKey), setSub(setKey))}
      ${done ? `<div class="card" style="background:#eef0dd;margin-bottom:14px">${L("✓ أتممت " + set.title + " اليوم. تقبّل الله منك.", "✓ You completed " + setTitle(setKey) + " today. May Allah accept it from you.")}</div>` : ""}

      ${set.items.map((it, i) => {
        const n = Math.min(cur[i] || 0, it.count);
        const full = done || n >= it.count;
        return `
          <div class="card dhikr ${full ? "full" : ""}">
            <p class="dhikr-text">${esc(it.text)}</p>
            ${isEn() && dhikrEn(it.text) ? `<p class="dhikr-en">${esc(dhikrEn(it.text))}</p>` : ""}
            <small class="dhikr-src">${esc(srcText(it.source))}</small>
            <button class="dhikr-btn" ${full ? "disabled" : ""} onclick="tapDhikr('${setKey}',${i})">
              ${full ? "✓" : n + " / " + it.count}
            </button>
          </div>`;
      }).join("")}

      <button class="btn o small-btn" style="margin-top:14px" onclick="resetAdhkar('${setKey}')">${L("↺ إعادة العدّ", "↺ Reset count")}</button>
    </div>`;
}

// بطاقة الأذكار في صفحة "يومي مع رفيق"
function adhkarDayCard() {
  return `
    <div class="card" style="margin-top:14px;background:#eef0dd">
      <h2 style="font-size:18px">🤲 ${L("الأذكار", "Adhkar")}</h2>
      <p style="font-size:13px;margin-top:4px">${L("اضغط على أي مجموعة لتظهر لك الأذكار.", "Tap a set to read its adhkar.")}</p>
      <div style="margin-top:12px">
        ${Object.entries(ADHKAR_SETS).map(([key, set]) => `
          <button class="log adhkar-row" onclick="openAdhkar('${key}')">
            <span>${set.icon} ${setTitle(key)}</span>
            <span>${setDone(key) ? "✓" : L("اقرأ ←", "Read →")}</span>
          </button>`).join("")}
      </div>
    </div>`;
}

/* =========================
   الستريك: أيام الصلوات الخمس كاملة
========================= */

const PRAYER_NAMES = ["صلاة الفجر", "صلاة الظهر", "صلاة العصر", "صلاة المغرب", "صلاة العشاء"];

function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

async function fetchPrayerDays(daysBack) {
  const userId = await currentUserId();
  const map = await loadHabitMap();
  if (!userId || !map) return null;

  const ids = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map(k => map[k]).filter(Boolean);
  if (ids.length < 5) return null;

  const from = new Date();
  from.setDate(from.getDate() - daysBack);

  const { data, error } = await supabaseClient
    .from("logs")
    .select("habit_id,log_date,status")
    .eq("user_id", userId)
    .in("habit_id", ids)
    .gte("log_date", dateKey(from));

  if (error || !data) return null;

  const byDay = {};
  for (const r of data) {
    if (String(r.status).toLowerCase() !== "done") continue;
    (byDay[r.log_date] = byDay[r.log_date] || new Set()).add(r.habit_id);
  }
  return Object.keys(byDay).filter(d => byDay[d].size >= 5);
}

async function refreshStreak() {
  const full = await fetchPrayerDays(400);
  if (!full) return;

  const set = new Set(full);
  const cursor = new Date();
  if (!set.has(dateKey(cursor))) cursor.setDate(cursor.getDate() - 1); // اليوم لم ينتهِ بعد

  let current = 0;
  while (set.has(dateKey(cursor))) {
    current++;
    cursor.setDate(cursor.getDate() - 1);
  }

  const sorted = [...set].sort();
  let best = 0, run = 0, prev = null;
  for (const d of sorted) {
    const dt = new Date(d + "T00:00:00");
    if (prev && (dt - prev) / 86400000 === 1) run++; else run = 1;
    best = Math.max(best, run);
    prev = dt;
  }

  const old = S("streak", null);
  W("streak", { current, best, total: set.size });
  if (!old || old.current !== current || old.best !== best) {
    if (page === "home" || page === "stats") render(true);
  }
}

function streakCard() {
  const s = S("streak", { current: 0, best: 0, total: 0 });
  return `
    <div class="card streak-card">
      <div class="streak-flame">🔥</div>
      <div style="flex:1">
        <h2 style="font-size:28px;margin:0">${s.current} <small style="font-size:14px;font-weight:500">${L("يوم متتالٍ", "day streak")}</small></h2>
        <p style="font-size:13px">${L("أيام أديت فيها الصلوات الخمس كاملة", "Days you completed all five prayers")}</p>
      </div>
      <div class="streak-best">
        <b>${s.best}</b>
        <small>${L("أفضل ستريك", "Best streak")}</small>
      </div>
    </div>`;
}

/* =========================
   التحليل: يومي / أسبوعي / شهري
========================= */

const PERIODS = { daily: ["يومي", 1, "Daily"], weekly: ["أسبوعي", 7, "Weekly"], monthly: ["شهري", 30, "Monthly"] };
const periodName = k => (isEn() ? PERIODS[k][2] : PERIODS[k][0]);
let statsPeriod = (() => {
  try { return JSON.parse(localStorage.getItem("statsPeriod")) || "weekly"; }
  catch (e) { return "weekly"; }
})();
let analysisBusy = false;
const reportCache = {};
const cacheKey = () => statsPeriod + "_" + (isEn() ? "en" : "ar");

function setStatsPeriod(p) {
  statsPeriod = p;
  W("statsPeriod", p);
  render();
}

async function localPeriodStats(days) {
  const userId = await currentUserId();
  const map = await loadHabitMap();
  if (!userId || !map) return null;

  const from = new Date();
  from.setDate(from.getDate() - (days - 1));

  const { data, error } = await supabaseClient
    .from("logs")
    .select("habit_id,log_date,status")
    .eq("user_id", userId)
    .gte("log_date", dateKey(from));

  if (error || !data) return null;

  const idToKey = {};
  for (const [k, id] of Object.entries(map)) idToKey[id] = k;

  const daysByKey = {};
  for (const r of data) {
    if (String(r.status).toLowerCase() !== "done") continue;
    const k = idToKey[r.habit_id];
    if (!k) continue;
    (daysByKey[k] = daysByKey[k] || new Set()).add(r.log_date);
  }

  const prayerKeys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  const prayersDone = prayerKeys.reduce((n, k) => n + (daysByKey[k]?.size || 0), 0);

  const kept = Object.entries(daysByKey)
    .map(([k, s]) => ({ key: k, name: isEn() ? (KEY_EN[k] || KEY_TO_HABIT_NAME[k]) : KEY_TO_HABIT_NAME[k], days: s.size }))
    .filter(x => x.days / days >= 0.5 || (days === 1 && x.days >= 1))
    .sort((a, b) => b.days - a.days);

  return { days, prayersDone, prayersPossible: prayerKeys.length * days, kept };
}

async function loadSavedReport(period) {
  const userId = await currentUserId();
  if (!userId) return null;

  const { data } = await supabaseClient
    .from("ai_reports")
    .select("*")
    .eq("user_id", userId)
    .eq("period_type", period)
    .order("created_at", { ascending: false })
    .limit(1);

  const row = data && data[0];
  if (!row) return null;

  let habit = null;
  if (row.suggested_habit_id) {
    const { data: h } = await supabaseClient
      .from("habits_library")
      .select("id,name,description,evidence_text,evidence_source,expected_impact,moderation_note,difficulty_level")
      .eq("id", row.suggested_habit_id)
      .limit(1);
    const x = h && h[0];
    if (x) habit = { ...x, evidence: x.evidence_text };
  }

  return { ...row, suggested_habit: habit };
}

async function runAnalysis() {
  if (analysisBusy) return;
  analysisBusy = true;
  render(true);

  try {
    const userId = await currentUserId();
    const { data, error } = await supabaseClient.functions.invoke("analyze-worship", {
      body: { user_id: userId, period: statsPeriod, language: isEn() ? "en" : "ar", client_date: today() }
    });

    if (error) throw error;
    if (data && data.debug) console.log("analysis debug", data.debug);
    reportCache[cacheKey()] = data;
 
  } catch (e) {
    console.error("analysis failed", e);
    try {
      const body = await e.context.json();
      console.error("analysis error body:", body);
    } catch (_) {}
  }

  analysisBusy = false;
  render(true);
}

function reportCard(rep) {
  if (analysisBusy) {
    return `<div class="card ai-card"><p>✦ ${L("رفيق يحلّل عباداتك...", "Rafeeq is analyzing your worship...")}</p></div>`;
  }

  if (!rep) {
    return `
      <div class="card ai-card">
        <h2 style="font-size:18px">✦ ${L("تحليل رفيق", "Rafeeq analysis")}</h2>
        <p style="margin:6px 0 14px">${L("اضغط ليحلل رفيق انتظامك في هذه الفترة ويقترح عليك خطوة مناسبة.", "Tap to let Rafeeq analyze your consistency for this period and suggest a fitting step.")}</p>
        <button class="btn" onclick="runAnalysis()">${L("حلّل " + PERIODS[statsPeriod][0], "Analyze " + periodName(statsPeriod).toLowerCase())}</button>
      </div>`;
  }

  if (rep.no_data) {
    return `<div class="card ai-card"><p>${esc(rep.message)}</p>${rep.debug ? `<small style="color:var(--mut)">logs: ${rep.debug.logs_read} · ${rep.debug.period_start} → ${rep.debug.period_end}${rep.debug.statuses_seen.length ? " · status: " + esc(rep.debug.statuses_seen.join(",")) : ""}</small>` : ""}</div>`;
  }

  if (rep.moderation_flag) {
    return `<div class="card ai-card"><p>${L("تعذر تلخيص هذه الفترة بشكل مناسب. يمكنك المحاولة لاحقًا.", "This period could not be summarized properly. Please try again later.")}</p></div>`;
  }

  const h = rep.suggested_habit;
  const when = rep.created_at ? new Date(rep.created_at).toLocaleDateString(isEn() ? "en" : "ar") : "الآن";

  return `
    <div class="card ai-card">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <h2 style="font-size:18px">✦ ${L("تحليل رفيق", "Rafeeq analysis")}</h2>
        <small style="color:var(--mut)">${when}</small>
      </div>

      <p class="ai-summary">${esc(rep.summary)}</p>

      <div class="ai-two">
        <div class="ai-box good"><small>${L("نقطة القوة", "Strength")}</small><p>${esc(rep.strength_area)}</p></div>
        <div class="ai-box focus"><small>${L("التركيز القادم", "Next focus")}</small><p>${esc(rep.focus_area)}</p></div>
      </div>

      ${h ? `
        <div class="habit-suggest">
          <span class="tag">🌱 ${L("عادة مقترحة لك", "Suggested habit")}</span>
          <h3 style="margin-top:8px">${esc(h.name)}</h3>
          <p style="font-size:13px">${esc(h.description)}</p>
          ${h.expected_impact ? `<p style="font-size:13px;margin-top:6px"><b>${L("الأثر المتوقع:", "Expected impact:")}</b> ${esc(h.expected_impact)}</p>` : ""}
          <div class="evidence">
            <small>📖 ${L("الدليل", "Evidence")}</small>
            <p>${esc(h.evidence)}</p>
            <small>${esc(h.evidence_source)}</small>
          </div>
          ${h.moderation_note ? `<p class="mod-note">⚖️ ${L("الاعتدال", "Moderation")}: ${esc(h.moderation_note)}</p>` : ""}
        </div>` : ""}

      <p class="ai-note">${esc(rep.encouragement_note)}</p>

      <button class="btn o small-btn" onclick="runAnalysis()">${L("↻ تحديث التحليل", "↻ Refresh analysis")}</button>
    </div>`;
}

async function statsPage() {
  const [local, streakDone] = await Promise.all([
    localPeriodStats(PERIODS[statsPeriod][1]),
    Promise.resolve(true)
  ]);

  let rep = reportCache[cacheKey()];
  if (rep === undefined) {
    rep = await loadSavedReport(statsPeriod);
    reportCache[cacheKey()] = rep;
  }

  const pct = local && local.prayersPossible
    ? Math.round((local.prayersDone / local.prayersPossible) * 100) : 0;

  return `
    <div class="wrap">
      ${head("▥", L("ميزان رفيق", "Rafeeq Mizan"), L("رفيق يتابع تقدمك ويقترح عليك خطوات تناسب مستواك", "Rafeeq tracks your progress and suggests steps that fit your level"))}

      ${streakCard()}

      <div class="period-tabs">
        ${Object.entries(PERIODS).map(([k, v]) =>
          `<button class="${statsPeriod === k ? "on" : ""}" onclick="setStatsPeriod('${k}')">${periodName(k)}</button>`).join("")}
      </div>

      <div class="card" style="margin-top:14px">
        <h2 style="font-size:17px">📊 ${L("ما حافظت عليه", "What you kept up")}</h2>
        ${local ? `
          <div class="stat-tiles">
            <div class="tile"><b>${local.prayersDone}/${local.prayersPossible}</b><small>${L("الصلوات المؤداة", "Prayers performed")}</small></div>
            <div class="tile"><b>${pct}%</b><small>${L("الانتظام في الفرائض", "Obligatory consistency")}</small></div>
          </div>
          <div class="progress" style="margin-top:12px"><div style="width:${pct}%"></div></div>
          <div class="row w" style="margin-top:14px;gap:8px">
            ${local.kept.length
              ? local.kept.map(x => `<span class="pill kept">✓ ${esc(x.name)} · ${x.days}/${local.days}</span>`).join("")
              : `<p style="font-size:13px">${L("ابدأ بتسجيل عباداتك لتظهر هنا.", "Start logging your worship to see it here.")}</p>`}
          </div>` : `<p>${L("تعذر تحميل بياناتك الآن.", "Could not load your data right now.")}</p>`}
      </div>

      ${reportCard(rep)}
    </div>`;
}