/* ============================================================
   SOSYAL / COĞRAFYA — DERİN konu anlatımı (özet değil, öğreten metin)
   cog-konum, cog-iklim, cog-harita ünitelerinin content'ini EZER.
   Stub content'ten SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-cografya: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setContent(id, content) {
    var u = mevcut(id) || { id: id, branch: "cografya", reviewStatus: "draft", originalityStatement: true };
    u.content = content; u.reviewedAt = "2026-07-10"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  /* =============== cog-konum =============== */
  setContent("cog-konum",
    "<h2>Türkiye'nin Konumu</h2>" +

    "<h3>Mutlak (Matematiksel) Konum</h3>" +
    "<p>Bir yerin <b>enlem ve boylam</b> değerleriyle Dünya üzerindeki kesin yerine <b>mutlak konum</b> denir. Türkiye, <b>36°–42° Kuzey enlemleri</b> ile <b>26°–45° Doğu boylamları</b> arasında yer alır. Bu değerler her yerde tektir ve değişmez.</p>" +

    "<h3>Enlemin (Paralellerin) Sonuçları</h3>" +
    "<p>Türkiye <b>Kuzey Yarım Küre'de ve orta kuşakta</b> bulunur. Enlemin sonuçları şunlardır:</p>" +
    "<ul>" +
    "<li>Dört mevsim belirgin yaşanır.</li>" +
    "<li>Güneş ışınları yıl boyunca <b>hiçbir zaman dik gelmez</b> (Türkiye, Yengeç Dönencesi'nin kuzeyindedir); öğle vakti güneş hep <b>güneyde</b> görülür ve gölgeler <b>kuzeye</b> düşer.</li>" +
    "<li>Genel olarak <b>güneyden kuzeye</b> gidildikçe sıcaklık azalır.</li>" +
    "<li>Kuzey ile güney uçları arasında yaklaşık <b>6 enlem</b> farkı vardır (yaklaşık 666 km).</li>" +
    "</ul>" +

    "<h3>Boylamın (Meridyenlerin) Sonuçları</h3>" +
    "<p>Boylam <b>yerel saati</b> belirler; doğuda güneş daha erken doğar. Türkiye'nin doğusu ile batısı arasında <b>19 boylam</b> farkı vardır. Her boylam 4 dakika saat farkı oluşturduğundan, doğu ve batı uçları arasında <b>19 × 4 = 76 dakika</b> yerel saat farkı bulunur.</p>" +

    "<h3>Özel (Göreli/Coğrafi) Konum</h3>" +
    "<p>Bir yerin denizlere, kıtalara, komşularına, ticaret yollarına göre konumuna <b>özel konum</b> denir. Türkiye'nin özel konumunun öne çıkan sonuçları:</p>" +
    "<ul>" +
    "<li><b>Asya ile Avrupa</b> arasında köprü konumundadır; üç tarafı <b>Karadeniz, Ege ve Akdeniz</b> ile çevrilidir (Marmara bir iç denizdir).</li>" +
    "<li><b>İstanbul ve Çanakkale Boğazları</b>, Karadeniz'i Akdeniz'e bağlar; bu da stratejik önem verir.</li>" +
    "<li>Orta Doğu'nun <b>petrol</b> bölgelerine ve önemli ticaret yollarına yakındır.</li>" +
    "<li>Farklı iklim, yer şekli ve doğal ortam <b>çeşitliliği</b> gösterir; jeopolitik önemi yüksektir.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Enlem</b> sıcaklığı ve mevsimleri; <b>boylam</b> ise yerel saati etkiler — karıştırma.</li>" +
    "<li>Mutlak konum <b>enlem-boylam</b>dır; özel konum başka yerlere <b>göre</b> konumdur.</li>" +
    "<li>Türkiye'de güneş ışınları hiç dik gelmez; gölgeler daima <b>kuzeye</b> düşer.</li>" +
    "</ul>");

  /* =============== cog-iklim =============== */
  setContent("cog-iklim",
    "<h2>İklim ve Bitki Örtüsü</h2>" +

    "<h3>İklim Elemanları</h3>" +
    "<p>İklimi oluşturan temel elemanlar <b>sıcaklık, basınç, rüzgâr ve nem-yağış</b>tır. Bu elemanların uzun yıllar ortalaması bir yerin iklimini belirler. (Yükselti, enlem gibi kavramlar iklim <b>elemanı</b> değil, iklimi etkileyen <b>faktör</b>lerdir.)</p>" +

    "<h3>İklimi Etkileyen Faktörler</h3>" +
    "<ul>" +
    "<li><b>Enlem:</b> En temel faktördür; genel olarak Ekvator'dan kutuplara doğru sıcaklık azalır.</li>" +
    "<li><b>Yükselti:</b> Yükseldikçe sıcaklık azalır (yaklaşık her 200 m'de 1 °C).</li>" +
    "<li><b>Karasallık-Denizellik:</b> Denizler sıcaklığı dengeler; denizden uzaklaştıkça yıllık sıcaklık farkı (genlik) artar.</li>" +
    "<li><b>Bakı:</b> Güneş ışınlarını daha dik alan yamaç daha sıcaktır ve tarıma daha elverişlidir.</li>" +
    "</ul>" +

    "<h3>Türkiye'nin İklim Tipleri</h3>" +
    "<ul>" +
    "<li><b>Akdeniz iklimi:</b> Yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Doğal bitki örtüsü <b>maki</b>dir (kısa boylu, kuraklığa dayanıklı çalılar). Akdeniz ve Ege kıyılarında görülür.</li>" +
    "<li><b>Karadeniz iklimi:</b> Her mevsim yağışlı ve ılımandır. Doğal bitki örtüsü gür <b>orman</b>dır. Karadeniz kıyısında görülür.</li>" +
    "<li><b>Karasal iklim:</b> Yazlar sıcak-kurak, kışlar soğuk ve karlıdır. Doğal bitki örtüsü <b>bozkır (step)</b>tır. İç Anadolu, Doğu Anadolu ve iç kesimlerde görülür.</li>" +
    "</ul>" +

    "<h3>Yağış ve Bitki Örtüsü</h3>" +
    "<p>Türkiye'de en fazla yağışı <b>Doğu Karadeniz</b> (Rize çevresi), en az yağışı ise <b>Tuz Gölü çevresi/İç Anadolu</b> alır. Bunun temel nedeni, kıyı dağlarının denize paralel uzanarak nemli havanın iç kesimlere girmesini engellemesidir. Bitki örtüsü yağışa bağlıdır: bol yağış alan yerde <b>orman</b>, az yağışlı iç kesimde <b>bozkır</b>, yaz kuraklığı yaşanan Akdeniz'de <b>maki</b> yetişir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Sıcaklık-basınç-rüzgâr-nem iklim <b>elemanı</b>; enlem-yükselti-bakı ise iklim <b>faktörü</b>dür.</li>" +
    "<li>Maki <b>Akdeniz</b>, orman <b>Karadeniz</b>, bozkır <b>İç Anadolu</b> bitki örtüsüdür.</li>" +
    "<li>Yükseldikçe sıcaklık <b>azalır</b> (her 200 m'de yaklaşık 1 °C).</li>" +
    "</ul>");

  /* =============== cog-harita =============== */
  setContent("cog-harita",
    "<h2>Harita Bilgisi</h2>" +

    "<h3>Harita ve Ölçek</h3>" +
    "<p><b>Harita</b>, yeryüzünün tamamının ya da bir bölümünün <b>kuşbakışı</b> olarak ve belli bir oranda küçültülerek düzleme aktarılmış hâlidir. <b>Ölçek</b>, harita üzerindeki uzunluğun gerçek uzunluğa oranıdır. İki tür ölçek vardır: <b>kesir ölçek</b> (örn. 1/500.000) ve <b>çizgi (grafik) ölçek</b> (uzunlukların bir cetvel üzerinde gösterimi).</p>" +

    "<h3>Büyük ve Küçük Ölçek</h3>" +
    "<p>Kesir ölçekte <b>payda küçüldükçe ölçek büyür</b>: gösterilen alan <b>daralır</b>, ayrıntı <b>artar</b> (örn. şehir planı, 1/1.000). <b>Payda büyüdükçe ölçek küçülür</b>: geniş alan az ayrıntıyla gösterilir (örn. dünya haritası, 1/30.000.000). Aynı bölgeye ait iki haritadan <b>büyük ölçekli</b> olan daha ayrıntılıdır.</p>" +

    "<h3>Ölçek Hesabı</h3>" +
    "<p><b>Gerçek uzunluk = harita uzunluğu × ölçek paydası.</b> Birim dönüşümünde <b>1 km = 100.000 cm</b> kullanılır. Örnek: 1/500.000 ölçekli haritada 4 cm olan iki nokta arası gerçekte 4 × 500.000 = 2.000.000 cm = <b>20 km</b>'dir. Tersine, ölçek = harita uzunluğu / gerçek uzunluk ile bulunur.</p>" +

    "<h3>Yükseltiyi Gösterme: İzohipsler</h3>" +
    "<p>Yükselti; <b>izohips (eşyükselti eğrileri), renklendirme, tarama, gölgelendirme ve kabartma</b> yöntemleriyle gösterilir. <b>İzohips</b> özellikleri:</p>" +
    "<ul>" +
    "<li>Aynı yükseltideki noktaları birleştirir; <b>kapalı eğrilerdir</b> ve birbirini <b>kesmezler</b>.</li>" +
    "<li>Eğrilerin <b>sık</b> geçtiği yerde eğim <b>fazladır (dik yamaç)</b>; <b>seyrek</b> geçtiği yerde eğim <b>azdır (yatık yamaç)</b>.</li>" +
    "<li>İç içe kapalı eğrilerde en <b>içteki</b> eğri en yüksek yeri (doruğu) gösterir.</li>" +
    "</ul>" +
    "<p>İki nokta arasındaki yer şeklinin yandan kesit görünümüne <b>profil</b> denir ve izohipslerden çıkarılır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Payda <b>küçük</b> → ölçek <b>büyük</b>, ayrıntı <b>çok</b>; payda büyük → ölçek küçük, ayrıntı az.</li>" +
    "<li>Gerçek uzunluk için harita uzunluğu paydayla <b>çarpılır</b>; 1 km = 100.000 cm.</li>" +
    "<li>İzohipsler <b>kesişmez</b>; sık eğri dik yamaç, seyrek eğri yatık yamaç demektir.</li>" +
    "</ul>");

})();
