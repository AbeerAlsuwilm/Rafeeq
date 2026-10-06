/* =========================================================
   RAFEEQ | رفيق
   Main JavaScript
   ========================================================= */

/* =========================
   Storage Helpers
========================= */

const S = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : JSON.parse(value);
  } catch (e) {
    return defaultValue;
  }
};

const W = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};


/* =========================
   Language
========================= */

const translations = {
  ar: {
    home: "الرئيسية",
    prayer: "أوقات الصلاة",
    day: "يومي مع رفيق",
    stats: "ميزان رفيق",
    calendar: "التقويم",
    ai: "رفيقك",
    hadith: "التحقق من الحديث",
    settings: "الإعدادات",

    worship: "العبادة",
    services: "الخدمات",
    help: "المساعدة",

    appTagline: "رفيقك نحو التدرج والاعتدال",

    welcome: "مرحبًا بك في رفيق",
    heroTitle: "خطوات صغيرة، أثر كبير",
    heroText:
      "رفيق يساعدك على بناء عاداتك التعبدية بالتدرج، ويتابع تقدمك ويقترح لك خطوات مناسبة لك.",
    startNow: "ابدأ يومك",

    today: "اليوم",
    nextPrayer: "الصلاة القادمة",
    prayerTimes: "مواقيت اليوم",
    completed: "أُديت",
    notYet: "لم يحن وقتها",
    markDone: "تم",
    markUndone: "إلغاء الإتمام",

    location: "الموقع",
    useLocation: "استخدام موقعي الحالي",
    useMakkah: "استخدام مكة المكرمة",
    locating: "جارٍ تحديد موقعك...",
    locationDenied: "تعذر الوصول إلى موقعك",
    currentLocation: "موقعك الحالي",
    makkah: "مكة المكرمة",

    language: "اللغة",
    clock: "نظام الوقت",
    hour12: "12 ساعة",
    hour24: "24 ساعة",

    analysis: "ميزان رفيق",
    analysisSubtitle: "رفيق يتابع تقدمك ويعطيك ملاحظات مناسبة لك",
    todayAnalysis: "تحليل اليوم",
    priority: "الأولوية الآن",
    observation: "ملاحظة رفيق",
    suggestions: "عادات مقترحة لك",
    evidence: "الدليل",
    noData: "ابدأ بتسجيل عباداتك حتى يتمكن رفيق من تحليل تقدمك.",

    obligatory: "فرض",
    voluntary: "نافلة",

    aiAnalysis: "تحليل بالذكاء الاصطناعي",
    aiReady:
      "سيحلل رفيق نمط عباداتك ويقترح خطوات بسيطة تناسب تقدمك.",

    dailyQuran: "الورد اليومي للقرآن",
    unit: "وحدة الورد",
    pages: "صفحات",
    amount: "مقدار اليوم",
    reminder: "وقت تذكير القرآن",

    save: "حفظ الإعدادات",
    saved: "تم حفظ الإعدادات",

    sharia: "مرجع رفيق",
    shariaSubtitle: "اسأل سؤالك الشرعي، أو تحقق من صحة حديث، بالاستناد إلى مصادر موثقة.",
    shariaShort: "اسأل سؤالك الشرعي أو تحقق من حديث بالاستناد إلى مصادر موثقة",
    settingsSubtitle: "بياناتك وتفضيلاتك",
    tabAsk: "اسأل رفيق",
    tabHadith: "التحقق من الحديث",

    myData: "بياناتي",
    dataName: "الاسم",
    dataEmail: "البريد الإلكتروني",
    dataLevel: "المستوى",
    notSet: "غير محدد",

    aboutUs: "من نحن",
    aboutIdea:
      "رفيق موقع يرافق المسلم، وخاصة المسلم الجديد، في بناء عباداته وعاداته اليومية بخطى معتدلة ومتدرجة، بدعم من تحليل ذكاء اصطناعي دوري، وبمصادر شرعية موثقة.",
    aboutTeam:
      "نحن طالبات، وعملنا على رفيق كمشروع نتمنى أن ينفع به الله من يبدأ طريقه مع العبادة.",
    aboutContactLabel: "للتواصل:",

    askRafeeq: "اسأل رفيق",
    askPlaceholder: "اكتب سؤالك هنا...",
    searchSources: "جارٍ البحث في المصادر الموثقة...",

    hadithTitle: "التحقق من الحديث",
    hadithPlaceholder: "ضع نص الحديث هنا...",
    verify: "تحقق",

    dayTitle: "يومي مع رفيق",
    daySubtitle: "سجل عباداتك اليومية وتابع تقدمك.",
    noRecords: "لا توجد سجلات بعد.",

    account: "حسابك",
    subscriber: "مشترك",
    logout: "تسجيل الخروج",

    sources: "المصادر المعتمدة",
    sourcesText:
      "تستند المعلومات الشرعية في رفيق إلى مصادر موثوقة يمكن التحقق منها.",
    sourceHadithLabel: "الأحاديث",
    sourceHadithName: "موسوعة الأحاديث النبوية (HadeethEnc)",
    sourceHadithUrl: "https://hadeethenc.com",
    sourceFatwaLabel: "الفتاوى",
    sourceFatwaName: "ابن باز – نور على الدرب",
    sourceFatwaUrl: "https://binbaz.org.sa/fatwas/kind/2",

    footerAbout: "عن رفيق",
    footerAboutText:
      "رفيق يساعد المسلم على بناء عاداته التعبدية بالتدرج والاعتدال.",

    footerServices: "الخدمات",
    footerSupport: "المساعدة",

    contact: "تواصل معنا",
    contactEmail: "البريد الإلكتروني",
    contactTwitter: "تويتر (X)",

    prayerNotStarted:
      "لم يدخل وقت هذه الصلاة بعد. يمكنك تسجيلها بعد دخول وقتها.",

    prayerError:
      "تعذر جلب مواقيت الصلاة حاليًا. تأكد من اتصالك بالإنترنت.",

    aiPriority:
      "الأولوية للفرائض. حاول تثبيت الصلوات المفروضة قبل إضافة المزيد من النوافل.",

    allGood:
      "ما شاء الله، يبدو أن أساس عبادتك اليوم منتظم. يمكنك إضافة عادة بسيطة بالتدرج.",

    beginnerAdvice:
      "ابدأ بخطوة بسيطة وثابتة بدل إضافة عادات كثيرة في وقت واحد.",

    evidencePrayer:
      "قال الله تعالى: «إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا».",

    evidenceQuran:
      "قال النبي ﷺ: «أحب الأعمال إلى الله أدومها وإن قل».",

    evidenceDuha:
      "ثبتت مشروعية صلاة الضحى في أحاديث صحيحة.",

    evidenceWitr:
      "قال النبي ﷺ: «اجعلوا آخر صلاتكم بالليل وترًا».",

    evidenceAdhkar:
      "وردت أذكار صحيحة تقال بعد الصلوات المفروضة.",

    quranHabit: "قراءة صفحة واحدة من القرآن",
    duhaHabit: "صلاة ركعتي الضحى",
    witrHabit: "المحافظة على صلاة الوتر",
    adhkarHabit: "أذكار ما بعد الصلاة",
    morningHabit: "أذكار الصباح",
    eveningHabit: "أذكار المساء",

    adhkarTitle: "الأذكار",
    adhkarSubtitle: "حافظ على أذكارك اليومية بالتدرج.",
    postPrayerAdhkar: "أذكار ما بعد الصلاة",
    morningAdhkar: "أذكار الصباح",
    eveningAdhkar: "أذكار المساء",

    missedPrayer: "صلاة فائتة",
    focusPrayer: "هذه الصلاة هي الأولوية الآن",

    nextPrayerPriority: "الصلاة القادمة",
    nextPrayerFocus: "استعد لها وحافظ عليها في وقتها",

    prayerEnded: "انتهى وقتها",

    progressExcellent: "تقدمك جيد جدًا",
    progressGood: "تقدمك جيد",
    progressStart: "أنت في بداية الطريق",

    footerPrivacy: "الخصوصية",
    footerTerms: "الشروط",
    footerContact: "تواصل معنا"
  },

  en: {
    home: "Home",
    prayer: "Prayer Times",
    day: "My Day",
    stats: "Rafeeq Mizan",
    calendar: "Calendar",
    ai: "Your Rafeeq",
    hadith: "Hadith Verification",
    settings: "Settings",

    worship: "Worship",
    services: "Services",
    help: "Help",

    appTagline: "Your companion toward balance and consistency",

    welcome: "Welcome to Rafeeq",
    heroTitle: "Small steps, meaningful impact",
    heroText:
      "Rafeeq helps you build worship habits gradually, track your progress, and receive personalized suggestions.",
    startNow: "Start your day",

    today: "Today",
    nextPrayer: "Next prayer",
    prayerTimes: "Today's prayer times",
    completed: "Completed",
    notYet: "Not yet",
    markDone: "Done",
    markUndone: "Mark as incomplete",

    location: "Location",
    useLocation: "Use my current location",
    useMakkah: "Use Makkah",
    locating: "Finding your location...",
    locationDenied: "Unable to access your location",
    currentLocation: "Your current location",
    makkah: "Makkah",

    language: "Language",
    clock: "Time format",
    hour12: "12-hour",
    hour24: "24-hour",

    analysis: "Rafeeq Mizan",
    analysisSubtitle:
      "Rafeeq tracks your progress and gives you personalized guidance.",
    todayAnalysis: "Today's analysis",
    priority: "Current priority",
    observation: "Rafeeq's note",
    suggestions: "Suggested habits for you",
    evidence: "Evidence",
    noData:
      "Start recording your worship so Rafeeq can analyze your progress.",

    obligatory: "Obligatory",
    voluntary: "Voluntary",

    aiAnalysis: "AI-powered analysis",
    aiReady:
      "Rafeeq analyzes your worship pattern and suggests simple steps based on your progress.",

    dailyQuran: "Daily Quran reading",
    unit: "Reading unit",
    pages: "Pages",
    amount: "Daily amount",
    reminder: "Quran reminder",

    save: "Save settings",
    saved: "Settings saved",

    sharia: "Rafeeq Reference",
    shariaSubtitle: "Ask a religious question, or verify a hadith, based on trusted sources.",
    shariaShort: "Ask a religious question or verify a hadith, based on trusted sources",
    settingsSubtitle: "Your data and preferences",
    tabAsk: "Ask Rafeeq",
    tabHadith: "Hadith check",

    myData: "My data",
    dataName: "Name",
    dataEmail: "Email",
    dataLevel: "Level",
    notSet: "Not set",

    aboutUs: "About us",
    aboutIdea:
      "Rafeeq is a website that accompanies Muslims, especially new Muslims, in building daily worship habits step by step and in moderation, supported by periodic AI analysis and trusted Islamic sources.",
    aboutTeam:
      "We are female students, and we built Rafeeq as a project, hoping it benefits anyone starting their journey with worship.",
    aboutContactLabel: "Contact:",

    askRafeeq: "Ask Rafeeq",
    askPlaceholder: "Write your question...",
    searchSources: "Searching trusted sources...",

    hadithTitle: "Hadith Verification",
    hadithPlaceholder: "Enter the hadith text...",
    verify: "Verify",

    dayTitle: "My Day",
    daySubtitle: "Record your daily worship and track your progress.",
    noRecords: "No records yet.",

    account: "Your account",
    subscriber: "Subscriber",
    logout: "Log out",

    sources: "Trusted sources",
    sourcesText:
      "Rafeeq's Islamic information is based on trusted sources that can be verified.",
    sourceHadithLabel: "Hadith",
    sourceHadithName: "HadeethEnc – Encyclopedia of Hadith",
    sourceHadithUrl: "https://hadeethenc.com",
    sourceFatwaLabel: "Fatwas",
    sourceFatwaName: "Ibn Baz – Nur ala al-Darb",
    sourceFatwaUrl: "https://binbaz.org.sa/fatwas/kind/2",

    footerAbout: "About Rafeeq",
    footerAboutText:
      "Rafeeq helps Muslims build worship habits gradually and consistently.",

    footerServices: "Services",
    footerSupport: "Help",

    contact: "Contact us",
    contactEmail: "Email",
    contactTwitter: "Twitter (X)",

    prayerNotStarted:
      "This prayer time has not started yet. You can record it after its time begins.",

    prayerError:
      "Unable to load prayer times. Please check your internet connection.",

    aiPriority:
      "Obligatory prayers come first. Focus on establishing the obligatory prayers before adding more voluntary acts.",

    allGood:
      "Your worship foundation looks consistent today. You can gradually add a simple habit.",

    beginnerAdvice:
      "Start with one simple and consistent step instead of adding many habits at once.",

    evidencePrayer:
      "The Quran states that prayer is prescribed at appointed times.",

    evidenceQuran:
      "The Prophet ﷺ taught that the most beloved deeds are those done consistently, even if small.",

    evidenceDuha:
      "The permissibility and virtue of Duha prayer are established in authentic narrations.",

    evidenceWitr:
      "The Prophet ﷺ instructed Muslims to make the Witr prayer the last prayer of the night.",

    evidenceAdhkar:
      "Authentic supplications have been reported to be recited after obligatory prayers.",

    quranHabit: "Read one page of the Quran",
    duhaHabit: "Pray two Rak'ahs of Duha",
    witrHabit: "Maintain the Witr prayer",
    adhkarHabit: "Recite the post-prayer adhkar",
    morningHabit: "Morning adhkar",
    eveningHabit: "Evening adhkar",

    adhkarTitle: "Adhkar",
    adhkarSubtitle: "Build your daily adhkar habit gradually.",
    postPrayerAdhkar: "Post-prayer adhkar",
    morningAdhkar: "Morning adhkar",
    eveningAdhkar: "Evening adhkar",

    missedPrayer: "Missed prayer",
    focusPrayer: "This prayer is your priority now",

    nextPrayerPriority: "Next prayer",
    nextPrayerFocus: "Prepare for it and maintain it on time",

    prayerEnded: "Its time has ended",

    progressExcellent: "Your progress is very good",
    progressGood: "Your progress is good",
    progressStart: "You are at the beginning of your journey",

    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerContact: "Contact"
  }
};

let lang = S("lang", "ar");
let clockMode = S("clockMode", "24");

const tr = key => {
  return translations[lang]?.[key] || translations.ar[key] || key;
};

const isRTL = () => lang === "ar";

function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL() ? "rtl" : "ltr";
  document.body.dir = isRTL() ? "rtl" : "ltr";
  document.title = lang === "ar" ? "رفيق" : "Rafeeq";
}

function setLanguage(value) {
  lang = value;
  W("lang", lang);
  applyLanguage();
  render();
}


/* =========================
   Navigation
========================= */

const NAV = [
  ["home", "home", "home"],
  ["section", "worship"],
  ["prayer", "prayer", "clock"],
  ["day", "day", "check"],
  ["adhkar", "adhkarTitle", "beads"],
  ["calendar", "calendar", "calendar"],
  ["section", "services"],
  ["stats", "stats", "chart"],
  ["ai", "sharia", "chat"],
  ["section", "help"],
  ["settings", "settings", "gear"]
];

let shariaTab = "ask"; // التبويب المفتوح في خدمة اسأل رفيق / التحقق من الحديث

let page = location.hash.slice(1) || "home";

// روابط #hadith القديمة تفتح الخدمة الموحدة على تبويب الحديث
if (page === "hadith") {
  shariaTab = "hadith";
  page = "ai";
}

function go(target) {
  location.hash = target;
}

function nav() {
  const el = document.getElementById("nav");
  if (!el) return;

  el.innerHTML = NAV.map(item => {
    if (item[0] === "section") {
      return `<div class="sec">${tr(item[1])}</div>`;
    }

    const active = page === item[0] ? "on" : "";
    const homeClass = item[0] === "home" ? "home" : "";

    return `
      <a class="${active} ${homeClass}" href="#${item[0]}">
        <span>${ico(item[2])}</span>
        <b>${tr(item[1])}</b>
      </a>
    `;
  }).join("");
}


/* =========================
   Date / Time
========================= */

function today() {
  const d = new Date();

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${y}-${m}-${day}`;
}

function apiDate() {
  const d = new Date();

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

function formatTime(time) {
  if (!time) return "—";

  const clean = String(time).split(" ")[0];
  const parts = clean.split(":");

  let hour = Number(parts[0]);
  const minute = String(parts[1]).padStart(2, "0");

  if (clockMode === "24") {
    return `${String(hour).padStart(2, "0")}:${minute}`;
  }

  const suffix =
    lang === "ar"
      ? hour >= 12 ? "م" : "ص"
      : hour >= 12 ? "PM" : "AM";

  hour = hour % 12;

  if (hour === 0) hour = 12;

  return `${hour}:${minute} ${suffix}`;
}

function setClockMode(mode) {
  clockMode = mode;
  W("clockMode", clockMode);
  render();
}


/* =========================
   Location
========================= */

const DEFAULT_LOCATION = {
  type: "default",
  lat: 21.4225,
  lon: 39.8262,
  name: "مكة المكرمة"
};

let locationData = S("locationData", DEFAULT_LOCATION);

if (!locationData) {
  locationData = DEFAULT_LOCATION;
  W("locationData", locationData);
}

function locationName() {
  return locationData?.name || tr("makkah");
}


/* =========================
   Prayer Times
========================= */

const PRAYERS = [
  ["Fajr", "fajr"],
  ["Dhuhr", "dhuhr"],
  ["Asr", "asr"],
  ["Maghrib", "maghrib"],
  ["Isha", "isha"]
];

const prayerLabels = {
  fajr: {
    ar: "الفجر",
    en: "Fajr"
  },
  dhuhr: {
    ar: "الظهر",
    en: "Dhuhr"
  },
  asr: {
    ar: "العصر",
    en: "Asr"
  },
  maghrib: {
    ar: "المغرب",
    en: "Maghrib"
  },
  isha: {
    ar: "العشاء",
    en: "Isha"
  }
};

function prayerName(key) {
  return prayerLabels[key]?.[lang] || prayerLabels[key]?.ar || key;
}

let prayerData = S("prayerData", null);

function cleanPrayerTime(value) {
  if (!value) return null;
  return String(value).split(" ")[0];
}

async function fetchPrayerTimes() {
  const url =
    `https://api.aladhan.com/v1/timings/${apiDate()}` +
    `?latitude=${locationData.lat}` +
    `&longitude=${locationData.lon}` +
    `&method=4`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Prayer API error");
  }

  const json = await response.json();

  if (!json.data || !json.data.timings) {
    throw new Error("Invalid prayer data");
  }

  const timings = json.data.timings;

  prayerData = {
    date: today(),
    lat: locationData.lat,
    lon: locationData.lon,
    timezone: json.data.meta?.timezone || "Asia/Riyadh",
    timings: {
      Fajr: cleanPrayerTime(timings.Fajr),
      Dhuhr: cleanPrayerTime(timings.Dhuhr),
      Asr: cleanPrayerTime(timings.Asr),
      Maghrib: cleanPrayerTime(timings.Maghrib),
      Isha: cleanPrayerTime(timings.Isha)
    }
  };

  W("prayerData", prayerData);

  return prayerData;
}

async function refreshPrayerTimes(force = false) {
  const sameLocation =
    prayerData &&
    Math.abs(Number(prayerData.lat) - Number(locationData.lat)) < 0.0001 &&
    Math.abs(Number(prayerData.lon) - Number(locationData.lon)) < 0.0001;

  const valid =
    prayerData &&
    prayerData.date === today() &&
    sameLocation;

  if (valid && !force) {
    return;
  }

  try {
    await fetchPrayerTimes();
    render(true);
  } catch (error) {
    console.error(error);
    toast(tr("prayerError"));
  }
}


/* =========================
   Reverse Geocoding
========================= */

async function getLocationName(lat, lon) {
  try {
    const url =
      `https://nominatim.openstreetmap.org/reverse` +
      `?format=jsonv2` +
      `&lat=${lat}` +
      `&lon=${lon}` +
      `&accept-language=ar`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Geocoding error");
    }

    const data = await response.json();
    const address = data.address || {};

    return (
      address.city ||
      address.town ||
      address.village ||
      address.municipality ||
      address.county ||
      tr("currentLocation")
    );
  } catch (error) {
    console.error(error);
    return tr("currentLocation");
  }
}

async function useCurrentLocation() {
  if (!navigator.geolocation) {
    toast(tr("locationDenied"));
    return;
  }

  toast(tr("locating"));

  navigator.geolocation.getCurrentPosition(
    async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const name = await getLocationName(lat, lon);

      locationData = {
        type: "current",
        lat,
        lon,
        name
      };

      W("locationData", locationData);

      prayerData = null;
      W("prayerData", null);

      render();

      await refreshPrayerTimes(true);
    },

    error => {
      console.error(error);
      toast(tr("locationDenied"));
    },

    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 3600000
    }
  );
}

async function useMakkah() {
  locationData = DEFAULT_LOCATION;

  W("locationData", locationData);

  prayerData = null;
  W("prayerData", null);

  render();

  await refreshPrayerTimes(true);
}


/* =========================
   Prayer State
========================= */

function getPrayerState() {
  const state = S("prayerState", null);

  if (!state || state.date !== today()) {
    return {
      date: today(),
      done: {}
    };
  }

  return state;
}

function savePrayerState(state) {
  W("prayerState", state);
}

function makePrayerDate(time, baseDate = new Date()) {
  if (!time) return null;

  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date(baseDate);

  date.setHours(hours, minutes, 0, 0);

  return date;
}

function prayerHasStarted(prayerKey) {
  if (!prayerData?.timings?.[prayerKey]) {
    return false;
  }

  const prayerDate = makePrayerDate(
    prayerData.timings[prayerKey]
  );

  return new Date() >= prayerDate;
}

function currentPrayer() {
  if (!prayerData?.timings) return null;

  const now = new Date();

  for (let i = PRAYERS.length - 1; i >= 0; i--) {
    const [key] = PRAYERS[i];

    const time = prayerData.timings[key];

    if (!time) continue;

    const prayerDate = makePrayerDate(time, now);

    if (now >= prayerDate) {
      return {
        key,
        time,
        date: prayerDate
      };
    }
  }

  return null;
}

function prayerTimeHasEnded(prayerKey) {
  if (!prayerData?.timings?.[prayerKey]) {
    return false;
  }

  const now = new Date();

  const index = PRAYERS.findIndex(
    ([key]) => key === prayerKey
  );

  if (index === -1) return false;

  const currentTime = makePrayerDate(
    prayerData.timings[prayerKey],
    now
  );

  if (now < currentTime) {
    return false;
  }

  if (index < PRAYERS.length - 1) {
    const nextKey = PRAYERS[index + 1][0];

    const nextTime = makePrayerDate(
      prayerData.timings[nextKey],
      now
    );

    return now >= nextTime;
  }

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const fajrTomorrow = makePrayerDate(
    prayerData.timings.Fajr,
    tomorrow
  );

  return now >= fajrTomorrow;
}

function getMissedPrayer() {
  const state = getPrayerState();

  for (const [key] of PRAYERS) {
    if (
      prayerTimeHasEnded(key) &&
      !state.done[key]
    ) {
      return key;
    }
  }

  return null;
}

function nextPrayer() {
  if (!prayerData?.timings) {
    return null;
  }

  const now = new Date();

  for (const [key] of PRAYERS) {
    const time = prayerData.timings[key];

    if (!time) continue;

    const prayerDate = makePrayerDate(time, now);

    if (prayerDate > now) {
      return {
        key,
        time,
        date: prayerDate
      };
    }
  }

  const fajr = makePrayerDate(
    prayerData.timings.Fajr,
    now
  );

  fajr.setDate(fajr.getDate() + 1);

  return {
    key: "Fajr",
    time: prayerData.timings.Fajr,
    date: fajr
  };
}

function prayerKeyToLabel(key) {
  const map = {
    Fajr: "fajr",
    Dhuhr: "dhuhr",
    Asr: "asr",
    Maghrib: "maghrib",
    Isha: "isha"
  };

  return map[key] || key;
}

function tp(prayerKey) {
  if (!prayerData?.timings) {
    toast(tr("prayerError"));
    return;
  }

  if (!prayerHasStarted(prayerKey)) {
    toast(tr("prayerNotStarted"));
    return;
  }

  const state = getPrayerState();

  state.done[prayerKey] = !state.done[prayerKey];

  savePrayerState(state);
  syncLog(prayerKey, state.done[prayerKey]);

  render(true);
}


/* =========================
   Prayer UI
========================= */

function timesGrid() {
  if (!prayerData?.timings) {
    return `
      <div class="card">
        <p>${tr("searchSources")}</p>
      </div>
    `;
  }

  const state = getPrayerState();
  const next = nextPrayer();

  return `
    <div class="times">
      ${PRAYERS.map(([key, labelKey]) => {
        const time = prayerData.timings[key];
        const done = !!state.done[key];
        const started = prayerHasStarted(key);
        const isNext = next?.key === key;

        const disabled =
          !started && !done;

        return `
          <button
            class="time ${isNext ? "cur" : ""} ${disabled ? "disabled" : ""}"
            onclick="tp('${key}')"
            ${disabled ? "disabled" : ""}
          >
            <div class="ck ${done ? "" : "off"}">
              ${done ? "✓" : "◷"}
            </div>

            <b>${prayerName(labelKey)}</b>

            <div style="font-size:13px;color:var(--mut);margin-top:4px">
              ${formatTime(time)}
            </div>

            <small style="color:var(--g);display:block;margin-top:5px">
              ${
                done
                  ? tr("completed") + " ✓"
                  : started
                    ? ""
                    : tr("notYet")
              }
            </small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function prayerCard() {
  return `
    <div class="card row" style="justify-content:space-between;background:#eef0dd">
      <div>
        <small style="color:var(--mut)">
          ${tr("nextPrayer")}
        </small>

        <h2 id="np">—</h2>

        <small
          id="nt2"
          style="color:var(--mut)"
        ></small>
      </div>

      <div class="count" id="cd">
        --:--:--
      </div>
    </div>

    <div class="card" style="margin-top:14px">
      <div
        class="row"
        style="justify-content:space-between;flex-wrap:wrap"
      >
        <h2 style="font-size:17px">
          ☾ ${tr("prayerTimes")}
        </h2>

        <span class="pill">
          📍 ${locationName()}
        </span>
      </div>

      <div style="margin-top:14px">
        ${timesGrid()}
      </div>
    </div>
  `;
}


/* =========================
   Worship Data
========================= */

const WORSHIP_HABITS = {
  Fajr: {
    key: "Fajr",
    type: "obligatory",
    labelAr: "الفجر"
  },

  Dhuhr: {
    key: "Dhuhr",
    type: "obligatory",
    labelAr: "الظهر"
  },

  Asr: {
    key: "Asr",
    type: "obligatory",
    labelAr: "العصر"
  },

  Maghrib: {
    key: "Maghrib",
    type: "obligatory",
    labelAr: "المغرب"
  },

  Isha: {
    key: "Isha",
    type: "obligatory",
    labelAr: "العشاء"
  },

  Duha: {
    key: "Duha",
    type: "voluntary",
    labelAr: "الضحى"
  },

  Quran: {
    key: "Quran",
    type: "voluntary",
    labelAr: "القرآن"
  },

  AdhkarAfterPrayer: {
    key: "AdhkarAfterPrayer",
    type: "voluntary",
    labelAr: "أذكار ما بعد الصلاة"
  },

  MorningAdhkar: {
    key: "MorningAdhkar",
    type: "voluntary",
    labelAr: "أذكار الصباح"
  },

  EveningAdhkar: {
    key: "EveningAdhkar",
    type: "voluntary",
    labelAr: "أذكار المساء"
  },

  Witr: {
    key: "Witr",
    type: "voluntary",
    labelAr: "الوتر"
  }
};


/* =========================
   Daily Worship Storage
========================= */

function getDailyHabits() {
  const data = S("dailyHabits", null);

  if (!data || data.date !== today()) {
    return {
      date: today(),
      habits: {}
    };
  }

  return data;
}

function saveDailyHabits(data) {
  W("dailyHabits", data);
}

function setHabit(key, value = true) {
  const data = getDailyHabits();

  data.habits[key] = value;

  saveDailyHabits(data);
  syncLog(key, value);

  render(true);
}


/* =========================
   AI ANALYSIS ENGINE
========================= */

function collectUserWorshipData() {
  const prayerState = getPrayerState();
  const daily = getDailyHabits();

  const data = {
    date: today(),

    location: locationName(),

    obligatory: {
      Fajr: !!prayerState.done.Fajr,
      Dhuhr: !!prayerState.done.Dhuhr,
      Asr: !!prayerState.done.Asr,
      Maghrib: !!prayerState.done.Maghrib,
      Isha: !!prayerState.done.Isha
    },

    voluntary: {
      Duha: !!daily.habits.Duha,
      Witr: !!daily.habits.Witr,
      Quran: !!daily.habits.Quran,
      AdhkarAfterPrayer:
        !!daily.habits.AdhkarAfterPrayer,
      MorningAdhkar:
        !!daily.habits.MorningAdhkar,
      EveningAdhkar:
        !!daily.habits.EveningAdhkar
    }
  };

  return data;
}


/* =========================
   AI Rules
========================= */

const AI_RULES = [
  "Obligatory acts have priority over voluntary acts.",
  "Do not encourage adding many habits at once.",
  "Suggestions should match the user's current progress.",
  "Do not invent religious evidence.",
  "Religious evidence must come from a trusted source.",
  "Use supportive and non-judgmental language.",
  "Focus on gradual and sustainable progress."
];


/* =========================
   Local AI Fallback
========================= */

function generateLocalAIAnalysis() {
  const data = collectUserWorshipData();

  const obligatory = data.obligatory;
  const voluntary = data.voluntary;

  const completedObligatory = Object.keys(obligatory)
    .filter(key => obligatory[key]);

  const completedVoluntary = Object.keys(voluntary)
    .filter(key => voluntary[key]);

  const missedPrayer = getMissedPrayer();

  if (missedPrayer) {
    const label = prayerName(
      prayerKeyToLabel(missedPrayer)
    );

    return {
      type: "priority",

      title: tr("missedPrayer"),

      priority: {
        name: label,
        type: tr("obligatory")
      },

      observation:
        `${label}: ${tr("prayerEnded")}. ` +
        tr("focusPrayer"),

      suggestions: [
        {
          key: "adhkar",
          title: tr("adhkarHabit"),
          evidence: tr("evidenceAdhkar")
        },
        {
          key: "quran",
          title: tr("quranHabit"),
          evidence: tr("evidenceQuran")
        }
      ],

      completedObligatory,
      completedVoluntary
    };
  }

  const next = nextPrayer();

  if (next) {
    const nextName = prayerName(
      prayerKeyToLabel(next.key)
    );

    return {
      type: "next",

      title: tr("nextPrayerPriority"),

      priority: {
        name: nextName,
        type: tr("obligatory")
      },

      observation:
        `${tr("nextPrayerPriority")}: ${nextName}. ` +
        tr("nextPrayerFocus"),

      suggestions:
        completedVoluntary.length === 0
          ? [
              {
                key: "quran",
                title: tr("quranHabit"),
                evidence: tr("evidenceQuran")
              },
              {
                key: "adhkar",
                title: tr("adhkarHabit"),
                evidence: tr("evidenceAdhkar")
              }
            ]
          : [],

      completedObligatory,
      completedVoluntary
    };
  }

  if (
    completedObligatory.length >= 5 &&
    completedVoluntary.length === 0
  ) {
    return {
      type: "growth",

      title: tr("allGood"),

      priority: {
        name: tr("voluntary"),
        type: tr("voluntary")
      },

      observation: tr("beginnerAdvice"),

      suggestions: [
        {
          key: "quran",
          title: tr("quranHabit"),
          evidence: tr("evidenceQuran")
        },
        {
          key: "adhkar",
          title: tr("adhkarHabit"),
          evidence: tr("evidenceAdhkar")
        }
      ],

      completedObligatory,
      completedVoluntary
    };
  }

  return {
    type: "start",

    title: tr("progressStart"),

    priority: {
      name: tr("obligatory"),
      type: tr("obligatory")
    },

    observation: tr("beginnerAdvice"),

    suggestions: [
      {
        key: "quran",
        title: tr("quranHabit"),
        evidence: tr("evidenceQuran")
      }
    ],

    completedObligatory,
    completedVoluntary
  };
}


/* =========================
   REAL AI API PLACEHOLDER
========================= */

async function generateAIAnalysis() {
  const result = generateLocalAIAnalysis();

  return result;
}


/* =========================
   Analytics UI
========================= */

function renderSuggestion(item) {
  return `
    <div class="fatwa" style="margin-top:10px">

      <div
        class="row"
        style="justify-content:space-between;align-items:flex-start"
      >
        <div>
          <span class="tag">
            ${tr("voluntary")}
          </span>

          <h3 style="margin:8px 0 5px;font-size:16px">
            ${item.title}
          </h3>
        </div>

        <span style="font-size:20px">
          🌱
        </span>
      </div>

      <p style="font-size:13px">
        ${item.evidence}
      </p>

      <button
        class="btn o"
        style="margin-top:10px;font-size:12px"
        onclick="toast('${tr("evidence")}')"
      >
        📖 ${tr("evidence")}
      </button>

    </div>
  `;
}

async function renderAnalytics() {
  const result = await generateAIAnalysis();

  return `
    <div class="wrap">

      ${head(
        "▥",
        tr("analysis"),
        tr("analysisSubtitle")
      )}

      <div
        class="card"
        style="background:#eef0dd"
      >

        <div class="row">
          <div
            style="
              width:42px;
              height:42px;
              border-radius:12px;
              background:var(--g);
              color:#fff;
              display:grid;
              place-items:center;
              font-size:20px;
            "
          >
            ✦
          </div>

          <div>
            <h2 style="font-size:18px">
              ${tr("aiAnalysis")}
            </h2>

            <p style="font-size:13px">
              ${tr("aiReady")}
            </p>
          </div>
        </div>

      </div>


      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:18px">
          ${tr("todayAnalysis")}
        </h2>

        <div
          style="
            margin-top:14px;
            padding:14px;
            border-radius:14px;
            background:var(--bg);
          "
        >

          <span class="tag">
            ${result.title}
          </span>

          <p style="margin-top:10px">
            ${result.observation}
          </p>

        </div>

      </div>


      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:18px">
          ${tr("priority")}
        </h2>

        <div
          style="
            margin-top:12px;
            padding:14px;
            border:1px solid var(--line);
            border-radius:14px;
          "
        >

          <div
            class="row"
            style="justify-content:space-between"
          >

            <div>
              <small style="color:var(--mut)">
                ${result.priority.type}
              </small>

              <h3 style="margin:4px 0 0">
                ${result.priority.name}
              </h3>
            </div>

            <span style="font-size:24px">
              🎯
            </span>

          </div>

        </div>

      </div>


      ${
        result.suggestions?.length
          ? `
            <div
              class="card"
              style="margin-top:14px"
            >

              <h2 style="font-size:18px">
                🌱 ${tr("suggestions")}
              </h2>

              <p style="font-size:13px;margin-top:4px">
                ${tr("beginnerAdvice")}
              </p>

              <div style="margin-top:12px">
                ${result.suggestions
                  .map(renderSuggestion)
                  .join("")}
              </div>

            </div>
          `
          : ""
      }


      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          📊 ${tr("today")}
        </h2>

        <div
          class="row w"
          style="margin-top:12px"
        >

          <span class="pill">
            ${tr("obligatory")}:
            ${result.completedObligatory.length}/5
          </span>

          <span class="pill">
            ${tr("voluntary")}:
            ${result.completedVoluntary.length}
          </span>

        </div>

      </div>

    </div>
  `;
}


/* =========================
   Head Component
========================= */

function head(icon, title, subtitle) {
  return `
    <div class="ph">

      <i>${ico(GLYPH_TO_ICON[icon] || icon, 22)}</i>

      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>

    </div>
  `;
}


/* =========================
   Home
========================= */

function home() {
  return `
    <div class="wrap">

      <div class="hero">

        <div>

          <span class="pill">
            ${tr("welcome")}
          </span>

          <h1>
            ${tr("heroTitle")}
          </h1>

          <p>
            ${tr("heroText")}
          </p>

          <button
            class="btn"
            style="margin-top:18px"
            onclick="go('day')"
          >
            ${tr("startNow")} →
          </button>

        </div>

        <div class="orb">

          <div class="ring"></div>
          <div class="ring b"></div>

          <div class="c">
            رفيق
          </div>

          <div
            class="n"
            style="top:8%;left:12%"
          >
            ☾
          </div>

          <div
            class="n"
            style="top:20%;right:5%"
          >
            📖
          </div>

          <div
            class="n"
            style="bottom:12%;left:8%"
          >
            ✦
          </div>

          <div
            class="n"
            style="bottom:7%;right:18%"
          >
            🤲
          </div>

        </div>

      </div>


      <div class="mid">

        <small>
          RAFEEQ
        </small>

        <h2>
          ${tr("aiAnalysis")}
        </h2>

        <p>
          ${tr("aiReady")}
        </p>

      </div>


      ${prayerCard()}

      ${streakCard()}


      <div
        class="mid"
        style="margin-top:44px"
      >

        <small>
          RAFEEQ
        </small>

        <h2>
          ${tr("analysis")}
        </h2>

        <p>
          ${tr("analysisSubtitle")}
        </p>

      </div>


      <div class="grid">

        <div
          class="card svc"
          onclick="go('stats')"
        >
          <i style="background:var(--g)">
            ${ico("chart", 26)}
          </i>

          <h3>
            ${tr("analysis")}
          </h3>

          <p>
            ${tr("analysisSubtitle")}
          </p>

          <span class="ai">
            AI
          </span>
        </div>


        <div
          class="card svc"
          onclick="go('ai')"
        >
          <i style="background:#8a645a">
            ${ico("chat", 26)}
          </i>

          <h3>
            ${tr("sharia")}
          </h3>

          <p>
            ${tr("shariaShort")}
          </p>

          <span class="ai">
            AI
          </span>
        </div>


        <div
          class="card svc"
          onclick="go('day')"
        >
          <i style="background:#9c7d39">
            ${ico("check", 26)}
          </i>

          <h3>
            ${tr("dayTitle")}
          </h3>

          <p>
            ${tr("daySubtitle")}
          </p>
        </div>

      </div>

    </div>
  `;
}


/* =========================
   Prayer Page
========================= */

function prayer() {
  return `
    <div class="wrap">

      ${head(
        "◷",
        tr("prayer"),
        `${tr("location")}: ${locationName()}`
      )}

      ${prayerCard()}

    </div>
  `;
}


/* =========================
   My Day
========================= */

function prayerDayItem(key, label) {
  const prayers = getPrayerState();

  const done = !!prayers.done[key];
  const started = prayerHasStarted(key);

  return `
    <div
      class="log"
      style="
        gap:10px;
        align-items:center;
      "
    >

      <span style="flex:1">
        ${prayerName(label)}
      </span>

      ${
        done
          ? `
            <button
              class="chip on"
              onclick="tp('${key}')"
            >
              ✓ ${tr("completed")}
            </button>
          `
          : started
            ? `
              <button
                class="btn"
                style="
                  padding:7px 13px;
                  font-size:12px;
                "
                onclick="tp('${key}')"
              >
                ${tr("markDone")}
              </button>
            `
            : `
              <span
                style="
                  color:var(--mut);
                  font-size:12px;
                "
              >
                ${tr("notYet")}
              </span>
            `
      }

    </div>
  `;
}

function day() {
  const data = getDailyHabits();

  return `
    <div class="wrap">

      ${head(
        "☑",
        tr("dayTitle"),
        tr("daySubtitle")
      )}


      <!-- Obligatory Prayers -->

      <div class="card">

        <h2 style="font-size:18px">
          ${tr("obligatory")}
        </h2>

        <p style="font-size:13px">
          ${tr("aiPriority")}
        </p>

        <div style="margin-top:12px">

          ${prayerDayItem("Fajr", "fajr")}
          ${prayerDayItem("Dhuhr", "dhuhr")}
          ${prayerDayItem("Asr", "asr")}
          ${prayerDayItem("Maghrib", "maghrib")}
          ${prayerDayItem("Isha", "isha")}

        </div>

      </div>


      ${adhkarDayCard()}


      <!-- Voluntary Habits -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:18px">
          ${tr("voluntary")}
        </h2>

        <div style="margin-top:12px">

          ${[
            ["Duha", tr("duhaHabit")],
            ["Witr", tr("witrHabit")],
            ["Quran", tr("quranHabit")]
          ].map(([key, label]) => {

            const checked = !!data.habits[key];

            return `
              <label
                class="log"
                style="
                  cursor:pointer;
                  align-items:center;
                "
              >

                <span style="flex:1">
                  ${label}
                </span>

                <input
                  type="checkbox"
                  ${checked ? "checked" : ""}
                  onchange="setHabit('${key}',this.checked)"
                  style="
                    width:20px;
                    height:20px;
                    accent-color:var(--g);
                  "
                >

              </label>
            `;

          }).join("")}

        </div>

      </div>


      <!-- Quran -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          📖 ${tr("dailyQuran")}
        </h2>

        <div
          class="row w"
          style="margin-top:10px"
        >

          <div style="flex:1">
            <small>${tr("unit")}</small>

            <select>
              <option>
                ${tr("pages")}
              </option>
            </select>
          </div>

          <div style="flex:1">
            <small>${tr("amount")}</small>

            <input
              type="number"
              value="1"
              min="1"
            >
          </div>

        </div>


        <div style="margin-top:10px">

          <small>
            ${tr("reminder")}
          </small>

          <input
            type="time"
            value="21:00"
          >

        </div>


        <button
          class="btn dk"
          style="margin-top:12px"
          onclick="toast('${tr("saved")}')"
        >
          ${tr("save")}
        </button>

      </div>

    </div>
  `;
}


/* =========================
   Settings
========================= */

function settings() {
  return `
    <div class="wrap">

      ${head(
        "⚙",
        tr("settings"),
        tr("settingsSubtitle")
      )}


      <!-- My Data -->

      <div class="card">

        <h2 style="font-size:17px">
          ${ico("user", 20)} ${tr("myData")}
        </h2>

        <div style="margin-top:12px">

          <div class="log" style="align-items:center">
            <span style="flex:1;color:var(--mut)">${tr("dataName")}</span>
            <b>${esc(profileName() || tr("notSet"))}</b>
          </div>

          <div class="log" style="align-items:center">
            <span style="flex:1;color:var(--mut)">${tr("dataEmail")}</span>
            <b dir="ltr">${esc(currentUser?.email || tr("notSet"))}</b>
          </div>

          <div class="log" style="align-items:center">
            <span style="flex:1;color:var(--mut)">${tr("dataLevel")}</span>
            <b>${esc(profileLevel())}</b>
          </div>

        </div>

        <button
          class="btn o"
          style="margin-top:14px;color:#a33"
          onclick="logout()"
        >
          ${tr("logout")}
        </button>

      </div>


      <!-- Language -->

      <div class="card" style="margin-top:14px">

        <h2 style="font-size:17px">
          🌐 ${tr("language")}
        </h2>

        <div
          class="row w"
          style="margin-top:10px"
        >

          <button
            class="chip ${lang === "ar" ? "on" : ""}"
            onclick="setLanguage('ar')"
          >
            العربية
          </button>

          <button
            class="chip ${lang === "en" ? "on" : ""}"
            onclick="setLanguage('en')"
          >
            English
          </button>

        </div>

      </div>


      <!-- Clock -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          🕐 ${tr("clock")}
        </h2>

        <div
          class="row w"
          style="margin-top:10px"
        >

          <button
            class="chip ${clockMode === "12" ? "on" : ""}"
            onclick="setClockMode('12')"
          >
            ${tr("hour12")}
          </button>

          <button
            class="chip ${clockMode === "24" ? "on" : ""}"
            onclick="setClockMode('24')"
          >
            ${tr("hour24")}
          </button>

        </div>

      </div>


      <!-- Location -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          📍 ${tr("location")}
        </h2>

        <p style="margin-top:5px">
          ${locationName()}
        </p>

        <div
          class="row w"
          style="margin-top:12px"
        >

          <button
            class="btn"
            onclick="useCurrentLocation()"
          >
            📍 ${tr("useLocation")}
          </button>

          <button
            class="btn o"
            onclick="useMakkah()"
          >
            ☾ ${tr("useMakkah")}
          </button>

        </div>

      </div>


      <!-- Sources -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          ${tr("sources")}
        </h2>

        <p style="margin-top:8px">
          ${tr("sourcesText")}
        </p>

        <div class="src-list">
          <a class="src-item" href="${tr("sourceHadithUrl")}" target="_blank" rel="noopener">
            <small>${tr("sourceHadithLabel")}</small>
            <b>${tr("sourceHadithName")}</b>
            <span dir="ltr">hadeethenc.com</span>
          </a>

          <a class="src-item" href="${tr("sourceFatwaUrl")}" target="_blank" rel="noopener">
            <small>${tr("sourceFatwaLabel")}</small>
            <b>${tr("sourceFatwaName")}</b>
            <span dir="ltr">binbaz.org.sa</span>
          </a>
        </div>

      </div>


      <!-- About us -->

      <div
        class="card"
        style="margin-top:14px"
      >

        <h2 style="font-size:17px">
          ${ico("info", 20)} ${tr("aboutUs")}
        </h2>

        <p style="font-size:13.5px;line-height:1.9;margin-top:10px">
          ${tr("aboutIdea")}
        </p>

        <p style="font-size:13.5px;line-height:1.9;margin-top:8px">
          ${tr("aboutTeam")}
        </p>

        <p style="font-size:13.5px;line-height:1.9;margin-top:8px">
          ${tr("aboutContactLabel")}
          <a href="mailto:rafeeq23u@gmail.com" dir="ltr" class="inline-link">rafeeq23u@gmail.com</a>
        </p>

      </div>

    </div>
  `;
}


/* =========================
   Ask Rafeeq + Hadith (one service, two tabs)
========================= */

function setShariaTab(tab) {
  shariaTab = tab;
  render();
}

function ai() {
  return `
    <div class="wrap">

      ${head(
        "chat",
        tr("sharia"),
        tr("shariaSubtitle")
      )}

      ${askPanel()}

    </div>
  `;
}

function askPanel() {
  return `
      <div class="card" style="margin-top:14px">

        <h2 style="font-size:18px">
          ${tr("askRafeeq")}
        </h2>

        <textarea
          id="q"
          placeholder="${tr("askPlaceholder")}"
        ></textarea>

        <button
          class="btn"
          style="margin-top:10px"
          onclick="ask()"
        >
          ${tr("askRafeeq")}
        </button>

        <div id="ans"></div>

      </div>
  `;
}


async function ask() {
  const input = document.getElementById("q");

  if (!input) return;

  const q = input.value.trim();

  if (!q) {
    toast(tr("askPlaceholder"));
    return;
  }

  const answer = document.getElementById("ans");

  if (!answer) return;

  answer.innerHTML = `
    <div class="fatwa">
      <b>رفيق يبحث...</b>
      <p style="margin-top:8px">
        جاري البحث في الفتاوى والأحاديث الموثقة.
      </p>
    </div>
  `;

  try {
    // ==========================================
    // التأكد من وجود جلسة المستخدم
    // ==========================================
    const {
      data: { session },
      error: sessionError
    } = await supabaseClient.auth.getSession();

    if (sessionError) {
      console.error("Session error:", sessionError);
      throw new Error("تعذر التحقق من تسجيل الدخول");
    }

    if (!session?.access_token) {
      throw new Error("يجب تسجيل الدخول أولًا");
    }

    // ==========================================
    // استدعاء ask-fatwa وإرسال JWT
    // ==========================================
    const { data, error } =
      await supabaseClient.functions.invoke(
        "ask-fatwa",
        {
          body: {
            question: q,
            type: "all"
          },
          headers: {
            Authorization: `Bearer ${session.access_token}`
          }
        }
      );

    if (error) {
      console.error(
        "ask-fatwa function error:",
        error
      );

      throw error;
    }

    if (!data || !data.success) {
      throw new Error(
        data?.error || "حدث خطأ أثناء البحث"
      );
    }

    // ==========================================
    // عرض الإجابة
    // ==========================================
    answer.innerHTML = `
      <div class="fatwa">

        <b>الإجابة</b>

        <div style="margin-top:12px; line-height:1.9;">
          ${data.answer
            .replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            )
            .replace(
              /^- (.*)$/gm,
              "• $1"
            )
            .replace(
              /\n/g,
              "<br>"
            )}
        </div>

        ${
          data.sources?.length
            ? `
              <div style="margin-top:20px;">
                <b>المصادر</b>

                <ul style="margin-top:8px;">
                  ${data.sources
                    .map(
                      (source) => `
                        <li style="margin-bottom:8px;">
                          ${
                            source.url
                              ? `<a
                                  href="${source.url}"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  ${
                                    source.title ||
                                    "المصدر"
                                  }
                                </a>`
                              : source.title ||
                                "المصدر"
                          }
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              </div>
            `
            : ""
        }

      </div>
    `;

  } catch (error) {

    console.error(
      "ask-fatwa error:",
      error
    );

    answer.innerHTML = `
      <div class="fatwa">
        <b>حدث خطأ</b>

        <p style="margin-top:8px;">
          ${
            error?.message ||
            "تعذر الحصول على الإجابة. حاولي مرة أخرى."
          }
        </p>
      </div>
    `;
  }
}
/* =========================
   Hadith
========================= */

function hadithPanel() {
  return `
      <div class="card" style="margin-top:14px">

        <h2 style="font-size:18px">
          ${tr("hadithTitle")}
        </h2>

        <textarea
          id="hadithInput"
          placeholder="${tr("hadithPlaceholder")}"
        ></textarea>

        <button
          class="btn"
          style="margin-top:10px"
          onclick="verifyHadith()"
        >
          ${tr("verify")}
        </button>

        <div id="hadithResult"></div>

      </div>
  `;
}

function verifyHadith() {
  const input =
    document.getElementById("hadithInput");

  const result =
    document.getElementById("hadithResult");

  if (!input || !result) return;

  if (!input.value.trim()) {
    toast(tr("hadithPlaceholder"));
    return;
  }

  result.innerHTML = `
    <div class="fatwa">

      <b>
        ${tr("searchSources")}
      </b>

      <p style="margin-top:8px">
        هذه الواجهة جاهزة للربط بمحرك
        التحقق من الأحاديث والمصادر الموثوقة.
      </p>

    </div>
  `;
}


/* =========================
   Footer
========================= */

function foot() {
  return `
    <footer
      style="
        margin-top:50px;
        padding:30px 24px 22px;
        border-top:1px solid var(--line);
        background:linear-gradient(
          180deg,
          rgba(238,240,221,.45),
          rgba(255,255,255,.9)
        );
        border-radius:24px 24px 0 0;
      "
    >

      <div
        class="in"
        style="
          max-width:1100px;
          margin:0 auto;
        "
      >

        <div
          style="
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            gap:30px;
            flex-wrap:wrap;
          "
        >

          <div style="max-width:380px">

            <div
              style="
                display:flex;
                align-items:center;
                gap:10px;
              "
            >

              <div
                style="
                  width:42px;
                  height:42px;
                  border-radius:13px;
                  background:var(--g);
                  color:#fff;
                  display:grid;
                  place-items:center;
                  font-size:19px;
                  box-shadow:0 8px 20px rgba(0,0,0,.08);
                "
              >
                ${ico("moon", 22)}
              </div>

              <div>
                <h2 style="font-size:21px;margin:0">
                  رفيق
                </h2>

                <small style="color:var(--mut)">
                  ${tr("appTagline")}
                </small>
              </div>

            </div>

            <p
              style="
                font-size:13px;
                color:var(--mut);
                line-height:1.8;
                margin-top:14px;
              "
            >
              ${tr("footerAboutText")}
            </p>

          </div>


          <div
            style="
              display:grid;
              grid-template-columns:repeat(2,minmax(130px,1fr));
              gap:35px;
            "
          >

            <div>

              <b class="foot-title">
                ${tr("footerServices")}
              </b>

              <a class="footer-link" href="#prayer">
                ${tr("prayer")}
              </a>

              <a class="footer-link" href="#stats">
                ${tr("stats")}
              </a>

              <a class="footer-link" href="#ai">
                ${tr("sharia")}
              </a>

            </div>


            <div>

              <b class="foot-title">
                ${tr("contact")}
              </b>

              <a class="footer-link" href="mailto:rafeeq23u@gmail.com">
                ${ico("mail", 16)}
                <span dir="ltr">rafeeq23u@gmail.com</span>
              </a>

              <a
                class="footer-link"
                href="https://x.com/rafeeq23u"
                target="_blank"
                rel="noopener"
              >
                ${ico("x", 16)}
                <span dir="ltr">@rafeeq23u</span>
              </a>

            </div>

          </div>

        </div>


        <div
          style="
            height:1px;
            background:var(--line);
            margin:25px 0 17px;
          "
        ></div>


        <div
          style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px;
            flex-wrap:wrap;
            color:var(--mut);
            font-size:12px;
          "
        >

          <span>
            © ${new Date().getFullYear()} Rafeeq
          </span>

        </div>

      </div>

    </footer>
  `;
}


/* =========================
   Page Map
========================= */

const P = {
  home,
  prayer,
  day,
  adhkar: adhkarPage,
  calendar: calendarPage,
  stats: statsPage,
  ai,
  settings
};


/* =========================
   Toast
========================= */

let toastTimer;

function toast(message) {
  const el = document.getElementById("t");

  if (!el) return;

  el.textContent = message;
  el.classList.add("s");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    el.classList.remove("s");
  }, 2600);
}


/* =========================
   Countdown
========================= */

let tm;

function tick() {
  const countdown = document.getElementById("cd");

  if (!countdown) return;

  const next = nextPrayer();

  if (!next) {
    countdown.textContent = "--:--:--";

    const name = document.getElementById("np");
    const time = document.getElementById("nt2");

    if (name) name.textContent = "—";
    if (time) time.textContent = "—";

    return;
  }

  const now = new Date();

  let seconds = Math.max(
    0,
    Math.floor(
      (next.date.getTime() - now.getTime()) / 1000
    )
  );

  const hours = Math.floor(seconds / 3600);

  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const f = value =>
    String(value).padStart(2, "0");

  countdown.textContent =
    `${f(hours)}:${f(minutes)}:${f(secs)}`;

  const name = document.getElementById("np");
  const time = document.getElementById("nt2");

  if (name) {
    name.textContent =
      prayerName(
        next.key === "Fajr"
          ? "fajr"
          : next.key === "Dhuhr"
            ? "dhuhr"
            : next.key === "Asr"
              ? "asr"
              : next.key === "Maghrib"
                ? "maghrib"
                : "isha"
      );
  }

  if (time) {
    time.textContent =
      formatTime(next.time);
  }
}


/* =========================
   Render
========================= */

async function render(keepScroll = false) {
  const main = document.getElementById("m");

  if (!main) return;

  const oldScroll = main.scrollTop;

  applyLanguage();
  nav();

  if (page !== "adhkar") adhkarOpen = null;

  const renderer = P[page] || P.home;

  const html = await renderer();

  main.innerHTML =
    html + foot();

  if (keepScroll) {
    main.scrollTop = oldScroll;
  }

  clearInterval(tm);

  tick();

  tm = setInterval(tick, 1000);
}


/* =========================
   Navigation Events
========================= */

window.onhashchange = () => {
  page = location.hash.slice(1) || "home";

  if (page === "hadith") {
    shariaTab = "hadith";
    page = "ai";
  }

  const aside = document.querySelector("aside");

  if (aside) {
    aside.classList.remove("open");
  }

  render();
};


/* =========================
   Supabase Authentication
========================= */

/*
   التأكد من أن المستخدم مسجل دخوله.
   إذا لم يكن هناك Session يتم تحويله إلى صفحة تسجيل الدخول.
*/

async function requireAuth() {
  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (!session) {
    showAuth();
    return false;
  }

  return true;
}


/*
   تسجيل الخروج من Supabase
*/

async function logout() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error(error);
    toast(error.message);
    return;
  }

  currentUser = null;
  currentProfile = null;
  document.getElementById("m").innerHTML = "";
  setAuthMode("login");
  showAuth();
}


/* =========================
   Initial Load
========================= */

async function init() {
  const authenticated = await requireAuth();

  if (!authenticated) {
    return;
  }

  hideAuth();

  applyLanguage();

  await loadProfile();

  await loadTodayFromLogs();

  await render();

  ensureName();

  refreshStreak();

  await refreshPrayerTimes(false);

  tick();
}

init();