# Ders Notları Yenileme — Master Plan

*Rol: TYT içerik editörü + öğretmen + ölçme-değerlendirme uzmanı*
*Tarih: 17 Temmuz 2026 · Ana soru: "Öğrenci ne ister?"*

---

## 1. Durum tespiti (neden yenileniyor)

156 ünitenin içeriği ölçüldü. Ortalama not **~183 kelime** — bu bir "hatırlatma kartı" seviyesi, konu anlatımı değil. UI (defter görünümü / `ders-notlari.js`) iyi; sorun **içeriğin kendisinde**.

Ders bazında sağlık (‼ = <600 karakter kritik, · = 600–1000 zayıf):

| Ders | Ünite | Durum | Öncelik |
|------|-------|-------|---------|
| **Kimya** (fen) | ~34 | Neredeyse tamamı ‼ stub. En kötü grup. | **1** |
| **Biyoloji** (fen) | ~19 | Yarısı ‼/·. Tanım var, anlatım yok. | **2** |
| **Fizik** (fen) | ~13 | Çoğu orta; birkaç zayıf. | **3** |
| Din + Felsefe (sosyal) | ~30 | `fel-giris` 206 krkter stub; birkaç zayıf. Gerisi iyi. | 3 |
| Matematik | 26 | Çoğu 600–900 krkter; çözümlü örnek az. | 4 |
| Sosyal: Tarih/Coğrafya | ~30 | Zaten güçlü (1400–4700). Cila + eksik konu. | 5 |
| Türkçe | 15 | İyi. Gözden geçir. | 6 |
| Geometri | 3 | Az ünite; genişletilebilir. | 6 |

**Beş temel eksik:** (1) sezgi/"neden" yok, doğrudan tanıma atlıyor; (2) adım adım çözümlü örnek yok; (3) tablo/şema yok; (4) "TYT'de nasıl sorulur" köprüsü yok; (5) standart tutarsız — pilot üniteler stub kalmış.

---

## 2. Kaynak envanteri (bağlı PDF'ler)

Masaüstü `tyt` klasörü + `TYT İçerik` + `tyt matematik` = ~2100 sayfa kaynak.

| Ders | Kaynak PDF | Sayfa | Tip |
|------|-----------|-------|-----|
| Kimya | tyt-kimya.pdf | 96 | Taranmış → görsel/OCR okuma |
| Biyoloji | tyt-biyoloji.pdf | 174 | Taranmış |
| Fizik | tyt-fizik.pdf | 202 | Taranmış |
| Coğrafya | tyt-cografya.pdf (122), cografya2.pdf (280) | 402 | Karışık (cografya2 metinli) |
| Tarih | tyt-tarih.pdf (188), içi-dolu-defter (382), + 8 Osmanlı dosyası | ~600 | Karışık (Osmanlı dosyaları metinli) |
| Felsefe | tyt-ayt-felsefe.pdf | ? | Taranmış |
| Din | TYT-AYT ÖZET.pdf | 85 | Metinli |
| Matematik | 8 PDF (`tyt matematik/`) | — | Soru bankası + özet |
| Türkçe | tyt-turkce.pdf, paragraf (`TYT İçerik/`) | — | — |

**Telif ilkesi:** PDF'ler yalnızca *kapsam ve doğruluk* referansı. Notlar **sıfırdan özgün** yazılır (kopya yok); her ünitede `copyrightSafe:true` ve `originalityStatement` doldurulur. Bu, sitenin mevcut rapor denetimiyle uyumlu.

---

## 3. Not standardı — sabit iskelet (orta derinlik, ~300–400 kelime)

Her ünite şu bloklardan oluşur. Amaç: öğrenci sayfayı açınca **önce özeti** görsün, sonra derinleşsin.

1. **⚡ Neden önemli? (Kanca)** — 1–2 cümle. Günlük hayat veya sınav bağı. "Bunu neden öğreniyorum?"a cevap.
2. **📌 30 saniyelik özet** — en can alıcı 3–4 madde, en başta. Öğrenci hızlı tarasın / tekrar etsin.
3. **Konu anlatımı** — alt başlıklarla (h3). Her soyut kavramın **somut örneği**. Tanım + sezgi + neden.
4. **🧮 Formül / kural kutusu** — varsa, ayrı vurgulu kutu.
5. **✍️ Çözümlü örnek (2 adet)** — **adım adım**, öğrencinin muhakemeyi görebileceği şekilde. Tek satır sonuç değil.
6. **📊 Tablo / karşılaştırma** — ayrım gereken yerde (ör. mitoz–mayoz, asit–baz).
7. **🎯 TYT'de nasıl çıkar + tuzaklar** — soru tipi + sık yapılan hata (mevcut `commonMistakes` büyütülür).
8. **✅ Mini kontrol** — 2–3 kendini-yokla sorusu + cevabı (aç/kapa).

### "Öğrenci ne ister?" — her notta uygulanacak 7 ilke
Önce özet sonra detay (piramit) · her kavrama somut örnek · "neden öğreniyorum" cevabı · tuzak/hata uyarısı · kendini test etme · tablo/şema ile bilişsel yük azaltma · sınavda çıkma sıklığı bilgisi (öncelik).

---

## 4. Alan/metadata genişletme

Veri modeli zaten zengin (`objectives, content, commonMistakes, prerequisites, estimatedMinutes...`). Eklenecek/doldurulacak alanlar:

| Alan | Ne için | Öğrenciye faydası |
|------|---------|-------------------|
| `quickSummary` | 30 sn özet maddeleri | Hızlı tekrar / sınav öncesi |
| `examFrequency` | TYT'de çıkma sıklığı (yüksek/orta/düşük) | Öncelik belirleme |
| `keywords` | Anahtar kavramlar | Arama + tekrar |
| `mnemonics` | Hafıza teknikleri | Ezber kolaylığı |
| `relatedUnits` | Bağlantılı üniteler | Konular arası köprü |
| `selfCheck` | Mini kontrol soruları (cevaplı) | Kendini test |
| `workedExamples` | Çözümlü örnekler (yapısal) | Adım adım öğrenme |

`ders-notlari.js` (defter görünümü) bu yeni blokları otomatik render edecek şekilde küçük eklemeyle güncellenir (özet kutusu, mini-kontrol aç/kapa, sıklık rozeti).

### Konu genişletme
Her fazda kaynak PDF'in içindekiler tablosu, sitedeki ünite listesiyle karşılaştırılır. PDF'te olup sitede olmayan konular **yeni ünite** olarak eklenir (ör. kimyada "Yükseltgenme-İndirgenme", fizikte "Basit Makineler" gibi olası boşluklar faz başında tespit edilir).

---

## 5. Fazlı yol haritası

Öncelik = *zayıflık × sınav ağırlığı*. Her faz bağımsız teslim edilir; onaylanınca sonrakine geçilir.

- **Faz 0 — Standart + pilot** *(bu tur)*: iskelet + `kim-mol` pilotu (bkz. §7). Onay bekler.
- **Faz 1 — KİMYA** (~34 ünite): tyt-kimya.pdf. En yüksek etki. Konu boşlukları eklenir.
- **Faz 2 — BİYOLOJİ** (~19 ünite): tyt-biyoloji.pdf. Bol tablo/şema.
- **Faz 3 — FİZİK ince ayar + zayıf stublar** (fizik'in zayıfları + `fel-giris`, `din-islam`).
- **Faz 4 — MATEMATİK zenginleştirme** (26 ünite): çözümlü örnek + strateji ağırlıklı.
- **Faz 5 — SOSYAL cila + eksik konu** (tarih/coğrafya/felsefe/din derinleştirme, yeni ünite).
- **Faz 6 — TÜRKÇE + GEOMETRİ gözden geçirme.**

**Faz içi akış (her ünite):** kaynak sayfaları oku → taslak/outline → standarda göre özgün yaz → metadata doldur → ilgili `js/data/*.js`'e ekle → `node scripts/rapor.js` ile doğrula → render'ı gözle kontrol.

**Tempo:** Kimya fazı tek oturumda bitmez; 34 ünite ~5–7 iş paketine bölünür (ör. "atom-periyodik", "etkileşimler", "karışımlar", "asit-baz", "hesaplamalar"). İstenirse zamanlanmış görevle (scheduled task) parça parça otomatikleştirilebilir.

---

## 6. Kalite kapısı (her ünite bunu geçmeli)

☑ 8 bloğun tamamı var mı? ☑ En az 2 adım-adım çözümlü örnek? ☑ En az 1 tablo/şema (uygunsa)? ☑ TYT tuzağı yazıldı mı? ☑ Mini kontrol + cevap? ☑ ~300–400 kelime? ☑ Özgün (kaynaktan kopya değil), `copyrightSafe:true`? ☑ `rapor.js` hata vermiyor? ☑ Defter görünümünde düzgün render?

Yüksek riskli fazlarda son doğrulama bir alt-ajanla (fact-check + telif kontrolü) yapılabilir.

---

## 7. Pilot: `kim-mol` (önce → sonra)

**Önce (mevcut, ~60 kelime):** tanım + formül + 3 tek-satır örnek. Bilmeyene öğretmez.

**Sonra (yeni standart):** bkz. `ornek-not-kim-mol.md` — sezgi ("kimyada tanecikleri desteyle sayarız") + 30sn özet + anlatım + formül üçgeni + 2 tam çözümlü örnek + dönüşüm tablosu + TYT tuzakları + mini kontrol. ~4 katı içerik, gerçekten öğretiyor.

---

## 8. Onay noktası

Bu plan + pilot onaylanırsa **Faz 1 (Kimya)** ile başlıyorum: önce tyt-kimya.pdf'in kapsamını sitedeki 34 kimya ünitesiyle eşleyip boşlukları çıkarır, sonra ilk iş paketini (atom yapısı–periyodik sistem) yeni standartta yazarım.
