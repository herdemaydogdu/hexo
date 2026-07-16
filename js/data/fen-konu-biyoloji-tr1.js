/* ============================================================
   FEN / BİYOLOJİ — TYT konu anlatımı (Bölüm 1: Canlıların ortak
   özellikleri, organizasyon ve temel bileşikler). Premium Türkçe.
   Metin özgündür; MEB TYT Biyoloji kapsamına göre. upsertUnits.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-biyoloji-tr1: content-loader yüklenmedi"); return; }

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

  setUnit("biy-ortak", "Canlıların Ortak Özellikleri",
    "Tüm canlıların paylaştığı temel özellikler.",
    "<p>Yapısı ve karmaşıklığı ne olursa olsun bütün canlıların paylaştığı ortak özellikler vardır:</p>" +
    "<ul>" +
    "<li><b>Hücresel yapı:</b> Bütün canlılar bir ya da çok hücreden oluşur.</li>" +
    "<li><b>Beslenme:</b> Enerji ve madde ihtiyacı için beslenir (üretici/tüketici).</li>" +
    "<li><b>Solunum:</b> Besinlerden enerji (ATP) elde eder.</li>" +
    "<li><b>Boşaltım:</b> Metabolik atıkları uzaklaştırır.</li>" +
    "<li><b>Hareket:</b> Yer değiştirme veya iç hareket görülür.</li>" +
    "<li><b>Uyarılara tepki:</b> Ortamdaki değişimlere karşı tepki verir.</li>" +
    "<li><b>Üreme ve büyüme:</b> Neslini sürdürür, gelişir.</li>" +
    "<li><b>Metabolizma:</b> Yapım (anabolizma) ve yıkım (katabolizma) tepkimeleri.</li>" +
    "<li><b>Homeostazi:</b> İç dengeyi (sıcaklık, pH, su) korur.</li>" +
    "<li><b>Adaptasyon ve evrim:</b> Çevreye uyum sağlar, nesiller boyu değişir.</li>" +
    "</ul>" +
    "<p>Bu özellikler canlıyı cansızdan ayırır; cansız varlıklar bunların tümünü birlikte göstermez.</p>",
    ["Canlıların ortak özelliklerini sayar.", "Canlı-cansız ayrımını yapar."],
    ["Kristallerin büyümesini canlı üremesi sanmak.", "Hareketi yalnızca yer değiştirme sanmak."],
    [{ term: "Homeostazi", def: "İç dengeyi koruma" }, { term: "Metabolizma", def: "Anabolizma + katabolizma" }, { term: "Adaptasyon", def: "Çevreye uyum" }]);

  setUnit("biy-organizasyon", "Canlılarda Organizasyon",
    "Atomdan biyosfere organizasyon basamakları.",
    "<p>Canlılık, küçükten büyüğe düzenli bir <b>organizasyon</b> gösterir:</p>" +
    "<p><b>Atom → Molekül → Organel → Hücre → Doku → Organ → Sistem → Organizma → Popülasyon → Komünite → Ekosistem → Biyosfer</b></p>" +
    "<ul>" +
    "<li><b>Hücre:</b> Canlının en küçük yapı ve görev birimidir.</li>" +
    "<li><b>Doku:</b> Aynı görevi yapan hücre toplulukları.</li>" +
    "<li><b>Organ:</b> Farklı dokuların belirli görev için bir araya gelmesi.</li>" +
    "<li><b>Sistem:</b> Ortak görev yapan organlar (dolaşım, sindirim...).</li>" +
    "<li><b>Popülasyon:</b> Aynı türden bireyler; <b>komünite:</b> farklı popülasyonlar.</li>" +
    "<li><b>Ekosistem:</b> Canlı + cansız çevre; <b>biyosfer:</b> canlılığın olduğu tüm kuşak.</li>" +
    "</ul>" +
    "<p>Basamaklar yukarı çıkıldıkça karmaşıklık ve kapsam artar.</p>",
    ["Organizasyon basamaklarını sırayla bilir.", "Popülasyon-komünite-ekosistemi ayırır."],
    ["Doku ile organı karıştırmak.", "Popülasyonu farklı türler sanmak (aynı türdür)."],
    [{ term: "Hücre", def: "En küçük yapı/görev birimi" }, { term: "Popülasyon", def: "Aynı türden bireyler" }, { term: "Biyosfer", def: "Canlılığın tüm kuşağı" }]);

  setUnit("biy-bilesen", "Canlıların Temel Bileşikleri (Genel Bakış)",
    "İnorganik ve organik bileşenlerin genel sınıflandırması.",
    "<p>Canlıların yapısını oluşturan moleküller <b>inorganik</b> ve <b>organik</b> olmak üzere ikiye ayrılır.</p>" +
    "<h3>İnorganik bileşenler</h3><ul>" +
    "<li><b>Su:</b> En çok bulunan molekül; çözücü, taşıma ve tepkime ortamı.</li>" +
    "<li><b>Mineraller:</b> Ca, P, Fe, Na, K; yapıya katılır, görevleri düzenler.</li>" +
    "<li><b>Asit, baz, tuz:</b> pH ve osmotik dengeyi ayarlar.</li></ul>" +
    "<h3>Organik bileşenler</h3><ul>" +
    "<li><b>Karbonhidrat, lipit, protein:</b> Yapı ve enerji molekülleri.</li>" +
    "<li><b>Enzim, vitamin, hormon:</b> Düzenleyiciler.</li>" +
    "<li><b>Nükleik asit (DNA, RNA) ve ATP:</b> Kalıtım ve enerji.</li></ul>" +
    "<p>İnorganikler hücrede üretilemez, dışarıdan alınır (su/mineral); organiklerin çoğu hücrede sentezlenebilir.</p>",
    ["İnorganik ve organik bileşenleri ayırt eder.", "Her grubun görevini genel olarak bilir."],
    ["Enzimi karbonhidrat sanmak (proteindir).", "Suyu organik sanmak (inorganiktir)."],
    [{ term: "İnorganik", def: "Su, mineral, asit-baz-tuz" }, { term: "Organik", def: "Karbonhidrat, lipit, protein, nükleik asit" }]);

  setUnit("biy-inorganik", "İnorganik Bileşikler: Su, Mineraller, Asit-Baz-Tuz",
    "Suyun özellikleri, minerallerin görevleri ve pH dengesi.",
    "<h3>Su</h3><p>Canlı kütlesinin büyük kısmını oluşturur. Polardır, <b>çözücü</b>dür; yüksek <b>özısısı</b>yla vücut ısısını dengeler; terlemeyle soğutur; besinlerin ve atıkların taşınmasını sağlar. Metabolik tepkimelerin (hidroliz) ortamıdır.</p>" +
    "<h3>Mineraller</h3><p>Az miktarda gereken ama hayati elementler: <b>Ca</b> (kemik, kas-sinir), <b>Fe</b> (hemoglobin), <b>I</b> (tiroit hormonu), <b>Na-K</b> (sinir iletimi), <b>P</b> (ATP, DNA, kemik). Enzimlerin çalışmasını destekler.</p>" +
    "<h3>Asit, baz ve tuz</h3><p>Suda <b>H+</b> veren asit, <b>OH-</b> veren bazdır. Canlılarda <b>pH</b> dar bir aralıkta tutulur (homeostazi). <b>Tamponlar</b> pH değişimini engeller. Tuzlar iyon dengesi ve osmotik basıncı sağlar.</p>",
    ["Suyun canlılar için önemini açıklar.", "Mineralleri görevleriyle eşleştirir."],
    ["Suyu enerji verici (besin) sanmak.", "Her minerali çok miktarda gerekli sanmak (az ama şart)."],
    [{ term: "Su", def: "Çözücü, taşıma, ısı dengesi" }, { term: "Fe", def: "Hemoglobin yapısı" }, { term: "Tampon", def: "pH değişimini engeller" }]);

  setUnit("biy-karbonhidrat", "Karbonhidratlar",
    "Mono-, di- ve polisakkaritler; yapı ve görevleri.",
    "<p>Karbonhidratlar <b>C, H, O</b> içeren, hücrenin temel <b>enerji kaynağı</b>dır (1 g ~ 4 kcal). Üç gruba ayrılır:</p>" +
    "<ul>" +
    "<li><b>Monosakkaritler:</b> En küçük birim. <b>Glikoz</b> (kan şekeri, ana yakıt), fruktoz (meyve), galaktoz, riboz-deoksiriboz (nükleik asit).</li>" +
    "<li><b>Disakkaritler:</b> İki monosakkaritin <b>dehidrasyon</b> ile birleşmesi. <b>Sakkaroz</b> (glikoz+fruktoz), <b>maltoz</b> (glikoz+glikoz), <b>laktoz</b> (glikoz+galaktoz, süt şekeri).</li>" +
    "<li><b>Polisakkaritler:</b> Çok sayıda glikoz. <b>Nişasta</b> (bitkide depo), <b>glikojen</b> (hayvanda depo, karaciğer-kas), <b>selüloz</b> (bitki hücre duvarı, yapısal), <b>kitin</b> (mantar/eklem bacaklı).</li>" +
    "</ul>" +
    "<p>Birleşme <b>dehidrasyon sentezi</b> (su çıkar), ayrışma <b>hidroliz</b> (su katılır) ile olur.</p>",
    ["Karbonhidrat gruplarını örnekleriyle bilir.", "Depo ve yapısal polisakkaritleri ayırır."],
    ["Selülozu enerji deposu sanmak (yapısaldır).", "Glikojeni bitki deposu sanmak (hayvan deposudur)."],
    [{ term: "Glikoz", def: "Ana enerji monosakkariti" }, { term: "Nişasta", def: "Bitkide depo" }, { term: "Glikojen", def: "Hayvanda depo" }, { term: "Selüloz", def: "Bitki hücre duvarı" }]);

  setUnit("biy-lipit", "Lipitler (Yağlar)",
    "Nötr yağlar, fosfolipitler, steroitler; görevleri.",
    "<p>Lipitler suda çözünmeyen (<b>apolar</b>), <b>C, H, O</b> içeren moleküllerdir. En yüksek enerjili besindir (1 g ~ 9 kcal).</p>" +
    "<ul>" +
    "<li><b>Nötr yağlar (trigliserit):</b> Gliserol + 3 yağ asidi. Enerji <b>deposu</b>, yalıtım, organ koruma. Doymuş (hayvansal, katı) ve doymamış (bitkisel, sıvı) yağ asitleri.</li>" +
    "<li><b>Fosfolipitler:</b> Bir yağ asidi yerine fosfat; <b>hidrofil baş + hidrofob kuyruk</b>. Hücre <b>zarının</b> temel yapısıdır (çift tabaka).</li>" +
    "<li><b>Steroitler:</b> Halkalı yapı. <b>Kolesterol</b> (zar akışkanlığı), steroit hormonlar (östrojen, testosteron), D vitamini.</li>" +
    "</ul>" +
    "<p>Yağlar hidroliz edildiğinde gliserol ve yağ asitlerine ayrılır; suda çözünmeyen A, D, E, K vitaminlerini taşır.</p>",
    ["Lipit çeşitlerini ve görevlerini bilir.", "Fosfolipidin zar yapısındaki rolünü açıklar."],
    ["Yağı ana enerji kaynağı sanmak (o karbonhidrattır; yağ deposudur).", "Kolesterolü yalnızca zararlı sanmak (zar/hormon için gerekli)."],
    [{ term: "Trigliserit", def: "Gliserol + 3 yağ asidi (depo)" }, { term: "Fosfolipit", def: "Hücre zarı yapısı" }, { term: "Steroit", def: "Kolesterol, hormonlar" }]);

  setUnit("biy-protein", "Proteinler",
    "Amino asitler, peptit bağı, protein görevleri ve denatürasyon.",
    "<p>Proteinler <b>amino asitlerden</b> oluşan, <b>C, H, O, N</b> (ve S) içeren en çeşitli moleküllerdir. 20 çeşit amino asit, <b>peptit bağı</b> ile birleşir (dehidrasyon).</p>" +
    "<h3>Görevleri</h3><ul>" +
    "<li><b>Yapısal:</b> Kollajen, keratin (kıl, tırnak), zar proteinleri.</li>" +
    "<li><b>Enzim:</b> Metabolik tepkimeleri hızlandırır.</li>" +
    "<li><b>Taşıma:</b> Hemoglobin (O2), zar taşıyıcıları.</li>" +
    "<li><b>Savunma:</b> Antikorlar.</li>" +
    "<li><b>Düzenleme:</b> Bazı hormonlar (insulin) proteindir.</li>" +
    "</ul>" +
    "<p>Proteinin işlevi <b>üç boyutlu şekline</b> bağlıdır. Yüksek sıcaklık, asit-baz gibi etkenlerle şekil bozulur (<b>denatürasyon</b>) ve işlev kaybolur; çoğu geri dönüşümsüzdür.</p>",
    ["Amino asit-peptit bağı ilişkisini bilir.", "Protein görevlerini örnekler.", "Denatürasyonu açıklar."],
    ["Bütün hormonları protein sanmak (bazıları steroittir).", "Denatürasyonda amino asit dizisi bozulur sanmak (şekil bozulur)."],
    [{ term: "Amino asit", def: "Proteinin yapı birimi" }, { term: "Peptit bağı", def: "Amino asitleri bağlar" }, { term: "Denatürasyon", def: "Şeklin/işlevin bozulması" }]);

  setUnit("biy-enzim", "Enzimler",
    "Enzim yapısı, çalışma mekanizması ve etkileyen faktörler.",
    "<p><b>Enzimler</b> metabolik tepkimeleri hızlandıran <b>protein</b> yapılı biyolojik katalizörlerdir. Tepkimeden <b>değişmeden</b> çıkar, tekrar kullanılır; <b>aktivasyon enerjisini</b> düşürür.</p>" +
    "<h3>Yapı</h3><p>Bazı enzimler yalnızca proteinden; bazıları <b>protein (apoenzim) + yardımcı kısım (kofaktör/koenzim, örneğin vitaminler)</b> oluşur. Enzim <b>substrata özgüdür</b> (anahtar-kilit).</p>" +
    "<h3>Etkileyen faktörler</h3><ul>" +
    "<li><b>Sıcaklık:</b> Optimum sıcaklığa kadar hız artar; aşırısında enzim <b>denatüre</b> olur.</li>" +
    "<li><b>pH:</b> Her enzimin optimum pH'ı vardır (pepsin asidik, tripsin bazik).</li>" +
    "<li><b>Substrat ve enzim derişimi:</b> Arttıkça hız artar (doyma noktasına kadar).</li>" +
    "</ul>",
    ["Enzimin katalizör rolünü açıklar.", "Enzim hızını etkileyen faktörleri yorumlar."],
    ["Enzimin tepkimede tükendiğini sanmak (değişmeden çıkar).", "Enzimi karbonhidrat sanmak (proteindir)."],
    [{ term: "Enzim", def: "Protein yapılı biyokatalizör" }, { term: "Aktivasyon enerjisi", def: "Enzim bunu düşürür" }, { term: "Optimum pH/sıcaklık", def: "En hızlı çalıştığı değer" }]);

  setUnit("biy-vitamin", "Vitaminler ve Hormonlar",
    "Vitamin çeşitleri ve hormonların düzenleyici rolü.",
    "<h3>Vitaminler</h3><p>Az miktarda gereken, <b>düzenleyici</b> organik moleküllerdir; çoğu enzimlere <b>koenzim</b> olur. İkiye ayrılır:</p><ul>" +
    "<li><b>Suda çözünenler (B, C):</b> Depolanmaz, fazlası atılır; sık alınmalıdır.</li>" +
    "<li><b>Yağda çözünenler (A, D, E, K):</b> Karaciğerde/yağ dokusunda depolanır; fazlası zararlı olabilir.</li></ul>" +
    "<p>Eksikliğinde özgül hastalıklar görülür (C → skorbüt, D → raşitizm).</p>" +
    "<h3>Hormonlar</h3><p>İç salgı bezlerinden salgılanıp <b>kan yoluyla</b> taşınan, hedef organı <b>düzenleyen</b> kimyasal mesajcılardır. Protein (insulin) veya steroit (östrojen) yapılı olabilir. Az miktarda büyük etki yaparlar; metabolizma, büyüme ve üreme gibi olayları denetler.</p>",
    ["Suda/yağda çözünen vitaminleri ayırır.", "Hormonların düzenleyici rolünü açıklar."],
    ["Yağda çözünen vitamini sık alınmalı sanmak (depolanır).", "Bütün hormonları protein sanmak."],
    [{ term: "Suda çözünen vitamin", def: "B, C (depolanmaz)" }, { term: "Yağda çözünen", def: "A, D, E, K (depolanır)" }, { term: "Hormon", def: "Kanla taşınan düzenleyici" }]);

  setUnit("biy-nukleik", "Nükleik Asitler ve ATP",
    "DNA, RNA yapısı, görevleri ve enerji molekülü ATP.",
    "<p><b>Nükleik asitler</b> kalıtım bilgisini taşıyan ve protein sentezini yöneten moleküllerdir. Yapı birimi <b>nükleotit</b>tir (beş karbonlu şeker + fosfat + azotlu baz).</p>" +
    "<h3>DNA</h3><p>Çift zincirli sarmal; şekeri <b>deoksiriboz</b>; bazları <b>A-T, G-C</b> (tamamlayıcı). Kalıtım bilgisini taşır, kendini eşleyerek (replikasyon) aktarır.</p>" +
    "<h3>RNA</h3><p>Tek zincirli; şekeri <b>riboz</b>; timin yerine <b>urasil (A-U)</b>. Protein sentezinde görev alır (mRNA, tRNA, rRNA).</p>" +
    "<h3>ATP</h3><p><b>Adenozin trifosfat</b>, hücrenin doğrudan kullandığı <b>enerji birimi</b>dir. Yüksek enerjili fosfat bağları kopunca (ATP → ADP + P) enerji açığa çıkar; solunumla yeniden üretilir.</p>",
    ["DNA-RNA farklarını bilir.", "ATP'nin enerji rolünü açıklar."],
    ["DNA'da urasil bulunduğunu sanmak (timin vardır).", "ATP'yi kalıtım molekülü sanmak (enerji molekülüdür)."],
    [{ term: "DNA", def: "Çift zincir, deoksiriboz, A-T/G-C" }, { term: "RNA", def: "Tek zincir, riboz, urasil" }, { term: "ATP", def: "Hücrenin enerji birimi" }]);

})();
