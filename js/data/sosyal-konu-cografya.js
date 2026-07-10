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

  // Yeni ünite tanımı (mevcut değilse ad + özet + içerikle oluşturur, varsa günceller)
  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "cografya", prerequisites: [], objectives: [], difficulty: 2, estimatedMinutes: 22 };
    u.name = name; u.summary = summary; u.branch = "cografya";
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

  /* =============== cog-dunya =============== */
  setUnit("cog-dunya", "Dünya'nın Şekli ve Hareketleri", "Geoid şekli, günlük ve yıllık hareketin sonuçları.",
    "<h2>Dünya'nın Şekli ve Hareketleri</h2>" +

    "<h3>Dünya'nın Şekli: Geoid</h3>" +
    "<p>Dünya tam bir küre değildir; <b>kutuplardan basık, Ekvator'da şişkin</b> kendine özgü bir şekle sahiptir. Bu şekle <b>geoid</b> denir. Şeklinin başlıca sonuçları:</p>" +
    "<ul>" +
    "<li>Güneş ışınları Ekvator'a dik, kutuplara eğik geldiğinden <b>sıcaklık kuşakları</b> oluşur.</li>" +
    "<li>Yer çekimi Ekvator'da en az, <b>kutuplarda en fazladır</b> (kutuplar merkeze daha yakındır).</li>" +
    "</ul>" +

    "<h3>Günlük Hareket (Eksen Etrafında)</h3>" +
    "<p>Dünya kendi ekseni etrafında <b>batıdan doğuya</b>, yaklaşık <b>24 saatte</b> bir tam döner. Sonuçları:</p>" +
    "<ul>" +
    "<li><b>Gece ve gündüz</b> oluşur ve birbirini izler.</li>" +
    "<li>Boylamlara bağlı <b>yerel saat farkı</b> doğar (doğuda güneş erken doğar).</li>" +
    "<li><b>Günlük sıcaklık farkı</b> oluşur; gün içinde güneş doğudan yükselip batıda batıyor gibi görünür.</li>" +
    "<li>Rüzgâr ve akıntıların yönünde <b>sapma (Coriolis etkisi)</b> görülür.</li>" +
    "</ul>" +

    "<h3>Yıllık Hareket (Güneş Etrafında)</h3>" +
    "<p>Dünya, Güneş çevresindeki turunu <b>365 gün 6 saatte</b> tamamlar. Ekseni yörünge düzlemine <b>23°27' eğiktir</b>. Bu eğiklik ve yıllık hareket birlikte şu sonuçları doğurur:</p>" +
    "<ul>" +
    "<li><b>Mevsimler</b> oluşur.</li>" +
    "<li>Gündüz ve gece süreleri yıl içinde değişir.</li>" +
    "<li>Güneş ışınlarının düşme açısı ve gölge boyları değişir.</li>" +
    "</ul>" +

    "<h3>Özel Tarihler</h3>" +
    "<ul>" +
    "<li><b>21 Haziran:</b> Işınlar Yengeç Dönencesi'ne dik gelir; Kuzey Yarım Küre'de <b>en uzun gündüz</b> (yaz başlangıcı).</li>" +
    "<li><b>21 Aralık:</b> Işınlar Oğlak Dönencesi'ne dik gelir; Kuzey Yarım Küre'de <b>en kısa gündüz</b> (kış başlangıcı).</li>" +
    "<li><b>21 Mart ve 23 Eylül (ekinoks):</b> Işınlar Ekvator'a dik gelir; tüm Dünya'da <b>gece-gündüz eşittir</b>.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Mevsimlerin nedeni Dünya'nın Güneş'e uzaklığı değil, <b>eksen eğikliği</b>dir.</li>" +
    "<li>Günlük hareket gece-gündüzü, yıllık hareket mevsimleri doğurur — karıştırma.</li>" +
    "<li>21 Haziran KYK'de <b>en uzun gündüz</b>, GYK'de en kısa gündüzdür.</li>" +
    "</ul>");

  /* =============== cog-atmosfer =============== */
  setUnit("cog-atmosfer", "Atmosfer, Sıcaklık, Basınç ve Rüzgârlar", "İklim elemanlarının işleyişi: sıcaklık, basınç, rüzgâr, nem-yağış.",
    "<h2>Atmosfer, Sıcaklık, Basınç ve Rüzgârlar</h2>" +

    "<h3>Atmosfer ve Sıcaklık</h3>" +
    "<p>Hava olayları (yağmur, kar, rüzgâr, bulut) atmosferin en alt katmanı olan <b>troposfer</b>de gerçekleşir; troposferde yükseldikçe sıcaklık azalır. Sıcaklığı etkileyen faktörler: <b>enlem</b> (en temel), <b>yükselti</b>, <b>karasallık-denizellik</b>, <b>bakı</b> ve <b>okyanus akıntıları</b>. Sıcak su akıntıları uğradığı kıyıları ılımanlaştırır.</p>" +

    "<h3>Basınç</h3>" +
    "<p>Havanın belirli bir alana yaptığı ağırlık <b>basınç</b>tır. <b>Alçak basınç</b> alanlarında hava ısınıp yükselir; bu yüzden hava genellikle <b>bulutlu ve yağışlı</b>dır. <b>Yüksek basınç</b> alanlarında hava soğuyup alçalır; hava <b>açık ve durgun</b>dur. Bir yer ısınınca üzerinde <b>termik alçak</b>, soğuyunca <b>termik yüksek</b> basınç oluşur. Yükseldikçe basınç azalır.</p>" +

    "<h3>Rüzgârlar</h3>" +
    "<p>Rüzgâr, <b>yüksek basınçtan alçak basınca</b> doğru esen havadır; hızı <b>basınç farkına</b> bağlıdır ve Dünya'nın dönmesi nedeniyle (Coriolis) Kuzey Yarım Küre'de <b>sağa</b> sapar. Türleri:</p>" +
    "<ul>" +
    "<li><b>Sürekli rüzgârlar:</b> Alize (30° yüksek basınçtan Ekvator'a), Batı rüzgârları (30°'den 60°'ye), kutup rüzgârları.</li>" +
    "<li><b>Meltemler:</b> Gündüz kara çabuk ısınır, <b>deniz meltemi</b> denizden karaya eser; gece kara çabuk soğur, <b>kara meltemi</b> karadan denize eser.</li>" +
    "<li><b>Muson:</b> Mevsimlere göre yön değiştiren rüzgârlardır.</li>" +
    "</ul>" +

    "<h3>Nem ve Yağış</h3>" +
    "<p><b>Bağıl nem</b>, havadaki su buharının o sıcaklıkta taşınabilecek en fazla neme oranıdır. Yükselen hava soğuyup yoğuşunca yağış oluşur. Başlıca yağış tipleri: <b>yükselim (konveksiyon)</b> yağışı (aşırı ısınan havanın yükselmesi), <b>yamaç (orografik)</b> yağışı (nemli havanın dağ yamacında yükselmesi) ve <b>cephe (frontal)</b> yağışı (sıcak-soğuk hava kütlelerinin karşılaşması).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Alçak basınç <b>yağışlı</b>, yüksek basınç <b>açık</b> hava demektir.</li>" +
    "<li>Rüzgâr her zaman <b>yüksekten alçağa</b> eser; hız basınç farkına bağlıdır.</li>" +
    "<li>Gündüz <b>deniz meltemi</b> (denizden karaya), gece <b>kara meltemi</b> (karadan denize) eser.</li>" +
    "</ul>");

  /* =============== cog-ickuvvet =============== */
  setUnit("cog-ickuvvet", "İç Kuvvetler", "Yer'in iç ısısıyla oluşan orojenez, epirojenez, volkanizma ve depremler.",
    "<h2>İç Kuvvetler</h2>" +

    "<h3>Kaynak ve Yer'in İç Yapısı</h3>" +
    "<p>İç kuvvetlerin enerji kaynağı <b>Yer'in iç ısısı (magma)</b>dır. Yer küre içten dışa doğru <b>çekirdek, manto ve yer kabuğu</b> katmanlarından oluşur. Kıtalar, manto üzerinde hareket eden <b>levhalar</b> üzerinde yer alır; levha hareketleri dağ oluşumu, deprem ve volkanizmaya yol açar. İç kuvvetler yeryüzünü genel olarak <b>engebelendirir (yükseltir)</b>.</p>" +

    "<h3>Orojenez (Dağ Oluşumu)</h3>" +
    "<p>Yan basınçların etkisiyle oluşur. <b>Esnek (tortul) tabakalar</b> yan basınçla <b>kıvrılarak kıvrım dağlarını</b> oluşturur (Toroslar, Kuzey Anadolu Dağları; Alp-Himalaya sistemi). <b>Sert tabakalar</b> ise kıvrılamayıp <b>kırılır (fay)</b>; yükselen bölüme <b>horst</b>, çöken bölüme <b>graben</b> denir.</p>" +

    "<h3>Epirojenez, Volkanizma ve Deprem</h3>" +
    "<ul>" +
    "<li><b>Epirojenez (kıta oluşumu):</b> Geniş alanların toptan alçalıp yükselmesidir; kara alçalınca deniz ilerler (<b>transgresyon</b>), yükselince gerilir (<b>regresyon</b>).</li>" +
    "<li><b>Volkanizma:</b> Magmanın yer kabuğundan yüzeye çıkmasıdır; volkan konileri, lav, tüf oluşturur (Ağrı, Erciyes, Nemrut, Süphan, Hasan Dağı).</li>" +
    "<li><b>Deprem (seizma):</b> Fay hatlarında biriken enerjinin aniden boşalmasıyla oluşur; en yaygın tür <b>tektonik depremler</b>dir.</li>" +
    "</ul>" +

    "<h3>Türkiye ve İç Kuvvetler</h3>" +
    "<p>Türkiye, genç oluşumlu <b>Alp-Himalaya kuşağı</b>nda yer alır; bu yüzden dağlıktır ve deprem riski yüksektir. <b>Kuzey Anadolu Fay Hattı</b> önemli bir deprem kuşağıdır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Orojenez <b>dağ</b>, epirojenez <b>kıta</b> oluşumu hareketidir.</li>" +
    "<li>Horst <b>yüksek</b>, graben <b>çöküntü</b> alanıdır.</li>" +
    "<li>İç kuvvetler yeryüzünü <b>yükseltir</b>; dış kuvvetler aşındırıp düzleştirir.</li>" +
    "</ul>");

  /* =============== cog-diskuvvet =============== */
  setUnit("cog-diskuvvet", "Dış Kuvvetler", "Güneş kaynaklı akarsu, rüzgâr, buzul, dalga ve karstik süreçler.",
    "<h2>Dış Kuvvetler</h2>" +

    "<h3>Kaynak ve İşleyiş</h3>" +
    "<p>Dış kuvvetlerin enerji kaynağı <b>Güneş</b>tir. Dış kuvvetler <b>aşındırma → taşıma → biriktirme</b> sırasıyla çalışarak yeryüzünü aşındırıp düzleştirir ve taşıdığı malzemeyi biriktirerek <b>ovalar</b> oluşturur. En etkili dış kuvvet <b>akarsulardır</b>.</p>" +

    "<h3>Akarsular</h3>" +
    "<p>Akarsular hem aşındırır hem biriktirir. Aşındırmayla <b>vadi, dev kazan</b>; biriktirmeyle ovada kıvrıla kıvrıla akan <b>menderes</b>, dağ eteğinde <b>birikinti konisi</b> ve denize döküldüğü yerde <b>delta ovası</b> oluşur. Delta için yavaş akıntı, bol alüvyon, sığ ve gelgitsiz deniz gerekir (Çukurova, Bafra, Çarşamba).</p>" +

    "<h3>Rüzgâr, Buzul ve Dalga</h3>" +
    "<ul>" +
    "<li><b>Rüzgâr:</b> Kurak (çöl) bölgelerde etkilidir; aşındırmayla <b>mantarkaya</b>, biriktirmeyle <b>kumul (barkan)</b> oluşur.</li>" +
    "<li><b>Buzul:</b> Yüksek/soğuk bölgelerde <b>sirk, U biçimli buzul vadisi, hörgüç kaya</b> ve biriktirmeyle <b>moren</b> oluşturur.</li>" +
    "<li><b>Dalga-akıntı (kıyı):</b> Kıyıda dik yamaç olan <b>falez (yalıyar)</b> ve biriktirmeyle <b>kumsal, kıyı oku</b> oluşturur.</li>" +
    "</ul>" +

    "<h3>Karstik Şekiller ve Kütle Hareketleri</h3>" +
    "<p><b>Karstik şekiller</b>, kalker (kireç taşı) gibi eriyebilen kayaların su ile çözünmesiyle oluşur: yüzeyde <b>lapya, dolin, obruk</b>; mağara içinde tavandan sarkan <b>sarkıt</b> ve tabandan yükselen <b>dikit</b> (Toroslar). Volkanik tüfün aşınmasıyla <b>peribacaları</b> oluşur (Kapadokya). Eğimli yamaçlarda toprağın kayması <b>heyelan</b>, kar kütlesinin kayması <b>çığ</b> gibi kütle hareketleridir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Delta ve menderes <b>akarsu</b>, kumul <b>rüzgâr</b>, sirk-moren <b>buzul</b> şeklidir.</li>" +
    "<li><b>Sarkıt</b> tavandan sarkar, <b>dikit</b> tabandan yükselir.</li>" +
    "<li>Dış kuvvetler yeryüzünü <b>aşındırıp düzleştirir</b> ve ova oluşturur.</li>" +
    "</ul>");

  /* =============== cog-su =============== */
  setUnit("cog-su", "Su Kaynakları", "Okyanuslar, akarsular (havza, debi, rejim), göller ve yer altı suları.",
    "<h2>Su Kaynakları</h2>" +

    "<h3>Yeryüzünde Su</h3>" +
    "<p>Yeryüzündeki suların büyük çoğunluğu <b>okyanus ve denizlerdeki tuzlu sulardır</b>. Tatlı sular azdır ve çoğu buzullarda, yer altında, göllerde ve akarsularda bulunur.</p>" +

    "<h3>Akarsular</h3>" +
    "<p>Bir akarsuyla ilgili temel kavramlar: <b>havza</b> (akarsuyun sularını topladığı alan), <b>debi</b> (belirli bir kesitten birim zamanda geçen su miktarı) ve <b>rejim</b> (yıl içindeki su seviyesi/debisi değişimi). Rejimi belirleyen temel etken <b>iklimdir</b>. Denize ulaşan havzalar <b>açık havza</b>, iç sularda son bulan havzalar <b>kapalı havza</b>dır (Konya, Van çevresi). Türkiye akarsuları genelde <b>kısa, hızlı ve düzensiz rejimlidir</b>; eğim ve debinin yüksekliği nedeniyle <b>hidroelektrik potansiyeli</b> fazladır. En uzun akarsu <b>Kızılırmak</b>tır.</p>" +

    "<h3>Göller</h3>" +
    "<p>Göller oluşumuna göre sınıflandırılır:</p>" +
    "<ul>" +
    "<li><b>Tektonik göller:</b> Çöküntü alanlarında oluşur (Tuz Gölü, Beyşehir, Eğirdir).</li>" +
    "<li><b>Volkanik göller:</b> Krater/kaldera çukurlarında oluşur (Nemrut, Meke).</li>" +
    "<li><b>Set (bent) gölleri:</b> Bir vadinin önünün lav, heyelan, alüvyon ya da kıyı seddiyle kapanmasıyla oluşur. <b>Van Gölü</b> (Türkiye'nin en büyük gölü) Nemrut lavlarının önü kapatmasıyla oluşan bir set gölüdür.</li>" +
    "<li><b>Karstik ve buzul gölleri</b> ile insan yapımı <b>baraj gölleri</b> de vardır.</li>" +
    "</ul>" +
    "<p>Dışarı akışı (gideğeni) olan göller <b>tatlı</b>, olmayanlar (Tuz, Van) tuzlu/acı olur.</p>" +

    "<h3>Yer Altı Suları</h3>" +
    "<p>Yağış ve kar sularının geçirimli tabakalarda birikmesiyle oluşur. Basınç altındaki suyun sondajla yüzeye fışkırmasına <b>artezyen</b> denir. Kaynaklar (karstik kaynak, fay kaynağı, artezyen kaynağı) yer altı sularının yüzeye çıkışıdır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Rejimi <b>iklim</b> belirler; Karadeniz akarsuları her mevsim yağış aldığından düzenli rejimlidir.</li>" +
    "<li>Gideğeni olmayan göller (Tuz, Van) <b>tuzlu</b>dur.</li>" +
    "<li>En uzun akarsu <b>Kızılırmak</b>, en büyük göl <b>Van</b>'dır.</li>" +
    "</ul>");

  /* =============== cog-toprak =============== */
  setUnit("cog-toprak", "Topraklar", "Toprak oluşumu, oluşum faktörleri ve toprak tipleri (zonal, azonal, intrazonal).",
    "<h2>Topraklar</h2>" +

    "<h3>Toprak ve Oluşumu</h3>" +
    "<p>Toprak, kayaların <b>fiziksel (mekanik), kimyasal ve biyolojik ayrışması</b> sonucu oluşan, canlı barındıran ince örtüdür. Oluşumunu etkileyen faktörler: <b>iklim (en etkili)</b>, <b>ana kaya</b>, <b>canlılar (bitki)</b>, <b>yer şekli/eğim</b> ve <b>zaman</b>. Olgun bir toprakta üstten alta doğru <b>A (humuslu üst), B (birikim), C (ayrışmış ana materyal)</b> katmanları (horizonları) bulunur.</p>" +

    "<h3>Toprak Tipleri</h3>" +
    "<ul>" +
    "<li><b>Zonal topraklar:</b> İklimin etkisiyle yerinde oluşan olgun topraklardır. <b>Çernozyom (kara toprak)</b> karasal step ikliminde oluşan çok verimli topraktır; <b>terra rossa (kırmızı toprak)</b> Akdeniz'de kalker üzerinde demir oksitten kırmızı renk alır; <b>laterit</b> ekvatoral bölgede yıkanmış kırmızı topraktır; <b>podzol</b> soğuk-nemli iğne yapraklı orman toprağıdır.</li>" +
    "<li><b>Azonal topraklar:</b> Taşınarak biriken, henüz gelişmemiş topraklardır. <b>Alüvyal</b> (akarsu, çok verimli), <b>kolüvyal</b> (yamaç eteği), <b>litosol</b> (taşlı-ince) bunlardandır.</li>" +
    "<li><b>İntrazonal topraklar:</b> Yerel koşulların (ana kaya, taban suyu) belirlediği topraklardır. <b>Halomorfik</b> (tuzlu-çorak), <b>kalsimorfik</b> (kireçli), <b>hidromorfik</b> (bataklık) bunlardandır.</li>" +
    "</ul>" +

    "<h3>Türkiye ve Erozyon</h3>" +
    "<p>Türkiye'de ovalarda <b>alüvyal</b> topraklar verimlidir; Akdeniz'de terra rossa, Doğu Anadolu'da çernozyom benzeri topraklar görülür. Bitki örtüsünün zayıf ve eğimin fazla olduğu yerlerde <b>erozyon (toprak aşınması)</b> artar; ağaçlandırma ve teraslama erozyonu azaltır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Toprak oluşumunda en etkili faktör <b>iklim</b>dir.</li>" +
    "<li>Alüvyal toprak <b>azonal</b> (taşınmış) ve <b>verimli</b>dir.</li>" +
    "<li>Erozyonu artıran temel etken <b>bitki örtüsü yokluğu ve eğim</b>dir.</li>" +
    "</ul>");

  /* =============== cog-nufus =============== */
  setUnit("cog-nufus", "Nüfus", "Nüfus yoğunluğu, dağılışı, nüfus artışı ve nüfus piramitleri.",
    "<h2>Nüfus</h2>" +

    "<h3>Nüfus ve Yoğunluk</h3>" +
    "<p>Belirli bir alanda yaşayan insan sayısına <b>nüfus</b>, bunu belirlemek için yapılan işleme <b>nüfus sayımı</b> denir. <b>Aritmetik nüfus yoğunluğu</b>, toplam nüfusun yüzölçümüne bölünmesiyle bulunur (kişi/km²). Ayrıca tarım alanına göre <b>tarımsal yoğunluk</b> gibi ölçütler de vardır.</p>" +

    "<h3>Nüfus Dağılışını Etkileyen Faktörler</h3>" +
    "<ul>" +
    "<li><b>Doğal faktörler:</b> İklim, yer şekilleri, su kaynakları, toprak verimliliği. Yüksek-engebeli, çok soğuk ya da çok kurak yerler <b>seyrek</b> nüfusludur.</li>" +
    "<li><b>Beşerî faktörler:</b> Sanayi, ulaşım, tarım, ticaret ve turizm. Sanayileşmiş, ulaşımı gelişmiş kıyı ovaları <b>yoğun</b> nüfusludur.</li>" +
    "</ul>" +

    "<h3>Nüfus Artışı</h3>" +
    "<p>Nüfus, <b>doğal artış</b> (doğum − ölüm) ve <b>göçlerle</b> değişir. Nüfus artış hızının yüksek olduğu ülkeler genellikle <b>genç nüfuslu</b>dur. Nüfusun yaş gruplarına göre dağılışı gösteren grafiklere <b>nüfus piramidi</b> denir: <b>geniş tabanlı</b> piramit yüksek doğumlu genç (gelişmekte olan) nüfusu, <b>dar tabanlı</b> piramit yaşlı (gelişmiş) nüfusu gösterir. <b>0-14</b> ve <b>65 yaş üstü</b> bağımlı nüfus, <b>15-64</b> yaş ise çalışma çağındaki nüfustur.</p>" +

    "<h3>Nüfus Politikaları ve Türkiye</h3>" +
    "<p>Nüfusu hızlı artan ülkeler <b>azaltıcı</b>, nüfusu az/yaşlı ülkeler <b>artırıcı</b> nüfus politikası uygular. Türkiye <b>genç nüfusa</b> sahiptir; ancak nüfus artış hızı zamanla düşmektedir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Aritmetik yoğunluk = <b>nüfus / yüzölçümü</b>.</li>" +
    "<li><b>Geniş tabanlı</b> piramit genç nüfusu, dar tabanlı yaşlı nüfusu gösterir.</li>" +
    "<li>Bağımlı nüfus <b>0-14 ve 65+</b>, çalışma çağı <b>15-64</b>'tür.</li>" +
    "</ul>");

  /* =============== cog-goc =============== */
  setUnit("cog-goc", "Göçler", "İç ve dış göç türleri, göçün nedenleri ve sonuçları.",
    "<h2>Göçler</h2>" +

    "<h3>Göç ve Türleri</h3>" +
    "<p>İnsanların çeşitli nedenlerle yaşadıkları yeri kalıcı ya da geçici olarak değiştirmesine <b>göç</b> denir. Ülke sınırları içinde olan göçlere <b>iç göç</b>, ülkeler arasında olanlara <b>dış göç</b> denir. İç göçün en yaygın yönü <b>kırdan kente</b>dir. Tarım işçiliği gibi belirli dönemlerde yapılan geçici göçlere <b>mevsimlik göç</b> denir.</p>" +

    "<h3>Göçün Nedenleri</h3>" +
    "<p>Göçlerin en yaygın nedeni <b>ekonomiktir</b> (iş bulma). Bunun yanında <b>eğitim, sağlık, doğal afetler (deprem, sel), savaş, siyasi ve dinî</b> nedenler de göçe yol açar. Göçe iten koşullara <b>itici faktör</b> (kırda tarımda makineleşme ve iş azlığı), göç edilen yere çeken koşullara <b>çekici faktör</b> (kentte iş, eğitim, sağlık) denir.</p>" +

    "<h3>Dış Göç Örnekleri</h3>" +
    "<ul>" +
    "<li><b>İşçi göçü:</b> 1960'lardan itibaren Türkiye'den Almanya gibi ülkelere.</li>" +
    "<li><b>Beyin göçü:</b> Nitelikli/eğitimli insanların daha iyi olanaklar için başka ülkeye gitmesi.</li>" +
    "<li><b>Zorunlu göç:</b> Türk-Yunan nüfus mübadelesi, savaş nedeniyle mülteci göçleri.</li>" +
    "</ul>" +

    "<h3>Göçün Sonuçları</h3>" +
    "<p>Göç <b>veren</b> yerde (kır) nüfus azalır, genç nüfus gittiği için nüfus yaşlanır ve tarım iş gücü azalır. Göç <b>alan</b> yerde (kent) nüfus hızla artar; bu durum <b>çarpık kentleşme, gecekondulaşma, işsizlik ve altyapı yetersizliği</b> gibi sorunlara yol açar. Böylece ülke genelinde <b>nüfus dağılışı dengesizleşir</b>.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>İç göçün en yaygın yönü <b>kırdan kente</b>dir ve temel nedeni <b>ekonomiktir</b>.</li>" +
    "<li><b>Beyin göçü</b> nitelikli iş gücünün dışa göçüdür; göç veren ülke için kayıptır.</li>" +
    "<li>Göç alan kentte <b>gecekondu ve işsizlik</b> gibi sorunlar artar.</li>" +
    "</ul>");

  /* =============== cog-yerlesme =============== */
  setUnit("cog-yerlesme", "Yerleşmeler", "Kır-kent yerleşmeleri, yerleşmeyi etkileyen faktörler ve kentsel fonksiyonlar.",
    "<h2>Yerleşmeler</h2>" +

    "<h3>Kır ve Kent Yerleşmeleri</h3>" +
    "<p>İnsanların barınma ihtiyacını karşıladığı yerlere <b>yerleşme</b> denir. <b>Kırsal yerleşmelerde</b> geçim büyük ölçüde <b>tarım ve hayvancılığa</b> dayanır, nüfus azdır. <b>Kentsel yerleşmelerde</b> ise geçim <b>sanayi ve hizmet (ticaret, ulaşım)</b> sektörüne dayanır, nüfus fazladır.</p>" +

    "<h3>Yerleşmeyi Etkileyen Faktörler</h3>" +
    "<p>Yerleşme yeri seçiminde <b>doğal faktörler</b> (su kaynakları, iklim, yer şekilleri, toprak verimliliği) ve <b>beşerî faktörler</b> (ulaşım, sanayi, ticaret, tarım) etkilidir. Düz-alçak, sulak ve verimli alanlar yerleşmeye elverişliyken; çok yüksek, engebeli, kurak veya çok soğuk yerler yerleşmeyi zorlaştırır.</p>" +

    "<h3>Yerleşme Dokusu</h3>" +
    "<ul>" +
    "<li><b>Toplu yerleşme:</b> Suyun az bulunduğu, arazinin düz olduğu yerlerde evler bir su kaynağı çevresinde toplanır (İç Anadolu gibi iç bölgeler).</li>" +
    "<li><b>Dağınık yerleşme:</b> Suyun bol, arazinin engebeli olduğu yerlerde evler birbirinden uzak ve dağınıktır (Karadeniz).</li>" +
    "</ul>" +

    "<h3>Kentlerin Fonksiyonları</h3>" +
    "<p>Kentler öne çıkan işlevlerine göre sınıflandırılır: <b>tarım, sanayi, ticaret, ulaşım (liman), turizm, kültür-eğitim ve idari (başkent)</b> kentleri. Örneğin Antalya turizm, bir liman kenti ulaşım-ticaret, başkent ise idari fonksiyonuyla öne çıkar. Kent sayısının ve kent nüfusunun artmasına <b>kentleşme</b> denir; kentleşme oranı genellikle gelişmişlikle birlikte artar.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Dağınık</b> yerleşme bol su + engebe (Karadeniz); <b>toplu</b> yerleşme su azlığı + düz arazi (iç bölgeler).</li>" +
    "<li>Kırda geçim <b>tarım-hayvancılık</b>, kentte <b>sanayi-hizmet</b>tir.</li>" +
    "<li>Su kaynağı yerleşmeyi <b>çeken</b> temel doğal faktörlerdendir.</li>" +
    "</ul>");

  /* =============== cog-ekonomi =============== */
  setUnit("cog-ekonomi", "Ekonomik Faaliyetler", "Ekonomik sektörler; tarım, hayvancılık, madenler-enerji, sanayi, ulaşım ve turizm.",
    "<h2>Ekonomik Faaliyetler</h2>" +

    "<h3>Ekonomik Sektörler</h3>" +
    "<p>Ekonomik faaliyetler üç sektörde toplanır: <b>Birincil (primer)</b> — doğadan ham madde elde eden faaliyetler (tarım, hayvancılık, madencilik, ormancılık, balıkçılık); <b>İkincil (sekonder)</b> — ham maddeyi işleyip mamul üreten <b>sanayi</b>; <b>Üçüncül (tersiyer)</b> — hizmet üreten faaliyetler (ticaret, ulaşım, turizm, bankacılık). Gelişmiş ülkelerde hizmet ve sanayi payı yüksektir.</p>" +

    "<h3>Tarım ve Hayvancılık</h3>" +
    "<p>Tarımı etkileyen doğal faktörler iklim, toprak, yer şekli ve su (sulama); beşerî faktörler ise gübreleme, makineleşme ve pazardır. Türkiye'de <b>çay</b> Doğu Karadeniz'de (bol yağış), <b>fındık</b> Karadeniz'de, <b>pamuk</b> Çukurova ve GAP'ta (sıcaklık + sulama), <b>zeytin-incir-üzüm</b> Ege'de, <b>buğday</b> İç Anadolu'da yetişir. Hayvancılıkta <b>büyükbaş</b> hayvancılık nemli-çayırlık alanlarda (Doğu Anadolu, Karadeniz), <b>küçükbaş</b> hayvancılık bozkırlık iç bölgelerde gelişir.</p>" +

    "<h3>Madenler, Enerji ve Sanayi</h3>" +
    "<p>Türkiye maden çeşitliliği bakımından zengindir; özellikle <b>bor</b> rezervlerinde dünyada öndedir. Taş kömürü <b>Zonguldak</b>'ta, linyit çeşitli havzalarda çıkarılır. Enerji kaynakları yenilenebilir (<b>hidroelektrik, jeotermal, rüzgâr, güneş</b>) ve yenilenemez (kömür, petrol, doğal gaz) olarak ayrılır. <b>Sanayi</b>, ham maddeyi işleyerek mamul üretir ve en çok <b>Marmara Bölgesi</b>'nde gelişmiştir.</p>" +

    "<h3>Ticaret, Ulaşım ve Turizm</h3>" +
    "<p>Mal ve hizmet alışverişine <b>ticaret</b> denir; yurt dışına mal satışı <b>ihracat</b>, yurt dışından mal alımı <b>ithalat</b>tır. Ulaşım, üretim ile pazarı birbirine bağlar. Türkiye, doğal ve tarihî zenginlikleriyle <b>turizm</b> potansiyeli yüksek bir ülkedir; turizm önemli bir <b>döviz</b> kaynağıdır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Tarım-madencilik <b>birincil</b>, sanayi <b>ikincil</b>, turizm-ticaret <b>üçüncül</b> sektördür.</li>" +
    "<li>Çay <b>Doğu Karadeniz</b>, pamuk <b>Çukurova/GAP</b>, zeytin <b>Ege</b> ürünüdür.</li>" +
    "<li>Türkiye <b>bor</b> madeninde dünyada öndedir; taş kömürü <b>Zonguldak</b>'tadır.</li>" +
    "</ul>");

})();
