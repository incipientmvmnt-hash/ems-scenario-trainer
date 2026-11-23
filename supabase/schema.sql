-- MEDIC7 accounts. Run this once in the Supabase SQL editor.
-- Each signed-in user can read and write only their own rows.

create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  subscription_status text not null default 'pro',
  created_at timestamptz not null default now()
);

create table if not exists public.answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  scenario_id text,
  question_index integer,
  question_type text,
  is_correct boolean,
  time_taken_ms integer,
  category text,
  difficulty text,
  selected_answer jsonb,
  created_at timestamptz not null default now()
);

create index if not exists answers_user_created_idx
  on public.answers (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.answers enable row level security;

revoke all on public.profiles from anon;
revoke all on public.answers from anon;
grant select, insert, update on public.profiles to authenticated;
grant select, insert on public.answers to authenticated;

drop policy if exists "read own profile" on public.profiles;
drop policy if exists "insert own profile" on public.profiles;
drop policy if exists "update own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select to authenticated using (auth.uid() = user_id);
create policy "insert own profile" on public.profiles
  for insert to authenticated with check (auth.uid() = user_id);
create policy "update own profile" on public.profiles
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "read own answers" on public.answers;
drop policy if exists "insert own answers" on public.answers;
create policy "read own answers" on public.answers
  for select to authenticated using (auth.uid() = user_id);
create policy "insert own answers" on public.answers
  for insert to authenticated with check (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, display_name, subscription_status)
  values (new.id, split_part(coalesce(new.email, 'user'), '@', 1), 'pro')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
