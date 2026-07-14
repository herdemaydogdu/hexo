/* ============================================================
   FEN / KİMYA — TYT: 30 ünite + özgün ders notları (tek dosya, temiz).
   branch: "kimya", subject: "fen". upsertUnits ile eklenir (fizik kalıbı).
   kim-atom/kim-periyodik/kim-hal id'leri korunur. reviewStatus:"draft".
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-kimya-tam: content-loader yuklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "fen"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content, objectives, mistakes, pairs) {
    var u = mevcut(id) || { id: id, prerequisites: [], estimatedMinutes: 22 };
    u.id = id; u.name = name; u.branch = "kimya"; u.summary = summary;
    u.content = "<h2>" + name + "</h2>" + content;
    u.objectives = objectives || []; u.commonMistakes = mistakes || []; u.pairs = pairs || [];
    u.difficulty = 2; u.reviewedAt = "2026-07-13"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("fen", [u]);
  }

  setUnit("kim-simya", "Simyadan Kimyaya",
    "Simyanin kimyaya evrimi ve kimyaya katki saglayan bilim insanlari.",
    "<p>Simya; maddeyi altina cevirme ve olumsuzluk iksiri arayisiyla ugrasan, deneme-yanilmaya dayali, <b>bilimsel yontemden yoksun</b> bir ugrasti. Yine de damitma, suzme, kristallendirme gibi teknikleri kimyaya kazandirdi. <b>Kimya</b> ise maddeyi <b>bilimsel yontemle</b> (gozlem, hipotez, deney, teori) inceler.</p>" +
    "<h3>Katki saglayan bilim insanlari</h3><ul>" +
    "<li><b>Cabir bin Hayyan:</b> Deneysel kimyanin oncusu.</li>" +
    "<li><b>Antoine Lavoisier:</b> Kutlenin korunumu; modern kimyanin babasi.</li>" +
    "<li><b>John Dalton:</b> Modern atom teorisi.</li>" +
    "<li><b>Dmitri Mendeleyev:</b> Ilk sistemli periyodik tablo.</li></ul>" +
    "<p>Simya bilimsel yontem kullanmaz, sonuclari gizli tutar; kimya sonuclari tekrarlanabilir ve paylasilir.</p>",
    ["Simya ile kimyayi ayirt eder.", "Kimyaya katki saglayan bilim insanlarini tanir."],
    ["Simyayi bilimsel kimya sanmak.", "Kutle korunumunu Dalton'a atfetmek (Lavoisier)."],
    [{ term: "Lavoisier", def: "Kutlenin korunumu" }, { term: "Cabir bin Hayyan", def: "Deneysel kimyanin oncusu" }, { term: "Mendeleyev", def: "Ilk periyodik tablo" }]);

  setUnit("kim-disiplin", "Kimya Disiplinleri ve Calisma Alanlari",
    "Kimyanin alt dallari ve kimyayla ilgili meslekler.",
    "<h3>Baslica kimya disiplinleri</h3><ul>" +
    "<li><b>Anorganik kimya:</b> Karbon disi bilesikler.</li>" +
    "<li><b>Organik kimya:</b> Karbon bilesikleri (C-H).</li>" +
    "<li><b>Fizikokimya:</b> Kimyasal olaylari fizik yasalariyla aciklar.</li>" +
    "<li><b>Analitik kimya:</b> Maddenin cinsini (nitel) ve miktarini (nicel) belirler.</li>" +
    "<li><b>Biyokimya:</b> Canlilardaki kimyasal olaylar.</li>" +
    "<li><b>Polimer kimyasi:</b> Buyuk molekullu (plastik) maddeler.</li></ul>" +
    "<p><b>Endustriyel kimya</b> ve <b>petrokimya</b> ham petrolden yakit, plastik ve gubre uretimini kapsar. Kimyager, kimya muhendisi, eczaci baslica mesleklerdir.</p>",
    ["Kimya disiplinlerini ayirt eder.", "Ilgili meslekleri tanir."],
    ["Organik-anorganik ayrimini canli-cansiz sanmak (olcut karbon)."],
    [{ term: "Organik kimya", def: "Karbon bilesikleri" }, { term: "Analitik kimya", def: "Nitel + nicel analiz" }, { term: "Biyokimya", def: "Canlidaki kimyasal olaylar" }]);

  setUnit("kim-sembol", "Kimyanin Sembolik Dili",
    "Element sembolleri, bilesik formulleri ve katsayi-indis okuma.",
    "<p>Her elementin bir <b>sembolu</b> vardir: ilk harf buyuk, varsa ikincisi kucuk (<b>Na, Ca, Cl</b>).</p>" +
    "<h3>Formul turleri</h3><ul>" +
    "<li><b>Kaba (basit) formul:</b> Atomlarin en kucuk tam sayili orani (CH).</li>" +
    "<li><b>Molekul formulu:</b> Gercek atom sayilari (C6H6).</li>" +
    "<li><b>Yapi formulu:</b> Atomlarin baglanisi.</li></ul>" +
    "<p>Alt <b>indis</b> atom sayisini, onundeki <b>katsayi</b> molekul sayisini verir. Ornek: <b>2H2O</b> = 2 molekul, toplam 4 H ve 2 O atomu. Iyon yukleri sag ustte yazilir (Na+, SO4 2-).</p>",
    ["Sembol ile formulu ayirt eder.", "Formuldeki toplam atom sayisini hesaplar."],
    ["Katsayi ile indisi karistirmak.", "Ikinci harfi buyuk yazmak (CO degil Co)."],
    [{ term: "Kaba formul", def: "En kucuk tam sayili atom orani" }, { term: "2H2O", def: "4 H + 2 O atomu" }, { term: "Katsayi", def: "Molekul/birim sayisi" }]);

  setUnit("kim-guvenlik", "Kimyada Is Sagligi ve Guvenligi",
    "Laboratuvar guvenligi, GHS uyari isaretleri ve guvenli calisma.",
    "<p>Laboratuvarda onluk, gozluk ve eldiven kullanilir; koku el ile yelpazelenerek alinir; kimyasallar agizla pipetlenmez; seyreltmede daima <b>asit suya</b> yavasca eklenir.</p>" +
    "<h3>GHS tehlike isaretleri</h3><ul>" +
    "<li><b>Alevlenir:</b> Kolay tutusan maddeler.</li>" +
    "<li><b>Asindirici (korozif):</b> Deri/metali asindiran asit-baz.</li>" +
    "<li><b>Toksik:</b> Zehirli (kuru kafa sembolu).</li>" +
    "<li><b>Oksitleyici, patlayici, cevreye zararli</b> sembolleri.</li></ul>" +
    "<p>Kimyasallar etiketlenir; atiklar lavaboya degil uygun kaplara dokulur. <b>MSDS</b> maddenin tehlikelerini bildirir.</p>",
    ["GHS isaretlerini yorumlar.", "Guvenlik kurallarini uygular."],
    ["Suyu aside eklemek (sicrama).", "Atiklari lavaboya dokmek."],
    [{ term: "Asindirici", def: "Asit/baz; deri-metal asindirir" }, { term: "Seyreltme kurali", def: "Asit suya eklenir" }, { term: "MSDS", def: "Guvenlik bilgi formu" }]);

  setUnit("kim-model", "Atom Modelleri",
    "Dalton'dan modern (kuantum) modele atomun tarihsel gelisimi.",
    "<ul>" +
    "<li><b>Dalton:</b> Atom bolunemez, ici dolu berk kure.</li>" +
    "<li><b>Thomson:</b> Uzumlu kek; <b>elektronu</b> (katot isinlari) buldu.</li>" +
    "<li><b>Rutherford:</b> Merkezde kucuk, pozitif <b>cekirdek</b>; cevre bosluk (altin levha deneyi).</li>" +
    "<li><b>Bohr:</b> Elektronlar belirli enerjili <b>kararli yorungelerde</b> dolanir.</li>" +
    "<li><b>Modern (kuantum):</b> Elektronun yeri kesin bilinmez; bulunma olasiligi yuksek <b>orbitaller</b> tanimlanir.</li></ul>" +
    "<p>Model gelisimi bilimin birikimli ve duzeltilebilir oldugunu gosterir.</p>",
    ["Atom modellerini sirayla aciklar.", "Her modelin katkisini belirtir."],
    ["Cekirdegi Thomson'a atfetmek (Rutherford).", "Bohr yorungesi ile orbitali karistirmak."],
    [{ term: "Thomson", def: "Elektron; uzumlu kek" }, { term: "Rutherford", def: "Cekirdek; altin levha" }, { term: "Bohr", def: "Kararli enerji yorungeleri" }]);

  setUnit("kim-atom", "Atomun Yapisi",
    "Proton, notron, elektron; atom/kutle numarasi, izotop-izobar-izoton ve iyonlar.",
    "<p>Atom; merkezde <b>cekirdek</b> (proton + notron) ve cevresinde <b>elektronlar</b> icerir. Proton +, elektron -, notron yuksuzdur.</p>" +
    "<h3>Temel tanimlar</h3><ul>" +
    "<li><b>Atom numarasi (Z)</b> = proton sayisi; elementi belirler.</li>" +
    "<li><b>Kutle numarasi (A)</b> = proton + notron.</li>" +
    "<li>Notr atomda <b>proton = elektron</b>.</li>" +
    "<li><b>Iyon:</b> elektron alirsa anyon (-), verirse katyon (+).</li></ul>" +
    "<h3>Turler</h3><p><b>Izotop:</b> p ayni, n farkli. <b>Izobar:</b> A ayni. <b>Izoton:</b> n ayni. <b>Izoelektronik:</b> elektron sayisi ayni.</p>",
    ["Z ve A'dan p, n, e bulur.", "Izotop-izobar-izoton-izoelektronik ayirir."],
    ["Katyonda elektron = proton almak.", "n = A - Z bulmayi unutmak."],
    [{ term: "Z", def: "Proton sayisi" }, { term: "A", def: "p + n" }, { term: "Izotop", def: "p ayni, n farkli" }]);

  setUnit("kim-yerlesim", "Periyodik Sistemde Yerlesim Esaslari",
    "Elektron dizilimi ile periyot ve grup belirleme.",
    "<p>Elementler artan <b>atom numarasina</b> gore siralanir. Son katman <b>degerlik (valans)</b> elektronlaridir.</p>" +
    "<h3>Yer bulma</h3><ul>" +
    "<li><b>Periyot no</b> = katman (kabuk) sayisi. 7 periyot vardir.</li>" +
    "<li><b>A grubu no</b> = degerlik elektron sayisi.</li></ul>" +
    "<p>Ornek: Na (2)8)1) -> 3. periyot, 1A. Cl (2)8)7) -> 3. periyot, 7A.</p>",
    ["Dizilimden periyot ve grubu bulur.", "Degerlik elektronunu belirler."],
    ["Periyot ile grubu ters almak.", "B grubuna A kurali uygulamak."],
    [{ term: "Periyot", def: "Katman sayisi" }, { term: "A grup no", def: "Degerlik e sayisi" }, { term: "Na", def: "3. periyot 1A" }]);

  setUnit("kim-siniflama", "Elementlerin Siniflandirilmasi",
    "Metal, ametal, yari metal, soy gaz ve grup adlari.",
    "<ul>" +
    "<li><b>Metaller:</b> Elektron verir (katyon), parlak, isi-elektrik iletir. Tablonun solu.</li>" +
    "<li><b>Ametaller:</b> Elektron alir (anyon), kirilgan, yalitkan (grafit haric). Sag ust.</li>" +
    "<li><b>Yari metaller (B, Si, Ge, As, Sb, Te):</b> Yari iletken.</li>" +
    "<li><b>Soy gazlar (8A):</b> Son katmani dolu, kararli; tepkimeye girmez.</li></ul>" +
    "<p>Grup adlari: 1A alkali metaller, 2A toprak alkali metaller, 7A halojenler, 8A soy gazlar. <b>Hidrojen ametaldir.</b></p>",
    ["Metal-ametal-yari metal-soy gazi ayirir.", "Grup adlarini eslestirir."],
    ["Hidrojeni metal sanmak.", "Soy gazi tepkimeye giriyor sanmak."],
    [{ term: "1A", def: "Alkali metaller" }, { term: "7A", def: "Halojenler" }, { term: "8A", def: "Soy gazlar" }]);

  setUnit("kim-periyodik", "Periyodik Ozelliklerin Degisme Egilimleri",
    "Atom yaricapi, iyonlasma enerjisi, elektron ilgisi ve elektronegatiflik.",
    "<ul>" +
    "<li><b>Atom yaricapi:</b> Grupta asagi <b>artar</b>, periyotta saga <b>azalir</b>.</li>" +
    "<li><b>Iyonlasma enerjisi:</b> yaricapin tersi: saga artar, asagi azalir.</li>" +
    "<li><b>Elektron ilgisi</b> ve <b>elektronegatiflik:</b> saga artar, asagi azalir. En elektronegatif element <b>F</b>.</li>" +
    "<li><b>Metalik ozellik</b> asagi-sola artar; ametalik yukari-saga artar.</li></ul>" +
    "<p>Katyon atomundan kucuk, anyon buyuktur.</p>",
    ["Periyodik egilim yonlerini bilir.", "Iyon yaricaplarini karsilastirir."],
    ["Yaricap ile iyonlasma enerjisini ayni yonde sanmak.", "Katyonu atomundan buyuk sanmak."],
    [{ term: "Atom yaricapi", def: "Saga azalir, asagi artar" }, { term: "Iyonlasma enerjisi", def: "Saga artar" }, { term: "En elektronegatif", def: "Flor (F)" }]);

  setUnit("kim-turler", "Kimyasal Turler ve Etkilesimlerin Siniflandirilmasi",
    "Atom-molekul-iyon turleri ve guclu-zayif etkilesim ayrimi.",
    "<p><b>Kimyasal tur:</b> Atom, molekul, iyon ve radikaller. Etkilesimler ikiye ayrilir:</p><ul>" +
    "<li><b>Guclu etkilesimler (kimyasal bag):</b> Iyonik, kovalent, metalik. Tur ici; kopmasi cok enerji ister.</li>" +
    "<li><b>Zayif etkilesimler:</b> Van der Waals ve hidrojen bagi. Molekuller arasi; hal degisiminde kopar.</li></ul>" +
    "<p>Suyun kaynamasi <b>zayif</b> etkilesimlerin kopmasidir; O-H kovalent bagi kopmaz.</p>",
    ["Guclu-zayif etkilesimi ayirir.", "Hal degisiminde kopan etkilesimi belirler."],
    ["Kaynamada kovalent bag koptugunu sanmak.", "Iyonik-kovalenti zayif sanmak."],
    [{ term: "Guclu etkilesim", def: "Iyonik, kovalent, metalik" }, { term: "Zayif etkilesim", def: "Van der Waals + hidrojen bagi" }, { term: "Kaynama", def: "Zayif bag kopar" }]);

  setUnit("kim-guclu", "Guclu Etkilesimler",
    "Iyonik, kovalent (polar-apolar) ve metalik bag.",
    "<ul>" +
    "<li><b>Iyonik bag:</b> <b>Metal + ametal</b> arasinda elektron alisverisiyle (NaCl). Metal verir, ametal alir.</li>" +
    "<li><b>Kovalent bag:</b> <b>Ametal + ametal</b> arasinda elektron ortakligiyla (H2O, CO2). Esit paylasim <b>apolar</b>, farkli cekim <b>polar</b>.</li>" +
    "<li><b>Metalik bag:</b> Metal katyonlari ile ortak <b>elektron denizi</b>; iletkenligi aciklar.</li></ul>" +
    "<p>Bu baglar gucludur; erime/kaynama noktalari yuksektir.</p>",
    ["Iyonik-kovalent-metalik bagi ayirir.", "Polar-apolar kovalenti ayirt eder."],
    ["Iyonik (metal-ametal) ile kovalenti (ametal-ametal) karistirmak."],
    [{ term: "Iyonik bag", def: "Metal + ametal" }, { term: "Kovalent bag", def: "Ametal + ametal" }, { term: "Metalik bag", def: "Elektron denizi" }]);

  setUnit("kim-zayif", "Zayif Etkilesimler",
    "Van der Waals (London, dipol-dipol) ve hidrojen bagi.",
    "<ul>" +
    "<li><b>London (induklenmis dipol):</b> Tum molekullerde bulunan en zayif cekim; molekul buyudukce guclenir.</li>" +
    "<li><b>Dipol-dipol:</b> Polar molekuller arasinda kalici dipol cekimi; London'dan gucludur.</li>" +
    "<li><b>Hidrojen bagi:</b> H'nin F, O, N'ye bagli oldugu molekuller arasinda; zayif etkilesimlerin <b>en guclusu</b>. Suyun yuksek kaynama noktasinin nedeni.</li></ul>" +
    "<p>Zayif etkilesimler hal degisiminde kopar; kimyasal baglar kopmaz.</p>",
    ["Zayif etkilesim turlerini guce gore siralar.", "Hidrojen bagi kosulunu bilir."],
    ["Hidrojen bagini kovalent bag sanmak.", "London'u yalniz apolarlarda var sanmak."],
    [{ term: "London kuvveti", def: "En zayif; kutleyle artar" }, { term: "Hidrojen bagi", def: "H-F/O/N; en guclu zayif etkilesim" }]);

  setUnit("kim-degisim", "Fiziksel ve Kimyasal Degisimler",
    "Madde degisimlerinin ayrimi ve ornekleri.",
    "<ul>" +
    "<li><b>Fiziksel degisim:</b> Maddenin <b>kimligi degismez</b>, dis gorunus/hal degisir. Buz erimesi, kagit yirtilmasi, cozunme.</li>" +
    "<li><b>Kimyasal degisim:</b> Maddenin yapisi degisir, <b>yeni madde olusur</b>. Yanma, paslanma, eksime, kuflenme.</li></ul>" +
    "<p>Kimyasal degisim belirtileri: renk/koku degisimi, gaz cikisi, isi-isik, cokelek. Hal degisimleri ve cozunme fizikseldir.</p>",
    ["Fiziksel-kimyasal degisimi ayirir.", "Kimyasal degisim belirtilerini tanir."],
    ["Cozunmeyi kimyasal sanmak.", "Paslanmayi fiziksel sanmak."],
    [{ term: "Fiziksel degisim", def: "Kimlik degismez (erime)" }, { term: "Kimyasal degisim", def: "Yeni madde (yanma)" }]);

  setUnit("kim-hal", "Maddenin Fiziksel Halleri",
    "Kati-sivi-gaz tanecik duzeni ve hal degisimleri (endo/ekzotermik).",
    "<ul><li><b>Kati:</b> Tanecikler duzenli-siki; belirli sekil ve hacim.</li>" +
    "<li><b>Sivi:</b> Daha hareketli; belirli hacim, kabin sekli.</li>" +
    "<li><b>Gaz:</b> Cok hareketli; belirli sekil/hacim yok, kabi doldurur.</li></ul>" +
    "<p><b>Hal degisimleri:</b> erime (k->s), donma (s->k), buharlasma (s->g), yogusma (g->s), sublimlesme (k->g), kiragilasma (g->k). Erime-buharlasma-sublimlesme <b>isi alir (endotermik)</b>; tersleri <b>isi verir (ekzotermik)</b>. Saf maddede hal degisiminde sicaklik <b>sabittir</b>.</p>",
    ["Halleri tanecik duzenine gore karsilastirir.", "Hal degisimlerini endo/ekzo siniflar."],
    ["Hal degisiminde sicaklik degisir sanmak (saf maddede sabit).", "Sublimlesmeyi buharlasma sanmak."],
    [{ term: "Sublimlesme", def: "Kati -> gaz (naftalin)" }, { term: "Endotermik", def: "Erime, buharlasma (isi alir)" }]);

  setUnit("kim-katisivi", "Katilar ve Sivilar",
    "Kristal/amorf kati; buhar basinci, yuzey gerilimi, viskozite.",
    "<h3>Katilar</h3><p><b>Kristal katilar</b> (tuz, elmas) duzenli, belirli erime noktali; <b>amorf katilar</b> (cam, lastik) duzensiz, aralikta yumusar.</p>" +
    "<h3>Sivilar</h3><ul>" +
    "<li><b>Buhar basinci:</b> Buharlasma egilimi. Yuksekse ucucudur, kaynama noktasi dusuktur.</li>" +
    "<li><b>Yuzey gerilimi:</b> Yuzeyi kucultme egilimi (su damlasi kuresel).</li>" +
    "<li><b>Viskozite:</b> Akma direnci. Sicaklik artinca azalir.</li></ul>",
    ["Kristal-amorf katiyi ayirir.", "Buhar basinci-yuzey gerilimi-viskoziteyi yorumlar."],
    ["Buhar basinci yuksek siviyi zor kaynar sanmak.", "Viskoziteyi sicaklikla artar sanmak."],
    [{ term: "Buhar basinci yuksek", def: "Ucucu, k.n. dusuk" }, { term: "Amorf kati", def: "Duzensiz (cam)" }]);

  setUnit("kim-gaz", "Gazlar ve Plazma",
    "Gaz ozellikleri, basinc-hacim-sicaklik iliskileri ve plazma.",
    "<p>Gaz tanecikleri cok hizli/rastgele hareket eder; kabi doldurur, <b>basinc</b> uygular, kolayca <b>sikistirilir</b>.</p>" +
    "<ul><li>Sabit sicaklikta hacim artar -> basinc azalir (ters oranti).</li>" +
    "<li>Sabit hacimde sicaklik artar -> basinc artar.</li>" +
    "<li>Sabit basincta sicaklik artar -> hacim artar.</li></ul>" +
    "<p><b>Plazma:</b> Cok yuksek sicaklikta iyonlasmis, yuklu taneciklerden olusan 4. hal (Gunes, yildizlar, yildirim). Evrende en yaygin haldir.</p>",
    ["Gaz basinci-sicaklik-hacim iliskisini yorumlar.", "Plazmayi tanir."],
    ["Gazi sikistirilamaz sanmak.", "Plazmayi gaz ile ayni sanmak."],
    [{ term: "Gaz basinci", def: "Sicaklik ve tanecikle artar" }, { term: "Plazma", def: "Iyonlasmis 4. hal" }]);

  setUnit("kim-su", "Su ve Hayat",
    "Suyun ozellikleri, cozuculugu ve hayat icin onemi.",
    "<p>Su (H2O) polar bir molekuldur ve <b>hidrojen bagi</b> yapar; bu yuzden kaynama noktasi yuksektir ve <b>evrensel cozucu</b>dur.</p>" +
    "<ul><li><b>Yuksek ozisi:</b> Sicakligi gec degisir; iklimi ve vucut isisini dengeler.</li>" +
    "<li><b>Buzun yogunlugu sudan kucuk:</b> Buz yuzer; gollerin dibi donmaz.</li>" +
    "<li><b>Cozuculuk:</b> Polar/iyonik maddeleri (tuz, seker) cozer; yag (apolar) cozunmez -> benzer benzeri cozer.</li></ul>",
    ["Suyun anormal ozelliklerini hidrojen bagiyla aciklar.", "Cozunurluk kuralini uygular."],
    ["Yagin suda cozundugunu sanmak.", "Buzu sudan yogun sanmak."],
    [{ term: "Buz < su yogunlugu", def: "Buz yuzer" }, { term: "Benzer benzeri cozer", def: "Polar-polar, apolar-apolar" }]);

  setUnit("kim-cevre", "Cevre Kimyasi",
    "Hava-su-toprak kirliligi, asit yagmuru, sera etkisi ve ozon.",
    "<ul><li><b>Asit yagmuru:</b> Fosil yakit gazlari (SO2, NOx) su buhariyla asit olusturur.</li>" +
    "<li><b>Sera etkisi ve kuresel isinma:</b> CO2, CH4 gibi gazlar isiyi tutar.</li>" +
    "<li><b>Ozon tabakasi:</b> UV isinlarini suzer; CFC gazlari inceltir.</li>" +
    "<li><b>Otrofikasyon:</b> Atik/gubreler sulari kirletir, oksijeni azaltir.</li></ul>" +
    "<p>Geri donusum, aritma, yenilenebilir enerji cozum yollaridir. <b>Yesil kimya</b> az atik ve zararsiz madde ilkesini benimser.</p>",
    ["Cevre sorunlarinin kimyasal nedenlerini aciklar.", "Cozum yollarini onerir."],
    ["Asit yagmuru ile sera etkisini karistirmak.", "Ozon tabakasini sera gazi sanmak."],
    [{ term: "Asit yagmuru", def: "SO2, NOx" }, { term: "Sera gazi", def: "CO2, CH4" }, { term: "Ozon", def: "UV suzer; CFC inceltir" }]);

  setUnit("kim-kanun", "Kimyanin Temel Kanunlari",
    "Kutlenin korunumu, sabit oranlar ve katli oranlar kanunlari.",
    "<h3>Kutlenin Korunumu (Lavoisier)</h3><p>Girenlerin kutlesi = urunlerin kutlesi. Ornek: 12 g C + 32 g O2 -> <b>44 g</b> CO2.</p>" +
    "<h3>Sabit Oranlar (Proust)</h3><p>Bir bilesigi olusturan elementler <b>kutlece sabit oranda</b> birlesir. Suda H:O orani her zaman <b>1:8</b>.</p>" +
    "<h3>Katli Oranlar (Dalton)</h3><p>Iki element birden fazla bilesik yapiyorsa aralarinda <b>basit tam sayili oran</b> vardir (CO ile CO2).</p>",
    ["Uc temel kanunu ayirt eder.", "Kutle-oran hesabi yapar."],
    ["Sabit orani katli oranla karistirmak.", "Kutle korunumunu ihmal etmek."],
    [{ term: "Lavoisier", def: "Kutlenin korunumu" }, { term: "Proust", def: "Sabit oranlar" }, { term: "Dalton", def: "Katli oranlar" }]);

  setUnit("kim-mol", "Mol Kavrami",
    "Mol, Avogadro sayisi, molar kutle; kutle-mol-tanecik iliskileri.",
    "<p><b>1 mol = 6,02.10^23 tane</b> tanecik (Avogadro sayisi). <b>Molar kutle (M):</b> 1 molun gram kutlesi; su icin 18 g/mol.</p>" +
    "<div class=\"formula\">n = m / M  |  Tanecik sayisi = n . NA</div>" +
    "<p>Ornek: 36 g su -> n = 36/18 = <b>2 mol</b>. Normal kosullarda 1 mol gaz <b>22,4 litre</b> yer kaplar.</p>",
    ["n = m/M bagintisini kullanir.", "Mol-tanecik-hacim donusumu yapar."],
    ["n = M/m ters cevirmek.", "Farkli maddeleri esit mol icin esit kutle sanmak."],
    [{ term: "1 mol", def: "6,02.10^23 tanecik" }, { term: "n = m/M", def: "Mol = kutle/molar kutle" }, { term: "NK'da 1 mol gaz", def: "22,4 L" }]);

  setUnit("kim-tepkime", "Kimyasal Tepkimeler ve Denklemler",
    "Tepkime turleri ve denklem denklestirme.",
    "<p>Denklemde atom sayilari iki tarafta esitlenir (denklestirme). Ornek: <b>2H2 + O2 -> 2H2O</b>.</p>" +
    "<h3>Tepkime turleri</h3><ul>" +
    "<li><b>Yanma:</b> Yakit + O2 -> CO2 + H2O + isi.</li>" +
    "<li><b>Sentez (birlesme):</b> A + B -> AB.</li>" +
    "<li><b>Analiz (ayrisma):</b> AB -> A + B.</li>" +
    "<li><b>Asit-baz (notrlesme):</b> Asit + baz -> tuz + su.</li></ul>" +
    "<p>Denklestirmede yalniz <b>katsayilar</b> degisir; indisler degismez.</p>",
    ["Denklem denklestirir.", "Tepkime turunu belirler."],
    ["Denklestirirken indisi degistirmek.", "Yanma urununu yanlis yazmak."],
    [{ term: "Denklestirme", def: "Atom sayilari esit; katsayi degisir" }, { term: "Notrlesme", def: "Asit + baz -> tuz + su" }]);

  setUnit("kim-hesap", "Kimyasal Tepkimelerde Hesaplamalar",
    "Denklem katsayilariyla mol-kutle-hacim hesabi.",
    "<p>Denklemdeki <b>katsayilar mol oranini</b> verir. Adimlar: (1) denklestir, (2) verileni mole cevir (n=m/M), (3) katsayi oraniyla istenen turu bul, (4) mol'u kutle/hacme cevir.</p>" +
    "<p><b>Ornek:</b> 2H2 + O2 -> 2H2O; 4 mol H2 yanarsa mol orani 2:2=1:1 -> <b>4 mol</b> su (72 g).</p>" +
    "<p><b>Sinirlayici bilesen:</b> Once biten madde urun miktarini belirler.</p>",
    ["Katsayi oraniyla stokiyometri hesabi yapar.", "Sinirlayici bileseni belirler."],
    ["Katsayi orani yerine kutle oranini dogrudan kullanmak.", "Sinirlayiciyi goz ardi etmek."],
    [{ term: "Katsayi", def: "Mol oranini verir" }, { term: "Sinirlayici bilesen", def: "Once biten, urunu sinirlar" }]);

  setUnit("kim-karisim1", "Homojen ve Heterojen Karisimlar - I",
    "Saf madde-karisim ayrimi ve karisim turleri.",
    "<ul><li><b>Saf madde:</b> Tek tur tanecik. <b>Element</b> (Fe, O2) ve <b>bilesik</b> (H2O, NaCl).</li>" +
    "<li><b>Karisim:</b> Birden cok maddenin kimyasal bag olmadan bir arada bulunmasi; belirli formulu yoktur.</li></ul>" +
    "<h3>Karisim turleri</h3><ul>" +
    "<li><b>Homojen (cozelti):</b> Her yeri ayni, tek faz (tuzlu su, hava, celik).</li>" +
    "<li><b>Heterojen:</b> Fazlar ayirt edilir (kumlu su, ayran).</li></ul>",
    ["Saf madde-karisimi ayirir.", "Homojen-heterojen ayirt eder."],
    ["Bilesigi karisim sanmak.", "Alasimi heterojen sanmak (homojendir)."],
    [{ term: "Homojen karisim", def: "Cozelti; tek faz" }, { term: "Heterojen", def: "Fazlar gorunur" }, { term: "Alasim", def: "Homojen metal karisimi" }]);

  setUnit("kim-karisim2", "Homojen ve Heterojen Karisimlar - II",
    "Derisim (kutlece yuzde) ve cozunurluge etki eden faktorler.",
    "<div class=\"formula\">Kutlece % = (cozunen / cozelti) . 100</div>" +
    "<p>Cozelti = cozunen + cozucu. Ornek: 20 g tuz 80 g suda -> 100 g cozelti -> <b>%20</b>.</p>" +
    "<h3>Cozunurluge etki edenler</h3><ul>" +
    "<li><b>Sicaklik:</b> Katilarin cogu artar; <b>gazlarinki azalir</b>.</li>" +
    "<li>Karistirma ve toz hale getirme cozunme <b>hizini</b> artirir, cozunurluk miktarini degistirmez.</li></ul>",
    ["Kutlece yuzde derisim hesaplar.", "Cozunurluk faktorlerini yorumlar."],
    ["Cozelti kutlesine cozuneni katmayi unutmak.", "Karistirmayi cozunurlugu artirir sanmak."],
    [{ term: "Kutlece %", def: "cozunen/cozelti .100" }, { term: "Gaz cozunurlugu", def: "Sicaklikla azalir" }]);

  setUnit("kim-ayirma", "Ayirma ve Saflastirma Teknikleri",
    "Karisimlari fiziksel yontemlerle ayirma.",
    "<ul><li><b>Suzme:</b> Cozunmeyen kati-sivi (kumlu su).</li>" +
    "<li><b>Buharlastirma:</b> Cozunmus katiyi sividan (tuzlu sudan tuz).</li>" +
    "<li><b>Damitma:</b> Kaynama noktasi farkiyla (alkol-su).</li>" +
    "<li><b>Ayirma hunisi:</b> Karismayan sivilar (su-yag).</li>" +
    "<li><b>Miknatisla ayirma:</b> Demir gibi manyetik maddeler.</li>" +
    "<li><b>Yuzdurme:</b> Ozkutle farkiyla (bugday-saman).</li></ul>" +
    "<p>Yontem, bilesenlerin fiziksel ozelliklerine (kaynama noktasi, cozunurluk, yogunluk, manyetiklik) gore secilir.</p>",
    ["Uygun ayirma yontemini secer.", "Yontemin dayandigi fiziksel ozelligi belirtir."],
    ["Damitmayi cozunurluk farki sanmak.", "Homojen karisimi suzmeyle ayirmak."],
    [{ term: "Damitma", def: "Kaynama noktasi farki" }, { term: "Ayirma hunisi", def: "Karismayan sivilar" }]);

  setUnit("kim-asitbaz", "Asitlerin ve Bazlarin Ozellikleri",
    "Asit-baz tanimlari, pH ve belirtecler.",
    "<h3>Asitler</h3><p>Suda <b>H+</b> verir. Tatlari eksi, mavi turnusolu <b>kirmiziya</b> cevirir. HCl, H2SO4, sirke, limon.</p>" +
    "<h3>Bazlar</h3><p>Suda <b>OH-</b> verir. Tatlari aci, ele kaygan, kirmizi turnusolu <b>maviye</b> cevirir. NaOH, KOH, NH3, sabun.</p>" +
    "<h3>pH cetveli</h3><p><b>0-14</b> arasi: <b>pH<7 asidik</b>, <b>pH=7 notr</b> (saf su), <b>pH>7 bazik</b>. pH kuculdukce asitlik artar.</p>",
    ["Asit-baz ozelliklerini ayirir.", "pH ile asitlik-bazikligi kurar."],
    ["Turnusol renklerini ters bilmek.", "Kucuk pH'i bazik sanmak."],
    [{ term: "Asit", def: "H+ verir; turnusolu kirmizi" }, { term: "Baz", def: "OH- verir; turnusolu mavi" }, { term: "pH=7", def: "Notr (saf su)" }]);

  setUnit("kim-asittepkime", "Asitlerin ve Bazlarin Tepkimeleri",
    "Notrlesme, metal ve karbonatla tepkimeler.",
    "<ul><li><b>Notrlesme:</b> Asit + baz -> <b>tuz + su</b> (HCl + NaOH -> NaCl + H2O). Isi aciga cikar.</li>" +
    "<li><b>Aktif metalle:</b> Asit + metal -> tuz + <b>H2 gazi</b>.</li>" +
    "<li><b>Karbonatla:</b> Asit + karbonat -> tuz + su + <b>CO2</b> (kabarma).</li></ul>" +
    "<p>Kuvvetli asit/baz suda tam iyonlasir; zayif olan kismen iyonlasir. Kuvvet iyonlasma yuzdesiyle ilgilidir, derisimle karistirilmamalidir.</p>",
    ["Asit-baz tepkime urunlerini yazar.", "Kuvvetli-zayif elektroliti ayirir."],
    ["Notrlesme urununu yanlis yazmak.", "Kuvvetli asidi derisik asitle karistirmak."],
    [{ term: "Notrlesme", def: "Asit+baz -> tuz+su" }, { term: "Asit + metal", def: "Tuz + H2 gazi" }, { term: "Asit + karbonat", def: "Tuz + su + CO2" }]);

  setUnit("kim-tuz", "Asitler, Bazlar ve Tuzlar",
    "Tuz olusumu, ozellikleri ve gunluk hayattaki tuzlar.",
    "<p><b>Tuz</b>, asit ile bazin notrlesmesinden olusan iyonik bilesiktir (asidin anyonu + bazin katyonu). NaCl, CaCO3, NaHCO3, KNO3.</p>" +
    "<ul><li>Kati halde iyonik orgulu; suda cozununce iyonlarina ayrisip <b>elektrik iletir</b> (elektrolit).</li>" +
    "<li>Erime noktalari yuksektir.</li></ul>" +
    "<p>Gunluk tuzlar: NaCl (yemek tuzu), NaHCO3 (kabartma tozu), CaCO3 (kirec tasi), Na2CO3 (soda).</p>",
    ["Tuz olusumunu aciklar.", "Yaygin tuzlari tanir."],
    ["Her tuzu notr sanmak.", "Kati tuzu iletken sanmak (suda cozununce iletir)."],
    [{ term: "Tuz", def: "Asit+baz notrlesmesi (NaCl)" }, { term: "Elektrolit", def: "Suda iyonlasip iletir" }, { term: "NaHCO3", def: "Kabartma tozu" }]);

  setUnit("kim-gunluk", "Yaygin Gunluk Hayat Kimyasallari",
    "Temizlik urunleri, yapi malzemeleri, polimerler ve guvenli kullanim.",
    "<h3>Temizlik maddeleri</h3><p><b>Sabun ve deterjan</b> kiri sudan uzaklastirir. <b>Camasir suyu</b> agartici-dezenfektandir. <b>UYARI:</b> Camasir suyu ile tuz ruhu (asit) <b>asla karistirilmaz</b>; zehirli <b>klor gazi</b> cikar.</p>" +
    "<h3>Yapi malzemeleri</h3><p>Kirec, alci, cimento, cam yaygindir. Kirec suyu (baz) CO2 ile beyazlasir.</p>" +
    "<h3>Polimerler</h3><p><b>Plastikler</b> monomerlerin birlesmesiyle olusan polimerlerdir; dogada gec bozunur, geri donusum onemlidir.</p>",
    ["Gunluk kimyasallari isleviyle eslestirir.", "Tehlikeli karisimlari bilir."],
    ["Camasir suyu + asit karisimini zararsiz sanmak.", "Plastikleri kolay bozunur sanmak."],
    [{ term: "Camasir suyu + asit", def: "Zehirli klor gazi" }, { term: "Polimer", def: "Monomerlerin birlesimi (plastik)" }]);

  setUnit("kim-kozmetik", "Kozmetikler, Ilaclar ve Gidalar",
    "Kozmetik, ilac ve gida kimyasallarinin bilincli kullanimi.",
    "<h3>Kozmetikler</h3><p>Cilt/sac urunlerinde pH cilde yakin (hafif asidik) ayarlanir; nemlendirici, koruyucu icerir. Etiket ve son kullanma tarihi onemlidir.</p>" +
    "<h3>Ilaclar</h3><p>Ilaclar belirli dozda etki eder; <b>doz asimi zararlidir</b>. Antasitler (bazik) mide asidini notrler.</p>" +
    "<h3>Gida katki maddeleri</h3><p>Koruyucu, antioksidan, renklendirici, tatlandiricilar raf omrunu ve gorunumu ayarlar. Bilincli tuketim ve etiket okuma onemlidir.</p>",
    ["Kozmetik-ilac-gida kimyasallarini bilincli degerlendirir.", "Doz ve etiketin onemini aciklar."],
    ["Ilacta cok doz cok fayda sanmak (doz asimi zararli).", "Antasidi asit sanmak (baziktir)."],
    [{ term: "Antasit", def: "Bazik; mide asidini notrler" }, { term: "Doz asimi", def: "Ilacta zararli" }]);

})();
