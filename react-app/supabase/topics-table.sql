-- Tek seferlik: topics tablosunu oluştur (VERİ yok — veriyi seed.mjs yükler).
-- Supabase → SQL Editor → çalıştır. Diğer tabloları (questions/attempts/…) zaten oluşturdun.
create table if not exists public.topics (
  subject        text not null,
  unit_id        text not null,
  name           text not null,
  sort_order     int  not null default 0,
  question_count int  not null default 0,
  content        text,
  primary key (subject, unit_id)
);
alter table public.topics enable row level security;
drop policy if exists "topics: giris yapinca oku" on public.topics;
create policy "topics: giris yapinca oku" on public.topics
  for select using (auth.role() = 'authenticated');
