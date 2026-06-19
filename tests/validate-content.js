/* ============================================================
   Doğrulama Kapısı — deploy öncesi tek komut.
   Hata varsa çıkış kodu 1 (yayını engelle).
   Çalıştır: node tests/validate-content.js
   ============================================================ */
const { load } = require("./_harness.js");
const { validateContent } = require("../js/validation.js");

const r = validateContent(load());
if (r.errors.length) {
  console.error("DOĞRULAMA BAŞARISIZ — " + r.errors.length + " hata:");
  r.errors.forEach(function (e) { console.error("  ✗ " + e); });
  process.exit(1);
}
console.log("Doğrulama geçti ✓  (uyarı: " + r.warnings.length + ")");
process.exit(0);
