/* ============================================================
   SOSYAL / TARİH — Tarih Bilimi ve Zaman: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; tarihî bilgiler doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-soru-tarbilim: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "sosyal", unit: "tar-bilim", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "bilgi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("tar-bilim", [
    /* ---- KOLAY (5) ---- */
    Q("sosyal-tar-bilim-101", "Tarih öncesi çağlar ile tarihî çağları birbirinden ayıran gelişme aşağıdakilerden hangisidir?",
      ["Yazının icadı", "Ateşin bulunması", "Tekerleğin icadı", "Tarımın başlaması", "Paranın kullanılması"], 0, "Yazının bulunmasıyla (MÖ 3200 civarı) tarihî çağlar başlar.",
      { short: "Yazının icadı.", steps: ["Yazı öncesi = tarih öncesi.", "Yazı sonrası = tarihî çağlar."], whyOthersWrong: ["Diğerleri tarih öncesi gelişmelerdir."] }, 1),
    Q("sosyal-tar-bilim-102", "Kazılar yaparak eski uygarlıkların kalıntılarını inceleyen bilim dalı hangisidir?",
      ["Arkeoloji", "Nümizmatik", "Paleografya", "Etnografya", "Coğrafya"], 0, "Arkeoloji (kazı bilimi) toprak altındaki kalıntıları inceler.",
      { short: "Arkeoloji.", steps: ["Kazı = arkeoloji.", ""], whyOthersWrong: ["Nümizmatik para, paleografya yazı inceler."] }, 1),
    Q("sosyal-tar-bilim-103", "Bir yüzyıl (asır) kaç yıldır?",
      ["100", "10", "1000", "50", "60"], 0, "Bir yüzyıl 100 yıldır.",
      { short: "100 yıl.", steps: ["Yüzyıl = asır = 100 yıl.", ""], whyOthersWrong: ["10 yıl bir on yıldır."] }, 1),
    Q("sosyal-tar-bilim-104", "Eski paraları (sikkeleri) inceleyen yardımcı bilim dalı hangisidir?",
      ["Nümizmatik", "Epigrafya", "Heraldik", "Kronoloji", "Filoloji"], 0, "Nümizmatik para/sikke bilimidir.",
      { short: "Nümizmatik.", steps: ["Para/sikke → nümizmatik.", ""], whyOthersWrong: ["Epigrafya kitabe, heraldik arma inceler."] }, 1),
    Q("sosyal-tar-bilim-105", "Olayların oluş sırasını ve zamanını (takvim) inceleyen yardımcı bilim hangisidir?",
      ["Kronoloji", "Arkeoloji", "Etnografya", "Diplomatik", "Antropoloji"], 0, "Kronoloji zaman ve takvim bilimidir.",
      { short: "Kronoloji.", steps: ["Zaman/takvim → kronoloji.", ""], whyOthersWrong: ["Diğerleri farklı alanları inceler."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("sosyal-tar-bilim-106", "Eski yazıların okunmasını ve çözülmesini sağlayan yardımcı bilim hangisidir?",
      ["Paleografya", "Nümizmatik", "Heraldik", "Etnografya", "Kronoloji"], 0, "Paleografya eski yazı bilimidir.",
      { short: "Paleografya.", steps: ["Eski yazı → paleografya.", ""], whyOthersWrong: ["Nümizmatik para inceler."] }, 2),
    Q("sosyal-tar-bilim-107", "Kitabe ve yazıtları inceleyen yardımcı bilim dalı hangisidir?",
      ["Epigrafya", "Paleografya", "Diplomatik", "Nümizmatik", "Filoloji"], 0, "Epigrafya kitabe/yazıt bilimidir.",
      { short: "Epigrafya.", steps: ["Kitabe/yazıt → epigrafya.", ""], whyOthersWrong: ["Paleografya el yazılarını inceler."] }, 2),
    Q("sosyal-tar-bilim-108", "Orta Çağ'ın başlangıcı olarak kabul edilen olay aşağıdakilerden hangisidir?",
      ["Kavimler Göçü (375)", "İstanbul'un Fethi (1453)", "Fransız İhtilali (1789)", "Yazının icadı", "Coğrafi Keşifler"], 0, "İlk Çağ, Kavimler Göçü (375) ile sona erip Orta Çağ başlar.",
      { short: "Kavimler Göçü (375).", steps: ["İlk Çağ sonu = Kavimler Göçü.", "Orta Çağ başlar."], whyOthersWrong: ["1453 Yeni Çağ'ı başlatır."] }, 2),
    Q("sosyal-tar-bilim-109", "Yeni Çağ'ın başlangıcı sayılan olay hangisidir?",
      ["İstanbul'un Fethi (1453)", "Kavimler Göçü (375)", "Fransız İhtilali (1789)", "Sanayi İnkılabı", "Yazının icadı"], 0, "Orta Çağ, İstanbul'un Fethi (1453) ile biter; Yeni Çağ başlar.",
      { short: "İstanbul'un Fethi (1453).", steps: ["Orta Çağ sonu = 1453.", "Yeni Çağ başlar."], whyOthersWrong: ["1789 Yakın Çağ'ı başlatır."] }, 2),
    Q("sosyal-tar-bilim-110", "Yakın Çağ'ın başlangıcı olarak kabul edilen olay hangisidir?",
      ["Fransız İhtilali (1789)", "İstanbul'un Fethi (1453)", "Kavimler Göçü (375)", "Reform Hareketleri", "Haçlı Seferleri"], 0, "Yeni Çağ, Fransız İhtilali (1789) ile sona erer; Yakın Çağ başlar.",
      { short: "Fransız İhtilali (1789).", steps: ["Yeni Çağ sonu = 1789.", "Yakın Çağ başlar."], whyOthersWrong: ["1453 Yeni Çağ'ı başlatır."] }, 2),
    Q("sosyal-tar-bilim-111", "Toplumların örf, adet, gelenek ve kültürlerini inceleyen yardımcı bilim hangisidir?",
      ["Etnografya", "Arkeoloji", "Nümizmatik", "Epigrafya", "Kronoloji"], 0, "Etnografya kültür ve gelenekleri inceler.",
      { short: "Etnografya.", steps: ["Örf/âdet/kültür → etnografya.", ""], whyOthersWrong: ["Arkeoloji maddi kalıntıları inceler."] }, 2),
    Q("sosyal-tar-bilim-112", "Müslümanların kullandığı, Ay yılı esasına dayanan takvim hangisidir?",
      ["Hicri Takvim", "Miladi Takvim", "Celali Takvim", "12 Hayvanlı Türk Takvimi", "Rumi Takvim"], 0, "Hicri Takvim Ay yılı (354 gün) esaslıdır.",
      { short: "Hicri Takvim.", steps: ["Ay yılı esaslı.", "= Hicri Takvim."], whyOthersWrong: ["Miladi takvim Güneş yılı esaslıdır."] }, 2),
    Q("sosyal-tar-bilim-113", "Türklerin İslamiyet'ten önce kullandığı, Güneş yılı esaslı takvim hangisidir?",
      ["12 Hayvanlı Türk Takvimi", "Hicri Takvim", "Celali Takvim", "Miladi Takvim", "Rumi Takvim"], 0, "12 Hayvanlı Türk Takvimi Güneş yılı esaslıdır.",
      { short: "12 Hayvanlı Türk Takvimi.", steps: ["İslam öncesi Türk takvimi.", "Güneş yılı esaslı."], whyOthersWrong: ["Hicri takvim Ay yılı esaslıdır."] }, 2),
    Q("sosyal-tar-bilim-114", "Aşağıdakilerden hangisi bir olay için birinci elden (birincil) kaynaktır?",
      ["Olayın geçtiği döneme ait bir ferman", "Sonradan yazılmış bir tarih kitabı", "Bir ansiklopedi maddesi", "Güncel bir gazete yorumu", "Bir belgesel filmi"], 0, "Birincil kaynak olayın kendi dönemine aittir (ferman, kitabe, para vb.).",
      { short: "Döneme ait ferman.", steps: ["Birincil = döneme ait.", "Ferman birincildir."], whyOthersWrong: ["Sonradan üretilenler ikincil kaynaktır."] }, 2),
    Q("sosyal-tar-bilim-115", "Tarih öncesi devirlerin ilki (en eskisi) aşağıdakilerden hangisidir?",
      ["Kaba Taş (Paleolitik) Devri", "Cilalı Taş Devri", "Tunç Devri", "Demir Devri", "Bakır Devri"], 0, "Tarih öncesi Kaba Taş (Paleolitik) ile başlar.",
      { short: "Kaba Taş Devri.", steps: ["En eski taş devridir.", ""], whyOthersWrong: ["Maden devirleri daha sonradır."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("sosyal-tar-bilim-116", "Tarih biliminde deney ve gözlem yönteminin kullanılamamasının temel nedeni nedir?",
      ["Geçmiş olayların tekrarlanamaması", "Belgelerin yetersiz olması", "Olayların yerinin bilinmemesi", "Takvimlerin farklılığı", "Kaynakların çok olması"], 0, "Tarihî olaylar bir daha yaşanamadığından deney-gözlem yapılamaz.",
      { short: "Olaylar tekrarlanamaz.", steps: ["Geçmiş tekrar yaşanmaz.", "Deney-gözlem yapılamaz."], whyOthersWrong: ["Temel neden olayların biricikliğidir."] }, 3),
    Q("sosyal-tar-bilim-117", "Fermanları, beratları ve resmî belgeleri, doğruluklarını da araştırarak inceleyen yardımcı bilim hangisidir?",
      ["Diplomatik", "Epigrafya", "Heraldik", "Nümizmatik", "Etnografya"], 0, "Diplomatik, resmî belge ve fermanları inceleyen bilimdir.",
      { short: "Diplomatik.", steps: ["Ferman/berat/belge → diplomatik.", ""], whyOthersWrong: ["Epigrafya taş kitabeleri inceler."] }, 3),
    Q("sosyal-tar-bilim-118", "Arma, mühür ve sembolleri inceleyen yardımcı bilim dalı hangisidir?",
      ["Heraldik", "Nümizmatik", "Paleografya", "Kronoloji", "Filoloji"], 0, "Heraldik arma ve mühür bilimidir.",
      { short: "Heraldik.", steps: ["Arma/mühür → heraldik.", ""], whyOthersWrong: ["Nümizmatik para inceler."] }, 3),
    Q("sosyal-tar-bilim-119", "Miladi takvimde başlangıç (sıfır) noktası olarak kabul edilen olay nedir?",
      ["Hz. İsa'nın doğumu", "Hz. Muhammed'in hicreti", "Roma'nın kuruluşu", "İstanbul'un Fethi", "Yazının icadı"], 0, "Miladi takvim Hz. İsa'nın doğumunu başlangıç alır.",
      { short: "Hz. İsa'nın doğumu.", steps: ["Milat = Hz. İsa'nın doğumu.", ""], whyOthersWrong: ["Hicret Hicri takvimin başlangıcıdır."] }, 3),
    Q("sosyal-tar-bilim-120", "Hicri takvimin başlangıç yılı olarak alınan olay hangisidir?",
      ["Hicret (622)", "Hz. İsa'nın doğumu", "İstanbul'un Fethi", "Malazgirt Savaşı", "Kavimler Göçü"], 0, "Hicri takvim, Hz. Muhammed'in Medine'ye hicretini (622) başlangıç alır.",
      { short: "Hicret (622).", steps: ["Hicri takvim → Hicret.", "622 yılı."], whyOthersWrong: ["Hz. İsa'nın doğumu Miladi takvimindir."] }, 3),
    Q("sosyal-tar-bilim-121", "MÖ 250 yılı hangi yüzyıl içindedir?",
      ["MÖ 3. yüzyıl", "MÖ 2. yüzyıl", "MÖ 25. yüzyıl", "MS 3. yüzyıl", "MÖ 4. yüzyıl"], 0, "201–300 arası MÖ 3. yüzyıldır; 250 bu aralıktadır.",
      { short: "MÖ 3. yüzyıl.", steps: ["201–300 → 3. yüzyıl.", "250 bu aralıkta."], whyOthersWrong: ["Yüzyıl hesabı yüzler basamağıyla bulunur."] }, 3),
    Q("sosyal-tar-bilim-122", "Coğrafi Keşifler, Rönesans ve Reform hareketleri hangi çağda gerçekleşmiştir?",
      ["Yeni Çağ", "Orta Çağ", "Yakın Çağ", "İlk Çağ", "Tarih öncesi"], 0, "Bu gelişmeler 1453–1789 arası Yeni Çağ'da yaşanmıştır.",
      { short: "Yeni Çağ.", steps: ["1453–1789 arası.", "= Yeni Çağ."], whyOthersWrong: ["Yakın Çağ 1789 sonrasıdır."] }, 3),
    Q("sosyal-tar-bilim-123", "Sümer ve Babillilerin kullandığı, Hicri takvime de temel olan yıl esası hangisidir?",
      ["Ay yılı", "Güneş yılı", "Yıldız yılı", "Mevsim yılı", "Gün yılı"], 0, "Ay'ın hareketine dayanan Ay yılı esası kullanılmıştır.",
      { short: "Ay yılı.", steps: ["Ay'ın dolanımı esas alınır.", "Hicri takvim de Ay yılı esaslı."], whyOthersWrong: ["Güneş yılı Mısır/Miladi takvim esasıdır."] }, 3),
    Q("sosyal-tar-bilim-124", "Büyük Selçuklu Sultanı Melikşah döneminde hazırlanan, Güneş yılı esaslı takvim hangisidir?",
      ["Celali Takvim", "Hicri Takvim", "12 Hayvanlı Türk Takvimi", "Miladi Takvim", "Rumi Takvim"], 0, "Melikşah döneminde Celali Takvimi hazırlanmıştır (Güneş yılı esaslı).",
      { short: "Celali Takvim.", steps: ["Melikşah dönemi.", "Güneş yılı esaslı."], whyOthersWrong: ["12 Hayvanlı takvim İslam öncesidir."] }, 3),
    Q("sosyal-tar-bilim-125", "Bir tarihî olay değerlendirilirken, o olayın kendi döneminin koşulları içinde ele alınması gerekir. Bu ilkeye uymamak tarihçiyi hangi hataya götürür?",
      ["Olayı yanlış yorumlamaya", "Kaynak bulmaya", "Kronoloji kullanmaya", "Yer belirtmeye", "Belge toplamaya"], 0, "Günümüz ölçütleriyle geçmişi yargılamak objektifliği bozar ve yanlış yoruma götürür.",
      { short: "Yanlış yoruma.", steps: ["Dönemin koşulları göz ardı edilirse.", "Olay yanlış değerlendirilir."], whyOthersWrong: ["Diğerleri doğru yöntemlerdir."] }, 3)
  ]);
})();
