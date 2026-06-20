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
node tests/content-report.js   # ders/branş bazında ünite & soru sayıları + kalite
node tests/validate-content.js # DEPLOY KAPISI: hata varsa çıkış kodu 1
```
Bir değişiklik göndermeden önce hepsini çalıştır. `validate-content.js` **hata vermeden geçmeli**; aksi hâlde yayınlama. `content-report.js` + `validate-content.js`, `data.js` ile `js/data/*` modüllerini birlikte değerlendirir.

## Modüler içerik ekleme (ÖNERİLEN)
Yeni içerik artık `data.js`'e değil, `js/data/` altındaki **modül dosyalarına** eklenir. Bir modül oluştur (örn. `js/data/turkce-02.js`), `index.html`'de `content-loader.js`'ten sonra ve `validation.js`'ten önce `<script>` ile bağla, `tests/_harness.js` modül listesine ekle. Modül, global `TYT_CONTENT` API'sini kullanır:

```js
(function () {
  TYT_CONTENT.addUnits("matematik", [{
    id: "mat-mutlak", name: "Mutlak Değer", branch: null,
    summary: "...", content: "<h2>...</h2>...",
    objectives: ["..."], commonMistakes: ["..."], pairs: [{term,def}],
    reviewStatus: "draft", originalityStatement: true, reviewedAt: null
  }]);
  TYT_CONTENT.addQuestions([{
    id: "matematik-mat-mutlak-001", subject: "matematik", unit: "mat-mutlak",
    skill: "islem", difficulty: 2, estimatedSeconds: 60,
    q: "Soru kökü", options: ["A","B","C","D","E"], answer: 2,  // 5 şık, 0-tabanlı
    explain: "Kısa açıklama",
    solution: { short: "...", steps: ["1.","2."], whyOthersWrong: ["A neden yanlış", "..."] },
    sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
  }]);
})();
```

API: `addSubject({id,name,icon})` yeni ders; `addUnits(subjectId, units)`; `addQuestions(qs)`; `replaceBranchUnits(subjectId, branchId, units)` bir branşın ünitelerini topluca değiştirir (birleştirme); `remapQuestionUnits(map)` eski soru bağlarını yeni id'lere eşler; `finalize()` id'siz sorulara kararlı id verir (index.html otomatik çağırır).

Kurallar: `q/options/answer/explain` zorunlu (mevcut arayüz bunları kullanır); `id, difficulty, skill, solution, sourceType, reviewStatus` ileri kullanım içindir. Soru **tam 5 şıklı**, `answer` 0–4. `unit` var olan bir üniteye işaret etmeli (validator orphan'ı yakalar).

> `data.js` (eski tekil depo) hâlâ çalışır ama yeni içerik için **modül kullan**; tek dosyada büyüme önlenir.

## Telif ve kaynak (zorunlu)
- ÖSYM/MEB soru, seçenek, çözüm veya PDF'i **kopyalama**; küçük değişiklikle "özgün" gösterme. Tüm metinler sıfırdan özgün yazılır (`sourceType:"original"`).
- Çıkmış sorular yalnızca **resmî ÖSYM bağlantısı** olarak sunulur (`js/data/cikmis.js`).
- Harici kaynak/görsel kullanılırsa `js/data/sources.js`'e `{id,title,publisher,url,license,licenseUrl,accessDate,allowedUse,attributionText}` kaydı eklenir; lisansı doğrulanamayan içerik alınmaz.
- Yapay zekâ üretimi içerik `reviewStatus:"draft"` kalır; alan uzmanı onayından sonra `verified` yapılır.

## Kurallar
- Üretimde framework/build ekleme; `index.html` doğrudan çalışmalı.
- Kullanıcı ilerlemesini sebepsiz silme; şema değişirse `core.js`'te migration yaz (idempotent).
- Saf iş kurallarını `core.js`'e koy ve `tests/core.test.js`'e test ekle.
- Tarih karşılaştırmalarında `TYTCore.getLocalDateKey` kullan (UTC değil).
- Mutlak `/asset` yolu kullanma (GitHub Pages alt dizinini kırar).

## Yayınlama
Değişiklikten sonra `yayinla.bat` (Windows) GitHub'a push eder; GitHub Pages otomatik güncellenir.

Mimari ayrıntılar: [docs/architecture.md](docs/architecture.md).
