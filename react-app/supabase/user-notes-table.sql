-- Tek seferlik: kullanıcıların kişisel notları (konu bazında). Supabase → SQL Editor → Run.
create table if not exists public.user_notes (
  user_id    uuid not null references auth.users(id) on delete cascade,
  subject    text not null,
  unit_id    text not null,
  body       text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, subject, unit_id)
);
alter table public.user_notes enable row level security;
drop policy if exists "user_notes own"    on public.user_notes;
drop policy if exists "user_notes own ins" on public.user_notes;
drop policy if exists "user_notes own upd" on public.user_notes;
drop policy if exists "user_notes own del" on public.user_notes;
create policy "user_notes own"     on public.user_notes for select using (auth.uid() = user_id);
create policy "user_notes own ins" on public.user_notes for insert with check (auth.uid() = user_id);
create policy "user_notes own upd" on public.user_notes for update using (auth.uid() = user_id);
create policy "user_notes own del" on public.user_notes for delete using (auth.uid() = user_id);
