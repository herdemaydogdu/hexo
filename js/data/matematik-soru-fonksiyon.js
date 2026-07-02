/* ============================================================
   MATEMATİK — Fonksiyonlar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-fonksiyon: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-fonksiyon", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-fonksiyon", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-fonksiyon-101", "f(x) = 2x + 1 ise f(3) kaçtır?",
      ["7", "6", "5", "8", "9"], 0, "f(3) = 2·3 + 1 = 7.",
      { short: "2·3+1 = 7.", steps: ["x yerine 3.", "6 + 1 = 7."], whyOthersWrong: ["Değeri yerine koy."] }, 1),
    Q("matematik-mat-fonksiyon-102", "f(x) = x² ise f(−2) kaçtır?",
      ["4", "−4", "2", "−2", "8"], 0, "(−2)² = 4.",
      { short: "(−2)² = 4.", steps: ["Kare pozitif.", "= 4."], whyOthersWrong: ["Negatifin karesi pozitif."] }, 1),
    Q("matematik-mat-fonksiyon-103", "f(x) = 5 (sabit fonksiyon) ise f(100) kaçtır?",
      ["5", "100", "500", "0", "105"], 0, "Sabit fonksiyon her x için 5 verir.",
      { short: "= 5.", steps: ["Sabit fonksiyon değişmez.", "= 5."], whyOthersWrong: ["x'ten bağımsızdır."] }, 1),
    Q("matematik-mat-fonksiyon-104", "f(x) = x − 4 ise f(4) kaçtır?",
      ["0", "8", "4", "−4", "1"], 0, "4 − 4 = 0.",
      { short: "= 0.", steps: ["x = 4.", "4 − 4 = 0."], whyOthersWrong: ["Fark sıfır."] }, 1),
    Q("matematik-mat-fonksiyon-105", "f(x) = 3x ise f(0) kaçtır?",
      ["0", "3", "1", "30", "9"], 0, "3·0 = 0.",
      { short: "= 0.", steps: ["x = 0.", "3·0 = 0."], whyOthersWrong: ["Sıfırın katı sıfır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-fonksiyon-106", "f(x) = 2x − 3 ve f(x) = 5 ise x kaçtır?",
      ["4", "2", "1", "5", "8"], 0, "2x − 3 = 5 → 2x = 8 → x = 4.",
      { short: "2x = 8 → x = 4.", steps: ["2x − 3 = 5.", "x = 4."], whyOthersWrong: ["Denklem çözülür."] }, 2),
    Q("matematik-mat-fonksiyon-107", "f(x) = x² + 1 ise f(2) + f(−2) kaçtır?",
      ["10", "5", "8", "4", "2"], 0, "f(2) = 5, f(−2) = 5 → 10.",
      { short: "5 + 5 = 10.", steps: ["f(2)=5, f(−2)=5.", "Toplam 10."], whyOthersWrong: ["Her ikisi de 5."] }, 2),
    Q("matematik-mat-fonksiyon-108", "f(x) = 3x + 2 ve g(x) = x − 1 ise (f∘g)(4) kaçtır?",
      ["11", "14", "8", "13", "10"], 0, "g(4) = 3; f(3) = 3·3 + 2 = 11.",
      { short: "f(g(4)) = f(3) = 11.", steps: ["g(4) = 3.", "f(3) = 11."], whyOthersWrong: ["Önce içteki g."] }, 2),
    Q("matematik-mat-fonksiyon-109", "f(x) = 2x ve g(x) = x + 3 ise (g∘f)(2) kaçtır?",
      ["7", "10", "8", "5", "12"], 0, "f(2) = 4; g(4) = 4 + 3 = 7.",
      { short: "g(f(2)) = g(4) = 7.", steps: ["f(2) = 4.", "g(4) = 7."], whyOthersWrong: ["Önce içteki f."] }, 2),
    Q("matematik-mat-fonksiyon-110", "f(x) = ax + 1 ve f(2) = 7 ise a kaçtır?",
      ["3", "2", "4", "6", "5"], 0, "2a + 1 = 7 → 2a = 6 → a = 3.",
      { short: "2a = 6 → a = 3.", steps: ["f(2) = 2a+1 = 7.", "a = 3."], whyOthersWrong: ["a bilinmeyen olarak çözülür."] }, 2),
    Q("matematik-mat-fonksiyon-111", "Doğrusal f fonksiyonunda f(1) = 3 ve f(2) = 5 ise f(0) kaçtır?",
      ["1", "0", "2", "3", "−1"], 0, "Eğim (5−3)/(2−1)=2; f(x)=2x+1; f(0)=1.",
      { short: "f(0) = 1.", steps: ["Eğim 2 → f(x)=2x+b; f(1)=3 → b=1.", "f(0)=1."], whyOthersWrong: ["y-kesişimi 1."] }, 2),
    Q("matematik-mat-fonksiyon-112", "f(x) = (x + 1)/2 ve f(x) = 3 ise x kaçtır?",
      ["5", "6", "4", "7", "3"], 0, "(x+1)/2 = 3 → x + 1 = 6 → x = 5.",
      { short: "x + 1 = 6 → x = 5.", steps: ["2 ile çarp.", "x = 5."], whyOthersWrong: ["Payda önce çarpılır."] }, 2),
    Q("matematik-mat-fonksiyon-113", "Tanım kümesi {1, 2, 3} olan f(x) = 2x fonksiyonunun görüntü kümesindeki elemanların toplamı kaçtır?",
      ["12", "6", "10", "8", "14"], 0, "Görüntü {2,4,6}; toplam 12.",
      { short: "2+4+6 = 12.", steps: ["f(1)=2, f(2)=4, f(3)=6.", "Toplam 12."], whyOthersWrong: ["Her elemanın görüntüsü alınır."] }, 2),
    Q("matematik-mat-fonksiyon-114", "f(x) = x² − 4 fonksiyonunun pozitif sıfırı (f(x)=0) kaçtır?",
      ["2", "4", "−2", "0", "16"], 0, "x² − 4 = 0 → x = ±2; pozitif olan 2.",
      { short: "x = ±2 → 2.", steps: ["x² = 4.", "Pozitif kök 2."], whyOthersWrong: ["İki sıfırdan pozitif olan."] }, 2),
    Q("matematik-mat-fonksiyon-115", "f(x) = |x − 1| ise f(−2) kaçtır?",
      ["3", "1", "−3", "2", "0"], 0, "|−2 − 1| = |−3| = 3.",
      { short: "|−3| = 3.", steps: ["İçi: −3.", "Mutlak değer 3."], whyOthersWrong: ["Önce parantez içi."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-fonksiyon-116", "f(x) = 3x − 5 fonksiyonunun tersi f⁻¹ olduğuna göre f⁻¹(4) kaçtır?",
      ["3", "7", "1", "9", "12"], 0, "y = 3x−5 → x = (y+5)/3; f⁻¹(4) = 9/3 = 3.",
      { short: "(4+5)/3 = 3.", steps: ["Ters: (x+5)/3.", "f⁻¹(4) = 3."], whyOthersWrong: ["f(3) = 4 kontrolü tutar."] }, 3),
    Q("matematik-mat-fonksiyon-117", "f(x + 1) = 2x + 3 olduğuna göre f(3) kaçtır?",
      ["7", "9", "5", "6", "8"], 0, "x + 1 = 3 → x = 2; f(3) = 2·2 + 3 = 7.",
      { short: "x = 2 → f(3) = 7.", steps: ["x+1 = 3 → x = 2.", "2·2+3 = 7."], whyOthersWrong: ["Uygun x bulunur."] }, 3),
    Q("matematik-mat-fonksiyon-118", "f(x) = 2x + 1 ve g(x) = x² ise (f∘g)(3) kaçtır?",
      ["19", "49", "13", "37", "10"], 0, "g(3) = 9; f(9) = 2·9 + 1 = 19.",
      { short: "f(g(3)) = f(9) = 19.", steps: ["g(3) = 9.", "f(9) = 19."], whyOthersWrong: ["Önce kare alınır."] }, 3),
    Q("matematik-mat-fonksiyon-119", "f(2x − 1) = 4x olduğuna göre f(3) kaçtır?",
      ["8", "6", "12", "7", "10"], 0, "2x − 1 = 3 → x = 2; f(3) = 4·2 = 8.",
      { short: "x = 2 → f(3) = 8.", steps: ["2x−1 = 3 → x = 2.", "4·2 = 8."], whyOthersWrong: ["İç ifade 3'e eşitlenir."] }, 3),
    Q("matematik-mat-fonksiyon-120", "f(x) = x² − 2x ve f(x) = 3 ise x değerlerinin toplamı kaçtır?",
      ["2", "3", "−1", "6", "1"], 0, "x²−2x−3 = 0 → (x−3)(x+1) → x = 3, −1; toplam 2.",
      { short: "3 + (−1) = 2.", steps: ["x²−2x−3=0.", "Kökler 3 ve −1."], whyOthersWrong: ["Kökler toplamı 2."] }, 3),
    Q("matematik-mat-fonksiyon-121", "f(x) = (2x + 1)/(x − 1) fonksiyonu hangi x değerinde tanımsızdır?",
      ["1", "−1", "0", "2", "1/2"], 0, "Payda 0 olamaz: x − 1 = 0 → x = 1.",
      { short: "x = 1.", steps: ["Payda ≠ 0.", "x − 1 = 0 → x = 1."], whyOthersWrong: ["Payda sıfır yapan değer."] }, 3),
    Q("matematik-mat-fonksiyon-122", "Doğrusal f fonksiyonunda f(0) = 2 ve f(3) = 8 ise f(5) kaçtır?",
      ["12", "10", "14", "11", "13"], 0, "Eğim (8−2)/3 = 2; f(x)=2x+2; f(5)=12.",
      { short: "f(5) = 12.", steps: ["Eğim 2, b = 2 → f(x)=2x+2.", "f(5)=12."], whyOthersWrong: ["Doğru denklemi kurulur."] }, 3),
    Q("matematik-mat-fonksiyon-123", "f(x) = x + 2 ise (f∘f)(3) kaçtır?",
      ["7", "5", "8", "6", "9"], 0, "f(3) = 5; f(5) = 7.",
      { short: "f(f(3)) = f(5) = 7.", steps: ["f(3) = 5.", "f(5) = 7."], whyOthersWrong: ["Fonksiyon kendine uygulanır."] }, 3),
    Q("matematik-mat-fonksiyon-124", "f(x) = ax + b, f(1) = 5 ve f(3) = 11 ise a + b kaçtır?",
      ["5", "6", "3", "8", "2"], 0, "a = (11−5)/2 = 3; 3+b = 5 → b = 2; a+b = 5.",
      { short: "a=3, b=2 → 5.", steps: ["Eğim a = 3.", "f(1)=3+b=5 → b=2."], whyOthersWrong: ["a+b = 5."] }, 3),
    Q("matematik-mat-fonksiyon-125", "f(x) = x² ve g(x) = x − 1 ise (f∘g)(2) ile (g∘f)(2) sonuçlarının farkının mutlak değeri kaçtır?",
      ["2", "0", "4", "1", "3"], 0, "(f∘g)(2)=f(1)=1; (g∘f)(2)=g(4)=3; |1−3| = 2.",
      { short: "|1 − 3| = 2.", steps: ["f(g(2))=f(1)=1.", "g(f(2))=g(4)=3 → fark 2."], whyOthersWrong: ["Bileşke sırası sonucu değiştirir."] }, 3)
  ]);
})();
