-- ============================================================
-- TYT Hazırlık — Supabase şeması (dashboard metrikleri)
-- Supabase → SQL Editor'da bu dosyayı yapıştırıp "Run" de.
-- ============================================================

-- 1) Kullanıcı özet istatistikleri — kullanıcı başına TEK satır.
--    Dashboard kartlarını besler: Bugün çözülen, Günlük seri,
--    Ortalama net, Tamamlanan konu.
create table if not exists public.user_stats (
  user_id          uuid primary key references auth.users (id) on delete cascade,
  solved_today     integer      not null default 0,
  daily_goal       integer      not null default 50,
  streak_days      integer      not null default 0,
  avg_net          numeric(5,2) not null default 0,
  completed_topics integer      not null default 0,
  updated_at       timestamptz  not null default now()
);

-- 2) Ders bazlı ilerleme — kullanıcı + ders başına TEK satır.
--    İlerleme çubuklarını (ProgressRow) besler.
--    percent otomatik hesaplanır (correct / total).
create table if not exists public.subject_progress (
  id         bigint generated always as identity primary key,
  user_id    uuid    not null references auth.users (id) on delete cascade,
  subject    text    not null,   -- 'turkce','matematik','geometri','sosyal','fen'
  correct    integer not null default 0,
  total      integer not null default 0,
  percent    integer generated always as (
               case when total > 0 then round((correct::numeric / total) * 100) else 0 end
             ) stored,
  updated_at timestamptz not null default now(),
  unique (user_id, subject)
);

-- ---------- Row Level Security (herkes yalnızca kendi verisini görür) ----------
alter table public.user_stats        enable row level security;
alter table public.subject_progress  enable row level security;

create policy "user_stats: kendi satırını oku"   on public.user_stats
  for select using (auth.uid() = user_id);
create policy "user_stats: kendi satırını ekle"  on public.user_stats
  for insert with check (auth.uid() = user_id);
create policy "user_stats: kendi satırını güncelle" on public.user_stats
  for update using (auth.uid() = user_id);

create policy "subject_progress: kendi satırlarını oku"   on public.subject_progress
  for select using (auth.uid() = user_id);
create policy "subject_progress: kendi satırlarını ekle"  on public.subject_progress
  for insert with check (auth.uid() = user_id);
create policy "subject_progress: kendi satırlarını güncelle" on public.subject_progress
  for update using (auth.uid() = user_id);

-- ---------- Yeni kullanıcı kaydolunca otomatik user_stats satırı aç ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.user_stats (user_id) values (new.id)
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- (İSTEĞE BAĞLI) Test verisi — kendi user id'ni koyup çalıştır.
-- Supabase → Authentication → Users'tan bir kullanıcının UUID'sini al.
-- ============================================================
-- insert into public.user_stats (user_id, solved_today, streak_days, avg_net, completed_topics)
--   values ('BURAYA-USER-UUID', 42, 7, 68.5, 23)
--   on conflict (user_id) do update set
--     solved_today = excluded.solved_today, streak_days = excluded.streak_days,
--     avg_net = excluded.avg_net, completed_topics = excluded.completed_topics;
--
-- insert into public.subject_progress (user_id, subject, correct, total) values
--   ('BURAYA-USER-UUID','turkce',   74, 100),
--   ('BURAYA-USER-UUID','matematik',58, 100),
--   ('BURAYA-USER-UUID','sosyal',   81, 100),
--   ('BURAYA-USER-UUID','fen',      46, 100)
--   on conflict (user_id, subject) do update set
--     correct = excluded.correct, total = excluded.total;
