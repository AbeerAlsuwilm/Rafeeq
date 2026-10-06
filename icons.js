/* =========================================================
   Icons | أيقونات SVG موحدة
   بدل الرموز النصية (◷ ☑ ▥ ⚙ ...) التي تظهر مربعات على بعض الأجهزة.
   كلها ترسم بنفس الستايل (خط رفيع) وبلون النص الحالي.
   ========================================================= */

const ICON_PATHS = {
  home:     '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/><path d="M10 20v-5.5h4V20"/>',
  clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  check:    '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><path d="m8.3 12.3 2.6 2.6 4.8-5.2"/>',
  beads:    '<circle cx="12" cy="4.5" r="1.7"/><circle cx="17.6" cy="7.6" r="1.7"/><circle cx="17.6" cy="13.4" r="1.7"/><circle cx="6.4" cy="13.4" r="1.7"/><circle cx="6.4" cy="7.6" r="1.7"/><circle cx="12" cy="16.5" r="1.7"/><path d="M12 18.2V21"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  chart:    '<path d="M4 20h16"/><rect x="5.5" y="11" width="3" height="6.5" rx="1"/><rect x="10.5" y="6" width="3" height="11.5" rx="1"/><rect x="15.5" y="13" width="3" height="4.5" rx="1"/>',
  chat:     '<path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12Z"/><path d="M8.5 11.5h7M8.5 14.5h4"/>',
  hadith:   '<path d="M5 19.5V5a2 2 0 0 1 2-2h12v15H7a2 2 0 0 0-2 1.5Zm0 0A2 2 0 0 0 7 21h12"/><path d="m9.5 10.2 2 2 3.5-4"/>',
  sparkle:  '<path d="M11 3.5l1.9 5.6L18.5 11l-5.6 1.9L11 18.5l-1.9-5.6L3.5 11l5.6-1.9L11 3.5Z"/><path d="M19 16v4M17 18h4"/>',
  gear:     '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
  mail:     '<rect x="3" y="5" width="18" height="14" rx="3.5"/><path d="m3.5 7.5 8.5 6 8.5-6"/>',
  lock:     '<rect x="5" y="11" width="14" height="9.5" rx="2.8"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  eye:      '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>',
  eyeOff:   '<path d="M3 3l18 18"/><path d="M10.6 6a9 9 0 0 1 1.4-.1c6 0 9.5 6.1 9.5 6.1a16 16 0 0 1-2.9 3.6M6.3 7.6A15.7 15.7 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 3.4-.7"/>',
  info:     '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  level:    '<path d="M6 20V14M12 20V9M18 20V4"/>',
  moon:     '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/>',
  x:        '<path d="M4.5 4.5l15 15M19.5 4.5l-15 15"/>'
};

// يرجع وسم SVG جاهز. size بالبكسل.
function ico(name, size = 18) {
  const p = ICON_PATHS[name];
  if (!p) return name; // لو الاسم مو أيقونة (مثلاً إيموجي) نرجعه كما هو
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

// تحويل الرموز القديمة المستخدمة في head() إلى أسماء أيقونات
// حتى لا نحتاج نعدّل features.js و calendar.js
const GLYPH_TO_ICON = {
  "⌂": "home", "◷": "clock", "☑": "check", "📿": "beads", "📅": "calendar",
  "▥": "chart", "✦": "sparkle", "⚙": "gear", "📜": "hadith"
};
