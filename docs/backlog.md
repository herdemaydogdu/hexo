# Backlog — Öncelikli İşler

Keşif/pazarlama ekiplerinin ürettiği öneriler burada önceliklenir; orkestra-sefi buradan iş dağıtır.

> **Aktif plan (2026-07-06):** docs/plan-2026-07-06.md. is-gelistirme kararı: Faz 1 (ürün) ve Faz 2 (içerik) **paralel**. Uygulama sırası: M2 Tarih şeması → #9 rozet → Geometri kuyruğu → #2/#7 zayıf-alan → #3/#4.

## Pazarlamadan gelen (2026-07-02 rakip/pazar analizi)
| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 1 | ~~SEO başlık/meta + site haritası~~ **YAPILDI (2026-07-02, is-gelistirme)**: index.html head (meta, OG, Twitter, JSON-LD) + robots.txt + sitemap.xml | Ürün/SEO | Yüksek/Orta | ✅ |
| 2 | ~~Deneme sonrası konu bazlı analiz ekranı (zayıf alan)~~ **YAPILDI (2026-07-06, is-gelistirme)** — bkz. #7 | Ürün | Yüksek/Orta | ✅ |
| 3 | Paylaşılabilir net/rozet sonuç kartı (büyüme döngüsü) | Ürün | Orta/Orta | tasarim-qa |
| 4 | Yanlış defterinden hafif adaptif tekrar önerisi | Ürün | Orta/Yüksek | orkestra-sefi |
| 5 | Sitedeki özgün içerikten kısa video/sosyal malzeme | Pazarlama | Orta/Düşük | icerik-pazarlama |

## Pazarlamadan gelen (2026-07-06 rakip analizi)
| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 6 | ~~Ana sayfada "Ücretsiz + kalibre zorluk (%20/40/40)" konum mesajı~~ **YAPILDI (2026-07-06, is-gelistirme)**: yeni ziyaretçiye (henüz oturumu yok) dashboard'da `.pos-banner` konum bandı — "Tamamen ücretsiz · kayıt yok · reklam yok · %20/40/40 kalibre zorluk". app.js + style.css, ?v=78 | Konumlandırma | Yüksek/Düşük | ✅ |
| 7 | ~~Deneme sonrası konu bazlı zayıf-alan ekranı — **ücretsiz**~~ **YAPILDI (2026-07-06, is-gelistirme)**: sonuç ekranına `weakAreaSection` — session.answers ders+üniteye göre gruplanır, en zayıf ≤4 konu (%70 altı) çubuk+yüzdeyle listelenir, "Bu konuyu çalış" → `startUnitPractice` (10 soruluk açıklamalı hedefli test). app.js + style.css, `?v=81`. İzole node ile mantık+sözdizimi doğrulandı. | Ürün | Yüksek/Orta | ✅ |
| 8 | Ücretsiz TYT deneme SEO sayfaları ("TYT deneme çöz", "net hesapla") | İçerik/SEO | Yüksek/Orta | icerik-pazarlama |
| 9 | ~~"Özgün + ÖSYM'ye kalibre" güven rozeti/mesajı~~ **YAPILDI (2026-07-06, is-gelistirme)**: quiz kurulum ekranına `.trust-badge` — "Tüm sorular özgündür — soru bankalarından kopyalanmaz; ÖSYM'ye kalibre %20/40/40". app.js + style.css, `?v=79` | ✅ | ✅ |
| 10 | Net-artışı temalı kısa video/sosyal malzeme (TikTok/YouTube, oyunlaştırma boşluğu) | Pazarlama | Orta/Düşük | icerik-pazarlama |

> Gerekçe: docs/pazarlama/rakip-analiz-2026-07-06.md. Rakip fiyat kutupları: Doping ~₺38–45B/yıl, Kunduz ~₺650–2.500/ay; ücretsiz+kalibre+net-takibi boşluğu doğrulandı.

## Pazarlamadan gelen (2026-07-13 rakip analizi)
> Gerekçe: docs/pazarlama/rakip-analiz-2026-07-13.md. **Değişim:** "ücretsiz + oyunlaştırma + net-takibi" boşluğu kapanıyor — YKS Cepte (düello/sıralama/istatistik) ve Dersigo (arkadaşla yarış/deneme) bunu ücretsiz sunmaya başladı; Raunt ücretsiz koç analizi; Test Bank ~₺80/ay ucuz abonelik kutbu. Vurgu oyunlaştırmadan → özgün soru + %20/40/40 kalibre + ölçeklenen otomatik analize kaymalı.

| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 11 | ~~Ana sayfa/konum mesajını "ücretsiz oyunlaştırma"dan **"özgün + %20/40/40 kalibre zorluk"** vurgusuna kaydır~~ **YAPILDI (2026-07-13, is-gelistirme)**: 10.07 redesign'ında kaldırılan konum bandı, yeni ziyaretçiye (oturum yok) dashboard'da `.pos-banner` olarak bu haftanın vurgusuyla yeniden eklendi — lead "Her soru özgün — bankalardan kopya değil; zorluk seni sınava kalibre eder (%20/40/40)", çipler: Özgün üretim · %20/40/40 kalibre zorluk · Ücretsiz/kayıtsız/reklamsız. app.js + style.css, `?v=102`. rapor.js temiz; mount-eskimesi nedeniyle syntax kontrolü Read ile doğrulandı. | ✅ | ✅ |
| 12 | "Koç beklemeden anında net analizi" mesajı — mevcut zayıf-alan ekranını (#7) Raunt'un insana bağlı analizine karşı ölçek vurgusuyla pazarlama diline çevir | Pazarlama | Orta/Düşük | icerik-pazarlama |
| 13 | Rozet/paylaşım kartını **net artışına** bağla (genel çalışmaya değil) — #3 ile birleştir, düello/sıralama rakiplerinden farklılaş | Ürün/Büyüme | Orta/Orta | tasarim-qa |
| 14 | "Reklamsız · kayıtsız · indirme yok" karşılaştırma vurgusu (Test Bank reklamlı + YKS Cepte kayıtlı kontrastı) | Konumlandırma | Orta/Düşük | konumlandirma |

## Pazarlamadan gelen (2026-07-27 rakip analizi)
> Gerekçe: docs/pazarlama/rakip-analiz-2026-07-27.md. Önceki bulgular teyit: fiyat kutupları sürüyor (Kunduz ~₺1.300/ay, Doping ₺2.800+ paket, koçluk ₺2.500–5.000/ay), "kalibre zorluk" vaadi hâlâ sahipsiz. Örtüşenler eklenmedi: SEO deneme sayfaları = #8, kısa video = #5/#10, koç-analiz mesajı = #12, net-artış paylaşım kartı = #13.

| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 15 | Gelir modeli kararı: tamamen ücretsiz mi, ₺149–299/ay premium katman mı? Boş fiyat bandı (~₺100–500/ay) doğrulandı; mevcut "tamamen ücretsiz" konumuyla çelişir — **karar: kullanıcı** | Fiyatlama | Yüksek/Düşük | kullanıcı |
| 16 | Haftalık veli e-posta özeti (net gelişimi + çalışma süresi) — koçluk hizmetlerinin veli-raporu kozunun ürünleşmiş hali; Supabase auth sonrası uygulanabilir | Ürün | Orta/Orta | orkestra-sefi |
| 17 | Deneme sonrası zayıf-alan ekranını (#7) "otomatik koç paneli"ne genişlet: haftalık çalışma önerisi + hedef net izleme (koçların ₺2.500+/ay sattığı panel) | Ürün | Yüksek/Yüksek | orkestra-sefi |

## Müfredat kapsam boşlukları (2026-07-06 mufredat-takip)
> Detay: docs/mufredat/mufredat-durum-2026-07-06.md. Resmî TYT yapısı değişmedi (Maarif Modeli etkisi ≥2028); iş = mevcut kapsamın ünite boşluklarını kapatmak.

| # | Boşluk | Öncelik | Öneri ünite sayısı |
|---|---|---|---|
| M1 | **Geometri** (dik üçgen, özel üçgen, benzerlik, çokgen, dörtgen, çember, analitik, katı cisim, dönüşüm) — **DOĞRULANDI GERÇEK BOŞLUK (2026-07-06)**: yalnızca `geo-acilar` + `geo-alan` (25'er soru) var; listelenen ~9 ünite tanımsız. İçerik hattına (soru-uretici + konu-anlatimi) devredildi. | 🔴 En yüksek (≈%25 mat sorusu) | ~9 |
| M2 | ~~**Tarih ünite şeması** — bağla~~ **ZATEN YAPILMIŞ (2026-07-06 doğrulandı, is-gelistirme)**: `tar-bilim/ilkcag/ilkturk/islam/turkislam` üniteleri `sosyal-konu-tarih.js`'te `upsertUnits` ile tanımlı+içerikli; 5 havuz da 25'er soruyla `replaceQuestionsForUnit` üzerinden bağlı ve `index.html`'de yüklü. Taramanın gapi = mount-eskimesi yanlış pozitifi. | ✅ | — |
| M3 | **Fizik** (giriş, hareket, ısı, basınç, elektrik, dalga, optik) | 🟠 Yüksek | ~7 |
| M4 | **Kimya** (atom/periyodik, bağlar, karışım, asit-baz, mol/hesap, kimya her yerde) | 🟠 Yüksek | ~7 |
| M5 | **Biyoloji** (ortak özellik, hücre, sınıflandırma, kalıtım, ekoloji, sistemler) | 🟠 Yüksek | ~6 |
| M6 | **Coğrafya** (konum, yer şekli, iklim, nüfus, ekonomi, çevre) | 🟡 Orta | ~6 |
| M7 | **Felsefe** (giriş, varlık, ahlak, sanat, din, siyaset, bilim) | 🟡 Orta | ~7 |
| M8 | **Din Kültürü** (ibadet, ahlak, Hz. Muhammed, yorumlar, dünya dinleri) | 🟡 Orta | ~5 |
| M9 | **Türkçe** tamamlama (cümle türleri, sözel mantık) | 🟢 Düşük | ~2 |

## Müfredat kapsam boşlukları (2026-07-13 mufredat-takip — güncelleme)
> Detay: docs/mufredat/mufredat-durum-2026-07-13.md. Resmî TYT yapısı yine **değişmedi** (Maarif etkisi ≥2028). **İlerleme:** 07-06'daki M3/M6/M7/M8 kapandı — Fizik 11 ünite (tam), Coğrafya 13 soru bankası, Felsefe 13, Din 8 pratiklenebilir. Kalan gerçek boşluklar daralıyor:

| # | Boşluk | Öncelik | Öneri ünite sayısı |
|---|---|---|---|
| M10 | **Geometri** — İlerleme: `geo-ozelucgen` (Dik ve Özel Üçgenler, 25 soru+anlatım) ve **`geo-benzerlik` (Üçgende Eşlik ve Benzerlik, 25 soru+anlatım) yapıldı (2026-07-27, is-gelistirme, ?v=134)**. Kalan: açıortay-kenarortay, açı-kenar bağıntıları, merkezler, çokgen, dörtgenler, çember-daire, analitik, katı cisimler | 🔴 En yüksek (≈%25 mat) | ~8 kaldı |
| M11 | **Biyoloji** — yalnızca `biy-hucre` + `biy-bilesen`. Eksik: ortak özellikler, organeller, zardan geçiş, sınıflandırma, mitoz, mayoz, kalıtım, ekosistem, güncel çevre | 🔴 Yüksek (6 fen sorusu) | ~8 |
| M12 | **Kimya** — 6 ünite var; eksik iki yüksek-frekanslı konu: **karışımlar**, **asit-baz-tuz** | 🟠 Orta | ~2 |
| M13 | **Türkçe soru bankası** — içerik 19 ünitede tam ama soru bankası 5'te; kalan ~14 başlığa soru üretimi (soru-uretici) | 🟠 Orta | — |
| M14 | **Coğrafya konu anlatımı** — 13 soru bankası var, `setContent` yalnızca 3'te (konum/iklim/harita); kalan 10 ünitenin anlatımı stub olabilir (konu-anlatimi) | 🟠 Orta | — |

## Müfredat kapsam boşlukları (2026-07-27 mufredat-takip — güncelleme)
> Detay: docs/mufredat/mufredat-durum-2026-07-27.md. Resmî kapsam yine **değişmedi**; 2027 YKS de 2018 müfredatıyla yapılacak (Maarif etkisi 2028). **İlerleme:** M11 Biyoloji kapandı (2→19 ünite), M12 Kimya kapandı (6→30), M13 Türkçe soru bankası kapandı (5→15). 2027'ye esas TTKB kazanım listesi ~Kasım 2026'da beklenir — o turda satır satır karşılaştır.

| # | Boşluk | Öncelik | Öneri ünite sayısı |
|---|---|---|---|
| M15 | **Geometri** — hâlâ 3 ünite (07-13'ten beri yalnız `geo-ozelucgen` eklendi). Eksik: açıortay-kenarortay, benzerlik, açı-kenar, çokgen, dörtgenler, çember-daire, analitik, katı cisimler, dönüşüm. Getiri sırası: benzerlik → çember → dörtgenler → katı cisimler | 🔴 En yüksek (≈%25 mat) | ~9–11 |
| M16 | **Biyoloji: kalıtım** (`biy-kalitim`) — 19 üniteye rağmen tek eksik resmî konu; TYT'de hemen her yıl 1 soru | 🟠 Yüksek | 1 |
| M17 | **Coğrafya konu anlatımı** — M14 değişmedi: `setContent` hâlâ 3/13 ünitede | 🟠 Orta | — |
| M18 | Küçük tamamlamalar: `cog-afet` (doğal afetler) + Türkçe cümle türleri/sözel mantık (eski M9) | 🟡 Düşük | ~3 |

## İçerik (soru-uretici / konu-anlatimi)
- Kalan branş üniteleri (Fonksiyon, Polinom, Olasılık, İstatistik + Geometri, Türkçe, Sosyal, Fen) için 25'er %20/40/40 soru — günlük otomatik görev (`gunluk-icerik-uretimi`) işliyor.

> Not: Detaylı gerekçe için docs/pazarlama/strateji-2026-07-02.md.
