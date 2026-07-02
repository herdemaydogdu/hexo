/* ============================================================
   MATEMATİK — Ondalık Gösterim: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; işlemler elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-ondalik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-ondalik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-ondalik", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-ondalik-101", "0,5 + 0,3 işleminin sonucu kaçtır?",
      ["0,8", "0,53", "0,2", "8", "0,08"], 0, "Ondalık toplama: 0,5 + 0,3 = 0,8.",
      { short: "0,8.", steps: ["Basamaklar hizalanır.", "0,5 + 0,3 = 0,8."], whyOthersWrong: ["Virgül hizalanır."] }, 1),
    Q("matematik-mat-ondalik-102", "0,7 − 0,2 işleminin sonucu kaçtır?",
      ["0,5", "0,9", "0,05", "5", "0,2"], 0, "0,7 − 0,2 = 0,5.",
      { short: "0,5.", steps: ["Ondalık çıkarma.", "= 0,5."], whyOthersWrong: ["Fark 0,5."] }, 1),
    Q("matematik-mat-ondalik-103", "0,2 · 10 işleminin sonucu kaçtır?",
      ["2", "0,2", "20", "0,02", "10"], 0, "10 ile çarpımda virgül bir basamak sağa kayar: 2.",
      { short: "0,2·10 = 2.", steps: ["Virgül 1 sağa.", "= 2."], whyOthersWrong: ["10 ile çarpım."] }, 1),
    Q("matematik-mat-ondalik-104", "1,5 + 2,5 işleminin sonucu kaçtır?",
      ["4", "3,10", "4,10", "40", "3"], 0, "1,5 + 2,5 = 4.",
      { short: "= 4.", steps: ["Ondalık toplama.", "1,5 + 2,5 = 4."], whyOthersWrong: ["Tam sonuç 4."] }, 1),
    Q("matematik-mat-ondalik-105", "0,25 ondalık sayısının kesir biçimi nedir?",
      ["1/4", "1/2", "25", "2/5", "1/25"], 0, "0,25 = 25/100 = 1/4.",
      { short: "0,25 = 1/4.", steps: ["25/100 sadeleşir.", "= 1/4."], whyOthersWrong: ["Yüzde birler sadeleşir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-ondalik-106", "0,3 · 0,2 işleminin sonucu kaçtır?",
      ["0,06", "0,6", "0,5", "6", "0,006"], 0, "3·2 = 6, iki ondalık basamak → 0,06.",
      { short: "0,06.", steps: ["Basamaklar toplanır (1+1=2).", "6 → 0,06."], whyOthersWrong: ["Toplam ondalık basamak 2."] }, 2),
    Q("matematik-mat-ondalik-107", "2,4 / 0,6 işleminin sonucu kaçtır?",
      ["4", "0,4", "40", "1,8", "0,04"], 0, "2,4 / 0,6 = 24/6 = 4.",
      { short: "24/6 = 4.", steps: ["Payda tamsayıya: ×10.", "24/6 = 4."], whyOthersWrong: ["Böleni tamsayı yap."] }, 2),
    Q("matematik-mat-ondalik-108", "0,125 ondalık sayısının kesir biçimi nedir?",
      ["1/8", "1/4", "1/5", "125", "1/2"], 0, "0,125 = 125/1000 = 1/8.",
      { short: "= 1/8.", steps: ["125/1000 sadeleşir.", "= 1/8."], whyOthersWrong: ["1000'e böl, sadeleştir."] }, 2),
    Q("matematik-mat-ondalik-109", "1/5 kesrinin ondalık gösterimi nedir?",
      ["0,2", "0,5", "0,15", "5", "0,25"], 0, "1/5 = 2/10 = 0,2.",
      { short: "= 0,2.", steps: ["Paydayı 10 yap: 2/10.", "= 0,2."], whyOthersWrong: ["1 bölü 5 = 0,2."] }, 2),
    Q("matematik-mat-ondalik-110", "0,4 + 0,35 işleminin sonucu kaçtır?",
      ["0,75", "0,39", "0,45", "7,5", "0,075"], 0, "0,40 + 0,35 = 0,75.",
      { short: "0,75.", steps: ["Basamak hizala: 0,40.", "+ 0,35 = 0,75."], whyOthersWrong: ["Basamak sayısı eşitlenir."] }, 2),
    Q("matematik-mat-ondalik-111", "3,6 / 1,2 işleminin sonucu kaçtır?",
      ["3", "0,3", "30", "2,4", "1,8"], 0, "36/12 = 3.",
      { short: "36/12 = 3.", steps: ["×10 ile tamsayı: 36/12.", "= 3."], whyOthersWrong: ["Böleni tamsayı yap."] }, 2),
    Q("matematik-mat-ondalik-112", "0,05 · 200 işleminin sonucu kaçtır?",
      ["10", "1", "100", "0,1", "20"], 0, "0,05 · 200 = 10.",
      { short: "= 10.", steps: ["5/100 · 200 = 1000/100.", "= 10."], whyOthersWrong: ["Çarpım 10."] }, 2),
    Q("matematik-mat-ondalik-113", "2,5 · 4 işleminin sonucu kaçtır?",
      ["10", "8,20", "6,5", "1", "9"], 0, "2,5 · 4 = 10.",
      { short: "= 10.", steps: ["2,5·4 = 10.", ""], whyOthersWrong: ["Çarpım 10."] }, 2),
    Q("matematik-mat-ondalik-114", "0,9 − 0,45 işleminin sonucu kaçtır?",
      ["0,45", "0,54", "0,35", "0,55", "4,5"], 0, "0,90 − 0,45 = 0,45.",
      { short: "0,45.", steps: ["0,90 − 0,45.", "= 0,45."], whyOthersWrong: ["Basamak hizalanır."] }, 2),
    Q("matematik-mat-ondalik-115", "0,7 ondalık sayısının kesir biçimi nedir?",
      ["7/10", "7/100", "1/7", "70", "7"], 0, "0,7 = 7/10.",
      { short: "= 7/10.", steps: ["Birler sonrası tek basamak → onda.", "7/10."], whyOthersWrong: ["Ondalık basamak sayısı paydayı belirler."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-ondalik-116", "Devirli ondalık 0,333... sayısının kesir biçimi nedir?",
      ["1/3", "3/10", "33/100", "1/30", "3/100"], 0, "0,(3) = 3/9 = 1/3.",
      { short: "= 1/3.", steps: ["Devir 1 basamak → payda 9.", "3/9 = 1/3."], whyOthersWrong: ["Devirli sayıda payda 9'lardan oluşur."] }, 3),
    Q("matematik-mat-ondalik-117", "0,12 · 2,5 işleminin sonucu kaçtır?",
      ["0,3", "3", "0,03", "0,25", "0,6"], 0, "12·25 = 300; üç ondalık basamak → 0,300 = 0,3.",
      { short: "= 0,3.", steps: ["0,12·2,5 = 0,300.", "= 0,3."], whyOthersWrong: ["Basamak sayısı 2+1 = 3."] }, 3),
    Q("matematik-mat-ondalik-118", "(0,6)² işleminin sonucu kaçtır?",
      ["0,36", "0,12", "3,6", "0,6", "1,2"], 0, "0,6·0,6 = 0,36.",
      { short: "0,36.", steps: ["6·6 = 36, iki basamak.", "= 0,36."], whyOthersWrong: ["Kare = kendisiyle çarpım."] }, 3),
    Q("matematik-mat-ondalik-119", "0,001 · 10³ işleminin sonucu kaçtır?",
      ["1", "0,001", "10", "100", "0,1"], 0, "10³ = 1000; 0,001·1000 = 1.",
      { short: "= 1.", steps: ["Virgül 3 sağa kayar.", "0,001 → 1."], whyOthersWrong: ["1000 ile çarpım."] }, 3),
    Q("matematik-mat-ondalik-120", "0,25 + 1/8 işleminin ondalık sonucu kaçtır?",
      ["0,375", "0,33", "0,4", "0,125", "0,5"], 0, "1/8 = 0,125; 0,25 + 0,125 = 0,375.",
      { short: "0,375.", steps: ["1/8 = 0,125.", "0,25 + 0,125 = 0,375."], whyOthersWrong: ["Kesir önce ondalığa çevrilir."] }, 3),
    Q("matematik-mat-ondalik-121", "1,2 / 0,04 işleminin sonucu kaçtır?",
      ["30", "3", "300", "0,3", "48"], 0, "120/4 = 30.",
      { short: "120/4 = 30.", steps: ["×100 ile tamsayı: 120/4.", "= 30."], whyOthersWrong: ["Böleni tamsayı yapmak için ×100."] }, 3),
    Q("matematik-mat-ondalik-122", "0,45 ondalık sayısının en sade kesir biçimi nedir?",
      ["9/20", "45/100", "4/5", "9/25", "45"], 0, "45/100 = 9/20 (÷5).",
      { short: "= 9/20.", steps: ["45/100 → 5'e böl.", "= 9/20."], whyOthersWrong: ["EBOB 5 ile sadeleşir."] }, 3),
    Q("matematik-mat-ondalik-123", "0,15 · 40 işleminin sonucu kaçtır?",
      ["6", "0,6", "60", "0,06", "4,5"], 0, "0,15 · 40 = 6.",
      { short: "= 6.", steps: ["15/100 · 40 = 600/100.", "= 6."], whyOthersWrong: ["Çarpım 6."] }, 3),
    Q("matematik-mat-ondalik-124", "Devirli ondalık 0,666... sayısının kesir biçimi nedir?",
      ["2/3", "6/10", "2/30", "66/100", "3/5"], 0, "0,(6) = 6/9 = 2/3.",
      { short: "= 2/3.", steps: ["6/9 sadeleşir.", "= 2/3."], whyOthersWrong: ["Devir 1 basamak → payda 9."] }, 3),
    Q("matematik-mat-ondalik-125", "(0,2)³ işleminin sonucu kaçtır?",
      ["0,008", "0,08", "0,006", "0,8", "0,0008"], 0, "0,2³ = 0,008 (2³ = 8, üç ondalık basamak).",
      { short: "0,008.", steps: ["2·2·2 = 8.", "Üç basamak → 0,008."], whyOthersWrong: ["Her çarpan bir ondalık basamak ekler."] }, 3)
  ]);
})();
