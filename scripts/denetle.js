#!/usr/bin/env node
/* ============================================================
   SKILL: denetle — bir ünitenin sorularını yayına uygunluk açısından denetler.
   Kullanım:  node scripts/denetle.js <unit-id> <veri-dosyasi>
   Örnek:     node scripts/denetle.js mat-fonksiyon js/data/matematik-soru-fonksiyon.js
   Mount eskimesine dayanıklı: gerekli dosyaları fs ile taze okur.
   Çıktı: GEÇTİ / KALDI + sayaçlar. Çıkış kodu 0 (geçti) / 1 (kaldı).
   ============================================================ */
const fs = require("fs");
const path = require("path");

const unitId = process.argv[2];
const dataFile = process.argv[3];
if (!unitId || !dataFile) {
  console.error("Kullanım: node scripts/denetle.js <unit-id> <veri-dosyasi>");
  process.exit(2);
}
const root = path.join(__dirname, "..");
function abs(p) { return path.join(root, p); }

// 1) Sözdizimi (require ile yakalanır)
global.window = undefined;
try {
  eval(fs.readFileSync(abs("js/data.js"), "utf8").replace(/\0/g, "").replace("const TYT_DATA", "global.TYT_DATA"));
  require(abs("js/content-loader.js"));
  eval(fs.readFileSync(abs(dataFile), "utf8").replace(/\0/g, ""));  // mount NUL padding'e dayanıklı
  if (global.TYT_CONTENT && global.TYT_CONTENT.finalize) global.TYT_CONTENT.finalize();
} catch (e) {
  console.error("KALDI — dosya yüklenemedi / sözdizimi hatası:\n ", e.message);
  process.exit(1);
}

const r = (global.TYT_DATA.questions || []).filter(function (q) { return q.unit === unitId; });
if (r.length === 0) { console.error("KALDI — '" + unitId + "' için soru bulunamadı."); process.exit(1); }

const dist = {};
r.forEach(function (q) { dist[q.difficulty] = (dist[q.difficulty] || 0) + 1; });

let optErr = 0, ansErr = 0, dupOpt = 0, telifErr = 0, bosAlan = 0;
r.forEach(function (q) {
  if (!q.options || q.options.length !== 5) optErr++;
  if (!(q.answer >= 0 && q.answer <= 4)) ansErr++;
  if (q.options && new Set(q.options).size !== q.options.length) dupOpt++;
  if (!(q.sourceType === "original" && q.copyrightSafe === true)) telifErr++;
  if (!q.q || !q.explain || !q.solution) bosAlan++;
});
const ids = r.map(function (q) { return q.id; });
const idDup = ids.length - new Set(ids).size;

const say = r.length;
const dagilimOk = say === 25 && dist[1] === 5 && dist[2] === 10 && dist[3] === 10;
const hataYok = optErr + ansErr + dupOpt + idDup + telifErr + bosAlan === 0;
const gecti = dagilimOk && hataYok;

console.log("── denetle: " + unitId + " ──");
console.log("soru: " + say + " | dağılım 1/2/3: " + JSON.stringify(dist) +
  " (" + Math.round((dist[1] || 0) / say * 100) + "/" + Math.round((dist[2] || 0) / say * 100) + "/" + Math.round((dist[3] || 0) / say * 100) + ")");
console.log("şık hata: " + optErr + " | cevap hata: " + ansErr + " | şık tekrar: " + dupOpt +
  " | id tekrar: " + idDup + " | telif hata: " + telifErr + " | boş alan: " + bosAlan);
console.log(gecti ? "SONUÇ: GEÇTİ ✓" : "SONUÇ: KALDI ✗" +
  (dagilimOk ? "" : "  [dağılım 5/10/10 değil]") + (hataYok ? "" : "  [hata sayaçları > 0]"));
process.exit(gecti ? 0 : 1);
