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

## İçerik (soru-uretici / konu-anlatimi)
- Kalan branş üniteleri (Fonksiyon, Polinom, Olasılık, İstatistik + Geometri, Türkçe, Sosyal, Fen) için 25'er %20/40/40 soru — günlük otomatik görev (`gunluk-icerik-uretimi`) işliyor.

> Not: Detaylı gerekçe için docs/pazarlama/strateji-2026-07-02.md.
