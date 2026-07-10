/* ============================================================
   SOSYAL / TARİH — Osmanlı ve sonrası DERİN konu anlatımı
   (Kuruluş → Klasik → Değişim → Modernleşme → 20. yy → Millî
   Mücadele → İnkılaplar → Politika → Çağdaş). Stub content'i EZER;
   sosyal-konu-tarih-detay2.js'ten SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-tarih-osmanli: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setContent(id, content) {
    var u = mevcut(id) || { id: id, branch: "tarih", reviewStatus: "draft", originalityStatement: true };
    u.content = content; u.reviewedAt = "2026-07-10"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  /* =============== tar-kurulus =============== */
  setContent("tar-kurulus",
    "<h2>Osmanlı Kuruluş ve Devletleşme</h2>" +

    "<h3>Kuruluş Ortamı: Neden Bir Uç Beyliği Devlet Oldu?</h3>" +
    "<p>Osmanlı Beyliği, 1299'da <b>Osman Bey</b> önderliğinde Söğüt-Domaniç çevresinde kuruldu. Osmanlılar, Oğuzların Bozok kolundan <b>Kayı boyu</b>na mensuptur. Beyliğin hızlı büyümesinin temel nedeni <b>uç beyliği</b> olmasıdır: Bizans sınırında bulunması sürekli fetih (gaza) imkânı verdi, bu da gaziler ve göçmen Türkmenler için beyliği bir cazibe merkezi yaptı. Bizans'ın taht kavgalarıyla zayıflaması, Anadolu beyliklerinin birbiriyle uğraşması ve Osmanlı'nın hoşgörülü <b>iskân (şenlendirme)</b> politikası da büyümeyi kolaylaştırdı.</p>" +

    "<h3>Osman ve Orhan Bey: Beylikten Devlete</h3>" +
    "<p><b>Osman Bey</b>, 1302 <b>Koyunhisar (Bafeus)</b> Savaşı'nda Bizans'ı yenerek ilk büyük zaferini kazandı. Oğlu <b>Orhan Bey</b> döneminde beylik gerçek bir devlete dönüştü: <b>Bursa</b> alınıp başkent yapıldı (1326), İznik ve İzmit fethedildi. Bu dönemde <b>ilk medrese</b> (İznik), <b>ilk düzenli ordu</b> (yaya ve müsellem), ilk divan ve ilk vezirlik kuruldu. <b>Karesioğulları</b> Beyliği'nin alınması (ilk beylik ilhakı) Osmanlı'ya <b>ilk donanmayı</b> ve denizci kadroyu kazandırdı; böylece 1353'te <b>Çimpe Kalesi</b> alınarak Rumeli'ye (Avrupa'ya) geçildi.</p>" +

    "<h3>I. Murad ve Yıldırım Bayezid</h3>" +
    "<p><b>I. Murad</b> döneminde Edirne fethedildi, <b>Yeniçeri Ocağı</b> ve <b>Pençik sistemi</b> (savaş esirlerinin beşte birinden asker alma) oluşturuldu, <b>Rumeli Beylerbeyliği</b> ve tımar sistemi geliştirildi. Balkanlarda <b>Sırpsındığı</b> ve <b>I. Kosova (1389)</b> zaferleri kazanıldı; I. Murad Kosova'da şehit oldu. <b>Yıldırım Bayezid</b>, 1396 <b>Niğbolu</b>'da Haçlıları yendi ve Anadolu Türk birliğini büyük ölçüde sağladı. Ancak 1402 <b>Ankara Savaşı</b>'nda <b>Timur</b>'a yenilip esir düştü.</p>" +

    "<h3>Fetret Devri ve Toparlanma</h3>" +
    "<p>Ankara Savaşı'nın ardından şehzadeler arasında taht mücadelesi yaşandı; bu döneme <b>Fetret Devri (1402-1413)</b> denir. Anadolu birliği bozuldu, yıkılan beylikler yeniden kuruldu ve İstanbul'un fethi gecikti. <b>Çelebi Mehmed (I. Mehmed)</b> devleti yeniden birleştirdiği için 'ikinci kurucu' sayılır; onun döneminde <b>Şeyh Bedreddin İsyanı</b> (dinî-sosyal nitelikli ilk büyük isyan) bastırıldı. <b>II. Murad</b> döneminde Balkanlarda <b>Varna (1444)</b> ve <b>II. Kosova (1448)</b> zaferleriyle Osmanlı hâkimiyeti pekişti ve İstanbul'un fethi için zemin hazırlandı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Yeniçeri Ocağı'nı Orhan Bey'e mal etmek yanlıştır; Orhan Bey <b>yaya-müsellem</b>i, I. Murad <b>Yeniçeri</b>yi kurdu.</li>" +
    "<li>Ankara Savaşı bir <b>yenilgidir</b>; Osmanlı Timur'a yenilmiştir.</li>" +
    "<li>İlk ilhak edilen beylik <b>Karesi</b>'dir ve önemi donanma/Rumeli geçişidir.</li>" +
    "</ul>");

  /* =============== tar-klasik =============== */
  setContent("tar-klasik",
    "<h2>Osmanlı Klasik Dönem</h2>" +

    "<h3>İstanbul'un Fethi (1453) ve Sonuçları</h3>" +
    "<p><b>II. Mehmed (Fatih)</b>, güçlü toplar döktürerek, <b>Rumeli Hisarı</b>'nı yaptırarak ve gemileri karadan <b>Haliç</b>'e indirerek 1453'te İstanbul'u fethetti. Sonuçları çağ değiştirecek kadar büyüktür: <b>Bizans İmparatorluğu sona erdi</b>, <b>Orta Çağ kapanıp Yeni Çağ başladı</b>, Ortodoks Patrikhanesi Osmanlı himayesine girdi ve topların surları yıkabildiğinin görülmesi Avrupa'da <b>feodaliteyi</b> zayıflattı. Ticaret yollarının Osmanlı denetimine girmesi, Avrupalıları yeni yollar aramaya iterek <b>Coğrafi Keşifler</b>i de tetikledi.</p>" +

    "<h3>Fatih ve II. Bayezid</h3>" +
    "<p>Fatih; <b>Otlukbeli (1473)</b>'nde Akkoyunlu Uzun Hasan'ı yendi, <b>Trabzon Rum İmparatorluğu</b>'nu (1461), Mora'yı, Kırım'ı ve pek çok bölgeyi aldı. Devlet düzenini <b>Kanunname-i Âl-i Osman</b> ile kurumsallaştırdı; merkezî otoriteyi güçlendirdi. Oğlu <b>II. Bayezid</b> döneminde kardeşi <b>Cem Sultan</b> ile taht mücadelesi yaşandı; bu olay Osmanlı iç işlerinin Avrupa siyasetine malzeme olmasına yol açtı.</p>" +

    "<h3>Yavuz Sultan Selim: Doğu'ya Yöneliş</h3>" +
    "<p><b>Yavuz Sultan Selim</b>, Safevi tehdidine karşı <b>Çaldıran (1514)</b>'da Şah İsmail'i yendi; <b>Turnadağ (1515)</b> ile Dulkadiroğulları'na son verdi. Memlük Devleti'ne karşı <b>Mercidabık (1516)</b> ve <b>Ridaniye (1517)</b> zaferleriyle Suriye, Mısır ve Hicaz Osmanlı'ya katıldı. Böylece <b>halifelik</b> Osmanlı'ya geçti ve padişah İslam dünyasının dinî lideri (halife) hâline geldi; kutsal emanetler İstanbul'a getirildi.</p>" +

    "<h3>Kanuni Sultan Süleyman: Zirve</h3>" +
    "<p><b>Kanuni</b> döneminde Osmanlı en geniş sınırlarına ve en güçlü dönemine ulaştı: <b>Belgrad (1521)</b>, <b>Rodos (1522)</b>, <b>Mohaç (1526)</b> ile Macaristan, <b>I. Viyana Kuşatması (1529)</b> ve denizde <b>Preveze (1538)</b> ile Akdeniz hâkimiyeti. İran'la ilk resmî antlaşma olan <b>Amasya Antlaşması (1555)</b> imzalandı. 1535'te <b>Fransa'ya kapitülasyon</b> verilerek Habsburglara (Şarlken'e) karşı Avrupa Hristiyan birliği bölünmek istendi.</p>" +

    "<h3>Klasik Dönem Kurumları</h3>" +
    "<p>Yönetimin merkezi <b>Divan-ı Hümayun</b>'du. Toprak yönetimi <b>tımar sistemi</b>ne dayanıyordu: tımarlı sipahi hem üretimi denetler hem atlı asker beslerdi. <b>Devşirme sistemi</b> ile toplanan çocuklar <b>Enderun</b>'da yetiştirilerek orduya ve yönetime alınırdı; bu, merkeze bağlı profesyonel bir kadro sağlardı. <b>Millet sistemi</b> ile farklı din ve topluluklara kendi hukuklarında serbestlik tanınırdı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Halifelik Fatih'e değil, <b>Yavuz</b>'a (1517) aittir.</li>" +
    "<li>Kapitülasyon <b>Kanuni-Fransa (1535)</b> ile başlar; fetih hazırlığı değildir.</li>" +
    "<li>Preveze bir <b>deniz</b> zaferidir ve <b>Akdeniz</b> hâkimiyetini pekiştirir.</li>" +
    "</ul>");

  /* =============== tar-degisim =============== */
  setContent("tar-degisim",
    "<h2>Değişim Çağında Osmanlı</h2>" +

    "<h3>Avrupa Değişiyor</h3>" +
    "<p>15-17. yüzyıllarda Avrupa köklü bir dönüşüm yaşadı: <b>Rönesans</b> (bilim-sanatta yenilenme), <b>Reform</b> (mezhep ayrılıkları), <b>Coğrafi Keşifler</b> (yeni ticaret yolları ve sömürgeler), <b>matbaanın</b> yaygınlaşması ve <b>bilim devrimi</b>. Avrupa'da güçlü <b>mutlak monarşiler</b> kuruldu. Osmanlı bu değişime aynı hızla ayak uyduramayınca zamanla askerî ve teknik alanda geri kalmaya başladı.</p>" +

    "<h3>Coğrafi Keşiflerin Osmanlı'ya Etkisi</h3>" +
    "<p>Keşiflerle Atlas Okyanusu ticareti önem kazandı; <b>İpek ve Baharat yolları</b> değer kaybetti, Osmanlı'nın <b>gümrük gelirleri</b> azaldı ve Akdeniz ticareti geriledi. Ayrıca Avrupa'ya giren ucuz altın-gümüş, Osmanlı'da <b>fiyat artışına (enflasyon)</b> yol açtı. Bu ekonomik sıkıntılar, <b>tımar sisteminin</b> bozulmasını hızlandırdı.</p>" +

    "<h3>Duraklamanın İç ve Dış Nedenleri</h3>" +
    "<p><b>İç nedenler:</b> merkezî otoritenin zayıflaması, <b>tımar</b> ve <b>kapıkulu (Yeniçeri)</b> ocaklarının bozulması, rüşvet-iltimas, saray masraflarının artması, yetersiz devlet adamları. <b>Dış nedenler:</b> Avrupa'nın bilim-teknik ve coğrafi keşiflerde ilerlemesi, imparatorluğun ulaşabileceği en geniş doğal sınırlara ulaşması. Bu ortamda Anadolu'da ekonomik-yönetsel kökenli <b>Celali İsyanları</b> ile İstanbul'da <b>Yeniçeri (kapıkulu) isyanları</b> çıktı.</p>" +

    "<h3>17. Yüzyıl: İsyanlar ve Toparlanma Çabaları</h3>" +
    "<p><b>II. Osman (Genç Osman)</b>, Yeniçeri Ocağı'nı ıslah etmek isteyince isyanla tahttan indirilip öldürülen ilk padişah oldu (1622). <b>IV. Murad</b>, isyanları sertçe bastırıp otoriteyi yeniden kurdu; <b>Bağdat'ı</b> geri aldı (1638) ve İran'la <b>Kasr-ı Şirin Antlaşması</b>'nı (1639) imzaladı; bu antlaşma bugünkü <b>Türkiye-İran sınırının</b> temelini oluşturur. Yüzyılın ortasında <b>Köprülüler</b> ailesinden sadrazamlar devleti bir süre toparladı ve Girit (Kandiye) Venedik'ten alındı.</p>" +

    "<h3>Batı Karşısında Dönüm: Zitvatorok'tan Karlofça'ya</h3>" +
    "<p><b>Zitvatorok Antlaşması (1606)</b> ile Avusturya karşısında Osmanlı'nın siyasi üstünlüğü sarsılmaya başladı. <b>II. Viyana Kuşatması (1683)</b> başarısızlıkla sonuçlanınca Avusturya, Lehistan, Venedik ve Rusya'dan oluşan <b>Kutsal İttifak</b> kuruldu. Uzun savaşların ardından imzalanan <b>Karlofça Antlaşması (1699)</b>, Osmanlı'nın ilk kez büyük ölçüde toprak kaybettiği antlaşmadır; bununla Osmanlı Batı karşısında <b>savunmaya</b> geçti ve <b>gerileme dönemi</b> başladı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Kasr-ı Şirin Avrupa'yla değil, <b>İran'la</b> (1639) yapılmıştır.</li>" +
    "<li>Karlofça (1699) bir <b>toprak kaybı</b> antlaşmasıdır; gerileme döneminin başlangıcıdır.</li>" +
    "<li>Coğrafi Keşifler Osmanlı hazinesini <b>zenginleştirmemiş</b>, aksine gelir kaybına yol açmıştır.</li>" +
    "</ul>");

  /* =============== tar-modern =============== */
  setContent("tar-modern",
    "<h2>19. Yüzyıl Osmanlı Modernleşmesi</h2>" +

    "<h3>İlk Adımlar: III. Selim ve II. Mahmud</h3>" +
    "<p><b>III. Selim</b>, Batı tarzı <b>Nizam-ı Cedid</b> ordusunu kurdu; ancak Kabakçı Mustafa İsyanı ile tahttan indirildi. <b>II. Mahmud</b> döneminde köklü reformlar yapıldı: 1808 <b>Sened-i İttifak</b> ile ayanların varlığı kabul edildi ve padişah yetkisi ilk kez sınırlandı; 1826 <b>Vaka-i Hayriye</b> ile bozulan <b>Yeniçeri Ocağı kaldırıldı</b> ve yerine <b>Asakir-i Mansure-i Muhammediye</b> kuruldu. Divan yerine <b>nazırlıklar</b> (bakanlıklar) kuruldu, ilk resmî gazete (Takvim-i Vekayi) çıkarıldı, yeni okullar açıldı. II. Mahmud reformlarının ortak amacı <b>merkezî otoriteyi güçlendirmek</b> ve devleti Batılı kurumlarla yeniden düzenlemekti.</p>" +

    "<h3>Tanzimat ve Islahat Fermanları</h3>" +
    "<p>1839 <b>Tanzimat Fermanı (Gülhane Hatt-ı Hümayunu)</b>, Abdülmecid döneminde Mustafa Reşid Paşa'nın öncülüğünde ilan edildi. Can, mal ve namus güvenliği, <b>kanun önünde eşitlik</b> ve vergi adaleti getirdi; padişah <b>ilk kez kendi yetkisini kanunla sınırladı</b>. 1856 <b>Islahat Fermanı</b> ise Kırım Savaşı sonrası Avrupa'nın baskısıyla ilan edildi ve özellikle <b>gayrimüslimlere Müslümanlarla eşit haklar</b> tanımaya odaklandı.</p>" +

    "<h3>Meşrutiyet: Anayasal Düzene Geçiş</h3>" +
    "<p>1876'da <b>I. Meşrutiyet</b> ilan edildi: II. Abdülhamid döneminde Mithat Paşa öncülüğünde ilk anayasa <b>Kanun-i Esasi</b> hazırlandı ve <b>Meclis-i Mebusan</b> açıldı. Ancak II. Abdülhamid, 1877-78 Osmanlı-Rus Savaşı'nı (93 Harbi) bahane ederek Meclis'i kapattı; uzun bir <b>istibdat (mutlakiyet)</b> dönemi başladı. 1908'de İttihat ve Terakki'nin baskısıyla <b>II. Meşrutiyet</b> ilan edildi.</p>" +

    "<h3>Dağılma Döneminde Dış Baskılar</h3>" +
    "<p>Avrupa'nın Osmanlı'yı paylaşma/Balkanlardan çıkarma siyasetine <b>Şark Meselesi</b> denir. <b>Milliyetçilik</b> akımı azınlık isyanlarını körükledi; Sırbistan ve Yunanistan bağımsızlaştı. <b>Kırım Savaşı (1853-56)</b>'nda Osmanlı, İngiltere ve Fransa'yla Rusya'ya karşı savaştı; <b>Paris Antlaşması (1856)</b> ile bir Avrupa devleti sayıldı, ancak ilk kez <b>dış borç (1854)</b> aldı. 1877-78 <b>93 Harbi</b>'ndeki ağır yenilgi, Ayastefanos'un ardından <b>Berlin Antlaşması (1878)</b> ile Balkanlarda büyük toprak kaybına yol açtı.</p>" +

    "<h3>Fikir Akımları</h3>" +
    "<p>Devleti kurtarmak için farklı çözümler önerildi: <b>Osmanlıcılık</b> (tüm unsurları eşit Osmanlı yurttaşı yaparak birlik), <b>İslamcılık</b> (halife etrafında Müslüman birliği), <b>Türkçülük</b> (Türk milliyetçiliğine dayalı birlik) ve <b>Batıcılık</b> (Batı kurumlarını benimseme). Bu çabalar Batı tarzı kurumlar oluşturdu, ancak devletin <b>dağılması önlenemedi</b>.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Yeniçeri Ocağı'nı kaldıran <b>II. Mahmud</b>'dur (Vaka-i Hayriye, 1826).</li>" +
    "<li>İlk anayasa <b>Kanun-i Esasi</b> (1876); Tanzimat bir ferman, anayasa değildir.</li>" +
    "<li>Islahat Fermanı özellikle <b>gayrimüslim</b> hakları üzerinedir ve dış baskıyla ilan edilmiştir.</li>" +
    "</ul>");

  /* =============== tar-20yy =============== */
  setContent("tar-20yy",
    "<h2>20. Yüzyıl Başlarında Osmanlı</h2>" +

    "<h3>II. Meşrutiyet ve 31 Mart Olayı</h3>" +
    "<p>1908'de <b>İttihat ve Terakki</b>'nin baskısıyla <b>II. Meşrutiyet</b> ilan edildi ve Meclis yeniden açıldı. 1909'daki <b>31 Mart Olayı</b>, meşrutiyet yönetimine karşı bir ayaklanmaydı; Selanik'ten gelen <b>Hareket Ordusu</b> isyanı bastırdı, <b>II. Abdülhamid tahttan indirildi</b> ve yerine <b>V. Mehmed Reşad</b> geçti. Böylece İttihatçıların gücü arttı.</p>" +

    "<h3>Trablusgarp ve Balkan Savaşları</h3>" +
    "<p><b>Trablusgarp Savaşı (1911-12)</b>, İtalya'nın Kuzey Afrika'daki Osmanlı toprağına saldırmasıyla başladı. Osmanlı bölgeye deniz ve karadan yardım gönderemedi (donanma zayıftı, Mısır İngiliz denetimindeydi); Mustafa Kemal gibi subaylar gönüllü olarak direniş örgütledi. <b>Uşi (Ouchy) Antlaşması</b> ile Trablusgarp ve Bingazi İtalya'ya bırakıldı; bu ilk <b>Afrika toprağı kaybı</b>dır. Hemen ardından <b>Balkan Savaşları (1912-13)</b> çıktı: I. Balkan Savaşı'nda Bulgaristan, Sırbistan, Karadağ ve Yunanistan karşısında Osmanlı ağır yenildi ve <b>Edirne</b>'yi kaybetti. II. Balkan Savaşı'nda ise müttefikler Bulgaristan'a karşı savaşınca Osmanlı <b>Edirne'yi geri aldı</b>. Bu savaşlar sırasında <b>Arnavutluk</b> bağımsızlığını ilan etti.</p>" +

    "<h3>I. Dünya Savaşı'na Giriş</h3>" +
    "<p>Osmanlı, kaybettiği toprakları geri almak ve Almanya'nın gücüne güvenmek gibi nedenlerle <b>İttifak Devletleri</b> (Almanya) yanında savaşa yöneldi. Almanya'dan gelen <b>Goeben ve Breslau</b> gemileri <b>Yavuz ve Midilli</b> adıyla Osmanlı donanmasına katıldı; bu gemilerin <b>Rus limanlarını bombalaması</b> üzerine Osmanlı fiilen savaşa girdi (1914). Almanya'nın amacı, yeni cepheler açtırarak İtilaf Devletleri'nin (özellikle İngiltere ve Rusya) gücünü bölmekti.</p>" +

    "<h3>Cepheler ve Çanakkale</h3>" +
    "<p>Osmanlı birçok cephede savaştı: <b>Kafkas</b> (Sarıkamış Harekâtı ağır kayıpla sonuçlandı), <b>Kanal</b> (başarısız), <b>Irak</b> (Kut'ül Amare zaferi), <b>Filistin-Suriye</b>, <b>Hicaz-Yemen</b> ve müttefiklere yardım amaçlı <b>Galiçya, Makedonya, Romanya</b> cepheleri. En önemlisi <b>Çanakkale (1915)</b> oldu: hem denizde hem karada düşman durduruldu. Kara savaşlarında <b>Mustafa Kemal</b>, Anafartalar-Conkbayırı-Arıburnu'nda gösterdiği başarıyla ün kazandı. Çanakkale zaferi savaşı uzattı ve müttefiklerin Rusya'ya yardım ulaştırmasını engelledi.</p>" +

    "<h3>Savaşın Sonu: Mondros</h3>" +
    "<p>İttifak Devletleri yenilince Osmanlı da <b>30 Ekim 1918 Mondros Ateşkes Antlaşması</b>'nı imzaladı. Fiilen bir teslim belgesi olan Mondros, ağır maddeleriyle (özellikle 7. madde) <b>işgallere zemin</b> hazırladı ve Millî Mücadele'nin başlamasına yol açtı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Edirne, I. Balkan Savaşı'nda <b>kaybedildi</b>, II. Balkan Savaşı'nda <b>geri alındı</b>.</li>" +
    "<li>Osmanlı savaşa <b>Almanya (İttifak)</b> yanında, Yavuz-Midilli'nin Rus limanlarını bombalamasıyla girdi.</li>" +
    "<li>Çanakkale bir <b>savunma zaferidir</b>; Mustafa Kemal burada ün kazanmıştır.</li>" +
    "</ul>");

  /* =============== tar-milli =============== */
  setContent("tar-milli",
    "<h2>Millî Mücadele</h2>" +

    "<h3>Başlangıç: Samsun ve Genelgeler</h3>" +
    "<p>Mondros sonrası başlayan işgallere karşı Mustafa Kemal, <b>19 Mayıs 1919</b>'da Samsun'a çıkarak Millî Mücadele'yi fiilen başlattı. <b>Amasya Genelgesi (22 Haziran 1919)</b>, mücadelenin <b>gerekçe, amaç ve yöntemini</b> ilk kez açıkladı: 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir. Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.' Bu yönüyle bir bağımsızlık (ihtilal) bildirisidir.</p>" +

    "<h3>Kongreler</h3>" +
    "<p><b>Erzurum Kongresi (Temmuz 1919)</b> bölgesel toplanmasına rağmen millî nitelikte kararlar aldı; <b>manda ve himaye ilk kez reddedildi</b> ve 'Millî sınırlar içinde vatan bir bütündür, bölünemez' ilkesi benimsendi. <b>Sivas Kongresi (Eylül 1919)</b> millî nitelikliydi: tüm millî cemiyetler <b>Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti</b> çatısında birleştirildi ve manda kesin olarak reddedildi. <b>Misak-ı Millî (28 Ocak 1920)</b>, son Osmanlı Mebusan Meclisi'nce kabul edildi; bu, İstanbul'un işgaline ve Meclis'in kapatılmasına yol açtı.</p>" +

    "<h3>TBMM'nin Açılması</h3>" +
    "<p>İstanbul'un işgali üzerine <b>23 Nisan 1920</b>'de Ankara'da <b>TBMM</b> açıldı; egemenliğin kayıtsız şartsız millete ait olduğu ilkesiyle yeni bir devletin temeli atıldı. İtilaf Devletleri'nin Osmanlı'ya dayattığı ağır <b>Sevr Antlaşması (1920)</b> TBMM tarafından tanınmadı.</p>" +

    "<h3>Cepheler ve Antlaşmalar</h3>" +
    "<p><b>Doğu Cephesi:</b> Kâzım Karabekir komutasında Ermenilere karşı kazanılan başarı <b>Gümrü Antlaşması (1920)</b> ile taçlandı; bu TBMM'nin ilk siyasi-askerî başarısıdır. <b>Güney Cephesi:</b> Fransızlara karşı <b>Maraş, Antep ve Urfa</b> halkı Kuvâ-yı Milliye ile direndi; cephe <b>Ankara Antlaşması (1921)</b> ile kapandı. <b>Batı Cephesi:</b> Yunanlılara karşı düzenli ordu kuruldu.</p>" +

    "<h3>Batı Cephesi Zaferleri</h3>" +
    "<p><b>I. İnönü (Ocak 1921)</b>, düzenli ordunun ilk zaferidir; bu dönemde <b>Teşkilat-ı Esasiye (ilk anayasa)</b> ve <b>İstiklal Marşı (12 Mart 1921)</b> kabul edildi, Londra Konferansı ve Moskova Antlaşması yaşandı. <b>II. İnönü</b> ve <b>Kütahya-Eskişehir</b> muharebelerinin ardından <b>Sakarya Meydan Muharebesi (1921)</b> kazanıldı; bu son büyük savunma savaşıdır, Yunan taarruzu durdu ve Mustafa Kemal'e <b>Gazi ve Mareşal</b> unvanları verildi. Ardından Kars ve Ankara antlaşmaları imzalandı. <b>Büyük Taarruz (26 Ağustos 1922)</b> ile Yunan ordusu bozguna uğratıldı ve <b>9 Eylül 1922</b>'de İzmir'e girildi.</p>" +

    "<h3>Zaferin Tamamlanması</h3>" +
    "<p><b>Mudanya Ateşkes Antlaşması (11 Ekim 1922)</b> ile savaş sona erdi ve Doğu Trakya savaşsız geri alındı. Askerî zaferler, <b>Lozan Barış Antlaşması (24 Temmuz 1923)</b> ile diplomatik olarak taçlanarak Türkiye'nin bağımsızlığı uluslararası düzeyde tanındı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Manda ve himaye <b>ilk kez Erzurum</b>'da reddedildi, Sivas'ta kesinleşti.</li>" +
    "<li>Sakarya bir <b>savunma</b>, Büyük Taarruz ise <b>taarruz</b> zaferidir.</li>" +
    "<li>TBMM Sevr'i <b>tanımamış</b>, mücadeleyi sürdürmüştür.</li>" +
    "</ul>");

  /* =============== tar-inkilap =============== */
  setContent("tar-inkilap",
    "<h2>Atatürk İlke ve İnkılapları</h2>" +

    "<h3>Siyasi Alanda İnkılaplar</h3>" +
    "<p>Millî egemenliği yerleştirmek için önce <b>saltanat kaldırıldı (1 Kasım 1922)</b>, ardından <b>Cumhuriyet ilan edildi (29 Ekim 1923)</b> ve <b>halifelik kaldırıldı (3 Mart 1924)</b>. Böylece egemenlik tümüyle millete geçti ve laik bir devlet düzeninin önü açıldı. Çok partili hayata geçiş için <b>Terakkiperver Cumhuriyet Fırkası (1924)</b> ve <b>Serbest Cumhuriyet Fırkası (1930)</b> denemeleri yapıldı.</p>" +

    "<h3>Hukuk Alanında İnkılaplar</h3>" +
    "<p>1926'da kabul edilen <b>Türk Medeni Kanunu</b>, kadın-erkek eşitliği, tek eşlilik, resmî nikâh ve mirasta eşitlik gibi düzenlemelerle toplumsal hayatı çağdaşlaştırdı. Kadınlara belediye (1930), muhtarlık (1933) ve <b>milletvekili seçme-seçilme (1934)</b> hakları tanındı.</p>" +

    "<h3>Eğitim ve Kültür İnkılapları</h3>" +
    "<p><b>Tevhid-i Tedrisat Kanunu (1924)</b> ile eğitim tek çatı altında birleştirildi. <b>Harf İnkılabı (1928)</b> ile yeni Türk harfleri kabul edildi; okuma-yazma kolaylaştı. <b>Türk Tarih Kurumu (1931)</b> ve <b>Türk Dil Kurumu (1932)</b> kuruldu; bu çalışmalar <b>milliyetçilik</b> ilkesiyle yakından ilişkilidir.</p>" +

    "<h3>Toplumsal ve Ekonomik İnkılaplar</h3>" +
    "<p><b>Şapka Kanunu (1925)</b>, <b>tekke ve zaviyelerin kapatılması (1925)</b>, takvim-saat-ölçü birimlerinin değiştirilmesi ve <b>Soyadı Kanunu (1934)</b> toplumsal hayatı düzenledi. Ekonomide <b>İzmir İktisat Kongresi (1923)</b> ile millî ve bağımsız ekonomi hedeflendi; <b>aşar vergisi kaldırıldı (1925)</b>, <b>Kabotaj Kanunu (1926)</b> ile Türk karasularında taşımacılık hakkı Türklere verildi. 1929 dünya ekonomik bunalımı sonrası <b>devletçilik</b> uygulanarak devlet eliyle sanayileşmeye (Beş Yıllık Sanayi Planı, 1934) geçildi.</p>" +

    "<h3>Atatürk İlkeleri</h3>" +
    "<p>Altı temel ilke: <b>Cumhuriyetçilik</b> (millî egemenlik ve cumhuriyet yönetimi), <b>Milliyetçilik</b> (ulus temelli birlik), <b>Halkçılık</b> (kanun önünde eşitlik, ayrıcalıksızlık), <b>Devletçilik</b> (ekonomide devlet öncülüğü), <b>Laiklik</b> (din ve devlet işlerinin ayrılması) ve <b>İnkılapçılık</b> (sürekli yenilenme). Bu ilkeler <b>1937'de anayasaya</b> girmiştir. Bütünleyici ilkeler arasında millî egemenlik, millî birlik-beraberlik, çağdaşlık, bilimsellik ve 'yurtta sulh cihanda sulh' yer alır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Saltanat (1922) ve halifelik (1924) <b>farklı tarihlerde</b> kaldırıldı.</li>" +
    "<li>Kabotaj bir <b>ekonomik</b> inkılaptır; laiklikle ilgili değildir.</li>" +
    "<li>TDK ve TTK çalışmaları <b>milliyetçilik</b> ilkesiyle ilişkilidir.</li>" +
    "</ul>");

  /* =============== tar-politika =============== */
  setContent("tar-politika",
    "<h2>Atatürk Dönemi İç ve Dış Politika</h2>" +

    "<h3>İç Politika</h3>" +
    "<p>13 Ekim 1923'te <b>Ankara başkent</b> oldu. Yeni rejim bazı iç tehditlerle karşılaştı: <b>Şeyh Sait İsyanı (1925)</b> laiklik ve cumhuriyet karşıtı bir hareketti; bastırıldıktan sonra <b>Takrir-i Sükun Kanunu (1925)</b> çıkarıldı ve <b>Terakkiperver Cumhuriyet Fırkası</b> isyanla ilişkilendirilerek kapatıldı. <b>İzmir Suikastı (1926)</b>, Atatürk'e yönelik bir suikast girişimiydi. <b>Serbest Cumhuriyet Fırkası (1930)</b> çok partili hayat denemesi olarak kuruldu ancak kısa sürede kapandı. Aynı yıl <b>Menemen Olayı (1930)</b>'nda laiklik karşıtları Öğretmen Kubilay'ı şehit etti. Bu olaylar, toplumun henüz çok partili düzene hazır olmadığını gösterdi.</p>" +

    "<h3>Dış Politika: Lozan'dan Kalan Sorunlar</h3>" +
    "<p><b>Musul Meselesi</b>, İngiltere'nin baskısı ve Şeyh Sait İsyanı'nın Türkiye'yi meşgul etmesi nedeniyle <b>1926 Ankara Antlaşması</b> ile Musul'un Irak'a (İngiltere denetimine) bırakılmasıyla sonuçlandı. <b>Nüfus Mübadelesi</b>'nde İstanbul Rumları ile Batı Trakya Türklerinin durumuna ilişkin <b>Etabli (yerleşik) sorunu</b> yaşandı ve 1930'da Türk-Yunan yakınlaşmasıyla çözüldü. Yabancı okullar ve Osmanlı borçları gibi sorunlar da çözüme kavuşturuldu.</p>" +

    "<h3>Barış ve Güvenlik Politikaları</h3>" +
    "<p>Türkiye <b>1932'de Milletler Cemiyeti'ne</b> üye oldu; bu, uluslararası saygınlığını ve barış politikasını gösterir. <b>Balkan Antantı (1934)</b>, Yunanistan, Romanya ve Yugoslavya ile İtalya'nın yayılmacılığına karşı kuruldu. <b>Sadabat Paktı (1937)</b> ise İran, Irak ve Afganistan ile doğu sınırının güvenliğini amaçladı. <b>Montrö Boğazlar Sözleşmesi (1936)</b> ile Lozan'daki Boğazlar Komisyonu kaldırıldı ve Boğazlar üzerinde <b>tam Türk egemenliği</b> sağlandı. <b>Hatay</b>, 1938'de bağımsız devlet olarak kuruldu ve 1939'da Türkiye'ye katıldı.</p>" +

    "<h3>Temel İlke</h3>" +
    "<p>Atatürk dönemi dış politikası <b>'Yurtta sulh, cihanda sulh'</b> anlayışıyla barışçı, bağımsızlıkçı ve gerçekçi bir çizgide yürütülmüş; Lozan'dan kalan sorunlar büyük ölçüde barışçı yollarla çözülmüştür.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Musul, <b>Irak'a (İngiltere'ye)</b> bırakılmıştır; Türkiye'ye katılmamıştır.</li>" +
    "<li>Montrö (1936) Boğazlarda <b>Türk egemenliğini</b> güçlendirmiştir.</li>" +
    "<li>Balkan Antantı ve Sadabat Paktı <b>güvenlik</b> amaçlı bölgesel ittifaklardır.</li>" +
    "</ul>");

  /* =============== tar-cagdas =============== */
  setContent("tar-cagdas",
    "<h2>Çağdaş Türk ve Dünya Tarihi</h2>" +

    "<h3>II. Dünya Savaşı ve Türkiye</h3>" +
    "<p>Türkiye, II. Dünya Savaşı'nda (1939-45) İnönü'nün dengeli politikasıyla büyük ölçüde <b>savaş dışı</b> kaldı. Savaşın sonuna doğru (Şubat 1945) Almanya ve Japonya'ya savaş ilan etti; bunun temel nedeni <b>Birleşmiş Milletler'e kurucu üye</b> olabilmekti. Türkiye 1945'te BM'ye kurucu üye oldu.</p>" +

    "<h3>Çok Partili Hayata Geçiş</h3>" +
    "<p>Savaş sonrası dünyada demokrasi eğiliminin güçlenmesiyle Türkiye çok partili hayata geçti. 1946'da <b>Demokrat Parti</b> (Celal Bayar ve Adnan Menderes) kuruldu ve <b>1950 seçimlerini</b> kazanarak iktidara geldi. Bu dönemde <b>Truman Doktrini (1947)</b> ve <b>Marshall Yardımı</b> ile ABD, SSCB tehdidine karşı Türkiye ve Yunanistan'a destek verdi; Türkiye <b>Kore Savaşı</b>'na asker göndererek <b>NATO üyeliğini (1952)</b> kolaylaştırdı.</p>" +

    "<h3>Soğuk Savaş Dünyası</h3>" +
    "<p>II. Dünya Savaşı sonrası dünya iki kutba bölündü: <b>Batı Bloğu (ABD öncülüğünde NATO, 1949)</b> ve <b>Doğu Bloğu (SSCB öncülüğünde Varşova Paktı, 1955)</b>. Bu gerginlik dönemine <b>Soğuk Savaş</b> denir. <b>Berlin Duvarı (1961)</b> bu bölünmenin simgesiydi; 1989'da yıkılması Soğuk Savaş'ın sona ermesinin işareti oldu. <b>SSCB'nin 1991'de dağılması</b> ile Soğuk Savaş sona erdi.</p>" +

    "<h3>Türkiye'de Askerî Müdahaleler ve Kıbrıs</h3>" +
    "<p>Türkiye'de demokratik gelişim kesintilere uğradı: <b>27 Mayıs 1960</b> darbesiyle Demokrat Parti iktidarı devrildi (1961 Anayasası), <b>12 Mart 1971</b> muhtırası ve <b>12 Eylül 1980</b> darbesi (1982 Anayasası) yaşandı. Dış politikada Rumların Ada'yı Yunanistan'a bağlama (Enosis) girişimi ve Türklere yönelik saldırılar üzerine <b>1974 Kıbrıs Barış Harekâtı</b> düzenlendi.</p>" +

    "<h3>Avrupa Birliği Süreci</h3>" +
    "<p>Türkiye-AB ilişkileri uzun bir süreçtir: <b>Ankara Anlaşması (1963)</b> ortaklık ilişkisini başlattı, <b>Gümrük Birliği (1995)</b> yürürlüğe girdi ve Türkiye <b>1999'da adaylık</b> statüsü kazandı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Türkiye BM'ye <b>1945</b>'te kurucu üye, NATO'ya <b>1952</b>'de üye olmuştur.</li>" +
    "<li>NATO Batı, <b>Varşova Paktı</b> Doğu bloğunu temsil eder.</li>" +
    "<li>27 Mayıs (1960) ve 12 Eylül (1980) askerî darbelerdir; yeni anayasalara yol açmıştır.</li>" +
    "</ul>");

})();
