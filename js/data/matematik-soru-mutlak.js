/* ============================================================
   MATEMATİK — Mutlak Değer: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-mutlak: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-mutlak", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-mutlak", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-mutlak-101", "|−5| ifadesinin değeri kaçtır?",
      ["5", "−5", "0", "10", "1/5"], 0, "Mutlak değer negatifi pozitif yapar: |−5| = 5.",
      { short: "|−5| = 5.", steps: ["Uzaklık daima pozitif.", "= 5."], whyOthersWrong: ["Mutlak değer negatif olamaz."] }, 1),
    Q("matematik-mat-mutlak-102", "|7| ifadesinin değeri kaçtır?",
      ["7", "−7", "0", "14", "1"], 0, "Pozitif sayının mutlak değeri kendisidir.",
      { short: "|7| = 7.", steps: ["Pozitif → aynı.", "= 7."], whyOthersWrong: ["Değişmez."] }, 1),
    Q("matematik-mat-mutlak-103", "|0| ifadesinin değeri kaçtır?",
      ["0", "1", "−1", "Tanımsız", "2"], 0, "Sıfırın mutlak değeri sıfırdır.",
      { short: "|0| = 0.", steps: ["0'ın uzaklığı 0.", "= 0."], whyOthersWrong: ["Sıfır sıfırdır."] }, 1),
    Q("matematik-mat-mutlak-104", "|−3| + |2| ifadesinin değeri kaçtır?",
      ["5", "1", "−1", "6", "−5"], 0, "3 + 2 = 5.",
      { short: "3 + 2 = 5.", steps: ["|−3|=3, |2|=2.", "Toplam 5."], whyOthersWrong: ["Her terim pozitiftir."] }, 1),
    Q("matematik-mat-mutlak-105", "|3 − 8| ifadesinin değeri kaçtır?",
      ["5", "−5", "11", "1", "0"], 0, "3 − 8 = −5; |−5| = 5.",
      { short: "|−5| = 5.", steps: ["Önce içi: −5.", "Mutlak değer 5."], whyOthersWrong: ["Önce parantez içi hesaplanır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-mutlak-106", "|x| = 4 denkleminin kaç çözümü vardır?",
      ["2", "1", "0", "4", "3"], 0, "x = 4 veya x = −4 → 2 çözüm.",
      { short: "x = ±4 → 2.", steps: ["Mutlak değer iki işaret verir.", "±4."], whyOthersWrong: ["İki kök vardır."] }, 2),
    Q("matematik-mat-mutlak-107", "|x − 2| = 3 denkleminin pozitif kökü kaçtır?",
      ["5", "−1", "1", "3", "2"], 0, "x−2 = 3 → x = 5; x−2 = −3 → x = −1. Pozitif kök 5.",
      { short: "x = 5.", steps: ["x−2 = ±3.", "x = 5 veya −1."], whyOthersWrong: ["Pozitif olan 5."] }, 2),
    Q("matematik-mat-mutlak-108", "|2x| = 10 denkleminin büyük kökü kaçtır?",
      ["5", "−5", "10", "20", "2"], 0, "2x = ±10 → x = ±5; büyük kök 5.",
      { short: "x = ±5 → 5.", steps: ["|2x|=10 → 2x=±10.", "x = ±5."], whyOthersWrong: ["Büyük olan 5."] }, 2),
    Q("matematik-mat-mutlak-109", "|x + 1| = 0 denkleminin çözümü kaçtır?",
      ["−1", "1", "0", "Çözüm yok", "±1"], 0, "İçi sıfır olmalı: x + 1 = 0 → x = −1.",
      { short: "x = −1.", steps: ["Mutlak değer 0 ise içi 0.", "x = −1."], whyOthersWrong: ["Tek çözüm vardır."] }, 2),
    Q("matematik-mat-mutlak-110", "|−2| · |3| ifadesinin değeri kaçtır?",
      ["6", "−6", "5", "1", "9"], 0, "2 · 3 = 6.",
      { short: "2·3 = 6.", steps: ["|−2|=2, |3|=3.", "Çarpım 6."], whyOthersWrong: ["Her ikisi pozitiftir."] }, 2),
    Q("matematik-mat-mutlak-111", "|x| < 3 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["5", "3", "6", "4", "7"], 0, "−3 < x < 3 → x = −2,−1,0,1,2 → 5 tane.",
      { short: "−3 < x < 3 → 5.", steps: ["|x|<3 → −3<x<3.", "5 tam sayı."], whyOthersWrong: ["±3 dahil değil."] }, 2),
    Q("matematik-mat-mutlak-112", "|x − 1| = 4 denkleminin köklerinin toplamı kaçtır?",
      ["2", "5", "−3", "8", "0"], 0, "x = 5 veya x = −3; toplam 5 + (−3) = 2.",
      { short: "5 + (−3) = 2.", steps: ["x−1 = ±4 → 5 ve −3.", "Toplam 2."], whyOthersWrong: ["Kökler toplanır."] }, 2),
    Q("matematik-mat-mutlak-113", "|5 − x| = 2 denkleminin küçük kökü kaçtır?",
      ["3", "7", "5", "−3", "2"], 0, "5−x = 2 → x = 3; 5−x = −2 → x = 7. Küçük kök 3.",
      { short: "x = 3.", steps: ["5−x = ±2.", "x = 3 veya 7."], whyOthersWrong: ["Küçük olan 3."] }, 2),
    Q("matematik-mat-mutlak-114", "|x| = −2 denkleminin çözüm sayısı kaçtır?",
      ["0", "1", "2", "Sonsuz", "−2"], 0, "Mutlak değer negatif olamaz → çözüm yok (0).",
      { short: "Çözüm yok → 0.", steps: ["|x| ≥ 0 daima.", "−2'ye eşit olamaz."], whyOthersWrong: ["Negatife eşitlenemez."] }, 2),
    Q("matematik-mat-mutlak-115", "|3x − 6| = 0 denkleminin çözümü kaçtır?",
      ["2", "0", "6", "−2", "3"], 0, "3x − 6 = 0 → x = 2.",
      { short: "x = 2.", steps: ["İçi 0: 3x = 6.", "x = 2."], whyOthersWrong: ["Tek çözüm."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-mutlak-116", "|x − 3| ≤ 2 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["5", "4", "3", "6", "2"], 0, "−2 ≤ x−3 ≤ 2 → 1 ≤ x ≤ 5 → x = 1,2,3,4,5 → 5.",
      { short: "1 ≤ x ≤ 5 → 5.", steps: ["−2 ≤ x−3 ≤ 2.", "1 ≤ x ≤ 5."], whyOthersWrong: ["Uçlar dahil (≤)."] }, 3),
    Q("matematik-mat-mutlak-117", "|2x − 1| = 7 denkleminin köklerinin toplamı kaçtır?",
      ["1", "7", "4", "−3", "8"], 0, "2x−1 = 7 → x = 4; 2x−1 = −7 → x = −3; toplam 1.",
      { short: "4 + (−3) = 1.", steps: ["2x−1 = ±7.", "x = 4 veya −3."], whyOthersWrong: ["Kökler toplanır."] }, 3),
    Q("matematik-mat-mutlak-118", "|x| + |x − 4| ifadesinin alabileceği en küçük değer kaçtır?",
      ["4", "0", "2", "8", "6"], 0, "0 ≤ x ≤ 4 aralığında toplam sabit 4'tür (uzaklıklar toplamı).",
      { short: "En küçük 4.", steps: ["0 ile 4 arası noktalar için toplam = 4.", "Min = 4."], whyOthersWrong: ["Aralık dışında değer büyür."] }, 3),
    Q("matematik-mat-mutlak-119", "|x + 2| = |x − 4| denkleminin çözümü kaçtır?",
      ["1", "2", "3", "−1", "0"], 0, "−2 ve 4'e eşit uzaklıktaki nokta orta nokta: x = 1.",
      { short: "x = 1.", steps: ["x, −2 ve 4'e eşit uzaklıkta.", "Orta nokta (−2+4)/2 = 1."], whyOthersWrong: ["Orta nokta tek çözümdür."] }, 3),
    Q("matematik-mat-mutlak-120", "|x − 5| < 3 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["5", "3", "6", "4", "7"], 0, "2 < x < 8 → x = 3,4,5,6,7 → 5 tane.",
      { short: "2 < x < 8 → 5.", steps: ["−3 < x−5 < 3.", "2 < x < 8."], whyOthersWrong: ["Uçlar dahil değil (<)."] }, 3),
    Q("matematik-mat-mutlak-121", "|x − 1| = 2x − 4 denkleminin çözümü kaçtır?",
      ["3", "1", "5/3", "5", "2"], 0, "x−1 = 2x−4 → x = 3 (2x−4 = 2 ≥ 0 ✓). Diğer durum geçersiz.",
      { short: "x = 3.", steps: ["x−1 = 2x−4 → x = 3.", "Kontrol: |2| = 2 ✓."], whyOthersWrong: ["Diğer durum sağ taraf negatif olur."] }, 3),
    Q("matematik-mat-mutlak-122", "||x| − 3| = 1 denkleminin kaç çözümü vardır?",
      ["4", "2", "3", "1", "0"], 0, "|x|−3 = 1 → |x| = 4 → x = ±4; |x|−3 = −1 → |x| = 2 → x = ±2. Toplam 4.",
      { short: "±4, ±2 → 4.", steps: ["|x| = 4 veya 2.", "Her biri iki kök."], whyOthersWrong: ["İç içe mutlak değer 4 kök verir."] }, 3),
    Q("matematik-mat-mutlak-123", "|x² − 4| = 0 denkleminin kaç gerçek kökü vardır?",
      ["2", "1", "4", "0", "3"], 0, "x² − 4 = 0 → x = ±2 → 2 kök.",
      { short: "x = ±2 → 2.", steps: ["İçi 0: x² = 4.", "x = ±2."], whyOthersWrong: ["İki gerçek kök."] }, 3),
    Q("matematik-mat-mutlak-124", "|x − 2| + 3 ifadesinin alabileceği en küçük değer kaçtır?",
      ["3", "0", "2", "5", "1"], 0, "|x−2| ≥ 0, en küçük 0 (x=2) → 0 + 3 = 3.",
      { short: "En küçük 3.", steps: ["|x−2| min = 0 (x=2).", "0 + 3 = 3."], whyOthersWrong: ["Mutlak değer 0 olduğunda minimum."] }, 3),
    Q("matematik-mat-mutlak-125", "|2x + 1| ≥ 5 eşitsizliğini sağlayan en küçük pozitif tam sayı kaçtır?",
      ["2", "1", "3", "4", "5"], 0, "2x+1 ≥ 5 → x ≥ 2 (veya x ≤ −3). En küçük pozitif tam sayı 2.",
      { short: "x ≥ 2 → 2.", steps: ["2x+1 ≥ 5 → x ≥ 2.", "En küçük pozitif tam 2."], whyOthersWrong: ["x=1'de |3|=3 < 5."] }, 3)
  ]);
})();
