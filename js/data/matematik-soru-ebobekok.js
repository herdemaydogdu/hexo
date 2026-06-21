/* ============================================================
   MATEMATİK — EBOB-EKOK: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Soru bankaları yalnızca tarz/zorluk referansı; tüm sorular özgün,
   aritmetik elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-ebobekok: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-ebobekok", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-ebobekok", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-ebobekok-101", "EBOB(12, 18) kaçtır?",
      ["3", "6", "9", "12", "36"], 1, "12=2²·3, 18=2·3² → ortak en küçük üsler 2·3 = 6.",
      { short: "2·3 = 6.", steps: ["12=2²·3, 18=2·3².", "EBOB = 2·3 = 6."], whyOthersWrong: ["36 EKOK'tur."] }, 1),
    Q("matematik-mat-ebobekok-102", "EKOK(4, 6) kaçtır?",
      ["10", "12", "24", "2", "8"], 1, "4=2², 6=2·3 → en büyük üsler 2²·3 = 12.",
      { short: "2²·3 = 12.", steps: ["4=2², 6=2·3.", "EKOK = 2²·3 = 12."], whyOthersWrong: ["2 EBOB'tur."] }, 1),
    Q("matematik-mat-ebobekok-103", "EBOB(15, 25) kaçtır?",
      ["3", "5", "15", "25", "75"], 1, "15=3·5, 25=5² → ortak 5.",
      { short: "Ortak çarpan 5.", steps: ["15=3·5, 25=5².", "EBOB = 5."], whyOthersWrong: ["75 EKOK'tur."] }, 1),
    Q("matematik-mat-ebobekok-104", "EKOK(6, 8) kaçtır?",
      ["12", "24", "48", "2", "16"], 1, "6=2·3, 8=2³ → 2³·3 = 24.",
      { short: "2³·3 = 24.", steps: ["6=2·3, 8=2³.", "EKOK = 24."], whyOthersWrong: ["2 EBOB'tur."] }, 1),
    Q("matematik-mat-ebobekok-105", "İki veya daha fazla sayının her birini tam bölen en büyük sayıya ne ad verilir?",
      ["EKOK", "EBOB", "Asal çarpan", "Ortak kat", "Bölüm"], 1, "Tanım gereği bu sayı EBOB'tur.",
      { short: "En büyük ortak bölen = EBOB.", steps: ["'Her birini bölen en büyük' → EBOB."], whyOthersWrong: ["EKOK ortak kattır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-ebobekok-106", "EBOB(24, 36) kaçtır?",
      ["6", "8", "12", "18", "72"], 2, "24=2³·3, 36=2²·3² → 2²·3 = 12.",
      { short: "2²·3 = 12.", steps: ["24=2³·3, 36=2²·3².", "Ortak en küçük üsler: 2²·3 = 12."], whyOthersWrong: ["72 EKOK'tur."] }, 2),
    Q("matematik-mat-ebobekok-107", "EKOK(9, 12) kaçtır?",
      ["24", "36", "3", "108", "18"], 1, "9=3², 12=2²·3 → 2²·3² = 36.",
      { short: "2²·3² = 36.", steps: ["9=3², 12=2²·3.", "EKOK = 36."], whyOthersWrong: ["3 EBOB'tur."] }, 2),
    Q("matematik-mat-ebobekok-108", "Bir zil 12 dakikada, diğeri 18 dakikada bir çalıyor. İkisi birlikte çaldıktan kaç dakika sonra ilk kez yine birlikte çalar?",
      ["30", "36", "48", "72", "24"], 1, "Birlikte tekrar → EKOK(12,18) = 36 dk.",
      { short: "EKOK(12,18) = 36.", steps: ["12=2²·3, 18=2·3².", "EKOK = 2²·3² = 36."], whyOthersWrong: ["6 EBOB'tur; 30/48/72/24 ortak kat değil."] }, 2),
    Q("matematik-mat-ebobekok-109", "24 kalem ve 36 defter, hiç artmadan eşit gruplara ayrılacaktır. En çok kaç grup oluşturulabilir?",
      ["6", "12", "4", "72", "18"], 1, "'Eşit gruplara böl, en çok' → EBOB(24,36) = 12.",
      { short: "EBOB(24,36) = 12.", steps: ["En çok eşit grup = ortak bölen.", "EBOB = 12."], whyOthersWrong: ["72 EKOK'tur."] }, 2),
    Q("matematik-mat-ebobekok-110", "İki sayının EBOB'u 6, EKOK'u 72'dir. Sayılardan biri 24 ise diğeri kaçtır?",
      ["12", "18", "36", "9", "48"], 1, "EBOB·EKOK = a·b → 6·72 = 24·b → b = 18.",
      { short: "6·72 = 24·b → b = 18.", steps: ["EBOB·EKOK = a·b.", "432 = 24·b → b = 18."], whyOthersWrong: ["Bağıntı 18 verir."] }, 2),
    Q("matematik-mat-ebobekok-111", "EKOK(60, 90) kaçtır?",
      ["180", "90", "30", "360", "150"], 0, "60=2²·3·5, 90=2·3²·5 → 2²·3²·5 = 180.",
      { short: "2²·3²·5 = 180.", steps: ["60=2²·3·5, 90=2·3²·5.", "En büyük üsler: 180."], whyOthersWrong: ["30 EBOB'tur."] }, 2),
    Q("matematik-mat-ebobekok-112", "Boyutları 18 m ve 24 m olan dikdörtgen bir alan, eşit kare taşlarla artıksız döşenecektir. Kullanılabilecek en büyük kare taşın kenarı kaç metredir?",
      ["3", "6", "9", "12", "8"], 1, "Kenar = EBOB(18,24) = 6 m.",
      { short: "EBOB(18,24) = 6 m.", steps: ["18=2·3², 24=2³·3.", "EBOB = 2·3 = 6."], whyOthersWrong: ["Daha büyük kenar artık bırakır."] }, 2),
    Q("matematik-mat-ebobekok-113", "5, 6 ve 8 sayılarının her biriyle tam bölünebilen en küçük doğal sayı kaçtır?",
      ["120", "240", "80", "60", "48"], 0, "EKOK(5,6,8) = 2³·3·5 = 120.",
      { short: "EKOK(5,6,8) = 120.", steps: ["5, 6=2·3, 8=2³.", "EKOK = 2³·3·5 = 120."], whyOthersWrong: ["Diğerleri üçüne birden bölünmez."] }, 2),
    Q("matematik-mat-ebobekok-114", "Üç otobüs bir duraktan 15, 20 ve 30 dakika arayla kalkıyor. Üçü aynı anda kalktıktan sonra ilk kez kaç dakika sonra yine birlikte kalkar?",
      ["60", "90", "120", "45", "180"], 0, "EKOK(15,20,30) = 60 dk.",
      { short: "EKOK(15,20,30) = 60.", steps: ["15=3·5, 20=2²·5, 30=2·3·5.", "EKOK = 2²·3·5 = 60."], whyOthersWrong: ["Diğerleri en küçük ortak kat değil."] }, 2),
    Q("matematik-mat-ebobekok-115", "EBOB(x, 12) = 4 ve EKOK(x, 12) = 24 olduğuna göre x kaçtır?",
      ["6", "8", "16", "10", "20"], 1, "EBOB·EKOK = x·12 → 4·24 = 12x → x = 8.",
      { short: "4·24 = 12x → x = 8.", steps: ["96 = 12x → x = 8.", "Kontrol: EBOB(8,12)=4, EKOK(8,12)=24."], whyOthersWrong: ["Yalnız x=8 koşulları sağlar."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-ebobekok-116", "4, 6 ve 9 ile bölündüğünde her birinde 2 kalanını veren en küçük <b>üç basamaklı</b> doğal sayı kaçtır?",
      ["110", "108", "102", "146", "74"], 0, "Sayı = EKOK(4,6,9)·k + 2 = 36k + 2; 36·3+2 = 110.",
      { short: "36k+2; ilk üç basamaklı 110.", steps: ["EKOK(4,6,9)=36.", "36k+2 ≥ 100 → k=3 → 110."], whyOthersWrong: ["108 kalan vermez; 74 iki basamaklı."] }, 3),
    Q("matematik-mat-ebobekok-117", "5 ile bölündüğünde 3, 7 ile bölündüğünde 3 kalanını veren en küçük <b>iki basamaklı</b> sayı kaçtır?",
      ["35", "38", "31", "73", "42"], 1, "Ortak kalan 3 → sayı = EKOK(5,7)·k + 3 = 35k + 3; iki basamaklı en küçük 38.",
      { short: "35k+3 → 38.", steps: ["Kalan eşit (3) → 35k+3.", "k=1 → 38 (iki basamaklı)."], whyOthersWrong: ["3 tek basamaklı; diğerleri kalan vermez."] }, 3),
    Q("matematik-mat-ebobekok-118", "EBOB'u 6 olan iki doğal sayının toplamı 42'dir. Bu koşulu sağlayan kaç farklı sayı çifti (sırasız) vardır?",
      ["2", "3", "4", "5", "6"], 1, "a=6m, b=6n, m+n=7, m<n ve aralarında asal: (1,6),(2,5),(3,4) → 3 çift.",
      { short: "m+n=7, aralarında asal: 3 çift.", steps: ["6(m+n)=42 → m+n=7.", "(1,6),(2,5),(3,4) hepsi aralarında asal."], whyOthersWrong: ["Diğer ayrışımlar 7'yi vermez."] }, 3),
    Q("matematik-mat-ebobekok-119", "Boyutları 90 cm ve 60 cm olan dikdörtgen bir zemin, eşit kare karolarla artıksız döşenecektir. En az kaç kare karo gerekir?",
      ["5", "6", "8", "9", "12"], 1, "En büyük kare kenarı EBOB(90,60)=30; sayı (90/30)·(60/30)=3·2=6.",
      { short: "Kenar 30 → 3·2 = 6 karo.", steps: ["EBOB(90,60)=30 (en büyük kare → en az karo).", "(90/30)(60/30)=6."], whyOthersWrong: ["Daha küçük kare daha çok karo gerektirir."] }, 3),
    Q("matematik-mat-ebobekok-120", "İki doğal sayının EKOK'u 180, EBOB'u 6'dır. Bu sayıların toplamı en az kaç olabilir?",
      ["66", "78", "102", "186", "60"], 0, "a=6m, b=6n, EKOK=6mn=180 → mn=30; aralarında asal (m,n)=(5,6) toplamı en küçük → a+b=6·11=66.",
      { short: "(m,n)=(5,6) → toplam 66.", steps: ["6mn=180 → mn=30.", "Aralarında asal çiftler: (1,30),(2,15),(3,10),(5,6).", "En küçük toplam (5,6) → 6·11=66."], whyOthersWrong: ["Diğer çiftler daha büyük toplam verir."] }, 3),
    Q("matematik-mat-ebobekok-121", "Uzunlukları 24 cm, 36 cm ve 60 cm olan üç ip, hiç artmadan eşit ve mümkün olan en uzun parçalara ayrılıyor. Toplam kaç parça elde edilir?",
      ["8", "10", "12", "15", "6"], 1, "Parça boyu EBOB(24,36,60)=12; 24/12+36/12+60/12 = 2+3+5 = 10.",
      { short: "EBOB=12 → 2+3+5 = 10 parça.", steps: ["EBOB(24,36,60)=12.", "24/12+36/12+60/12 = 10."], whyOthersWrong: ["12 parça boyu değil sayı değil."] }, 3),
    Q("matematik-mat-ebobekok-122", "7 ile bölündüğünde 4, 5 ile bölündüğünde 4 kalanını veren, <b>100'den küçük en büyük</b> doğal sayı kaçtır?",
      ["74", "39", "94", "69", "84"], 0, "Ortak kalan 4 → sayı = 35k + 4; 35·2+4 = 74 (<100 en büyük).",
      { short: "35k+4 → 74.", steps: ["EKOK(7,5)=35, kalan 4 → 35k+4.", "k=2 → 74; k=3 → 109 (>100)."], whyOthersWrong: ["39 küçük; diğerleri kalan vermez."] }, 3),
    Q("matematik-mat-ebobekok-123", "Bir merdiven 2'şer, 3'er ve 5'er çıkıldığında her seferinde sona 1 basamak artıyor (kalan 1). Basamak sayısı 100'den küçük en büyük değer kaçtır?",
      ["91", "61", "31", "96", "90"], 0, "Sayı = EKOK(2,3,5)·k + 1 = 30k + 1; 30·3+1 = 91 (<100 en büyük).",
      { short: "30k+1 → 91.", steps: ["EKOK(2,3,5)=30, kalan 1 → 30k+1.", "k=3 → 91; k=4 → 121 (>100)."], whyOthersWrong: ["61/31 küçük; 90/96 kalan 1 vermez."] }, 3),
    Q("matematik-mat-ebobekok-124", "Çarpımı 480 olan iki doğal sayının EBOB'u 4 ise EKOK'u kaçtır?",
      ["120", "60", "480", "96", "240"], 0, "EBOB·EKOK = çarpım → 4·EKOK = 480 → EKOK = 120.",
      { short: "4·EKOK = 480 → 120.", steps: ["EBOB·EKOK = a·b = 480.", "EKOK = 480/4 = 120."], whyOthersWrong: ["Bağıntı 120 verir."] }, 3),
    Q("matematik-mat-ebobekok-125", "36, 60 ve 84 sayılarının ortak bölenlerinin en büyüğü kaçtır?",
      ["6", "12", "24", "4", "18"], 1, "36=2²·3², 60=2²·3·5, 84=2²·3·7 → ortak 2²·3 = 12.",
      { short: "EBOB(36,60,84) = 12.", steps: ["Üçünde de en az 2²·3 var.", "EBOB = 12."], whyOthersWrong: ["Daha büyük ortak bölen üçünü bölmez."] }, 3)
  ]);
})();
