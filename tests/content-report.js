/* ============================================================
   İçerik Raporu — ders/branş bazında ünite & soru sayıları + kalite.
   data.js + modüler içerik (js/data/*) birlikte değerlendirilir.
   Çalıştır: node tests/content-report.js
   ============================================================ */
const { load } = require("./_harness.js");
const { validateContent } = require("../js/validation.js");

const D = load();
const r = validateContent(D);

const line = "─".repeat(50);
console.log(line);
console.log("  TYT İÇERİK RAPORU");
console.log(line);
console.log("Toplam ünite:", r.stats.totalUnits, "| Toplam soru:", r.stats.totalQuestions);
console.log("\nDağılım:");
Object.keys(r.stats.subjects).forEach(function (sid) {
  const s = r.stats.subjects[sid];
  console.log("  " + s.name + " — ünite " + s.units + ", soru " + s.questions);
  Object.keys(s.branches || {}).forEach(function (bid) {
    const b = s.branches[bid];
    console.log("     · " + b.name + " — ünite " + b.units + ", soru " + b.questions);
  });
});
console.log("\nSorusuz ünite:", r.stats.unitsWithoutQuestion.length);

console.log(line);
console.log("KRİTİK HATA:", r.errors.length);
r.errors.forEach(function (e) { console.log("  ✗ " + e); });
console.log("\nUYARI:", r.warnings.length);
r.warnings.slice(0, 50).forEach(function (w) { console.log("  ! " + w); });
if (r.warnings.length > 50) console.log("  ... +" + (r.warnings.length - 50) + " uyarı daha");
console.log(line);
console.log(r.errors.length ? "SONUÇ: KRİTİK HATA VAR ✗" : "SONUÇ: Kritik hata yok ✓");
process.exit(r.errors.length ? 1 : 0);
