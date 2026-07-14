/* ============================================================
   FEN / BIYOLOJI — TYT ders notlari (temiz, ASCII).
   biy-hucre ve biy-bilesen unitelerine dolu icerik. upsertUnits.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-biyoloji: content-loader yuklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "fen"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content, objectives, mistakes, pairs) {
    var u = mevcut(id) || { id: id, prerequisites: [], estimatedMinutes: 22 };
    u.id = id; u.name = name; u.branch = "biyoloji"; u.summary = summary;
    u.content = "<h2>" + name + "</h2>" + content;
    u.objectives = objectives || []; u.commonMistakes = mistakes || []; u.pairs = pairs || [];
    u.difficulty = 2; u.reviewedAt = "2026-07-13"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("fen", [u]);
  }

  setUnit("biy-bilesen", "Canlilarin Temel Bilesenleri",
    "Inorganik (su, mineral, asit-baz) ve organik (karbonhidrat, lipit, protein, enzim, vitamin, nukleik asit, ATP) bilesenler.",
    "<p>Canlilarin yapisini olusturan molekuller <b>inorganik</b> ve <b>organik</b> olmak uzere ikiye ayrilir.</p>" +
    "<h3>Inorganik bilesenler</h3><ul>" +
    "<li><b>Su:</b> Canli kutlesinin buyuk kismi. Cozucu, tasima ortami ve tepkime ortami; yuksek ozisisiyla vucut isisini dengeler.</li>" +
    "<li><b>Mineraller:</b> Ca, P, Fe, Na, K gibi; yapiya katilir ve gorevleri duzenler (Fe -> hemoglobin, Ca -> kemik).</li>" +
    "<li><b>Asit, baz, tuz:</b> pH dengesini ve osmotik basinci ayarlar.</li></ul>" +
    "<h3>Organik bilesenler</h3><ul>" +
    "<li><b>Karbonhidratlar:</b> Temel enerji kaynagi (glikoz). Monosakkarit, disakkarit, polisakkarit (nisasta, glikojen, seluloz).</li>" +
    "<li><b>Lipitler (yaglar):</b> Enerji deposu, zar yapisi (fosfolipit), yalitim.</li>" +
    "<li><b>Proteinler:</b> Yapi ve islev molekulleri; amino asitlerden olusur. <b>Enzimler</b> proteindir.</li>" +
    "<li><b>Enzimler:</b> Tepkimeleri hizlandiran biyolojik katalizorler; sicaklik ve pH'a duyarlidir.</li>" +
    "<li><b>Vitaminler:</b> Duzenleyici; suda (B, C) ve yagda (A, D, E, K) cozunenler.</li>" +
    "<li><b>Nukleik asitler (DNA, RNA):</b> Kalitim bilgisini tasir ve protein sentezini yonetir.</li>" +
    "<li><b>ATP:</b> Hucrenin enerji birimidir.</li></ul>",
    ["Inorganik ve organik bilesenleri ayirt eder.", "Her bilesenin gorevini aciklar."],
    ["Enzimleri karbonhidrat sanmak (enzim proteindir).", "Suyu organik bilesen sanmak (inorganiktir)."],
    [{ term: "Karbonhidrat", def: "Temel enerji kaynagi" }, { term: "Enzim", def: "Protein yapili biyokatalizor" }, { term: "DNA", def: "Kalitim molekulu" }, { term: "ATP", def: "Hucrenin enerji birimi" }]);

  setUnit("biy-hucre", "Hucre",
    "Hucre kurami, prokaryot-okaryot, hucre zari, organeller ve gorevleri.",
    "<p><b>Hucre</b>, canlilarin yapi ve gorev birimidir. Butun canliler hucrelerden olusur (hucre kurami).</p>" +
    "<h3>Prokaryot ve okaryot hucre</h3><ul>" +
    "<li><b>Prokaryot:</b> Cekirdegi ve zarli organelleri yoktur (bakteriler). DNA sitoplazmada serbesttir.</li>" +
    "<li><b>Okaryot:</b> Zarla cevrili cekirdek ve zarli organeller bulunur (bitki, hayvan, mantar, protista).</li></ul>" +
    "<h3>Hucre zari ve gecirgenlik</h3><p>Zar <b>fosfolipit</b> ve protein yapidadir; <b>secici gecirgendir</b>. Kucuk moleculer pasif (difuzyon, ozmoz), buyuk moleculer aktif tasima ve endositoz/ekzositozla gecer.</p>" +
    "<h3>Baslica organeller ve gorevleri</h3><ul>" +
    "<li><b>Mitokondri:</b> Oksijenli solunumla <b>ATP (enerji)</b> uretir.</li>" +
    "<li><b>Ribozom:</b> Protein sentezi (zarsiz).</li>" +
    "<li><b>Kloroplast:</b> Bitkilerde fotosentez.</li>" +
    "<li><b>Endoplazmik retikulum:</b> Madde iletimi ve sentez.</li>" +
    "<li><b>Golgi:</b> Salgi paketleme.</li>" +
    "<li><b>Lizozom:</b> Sindirim enzimleri.</li>" +
    "<li><b>Cekirdek:</b> DNA'yi bulundurur, hucreyi yonetir.</li></ul>" +
    "<h3>Bitki ve hayvan hucresi farki</h3><p>Bitki hucresinde <b>hucre duvari, kloroplast ve buyuk koful</b> bulunur; hayvan hucresinde <b>sentrozom</b> bulunur.</p>",
    ["Prokaryot-okaryot hucreyi ayirt eder.", "Organel-gorev eslestirir.", "Bitki-hayvan hucre farkini bilir."],
    ["Ribozomu zarli organel sanmak (zarsizdir).", "Mitokondriyi fotosentez organeli sanmak (o kloroplasttir)."],
    [{ term: "Mitokondri", def: "ATP uretimi" }, { term: "Ribozom", def: "Protein sentezi (zarsiz)" }, { term: "Kloroplast", def: "Fotosentez" }, { term: "Prokaryot", def: "Cekirdeksiz (bakteri)" }]);

})();
