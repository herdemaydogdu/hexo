# Backlog — Öncelikli İşler

Keşif/pazarlama ekiplerinin ürettiği öneriler burada önceliklenir; orkestra-sefi buradan iş dağıtır.

## Pazarlamadan gelen (2026-07-02 rakip/pazar analizi)
| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 1 | ~~SEO başlık/meta + site haritası~~ **YAPILDI (2026-07-02, is-gelistirme)**: index.html head (meta, OG, Twitter, JSON-LD) + robots.txt + sitemap.xml | Ürün/SEO | Yüksek/Orta | ✅ |
| 2 | Deneme sonrası konu bazlı analiz ekranı (zayıf alan) | Ürün | Yüksek/Orta | orkestra-sefi |
| 3 | Paylaşılabilir net/rozet sonuç kartı (büyüme döngüsü) | Ürün | Orta/Orta | tasarim-qa |
| 4 | Yanlış defterinden hafif adaptif tekrar önerisi | Ürün | Orta/Yüksek | orkestra-sefi |
| 5 | Sitedeki özgün içerikten kısa video/sosyal malzeme | Pazarlama | Orta/Düşük | icerik-pazarlama |

## Pazarlamadan gelen (2026-07-06 rakip analizi)
| # | Öneri | Tür | Etki/Efor | Sahip |
|---|---|---|---|---|
| 6 | ~~Ana sayfada "Ücretsiz + kalibre zorluk (%20/40/40)" konum mesajı~~ **YAPILDI (2026-07-06, is-gelistirme)**: yeni ziyaretçiye (henüz oturumu yok) dashboard'da `.pos-banner` konum bandı — "Tamamen ücretsiz · kayıt yok · reklam yok · %20/40/40 kalibre zorluk". app.js + style.css, ?v=78 | Konumlandırma | Yüksek/Düşük | ✅ |
| 7 | Deneme sonrası konu bazlı zayıf-alan ekranı — **ücretsiz** (bkz. #2 ile birleştir) | Ürün | Yüksek/Orta | orkestra-sefi |
| 8 | Ücretsiz TYT deneme SEO sayfaları ("TYT deneme çöz", "net hesapla") | İçerik/SEO | Yüksek/Orta | icerik-pazarlama |
| 9 | "Özgün + ÖSYM'ye kalibre" güven rozeti/mesajı (kopya soru havuzlarına karşı) | Konumlandırma | Orta/Düşük | konumlandirma |
| 10 | Net-artışı temalı kısa video/sosyal malzeme (TikTok/YouTube, oyunlaştırma boşluğu) | Pazarlama | Orta/Düşük | icerik-pazarlama |

> Gerekçe: docs/pazarlama/rakip-analiz-2026-07-06.md. Rakip fiyat kutupları: Doping ~₺38–45B/yıl, Kunduz ~₺650–2.500/ay; ücretsiz+kalibre+net-takibi boşluğu doğrulandı.

## Müfredat kapsam boşlukları (2026-07-06 mufredat-takip)
> Detay: docs/mufredat/mufredat-durum-2026-07-06.md. Resmî TYT yapısı değişmedi (Maarif Modeli etkisi ≥2028); iş = mevcut kapsamın ünite boşluklarını kapatmak.

| # | Boşluk | Öncelik | Öneri ünite sayısı |
|---|---|---|---|
| M1 | **Geometri** (dik üçgen, özel üçgen, benzerlik, çokgen, dörtgen, çember, analitik, katı cisim, dönüşüm) | 🔴 En yüksek (≈%25 mat sorusu) | ~9 |
| M2 | **Tarih ünite şeması** — soru havuzu var (`tarilkcag/tarilkturk/tarislam/tarturkislam`), ünite tanımı yok; bağla | 🔴 Yüksek (düşük efor) | ~6 |
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
