/* ============================================================
   SOSYAL / TARİH — İslam Tarihi ve Medeniyeti: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Kaynak (MEB TYT Tarih) yalnızca kapsam referansı; sorular özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-soru-tarislam: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "sosyal", unit: "tar-islam", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "bilgi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("tar-islam", [
    /* ---- KOLAY (5) ---- */
    Q("sosyal-tar-islam-101", "İslamiyet hangi şehirde doğmuştur?",
      ["Mekke", "Medine", "Şam", "Bağdat", "Kudüs"], 0, "İslamiyet Hz. Muhammed ile Mekke'de doğmuştur.",
      { short: "Mekke.", steps: ["İlk vahiy Mekke'de (610).", ""], whyOthersWrong: ["Medine, Hicret'ten sonra merkez oldu."] }, 1),
    Q("sosyal-tar-islam-102", "622 yılında Hz. Muhammed'in Mekke'den Medine'ye göçüne ne ad verilir?",
      ["Hicret", "Cihat", "Ridde", "Fetih", "Biat"], 0, "Bu göçe Hicret denir; Hicri takvimin başlangıcıdır.",
      { short: "Hicret.", steps: ["Mekke→Medine göçü.", "622."], whyOthersWrong: ["Fetih bir yerin ele geçirilmesidir."] }, 1),
    Q("sosyal-tar-islam-103", "Dört Halife'nin ilki (Hz. Muhammed'den sonraki ilk halife) kimdir?",
      ["Hz. Ebubekir", "Hz. Ömer", "Hz. Osman", "Hz. Ali", "Muaviye"], 0, "İlk halife Hz. Ebubekir'dir.",
      { short: "Hz. Ebubekir.", steps: ["İlk halife.", ""], whyOthersWrong: ["Diğerleri sonraki halifelerdir."] }, 1),
    Q("sosyal-tar-islam-104", "Emeviler Devleti'nde halifelik nasıl belirlenmeye başlamıştır?",
      ["Saltanat (babadan oğula)", "Seçimle", "Kurayla", "Meclis kararıyla", "Halk oylamasıyla"], 0, "Muaviye ile halifelik saltanata dönüşmüştür.",
      { short: "Saltanat.", steps: ["Muaviye → babadan oğula.", ""], whyOthersWrong: ["Dört Halife seçimle gelmişti."] }, 1),
    Q("sosyal-tar-islam-105", "Abbasiler Dönemi'nde bilim ve çeviri çalışmalarının yürütüldüğü merkez hangisidir?",
      ["Beytülhikme", "Nizamiye", "Divan", "Enderun", "Darüşşifa"], 0, "Abbasilerde bilim merkezi Beytülhikme'dir.",
      { short: "Beytülhikme.", steps: ["Abbasi bilim merkezi.", ""], whyOthersWrong: ["Nizamiye Selçuklu medresesidir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("sosyal-tar-islam-106", "Kur'an-ı Kerim'i ilk kez kitap hâline getiren (toplayan) halife kimdir?",
      ["Hz. Ebubekir", "Hz. Osman", "Hz. Ömer", "Hz. Ali", "Muaviye"], 0, "Kur'an ilk kez Hz. Ebubekir döneminde kitap hâline getirildi.",
      { short: "Hz. Ebubekir.", steps: ["Kitap hâline getirme → Ebubekir.", ""], whyOthersWrong: ["Çoğaltma Hz. Osman dönemidir."] }, 2),
    Q("sosyal-tar-islam-107", "Kur'an-ı Kerim'i çoğaltıp önemli merkezlere gönderen halife kimdir?",
      ["Hz. Osman", "Hz. Ebubekir", "Hz. Ömer", "Hz. Ali", "Muaviye"], 0, "Kur'an Hz. Osman döneminde çoğaltılmıştır.",
      { short: "Hz. Osman.", steps: ["Çoğaltma → Osman.", ""], whyOthersWrong: ["İlk kitap hâline getirme Ebubekir'dir."] }, 2),
    Q("sosyal-tar-islam-108", "İlk devlet teşkilatını (divan) kuran ve büyük fetihler yapan halife kimdir?",
      ["Hz. Ömer", "Hz. Ebubekir", "Hz. Osman", "Hz. Ali", "Muaviye"], 0, "İlk teşkilat ve büyük fetihler Hz. Ömer dönemidir.",
      { short: "Hz. Ömer.", steps: ["Divan/teşkilat → Ömer.", ""], whyOthersWrong: ["Diğer halifelerin farklı icraatları vardır."] }, 2),
    Q("sosyal-tar-islam-109", "751 yılında Abbasilerin, Türklerle birlikte Çin'e karşı kazandığı savaş hangisidir?",
      ["Talas Savaşı", "Kadeş Savaşı", "Bedir Savaşı", "Malazgirt Savaşı", "Sıffın Savaşı"], 0, "Talas Savaşı (751) Abbasi-Çin arasında olmuştur.",
      { short: "Talas (751).", steps: ["Abbasi + Türk vs Çin.", ""], whyOthersWrong: ["Malazgirt 1071'de Bizans'a karşıdır."] }, 2),
    Q("sosyal-tar-islam-110", "İspanya'da (Endülüs) kurulan Emevi devletine ne ad verilir?",
      ["Endülüs Emevileri", "Fatımiler", "Abbasiler", "Eyyubiler", "Memlükler"], 0, "İspanya'da Endülüs Emevi Devleti kurulmuştur.",
      { short: "Endülüs Emevileri.", steps: ["İspanya → Endülüs Emevi.", ""], whyOthersWrong: ["Fatımiler Mısır'da kuruldu."] }, 2),
    Q("sosyal-tar-islam-111", "Müslümanların putperest Mekkelilere karşı kazandığı ilk büyük zafer hangi savaştır?",
      ["Bedir", "Uhud", "Hendek", "Sıffın", "Cemel"], 0, "İlk büyük zafer Bedir Savaşı'dır.",
      { short: "Bedir.", steps: ["İlk büyük zafer.", ""], whyOthersWrong: ["Uhud'da Müslümanlar zorlandı."] }, 2),
    Q("sosyal-tar-islam-112", "Hz. Ali döneminde Müslümanlar arasında yaşanan savaşlar aşağıdakilerden hangileridir?",
      ["Cemel ve Sıffın", "Bedir ve Uhud", "Hendek ve Talas", "Kadeş ve Malazgirt", "Bedir ve Hendek"], 0, "Hz. Ali döneminde Cemel ve Sıffın savaşları yaşandı.",
      { short: "Cemel – Sıffın.", steps: ["İç savaşlar (fitne).", ""], whyOthersWrong: ["Bedir/Uhud Hz. Muhammed dönemidir."] }, 2),
    Q("sosyal-tar-islam-113", "Emeviler'in yıkılmasını hızlandıran, Arap olmayan Müslümanları dışlayan politika aşağıdakilerden hangisidir?",
      ["Arap milliyetçiliği (mevali politikası)", "Eşitlikçi politika", "Deniz ticareti", "Divan teşkilatı", "Ordugâh şehirler"], 0, "Emeviler mevali (Arap olmayan) politikası ile tepki toplamıştır.",
      { short: "Arap milliyetçiliği.", steps: ["Mevaliye ikinci sınıf muamele.", "Tepki → çöküş."], whyOthersWrong: ["Eşitlikçi politika Abbasilerdedir."] }, 2),
    Q("sosyal-tar-islam-114", "Hicri takvimi kabul ederek yürürlüğe koyan halife kimdir?",
      ["Hz. Ömer", "Hz. Ebubekir", "Hz. Osman", "Hz. Ali", "Muaviye"], 0, "Hicri takvim Hz. Ömer döneminde kabul edilmiştir.",
      { short: "Hz. Ömer.", steps: ["Hicri takvim → Ömer.", ""], whyOthersWrong: ["Takvimin başlangıcı Hicret'tir (622)."] }, 2),
    Q("sosyal-tar-islam-115", "İlk İslam donanmasının kurulduğu halife dönemi hangisidir?",
      ["Hz. Osman", "Hz. Ebubekir", "Hz. Ömer", "Hz. Ali", "Muaviye"], 0, "İlk İslam donanması Hz. Osman döneminde kurulmuştur.",
      { short: "Hz. Osman.", steps: ["İlk donanma → Osman.", ""], whyOthersWrong: ["Diğer halifelerin farklı ilkleri vardır."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("sosyal-tar-islam-116", "Dört Halife dönemine 'Cumhuriyet Dönemi' de denmesinin nedeni aşağıdakilerden hangisidir?",
      ["Halifelerin seçimle iş başına gelmesi", "Halifeliğin babadan oğula geçmesi", "Fetihlerin durması", "Kur'an'ın çoğaltılması", "Başkentin Şam olması"], 0, "Dört Halife seçimle belirlendiği için bu ad kullanılır.",
      { short: "Seçimle gelmeleri.", steps: ["Saltanat değil, seçim.", "→ 'Cumhuriyet Dönemi'."], whyOthersWrong: ["Babadan oğula geçiş Emevilerdedir."] }, 3),
    Q("sosyal-tar-islam-117", "Talas Savaşı'nın (751) en önemli sonucu aşağıdakilerden hangisidir?",
      ["Kâğıdın İslam dünyasına yayılması ve Türk-İslam yakınlaşması", "İstanbul'un fethedilmesi", "Endülüs'ün kurulması", "Halifeliğin saltanata dönüşmesi", "Kur'an'ın çoğaltılması"], 0, "Talas sonrası kâğıt İslam dünyasına yayıldı; Türkler İslam'a yakınlaştı.",
      { short: "Kâğıt + Türk-İslam yakınlaşması.", steps: ["Çinli esirlerden kâğıt öğrenildi.", "Türk-İslam yakınlaşması başladı."], whyOthersWrong: ["Diğerleri Talas'ın sonucu değildir."] }, 3),
    Q("sosyal-tar-islam-118", "Hz. Ömer döneminde yıkılan, İran merkezli devlet aşağıdakilerden hangisidir?",
      ["Sasaniler", "Bizans", "Emeviler", "Abbasiler", "Gazneliler"], 0, "Hz. Ömer döneminde Sasani (İran) Devleti yıkılmıştır.",
      { short: "Sasaniler.", steps: ["İran/Sasani fethi → Ömer.", ""], whyOthersWrong: ["Bizans tamamen yıkılmadı."] }, 3),
    Q("sosyal-tar-islam-119", "Abbasilerin, Emevilerden farklı olarak izlediği yönetim anlayışı aşağıdakilerden hangisidir?",
      ["Mevali politikasını terk edip eşitlikçi davranmaları", "Halifeliği seçimle belirlemeleri", "Arap milliyetçiliği gütmeleri", "Deniz ticaretini yasaklamaları", "Kur'an'ı ilk kez toplamaları"], 0, "Abbasiler Arap olmayan Müslümanlara eşit davranmıştır.",
      { short: "Eşitlikçi (mevaliye eşit).", steps: ["Emevi ayrımcılığını bıraktılar.", ""], whyOthersWrong: ["Arap milliyetçiliği Emevi politikasıdır."] }, 3),
    Q("sosyal-tar-islam-120", "Hudeybiye Antlaşması'nın Müslümanlar açısından en önemli sonucu aşağıdakilerden hangisidir?",
      ["Müslümanların siyasi bir güç olarak tanınması", "Mekke'nin fethedilmesi", "Hicri takvimin kabulü", "Kur'an'ın çoğaltılması", "Donanmanın kurulması"], 0, "Antlaşma, Mekkelilerin Müslümanları resmen muhatap almasını sağladı.",
      { short: "Siyasi tanınma.", steps: ["Mekke ile antlaşma yapıldı.", "Müslümanlar taraf olarak tanındı."], whyOthersWrong: ["Mekke'nin Fethi daha sonradır (630)."] }, 3),
    Q("sosyal-tar-islam-121", "Kur'an'ın Hz. Ebubekir döneminde kitap hâline getirilmesini hızlandıran temel neden aşağıdakilerden hangisidir?",
      ["Savaşlarda hafızların şehit olması", "Kâğıdın icat edilmesi", "Matbaanın bulunması", "Divan teşkilatının kurulması", "Donanmanın kurulması"], 0, "Ridde savaşlarında (Yemame) çok sayıda hafızın şehit olması Kur'an'ın toplanmasını hızlandırdı.",
      { short: "Hafızların şehit olması.", steps: ["Hafızlar azaldı.", "Kur'an yazıya geçirildi."], whyOthersWrong: ["Kâğıt/matbaa bu dönemde etkili değildir."] }, 3),
    Q("sosyal-tar-islam-122", "Endülüs Emevileri'nin (İspanya) Avrupa açısından en önemli etkisi aşağıdakilerden hangisidir?",
      ["Bilim ve kültürün Avrupa'ya aktarılması", "Halifeliğin kurulması", "Hicri takvimin yayılması", "Kur'an'ın çoğaltılması", "Deniz ticaretinin yasaklanması"], 0, "Endülüs, İslam bilim ve kültürünün Avrupa'ya (Rönesans'a) aktarılmasında köprü oldu.",
      { short: "Bilimi Avrupa'ya taşıdı.", steps: ["Endülüs bir bilim merkeziydi.", "Avrupa'yı etkiledi."], whyOthersWrong: ["Diğerleri Avrupa ile ilgili değildir."] }, 3),
    Q("sosyal-tar-islam-123", "Aşağıdaki eşleştirmelerden hangisi <b>yanlıştır</b>?",
      ["Hz. Osman – ilk devlet teşkilatı (divan)", "Hz. Ebubekir – Kur'an'ın kitap hâline getirilmesi", "Hz. Ömer – büyük fetihler", "Muaviye – saltanat", "Abbasiler – Beytülhikme"], 0, "İlk devlet teşkilatı (divan) Hz. Ömer'e aittir; Hz. Osman değil.",
      { short: "Osman–divan yanlış.", steps: ["Divan → Hz. Ömer.", "Osman → Kur'an çoğaltma."], whyOthersWrong: ["Diğer eşleştirmeler doğrudur."] }, 3),
    Q("sosyal-tar-islam-124", "Emeviler döneminde yaşanan ve Hz. Hüseyin'in şehit edildiği olay aşağıdakilerden hangisidir?",
      ["Kerbela Olayı", "Talas Savaşı", "Sıffın Savaşı", "Bedir Savaşı", "Hendek Savaşı"], 0, "Kerbela Olayı Emeviler döneminde yaşanmıştır.",
      { short: "Kerbela.", steps: ["Emevi dönemi, Hz. Hüseyin.", ""], whyOthersWrong: ["Sıffın Hz. Ali dönemidir."] }, 3),
    Q("sosyal-tar-islam-125", "Hz. Ömer döneminde kurulan 'ordugâh şehirler'in temel kuruluş amacı aşağıdakilerden hangisidir?",
      ["Fethedilen bölgelerde askerî ve idari denetimi sağlamak", "Deniz ticaretini geliştirmek", "Kur'an'ı çoğaltmak", "Halifeyi seçmek", "Kâğıt üretmek"], 0, "Ordugâh şehirler, fethedilen yerlerde güvenlik ve yönetim üssü olarak kuruldu.",
      { short: "Askerî-idari üs.", steps: ["Fetih bölgelerinde denetim.", "Ordugâh şehirler kuruldu."], whyOthersWrong: ["Ticaret/çoğaltma amacı değildir."] }, 3)
  ]);
})();
