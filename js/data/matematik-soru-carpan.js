/* ============================================================
   MATEMATİK — Çarpanlara Ayırma: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; cebir elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-carpan: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-carpan", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-carpan", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-carpan-101", "x² − 9 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−3)(x+3)", "(x−3)²", "(x+3)²", "(x−9)(x+1)", "x(x−9)"], 0, "İki kare farkı: a²−b² = (a−b)(a+b); 9 = 3².",
      { short: "(x−3)(x+3).", steps: ["x²−9 = x²−3².", "= (x−3)(x+3)."], whyOthersWrong: ["Tam kare değil, kare farkıdır."] }, 1),
    Q("matematik-mat-carpan-102", "x² + 6x + 9 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x+3)²", "(x−3)²", "(x+3)(x−3)", "(x+6)(x+3)", "(x+9)(x+1)"], 0, "Tam kare: x²+2·3·x+3² = (x+3)².",
      { short: "(x+3)².", steps: ["6x = 2·3·x, 9 = 3².", "= (x+3)²."], whyOthersWrong: ["Orta terim +6x → (x+3)²."] }, 1),
    Q("matematik-mat-carpan-103", "x² − 5x ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["x(x−5)", "x(5−x)", "(x−5)(x+5)", "5x(x−1)", "x²(x−5)"], 0, "Ortak çarpan x: x²−5x = x(x−5).",
      { short: "x(x−5).", steps: ["Her terimde x ortak.", "= x(x−5)."], whyOthersWrong: ["Ortak çarpan x'tir."] }, 1),
    Q("matematik-mat-carpan-104", "x² − 1 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−1)(x+1)", "(x−1)²", "(x+1)²", "x(x−1)", "(x−1)(x+2)"], 0, "Kare farkı: x²−1² = (x−1)(x+1).",
      { short: "(x−1)(x+1).", steps: ["1 = 1².", "x²−1 = (x−1)(x+1)."], whyOthersWrong: ["Kare farkı iki ayrı çarpan verir."] }, 1),
    Q("matematik-mat-carpan-105", "3x + 6 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["3(x+2)", "3(x+6)", "3x+2", "x(3+6)", "(x+2)"], 0, "Ortak çarpan 3: 3x+6 = 3(x+2).",
      { short: "3(x+2).", steps: ["6 = 3·2.", "= 3(x+2)."], whyOthersWrong: ["Yalnız 3 ortak çarpan."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-carpan-106", "x² − 16 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−4)(x+4)", "(x−4)²", "(x+4)²", "(x−8)(x+2)", "(x−16)(x+1)"], 0, "16 = 4²; kare farkı (x−4)(x+4).",
      { short: "(x−4)(x+4).", steps: ["x²−16 = x²−4².", "= (x−4)(x+4)."], whyOthersWrong: ["Kare farkı; tam kare değil."] }, 2),
    Q("matematik-mat-carpan-107", "x² + 10x + 25 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x+5)²", "(x−5)²", "(x+5)(x−5)", "(x+10)(x+5)", "(x+25)(x+1)"], 0, "Tam kare: x²+2·5·x+5² = (x+5)².",
      { short: "(x+5)².", steps: ["10x = 2·5·x, 25 = 5².", "= (x+5)²."], whyOthersWrong: ["Pozitif orta terim → (x+5)²."] }, 2),
    Q("matematik-mat-carpan-108", "x² − 7x + 12 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−3)(x−4)", "(x+3)(x+4)", "(x−2)(x−6)", "(x−1)(x−12)", "(x−3)(x+4)"], 0, "Çarpımı 12, toplamı −7 olan: −3 ve −4.",
      { short: "(x−3)(x−4).", steps: ["−3·−4 = 12, −3−4 = −7.", "= (x−3)(x−4)."], whyOthersWrong: ["Diğer çiftler −7 toplamını vermez."] }, 2),
    Q("matematik-mat-carpan-109", "x² + x − 6 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x+3)(x−2)", "(x−3)(x+2)", "(x+6)(x−1)", "(x+2)(x+3)", "(x+1)(x−6)"], 0, "Çarpımı −6, toplamı +1 olan: +3 ve −2.",
      { short: "(x+3)(x−2).", steps: ["3·(−2) = −6, 3+(−2) = 1.", "= (x+3)(x−2)."], whyOthersWrong: ["(x−3)(x+2) orta terimi −x verir."] }, 2),
    Q("matematik-mat-carpan-110", "51² − 49² işleminin sonucu kaçtır?",
      ["200", "2", "100", "400", "20"], 0, "Kare farkı: (51−49)(51+49) = 2·100 = 200.",
      { short: "2·100 = 200.", steps: ["a²−b² = (a−b)(a+b).", "(2)(100) = 200."], whyOthersWrong: ["Kareleri tek tek hesaplamaya gerek yok."] }, 2),
    Q("matematik-mat-carpan-111", "2x² − 8 ifadesinin tam çarpanlara ayrılmış biçimi nedir?",
      ["2(x−2)(x+2)", "(2x−2)(x+4)", "2(x−4)(x+4)", "(x−2)(x+2)", "2(x²+4)"], 0, "Önce ortak 2: 2(x²−4) = 2(x−2)(x+2).",
      { short: "2(x−2)(x+2).", steps: ["2(x²−4).", "x²−4 = (x−2)(x+2)."], whyOthersWrong: ["Önce ortak çarpan, sonra kare farkı."] }, 2),
    Q("matematik-mat-carpan-112", "xy + 2x + 3y + 6 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(y+2)(x+3)", "(y+3)(x+2)", "(y+2)(x+2)", "(y+6)(x+1)", "(x+y)(2+3)"], 0, "Gruplama: x(y+2)+3(y+2) = (y+2)(x+3).",
      { short: "(y+2)(x+3).", steps: ["x(y+2) + 3(y+2).", "= (y+2)(x+3)."], whyOthersWrong: ["Gruplamada ortak parantez (y+2)."] }, 2),
    Q("matematik-mat-carpan-113", "x² − 9 = 0 denkleminin pozitif kökü kaçtır?",
      ["3", "−3", "9", "6", "0"], 0, "(x−3)(x+3) = 0 → x = 3 veya x = −3; pozitif kök 3.",
      { short: "x = 3.", steps: ["x²−9 = (x−3)(x+3).", "Kökler ±3; pozitif 3."], whyOthersWrong: ["−3 negatif kök."] }, 2),
    Q("matematik-mat-carpan-114", "a + b = 5 ve ab = 6 olduğuna göre a² + b² kaçtır?",
      ["13", "11", "19", "7", "1"], 0, "a²+b² = (a+b)² − 2ab = 25 − 12 = 13.",
      { short: "25 − 12 = 13.", steps: ["(a+b)² = a²+2ab+b².", "a²+b² = 25 − 2·6 = 13."], whyOthersWrong: ["2ab çıkarılmalıdır."] }, 2),
    Q("matematik-mat-carpan-115", "(x + 3)² − (x − 3)² ifadesinin sadeleştirilmiş biçimi nedir?",
      ["12x", "6x", "12", "36", "2x"], 0, "Kare farkı: [(x+3)−(x−3)]·[(x+3)+(x−3)] = 6·2x = 12x.",
      { short: "6·2x = 12x.", steps: ["A²−B² = (A−B)(A+B).", "(6)(2x) = 12x."], whyOthersWrong: ["Açarak da 12x bulunur."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-carpan-116", "a² − b² = 20 ve a − b = 4 olduğuna göre a + b kaçtır?",
      ["5", "4", "16", "24", "20"], 0, "a²−b² = (a−b)(a+b) → 20 = 4·(a+b) → a+b = 5.",
      { short: "4·(a+b) = 20 → 5.", steps: ["(a−b)(a+b) = 20.", "a+b = 20/4 = 5."], whyOthersWrong: ["Bölme doğrudan a+b verir."] }, 3),
    Q("matematik-mat-carpan-117", "x − 1/x = 3 olduğuna göre x² + 1/x² kaçtır?",
      ["11", "7", "9", "3", "13"], 0, "(x − 1/x)² = x² − 2 + 1/x² = 9 → x²+1/x² = 11.",
      { short: "9 + 2 = 11.", steps: ["(x−1/x)² = x²+1/x² − 2.", "x²+1/x² = 9 + 2 = 11."], whyOthersWrong: ["+2 eklenir (−2'nin tersi)."] }, 3),
    Q("matematik-mat-carpan-118", "x + 1/x = 4 olduğuna göre x² + 1/x² kaçtır?",
      ["14", "16", "18", "8", "12"], 0, "(x + 1/x)² = x² + 2 + 1/x² = 16 → x²+1/x² = 14.",
      { short: "16 − 2 = 14.", steps: ["(x+1/x)² = x²+1/x² + 2.", "x²+1/x² = 16 − 2 = 14."], whyOthersWrong: ["+2 çıkarılır."] }, 3),
    Q("matematik-mat-carpan-119", "x² − y² = 24 ve x + y = 6 olduğuna göre x − y kaçtır?",
      ["4", "6", "24", "18", "3"], 0, "(x−y)(x+y) = 24 → (x−y)·6 = 24 → x−y = 4.",
      { short: "24/6 = 4.", steps: ["x²−y² = (x−y)(x+y).", "x−y = 24/6 = 4."], whyOthersWrong: ["Bölme x−y verir."] }, 3),
    Q("matematik-mat-carpan-120", "2x² + 5x − 3 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(2x−1)(x+3)", "(2x+1)(x−3)", "(2x−3)(x+1)", "(x−1)(2x+3)", "(2x+3)(x−1)"], 0, "(2x−1)(x+3) = 2x²+6x−x−3 = 2x²+5x−3.",
      { short: "(2x−1)(x+3).", steps: ["Çarpım kontrolü: 2x²+6x−x−3.", "= 2x²+5x−3."], whyOthersWrong: ["Diğerlerinde orta terim 5x çıkmaz."] }, 3),
    Q("matematik-mat-carpan-121", "x³ − 8 ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−2)(x²+2x+4)", "(x−2)(x²−2x+4)", "(x+2)(x²−2x+4)", "(x−2)(x²+4)", "(x−2)³"], 0, "Küp farkı: a³−b³ = (a−b)(a²+ab+b²); b = 2.",
      { short: "(x−2)(x²+2x+4).", steps: ["a³−b³ = (a−b)(a²+ab+b²).", "= (x−2)(x²+2x+4)."], whyOthersWrong: ["Küp farkında orta işaret +'dır."] }, 3),
    Q("matematik-mat-carpan-122", "a + b = 4 ve a² − ab + b² = 7 olduğuna göre a³ + b³ kaçtır?",
      ["28", "11", "16", "32", "7"], 0, "a³+b³ = (a+b)(a²−ab+b²) = 4·7 = 28.",
      { short: "4·7 = 28.", steps: ["a³+b³ = (a+b)(a²−ab+b²).", "= 4·7 = 28."], whyOthersWrong: ["İki çarpan doğrudan çarpılır."] }, 3),
    Q("matematik-mat-carpan-123", "x² − 4x + 4 − y² ifadesinin çarpanlara ayrılmış biçimi nedir?",
      ["(x−2−y)(x−2+y)", "(x−y)²−4", "(x−2−y)²", "(x+y−2)(x+y+2)", "(x−2)(y−2)"], 0, "x²−4x+4 = (x−2)²; (x−2)²−y² = (x−2−y)(x−2+y).",
      { short: "(x−2−y)(x−2+y).", steps: ["İlk üç terim: (x−2)².", "(x−2)²−y² → kare farkı."], whyOthersWrong: ["Önce tam kare, sonra kare farkı."] }, 3),
    Q("matematik-mat-carpan-124", "a² + b² = 29 ve ab = 10 olduğuna göre a + b kaçtır? (a, b > 0)",
      ["7", "6", "49", "9", "5"], 0, "(a+b)² = a²+b²+2ab = 29+20 = 49 → a+b = 7.",
      { short: "√49 = 7.", steps: ["(a+b)² = 29 + 2·10 = 49.", "a+b = 7."], whyOthersWrong: ["a,b>0 olduğundan pozitif kök 7."] }, 3),
    Q("matematik-mat-carpan-125", "(x² + 5x + 6)/(x + 2) ifadesi (x ≠ −2) sadeleştirildiğinde sonuç nedir?",
      ["x + 3", "x + 2", "x − 3", "x − 2", "x + 6"], 0, "Pay = (x+2)(x+3); (x+2) sadeleşir → x+3.",
      { short: "(x+2)(x+3)/(x+2) = x+3.", steps: ["x²+5x+6 = (x+2)(x+3).", "(x+2) sadeleşir."], whyOthersWrong: ["Yalnız (x+2) ile sadeleşir."] }, 3)
  ]);
})();
