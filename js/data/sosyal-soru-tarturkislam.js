/* ============================================================
   SOSYAL / TARİH — İlk Türk-İslam Devletleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Kaynak (MEB TYT Tarih) yalnızca kapsam referansı; sorular özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-soru-tarturkislam: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "sosyal", unit: "tar-turkislam", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "bilgi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("tar-turkislam", [
    /* ---- KOLAY (5) ---- */
    Q("sosyal-tar-turkislam-101", "İlk Müslüman Türk devleti aşağıdakilerden hangisidir?",
      ["Karahanlılar", "Gazneliler", "Büyük Selçuklular", "Osmanlılar", "Uygurlar"], 0, "İlk Müslüman Türk devleti Karahanlılardır.",
      { short: "Karahanlılar.", steps: ["İlk Müslüman Türk devleti.", ""], whyOthersWrong: ["Gazneli ve Selçuklu daha sonradır."] }, 1),
    Q("sosyal-tar-turkislam-102", "Malazgirt Savaşı hangi yılda yapılmıştır?",
      ["1071", "1040", "1176", "751", "1096"], 0, "Malazgirt Savaşı 1071'de yapılmıştır.",
      { short: "1071.", steps: ["Alparslan – Bizans.", "1071."], whyOthersWrong: ["1040 Dandanakan'dır."] }, 1),
    Q("sosyal-tar-turkislam-103", "Tarihte 'Sultan' unvanını ilk kez kullanan Türk hükümdarı kimdir?",
      ["Gazneli Mahmud", "Tuğrul Bey", "Alparslan", "Melikşah", "Satuk Buğra Han"], 0, "'Sultan' unvanını ilk kez Gazneli Mahmud kullanmıştır.",
      { short: "Gazneli Mahmud.", steps: ["İlk 'Sultan' → Gazneli Mahmud.", ""], whyOthersWrong: ["Tuğrul Bey Selçuklu kurucusudur."] }, 1),
    Q("sosyal-tar-turkislam-104", "Büyük Selçuklu Devleti hangi savaşla resmen kurulmuştur?",
      ["Dandanakan (1040)", "Malazgirt (1071)", "Katvan (1141)", "Talas (751)", "Bedir"], 0, "Büyük Selçuklu, Dandanakan Savaşı (1040) ile kurulmuştur.",
      { short: "Dandanakan (1040).", steps: ["Gaznelilere karşı zafer.", "Devlet kuruldu."], whyOthersWrong: ["Malazgirt Bizans'a karşıdır."] }, 1),
    Q("sosyal-tar-turkislam-105", "Malazgirt Savaşı'nda Bizans'ı yenen Büyük Selçuklu hükümdarı kimdir?",
      ["Alparslan", "Tuğrul Bey", "Melikşah", "Sultan Sencer", "Gazneli Mahmud"], 0, "Malazgirt'te Bizans'ı Alparslan yenmiştir.",
      { short: "Alparslan.", steps: ["Malazgirt → Alparslan.", ""], whyOthersWrong: ["Tuğrul Bey Dandanakan'ı kazandı."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("sosyal-tar-turkislam-106", "Karahanlılarda İslamiyet'i kabul eden hükümdar kimdir?",
      ["Satuk Buğra Han", "Gazneli Mahmud", "Tuğrul Bey", "Alp Tegin", "Bumin Kağan"], 0, "Karahanlılarda İslam'ı Satuk Buğra Han kabul etmiştir.",
      { short: "Satuk Buğra Han.", steps: ["Karahanlı → İslam.", ""], whyOthersWrong: ["Gazneli Mahmud farklı devlettir."] }, 2),
    Q("sosyal-tar-turkislam-107", "İlk Türk-İslam eserlerinden Kutadgu Bilig'in yazarı kimdir?",
      ["Yusuf Has Hacib", "Kaşgarlı Mahmud", "Ahmet Yesevi", "Firdevsi", "Nizamülmülk"], 0, "Kutadgu Bilig'i Yusuf Has Hacib yazmıştır.",
      { short: "Yusuf Has Hacib.", steps: ["Kutadgu Bilig → Yusuf Has Hacib.", ""], whyOthersWrong: ["Divanü Lugati't-Türk Kaşgarlı Mahmud'undur."] }, 2),
    Q("sosyal-tar-turkislam-108", "Türkçenin zenginliğini göstermek için yazılan Divanü Lugati't-Türk'ün yazarı kimdir?",
      ["Kaşgarlı Mahmud", "Yusuf Has Hacib", "Edip Ahmet", "Ahmet Yesevi", "Firdevsi"], 0, "Divanü Lugati't-Türk'ü Kaşgarlı Mahmud yazmıştır.",
      { short: "Kaşgarlı Mahmud.", steps: ["Türkçe sözlük/dilbilgisi.", ""], whyOthersWrong: ["Kutadgu Bilig Yusuf Has Hacib'indir."] }, 2),
    Q("sosyal-tar-turkislam-109", "Nizamiye Medreselerini kuran Büyük Selçuklu veziri kimdir?",
      ["Nizamülmülk", "Alparslan", "Melikşah", "Tuğrul Bey", "Kaşgarlı Mahmud"], 0, "Nizamiye Medreselerini vezir Nizamülmülk kurmuştur.",
      { short: "Nizamülmülk.", steps: ["Nizamiye → Nizamülmülk.", ""], whyOthersWrong: ["Alparslan/Melikşah sultanlardır."] }, 2),
    Q("sosyal-tar-turkislam-110", "Gazneli Mahmud'un seferler düzenleyerek İslamiyet'i yaydığı bölge aşağıdakilerden hangisidir?",
      ["Hindistan", "Endülüs", "Anadolu", "Mısır", "Balkanlar"], 0, "Gazneli Mahmud Hindistan'a seferler düzenlemiştir.",
      { short: "Hindistan.", steps: ["Gazneli Mahmud → Hindistan.", ""], whyOthersWrong: ["Anadolu Malazgirt sonrası açıldı."] }, 2),
    Q("sosyal-tar-turkislam-111", "Dandanakan Savaşı (1040) hangi iki devlet arasında yapılmıştır?",
      ["Selçuklular – Gazneliler", "Selçuklular – Bizans", "Karahanlılar – Gazneliler", "Selçuklular – Karahitaylar", "Gazneliler – Bizans"], 0, "Dandanakan Selçuklu-Gazneli arasında yapılmıştır.",
      { short: "Selçuklu – Gazneli.", steps: ["1040 Dandanakan.", ""], whyOthersWrong: ["Malazgirt Bizans'a karşıdır."] }, 2),
    Q("sosyal-tar-turkislam-112", "Malazgirt Savaşı (1071) hangi devlete karşı kazanılmıştır?",
      ["Bizans", "Gazneliler", "Karahitaylar", "Abbasiler", "Karahanlılar"], 0, "Malazgirt Bizans'a karşı kazanılmıştır.",
      { short: "Bizans.", steps: ["1071 → Bizans.", ""], whyOthersWrong: ["Dandanakan Gaznelilere karşıdır."] }, 2),
    Q("sosyal-tar-turkislam-113", "Büyük Selçuklularda toprağın gelirinin hizmet ve asker karşılığı görevlilere verildiği sisteme ne ad verilir?",
      ["İkta", "Tımar", "Divan", "Ribat", "Satraplık"], 0, "Bu sisteme ikta denir (Osmanlı'daki tımarın öncüsü).",
      { short: "İkta.", steps: ["Selçuklu toprak sistemi → ikta.", ""], whyOthersWrong: ["Tımar Osmanlı'dadır."] }, 2),
    Q("sosyal-tar-turkislam-114", "Büyük Selçuklu Devleti'nin en geniş sınırlara ulaştığı ve Celali takviminin hazırlandığı hükümdar dönemi hangisidir?",
      ["Melikşah", "Tuğrul Bey", "Alparslan", "Sultan Sencer", "Gazneli Mahmud"], 0, "Devlet Melikşah döneminde zirveye ulaşmış, Celali takvimi hazırlanmıştır.",
      { short: "Melikşah.", steps: ["Zirve + Celali takvim.", ""], whyOthersWrong: ["Tuğrul Bey kuruluş dönemidir."] }, 2),
    Q("sosyal-tar-turkislam-115", "Karahanlıların resmî dil olarak kullandığı dil aşağıdakilerden hangisidir?",
      ["Türkçe", "Arapça", "Farsça", "Latince", "Soğdca"], 0, "Karahanlılar resmî dil olarak Türkçe kullanmıştır.",
      { short: "Türkçe.", steps: ["Türk kültürüne bağlılık.", ""], whyOthersWrong: ["Gazneliler Farsça-Arapça'ya önem verdi."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("sosyal-tar-turkislam-116", "Malazgirt Zaferi'nin (1071) en önemli sonucu aşağıdakilerden hangisidir?",
      ["Anadolu'nun Türklere yurt olmaya başlaması", "Büyük Selçuklu'nun kurulması", "İlk Türk-İslam eserlerinin yazılması", "'Sultan' unvanının kullanılması", "Nizamiye Medreselerinin açılması"], 0, "Malazgirt sonrası Anadolu Türk yurdu olmaya başlamıştır.",
      { short: "Anadolu Türk yurdu oldu.", steps: ["Bizans yenildi.", "Anadolu'nun kapısı açıldı."], whyOthersWrong: ["Devletin kuruluşu Dandanakan'dır."] }, 3),
    Q("sosyal-tar-turkislam-117", "Karahanlıların Türkçeyi resmî dil yapması ve Türk kültürünü koruması aşağıdakilerden hangisini gösterir?",
      ["Millî kimliklerine bağlı kaldıklarını", "Denizciliğe önem verdiklerini", "Yerleşik hayata geçmediklerini", "Halifeliği ele geçirdiklerini", "Para basmadıklarını"], 0, "Türkçeyi korumaları millî kimliğe bağlılıklarını gösterir.",
      { short: "Millî kimliğe bağlılık.", steps: ["Dil = kimlik.", "Türkçe korunmuş."], whyOthersWrong: ["Diğerleri konu ile ilgisizdir."] }, 3),
    Q("sosyal-tar-turkislam-118", "Büyük Selçuklularda ikta sisteminin sağladığı faydalardan biri aşağıdakilerden hangisidir?",
      ["Hazineye yük olmadan güçlü bir ordu beslenmesi", "Denizciliğin gelişmesi", "Halifeliğin ele geçirilmesi", "Yazının bulunması", "Para basımının yasaklanması"], 0, "İkta, üretimi sürdürürken devlete maaş yükü olmadan asker beslenmesini sağladı.",
      { short: "Ordu + üretim sürekliliği.", steps: ["Toprak geliri askere.", "Hazine korunur."], whyOthersWrong: ["Diğerleri ikta ile ilgili değildir."] }, 3),
    Q("sosyal-tar-turkislam-119", "Nizamiye Medreselerinin açılmasının temel amaçlarından biri aşağıdakilerden hangisidir?",
      ["Bilim insanı ve devlet görevlisi yetiştirmek", "Deniz ticaretini geliştirmek", "Para basmak", "Kervansaray inşa etmek", "Halifeyi seçmek"], 0, "Nizamiye Medreseleri bilim ve devlet kadrosu yetiştirmek için kuruldu.",
      { short: "Bilim + memur yetiştirmek.", steps: ["Eğitim kurumu.", "Devlete kadro."], whyOthersWrong: ["Ticaret/para amacı değildir."] }, 3),
    Q("sosyal-tar-turkislam-120", "Gazneli Mahmud'un 'Sultan' unvanını kullanması aşağıdakilerden hangisini gösterir?",
      ["Halifeden bağımsız, güçlü bir hükümdarlık kurduğunu", "Yerleşik hayata geçtiğini", "Türkçeyi resmî dil yaptığını", "Denizciliğe önem verdiğini", "Kur'an'ı çoğalttığını"], 0, "'Sultan' unvanı güçlü ve bağımsız hükümdarlığın simgesidir.",
      { short: "Bağımsız güçlü hükümdarlık.", steps: ["Sultan = güçlü hükümdar.", ""], whyOthersWrong: ["Diğerleri unvanla ilgili değildir."] }, 3),
    Q("sosyal-tar-turkislam-121", "Aşağıdaki eşleştirmelerden hangisi <b>yanlıştır</b>?",
      ["Gazneli Mahmud – Malazgirt Savaşı", "Karahanlılar – ilk Müslüman Türk devleti", "Alparslan – Malazgirt", "Nizamülmülk – Nizamiye Medreseleri", "Tuğrul Bey – Dandanakan"], 0, "Malazgirt'i Alparslan kazanmıştır; Gazneli Mahmud değil.",
      { short: "Gazneli–Malazgirt yanlış.", steps: ["Malazgirt → Alparslan.", "Gazneli Mahmud → Hindistan."], whyOthersWrong: ["Diğer eşleştirmeler doğrudur."] }, 3),
    Q("sosyal-tar-turkislam-122", "İlk Türk-İslam eserlerinin (Kutadgu Bilig, Divanü Lugati't-Türk) Karahanlı döneminde yazılması aşağıdakilerden hangisini gösterir?",
      ["Türk dili ve kültürünün korunduğunu", "Denizciliğin geliştiğini", "Halifeliğin ele geçirildiğini", "Para ekonomisine geçildiğini", "Yerleşik hayatın terk edildiğini"], 0, "Türkçe eserler, Türk dili ve kültürünün canlı tutulduğunu gösterir.",
      { short: "Türk dili/kültürü korundu.", steps: ["Türkçe eserler yazıldı.", ""], whyOthersWrong: ["Diğerleri eserlerle ilgili değildir."] }, 3),
    Q("sosyal-tar-turkislam-123", "Dandanakan (1040) ve Malazgirt (1071) savaşlarından hangisi daha önce yaşanmıştır ve sonucu nedir?",
      ["Dandanakan; Büyük Selçuklu kuruldu", "Malazgirt; Anadolu açıldı", "Dandanakan; Anadolu açıldı", "Malazgirt; devlet kuruldu", "İkisi aynı yıldadır"], 0, "Önce Dandanakan (1040) olmuş, Büyük Selçuklu kurulmuştur.",
      { short: "Dandanakan önce; devlet kuruldu.", steps: ["1040 < 1071.", "Dandanakan → kuruluş."], whyOthersWrong: ["Anadolu Malazgirt ile açıldı."] }, 3),
    Q("sosyal-tar-turkislam-124", "Büyük Selçuklu Devleti'nin çöküşünü hızlandıran, Karahitaylara karşı kaybedilen savaş hangisidir?",
      ["Katvan Savaşı (1141)", "Malazgirt (1071)", "Dandanakan (1040)", "Talas (751)", "Bedir"], 0, "Katvan Savaşı (1141) yenilgisi çöküşü hızlandırmıştır.",
      { short: "Katvan (1141).", steps: ["Karahitaylara yenilgi.", "Çöküş başladı."], whyOthersWrong: ["Malazgirt bir zaferdir."] }, 3),
    Q("sosyal-tar-turkislam-125", "Büyük Selçuklu Devleti'nin son güçlü hükümdarı kabul edilen ve devletin dağılma sürecine girdiği dönemin hükümdarı kimdir?",
      ["Sultan Sencer", "Tuğrul Bey", "Alparslan", "Melikşah", "Gazneli Mahmud"], 0, "Son güçlü hükümdar Sultan Sencer'dir.",
      { short: "Sultan Sencer.", steps: ["Son güçlü hükümdar.", "Sonrası dağılma."], whyOthersWrong: ["Melikşah zirve dönemidir."] }, 3)
  ]);
})();
