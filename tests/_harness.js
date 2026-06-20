/* Node test koşum ortamı: data.js'i metin olarak okuyup (export gerektirmez)
   eval eder, ardından içerik modüllerini content-loader üzerinden ekler.
   Birleşik TYT_DATA döndürür. */
const fs = require("fs");
const path = require("path");

function abs(p) { return path.join(__dirname, "..", p); }

function load() {
  global.window = undefined; // content-loader globalThis'e bağlanır

  // data.js — const TYT_DATA -> global.TYT_DATA
  const src = fs.readFileSync(abs("js/data.js"), "utf8").replace("const TYT_DATA", "global.TYT_DATA");
  eval(src);

  // content-loader (globalThis.TYT_CONTENT)
  delete require.cache[require.resolve("../js/content-loader.js")];
  require("../js/content-loader.js");

  // İçerik modülleri — sırayla TYT_CONTENT.addUnits/addQuestions çağırır
  ["js/data/tarih.js", "js/data/tarih-q2.js", "js/data/turkce-pilot.js", "js/data/turkce-01.js", "js/data/matematik-pilot.js", "js/data/geometri-pilot.js", "js/data/fen-pilot.js", "js/data/sosyal-pilot.js"].forEach(function (m) {
    try { const s = fs.readFileSync(abs(m), "utf8"); eval(s); }
    catch (e) { console.warn("Modül yüklenemedi:", m, e.message); }
  });

  if (global.TYT_CONTENT && global.TYT_CONTENT.finalize) global.TYT_CONTENT.finalize();
  return global.TYT_DATA;
}

module.exports = { load: load };
