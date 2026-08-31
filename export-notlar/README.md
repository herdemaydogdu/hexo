# TYT Konu Notları — Dışa Aktarım

Bu klasör, `sınav` projesindeki Supabase veritabanında (`public.topics`) tutulan TYT konu anlatımlarının dışa aktarılmış hâlidir. Başka bir projede kaynak olarak kullanılmak üzere hazırlanmıştır.

**Oluşturulma tarihi:** 2026-08-20
**Kaynak:** Supabase projesi `jmoimahqkiepgdmwnovs` → `public.topics`

---

## Klasör içeriği

| Dosya / klasör | Ne işe yarar |
|---|---|
| `topics.json` | **Ana veri.** 167 kaydın tamamı (ham HTML içerikle birlikte). ~2 MB. |
| `index.json` | İçeriksiz dizin — ünite listesi ve karakter sayıları. Hızlı gezinmek için. |
| `tum-notlar.html` | Dolu 70 ünitenin tek dosyada birleştirilmiş, içindekiler bağlantılı hâli. Tarayıcıda doğrudan açılır. |
| `notlar/<ders>/<unit_id>.html` | Ünite başına ayrı, stil gömülü, tek başına açılabilir HTML dosyaları. |
| `supabase-export.mjs` | Bu klasörü Supabase'ten **yeniden üretmek** için Node betiği. |

---

## Veri şeması

`topics.json` bir dizidir; her eleman şu alanlara sahiptir:

```json
{
  "subject": "matematik",
  "unit_id": "mat-temel",
  "name": "Temel Kavramlar",
  "sort_order": 0,
  "question_count": 25,
  "content": "<h2>Temel Kavramlar</h2>..."
}
```

| Alan | Tip | Açıklama |
|---|---|---|
| `subject` | string | `matematik`, `geometri`, `turkce`, `fen`, `sosyal` |
| `unit_id` | string | Benzersiz anahtar (`mat-`, `geo-`, `tr-`, `fiz-`/`kim-`/`biy-`, `cog-`/`tar-`/`fel-`/`din-` ön ekleri) |
| `name` | string | Ünitenin görünen adı |
| `sort_order` | int | Ders içindeki sıra |
| `question_count` | int | TYT'de o üniteden beklenen soru sayısı |
| `content` | string \| null | Konu anlatımı — **ham HTML parçası** (tam belge değil) |

---

## İçerik durumu

| Ders | Ünite | Dolu | Karakter |
|---|---|---|---|
| **Matematik** | 26 | 26 | 609.148 |
| **Geometri** | 14 | 14 | 350.113 |
| **Türkçe** | 15 | 13 | 128.305 |
| **Fen Bilimleri** | 60 | 0 | 57.247 |
| **Sosyal Bilimler** | 52 | 17 | 642.605 |
| **TOPLAM** | **167** | **70** | **1.787.418** |

**Sosyal kırılımı:** coğrafya 13/13 dolu · tarih 4/15 dolu · felsefe 0/14 · din kültürü 0/10

"Dolu" = 5.000 karakterden uzun, tam konu anlatımı yazılmış ünite. Kalanlar yalnızca birkaç cümlelik taslak açıklama içerir.

---

## `content` alanının HTML yapısı

İçerikler `<html>`/`<body>` etiketi olmayan **HTML parçalarıdır**; doğrudan bir konteynerin içine basılabilir. Kullanılan etiketler:

| Etiket / sınıf | Anlamı |
|---|---|
| `<h2>` | Ünite başlığı (her içerikte bir tane) |
| `<h3>` | Bölüm başlığı |
| `<p class="formula">` | Kural / tanım / dikkat / örnek kutusu — vurgulu arka planla gösterilmeli |
| `<table>` | Karşılaştırma ve "soru tipleri" tabloları |
| `<ul>` / `<li>` | Adım adım çözümler, sözlük, özet kartı |
| `<b>` | Sınavda ezberlenmesi gereken kilit bilgi |
| `<u>` | "Neden böyle" açıklaması / mantık notu (altı çizili değil, **vurgulu** gösterilmesi tasarlanmıştır) |
| `<svg viewBox="..." width="100%">` | Satır içi şekil — dış dosya bağımlılığı yoktur, hepsi gömülüdür |

Önerilen minimum CSS `notlar/<ders>/<unit_id>.html` dosyalarının `<style>` bloğunda hazır durur; oradan kopyalanabilir.

### Markdown'a çevirme
İçerikte satır içi SVG bulunduğu için Markdown'a çevirmek şekilleri kaybettirir. Markdown gerekiyorsa `turndown` gibi bir kütüphane kullanıp SVG'leri ayrı `.svg` dosyalarına çıkarmak gerekir.

---

## Veriyi Supabase'ten yeniden çekmek

```bash
npm install @supabase/supabase-js

# Windows PowerShell
$env:SUPABASE_URL="https://jmoimahqkiepgdmwnovs.supabase.co"
$env:SUPABASE_KEY="<anon veya service_role key>"
node supabase-export.mjs
```

Betik `topics.json`, `index.json` ve `notlar/` klasörünü **üzerine yazarak** yeniden üretir.

Anahtarları `sınav/react-app/.env` (anon key) ve `.env.local` (service role key) dosyalarında bulabilirsin.

---

## Bilinen fark

Bu klasör, projedeki yerel yansımadan (`react-app/scripts/data/topics.json`) üretilmiştir. Yerel yansıma, **167 kaydın 160'ında Supabase ile bayt bayt aynıdır**. Şu 7 ünitede küçük farklar vardır (uzunluklar neredeyse aynı, muhtemelen eski aktarımlardan kalan birkaç karakterlik bozulma):

`tr-sozcuk`, `tr-cumle`, `tr-ses`, `tr-yazim`, `tr-anlatim`, `tr-fiil`, `cog-iklim`

Bu üniteler senin için kritikse `supabase-export.mjs` betiğini çalıştırarak doğrudan Supabase'ten çek — orası tek doğru kaynaktır.

---

## Lisans / kaynak notu

Konu anlatımları **MEBİ (Millî Eğitim Bakanlığı) TYT Konu Özetleri** PDF'lerinden yola çıkılarak yeniden yazılmıştır. MEB yayınlarının ticari amaçla kullanılması 5846 sayılı Fikir ve Sanat Eserleri Kanunu'na aykırıdır; bu notlar da aynı kısıtlamaya tabi kabul edilmelidir.
