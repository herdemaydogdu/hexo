/* ============================================================
   FEN / BIYOLOJI — TYT konu anlatimi (Bolum 2: Hucre, madde gecisleri,
   siniflandirma, canlilar dunyasi, hucre bolunmeleri, ekosistem).
   TEK Write ile yazildi. upsertUnits. Metin ozgun.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-biyoloji-tam2: content-loader yuklenmedi"); return; }

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

  setUnit("biy-hucre", "Hucre ve Organelleri",
    "Hucre kurami, prokaryot-okaryot, zar ve organeller.",
    "<p><b>Hucre</b> canlilarin yapi ve gorev birimidir (hucre kurami). Iki temel tipi vardir:</p><ul>" +
    "<li><b>Prokaryot:</b> Cekirdegi ve zarli organelleri yoktur (bakteri, arke). DNA sitoplazmada serbesttir; ribozom bulunur.</li>" +
    "<li><b>Okaryot:</b> Zarla cevrili cekirdek ve zarli organeller vardir (bitki, hayvan, mantar, protista).</li></ul>" +
    "<h3>Organeller ve gorevleri</h3><ul>" +
    "<li><b>Cekirdek:</b> DNA'yi bulundurur, hucreyi yonetir.</li>" +
    "<li><b>Mitokondri:</b> Oksijenli solunumla <b>ATP</b> uretir.</li>" +
    "<li><b>Ribozom:</b> Protein sentezi (zarsiz).</li>" +
    "<li><b>Kloroplast:</b> Bitki/alglerde <b>fotosentez</b>.</li>" +
    "<li><b>Endoplazmik retikulum:</b> Madde iletimi, sentez (granulli/granulsuz).</li>" +
    "<li><b>Golgi:</b> Salgi paketleme ve isleme.</li>" +
    "<li><b>Lizozom:</b> Sindirim enzimleri (hucre ici sindirim).</li>" +
    "<li><b>Koful:</b> Depo, bosaltim; bitkide buyuk.</li>" +
    "<li><b>Sentrozom:</b> Hayvan hucresinde bolunmede rol.</li></ul>" +
    "<h3>Bitki-hayvan hucresi farki</h3><p>Bitkide <b>hucre duvari, kloroplast, buyuk koful</b>; hayvanda <b>sentrozom</b> bulunur.</p>",
    ["Prokaryot-okaryot ayrimini yapar.", "Organel-gorev eslestirir.", "Bitki-hayvan hucre farkini bilir."],
    ["Ribozomu zarli organel sanmak (zarsizdir).", "Mitokondriyi fotosentez organeli sanmak (kloroplast)."],
    [{ term: "Mitokondri", def: "ATP uretimi" }, { term: "Ribozom", def: "Protein sentezi (zarsiz)" }, { term: "Kloroplast", def: "Fotosentez" }, { term: "Prokaryot", def: "Cekirdeksiz (bakteri)" }]);

  setUnit("biy-madde", "Hucre Zarindan Madde Gecisleri",
    "Pasif tasima (difuzyon, osmoz), aktif tasima, endositoz-ekzositoz.",
    "<p>Hucre zari <b>secici gecirgendir</b>; hangi maddenin gececegini denetler.</p>" +
    "<h3>Pasif tasima (enerji harcanmaz)</h3><ul>" +
    "<li><b>Difuzyon:</b> Maddenin cok yogun ortamdan az yogun ortama gecmesi.</li>" +
    "<li><b>Kolaylastirilmis difuzyon:</b> Tasiyici proteinle, yine yogunluk farkiyla.</li>" +
    "<li><b>Osmoz:</b> Suyun az yogun (cok su) ortamdan cok yogun (az su) ortama gecmesi.</li></ul>" +
    "<p><b>Cozelti cesitleri:</b> Hipotonik ortamda hucre su alir (sisme/patlama); hipertonik ortamda su verir (buzusme, plazmoliz); izotonikte denge.</p>" +
    "<h3>Aktif tasima (enerji harcanir)</h3><p>Madde <b>az yogundan cok yoguna</b> (yogunluk gradyanina ters) tasiyici proteinle ve <b>ATP</b> harcanarak tasinir.</p>" +
    "<h3>Buyuk moleculer</h3><p><b>Endositoz</b> (hucre disaridan koful ile madde alir) ve <b>ekzositoz</b> (koful ile disari verir); enerji gerektirir.</p>",
    ["Pasif-aktif tasimayi ayirir.", "Osmoz ve cozelti cesitlerini yorumlar."],
    ["Osmozda cozunenin gectigini sanmak (su gecer).", "Aktif tasimayi enerjisiz sanmak (ATP gerekir)."],
    [{ term: "Difuzyon", def: "Cok yogundan az yoguna (enerjisiz)" }, { term: "Osmoz", def: "Suyun gecisi" }, { term: "Aktif tasima", def: "Gradyana ters, ATP'li" }]);

  setUnit("biy-siniflandirma", "Canlilarin Siniflandirilmasi",
    "Bilimsel siniflandirma, ikili adlandirma ve kategoriler.",
    "<p><b>Siniflandirma (sistematik)</b>, canlilari benzerliklerine gore gruplama bilimidir. Bilimsel siniflandirma <b>akrabalik (dogal)</b> temellidir: yapisal, genetik ve embriyolojik benzerlikler esas alinir.</p>" +
    "<h3>Kategoriler (buyukten kucuge)</h3><p><b>Alem, Sube, Sinif, Takim, Aile, Cins, Tur</b>. Kuculdukce <b>birey sayisi azalir</b>, <b>ortak ozellik ve akrabalik artar</b>.</p>" +
    "<h3>Tur ve ikili adlandirma</h3><p><b>Tur:</b> Ortak atadan gelen, ciftlestiginde <b>verimli</b> (kisir olmayan) doller verebilen bireyler. <b>Ikili adlandirma (Linnaeus):</b> Ilk kelime <b>cins</b> (buyuk harf), ikinci kelime <b>tur</b> tanimlayici (kucuk harf), italik yazilir. Ornek: Homo sapiens.</p>",
    ["Siniflandirma kategorilerini sirayla bilir.", "Ikili adlandirmayi ve tur kavramini aciklar."],
    ["Kategori kuculdukce ortak ozellik azalir sanmak (artar).", "Farkli turlerin verimli dol verdigini sanmak."],
    [{ term: "Tur", def: "Verimli dol verebilen bireyler" }, { term: "Ikili adlandirma", def: "Cins + tur adi (italik)" }, { term: "Alem-Tur", def: "Buyukten kucuge kategori" }]);

  setUnit("biy-alemler", "Canlilar Dunyasi: Alemler",
    "Bakteri, arke, protista, mantar, bitki ve hayvan alemleri.",
    "<ul>" +
    "<li><b>Bakteriler:</b> Prokaryot, tek hucreli. Uretici/tuketici olabilir; ayristirici olarak madde dongusunde onemli. Bazilari hastalik yapar.</li>" +
    "<li><b>Arkeler:</b> Prokaryot; asiri ortamlarda (sicak, tuzlu) yasayabilir.</li>" +
    "<li><b>Protista:</b> Okaryot, cogu tek hucreli (amip, paramesyum, oglena, algler). Cesitli beslenme.</li>" +
    "<li><b>Mantarlar:</b> Okaryot, <b>klorofilsiz</b>, <b>ayristirici/parazit</b>; hucre duvari <b>kitin</b>. Maya, kuf, semsiye mantar.</li>" +
    "<li><b>Bitkiler:</b> Okaryot, cok hucreli, <b>uretici</b> (fotosentez); hucre duvari <b>seluloz</b>.</li>" +
    "<li><b>Hayvanlar:</b> Okaryot, cok hucreli, <b>tuketici</b>; hucre duvari yok, hareketli.</li>" +
    "</ul>" +
    "<p>Uretici fotosentezle besin uretir; tuketici disaridan alir; ayristirici olu/atigi parcalar.</p>",
    ["Alemleri ayirt eder.", "Beslenme tiplerini eslestirir."],
    ["Mantari bitki sanmak (klorofilsiz, ayristirici).", "Bakteriyi okaryot sanmak (prokaryottur)."],
    [{ term: "Mantar", def: "Klorofilsiz, kitin duvar" }, { term: "Bitki", def: "Uretici, seluloz duvar" }, { term: "Bakteri", def: "Prokaryot" }]);

  setUnit("biy-virus", "Virusler",
    "Virus yapisi, canli-cansiz ozellikleri ve etkileri.",
    "<p><b>Virusler</b> hucresel yapida degildir; <b>protein kilif</b> ve icinde <b>nukleik asit (DNA veya RNA)</b> tasirlar. <b>Zorunlu parazittir</b>; ancak canli hucre icinde cogalabilir.</p>" +
    "<h3>Canli ve cansiz ozellikleri</h3><ul>" +
    "<li><b>Canli gibi:</b> Nukleik asit tasir, konak hucrede <b>cogalir</b>, mutasyona ugrar, kalitsal cesitlilik gosterir.</li>" +
    "<li><b>Cansiz gibi:</b> Hucre disinda <b>kristallenebilir</b>, kendi basina metabolizmasi ve organeli yoktur, konaksiz cogalamaz.</li></ul>" +
    "<p>Bu yuzden virusler <b>alemler icinde siniflandirilmaz</b>. Grip, kizamik, COVID gibi hastaliklara yol acar; antibiyotikler viruslere etki etmez.</p>",
    ["Virus yapisini bilir.", "Virusun canli-cansiz ozelliklerini karsilastirir."],
    ["Virusleri hucreli sanmak (hucresel degildir).", "Viruse antibiyotik etki eder sanmak (etmez)."],
    [{ term: "Virus", def: "Protein kilif + nukleik asit" }, { term: "Zorunlu parazit", def: "Sadece canli hucrede cogalir" }, { term: "Antibiyotik", def: "Viruslere etkisiz" }]);

  setUnit("biy-mitoz", "Mitoz ve Hucre Dongusu",
    "Hucre dongusu, interfaz ve mitoz evreleri.",
    "<p><b>Hucre dongusu</b>, bir hucrenin bolunerek iki hucre olusturana kadar gecirdigi surectir: <b>interfaz + bolunme</b>.</p>" +
    "<h3>Interfaz</h3><p>Bolunmeye hazirlik; hucre buyur, organeller ve <b>DNA eslenir (replikasyon)</b>. Hucrenin en uzun evresidir.</p>" +
    "<h3>Mitoz (karyokinez)</h3><p>Cekirdek bolunmesi; <b>profaz, metafaz, anafaz, telofaz</b> evreleriyle olur. Sonucta <b>kromozom sayisi degismez</b>: 2n hucreden 2n iki hucre olusur.</p>" +
    "<h3>Sitokinez</h3><p>Sitoplazma bolunmesi. Hayvan hucresinde <b>bogumlanma</b>, bitki hucresinde <b>ara lamel (orta plak)</b> ile gerceklesir.</p>" +
    "<p><b>Onemi:</b> Buyume, yenilenme (yara iyilesmesi) ve tek hucrelilerde <b>eseysiz ureme</b>. Olusan hucreler ana hucreyle <b>genetik olarak aynidir</b>.</p>",
    ["Hucre dongusu ve interfazi aciklar.", "Mitozda kromozom sayisinin korundugunu bilir."],
    ["Interfazi bolunmenin bir evresi sanmak (hazirliktir).", "Mitozda kromozom sayisi yariya iner sanmak (korunur)."],
    [{ term: "Interfaz", def: "Hazirlik; DNA eslenir" }, { term: "Mitoz", def: "2n verir 2n (ayni)" }, { term: "Sitokinez", def: "Sitoplazma bolunmesi" }]);

  setUnit("biy-eseysiz", "Eseysiz Ureme",
    "Tek ata, mitoz temelli ureme cesitleri.",
    "<p><b>Eseysiz uremede</b> tek bir ata canliden, <b>mitozla</b>, ana canliyla <b>genetik olarak ayni</b> yavrular olusur (kalitsal cesitlilik <b>yoktur</b>). Hizlidir, uygun ve kararli ortamlarda avantajlidir.</p>" +
    "<h3>Cesitleri</h3><ul>" +
    "<li><b>Bolunerek ureme:</b> Bakteri, amip (ikiye bolunme).</li>" +
    "<li><b>Tomurcuklanma:</b> Maya, hidra (kucuk cikinti buyur).</li>" +
    "<li><b>Sporla ureme:</b> Mantar, egrelti.</li>" +
    "<li><b>Vejetatif ureme:</b> Bitkilerde govde/kok/yaprakla (cilek, sogan, patates).</li>" +
    "<li><b>Rejenerasyon:</b> Kopan parcadan yeni birey (denizyildizi, planarya).</li></ul>" +
    "<p>Avantaj: hizli cogalma. Dezavantaj: cesitlilik olmadigindan degisen ortama uyum zorlasir.</p>",
    ["Eseysiz ureme cesitlerini ornekler.", "Genetik cesitlilik olmadigini bilir."],
    ["Eseysiz uremede cesitlilik olur sanmak (yoktur).", "Sporu yalnizca mikrop sanmak (ureme birimidir)."],
    [{ term: "Eseysiz ureme", def: "Tek ata, mitoz, ayni yavru" }, { term: "Vejetatif", def: "Bitkide govde/kok ile" }, { term: "Rejenerasyon", def: "Parcadan yeni birey" }]);

  setUnit("biy-mayoz", "Mayoz ve Eseyli Ureme",
    "Mayoz evreleri, cesitlilik ve eseyli ureme.",
    "<p><b>Mayoz</b>, ureme ana hucrelerinde gorulen, kromozom sayisini <b>yariya indiren</b> (2n verir n) bolunmedir; <b>gamet (ureme hucresi)</b> olusturur. Bir kez DNA eslenir, <b>iki kez bolunme</b> (mayoz I ve II) olur; sonucta <b>4 hucre</b> olusur.</p>" +
    "<h3>Cesitlilik kaynaklari</h3><ul>" +
    "<li><b>Parca degisimi (krossing-over):</b> Homolog kromozomlar arasinda gen alisverisi.</li>" +
    "<li><b>Homologlarin bagimsiz dagilimi:</b> Farkli gamet kombinasyonlari.</li></ul>" +
    "<p>Bu cesitlilik <b>eseyli ureme</b> ile birlesir: iki gametin <b>dollenme</b> ile birlesmesi kromozom sayisini yeniden <b>2n</b> yapar. Eseyli ureme <b>kalitsal cesitlilik</b> saglar; degisen ortama uyumu artirir.</p>",
    ["Mayozun kromozom sayisini yariya indirdigini bilir.", "Cesitlilik kaynaklarini aciklar."],
    ["Mayozu buyume/yenilenme bolunmesi sanmak (o mitoz).", "Mayozda kromozom sayisi korunur sanmak (yariya iner)."],
    [{ term: "Mayoz", def: "2n verir n, 4 gamet" }, { term: "Krossing-over", def: "Homologlar arasi gen degisimi" }, { term: "Dollenme", def: "n + n verir 2n" }]);

  setUnit("biy-ekosistem", "Ekosistem Ekolojisi ve Cevre",
    "Besin zinciri, enerji akisi, madde dongusu ve cevre sorunlari.",
    "<p><b>Ekosistem</b>, belirli bir alandaki <b>canlilar (biyotik)</b> ile <b>cansiz cevrenin (abiyotik)</b> etkilesim butunudur.</p>" +
    "<h3>Beslenme iliskileri</h3><ul>" +
    "<li><b>Ureticiler:</b> Fotosentezle besin ve enerjiyi ekosisteme sokar (bitki, alg).</li>" +
    "<li><b>Tuketiciler:</b> Otcul, etcil, hepcil.</li>" +
    "<li><b>Ayristiricilar:</b> Olu ve atigi parcalayip mineralleri dogaya dondurur (bakteri, mantar).</li></ul>" +
    "<h3>Enerji akisi ve piramit</h3><p>Enerji <b>tek yonlu</b> akar (Gunes, uretici, tuketici sirasiyla) ve her basamakta buyuk kismi <b>isi olarak kaybolur</b> (yaklasik %10 aktarilir). Bu yuzden besin piramidinde ust basamaklarda enerji ve birey sayisi azalir.</p>" +
    "<h3>Madde dongusu ve cevre</h3><p>Su, karbon, azot gibi maddeler <b>dongu</b> halinde surekli kullanilir. <b>Kuresel isinma, asit yagmuru, ozon incelmesi, kirlilik</b> ekosistemi bozar; geri donusum ve surdurulebilir kullanim onemlidir.</p>",
    ["Besin zinciri ve enerji akisini aciklar.", "Cevre sorunlarini ekosistemle iliskilendirir."],
    ["Enerjiyi dongu halinde sanmak (madde dongur, enerji tek yonlu akar).", "Ayristiricilari onemsiz sanmak."],
    [{ term: "Uretici", def: "Fotosentezle enerji sokar" }, { term: "Enerji akisi", def: "Tek yonlu, her basamakta azalir" }, { term: "Madde dongusu", def: "Su/karbon/azot tekrar kullanilir" }]);

})();
