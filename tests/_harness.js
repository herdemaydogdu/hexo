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
  ["js/data/tarih.js", "js/data/tarih-q2.js", "js/data/turkce-pilot.js", "js/data/turkce-01.js", "js/data/turkce-02.js", "js/data/turkce-03.js", "js/data/turkce-04.js", "js/data/turkce-05.js", "js/data/turkce-paragraf.js", "js/data/turkce-paragraf2.js", "js/data/turkce-06.js", "js/data/turkce-07.js", "js/data/turkce-08.js", "js/data/turkce-soru-sozcuk.js", "js/data/turkce-soru-cumle.js", "js/data/turkce-soru-paragraf.js", "js/data/turkce-soru-ses.js", "js/data/turkce-soru-yazim.js", "js/data/matematik-pilot.js", "js/data/matematik-konu-01.js", "js/data/matematik-konu-02.js", "js/data/matematik-konu-03.js", "js/data/matematik-konu-04.js", "js/data/matematik-konu-05.js", "js/data/matematik-konu-06.js", "js/data/matematik-soru-temel.js", "js/data/matematik-soru-bolme.js", "js/data/matematik-soru-ondalik.js", "js/data/matematik-soru-esitsizlik.js", "js/data/matematik-soru-mutlak.js", "js/data/matematik-soru-uslu.js", "js/data/matematik-soru-koklu.js", "js/data/matematik-soru-oran.js", "js/data/matematik-soru-ebobekok.js", "js/data/matematik-soru-rasyonel.js", "js/data/matematik-soru-carpan.js", "js/data/matematik-soru-denklem.js", "js/data/matematik-soru-sayi.js", "js/data/matematik-soru-yas.js", "js/data/matematik-soru-yuzde.js", "js/data/matematik-soru-hareket.js", "js/data/matematik-soru-isci.js", "js/data/matematik-soru-kesirprob.js", "js/data/matematik-soru-karisim.js", "js/data/matematik-soru-kume.js", "js/data/matematik-soru-mantik.js", "js/data/matematik-soru-fonksiyon.js", "js/data/matematik-soru-polinom.js", "js/data/matematik-soru-olasilik.js", "js/data/matematik-soru-istatistik.js", "js/data/matematik-soru-problem.js", "js/data/geometri-pilot.js", "js/data/geometri-soru-acilar.js", "js/data/geometri-soru-alan.js", "js/data/sosyal-konu-tarih.js", "js/data/sosyal-konu-tarih-detay.js", "js/data/sosyal-konu-tarih-detay2.js", "js/data/sosyal-soru-tarbilim.js", "js/data/sosyal-soru-tarilkcag.js", "js/data/sosyal-soru-tarilkturk.js", "js/data/sosyal-soru-tarislam.js", "js/data/sosyal-soru-tarturkislam.js", "js/data/sosyal-soru-tarselcuklu.js", "js/data/sosyal-konu-tarih-osmanli.js", "js/data/sosyal-soru-tarkurulus.js", "js/data/sosyal-soru-tarklasik.js", "js/data/sosyal-soru-tardegisim.js", "js/data/sosyal-soru-tarmodern.js", "js/data/sosyal-soru-tar20yy.js", "js/data/sosyal-soru-tarmilli.js", "js/data/sosyal-soru-tarinkilap.js", "js/data/sosyal-soru-tarpolitika.js", "js/data/sosyal-soru-tarcagdas.js", "js/data/sosyal-konu-cografya.js", "js/data/sosyal-soru-cogkonum.js", "js/data/sosyal-soru-cogiklim.js", "js/data/sosyal-soru-cogharita.js", "js/data/sosyal-soru-cogdunya.js", "js/data/sosyal-soru-cogatmosfer.js", "js/data/sosyal-soru-cogickuvvet.js", "js/data/sosyal-soru-cogdiskuvvet.js", "js/data/sosyal-soru-cogsu.js", "js/data/sosyal-soru-cogtoprak.js", "js/data/sosyal-soru-cognufus.js", "js/data/sosyal-soru-coggoc.js", "js/data/sosyal-soru-cogyerlesme.js", "js/data/sosyal-soru-cogekonomi.js", "js/data/fen-pilot.js", "js/data/fen-soru-hareket.js", "js/data/fen-soru-periyodik.js", "js/data/sosyal-pilot.js"].forEach(function (m) {
    try { const s = fs.readFileSync(abs(m), "utf8"); eval(s); }
    catch (e) { console.warn("Modül yüklenemedi:", m, e.message); }
  });

  if (global.TYT_CONTENT && global.TYT_CONTENT.finalize) global.TYT_CONTENT.finalize();
  return global.TYT_DATA;
}

module.exports = { load: load };
