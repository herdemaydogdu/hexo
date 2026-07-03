/* ============================================================
   SOSYAL / TARİH — İslamiyet Öncesi Türk Tarihi: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Kaynak (MEB TYT Tarih) yalnızca kapsam referansı; sorular özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-soru-tarilkturk: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "sosyal", unit: "tar-ilkturk", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "bilgi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("tar-ilkturk", [
    /* ---- KOLAY (5) ---- */
    Q("sosyal-tar-ilkturk-101", "Bilinen ilk teşkilatlı Türk devleti aşağıdakilerden hangisidir?",
      ["Asya (Büyük) Hun Devleti", "Göktürkler", "Uygurlar", "Hazarlar", "Avarlar"], 0, "Bilinen ilk teşkilatlı Türk devleti Asya (Büyük) Hun Devleti'dir.",
      { short: "Asya Hunları.", steps: ["İlk teşkilatlı → Asya Hun.", ""], whyOthersWrong: ["Göktürk ve Uygur daha sonradır."] }, 1),
    Q("sosyal-tar-ilkturk-102", "'Türk' adını ilk kez devlet adı olarak kullanan Türk devleti hangisidir?",
      ["Göktürkler", "Asya Hunları", "Uygurlar", "Bulgarlar", "Peçenekler"], 0, "'Türk' adını devlet adı yapan Göktürkler'dir.",
      { short: "Göktürkler.", steps: ["'Türk' adı → Göktürk.", ""], whyOthersWrong: ["Diğerleri bu adı devlet adı yapmadı."] }, 1),
    Q("sosyal-tar-ilkturk-103", "Yerleşik hayata geçen ilk Türk topluluğu hangisidir?",
      ["Uygurlar", "Göktürkler", "Asya Hunları", "Avarlar", "Kırgızlar"], 0, "Yerleşik hayata geçen ilk Türkler Uygurlardır.",
      { short: "Uygurlar.", steps: ["Yerleşik ilk Türk → Uygur.", ""], whyOthersWrong: ["Diğerleri konar-göçerdi."] }, 1),
    Q("sosyal-tar-ilkturk-104", "İslamiyet öncesi Türklerin ana yurdu neresidir?",
      ["Orta Asya", "Anadolu", "Mezopotamya", "Balkanlar", "Kafkasya"], 0, "Türklerin ana yurdu Orta Asya'dır.",
      { short: "Orta Asya.", steps: ["Ana yurt → Orta Asya.", ""], whyOthersWrong: ["Diğer bölgelere göçlerle gidildi."] }, 1),
    Q("sosyal-tar-ilkturk-105", "İslamiyet öncesi Türklerin benimsediği tek tanrılı inanç hangisidir?",
      ["Gök Tanrı", "Musevilik", "Mani", "Budizm", "Hristiyanlık"], 0, "İslam öncesi Türklerin özgün inancı Gök Tanrı dinidir.",
      { short: "Gök Tanrı.", steps: ["Türklerin özgün inancı.", ""], whyOthersWrong: ["Mani/Musevilik bazı Türk devletlerince sonradan alındı."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("sosyal-tar-ilkturk-106", "Orduyu onlu sisteme göre düzenleyen Asya Hun hükümdarı kimdir?",
      ["Mete Han", "Attila", "Bumin Kağan", "Bilge Kağan", "Kürşad"], 0, "Onlu sistemi kuran Mete Han (Motun)'dur.",
      { short: "Mete Han.", steps: ["Onlu sistem → Mete Han.", ""], whyOthersWrong: ["Attila Avrupa Hun hükümdarıdır."] }, 2),
    Q("sosyal-tar-ilkturk-107", "İlk Türkçe yazılı belge kabul edilen eser aşağıdakilerden hangisidir?",
      ["Orhun (Göktürk) Yazıtları", "Divanü Lugati't-Türk", "Kutadgu Bilig", "Yenisey Yazıtları", "Oğuz Kağan Destanı"], 0, "İlk Türkçe yazılı belge Orhun (Göktürk) Yazıtları'dır.",
      { short: "Orhun Yazıtları.", steps: ["İlk Türkçe yazılı belge.", ""], whyOthersWrong: ["Divanü Lugati't-Türk İslami dönemdedir."] }, 2),
    Q("sosyal-tar-ilkturk-108", "375 yılında yaşanan ve Avrupa'da Orta Çağ'ı başlatan Kavimler Göçü'nü başlatan Türkler hangileridir?",
      ["Batı (Avrupa) Hunları", "Asya Hunları", "Uygurlar", "Göktürkler", "Hazarlar"], 0, "Kavimler Göçü'nü Batı (Avrupa) Hunları başlatmıştır.",
      { short: "Batı Hunları.", steps: ["Göç → Batı/Avrupa Hun baskısı.", "375'te başladı."], whyOthersWrong: ["Asya Hunları Orta Asya'dadır."] }, 2),
    Q("sosyal-tar-ilkturk-109", "Tarihte ilk Türk parasını bastığı kabul edilen Türk devleti hangisidir?",
      ["Türgişler", "Uygurlar", "Göktürkler", "Hazarlar", "Avarlar"], 0, "İlk Türk parasını Türgişler basmıştır.",
      { short: "Türgişler.", steps: ["İlk Türk parası → Türgiş.", ""], whyOthersWrong: ["Diğerleri para basmadı."] }, 2),
    Q("sosyal-tar-ilkturk-110", "İstanbul'u kuşatan ilk Türk devleti aşağıdakilerden hangisidir?",
      ["Avarlar", "Hazarlar", "Bulgarlar", "Peçenekler", "Kırgızlar"], 0, "İstanbul'u kuşatan ilk Türk devleti Avarlardır.",
      { short: "Avarlar.", steps: ["İstanbul kuşatması → Avar.", ""], whyOthersWrong: ["Diğerleri İstanbul'u kuşatmadı."] }, 2),
    Q("sosyal-tar-ilkturk-111", "Museviliği (Yahudilik) resmî din olarak benimseyen Türk devleti hangisidir?",
      ["Hazarlar", "Uygurlar", "Göktürkler", "Avarlar", "Türgişler"], 0, "Museviliği benimseyen Türk devleti Hazarlardır.",
      { short: "Hazarlar.", steps: ["Musevilik → Hazar.", ""], whyOthersWrong: ["Uygurlar Mani dinini benimsedi."] }, 2),
    Q("sosyal-tar-ilkturk-112", "Aşağıdakilerden hangisi Türk göçlerinin nedenlerinden biri <b>değildir</b>?",
      ["Denizlere hâkim olma isteği", "Kuraklık ve iklim değişikliği", "Otlak yetersizliği", "Nüfus artışı", "Boylar arası mücadele"], 0, "Türk göçleri kara temellidir; denizlere hâkimiyet bir neden değildir.",
      { short: "Denizcilik değil.", steps: ["Göç nedenleri: kuraklık, nüfus, otlak, mücadele.", "Denizcilik yok."], whyOthersWrong: ["Diğerleri gerçek göç nedenleridir."] }, 2),
    Q("sosyal-tar-ilkturk-113", "Uygurların benimsediği ve et yemeyi-savaşçılığı azalttığı düşünülen din hangisidir?",
      ["Mani (Manihaizm)", "Musevilik", "Gök Tanrı", "Hristiyanlık", "Budizm"], 0, "Uygurlar Mani dinini benimsemiştir.",
      { short: "Mani dini.", steps: ["Uygur → Mani.", ""], whyOthersWrong: ["Musevilik Hazarlara aittir."] }, 2),
    Q("sosyal-tar-ilkturk-114", "İslamiyet öncesi Türklerde devlet işlerinin görüşüldüğü danışma meclisine ne ad verilir?",
      ["Kurultay (Toy)", "Divan", "Senato", "Satraplık", "Kurgan"], 0, "Türklerde danışma meclisine kurultay (toy) denir.",
      { short: "Kurultay (Toy).", steps: ["Danışma meclisi → kurultay.", ""], whyOthersWrong: ["Kurgan bir mezar türüdür."] }, 2),
    Q("sosyal-tar-ilkturk-115", "İslamiyet öncesi Türklerde ölen kişinin ardından yapılan cenaze törenine ne ad verilir?",
      ["Yuğ", "Balbal", "Kurgan", "Toy", "Töre"], 0, "Cenaze törenine yuğ denir.",
      { short: "Yuğ.", steps: ["Cenaze töreni → yuğ.", ""], whyOthersWrong: ["Kurgan mezar, balbal taş heykeldir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("sosyal-tar-ilkturk-116", "İslamiyet öncesi Türklerde 'Kut' anlayışı aşağıdakilerden hangisini ifade eder?",
      ["Yönetme yetkisinin Gök Tanrı tarafından verilmesi", "Toprakların ikiye bölünmesi", "Ordunun onlu sistemle düzenlenmesi", "Ölülerin kurganlara gömülmesi", "Yazısız hukuk kurallarını"], 0, "Kut, kağana yönetme yetkisinin Gök Tanrı'ca verildiği inancıdır.",
      { short: "İlahî yönetme yetkisi.", steps: ["Kut = Tanrısal egemenlik hakkı.", ""], whyOthersWrong: ["Yazısız hukuk töredir."] }, 3),
    Q("sosyal-tar-ilkturk-117", "Orhun (Göktürk) Yazıtları hangi Türk devleti döneminde dikilmiştir?",
      ["II. Göktürk (Kutluk) Devleti", "Asya Hun Devleti", "Uygur Devleti", "Hazar Devleti", "Avar Devleti"], 0, "Orhun Yazıtları II. Göktürk (Kutluk) Devleti döneminde dikilmiştir.",
      { short: "II. Göktürk.", steps: ["Bilge Kağan, Kültigin, Tonyukuk dönemi.", ""], whyOthersWrong: ["Uygur alfabesi ayrıdır."] }, 3),
    Q("sosyal-tar-ilkturk-118", "İslamiyet öncesi Türklerde ölen bir kişinin mezarına, öldürdüğü düşman sayısınca dikilen taşlara ne ad verilir?",
      ["Balbal", "Kurgan", "Yuğ", "Töre", "Damga"], 0, "Bu taşlara balbal denir.",
      { short: "Balbal.", steps: ["Öldürülen düşman sayısınca taş.", "= balbal."], whyOthersWrong: ["Kurgan mezarın kendisidir."] }, 3),
    Q("sosyal-tar-ilkturk-119", "Uygurların yerleşik hayata geçmesinin bir sonucu olarak aşağıdakilerden hangisi görülür?",
      ["Mimari ve ticaretin gelişmesi", "Onlu ordu sisteminin kurulması", "İlk Türk devletinin kurulması", "'Türk' adının devlet adı olması", "Kavimler Göçü'nün başlaması"], 0, "Yerleşik hayat mimari, tarım ve ticareti geliştirmiştir.",
      { short: "Mimari/ticaret gelişti.", steps: ["Yerleşik hayat → kalıcı eserler.", "Ticaret gelişir."], whyOthersWrong: ["Diğerleri farklı devletlere/olaylara aittir."] }, 3),
    Q("sosyal-tar-ilkturk-120", "Türklerde ülkenin doğu-batı olarak iki koldan yönetilmesi (ikili yönetim) aşağıdakilerden hangisini kolaylaştırmıştır?",
      ["Geniş toprakların yönetilmesini", "Yerleşik hayata geçişi", "Para basılmasını", "Denizciliğin gelişmesini", "Yazının bulunmasını"], 0, "İkili yönetim, çok geniş toprakların daha kolay yönetilmesini sağlamıştır.",
      { short: "Geniş toprak yönetimi.", steps: ["Doğu-batı kolları.", "Yönetim kolaylaşır."], whyOthersWrong: ["Diğerleri ikili yönetimle ilgili değildir."] }, 3),
    Q("sosyal-tar-ilkturk-121", "İslamiyet öncesi Türklerde yazısız hukuk kurallarına verilen ad aşağıdakilerden hangisidir?",
      ["Töre", "Kut", "Toy", "Yuğ", "Kurgan"], 0, "Yazısız hukuk kurallarına töre denir.",
      { short: "Töre.", steps: ["Yazısız hukuk → töre.", ""], whyOthersWrong: ["Kut egemenlik anlayışıdır."] }, 3),
    Q("sosyal-tar-ilkturk-122", "Asya Hunları ile Çin arasındaki mücadeleler, Çinlilerin hangi büyük savunma yapısını inşa etmesinde etkili olmuştur?",
      ["Çin Seddi", "Kral Yolu", "Nizamiye Medresesi", "Kurgan", "Ziggurat"], 0, "Hun akınlarına karşı Çin Seddi yapılmıştır.",
      { short: "Çin Seddi.", steps: ["Hun akınları → savunma.", "Çin Seddi."], whyOthersWrong: ["Kral Yolu Lidya/Pers ile ilgilidir."] }, 3),
    Q("sosyal-tar-ilkturk-123", "Türklerin konar-göçer (göçebe) yaşamının bir sonucu olarak aşağıdakilerden hangisi söylenebilir?",
      ["Kalıcı mimari eserlerin az olması", "Yerleşik tarımın gelişmesi", "Büyük şehirlerin kurulması", "Deniz ticaretinin gelişmesi", "Matbaanın bulunması"], 0, "Sürekli yer değiştiren göçebe toplumda kalıcı büyük yapılar azdır.",
      { short: "Az kalıcı eser.", steps: ["Göçebe → taşınabilir kültür.", "Kalıcı yapı az."], whyOthersWrong: ["Yerleşik hayat sonuçları farklıdır."] }, 3),
    Q("sosyal-tar-ilkturk-124", "Aşağıdaki eşleştirmelerden hangisi <b>yanlıştır</b>?",
      ["Göktürkler – ilk Türk parası", "Asya Hunları – Mete Han", "Uygurlar – yerleşik hayat", "Göktürkler – Orhun Yazıtları", "Hazarlar – Musevilik"], 0, "İlk Türk parasını Türgişler basmıştır; Göktürkler değil.",
      { short: "Göktürk–para yanlış.", steps: ["Para → Türgiş.", "Göktürk → Orhun Yazıtları."], whyOthersWrong: ["Diğer eşleştirmeler doğrudur."] }, 3),
    Q("sosyal-tar-ilkturk-125", "İslamiyet öncesi Türklerde 'ordu-millet' anlayışının oluşmasında etkili olan temel etken aşağıdakilerden hangisidir?",
      ["Göçebe yaşam ve sürekli mücadele ortamı", "Yerleşik tarım düzeni", "Deniz ticareti", "Tek tanrılı dine geçiş", "Para ekonomisi"], 0, "Göçebe ve mücadeleci hayat, her bireyin asker sayıldığı ordu-millet yapısını doğurdu.",
      { short: "Göçebe/mücadele hayatı.", steps: ["Sürekli savaş ortamı.", "Herkes asker → ordu-millet."], whyOthersWrong: ["Yerleşik/ticari düzen bu yapıyı doğurmaz."] }, 3)
  ]);
})();
