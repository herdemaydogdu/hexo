/* ============================================================
   MATEMATİK — Temel Kavramlar ve Sayı Kümeleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-temel: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-temel", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-temel", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-temel-101", "En küçük asal sayı aşağıdakilerden hangisidir?",
      ["2", "1", "0", "3", "5"], 0, "Asal sayılar 1'den büyük ve yalnız 1 ile kendine bölünür; en küçüğü 2'dir.",
      { short: "En küçük asal 2.", steps: ["1 asal değildir.", "2 en küçük asaldır."], whyOthersWrong: ["0,1 asal değil."] }, 1),
    Q("matematik-mat-temel-102", "0 (sıfır) sayısı için aşağıdakilerden hangisi doğrudur?",
      ["Çift sayıdır", "Tek sayıdır", "Asaldır", "Pozitiftir", "Doğal sayı değildir"], 0, "0, 2'ye tam bölündüğü için çift sayıdır.",
      { short: "0 çifttir.", steps: ["0 ÷ 2 = 0, kalan 0.", "→ çift."], whyOthersWrong: ["Pozitif/negatif ve asal değildir."] }, 1),
    Q("matematik-mat-temel-103", "En küçük iki basamaklı doğal sayı kaçtır?",
      ["10", "11", "99", "1", "12"], 0, "İki basamaklı en küçük sayı 10'dur.",
      { short: "= 10.", steps: ["İki basamaklı → 10'dan başlar.", "= 10."], whyOthersWrong: ["1 tek basamaklıdır."] }, 1),
    Q("matematik-mat-temel-104", "5, 6, 7 ardışık sayılarının ortancası kaçtır?",
      ["6", "5", "7", "18", "6,5"], 0, "Ortadaki sayı 6'dır.",
      { short: "= 6.", steps: ["Ortanca ortadaki terim.", "= 6."], whyOthersWrong: ["Ortadaki 6."] }, 1),
    Q("matematik-mat-temel-105", "Bir düzine kaç adettir?",
      ["12", "10", "6", "24", "100"], 0, "1 düzine = 12 adet.",
      { short: "= 12.", steps: ["Düzine 12'dir.", ""], whyOthersWrong: ["Düzine 12'ye karşılık gelir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-temel-106", "Ardışık üç tek sayının toplamı 27 ise en büyüğü kaçtır?",
      ["11", "9", "13", "7", "15"], 0, "Ortanca 27/3 = 9; sayılar 7, 9, 11; en büyük 11.",
      { short: "7,9,11 → 11.", steps: ["Ortanca = 9.", "Ardışık tekler: 7,9,11."], whyOthersWrong: ["En büyük 11."] }, 2),
    Q("matematik-mat-temel-107", "1 ile 10 arasında (10 dahil) kaç asal sayı vardır?",
      ["4", "5", "3", "6", "2"], 0, "2, 3, 5, 7 → 4 tane.",
      { short: "2,3,5,7 → 4.", steps: ["10'a kadar asalları say.", "4 tane."], whyOthersWrong: ["1 asal değildir."] }, 2),
    Q("matematik-mat-temel-108", "5! / 3! işleminin sonucu kaçtır?",
      ["20", "2", "40", "6", "120"], 0, "5!/3! = 5·4·3!/3! = 5·4 = 20.",
      { short: "5·4 = 20.", steps: ["3! sadeleşir.", "5·4 = 20."], whyOthersWrong: ["120/6 = 20."] }, 2),
    Q("matematik-mat-temel-109", "İki basamaklı en büyük asal sayı kaçtır?",
      ["97", "91", "99", "93", "89"], 0, "97 asaldır; 99=9·11, 93=3·31, 91=7·13.",
      { short: "= 97.", steps: ["99,93,91 bölünebilir.", "97 asal."], whyOthersWrong: ["91=7·13, 93=3·31."] }, 2),
    Q("matematik-mat-temel-110", "a tek, b çift bir tam sayı olmak üzere a · b çarpımı nasıldır?",
      ["Daima çift", "Daima tek", "Asal", "Sıfır", "Belirsiz"], 0, "Çarpanlardan biri çiftse (b) çarpım çifttir.",
      { short: "a·b çifttir.", steps: ["tek·çift = çift.", ""], whyOthersWrong: ["Bir çift çarpan sonucu çift yapar."] }, 2),
    Q("matematik-mat-temel-111", "30 sayısının asal çarpanlarının toplamı kaçtır?",
      ["10", "30", "8", "15", "6"], 0, "30 = 2·3·5 → 2+3+5 = 10.",
      { short: "2+3+5 = 10.", steps: ["30 = 2·3·5.", "Toplam 10."], whyOthersWrong: ["Yalnız asal çarpanlar toplanır."] }, 2),
    Q("matematik-mat-temel-112", "24 sayısının kaç pozitif tam böleni vardır?",
      ["8", "6", "4", "12", "10"], 0, "24 = 2³·3 → (3+1)(1+1) = 8.",
      { short: "(3+1)(1+1) = 8.", steps: ["24 = 2³·3.", "Üslere 1 ekle, çarp."], whyOthersWrong: ["Bölen sayısı formülü."] }, 2),
    Q("matematik-mat-temel-113", "Ardışık iki pozitif tam sayının çarpımı 56 ise toplamları kaçtır?",
      ["15", "13", "16", "11", "17"], 0, "7·8 = 56 → 7+8 = 15.",
      { short: "7+8 = 15.", steps: ["n(n+1)=56 → n=7.", "Toplam 15."], whyOthersWrong: ["7 ve 8."] }, 2),
    Q("matematik-mat-temel-114", "1 sayısı için aşağıdakilerden hangisi doğrudur?",
      ["Asal değildir", "Asaldır", "Çift sayıdır", "Negatiftir", "Doğal sayı değildir"], 0, "1'in tek pozitif böleni kendisidir; asal tanımını sağlamaz.",
      { short: "1 asal değildir.", steps: ["Asal = tam iki böleni olan.", "1'in bir böleni var."], whyOthersWrong: ["1 tek ve doğal sayıdır ama asal değildir."] }, 2),
    Q("matematik-mat-temel-115", "En küçük çift doğal sayı kaçtır?",
      ["0", "2", "1", "−2", "4"], 0, "0 çifttir ve doğal sayıların en küçüğüdür.",
      { short: "= 0.", steps: ["0 çift ve en küçük doğal.", ""], whyOthersWrong: ["−2 doğal değil; 2,4 daha büyük."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-temel-116", "Aşağıdaki sayı çiftlerinden hangisi aralarında asaldır?",
      ["(9, 16)", "(8, 12)", "(6, 15)", "(10, 25)", "(14, 21)"], 0, "9 = 3², 16 = 2⁴ → ortak asal çarpan yok.",
      { short: "(9,16) aralarında asal.", steps: ["9 ve 16 ortak bölensiz.", ""], whyOthersWrong: ["(8,12)=4, (6,15)=3, (10,25)=5, (14,21)=7 ortak."] }, 3),
    Q("matematik-mat-temel-117", "1'den 20'ye kadar (20 dahil) kaç asal sayı vardır?",
      ["8", "7", "9", "6", "10"], 0, "2,3,5,7,11,13,17,19 → 8 tane.",
      { short: "= 8.", steps: ["20'ye kadar asalları say.", "8 tane."], whyOthersWrong: ["1 asal değil."] }, 3),
    Q("matematik-mat-temel-118", "n! = 720 olduğuna göre n kaçtır?",
      ["6", "5", "7", "8", "4"], 0, "6! = 720.",
      { short: "6! = 720 → n = 6.", steps: ["5!=120, 6!=720.", "n = 6."], whyOthersWrong: ["7! = 5040."] }, 3),
    Q("matematik-mat-temel-119", "a = 2³ · 3 · 5 sayısının pozitif tam bölen sayısı kaçtır?",
      ["16", "8", "12", "18", "24"], 0, "(3+1)(1+1)(1+1) = 4·2·2 = 16.",
      { short: "(3+1)(1+1)(1+1) = 16.", steps: ["Üsler: 3,1,1.", "Çarpım 16."], whyOthersWrong: ["Üsleri çarpmak/toplamak yanlış."] }, 3),
    Q("matematik-mat-temel-120", "x² = x eşitliğini sağlayan, 0'dan farklı tam sayı kaçtır?",
      ["1", "−1", "2", "−2", "Hiçbiri"], 0, "x(x−1) = 0 → x = 0 veya 1; 0 dışında 1.",
      { short: "x = 1.", steps: ["x²−x = 0 → x(x−1)=0.", "0 dışında 1."], whyOthersWrong: ["−1,2,−2 sağlamaz."] }, 3),
    Q("matematik-mat-temel-121", "1'den 30'a kadar (30 dahil) kaç sayı hem 2 hem 3 ile bölünür?",
      ["5", "6", "10", "3", "4"], 0, "Hem 2 hem 3 → 6'nın katları: 6,12,18,24,30 → 5.",
      { short: "6'nın katları → 5.", steps: ["6,12,18,24,30.", "5 tane."], whyOthersWrong: ["6'nın katları sayılır."] }, 3),
    Q("matematik-mat-temel-122", "Ardışık beş doğal sayının toplamı 100 ise ortanca sayı kaçtır?",
      ["20", "18", "22", "19", "21"], 0, "Toplam = 5 × ortanca → ortanca = 20.",
      { short: "100/5 = 20.", steps: ["Ortanca = toplam/5.", "= 20."], whyOthersWrong: ["Ardışık 5 sayıda toplam 5·ortanca."] }, 3),
    Q("matematik-mat-temel-123", "Rakamları toplamı 12 olan iki basamaklı bir sayının onlar basamağı, birler basamağının 2 katıdır. Bu sayı kaçtır?",
      ["84", "48", "66", "93", "39"], 0, "a+b=12, a=2b → 3b=12 → b=4, a=8 → 84.",
      { short: "a=8, b=4 → 84.", steps: ["a=2b, a+b=12.", "3b=12 → b=4."], whyOthersWrong: ["48 koşulu ters sağlar."] }, 3),
    Q("matematik-mat-temel-124", "Ardışık beş tam sayının toplamı her zaman aşağıdakilerden hangisine tam bölünür?",
      ["5", "2", "3", "4", "7"], 0, "Toplam = 5 × ortanca olduğundan daima 5'in katıdır.",
      { short: "Daima 5'e bölünür.", steps: ["(n-2)+...+(n+2) = 5n.", "→ 5'in katı."], whyOthersWrong: ["2,3,4,7'ye her zaman bölünmez."] }, 3),
    Q("matematik-mat-temel-125", "x bir tek sayı ise x² + x ifadesi nasıldır?",
      ["Daima çift", "Daima tek", "Asal", "Sıfır", "Negatif"], 0, "x² + x = x(x+1) ardışık iki sayının çarpımı → daima çift.",
      { short: "x(x+1) → çift.", steps: ["x²+x = x(x+1).", "Ardışık çarpım çifttir."], whyOthersWrong: ["Tek/asal garanti değil."] }, 3)
  ]);
})();
