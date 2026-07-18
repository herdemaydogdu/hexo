-- ============================================================
-- TYT Hazırlık — Supabase şeması v2 (Grup B: canlı veri modeli)
-- Supabase → SQL Editor'a yapıştır → Run.
-- (schema.sql'i zaten çalıştırdın; bu onun ÜZERİNE ekler.)
-- ============================================================

-- 1) SORULAR — tüm giriş yapmış kullanıcılar okur; yazma yok (seed/admin).
create table if not exists public.questions (
  id          bigint generated always as identity primary key,
  subject     text     not null,          -- 'turkce','matematik','geometri','sosyal','fen'
  topic       text,                        -- konu etiketi (opsiyonel)
  difficulty  smallint not null default 2, -- 1 kolay · 2 orta · 3 zor
  q           text     not null,           -- soru metni
  options     jsonb    not null,           -- ["şık1","şık2",...]
  answer      smallint not null,           -- doğru şık indeksi (0'dan başlar)
  explanation text,
  created_at  timestamptz not null default now()
);
alter table public.questions enable row level security;
create policy "questions: giriş yapınca oku" on public.questions
  for select using (auth.role() = 'authenticated');

-- 2) CEVAP KAYITLARI — her çözülen soru bir satır.
create table if not exists public.attempts (
  id          bigint generated always as identity primary key,
  user_id     uuid    not null references auth.users(id) on delete cascade,
  question_id bigint  references public.questions(id) on delete set null,
  subject     text,
  is_correct  boolean not null,
  answered_at timestamptz not null default now()
);
alter table public.attempts enable row level security;
create policy "attempts: kendi oku"  on public.attempts for select using (auth.uid() = user_id);
create policy "attempts: kendi ekle" on public.attempts for insert with check (auth.uid() = user_id);

-- 3) GÜNLÜK AKTİVİTE — "bugün çözülen" ve "seri" tarih bazlı hesaplansın diye.
create table if not exists public.daily_activity (
  user_id uuid    not null references auth.users(id) on delete cascade,
  day     date    not null default current_date,
  solved  integer not null default 0,
  primary key (user_id, day)
);
alter table public.daily_activity enable row level security;
create policy "daily: kendi oku"      on public.daily_activity for select using (auth.uid() = user_id);
create policy "daily: kendi ekle"     on public.daily_activity for insert with check (auth.uid() = user_id);
create policy "daily: kendi güncelle" on public.daily_activity for update using (auth.uid() = user_id);

-- 4) YANLIŞ DEFTERİ
create table if not exists public.wrong_book (
  user_id     uuid   not null references auth.users(id) on delete cascade,
  question_id bigint not null references public.questions(id) on delete cascade,
  added_at    timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.wrong_book enable row level security;
create policy "wrong: kendi oku"  on public.wrong_book for select using (auth.uid() = user_id);
create policy "wrong: kendi ekle" on public.wrong_book for insert with check (auth.uid() = user_id);
create policy "wrong: kendi sil"  on public.wrong_book for delete using (auth.uid() = user_id);

-- ============================================================
-- ÖRNEK SORULAR (özgün · Soru Çöz sayfası çalışsın diye başlangıç havuzu)
-- ============================================================
insert into public.questions (subject, topic, difficulty, q, options, answer, explanation) values
('matematik','İşlem Önceliği',1,'12 + 15 × 2 işleminin sonucu kaçtır?',
  '["27","42","54","30","39"]'::jsonb,1,'Önce çarpma: 15×2=30, sonra 12+30=42.'),
('matematik','Denklem',2,'Bir sayının 3 katının 7 fazlası 28 ise bu sayı kaçtır?',
  '["5","6","7","8","9"]'::jsonb,2,'3x+7=28 → 3x=21 → x=7.'),
('turkce','Yazım Kuralları',1,'Aşağıdaki kelimelerden hangisi doğru yazılmıştır?',
  '["yalnız","yanlız","yalnış","yannız","yalınız"]'::jsonb,0,'Doğru yazım: "yalnız".'),
('turkce','Sözcükte Anlam',2,'Aşağıdakilerden hangisi eş anlamlı sözcük çiftidir?',
  '["ak - kara","yıl - sene","büyük - küçük","gel - git","aç - tok"]'::jsonb,1,'"yıl" ve "sene" eş anlamlıdır; diğerleri zıt anlamlıdır.'),
('fen','Isı ve Sıcaklık',1,'Saf suyun deniz seviyesinde kaynama sıcaklığı kaç °C''dir?',
  '["50","90","100","120","0"]'::jsonb,2,'Deniz seviyesinde saf su 100 °C''de kaynar.'),
('fen','Madde',2,'Aşağıdakilerden hangisi bir element DEĞİLDİR?',
  '["Demir","Oksijen","Su","Altın","Bakır"]'::jsonb,2,'Su (H₂O) bir bileşiktir, element değildir.'),
('sosyal','İnkılap Tarihi',1,'Türkiye Cumhuriyeti hangi yıl ilan edilmiştir?',
  '["1920","1921","1922","1923","1924"]'::jsonb,3,'Cumhuriyet 29 Ekim 1923''te ilan edilmiştir.'),
('sosyal','Coğrafya',2,'Aşağıdakilerden hangisi bir kıta değildir?',
  '["Asya","Avrupa","Afrika","Akdeniz","Okyanusya"]'::jsonb,3,'Akdeniz bir denizdir; kıta değildir.'),
('matematik','Yüzde',3,'Bir ürünün 200 TL olan fiyatına önce %20 zam, sonra %10 indirim yapılıyor. Son fiyat kaç TL''dir?',
  '["210","216","220","224","240"]'::jsonb,1,'200×1,20=240; 240×0,90=216 TL.'),
('turkce','Paragraf',3,'"Okumak, insanın ufkunu genişletir." cümlesinde vurgulanan temel düşünce nedir?',
  '["Okumak zordur","Okumak bakış açısını zenginleştirir","Kitaplar pahalıdır","Herkes okumalı","Okumak eğlencelidir"]'::jsonb,1,'Cümle, okumanın kişinin bakış açısını/ufkunu genişlettiğini vurgular.');
