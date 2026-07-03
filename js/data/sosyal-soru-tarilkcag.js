/* ============================================================
   SOSYAL / TARİH — İlk Çağ Uygarlıkları: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Kaynak (MEB TYT Tarih) yalnızca kapsam referansı; sorular özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-soru-tarilkcag: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "sosyal", unit: "tar-ilkcag", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "bilgi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("tar-ilkcag", [
    /* ---- KOLAY (5) ---- */
    Q("sosyal-tar-ilkcag-101", "Tarihte yazıyı bulan (çivi yazısı) uygarlık aşağıdakilerden hangisidir?",
      ["Sümerler", "Lidyalılar", "Hititler", "Frigler", "Mısırlılar"], 0, "Yazı (çivi yazısı) Sümerler tarafından bulunmuştur.",
      { short: "Sümerler.", steps: ["Çivi yazısı → Sümerler.", ""], whyOthersWrong: ["Mısır hiyeroglif, Fenike alfabe kullandı."] }, 1),
    Q("sosyal-tar-ilkcag-102", "Tarihte ilk madeni parayı basan uygarlık hangisidir?",
      ["Lidyalılar", "Sümerler", "Fenikeliler", "Urartular", "Persler"], 0, "İlk madeni parayı Lidyalılar basmıştır.",
      { short: "Lidyalılar.", steps: ["İlk sikke → Lidya.", ""], whyOthersWrong: ["Diğerleri parayı icat etmedi."] }, 1),
    Q("sosyal-tar-ilkcag-103", "Mısır uygarlığının kullandığı yazı türü aşağıdakilerden hangisidir?",
      ["Hiyeroglif", "Çivi yazısı", "Alfabe", "Gök yazısı", "Runik"], 0, "Mısırlılar hiyeroglif (resim) yazısı kullanmıştır.",
      { short: "Hiyeroglif.", steps: ["Mısır → hiyeroglif.", ""], whyOthersWrong: ["Çivi yazısı Sümerlere aittir."] }, 1),
    Q("sosyal-tar-ilkcag-104", "Mısır ile Kadeş Antlaşması'nı imzalayan Anadolu uygarlığı hangisidir?",
      ["Hititler", "Frigler", "Lidyalılar", "Urartular", "İyonlar"], 0, "Kadeş Antlaşması Hitit-Mısır arasında yapılmıştır.",
      { short: "Hititler.", steps: ["Kadeş → Hitit-Mısır.", ""], whyOthersWrong: ["Diğer Anadolu uygarlıkları taraf değildir."] }, 1),
    Q("sosyal-tar-ilkcag-105", "Tarihte ilk alfabeyi (harf yazısı) oluşturan uygarlık hangisidir?",
      ["Fenikeliler", "Sümerler", "İbraniler", "Mısırlılar", "Hititler"], 0, "İlk alfabe Fenikeliler tarafından oluşturulmuştur.",
      { short: "Fenikeliler.", steps: ["İlk alfabe → Fenike.", ""], whyOthersWrong: ["Sümer çivi yazısı harf sistemi değildir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("sosyal-tar-ilkcag-106", "Sert cezalarıyla (kısasa kısas) bilinen Hammurabi Kanunları hangi uygarlığa aittir?",
      ["Babilliler", "Sümerler", "Asurlular", "Akadlar", "Elamlar"], 0, "Hammurabi Kanunları Babillilere aittir.",
      { short: "Babilliler.", steps: ["Hammurabi → Babil.", ""], whyOthersWrong: ["Sümerlerde ilk kanunlar Urgakina'dır."] }, 2),
    Q("sosyal-tar-ilkcag-107", "Sargon önderliğinde tarihin bilinen ilk imparatorluğunu kuran uygarlık hangisidir?",
      ["Akadlar", "Babilliler", "Asurlular", "Sümerler", "Persler"], 0, "İlk imparatorluğu Akadlar (Sargon) kurmuştur.",
      { short: "Akadlar.", steps: ["İlk imparatorluk → Akad.", ""], whyOthersWrong: ["Sümerler şehir devletleri (site) kurdu."] }, 2),
    Q("sosyal-tar-ilkcag-108", "Ticaret kolonileri aracılığıyla Anadolu'ya yazıyı taşıyan uygarlık hangisidir?",
      ["Asurlular", "Hititler", "Frigler", "Sümerler", "Lidyalılar"], 0, "Asurlular ticaret kolonileriyle (Kültepe/Kaniş) Anadolu'ya yazıyı getirdi.",
      { short: "Asurlular.", steps: ["Anadolu'ya yazı → Asur.", ""], whyOthersWrong: ["Hititler yazıyı Anadolu'ya getirmedi, kullandı."] }, 2),
    Q("sosyal-tar-ilkcag-109", "Tarihte ilk tek tanrılı dine (Musevilik) inanan topluluk hangisidir?",
      ["İbraniler", "Fenikeliler", "Persler", "Mısırlılar", "Frigler"], 0, "İlk tek tanrılı din İbranilere (Musevilik) aittir.",
      { short: "İbraniler.", steps: ["Tek tanrılı ilk din → İbrani.", ""], whyOthersWrong: ["Diğerleri çok tanrılıydı."] }, 2),
    Q("sosyal-tar-ilkcag-110", "Ana Tanrıça Kibele inancı ve tarıma verdikleri önemle bilinen Anadolu uygarlığı hangisidir?",
      ["Frigler", "Lidyalılar", "Urartular", "Hititler", "İyonlar"], 0, "Frigler tarımı kutsal saymış, Kibele'ye tapmıştır.",
      { short: "Frigler.", steps: ["Kibele/tarım → Frig.", ""], whyOthersWrong: ["Lidya parayla, Urartu su kanallarıyla anılır."] }, 2),
    Q("sosyal-tar-ilkcag-111", "Van Gölü çevresinde su kanalları, kaleler ve kaya mezarlarıyla bilinen Anadolu uygarlığı hangisidir?",
      ["Urartular", "Frigler", "İyonlar", "Lidyalılar", "Hititler"], 0, "Urartular Van çevresinde su kanalları ve kaya mezarları yapmıştır.",
      { short: "Urartular.", steps: ["Van/su kanalı → Urartu.", ""], whyOthersWrong: ["Diğerleri farklı bölgelerde gelişti."] }, 2),
    Q("sosyal-tar-ilkcag-112", "Tales ve Pisagor gibi bilim insanlarıyla, özgür düşünce ve bilimde öne çıkan Batı Anadolu uygarlığı hangisidir?",
      ["İyonlar", "Frigler", "Urartular", "Hititler", "Lidyalılar"], 0, "İyonlar bilim ve özgür düşüncede öncüdür.",
      { short: "İyonlar.", steps: ["Bilim/özgür düşünce → İyon.", ""], whyOthersWrong: ["Diğerleri bu alanda öne çıkmadı."] }, 2),
    Q("sosyal-tar-ilkcag-113", "Sümerlerin tapınak olarak yaptığı çok katlı yapılara ne ad verilir?",
      ["Ziggurat", "Piramit", "Zerdüşt", "Site", "Agora"], 0, "Sümer tapınaklarına ziggurat denir.",
      { short: "Ziggurat.", steps: ["Sümer tapınağı → ziggurat.", ""], whyOthersWrong: ["Piramit Mısır'a aittir."] }, 2),
    Q("sosyal-tar-ilkcag-114", "Pers İmparatorluğu'nun ülkeyi yönetmek için ayırdığı eyalet (valilik) birimlerine ne ad verilir?",
      ["Satraplık", "Site", "Nom", "Polis", "Anal"], 0, "Persler ülkeyi satraplıklara bölmüştür.",
      { short: "Satraplık.", steps: ["Pers eyaleti → satraplık.", ""], whyOthersWrong: ["Polis Yunan şehir devletidir."] }, 2),
    Q("sosyal-tar-ilkcag-115", "Mısırlıların mumyalama yapması aşağıdaki alanlardan hangisinin gelişmesini sağlamıştır?",
      ["Tıp ve eczacılık", "Denizcilik", "Para basımı", "Alfabe", "Demokrasi"], 0, "Mumyalama, insan vücudunun tanınmasıyla tıp ve eczacılığı geliştirdi.",
      { short: "Tıp ve eczacılık.", steps: ["Mumyalama → tıp/eczacılık.", ""], whyOthersWrong: ["Denizcilik Fenikelilerle ilgilidir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("sosyal-tar-ilkcag-116", "Bilinen ilk yazılı antlaşma olan Kadeş Antlaşması hangi iki uygarlık arasında imzalanmıştır?",
      ["Hititler – Mısırlılar", "Sümerler – Akadlar", "Persler – Yunanlar", "Lidyalılar – Frigler", "Babilliler – Asurlular"], 0, "Kadeş Antlaşması Hititler ile Mısırlılar arasında yapılmıştır.",
      { short: "Hitit – Mısır.", steps: ["Kadeş → Hitit-Mısır.", "İlk yazılı antlaşma."], whyOthersWrong: ["Diğer ikililer taraf değildir."] }, 3),
    Q("sosyal-tar-ilkcag-117", "Sümerlerde bağımsız şehir devletlerine verilen ad aşağıdakilerden hangisidir?",
      ["Site", "Nom", "Polis", "Satraplık", "Ziggurat"], 0, "Sümer şehir devletlerine 'site' denir.",
      { short: "Site.", steps: ["Sümer şehir devleti → site.", ""], whyOthersWrong: ["Polis Yunan, nom Mısır birimidir."] }, 3),
    Q("sosyal-tar-ilkcag-118", "Hitit krallarının, tanrılara hesap vermek amacıyla yaptıklarını yazdırdıkları yıllıklara ne ad verilir?",
      ["Anal", "Nom", "Site", "Satrap", "Papirüs"], 0, "Hitit yıllıklarına 'anal' denir.",
      { short: "Anal.", steps: ["Hitit yıllığı → anal.", ""], whyOthersWrong: ["Nom Mısır idari birimidir."] }, 3),
    Q("sosyal-tar-ilkcag-119", "Lidyalıların parayı icat etmesinin ekonomik hayata en önemli katkısı aşağıdakilerden hangisidir?",
      ["Takas yerine kolay ve hızlı ticaret", "Yazının bulunması", "Tek tanrılı dinin doğması", "Demokrasinin gelişmesi", "Mumyalamanın yaygınlaşması"], 0, "Para, mal-mal takasının yerini alarak ticareti kolaylaştırdı.",
      { short: "Ticareti kolaylaştırdı.", steps: ["Para → takas biter.", "Ticaret hızlanır."], whyOthersWrong: ["Diğerleri parayla doğrudan ilgili değildir."] }, 3),
    Q("sosyal-tar-ilkcag-120", "Fenikelilerin alfabeyi geliştirmesinde etkili olan temel ihtiyaç aşağıdakilerden hangisidir?",
      ["Ticari kayıtları kolay tutma", "Piramit yapımı", "Su kanalı açma", "Mumyalama", "Satraplık yönetimi"], 0, "Denizci-tüccar Fenikeliler, kayıtları kolaylaştırmak için pratik bir yazı (alfabe) geliştirdi.",
      { short: "Ticari kayıt kolaylığı.", steps: ["Ticaret çok → kolay yazı gerekti.", "Alfabe doğdu."], whyOthersWrong: ["Diğerleri Fenike ile ilgili değildir."] }, 3),
    Q("sosyal-tar-ilkcag-121", "Asurluların Anadolu'da bıraktığı en önemli etki aşağıdakilerden hangisidir?",
      ["Anadolu'da yazılı döneme geçilmesi", "İlk paranın basılması", "Demokrasinin kurulması", "Tek tanrılı dine geçiş", "Piramitlerin yapılması"], 0, "Asur ticaret kolonileri yazıyı getirince Anadolu'da tarihî (yazılı) dönem başladı.",
      { short: "Anadolu'da yazılı dönem.", steps: ["Asur → yazıyı taşıdı.", "Anadolu tarih çağına girdi."], whyOthersWrong: ["Para Lidya, piramit Mısır ile ilgilidir."] }, 3),
    Q("sosyal-tar-ilkcag-122", "Atina şehir devletinde gelişen ve halkın yönetime katılımını sağlayan yönetim biçimi hangisidir?",
      ["Demokrasi", "Monarşi", "Teokrasi", "Satraplık", "Oligarşi"], 0, "Atina'da demokrasi (halkın yönetime katılımı) gelişmiştir.",
      { short: "Demokrasi.", steps: ["Atina → demokrasi.", ""], whyOthersWrong: ["Satraplık Pers yönetim birimidir."] }, 3),
    Q("sosyal-tar-ilkcag-123", "Mısır'da Güneş yılı esaslı takvimin geliştirilmesinde en etkili neden aşağıdakilerden hangisidir?",
      ["Nil'in taşma zamanlarını önceden bilme ihtiyacı", "Deniz ticareti", "Para basımı", "Kaya mezarları", "Alfabe kullanımı"], 0, "Nil'in düzenli taşkınlarını takip etmek için Güneş yılı takvimi geliştirildi.",
      { short: "Nil taşkınları.", steps: ["Tarım Nil'e bağlı.", "Taşkın takibi → takvim."], whyOthersWrong: ["Diğerleri takvimle doğrudan ilgili değildir."] }, 3),
    Q("sosyal-tar-ilkcag-124", "Babillilerde astronomi biliminin gelişmesinde etkili olan temel etken aşağıdakilerden hangisidir?",
      ["Gök cisimlerini gözlemleyip yıldızlara anlam yüklemeleri", "Deniz ticareti", "Mumyalama", "Para basımı", "Satraplık sistemi"], 0, "Gök gözlemleri ve inançları astronominin gelişmesini sağlamıştır.",
      { short: "Gök gözlemi.", steps: ["Yıldız gözlemi/inanç.", "Astronomi gelişti."], whyOthersWrong: ["Diğerleri astronomiyle ilgisizdir."] }, 3),
    Q("sosyal-tar-ilkcag-125", "Aşağıdaki uygarlık-buluş eşleştirmelerinden hangisi <b>yanlıştır</b>?",
      ["Hititler – ilk madeni para", "Sümerler – yazı", "Lidyalılar – para", "Fenikeliler – alfabe", "İbraniler – tek tanrılı din"], 0, "İlk madeni parayı Lidyalılar basmıştır; Hititler değil.",
      { short: "Hitit–para yanlış.", steps: ["Para → Lidya.", "Hitit → Kadeş Antlaşması."], whyOthersWrong: ["Diğer eşleştirmeler doğrudur."] }, 3)
  ]);
})();
