/* ============================================================
   FEN / KİMYA — TYT: 30 ünite + özgün ders notları (MEB TYT Kimya
   konu özetleri kapsamına göre; metin tamamen özgündür).
   branch: "kimya", subject: "fen". replaceBranchUnits ile 30 ünitelik
   resmî sıra kurulur; kim-atom/kim-periyodik/kim-hal id'leri korunur,
   bu ünitelerin mevcut soru bağları düşmez. reviewStatus:"draft".
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-kimya: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "fen"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  var U = function (id, name, summary, content, objectives, mistakes, pairs) {
    var u = mevcut(id) || { id: id, prerequisites: [], estimatedMinutes: 22 };
    u.id = id; u.name = name; u.branch = "kimya"; u.summary = summary;
    u.content = "<h2>" + name + "</h2>" + content;
    u.objectives = objectives || []; u.commonMistakes = mistakes || []; u.pairs = pairs || [];
    u.difficulty = 2; u.reviewedAt = "2026-07-13"; u.reviewStatus = "draft"; u.originalityStatement = true;
    return u;
  };

  var units = [];

  /* 1 */ units.push(U("kim-simya", "Simyadan Kimyaya",
    "Simyanın kimyaya evrimi ve kimyaya katkı sağlayan bilim insanları.",
    "<p>Simya; maddeyi altına çevirme ve ölümsüzlük iksiri arayışıyla uğraşan, deneme-yanılmaya dayalı, <b>bilimsel yöntemden yoksun</b> bir uğraştı. Yine de damıtma, süzme, kristallendirme gibi teknikleri ve laboratuvar araçlarını kimyaya kazandırdı. <b>Kimya</b> ise maddenin yapısını, özelliklerini ve dönüşümlerini <b>bilimsel yöntemle</b> (gözlem, hipotez, deney, teori) inceler.</p>" +
    "<h3>Katkı sağlayan bilim insanları</h3>" +
    "<ul>" +
    "<li><b>Câbir bin Hayyan:</b> Deneysel kimyanın öncüsü.</li>" +
    "<li><b>Antoine Lavoisier:</b> Kütlenin korunumu; modern kimyanın babası.</li>" +
    "<li><b>John Dalton:</b> Modern atom teorisi.</li>" +
    "<li><b>Dmitri Mendeleyev:</b> İlk sistemli periyodik tablo.</li>" +
    "</ul>" +
    "<p>Simya bilimsel yöntem kullanmaz, sonuçları gizli tutar; kimya bilimsel yöntemle çalışır, sonuçlar tekrarlanabilir ve paylaşılır.</p>",
    ["Simya ile kimyayı ayırt eder.", "Kimyaya katkı sağlayan bilim insanlarını tanır."],
    ["Simyayı bilimsel kimya sanmak.", "Kütle korunumunu Dalton'a atfetmek (Lavoisier)."],
    [{ term: "Lavoisier", def: "Kütlenin korunumu, modern kimyanın babası" }, { term: "Câbir bin Hayyan", def: "Deneysel kimyanın öncüsü" }, { term: "Mendeleyev", def: "İlk periyodik tablo" }]));

  /* 2 */ units.push(U("kim-disiplin", "Kimya Disiplinleri ve Çalışma Alanları",
    "Kimyanın alt dalları ve kimyayla ilgili meslekler.",
    "<h3>Başlıca kimya disiplinleri</h3>" +
    "<ul>" +
    "<li><b>Anorganik kimya:</b> Karbon dışı (metal, mineral) bileşikler.</li>" +
    "<li><b>Organik kimya:</b> Karbon bileşikleri (C-H).</li>" +
    "<li><b>Fizikokimya:</b> Kimyasal olayları fizik yasalarıyla açıklar (enerji, hız).</li>" +
    "<li><b>Analitik kimya:</b> Maddenin cinsini (nitel) ve miktarını (nicel) belirler.</li>" +
    "<li><b>Biyokimya:</b> Canlılardaki kimyasal olaylar.</li>" +
    "<li><b>Polimer kimyası:</b> Büyük moleküllü (plastik, kauçuk) maddeler.</li>" +
    "</ul>" +
    "<h3>Meslekler ve endüstri</h3>" +
    "<p>Kimyager, kimya mühendisi, eczacı, metalurji mühendisi başlıca alanlardır. <b>Endüstriyel kimya</b> ve <b>petrokimya</b> ham petrolden yakıt, plastik ve gübre üretimini kapsar.</p>",
    ["Kimya disiplinlerini ayırt eder.", "İlgili meslekleri tanır."],
    ["Organik-anorganik ayrımını canlı-cansız sanmak (ölçüt karbon)."],
    [{ term: "Organik kimya", def: "Karbon (C-H) bileşikleri" }, { term: "Analitik kimya", def: "Nitel + nicel analiz" }, { term: "Biyokimya", def: "Canlıdaki kimyasal olaylar" }]));

  /* 3 */ units.push(U("kim-sembol", "Kimyanın Sembolik Dili",
    "Element sembolleri, bileşik formülleri ve katsayı-indis okuma.",
    "<p>Her elementin bir <b>sembolü</b> vardır: ilk harf büyük, varsa ikincisi küçük (<b>Na, Ca, Cl</b>). Semboller uluslararası adlardan gelir (Na=natrium, Fe=ferrum, K=kalium).</p>" +
    "<h3>Formül türleri</h3>" +
    "<ul>" +
    "<li><b>Kaba (basit) formül:</b> Atomların en küçük tam sayılı oranı (CH).</li>" +
    "<li><b>Molekül formülü:</b> Gerçek atom sayıları (C₆H₆).</li>" +
    "<li><b>Yapı formülü:</b> Atomların bağlanışı.</li>" +
    "</ul>" +
    "<p>Alt <b>indis</b> atom sayısını, önündeki <b>katsayı</b> molekül/birim sayısını verir. Örn. <b>2H₂O</b>: 2 molekül, toplam 4 H ve 2 O atomu. İyon yükleri sağ üstte yazılır (Na⁺, SO₄²⁻).</p>",
    ["Sembol ile formülü ayırt eder.", "Formüldeki toplam atom sayısını hesaplar."],
    ["Katsayı ile indisi karıştırmak.", "İkinci harfi büyük yazmak (CO ≠ Co)."],
    [{ term: "Kaba formül", def: "En küçük tam sayılı atom oranı" }, { term: "2H₂O", def: "4 H + 2 O atomu" }, { term: "Katsayı", def: "Molekül/birim sayısı" }]));

  /* 4 */ units.push(U("kim-guvenlik", "Kimyada İş Sağlığı ve Güvenliği",
    "Laboratuvar güvenliği, GHS uyarı işaretleri ve güvenli çalışma.",
    "<p>Laboratuvarda önlük, gözlük ve eldiven kullanılır; koku el ile yelpazelenerek alınır; kimyasallar ağızla pipetlenmez; asit-su seyreltmede daima <b>asit suya</b> yavaşça eklenir.</p>" +
    "<h3>GHS tehlike işaretleri</h3>" +
    "<ul>" +
    "<li><b>Alevlenir:</b> Kolay tutuşan maddeler.</li>" +
    "<li><b>Aşındırıcı (korozif):</b> Deri/metali aşındıran asit-baz.</li>" +
    "<li><b>Toksik:</b> Zehirli (kuru kafa sembolü).</li>" +
    "<li><b>Oksitleyici, patlayıcı, çevreye zararlı</b> sembolleri.</li>" +
    "</ul>" +
    "<p>Kimyasallar etiketlenir; atıklar lavaboya değil uygun kaplara dökülür. <b>MSDS</b> (güvenlik bilgi formu) maddenin tehlikelerini bildirir.</p>",
    ["GHS işaretlerini yorumlar.", "Güvenlik kurallarını uygular."],
    ["Suyu aside eklemek (sıçrama).", "Atıkları lavaboya dökmek."],
    [{ term: "Aşındırıcı", def: "Asit/baz; deri-metal aşındırır" }, { term: "Seyreltme kuralı", def: "Asit suya eklenir" }, { term: "MSDS", def: "Güvenlik bilgi formu" }]));

  /* 5 */ units.push(U("kim-model", "Atom Modelleri",
    "Dalton'dan modern (kuantum) modele atomun tarihsel gelişimi.",
    "<ul>" +
    "<li><b>Dalton:</b> Atom bölünemez, içi dolu berk küre.</li>" +
    "<li><b>Thomson:</b> Üzümlü kek — pozitif hamur içinde gömülü elektronlar; <b>elektronu</b> (katot ışınları) buldu.</li>" +
    "<li><b>Rutherford:</b> Merkezde küçük, pozitif, kütlenin çoğunu taşıyan <b>çekirdek</b>; çevre boşluk (altın levha deneyi).</li>" +
    "<li><b>Bohr:</b> Elektronlar belirli enerjili <b>kararlı yörüngelerde</b> dolanır.</li>" +
    "<li><b>Modern (kuantum):</b> Elektronun yeri kesin bilinmez; yalnızca bulunma olasılığı yüksek <b>orbitaller</b> tanımlanır.</li>" +
    "</ul>" +
    "<p>Model gelişimi bilimin birikimli ve düzeltilebilir olduğunu gösterir; her model bir öncekinin eksiğini tamamlar.</p>",
    ["Atom modellerini sırayla açıklar.", "Her modelin katkısını belirtir."],
    ["Çekirdeği Thomson'a atfetmek (Rutherford).", "Bohr yörüngesi ile orbitali karıştırmak."],
    [{ term: "Thomson", def: "Elektron; üzümlü kek" }, { term: "Rutherford", def: "Çekirdek; altın levha" }, { term: "Bohr", def: "Kararlı enerji yörüngeleri" }]));

  /* 6 */ units.push(U("kim-atom", "Atomun Yapısı",
    "Proton, nötron, elektron; atom/kütle numarası, izotop-izobar-izoton ve iyonlar.",
    "<p>Atom; merkezde <b>çekirdek</b> (proton p⁺ + nötron n⁰) ve çevresinde <b>elektronlar</b> (e⁻) içerir. Proton +, elektron −, nötron yüksüzdür.</p>" +
    "<h3>Temel tanımlar</h3>" +
    "<ul>" +
    "<li><b>Atom numarası (Z)</b> = proton sayısı; elementi belirler.</li>" +
    "<li><b>Kütle numarası (A)</b> = proton + nötron.</li>" +
    "<li>Nötr atomda <b>proton = elektron</b>.</li>" +
    "<li><b>İyon:</b> e⁻ alırsa anyon (−), verirse katyon (+).</li>" +
    "</ul>" +
    "<h3>Türler</h3>" +
    "<p><b>İzotop:</b> p aynı, n farklı. <b>İzobar:</b> A aynı. <b>İzoton:</b> n aynı. <b>İzoelektronik:</b> e⁻ sayısı aynı. Örn. ₁₁²³Na: 11 p, 11 e, 12 n.</p>",
    ["Z ve A'dan p, n, e bulur.", "İzotop-izobar-izoton-izoelektronik ayırır."],
    ["Katyonda e⁻ = p almak.", "n = A−Z bulmayı unutmak."],
    [{ term: "Z", def: "Proton sayısı" }, { term: "A", def: "p + n" }, { term: "İzotop", def: "p aynı, n farklı" }]));

  /* 7 */ units.push(U("kim-yerlesim", "Periyodik Sistemde Yerleşim Esasları",
    "Elektron dizilimi ile periyot ve grup belirleme.",
    "<p>Elementler artan <b>atom numarasına</b> göre sıralanır. Elektronlar enerji katmanlarına dizilir; son katman <b>değerlik (valans)</b> elektronlarıdır.</p>" +
    "<h3>Yer bulma</h3>" +
    "<ul>" +
    "<li><b>Periyot no</b> = katman (kabuk) sayısı. 7 periyot vardır.</li>" +
    "<li><b>A grubu no</b> = değerlik elektron sayısı.</li>" +
    "</ul>" +
    "<p>Örn. ₁₁Na: 2)8)1 → 3. periyot, 1A. ₁₇Cl: 2)8)7 → 3. periyot, 7A. Baş gruplar (A) ve geçiş metalleri (B) tabloyu oluşturur.</p>",
    ["Dizilimden periyot ve grubu bulur.", "Değerlik elektronunu belirler."],
    ["Periyot ile grubu ters almak.", "B grubuna A kuralı uygulamak."],
    [{ term: "Periyot", def: "Katman sayısı" }, { term: "A grup no", def: "Değerlik e⁻ sayısı" }, { term: "₁₁Na", def: "3. periyot 1A" }]));

  /* 8 */ units.push(U("kim-siniflama", "Elementlerin Sınıflandırılması",
    "Metal, ametal, yarı metal, soy gaz ve grup adları.",
    "<ul>" +
    "<li><b>Metaller:</b> Elektron verir (katyon), parlak, ısı-elektrik iletir, tel-levha olur. Tablonun solu.</li>" +
    "<li><b>Ametaller:</b> Elektron alır (anyon), kırılgan, yalıtkan (grafit hariç). Sağ üst.</li>" +
    "<li><b>Yarı metaller (B, Si, Ge, As, Sb, Te):</b> Yarı iletken.</li>" +
    "<li><b>Soy gazlar (8A):</b> Son katmanı dolu, kararlı; tepkimeye girmez.</li>" +
    "</ul>" +
    "<p>Grup adları: 1A alkali metaller, 2A toprak alkali metaller, 7A halojenler, 8A soy gazlar. <b>Hidrojen ametaldir</b> (1A'da yazılsa da).</p>",
    ["Metal-ametal-yarı metal-soy gazı ayırır.", "Grup adlarını eşleştirir."],
    ["Hidrojeni metal sanmak.", "Soy gazı tepkimeye giriyor sanmak."],
    [{ term: "1A", def: "Alkali metaller" }, { term: "7A", def: "Halojenler" }, { term: "8A", def: "Soy gazlar" }]));

  /* 9 */ units.push(U("kim-periyodik", "Periyodik Özelliklerin Değişme Eğilimleri",
    "Atom yarıçapı, iyonlaşma enerjisi, elektron ilgisi ve elektronegatiflik.",
    "<ul>" +
    "<li><b>Atom yarıçapı:</b> Grupta aşağı <b>artar</b>, periyotta sağa <b>azalır</b>.</li>" +
    "<li><b>İyonlaşma enerjisi:</b> (e⁻ koparma) yarıçapın tersi: sağa <b>artar</b>, aşağı azalır.</li>" +
    "<li><b>Elektron ilgisi</b> ve <b>elektronegatiflik:</b> sağa artar, aşağı azalır. En elektronegatif element <b>F</b>.</li>" +
    "<li><b>Metalik özellik</b> aşağı-sola artar; ametalik yukarı-sağa artar.</li>" +
    "</ul>" +
    "<p>Katyon atomundan küçük, anyon büyüktür. İzoelektronik türlerde çekirdek yükü büyük olanın yarıçapı küçüktür.</p>",
    ["Periyodik eğilim yönlerini bilir.", "İyon yarıçaplarını karşılaştırır."],
    ["Yarıçap ile iyonlaşma enerjisini aynı yönde sanmak.", "Katyonu atomundan büyük sanmak."],
    [{ term: "Atom yarıçapı", def: "Sağa azalır, aşağı artar" }, { term: "İyonlaşma enerjisi", def: "Sağa artar" }, { term: "En elektronegatif", def: "Flor (F)" }]));

  /* 10 */ units.push(U("kim-turler", "Kimyasal Türler ve Etkileşimlerin Sınıflandırılması",
    "Atom-molekül-iyon türleri ve güçlü-zayıf etkileşim ayrımı.",
    "<p><b>Kimyasal tür:</b> Atom, molekül, iyon ve radikallerin ortak adı. Etkileşimler ikiye ayrılır:</p>" +
    "<ul>" +
    "<li><b>Güçlü etkileşimler (kimyasal bağ):</b> İyonik, kovalent, metalik. Tür içi; kopması çok enerji ister.</li>" +
    "<li><b>Zayıf etkileşimler:</b> Van der Waals (London, dipol-dipol) ve hidrojen bağı. Moleküller arası; hâl değişiminde kopar.</li>" +
    "</ul>" +
    "<p>Suyun kaynaması <b>zayıf</b> etkileşimlerin kopmasıdır; O-H kovalent bağı kopmaz. Bu yüzden hâl değişimi fizikseldir.</p>",
    ["Güçlü-zayıf etkileşimi ayırır.", "Hâl değişiminde kopan etkileşimi belirler."],
    ["Kaynamada kovalent bağ koptuğunu sanmak.", "İyonik-kovalenti zayıf sanmak."],
    [{ term: "Güçlü etkileşim", def: "İyonik, kovalent, metalik" }, { term: "Zayıf etkileşim", def: "Van der Waals + hidrojen bağı" }, { term: "Kaynama", def: "Zayıf bağ kopar" }]));

  /* 11 */ units.push(U("kim-guclu", "Güçlü Etkileşimler",
    "İyonik, kovalent (polar-apolar) ve metalik bağ.",
    "<ul>" +
    "<li><b>İyonik bağ:</b> <b>Metal + ametal</b> arasında elektron <b>alışverişiyle</b> oluşur (NaCl). Metal verir (katyon), ametal alır (anyon); zıt iyonlar çekilir. Katılar örgü yapılıdır.</li>" +
    "<li><b>Kovalent bağ:</b> <b>Ametal + ametal</b> arasında elektronların <b>ortaklaşa</b> kullanımıyla oluşur (H₂O, CO₂). Elektronlar eşit paylaşılırsa <b>apolar</b> (H₂, Cl₂), farklı çekilirse <b>polar</b> (HCl).</li>" +
    "<li><b>Metalik bağ:</b> Metal katyonları ile ortak <b>elektron denizi</b> arasındaki çekim; iletkenlik ve işlenebilirliği açıklar.</li>" +
    "</ul>" +
    "<p>Bu bağlar güçlüdür; erime/kaynama noktaları yüksektir. İyonik katılar suda iyonlaşıp elektrik iletir.</p>",
    ["İyonik-kovalent-metalik bağı ayırır.", "Polar-apolar kovalenti ayırt eder."],
    ["İyonik (metal-ametal) ile kovalenti (ametal-ametal) karıştırmak.", "Apolar molekülü polar sanmak."],
    [{ term: "İyonik bağ", def: "Metal + ametal, e⁻ alışverişi" }, { term: "Kovalent bağ", def: "Ametal + ametal, e⁻ ortaklığı" }, { term: "Metalik bağ", def: "Elektron denizi" }]));

  /* 12 */ units.push(U("kim-zayif", "Zayıf Etkileşimler",
    "Van der Waals (London, dipol-dipol) ve hidrojen bağı.",
    "<ul>" +
    "<li><b>London (indüklenmiş dipol):</b> Tüm moleküllerde bulunan en zayıf çekim; molekül büyüdükçe (kütle arttıkça) güçlenir. Apolar moleküllerdeki tek çekimdir.</li>" +
    "<li><b>Dipol-dipol:</b> Polar moleküller arasında, kalıcı dipollerin çekimi; London'dan güçlüdür.</li>" +
    "<li><b>Hidrojen bağı:</b> H'nin <b>F, O, N</b>'ye bağlı olduğu moleküller arasında görülen, zayıf etkileşimlerin <b>en güçlüsü</b>. Suyun yüksek kaynama noktası ve buzun suda yüzmesinin nedenidir.</li>" +
    "</ul>" +
    "<p>Zayıf etkileşimler <b>hâl değişiminde</b> (erime, kaynama) kopar; kimyasal bağlar kopmaz. Güçlü zayıf etkileşimi olan maddenin kaynama noktası yüksektir.</p>",
    ["Zayıf etkileşim türlerini güce göre sıralar.", "Hidrojen bağı koşulunu bilir."],
    ["Hidrojen bağını kovalent bağ sanmak.", "London'u yalnızca apolarlarda var sanmak (hepsinde var)."],
    [{ term: "London kuvveti", def: "En zayıf; kütleyle artar" }, { term: "Hidrojen bağı", def: "H–F/O/N; en güçlü zayıf etkileşim" }, { term: "Suyun k.n. yüksek", def: "Hidrojen bağı" }]));

  /* 13 */ units.push(U("kim-degisim", "Fiziksel ve Kimyasal Değişimler",
    "Madde değişimlerinin ayrımı ve örnekleri.",
    "<ul>" +
    "<li><b>Fiziksel değişim:</b> Maddenin <b>iç yapısı (kimliği) değişmez</b>, yalnızca dış görünüş/hâl değişir. Örn. buzun erimesi, kâğıdın yırtılması, şekerin suda çözünmesi, camın kırılması.</li>" +
    "<li><b>Kimyasal değişim:</b> Maddenin <b>yapısı değişir, yeni madde oluşur</b>. Örn. kâğıdın yanması, demirin paslanması, sütün ekşimesi, ekmeğin küflenmesi, fotosentez.</li>" +
    "</ul>" +
    "<p>Kimyasal değişim belirtileri: renk/koku değişimi, gaz çıkışı, ısı-ışık, çökelek oluşumu ve geri dönüşün zor olması. Hâl değişimleri ve çözünme fizikseldir.</p>",
    ["Fiziksel-kimyasal değişimi ayırır.", "Kimyasal değişim belirtilerini tanır."],
    ["Çözünmeyi kimyasal sanmak (fizikseldir).", "Paslanmayı fiziksel sanmak (kimyasaldır)."],
    [{ term: "Fiziksel değişim", def: "Kimlik değişmez (erime, çözünme)" }, { term: "Kimyasal değişim", def: "Yeni madde (yanma, paslanma)" }]));

  /* 14 */ units.push(U("kim-hal", "Maddenin Fiziksel Hâlleri",
    "Katı-sıvı-gaz tanecik düzeni ve hâl değişimleri (endo/ekzotermik).",
    "<ul>" +
    "<li><b>Katı:</b> Tanecikler düzenli-sıkı; belirli şekil ve hacim.</li>" +
    "<li><b>Sıvı:</b> Daha hareketli; belirli hacim, kabın şekli.</li>" +
    "<li><b>Gaz:</b> Çok hareketli-dağınık; belirli şekil/hacim yok, kabı doldurur.</li>" +
    "</ul>" +
    "<p>Katıdan gaza tanecikler arası <b>boşluk ve hareket artar</b>. <b>Hâl değişimleri:</b> erime (k→s), donma (s→k), buharlaşma (s→g), yoğuşma (g→s), süblimleşme (k→g), kırağılaşma (g→k). Erime-buharlaşma-süblimleşme <b>ısı alır (endotermik)</b>; tersleri <b>ısı verir (ekzotermik)</b>. Saf maddede hâl değişiminde sıcaklık <b>sabittir</b>.</p>",
    ["Hâlleri tanecik düzenine göre karşılaştırır.", "Hâl değişimlerini endo/ekzo sınıflar."],
    ["Hâl değişiminde sıcaklık değişir sanmak (saf maddede sabit).", "Süblimleşmeyi buharlaşma sanmak."],
    [{ term: "Süblimleşme", def: "Katı → gaz (naftalin, kuru buz)" }, { term: "Endotermik", def: "Erime, buharlaşma (ısı alır)" }, { term: "Saf madde hâl değişimi", def: "Sıcaklık sabit" }]));

  /* 15 */ units.push(U("kim-katisivi", "Katılar ve Sıvılar",
    "Katı türleri, sıvı özellikleri; buhar basıncı, yüzey gerilimi, viskozite.",
    "<h3>Katılar</h3>" +
    "<p>Tanecikleri belirli düzende (örgü) titreşir. <b>Kristal katılar</b> (tuz, elmas) düzenli; <b>amorf katılar</b> (cam, lastik) düzensizdir. Sabit erime noktası kristallere özgüdür.</p>" +
    "<h3>Sıvılar</h3>" +
    "<ul>" +
    "<li><b>Buhar basıncı:</b> Sıvının buharlaşma eğilimi. Zayıf etkileşimli sıvıda yüksektir (uçucudur); kaynama noktası düşüktür.</li>" +
    "<li><b>Yüzey gerilimi:</b> Yüzeyi küçültme eğilimi (su damlasının küresel olması). Etkileşim güçlüyse artar.</li>" +
    "<li><b>Viskozite (akışkanlık direnci):</b> Bal suya göre viskozdur. Sıcaklık artınca viskozite azalır.</li>" +
    "</ul>" +
    "<p>Kılcallık, adezyon-kohezyon dengesiyle sıvının ince borularda yükselmesidir.</p>",
    ["Kristal-amorf katıyı ayırır.", "Buhar basıncı-yüzey gerilimi-viskoziteyi yorumlar."],
    ["Buhar basıncı yüksek sıvıyı zor kaynar sanmak (kolay kaynar).", "Viskoziteyi sıcaklıkla artar sanmak."],
    [{ term: "Buhar basıncı yüksek", def: "Uçucu, k.n. düşük" }, { term: "Yüzey gerilimi", def: "Yüzeyi küçültme eğilimi" }, { term: "Amorf katı", def: "Düzensiz (cam)" }]));

  /* 16 */ units.push(U("kim-gaz", "Gazlar ve Plazma",
    "Gaz özellikleri, basınç ve maddenin dördüncü hâli plazma.",
    "<p>Gaz tanecikleri çok hızlı ve rastgele hareket eder; kabın her yerine yayılır ve <b>basınç</b> uygular. Gaz basıncı; sıcaklık ve tanecik sayısı artınca artar, hacim artınca azalır. Gazlar kolayca <b>sıkıştırılabilir</b> (tanecikler arası boşluk çok).</p>" +
    "<h3>Nitel gaz ilişkileri</h3>" +
    "<ul>" +
    "<li>Sabit sıcaklıkta hacim ↑ → basınç ↓ (ters orantı).</li>" +
    "<li>Sabit hacimde sıcaklık ↑ → basınç ↑.</li>" +
    "<li>Sabit basınçta sıcaklık ↑ → hacim ↑.</li>" +
    "</ul>" +
    "<h3>Plazma</h3>" +
    "<p><b>Plazma</b> maddenin dördüncü hâlidir: çok yüksek sıcaklıkta atomların iyonlaştığı, yüklü taneciklerden oluşan hâl. Güneş ve yıldızlar, yıldırım, neon lambaları plazma örneğidir. Evrende en yaygın hâldir.</p>",
    ["Gaz basıncı-sıcaklık-hacim ilişkisini yorumlar.", "Plazmayı tanır."],
    ["Gazı sıkıştırılamaz sanmak.", "Plazmayı gaz ile aynı sanmak."],
    [{ term: "Gaz basıncı", def: "Sıcaklık ve tanecikle artar" }, { term: "Plazma", def: "İyonlaşmış 4. hâl (yıldızlar)" }]));

  /* 17 */ units.push(U("kim-su", "Su ve Hayat",
    "Suyun özellikleri, çözücülüğü ve hayat için önemi.",
    "<p>Su (H₂O) polar bir moleküldür ve moleküller arası <b>hidrojen bağı</b> yapar. Bu yüzden kaynama noktası yüksektir, yüzey gerilimi büyüktür ve <b>evrensel çözücü</b> olarak birçok maddeyi çözer.</p>" +
    "<h3>Öne çıkan özellikler</h3>" +
    "<ul>" +
    "<li><b>Yüksek özısı:</b> Sıcaklığı geç değişir; iklimi ve canlı vücut ısısını dengeler.</li>" +
    "<li><b>Buzun yoğunluğu sudan küçük:</b> Buz suda yüzer; göllerin dibi donmaz (canlılar korunur).</li>" +
    "<li><b>Çözücülük:</b> Polar ve iyonik maddeleri (tuz, şeker) çözer; yağ (apolar) çözünmez — \"benzer benzeri çözer\".</li>" +
    "</ul>" +
    "<p>Su, canlı kütlesinin büyük kısmını oluşturur; taşıma, tepkime ortamı ve sıcaklık düzenlemesi sağlar.</p>",
    ["Suyun anormal özelliklerini hidrojen bağıyla açıklar.", "Çözünürlük kuralını uygular."],
    ["Yağın suda çözündüğünü sanmak.", "Buzu sudan yoğun sanmak."],
    [{ term: "Buz < su yoğunluğu", def: "Buz yüzer (hidrojen bağı)" }, { term: "Benzer benzeri çözer", def: "Polar-polar, apolar-apolar" }, { term: "Yüksek özısı", def: "İklim/vücut ısısını dengeler" }]));

  /* 18 */ units.push(U("kim-cevre", "Çevre Kimyası",
    "Hava-su-toprak kirliliği, asit yağmuru, sera etkisi ve ozon.",
    "<ul>" +
    "<li><b>Asit yağmuru:</b> Fosil yakıt gazları (SO₂, NOₓ) su buharıyla asit oluşturur; toprağı, yapıları ve suları zarar verir.</li>" +
    "<li><b>Sera etkisi ve küresel ısınma:</b> CO₂, CH₄ gibi gazlar ısıyı tutar; artışı iklimi değiştirir.</li>" +
    "<li><b>Ozon tabakası:</b> Güneşin morötesi ışınlarını süzer; CFC gazları inceltir.</li>" +
    "<li><b>Su kirliliği ve ötrofikasyon:</b> Atık ve gübreler suları kirletir, oksijeni azaltır.</li>" +
    "</ul>" +
    "<p>Geri dönüşüm, arıtma, yenilenebilir enerji ve atık yönetimi çözüm yollarıdır. <b>Yeşil kimya</b> daha az atık ve zararsız madde ilkesini benimser.</p>",
    ["Çevre sorunlarının kimyasal nedenlerini açıklar.", "Çözüm yollarını önerir."],
    ["Asit yağmuru ile sera etkisini karıştırmak.", "Ozon tabakasını sera gazı sanmak."],
    [{ term: "Asit yağmuru", def: "SO₂, NOₓ" }, { term: "Sera gazı", def: "CO₂, CH₄" }, { term: "Ozon", def: "UV süzer; CFC inceltir" }]));

  /* 19 */ units.push(U("kim-kanun", "Kimyanın Temel Kanunları",
    "Kütlenin korunumu, sabit oranlar ve katlı oranlar kanunları.",
    "<h3>Kütlenin Korunumu (Lavoisier)</h3>" +
    "<p>Tepkimede <b>girenlerin kütlesi = ürünlerin kütlesi</b>. Örn. 12 g C + 32 g O₂ → <b>44 g</b> CO₂.</p>" +
    "<h3>Sabit Oranlar (Proust)</h3>" +
    "<p>Bir bileşiği oluşturan elementler <b>kütlece sabit oranda</b> birleşir. Suda H:O kütle oranı her zaman <b>1:8</b>'dir.</p>" +
    "<h3>Katlı Oranlar (Dalton)</h3>" +
    "<p>İki element <b>birden fazla bileşik</b> yapıyorsa, birinin sabit kütlesiyle birleşen diğerinin kütleleri arasında <b>basit tam sayılı oran</b> vardır (CO ile CO₂'de O oranı 1:2).</p>",
    ["Üç temel kanunu ayırt eder.", "Kütle-oran hesabı yapar."],
    ["Sabit oranı (tek bileşik) katlı oranla (çok bileşik) karıştırmak.", "Kütle korunumunu ihmal etmek."],
    [{ term: "Lavoisier", def: "Kütlenin korunumu" }, { term: "Proust", def: "Sabit oranlar" }, { term: "Dalton", def: "Katlı oranlar" }]));

  /* 20 */ units.push(U("kim-mol", "Mol Kavramı",
    "Mol, Avogadro sayısı, molar kütle; kütle-mol-tanecik ilişkileri.",
    "<p><b>1 mol = 6,02·10²³ tane</b> tanecik (Avogadro sayısı, N<sub>A</sub>). <b>Molar kütle (M):</b> 1 molün gram kütlesi (g/mol); su için M = 2·1 + 16 = <b>18 g/mol</b>.</p>" +
    "<div class=\"formula\">n = m / M &nbsp;|&nbsp; Tanecik sayısı = n · N<sub>A</sub></div>" +
    "<p><b>Örnek 1:</b> 36 g su → n = 36/18 = <b>2 mol</b>.</p>" +
    "<p><b>Örnek 2:</b> 2 mol maddede 2·6,02·10²³ = <b>1,204·10²⁴</b> tanecik.</p>" +
    "<p><b>Örnek 3:</b> Normal koşullarda (0 °C, 1 atm) 1 mol gaz <b>22,4 litre</b> yer kaplar.</p>",
    ["n=m/M bağıntısını kullanır.", "Mol-tanecik-hacim dönüşümü yapar."],
    ["n = M/m ters çevirmek.", "Farklı maddeleri eşit mol için eşit kütle sanmak."],
    [{ term: "1 mol", def: "6,02·10²³ tanecik" }, { term: "n = m/M", def: "Mol = kütle/molar kütle" }, { term: "NK'da 1 mol gaz", def: "22,4 L" }]));

  /* 21 */ units.push(U("kim-tepkime", "Kimyasal Tepkimeler ve Denklemler",
    "Tepkime türleri ve denklem denkleştirme.",
    "<p>Kimyasal denklemde <b>girenler → ürünler</b> yazılır ve <b>atom sayıları iki tarafta eşitlenir</b> (denkleştirme; kütle korunumu). Örn. <b>2H₂ + O₂ → 2H₂O</b>.</p>" +
    "<h3>Tepkime türleri</h3>" +
    "<ul>" +
    "<li><b>Yanma:</b> Yakıt + O₂ → CO₂ + H₂O + ısı.</li>" +
    "<li><b>Sentez (birleşme):</b> A + B → AB.</li>" +
    "<li><b>Analiz (ayrışma):</b> AB → A + B.</li>" +
    "<li><b>Yer değiştirme:</b> Aktif element pasifin yerini alır.</li>" +
    "<li><b>Asit-baz (nötrleşme):</b> Asit + baz → tuz + su.</li>" +
    "</ul>" +
    "<p>Denkleştirmede yalnızca <b>katsayılar</b> değiştirilir; formüller (indisler) değişmez.</p>",
    ["Denklem denkleştirir.", "Tepkime türünü belirler."],
    ["Denkleştirirken indisi değiştirmek (yalnız katsayı değişir).", "Yanma ürününü yanlış yazmak."],
    [{ term: "Denkleştirme", def: "Atom sayıları eşit; katsayı değişir" }, { term: "Nötrleşme", def: "Asit + baz → tuz + su" }, { term: "Analiz", def: "AB → A + B" }]));

  /* 22 */ units.push(U("kim-hesap", "Kimyasal Tepkimelerde Hesaplamalar",
    "Denklem katsayılarıyla mol-kütle-hacim hesabı.",
    "<p>Denklemdeki <b>katsayılar mol oranını</b> verir. Hesap adımları: (1) denklemi denkleştir, (2) verileni mole çevir (n=m/M), (3) katsayı oranıyla istenen türün molünü bul, (4) mol'ü kütle/hacme çevir.</p>" +
    "<p><b>Örnek:</b> 2H₂ + O₂ → 2H₂O denkleminde 4 mol H₂ tamamen yanarsa: mol oranı H₂:H₂O = 2:2 = 1:1, yani <b>4 mol</b> su oluşur; kütlesi 4·18 = <b>72 g</b>.</p>" +
    "<p><b>Sınırlayıcı bileşen:</b> Tepkimede önce biten madde ürün miktarını belirler; hesap sınırlayıcıya göre yapılır.</p>",
    ["Katsayı oranıyla stokiyometri hesabı yapar.", "Sınırlayıcı bileşeni belirler."],
    ["Katsayı oranı yerine kütle oranını doğrudan kullanmak.", "Sınırlayıcıyı göz ardı etmek."],
    [{ term: "Katsayı", def: "Mol oranını verir" }, { term: "Sınırlayıcı bileşen", def: "Önce biten, ürünü sınırlar" }]));

  /* 23 */ units.push(U("kim-karisim1", "Homojen ve Heterojen Karışımlar - I",
    "Saf madde-karışım ayrımı ve karışım türleri.",
    "<ul>" +
    "<li><b>Saf madde:</b> Tek tür tanecik. <b>Element</b> (tek cins atom: Fe, O₂) ve <b>bileşik</b> (farklı atomlar belirli oranda: H₂O, NaCl).</li>" +
    "<li><b>Karışım:</b> Birden çok maddenin kimyasal bağ olmadan bir arada bulunması; belirli formülü ve sabit özellikleri yoktur.</li>" +
    "</ul>" +
    "<h3>Karışım türleri</h3>" +
    "<ul>" +
    "<li><b>Homojen (çözelti):</b> Her yeri aynı, tek fazlı görünür (tuzlu su, kolonya, hava, çelik gibi alaşımlar).</li>" +
    "<li><b>Heterojen:</b> Her yeri aynı değil, fazlar ayırt edilir (kumlu su, ayran, tebeşir tozu-su).</li>" +
    "</ul>" +
    "<p>Çözeltide <b>çözünen</b> (az) + <b>çözücü</b> (çok) bulunur; su en yaygın çözücüdür.</p>",
    ["Saf madde-karışımı ayırır.", "Homojen-heterojen ayırt eder."],
    ["Bileşiği karışım sanmak (bileşiğin formülü vardır).", "Alaşımı heterojen sanmak (homojendir)."],
    [{ term: "Homojen karışım", def: "Çözelti; tek faz (tuzlu su)" }, { term: "Heterojen", def: "Fazlar görünür (ayran)" }, { term: "Alaşım", def: "Homojen metal karışımı" }]));

  /* 24 */ units.push(U("kim-karisim2", "Homojen ve Heterojen Karışımlar - II",
    "Derişim (kütlece yüzde) ve çözünürlüğe etki eden faktörler.",
    "<h3>Kütlece yüzde derişim</h3>" +
    "<div class=\"formula\">Kütlece % = (çözünen kütlesi / çözelti kütlesi) · 100</div>" +
    "<p>Çözelti kütlesi = çözünen + çözücü. <b>Örnek:</b> 20 g tuz 80 g suda çözünürse çözelti 100 g; derişim = 20/100·100 = <b>%20</b>.</p>" +
    "<h3>Çözünürlüğe etki eden faktörler</h3>" +
    "<ul>" +
    "<li><b>Sıcaklık:</b> Katıların çoğunun çözünürlüğü sıcaklıkla artar; <b>gazlarınki azalır</b>.</li>" +
    "<li><b>Ortak iyon, madde cinsi</b> ve gazlarda <b>basınç</b> çözünürlüğü etkiler.</li>" +
    "<li>Karıştırma ve toz hâline getirme çözünme <b>hızını</b> artırır ama çözünürlük miktarını değiştirmez.</li>" +
    "</ul>",
    ["Kütlece yüzde derişim hesaplar.", "Çözünürlük faktörlerini yorumlar."],
    ["Çözelti kütlesine çözüneni katmayı unutmak.", "Karıştırmayı çözünürlüğü artırır sanmak (hızı artırır)."],
    [{ term: "Kütlece %", def: "çözünen/çözelti ·100" }, { term: "Gaz çözünürlüğü", def: "Sıcaklıkla azalır" }, { term: "Karıştırma", def: "Hızı artırır, miktarı değil" }]));

  /* 25 */ units.push(U("kim-ayirma", "Ayırma ve Saflaştırma Teknikleri",
    "Karışımları fiziksel yöntemlerle ayırma.",
    "<ul>" +
    "<li><b>Süzme:</b> Çözünmeyen katı-sıvı ayrımı (kumlu su).</li>" +
    "<li><b>Buharlaştırma:</b> Çözünmüş katıyı sıvıdan ayırır (tuzlu sudan tuz).</li>" +
    "<li><b>Damıtma (distilasyon):</b> Kaynama noktası farkıyla ayırır (alkol-su, deniz suyundan tatlı su).</li>" +
    "<li><b>Ayırma hunisi:</b> Karışmayan (yoğunluğu farklı) sıvıları ayırır (su-zeytinyağı).</li>" +
    "<li><b>Mıknatısla ayırma:</b> Demir gibi manyetik maddeler.</li>" +
    "<li><b>Yüzdürme/ayıklama:</b> Özkütle farkıyla (buğday-saman).</li>" +
    "<li><b>Kristallendirme, kromatografi:</b> Saflaştırma ve bileşen ayrımı.</li>" +
    "</ul>" +
    "<p>Yöntem seçimi karışımın türüne ve bileşenlerin fiziksel özelliklerine (kaynama noktası, çözünürlük, yoğunluk, manyetiklik) bağlıdır.</p>",
    ["Uygun ayırma yöntemini seçer.", "Yöntemin dayandığı fiziksel özelliği belirtir."],
    ["Damıtmayı çözünürlük farkı sanmak (kaynama noktası).", "Homojen karışımı süzmeyle ayırmaya çalışmak."],
    [{ term: "Damıtma", def: "Kaynama noktası farkı" }, { term: "Ayırma hunisi", def: "Karışmayan sıvılar" }, { term: "Buharlaştırma", def: "Çözünmüş katı-sıvı" }]));

  /* 26 */ units.push(U("kim-asitbaz", "Asitlerin ve Bazların Özellikleri",
    "Asit-baz tanımları, pH ve belirteçler.",
    "<h3>Asitler</h3>" +
    "<p>Suda <b>H⁺</b> veren maddeler. Tatları <b>ekşi</b>, mavi turnusolu <b>kırmızıya</b> çevirir, metallerle H₂ gazı verir. Örn. HCl, H₂SO₄, sirke, limon.</p>" +
    "<h3>Bazlar</h3>" +
    "<p>Suda <b>OH⁻</b> veren maddeler. Tatları <b>acı</b>, ele <b>kaygan</b>, kırmızı turnusolu <b>maviye</b> çevirir. Örn. NaOH, KOH, NH₃, sabun.</p>" +
    "<h3>pH cetveli</h3>" +
    "<p><b>0–14</b> arası: <b>pH&lt;7 asidik</b>, <b>pH=7 nötr</b> (saf su), <b>pH&gt;7 bazik</b>. pH küçüldükçe asitlik artar. Fenolftalein bazda pembe, turnusol ve metiloranj de belirteçtir.</p>",
    ["Asit-baz özelliklerini ayırır.", "pH ile asitlik-baziklik ilişkisini kurar."],
    ["Turnusol renklerini ters bilmek (asit kırmızı, baz mavi).", "Küçük pH'ı bazik sanmak."],
    [{ term: "Asit", def: "H⁺ verir; turnusolu kırmızı" }, { term: "Baz", def: "OH⁻ verir; turnusolu mavi" }, { term: "pH=7", def: "Nötr (saf su)" }]));

  /* 27 */ units.push(U("kim-asittepkime", "Asitlerin ve Bazların Tepkimeleri",
    "Nötrleşme, metal ve karbonatla tepkimeler.",
    "<ul>" +
    "<li><b>Nötrleşme:</b> Asit + baz → <b>tuz + su</b>. Örn. HCl + NaOH → NaCl + H₂O. Isı açığa çıkar (ekzotermik).</li>" +
    "<li><b>Aktif metalle:</b> Asit + metal → tuz + <b>H₂ gazı</b> (Zn + 2HCl → ZnCl₂ + H₂).</li>" +
    "<li><b>Karbonatla:</b> Asit + karbonat → tuz + su + <b>CO₂</b> (kabarma; kabartma tozu-sirke).</li>" +
    "</ul>" +
    "<p>Kuvvetli asit/baz suda tam iyonlaşır (HCl, NaOH); zayıf olan kısmen iyonlaşır (asetik asit, NH₃). Kuvvet iyonlaşma yüzdesiyle ilgilidir, derişimle karıştırılmamalıdır.</p>",
    ["Asit-baz tepkime ürünlerini yazar.", "Kuvvetli-zayıf elektroliti ayırır."],
    ["Nötrleşme ürününü yanlış yazmak.", "Kuvvetli asidi derişik asitle karıştırmak."],
    [{ term: "Nötrleşme", def: "Asit+baz → tuz+su" }, { term: "Asit + metal", def: "Tuz + H₂ gazı" }, { term: "Asit + karbonat", def: "Tuz + su + CO₂" }]));

  /* 28 */ units.push(U("kim-tuz", "Asitler, Bazlar ve Tuzlar",
    "Tuz oluşumu, özellikleri ve günlük hayattaki tuzlar.",
    "<p><b>Tuz</b>, asit ile bazın nötrleşmesinden oluşan iyonik bileşiktir: asidin anyonu + bazın katyonu. Örn. NaCl, CaCO₃, NaHCO₃, KNO₃.</p>" +
    "<h3>Özellikler</h3>" +
    "<ul>" +
    "<li>Katı hâlde iyonik örgülüdür; suda çözününce iyonlarına ayrışıp <b>elektrik iletir</b> (elektrolit).</li>" +
    "<li>Erime noktaları yüksektir.</li>" +
    "</ul>" +
    "<h3>Günlük tuzlar</h3>" +
    "<p><b>NaCl</b> (yemek tuzu), <b>NaHCO₃</b> (kabartma tozu/karbonat), <b>CaCO₃</b> (kireç taşı, mermer), <b>Na₂CO₃</b> (soda). Toprak asitliğini gidermek için kireç (bazik) kullanılır.</p>",
    ["Tuz oluşumunu açıklar.", "Yaygın tuzları tanır."],
    ["Her tuzu nötr sanmak (bazıları asidik/baziktir).", "Katı tuzu iletken sanmak (suda çözününce iletir)."],
    [{ term: "Tuz", def: "Asit+baz nötrleşmesi (NaCl)" }, { term: "Elektrolit", def: "Suda iyonlaşıp iletir" }, { term: "NaHCO₃", def: "Kabartma tozu" }]));

  /* 29 */ units.push(U("kim-gunluk", "Yaygın Günlük Hayat Kimyasalları",
    "Temizlik ürünleri, yapı malzemeleri, polimerler ve güvenli kullanım.",
    "<h3>Temizlik maddeleri</h3>" +
    "<p><b>Sabun ve deterjan</b> kiri sudan uzaklaştırır. <b>Çamaşır suyu</b> (sodyum hipoklorit) ağartıcı-dezenfektandır. <b>UYARI:</b> Çamaşır suyu ile tuz ruhu (asit) <b>asla karıştırılmaz</b>; zehirli <b>klor gazı</b> çıkar.</p>" +
    "<h3>Yapı malzemeleri</h3>" +
    "<p>Kireç, alçı, çimento, cam yaygın malzemelerdir. Kireç suyu (baz) CO₂ ile beyazlaşır.</p>" +
    "<h3>Polimerler</h3>" +
    "<p><b>Plastikler</b> monomerlerin birleşmesiyle oluşan <b>polimer</b>lerdir; doğada geç bozunur, geri dönüşüm önemlidir. Kauçuk, naylon, PET birer polimerdir.</p>",
    ["Günlük kimyasalları işleviyle eşleştirir.", "Tehlikeli karışımları bilir."],
    ["Çamaşır suyu + asit karışımını zararsız sanmak (klor gazı).", "Plastikleri kolay bozunur sanmak."],
    [{ term: "Çamaşır suyu + asit", def: "Zehirli klor gazı" }, { term: "Polimer", def: "Monomerlerin birleşimi (plastik)" }, { term: "Sabun/deterjan", def: "Temizlik; kiri uzaklaştırır" }]));

  /* 30 */ units.push(U("kim-kozmetik", "Kozmetikler, İlaçlar ve Gıdalar",
    "Kozmetik, ilaç ve gıda kimyasallarının bilinçli kullanımı.",
    "<h3>Kozmetikler</h3>" +
    "<p>Cilt ve saç ürünlerinde pH cilde yakın (hafif asidik) ayarlanır; nemlendirici, koruyucu ve renklendiriciler içerir. Etiket ve son kullanma tarihi önemlidir.</p>" +
    "<h3>İlaçlar</h3>" +
    "<p>İlaçlar belirli dozda etki eder; <b>doz aşımı zararlıdır</b>. Antasitler (bazik) mide asidini nötrler. İlaçlar hekim/eczacı önerisiyle ve son kullanma tarihine dikkat edilerek kullanılmalıdır.</p>" +
    "<h3>Gıda katkı maddeleri</h3>" +
    "<p>Koruyucu, antioksidan, renklendirici ve tatlandırıcılar gıdanın raf ömrünü ve görünümünü ayarlar. Bilinçli tüketim ve etiket okuma sağlık açısından önemlidir.</p>",
    ["Kozmetik-ilaç-gıda kimyasallarını bilinçli değerlendirir.", "Doz ve etiketin önemini açıklar."],
    ["İlaçta \"çok doz çok fayda\" sanmak (doz aşımı zararlı).", "Antasidi asit sanmak (baziktir)."],
    [{ term: "Antasit", def: "Bazik; mide asidini nötrler" }, { term: "Gıda katkısı", def: "Koruyucu/renklendirici/tatlandırıcı" }, { term: "Doz aşımı", def: "İlaçta zararlı" }]));

  TYT_CONTENT.replaceBranchUnits("fen", "kimya", units);
})();
})();
