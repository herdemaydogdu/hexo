/* ============================================================
   MATEMATİK — Sayı Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-sayi: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-sayi", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-sayi", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-sayi-101", "Bir sayının 5 fazlası 12 ise bu sayı kaçtır?",
      ["7", "17", "12", "5", "8"], 0, "x + 5 = 12 → x = 7.",
      { short: "x + 5 = 12 → x = 7.", steps: ["x = 12 − 5.", "x = 7."], whyOthersWrong: ["'Fazlası' toplamadır."] }, 1),
    Q("matematik-mat-sayi-102", "İki sayının toplamı 20'dir. Biri 8 ise diğeri kaçtır?",
      ["12", "28", "10", "8", "20"], 0, "20 − 8 = 12.",
      { short: "20 − 8 = 12.", steps: ["Diğeri = toplam − bilinen.", "= 12."], whyOthersWrong: ["Toplamadan çıkarma yapılır."] }, 1),
    Q("matematik-mat-sayi-103", "Bir sayının yarısı 9 ise bu sayı kaçtır?",
      ["18", "4,5", "9", "36", "12"], 0, "x/2 = 9 → x = 18.",
      { short: "x = 18.", steps: ["x/2 = 9.", "x = 18."], whyOthersWrong: ["Yarısı 9 ise tamı 18."] }, 1),
    Q("matematik-mat-sayi-104", "Ardışık iki doğal sayıdan küçüğü 7 ise büyüğü kaçtır?",
      ["8", "6", "9", "14", "7"], 0, "Ardışıkta büyük = küçük + 1 = 8.",
      { short: "7 + 1 = 8.", steps: ["Ardışık → +1.", "= 8."], whyOthersWrong: ["Ardışık fark 1'dir."] }, 1),
    Q("matematik-mat-sayi-105", "Bir sayının 3 katı 21 ise bu sayı kaçtır?",
      ["7", "18", "24", "63", "3"], 0, "3x = 21 → x = 7.",
      { short: "3x = 21 → x = 7.", steps: ["x = 21/3.", "x = 7."], whyOthersWrong: ["'Katı' çarpmadır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-sayi-106", "İki sayının toplamı 30, farkı 6'dır. Büyük sayı kaçtır?",
      ["18", "12", "24", "15", "6"], 0, "Büyük = (toplam + fark)/2 = (30+6)/2 = 18.",
      { short: "(30+6)/2 = 18.", steps: ["Büyük = (T+F)/2.", "= 18."], whyOthersWrong: ["Küçük 12 olur."] }, 2),
    Q("matematik-mat-sayi-107", "Ardışık üç tam sayının toplamı 48 ise ortanca sayı kaçtır?",
      ["16", "15", "17", "12", "48"], 0, "Ortanca = toplam/3 = 16.",
      { short: "48/3 = 16.", steps: ["Ardışık 3 sayıda toplam = 3·ortanca.", "= 16."], whyOthersWrong: ["Sayılar 15, 16, 17."] }, 2),
    Q("matematik-mat-sayi-108", "Bir sayının 2 katının 5 fazlası 25 ise bu sayı kaçtır?",
      ["10", "15", "20", "12,5", "5"], 0, "2x + 5 = 25 → 2x = 20 → x = 10.",
      { short: "2x = 20 → x = 10.", steps: ["2x + 5 = 25.", "x = 10."], whyOthersWrong: ["Önce 5 çıkarılır."] }, 2),
    Q("matematik-mat-sayi-109", "İki sayıdan biri diğerinin 3 katıdır. Toplamları 32 ise küçük sayı kaçtır?",
      ["8", "24", "6", "12", "16"], 0, "x + 3x = 32 → 4x = 32 → x = 8.",
      { short: "4x = 32 → x = 8.", steps: ["Küçük x, büyük 3x.", "4x = 32 → x = 8."], whyOthersWrong: ["Büyük 24 olur."] }, 2),
    Q("matematik-mat-sayi-110", "Ardışık iki tek sayının toplamı 24 ise büyük olanı kaçtır?",
      ["13", "11", "15", "9", "12"], 0, "Sayılar 11 ve 13; büyük 13.",
      { short: "11 + 13 = 24 → büyük 13.", steps: ["Ardışık tekler 2 fark.", "11, 13."], whyOthersWrong: ["12 tek sayı değildir."] }, 2),
    Q("matematik-mat-sayi-111", "Bir sayının 1/3'ü ile 1/4'ünün toplamı 14 ise bu sayı kaçtır?",
      ["24", "12", "7", "36", "48"], 0, "x/3 + x/4 = 7x/12 = 14 → x = 24.",
      { short: "7x/12 = 14 → x = 24.", steps: ["Ortak payda 12: 7x/12.", "x = 14·12/7 = 24."], whyOthersWrong: ["Kesirler ortak paydada toplanır."] }, 2),
    Q("matematik-mat-sayi-112", "İki sayının toplamı 50'dir. Biri diğerinden 10 fazla ise küçük sayı kaçtır?",
      ["20", "30", "25", "10", "40"], 0, "Küçük = (50−10)/2 = 20.",
      { short: "(50−10)/2 = 20.", steps: ["Küçük x, büyük x+10.", "2x+10 = 50 → x = 20."], whyOthersWrong: ["Büyük 30 olur."] }, 2),
    Q("matematik-mat-sayi-113", "Rakamları toplamı 9 olan iki basamaklı bir sayının onlar basamağı, birler basamağının 2 katıdır. Bu sayı kaçtır?",
      ["63", "36", "72", "54", "45"], 0, "a+b=9, a=2b → 3b=9 → b=3, a=6 → 63.",
      { short: "a=6, b=3 → 63.", steps: ["a = 2b, a+b = 9.", "3b = 9 → b = 3, a = 6."], whyOthersWrong: ["36 koşulu ters sağlar."] }, 2),
    Q("matematik-mat-sayi-114", "Bir sayının 4 katından 3 çıkarıldığında, aynı sayının 2 katının 9 fazlasına eşit oluyor. Bu sayı kaçtır?",
      ["6", "3", "9", "12", "4"], 0, "4x − 3 = 2x + 9 → 2x = 12 → x = 6.",
      { short: "2x = 12 → x = 6.", steps: ["4x−3 = 2x+9.", "x = 6."], whyOthersWrong: ["Değişkenler bir tarafa toplanır."] }, 2),
    Q("matematik-mat-sayi-115", "Ardışık üç çift sayının toplamı 36 ise en küçüğü kaçtır?",
      ["10", "12", "14", "8", "16"], 0, "Ortanca 12 → sayılar 10, 12, 14; en küçük 10.",
      { short: "Ortanca 12 → en küçük 10.", steps: ["Toplam/3 = 12 (ortanca).", "10, 12, 14."], whyOthersWrong: ["En küçük 10'dur."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-sayi-116", "İki basamaklı bir sayının rakamları yer değiştirildiğinde sayı 18 artıyor. Sayının birler ile onlar basamağı arasındaki fark kaçtır?",
      ["2", "4", "18", "9", "6"], 0, "(10b+a) − (10a+b) = 9(b−a) = 18 → b − a = 2.",
      { short: "9(b−a) = 18 → 2.", steps: ["Yeni − eski = 9(b−a).", "b − a = 2."], whyOthersWrong: ["Fark 9'a bölünür."] }, 3),
    Q("matematik-mat-sayi-117", "Ardışık dört tam sayının toplamı 54 ise en büyüğü kaçtır?",
      ["15", "12", "13", "14", "18"], 0, "4n+6 = 54 → n = 12 → sayılar 12,13,14,15; en büyük 15.",
      { short: "n = 12 → en büyük 15.", steps: ["n+(n+1)+(n+2)+(n+3) = 4n+6 = 54.", "n = 12."], whyOthersWrong: ["En büyük n+3 = 15."] }, 3),
    Q("matematik-mat-sayi-118", "Bir sayının 3 katının 4 fazlası, aynı sayının 5 katının 8 eksiğine eşittir. Bu sayı kaçtır?",
      ["6", "12", "9", "3", "8"], 0, "3x + 4 = 5x − 8 → 12 = 2x → x = 6.",
      { short: "2x = 12 → x = 6.", steps: ["3x+4 = 5x−8.", "x = 6."], whyOthersWrong: ["İşaretlere dikkat."] }, 3),
    Q("matematik-mat-sayi-119", "İki sayının toplamı 84 ve oranları 3/4'tür. Büyük sayı kaçtır?",
      ["48", "36", "12", "56", "24"], 0, "Sayılar 3k, 4k; 7k = 84 → k = 12 → büyük 4k = 48.",
      { short: "7k = 84 → büyük 48.", steps: ["3k + 4k = 84.", "k = 12, büyük = 48."], whyOthersWrong: ["Küçük 36 olur."] }, 3),
    Q("matematik-mat-sayi-120", "Rakamları toplamı 12 olan iki basamaklı bir sayı, rakamları yer değiştirilince 36 azalıyor. Bu sayı kaçtır?",
      ["84", "48", "62", "73", "96"], 0, "9(a−b) = 36 → a−b = 4; a+b = 12 → a = 8, b = 4 → 84.",
      { short: "a=8, b=4 → 84.", steps: ["Azalma 36 → a−b = 4.", "a+b = 12 → 84."], whyOthersWrong: ["48 azalmaz, artar."] }, 3),
    Q("matematik-mat-sayi-121", "Bir kesrin payı ile paydasının toplamı 20'dir. Kesir 2/3'e eşitse payı kaçtır?",
      ["8", "12", "4", "6", "10"], 0, "Pay 2k, payda 3k; 5k = 20 → k = 4 → pay 8.",
      { short: "5k = 20 → pay 8.", steps: ["2k + 3k = 20.", "k = 4 → pay = 8."], whyOthersWrong: ["Payda 12 olur."] }, 3),
    Q("matematik-mat-sayi-122", "İki basamaklı bir sayı ile rakamları yer değiştirilmiş hâlinin toplamı 88 ise sayının rakamları toplamı kaçtır?",
      ["8", "11", "16", "4", "88"], 0, "(10a+b)+(10b+a) = 11(a+b) = 88 → a+b = 8.",
      { short: "11(a+b) = 88 → 8.", steps: ["Toplam = 11(a+b).", "a+b = 8."], whyOthersWrong: ["88'i 11'e bölmek gerekir."] }, 3),
    Q("matematik-mat-sayi-123", "İki sayının toplamı 60'tır. Büyük sayı, küçük sayının 2 katından 6 fazla ise küçük sayı kaçtır?",
      ["18", "42", "24", "20", "36"], 0, "x + (2x+6) = 60 → 3x = 54 → x = 18.",
      { short: "3x = 54 → x = 18.", steps: ["Küçük x, büyük 2x+6.", "3x+6 = 60 → x = 18."], whyOthersWrong: ["Büyük 42 olur."] }, 3),
    Q("matematik-mat-sayi-124", "Bir sayının 2 katının 3 eksiği ile aynı sayının 8 fazlasının toplamı 38'dir. Bu sayı kaçtır?",
      ["11", "13", "9", "14", "8"], 0, "(2x−3) + (x+8) = 3x + 5 = 38 → 3x = 33 → x = 11.",
      { short: "3x + 5 = 38 → x = 11.", steps: ["2x−3 + x+8 = 3x+5.", "x = 11."], whyOthersWrong: ["Terimler doğru toplanmalı."] }, 3),
    Q("matematik-mat-sayi-125", "Ardışık üç tek sayının en büyüğü ile en küçüğünün toplamı 26 ise ortanca sayı kaçtır?",
      ["13", "11", "15", "9", "12"], 0, "En küçük a, en büyük a+4; 2a+4 = 26 → a = 11 → ortanca 13.",
      { short: "2a+4 = 26 → ortanca 13.", steps: ["Tekler: a, a+2, a+4.", "a = 11 → ortanca 13."], whyOthersWrong: ["Ortanca = a+2 = 13."] }, 3)
  ]);
})();
