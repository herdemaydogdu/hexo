/* ============================================================
   TARİH — Birleştirilmiş Resmî Konu Ağacı (Faz D)
   73 mikro-ünite, 2026 resmî kazanımlardaki ~15 ana başlıkta toplanır.
   data.js DEĞİŞMEZ; eski üniteler çalışma anında bu 15 üniteyle
   değiştirilir, eski soru bağları yeni ünitelere eşlenir.
   Tümü özgün (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("tarih.js: content-loader yüklenmedi"); return; }

  var U = function (id, name, summary, body, pairs) {
    return { id: id, name: name, branch: "tarih", summary: summary,
      content: "<h2>" + name + "</h2>" + body, pairs: pairs || [],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null };
  };

  var units = [
    U("tar-bilim", "Tarih Bilimi ve Zaman",
      "Tarihin tanımı, kaynaklar, takvim ve çağlar.",
      "<p>Tarih; geçmiş insan topluluklarını <b>yer ve zaman</b> göstererek, neden-sonuç ilişkisi içinde ve belgelere dayanarak inceler. Kaynaklar yazılı, sözlü ve kalıntı (arkeolojik) olur. Yazının icadı (Sümerler) tarihî devirleri başlatır. Takvimler (Güneş/Ay, 12 Hayvanlı, Hicri, Miladi) zamanı ölçer.</p>",
      [ { term: "Tarih", def: "Geçmişi belge ve neden-sonuçla inceler" }, { term: "Yazının icadı", def: "Tarihî devirleri başlattı" }, { term: "Birincil kaynak", def: "Döneme ait özgün belge" }, { term: "Hicri takvim", def: "Hicret (622) esas, Ay yılı" } ]),
    U("tar-ilkcag", "İlk Çağ Uygarlıkları",
      "Mezopotamya, Anadolu, Mısır ve Ege uygarlıkları.",
      "<ul><li><b>Sümerler:</b> yazı ve ilk yazılı kanunlar.</li><li><b>Hititler:</b> Kadeş Antlaşması (ilk yazılı antlaşma).</li><li><b>Lidyalılar:</b> ilk madeni para.</li><li><b>Urartular:</b> su kanalları; <b>Frigler:</b> tarım, Kibele.</li></ul>",
      [ { term: "Lidyalılar", def: "İlk madeni parayı icat etti" }, { term: "Sümerler", def: "Yazıyı buldu" }, { term: "Hititler", def: "Kadeş Antlaşması'nı imzaladı" }, { term: "Urartular", def: "Su kanalları, kaya mezarları" } ]),
    U("tar-ilkturk", "İslamiyet Öncesi Türk Tarihi",
      "Hun, Göktürk, Uygur; bozkır kültürü.",
      "<ul><li><b>Asya Hunları:</b> bilinen ilk Türk devleti (Mete Han, onlu sistem).</li><li><b>Göktürkler:</b> 'Türk' adını ilk kez devlet adı yaptı; Orhun Yazıtları.</li><li><b>Uygurlar:</b> yerleşik hayata geçen ilk Türkler; matbaa/kâğıt.</li></ul>",
      [ { term: "Asya Hunları", def: "Bilinen ilk Türk devleti" }, { term: "Göktürkler", def: "“Türk” adını devlet adı yaptı" }, { term: "Uygurlar", def: "Yerleşik hayata geçen ilk Türkler" }, { term: "Orhun Yazıtları", def: "İlk Türkçe yazılı kaynak" } ]),
    U("tar-islam", "İslam Tarihi ve Medeniyeti",
      "Hz. Muhammed, Dört Halife, Emevi, Abbasi.",
      "<p>İslamiyet Hz. Muhammed ile doğdu; Hicret (622) ve fetihlerle yayıldı. <b>Dört Halife</b> döneminin ardından <b>Emeviler</b> halifeliği saltanata çevirdi ve Arap milliyetçiliği güttü. <b>Abbasiler</b> döneminde bilim (Beytülhikme) zirve yaptı.</p>",
      [ { term: "Hicret", def: "622, Hicri takvimin başlangıcı" }, { term: "Emeviler", def: "Halifeliği saltanata çevirdi" }, { term: "Abbasiler", def: "Bilim/çeviri (Beytülhikme)" } ]),
    U("tar-turkislam", "İlk Türk-İslam Devletleri",
      "Karahanlı, Gazneli, Büyük Selçuklu.",
      "<p>751 <b>Talas Savaşı</b> Türk-İslam yakınlaşmasını başlattı. İlk Müslüman Türk devleti <b>Karahanlılar</b>dır. <b>Büyük Selçuklu</b>, Dandanakan (1040) ile kuruldu; <b>Malazgirt (1071)</b> Anadolu'nun kapısını açtı (ikta sistemi, Nizamiye medreseleri).</p>",
      [ { term: "Talas (751)", def: "Türk-İslam yakınlaşması" }, { term: "Karahanlılar", def: "İlk Müslüman Türk devleti" }, { term: "Malazgirt (1071)", def: "Anadolu'nun kapısı açıldı" } ]),
    U("tar-selcuklu", "Türkiye Tarihi ve Selçuklular",
      "Anadolu Selçuklu, beylikler, Haçlılar, Moğollar.",
      "<p>Anadolu'da ilk beylikler (Danişment, Saltuklu) ve <b>Anadolu Selçuklu Devleti</b> kuruldu. <b>Haçlı Seferleri</b> (1096+) Doğu-Batı etkileşimini artırdı. <b>Kösedağ (1243)</b> ile Anadolu Moğol egemenliğine girdi, beylikler dönemi başladı.</p>",
      [ { term: "Anadolu Selçuklu", def: "Anadolu'da Türk siyasi birliği" }, { term: "Haçlı Seferleri", def: "Doğu-Batı etkileşimi" }, { term: "Kösedağ (1243)", def: "Moğol egemenliği başladı" } ]),
    U("tar-kurulus", "Osmanlı Kuruluş ve Devletleşme",
      "Kuruluş, Rumeli iskânı, İstanbul'un Fethi.",
      "<p>Osman Bey'in uç beyliği, gaza ve iskân siyasetiyle büyüdü. Devşirme ve Kapıkulu ordusu merkezî gücü sağladı. <b>İstanbul'un Fethi (1453, Fatih)</b> Bizans'ı sona erdirdi, Orta Çağ'ı kapatıp Yeni Çağ'ı açtı; Osmanlı imparatorluğa dönüştü.</p>",
      [ { term: "İstanbul'un Fethi", def: "1453, Fatih Sultan Mehmet" }, { term: "Fethin sonucu", def: "Orta Çağ kapandı" }, { term: "Devşirme", def: "Kapıkulu ordusunun kaynağı" } ]),
    U("tar-klasik", "Osmanlı Klasik Dönem",
      "Yavuz, Kanuni; toprak ve millet sistemi.",
      "<p><b>Yavuz</b> ile halifelik Osmanlı'ya geçti; <b>Kanuni</b> döneminde devlet en geniş sınırlarına ulaştı. <b>Tımar</b> sistemi toprak gelirini askere/üretime bağladı; <b>millet sistemi</b> farklı inançları hoşgörüyle yönetti.</p>",
      [ { term: "Yavuz Selim", def: "Halifelik Osmanlı'ya geçti" }, { term: "Kanuni", def: "En geniş sınırlar" }, { term: "Tımar sistemi", def: "Toprak geliri - asker/üretim" }, { term: "Millet sistemi", def: "İnanç gruplarının yönetimi" } ]),
    U("tar-degisim", "Değişim Çağında Osmanlı",
      "Karlofça, keşifler, Lale Devri, ıslahatlar.",
      "<p>Coğrafi Keşiflerle ticaret yolları okyanuslara kaydı; Osmanlı ekonomisi etkilendi. <b>Karlofça (1699)</b> ilk büyük toprak kaybıdır. <b>Lale Devri</b>'nden itibaren Batı örnekli ıslahatlar (matbaa, mühendishaneler) başladı.</p>",
      [ { term: "Karlofça (1699)", def: "İlk büyük toprak kaybı" }, { term: "Coğrafi Keşifler", def: "Ticaret yolları değişti" }, { term: "Lale Devri", def: "Islahat ve matbaa" } ]),
    U("tar-modern", "19. Yüzyıl Osmanlı Modernleşmesi",
      "II. Mahmut, Tanzimat, Meşrutiyet, Şark Meselesi.",
      "<p>II. Mahmut Yeniçeri Ocağı'nı kaldırdı (1826) ve modern ordu kurdu. <b>Tanzimat (1839)</b> ve Islahat Fermanı eşitlik adımlarıydı. <b>I. Meşrutiyet (1876)</b> ile ilk anayasa (Kanun-i Esasi) ve meclis açıldı. Şark Meselesi büyük güçlerin paylaşım planıydı.</p>",
      [ { term: "Tanzimat (1839)", def: "Hukukta eşitlik adımı" }, { term: "I. Meşrutiyet (1876)", def: "İlk anayasa (Kanun-i Esasi)" }, { term: "Vaka-i Hayriye (1826)", def: "Yeniçeri Ocağı kaldırıldı" } ]),
    U("tar-20yy", "20. Yüzyıl Başlarında Osmanlı",
      "Trablusgarp, Balkan Savaşları, I. Dünya Savaşı.",
      "<p>Trablusgarp (1911) ve Balkan Savaşları büyük toprak kaybı getirdi. Osmanlı, I. Dünya Savaşı'na Almanya yanında girdi; <b>Çanakkale</b> zaferi Mustafa Kemal'i öne çıkardı. Yenilgi sonrası <b>Mondros (1918)</b> işgallere zemin hazırladı.</p>",
      [ { term: "Çanakkale", def: "Osmanlı'nın kazandığı cephe" }, { term: "Mondros (1918)", def: "İşgallere zemin hazırladı" }, { term: "Osmanlı'nın safı", def: "İttifak (Almanya)" } ]),
    U("tar-milli", "Millî Mücadele",
      "Samsun, kongreler, TBMM, cepheler, Lozan.",
      "<p>Mustafa Kemal 19 Mayıs 1919'da Samsun'a çıktı; Amasya, Erzurum, Sivas ile millî birlik sağlandı. <b>23 Nisan 1920</b> TBMM açıldı. Sakarya ve Büyük Taarruz ile Batı Cephesi kazanıldı; <b>Lozan (1923)</b> bağımsızlığı uluslararası alanda tanıdı.</p>",
      [ { term: "19 Mayıs 1919", def: "Samsun'a çıkış" }, { term: "23 Nisan 1920", def: "TBMM'nin açılışı" }, { term: "Lozan (1923)", def: "Yeni Türkiye'nin tapusu" } ]),
    U("tar-inkilap", "Atatürk İlke ve İnkılapları",
      "Cumhuriyet, hukuk, harf, eğitim; altı ilke.",
      "<p><b>Cumhuriyet (29 Ekim 1923)</b> ilan edildi; saltanat ve hilafet kaldırıldı. Medeni Kanun, <b>Harf İnkılabı (1928)</b>, Tevhid-i Tedrisat ve kılık-kıyafet inkılaplarıyla toplum çağdaşlaştırıldı. Altı Atatürk ilkesi devletin temelidir.</p>",
      [ { term: "Cumhuriyetin ilanı", def: "29 Ekim 1923" }, { term: "Harf İnkılabı", def: "1928, yeni Türk alfabesi" }, { term: "Tevhid-i Tedrisat", def: "Eğitimin birleştirilmesi" } ]),
    U("tar-politika", "Atatürk Dönemi İç ve Dış Politika",
      "Çok partili denemeler; Montrö, Hatay, paktlar.",
      "<p>Çok partili hayata geçiş denemeleri (Terakkiperver, Serbest Cumhuriyet Fırkası) yaşandı. Dış politikada 'Yurtta sulh, cihanda sulh' ilkesiyle <b>Montrö (1936)</b>, Balkan ve Sadabat paktları ve Hatay'ın katılımı yürütüldü.</p>",
      [ { term: "Montrö (1936)", def: "Boğazlar Türk denetimine geçti" }, { term: "Hatay", def: "Atatürk dönemi dış politika hedefi" } ]),
    U("tar-cagdas", "Çağdaş Türk ve Dünya Tarihi",
      "II. Dünya Savaşı, Soğuk Savaş, NATO, Kıbrıs.",
      "<p>II. Dünya Savaşı'nda Türkiye tarafsız kaldı. Sonrasında Soğuk Savaş başladı; Türkiye Batı blokunda yer aldı, <b>NATO'ya girdi (1952)</b> ve çok partili hayata geçti. Kıbrıs Meselesi (1974) ve küreselleşme sonraki dönemi belirledi.</p>",
      [ { term: "NATO (1952)", def: "Türkiye Batı blokunda" }, { term: "Kıbrıs (1974)", def: "Barış Harekâtı" }, { term: "Çok partili hayat", def: "1946-1950 geçiş" } ])
  ];

  // 1) Eski soru bağlarını yeni ünitelere eşle (orphan olmasın)
  TYT_CONTENT.remapQuestionUnits({ "tar-04": "tar-ilkcag", "tar-13": "tar-ilkturk", "tar-14": "tar-ilkturk" });
  // 2) 73 mikro-üniteyi 15 resmî üniteyle değiştir
  TYT_CONTENT.replaceBranchUnits("sosyal", "tarih", units);
  // 3) Birleştirilmiş ünitelere yeni özgün sorular
  TYT_CONTENT.addQuestions([
    { id: "sosyal-tar-bilim-001", subject: "sosyal", unit: "tar-bilim", difficulty: 1, skill: "kavram",
      q: "Tarihî devirlerin başlamasında temel ölçüt aşağıdakilerden hangisidir?",
      options: ["Ateşin bulunması", "Yazının icadı", "Tarımın başlaması", "Devletin kurulması", "Paranın kullanımı"], answer: 1,
      explain: "Yazının icadı (Sümerler) tarih öncesi ile tarihî devirleri ayırır.",
      solution: { short: "Yazının icadı tarihî devirleri başlatır.", steps: ["Yazıdan öncesi tarih öncesidir.", "Sümerlerin yazıyı bulması tarihî devirleri başlatır."], whyOthersWrong: ["Ateş/tarım/devlet/para önemli ama devir ölçütü yazıdır."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-turkislam-001", subject: "sosyal", unit: "tar-turkislam", difficulty: 1, skill: "kavram",
      q: "İlk Müslüman Türk devleti aşağıdakilerden hangisidir?",
      options: ["Gazneliler", "Karahanlılar", "Büyük Selçuklu", "Uygurlar", "Göktürkler"], answer: 1,
      explain: "İlk Müslüman Türk devleti Karahanlılardır.",
      solution: { short: "Karahanlılar ilk Müslüman Türk devletidir.", steps: ["Talas sonrası Türkler İslamlaştı.", "İlk Müslüman Türk devleti Karahanlılar."], whyOthersWrong: ["Gazneli/Selçuklu sonradır.", "Uygur/Göktürk İslam öncesi."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-kurulus-001", subject: "sosyal", unit: "tar-kurulus", difficulty: 2, skill: "kavram",
      q: "1453 İstanbul'un Fethi hangi çağı kapatmıştır?",
      options: ["İlk Çağ", "Orta Çağ", "Yeni Çağ", "Yakın Çağ", "Cilalı Taş"], answer: 1,
      explain: "Fetih Orta Çağ'ı kapatıp Yeni Çağ'ı açmıştır.",
      solution: { short: "1453 → Orta Çağ kapandı.", steps: ["İstanbul'un Fethi 1453.", "Bu olay Orta Çağ'ı kapatıp Yeni Çağ'ı açtı."], whyOthersWrong: ["Yeni Çağ açılır, kapanmaz.", "İlk/Yakın Çağ farklı dönüm noktalarıdır."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-klasik-001", subject: "sosyal", unit: "tar-klasik", difficulty: 2, skill: "kavram",
      q: "Halifeliğin Osmanlı Devleti'ne geçtiği padişah aşağıdakilerden hangisidir?",
      options: ["Fatih Sultan Mehmet", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Mahmut", "Orhan Bey"], answer: 1,
      explain: "Mısır seferleri sonrası halifelik Yavuz Sultan Selim ile Osmanlı'ya geçti.",
      solution: { short: "Halifelik Yavuz ile Osmanlı'ya geçti.", steps: ["Yavuz'un Mısır seferi (Ridaniye).", "Halifelik Osmanlı'ya geçti."], whyOthersWrong: ["Fatih: İstanbul'un Fethi.", "Kanuni: en geniş sınırlar.", "II. Mahmut: 19.yy ıslahatları."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-modern-001", subject: "sosyal", unit: "tar-modern", difficulty: 2, skill: "kavram",
      q: "Osmanlı'da ilk anayasa (Kanun-i Esasi) hangi dönemde ilan edilmiştir?",
      options: ["Tanzimat", "I. Meşrutiyet", "II. Meşrutiyet", "Lale Devri", "Cumhuriyet"], answer: 1,
      explain: "İlk anayasa 1876'da I. Meşrutiyet ile ilan edildi.",
      solution: { short: "Kanun-i Esasi → I. Meşrutiyet (1876).", steps: ["İlk anayasa 1876.", "Bu I. Meşrutiyet'in ilanıdır."], whyOthersWrong: ["Tanzimat ferman, anayasa değil.", "II. Meşrutiyet 1908 (yeniden).", "Lale Devri/Cumhuriyet farklı."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-milli-001", subject: "sosyal", unit: "tar-milli", difficulty: 1, skill: "kavram",
      q: "Yeni Türk devletinin bağımsızlığını ve sınırlarını uluslararası alanda tanıyan antlaşma hangisidir?",
      options: ["Mondros", "Sevr", "Mudanya", "Lozan", "Ankara"], answer: 3,
      explain: "Lozan (1923) yeni devletin tanındığı barış antlaşmasıdır.",
      solution: { short: "Lozan (1923) bağımsızlığı tanıdı.", steps: ["Mudanya ateşkesinden sonra Lozan imzalandı.", "Yeni Türkiye uluslararası tanındı."], whyOthersWrong: ["Mondros/Sevr aleyhte.", "Mudanya ateşkes.", "Ankara Antlaşması Fransa ile sınırlı."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-inkilap-001", subject: "sosyal", unit: "tar-inkilap", difficulty: 1, skill: "kavram",
      q: "Cumhuriyet aşağıdaki tarihlerden hangisinde ilan edilmiştir?",
      options: ["23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922", "24 Temmuz 1923", "1 Kasım 1922"], answer: 1,
      explain: "Cumhuriyet 29 Ekim 1923'te ilan edildi.",
      solution: { short: "Cumhuriyet → 29 Ekim 1923.", steps: ["TBMM 29 Ekim 1923'te Cumhuriyeti ilan etti."], whyOthersWrong: ["23 Nisan 1920: TBMM açılışı.", "30 Ağustos 1922: Başkomutanlık.", "24 Temmuz 1923: Lozan.", "1 Kasım 1922: saltanatın kaldırılması."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" },
    { id: "sosyal-tar-cagdas-001", subject: "sosyal", unit: "tar-cagdas", difficulty: 2, skill: "kavram",
      q: "Türkiye NATO'ya hangi yıl üye olmuştur?",
      options: ["1945", "1949", "1952", "1960", "1974"], answer: 2,
      explain: "Türkiye 1952'de NATO'ya üye oldu.",
      solution: { short: "Türkiye NATO'ya 1952'de girdi.", steps: ["Soğuk Savaş'ta Batı bloku.", "Üyelik 1952."], whyOthersWrong: ["1949 NATO'nun kuruluşu (Türkiye yok).", "1945/1960/1974 farklı olaylar."] },
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" }
  ]);
})();
