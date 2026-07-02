#!/usr/bin/env node
/* ============================================================
   SKILL: surum-artir — index.html'deki tüm ?v=NN asset sürümünü +1 artırır.
   Kullanım:  node scripts/surum-artir.js            (mevcut → +1)
              node scripts/surum-artir.js 60          (hedef sürüme sabitle)
              node scripts/surum-artir.js --kontrol   (yalnız tutarlılık kontrolü)
   CSS/JS değiştiğinde cache-busting için çalıştırılır.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "index.html");
let html = fs.readFileSync(file, "utf8");

const bulunan = Array.from(new Set((html.match(/\?v=(\d+)/g) || []).map(function (s) { return +s.slice(3); })));
if (bulunan.length === 0) { console.error("index.html içinde ?v=NN bulunamadı."); process.exit(1); }

if (process.argv[2] === "--kontrol") {
  console.log(bulunan.length === 1
    ? "Sürüm tutarlı ✓  (v" + bulunan[0] + ")"
    : "TUTARSIZ ✗  farklı sürümler: " + bulunan.sort(function (a, b) { return a - b; }).join(", "));
  process.exit(bulunan.length === 1 ? 0 : 1);
}

const enBuyuk = Math.max.apply(null, bulunan);
const hedef = process.argv[2] ? parseInt(process.argv[2], 10) : enBuyuk + 1;
if (isNaN(hedef)) { console.error("Geçersiz hedef sürüm."); process.exit(2); }

const yeni = html.replace(/\?v=\d+/g, "?v=" + hedef);
fs.writeFileSync(file, yeni, "utf8");
const adet = (yeni.match(/\?v=/g) || []).length;
console.log("Sürüm güncellendi: v" + enBuyuk + " → v" + hedef + "  (" + adet + " asset)");
