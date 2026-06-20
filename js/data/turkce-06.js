/* ============================================================
   TÜRKÇE — Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları
   ÖSYM/TYT seviyesi: kısa özgün paragraf + teknik belirleme.
   Tümü SIFIRDAN ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-06: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("turkce", [{
    id: "tr-anlatim", name: "Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları", branch: null,
    summary: "Açıklama, tartışma, betimleme, öyküleme; tanımlama, örnekleme, tanık gösterme, karşılaştırma, sayısal veri.",
    curriculumRefs: ["2026-YKS Türkçe: Anlatım biçimleri ve düşünceyi geliştirme yolları"],
    prerequisites: ["tr-paragraf"], estimatedMinutes: 22, difficulty: 3,
    objectives: [
      "Dört temel anlatım biçimini (açıklama, tartışma, betimleme, öyküleme) ayırır.",
      "Düşünceyi geliştirme yollarını (tanımlama, örnekleme, tanık gösterme, karşılaştırma, sayısal veri, benzetme) tanır.",
      "Bir parçada baskın tekniği belirler."
    ],
    content: `
      <h2>Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları</h2>
      <h3>1) Anlatım biçimleri</h3>
      <ul>
        <li><b>Açıklama:</b> bilgi verir, öğretir; nesnel ve sade. "nedir, nasıldır?"</li>
        <li><b>Tartışma:</b> bir görüşü çürütüp kendi görüşünü savunur; "oysa, ne var ki, bana göre".</li>
        <li><b>Betimleme:</b> görüntüyü sözcüklerle resmeder; duyulara seslenir.</li>
        <li><b>Öyküleme:</b> olayı zaman akışında, hareketle anlatır.</li>
      </ul>
      <h3>2) Düşünceyi geliştirme yolları</h3>
      <ul>
        <li><b>Tanımlama:</b> "…dır/…demektir" ile kavramı tanıtır.</li>
        <li><b>Örneklendirme:</b> düşünceyi somut örneklerle destekler.</li>
        <li><b>Tanık gösterme:</b> uzman/ünlü birinin sözünü <b>alıntılar</b>.</li>
        <li><b>Karşılaştırma:</b> iki şeyi benzer/farklı yönleriyle ele alır.</li>
        <li><b>Sayısal verilerden yararlanma:</b> rakam, oran, istatistik kullanır.</li>
        <li><b>Benzetme:</b> bir şeyi başka bir şeye benzeterek anlatır.</li>
      </ul>
      <h3>Çözümlü örnek</h3>
      <p>"Ünlü ressam, 'Sanat, görüneni değil görünmeyeni resmetmektir,' der." → bir uzmanın sözü aktarıldığı için <b>tanık gösterme</b>.</p>
      <h3>Sık karıştırılanlar</h3>
      <p><b>Tanık gösterme vs örnekleme:</b> alıntı/söz varsa tanık gösterme; somut durum sıralanıyorsa örnekleme. <b>Açıklama vs tartışma:</b> tartışmada karşıt görüş çürütülür.</p>
      <h3>Özet kartı</h3>
      <ul><li>Alıntı → tanık gösterme.</li><li>"…dır" tanıtımı → tanımlama.</li><li>Karşıt görüşü çürütme → tartışma.</li><li>Duyusal tasvir → betimleme.</li></ul>`,
    commonMistakes: ["Tanık göstermeyi örneklemeyle karıştırmak.", "Açıklamayı tartışmadan ayıramamak."],
    pairs: [
      { term: "Açıklama", def: "Bilgi verir, öğretir (nesnel)" },
      { term: "Tartışma", def: "Karşıt görüşü çürütür, kendi görüşünü savunur" },
      { term: "Betimleme", def: "Duyulara seslenen sözel resim" },
      { term: "Tanık gösterme", def: "Uzman/ünlü sözünü alıntılama" },
      { term: "Örneklendirme", def: "Somut örneklerle destekleme" },
      { term: "Sayısal veri", def: "Rakam/oran/istatistik kullanma" }
    ],
    reviewStatus: "draft", originalityStatement: true, reviewedAt: null
  }]);

  var Q = function (id, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: "tr-anlatim", q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 3, skill: "anlatim-bicimi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    Q("turkce-tr-anlatim-101",
      "Roman, belli bir olay örgüsü çevresinde, kişilerin iç ve dış dünyasını geniş bir zaman diliminde işleyen uzun bir anlatı türüdür. Öykünün tersine, çok sayıda kişiye ve yan olaya yer verebilir.<br><br><b>Bu parçanın anlatımında ağır basan düşünceyi geliştirme yolu aşağıdakilerden hangisidir?</b>",
      ["Tanık gösterme", "Tanımlama", "Örneklendirme", "Sayısal verilerden yararlanma", "Benzetme"], 1,
      "'…uzun bir anlatı türüdür' diyerek romanı tanıtır → tanımlama.",
      { short: "'…türüdür' tanıtımı → tanımlama.", steps: ["Romanın ne olduğu açıklanıyor.", "Bu, tanımlamadır."], whyOthersWrong: ["Alıntı/örnek/sayı/benzetme yok."] }, 2),

    Q("turkce-tr-anlatim-102",
      "İyi bir okur olmak için çok kitap okumak yetmez. Sözgelimi aynı kitabı bir kez okuyup bırakan biriyle, altını çizerek, notlar alarak okuyan biri aynı şeyi elde etmez. Yine, hızlı ama dikkatsiz okuyan biri, yavaş ama derinlemesine okuyandan geride kalır.<br><br><b>Bu parçada düşünce aşağıdakilerden hangisiyle geliştirilmiştir?</b>",
      ["Tanımlama", "Tanık gösterme", "Örneklendirme", "Sayısal verilerden yararlanma", "Betimleme"], 2,
      "'Sözgelimi' ile somut durumlar örnek olarak verilmiş → örneklendirme.",
      { short: "'Sözgelimi…' örnekler → örneklendirme.", steps: ["Düşünce somut okuma durumlarıyla destekleniyor.", "Örneklendirme."], whyOthersWrong: ["Tanım/alıntı/sayı/tasvir yok."] }, 2),

    Q("turkce-tr-anlatim-103",
      "Eski mahallenin dar sokağı, akşamüstü turuncu bir ışığa boğulmuştu. Kireç dökülmüş duvarların dibinde uyuklayan kediler, çocukların bağrışlarıyla bir an irkilip yeniden kıvrılıyordu. Havada taze ekmek ve ıslak toprak kokusu vardı.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b>",
      ["Açıklama", "Tartışma", "Betimleme", "Tanık gösterme", "Tanımlama"], 2,
      "Görüntü, koku ve ayrıntılar duyulara seslenecek biçimde resmedilmiş → betimleme.",
      { short: "Duyusal tasvir → betimleme.", steps: ["Işık, koku, görüntü ayrıntılı çiziliyor.", "Betimleme."], whyOthersWrong: ["Bilgi/görüş/alıntı/tanım yok."] }, 2),

    Q("turkce-tr-anlatim-104",
      "Bazıları, sanatın topluma bir yararı olmadığını, yalnızca bir oyun olduğunu söyler. Oysa bu görüş, sanatın insanı dönüştüren, ona başkalarını anlama yeteneği kazandıran gücünü görmezden gelir. Bence sanat, en sessiz biçimde bile insanı değiştirir.<br><br><b>Bu parçanın anlatımında ağır basan biçim aşağıdakilerden hangisidir?</b>",
      ["Açıklama", "Tartışma", "Öyküleme", "Betimleme", "Tanımlama"], 1,
      "'Oysa… Bence…' ile karşıt görüş çürütülüp kendi görüşü savunulmuş → tartışma.",
      { short: "Karşıt görüş çürütme → tartışma.", steps: ["'Bazıları… Oysa… Bence…' yapısı.", "Bu, tartışmadır."], whyOthersWrong: ["Açıklama nesnel bilgidir; öyküleme/betimleme/tanım değil."] }, 3),

    Q("turkce-tr-anlatim-105",
      "Sabah erkenden yola çıktık. Önce sahil yolunu izledik, sonra dağ köyüne tırmandık. Öğleye doğru küçük bir çeşmenin başında mola verdik; oradan kalkıp akşam olmadan zirveye ulaştık.<br><br><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b>",
      ["Betimleme", "Öyküleme", "Açıklama", "Tartışma", "Tanımlama"], 1,
      "Olaylar zaman akışı içinde, hareketle anlatılmış → öyküleme.",
      { short: "Olay + zaman akışı → öyküleme.", steps: ["'Önce… sonra… öğleye doğru… akşam' hareket dizisi.", "Öyküleme."], whyOthersWrong: ["Tasvir/bilgi/görüş/tanım baskın değil."] }, 2),

    Q("turkce-tr-anlatim-106",
      "Sigaranın zararları yalnızca bireysel değildir. Dünya Sağlık Örgütü'nün verilerine göre her yıl 8 milyondan fazla insan sigaraya bağlı nedenlerle hayatını kaybediyor; bunların yaklaşık 1,2 milyonu ise dumandan pasif etkilenenlerdir.<br><br><b>Bu parçada düşünceyi geliştirmek için aşağıdakilerden hangisine başvurulmuştur?</b>",
      ["Tanımlama", "Benzetme", "Sayısal verilerden yararlanma", "Tanık gösterme", "Karşılaştırma"], 2,
      "'8 milyon', '1,2 milyon' gibi rakam/istatistiklerle desteklenmiş → sayısal verilerden yararlanma.",
      { short: "Rakam/istatistik → sayısal veri.", steps: ["Veriler sayılarla ortaya konuyor.", "Sayısal verilerden yararlanma."], whyOthersWrong: ["Tanım/benzetme/karşılaştırma yok; veri 'kaynağa' değil sayıya dayanıyor."] }, 2),

    Q("turkce-tr-anlatim-107",
      "Çocuk zihni, taze sıvanmış bir duvara benzer; üzerine düşen her iz, henüz yaşken kolayca yer eder ve sonradan silinmesi güçleşir.<br><br><b>Bu parçada düşünceyi geliştirmek için aşağıdakilerden hangisine başvurulmuştur?</b>",
      ["Tanık gösterme", "Benzetme", "Sayısal verilerden yararlanma", "Tanımlama", "Öyküleme"], 1,
      "Çocuk zihni 'taze sıvanmış duvara' benzetilmiş → benzetme.",
      { short: "'…e benzer' → benzetme.", steps: ["Zihin, duvara benzetiliyor."], whyOthersWrong: ["Alıntı/sayı/tanım/öykü yok."] }, 2),

    Q("turkce-tr-anlatim-108",
      "Tiyatro ile sinema, çoğu zaman birbirine karıştırılır. Oysa tiyatro canlı ve o ana özgü bir deneyimken sinema, kaydedilmiş ve her seferinde aynı kalan bir üründür. Biri seyirciyle aynı nefesi paylaşır, öteki onunla perde arkasından konuşur.<br><br><b>Bu parçada ağır basan düşünceyi geliştirme yolu aşağıdakilerden hangisidir?</b>",
      ["Tanımlama", "Karşılaştırma", "Tanık gösterme", "Örneklendirme", "Sayısal verilerden yararlanma"], 1,
      "Tiyatro ve sinema benzer/farklı yönleriyle karşı karşıya konmuş → karşılaştırma.",
      { short: "İki tür karşı karşıya → karşılaştırma.", steps: ["'Oysa… Biri… öteki…' karşıtlık.", "Karşılaştırma."], whyOthersWrong: ["Tanım/alıntı/örnek/sayı baskın değil."] }, 3),

    Q("turkce-tr-anlatim-109",
      "Dürüstlük, insanın hem kendisine hem başkalarına karşı içten ve doğru olması durumudur. Bu yönüyle dürüstlük, yalnızca yalan söylememek değil; sözünü tutmak, hakkı gözetmek ve görünmediği anda bile ilkeli kalmaktır.<br><br><b>Bu parçanın anlatımında ağır basan teknik aşağıdakilerden hangisidir?</b>",
      ["Tanımlama", "Tartışma", "Tanık gösterme", "Benzetme", "Öyküleme"], 0,
      "Dürüstlük kavramı '…durumudur' diye tanıtılıp kapsamı açıklanmış → tanımlama.",
      { short: "Kavram tanıtımı → tanımlama.", steps: ["'Dürüstlük … durumudur' tanım.", "Kapsamı açıklanıyor."], whyOthersWrong: ["Karşıt görüş/alıntı/benzetme/öykü yok."] }, 2),

    Q("turkce-tr-anlatim-110",
      "Montaigne, 'Üzerinde en çok konuştuğumuz şey, en az bildiğimiz şeydir,' der. Gerçekten de mutluluk üzerine sayısız söz söylenmiş olmasına karşın, onu tanımlamakta hâlâ zorlanırız.<br><br><b>Bu parçada düşünceyi geliştirmek için başvurulan yol aşağıdakilerden hangisidir?</b>",
      ["Örneklendirme", "Tanık gösterme", "Sayısal verilerden yararlanma", "Karşılaştırma", "Betimleme"], 1,
      "Montaigne'den doğrudan alıntı yapılmış → tanık gösterme.",
      { short: "Montaigne alıntısı → tanık gösterme.", steps: ["Bir düşünürün sözü aktarılıyor.", "Tanık gösterme."], whyOthersWrong: ["Örnek/sayı/karşılaştırma/tasvir baskın değil."] }, 2)
  ]);
})();
