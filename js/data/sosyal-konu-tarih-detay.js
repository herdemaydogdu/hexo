/* ============================================================
   SOSYAL / TARİH — DERİN konu anlatımı (özet değil, öğreten metin)
   Bu dosya, ilgili ünitelerin content'ini kapsamlı sürümle EZER
   (sosyal-konu-tarih.js'ten SONRA yüklenir). Tümü özgün.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-tarih-detay: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var s = null, D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setContent(id, content) {
    var u = mevcut(id) || { id: id, branch: "tarih", reviewStatus: "draft", originalityStatement: true };
    u.content = content; u.reviewedAt = "2026-07-02";
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  setContent("tar-turkislam",
    "<h2>İlk Türk-İslam Devletleri</h2>" +

    "<h3>Türkler İslamiyet'i Nasıl Kabul Etti?</h3>" +
    "<p>Türklerin İslamiyet'le tanışması Emeviler döneminde başladı. Ancak Emevilerin, Arap olmayan Müslümanları (mevali) ikinci sınıf gören politikası, Türklerin İslam'a toplu geçişini geciktirdi. Asıl dönüm noktası <b>751 Talas Savaşı</b>'dır: Bu savaşta Abbasiler, Çin (Tang) ordusuna karşı Karluk Türklerinin desteğiyle kazandı. Sonrasında Abbasilerin eşitlikçi tutumu ve Türklere devlet ile ordu kademelerinde yer vermesi iki toplumu yakınlaştırdı; Türkler X. yüzyıldan itibaren <b>kitleler hâlinde</b> Müslüman oldu.</p>" +
    "<p>İslamiyet'in, Türklerin eski yaşayışına uygun yönleri bu geçişi kolaylaştırdı: <b>Gök Tanrı</b> inancındaki tek tanrı fikri tevhide; <b>alp</b> (yiğit-savaşçı) anlayışı <b>gaza-cihat</b> ruhuna; ahiret ve kurgan inancı İslam'ın öbür dünya anlayışına yakındı. Böylece Türkler kısa sürede İslam dünyasının en güçlü savunucusu hâline geldi.</p>" +

    "<h3>Karahanlılar (840-1212)</h3>" +
    "<p>Orta Asya'da Balasagun ve Kaşgar çevresinde kuruldu. Hükümdar <b>Satuk Buğra Han</b>'ın İslamiyet'i kabul etmesiyle <b>ilk Müslüman Türk devleti</b> oldu. En ayırt edici özelliği, İslam'ı benimsemesine rağmen <b>Türkçeyi resmî dil</b> olarak kullanması ve Türk töresini korumasıdır. Bu yönüyle Karahanlılar, millî benliğini en iyi koruyan Türk-İslam devleti sayılır ve Türk-İslam kültürünün temelini atmıştır.</p>" +
    "<p>İlk Türk-İslam edebî eserleri bu dönemde yazıldı:</p>" +
    "<ul>" +
    "<li><b>Kutadgu Bilig (Yusuf Has Hacib):</b> 'Mutluluk veren bilgi' demektir; ideal devlet ve toplum düzenini anlatan bir <b>siyasetname</b>dir.</li>" +
    "<li><b>Divanü Lugati't-Türk (Kaşgarlı Mahmud):</b> Türkçenin zenginliğini Araplara göstermek için yazılmış ilk <b>Türkçe sözlük ve dil bilgisi</b> kitabıdır; Türk boyları hakkında da bilgi verir.</li>" +
    "<li><b>Atabetü'l-Hakayık (Edip Ahmet):</b> Ahlak ve öğüt işleyen didaktik bir eserdir.</li>" +
    "<li><b>Divan-ı Hikmet (Ahmet Yesevi):</b> Tasavvufu ve İslam'ı Türklere sade bir dille anlatır.</li>" +
    "</ul>" +
    "<p>Karahanlılar kervansaray, ribat ve medreselerle ticareti ve eğitimi geliştirdi; zamanla Doğu ve Batı olarak ikiye ayrılıp yıkıldı.</p>" +

    "<h3>Gazneliler (963-1187)</h3>" +
    "<p>Afganistan'daki Gazne şehrinde Alp Tegin tarafından kuruldu; en parlak dönemini <b>Gazneli Mahmud</b> zamanında yaşadı. Gazneli Mahmud, Abbasi halifesini koruduğu için halifeden <b>'Sultan' unvanını ilk kez alan</b> Türk hükümdarı oldu; bu unvan, halifeden bağımsız güçlü bir hükümdarlığın simgesiydi. <b>Hindistan'a çok sayıda sefer</b> düzenleyerek İslamiyet'i Hindistan'a yaydı.</p>" +
    "<p>Gazneliler; Türk, Fars, Arap, Hint ve Afgan halklarını bir arada barındıran <b>çok uluslu</b> bir devletti. Bu yapı kültürel açıdan zengin olsa da millî birliği zayıflattı ve Oğuzlarla (Türkmenler) yaşanan gerginlikte devleti güçsüz bıraktı. Sarayda Farsça-Arapça öne çıktı. Gazneliler 1040'ta Selçuklulara yenilerek Horasan'ı kaybetti ve zamanla yıkıldı.</p>" +

    "<h3>Büyük Selçuklu Devleti (1040-1157)</h3>" +
    "<p>Oğuzların <b>Kınık</b> boyundan gelen Selçuklular adını Selçuk Bey'den alır. <b>Tuğrul ve Çağrı Bey</b> önderliğinde Horasan'a yerleşip Gaznelilerle mücadeleye girdiler.</p>" +
    "<ul>" +
    "<li><b>Dandanakan Savaşı (1040):</b> Gazneliler kesin yenilgiye uğratıldı; <b>Büyük Selçuklu Devleti resmen kuruldu</b> ve Tuğrul Bey sultan ilan edildi.</li>" +
    "<li><b>Bağdat Seferi (1055):</b> Tuğrul Bey, halifeyi baskı altında tutan Şii Büveyhoğullarına son verdi. Halifeyi koruması, Selçukluları <b>Sünni İslam dünyasının koruyucusu ve lideri</b> yaptı.</li>" +
    "<li><b>Malazgirt Savaşı (1071):</b> Sultan <b>Alparslan</b>, Bizans İmparatoru Romen Diyojen'i yendi. Bu zaferle <b>Anadolu'nun kapısı Türklere açıldı</b>; Anadolu'nun Türkleşmesi ve İslamlaşması başladı. Malazgirt, Haçlı Seferleri'ne giden yolda da dönüm noktasıdır.</li>" +
    "</ul>" +
    "<p><b>Melikşah</b> döneminde devlet en geniş sınırlarına ulaştı. Bu dönemin asıl mimarı ünlü vezir <b>Nizamülmülk</b>'tür:</p>" +
    "<ul>" +
    "<li><b>Nizamiye Medreseleri</b>ni kurdu; hem bilim insanı ve devlet memuru yetiştirdi hem de Batınilik-Şii propagandasına karşı <b>Sünni eğitim</b> verdi.</li>" +
    "<li><b>İkta sistemi</b>ni geliştirdi: Toprağın geliri, hizmet ve asker karşılığında görevlilere verildi. Böylece üretim sürdü, hazineye yük olmadan güçlü ordu beslendi, taşra düzenli yönetildi. Bu sistem Osmanlı'daki <b>tımarın öncüsü</b>dür.</li>" +
    "<li>Devlet yönetimi üzerine ünlü <b>Siyasetname</b> adlı eseri yazdı.</li>" +
    "</ul>" +
    "<p>Melikşah döneminde <b>Celali takvimi</b> hazırlandı. Onun ölümünden sonra taht kavgaları ve Hasan Sabbah'ın <b>Batınileri</b>nin suikastları devleti sarstı; <b>Katvan Savaşı (1141)</b>'nda Karahitaylara yenilmek çöküşü hızlandırdı. Son güçlü hükümdar <b>Sultan Sencer</b>'in ardından Oğuz isyanlarıyla devlet dağıldı.</p>" +
    "<p>Selçuklu mirası büyüktür: Anadolu Selçuklu Devleti, atabeylikler ve nihayet Osmanlı, Selçuklu devlet geleneği (ikta, medrese, divan) üzerine kuruldu.</p>" +

    "<h3>Sınav İçin Kritik Ayrımlar</h3>" +
    "<ul>" +
    "<li>İlk Müslüman Türk devleti = <b>Karahanlılar</b> (Gazneli/Selçuklu değil).</li>" +
    "<li>'Sultan' unvanını ilk kullanan = <b>Gazneli Mahmud</b> (Tuğrul Bey değil).</li>" +
    "<li><b>Dandanakan (1040)</b> → Gaznelilere karşı, devlet kuruldu. <b>Malazgirt (1071)</b> → Bizans'a karşı, Anadolu açıldı.</li>" +
    "<li>Türkçeyi en çok koruyan = <b>Karahanlılar</b>; en çok yabancı kültür etkisinde kalan = <b>Gazneliler</b>.</li>" +
    "</ul>"
  );

  setContent("tar-bilim",
    "<h2>Tarih Bilimi ve Zaman</h2>" +
    "<h3>Tarih Nedir?</h3>" +
    "<p>Tarih; geçmişteki insan topluluklarının siyasi, sosyal, ekonomik, kültürel ve dinî faaliyetlerini <b>yer ve zaman göstererek</b>, <b>neden-sonuç</b> ilişkisi içinde ve <b>belgelere dayanarak</b> inceleyen bir bilimdir. Tarih yalnızca 'ne oldu' sorusuna değil, 'neden oldu, sonucunda ne değişti' sorularına da yanıt arar. Bu yüzden tarih öğrenmek olayları ezberlemek değil, aralarındaki bağı kurmaktır.</p>" +
    "<h3>Tarih Biliminin Özellikleri</h3>" +
    "<p>Tarihin kendine özgü bir yöntemi vardır ve bu onu fen bilimlerinden ayırır:</p>" +
    "<ul>" +
    "<li><b>Deney ve gözlem yapılamaz:</b> Olaylar geçmişte bir kez yaşanmış ve <b>tekrarlanamaz</b> olduğundan laboratuvara taşınamaz. Tarihçi olayı yeniden yaşayamaz, ancak <b>belgeleri</b> yorumlar.</li>" +
    "<li><b>Yer ve zaman şarttır:</b> Bir olayın nerede ve ne zaman geçtiği bilinmezse doğru değerlendirilemez.</li>" +
    "<li><b>Neden-sonuç ilişkisi:</b> Her olayın nedenleri ve sonuçları vardır; olaylar birbirini tetikler.</li>" +
    "<li><b>Objektiflik (tarafsızlık):</b> Tarihçi; milliyetini, dinini veya duygularını karıştırmadan, olayı <b>kendi döneminin koşulları içinde</b> değerlendirmelidir. Günümüz ölçütleriyle geçmişi yargılamak yanlış sonuç doğurur.</li>" +
    "</ul>" +
    "<h3>Tarihin Kaynakları</h3>" +
    "<p>Tarih kaynaklara dayanır ve kaynaklar iki açıdan sınıflandırılır:</p>" +
    "<ul>" +
    "<li><b>Türüne göre:</b> <b>Yazılı</b> (ferman, kitabe, kanun, gazete, mektup), <b>sözlü</b> (destan, efsane, atasözü) ve <b>kalıntı/arkeolojik</b> (sikke, mezar, silah, çanak-çömlek).</li>" +
    "<li><b>Döneme göre:</b> <b>Birincil (ana) kaynak</b> olayın yaşandığı döneme aittir ve en güvenilirdir. <b>İkincil kaynak</b> ise sonradan, birincil kaynaklardan yararlanılarak üretilir (bugün yazılan bir tarih kitabı gibi).</li>" +
    "</ul>" +
    "<h3>Tarihe Yardımcı Bilimler</h3>" +
    "<p>Tarihçi tek başına çalışamaz; birçok bilimden yararlanır:</p>" +
    "<ul>" +
    "<li><b>Arkeoloji:</b> Kazılarla toprak altındaki kalıntıları çıkarır; yazısız dönemler için hayatidir.</li>" +
    "<li><b>Paleografya:</b> Eski yazı türlerini okur. <b>Epigrafya:</b> taş/mermer üzerindeki kitabeleri inceler.</li>" +
    "<li><b>Nümizmatik:</b> Eski paraları inceler; ekonomiyi ve hükümdarları aydınlatır.</li>" +
    "<li><b>Kronoloji:</b> Zamanı, sırayı ve takvimleri inceler. <b>Diplomatik:</b> ferman-berat gibi resmî belgeleri.</li>" +
    "<li><b>Etnografya:</b> örf-âdet ve kültürü; <b>Heraldik:</b> arma-mühürleri; <b>Filoloji:</b> dilleri; <b>Antropoloji:</b> insan ırklarını inceler.</li>" +
    "</ul>" +
    "<h3>Zaman ve Takvim</h3>" +
    "<p><b>1 yüzyıl (asır) = 100 yıl</b>'dır. Bir yılın hangi yüzyılda olduğu yüzler basamağına bakılarak bulunur; örneğin 1453 yılı 15. yüzyıldadır (1401-1500 arası). Takvimler iki temele dayanır: <b>Güneş yılı</b> (~365 gün: Mısır, Miladi, 12 Hayvanlı Türk, Celali) ve <b>Ay yılı</b> (~354 gün: Sümer/Babil, Hicri). <b>Miladi takvim</b> Hz. İsa'nın doğumunu, <b>Hicri takvim</b> hicreti (622) başlangıç alır.</p>" +
    "<h3>Çağlar ve Onları Ayıran Olaylar</h3>" +
    "<ul>" +
    "<li><b>İlk Çağ:</b> Yazının icadı (~MÖ 3200) → <b>Kavimler Göçü (375)</b>.</li>" +
    "<li><b>Orta Çağ:</b> 375 → <b>İstanbul'un Fethi (1453)</b>; feodalite ve dinin belirleyici olduğu dönem.</li>" +
    "<li><b>Yeni Çağ:</b> 1453 → <b>Fransız İhtilali (1789)</b>; Coğrafi Keşifler, Rönesans, Reform.</li>" +
    "<li><b>Yakın Çağ:</b> 1789 → günümüz; milliyetçilik ve sanayileşme çağı.</li>" +
    "</ul>" +
    "<h3>Sınav İçin Kritik Ayrımlar</h3>" +
    "<ul>" +
    "<li>Birincil kaynak = döneme ait; ikincil kaynak = sonradan yazılan.</li>" +
    "<li>Hicri = Ay yılı + Hicret (622); Miladi = Güneş yılı + Hz. İsa'nın doğumu. Karıştırma!</li>" +
    "<li>Tarihte deney-gözlem YAPILAMAZ (olaylar tekrarlanamaz).</li>" +
    "</ul>"
  );

  setContent("tar-ilkcag",
    "<h2>İlk Çağ Uygarlıkları</h2>" +
    "<p>İlk Çağ, yazının icadıyla (~MÖ 3200) başlar ve Kavimler Göçü'ne (375) kadar sürer. İnsanlık ilk büyük uygarlıklarını, tarıma ve ticarete elverişli su kaynaklarının çevresinde kurdu: Mezopotamya'da Dicle-Fırat, Mısır'da Nil, Anadolu ve Ege'de verimli topraklar. Bu bölgeler 'medeniyetin beşiği' sayılır.</p>" +
    "<h3>Mezopotamya Uygarlıkları</h3>" +
    "<p>Dicle ile Fırat arasındaki Mezopotamya birçok uygarlığa ev sahipliği yaptı:</p>" +
    "<ul>" +
    "<li><b>Sümerler:</b> <b>Yazıyı (çivi yazısı) bularak tarihî çağları başlattılar</b>. İlk şehir devletlerini (site) kurdular, ilk yazılı kanunları yaptılar, <b>ziggurat</b> denen tapınaklar inşa ettiler; matematik ve astronomide ilerlediler.</li>" +
    "<li><b>Akadlar:</b> Sargon önderliğinde <b>tarihin bilinen ilk imparatorluğunu</b> kurdular.</li>" +
    "<li><b>Babilliler:</b> <b>Hammurabi Kanunları</b> serttir (kısasa kısas) ve güçlü bir merkezî otoriteyi gösterir; astronomide çok ilerlediler.</li>" +
    "<li><b>Asurlular:</b> Ticaret kolonileriyle (Kültepe/Kaniş) <b>Anadolu'ya yazıyı taşıdılar</b>; böylece Anadolu tarihî çağlara girdi. Ninova'da kütüphane kurdular.</li>" +
    "</ul>" +
    "<h3>Mısır Uygarlığı</h3>" +
    "<p>Nil çevresinde, dış etkilere kapalı bir coğrafyada geliştiği için özgün kaldı. <b>Hiyeroglif</b> yazısını ve <b>papirüs</b>ü kullandılar. Ölümden sonraki hayata inandıkları için <b>mumyalama</b> yaptılar; bu, insan vücudunun tanınmasını sağlayarak <b>tıp ve eczacılığı</b> geliştirdi. Nil'in taşkınlarını önceden bilmek için <b>Güneş yılı takvimi</b>ni buldular, dev <b>piramitler</b> inşa ettiler. Yönetici hem kral hem tanrı sayılan <b>firavun</b>du.</p>" +
    "<h3>Anadolu Uygarlıkları</h3>" +
    "<ul>" +
    "<li><b>Hititler:</b> Mısır'la yaptıkları <b>Kadeş Antlaşması</b> tarihin <b>ilk yazılı antlaşması</b>dır. Kralların tanrılara hesap verdiği yıllıklara <b>anal</b> denir.</li>" +
    "<li><b>Frigler:</b> Tarımı kutsal saydılar; Ana Tanrıça <b>Kibele</b>'ye taptılar, tapates (kilim) dokudular.</li>" +
    "<li><b>Lidyalılar:</b> Ticareti kolaylaştırmak için <b>ilk madeni parayı</b> bastılar; Kral Yolu ticareti geliştirdi.</li>" +
    "<li><b>Urartular:</b> Van çevresinde su kanalları, kaleler ve kaya mezarları; madencilikte ileri. <b>İyonlar:</b> özgür düşünce ve bilimde öncü (Tales, Pisagor).</li>" +
    "</ul>" +
    "<h3>Doğu Akdeniz, İran ve Ege</h3>" +
    "<ul>" +
    "<li><b>Fenikeliler:</b> Denizci-tüccardılar; kayıtları kolaylaştırmak için <b>ilk alfabeyi</b> geliştirdiler (bugünkü alfabelerin atası).</li>" +
    "<li><b>İbraniler:</b> <b>İlk tek tanrılı dine (Musevilik)</b> inanan topluluktur.</li>" +
    "<li><b>Persler:</b> Geniş ülkeyi <b>satraplıklara</b> böldü; Kral Yolu ile yönetimi güçlendirdi. <b>Yunanlılar:</b> şehir devletleri (polis) kurdu, Atina'da <b>demokrasi</b> gelişti.</li>" +
    "</ul>" +
    "<h3>Sınav İçin Kritik 'İlk'ler</h3>" +
    "<ul>" +
    "<li>İlk yazı ve ilk yazılı kanun = <b>Sümerler</b> · İlk imparatorluk = <b>Akadlar</b>.</li>" +
    "<li>İlk yazılı antlaşma = <b>Kadeş (Hitit-Mısır)</b> · İlk madeni para = <b>Lidyalılar</b>.</li>" +
    "<li>İlk alfabe = <b>Fenikeliler</b> · İlk tek tanrılı din = <b>İbraniler</b> · Anadolu'ya yazıyı getiren = <b>Asurlular</b>.</li>" +
    "</ul>"
  );
})();
