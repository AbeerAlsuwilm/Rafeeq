const SUPABASE_URL = "https://nmrnyizqydmkscbjhxhy.supabase.co";
const SUPABASE_KEY = "sb_publishable_6Psa-JOrjf46VduIknY3Zw_4nUe4rm0";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);