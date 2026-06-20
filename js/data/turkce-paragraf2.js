/* ============================================================
   TÜRKÇE — PARAGRAF 2 (2023-2025 TYT mantığı)
   OCR ile incelenen çıkmış soruların deseni: yoğun/soyut paragraf +
   "ulaşılamaz / söylenemez / çıkarılamaz" türü, paraphrase seçenekler.
   Paragraflar ve sorular SIFIRDAN ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-paragraf2: content-loader yüklenmedi"); return; }
  var Q = function (id, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: "tr-paragraf", q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 3, skill: "paragraf-cikarim",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    Q("turkce-tr-paragraf-301",
      "Bir metni okumak, yazarın bıraktığı izleri takip etmek kadar, o izlerin arasındaki boşlukları kendi deneyimimizle doldurmaktır da. Bu yüzden aynı kitap, farklı okurlarda farklı izlenimler bırakır; hatta aynı okur, yıllar sonra aynı kitabı yeniden okuduğunda bambaşka anlamlar bulabilir. Demek ki bir metnin anlamı, yalnızca sayfada yazılı olanda değil, okurun onu nasıl karşıladığında da gizlidir.<br><br><b>Bu parçadan aşağıdakilerin hangisine <u>ulaşılamaz</u>?</b>",
      ["Bir metnin uyandırdığı izlenim, okurdan okura değişebilir.", "Okurun birikimi, metnin anlamlandırılmasında rol oynar.", "Aynı kişi, bir metni farklı zamanlarda farklı anlayabilir.", "Bir metnin anlamı tümüyle yazarın denetimindedir.", "Anlam, yalnızca yazılı sözcüklerden ibaret değildir."], 3,
      "Parça anlamın okurca da kurulduğunu söyler; 'anlam tümüyle yazarın denetimindedir' bununla çelişir, ulaşılamaz.",
      { short: "D çelişir (anlam okurca da kurulur).", steps: ["A,B,C,E cümlelerden doğrudan çıkar.", "D, metnin tezine ('anlam okurda da gizlidir') aykırıdır."], whyOthersWrong: ["A-C-E ve B paragrafın açık ifadeleridir."] }, 3),

    Q("turkce-tr-paragraf-302",
      "Yıllardır aynı kentte yaşıyorum ama onu tam tanıdığımı söyleyemem. Her sabah aynı sokaklardan geçerken bile daha önce fark etmediğim bir kapı, bir ağaç, bir yüz çıkıyor karşıma. Belki de tanımak, bir şeyi tüketmek değil, ona her seferinde yeniden bakabilmektir. Ben de bu yüzden alışkanlığın körlüğüne teslim olmamaya çalışıyorum.<br><br><b>Bu parçanın yazarıyla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b>",
      ["Çevresine dikkatli ve meraklı bir gözle bakar.", "Alışkanlığın, fark etmeyi köreltebileceğini düşünür.", "Tanımayı sürekli yenilenen bir bakış olarak görür.", "Sıradan görünen ayrıntılarda yenilik bulabilir.", "Yaşadığı kenti bütünüyle tanıdığına inanır."], 4,
      "Yazar kenti tam tanımadığını söyler; 'bütünüyle tanıdığına inanır' bununla çelişir.",
      { short: "E çelişir.", steps: ["Yazar 'tam tanıdığımı söyleyemem' diyor.", "E bunun tersini ileri sürüyor → söylenemez."], whyOthersWrong: ["A-D yazarın tutumunu doğru yansıtır."] }, 3),

    Q("turkce-tr-paragraf-303",
      "Bilim, kesin doğrulara ulaşma töreni değil, yanlışları ayıklama sürecidir. Bir kuram ne kadar çok sınanır ve hâlâ çürütülemezse o kadar güçlü sayılır; ama hiçbir zaman 'mutlak doğru' damgası taşımaz. Bilimin asıl gücü, bu açık uçluluğunda; kendi sonuçlarını her an gözden geçirmeye hazır oluşundadır.<br><br><b>Bu parçadan aşağıdakilerin hangisi <u>çıkarılamaz</u>?</b>",
      ["Kuramlar sınandıkça güvenilirlikleri artar.", "Bilim, ulaştığı sonuçları yeniden değerlendirmeye açıktır.", "Bir kuramın çürütülememesi onu güçlendirir.", "Yanlışların elenmesi bilimsel sürecin bir parçasıdır.", "Bilim, değişmez ve mutlak doğrular ortaya koyar."], 4,
      "Parça bilimin 'mutlak doğru' üretmediğini vurgular; E bununla çelişir.",
      { short: "E çelişir.", steps: ["'hiçbir zaman mutlak doğru damgası taşımaz' ifadesi E'yi reddeder."], whyOthersWrong: ["A-D paragraftan doğrudan çıkar."] }, 3),

    Q("turkce-tr-paragraf-304",
      "Özgün bir sanatçı, hiç kimseden etkilenmemiş kişi değildir; tersine, beslendiği kaynakları öylesine içselleştirir ki onları kendi sesine dönüştürür. Etkilenmek bir kusur değil, yaratmanın doğal bir aşamasıdır. Asıl mesele, başkalarının izini taşımak değil, o izleri aşıp kendine ait bir şey söyleyebilmektir.<br><br><b>Bu parçadan aşağıdakilerin hangisine <u>ulaşılamaz</u>?</b>",
      ["Etkilenmek, yaratma sürecinin doğal bir parçasıdır.", "Özgünlük, etkiyi kendine özgü biçimde dönüştürmekle ilgilidir.", "Sanatçı, beslendiği kaynakları kendi sesine katabilir.", "Önemli olan, etkileri aşıp özgün bir şey ortaya koymaktır.", "Gerçek sanatçı, hiçbir kaynaktan etkilenmemiş olandır."], 4,
      "Parça 'etkilenmemiş kişi değildir' der; E bunun tam tersidir.",
      { short: "E çelişir.", steps: ["İlk cümle E'yi açıkça reddeder.", "Özgünlük etkilenmemek değil, etkiyi dönüştürmektir."], whyOthersWrong: ["A-D paragrafın savını yansıtır."] }, 3),

    Q("turkce-tr-paragraf-305",
      "Bir dilin zenginliği, sözcüklerinin çokluğuyla değil, o sözcüklerle kurulabilen anlam inceliğiyle ölçülür. Az sözcükle derin şeyler söyleyebilen bir dil, binlerce sözcüğü olup da düşünceyi inceltemeyen bir dilden daha güçlüdür.<br><br><b>Bu parçada asıl anlatılmak istenen aşağıdakilerden hangisidir?</b>",
      ["Diller, sözcük sayılarına göre sıralanabilir.", "Bir dilin gücü, anlamı inceltebilme yeteneğindedir.", "Az sözcüklü diller her durumda üstündür.", "Sözcük sayısı bir dil için tümüyle önemsizdir.", "Derin düşünce yalnızca zengin dillerle kurulabilir."], 1,
      "Parça dilin gücünü sözcük sayısına değil, anlam inceliğine bağlar.",
      { short: "Dilin gücü = anlam inceltme (B).", steps: ["'zenginlik … anlam inceliğiyle ölçülür' anahtar cümle."], whyOthersWrong: ["A/C/D/E aşırı ya da paragrafın tersi."] }, 2),

    Q("turkce-tr-paragraf-306",
      "Modern kentlerde yeşil alanlar yalnızca estetik bir süs değildir. Ağaçlar havayı temizler, yaz sıcağını dengeler, trafiğin gürültüsünü azaltır; insanlara soluklanacak bir alan sunar. Üstelik bu alanların kentlinin ruh sağlığına da olumlu etkisi vardır.<br><br><b>Bu parçada yeşil alanların hangi yararına <u>değinilmemiştir</u>?</b>",
      ["Havayı temizlemesine", "Sıcaklığı dengelemesine", "Gürültüyü azaltmasına", "Su tüketimini düşürmesine", "Ruh sağlığına katkı sağlamasına"], 3,
      "Su tüketimini düşürme parçada yer almaz; diğer dördüne değinilmiştir.",
      { short: "D parçada yok.", steps: ["Hava, sıcaklık, gürültü, ruh sağlığı sayılmış.", "Su tüketimi geçmiyor."], whyOthersWrong: ["A-B-C-E doğrudan metinde var."] }, 2),

    Q("turkce-tr-paragraf-307",
      "Bir ülkenin geleceği, en çok eğitime verdiği değerle biçimlenir. ----. Bu yüzden eğitime ayrılan kaynak bir harcama değil, geleceğe yapılan en kârlı yatırımdır.<br><br><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b>",
      ["Çünkü bugün yetişen nesiller, yarının toplumunu kuracaktır", "Oysa eğitimin sonuçları çok kısa sürede alınır", "Ne var ki kaynaklar her zaman sınırlıdır", "Eğitim, tümüyle bireysel bir tercih meselesidir", "Ekonomik kalkınma eğitimden bağımsız sürdürülebilir"], 0,
      "Önceki cümle eğitimin önemini, sonraki 'bu yüzden … yatırım' sonucunu verir; boşluk gerekçeyi sunmalı.",
      { short: "Gerekçe: nesiller toplumu kuracak (A).", steps: ["Boşluk 'değer verir' ile 'kârlı yatırımdır' arasını bağlar.", "A bu nedenselliği kurar."], whyOthersWrong: ["B/C/D/E akışa ters ya da ilgisiz."] }, 3),

    Q("turkce-tr-paragraf-308",
      "(I) Uyku, bedenin ve zihnin kendini onardığı temel bir süreçtir. (II) Yeterince uyumayan kişilerde dikkat ve hafıza belirgin biçimde zayıflar. (III) Düzenli uyku, bağışıklık sistemini de güçlendirir. (IV) Kahve, içerdiği kafein sayesinde uykuyu geçici olarak erteleyebilir. (V) Bu nedenle nitelikli bir uyku, sağlıklı yaşamın vazgeçilmez bir parçasıdır.<br><br><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b>",
      ["I", "II", "III", "IV", "V"], 3,
      "Parça uykunun önemini işler; IV kahve/kafein konusuna kayarak akışı bozar.",
      { short: "IV (kahve) akışı bozar.", steps: ["I-II-III-V uykunun yararını/önemini anlatır.", "IV farklı konuya geçer."], whyOthersWrong: ["Diğerleri aynı düşünce zincirinde."] }, 2),

    Q("turkce-tr-paragraf-309",
      "(I) Gezi yazıları, okuru görmediği yerlere götüren bir köprü gibidir. (II) İyi bir gezi yazarı yalnızca gördüklerini değil, o yerlerin kendisinde uyandırdığı duyguları da aktarır. (III) Böylece okur, bir bakıma o yolculuğa ortak olur. (IV) Oysa son yıllarda gezi yazıları giderek yüzeyselleşmiş, birer tanıtım metnine dönüşmüştür. (V) Bu metinlerde ne yazarın özgün sesi duyulur ne de gerçek bir izlenim bulunur.<br><br><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar?</b>",
      ["I", "II", "III", "IV", "V"], 3,
      "I-III gezi yazısının olumlu işlevini; IV 'Oysa' ile eleştiriye geçer. Düşünce yönü IV'te değişir.",
      { short: "IV'te konu eleştiriye döner.", steps: ["I-II-III olumlu işlev.", "IV 'Oysa' ile olumsuz değerlendirme başlar → ikinci paragraf IV."], whyOthersWrong: ["V, IV'ün devamıdır."] }, 3),

    Q("turkce-tr-paragraf-310",
      "(I) Ne var ki bu doğal merak, çoğu zaman cezalandırıldığı için zamanla bastırılır. (II) Çocuklar, dünyayı tanımak için durmadan soru sorar. (III) Bastırılan merak ise giderek yerini öğrenmeye karşı isteksizliğe bırakır. (IV) Oysa soru sormak, öğrenmenin en doğal yoludur. (V) Bu yüzden eğitimin görevi merakı söndürmek değil, onu beslemek olmalıdır.<br><br><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında baştan <u>üçüncü</u> cümle hangisi olur?</b>",
      ["I", "II", "III", "IV", "V"], 2,
      "Doğru sıra: II → I → III → IV → V. Baştan üçüncü: III.",
      { short: "Sıra II-I-III-IV-V; üçüncü = III.", steps: ["II giriş (çocuk soru sorar).", "I 'Ne var ki bastırılır'.", "III bastırılan merakın sonucu → üçüncü."], whyOthersWrong: ["Diğer sıralar neden-sonuç akışını bozar."] }, 3),

    Q("turkce-tr-paragraf-311",
      "Sinema, olayları hareket ve görüntüyle anlatır; roman ise aynı olayı sözcüklerin gücüyle, okurun hayal gücüne alan bırakarak kurar. Biri gösterir, öteki sezdirir; biri izleyeni doğrudan etkiler, öteki onu yaratıma ortak eder.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b>",
      ["Tanımlama", "Betimleme", "Karşılaştırma", "Örneklendirme", "Tanık gösterme"], 2,
      "Sinema ile roman, anlatım yönünden karşı karşıya konularak işlenmiş → karşılaştırma.",
      { short: "Sinema-roman karşılaştırması.", steps: ["İki tür sürekli karşı karşıya konuyor ('biri… öteki…').", "Bu, karşılaştırmadır."], whyOthersWrong: ["Tanım/betimleme/örnek/alıntı ağır basmaz."] }, 2),

    Q("turkce-tr-paragraf-312",
      "Başarı çoğu zaman tek bir büyük adımın değil, fark edilmeyen küçük tekrarların ürünüdür. Her gün atılan ufak ama düzenli adımlar, zamanla bir araya gelerek büyük sonuçlar doğurur. Önemli olan hızlı gitmek değil, durmadan yürüyebilmektir.<br><br><b>Bu parçada asıl vurgulanan düşünce aşağıdakilerden hangisidir?</b>",
      ["Başarı büyük ölçüde şansa bağlıdır.", "Büyük sonuçlar, düzenli ve sürekli küçük çabalarla elde edilir.", "Hızlı hareket etmek her zaman bir üstünlüktür.", "Tek bir büyük adım, başarı için yeterlidir.", "Tekrar etmek, yaratıcılığı köreltir."], 1,
      "Parça, başarının küçük ama sürekli tekrarlarla geldiğini vurgular.",
      { short: "Süreklilik + küçük çaba (B).", steps: ["'küçük tekrarların ürünü', 'durmadan yürüyebilmek' anahtar.", "Asıl vurgu B."], whyOthersWrong: ["A/C/D/E paragrafın tersi ya da yok."] }, 2)
  ]);
})();
