# Katkı Rehberi

## Çalıştırma
`index.html`'i tarayıcıda aç. Yerel sunucu (isteğe bağlı):
```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Testler (Node gerekir, build gerekmez)
```bash
node tests/core.test.js        # saf fonksiyon birim/regresyon testleri
node tests/data.check.js       # veri yapısı + soru bütünlüğü
node tests/content-report.js   # içerik kalite raporu (hata/uyarı/manuel inceleme)
```
Bir değişiklik göndermeden önce üçünü de çalıştır; `core.test.js` sıfır hata vermeli.

## Yeni soru ekleme
`js/data.js` → ilgili dersin `questions` mantığına uygun, `questions` dizisine ekle:
```js
{ subject: "matematik", unit: "mat-uslu",
  q: "Soru metni",
  options: ["A","B","C","D","E"], answer: 2,   // answer = 0..options.length-1
  explain: "Kısa ve net açıklama (≥15 karakter)." }
```
`unit` ilgili dersin `units[]` içindeki bir ünite id'si olmalı. Açılışta validator konsola rapor verir.

## Yeni ünite ekleme
İlgili dersin `units[]` dizisine `{ id, name, branch?, summary, content, pairs[] }` ekle. Sosyal/Fen derslerinde `branch` zorunludur (Tarih/Coğrafya/Felsefe/Din veya Fizik/Kimya/Biyoloji). `pairs` (terim↔tanım) en az 2 olmalı; oyunlar bunları kullanır.

## Kurallar
- Üretimde framework/build ekleme; `index.html` doğrudan çalışmalı.
- Kullanıcı ilerlemesini sebepsiz silme; şema değişirse `core.js`'te migration yaz (idempotent).
- Saf iş kurallarını `core.js`'e koy ve `tests/core.test.js`'e test ekle.
- Tarih karşılaştırmalarında `TYTCore.getLocalDateKey` kullan (UTC değil).
- Mutlak `/asset` yolu kullanma (GitHub Pages alt dizinini kırar).

## Yayınlama
Değişiklikten sonra `yayinla.bat` (Windows) GitHub'a push eder; GitHub Pages otomatik güncellenir.

Mimari ayrıntılar: [docs/architecture.md](docs/architecture.md).
