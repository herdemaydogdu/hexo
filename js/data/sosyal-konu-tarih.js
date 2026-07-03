/* ============================================================
   SOSYAL / TARİH — Kapsamlı konu anlatımı (upsertUnits ile)
   Ünite tam nesne olarak yenilenir (name/branch/pairs korunur, content zenginleşir).
   Tümü özgün (sourceType/originalityStatement:true).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-tarih: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("sosyal", [
    {
      id: "tar-bilim", name: "Tarih Bilimi ve Zaman", branch: "tarih",
      summary: "Tarihin tanımı ve özellikleri, kaynak türleri, tarihe yardımcı bilimler, takvim ve çağlar.",
      content:
        "<h2>Tarih Bilimi ve Zaman</h2>" +
        "<h3>Tarih Nedir?</h3>" +
        "<p>Tarih; geçmişteki insan topluluklarının siyasi, sosyal, ekonomik ve kültürel faaliyetlerini <b>yer ve zaman</b> göstererek, <b>neden-sonuç</b> ilişkisi içinde ve <b>belgelere dayanarak</b> inceleyen bilimdir. Amacı geçmişi doğru anlamak ve bugünü açıklamaktır.</p>" +
        "<h3>Tarih Biliminin Özellikleri</h3>" +
        "<ul>" +
        "<li>Olaylar geçmişte yaşandığı ve <b>tekrarlanamadığı</b> için <b>deney ve gözlem</b> yapılamaz.</li>" +
        "<li>Olayın geçtiği <b>yer ve zaman</b> mutlaka belirtilir.</li>" +
        "<li>Olaylar arasında <b>neden-sonuç</b> ilişkisi kurulur.</li>" +
        "<li>Tarihçi <b>objektif (tarafsız)</b> olmalı; olayı kendi döneminin koşulları içinde değerlendirmelidir.</li>" +
        "</ul>" +
        "<h3>Tarihin Kaynakları</h3>" +
        "<p>Türüne göre: <b>Yazılı</b> (ferman, kitabe, gazete, kanun), <b>Sözlü</b> (destan, efsane, atasözü), <b>Kalıntı/Arkeolojik</b> (sikke, mezar, çanak-çömlek). Döneme göre: <b>Birincil (ana) kaynak</b> olayın kendi dönemine aittir; <b>ikincil kaynak</b> daha sonra üretilir.</p>" +
        "<h3>Tarihe Yardımcı Bilimler</h3>" +
        "<ul>" +
        "<li><b>Arkeoloji:</b> kazı yaparak kalıntıları inceler.</li>" +
        "<li><b>Paleografya:</b> eski yazıların okunması.</li>" +
        "<li><b>Epigrafya:</b> kitabe ve yazıtlar.</li>" +
        "<li><b>Nümizmatik:</b> eski paralar (sikkeler).</li>" +
        "<li><b>Kronoloji:</b> zaman ve takvim.</li>" +
        "<li><b>Diplomatik:</b> ferman, berat ve resmî belgeler.</li>" +
        "<li><b>Etnografya:</b> örf, âdet, gelenek ve kültür.</li>" +
        "<li><b>Heraldik:</b> arma ve mühürler.</li>" +
        "<li><b>Filoloji:</b> diller; <b>Antropoloji:</b> insan ırkları.</li>" +
        "</ul>" +
        "<h3>Zaman ve Takvim</h3>" +
        "<p>1 yüzyıl (asır) = <b>100 yıl</b>. Takvimler <b>Güneş yılı</b> (Mısır, Miladi, 12 Hayvanlı Türk, Celali) ya da <b>Ay yılı</b> (Sümer/Babil, Hicri) esaslıdır. <b>Miladi takvim</b> Hz. İsa'nın doğumunu; <b>Hicri takvim</b> Hicret'i (622) başlangıç alır.</p>" +
        "<h3>Çağlar (Tarihî Devirler)</h3>" +
        "<ul>" +
        "<li><b>İlk Çağ:</b> Yazının icadı (≈MÖ 3200) → Kavimler Göçü (375).</li>" +
        "<li><b>Orta Çağ:</b> 375 → İstanbul'un Fethi (1453).</li>" +
        "<li><b>Yeni Çağ:</b> 1453 → Fransız İhtilali (1789).</li>" +
        "<li><b>Yakın Çağ:</b> 1789 → günümüz.</li>" +
        "</ul>",
      objectives: [
        "Tarihin tanımını ve temel özelliklerini açıklar.",
        "Birincil ve ikincil kaynakları ayırt eder.",
        "Tarihe yardımcı bilimleri eşleştirir.",
        "Takvim türlerini ve çağların başlangıç/bitiş olaylarını sıralar."
      ],
      commonMistakes: [
        "Deney-gözlemin tarihte kullanılabileceğini sanmak (kullanılamaz).",
        "Birincil kaynakla ikincil kaynağı karıştırmak.",
        "Hicri takvimi Güneş yılı, Miladi takvimi Ay yılı sanmak (tersi).",
        "Orta Çağ'ı 1453, Yeni Çağ'ı 1789 ile başlatmak (kaydırmak)."
      ],
      pairs: [
        { term: "Yazının icadı", def: "Tarihî devirleri başlattı" },
        { term: "Birincil kaynak", def: "Olayın kendi dönemine ait belge" },
        { term: "Nümizmatik", def: "Eski paraları inceler" },
        { term: "Kronoloji", def: "Zaman ve takvim bilimi" },
        { term: "Hicri takvim", def: "Hicret (622), Ay yılı esaslı" },
        { term: "Kavimler Göçü (375)", def: "Orta Çağ'ı başlattı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    },
    {
      id: "tar-ilkcag", name: "İlk Çağ Uygarlıkları", branch: "tarih",
      summary: "Mezopotamya, Mısır, Anadolu, Doğu Akdeniz, İran ve Ege uygarlıkları; öne çıkan ilkler.",
      content:
        "<h2>İlk Çağ Uygarlıkları</h2>" +
        "<p>İlk Çağ, yazının icadıyla başlayıp Kavimler Göçü'ne (375) kadar sürer. Su kaynaklarının verimli kıldığı bölgelerde (Mezopotamya, Nil, Anadolu) güçlü uygarlıklar doğmuştur.</p>" +
        "<h3>Mezopotamya Uygarlıkları</h3>" +
        "<ul>" +
        "<li><b>Sümerler:</b> Yazıyı (çivi yazısı) buldular; ilk şehir devletlerini (site) ve ilk yazılı kanunları oluşturdular. Zigguratlar (tapınak) yaptılar.</li>" +
        "<li><b>Akadlar:</b> Sargon önderliğinde tarihin bilinen ilk imparatorluğunu kurdular.</li>" +
        "<li><b>Babilliler:</b> <b>Hammurabi Kanunları</b> (sert, kısasa kısas) ile ünlüdür; astronomide ilerlediler.</li>" +
        "<li><b>Asurlular:</b> Ticaret kolonileriyle <b>Anadolu'ya yazıyı taşıdılar</b> (Kültepe/Kaniş); Ninova'da kütüphane kurdular.</li>" +
        "<li><b>Elamlar:</b> Güneydoğu'da madencilik ve seramikte gelişti.</li>" +
        "</ul>" +
        "<h3>Mısır Uygarlığı</h3>" +
        "<p>Nil Nehri çevresinde kuruldu. <b>Hiyeroglif</b> yazısı ve <b>papirüs</b> kullanıldı; mumyalama tıp ve eczacılığı geliştirdi. Piramitler yapıldı, <b>Güneş yılı esaslı takvim</b> bulundu. Yönetici <b>firavun</b>dur.</p>" +
        "<h3>Anadolu Uygarlıkları</h3>" +
        "<ul>" +
        "<li><b>Hititler:</b> Mısır'la <b>Kadeş Antlaşması</b>'nı (bilinen ilk yazılı antlaşma) imzaladılar; kral tanrılara hesap verirdi (anal/yıllıklar).</li>" +
        "<li><b>Frigler:</b> Tarımı kutsal saydılar (Ana Tanrıça <b>Kibele</b>); tapates (kilim) dokudular.</li>" +
        "<li><b>Lidyalılar:</b> Tarihte <b>ilk madeni parayı</b> bastılar; Kral Yolu ticareti geliştirdi.</li>" +
        "<li><b>Urartular:</b> Van çevresinde su kanalları, kaleler ve kaya mezarları; madencilikte ileri.</li>" +
        "<li><b>İyonlar:</b> Batı Anadolu'da bilim ve özgür düşüncede öncü (Tales, Pisagor).</li>" +
        "</ul>" +
        "<h3>Doğu Akdeniz</h3>" +
        "<ul>" +
        "<li><b>Fenikeliler:</b> <b>İlk alfabeyi</b> (harf yazısı) oluşturdular; denizcilik, kolonicilik ve camda ünlüdür.</li>" +
        "<li><b>İbraniler:</b> Tarihte <b>ilk tek tanrılı dine</b> (Musevilik) inanan topluluktur.</li>" +
        "</ul>" +
        "<h3>İran ve Ege</h3>" +
        "<p><b>Persler:</b> Ülkeyi satraplıklara böldü; Sardes-Sus arasında Kral Yolu'nu kullandı; Zerdüştlük inancı yaygındı. <b>Yunan (Ege):</b> Şehir devletleri (polis) kuruldu; Atina'da <b>demokrasi</b> gelişti, kolonizasyon yapıldı.</p>" +
        "<h3>Öne Çıkan İlkler</h3>" +
        "<ul>" +
        "<li>İlk yazı: <b>Sümerler</b> · İlk yazılı kanun: <b>Sümerler</b> · İlk imparatorluk: <b>Akadlar</b>.</li>" +
        "<li>İlk yazılı antlaşma: <b>Kadeş (Hitit-Mısır)</b> · İlk madeni para: <b>Lidyalılar</b> · İlk alfabe: <b>Fenikeliler</b> · İlk tek tanrılı din: <b>İbraniler</b>.</li>" +
        "</ul>",
      objectives: [
        "Mezopotamya ve Mısır uygarlıklarının katkılarını açıklar.",
        "Anadolu uygarlıklarını (Hitit, Frig, Lidya, Urartu, İyon) ayırt eder.",
        "İlk Çağ'daki 'ilk'leri ilgili uygarlıkla eşleştirir.",
        "Uygarlıkların gelişiminde coğrafyanın etkisini yorumlar."
      ],
      commonMistakes: [
        "İlk parayı Sümer/Fenike sanmak (Lidyalılar).",
        "İlk alfabeyi Sümer sanmak (Fenikeliler; Sümer çivi yazısıdır).",
        "Kadeş Antlaşması'nı Sümer-Akad sanmak (Hitit-Mısır).",
        "Anadolu'ya yazıyı Hititlerin getirdiğini sanmak (Asurlular getirdi)."
      ],
      pairs: [
        { term: "Sümerler", def: "Yazıyı ve ilk yazılı kanunları buldu" },
        { term: "Lidyalılar", def: "İlk madeni parayı bastı" },
        { term: "Fenikeliler", def: "İlk alfabeyi oluşturdu" },
        { term: "Hititler", def: "Kadeş Antlaşması'nı imzaladı" },
        { term: "İbraniler", def: "İlk tek tanrılı din (Musevilik)" },
        { term: "Asurlular", def: "Anadolu'ya yazıyı taşıdı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    },
    {
      id: "tar-ilkturk", name: "İslamiyet Öncesi Türk Tarihi", branch: "tarih",
      summary: "Orta Asya, göçler, ilk Türk devletleri (Hun, Göktürk, Uygur) ve bozkır kültürü.",
      content:
        "<h2>İslamiyet Öncesi Türk Tarihi</h2>" +
        "<p>Türklerin ana yurdu <b>Orta Asya</b>'dır. Kuraklık, nüfus artışı, otlak yetersizliği, boylar arası mücadele ve dış baskılar <b>Türk göçlerine</b> yol açmıştır. Göçler Türk kültürünü geniş coğrafyalara taşımıştır.</p>" +
        "<h3>İlk Türk Devletleri</h3>" +
        "<ul>" +
        "<li><b>Asya (Büyük) Hun Devleti:</b> Bilinen <b>ilk teşkilatlı Türk devleti</b>. <b>Mete Han (Motun)</b> orduyu <b>onlu sisteme</b> göre düzenledi; Çin akınlarına karşı Çin Seddi yaptırıldı.</li>" +
        "<li><b>Kavimler Göçü (375):</b> Batı (Avrupa) Hunlarının baskısıyla başladı; <b>Attila</b> ünlüdür. Avrupa'da <b>Orta Çağ</b> başladı.</li>" +
        "<li><b>Göktürkler:</b> <b>'Türk' adını ilk kez devlet adı yapan</b> devlet (Bumin Kağan). II. Göktürk (Kutluk) döneminde <b>Orhun (Göktürk) Yazıtları</b> dikildi — <b>ilk Türkçe yazılı belge</b> (Bilge Kağan, Kültigin, Tonyukuk).</li>" +
        "<li><b>Uygurlar:</b> <b>Yerleşik hayata geçen ilk Türkler</b>. Mani (Manihaizm) dinini benimsediler; kâğıt ve matbaayı kullandılar, 18 harfli alfabe oluşturdular.</li>" +
        "<li><b>Diğerleri:</b> <b>Avarlar</b> (İstanbul'u kuşatan ilk Türkler), <b>Hazarlar</b> (Museviliği benimsedi, Hazar Barışı), <b>Türgişler</b> (ilk Türk parasını bastı), Bulgarlar, Macarlar, Peçenekler, Kıpçaklar, Kırgızlar.</li>" +
        "</ul>" +
        "<h3>Kültür ve Medeniyet</h3>" +
        "<ul>" +
        "<li><b>Yönetim:</b> Devleti <b>Kağan</b> yönetir; egemenlik anlayışı <b>Kut</b>'tur (yönetme yetkisinin Gök Tanrı'dan verildiği inancı). <b>Kurultay (Toy)</b> danışma meclisidir; ikili (doğu-batı) yönetim yaygındır.</li>" +
        "<li><b>İnanç:</b> <b>Gök Tanrı</b> dini; ölümden sonraki hayata inanç (<b>kurgan</b> mezarlar, <b>balbal</b> taşları). Cenaze törenine <b>yuğ</b> denir.</li>" +
        "<li><b>Yaşam:</b> Konar-göçer (göçebe) hayat, hayvancılık; <b>ordu-millet</b> anlayışı; yazısız hukuk kuralları olan <b>töre</b>.</li>" +
        "</ul>" +
        "<h3>Öne Çıkan İlkler</h3>" +
        "<ul>" +
        "<li>İlk teşkilatlı Türk devleti: <b>Asya Hunları</b> · 'Türk' adını devlet adı yapan: <b>Göktürkler</b> · İlk Türkçe yazılı belge: <b>Orhun Yazıtları</b> · Yerleşik ilk Türkler: <b>Uygurlar</b> · İlk Türk parası: <b>Türgişler</b>.</li>" +
        "</ul>",
      objectives: [
        "Türk göçlerinin nedenlerini ve sonuçlarını açıklar.",
        "İlk Türk devletlerini (Hun, Göktürk, Uygur) özellikleriyle ayırt eder.",
        "Bozkır kültürünün yönetim, inanç ve yaşam özelliklerini kavrar.",
        "İslamiyet öncesi Türklere ait 'ilk'leri eşleştirir."
      ],
      commonMistakes: [
        "'Türk' adını devlet adı yapanı Asya Hunları sanmak (Göktürkler).",
        "İlk Türkçe yazılı belgeyi Uygurlara vermek (Orhun/Göktürk Yazıtları).",
        "Yerleşik ilk Türkleri Göktürk sanmak (Uygurlar).",
        "Kavimler Göçü'nü Asya Hunlarının başlattığını sanmak (Batı/Avrupa Hunları)."
      ],
      pairs: [
        { term: "Asya Hunları", def: "İlk teşkilatlı Türk devleti; Mete Han, onlu sistem" },
        { term: "Göktürkler", def: "'Türk' adını devlet adı yaptı" },
        { term: "Orhun Yazıtları", def: "İlk Türkçe yazılı belge" },
        { term: "Uygurlar", def: "Yerleşik hayata geçen ilk Türkler" },
        { term: "Türgişler", def: "İlk Türk parasını bastı" },
        { term: "Kut", def: "Yönetme yetkisinin Gök Tanrı'dan verilmesi" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    },
    {
      id: "tar-islam", name: "İslam Tarihi ve Medeniyeti", branch: "tarih",
      summary: "İslamiyet'in doğuşu, Hz. Muhammed ve Dört Halife dönemi, Emeviler ve Abbasiler.",
      content:
        "<h2>İslam Tarihi ve Medeniyeti</h2>" +
        "<p>İslamiyet'ten önce Arabistan'da putperestlik, kabilecilik ve kan davalarının yaygın olduğu döneme <b>Cahiliye Dönemi</b> denir. İslamiyet <b>Hz. Muhammed</b> ile Mekke'de doğdu (ilk vahiy 610).</p>" +
        "<h3>Hz. Muhammed Dönemi</h3>" +
        "<ul>" +
        "<li><b>Hicret (622):</b> Mekke'den Medine'ye göç; Hicri takvimin başlangıcı ve ilk İslam toplumunun temeli.</li>" +
        "<li>Savaşlar: <b>Bedir</b> (ilk büyük zafer), <b>Uhud</b>, <b>Hendek</b> (savunma); <b>Hudeybiye Antlaşması</b> Müslümanların siyasi güç olarak tanınmasını sağladı.</li>" +
        "<li><b>Mekke'nin Fethi (630)</b> ve <b>Veda Hutbesi</b> ile İslamiyet Arabistan'a yayıldı.</li>" +
        "</ul>" +
        "<h3>Dört Halife Dönemi (632-661)</h3>" +
        "<ul>" +
        "<li><b>Hz. Ebubekir:</b> Ridde (dinden dönme) ve yalancı peygamber isyanları bastırıldı; <b>Kur'an ilk kez kitap hâline getirildi</b>.</li>" +
        "<li><b>Hz. Ömer:</b> Büyük fetihler (Suriye, Filistin, Mısır, Sasani/İran); <b>ilk devlet teşkilatı</b> (divan, ordugâh şehirler); <b>Hicri takvim</b> kabul edildi.</li>" +
        "<li><b>Hz. Osman:</b> <b>Kur'an çoğaltılıp</b> merkezlere gönderildi; ilk İslam donanması kuruldu; son döneminde iç karışıklıklar arttı.</li>" +
        "<li><b>Hz. Ali:</b> <b>Cemel</b> ve <b>Sıffın</b> savaşları yaşandı; Hariciler ortaya çıktı (fitne dönemi).</li>" +
        "</ul>" +
        "<p>Dört Halife seçimle iş başına geldiği için bu döneme <b>Cumhuriyet Dönemi</b> de denir.</p>" +
        "<h3>Emeviler (661-750)</h3>" +
        "<p><b>Muaviye</b> ile halifelik <b>saltanata (babadan oğula)</b> dönüştü. <b>Arap milliyetçiliği</b> (mevali politikası: Arap olmayan Müslümanlara ikinci sınıf muamele) çöküşü hızlandırdı. Kerbela Olayı yaşandı; İspanya'da <b>Endülüs Emevi Devleti</b> kuruldu.</p>" +
        "<h3>Abbasiler (750-1258)</h3>" +
        "<p>Abbasiler <b>mevali politikasını terk ederek eşitlikçi</b> davrandı. <b>Bilim ve çeviri</b> zirveye çıktı (<b>Beytülhikme</b>). <b>Talas Savaşı (751)</b>'nda Çin'e karşı Türklerle birlikte kazanıldı; <b>kâğıt</b> İslam dünyasına yayıldı ve Türk-İslam yakınlaşması başladı.</p>" +
        "<h3>Öne Çıkan Noktalar</h3>" +
        "<ul>" +
        "<li>Kur'an'ı kitap yapan: <b>Hz. Ebubekir</b> · çoğaltan: <b>Hz. Osman</b> · ilk teşkilat/divan: <b>Hz. Ömer</b>.</li>" +
        "<li>Halifeliği saltanata çeviren: <b>Muaviye (Emeviler)</b> · Talas (751): kâğıt + Türk-İslam yakınlaşması (<b>Abbasiler</b>).</li>" +
        "</ul>",
      objectives: [
        "İslamiyet'in doğuşunu ve Hz. Muhammed dönemi olaylarını sıralar.",
        "Dört Halife'nin icraatlarını ayırt eder.",
        "Emevi ve Abbasi yönetim anlayışını karşılaştırır.",
        "Talas Savaşı'nın Türk-İslam tarihindeki önemini yorumlar."
      ],
      commonMistakes: [
        "Kur'an'ı çoğaltanı Hz. Ebubekir sanmak (kitap: Ebubekir, çoğaltma: Osman).",
        "İlk devlet teşkilatını/divanı Hz. Osman'a vermek (Hz. Ömer).",
        "Halifeliği saltanata çevireni Abbasiler sanmak (Emeviler/Muaviye).",
        "Talas Savaşı'nı Emeviler sanmak (Abbasiler, 751)."
      ],
      pairs: [
        { term: "Hicret (622)", def: "Hicri takvimin başlangıcı" },
        { term: "Hz. Ömer", def: "İlk teşkilat, divan, büyük fetihler" },
        { term: "Hz. Osman", def: "Kur'an'ı çoğalttı" },
        { term: "Muaviye", def: "Halifeliği saltanata çevirdi" },
        { term: "Beytülhikme", def: "Abbasi bilim/çeviri merkezi" },
        { term: "Talas (751)", def: "Kâğıt yayıldı, Türk-İslam yakınlaşması" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    },
    {
      id: "tar-turkislam", name: "İlk Türk-İslam Devletleri", branch: "tarih",
      summary: "Karahanlılar, Gazneliler ve Büyük Selçuklu Devleti; ilk Türk-İslam eserleri.",
      content:
        "<h2>İlk Türk-İslam Devletleri</h2>" +
        "<p>751 <b>Talas Savaşı</b> ile Türkler ve Müslümanlar yakınlaştı; Türkler kitleler hâlinde İslamiyet'i kabul etmeye başladı. Böylece ilk Müslüman Türk devletleri kuruldu.</p>" +
        "<h3>Karahanlılar</h3>" +
        "<ul>" +
        "<li><b>İlk Müslüman Türk devleti</b>dir (Satuk Buğra Han İslamiyet'i kabul etti). Resmî dilleri <b>Türkçe</b> idi; Türk kültürünü korudular.</li>" +
        "<li>İlk Türk-İslam eserleri bu dönemde yazıldı: <b>Kutadgu Bilig</b> (Yusuf Has Hacib), <b>Divanü Lugati't-Türk</b> (Kaşgarlı Mahmud), <b>Atabetü'l-Hakayık</b> (Edip Ahmet), <b>Divan-ı Hikmet</b> (Ahmet Yesevi).</li>" +
        "<li>Kervansaray ve ribatlar inşa ettiler.</li>" +
        "</ul>" +
        "<h3>Gazneliler</h3>" +
        "<ul>" +
        "<li>Alp Tegin tarafından kuruldu; en parlak dönem <b>Gazneli Mahmud</b> zamanıdır.</li>" +
        "<li>Gazneli Mahmud <b>'Sultan' unvanını ilk kez</b> kullandı; <b>Hindistan'a seferler</b> düzenleyerek İslamiyet'i Hindistan'a yaydı.</li>" +
        "<li>Farsça ve Arapça'ya önem verdiler (Firdevsi'nin Şehname'si bu döneme yakındır).</li>" +
        "</ul>" +
        "<h3>Büyük Selçuklu Devleti</h3>" +
        "<ul>" +
        "<li><b>Dandanakan Savaşı (1040):</b> Gaznelilere karşı kazanıldı; devlet resmen kuruldu (<b>Tuğrul Bey</b>).</li>" +
        "<li><b>Malazgirt Savaşı (1071):</b> <b>Alparslan</b> Bizans'ı yendi; <b>Anadolu'nun kapısı Türklere açıldı</b>.</li>" +
        "<li><b>Nizamülmülk</b> (vezir) <b>Nizamiye Medreseleri</b>ni kurdu, Siyasetname'yi yazdı; <b>ikta sistemi</b> uygulandı.</li>" +
        "<li><b>Melikşah</b> döneminde devlet en geniş sınırlarına ulaştı; <b>Celali takvimi</b> hazırlandı.</li>" +
        "<li><b>Katvan Savaşı (1141):</b> Karahitaylara yenilgi çöküşü başlattı; son güçlü hükümdar <b>Sultan Sencer</b>'dir.</li>" +
        "</ul>" +
        "<h3>Öne Çıkan Noktalar</h3>" +
        "<ul>" +
        "<li>İlk Müslüman Türk devleti: <b>Karahanlılar</b> · 'Sultan' unvanını ilk kullanan: <b>Gazneli Mahmud</b>.</li>" +
        "<li>Anadolu'nun kapısını açan: <b>Malazgirt (1071)</b> · Nizamiye Medreseleri: <b>Nizamülmülk</b> · Selçuklu'yu kuran zafer: <b>Dandanakan (1040)</b>.</li>" +
        "</ul>",
      objectives: [
        "İlk Müslüman Türk devletlerini özellikleriyle ayırt eder.",
        "İlk Türk-İslam eserlerini yazarlarıyla eşleştirir.",
        "Dandanakan ve Malazgirt savaşlarının sonuçlarını açıklar.",
        "Nizamiye Medreseleri ve ikta sisteminin önemini yorumlar."
      ],
      commonMistakes: [
        "İlk Müslüman Türk devletini Gazneli/Selçuklu sanmak (Karahanlılar).",
        "'Sultan' unvanını ilk kullananı Tuğrul Bey sanmak (Gazneli Mahmud).",
        "Malazgirt'i Gaznelilere karşı sanmak (Bizans'a karşı, 1071).",
        "Dandanakan'ı Bizans'a karşı sanmak (Gaznelilere karşı, 1040)."
      ],
      pairs: [
        { term: "Karahanlılar", def: "İlk Müslüman Türk devleti" },
        { term: "Kutadgu Bilig", def: "Yusuf Has Hacib" },
        { term: "Gazneli Mahmud", def: "'Sultan' unvanı; Hindistan seferleri" },
        { term: "Dandanakan (1040)", def: "Büyük Selçuklu kuruldu" },
        { term: "Malazgirt (1071)", def: "Anadolu'nun kapısı açıldı" },
        { term: "Nizamülmülk", def: "Nizamiye Medreseleri, Siyasetname" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    }
  ]);
})();
