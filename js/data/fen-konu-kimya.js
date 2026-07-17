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
    "Dalton'dan modern kuantum modeline atomun anlayışının deney temelli gelişimi.",
    "<p>Atomun yapısı tek bir kişi tarafından değil, her biri bir öncekinin açıklayamadığı gözlemi çözen bir dizi modelle anlaşıldı. Bu gelişim, bilimin nasıl işlediğinin de güzel bir örneğidir: bir model yeni bir deney sonucuyla çeliştiğinde terk edilmez, düzeltilir. Modelleri ezberlerken 'hangi deney, hangi eksiği ortaya çıkardı ve yeni model neyi ekledi' zincirini kurmak en sağlam yöntemdir.</p>" +
    "<h3>Dalton (1803) — İçi dolu berk küre</h3>" +
    "<p>Modern atom teorisinin başlangıcıdır. Dalton'a göre atom bölünemez, içi dolu, berk (som) bir küredir; aynı elementin atomları özdeştir. Kütlenin korunumu ve sabit oranlar yasasını açıkladı ancak atomun iç yapısı ve elektrik olayları hakkında hiçbir şey söyleyemedi. <b>Eksiği:</b> Atom yüklü tanecikler içerir mi sorusuna yanıtsız kaldı.</p>" +
    "<h3>Thomson (1897) — Üzümlü kek</h3>" +
    "<p>Katot ışınları deneyiyle <b>elektronu</b> keşfetti; böylece atomun bölünebildiği anlaşıldı. Modeline göre atom, artı yüklü bir hamur içine gömülmüş eksi elektronlardan oluşur (üzümlü kek / karpuz modeli) ve toplamda nötrdür. <b>Eksiği:</b> Kütlenin ve artı yükün atomda nasıl dağıldığını yanlış varsaydı.</p>" +
    "<h3>Rutherford (1911) — Çekirdekli atom</h3>" +
    "<p><b>Altın levha (α-ışını saçılması)</b> deneyinde ışınların çoğu levhadan geçti, çok azı büyük açıyla saptı. Bu, atomun büyük bölümünün <b>boşluk</b> olduğunu, kütlenin ve artı yükün ise merkezdeki küçücük <b>çekirdekte</b> toplandığını kanıtladı. Elektronlar çekirdek çevresinde dolanır. <b>Eksiği:</b> Dönen elektronun neden enerji kaybedip çekirdeğe düşmediğini açıklayamadı.</p>" +
    "<h3>Bohr (1913) — Kararlı enerji katmanları</h3>" +
    "<p>Hidrojenin çizgi spektrumundan yola çıkarak elektronların gelişigüzel değil, <b>belirli enerjili kararlı yörüngelerde (katmanlarda)</b> dolandığını öne sürdü. Elektron ancak katman atlarken enerji alır ya da yayar; kendi katmanında enerji kaybetmez. <b>Eksiği:</b> Yalnızca tek elektronlu sistemleri (H) açıklayabildi.</p>" +
    "<h3>Modern (Kuantum) Model</h3>" +
    "<p>Elektronun yeri ve hızı aynı anda kesin bilinemez (belirsizlik); bu yüzden yörünge yerine, elektronun <b>bulunma olasılığının yüksek olduğu bölgeler</b> olan <b>orbitaller</b> tanımlanır. Bugün geçerli olan modeldir.</p>",
    ["Atom modellerini tarihsel sırayla ve dayandıkları deneyle açıklar.", "Her modelin katkısını ve açıklayamadığı eksiği belirtir.", "Bohr yörüngesi ile kuantum orbitalini ayırt eder."],
    ["Elektronu Rutherford'a, çekirdeği Thomson'a atfetmek (elektron: Thomson, çekirdek: Rutherford).", "Bohr'un 'yörünge'si ile modern modelin 'orbital'ini aynı sanmak.", "Altın levha deneyini elektronun keşfi sanmak (o çekirdeğin keşfidir)."],
    [{ term: "Thomson", def: "Elektron; üzümlü kek; katot ışınları" }, { term: "Rutherford", def: "Çekirdek; altın levha (α saçılması)" }, { term: "Bohr", def: "Kararlı enerji katmanları; çizgi spektrumu" }, { term: "Orbital", def: "Elektronun yüksek bulunma olasılığı bölgesi" }]));

  /* 6 */ units.push(U("kim-atom", "Atomun Yapısı",
    "Atom altı tanecikler, atom/kütle numarası, iyonlar ve izotop-izobar-izoton-izoelektronik türleri.",
    "<p>Atom, bir elementin özelliğini taşıyan en küçük yapı taşıdır. İki temel bölgeden oluşur: kütlenin neredeyse tamamını (%99,9'unu) barındıran, hacimce çok küçük ve <b>artı yüklü çekirdek</b> ile çekirdeği saran, hacimce çok büyük ama kütlece ihmal edilebilir <b>elektron bulutu</b>. Ölçek olarak düşünürsek: atom bir stadyum ise çekirdek sahanın ortasındaki bir bilye kadardır; aradaki uzayın tamamı elektronların dolaştığı boşluktur. Bu boşluk, maddenin katı görünmesine rağmen aslında ne kadar 'seyrek' olduğunu gösterir.</p>" +
    "<h3>Atom altı tanecikler</h3>" +
    "<p>Çekirdekte <b>proton (p⁺)</b> ve <b>nötron (n⁰)</b>, çevrede <b>elektron (e⁻)</b> bulunur. Proton ile nötronun kütlesi yaklaşık eşittir (~1 akb) ve her ikisine birlikte <b>nükleon</b> denir. Elektronun kütlesi protonun yaklaşık 1/1836'sı kadar olduğundan atom kütlesine katkısı yok sayılır.</p>" +
    "<ul>" +
    "<li><b>Proton:</b> +1 yüklü, ~1 akb kütleli. Sayısı elementin kimliğidir; değişirse element değişir.</li>" +
    "<li><b>Nötron:</b> yüksüz, ~1 akb kütleli. Çekirdeği bir arada tutup kararlılığı sağlar.</li>" +
    "<li><b>Elektron:</b> −1 yüklü, kütlesi ihmal edilir. Kimyasal tepkimeleri (bağ, iyonlaşma) belirleyen tanecik odur.</li>" +
    "</ul>" +
    "<h3>Atom numarası, kütle numarası ve iyonlar</h3>" +
    "<div class=\"formula\">Z = proton sayısı &nbsp;|&nbsp; A = proton + nötron &nbsp;⇒&nbsp; nötron = A − Z</div>" +
    "<p><b>Atom numarası (Z)</b> proton sayısıdır ve elementi tanımlar (tüm karbon atomlarının Z'si 6'dır). <b>Kütle numarası (A)</b> çekirdekteki nükleon (p+n) toplamıdır. Gösterim <sub>Z</sub><sup>A</sup>X biçimindedir. <b>Nötr</b> atomda proton = elektron olduğundan yük sıfırdır. Atom elektron alır ya da verirse <b>iyon</b> oluşur: elektron <b>veren</b> tanecikte e⁻ < p⁺ olur ve <b>katyon (+)</b>; elektron <b>alan</b> tanecikte e⁻ > p⁺ olur ve <b>anyon (−)</b> meydana gelir. Dikkat: iyonlaşmada proton sayısı asla değişmez, yalnızca elektron sayısı değişir. Örneğin ₁₂Mg²⁺ tanecikte 12 proton ama 10 elektron vardır.</p>" +
    "<h3>Atom türleri (aynılık ilişkileri)</h3>" +
    "<ul>" +
    "<li><b>İzotop:</b> Proton (Z) aynı, nötron (dolayısıyla A) farklı. Aynı elementin farklı kütleli hâlleridir; kimyasal özellikleri aynı, fiziksel özellikleri (kütle, yoğunluk) farklıdır. Örn. ₁₇³⁵Cl ve ₁₇³⁷Cl.</li>" +
    "<li><b>İzobar:</b> Kütle numarası (A) aynı, proton farklı ⇒ farklı elementlerdir. Örn. ₁₈⁴⁰Ar ve ₂₀⁴⁰Ca.</li>" +
    "<li><b>İzoton:</b> Nötron sayısı aynı, proton farklı. Örn. ₆¹⁴C ve ₇¹⁵N (ikisinde de 8 nötron).</li>" +
    "<li><b>İzoelektronik:</b> Elektron sayısı aynı olan tür (çoğunlukla iyonlar). Örn. Na⁺, Mg²⁺, F⁻, O²⁻ ve Ne — hepsi 10 elektronludur.</li>" +
    "</ul>" +
    "<h3>Çözümlü örnek</h3>" +
    "<p><b>Soru:</b> ₁₇³⁷Cl⁻ iyonunda kaç proton, nötron ve elektron vardır?</p>" +
    "<p><b>Çözüm:</b> Z = 17 ⇒ 17 proton. Nötron = A − Z = 37 − 17 = 20. İyon 1 elektron <b>almış</b> (−1 yük) olduğundan elektron = 17 + 1 = <b>18</b>. Sonuç: 17 p, 20 n, 18 e⁻.</p>",
    ["Z ve A'dan proton, nötron ve elektron sayısını hesaplar.", "İzotop, izobar, izoton ve izoelektronik türleri ayırt eder.", "İyon oluşumunu proton sayısını değiştirmeden açıklar."],
    ["İyonlaşmada proton sayısının değiştiğini sanmak (yalnız elektron değişir).", "Katyonda elektronu protona eşit almak.", "Nötronu A − Z ile bulmayı unutup A'yı nötron sanmak.", "İzotopların fiziksel özelliklerini de aynı sanmak."],
    [{ term: "Z (atom numarası)", def: "Proton sayısı; elementin kimliği" }, { term: "A (kütle numarası)", def: "Proton + nötron (nükleon)" }, { term: "İzotop", def: "Z aynı, nötron/A farklı" }, { term: "İzoelektronik", def: "Elektron sayısı eşit türler" }, { term: "Katyon", def: "Elektron vermiş, artı yüklü" }]));

  /* 7 */ units.push(U("kim-yerlesim", "Periyodik Sistemde Yerleşim Esasları",
    "Katman elektron dizilimi ile bir elementin periyot ve grup yerini bulma.",
    "<p>Periyodik tablo rastgele bir liste değil, elementlerin <b>elektron dizilimine</b> göre düzenlenmiş bir haritadır. Mendeleyev elementleri artan kütleye göre dizip benzer özellikleri alt alta getirmişti; bugünkü tablo ise artan <b>atom numarasına (proton sayısına)</b> göre sıralanır. Bir elementin tablodaki yerini bilmek, onun metal mi ametal mi olduğunu, kaç bağ yapacağını ve komşularıyla nasıl benzeştiğini önceden söyleyebilmek demektir. Bu yüzden 'yer bulma' kimyanın en çok işe yarayan becerisidir.</p>" +
    "<h3>Elektronların katmanlara dizilişi</h3>" +
    "<p>Elektronlar çekirdekten dışa doğru enerji <b>katmanlarına (kabuklarına)</b> yerleşir. TYT düzeyinde katman kapasiteleri sırayla 2, 8, 8... olarak alınır; içteki katman dolmadan dıştakine geçilmez. En dıştaki katmandaki elektronlara <b>değerlik (valans) elektronları</b> denir ve bir elementin kimyasal davranışını bunlar belirler.</p>" +
    "<div class=\"formula\">Periyot no = katman (kabuk) sayısı &nbsp;|&nbsp; A grup no = değerlik elektron sayısı</div>" +
    "<h3>Yer bulma kuralı</h3>" +
    "<p>Elementin elektronlarını katmanlara dizince, <b>kaç katman kullandıysan periyot numarası</b>, <b>en dış katmandaki elektron sayısı</b> ise A grubu numarasıdır. Tablo 7 periyot ve 8 A grubundan (baş gruplar) oluşur; ortadaki bloklar B grubu (geçiş) metalleridir.</p>" +
    "<h3>Çözümlü örnekler</h3>" +
    "<p><b>₁₁Na:</b> Dizilim 2 ) 8 ) 1. Üç katman kullanıldı ⇒ <b>3. periyot</b>; son katmanda 1 elektron ⇒ <b>1A grubu</b>. Yani Na bir alkali metaldir.</p>" +
    "<p><b>₁₇Cl:</b> Dizilim 2 ) 8 ) 7. Üç katman ⇒ <b>3. periyot</b>; son katmanda 7 elektron ⇒ <b>7A grubu</b> (halojen).</p>" +
    "<p><b>₂₀Ca:</b> Dizilim 2 ) 8 ) 8 ) 2. Dört katman ⇒ <b>4. periyot</b>; son katmanda 2 elektron ⇒ <b>2A grubu</b>.</p>" +
    "<p>Aynı <b>grup</b>taki elementlerin değerlik elektronu eşit olduğundan kimyasal özellikleri benzerdir; aynı <b>periyot</b>ta soldan sağa gidildikçe özellikler kademeli değişir.</p>",
    ["Bir elementin elektron dizilimini katmanlara yapar.", "Dizilimden periyot ve A grup numarasını bulur.", "Değerlik elektronu ile kimyasal benzerliği ilişkilendirir."],
    ["Periyot ile grubu ters almak (periyot = katman, grup = son katman elektronu).", "İç katman dolmadan dış katmana elektron yerleştirmek.", "B grubu (geçiş) elementlerine A grubu kuralını uygulamak."],
    [{ term: "Periyot", def: "Kullanılan katman sayısı" }, { term: "A grup no", def: "Değerlik (son katman) elektron sayısı" }, { term: "Değerlik elektronu", def: "Kimyasal davranışı belirler" }, { term: "₁₇Cl", def: "2)8)7 → 3. periyot, 7A" }]));

  /* 8 */ units.push(U("kim-siniflama", "Elementlerin Sınıflandırılması",
    "Metal, ametal, yarı metal ve soy gaz sınıfları ile özel grup adları.",
    "<p>Yüz on sekiz elementi tek tek ezberlemek yerine, ortak davranışlarına göre birkaç sınıfa ayırmak öğrenmeyi kolaylaştırır. Bir elementin hangi sınıfa girdiğini, çoğu zaman tablodaki yerine ve değerlik elektron sayısına bakarak söyleyebiliriz. Sınıflandırmanın temel ölçütü, elementin elektron <b>verme mi alma mı</b> eğiliminde olduğudur; bu eğilim onun fiziksel görünümünü ve tepkime biçimini de belirler.</p>" +
    "<h3>Metaller</h3>" +
    "<p>Tablonun sol ve orta bölümünde yer alırlar. Değerlik elektron sayısı azdır (genelde 1-3), bu yüzden elektron <b>vererek katyon</b> oluştururlar. Parlaktırlar, ısı ve elektriği iyi iletir, dövülüp tel-levha hâline getirilebilirler (işlenebilir). Cıva dışında oda koşullarında katıdırlar.</p>" +
    "<h3>Ametaller</h3>" +
    "<p>Tablonun sağ üst bölümündedir. Değerlik elektron sayısı çoktur, elektron <b>alarak anyon</b> oluşturmaya eğilimlidir. Genelde mat, kırılgan ve ısı-elektrik yalıtkanıdır (grafit önemli bir istisnadır, iletir). Katı, sıvı (Br) ve gaz hâlde bulunabilirler.</p>" +
    "<h3>Yarı metaller (Metaloidler)</h3>" +
    "<p>Metal ile ametal arasındaki sınır basamağında yer alan <b>B, Si, Ge, As, Sb, Te</b> elementleridir. Hem metal hem ametal özelliği gösterir; en tipik yönleri <b>yarı iletken</b> olmaları ve bu yüzden elektronik/çip sanayisinde kullanılmalarıdır.</p>" +
    "<h3>Soy (asal) gazlar — 8A</h3>" +
    "<p>Son katmanları tam dolu (2 veya 8 elektron) olduğundan <b>kararlıdırlar</b>; elektron alıp verme eğilimleri yoktur, bu nedenle normal koşullarda tepkimeye girmez ve tek atomlu (monoatomik) hâlde gaz olarak bulunurlar.</p>" +
    "<h3>Özel grup adları</h3>" +
    "<ul>" +
    "<li><b>1A — Alkali metaller</b> (H hariç): en aktif metaller.</li>" +
    "<li><b>2A — Toprak alkali metaller.</b></li>" +
    "<li><b>7A — Halojenler:</b> en aktif ametaller.</li>" +
    "<li><b>8A — Soy gazlar:</b> kararlı, tepkimez.</li>" +
    "</ul>" +
    "<p><b>Önemli istisna:</b> Hidrojen 1A grubunda yazılır ama bir <b>ametaldir</b>; alkali metallerden sayılmaz.</p>",
    ["Metal, ametal, yarı metal ve soy gazı özellikleriyle ayırt eder.", "Özel grup adlarını (alkali, halojen vb.) eşleştirir.", "Bir elementin elektron alma/verme eğilimini sınıfıyla ilişkilendirir."],
    ["Hidrojeni alkali metal (metal) sanmak — hidrojen ametaldir.", "Soy gazların tepkimeye girdiğini düşünmek.", "Tüm ametalleri yalıtkan sanmak (grafit iletkendir)."],
    [{ term: "Metal", def: "Elektron verir, katyon, iletken, işlenebilir" }, { term: "Ametal", def: "Elektron alır, anyon, kırılgan/yalıtkan" }, { term: "Yarı metal", def: "B,Si,Ge,As,Sb,Te; yarı iletken" }, { term: "1A / 7A / 8A", def: "Alkali / Halojen / Soy gaz" }]));

  /* 9 */ units.push(U("kim-periyodik", "Periyodik Özelliklerin Değişme Eğilimleri",
    "Atom yarıçapı, iyonlaşma enerjisi, elektron ilgisi, elektronegatiflik ve metalik özelliğin tablo boyunca değişimi.",
    "<p>Periyodik tablonun gücü, özelliklerin gelişigüzel değil <b>düzenli bir yönelimle (trend)</b> değişmesinden gelir. Bu değişimin arkasında iki basit etken vardır: (1) soldan sağa gidildikçe artan <b>çekirdek yükü (proton sayısı)</b> elektronları daha güçlü çeker; (2) yukarıdan aşağı inildikçe artan <b>katman sayısı</b> hem yarıçapı büyütür hem de dış elektronların çekirdeğe uzaklığını artırıp bağını zayıflatır. Trendleri ezberlemek yerine bu iki etkenle akıl yürütürsen tüm eğilimleri kendin çıkarabilirsin.</p>" +
    "<h3>Atom yarıçapı</h3>" +
    "<p>Periyotta <b>soldan sağa azalır</b> (artan çekirdek yükü elektron bulutunu içe çeker), grupta <b>yukarıdan aşağı artar</b> (yeni katmanlar eklenir). Yani tablonun sol-alt köşesindeki elementler en büyük, sağ-üst köşedekiler en küçük yarıçaplıdır.</p>" +
    "<h3>İyonlaşma enerjisi</h3>" +
    "<p>Nötr bir atomdan gaz hâlde bir elektron koparmak için gereken enerjidir. Yarıçapla <b>ters</b> davranır: küçük ve çekirdeğe sıkı bağlı atomdan elektron koparmak zordur. Bu yüzden periyotta <b>sağa artar</b>, grupta <b>aşağı azalır</b>. Bir atomdan sırayla 1., 2., 3.... iyonlaşma enerjileri hep artar; çünkü artı yükü artan taneciğin elektronunu koparmak giderek zorlaşır.</p>" +
    "<h3>Elektron ilgisi ve elektronegatiflik</h3>" +
    "<p><b>Elektron ilgisi</b> bir atomun elektron alırken açığa çıkardığı enerji, <b>elektronegatiflik</b> ise bir bağdaki ortak elektronları kendine çekme gücüdür. Her ikisi de periyotta <b>sağa artar</b>, grupta <b>aşağı azalır</b>. Tablodaki (soy gazlar hariç) <b>en elektronegatif element flor (F)</b>'dur; genel sıralama F > O > N ≈ Cl biçiminde hatırlanır.</p>" +
    "<h3>Metalik / ametalik özellik</h3>" +
    "<p>Metalik özellik (elektron verme eğilimi) sol-alta doğru <b>artar</b>; ametalik özellik (elektron alma eğilimi) sağ-üste doğru artar. Yani en metalik elementler sol altta, en ametalik elementler (soy gazlar hariç) sağ üsttedir.</p>" +
    "<h3>İyon yarıçapları</h3>" +
    "<p><b>Katyon</b>, elektron kaybedip çoğu zaman bir katman eksildiği için kendi <b>atomundan küçüktür</b>. <b>Anyon</b>, elektron kazanıp elektron-elektron itmesi arttığı için kendi <b>atomundan büyüktür</b>. <b>İzoelektronik</b> türlerde (elektron sayısı eşit) proton sayısı <b>en fazla</b> olan, elektronları en güçlü çektiğinden en küçük yarıçaplıdır. Örn. O²⁻ > F⁻ > Na⁺ > Mg²⁺ (hepsi 10 e⁻).</p>",
    ["Atom yarıçapı, iyonlaşma enerjisi ve elektronegatiflik trendlerini çekirdek yükü/katman mantığıyla açıklar.", "Atom ile iyon yarıçaplarını karşılaştırır.", "İzoelektronik türleri yarıçapa göre sıralar."],
    ["Atom yarıçapı ile iyonlaşma enerjisini aynı yönde değişiyor sanmak (tersidir).", "Katyonu kendi atomundan büyük sanmak.", "En elektronegatif elementi soy gaz seçmek (soy gazlar bu sıralamaya alınmaz; cevap F)."],
    [{ term: "Atom yarıçapı", def: "Sağa azalır, aşağı artar" }, { term: "İyonlaşma enerjisi", def: "Sağa artar, aşağı azalır (yarıçapın tersi)" }, { term: "En elektronegatif", def: "Flor (F)" }, { term: "İzoelektronik yarıçap", def: "Proton çok olan en küçük" }]));

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
