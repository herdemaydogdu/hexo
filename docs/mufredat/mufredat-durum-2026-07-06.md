# Müfredat Durum Raporu — 2026-07-06

**Ajan:** mufredat-takip · **Kaynak taraması:** WebSearch (ÖSYM/MEB kapsam özetleri)
**Kural:** Resmî metin kopyalanmadı; yalnızca kapsam/kazanım özeti karşılaştırıldı.

## 1. Resmî durum — 2026 (ve 2027) TYT

- **Yapısal değişiklik yok.** 2026 TYT yapısı önceki yıllarla aynı: toplam 120 soru — 40 Türkçe, 40 Temel Matematik (≈30 matematik + ≈9–10 geometri), 20 Sosyal Bilimler, 20 Fen Bilimleri; süre 165 dk.
- **Sosyal (20):** 5 Tarih, 5 Coğrafya, 5 Felsefe, 5 Din Kültürü ve Ahlak Bilgisi.
- **Fen (20):** 7 Fizik, 7 Kimya, 6 Biyoloji.
- **Türkiye Yüzyılı Maarif Modeli:** 2024–2025'te yalnızca 9. sınıfta başladı; YKS'ye tam yansıması en erken **2028–2029** bekleniyor. 2026–2027 adayları **mevcut müfredata** göre hazırlanıyor. → Bizim ünite modelimizde acil kazanım revizyonu gerekmiyor; yalnızca **kapsam boşluklarını doldurmak** öncelik.

## 2. Bizim ünite envanteri (id: pattern taraması)

`grep -rhoE 'id: "[a-z]+-[a-z0-9]+", name: "..."' js/data/*.js` sonucu, ders bazında **izlenen ünite** sayıları:

| Ders | İzlenen ünite | Durum |
|---|---|---|
| Matematik (`mat-`) | 33 | ✅ Kapsam tam |
| Türkçe (`tr-`) | 16 | ✅ Büyük ölçüde tam (küçük boşluk) |
| Geometri (`geo-`) | 2 (açılar, alan) | ⚠️ Ciddi eksik |
| Tarih (`tar-`) | 1 (tar-bilim) | ⚠️ Ciddi eksik* |
| Coğrafya (`cog-`) | 1 (harita) | ⚠️ Ciddi eksik |
| Felsefe (`fel-`) | 1 (bilgi) | ⚠️ Ciddi eksik |
| Din (`din-`) | 1 (islam) | ⚠️ Eksik |
| Fizik (`fiz-`) | 1 (enerji) | ⚠️ Ciddi eksik |
| Kimya (`kim-`) | 1 (hal) | ⚠️ Ciddi eksik |
| Biyoloji (`biy-`) | 1 (bileşen) | ⚠️ Ciddi eksik |

\* Tarih'te `sosyal-soru-tarilkcag / tarilkturk / tarislam / tarturkislam` gibi **soru** dosyaları var, ancak bunlar `id:`/`name:` ünite şeması olarak izlenmiyor. Ünite kaydı olarak yalnızca `tar-bilim` görünüyor — soru havuzları var, ünite tanımı yok. Bu dosyalar ünite şemasına bağlanmalı.

## 3. Resmî kapsam ↔ bizim üniteler — farklar

### Türkçe — neredeyse tam
Mevcut: sözcük/cümle/paragraf anlam, ses, yapı, sözcük türleri (adlar, edat, fiil, fiilimsi), ögeler, tamlama, anlatım biçimleri, anlatım bozukluğu, yazım, noktalama.
**Öneri (eksik):** "Cümle Türleri" (yapı/anlam/yüklem bakımından) ve giderek artan **Sözel Mantık / Akıl Yürütme** başlığı ayrı ünite olarak değerlendirilebilir.

### Matematik — tam
33 ünite TYT matematik kapsamını (temel kavramlar → problemler → olasılık/istatistik) karşılıyor. Ek gerek yok.

### Geometri — en büyük tekil boşluk (soruların ≈%25'i)
Mevcut: geo-acilar, geo-alan. **Eksik öneri üniteleri:**
- `geo-dikucgen` — Dik Üçgen, Pisagor, Öklid bağıntıları
- `geo-ozelucgen` — Özel üçgenler, açıortay/kenarortay
- `geo-benzerlik` — Üçgende benzerlik ve eşlik
- `geo-cokgen` — Çokgenler (iç/dış açı)
- `geo-dortgen` — Dörtgenler: paralelkenar, eşkenar dörtgen, yamuk, deltoid, kare, dikdörtgen
- `geo-cember` — Çember ve daire
- `geo-analitik` — Analitik geometri (nokta, doğru)
- `geo-kati` — Katı cisimler (prizma, piramit, silindir, koni, küre)
- `geo-donusum` — Dönüşüm geometrisi (öteleme, yansıma, döndürme)

### Tarih — soru havuzu var, ünite şeması eksik
Resmî kapsam (9–10. sınıf ağırlıklı): Tarih bilimi, İlk Çağ/Anadolu uygarlıkları, İlk Türk devletleri, Türklerin İslamı kabulü ve ilk Türk-İslam devletleri, İslam tarihi, Anadolu Selçuklu/Beylikler, Osmanlı (kuruluş→dağılma), kültür-medeniyet, I. Dünya Savaşı, Milli Mücadele, Atatürk ilke ve inkılapları, Atatürk dönemi dış politika.
**En yüksek getiri (2018–2025 verisi):** Eski Türk Tarihi ve Türk-İslam devletleri her yıl 1'er soru; Milli Mücadele ve Atatürkçülük düzenli.
**Öneri üniteler:** `tar-ilkcag`, `tar-ilkturk`, `tar-islamiyet` (Türklerin İslamı kabulü + ilk Türk-İslam devletleri), `tar-osmanli`, `tar-millimucadele`, `tar-inkilap`. Mevcut soru dosyalarını bu ünitelere bağla.

### Coğrafya — büyük boşluk
Mevcut: cog-harita. **Eksik öneri üniteleri:** `cog-konum` (coğrafi konum/Türkiye), `cog-yersekli` (yer şekilleri, iç/dış kuvvetler), `cog-iklim` (iklim ve Türkiye iklimi), `cog-nufus` (nüfus, göç, yerleşme), `cog-ekonomi` (ekonomik faaliyetler, bölgeler), `cog-cevre` (çevre ve sürdürülebilirlik).

### Felsefe — büyük boşluk
Mevcut: fel-bilgi. **Eksik öneri üniteleri:** `fel-giris` (felsefe nedir), `fel-varlik`, `fel-ahlak`, `fel-sanat` (estetik), `fel-din`, `fel-siyaset`, `fel-bilim` (bilim felsefesi + mantığa giriş).

### Din Kültürü — boşluk
Mevcut: din-islam. **Eksik öneri üniteleri:** `din-ibadet` (İslam'da ibadet), `din-ahlak` (ahlak ve değerler), `din-muhammed` (Hz. Muhammed dönemi), `din-yorumlar` (İslam düşüncesinde yorumlar), `din-dunyadin` (yaşayan/dünya dinleri).

### Fizik — büyük boşluk
Mevcut: fiz-enerji. **Eksik öneri üniteleri:** `fiz-giris` (fizik bilimine giriş, madde ve ölçme), `fiz-hareket` (hareket ve kuvvet), `fiz-isi` (ısı ve sıcaklık), `fiz-basinc` (basınç ve kaldırma kuvveti), `fiz-elektrik` (elektrostatik + elektrik/manyetizma temel), `fiz-dalga` (dalgalar), `fiz-optik` (optik/aydınlanma).

### Kimya — büyük boşluk
Mevcut: kim-hal. **Eksik öneri üniteleri:** `kim-bilim` (kimya bilimi), `kim-atom` (atom ve periyodik sistem), `kim-bag` (kimyasal türler ve bağlar), `kim-karisim` (karışımlar/çözeltiler), `kim-asitbaz` (asit-baz-tuz), `kim-hesap` (mol ve kimyasal hesaplamalar), `kim-heryerde` (kimya her yerde/doğa ve kimya).

### Biyoloji — büyük boşluk
Mevcut: biy-bilesen. **Eksik öneri üniteleri:** `biy-ortak` (canlıların ortak özellikleri), `biy-hucre` (hücre), `biy-siniflandirma` (canlıların sınıflandırılması/çeşitlilik), `biy-kalitim` (hücre bölünmeleri + kalıtım), `biy-ekoloji` (ekosistem ve çevre), `biy-sistem` (insan fizyolojisi/sistemler).

## 4. Öncelik sırası (getiri/efor)

1. **Geometri** (9–10 soru/sınav, tekil en büyük boşluk) — 9 ünite.
2. **Tarih ünite şeması** — soru havuzu zaten var; ünite tanımlarını bağlamak düşük efor, yüksek getiri.
3. **Fizik + Kimya + Biyoloji** (toplam 20 fen sorusu) — her biri 6–7 ünite.
4. **Coğrafya + Felsefe + Din** (toplam 15 sosyal sorusu) — her biri 5–7 ünite.
5. **Türkçe** küçük tamamlama (cümle türleri, sözel mantık).

## 5. Kaynaklar (resmî + kapsam özeti)
- ÖSYM/MEB 2026 YKS kılavuzu (TTKB): https://ttkb.meb.gov.tr/meb_iys_dosyalar/2025_11/26164023_2026_yks.pdf
- Türkiye Yüzyılı Maarif Modeli — Öğretim Programları: https://tymm.meb.gov.tr/ogretim-programlari
- 2026 TYT konu/soru dağılımı özetleri: milliyet.com.tr, unirehberi.com, kitapsec.com (tarih/geometri/biyoloji), rehberpanda.com

> Not: Yapısal değişiklik yok; iş bir "değişiklik uyarlaması" değil, mevcut kapsamın **ünite kapsama boşluklarını** kapatma işidir.
