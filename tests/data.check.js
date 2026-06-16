/* data.js içerik + söz dizimi denetimi (dev-only)
   Çalıştır: node tests/data.check.js
   Gerçek js/data.js dosyasını yükler. */
const fs = require("fs");
const path = require("path");
const C = require("../js/core.js");

const src = fs.readFileSync(path.join(__dirname, "..", "js", "data.js"), "utf8")
  .replace("const TYT_DATA", "global.TYT_DATA");
eval(src); // söz dizimi hatası varsa burada patlar
const D = TYT_DATA;

let fail = 0;
const err = m => { fail++; console.log("  ✗ " + m); };

// Ünite id kümesi + branş tutarlılığı
const unitIds = new Set();
D.subjects.forEach(sub => {
  (sub.units || []).forEach(u => {
    if (unitIds.has(u.id)) err("Mükerrer ünite id: " + u.id);
    unitIds.add(u.id);
    if (sub.branches) {
      const okBranch = sub.branches.some(b => b.id === u.branch);
      if (!okBranch) err(`${sub.id}/${u.id}: geçersiz branş "${u.branch}"`);
    }
    if (!Array.isArray(u.pairs) || u.pairs.length < 2) err(`${u.id}: en az 2 pair olmalı`);
    (u.pairs || []).forEach(p => { if (!p.term || !p.def) err(`${u.id}: eksik pair`); });
  });
});

// Sorular: validator + unit referansı
const v = C.validateQuestions(D.questions);
v.errors.forEach(err);
D.questions.forEach((q, i) => {
  if (q.unit && !unitIds.has(q.unit)) err(`Soru #${i}: tanımsız unit "${q.unit}"`);
});

// Özet
const pairsTotal = D.subjects.reduce((a, s) => a + s.units.reduce((x, u) => x + (u.pairs ? u.pairs.length : 0), 0), 0);
console.log("Ders:", D.subjects.length, "| Ünite:", unitIds.size, "| Soru:", D.questions.length, "| Pair:", pairsTotal);
console.log("Branşlı dersler:", D.subjects.filter(s => s.branches).map(s => s.id + "(" + s.branches.map(b => b.id).join("/") + ")").join("  "));
console.log("Soru dağılımı:", D.subjects.map(s => s.id + "=" + D.questions.filter(q => q.subject === s.id).length).join(" "));
if (v.warnings.length) console.log("Uyarılar:", v.warnings.length);
console.log(fail ? `\nHATALI: ${fail} sorun` : "\nTÜM DATA DENETİMLERİ GEÇTİ ✓");
process.exit(fail ? 1 : 0);
