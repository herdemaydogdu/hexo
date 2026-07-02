/* ============================================================
   MATEMATİK — Üslü Sayılar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; işlemler elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-uslu: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-uslu", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-uslu", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-uslu-101", "2³ işleminin sonucu kaçtır?",
      ["8", "6", "9", "23", "16"], 0, "2·2·2 = 8.",
      { short: "2³ = 8.", steps: ["2·2·2.", "= 8."], whyOthersWrong: ["Üs, taban kaç kez çarpılır."] }, 1),
    Q("matematik-mat-uslu-102", "3² işleminin sonucu kaçtır?",
      ["9", "6", "8", "5", "32"], 0, "3·3 = 9.",
      { short: "3² = 9.", steps: ["3·3.", "= 9."], whyOthersWrong: ["Kare = kendisiyle çarpım."] }, 1),
    Q("matematik-mat-uslu-103", "5⁰ işleminin sonucu kaçtır?",
      ["1", "0", "5", "50", "25"], 0, "Sıfırıncı kuvvet (taban ≠ 0) her zaman 1'dir.",
      { short: "5⁰ = 1.", steps: ["a⁰ = 1 (a≠0).", "= 1."], whyOthersWrong: ["Sıfır üs 1 verir."] }, 1),
    Q("matematik-mat-uslu-104", "10² işleminin sonucu kaçtır?",
      ["100", "20", "10", "1000", "200"], 0, "10·10 = 100.",
      { short: "10² = 100.", steps: ["10·10.", "= 100."], whyOthersWrong: ["Kare = 100."] }, 1),
    Q("matematik-mat-uslu-105", "2⁴ işleminin sonucu kaçtır?",
      ["16", "8", "6", "24", "12"], 0, "2·2·2·2 = 16.",
      { short: "2⁴ = 16.", steps: ["2 dört kez çarpılır.", "= 16."], whyOthersWrong: ["16'dır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-uslu-106", "2³ · 2² işleminin sonucu kaçtır?",
      ["32", "64", "16", "25", "6"], 0, "Aynı tabanlı çarpımda üsler toplanır: 2⁵ = 32.",
      { short: "2⁵ = 32.", steps: ["Üsler toplanır: 3+2.", "2⁵ = 32."], whyOthersWrong: ["Üsler çarpılmaz, toplanır."] }, 2),
    Q("matematik-mat-uslu-107", "3⁵ / 3³ işleminin sonucu kaçtır?",
      ["9", "27", "3", "6", "81"], 0, "Aynı tabanlı bölmede üsler çıkar: 3² = 9.",
      { short: "3² = 9.", steps: ["Üsler çıkarılır: 5−3.", "3² = 9."], whyOthersWrong: ["Üsler çıkarılır."] }, 2),
    Q("matematik-mat-uslu-108", "(2²)³ işleminin sonucu kaçtır?",
      ["64", "32", "16", "8", "128"], 0, "Üslü sayının kuvvetinde üsler çarpılır: 2⁶ = 64.",
      { short: "2⁶ = 64.", steps: ["Üsler çarpılır: 2·3.", "2⁶ = 64."], whyOthersWrong: ["İç içe üste çarpılır."] }, 2),
    Q("matematik-mat-uslu-109", "2⁻² işleminin sonucu kaçtır?",
      ["1/4", "−4", "4", "1/2", "−1/4"], 0, "Negatif üs ters çevirir: 1/2² = 1/4.",
      { short: "1/4.", steps: ["2⁻² = 1/2².", "= 1/4."], whyOthersWrong: ["Negatif üs işaret değil, ters."] }, 2),
    Q("matematik-mat-uslu-110", "(1/2)³ işleminin sonucu kaçtır?",
      ["1/8", "3/2", "1/6", "2/3", "1/2"], 0, "(1/2)³ = 1/8.",
      { short: "1/8.", steps: ["Pay ve payda küplenir.", "1³/2³ = 1/8."], whyOthersWrong: ["Payda da üstlenir."] }, 2),
    Q("matematik-mat-uslu-111", "2³ + 2³ işleminin sonucu kaçtır?",
      ["16", "64", "2⁶", "8", "12"], 0, "8 + 8 = 16 (= 2·2³ = 2⁴).",
      { short: "8 + 8 = 16.", steps: ["Toplama, çarpma değil.", "2·8 = 16."], whyOthersWrong: ["Üsler toplanmaz; terimler eklenir."] }, 2),
    Q("matematik-mat-uslu-112", "4² · 2 işleminin sonucu kaçtır?",
      ["32", "16", "64", "18", "8"], 0, "16 · 2 = 32.",
      { short: "16·2 = 32.", steps: ["4² = 16.", "16·2 = 32."], whyOthersWrong: ["Önce üs, sonra çarpma."] }, 2),
    Q("matematik-mat-uslu-113", "(−2)³ işleminin sonucu kaçtır?",
      ["−8", "8", "−6", "6", "−2"], 0, "Tek kuvvette negatif taban negatif kalır: −8.",
      { short: "= −8.", steps: ["(−2)(−2)(−2).", "= −8."], whyOthersWrong: ["Tek üs → negatif sonuç."] }, 2),
    Q("matematik-mat-uslu-114", "10³ işleminin sonucu kaçtır?",
      ["1000", "100", "30", "300", "10000"], 0, "10·10·10 = 1000.",
      { short: "= 1000.", steps: ["10 üç kez.", "= 1000."], whyOthersWrong: ["Üs kadar sıfır."] }, 2),
    Q("matematik-mat-uslu-115", "3⁻¹ işleminin sonucu kaçtır?",
      ["1/3", "−3", "3", "−1/3", "1"], 0, "3⁻¹ = 1/3.",
      { short: "1/3.", steps: ["Negatif üs ters çevirir.", "= 1/3."], whyOthersWrong: ["Ters, negatif değil."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-uslu-116", "2¹⁰ işleminin sonucu kaçtır?",
      ["1024", "512", "100", "2000", "256"], 0, "2¹⁰ = 1024.",
      { short: "= 1024.", steps: ["2⁵ = 32, 32² = 1024.", ""], whyOthersWrong: ["2¹⁰ = 1024."] }, 3),
    Q("matematik-mat-uslu-117", "(2³ · 3²) / (2 · 3) işleminin sonucu kaçtır?",
      ["12", "6", "36", "18", "24"], 0, "2^(3−1)·3^(2−1) = 2²·3 = 12.",
      { short: "2²·3 = 12.", steps: ["Aynı tabanlarda üs çıkar.", "4·3 = 12."], whyOthersWrong: ["Taban bazında sadeleştir."] }, 3),
    Q("matematik-mat-uslu-118", "2ˣ = 32 ise x kaçtır?",
      ["5", "4", "6", "16", "8"], 0, "32 = 2⁵ → x = 5.",
      { short: "x = 5.", steps: ["32 = 2⁵.", "x = 5."], whyOthersWrong: ["2'nin 5. kuvveti 32."] }, 3),
    Q("matematik-mat-uslu-119", "3ˣ = 1/9 ise x kaçtır?",
      ["−2", "2", "−3", "3", "−1/2"], 0, "1/9 = 3⁻² → x = −2.",
      { short: "x = −2.", steps: ["1/9 = 3⁻².", "x = −2."], whyOthersWrong: ["Ters → negatif üs."] }, 3),
    Q("matematik-mat-uslu-120", "(2⁴ · 2²) / 2³ işleminin sonucu kaçtır?",
      ["8", "16", "4", "32", "2"], 0, "2^(4+2−3) = 2³ = 8.",
      { short: "2³ = 8.", steps: ["Üsler: 4+2−3 = 3.", "2³ = 8."], whyOthersWrong: ["Çarpımda topla, bölmede çıkar."] }, 3),
    Q("matematik-mat-uslu-121", "4^(1/2) işleminin sonucu kaçtır?",
      ["2", "4", "16", "1/2", "8"], 0, "Kesirli üs kök demektir: 4^(1/2) = √4 = 2.",
      { short: "√4 = 2.", steps: ["1/2 üs → karekök.", "= 2."], whyOthersWrong: ["Kesirli üs kök verir."] }, 3),
    Q("matematik-mat-uslu-122", "(−1)¹⁰⁰ işleminin sonucu kaçtır?",
      ["1", "−1", "100", "0", "−100"], 0, "Çift kuvvette negatif taban pozitif olur: 1.",
      { short: "= 1.", steps: ["Çift üs → pozitif.", "(−1)^çift = 1."], whyOthersWrong: ["100 çift olduğundan 1."] }, 3),
    Q("matematik-mat-uslu-123", "2⁵ + 2⁵ işleminin sonucu kaçtır?",
      ["64", "32", "2¹⁰", "128", "1024"], 0, "2·2⁵ = 2⁶ = 64.",
      { short: "2⁶ = 64.", steps: ["İki eşit terim → 2·2⁵.", "= 2⁶ = 64."], whyOthersWrong: ["Üsler toplanmaz."] }, 3),
    Q("matematik-mat-uslu-124", "9^(1/2) · 8^(1/3) işleminin sonucu kaçtır?",
      ["6", "5", "12", "72", "17"], 0, "√9 · ∛8 = 3 · 2 = 6.",
      { short: "3·2 = 6.", steps: ["9^(1/2)=3, 8^(1/3)=2.", "3·2 = 6."], whyOthersWrong: ["Kesirli üsler köke çevrilir."] }, 3),
    Q("matematik-mat-uslu-125", "(0,1)⁻² işleminin sonucu kaçtır?",
      ["100", "0,01", "10", "0,1", "20"], 0, "(0,1)⁻² = (1/10)⁻² = 10² = 100.",
      { short: "= 100.", steps: ["0,1 = 1/10; ters² = 10².", "= 100."], whyOthersWrong: ["Negatif üs tersini alır."] }, 3)
  ]);
})();
