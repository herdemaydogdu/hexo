/* ============================================================
   FEN / FİZİK — TYT konu alanları: yeni ünite + içerik.
   MEB TYT Fizik: Fizik Bilimine Giriş, Madde ve Özkütle, Kuvvet ve
   Hareket, İş-Güç-Enerji, Isı ve Sıcaklık, Elektrostatik, Elektrik ve
   Manyetizma, Basınç ve Kaldırma Kuvveti, Dalgalar, Optik.
   branch: "fizik". Stub'lardan SONRA yüklenir. g=10 m/s². Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-fizik: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "fen"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "fizik", prerequisites: [], objectives: [], difficulty: 2, estimatedMinutes: 22 };
    u.name = name; u.summary = summary; u.branch = "fizik";
    u.content = content; u.reviewedAt = "2026-07-12"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("fen", [u]);
  }

  /* =============== fiz-giris =============== */
  setUnit("fiz-giris", "Fizik Bilimine Giriş", "Fiziğin alt dalları, fiziksel büyüklükler, birimler; skaler ve vektörel büyüklükler.",
    "<h2>Fizik Bilimine Giriş</h2>" +
    "<p>Fizik; madde, enerji ve bunların etkileşimini inceleyen temel bilimdir. Doğa olaylarını gözlem, deney ve matematikle açıklar.</p>" +

    "<h3>Fiziğin alt dalları</h3>" +
    "<ul>" +
    "<li><b>Mekanik:</b> Kuvvet, hareket ve dengeyi inceler. Üç bölümü vardır: <b>statik</b> (denge), <b>dinamik</b> (kuvvet-kütle dikkate alınarak hareket), <b>kinematik</b> (nedeni dikkate almadan hareket).</li>" +
    "<li><b>Termodinamik:</b> Isı, sıcaklık ve enerjiyi inceler.</li>" +
    "<li><b>Elektromanyetizma:</b> Elektrik yükü, akım, mıknatıs ve manyetik alanı inceler.</li>" +
    "<li><b>Optik:</b> Işığı ve ışık olaylarını (yansıma, kırılma) inceler.</li>" +
    "<li><b>Atom/Nükleer fizik:</b> Atom ve çekirdek olaylarını inceler.</li>" +
    "</ul>" +

    "<h3>Fiziksel büyüklükler ve birimleri (SI)</h3>" +
    "<ul>" +
    "<li><b>Temel büyüklükler:</b> Uzunluk (metre, m), kütle (kilogram, kg), zaman (saniye, s), akım (amper, A), sıcaklık (kelvin, K), madde miktarı (mol), ışık şiddeti (kandela, cd).</li>" +
    "<li><b>Türetilmiş büyüklükler:</b> Temel büyüklüklerden elde edilir (hız, kuvvet, enerji, basınç...).</li>" +
    "</ul>" +

    "<h3>Skaler ve vektörel büyüklükler</h3>" +
    "<ul>" +
    "<li><b>Skaler:</b> Yalnızca sayı ve birimle ifade edilir, yönü yoktur. (Kütle, zaman, sıcaklık, yol, sürat, enerji, hacim.)</li>" +
    "<li><b>Vektörel:</b> Büyüklüğün yanında yön de gerekir. (Kuvvet, yer değiştirme, hız, ivme, ağırlık.)</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Sürat/yol</b> skaler; <b>hız/yer değiştirme</b> vektöreldir — karıştırma.</li>" +
    "<li>Kütle (kg) skaler ve değişmez; ağırlık (N) vektörel bir kuvvettir.</li></ul>");

  /* =============== fiz-madde =============== */
  setUnit("fiz-madde", "Madde ve Özkütle", "Kütle, hacim, özkütle (yoğunluk); maddenin halleri ve ayırt edici özellikler.",
    "<h2>Madde ve Özkütle</h2>" +
    "<p><b>Madde</b>, kütlesi ve hacmi olan her şeydir. <b>Kütle (m)</b> madde miktarıdır (kg); <b>hacim (V)</b> kapladığı yerdir (cm³, m³).</p>" +

    "<h3>Özkütle (yoğunluk)</h3>" +
    "<div class=\"formula\">d = m / V</div>" +
    "<p>Özkütle, birim hacimdeki kütledir. Birimi <b>g/cm³</b> veya <b>kg/m³</b>'tür. Suyun özkütlesi <b>1 g/cm³</b>'tür. Özkütle maddenin <b>ayırt edici</b> özelliğidir; miktara bağlı değildir (aynı maddenin küçük ve büyük parçasının özkütlesi aynıdır).</p>" +
    "<p><b>Örnek:</b> Kütlesi 300 g, hacmi 60 cm³ olan cismin özkütlesi d = 300/60 = <b>5 g/cm³</b>'tür.</p>" +

    "<h3>Maddenin halleri</h3>" +
    "<p><b>Katı:</b> Belirli şekil ve hacim. <b>Sıvı:</b> Belirli hacim, bulunduğu kabın şeklini alır. <b>Gaz:</b> Belirli şekil ve hacmi yoktur, kabı doldurur.</p>" +

    "<h3>Ortak ve ayırt edici özellikler</h3>" +
    "<ul>" +
    "<li><b>Ortak özellikler (her maddede):</b> Kütle, hacim, eylemsizlik, tanecikli yapı.</li>" +
    "<li><b>Ayırt edici özellikler (maddeyi tanıtır):</b> Özkütle, erime/kaynama noktası, öz ısı, esneklik, iletkenlik, çözünürlük.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Özkütle miktara bağlı DEĞİLDİR; kütle ve hacim değişse de özkütle sabittir.</li>" +
    "<li>Kütle ve hacim ortak özelliktir, madde tanımaz; özkütle ayırt edicidir.</li></ul>");

  /* =============== fiz-kuvvet =============== */
  setUnit("fiz-kuvvet", "Kuvvet ve Hareket", "Kuvvet, Newton'un hareket yasaları, sürtünme ve bileşke kuvvet.",
    "<h2>Kuvvet ve Hareket</h2>" +
    "<p><b>Kuvvet (F)</b>, cisimlerin hareketini veya şeklini değiştiren vektörel etkidir; birimi <b>newton (N)</b>'dur.</p>" +

    "<h3>Newton'un hareket yasaları</h3>" +
    "<ul>" +
    "<li><b>1. yasa (eylemsizlik):</b> Net kuvvet sıfırsa cisim duruyorsa durur, hareketliyse sabit hızla hareketine devam eder.</li>" +
    "<li><b>2. yasa:</b> Net kuvvet ivme oluşturur. <b>F = m · a</b> (a: ivme, m/s²).</li>" +
    "<li><b>3. yasa (etki-tepki):</b> Her etkiye eşit büyüklükte ve zıt yönde bir tepki vardır.</li>" +
    "</ul>" +
    "<p><b>Örnek:</b> 4 kg kütleli cisme 20 N net kuvvet etkiyorsa ivme a = F/m = 20/4 = <b>5 m/s²</b>'dir.</p>" +

    "<h3>Bileşke (net) kuvvet</h3>" +
    "<p>Aynı yönlü kuvvetler toplanır, zıt yönlüler çıkarılır. Net kuvvet sıfırsa cisim <b>dengededir</b> (dengelenmiş kuvvetler).</p>" +

    "<h3>Sürtünme kuvveti</h3>" +
    "<p>Harekete ya da harekete zorlanan yöne <b>zıt</b> yönde etki eder. <b>Fs = k · N</b> (k: sürtünme katsayısı, N: yüzeyin dik tepkisi). Yüzey pürüzlülüğü ve cismin ağırlığı arttıkça artar.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Net kuvvet sıfır olması cismin <b>durması</b> demek değildir; sabit hızla da gidebilir (denge).</li>" +
    "<li>Etki-tepki kuvvetleri <b>farklı</b> cisimlere etki eder; birbirini dengelemez.</li></ul>");

  /* =============== fiz-enerji =============== */
  setUnit("fiz-enerji", "İş, Güç ve Enerji", "İş, güç, kinetik ve potansiyel enerji, enerjinin korunumu ve verim.",
    "<h2>İş, Güç ve Enerji</h2>" +
    "<h3>İş</h3>" +
    "<div class=\"formula\">W = F · x</div>" +
    "<p>Kuvvet yönünde yol alındığında iş yapılır. Birimi <b>joule (J)</b>'dür. Kuvvete dik yol alınırsa (ör. yükü yatay taşımak) kuvvetin yaptığı iş <b>sıfır</b>dır.</p>" +

    "<h3>Güç</h3>" +
    "<div class=\"formula\">P = W / t</div>" +
    "<p>Birim zamanda yapılan iştir; birimi <b>watt (W)</b>'tır (1 W = 1 J/s).</p>" +

    "<h3>Enerji türleri</h3>" +
    "<ul>" +
    "<li><b>Kinetik enerji:</b> E<sub>k</sub> = ½ · m · v² (hareketten doğar).</li>" +
    "<li><b>Potansiyel enerji (çekim):</b> E<sub>p</sub> = m · g · h (yükseklikten doğar, g = 10 m/s²).</li>" +
    "</ul>" +
    "<p><b>Örnek:</b> 2 kg'lık cisim 5 m yükseklikte iken E<sub>p</sub> = 2·10·5 = <b>100 J</b>'dür. 3 m/s hızla giden 2 kg cismin E<sub>k</sub> = ½·2·3² = <b>9 J</b>'dür.</p>" +

    "<h3>Enerjinin korunumu ve verim</h3>" +
    "<p>Enerji yoktan var, vardan yok olmaz; bir türden diğerine dönüşür. <b>Verim = (alınan yararlı enerji / verilen enerji) × 100</b>. Sürtünmeler nedeniyle verim %100 olmaz.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Fizikte iş, kuvvet <b>yönünde yol</b> gerektirir; yük taşırken (kuvvete dik) iş sıfırdır.</li>" +
    "<li>Kinetik enerjide hız <b>karesi</b> alınır; hız 2 katına çıkarsa E<sub>k</sub> 4 katına çıkar.</li></ul>");

  /* =============== fiz-isi =============== */
  setUnit("fiz-isi", "Isı ve Sıcaklık", "Isı-sıcaklık farkı, öz ısı, hal değişimi, ısıl denge ve sıcaklık ölçekleri.",
    "<h2>Isı ve Sıcaklık</h2>" +
    "<p><b>Sıcaklık (T):</b> Taneciklerin ortalama hareket enerjisinin göstergesidir; termometreyle ölçülür, birimi <b>°C</b> veya <b>K</b>'dir. <b>Isı (Q):</b> Sıcaklık farkından dolayı alınıp verilen <b>enerjidir</b>; birimi <b>joule (J)</b> veya kaloridir. Isı bir enerji, sıcaklık ise bir ölçüdür.</p>" +

    "<h3>Isı alışverişi</h3>" +
    "<div class=\"formula\">Q = m · c · ΔT</div>" +
    "<p>m: kütle, c: <b>öz ısı</b> (1 g maddenin sıcaklığını 1 °C artırmak için gereken ısı), ΔT: sıcaklık değişimi. Öz ısı maddenin ayırt edici özelliğidir. Suyun öz ısısı büyüktür (geç ısınır, geç soğur).</p>" +
    "<p><b>Örnek:</b> Öz ısısı 0,2 olan 100 g madde 30 °C ısıtılırsa Q = 100·0,2·30 = <b>600 kalori</b>.</p>" +

    "<h3>Hal değişiminde ısı</h3>" +
    "<div class=\"formula\">Q = m · L</div>" +
    "<p>Erime/donma ve buharlaşma/yoğuşma sırasında sıcaklık <b>değişmez</b>; alınan ısı hal değişimine harcanır (L: erime/buharlaşma ısısı).</p>" +

    "<h3>Isıl denge ve ölçekler</h3>" +
    "<p>Farklı sıcaklıktaki cisimler temas edince sıcak olan ısı verir, soğuk olan ısı alır; sıcaklıkları eşitlenince <b>ısıl denge</b> kurulur. <b>Kelvin: K = °C + 273.</b></p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Isı</b> enerjidir (J/kalori), <b>sıcaklık</b> ölçüdür (°C/K) — karıştırma.</li>" +
    "<li>Hal değişimi sırasında sıcaklık sabit kalır; verilen ısı sıcaklığı artırmaz.</li></ul>");

  /* =============== fiz-elektrostatik =============== */
  setUnit("fiz-elektrostatik", "Elektrostatik", "Elektrik yükü, yükleme yöntemleri, Coulomb kuvveti; iletken ve yalıtkanlar.",
    "<h2>Elektrostatik</h2>" +
    "<p>Durgun elektrik yüklerini inceler. Yükler <b>pozitif (+)</b> ve <b>negatif (−)</b> olmak üzere iki çeşittir. <b>Aynı</b> yükler birbirini iter, <b>zıt</b> yükler birbirini çeker. Yük korunumludur (yoktan var edilmez).</p>" +

    "<h3>Yükleme yöntemleri</h3>" +
    "<ul>" +
    "<li><b>Sürtünme ile:</b> İki yalıtkan birbirine sürtününce biri elektron verir (+), diğeri alır (−).</li>" +
    "<li><b>Dokunma (temas) ile:</b> Yüklü cisim nötr cisme dokununca yük paylaşılır; ikisi <b>aynı</b> işaretle yüklenir.</li>" +
    "<li><b>Etki (tesir) ile:</b> Yüklü cisim yaklaştırılınca nötr cisimde yük ayrışır; cisim <b>zıt</b> işaretle yüklenir.</li>" +
    "</ul>" +

    "<h3>Coulomb yasası</h3>" +
    "<div class=\"formula\">F = k · q₁ · q₂ / d²</div>" +
    "<p>İki nokta yük arasındaki kuvvet, yüklerin çarpımıyla <b>doğru</b>, aralarındaki uzaklığın <b>karesiyle ters</b> orantılıdır. Uzaklık 2 katına çıkarsa kuvvet 1/4'e iner.</p>" +

    "<h3>İletken ve yalıtkanlar</h3>" +
    "<p><b>İletkenler</b> (metaller) yükü kolay iletir; <b>yalıtkanlar</b> (cam, plastik) iletmez. <b>Elektroskop</b> bir cismin yüklü olup olmadığını ve yük cinsini anlamaya yarar.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Dokunmada aynı</b>, <b>etkide zıt</b> işaretli yükleme olur — karıştırma.</li>" +
    "<li>Coulomb kuvveti uzaklığın <b>karesiyle</b> ters orantılıdır (d değil d²).</li></ul>");

  /* =============== fiz-elektrik =============== */
  setUnit("fiz-elektrik", "Elektrik ve Manyetizma", "Akım, gerilim, direnç, Ohm yasası; mıknatıs ve manyetik alan.",
    "<h2>Elektrik ve Manyetizma</h2>" +
    "<h3>Elektrik akımı, gerilim, direnç</h3>" +
    "<ul>" +
    "<li><b>Akım (I):</b> Birim zamanda geçen yük. I = q/t. Birimi <b>amper (A)</b>.</li>" +
    "<li><b>Gerilim / potansiyel fark (V):</b> Yükü hareket ettiren etki. Birimi <b>volt (V)</b>. Üreteç (pil) sağlar.</li>" +
    "<li><b>Direnç (R):</b> Akıma karşı gösterilen zorluk. Birimi <b>ohm (Ω)</b>.</li>" +
    "</ul>" +

    "<h3>Ohm yasası</h3>" +
    "<div class=\"formula\">V = I · R</div>" +
    "<p>Bir iletkenden geçen akım, uçları arasındaki gerilimle doğru, direnciyle ters orantılıdır.</p>" +
    "<p><b>Örnek:</b> 12 V gerilim ve 4 Ω direnç için akım I = V/R = 12/4 = <b>3 A</b>'dir.</p>" +

    "<h3>Bağlama biçimleri</h3>" +
    "<p><b>Seri bağlama:</b> Dirençler uç uca; toplam direnç artar (R = R₁+R₂). <b>Paralel bağlama:</b> Dirençler yan yana; toplam direnç azalır.</p>" +

    "<h3>Manyetizma</h3>" +
    "<p>Mıknatısların <b>N (kuzey)</b> ve <b>S (güney)</b> kutupları vardır; aynı kutuplar iter, zıt kutuplar çeker. Kutuplar ayrılamaz. Mıknatısın çevresinde <b>manyetik alan</b> vardır. Üzerinden akım geçen tel de manyetik alan oluşturur (elektromıknatıs).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Ohm yasasında akım gerilimle doğru, <b>dirençle ters</b> orantılıdır.</li>" +
    "<li>Mıknatısın kutupları ayrılamaz; ikiye bölünen mıknatıs yine iki kutuplu olur.</li></ul>");

  /* =============== fiz-basinc =============== */
  setUnit("fiz-basinc", "Basınç ve Kaldırma Kuvveti", "Katı, sıvı, gaz basıncı; Pascal ilkesi ve Arşimet kaldırma kuvveti.",
    "<h2>Basınç ve Kaldırma Kuvveti</h2>" +
    "<h3>Katı basıncı</h3>" +
    "<div class=\"formula\">P = F / A</div>" +
    "<p>Birim yüzeye dik gelen kuvvettir; birimi <b>pascal (Pa)</b>. Kuvvet aynıyken temas alanı <b>küçülürse</b> basınç artar (bıçağın keskin olması gibi).</p>" +

    "<h3>Sıvı basıncı</h3>" +
    "<div class=\"formula\">P = h · d · g</div>" +
    "<p>Sıvı basıncı <b>derinlik (h)</b> ve sıvının <b>özkütlesi (d)</b> ile doğru orantılıdır; kabın şekline ve sıvı miktarına bağlı DEĞİLDİR.</p>" +

    "<h3>Pascal ilkesi ve gaz basıncı</h3>" +
    "<p>Kapalı bir sıvıya uygulanan basınç, sıvının her yerine aynen iletilir (Pascal ilkesi — hidrolik sistemler). Gazlar bulundukları kaba her yönde basınç uygular.</p>" +

    "<h3>Kaldırma kuvveti (Arşimet)</h3>" +
    "<div class=\"formula\">F<sub>k</sub> = V<sub>batan</sub> · d<sub>sıvı</sub> · g</div>" +
    "<p>Sıvıya batan cisme, taşırdığı sıvının ağırlığı kadar yukarı yönlü kuvvet etki eder. Cismin özkütlesi sıvınınkinden <b>küçükse yüzer</b>, <b>eşitse askıda kalır</b>, <b>büyükse batar</b>.</p>" +
    "<p><b>Örnek:</b> 200 cm³'ü suya batan cisme etkiyen kaldırma kuvveti F<sub>k</sub> = 200·1·10 = <b>2000 birim</b> (dsu=1 g/cm³).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Sıvı basıncı sıvının <b>miktarına ve kap şekline</b> değil, derinlik ve özkütleye bağlıdır.</li>" +
    "<li>Kaldırma kuvveti <b>batan hacme</b> bağlıdır, cismin toplam kütlesine değil.</li></ul>");

  /* =============== fiz-dalga =============== */
  setUnit("fiz-dalga", "Dalgalar", "Dalga kavramı, dalga türleri; dalga boyu, frekans, periyot ve hız.",
    "<h2>Dalgalar</h2>" +
    "<p><b>Dalga</b>, bir titreşimin ortamda yayılmasıdır. Dalgalar <b>enerji taşır</b> ama madde taşımaz.</p>" +

    "<h3>Dalga türleri</h3>" +
    "<ul>" +
    "<li><b>Mekanik dalgalar:</b> Yayılmak için <b>ortama ihtiyaç duyar</b> (yay, su, ses dalgaları). Boşlukta yayılmaz.</li>" +
    "<li><b>Elektromanyetik dalgalar:</b> Boşlukta da yayılır (ışık, radyo dalgaları).</li>" +
    "<li><b>Enine dalga:</b> Titreşim yayılmaya diktir (su dalgası). <b>Boyuna dalga:</b> Titreşim yayılma yönündedir (ses dalgası).</li>" +
    "</ul>" +

    "<h3>Temel büyüklükler</h3>" +
    "<ul>" +
    "<li><b>Dalga boyu (λ):</b> Ardışık iki tepe (veya çukur) arası uzaklık.</li>" +
    "<li><b>Periyot (T):</b> Bir tam dalganın oluşma süresi. <b>Frekans (f):</b> Birim zamandaki dalga sayısı. <b>f = 1/T</b> (birim: hertz, Hz).</li>" +
    "</ul>" +
    "<div class=\"formula\">v = λ · f</div>" +
    "<p><b>Örnek:</b> Dalga boyu 2 m, frekansı 5 Hz olan dalganın hızı v = 2·5 = <b>10 m/s</b>'dir.</p>" +

    "<h3>Ses dalgaları</h3>" +
    "<p>Ses <b>boyuna mekanik</b> dalgadır; yayılmak için maddesel ortam gerekir (boşlukta yayılmaz). Katıda en hızlı, gazda en yavaş yayılır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Dalgalar enerji taşır, <b>madde taşımaz</b>.</li>" +
    "<li>Ses boşlukta yayılmaz; ışık (elektromanyetik) boşlukta yayılır.</li></ul>");

  /* =============== fiz-optik =============== */
  setUnit("fiz-optik", "Optik", "Işığın yayılması, gölge; yansıma ve kırılma, aynalar ve mercekler.",
    "<h2>Optik</h2>" +
    "<p>Işık, saydam ortamda <b>doğrusal (düz)</b> yol izler. Bu yüzden ışık kaynağının önündeki cisim arkasında <b>gölge</b> oluşturur (nokta kaynak → tam gölge; yaygın kaynak → tam gölge + yarı gölge).</p>" +

    "<h3>Yansıma</h3>" +
    "<p>Işık bir yüzeye çarpıp geri döner. <b>Yansıma yasası:</b> gelme açısı = yansıma açısı (normale göre). Düzgün (parlak) yüzeyde <b>düzgün yansıma</b>, pürüzlü yüzeyde <b>dağınık yansıma</b> olur.</p>" +
    "<ul>" +
    "<li><b>Düzlem ayna:</b> Cismin eşit uzaklıkta, düz, sanal görüntüsünü oluşturur.</li>" +
    "<li><b>Çukur ayna:</b> Görüntüyü büyütebilir/gerçek yapabilir. <b>Tümsek ayna:</b> Her zaman küçük, düz, sanal görüntü (geniş görüş; araç aynaları).</li>" +
    "</ul>" +

    "<h3>Kırılma</h3>" +
    "<p>Işık bir saydam ortamdan başka bir ortama <b>eğik</b> geçerken hız değişir ve <b>yön değiştirir</b> (kırılır). Az yoğundan çok yoğuna geçerken normale <b>yaklaşır</b>. Suya batan çubuğun kırık görünmesi bu yüzdendir.</p>" +

    "<h3>Mercekler</h3>" +
    "<p><b>İnce kenarlı (yakınsak) mercek</b> ışığı toplar (büyüteç); <b>kalın kenarlı (ıraksak) mercek</b> dağıtır. Gözlük ve optik araçlarda kullanılır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Yansımada açılar <b>normale</b> göre ölçülür; gelme açısı = yansıma açısı.</li>" +
    "<li>Tümsek ayna her zaman küçük ve düz görüntü verir; büyütmez.</li></ul>");

})();
