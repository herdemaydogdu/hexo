/* ============================================================
   FEN / BIYOLOJI — TYT konu anlatimi (Bolum 1: Canlilarin ortak
   ozellikleri, organizasyon ve temel bilesikler).
   TEK Write ile yazildi (Write+Edit truncation'dan kacinmak icin).
   Kaynak: MEB TYT Biyoloji ozetleri (metin ozgun). upsertUnits.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-konu-biyoloji-tam: content-loader yuklenmedi"); return; }

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

  setUnit("biy-ortak", "Canlilarin Ortak Ozellikleri",
    "Tum canlilarin paylastigi temel ozellikler.",
    "<p>Yapisi ve karmasikligi ne olursa olsun butun canlilarin paylastigi ortak ozellikler vardir:</p>" +
    "<ul>" +
    "<li><b>Hucresel yapi:</b> Butun canlilar bir ya da cok hucreden olusur.</li>" +
    "<li><b>Beslenme:</b> Enerji ve madde ihtiyaci icin beslenir (uretici/tuketici).</li>" +
    "<li><b>Solunum:</b> Besinlerden enerji (ATP) elde eder.</li>" +
    "<li><b>Bosaltim:</b> Metabolik atiklari uzaklastirir.</li>" +
    "<li><b>Hareket:</b> Yer degistirme veya iç hareket gorulur.</li>" +
    "<li><b>Uyarilara tepki:</b> Ortamdaki degisimlere karsi tepki verir.</li>" +
    "<li><b>Ureme ve buyume:</b> Neslini surdurur, gelisir.</li>" +
    "<li><b>Metabolizma:</b> Yapim (anabolizma) ve yikim (katabolizma) tepkimeleri.</li>" +
    "<li><b>Homeostazi:</b> Ic dengeyi (sicaklik, pH, su) korur.</li>" +
    "<li><b>Adaptasyon ve evrim:</b> Cevreye uyum saglar, nesiller boyu degisir.</li>" +
    "</ul>" +
    "<p>Bu ozellikler canliyi cansizdan ayirir; cansiz varliklar bunlarin tumunu birlikte gostermez.</p>",
    ["Canlilarin ortak ozelliklerini sayar.", "Canli-cansiz ayrimini yapar."],
    ["Kristallerin uremesini canli uremesi sanmak.", "Hareketi yalnizca yer degistirme sanmak."],
    [{ term: "Homeostazi", def: "Ic dengeyi koruma" }, { term: "Metabolizma", def: "Anabolizma + katabolizma" }, { term: "Adaptasyon", def: "Cevreye uyum" }]);

  setUnit("biy-organizasyon", "Canlilarda Organizasyon",
    "Atomdan biyosfere organizasyon basamaklari.",
    "<p>Canlilik, kucukten buyuge duzenli bir <b>organizasyon</b> gosterir:</p>" +
    "<p><b>Atom -> Molekul -> Organel -> Hucre -> Doku -> Organ -> Sistem -> Organizma -> Populasyon -> Komunite -> Ekosistem -> Biyosfer</b></p>" +
    "<ul>" +
    "<li><b>Hucre:</b> Canlinin en kucuk yapi ve gorev birimidir.</li>" +
    "<li><b>Doku:</b> Ayni gorevi yapan hucre topluluklari.</li>" +
    "<li><b>Organ:</b> Farkli dokularin belirli gorev icin bir araya gelmesi.</li>" +
    "<li><b>Sistem:</b> Ortak gorev yapan organlar (dolasim, sindirim...).</li>" +
    "<li><b>Populasyon:</b> Ayni turden bireyler; <b>komunite:</b> farkli populasyonlar.</li>" +
    "<li><b>Ekosistem:</b> Canli + cansiz cevre; <b>biyosfer:</b> canliligin oldugu tum kusak.</li>" +
    "</ul>" +
    "<p>Basamaklar yukari cikildikca karmasiklik ve kapsam artar.</p>",
    ["Organizasyon basamaklarini sirayla bilir.", "Populasyon-komunite-ekosistemi ayirir."],
    ["Doku ile organi karistirmak.", "Populasyonu farkli turler sanmak (ayni turdur)."],
    [{ term: "Hucre", def: "En kucuk yapi/gorev birimi" }, { term: "Populasyon", def: "Ayni turden bireyler" }, { term: "Biyosfer", def: "Canliligin tum kusagi" }]);

  setUnit("biy-bilesen", "Canlilarin Temel Bilesikleri (Genel Bakis)",
    "Inorganik ve organik bilesenlerin genel siniflandirmasi.",
    "<p>Canlilarin yapisini olusturan molekuller <b>inorganik</b> ve <b>organik</b> olmak uzere ikiye ayrilir.</p>" +
    "<h3>Inorganik bilesenler</h3><ul>" +
    "<li><b>Su:</b> En cok bulunan molekul; cozucu, tasima ve tepkime ortami.</li>" +
    "<li><b>Mineraller:</b> Ca, P, Fe, Na, K; yapiya katilir, gorevleri duzenler.</li>" +
    "<li><b>Asit, baz, tuz:</b> pH ve osmotik dengeyi ayarlar.</li></ul>" +
    "<h3>Organik bilesenler</h3><ul>" +
    "<li><b>Karbonhidrat, lipit, protein:</b> Yapi ve enerji molekulleri.</li>" +
    "<li><b>Enzim, vitamin, hormon:</b> Duzenleyiciler.</li>" +
    "<li><b>Nukleik asit (DNA, RNA) ve ATP:</b> Kalitim ve enerji.</li></ul>" +
    "<p>Inorganikler hucrede uretilemez, disaridan alinir (su/mineral); organiklerin cogu hucrede sentezlenebilir.</p>",
    ["Inorganik ve organik bilesenleri ayirt eder.", "Her grubun gorevini genel olarak bilir."],
    ["Enzimi karbonhidrat sanmak (proteindir).", "Suyu organik sanmak (inorganiktir)."],
    [{ term: "Inorganik", def: "Su, mineral, asit-baz-tuz" }, { term: "Organik", def: "Karbonhidrat, lipit, protein, nukleik asit" }]);

  setUnit("biy-inorganik", "Inorganik Bilesikler: Su, Mineraller, Asit-Baz-Tuz",
    "Suyun ozellikleri, minerallerin gorevleri ve pH dengesi.",
    "<h3>Su</h3><p>Canli kutlesinin buyuk kismini olusturur. Polardir, <b>cozucu</b>dur; yuksek <b>ozisisi</b>yla vucut isisini dengeler; terlemeyle sogutur; besinlerin ve atiklarin tasinmasini saglar. Metabolik tepkimelerin (hidroliz) ortamidir.</p>" +
    "<h3>Mineraller</h3><p>Az miktarda gereken ama hayati elementler: <b>Ca</b> (kemik, kas-sinir), <b>Fe</b> (hemoglobin), <b>I</b> (tiroit hormonu), <b>Na-K</b> (sinir iletimi), <b>P</b> (ATP, DNA, kemik). Enzimlerin calismasini destekler.</p>" +
    "<h3>Asit, baz ve tuz</h3><p>Suda <b>H+</b> veren asit, <b>OH-</b> veren bazdir. Canlilarda <b>pH</b> dar bir aralikta tutulur (homeostazi). <b>Tamponlar</b> pH degisimini engeller. Tuzlar iyon dengesi ve osmotik basinci saglar.</p>",
    ["Suyun canlilar icin onemini aciklar.", "Mineralleri gorevleriyle eslestirir."],
    ["Suyu enerji verici (besin) sanmak.", "Her minerali cok miktarda gerekli sanmak (az ama sart)."],
    [{ term: "Su", def: "Cozucu, tasima, isi dengesi" }, { term: "Fe", def: "Hemoglobin yapisi" }, { term: "Tampon", def: "pH degisimini engeller" }]);

  setUnit("biy-karbonhidrat", "Karbonhidratlar",
    "Mono-, di- ve polisakkaritler; yapi ve gorevleri.",
    "<p>Karbonhidratlar <b>C, H, O</b> iceren, hucrenin temel <b>enerji kaynagi</b>dir (1 g ~ 4 kcal). Uc gruba ayrilir:</p>" +
    "<ul>" +
    "<li><b>Monosakkaritler:</b> En kucuk birim. <b>Glikoz</b> (kan sekeri, ana yakit), fruktoz (meyve), galaktoz, riboz-deoksiriboz (nukleik asit).</li>" +
    "<li><b>Disakkaritler:</b> Iki monosakkaritin <b>dehidrasyon</b> ile birlesmesi. <b>Sakkaroz</b> (glikoz+fruktoz), <b>maltoz</b> (glikoz+glikoz), <b>laktoz</b> (glikoz+galaktoz, sut sekeri).</li>" +
    "<li><b>Polisakkaritler:</b> Cok sayida glikoz. <b>Nisasta</b> (bitkide depo), <b>glikojen</b> (hayvanda depo, karaciger-kas), <b>seluloz</b> (bitki hucre duvari, yapisal), <b>kitin</b> (mantar/eklem bacakli).</li>" +
    "</ul>" +
    "<p>Birlesme <b>dehidrasyon sentezi</b> (su cikar), ayrisma <b>hidroliz</b> (su katilir) ile olur.</p>",
    ["Karbonhidrat gruplarini ornekleriyle bilir.", "Depo ve yapisal polisakkaritleri ayirir."],
    ["Selulozu enerji deposu sanmak (yapisaldir).", "Glikojeni bitki deposu sanmak (hayvan deposudur)."],
    [{ term: "Glikoz", def: "Ana enerji monosakkariti" }, { term: "Nisasta", def: "Bitkide depo" }, { term: "Glikojen", def: "Hayvanda depo" }, { term: "Seluloz", def: "Bitki hucre duvari" }]);

  setUnit("biy-lipit", "Lipitler (Yaglar)",
    "Notr yaglar, fosfolipitler, steroitler; gorevleri.",
    "<p>Lipitler suda cozunmeyen (<b>apolar</b>), <b>C, H, O</b> iceren molekullerdir. En yuksek enerjili besindir (1 g ~ 9 kcal).</p>" +
    "<ul>" +
    "<li><b>Notr yaglar (trigliserit):</b> Gliserol + 3 yag asidi. Enerji <b>deposu</b>, yalitim, organ koruma. Doymus (hayvansal, kati) ve doymamis (bitkisel, sivi) yag asitleri.</li>" +
    "<li><b>Fosfolipitler:</b> Bir yag asidi yerine fosfat; <b>hidrofil bas + hidrofob kuyruk</b>. Hucre <b>zarinin</b> temel yapisidir (cift tabaka).</li>" +
    "<li><b>Steroitler:</b> Halkali yapi. <b>Kolesterol</b> (zar akiskanligi), steroit hormonlar (ostrojen, testosteron), D vitamini.</li>" +
    "</ul>" +
    "<p>Yaglar hidroliz edildiginde gliserol ve yag asitlerine ayrilir; suda cozunmeyen A, D, E, K vitaminlerini tasir.</p>",
    ["Lipit cesitlerini ve gorevlerini bilir.", "Fosfolipidin zar yapisindaki rolunu aciklar."],
    ["Yagi ana enerji kaynagi sanmak (o karbonhidrattir; yag deposudur).", "Kolesterolu yalnizca zararli sanmak (zar/hormon icin gerekli)."],
    [{ term: "Trigliserit", def: "Gliserol + 3 yag asidi (depo)" }, { term: "Fosfolipit", def: "Hucre zari yapisi" }, { term: "Steroit", def: "Kolesterol, hormonlar" }]);

  setUnit("biy-protein", "Proteinler",
    "Amino asitler, peptit bagi, protein gorevleri ve denaturasyon.",
    "<p>Proteinler <b>amino asitlerden</b> olusan, <b>C, H, O, N</b> (ve S) iceren en cesitli molekullerdir. 20 cesit amino asit, <b>peptit bagi</b> ile birlesir (dehidrasyon).</p>" +
    "<h3>Gorevleri</h3><ul>" +
    "<li><b>Yapisal:</b> Kollajen, keratin (kil, tirnak), zar proteinleri.</li>" +
    "<li><b>Enzim:</b> Metabolik tepkimeleri hizlandirir.</li>" +
    "<li><b>Tasima:</b> Hemoglobin (O2), zar tasiyicilari.</li>" +
    "<li><b>Savunma:</b> Antikorlar.</li>" +
    "<li><b>Duzenleme:</b> Bazi hormonlar (insulin) proteindir.</li>" +
    "</ul>" +
    "<p>Proteinin islevi <b>uc boyutlu sekline</b> baglidir. Yuksek sicaklik, asit-baz gibi etkenlerle sekil bozulur (<b>denaturasyon</b>) ve islev kaybolur; cogu geri donusumsuzdur.</p>",
    ["Amino asit-peptit bagi iliskisini bilir.", "Protein gorevlerini ornekler.", "Denaturasyonu aciklar."],
    ["Butun hormonlari protein sanmak (bazilari steroittir).", "Denaturasyonda amino asit dizisi bozulur sanmak (sekil bozulur)."],
    [{ term: "Amino asit", def: "Proteinin yapi birimi" }, { term: "Peptit bagi", def: "Amino asitleri baglar" }, { term: "Denaturasyon", def: "Seklin/islevin bozulmasi" }]);

  setUnit("biy-enzim", "Enzimler",
    "Enzim yapisi, calisma mekanizmasi ve etkileyen faktorler.",
    "<p><b>Enzimler</b> metabolik tepkimeleri hizlandiran <b>protein</b> yapili biyolojik katalizorlerdir. Tepkimeden <b>degismeden</b> cikar, tekrar kullanilir; <b>aktivasyon enerjisini</b> dusurur.</p>" +
    "<h3>Yapi</h3><p>Bazi enzimler yalnizca proteinden; bazilari <b>protein (apoenzim) + yardimci kisim (kofaktor/koenzim, ornegin vitaminler)</b> olusur. Enzim <b>substrata ozgudur</b> (anahtar-kilit).</p>" +
    "<h3>Etkileyen faktorler</h3><ul>" +
    "<li><b>Sicaklik:</b> Optimum sicakliga kadar hiz artar; asirisinda enzim <b>denature</b> olur.</li>" +
    "<li><b>pH:</b> Her enzimin optimum pH'i vardir (pepsin asidik, tripsin bazik).</li>" +
    "<li><b>Substrat ve enzim derisimi:</b> Artikca hiz artar (doyma noktasina kadar).</li>" +
    "</ul>",
    ["Enzimin katalizor rolunu aciklar.", "Enzim hizini etkileyen faktorleri yorumlar."],
    ["Enzimin tepkimede tukendigini sanmak (degismeden cikar).", "Enzimi karbonhidrat sanmak (proteindir)."],
    [{ term: "Enzim", def: "Protein yapili biyokatalizor" }, { term: "Aktivasyon enerjisi", def: "Enzim bunu dusurur" }, { term: "Optimum pH/sicaklik", def: "En hizli calistigi deger" }]);

  setUnit("biy-vitamin", "Vitaminler ve Hormonlar",
    "Vitamin cesitleri ve hormonlarin duzenleyici rolu.",
    "<h3>Vitaminler</h3><p>Az miktarda gereken, <b>duzenleyici</b> organik molekullerdir; cogu enzimlere <b>koenzim</b> olur. Ikiye ayrilir:</p><ul>" +
    "<li><b>Suda cozunenler (B, C):</b> Depolanmaz, fazlasi atilir; sik alinmalidir.</li>" +
    "<li><b>Yagda cozunenler (A, D, E, K):</b> Karacigerde/yag dokusunda depolanir; fazlasi zararli olabilir.</li></ul>" +
    "<p>Eksikliginde ozgul hastaliklar gorulur (C -> skorbut, D -> raşitizm).</p>" +
    "<h3>Hormonlar</h3><p>Ic salgi bezlerinden salgilanip <b>kan yoluyla</b> tasinan, hedef organi <b>duzenleyen</b> kimyasal mesajcilardir. Protein (insulin) veya steroit (ostrojen) yapili olabilir. Az miktarda buyuk etki yaparlar; metabolizma, buyume ve ureme gibi olaylari denetler.</p>",
    ["Suda/yagda cozunen vitaminleri ayirir.", "Hormonlarin duzenleyici rolunu aciklar."],
    ["Yagda cozunen vitamini sik alinmali sanmak (depolanir).", "Butun hormonlari protein sanmak."],
    [{ term: "Suda cozunen vitamin", def: "B, C (depolanmaz)" }, { term: "Yagda cozunen", def: "A, D, E, K (depolanir)" }, { term: "Hormon", def: "Kanla tasinan duzenleyici" }]);

  setUnit("biy-nukleik", "Nukleik Asitler ve ATP",
    "DNA, RNA yapisi, gorevleri ve enerji molekulu ATP.",
    "<p><b>Nukleik asitler</b> kalitim bilgisini tasiyan ve protein sentezini yoneten molekullerdir. Yapi birimi <b>nukleotit</b>tir (bes karbonlu seker + fosfat + azotlu baz).</p>" +
    "<h3>DNA</h3><p>Cift zincirli sarmal; sekeri <b>deoksiriboz</b>; bazlari <b>A-T, G-C</b> (tamamlayici). Kalitim bilgisini tasir, kendini eslerek (replikasyon) aktarir.</p>" +
    "<h3>RNA</h3><p>Tek zincirli; sekeri <b>riboz</b>; timin yerine <b>urasil (A-U)</b>. Protein sentezinde gorev alir (mRNA, tRNA, rRNA).</p>" +
    "<h3>ATP</h3><p><b>Adenozin trifosfat</b>, hucrenin dogrudan kullandigi <b>enerji birimi</b>dir. Yuksek enerjili fosfat baglari kopunca (ATP -> ADP + P) enerji aciga cikar; solunumla yeniden uretilir.</p>",
    ["DNA-RNA farklarini bilir.", "ATP'nin enerji rolunu aciklar."],
    ["DNA'da urasil bulundugunu sanmak (timin vardir).", "ATP'yi kalitim molekulu sanmak (enerji molekuludur)."],
    [{ term: "DNA", def: "Cift zincir, deoksiriboz, A-T/G-C" }, { term: "RNA", def: "Tek zincir, riboz, urasil" }, { term: "ATP", def: "Hucrenin enerji birimi" }]);

})();
