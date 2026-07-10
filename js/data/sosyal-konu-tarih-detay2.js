/* ============================================================
   SOSYAL / TARİH — DERİN konu anlatımı (2. dosya)
   Osmanlı Klasik Dönem ve sonrası thin ünitelerin content'ini
   kapsamlı sürümle EZER (tarih.js + sosyal-konu-tarih-detay.js'ten
   SONRA yüklenir). Tümü özgün.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-tarih-detay2: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try {
      var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setFull(id, content, objectives, commonMistakes, pairs) {
    var u = mevcut(id) || { id: id, branch: "tarih", reviewStatus: "draft", originalityStatement: true };
    u.content = content; u.reviewedAt = "2026-07-10";
    if (objectives) u.objectives = objectives;
    if (commonMistakes) u.commonMistakes = commonMistakes;
    if (pairs && (!u.pairs || u.pairs.length < 2)) u.pairs = pairs;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  setFull("tar-klasik",
    "<h2>Osmanlı Klasik Dönem</h2>" +
    "<p>Osmanlı'nın <b>1453 İstanbul'un Fethi</b>'nden <b>1579 Sokullu Mehmed Paşa'nın ölümüne</b> kadar süren dönem, devletin en güçlü olduğu, kurumların oturduğu ve sınırların en hızlı genişlediği çağdır. Bu döneme <b>Yükselme Dönemi</b> de denir. Fatih, Yavuz ve Kanuni bu çağın üç büyük padişahıdır.</p>" +

    "<h3>İstanbul'un Fethi (1453)</h3>" +
    "<p><b>II. Mehmed (Fatih)</b>, ticaret yollarını denetlemek, Bizans'ın kışkırtmalarına son vermek ve Anadolu ile Rumeli topraklarını birleştirmek için İstanbul'u kuşattı. <b>Şahi</b> adı verilen büyük toplar döktürdü, gemileri <b>karadan yürüterek Haliç'e indirdi</b> ve surları aşarak şehri aldı. Son Bizans imparatoru <b>XI. Konstantin</b> savaşta öldü.</p>" +
    "<p>Fethin dünya tarihi açısından sonuçları büyüktür:</p>" +
    "<ul>" +
    "<li><b>Bizans (Doğu Roma) İmparatorluğu sona erdi</b>; İstanbul Osmanlı'nın başkenti oldu.</li>" +
    "<li>Yaygın kabule göre <b>Orta Çağ kapandı, Yeni Çağ başladı</b>.</li>" +
    "<li>Surların top gücüyle yıkılması, Avrupa'da <b>derebeylik (feodalite)</b> düzenini sarstı.</li>" +
    "<li>İstanbul'dan kaçan bilginlerin İtalya'ya gitmesi <b>Rönesans</b>'ı hızlandırdı.</li>" +
    "<li>Fatih, Ortodoks Patrikhanesi'ni koruyarak gayrimüslimlere <b>hoşgörü</b> gösterdi.</li>" +
    "</ul>" +

    "<h3>Fatih Sultan Mehmed Dönemi (1451-1481)</h3>" +
    "<p>Fatih, dağınık toprakları merkeze bağlayarak <b>güçlü merkezî devlet</b> kurdu. Ünlü <b>Kanunname-i Âl-i Osman</b> ile devlet yönetimini, saray teşkilatını ve örf hukukunu yazılı hâle getirdi; devletin bütünlüğü için düzenlemeler yaptı. Başlıca fetih ve gelişmeler:</p>" +
    "<ul>" +
    "<li><b>Otlukbeli Savaşı (1473):</b> Doğu'da güçlenen <b>Akkoyunlu</b> hükümdarı Uzun Hasan yenildi; Anadolu birliği güçlendi.</li>" +
    "<li>Trabzon (Rum) Devleti'ne ve Karadeniz kıyılarına, ardından <b>Kırım'a (1475)</b> egemen olundu; <b>Karadeniz bir Türk gölü</b> hâline geldi.</li>" +
    "<li>Sırbistan, Mora, Bosna ve Arnavutluk fethedilerek Balkanlar'daki hâkimiyet pekişti.</li>" +
    "<li><b>Sahn-ı Seman medreseleri</b> kuruldu; bilim ve eğitim desteklendi. Fatih, farklı din ve dillerden bilginleri sarayında topladı.</li>" +
    "</ul>" +

    "<h3>Yavuz Sultan Selim Dönemi (1512-1520)</h3>" +
    "<p><b>I. Selim (Yavuz)</b> yönünü Doğu'ya ve Güney'e çevirdi; kısa sürede devletin sınırlarını ve gücünü büyük ölçüde artırdı.</p>" +
    "<ul>" +
    "<li><b>Çaldıran Savaşı (1514):</b> Anadolu'da Şii propagandası yapan <b>Safevi (İran)</b> hükümdarı Şah İsmail yenildi. Doğu ve Güneydoğu Anadolu Osmanlı'ya katıldı. <b>(Dikkat: Çaldıran, Memlüklerle değil Safevilerledir.)</b></li>" +
    "<li><b>Mercidabık (1516)</b> ve <b>Ridaniye (1517)</b> savaşlarıyla <b>Memlük Devleti</b> yıkıldı; Suriye, Filistin, Mısır ve Hicaz alındı.</li>" +
    "<li>Mısır'ın alınmasıyla <b>halifelik Osmanlı'ya geçti</b>; kutsal emanetler İstanbul'a getirildi. Padişah artık <b>İslam dünyasının lideri</b> ve Haremeyn'in (Mekke-Medine) hizmetkârı sayıldı.</li>" +
    "<li><b>Baharat Yolu</b>'nun Akdeniz'e açılan ucu denetim altına alındı; hazine büyük ölçüde zenginleşti.</li>" +
    "</ul>" +

    "<h3>Kanuni Sultan Süleyman Dönemi (1520-1566)</h3>" +
    "<p><b>I. Süleyman (Kanuni)</b> döneminde Osmanlı, kara ve denizde <b>en görkemli çağını</b> yaşadı; 46 yıl tahtta kaldı.</p>" +
    "<ul>" +
    "<li><b>Belgrad (1521)</b> ve <b>Rodos (1522)</b> alınarak Orta Avrupa ve Doğu Akdeniz'in kapıları açıldı.</li>" +
    "<li><b>Mohaç Meydan Muharebesi (1526):</b> Macaristan ordusu iki saatte bozguna uğratıldı; Macaristan'ın büyük bölümü Osmanlı denetimine girdi.</li>" +
    "<li><b>I. Viyana Kuşatması (1529):</b> Avusturya'nın başkenti kuşatıldı ama kış ve lojistik nedeniyle <b>alınamadı</b>; yine de Avrupa'ya korku saldı.</li>" +
    "<li><b>Irakeyn Seferi (1534-1535):</b> Bağdat ve Tebriz alındı; Irak Osmanlı'ya katıldı.</li>" +
    "<li><b>Kapitülasyonlar (1535):</b> Fransa'ya, Avrupa Hristiyan birliğini bölmek amacıyla <b>ticari ayrıcalıklar</b> verildi. Başta dostluk jesti olan bu ayrıcalıklar, 1740'ta <b>sürekli</b> hâle gelerek ileride ekonomiye zarar verdi.</li>" +
    "</ul>" +

    "<h3>Denizlerde Osmanlı Üstünlüğü</h3>" +
    "<p>Klasik dönemde Osmanlı denizlerde de büyük güç kazandı. Ünlü denizci <b>Barbaros Hayreddin Paşa</b> kaptanıderyalığa getirildi.</p>" +
    "<ul>" +
    "<li><b>Preveze Deniz Savaşı (1538):</b> Barbaros, Andrea Doria komutasındaki <b>Haçlı donanmasını</b> yendi; <b>Akdeniz bir Türk gölü</b> hâline geldi. (Preveze, 27 Eylül nedeniyle Deniz Kuvvetleri günüdür.)</li>" +
    "<li>Trablusgarp, Cezayir, Tunus ve Cerbe (1560) çevresinde hâkimiyet sağlandı.</li>" +
    "<li><b>Hint Deniz Seferleri:</b> Portekizlileri Kızıldeniz-Hint Okyanusu'ndan çıkarmak için düzenlendi ancak <b>başarısız</b> oldu; Osmanlı okyanus donanması kuramadı.</li>" +
    "</ul>" +

    "<h3>Sokullu Mehmed Paşa Dönemi (1564-1579)</h3>" +
    "<p>Kanuni, II. Selim ve III. Murad'a sadrazamlık yapan <b>Sokullu Mehmed Paşa</b>, devleti dirayetle yönetti; onun döneminde yükseliş sürdü.</p>" +
    "<ul>" +
    "<li><b>Kıbrıs (1571)</b> fethedildi; aynı yıl <b>İnebahtı'da (Lepanto)</b> donanma yakıldı ama kısa sürede <b>yeniden inşa edildi</b>.</li>" +
    "<li>Tunus geri alındı; <b>Süveyş</b> ve <b>Don-Volga kanal projeleri</b> tasarlandı ama gerçekleştirilemedi.</li>" +
    "<li>Sokullu'nun 1579'da öldürülmesi, geleneksel olarak <b>Duraklama Dönemi'nin başlangıcı</b> sayılır.</li>" +
    "</ul>" +

    "<h3>Klasik Dönem Düzeni</h3>" +
    "<p>Bu çağda Osmanlı kurumları en olgun hâline ulaştı:</p>" +
    "<ul>" +
    "<li><b>Tımar (dirlik) sistemi:</b> Toprağın vergi geliri, hizmet ve <b>tımarlı sipahi</b> (asker) yetiştirme karşılığında görevlilere verildi. Böylece üretim sürdü, hazineye yük olmadan büyük bir ordu beslendi, taşra düzenli yönetildi.</li>" +
    "<li><b>Devşirme ve Kapıkulu:</b> Gayrimüslim ailelerden alınan çocuklar yetiştirilip <b>yeniçeri</b> ve saray görevlisi yapıldı; padişaha bağlı sürekli ordu ve bürokrasi oluştu.</li>" +
    "<li><b>Divan-ı Hümayun:</b> Devlet işlerinin görüşüldüğü meclis; başında sadrazam bulunurdu.</li>" +
    "<li><b>Millet sistemi:</b> Gayrimüslimler kendi dinî hukuklarında serbest bırakıldı; farklı din ve topluluklar bir arada barış içinde yaşadı.</li>" +
    "</ul>",

    [
      "İstanbul'un fethinin nedenlerini ve dünya tarihi açısından sonuçlarını açıklar.",
      "Fatih, Yavuz ve Kanuni dönemlerinin başlıca fetih ve gelişmelerini sıralar.",
      "Halifeliğin Osmanlı'ya geçişini ve önemini kavrar.",
      "Osmanlı'nın Akdeniz ve Avrupa'daki üstünlüğünü değerlendirir.",
      "Klasik dönem yönetim ve toplum düzenini (tımar, devşirme, millet sistemi) tanır."
    ],
    [
      "Çaldıran Savaşı'nı Memlüklerle sanmak — doğrusu Safevilerle (Şah İsmail).",
      "Halifeliğin Fatih ile geçtiğini sanmak — Yavuz döneminde, 1517'de geçti.",
      "Mohaç (Macaristan) ile Viyana Kuşatması'nı karıştırmak; Viyana alınamadı.",
      "İnebahtı'yı zafer sanmak — ağır bir deniz yenilgisidir (donanma sonra yeniden yapıldı).",
      "Kapitülasyonların Kanuni ile 'sürekli' verildiğini sanmak — 1535 ayrıcalıkları 1740'ta süreklileşti."
    ],
    [
      { term: "İstanbul'un Fethi (1453)", def: "Fatih; Bizans sona erdi, Yeni Çağ başladı" },
      { term: "Çaldıran (1514)", def: "Yavuz; Safeviler (Şah İsmail) yenildi" },
      { term: "Ridaniye (1517)", def: "Memlükler yıkıldı; halifelik Osmanlı'ya geçti" },
      { term: "Mohaç (1526)", def: "Kanuni; Macaristan'ın büyük bölümü alındı" },
      { term: "Preveze (1538)", def: "Barbaros; Akdeniz Türk gölü oldu" },
      { term: "Kapitülasyon (1535)", def: "Fransa'ya verilen ticari ayrıcalıklar" }
    ]
  );
})();
