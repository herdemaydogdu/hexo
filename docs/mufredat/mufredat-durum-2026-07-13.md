# Müfredat Durum Raporu — 2026-07-13

**Ajan:** mufredat-takip · **Önceki rapor:** [mufredat-durum-2026-07-06.md](mufredat-durum-2026-07-06.md)
**Yöntem:** WebSearch/WebFetch ile 2026 TYT resmî kapsamı (ÖSYM/MEB/YÖK'e dayalı güncel konu listeleri) çekildi; bizdeki üniteler `id:`, `setContent("…")` ve `replaceQuestionsForUnit("…")` çağrıları üzerinden çıkarıldı.

> ⚠️ **Ölçüm notu:** Ünite envanteri yalnızca `id: "xx-yy"` deseniyle çıkarılırsa **eksik sayılıyor** — tarih/coğrafya/felsefe üniteleri `setContent(...)` ile dinamik kayıtlanıyor, soru bankaları `replaceQuestionsForUnit(...)` ile bağlanıyor. Bu raporun sayıları üç desenin birleşiminden alınmıştır (bkz. [[sinav-bash-mount-staleness]]).

## 1. Resmî TYT yapısı — değişiklik var mı?

**Yok.** 2026 TYT hâlâ 120 soru / 135 dakika. Ders dağılımı sabit: Türkçe 40, Temel Matematik 40 (≈28 matematik + ≈10–12 geometri), Sosyal Bilimler 20 (Tarih 5, Coğrafya 5, Felsefe 5, Din/ek 5), Fen Bilimleri 20 (Fizik 7, Kimya 7, Biyoloji 6). Maarif Modeli'nin TYT kapsamına etkisi ≥2028 bekleniyor; bu tur da **kapsam değişikliği tetiklemiyor** — iş, mevcut ünite boşluklarını kapatmak.

## 2. Branş bazında kapsam karşılaştırması

| Branş | Resmî konu ~ | Bizdeki ünite (soru bankası olan) | Durum |
|---|---|---|---|
| Matematik | ~26 | ~26 | ✅ Tam |
| Türkçe (içerik) | ~19 | ~19 ünite içeriği | ✅ Tam |
| Türkçe (soru bankası) | ~19 | 5 (yazım, sözcük, ses, paragraf, cümle) | 🟠 Soru bankası eksik |
| Tarih | 22 (gruplu ~13) | 15 (bilim, ilkçağ, ilkturk, islam, türkislam, selçuklu, kuruluş, klasik, değişim, modern, 20yy, millî, inkılap, politika, çağdaş) | ✅ Kapandı (07-06'da açıktı) |
| Coğrafya (soru bankası) | ~19 | 13 (konum, iklim, harita, nüfus, içkuvvet, dışkuvvet, dünya, göç, atmosfer, ekonomi, yerleşme, su, toprak) | 🟢 İyi (içerik 3'te) |
| Felsefe | ~13 | 13 (bilgi, varlık, ahlak, sanat, din, siyaset, bilim + ilkçağ/ortaçağ/15-17/18-19/20yy/düşünme) | ✅ Tam |
| Din | ~8 | 8 (inanç, ibadet, ahlak, Kur'an, Muhammed, medeniyet, insan, mezhep) | ✅ İyi |
| Fizik | 11 | 11 (giriş, madde, kuvvet, hareket, enerji, ısı, basınç, elektrostatik, elektrik, dalga, optik) | ✅ Tam |
| Kimya | ~8 | 6 (bilim, atom, periyodik, tür, hal, kanun) | 🟠 2 eksik |
| **Geometri** | ~19–21 | **2 (açılar, alan)** | 🔴 Büyük boşluk |
| **Biyoloji** | 10 | **2 (hücre, bileşen)** | 🔴 Büyük boşluk |

## 3. Öncelikli boşluklar ve önerilen üniteler

### 🔴 G1 — Geometri (07-06'dan beri açık, değişmedi)
Yalnızca `geo-acilar` + `geo-alan` var. Resmî kapsamda eksik ve **düzenli soru gelen** üniteler:
özel üçgenler (dik üçgen/Pisagor, ikizkenar, eşkenar), açıortay–kenarortay, üçgende eşlik–benzerlik, açı–kenar bağıntıları, üçgende merkezler, çokgenler, dörtgenler (paralelkenar, eşkenar dörtgen, dikdörtgen, kare, yamuk, deltoid), çember ve daire, analitik geometri, katı cisimler.
**Öneri:** ~10–12 yeni ünite. En yüksek getiri: dik üçgen/Pisagor, benzerlik, çember, katı cisimler (her yıl gelir). Matematik testinin ≈%25'i.

### 🔴 G2 — Biyoloji
Yalnızca `biy-hucre` + `biy-bilesen` pratiklenebilir. Eksik ~8 konu:
canlıların ortak özellikleri, hücre ve organelleri, hücre zarından madde geçişi, canlıların sınıflandırılması, mitoz ve eşeysiz üreme, mayoz ve eşeyli üreme, kalıtım, ekosistem ekolojisi, güncel çevre sorunları.
**Öneri:** ~8 yeni ünite. Fen'in 6 sorusunun tamamı riskte; kalıtım + sınıflandırma + üreme her yıl gelir.

### 🟠 G3 — Kimya
6 ünite var; eksik iki **yüksek frekanslı** konu: **karışımlar** ve **asit–baz–tuz** (her ikisi de 2019'dan bu yana neredeyse her yıl 1 soru).
**Öneri:** `kim-karisim`, `kim-asitbaz` üniteleri.

### 🟠 G4 — Türkçe soru bankası derinliği
İçerik 19 ünitede tam, ancak soru bankası yalnızca 5 ünitede. Eksik başlıklar (noktalama, yazım dışı; ad-sıfat-zamir, edat-bağlaç, fiil, fiilimsi, tamlama, anlatım biçimleri, anlatım bozuklukları, ögeler, sözcükte yapı, ses bilgisi tekrarı vb.) için soru üretimi gerekir. *(soru-uretici kapsamı — müfredat boşluğu değil.)*

### 🟠 G5 — Coğrafya konu anlatımı
13 ünitede soru bankası var ama `setContent` yalnızca 3'te (konum, iklim, harita). Kalan 10 ünitede konu anlatımı stub/eksik olabilir. *(konu-anlatimi kapsamı.)*

## 4. Sonraki adım
G1–G3 gerçek müfredat boşlukları olarak **docs/backlog.md**'ye eklendi; içerik hattına (konu-anlatimi + soru-uretici → denetci → tasarim-qa → yayimlayici) devri orkestra-sefi'ne bırakıldı. Koda dokunulmadı.

## Resmî kaynaklar
- 2026 TYT geometri kapsamı: https://www.unirehberi.com/tyt-geometri-konulari/
- 2026 TYT tarih kapsamı: https://www.unirehberi.com/tyt-tarih-konulari/
- 2026 TYT coğrafya kapsamı: https://www.unirehberi.com/tyt-cografya-konulari/
- 2026 TYT fizik kapsamı: https://www.unirehberi.com/tyt-fizik-konulari/
- 2026 TYT biyoloji kapsamı: https://www.unirehberi.com/tyt-biyoloji-konulari/
- 2026 TYT genel kapsam/soru dağılımı: https://www.milliyet.com.tr/egitim/tyt-konulari-2026-tyt-matematik-turkce-biyoloji-fizik-cografya-kimya-tarih-konulari-ve-dagilimi-6609047
