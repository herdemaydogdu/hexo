/* ============================================================
   MATEMATİK — Polinomlar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; işlemler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-polinom: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-polinom", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-polinom", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-polinom-101", "P(x) = 2x + 3 ise P(1) kaçtır?",
      ["5", "3", "2", "6", "1"], 0, "P(1) = 2·1 + 3 = 5.",
      { short: "2+3 = 5.", steps: ["x = 1.", "2·1+3 = 5."], whyOthersWrong: ["Değeri yerine koy."] }, 1),
    Q("matematik-mat-polinom-102", "P(x) = x² − 1 ise P(0) kaçtır?",
      ["−1", "1", "0", "2", "−2"], 0, "0² − 1 = −1.",
      { short: "−1.", steps: ["x = 0.", "0 − 1 = −1."], whyOthersWrong: ["Sabit terim P(0)'dır."] }, 1),
    Q("matematik-mat-polinom-103", "P(x) = 3x² + 2x + 5 polinomunun derecesi kaçtır?",
      ["2", "3", "5", "1", "6"], 0, "En yüksek üs 2 → derece 2.",
      { short: "Derece 2.", steps: ["En büyük üs 2.", ""], whyOthersWrong: ["Derece = en yüksek kuvvet."] }, 1),
    Q("matematik-mat-polinom-104", "P(x) = 4x³ + x − 7 polinomunun sabit terimi kaçtır?",
      ["−7", "4", "1", "7", "0"], 0, "Sabit terim x içermeyen terimdir: −7.",
      { short: "= −7.", steps: ["x'siz terim.", "= −7."], whyOthersWrong: ["Sabit terim = P(0)."] }, 1),
    Q("matematik-mat-polinom-105", "P(x) = 2x + 1 ve Q(x) = x + 4 ise P(x) + Q(x) nedir?",
      ["3x + 5", "3x + 4", "2x + 5", "3x + 1", "x + 5"], 0, "(2x+x) + (1+4) = 3x + 5.",
      { short: "3x + 5.", steps: ["Benzer terimler toplanır.", "3x + 5."], whyOthersWrong: ["Katsayı ve sabitler ayrı toplanır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-polinom-106", "P(x) = x² + 3x − 2 ise P(2) kaçtır?",
      ["8", "6", "10", "4", "12"], 0, "4 + 6 − 2 = 8.",
      { short: "= 8.", steps: ["4 + 6 − 2.", "= 8."], whyOthersWrong: ["Sırayla hesapla."] }, 2),
    Q("matematik-mat-polinom-107", "P(x) = 2x² − x + 1 ise P(−1) kaçtır?",
      ["4", "2", "0", "3", "−2"], 0, "2·1 − (−1) + 1 = 2 + 1 + 1 = 4.",
      { short: "= 4.", steps: ["2 + 1 + 1.", "= 4."], whyOthersWrong: ["İşaretlere dikkat."] }, 2),
    Q("matematik-mat-polinom-108", "P(x) = x + 2 ise P(x)·P(x) = P²(x) ifadesinin x = 1 için değeri kaçtır?",
      ["9", "6", "3", "12", "4"], 0, "P(1) = 3; 3² = 9.",
      { short: "3² = 9.", steps: ["P(1) = 3.", "3·3 = 9."], whyOthersWrong: ["Önce değer, sonra kare."] }, 2),
    Q("matematik-mat-polinom-109", "P(x) = 3x² − 2x + 4 polinomunun katsayılar toplamı kaçtır?",
      ["5", "4", "9", "1", "7"], 0, "Katsayılar toplamı = P(1) = 3 − 2 + 4 = 5.",
      { short: "P(1) = 5.", steps: ["Katsayı toplamı = P(1).", "3−2+4 = 5."], whyOthersWrong: ["P(1) katsayı toplamını verir."] }, 2),
    Q("matematik-mat-polinom-110", "P(x) = x² − 5x + 6 polinomunun sıfırlarından (kökleri) biri kaçtır?",
      ["2", "5", "6", "1", "4"], 0, "x²−5x+6 = (x−2)(x−3) → kökler 2 ve 3.",
      { short: "Kök 2 (veya 3).", steps: ["(x−2)(x−3)=0.", "x = 2, 3."], whyOthersWrong: ["Çarpanlara ayır."] }, 2),
    Q("matematik-mat-polinom-111", "P(x) = 2x − 6 ise P(x) = 0 yapan x kaçtır?",
      ["3", "6", "2", "−3", "0"], 0, "2x − 6 = 0 → x = 3.",
      { short: "x = 3.", steps: ["2x = 6.", "x = 3."], whyOthersWrong: ["Sıfır yeri denklemle bulunur."] }, 2),
    Q("matematik-mat-polinom-112", "P(x) = x³ − 2x² + x ise P(x) polinomu x ile tam bölünür mü, P(0) kaçtır?",
      ["0", "1", "−2", "2", "3"], 0, "P(0) = 0 → sabit terim yok, x ortak çarpan.",
      { short: "P(0) = 0.", steps: ["x=0 yerine koy.", "= 0."], whyOthersWrong: ["Sabit terim 0'dır."] }, 2),
    Q("matematik-mat-polinom-113", "P(x) = x² + 1 ve Q(x) = x − 3 ise P(x) − Q(x) nedir?",
      ["x² − x + 4", "x² + x − 2", "x² − x − 2", "x² + x + 4", "x² − 4"], 0, "x²+1 − (x−3) = x² − x + 4.",
      { short: "x² − x + 4.", steps: ["Parantez dağıtılır: −x+3.", "x²+1−x+3 = x²−x+4."], whyOthersWrong: ["Çıkarmada işaret döner."] }, 2),
    Q("matematik-mat-polinom-114", "P(x) = ax + 5 ve P(2) = 11 ise a kaçtır?",
      ["3", "2", "4", "5", "6"], 0, "2a + 5 = 11 → 2a = 6 → a = 3.",
      { short: "2a = 6 → a = 3.", steps: ["P(2) = 2a+5 = 11.", "a = 3."], whyOthersWrong: ["a çözülür."] }, 2),
    Q("matematik-mat-polinom-115", "P(x) = (x + 1)(x − 2) polinomunun açılımındaki sabit terim kaçtır?",
      ["−2", "2", "−1", "1", "0"], 0, "x² − x − 2 → sabit terim −2 (= 1·(−2)).",
      { short: "= −2.", steps: ["(x+1)(x−2)=x²−x−2.", "Sabit −2."], whyOthersWrong: ["Sabit = çarpanların sabitleri çarpımı."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-polinom-116", "P(x) = x³ − 2x + a polinomunun bir kökü 1 ise a kaçtır?",
      ["1", "−1", "2", "−2", "0"], 0, "P(1) = 1 − 2 + a = 0 → a = 1.",
      { short: "a = 1.", steps: ["Kök → P(1)=0.", "1−2+a=0 → a=1."], whyOthersWrong: ["Kök polinomu sıfırlar."] }, 3),
    Q("matematik-mat-polinom-117", "P(x) polinomunun x − 2 ile bölümünden kalan, P(2)'ye eşittir. P(x) = x² + 3x − 1 ise kalan kaçtır?",
      ["9", "6", "3", "10", "4"], 0, "Kalan = P(2) = 4 + 6 − 1 = 9 (kalan teoremi).",
      { short: "P(2) = 9.", steps: ["Kalan teoremi: kalan = P(2).", "4+6−1 = 9."], whyOthersWrong: ["x−a ile bölümde kalan P(a)."] }, 3),
    Q("matematik-mat-polinom-118", "P(x) = 2x² − 3x + 1 ise P(x+1) polinomunun sabit terimi kaçtır?",
      ["0", "1", "2", "−1", "3"], 0, "P(x+1) sabit terimi = P(1) = 2 − 3 + 1 = 0.",
      { short: "P(1) = 0.", steps: ["Sabit terim = x=0 → P(0+1)=P(1).", "= 0."], whyOthersWrong: ["P(x+1)'de x=0 → P(1)."] }, 3),
    Q("matematik-mat-polinom-119", "P(x) = x² − 4x + k polinomunun köklerinden biri 3 ise diğer kök kaçtır?",
      ["1", "3", "4", "−1", "2"], 0, "Kökler toplamı 4 (−b/a); 3 + x = 4 → x = 1.",
      { short: "Diğer kök 1.", steps: ["Kökler toplamı = 4.", "3 + kök = 4 → 1."], whyOthersWrong: ["Vieta: toplam = −b/a."] }, 3),
    Q("matematik-mat-polinom-120", "P(x) polinomunun katsayılar toplamı 8, sabit terimi 3'tür. P(1) − P(0) kaçtır?",
      ["5", "11", "8", "3", "2"], 0, "P(1) = 8 (katsayı toplamı), P(0) = 3 (sabit); 8 − 3 = 5.",
      { short: "8 − 3 = 5.", steps: ["P(1)=katsayı toplamı=8.", "P(0)=sabit=3."], whyOthersWrong: ["P(1) ve P(0) tanımları kullanılır."] }, 3),
    Q("matematik-mat-polinom-121", "P(x) = x² + bx + 6 polinomunun kökleri 2 ve 3 ise b kaçtır?",
      ["−5", "5", "6", "−6", "1"], 0, "Kökler toplamı 2+3=5 = −b → b = −5.",
      { short: "b = −5.", steps: ["Kökler toplamı = −b.", "5 = −b → b = −5."], whyOthersWrong: ["Vieta: toplam = −b."] }, 3),
    Q("matematik-mat-polinom-122", "P(x) = x³ + x + 2 ise P(x)'in x + 1 ile bölümünden kalan kaçtır?",
      ["0", "2", "4", "−2", "1"], 0, "Kalan = P(−1) = −1 − 1 + 2 = 0.",
      { short: "P(−1) = 0.", steps: ["x+1 → x=−1.", "−1−1+2 = 0."], whyOthersWrong: ["Kalan teoremi P(−1)."] }, 3),
    Q("matematik-mat-polinom-123", "Derecesi 3 olan P(x) ile derecesi 2 olan Q(x) polinomlarının çarpımı P(x)·Q(x)'in derecesi kaçtır?",
      ["5", "6", "3", "2", "1"], 0, "Çarpımda dereceler toplanır: 3 + 2 = 5.",
      { short: "3 + 2 = 5.", steps: ["Çarpımda derece toplanır.", "= 5."], whyOthersWrong: ["Derece çarpılmaz, toplanır."] }, 3),
    Q("matematik-mat-polinom-124", "P(x) = 2x² + mx − 3 ve P(1) = 4 ise m kaçtır?",
      ["5", "3", "4", "−5", "2"], 0, "2 + m − 3 = 4 → m − 1 = 4 → m = 5.",
      { short: "m = 5.", steps: ["2+m−3 = 4.", "m = 5."], whyOthersWrong: ["P(1) yerine konup m çözülür."] }, 3),
    Q("matematik-mat-polinom-125", "P(x) = (2x − 1)³ polinomunun açılımındaki sabit terim kaçtır?",
      ["−1", "1", "−8", "8", "0"], 0, "Sabit terim = P(0) = (2·0 − 1)³ = (−1)³ = −1.",
      { short: "P(0) = −1.", steps: ["x=0 yerine koy.", "(−1)³ = −1."], whyOthersWrong: ["Sabit terim = P(0)."] }, 3)
  ]);
})();
