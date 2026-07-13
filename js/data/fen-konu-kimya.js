/* ============================================================
   FEN / KİMYA — TYT konu alanları: yeni ünite + içerik.
   MEB TYT Kimya: Kimya Bilimi, Atom, Kimyasal Türler Arası Etkileşimler,
   Maddenin Hâlleri, Temel Kanunlar, Mol, Karışımlar, Asit-Baz, Kimya Her Yerde.
   branch: "kimya". Stub'lardan SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-kimya: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "fen"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "kimya", prerequisites: [], objectives: [], difficulty: 2, estimatedMinutes: 22 };
    u.name = name; u.summary = summary; u.branch = "kimya";
    u.content = content; u.reviewedAt = "2026-07-12"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("fen", [u]);
  }

  /* =============== kim-bilim =============== */
  setUnit("kim-bilim", "Kimya Bilimi", "Simyadan kimyaya, kimyanın alt dalları, sembol ve formüller, laboratuvar güvenliği.",
    "<h2>Kimya Bilimi</h2>" +
    "<p><b>Kimya</b>; maddenin yapısını, özelliklerini ve geçirdiği değişimleri inceleyen bilimdir. <b>Simya</b>, kimyanın deneyime dayalı ilk hâlidir; simyacılar altın elde etme ve ölümsüzlük arayışıyla birçok madde ve yöntem keşfetti. Deney ve akla dayalı modern <b>kimya bilimi</b> zamanla simyadan ayrıldı.</p>" +

    "<h3>Kimyanın alt dalları</h3>" +
    "<ul>" +
    "<li><b>Analitik kimya:</b> Maddenin bileşimini niteliksel/niceliksel inceler.</li>" +
    "<li><b>Organik kimya:</b> Karbon bileşiklerini inceler. <b>Anorganik kimya:</b> Karbon dışı bileşikler.</li>" +
    "<li><b>Fizikokimya:</b> Fizik ilkeleriyle kimyasal olaylar. <b>Biyokimya:</b> Canlılardaki kimyasal olaylar.</li>" +
    "</ul>" +

    "<h3>Sembol ve formül</h3>" +
    "<p>Her element bir <b>sembol</b>le gösterilir: H (hidrojen), O (oksijen), C (karbon), N (azot), Na (sodyum), Fe (demir), Au (altın), Cl (klor). Bileşikler <b>formül</b>le gösterilir: H₂O (su), CO₂ (karbondioksit), NaCl (yemek tuzu), HCl (hidroklorik asit).</p>" +

    "<h3>Laboratuvar güvenliği</h3>" +
    "<p>Kaplardaki <b>uyarı sembolleri</b> (yanıcı, aşındırıcı, zehirli, patlayıcı) dikkate alınmalı; kimyasallar koklanmamalı/tadılmamalı, önlük ve gözlük kullanılmalıdır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Simya</b> deneyime dayalı ilk aşamadır; <b>kimya</b> ise akıl ve deneye dayalı bilimdir.</li>" +
    "<li>Element <b>sembol</b>, bileşik <b>formül</b>le gösterilir.</li></ul>");

  /* =============== kim-atom =============== */
  setUnit("kim-atom", "Atom ve Yapısı", "Atom modelleri; proton, nötron, elektron; atom/kütle numarası, izotop ve iyon.",
    "<h2>Atom ve Yapısı</h2>" +
    "<h3>Atom modelleri (tarihsel gelişim)</h3>" +
    "<ul>" +
    "<li><b>Dalton:</b> Atom içi dolu, bölünemez bir küredir.</li>" +
    "<li><b>Thomson:</b> Üzümlü keke benzer; (+) yük içine gömülü (−) elektronlar.</li>" +
    "<li><b>Rutherford:</b> Atomun ortasında (+) yüklü <b>çekirdek</b>, çevrede boşluk ve elektronlar.</li>" +
    "<li><b>Bohr:</b> Elektronlar çekirdek çevresinde belirli <b>enerji katmanlarında</b> dolanır.</li>" +
    "</ul>" +

    "<h3>Atomun temel parçacıkları</h3>" +
    "<ul>" +
    "<li><b>Proton (p):</b> Çekirdekte, (+) yüklü. Sayısı elementin kimliğidir = <b>atom numarası (Z)</b>.</li>" +
    "<li><b>Nötron (n):</b> Çekirdekte, yüksüz.</li>" +
    "<li><b>Elektron (e):</b> Çekirdek çevresinde, (−) yüklü. Nötr atomda proton sayısı = elektron sayısı.</li>" +
    "</ul>" +
    "<p><b>Kütle numarası (A) = proton + nötron.</b> Örnek: Atom numarası 11, kütle numarası 23 olan sodyumda 11 proton, 11 elektron ve 23−11 = 12 nötron vardır.</p>" +

    "<h3>İzotop ve iyon</h3>" +
    "<ul>" +
    "<li><b>İzotop:</b> Proton sayısı aynı, nötron (kütle) sayısı farklı atomlar.</li>" +
    "<li><b>İyon:</b> Elektron alan/veren atom yüklenir. Elektron veren <b>katyon (+)</b>, elektron alan <b>anyon (−)</b> olur.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Element kimliğini <b>proton (atom numarası)</b> belirler; nötron değil.</li>" +
    "<li>Nötron sayısı = kütle numarası − proton sayısı (A − Z).</li></ul>");

  /* =============== kim-tur =============== */
  setUnit("kim-tur", "Kimyasal Türler Arası Etkileşimler", "Güçlü etkileşimler (iyonik, kovalent, metalik bağ) ve zayıf etkileşimler.",
    "<h2>Kimyasal Türler Arası Etkileşimler</h2>" +
    "<p><b>Kimyasal tür</b>; atom, molekül ya da iyondur. Türler arası etkileşimler <b>güçlü (kimyasal bağlar)</b> ve <b>zayıf etkileşimler</b> olarak ikiye ayrılır.</p>" +

    "<h3>Güçlü etkileşimler (kimyasal bağlar)</h3>" +
    "<ul>" +
    "<li><b>İyonik bağ:</b> <b>Metal + ametal</b> arasında elektron <b>alışverişiyle</b> oluşur (ör. NaCl). Metal elektron verir (katyon), ametal alır (anyon); zıt iyonlar çekilir.</li>" +
    "<li><b>Kovalent bağ:</b> <b>Ametal + ametal</b> arasında elektronların <b>ortaklaşa</b> kullanılmasıyla oluşur (ör. H₂O, CO₂). Elektronlar eşit paylaşılırsa apolar, farklı çekilirse polar kovalent olur.</li>" +
    "<li><b>Metalik bağ:</b> Metal atomları arasında, ortak <b>elektron denizi</b> ile oluşur; metallerin iletkenliğini açıklar.</li>" +
    "</ul>" +

    "<h3>Zayıf etkileşimler</h3>" +
    "<ul>" +
    "<li><b>Van der Waals kuvvetleri:</b> Moleküller arası zayıf çekimler.</li>" +
    "<li><b>Hidrojen bağı:</b> H atomunun <b>F, O, N</b> gibi elektronegatif atomlara bağlı olduğu moleküller arasında görülen, van der Waals'tan güçlü bir zayıf etkileşim (suyun yüksek kaynama noktasının nedeni).</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>İyonik bağ</b> metal-ametal (elektron alışverişi); <b>kovalent bağ</b> ametal-ametal (elektron ortaklığı) — karıştırma.</li>" +
    "<li>Hidrojen bağı bir <b>molekül içi kovalent bağ değil</b>, moleküller arası zayıf etkileşimdir.</li></ul>");

  /* =============== kim-hal =============== */
  setUnit("kim-hal", "Maddenin Hâlleri ve Hâl Değişimi", "Katı, sıvı, gaz hâlleri; tanecik düzeni ve hâl değişimleri.",
    "<h2>Maddenin Hâlleri ve Hâl Değişimi</h2>" +
    "<h3>Maddenin hâlleri</h3>" +
    "<ul>" +
    "<li><b>Katı:</b> Tanecikler düzenli ve sıkı; belirli şekil ve hacim.</li>" +
    "<li><b>Sıvı:</b> Tanecikler daha hareketli; belirli hacim, kabın şekli.</li>" +
    "<li><b>Gaz:</b> Tanecikler çok hareketli ve dağınık; belirli şekil ve hacim yok, kabı doldurur.</li>" +
    "</ul>" +
    "<p>Katıdan gaza gidildikçe tanecikler arası <b>boşluk ve hareketlilik artar</b>, düzen azalır.</p>" +

    "<h3>Hâl değişimleri</h3>" +
    "<ul>" +
    "<li><b>Erime:</b> Katı → sıvı. <b>Donma:</b> Sıvı → katı.</li>" +
    "<li><b>Buharlaşma:</b> Sıvı → gaz. <b>Yoğuşma (yoğunlaşma):</b> Gaz → sıvı.</li>" +
    "<li><b>Süblimleşme:</b> Katı → gaz (doğrudan). <b>Kırağılaşma (geri süblimleşme):</b> Gaz → katı.</li>" +
    "</ul>" +
    "<p>Erime-buharlaşma <b>ısı alan (endotermik)</b>; donma-yoğuşma <b>ısı veren (ekzotermik)</b> olaylardır. Hâl değişimi sırasında sıcaklık <b>sabit</b> kalır (saf maddede).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Saf maddede hâl değişimi süresince sıcaklık değişmez.</li>" +
    "<li><b>Süblimleşme</b> katı→gaz doğrudan geçiştir (naftalin, kuru buz).</li></ul>");

  /* =============== kim-kanun =============== */
  setUnit("kim-kanun", "Kimyanın Temel Kanunları", "Kütlenin korunumu, sabit oranlar ve katlı oranlar kanunları.",
    "<h2>Kimyanın Temel Kanunları</h2>" +
    "<h3>Kütlenin Korunumu Kanunu (Lavoisier)</h3>" +
    "<p>Kimyasal tepkimede <b>girenlerin kütleleri toplamı = ürünlerin kütleleri toplamı</b>. Kütle yoktan var, vardan yok olmaz. Örnek: 12 g karbon 32 g oksijenle tepkimeye girerse 12 + 32 = <b>44 g</b> karbondioksit oluşur.</p>" +

    "<h3>Sabit Oranlar Kanunu (Proust)</h3>" +
    "<p>Bir bileşiği oluşturan elementler, <b>kütlece sabit bir oranda</b> birleşir. Örneğin suda hidrojen–oksijen kütle oranı her zaman <b>1:8</b>'dir; miktar değişse de oran değişmez.</p>" +

    "<h3>Katlı Oranlar Kanunu (Dalton)</h3>" +
    "<p>İki element <b>birden fazla bileşik</b> oluşturuyorsa, birinin sabit kütlesiyle birleşen diğerinin kütleleri arasında <b>basit tam sayılarla ifade edilen bir oran</b> vardır (ör. CO ve CO₂).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Kütle korunumu <b>kimyasal tepkimelerde</b> geçerlidir; kütle yoktan var olmaz.</li>" +
    "<li>Sabit oran <b>bir bileşik</b> için; katlı oran <b>aynı elementlerin birden çok bileşiği</b> için geçerlidir.</li></ul>");

  /* =============== kim-mol =============== */
  setUnit("kim-mol", "Mol Kavramı", "Mol, Avogadro sayısı, molar kütle; kütle-mol-tanecik sayısı ilişkileri.",
    "<h2>Mol Kavramı</h2>" +
    "<p><b>Mol</b>, kimyada madde miktarının birimidir. Nasıl \"1 düzine = 12 tane\" ise, <b>1 mol = 6,02·10²³ tane</b> tanecik (atom, molekül, iyon) demektir. Bu sayıya <b>Avogadro sayısı (N<sub>A</sub>)</b> denir.</p>" +

    "<h3>Molar kütle</h3>" +
    "<p><b>Molar kütle (M):</b> 1 molün gram cinsinden kütlesi (g/mol); sayıca atom/molekül kütlesine eşittir. Örnek: su (H₂O) için M = 2·1 + 16 = <b>18 g/mol</b>.</p>" +

    "<h3>Temel bağıntılar</h3>" +
    "<div class=\"formula\">n = m / M &nbsp;|&nbsp; Tanecik sayısı = n · N<sub>A</sub></div>" +
    "<p>(n: mol sayısı, m: kütle, M: molar kütle.)</p>" +
    "<p><b>Örnek 1:</b> 36 g suyun mol sayısı n = 36/18 = <b>2 mol</b>'dür.</p>" +
    "<p><b>Örnek 2:</b> 2 mol maddede 2·6,02·10²³ = <b>1,204·10²⁴</b> tanecik bulunur.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Mol sayısı n = kütle / molar kütle (m/M); ters çevirme.</li>" +
    "<li>1 mol her maddede aynı <b>tanecik sayısını</b> (6,02·10²³) verir; kütle ise maddeye göre değişir.</li></ul>");

  /* =============== kim-karisim =============== */
  setUnit("kim-karisim", "Karışımlar", "Saf madde ve karışım; homojen-heterojen karışımlar ve ayırma teknikleri.",
    "<h2>Karışımlar</h2>" +
    "<h3>Saf madde ve karışım</h3>" +
    "<ul>" +
    "<li><b>Saf madde:</b> Tek tür tanecikten oluşur. <b>Element</b> (tek cins atom: Fe, O₂) ve <b>bileşik</b> (farklı atomlar belirli oranda: H₂O, NaCl).</li>" +
    "<li><b>Karışım:</b> Birden çok maddenin kimyasal bağ olmadan bir arada bulunmasıdır; belirli formülü yoktur.</li>" +
    "</ul>" +

    "<h3>Karışım türleri</h3>" +
    "<ul>" +
    "<li><b>Homojen karışım (çözelti):</b> Her yeri aynı özellikte; tek fazlı görünür (tuzlu su, kolonya, hava, alaşımlar).</li>" +
    "<li><b>Heterojen karışım:</b> Her yeri aynı değil; farklı fazlar görülür (kumlu su, ayran, tebeşir tozu-su).</li>" +
    "</ul>" +

    "<h3>Ayırma ve saflaştırma teknikleri</h3>" +
    "<p>Karışımlar <b>fiziksel yöntemlerle</b> ayrılır: <b>süzme</b> (katı-sıvı), <b>buharlaştırma</b> (çözünmüş katı-sıvı), <b>damıtma/distilasyon</b> (kaynama noktası farkı), <b>ayırma hunisi</b> (karışmayan sıvılar), <b>mıknatısla ayırma</b> (demir), <b>yüzdürme</b> (özkütle farkı).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Karışımın <b>belirli formülü ve sabit özkütlesi yoktur</b>; bileşenler her oranda karışabilir.</li>" +
    "<li>Çözeltiler <b>homojen</b> karışımdır; çözünen + çözücüden oluşur.</li></ul>");

  /* =============== kim-asit =============== */
  setUnit("kim-asit", "Asitler, Bazlar ve Tuzlar", "Asit ve baz özellikleri, pH, nötrleşme ve günlük hayat örnekleri.",
    "<h2>Asitler, Bazlar ve Tuzlar</h2>" +
    "<h3>Asitler</h3>" +
    "<p>Suda <b>H⁺ (hidrojen iyonu)</b> veren maddelerdir. Tatları <b>ekşi</b>dir, mavi turnusolu <b>kırmızıya</b> çevirir, metallerle tepkimeye girer. Örnek: HCl, H₂SO₄, sirke (asetik asit), limon (sitrik asit).</p>" +

    "<h3>Bazlar</h3>" +
    "<p>Suda <b>OH⁻ (hidroksit iyonu)</b> veren maddelerdir. Tatları <b>acı</b>, ele <b>kaygan</b> gelir, kırmızı turnusolu <b>maviye</b> çevirir. Örnek: NaOH, KOH, NH₃ (amonyak), sabun, kireç suyu.</p>" +

    "<h3>pH ve nötrleşme</h3>" +
    "<p><b>pH cetveli 0–14</b> arasıdır: <b>pH &lt; 7 asidik</b>, <b>pH = 7 nötr</b> (saf su), <b>pH &gt; 7 bazik</b>. pH küçüldükçe asitlik artar. <b>Nötrleşme:</b> asit + baz → <b>tuz + su</b> (ör. HCl + NaOH → NaCl + H₂O).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Asit turnusolu kırmızı</b>, <b>baz maviye</b> çevirir — karıştırma.</li>" +
    "<li>pH 7 nötr; 7'den küçük asidik, büyük baziktir. Asit ve bazlar tadılarak tanınmaz (tehlikeli).</li></ul>");

  /* =============== kim-gunluk =============== */
  setUnit("kim-gunluk", "Kimya Her Yerde (Günlük Hayat Kimyasalları)", "Temizlik ürünleri, yapı malzemeleri, polimerler ve kimyasalların güvenli kullanımı.",
    "<h2>Kimya Her Yerde</h2>" +
    "<p>Günlük hayatta kullandığımız birçok ürün kimyasal maddelerden oluşur; bilinçli ve güvenli kullanım önemlidir.</p>" +

    "<h3>Temizlik maddeleri</h3>" +
    "<p><b>Sabun ve deterjanlar</b> kiri sudan uzaklaştırır. <b>Çamaşır suyu</b> (sodyum hipoklorit) ağartıcı ve dezenfektandır. <b>UYARI:</b> Çamaşır suyu ile tuz ruhu (asit) <b>asla karıştırılmamalıdır</b>; zehirli klor gazı açığa çıkar.</p>" +

    "<h3>Yapı malzemeleri</h3>" +
    "<p><b>Kireç, alçı, çimento, cam</b> yaygın yapı malzemeleridir. Kireç suyu (baz) karbondioksitle beyazlaşır.</p>" +

    "<h3>Polimerler ve diğer kimyasallar</h3>" +
    "<p><b>Plastikler</b> küçük birimlerin (monomer) birleşmesiyle oluşan <b>polimer</b>lerdir; doğada geç bozunur, geri dönüşüm önemlidir. <b>İlaçlar, gıda katkı maddeleri, kozmetikler, gübreler</b> de kimya ürünleridir.</p>" +

    "<h3>Çevre ve güvenlik</h3>" +
    "<p>Fabrika ve araç gazları <b>asit yağmuru</b>na yol açar. Kimyasallar etiketine ve uyarı sembollerine uygun kullanılmalı, atıklar geri dönüştürülmelidir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Çamaşır suyu ile asidik temizleyiciler karıştırılırsa <b>zehirli klor gazı</b> çıkar — tehlikelidir.</li>" +
    "<li>Plastikler polimerdir ve doğada zor bozunur; geri dönüşüm gerekir.</li></ul>");

})();
