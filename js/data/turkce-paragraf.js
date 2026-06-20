/* ============================================================
   TÜRKÇE — PARAGRAF (ÖSYM/TYT seviyesi premium sorular)
   Çıkmış soruların tarzı/zorluğu referans; paragraflar ve sorular
   SIFIRDAN ÖZGÜN. Soru tipleri: asıl anlatılmak istenen, çıkarılamaz,
   anlatım biçimi, akışı bozan cümle, ikiye bölme, sıralama, boşluk.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-paragraf: content-loader yüklenmedi"); return; }
  var Q = function (id, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: "tr-paragraf", q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 2, skill: "paragraf-yorum",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    Q("turkce-tr-paragraf-201",
      "İyi bir okur, bir kitabı bitirdiğinde onu hemen rafa kaldırıp unutmaz; tersine, o kitabın kendisinde bıraktığı sorularla bir süre daha yaşar. Çünkü okumanın asıl değeri, verdiği bilgi yığınında değil, okurda uyandırdığı düşünme isteğindedir. Bir yapıt, okuru kendi yargılarını yeniden gözden geçirmeye itebiliyorsa görevini yapmış sayılır.<br><br><b>Bu parçada asıl anlatılmak istenen aşağıdakilerden hangisidir?</b>",
      ["Okumak, çok sayıda kitap bitirmeyi gerektirir.", "Bir yapıtın değeri, okuru düşünmeye yöneltmesindedir.", "Kitaplar okunduktan sonra özenle saklanmalıdır.", "Bilgi edinmenin tek yolu kitap okumaktır.", "Her kitap, okura yeni bilgiler sunmalıdır."], 1,
      "Parça, okumanın değerini bilgi yığınında değil, düşünme isteği uyandırmasında bulur.",
      { short: "Yapıtın değeri = düşünmeye yöneltmesi.", steps: ["Anahtar: 'asıl değeri… düşünme isteğindedir' ve 'yargılarını gözden geçirmeye itmek'.", "Asıl mesaj bu."], whyOthersWrong: ["A/D bilgi-nicelik vurgusu; C ayrıntı; E parçada yok."] }, 2),

    Q("turkce-tr-paragraf-202",
      "Usta bir çevirmen, yalnızca sözcükleri bir dilden ötekine aktarmakla yetinmez; metnin sesini, ritmini ve satır aralarına gizlenmiş anlamlarını da taşımaya çalışır. Bu yüzden nitelikli çeviri çoğu zaman yeniden yazmaya yaklaşır. Çevirmen, kaynak metne bağlı kalırken erek dilin doğallığından da ödün vermez; iki dil arasında sürekli bir denge gözetir.<br><br><b>Bu parçadan çevirmenle ilgili olarak aşağıdakilerden hangisi <u>çıkarılamaz</u>?</b>",
      ["Sözcük aktarımının ötesinde bir iş yaptığı", "Metnin biçimsel özelliklerini de gözettiği", "Çalışmasının yeniden yazmaya yaklaşabildiği", "İki dil arasında denge kurmaya çalıştığı", "Kaynak dili ancak ana dili düzeyinde bilirse başarılı olabileceği"], 4,
      "Kaynak dili 'ana dili düzeyinde bilme' koşulu parçada yer almaz; diğerleri doğrudan çıkar.",
      { short: "E parçada söylenmiyor.", steps: ["A-D parçada açıkça var.", "E'deki 'ana dili düzeyinde' koşulu metinde geçmez."], whyOthersWrong: ["A-D cümlelerden doğrudan çıkarılır."] }, 3),

    Q("turkce-tr-paragraf-203",
      "Deneme, yazarın herhangi bir konudaki kişisel görüşlerini, kesin yargılara varma kaygısı gütmeden, içten ve özgür bir dille anlattığı düzyazı türüdür. Yazar, okuruyla âdeta sohbet eder; düşüncelerini kanıtlama zorunluluğu duymadan, dolaylı yoldan paylaşır.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisine başvurulmuştur?</b>",
      ["Örneklendirme", "Tanımlama", "Tanık gösterme", "Karşılaştırma", "Betimleme"], 1,
      "Parça 'Deneme … türüdür' diyerek kavramı tanımlar → tanımlama.",
      { short: "'…türüdür' → tanımlama.", steps: ["Bir kavramın ne olduğu açıklanıyor.", "Bu anlatım biçimi tanımlamadır."], whyOthersWrong: ["Örnek/alıntı/karşılaştırma/betimleme yok."] }, 2),

    Q("turkce-tr-paragraf-204",
      "İnsan, çoğu zaman alışkanlıklarının tutsağıdır. Montaigne'in dediği gibi, alışkanlık ikinci bir doğadır ve çoğu kez birincisinden daha güçlüdür. Gündelik yaşamımızın büyük bölümü, farkında bile olmadığımız bu yerleşik davranışlarla yönetilir.<br><br><b>Bu parçanın anlatımında özellikle aşağıdakilerden hangisine başvurulmuştur?</b>",
      ["Tanımlama", "Benzetme", "Tanık gösterme", "Sayısal verilerden yararlanma", "Karşılaştırma"], 2,
      "Düşünceyi güçlendirmek için Montaigne'den alıntı yapılmış → tanık gösterme.",
      { short: "Montaigne'den alıntı → tanık gösterme.", steps: ["Bir otoritenin sözüne başvurulmuş.", "Bu, tanık göstermedir."], whyOthersWrong: ["Tanım/benzetme/sayısal veri/karşılaştırma belirgin değil."] }, 2),

    Q("turkce-tr-paragraf-205",
      "Köyün girişindeki yaşlı çınar, kalın ve çatlamış gövdesiyle göğe doğru uzanıyordu. Geniş dallarının arasından süzülen öğle ışığı, kuru toprağa benek benek düşüyor; ağacın serin gölgesi, yoldan geçen yorgun yolcuları sessizce kendine çağırıyordu.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b>",
      ["Öyküleme", "Betimleme", "Tartışma", "Tanımlama", "Örneklendirme"], 1,
      "Görüntüler ayrıntılı ve duyulara seslenecek biçimde resmedilmiş → betimleme.",
      { short: "Göze hitap eden ayrıntılı tasvir → betimleme.", steps: ["Çınar, ışık, gölge görsel ayrıntılarla anlatılıyor.", "Bu, betimlemedir."], whyOthersWrong: ["Olay akışı (öyküleme), tartışma, tanım, örnek yok."] }, 2),

    Q("turkce-tr-paragraf-206",
      "(I) Arılar, çiçekten çiçeğe konarak pek çok bitkinin tozlaşmasını sağlar. (II) Bu sayede yediğimiz meyve ve sebzelerin büyük bölümü ürün verebilir. (III) Bilim insanları, son yıllarda arı nüfusundaki hızlı azalmanın tarımı tehdit ettiği konusunda uyarıyor. (IV) Bal, binlerce yıldır insanlar tarafından doğal bir tatlandırıcı olarak kullanılmaktadır. (V) Dolayısıyla arıların korunması, yalnızca doğal denge için değil, gıda güvenliği için de büyük önem taşır.<br><br><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b>",
      ["I", "II", "III", "IV", "V"], 3,
      "Parça arıların tozlaşma/tarım için önemini işler; IV ise balın tatlandırıcı kullanımına geçerek konudan kopar.",
      { short: "IV (bal-tatlandırıcı) akışı bozar.", steps: ["Bütün cümleler arının tarımsal/ekolojik önemini anlatıyor.", "IV farklı bir konuya (balın kullanımı) geçiyor."], whyOthersWrong: ["I-II-III-V aynı düşünce zincirinde."] }, 3),

    Q("turkce-tr-paragraf-207",
      "(I) Şehirler, insan uygarlığının en görkemli ürünlerinden biridir. (II) Tarih boyunca bilim, sanat ve ticaret büyük ölçüde kentlerde gelişmiştir. (III) Ne var ki bugünün kentleri, denetimsiz büyümenin yol açtığı ağır sorunlarla boğuşmaktadır. (IV) Hava kirliliği, trafik ve çarpık yapılaşma, kentlerde yaşam kalitesini her geçen gün düşürüyor. (V) Bu sorunların üstesinden ancak planlı ve insan odaklı bir kentleşmeyle gelinebilir.<br><br><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar?</b>",
      ["I", "II", "III", "IV", "V"], 2,
      "İlk iki cümle kentlerin olumlu yönünü; III'ten itibaren (Ne var ki) sorunları anlatır. Düşünce yönü III'te değişir.",
      { short: "III'te konu olumludan soruna döner.", steps: ["I-II: kentlerin değeri (olumlu).", "III 'Ne var ki' ile sorunlara geçer → ikinci paragraf III'le başlar."], whyOthersWrong: ["IV-V zaten sorun bölümünün devamı."] }, 3),

    Q("turkce-tr-paragraf-208",
      "(I) Olgunlaşan bitki, yeni tohumlar üreterek döngüyü baştan başlatır. (II) Bir bitkinin yaşam döngüsü, küçük bir tohumla başlar. (III) Bu tohumlar rüzgâr, su ya da hayvanlar aracılığıyla yeni yerlere taşınır. (IV) Uygun nem ve sıcaklığı bulan tohum çimlenir, kökleriyle toprağa tutunur. (V) Topraktan beslenen filiz zamanla büyüyüp gelişir.<br><br><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan <u>ikinci</u> olur?</b>",
      ["I", "II", "III", "IV", "V"], 2,
      "Doğru sıra: II (başlar) → III (taşınır) → IV (çimlenir) → V (büyür) → I (döngü yeniden). Baştan ikinci: III.",
      { short: "Sıra II-III-IV-V-I; ikinci = III.", steps: ["Giriş 'tohumla başlar' (II).", "Sonra taşınma (III) gelir.", "İkinci cümle III'tür."], whyOthersWrong: ["Diğer sıralar neden-sonuç/zaman akışını bozar."] }, 3),

    Q("turkce-tr-paragraf-209",
      "Bir toplumun gelişmişliği yalnızca ekonomik büyüme rakamlarıyla ölçülemez. ----. Çünkü gerçek kalkınma, kişi başına düşen gelirden çok, insanların eğitim, sağlık ve özgürlük alanındaki kazanımlarında kendini gösterir.<br><br><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b>",
      ["Ekonomik büyüme her durumda önceliklidir", "Eğitim ve sağlık gibi alanlardaki ilerleme de en az gelir kadar belirleyicidir", "Gelir dağılımı ülkeden ülkeye değişir", "Sayısal veriler kalkınmayı tek başına açıklar", "Toplumlar arasında karşılaştırma yapmak güçtür"], 1,
      "Önce ve sonraki cümleler 'ekonomi tek başına yetmez, asıl insan kazanımları önemli' diyor; boşluk bunu sürdürmeli.",
      { short: "İnsan odaklı kazanımlar da belirleyici (B).", steps: ["Cümle öncesi: ekonomi tek ölçüt değil.", "Cümle sonrası: asıl kalkınma eğitim/sağlık/özgürlükte.", "Boşluk bu köprüyü kurar → B."], whyOthersWrong: ["A/D ekonomiyi tek ölçüt sayar (çelişir); C/E akışla bağ kurmaz."] }, 3),

    Q("turkce-tr-paragraf-210",
      "Sanat yapıtı, yaratıldığı dönemin koşullarından tümüyle bağımsız düşünülemez. Bir ressamın kullandığı renkler, bir yazarın seçtiği konular, çoğu zaman içinde yaşadığı çağın izlerini taşır. Ancak büyük yapıtları kalıcı kılan şey, bu dönemsel izleri aşıp her çağdan insana seslenebilmeleridir.<br><br><b>Bu parçada asıl vurgulanan düşünce aşağıdakilerden hangisidir?</b>",
      ["Sanatçılar yalnızca kendi dönemlerini anlatır.", "Büyük yapıtlar, çağlarının izini taşısa da onu aşıp evrenselleşir.", "Renk ve konu seçimi sanatçının özgürlüğüdür.", "Sanat, toplumdan bağımsız üretilmelidir.", "Her sanat yapıtı kalıcı olmayı hedefler."], 1,
      "Parça, yapıtın dönem izini taşıdığını ama büyüklüğün bunu aşıp evrenselleşmekte olduğunu vurgular.",
      { short: "Dönem izini aşıp evrenselleşme (B).", steps: ["İlk cümleler: yapıt çağının izini taşır.", "Son cümle 'ancak… her çağdan insana seslenir' → asıl vurgu evrensellik."], whyOthersWrong: ["A/C/D/E ya aşırı ya parçada yok."] }, 3),

    Q("turkce-tr-paragraf-211",
      "Teknolojinin gündelik yaşamı kolaylaştırdığı yadsınamaz. Bilgiye birkaç saniyede ulaşıyor, dünyanın öbür ucundaki biriyle anında konuşabiliyoruz. Ne var ki aynı araçlar, dikkatimizi sürekli bölüp bizi yüzeysel bir bilgi tüketimine de sürükleyebiliyor. Önemli olan, teknolojiyi reddetmek değil, onu bilinçli ve ölçülü kullanmaktır.<br><br><b>Bu parçadan aşağıdakilerden hangisi <u>çıkarılamaz</u>?</b>",
      ["Teknoloji bilgiye erişimi hızlandırmıştır.", "Teknolojik araçların olumsuz yönleri de vardır.", "Teknolojiyi bilinçli kullanmak gerekir.", "Teknoloji dikkat dağınıklığına yol açabilir.", "Teknolojik gelişme, eğitimi tümüyle gereksizleştirmiştir."], 4,
      "Eğitimi 'gereksizleştirme' parçada yer almaz; diğerleri doğrudan çıkar.",
      { short: "E parçada yok.", steps: ["A-D metinde açıkça var.", "E aşırı/uydurma çıkarım."], whyOthersWrong: ["A-D doğrudan cümlelere dayanır."] }, 2),

    Q("turkce-tr-paragraf-212",
      "Bazı yazarlar, okurun her şeyi açıkça anlamasını ister; bu yüzden ayrıntıları didik didik açıklar. Bazılarıysa boşluklar bırakır, okuru metnin yapımına ortak eder. Bana kalırsa ikinci yol daha değerlidir; çünkü okur, eksik bırakılanı kendi düş gücüyle tamamladığında metni gerçekten kendisinin kılar.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b>",
      ["Betimleme", "Öyküleme", "Karşılaştırma", "Tanımlama", "Sayısal verilerden yararlanma"], 2,
      "İki farklı yazar tutumu karşılaştırılıp biri üstün tutulmuş → karşılaştırma.",
      { short: "İki tutum karşılaştırılıyor → karşılaştırma.", steps: ["'Bazı yazarlar… bazılarıysa…' iki anlayışı karşı karşıya koyar.", "Bu, karşılaştırmadır."], whyOthersWrong: ["Betimleme/öyküleme/tanım/sayısal veri ağır basmıyor."] }, 2)
  ]);
})();
