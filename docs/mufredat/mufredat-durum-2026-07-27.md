# Müfredat Durum Raporu — 2026-07-27

**Ajan:** mufredat-takip · **Önceki rapor:** [mufredat-durum-2026-07-13.md](mufredat-durum-2026-07-13.md)
**Yöntem:** WebSearch ile resmî TYT kapsamı (ÖSYM/MEB-TTKB'ye dayalı güncel kaynaklar) kontrol edildi; bizdeki envanter `id:+name`, `setUnit(...)`, `U(...)` ve `replaceQuestionsForUnit(...)` desenlerinin **birleşiminden** çıkarıldı (Grep aracıyla, mount-eskimesi yanlış pozitiflerine karşı — bkz. 07-13 ölçüm notu).

## 1. Resmî kapsam — değişiklik var mı?

**Yok.** Bu turda da kapsam değişikliği tetiklenmedi:

- 2026 YKS TTKB konu/kazanım listesi (26 Kasım 2025'te ilan edildi) önceki yılla aynı; 2026 YKS Haziran 2026'da bu kapsamla yapıldı.
- **2027 YKS de 2018 müfredatına göre yapılacak** — MEB/ÖSYM açıklamalarına göre 2026 ve 2027'de oturum yapısı, soru sayısı ve kapsamda yapısal değişiklik yok. TYT: 120 soru (40 Türkçe, 40 Matematik, 20 Sosyal, 20 Fen).
- Maarif Modeli (Türkiye Yüzyılı) kademeli ilerliyor (2024-25: 9. sınıf; 2025-26: 10. sınıf); YKS'ye ilk yansıması **2028**. Ara dönemde beklenen tek değişim soru tipi: beceri/bağlam temelli, çok adımlı sorular — içerik üretiminde bu tarza ağırlık vermek isabetli olur.
- AYT tarafında integral çıkarıldı, türev kapsamı daraltıldı (L'Hôpital vb. yok) — TYT'yi etkilemez, not olarak kayda geçildi.

**Takip notu:** 2027 YKS'ye esas TTKB konu/kazanım listesi muhtemelen **Kasım 2026** civarı yayımlanır; o turda satır satır karşılaştırma yapılmalı.

## 2. Branş bazında durum (07-13 → 07-27 değişimi)

| Branş | Resmî konu ~ | 07-13 | 07-27 | Durum |
|---|---|---|---|---|
| Matematik | ~26 | 26 | 26 | ✅ Tam |
| Türkçe (içerik) | ~19 | ~19 | ~19 | ✅ Tam |
| Türkçe (soru bankası) | ~19 | 5 | **15** (`turkce-soru-*`: sözcük, cümle, paragraf, ses, yazım, noktalama, adlar, edat, fiil, fiilimsi, tamlama, yapı, ögeler, anlatım, bozukluk) | ✅ **Kapandı** (07-13 G4) |
| Tarih | 22 (gruplu ~13) | 15 | 15 (+ data.js'te tar-01..73 detay şeması) | ✅ Tam |
| Coğrafya (soru bankası) | ~19 | 13 | 13 | 🟢 İyi |
| Coğrafya (konu anlatımı) | — | 3 | 3 (`setContent`: konum, iklim, harita) | 🟠 Açık (07-13 G5) |
| Felsefe | ~13 | 13 | 14 (+ fel-giris) | ✅ Tam |
| Din | ~8 | 8 | 9 (+ din-bilgi, din-islam) | ✅ Tam |
| Fizik | 11 | 11 | 11 | ✅ Tam |
| Kimya | ~8 | 6 | **30** (`kim-*`: karışımlar I-II, asit-baz, asit-baz tepkimeleri, tuzlar, mol, hesaplamalar, gazlar, etkileşimler… dahil) | ✅ **Kapandı** (07-13 G3) |
| Biyoloji | 10 | 2 | **19** (`biy-*`: ortak özellikler, hücre, organizasyon, madde geçişi, sınıflandırma, âlemler, virüs, mitoz, mayoz, eşeysiz üreme, ekosistem, bileşikler…) | ✅ **Büyük ölçüde kapandı** (07-13 G2) — tek eksik: kalıtım |
| **Geometri** | ~19–21 | 2 | **3** (+ `geo-ozelucgen`: Dik ve Özel Üçgenler, 25 soru) | 🔴 Hâlâ büyük boşluk |

## 3. Kalan boşluklar (öncelik sırasıyla)

### 🔴 B1 — Geometri (07-06'dan beri açık; yavaş ilerliyor)
3/~20 ünite. 07-13'ten bu yana yalnızca özel üçgenler eklendi. Eksik ve düzenli soru gelen üniteler:
açıortay–kenarortay, üçgende eşlik–benzerlik, açı–kenar bağıntıları, çokgenler, dörtgenler (paralelkenar, eşkenar dörtgen, dikdörtgen, kare, yamuk, deltoid), çember ve daire, analitik geometri, katı cisimler (prizma, silindir, piramit, koni, küre), dönüşüm geometrisi.
**Öneri:** ~9–11 yeni ünite; en yüksek getiri sırası: benzerlik → çember-daire → dörtgenler → katı cisimler → analitik. Matematik testinin ≈%25'i (≈10–12 soru) hâlâ büyük oranda kapsam dışı.

### 🟠 B2 — Biyoloji: kalıtım
19 üniteye rağmen **kalıtımın genel ilkeleri (`biy-kalitim`) yok** — 10. sınıf kazanımı, TYT'de neredeyse her yıl 1 soru. Tek ünite + 25 soruyla biyoloji resmî kapsamla bire bir hizalanır.

### 🟠 B3 — Coğrafya konu anlatımı (07-13 G5, değişmedi)
13 soru bankasına karşılık `setContent` hâlâ 3 ünitede. Kalan 10 ünite (dünya, atmosfer, iç/dış kuvvetler, su, toprak, nüfus, göç, yerleşme, ekonomi) anlatımsız/stub. *(konu-anlatimi kapsamı.)*

### 🟡 B4 — Küçük tamamlamalar
- **Coğrafya:** `cog-afet` (doğal afetler ve toplum) resmî listede var, bizde yok — düşük frekans, 🟡.
- **Türkçe:** cümle türleri + sözel mantık (eski M9) hâlâ açık — 🟡.

## 4. Sonraki adım
B1 (geometri) ve B2 (kalıtım) backlog'a işlendi; içerik hattına (konu-anlatimi + soru-uretici → denetci → tasarim-qa → yayimlayici) devri orkestra-sefi'nde. Koda dokunulmadı, push yapılmadı.

## Resmî kaynaklar
- TTKB, 2026 YKS'ye esas konu ve kazanımlar: https://ttkb.meb.gov.tr/www/osym-tarafindan-2026-yilinda-gerceklestirilecek-quotyuksekogretim-kurumlari-sinavi-yksquotna-esas-derslere-ait-konu-ve-kazanimlar/icerik/831
- ÖSYM duyurular: https://www.osym.gov.tr/Duyurular/Index
- MEB Maarif Modeli öğretim programları (10. sınıf matematik örneği): https://tymm.meb.gov.tr/ogretim-programlari/matematik-dersi/12
- 2027 YKS/TYT kapsam durumu: https://unikazan.com/blog/yks-2027de-neler-degiscek-meb-son-aciklamalar-guncel-rehber/ · https://www.yksblogun.com/2027-tyt-konulari-ve-soru-dagilimi-osym/
- 2026 kapsam teyidi: https://www.basarisiralamalari.com/meb-2026-yksye-esas-konu-ve-kazanimlari-yayimladi/ · https://unikazan.com/blog/tyt-ayt-soru-dagilimi-2026/
