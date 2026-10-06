-- شغّليه مرة واحدة في Supabase > SQL Editor
-- يضيف عمودي الاسم والمستوى لجدول profiles (لو موجودين ما يتأثرون)
alter table public.profiles add column if not exists name  text;
alter table public.profiles add column if not exists level text default 'beginner';

-- كل مستخدم يقرأ ويكتب صفه فقط
alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
