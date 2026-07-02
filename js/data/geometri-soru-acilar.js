/* ============================================================
   GEOMETRİ — Doğruda ve Üçgende Açılar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-soru-acilar: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "geometri", unit: "geo-acilar", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("geo-acilar", [
    /* ---- KOLAY (5) ---- */
    Q("geometri-geo-acilar-101", "Bir üçgenin iç açılarının toplamı kaç derecedir?",
      ["180", "360", "90", "270", "540"], 0, "Her üçgende iç açılar toplamı 180°'dir.",
      { short: "180°.", steps: ["Üçgen iç açı toplamı sabittir.", "= 180°."], whyOthersWrong: ["360° dörtgenin toplamıdır."] }, 1),
    Q("geometri-geo-acilar-102", "Ölçüsü 30° olan bir açının tümleri kaç derecedir?",
      ["60", "150", "70", "30", "90"], 0, "Tümler açılar toplamı 90°: 90 − 30 = 60.",
      { short: "90 − 30 = 60.", steps: ["Tümler → toplam 90°.", "= 60."], whyOthersWrong: ["Bütünler ile karıştırma."] }, 1),
    Q("geometri-geo-acilar-103", "Ölçüsü 110° olan bir açının bütünleri kaç derecedir?",
      ["70", "80", "250", "20", "90"], 0, "Bütünler açılar toplamı 180°: 180 − 110 = 70.",
      { short: "180 − 110 = 70.", steps: ["Bütünler → toplam 180°.", "= 70."], whyOthersWrong: ["Tümler ile karıştırma."] }, 1),
    Q("geometri-geo-acilar-104", "Bir doğru üzerindeki (doğrusal) açı kaç derecedir?",
      ["180", "90", "360", "45", "120"], 0, "Doğrusal açı 180°'dir.",
      { short: "180°.", steps: ["Doğru boyunca açı.", "= 180°."], whyOthersWrong: ["Tam açı 360°'dir."] }, 1),
    Q("geometri-geo-acilar-105", "Bir üçgenin iki iç açısı 60° ve 70° ise üçüncü açı kaç derecedir?",
      ["50", "60", "40", "130", "45"], 0, "180 − (60 + 70) = 50.",
      { short: "180 − 130 = 50.", steps: ["İç toplam 180°.", "180 − 130 = 50."], whyOthersWrong: ["Kalan açı bulunur."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("geometri-geo-acilar-106", "Bir üçgenin iç açıları 2x, 3x ve 4x ise x kaç derecedir?",
      ["20", "30", "40", "18", "25"], 0, "2x+3x+4x = 9x = 180 → x = 20.",
      { short: "9x = 180 → x = 20.", steps: ["Toplam 180°.", "x = 20."], whyOthersWrong: ["Katsayılar toplanır."] }, 2),
    Q("geometri-geo-acilar-107", "İkizkenar bir üçgenin tepe açısı 40° ise taban açılarından biri kaç derecedir?",
      ["70", "40", "80", "100", "50"], 0, "Taban açıları eşit: (180 − 40)/2 = 70.",
      { short: "(180−40)/2 = 70.", steps: ["Taban açıları eşit.", "= 70."], whyOthersWrong: ["Kalan iki eşit açıya bölünür."] }, 2),
    Q("geometri-geo-acilar-108", "Bir üçgende komşu olmayan iki iç açı 50° ve 60° ise bunlara ait dış açı kaç derecedir?",
      ["110", "70", "130", "120", "100"], 0, "Dış açı = uzak iki iç açının toplamı: 50 + 60 = 110.",
      { short: "50 + 60 = 110.", steps: ["Dış açı teoremi.", "= 110."], whyOthersWrong: ["Dış açı komşu olmayan iç açıların toplamıdır."] }, 2),
    Q("geometri-geo-acilar-109", "İki doğru kesiştiğinde oluşan ters açılardan biri 65° ise karşısındaki ters açı kaç derecedir?",
      ["65", "115", "25", "130", "90"], 0, "Ters açılar eşittir: 65°.",
      { short: "= 65°.", steps: ["Ters açılar eşit.", ""], whyOthersWrong: ["Ters açı ölçüsü korunur."] }, 2),
    Q("geometri-geo-acilar-110", "Eşkenar bir üçgenin her bir iç açısı kaç derecedir?",
      ["60", "90", "45", "120", "70"], 0, "180/3 = 60.",
      { short: "180/3 = 60.", steps: ["Üç açı eşit.", "= 60."], whyOthersWrong: ["Eşkenarda tüm açılar eşit."] }, 2),
    Q("geometri-geo-acilar-111", "Bir dik üçgende dik açı dışındaki iki açıdan biri 35° ise diğeri kaç derecedir?",
      ["55", "65", "45", "35", "90"], 0, "Dar açılar toplamı 90°: 90 − 35 = 55.",
      { short: "90 − 35 = 55.", steps: ["Dik üçgende dar açılar tümler.", "= 55."], whyOthersWrong: ["Kalan 90'a tamamlar."] }, 2),
    Q("geometri-geo-acilar-112", "Paralel iki doğru bir kesenle kesildiğinde yöndeş açılardan biri 120° ise diğeri kaç derecedir?",
      ["120", "60", "30", "180", "90"], 0, "Yöndeş açılar eşittir: 120°.",
      { short: "= 120°.", steps: ["Yöndeş açılar eşit.", ""], whyOthersWrong: ["Paralelde yöndeş açı korunur."] }, 2),
    Q("geometri-geo-acilar-113", "Komşu bütünler iki açının ölçüleri 3x ve 2x ise büyük açı kaç derecedir?",
      ["108", "72", "90", "36", "120"], 0, "3x + 2x = 180 → x = 36; büyük 3·36 = 108.",
      { short: "5x = 180 → 108.", steps: ["Bütünler toplam 180°.", "x = 36, 3x = 108."], whyOthersWrong: ["Küçük 72 olur."] }, 2),
    Q("geometri-geo-acilar-114", "Bir üçgenin dış açısı 120° ve komşu olmayan iç açılardan biri 50° ise diğer uzak iç açı kaç derecedir?",
      ["70", "60", "50", "80", "30"], 0, "Dış açı = iki uzak iç açı toplamı: 120 − 50 = 70.",
      { short: "120 − 50 = 70.", steps: ["Dış açı teoremi.", "= 70."], whyOthersWrong: ["Toplamdan biri çıkarılır."] }, 2),
    Q("geometri-geo-acilar-115", "İç açıları ardışık (x, x+10, x+20) olan bir üçgende en büyük açı kaç derecedir?",
      ["70", "60", "50", "80", "90"], 0, "3x + 30 = 180 → x = 50; en büyük x+20 = 70.",
      { short: "x = 50 → 70.", steps: ["3x+30 = 180 → x = 50.", "En büyük 70."], whyOthersWrong: ["En büyük x+20'dir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("geometri-geo-acilar-116", "Bir üçgende A açısı 40°'dir. B ve C iç açıortaylarının kesim noktasındaki (BIC) açı kaç derecedir?",
      ["110", "100", "130", "70", "120"], 0, "İç açıortay açısı = 90 + A/2 = 90 + 20 = 110.",
      { short: "90 + A/2 = 110.", steps: ["BIC = 90 + A/2.", "= 90 + 20 = 110."], whyOthersWrong: ["İç açıortay formülü uygulanır."] }, 3),
    Q("geometri-geo-acilar-117", "İkizkenar bir dik üçgende dik açı dışındaki açıların her biri kaç derecedir?",
      ["45", "60", "30", "90", "75"], 0, "Dar açılar eşit ve toplamı 90°: her biri 45°.",
      { short: "45°.", steps: ["İki eşit dar açı, toplam 90°.", "= 45."], whyOthersWrong: ["Eşit açılar 45'er olur."] }, 3),
    Q("geometri-geo-acilar-118", "İkizkenar bir üçgende tepe açısı taban açısının 4 katıdır. Tepe açısı kaç derecedir?",
      ["120", "100", "90", "144", "108"], 0, "Taban x, tepe 4x; x+x+4x = 6x = 180 → x = 30; tepe 120.",
      { short: "6x = 180 → tepe 120.", steps: ["x+x+4x = 180.", "x = 30, tepe = 4x = 120."], whyOthersWrong: ["Taban açıları eşittir."] }, 3),
    Q("geometri-geo-acilar-119", "Paralel iki doğru arasında bir kırık nokta var. Üstteki açı 40°, alttaki açı 30° ise kırık noktadaki açı kaç derecedir?",
      ["70", "110", "60", "80", "35"], 0, "Kırık noktadan paralel çizilir: açı = 40 + 30 = 70.",
      { short: "40 + 30 = 70.", steps: ["Paralel yardımcı doğru çiz.", "İç ters açılar toplanır: 70."], whyOthersWrong: ["Kırık açı iki açının toplamıdır."] }, 3),
    Q("geometri-geo-acilar-120", "Bir üçgenin dış açılarının toplamı kaç derecedir?",
      ["360", "180", "540", "270", "720"], 0, "Herhangi bir çokgende olduğu gibi üçgende de dış açılar toplamı 360°'dir.",
      { short: "360°.", steps: ["Her köşede iç + dış = 180.", "3·180 − 180 = 360."], whyOthersWrong: ["Dış açı toplamı daima 360°."] }, 3),
    Q("geometri-geo-acilar-121", "Bir üçgende bir iç açı, diğer iki iç açının toplamına eşitse bu açı kaç derecedir?",
      ["90", "60", "120", "45", "100"], 0, "A = B + C ve A+B+C = 180 → 2A = 180 → A = 90.",
      { short: "A = 90°.", steps: ["A = B+C.", "A + A = 180 → A = 90."], whyOthersWrong: ["Üçgen dik üçgendir."] }, 3),
    Q("geometri-geo-acilar-122", "Bir üçgende A = 60° ve B = 2C ise B kaç derecedir?",
      ["80", "40", "60", "100", "70"], 0, "B + C = 120; B = 2C → 3C = 120 → C = 40, B = 80.",
      { short: "B = 80°.", steps: ["B+C = 120, B = 2C.", "3C = 120 → B = 80."], whyOthersWrong: ["C = 40 olur."] }, 3),
    Q("geometri-geo-acilar-123", "Bir üçgende bir dış açı, komşu iç açısının 2 katıdır. Bu iç açı kaç derecedir?",
      ["60", "90", "120", "45", "30"], 0, "İç x, dış 180 − x = 2x → 3x = 180 → x = 60.",
      { short: "x = 60°.", steps: ["İç + dış = 180.", "180 − x = 2x → x = 60."], whyOthersWrong: ["İç ve dış açı bütünlerdir."] }, 3),
    Q("geometri-geo-acilar-124", "Bir üçgenin iç açıları 3 : 4 : 5 oranında ise en büyük açı kaç derecedir?",
      ["75", "60", "45", "90", "80"], 0, "12k = 180 → k = 15; en büyük 5·15 = 75.",
      { short: "5k = 75.", steps: ["3k+4k+5k = 180.", "k = 15, en büyük 75."], whyOthersWrong: ["En büyük katsayı 5'tir."] }, 3),
    Q("geometri-geo-acilar-125", "Paralel iki doğru bir kesenle kesiliyor. İç yan (karşı durumlu) açılardan biri 70° ise diğeri kaç derecedir?",
      ["110", "70", "20", "90", "140"], 0, "İç yan açılar bütünlerdir: 180 − 70 = 110.",
      { short: "180 − 70 = 110.", steps: ["İç yan açılar bütünler.", "= 110."], whyOthersWrong: ["İç yan açılar eşit değil, bütünlerdir."] }, 3)
  ]);
})();
