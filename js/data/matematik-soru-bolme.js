/* ============================================================
   MATEMATİK — Bölme ve Bölünebilme: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-bolme: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-bolme", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-bolme", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-bolme-101", "Aşağıdaki sayılardan hangisi 5 ile tam bölünür?",
      ["35", "23", "42", "17", "8"], 0, "Birler basamağı 0 veya 5 olan sayı 5'e bölünür; 35.",
      { short: "35 (birler 5).", steps: ["5'e bölünme: birler 0 ya da 5.", "35 ✓"], whyOthersWrong: ["Diğerlerinin birler basamağı 0/5 değil."] }, 1),
    Q("matematik-mat-bolme-102", "Aşağıdaki sayılardan hangisi 2 ile tam bölünür (çifttir)?",
      ["34", "15", "27", "19", "7"], 0, "Birler basamağı çift olan sayı 2'ye bölünür; 34.",
      { short: "34 çifttir.", steps: ["Birler basamağı 4 → çift.", "34 ✓"], whyOthersWrong: ["Diğerleri tek sayıdır."] }, 1),
    Q("matematik-mat-bolme-103", "100 ÷ 7 işleminde kalan kaçtır?",
      ["2", "0", "1", "3", "6"], 0, "100 = 14·7 + 2 → kalan 2.",
      { short: "100 = 14·7 + 2.", steps: ["14·7 = 98.", "100 − 98 = 2."], whyOthersWrong: ["Kalan 2'dir."] }, 1),
    Q("matematik-mat-bolme-104", "36 sayısının 4'e bölümünden kalan kaçtır?",
      ["0", "1", "2", "3", "4"], 0, "36 = 9·4 → kalan 0 (tam bölünür).",
      { short: "36 = 9·4.", steps: ["4·9 = 36.", "Kalan 0."], whyOthersWrong: ["Tam bölünür."] }, 1),
    Q("matematik-mat-bolme-105", "Bir sayının 10 ile tam bölünebilmesi için birler basamağı kaç olmalıdır?",
      ["0", "1", "5", "2", "10"], 0, "10'a bölünen sayının birler basamağı 0'dır.",
      { short: "Birler = 0.", steps: ["10'a bölünme kuralı.", "Birler basamağı 0."], whyOthersWrong: ["Yalnız 0 ile biter."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-bolme-106", "5A iki basamaklı sayısı 3 ile tam bölünüyorsa A'nın alabileceği değerlerin toplamı kaçtır?",
      ["12", "9", "6", "15", "3"], 0, "5+A, 3'ün katı → A ∈ {1,4,7}; toplam 12.",
      { short: "A ∈ {1,4,7} → 12.", steps: ["5+A ≡ 0 (mod 3).", "A = 1,4,7 → toplam 12."], whyOthersWrong: ["A=0'da 5 üç katı değil."] }, 2),
    Q("matematik-mat-bolme-107", "Bir sayının 5'e bölümünden kalan 3'tür. Bu sayının 3 katının 5'e bölümünden kalan kaçtır?",
      ["4", "3", "9", "1", "0"], 0, "3·3 = 9; 9'un 5'e bölümünden kalan 4.",
      { short: "9 mod 5 = 4.", steps: ["Kalan 3'ün 3 katı 9.", "9 = 5+4 → kalan 4."], whyOthersWrong: ["Kalan da 3 katına çıkar, sonra mod alınır."] }, 2),
    Q("matematik-mat-bolme-108", "x sayısının 7'ye bölümünden kalan 4'tür. x + 10 sayısının 7'ye bölümünden kalan kaçtır?",
      ["0", "4", "3", "1", "6"], 0, "4 + 10 = 14; 14 = 2·7 → kalan 0.",
      { short: "(4+10) mod 7 = 0.", steps: ["Kalanlar toplanır: 14.", "14 mod 7 = 0."], whyOthersWrong: ["14 tam bölünür."] }, 2),
    Q("matematik-mat-bolme-109", "Aşağıdaki sayılardan hangisi 6 ile tam bölünür?",
      ["42", "14", "26", "33", "20"], 0, "6'ya bölünen sayı hem 2 hem 3'e bölünür; 42 = 6·7.",
      { short: "42 = 6·7.", steps: ["42 çift ve 4+2=6 (3'ün katı).", "→ 6'ya bölünür."], whyOthersWrong: ["Diğerleri 2 ve 3'ün ikisine birden bölünmez."] }, 2),
    Q("matematik-mat-bolme-110", "İki basamaklı sayılardan kaç tanesi 4 ile tam bölünür?",
      ["22", "24", "20", "25", "23"], 0, "12'den 96'ya: (96−12)/4 + 1 = 22.",
      { short: "(96−12)/4+1 = 22.", steps: ["İlk 12, son 96.", "Adet = 22."], whyOthersWrong: ["Aralık/adım ile sayılır."] }, 2),
    Q("matematik-mat-bolme-111", "1'den 30'a kadar (30 dahil) 3 ile tam bölünen kaç sayı vardır?",
      ["10", "9", "11", "12", "8"], 0, "30/3 = 10 sayı.",
      { short: "30/3 = 10.", steps: ["3,6,...,30.", "Adet 10."], whyOthersWrong: ["Tam 10 tanedir."] }, 2),
    Q("matematik-mat-bolme-112", "250 sayısının 8'e bölümünden kalan kaçtır?",
      ["2", "0", "4", "6", "1"], 0, "250 = 31·8 + 2 → kalan 2.",
      { short: "250 = 248 + 2.", steps: ["31·8 = 248.", "Kalan 2."], whyOthersWrong: ["Kalan 2'dir."] }, 2),
    Q("matematik-mat-bolme-113", "Ardışık üç tam sayının çarpımı her zaman aşağıdakilerden hangisine tam bölünür?",
      ["6", "4", "5", "8", "9"], 0, "Ardışık 3 sayıda mutlaka bir 2'nin ve bir 3'ün katı vardır → 6.",
      { short: "Daima 6'ya bölünür.", steps: ["Bir çift + bir 3'ün katı var.", "2·3 = 6."], whyOthersWrong: ["4,8,9'a her zaman bölünmez."] }, 2),
    Q("matematik-mat-bolme-114", "Bir sayı 12 ile tam bölünüyorsa aşağıdakilerden hangisine kesinlikle bölünür?",
      ["4", "5", "7", "8", "9"], 0, "12 = 4·3 olduğundan 12'ye bölünen sayı 4'e de bölünür.",
      { short: "12 → 4'e bölünür.", steps: ["4, 12'nin bölenidir.", "→ kesinlikle 4."], whyOthersWrong: ["5,7,8,9 için garanti yok."] }, 2),
    Q("matematik-mat-bolme-115", "45 sayısının kaç tane pozitif tam böleni vardır?",
      ["6", "8", "5", "9", "4"], 0, "45 = 3²·5 → (2+1)(1+1) = 6.",
      { short: "(2+1)(1+1) = 6.", steps: ["45 = 3²·5.", "Üslere 1 ekle, çarp: 6."], whyOthersWrong: ["Bölen sayısı formülü."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-bolme-116", "5 ile bölündüğünde 3, 7 ile bölündüğünde 2 kalanını veren en küçük pozitif tam sayı kaçtır?",
      ["23", "17", "38", "12", "9"], 0, "x ≡ 3 (mod 5), x ≡ 2 (mod 7): x = 23 (23=4·5+3, 23=3·7+2).",
      { short: "x = 23.", steps: ["7k+2 dizisi: 2,9,16,23...", "23'ün 5'e bölümü kalan 3."], whyOthersWrong: ["Yalnız 23 iki koşulu birlikte sağlar."] }, 3),
    Q("matematik-mat-bolme-117", "3475 sayısının 9'a bölümünden kalan kaçtır?",
      ["1", "0", "3", "5", "7"], 0, "Rakamlar toplamı 3+4+7+5 = 19 → 1+9 = 10 → 1+0 = 1; kalan 1.",
      { short: "Rakam toplamı → 1.", steps: ["19 → 10 → 1.", "9'a bölümden kalan 1."], whyOthersWrong: ["9'a bölünme rakam toplamıyla bulunur."] }, 3),
    Q("matematik-mat-bolme-118", "2²³ sayısının birler basamağı kaçtır?",
      ["8", "2", "4", "6", "0"], 0, "2'nin kuvvetlerinde birler 2,4,8,6 döngüsü (4'lük); 23 mod 4 = 3 → 8.",
      { short: "23 mod 4 = 3 → 8.", steps: ["Döngü: 2,4,8,6.", "3. terim 8."], whyOthersWrong: ["Birler basamağı 4'lük periyotludur."] }, 3),
    Q("matematik-mat-bolme-119", "Ardışık iki çift sayının çarpımı her zaman aşağıdakilerden hangisine tam bölünür?",
      ["8", "6", "16", "5", "3"], 0, "n ve n+2 çift (2m, 2m+2): 4m(m+1); m(m+1) çift → 8'e bölünür.",
      { short: "Daima 8'e bölünür.", steps: ["2m·(2m+2) = 4m(m+1).", "m(m+1) çift → 8."], whyOthersWrong: ["Örn. 2·4=8, 4·6=24, 6·8=48 hep 8'e bölünür."] }, 3),
    Q("matematik-mat-bolme-120", "Hem 3 hem 5 ile tam bölünen en küçük üç basamaklı doğal sayı kaçtır?",
      ["105", "100", "120", "115", "150"], 0, "3 ve 5 → 15'in katı; 100'den büyük ilk katı 105.",
      { short: "15·7 = 105.", steps: ["EKOK(3,5) = 15.", "15·7 = 105 (ilk üç basamaklı)."], whyOthersWrong: ["100 15'in katı değil."] }, 3),
    Q("matematik-mat-bolme-121", "N = 2³ · 3² · 5 sayısının kaç tane pozitif böleni 4 ile tam bölünür?",
      ["12", "6", "8", "18", "24"], 0, "4'e bölünen bölen: 2'nin üssü ≥ 2. 2 için {2,3}(2 seçenek)·3 için {0,1,2}(3)·5 için {0,1}(2) = 12.",
      { short: "2·3·2 = 12.", steps: ["4|bölen → 2 üssü 2 ya da 3.", "2·3·2 = 12."], whyOthersWrong: ["Tüm bölen sayısı 24, yarısı 4'e bölünür."] }, 3),
    Q("matematik-mat-bolme-122", "Bir sayının 6'ya bölümünden kalan 4'tür. Bu sayının karesinin 6'ya bölümünden kalan kaçtır?",
      ["4", "2", "0", "1", "3"], 0, "4² = 16; 16'nın 6'ya bölümünden kalan 4.",
      { short: "16 mod 6 = 4.", steps: ["Kalanın karesi: 4² = 16.", "16 = 12 + 4 → kalan 4."], whyOthersWrong: ["Kalan kare alınıp mod'lanır."] }, 3),
    Q("matematik-mat-bolme-123", "1'den 100'e kadar hem 2 hem 3 ile tam bölünen kaç sayı vardır?",
      ["16", "33", "50", "20", "12"], 0, "Hem 2 hem 3 → 6'nın katı; 100/6 = 16 (tam kısım).",
      { short: "⌊100/6⌋ = 16.", steps: ["6,12,...,96.", "Adet 16."], whyOthersWrong: ["6'nın katları sayılır."] }, 3),
    Q("matematik-mat-bolme-124", "A35 üç basamaklı sayısı 11 ile tam bölünüyorsa A kaçtır?",
      ["9", "8", "7", "6", "5"], 0, "11 kuralı: (A+5) − 3 = A+2 ≡ 0 (mod 11) → A = 9; 935 = 11·85.",
      { short: "A + 2 = 11 → A = 9.", steps: ["Tek−çift konum farkı 11'in katı.", "(A+5)−3 = 11 → A = 9."], whyOthersWrong: ["Yalnız A=9 ile 11'e bölünür."] }, 3),
    Q("matematik-mat-bolme-125", "5¹⁰⁰ sayısının birler basamağı kaçtır?",
      ["5", "1", "0", "25", "6"], 0, "5'in tüm pozitif kuvvetlerinin birler basamağı 5'tir.",
      { short: "Daima 5.", steps: ["5,25,125... hepsi 5 ile biter.", "→ 5."], whyOthersWrong: ["5'in kuvvetleri hep 5 ile biter."] }, 3)
  ]);
})();
