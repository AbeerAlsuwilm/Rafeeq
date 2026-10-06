/* =========================================================
   Auth + Profile | تسجيل الدخول داخل الموقع + بيانات المستخدم
   - تسجيل الدخول/إنشاء الحساب صار نافذة داخل index.html (بدون login.html)
   - الاسم والمستوى محفوظين في جدول profiles في Supabase
   ========================================================= */

// اسم الجدول وعمود ربطه بالمستخدم. لو عمود الربط عندكم اسمه user_id غيّريه هنا فقط.
const PROFILE_TABLE = "profiles";
const PROFILE_KEY = "id";

let currentUser = null;
let currentProfile = null;
let authMode = "login"; // login | signup

const $ = id => document.getElementById(id);

/* ---------- نافذة الدخول ---------- */

function showAuth() {
  $("auth")?.classList.remove("hide");
}

function hideAuth() {
  $("auth")?.classList.add("hide");
}

function setAuthMode(mode) {
  authMode = mode;
  $("tabLogin").classList.toggle("on", mode === "login");
  $("tabSignup").classList.toggle("on", mode === "signup");
  $("authSubmit").textContent = mode === "login" ? "تسجيل الدخول" : "إنشاء حساب";
  $("authPassword").autocomplete = mode === "login" ? "current-password" : "new-password";
  authMessage("");
}

function authMessage(text, ok = false) {
  const el = $("authMsg");
  el.textContent = text;
  el.classList.toggle("ok", ok);
}

function togglePassword() {
  const input = $("authPassword");
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  $("eyeBtn").innerHTML = ico(show ? "eyeOff" : "eye", 18);
}

async function submitAuth(event) {
  if (event) event.preventDefault();

  const email = $("authEmail").value.trim();
  const password = $("authPassword").value;

  if (!email || !password) {
    authMessage("فضلاً أدخل البريد الإلكتروني وكلمة المرور");
    return;
  }

  const btn = $("authSubmit");
  btn.disabled = true;

  try {
    if (authMode === "login") {
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

      if (error) {
        authMessage("بيانات الدخول غير صحيحة");
        console.error(error);
        return;
      }

      await init(); // يدخل التطبيق ثم يسأل عن الاسم لو ما كان محفوظ
      return;
    }

    // إنشاء حساب
    if (password.length < 6) {
      authMessage("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    const { data, error } = await supabaseClient.auth.signUp({ email, password });

    if (error) {
      authMessage(error.message);
      console.error(error);
      return;
    }

    if (data.session) {
      await init(); // التأكيد بالبريد مغلق: دخل مباشرة
    } else {
      setAuthMode("login");
      authMessage("تم إنشاء الحساب. أكّد بريدك الإلكتروني ثم سجّل الدخول.", true);
    }
  } finally {
    btn.disabled = false;
  }
}

/* ---------- الملف الشخصي (profiles) ---------- */

async function loadProfile() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  currentUser = session?.user || null;
  currentProfile = null;

  if (!currentUser) return;

  const { data, error } = await supabaseClient
    .from(PROFILE_TABLE)
    .select("*")
    .eq(PROFILE_KEY, currentUser.id)
    .maybeSingle();

  if (error) {
    console.error("profile read failed", error);
    return;
  }

  currentProfile = data || null;
}

const profileName = () => String(currentProfile?.name || "").trim();

const LEVEL_LABELS = {
  beginner: ["مبتدئ", "Beginner"],
  intermediate: ["متوسط", "Intermediate"],
  advanced: ["متقدم", "Advanced"]
};

function profileLevel() {
  const raw = String(currentProfile?.level || "beginner").trim();
  const known = LEVEL_LABELS[raw.toLowerCase()];
  if (known) return lang === "en" ? known[1] : known[0];
  return raw; // لو المستوى مكتوب نص جاهز نعرضه كما هو
}

// نافذة سؤال الاسم: تظهر أول ما يدخل المستخدم إذا ما عنده اسم محفوظ
function ensureName() {
  if (!currentUser || profileName()) return;
  $("nameModal").classList.remove("hide");
  setTimeout(() => $("nameInput")?.focus(), 50);
}

async function saveName(event) {
  if (event) event.preventDefault();

  const name = $("nameInput").value.trim();
  const msg = $("nameMsg");

  if (name.length < 2) {
    msg.textContent = "اكتب اسمك (حرفين على الأقل)";
    return;
  }

  const btn = $("nameSubmit");
  btn.disabled = true;

  const { data, error } = await supabaseClient
    .from(PROFILE_TABLE)
    .upsert({ [PROFILE_KEY]: currentUser.id, name }, { onConflict: PROFILE_KEY })
    .select()
    .maybeSingle();

  btn.disabled = false;

  if (error) {
    console.error("profile save failed", error);
    msg.textContent = "تعذر حفظ الاسم، حاول مرة ثانية";
    return;
  }

  currentProfile = data || { ...(currentProfile || {}), name };
  msg.textContent = "";
  $("nameModal").classList.add("hide");
  toast(`أهلاً ${name}`);
  render(true);
}


/* ---------- تعبئة أيقونات SVG في index.html ---------- */
function fillIcons() {
  document.querySelectorAll("[data-ico]").forEach(el => {
    el.innerHTML = ico(el.dataset.ico, Number(el.dataset.size) || 18);
  });
}
fillIcons();
