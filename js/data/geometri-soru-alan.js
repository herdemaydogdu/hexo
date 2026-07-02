/* ============================================================
   GEOMETRİ — Üçgende Alan: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-soru-alan: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "geometri", unit: "geo-alan", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("geo-alan", [
    /* ---- KOLAY (5) ---- */
    Q("geometri-geo-alan-101", "Tabanı 6 cm, yüksekliği 4 cm olan bir üçgenin alanı kaç cm²'dir?",
      ["12", "24", "10", "20", "48"], 0, "Alan = taban·yükseklik/2 = 6·4/2 = 12.",
      { short: "6·4/2 = 12.", steps: ["Alan = a·h/2.", "= 12."], whyOthersWrong: ["İkiye bölmek unutulmamalı."] }, 1),
    Q("geometri-geo-alan-102", "Tabanı 10 cm, yüksekliği 5 cm olan üçgenin alanı kaç cm²'dir?",
      ["25", "50", "15", "30", "20"], 0, "10·5/2 = 25.",
      { short: "10·5/2 = 25.", steps: ["a·h/2.", "= 25."], whyOthersWrong: ["Yarısı alınır."] }, 1),
    Q("geometri-geo-alan-103", "Dik kenarları 3 cm ve 4 cm olan dik üçgenin alanı kaç cm²'dir?",
      ["6", "12", "7", "10", "5"], 0, "Dik kenarlar taban ve yükseklik: 3·4/2 = 6.",
      { short: "3·4/2 = 6.", steps: ["Dik kenarlar → a·h/2.", "= 6."], whyOthersWrong: ["Dik kenarlar taban-yüksekliktir."] }, 1),
    Q("geometri-geo-alan-104", "Bir üçgenin alanı 20 cm², tabanı 8 cm ise yüksekliği kaç cm'dir?",
      ["5", "4", "10", "2,5", "8"], 0, "20 = 8·h/2 → h = 5.",
      { short: "h = 5.", steps: ["20 = 8·h/2 → 4h = 20.", "h = 5."], whyOthersWrong: ["Alandan yükseklik çözülür."] }, 1),
    Q("geometri-geo-alan-105", "Bir kenarı 6 cm olan eşkenar üçgende bu kenara ait yükseklik 3√3 cm ise alanı kaç cm²'dir?",
      ["9√3", "18√3", "6√3", "3√3", "12√3"], 0, "6·3√3/2 = 9√3.",
      { short: "6·3√3/2 = 9√3.", steps: ["a·h/2.", "= 9√3."], whyOthersWrong: ["Yarısı alınır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("geometri-geo-alan-106", "Kenar uzunluğu 4 cm olan eşkenar üçgenin alanı kaç cm²'dir?",
      ["4√3", "16√3", "8√3", "4", "16"], 0, "Eşkenar alan = a²√3/4 = 16√3/4 = 4√3.",
      { short: "a²√3/4 = 4√3.", steps: ["16·√3/4.", "= 4√3."], whyOthersWrong: ["Eşkenar üçgen alan formülü."] }, 2),
    Q("geometri-geo-alan-107", "Bir üçgenin alanı 30 cm², yüksekliği 6 cm ise tabanı kaç cm'dir?",
      ["10", "5", "12", "15", "6"], 0, "30 = a·6/2 → 3a = 30 → a = 10.",
      { short: "a = 10.", steps: ["30 = a·6/2.", "a = 10."], whyOthersWrong: ["Alandan taban bulunur."] }, 2),
    Q("geometri-geo-alan-108", "İki üçgenin yükseklikleri eşittir. Tabanları oranı 2/3 ise alanları oranı kaçtır?",
      ["2/3", "3/2", "4/9", "1", "1/2"], 0, "Eşit yükseklikte alan oranı = taban oranı = 2/3.",
      { short: "2/3.", steps: ["Alan ∝ taban (h eşit).", "= 2/3."], whyOthersWrong: ["Yükseklik eşitse alan tabanla orantılı."] }, 2),
    Q("geometri-geo-alan-109", "Tabanı 12 cm olan bir üçgenin alanı 42 cm² ise yüksekliği kaç cm'dir?",
      ["7", "6", "3,5", "14", "8"], 0, "42 = 12·h/2 → 6h = 42 → h = 7.",
      { short: "h = 7.", steps: ["42 = 6h.", "h = 7."], whyOthersWrong: ["Alandan yükseklik çözülür."] }, 2),
    Q("geometri-geo-alan-110", "Dik kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
      ["4,8", "5", "10", "7", "3,6"], 0, "Alan 24; hipotenüs 10; 24 = 10·h/2 → h = 4,8.",
      { short: "h = 4,8.", steps: ["Alan = 24, hipotenüs = 10.", "24 = 10·h/2 → h = 4,8."], whyOthersWrong: ["Alan iki yolla yazılır."] }, 2),
    Q("geometri-geo-alan-111", "Bir üçgende iki kenar 8 cm ve 6 cm, aralarındaki açı 30° ise alanı kaç cm²'dir?",
      ["12", "24", "48", "14", "20"], 0, "Alan = (1/2)·a·b·sin C = (1/2)·8·6·(1/2) = 12.",
      { short: "½·8·6·sin30 = 12.", steps: ["sin30 = 1/2.", "½·48·½ = 12."], whyOthersWrong: ["İki kenar-açı alan formülü."] }, 2),
    Q("geometri-geo-alan-112", "Tabanları eşit iki üçgenin yükseklikleri 4 cm ve 6 cm ise alanları oranı kaçtır?",
      ["2/3", "3/2", "4/6", "1", "5/6"], 0, "Eşit tabanda alan oranı = yükseklik oranı = 4/6 = 2/3.",
      { short: "4/6 = 2/3.", steps: ["Alan ∝ yükseklik (taban eşit).", "= 2/3."], whyOthersWrong: ["Sadeleşir: 2/3."] }, 2),
    Q("geometri-geo-alan-113", "Bir üçgenin kenar uzunlukları 3, 4, 5 cm ise alanı kaç cm²'dir?",
      ["6", "12", "10", "7,5", "20"], 0, "3-4-5 dik üçgen; alan = 3·4/2 = 6.",
      { short: "3·4/2 = 6.", steps: ["3-4-5 dik üçgendir.", "Dik kenarlar 3,4 → 6."], whyOthersWrong: ["Pisagor üçlüsü diktir."] }, 2),
    Q("geometri-geo-alan-114", "Alanı 36 cm² olan bir üçgenin tabanı 2 katına, yüksekliği aynı kalırsa yeni alan kaç cm²'dir?",
      ["72", "36", "18", "144", "48"], 0, "Alan tabanla doğru orantılı: 2 katı → 72.",
      { short: "2·36 = 72.", steps: ["Taban 2 katı, h sabit.", "Alan 2 katı = 72."], whyOthersWrong: ["Alan tabanla orantılı."] }, 2),
    Q("geometri-geo-alan-115", "Bir dik üçgenin alanı 30 cm² ve bir dik kenarı 5 cm ise diğer dik kenarı kaç cm'dir?",
      ["12", "6", "10", "15", "8"], 0, "30 = 5·b/2 → b = 12.",
      { short: "b = 12.", steps: ["30 = 5·b/2.", "b = 12."], whyOthersWrong: ["Dik kenarlar taban-yüksekliktir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("geometri-geo-alan-116", "Bir üçgende kenarortay çizildiğinde oluşan iki küçük üçgenin alanları arasındaki ilişki nedir?",
      ["Eşittir", "Oranları 2/1'dir", "Biri diğerinin 3 katı", "İlişkisizdir", "Oranları 3/2'dir"], 0, "Kenarortay tabanı iki eşit parçaya böler, yükseklik ortak → alanlar eşit.",
      { short: "Alanlar eşit.", steps: ["Tabanlar eşit, yükseklik ortak.", "→ eşit alan."], whyOthersWrong: ["Kenarortay alanı ikiye eşit böler."] }, 3),
    Q("geometri-geo-alan-117", "Kenar uzunlukları 5, 5, 6 cm olan ikizkenar üçgenin alanı kaç cm²'dir?",
      ["12", "15", "24", "10", "9"], 0, "Tabana inen yükseklik: √(5²−3²)=4; alan = 6·4/2 = 12.",
      { short: "6·4/2 = 12.", steps: ["Yükseklik = √(25−9) = 4.", "Alan = 12."], whyOthersWrong: ["Yükseklik Pisagor'la bulunur."] }, 3),
    Q("geometri-geo-alan-118", "Bir üçgenin bir kenarına ait yükseklik 2 katına, o kenar (taban) yarıya inerse alanı nasıl değişir?",
      ["Değişmez", "2 katı olur", "Yarıya iner", "4 katı olur", "1/4'e iner"], 0, "Alan = a·h/2; (a/2)·(2h)/2 = a·h/2 → değişmez.",
      { short: "Değişmez.", steps: ["(a/2)·(2h) = a·h.", "Alan aynı kalır."], whyOthersWrong: ["Çarpanlar birbirini götürür."] }, 3),
    Q("geometri-geo-alan-119", "Alanı 48 cm² olan bir üçgende bir kenarortay çiziliyor. Oluşan üçgenlerden birinin alanı kaç cm²'dir?",
      ["24", "48", "16", "12", "32"], 0, "Kenarortay alanı iki eşit parçaya böler: 48/2 = 24.",
      { short: "48/2 = 24.", steps: ["Kenarortay eşit böler.", "= 24."], whyOthersWrong: ["Her parça yarısıdır."] }, 3),
    Q("geometri-geo-alan-120", "Ağırlık merkezi (kenarortayların kesişimi), üçgeni alanları eşit 6 üçgene böler. Toplam alan 36 cm² ise bu küçük üçgenlerden birinin alanı kaç cm²'dir?",
      ["6", "12", "9", "4", "18"], 0, "36/6 = 6.",
      { short: "36/6 = 6.", steps: ["6 eşit alan.", "= 6."], whyOthersWrong: ["Ağırlık merkezi 6 eşit alan oluşturur."] }, 3),
    Q("geometri-geo-alan-121", "Bir eşkenar üçgenin alanı 9√3 cm² ise bir kenarı kaç cm'dir?",
      ["6", "9", "3", "12", "18"], 0, "a²√3/4 = 9√3 → a² = 36 → a = 6.",
      { short: "a = 6.", steps: ["a²√3/4 = 9√3 → a² = 36.", "a = 6."], whyOthersWrong: ["Eşkenar alan formülünden."] }, 3),
    Q("geometri-geo-alan-122", "Benzer iki üçgenin benzerlik oranı 2/3 ise alanları oranı kaçtır?",
      ["4/9", "2/3", "8/27", "3/2", "9/4"], 0, "Alan oranı = benzerlik oranının karesi: (2/3)² = 4/9.",
      { short: "(2/3)² = 4/9.", steps: ["Alan oranı = k².", "= 4/9."], whyOthersWrong: ["Uzunluk oranının karesi alınır."] }, 3),
    Q("geometri-geo-alan-123", "Bir üçgende bir kenar üzerindeki nokta tabanı 1 : 3 oranında bölüyor ve tepe noktasına birleştiriliyor. Küçük üçgenin alanı büyük (tüm) üçgenin kaçta kaçıdır?",
      ["1/4", "1/3", "3/4", "1/2", "1/8"], 0, "Yükseklik ortak, taban 1/(1+3) = 1/4 → alan 1/4.",
      { short: "1/4.", steps: ["Taban oranı 1/4, h ortak.", "Alan oranı 1/4."], whyOthersWrong: ["Alan taban oranıyla orantılı."] }, 3),
    Q("geometri-geo-alan-124", "Kenarları 6, 8, 10 cm olan üçgenin çevresine (iç teğet) çizilen çemberin yarıçapı kaç cm'dir? (Alan = r·yarıçevre)",
      ["2", "4", "3", "5", "2,5"], 0, "6-8-10 dik; alan 24; yarıçevre 12; r = alan/yarıçevre = 24/12 = 2.",
      { short: "r = 24/12 = 2.", steps: ["Alan = 24, u = 12.", "r = A/u = 2."], whyOthersWrong: ["İç teğet: A = r·u."] }, 3),
    Q("geometri-geo-alan-125", "Bir üçgenin iki kenarı 10 cm ve 12 cm, aralarındaki açı 90° ise alanı kaç cm²'dir?",
      ["60", "120", "30", "72", "48"], 0, "Dik açı → iki kenar dik kenar: 10·12/2 = 60.",
      { short: "10·12/2 = 60.", steps: ["Açı 90° → dik kenarlar.", "= 60."], whyOthersWrong: ["sin90 = 1, ½·10·12 = 60."] }, 3)
  ]);
})();
