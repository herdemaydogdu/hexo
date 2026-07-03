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
})();
