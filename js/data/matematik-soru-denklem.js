/* ============================================================
   MATEMATİK — Denklem Çözme: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-denklem: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-denklem", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-denklem", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-denklem-101", "3x − 7 = 8 denkleminde x kaçtır?",
      ["5", "3", "15", "8", "2"], 0, "3x = 15 → x = 5.",
      { short: "3x = 15 → x = 5.", steps: ["7'yi karşıya at: 3x = 15.", "x = 5."], whyOthersWrong: ["Sabit terim önce yalnız bırakılır."] }, 1),
    Q("matematik-mat-denklem-102", "2x + 5 = 17 denkleminde x kaçtır?",
      ["6", "12", "11", "8", "7"], 0, "2x = 12 → x = 6.",
      { short: "2x = 12 → x = 6.", steps: ["5'i çıkar: 2x = 12.", "x = 6."], whyOthersWrong: ["Önce 5 çıkarılır."] }, 1),
    Q("matematik-mat-denklem-103", "x/4 = 3 denkleminde x kaçtır?",
      ["12", "7", "3", "48", "4"], 0, "x = 3·4 = 12.",
      { short: "x = 12.", steps: ["Her iki taraf 4 ile çarpılır.", "x = 12."], whyOthersWrong: ["Bölme tersine çevrilir."] }, 1),
    Q("matematik-mat-denklem-104", "5x = 0 denkleminde x kaçtır?",
      ["0", "5", "1", "−5", "Sonsuz"], 0, "5x = 0 → x = 0.",
      { short: "x = 0.", steps: ["0'ı 5'e böl.", "x = 0."], whyOthersWrong: ["Sıfırın 5 katı 0'dır."] }, 1),
    Q("matematik-mat-denklem-105", "x + 9 = 4 denkleminde x kaçtır?",
      ["−5", "5", "13", "−13", "4"], 0, "x = 4 − 9 = −5.",
      { short: "x = −5.", steps: ["9'u çıkar: x = 4 − 9.", "x = −5."], whyOthersWrong: ["Sonuç negatiftir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-denklem-106", "4x − 3 = 2x + 9 denkleminde x kaçtır?",
      ["6", "12", "−6", "3", "9"], 0, "4x−2x = 9+3 → 2x = 12 → x = 6.",
      { short: "2x = 12 → x = 6.", steps: ["Değişkenleri bir tarafa topla.", "2x = 12 → x = 6."], whyOthersWrong: ["Taraf değiştiren terimin işareti döner."] }, 2),
    Q("matematik-mat-denklem-107", "3(x − 2) = 12 denkleminde x kaçtır?",
      ["6", "4", "2", "12", "10"], 0, "x − 2 = 4 → x = 6.",
      { short: "x − 2 = 4 → x = 6.", steps: ["Her iki taraf 3'e bölünür.", "x = 6."], whyOthersWrong: ["Önce parantez sadeleşir."] }, 2),
    Q("matematik-mat-denklem-108", "(x + 1)/2 = 5 denkleminde x kaçtır?",
      ["9", "11", "4", "10", "8"], 0, "x + 1 = 10 → x = 9.",
      { short: "x + 1 = 10 → x = 9.", steps: ["2 ile çarp: x+1 = 10.", "x = 9."], whyOthersWrong: ["Payda önce çarpılır."] }, 2),
    Q("matematik-mat-denklem-109", "5x + 2 = 3x − 8 denkleminde x kaçtır?",
      ["−5", "5", "−1", "1", "−10"], 0, "2x = −10 → x = −5.",
      { short: "2x = −10 → x = −5.", steps: ["5x−3x = −8−2.", "2x = −10 → x = −5."], whyOthersWrong: ["Sonuç negatiftir."] }, 2),
    Q("matematik-mat-denklem-110", "2(x + 3) = x + 10 denkleminde x kaçtır?",
      ["4", "16", "6", "−4", "2"], 0, "2x+6 = x+10 → x = 4.",
      { short: "x = 4.", steps: ["2x+6 = x+10.", "x = 4."], whyOthersWrong: ["Parantez açılır, x bir tarafa toplanır."] }, 2),
    Q("matematik-mat-denklem-111", "x/2 + x/3 = 5 denkleminde x kaçtır?",
      ["6", "5", "30", "1", "10"], 0, "(3x+2x)/6 = 5 → 5x = 30 → x = 6.",
      { short: "5x/6 = 5 → x = 6.", steps: ["Ortak payda 6: 5x/6 = 5.", "5x = 30 → x = 6."], whyOthersWrong: ["Önce kesirler birleştirilir."] }, 2),
    Q("matematik-mat-denklem-112", "x + y = 10 ve x − y = 4 ise x kaçtır?",
      ["7", "3", "10", "4", "11"], 0, "Toplarsak: 2x = 14 → x = 7.",
      { short: "2x = 14 → x = 7.", steps: ["İki denklem toplanır: 2x = 14.", "x = 7."], whyOthersWrong: ["y = 3 olur, x = 7."] }, 2),
    Q("matematik-mat-denklem-113", "0,5x + 1,5 = 4 denkleminde x kaçtır?",
      ["5", "2,5", "8", "3", "10"], 0, "0,5x = 2,5 → x = 5.",
      { short: "0,5x = 2,5 → x = 5.", steps: ["1,5 çıkar: 0,5x = 2,5.", "x = 5."], whyOthersWrong: ["0,5'e bölmek 2 ile çarpmaktır."] }, 2),
    Q("matematik-mat-denklem-114", "7 − 2x = x − 5 denkleminde x kaçtır?",
      ["4", "−4", "12", "2", "6"], 0, "7+5 = x+2x → 12 = 3x → x = 4.",
      { short: "3x = 12 → x = 4.", steps: ["x'leri bir, sabitleri öbür tarafa topla.", "3x = 12 → x = 4."], whyOthersWrong: ["İşaret değişimine dikkat."] }, 2),
    Q("matematik-mat-denklem-115", "Bir sayının 3 katından 4 çıkarılınca 20 elde ediliyor. Bu sayı kaçtır?",
      ["8", "6", "12", "16", "24"], 0, "3x − 4 = 20 → 3x = 24 → x = 8.",
      { short: "3x = 24 → x = 8.", steps: ["3x − 4 = 20.", "x = 8."], whyOthersWrong: ["Önce +4, sonra ÷3."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-denklem-116", "(2x − 1)/3 = (x + 2)/4 denkleminde x kaçtır?",
      ["2", "1", "−2", "5", "10"], 0, "Çapraz çarpım: 4(2x−1) = 3(x+2) → 8x−4 = 3x+6 → 5x = 10 → x = 2.",
      { short: "5x = 10 → x = 2.", steps: ["8x−4 = 3x+6.", "5x = 10 → x = 2."], whyOthersWrong: ["İçler-dışlar çarpımı uygulanır."] }, 3),
    Q("matematik-mat-denklem-117", "x + 2y = 11 ve 3x − y = 5 ise x + y kaçtır?",
      ["7", "3", "4", "1", "10"], 0, "Çözüm x = 3, y = 4 → x + y = 7.",
      { short: "x=3, y=4 → 7.", steps: ["x = 11−2y; 3(11−2y)−y = 5.", "y = 4, x = 3 → x+y = 7."], whyOthersWrong: ["Sistem tek çözüme götürür."] }, 3),
    Q("matematik-mat-denklem-118", "(x − 1)/2 − (x + 1)/3 = 1 denkleminde x kaçtır?",
      ["11", "5", "6", "−11", "1"], 0, "Payda 6: 3(x−1) − 2(x+1) = 6 → x − 5 = 6 → x = 11.",
      { short: "x − 5 = 6 → x = 11.", steps: ["3(x−1)−2(x+1) = 6.", "x−5 = 6 → x = 11."], whyOthersWrong: ["Negatif terim parantezle dağıtılır."] }, 3),
    Q("matematik-mat-denklem-119", "ax + 3 = 11 denkleminin çözümü x = 2 ise a kaçtır?",
      ["4", "2", "8", "6", "3"], 0, "2a + 3 = 11 → 2a = 8 → a = 4.",
      { short: "2a = 8 → a = 4.", steps: ["x = 2 yerine yaz: 2a+3 = 11.", "a = 4."], whyOthersWrong: ["x değeri yerine konup a çözülür."] }, 3),
    Q("matematik-mat-denklem-120", "2x + 3y = 12 ve x = 3 ise y kaçtır?",
      ["2", "6", "3", "12", "4"], 0, "6 + 3y = 12 → 3y = 6 → y = 2.",
      { short: "3y = 6 → y = 2.", steps: ["x=3 yerine yaz: 6+3y = 12.", "y = 2."], whyOthersWrong: ["Önce x yerine konur."] }, 3),
    Q("matematik-mat-denklem-121", "Bir kesrin payı paydasından 4 fazladır. Kesir 3/2'ye eşitse paydası kaçtır?",
      ["8", "12", "4", "6", "16"], 0, "(q+4)/q = 3/2 → 2(q+4) = 3q → q = 8.",
      { short: "2(q+4) = 3q → q = 8.", steps: ["Pay = q+4.", "2q+8 = 3q → q = 8."], whyOthersWrong: ["Çapraz çarpım q = 8 verir."] }, 3),
    Q("matematik-mat-denklem-122", "3x − 2y = 7 ve 2x + 2y = 8 ise x · y kaçtır?",
      ["3", "1", "4", "6", "−1"], 0, "Toplarsak 5x = 15 → x = 3; y = 1 → x·y = 3.",
      { short: "x=3, y=1 → 3.", steps: ["İki denklem toplanır: 5x = 15.", "x=3, y=1 → x·y = 3."], whyOthersWrong: ["y terimleri toplamayla yok olur."] }, 3),
    Q("matematik-mat-denklem-123", "Bir babanın yaşı oğlunun yaşının 3 katıdır. 10 yıl sonra babanın yaşı oğlunun yaşının 2 katı olacaktır. Oğul şu an kaç yaşındadır?",
      ["10", "30", "20", "5", "15"], 0, "3o + 10 = 2(o + 10) → 3o + 10 = 2o + 20 → o = 10.",
      { short: "o = 10.", steps: ["Baba = 3o.", "3o+10 = 2(o+10) → o = 10."], whyOthersWrong: ["10 yıl ikisine de eklenir."] }, 3),
    Q("matematik-mat-denklem-124", "4/(x − 1) = 2 denkleminde x kaçtır? (x ≠ 1)",
      ["3", "2", "4", "1", "6"], 0, "4 = 2(x−1) → x−1 = 2 → x = 3.",
      { short: "x − 1 = 2 → x = 3.", steps: ["Çapraz çarpım: 4 = 2(x−1).", "x = 3."], whyOthersWrong: ["Payda sıfır olamaz (x≠1)."] }, 3),
    Q("matematik-mat-denklem-125", "3x − y = 5 denklemini sağlayan (2, k) noktası için k kaçtır?",
      ["1", "6", "5", "11", "−1"], 0, "x = 2 yaz: 6 − k = 5 → k = 1.",
      { short: "6 − k = 5 → k = 1.", steps: ["3·2 − k = 5.", "k = 1."], whyOthersWrong: ["Nokta denklemi sağlamalı."] }, 3)
  ]);
})();
