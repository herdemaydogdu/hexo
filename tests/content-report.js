/* ============================================================
   İçerik Kalite Raporu (P1-12) — dev-only
   Çalıştır: node tests/content-report.js
   Gerçek js/data.js'i yükler; soru bankasını denetler ve
   manuel inceleme gereken maddeleri ayrı listeler.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const C = require("../js/core.js");

const src = fs.readFileSync(path.join(__dirname, "..", "js", "data.js"), "utf8")
  .replace("const TYT_DATA", "global.TYT_DATA");
eval(src);
const D = TYT_DATA;

// Ünite/branş yapısı
const unitIds = new Set();
const structErr = [];
D.subjects.forEach(sub => (sub.units || []).forEach(u => {
  if (unitIds.has(u.id)) structErr.push("Mükerrer ünite id: " + u.id);
  unitIds.add(u.id);
  if (sub.branches && !sub.branches.some(b => b.id === u.branch)) structErr.push(`${u.id}: geçersiz branş ${u.branch}`);
  if (!Array.isArray(u.pairs) || u.pairs.length < 2) structErr.push(`${u.id}: oyun çifti < 2`);
}));

// Soru validatörü
const v = C.validateQuestions(D.questions);
D.questions.forEach((q, i) => { if (q.unit && !unitIds.has(q.unit)) v.errors.push(`Soru #${i}: tanımsız unit ${q.unit}`); });

const manual = v.warnings.filter(w => /manuel inceleme/.test(w));
const otherWarn = v.warnings.filter(w => !/manuel inceleme/.test(w));
const errors = structErr.concat(v.errors);

const line = "─".repeat(48);
console.log(line);
console.log("  TYT İÇERİK KALİTE RAPORU");
console.log(line);
console.log("Ders:", D.subjects.length, "| Ünite:", unitIds.size, "| Soru:", D.questions.length);
console.log("Dağılım:", D.subjects.map(s => s.id + "=" + D.questions.filter(q => q.subject === s.id).length).join("  "));
console.log(line);
console.log("KRİTİK HATA:", errors.length);
errors.forEach(e => console.log("  ✗ " + e));
console.log("\nUYARI:", otherWarn.length);
otherWarn.forEach(w => console.log("  ! " + w));
console.log("\nMANUEL İNCELEME GEREKEN:", manual.length);
manual.forEach(w => console.log("  ? " + w));
console.log(line);
console.log(errors.length ? "SONUÇ: KRİTİK HATA VAR" : "SONUÇ: Kritik hata yok ✓");
process.exit(errors.length ? 1 : 0);
