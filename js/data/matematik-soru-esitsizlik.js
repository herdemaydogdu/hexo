/* ============================================================
   MATEMATİK — Basit Eşitsizlikler: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-esitsizlik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-esitsizlik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-esitsizlik", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-esitsizlik-101", "x + 3 > 7 eşitsizliğinin çözümü nedir?",
      ["x > 4", "x < 4", "x > 10", "x < 10", "x > 3"], 0, "Her iki taraftan 3 çıkar: x > 4.",
      { short: "x > 4.", steps: ["3'ü çıkar.", "x > 4."], whyOthersWrong: ["Yön değişmez, 3 çıkarılır."] }, 1),
    Q("matematik-mat-esitsizlik-102", "2x < 10 eşitsizliğinin çözümü nedir?",
      ["x < 5", "x > 5", "x < 20", "x > 20", "x < 8"], 0, "Her iki taraf 2'ye bölünür (pozitif): x < 5.",
      { short: "x < 5.", steps: ["2'ye böl.", "x < 5."], whyOthersWrong: ["Pozitif bölmede yön korunur."] }, 1),
    Q("matematik-mat-esitsizlik-103", "x − 2 ≥ 0 eşitsizliğinin çözümü nedir?",
      ["x ≥ 2", "x ≤ 2", "x > 0", "x ≥ −2", "x ≤ −2"], 0, "2'yi ekle: x ≥ 2.",
      { short: "x ≥ 2.", steps: ["2 ekle.", "x ≥ 2."], whyOthersWrong: ["Sınır dahildir (≥)."] }, 1),
    Q("matematik-mat-esitsizlik-104", "−x < 3 eşitsizliğinin çözümü nedir?",
      ["x > −3", "x < −3", "x > 3", "x < 3", "x > −1/3"], 0, "−1 ile çarp (yön döner): x > −3.",
      { short: "x > −3.", steps: ["−1 ile çarp → yön döner.", "x > −3."], whyOthersWrong: ["Negatifle çarpımda yön değişir."] }, 1),
    Q("matematik-mat-esitsizlik-105", "3x ≥ 9 eşitsizliğinin çözümü nedir?",
      ["x ≥ 3", "x ≤ 3", "x ≥ 6", "x ≥ 27", "x ≤ 6"], 0, "3'e böl: x ≥ 3.",
      { short: "x ≥ 3.", steps: ["3'e böl.", "x ≥ 3."], whyOthersWrong: ["Pozitif bölmede yön korunur."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-esitsizlik-106", "2x + 1 > 7 eşitsizliğini sağlayan en küçük tam sayı kaçtır?",
      ["4", "3", "5", "6", "7"], 0, "2x > 6 → x > 3 → en küçük tam sayı 4.",
      { short: "x > 3 → 4.", steps: ["2x > 6 → x > 3.", "En küçük tam 4."], whyOthersWrong: ["x=3 eşitsizliği sağlamaz."] }, 2),
    Q("matematik-mat-esitsizlik-107", "5 − x ≤ 2 eşitsizliğini sağlayan en küçük tam sayı kaçtır?",
      ["3", "2", "7", "−3", "4"], 0, "−x ≤ −3 → x ≥ 3 → en küçük 3.",
      { short: "x ≥ 3 → 3.", steps: ["−x ≤ −3.", "x ≥ 3 → en küçük 3."], whyOthersWrong: ["Negatifle çarpımda yön döner."] }, 2),
    Q("matematik-mat-esitsizlik-108", "−2x > 6 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["−4", "−3", "3", "4", "−2"], 0, "x < −3 (yön döner) → en büyük tam sayı −4.",
      { short: "x < −3 → −4.", steps: ["−2'ye böl, yön döner: x < −3.", "En büyük tam −4."], whyOthersWrong: ["−3 dahil değil."] }, 2),
    Q("matematik-mat-esitsizlik-109", "3 < x + 1 < 8 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["4", "5", "3", "6", "2"], 0, "2 < x < 7 → x = 3,4,5,6 → 4 tane.",
      { short: "2 < x < 7 → 4 sayı.", steps: ["Her taraftan 1 çıkar.", "3,4,5,6."], whyOthersWrong: ["Uç değerler dahil değil."] }, 2),
    Q("matematik-mat-esitsizlik-110", "2x − 3 ≤ 5 eşitsizliğini sağlayan kaç pozitif tam sayı vardır?",
      ["4", "3", "5", "2", "6"], 0, "2x ≤ 8 → x ≤ 4 → pozitif tam: 1,2,3,4 → 4.",
      { short: "x ≤ 4 → 4 pozitif.", steps: ["2x ≤ 8 → x ≤ 4.", "1,2,3,4."], whyOthersWrong: ["0 pozitif değil."] }, 2),
    Q("matematik-mat-esitsizlik-111", "−1 ≤ 2x − 1 ≤ 5 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["4", "3", "5", "6", "2"], 0, "0 ≤ 2x ≤ 6 → 0 ≤ x ≤ 3 → x = 0,1,2,3 → 4.",
      { short: "0 ≤ x ≤ 3 → 4 sayı.", steps: ["Her tarafa 1 ekle: 0 ≤ 2x ≤ 6.", "0 ≤ x ≤ 3."], whyOthersWrong: ["Uçlar dahil (≤)."] }, 2),
    Q("matematik-mat-esitsizlik-112", "x/2 > 3 eşitsizliğini sağlayan en küçük tam sayı kaçtır?",
      ["7", "6", "5", "8", "4"], 0, "x > 6 → en küçük tam sayı 7.",
      { short: "x > 6 → 7.", steps: ["2 ile çarp: x > 6.", "En küçük tam 7."], whyOthersWrong: ["6 dahil değil."] }, 2),
    Q("matematik-mat-esitsizlik-113", "4 − 2x ≥ 0 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["2", "1", "3", "4", "0"], 0, "−2x ≥ −4 → x ≤ 2 → en büyük tam sayı 2.",
      { short: "x ≤ 2 → 2.", steps: ["−2x ≥ −4 → x ≤ 2.", "En büyük 2."], whyOthersWrong: ["Yön dönüşümüne dikkat."] }, 2),
    Q("matematik-mat-esitsizlik-114", "3(x − 1) < 9 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["3", "4", "2", "5", "1"], 0, "x − 1 < 3 → x < 4 → en büyük tam sayı 3.",
      { short: "x < 4 → 3.", steps: ["3'e böl: x−1 < 3.", "x < 4 → en büyük 3."], whyOthersWrong: ["4 dahil değil."] }, 2),
    Q("matematik-mat-esitsizlik-115", "−5 < 3 − x eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["7", "8", "6", "5", "9"], 0, "−x > −8 → x < 8 → en büyük tam sayı 7.",
      { short: "x < 8 → 7.", steps: ["3'ü çıkar: −8 < −x.", "x < 8 → en büyük 7."], whyOthersWrong: ["8 dahil değil."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-esitsizlik-116", "2 < x ≤ 6 aralığındaki tam sayıların toplamı kaçtır?",
      ["18", "20", "15", "14", "21"], 0, "x = 3,4,5,6 → 3+4+5+6 = 18.",
      { short: "3+4+5+6 = 18.", steps: ["2 hariç, 6 dahil.", "Toplam 18."], whyOthersWrong: ["2 aralığa dahil değil."] }, 3),
    Q("matematik-mat-esitsizlik-117", "5x − 2 < 3x + 8 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["4", "5", "3", "6", "2"], 0, "2x < 10 → x < 5 → en büyük tam sayı 4.",
      { short: "x < 5 → 4.", steps: ["5x−3x < 8+2.", "2x < 10 → x < 5."], whyOthersWrong: ["5 dahil değil."] }, 3),
    Q("matematik-mat-esitsizlik-118", "−3 ≤ (x − 1)/2 < 2 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["10", "9", "11", "8", "12"], 0, "−6 ≤ x−1 < 4 → −5 ≤ x < 5 → x = −5..4 → 10 sayı.",
      { short: "−5 ≤ x < 5 → 10.", steps: ["2 ile çarp: −6 ≤ x−1 < 4.", "−5 ≤ x < 5 → 10 tam sayı."], whyOthersWrong: ["Sol uç dahil, sağ uç değil."] }, 3),
    Q("matematik-mat-esitsizlik-119", "1 ≤ x ≤ 4 aralığındaki tam sayıların çarpımı kaçtır?",
      ["24", "10", "12", "6", "20"], 0, "1·2·3·4 = 24.",
      { short: "1·2·3·4 = 24.", steps: ["Aralık: 1,2,3,4.", "Çarpım 24."], whyOthersWrong: ["Tüm uçlar dahil."] }, 3),
    Q("matematik-mat-esitsizlik-120", "3x + 2 > x − 4 eşitsizliğini sağlayan en küçük tam sayı kaçtır?",
      ["−2", "−3", "−1", "0", "−4"], 0, "2x > −6 → x > −3 → en küçük tam sayı −2.",
      { short: "x > −3 → −2.", steps: ["3x−x > −4−2.", "2x > −6 → x > −3."], whyOthersWrong: ["−3 dahil değil."] }, 3),
    Q("matematik-mat-esitsizlik-121", "x² < 9 eşitsizliğini sağlayan kaç tam sayı vardır?",
      ["5", "3", "4", "6", "7"], 0, "−3 < x < 3 → x = −2,−1,0,1,2 → 5 tane.",
      { short: "−3 < x < 3 → 5.", steps: ["|x| < 3.", "−2,−1,0,1,2."], whyOthersWrong: ["±3 dahil değil (kare 9 = 9)."] }, 3),
    Q("matematik-mat-esitsizlik-122", "2x + 1 ≥ 5 ve x − 3 < 2 eşitsizliklerini birlikte sağlayan kaç tam sayı vardır?",
      ["3", "2", "4", "5", "1"], 0, "x ≥ 2 ve x < 5 → x = 2,3,4 → 3 tane.",
      { short: "2 ≤ x < 5 → 3.", steps: ["2x ≥ 4 → x ≥ 2.", "x < 5 → {2,3,4}."], whyOthersWrong: ["Kesişim aralığı alınır."] }, 3),
    Q("matematik-mat-esitsizlik-123", "(x + 2)/3 ≤ 4 eşitsizliğini sağlayan kaç pozitif tam sayı vardır?",
      ["10", "12", "8", "9", "11"], 0, "x + 2 ≤ 12 → x ≤ 10 → pozitif tam: 1..10 → 10.",
      { short: "x ≤ 10 → 10 pozitif.", steps: ["3 ile çarp: x+2 ≤ 12.", "x ≤ 10 → 1..10."], whyOthersWrong: ["0 pozitif değil."] }, 3),
    Q("matematik-mat-esitsizlik-124", "−2x + 5 > 1 ve x ≥ −1 koşullarını sağlayan tam sayıların toplamı kaçtır?",
      ["0", "1", "−1", "2", "3"], 0, "x < 2 ve x ≥ −1 → x = −1,0,1 → toplam 0.",
      { short: "{−1,0,1} → 0.", steps: ["−2x > −4 → x < 2.", "−1 ≤ x < 2 → toplam 0."], whyOthersWrong: ["−1+0+1 = 0."] }, 3),
    Q("matematik-mat-esitsizlik-125", "4 ≤ 2x < 10 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      ["4", "5", "3", "6", "2"], 0, "2 ≤ x < 5 → tam sayılar 2,3,4 → en büyük 4.",
      { short: "2 ≤ x < 5 → 4.", steps: ["2'ye böl: 2 ≤ x < 5.", "En büyük tam 4."], whyOthersWrong: ["5 dahil değil."] }, 3)
  ]);
})();
