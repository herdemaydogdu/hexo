/* ============================================================
   FEN / BİYOLOJİ — TYT konu anlatımı (Bölüm 2: Hücre, madde geçişleri,
   sınıflandırma, canlılar dünyası, hücre bölünmeleri, ekosistem). Premium Türkçe.
   upsertUnits. Metin özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-biyoloji-tr2: content-loader yüklenmedi"); return; }

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
    u.difficulty = 2; u.reviewedAt = "2026-07-16"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("fen", [u]);
  }

  setUnit("biy-hucre", "Hücre ve Organelleri",
    "Hücre kuramı, prokaryot-ökaryot, zar ve organeller.",
    "<p><b>Hücre</b> canlıların yapı ve görev birimidir (hücre kuramı). İki temel tipi vardır:</p><ul>" +
    "<li><b>Prokaryot:</b> Çekirdeği ve zarlı organelleri yoktur (bakteri, arke). DNA sitoplazmada serbesttir; ribozom bulunur.</li>" +
    "<li><b>Ökaryot:</b> Zarla çevrili çekirdek ve zarlı organeller vardır (bitki, hayvan, mantar, protista).</li></ul>" +
    "<h3>Organeller ve görevleri</h3><ul>" +
    "<li><b>Çekirdek:</b> DNA'yı bulundurur, hücreyi yönetir.</li>" +
    "<li><b>Mitokondri:</b> Oksijenli solunumla <b>ATP</b> üretir.</li>" +
    "<li><b>Ribozom:</b> Protein sentezi (zarsız).</li>" +
    "<li><b>Kloroplast:</b> Bitki/alglerde <b>fotosentez</b>.</li>" +
    "<li><b>Endoplazmik retikulum:</b> Madde iletimi, sentez (granüllü/granülsüz).</li>" +
    "<li><b>Golgi:</b> Salgı paketleme ve işleme.</li>" +
    "<li><b>Lizozom:</b> Sindirim enzimleri (hücre içi sindirim).</li>" +
    "<li><b>Koful:</b> Depo, boşaltım; bitkide büyük.</li>" +
    "<li><b>Sentrozom:</b> Hayvan hücresinde bölünmede rol.</li></ul>" +
    "<h3>Bitki-hayvan hücresi farkı</h3><p>Bitkide <b>hücre duvarı, kloroplast, büyük koful</b>; hayvanda <b>sentrozom</b> bulunur.</p>",
    ["Prokaryot-ökaryot ayrımını yapar.", "Organel-görev eşleştirir.", "Bitki-hayvan hücre farkını bilir."],
    ["Ribozomu zarlı organel sanmak (zarsızdır).", "Mitokondriyi fotosentez organeli sanmak (kloroplast)."],
    [{ term: "Mitokondri", def: "ATP üretimi" }, { term: "Ribozom", def: "Protein sentezi (zarsız)" }, { term: "Kloroplast", def: "Fotosentez" }, { term: "Prokaryot", def: "Çekirdeksiz (bakteri)" }]);

  setUnit("biy-madde", "Hücre Zarından Madde Geçişleri",
    "Pasif taşıma (difüzyon, osmoz), aktif taşıma, endositoz-ekzositoz.",
    "<p>Hücre zarı <b>seçici geçirgendir</b>; hangi maddenin geçeceğini denetler.</p>" +
    "<h3>Pasif taşıma (enerji harcanmaz)</h3><ul>" +
    "<li><b>Difüzyon:</b> Maddenin çok yoğun ortamdan az yoğun ortama geçmesi.</li>" +
    "<li><b>Kolaylaştırılmış difüzyon:</b> Taşıyıcı proteinle, yine yoğunluk farkıyla.</li>" +
    "<li><b>Osmoz:</b> Suyun az yoğun (çok su) ortamdan çok yoğun (az su) ortama geçmesi.</li></ul>" +
    "<p><b>Çözelti çeşitleri:</b> Hipotonik ortamda hücre su alır (şişme); hipertonik ortamda su verir (büzüşme, plazmoliz); izotonikte denge.</p>" +
    "<h3>Aktif taşıma (enerji harcanır)</h3><p>Madde <b>az yoğundan çok yoğuna</b> (yoğunluk gradyanına ters) taşıyıcı proteinle ve <b>ATP</b> harcanarak taşınır.</p>" +
    "<h3>Büyük moleküller</h3><p><b>Endositoz</b> (hücre dışarıdan koful ile madde alır) ve <b>ekzositoz</b> (koful ile dışarı verir); enerji gerektirir.</p>",
    ["Pasif-aktif taşımayı ayırır.", "Osmoz ve çözelti çeşitlerini yorumlar."],
    ["Osmozda çözünenin geçtiğini sanmak (su geçer).", "Aktif taşımayı enerjisiz sanmak (ATP gerekir)."],
    [{ term: "Difüzyon", def: "Çok yoğundan az yoğuna (enerjisiz)" }, { term: "Osmoz", def: "Suyun geçişi" }, { term: "Aktif taşıma", def: "Gradyana ters, ATP'li" }]);

  setUnit("biy-siniflandirma", "Canlıların Sınıflandırılması",
    "Bilimsel sınıflandırma, ikili adlandırma ve kategoriler.",
    "<p><b>Sınıflandırma (sistematik)</b>, canlıları benzerliklerine göre gruplama bilimidir. Bilimsel sınıflandırma <b>akrabalık (doğal)</b> temellidir: yapısal, genetik ve embriyolojik benzerlikler esas alınır.</p>" +
    "<h3>Kategoriler (büyükten küçüğe)</h3><p><b>Âlem, Şube, Sınıf, Takım, Aile, Cins, Tür</b>. Küçüldükçe <b>birey sayısı azalır</b>, <b>ortak özellik ve akrabalık artar</b>.</p>" +
    "<h3>Tür ve ikili adlandırma</h3><p><b>Tür:</b> Ortak atadan gelen, çiftleştiğinde <b>verimli</b> (kısır olmayan) döller verebilen bireyler. <b>İkili adlandırma (Linnaeus):</b> İlk kelime <b>cins</b> (büyük harf), ikinci kelime <b>tür</b> tanımlayıcı (küçük harf), italik yazılır. Örnek: Homo sapiens.</p>",
    ["Sınıflandırma kategorilerini sırayla bilir.", "İkili adlandırmayı ve tür kavramını açıklar."],
    ["Kategori küçüldükçe ortak özellik azalır sanmak (artar).", "Farklı türlerin verimli döl verdiğini sanmak."],
    [{ term: "Tür", def: "Verimli döl verebilen bireyler" }, { term: "İkili adlandırma", def: "Cins + tür adı (italik)" }, { term: "Âlem-Tür", def: "Büyükten küçüğe kategori" }]);

  setUnit("biy-alemler", "Canlılar Dünyası: Âlemler",
    "Bakteri, arke, protista, mantar, bitki ve hayvan âlemleri.",
    "<ul>" +
    "<li><b>Bakteriler:</b> Prokaryot, tek hücreli. Üretici/tüketici olabilir; ayrıştırıcı olarak madde döngüsünde önemli. Bazıları hastalık yapar.</li>" +
    "<li><b>Arkeler:</b> Prokaryot; aşırı ortamlarda (sıcak, tuzlu) yaşayabilir.</li>" +
    "<li><b>Protista:</b> Ökaryot, çoğu tek hücreli (amip, paramesyum, öglena, algler). Çeşitli beslenme.</li>" +
    "<li><b>Mantarlar:</b> Ökaryot, <b>klorofilsiz</b>, <b>ayrıştırıcı/parazit</b>; hücre duvarı <b>kitin</b>. Maya, küf, şemsiye mantar.</li>" +
    "<li><b>Bitkiler:</b> Ökaryot, çok hücreli, <b>üretici</b> (fotosentez); hücre duvarı <b>selüloz</b>.</li>" +
    "<li><b>Hayvanlar:</b> Ökaryot, çok hücreli, <b>tüketici</b>; hücre duvarı yok, hareketli.</li>" +
    "</ul>" +
    "<p>Üretici fotosentezle besin üretir; tüketici dışarıdan alır; ayrıştırıcı ölü/atığı parçalar.</p>",
    ["Âlemleri ayırt eder.", "Beslenme tiplerini eşleştirir."],
    ["Mantarı bitki sanmak (klorofilsiz, ayrıştırıcı).", "Bakteriyi ökaryot sanmak (prokaryottur)."],
    [{ term: "Mantar", def: "Klorofilsiz, kitin duvar" }, { term: "Bitki", def: "Üretici, selüloz duvar" }, { term: "Bakteri", def: "Prokaryot" }]);

  setUnit("biy-virus", "Virüsler",
    "Virüs yapısı, canlı-cansız özellikleri ve etkileri.",
    "<p><b>Virüsler</b> hücresel yapıda değildir; <b>protein kılıf</b> ve içinde <b>nükleik asit (DNA veya RNA)</b> taşırlar. <b>Zorunlu parazittir</b>; ancak canlı hücre içinde çoğalabilir.</p>" +
    "<h3>Canlı ve cansız özellikleri</h3><ul>" +
    "<li><b>Canlı gibi:</b> Nükleik asit taşır, konak hücrede <b>çoğalır</b>, mutasyona uğrar, kalıtsal çeşitlilik gösterir.</li>" +
    "<li><b>Cansız gibi:</b> Hücre dışında <b>kristallenebilir</b>, kendi başına metabolizması ve organeli yoktur, konaksız çoğalamaz.</li></ul>" +
    "<p>Bu yüzden virüsler <b>âlemler içinde sınıflandırılmaz</b>. Grip, kızamık gibi hastalıklara yol açar; antibiyotikler virüslere etki etmez.</p>",
    ["Virüs yapısını bilir.", "Virüsün canlı-cansız özelliklerini karşılaştırır."],
    ["Virüsleri hücreli sanmak (hücresel değildir).", "Virüse antibiyotik etki eder sanmak (etmez)."],
    [{ term: "Virüs", def: "Protein kılıf + nükleik asit" }, { term: "Zorunlu parazit", def: "Sadece canlı hücrede çoğalır" }, { term: "Antibiyotik", def: "Virüslere etkisiz" }]);

  setUnit("biy-mitoz", "Mitoz ve Hücre Döngüsü",
    "Hücre döngüsü, interfaz ve mitoz evreleri.",
    "<p><b>Hücre döngüsü</b>, bir hücrenin bölünerek iki hücre oluşturana kadar geçirdiği süreçtir: <b>interfaz + bölünme</b>.</p>" +
    "<h3>İnterfaz</h3><p>Bölünmeye hazırlık; hücre büyür, organeller ve <b>DNA eşlenir (replikasyon)</b>. Hücrenin en uzun evresidir.</p>" +
    "<h3>Mitoz (karyokinez)</h3><p>Çekirdek bölünmesi; <b>profaz, metafaz, anafaz, telofaz</b> evreleriyle olur. Sonuçta <b>kromozom sayısı değişmez</b>: 2n hücreden 2n iki hücre oluşur.</p>" +
    "<h3>Sitokinez</h3><p>Sitoplazma bölünmesi. Hayvan hücresinde <b>boğumlanma</b>, bitki hücresinde <b>ara lamel</b> ile gerçekleşir.</p>" +
    "<p><b>Önemi:</b> Büyüme, yenilenme (yara iyileşmesi) ve tek hücrelilerde <b>eşeysiz üreme</b>. Oluşan hücreler ana hücreyle <b>genetik olarak aynıdır</b>.</p>",
    ["Hücre döngüsü ve interfazı açıklar.", "Mitozda kromozom sayısının korunduğunu bilir."],
    ["İnterfazı bölünmenin bir evresi sanmak (hazırlıktır).", "Mitozda kromozom sayısı yarıya iner sanmak (korunur)."],
    [{ term: "İnterfaz", def: "Hazırlık; DNA eşlenir" }, { term: "Mitoz", def: "2n verir 2n (aynı)" }, { term: "Sitokinez", def: "Sitoplazma bölünmesi" }]);

  setUnit("biy-eseysiz", "Eşeysiz Üreme",
    "Tek ata, mitoz temelli üreme çeşitleri.",
    "<p><b>Eşeysiz üremede</b> tek bir ata canlıdan, <b>mitozla</b>, ana canlıyla <b>genetik olarak aynı</b> yavrular oluşur (kalıtsal çeşitlilik <b>yoktur</b>). Hızlıdır, kararlı ortamlarda avantajlıdır.</p>" +
    "<h3>Çeşitleri</h3><ul>" +
    "<li><b>Bölünerek üreme:</b> Bakteri, amip (ikiye bölünme).</li>" +
    "<li><b>Tomurcuklanma:</b> Maya, hidra.</li>" +
    "<li><b>Sporla üreme:</b> Mantar, eğrelti.</li>" +
    "<li><b>Vejetatif üreme:</b> Bitkilerde gövde/kök/yaprakla (çilek, soğan, patates).</li>" +
    "<li><b>Rejenerasyon:</b> Kopan parçadan yeni birey (denizyıldızı, planarya).</li></ul>" +
    "<p>Avantaj: hızlı çoğalma. Dezavantaj: çeşitlilik olmadığından değişen ortama uyum zorlaşır.</p>",
    ["Eşeysiz üreme çeşitlerini örnekler.", "Genetik çeşitlilik olmadığını bilir."],
    ["Eşeysiz üremede çeşitlilik olur sanmak (yoktur).", "Sporu yalnızca mikrop sanmak (üreme birimidir)."],
    [{ term: "Eşeysiz üreme", def: "Tek ata, mitoz, aynı yavru" }, { term: "Vejetatif", def: "Bitkide gövde/kök ile" }, { term: "Rejenerasyon", def: "Parçadan yeni birey" }]);

  setUnit("biy-mayoz", "Mayoz ve Eşeyli Üreme",
    "Mayoz evreleri, çeşitlilik ve eşeyli üreme.",
    "<p><b>Mayoz</b>, üreme ana hücrelerinde görülen, kromozom sayısını <b>yarıya indiren</b> (2n verir n) bölünmedir; <b>gamet (üreme hücresi)</b> oluşturur. Bir kez DNA eşlenir, <b>iki kez bölünme</b> (mayoz I ve II) olur; sonuçta <b>4 hücre</b> oluşur.</p>" +
    "<h3>Çeşitlilik kaynakları</h3><ul>" +
    "<li><b>Parça değişimi (krossing-over):</b> Homolog kromozomlar arasında gen alışverişi.</li>" +
    "<li><b>Homologların bağımsız dağılımı:</b> Farklı gamet kombinasyonları.</li></ul>" +
    "<p>Bu çeşitlilik <b>eşeyli üreme</b> ile birleşir: iki gametin <b>döllenme</b> ile birleşmesi kromozom sayısını yeniden <b>2n</b> yapar. Eşeyli üreme <b>kalıtsal çeşitlilik</b> sağlar; ortama uyumu artırır.</p>",
    ["Mayozun kromozom sayısını yarıya indirdiğini bilir.", "Çeşitlilik kaynaklarını açıklar."],
    ["Mayozu büyüme/yenilenme bölünmesi sanmak (o mitoz).", "Mayozda kromozom sayısı korunur sanmak (yarıya iner)."],
    [{ term: "Mayoz", def: "2n verir n, 4 gamet" }, { term: "Krossing-over", def: "Homologlar arası gen değişimi" }, { term: "Döllenme", def: "n + n verir 2n" }]);

  setUnit("biy-ekosistem", "Ekosistem Ekolojisi ve Çevre",
    "Besin zinciri, enerji akışı, madde döngüsü ve çevre sorunları.",
    "<p><b>Ekosistem</b>, belirli bir alandaki <b>canlılar (biyotik)</b> ile <b>cansız çevrenin (abiyotik)</b> etkileşim bütünüdür.</p>" +
    "<h3>Beslenme ilişkileri</h3><ul>" +
    "<li><b>Üreticiler:</b> Fotosentezle besin ve enerjiyi ekosisteme sokar (bitki, alg).</li>" +
    "<li><b>Tüketiciler:</b> Otçul, etçil, hepçil.</li>" +
    "<li><b>Ayrıştırıcılar:</b> Ölü ve atığı parçalayıp mineralleri doğaya döndürür (bakteri, mantar).</li></ul>" +
    "<h3>Enerji akışı ve piramit</h3><p>Enerji <b>tek yönlü</b> akar (Güneş, üretici, tüketici sırasıyla) ve her basamakta büyük kısmı <b>ısı olarak kaybolur</b> (yaklaşık %10 aktarılır). Bu yüzden üst basamaklarda enerji ve birey sayısı azalır.</p>" +
    "<h3>Madde döngüsü ve çevre</h3><p>Su, karbon, azot gibi maddeler <b>döngü</b> hâlinde sürekli kullanılır. <b>Küresel ısınma, asit yağmuru, ozon incelmesi, kirlilik</b> ekosistemi bozar; geri dönüşüm ve sürdürülebilir kullanım önemlidir.</p>",
    ["Besin zinciri ve enerji akışını açıklar.", "Çevre sorunlarını ekosistemle ilişkilendirir."],
    ["Enerjiyi döngü hâlinde sanmak (madde döner, enerji tek yönlü akar).", "Ayrıştırıcıları önemsiz sanmak."],
    [{ term: "Üretici", def: "Fotosentezle enerji sokar" }, { term: "Enerji akışı", def: "Tek yönlü, azalır" }, { term: "Madde döngüsü", def: "Su/karbon/azot tekrar kullanılır" }]);

})();
