#!/usr/bin/env node
/* ============================================================
   SKILL: rapor — tüm içerik havuzunun durumunu çıkarır.
   Kullanım:  node scripts/rapor.js
   index.html'deki js/data/*.js modül listesini otomatik okur; _harness.js'e
   bağımlı değildir (yeni dosyalar otomatik dahil olur).
   ============================================================ */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
function abs(p) { return path.join(root, p); }

global.window = undefined;
eval(fs.readFileSync(abs("js/data.js"), "utf8").replace(/\0/g, "").replace("const TYT_DATA", "global.TYT_DATA"));
require(abs("js/content-loader.js"));

// index.html'den js/data/*.js sırasını çek
const html = fs.readFileSync(abs("index.html"), "utf8");
// Mount eskimesi/truncation tespiti: index.html </html> ile bitmeli, yoksa modül listesi eksik.
if (!/<\/html>\s*$/.test(html.replace(/\0/g, "").trimEnd())) {
  console.warn("! UYARI: index.html mount önbelleğinde TRUNCATED (</html> yok). Modül listesi eksik olabilir; sayılar güvenilmez. Read/Grep ile doğrula.");
}
const mods = [];
html.replace(/src="(js\/data\/[^"?]+)\.js/g, function (_, p) { mods.push(p + ".js"); return _; });
// Bir dosya geçerli bir kapanışla (; } ) ]) bitmiyorsa mount'ta kesilmiş demektir; gerçek dosya sağlam olabilir.
function mountKesik(src) { const t = src.replace(/\0/g, "").trimEnd(); return t.length > 0 && !/[;)}\]]$/.test(t); }
const stale = [];
mods.forEach(function (m) {
  let src = "";
  try { src = fs.readFileSync(abs(m), "utf8"); } catch (e) { console.warn("! okunamadı:", m, "-", e.message); return; }
  if (mountKesik(src)) stale.push(m);
  try { eval(src.replace(/\0/g, "")); }  // mount NUL padding'e dayanıklı
  catch (e) { console.warn("! yüklenemedi:", m, "-", e.message, mountKesik(src) ? "[STALE/TRUNCATED mount — gerçek dosya sağlam olabilir, Read ile doğrula]" : ""); }
});
if (stale.length) console.warn("\n! MOUNT-STALE/TRUNCATED (" + stale.length + "): " + stale.join(", ") +
  "\n  → Bu dosyalar mount önbelleğinde kesik; gerçek dosyalar sağlam olabilir. rapor.js sayıları BUNLAR İÇİN güvenilmez, Read/Grep ile doğrula.\n");
if (global.TYT_CONTENT && global.TYT_CONTENT.finalize) global.TYT_CONTENT.finalize();

const D = global.TYT_DATA;
const qs = D.questions || [];
console.log("=== İÇERİK HAVUZU RAPORU ===");
console.log("Toplam soru:", qs.length, "| modül:", mods.length);

// Ders bazında
D.subjects.forEach(function (s) {
  const sq = qs.filter(function (q) { return q.subject === s.id; });
  console.log("\n• " + s.id + " — ünite: " + (s.units ? s.units.length : 0) + " | soru: " + sq.length);
});

// %20/40/40 hedefine göre 25'lik üniteler
console.log("\n--- 25 soruluk üniteler: dağılım denetimi ---");
const byUnit = {};
qs.forEach(function (q) { (byUnit[q.unit] = byUnit[q.unit] || []).push(q); });
let tam = 0, sorunlu = 0;
Object.keys(byUnit).sort().forEach(function (u) {
  const arr = byUnit[u];
  if (arr.length !== 25) return;
  const d = {}; arr.forEach(function (q) { d[q.difficulty] = (d[q.difficulty] || 0) + 1; });
  const ok = d[1] === 5 && d[2] === 10 && d[3] === 10;
  if (ok) tam++; else { sorunlu++; console.log("  ✗ " + u + " → " + JSON.stringify(d)); }
});
console.log("25'lik ünite: " + (tam + sorunlu) + " | %20/40/40 uygun: " + tam + " | sorunlu: " + sorunlu);

// Genel sağlık
let optErr = 0, ansErr = 0, telif = 0;
qs.forEach(function (q) {
  if (!q.options || q.options.length !== 5) optErr++;
  if (!(q.answer >= 0 && q.answer <= 4)) ansErr++;
  if (!(q.sourceType === "original" && q.copyrightSafe === true)) telif++;
});
console.log("\nGenel: şık hata " + optErr + " | cevap hata " + ansErr + " | telif-dışı " + telif);
