# Faz A — Mevcut İçerik ve Yapı Denetim Raporu

Tarih: 2026-06-20 · Kapsam: `herdemaydogdu/hexo` · İncelenen: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `js/games-data.js`, `js/games.js`

Bu rapor, yüklenen "TYT Claude İçerik Geliştirme Promptu" dokümanının 3.2 maddesindeki denetim adımlarını uygular. **Henüz hiçbir içerik üretilmemiştir**; amaç mevcut durumu sayısal ve yapısal olarak ortaya koymaktır.

---

## 1. Veri şeması (TYT_DATA)

Tek dosya: `js/data.js` (873 satır). Şema:

```
TYT_DATA = {
  exam: { name, totalQuestions, durationMin },
  subjects: [ { id, name, icon, branches?[], units: [ { id, name, branch?, summary, content, pairs?[] } ] } ],
  questions: [ { subject, unit, q, options[], answer, explain } ]
}
```

- `subject` → ders kimliği (turkce, matematik, sosyal, fen)
- `branch` → yalnızca sosyal/fen ünitelerinde (tarih, cografya, felsefe, din / fizik, kimya, biyoloji)
- `unit` → soruyu üniteye bağlar
- `content` → konu anlatımı (HTML string)
- `pairs` → eşleştirme oyunu çiftleri (opsiyonel)
- `answer` → doğru şıkkın index'i (0 tabanlı)
- `explain` → kısa açıklama

**Dokümanın hedef şemasıyla fark:** Hedef soru nesnesi `id, stem, stimulus, options, answer, solution{short, steps, whyOthersWrong}, skill, difficulty, tags, sourceType, reviewStatus` istiyor. Mevcut sorularda bunların hiçbiri yok; yalnızca `q/options/answer/explain` var. Hedef konu nesnesi `objectives, sections[], commonMistakes, miniQuiz, curriculumRefs, reviewStatus` istiyor; mevcut ünitelerde yalnızca `summary + content` var.

---

## 2. Sayısal döküm

### Ünite sayıları (toplam 93)

| Ders | Branş | Ünite | Dokümandaki min. başlık | Durum |
|------|-------|------:|------:|------|
| Türkçe | – | 5 | ~18 | Eksik (%28) |
| Temel Matematik | – | 6 | ~28 | Eksik (%21) |
| **Geometri** | – | **0** | ~11 | **Hiç yok** |
| Sosyal | Tarih | 73 | ~15 | Aşırı genişlemiş |
| Sosyal | Coğrafya | 2 | ~12 | Eksik |
| Sosyal | Felsefe | 1 | ~9 | Eksik |
| Sosyal | Din | 1 | ~10 | Eksik |
| Fen | Fizik | 2 | ~11 | Eksik |
| Fen | Kimya | 2 | ~9 | Eksik |
| Fen | Biyoloji | 1 | ~9 | Eksik |

### Soru sayıları (toplam 40)

| Ders | Soru | Soru olan ünite |
|------|-----:|------:|
| Türkçe | 11 | 5 / 5 |
| Matematik | 11 | 6 / 6 |
| Sosyal (Tarih 4, Coğrafya 2, Felsefe 1, Din 2) | 9 | 7 |
| Fen (Fizik 4, Kimya 3, Biyoloji 2) | 9 | 5 |

**Kritik:** 93 ünitenin yalnızca **23'ünde** en az bir soru var. **70 ünite (neredeyse tüm Tarih) soru içermiyor.** Tarih'te 73 ünite var ama yalnızca 3'ünde (tar-04, tar-13, tar-14) soru bulunuyor.

---

## 3. Otomatik bütünlük kontrolleri (doküman 3.15)

| Kontrol | Sonuç |
|---------|-------|
| Tüm unit/branch/subject id'leri benzersiz | ✅ Geçer |
| Her `question.unit` mevcut bir üniteye bağlı (orphan yok) | ✅ Geçer |
| Her soruda tam 5 seçenek | ✅ Geçer (40/40) |
| `answer` tam sayı ve 0–4 aralığında | ✅ Geçer |
| Boş soru kökü / seçenek / açıklama yok | ✅ Geçer |
| Mükerrer/çok benzer soru | ✅ Tespit edilmedi |
| Aynı seçenek iki kez | ✅ Tespit edilmedi |
| **Sorularda kararlı `id` alanı** | ❌ **Yok** — sorular kimliksiz; ilerleme/yanlış defteri eşlemesi soru metninden türetiliyor, metin değişince kırılır |
| **Çözüm adımları (`solution.steps`, `whyOthersWrong`)** | ❌ Yok — açıklamalar tek cümle |
| **Kaynak/lisans metadata (`sources.js`)** | ❌ Yok |
| **`reviewStatus` (taslak/doğrulanmış ayrımı)** | ❌ Yok |
| Otomatik doğrulama/raporlama scripti | ❌ Yok (Faz C'de kurulacak) |

---

## 4. İçerik kalitesi tespiti

- **Konu anlatımları özet düzeyinde:** Çoğu ünite 1 kısa paragraf veya birkaç madde. Öğrenme hedefi, ön bilgi, çözümlü örnek (kolay/orta/zor), sık yapılan hata, hızlı yöntem, kavram karşılaştırması, mini quiz ve özet kartı **yok** (doküman 3.7).
- **Sorular tek adımlı/bilgi düzeyinde:** Çoğu doğrudan tanım veya tek işlem. Dokümanın istediği yorum, veri okuma, çok adımlı muhakeme ağırlığı ve "çeldiricinin tipik hataya dayanması" karşılanmıyor (doküman 3.9).
- **Açıklamalar yüzeysel:** "Doğru cevap B" sınırında; adım adım çözüm ve yanlış seçenek analizi yok.

---

## 5. Mimari ve teknik riskler

- **Tek dosyada büyüme:** Tüm içerik `data.js` içinde (873 satır). İçerik arttıkça bakım, doğrulama ve ekip çalışması zorlaşacak (doküman 2 ve 3.3 bu riski açıkça işaret ediyor).
- **localStorage:** Anahtarlar `tyt_progress_v1`, `tyt_games_v1`. Oturum kayıtları soruları metinden türetilen kimlikle tutuyor. Soru metni/şema değişirse geçmiş ve yanlış defteri eşlemesi bozulabilir → **migrasyon ve kararlı soru id'si şart**.
- **Telif:** Mevcut içerik özgün görünüyor; başlık MEB OGM Materyal'i yalnızca *kapsam kaynağı* olarak anıyor. ÖSYM/MEB soru metni kopyalanmamış → politikayla uyumlu. Ancak `sources.js` (lisans/erişim tarihi/atıf) kaydı yok.
- **Yükleme:** Klasik script sırası (`config→core→store→data→games-data→games→app`). ES modüllere geçiş `file://` (çift tıkla açma) ve GitHub Pages'te CORS riskleri doğurur → **kontrollü script sırası korunmalı.**

---

## 6. Öncelik (dokümanın çıkarımıyla aynı)

İlk iş "daha fazla soru eklemek" değil; **şema + doğrulama katmanı + dengeli kapsam.** Aksi hâlde içerik arttıkça hata da artar.

---

## 7. Önerilen faz planı

- **Faz B —** Modüler veri mimarisi (`js/data/` altında ders dosyaları) + kontrollü loader; mevcut içerik kaybolmadan, app/games bozulmadan taşınır. Sorulara kararlı `id` eklenir.
- **Faz C —** `tests/` altında doğrulama + içerik raporu scriptleri (tek komutla). Her deploy öncesi çalışır.
- **Faz D —** Türkçe ve Matematik pilot: 2–3 tam (zengin) konu + ~20'şer özgün, çözümlü soru.
- **Faz E —** Pilotu arayüzde çalışır kılıp test; rapor.
- **Faz F+ —** Geometri'yi kurma ve diğer branşları dengeli tamamlama; deneme blueprint'i; adaptif tekrar.

---

## 8. Bu fazda değişen dosya

- Yeni: `docs/FAZ-A-DENETIM-RAPORU.md` (bu rapor). Kod/davranış değişmedi; mevcut özellikler korunuyor.
