/* ============================================================
   MATEMATİK — Köklü Sayılar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; işlemler elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-koklu: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-koklu", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-koklu", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-koklu-101", "√16 işleminin sonucu kaçtır?",
      ["4", "8", "2", "16", "6"], 0, "16 = 4² → √16 = 4.",
      { short: "√16 = 4.", steps: ["4² = 16.", "√16 = 4."], whyOthersWrong: ["Tam karenin köküdür."] }, 1),
    Q("matematik-mat-koklu-102", "√25 işleminin sonucu kaçtır?",
      ["5", "6", "25", "10", "4"], 0, "25 = 5² → √25 = 5.",
      { short: "√25 = 5.", steps: ["5² = 25.", "√25 = 5."], whyOthersWrong: ["Kök 5'tir."] }, 1),
    Q("matematik-mat-koklu-103", "√9 · √4 işleminin sonucu kaçtır?",
      ["6", "13", "36", "5", "12"], 0, "3 · 2 = 6.",
      { short: "3·2 = 6.", steps: ["√9=3, √4=2.", "3·2 = 6."], whyOthersWrong: ["Kökler çarpılır."] }, 1),
    Q("matematik-mat-koklu-104", "√36 işleminin sonucu kaçtır?",
      ["6", "9", "18", "12", "4"], 0, "36 = 6² → √36 = 6.",
      { short: "√36 = 6.", steps: ["6² = 36.", "√36 = 6."], whyOthersWrong: ["Kök 6'dır."] }, 1),
    Q("matematik-mat-koklu-105", "√1 işleminin sonucu kaçtır?",
      ["1", "0", "2", "10", "−1"], 0, "1 = 1² → √1 = 1.",
      { short: "√1 = 1.", steps: ["1² = 1.", "√1 = 1."], whyOthersWrong: ["Kök 1'dir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-koklu-106", "√8 sayısının en sade biçimi nedir?",
      ["2√2", "4√2", "2√4", "8", "√2"], 0, "√8 = √(4·2) = 2√2.",
      { short: "√8 = 2√2.", steps: ["8 = 4·2.", "√4·√2 = 2√2."], whyOthersWrong: ["Tam kare çarpan dışarı çıkar."] }, 2),
    Q("matematik-mat-koklu-107", "√50 sayısının en sade biçimi nedir?",
      ["5√2", "2√5", "25√2", "5√5", "10√5"], 0, "√50 = √(25·2) = 5√2.",
      { short: "√50 = 5√2.", steps: ["50 = 25·2.", "5√2."], whyOthersWrong: ["25 tam karesi dışarı çıkar."] }, 2),
    Q("matematik-mat-koklu-108", "2√3 + 3√3 işleminin sonucu nedir?",
      ["5√3", "5√6", "6√3", "5√9", "6√6"], 0, "Benzer köklü terimler: (2+3)√3 = 5√3.",
      { short: "5√3.", steps: ["Katsayılar toplanır.", "(2+3)√3."], whyOthersWrong: ["Kök içi aynı, katsayı toplanır."] }, 2),
    Q("matematik-mat-koklu-109", "√12 + √3 işleminin sonucu nedir?",
      ["3√3", "√15", "4√3", "2√3", "5√3"], 0, "√12 = 2√3; 2√3 + √3 = 3√3.",
      { short: "2√3 + √3 = 3√3.", steps: ["√12 = 2√3.", "Toplam 3√3."], whyOthersWrong: ["Önce sadeleştirilir."] }, 2),
    Q("matematik-mat-koklu-110", "√2 · √8 işleminin sonucu kaçtır?",
      ["4", "√10", "2√2", "16", "8"], 0, "√2·√8 = √16 = 4.",
      { short: "√16 = 4.", steps: ["Kök içleri çarp: √16.", "= 4."], whyOthersWrong: ["Çarpımda kök içleri çarpılır."] }, 2),
    Q("matematik-mat-koklu-111", "√18 / √2 işleminin sonucu kaçtır?",
      ["3", "9", "√9", "6", "√16"], 0, "√18/√2 = √9 = 3.",
      { short: "√9 = 3.", steps: ["Kök içleri böl: √(18/2)=√9.", "= 3."], whyOthersWrong: ["Bölmede kök içleri bölünür."] }, 2),
    Q("matematik-mat-koklu-112", "(√5)² işleminin sonucu kaçtır?",
      ["5", "25", "√5", "10", "√25"], 0, "Karekökün karesi kök içidir: 5.",
      { short: "(√5)² = 5.", steps: ["Kök ve kare birbirini götürür.", "= 5."], whyOthersWrong: ["Kök içi elde edilir."] }, 2),
    Q("matematik-mat-koklu-113", "√48 sayısının en sade biçimi nedir?",
      ["4√3", "3√4", "16√3", "4√12", "2√12"], 0, "√48 = √(16·3) = 4√3.",
      { short: "√48 = 4√3.", steps: ["48 = 16·3.", "4√3."], whyOthersWrong: ["16 tam karesi dışarı çıkar."] }, 2),
    Q("matematik-mat-koklu-114", "3√2 · 2√2 işleminin sonucu kaçtır?",
      ["12", "6√2", "6", "12√2", "5√2"], 0, "(3·2)·(√2·√2) = 6·2 = 12.",
      { short: "6·2 = 12.", steps: ["Katsayılar: 6.", "√2·√2 = 2 → 12."], whyOthersWrong: ["Katsayı ve kök ayrı çarpılır."] }, 2),
    Q("matematik-mat-koklu-115", "√0,04 işleminin sonucu kaçtır?",
      ["0,2", "0,02", "0,4", "2", "0,04"], 0, "0,04 = 0,2² → √0,04 = 0,2.",
      { short: "√0,04 = 0,2.", steps: ["0,2² = 0,04.", "Kök 0,2."], whyOthersWrong: ["Ondalık karekök."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-koklu-116", "√20 + √45 işleminin sonucu nedir?",
      ["5√5", "√65", "7√5", "5√13", "9√5"], 0, "√20=2√5, √45=3√5 → 5√5.",
      { short: "2√5 + 3√5 = 5√5.", steps: ["√20=2√5, √45=3√5.", "Toplam 5√5."], whyOthersWrong: ["Önce ayrı sadeleştirilir."] }, 3),
    Q("matematik-mat-koklu-117", "(2 + √3)(2 − √3) işleminin sonucu kaçtır?",
      ["1", "4", "7", "2√3", "−1"], 0, "Eşlenik çarpımı: 2² − (√3)² = 4 − 3 = 1.",
      { short: "4 − 3 = 1.", steps: ["a²−b² kalıbı.", "4 − 3 = 1."], whyOthersWrong: ["Eşlenik çarpımı kök içini yok eder."] }, 3),
    Q("matematik-mat-koklu-118", "√72 − √8 işleminin sonucu nedir?",
      ["4√2", "8√2", "√64", "2√2", "6√2"], 0, "√72=6√2, √8=2√2 → 4√2.",
      { short: "6√2 − 2√2 = 4√2.", steps: ["√72=6√2, √8=2√2.", "Fark 4√2."], whyOthersWrong: ["Katsayılar çıkarılır."] }, 3),
    Q("matematik-mat-koklu-119", "1/√2 ifadesinin paydası rasyonel yapılırsa sonuç nedir?",
      ["√2/2", "2/√2", "√2", "1/2", "2√2"], 0, "Pay-payda √2 ile çarpılır: √2/2.",
      { short: "√2/2.", steps: ["√2 ile genişlet.", "√2/(√2·√2) = √2/2."], whyOthersWrong: ["Payda kökten kurtarılır."] }, 3),
    Q("matematik-mat-koklu-120", "(√5 + √2)² işleminin sonucu nedir?",
      ["7 + 2√10", "7", "7 + √10", "5 + 2√10", "10 + 2√7"], 0, "5 + 2√10 + 2 = 7 + 2√10.",
      { short: "7 + 2√10.", steps: ["(a+b)² = a²+2ab+b².", "5 + 2√10 + 2."], whyOthersWrong: ["Orta terim 2·√5·√2 = 2√10."] }, 3),
    Q("matematik-mat-koklu-121", "√200 + √50 işleminin sonucu nedir?",
      ["15√2", "10√2", "√250", "5√2", "20√2"], 0, "√200=10√2, √50=5√2 → 15√2.",
      { short: "10√2 + 5√2 = 15√2.", steps: ["√200=10√2, √50=5√2.", "Toplam 15√2."], whyOthersWrong: ["Kök içi 2'ye indirgenir."] }, 3),
    Q("matematik-mat-koklu-122", "√3 · √6 işleminin en sade sonucu nedir?",
      ["3√2", "√18", "6√3", "9", "2√3"], 0, "√3·√6 = √18 = 3√2.",
      { short: "√18 = 3√2.", steps: ["Kök içleri çarp: √18.", "18 = 9·2 → 3√2."], whyOthersWrong: ["Çarpımdan sonra sadeleştirilir."] }, 3),
    Q("matematik-mat-koklu-123", "2/(√3 − 1) ifadesi rasyonel paydalı yazılırsa sonuç nedir?",
      ["√3 + 1", "√3 − 1", "2√3 + 2", "√3 + 2", "1 − √3"], 0, "Eşlenik (√3+1) ile genişlet: 2(√3+1)/(3−1) = √3+1.",
      { short: "√3 + 1.", steps: ["(√3+1) ile çarp.", "Payda (√3)²−1 = 2 → sonuç √3+1."], whyOthersWrong: ["Eşlenikle payda rasyonelleşir."] }, 3),
    Q("matematik-mat-koklu-124", "√(5 + 2√6) ifadesi aşağıdakilerden hangisine eşittir?",
      ["√3 + √2", "√5 + √1", "√6 + 1", "2 + √3", "√5 + √2"], 0, "(√3+√2)² = 3 + 2√6 + 2 = 5 + 2√6.",
      { short: "√3 + √2.", steps: ["(√3+√2)² = 5 + 2√6.", "→ kök = √3+√2."], whyOthersWrong: ["İç kök tam kare açılımına getirilir."] }, 3),
    Q("matematik-mat-koklu-125", "√(9/16) işleminin sonucu kaçtır?",
      ["3/4", "9/16", "4/3", "3/16", "9/4"], 0, "√9/√16 = 3/4.",
      { short: "3/4.", steps: ["Pay ve paydanın kökü: √9=3, √16=4.", "= 3/4."], whyOthersWrong: ["Kesirde pay ve payda ayrı köklenir."] }, 3)
  ]);
})();
