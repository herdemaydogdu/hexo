/* ============================================================
   MATEMATİK — İşçi ve Havuz Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-isci: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-isci", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-isci", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-isci-101", "Bir işi 5 günde bitiren bir işçi, bir günde işin kaçta kaçını yapar?",
      ["1/5", "5", "1/10", "2/5", "5/2"], 0, "Bir günlük iş = 1/5.",
      { short: "1/5.", steps: ["Tüm iş 1, süre 5 gün.", "Günlük = 1/5."], whyOthersWrong: ["Günlük hız = 1/süre."] }, 1),
    Q("matematik-mat-isci-102", "Bir musluk bir havuzu 4 saatte dolduruyor. 1 saatte havuzun kaçını doldurur?",
      ["1/4", "4", "1/2", "1/8", "3/4"], 0, "Saatlik = 1/4.",
      { short: "1/4.", steps: ["Tüm havuz 1, süre 4 sa.", "Saatlik = 1/4."], whyOthersWrong: ["Hız = 1/süre."] }, 1),
    Q("matematik-mat-isci-103", "Bir işçi bir günde işin 1/6'sını yapıyorsa işin tamamını kaç günde bitirir?",
      ["6", "1/6", "3", "12", "5"], 0, "Süre = 1/(1/6) = 6 gün.",
      { short: "6 gün.", steps: ["Hız 1/6 → süre tersi.", "= 6."], whyOthersWrong: ["Süre = 1/hız."] }, 1),
    Q("matematik-mat-isci-104", "Aynı güçte 2 işçi bir işi 10 günde bitiriyor. 1 işçi aynı işi kaç günde bitirir?",
      ["20", "5", "10", "12", "8"], 0, "İşçi yarıya inince süre iki katı: 20 gün.",
      { short: "10·2 = 20.", steps: ["İşçi yarısı → süre 2 katı.", "= 20."], whyOthersWrong: ["İşçi-süre ters orantılı."] }, 1),
    Q("matematik-mat-isci-105", "Bir havuzu dolduran musluk saatte 1/3 dolduruyorsa havuz kaç saatte dolar?",
      ["3", "1/3", "6", "2", "9"], 0, "Süre = 1/(1/3) = 3 sa.",
      { short: "3 saat.", steps: ["Hız 1/3 → süre 3.", "= 3."], whyOthersWrong: ["Süre = 1/hız."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-isci-106", "Bir işi A 6 günde, B 3 günde bitiriyor. Birlikte kaç günde bitirirler?",
      ["2", "9", "4,5", "1,5", "3"], 0, "1/6 + 1/3 = 1/2 → süre 2 gün.",
      { short: "1/6+1/3 = 1/2 → 2 gün.", steps: ["Birlikte hız = 1/2.", "Süre = 2."], whyOthersWrong: ["Süreler toplanmaz, hızlar toplanır."] }, 2),
    Q("matematik-mat-isci-107", "İki musluk bir havuzu sırasıyla 4 ve 12 saatte dolduruyor. İkisi birlikte kaç saatte doldurur?",
      ["3", "8", "16", "6", "4"], 0, "1/4 + 1/12 = 4/12 = 1/3 → 3 sa.",
      { short: "1/4+1/12 = 1/3 → 3 sa.", steps: ["Toplam hız 1/3.", "Süre = 3."], whyOthersWrong: ["Hızlar toplanır."] }, 2),
    Q("matematik-mat-isci-108", "Bir işi 8 işçi 6 günde bitiriyor. Aynı işi 12 işçi kaç günde bitirir?",
      ["4", "9", "3", "6", "8"], 0, "8·6 = 48 işçi-gün; 48/12 = 4.",
      { short: "48/12 = 4 gün.", steps: ["İş = 8·6 = 48 işçi-gün.", "12 işçi → 4 gün."], whyOthersWrong: ["İşçi-gün sabittir."] }, 2),
    Q("matematik-mat-isci-109", "Bir musluk havuzu 6 saatte doldurur, bir gider 12 saatte boşaltır. İkisi birlikte açıkken havuz kaç saatte dolar?",
      ["12", "6", "4", "18", "9"], 0, "1/6 − 1/12 = 1/12 → 12 sa.",
      { short: "1/6−1/12 = 1/12 → 12 sa.", steps: ["Net hız = dolum − boşalma.", "= 1/12 → 12."], whyOthersWrong: ["Gider hızı çıkarılır."] }, 2),
    Q("matematik-mat-isci-110", "Bir işi A tek başına 12 günde bitiriyor. A ile B birlikte 4 günde bitiriyorsa B tek başına kaç günde bitirir?",
      ["6", "8", "3", "16", "4"], 0, "1/4 − 1/12 = 2/12 = 1/6 → 6 gün.",
      { short: "1/4−1/12 = 1/6 → 6 gün.", steps: ["B hızı = ortak − A.", "= 1/6 → 6."], whyOthersWrong: ["B'nin hızı farktan bulunur."] }, 2),
    Q("matematik-mat-isci-111", "Bir işi 5 işçi 8 günde bitiriyor. Aynı işi 4 günde bitirmek için kaç işçi gerekir?",
      ["10", "8", "9", "20", "6"], 0, "5·8 = 40; 40/4 = 10 işçi.",
      { short: "40/4 = 10 işçi.", steps: ["İş = 40 işçi-gün.", "4 günde → 10 işçi."], whyOthersWrong: ["Süre yarıya inince işçi 2 katı."] }, 2),
    Q("matematik-mat-isci-112", "Bir havuzun 1/4'ü doluyken bir musluk açılıyor ve musluk havuzu tek başına 6 saatte doldurabiliyor. Havuz kaç saatte tamamen dolar?",
      ["4,5", "6", "3", "5", "4"], 0, "Kalan 3/4; süre = (3/4)·6 = 4,5 sa.",
      { short: "(3/4)·6 = 4,5 sa.", steps: ["Kalan = 3/4.", "Süre = (3/4)·6 = 4,5."], whyOthersWrong: ["Sadece kalan kısım doldurulur."] }, 2),
    Q("matematik-mat-isci-113", "Bir işi A 10, B 15 günde bitiriyor. Birlikte kaç günde bitirirler?",
      ["6", "12,5", "5", "25", "8"], 0, "1/10 + 1/15 = 5/30 = 1/6 → 6 gün.",
      { short: "1/10+1/15 = 1/6 → 6 gün.", steps: ["Ortak payda 30: 3/30+2/30.", "= 1/6 → 6."], whyOthersWrong: ["Hızlar toplanır."] }, 2),
    Q("matematik-mat-isci-114", "3 işçi günde 8 saat çalışarak bir işi 5 günde bitiriyor. Toplam kaç işçi-saat harcanmıştır?",
      ["120", "40", "24", "15", "80"], 0, "3·8·5 = 120 işçi-saat.",
      { short: "3·8·5 = 120.", steps: ["İşçi · saat · gün.", "= 120."], whyOthersWrong: ["Üç çarpan da hesaba katılır."] }, 2),
    Q("matematik-mat-isci-115", "Bir musluk havuzu 9 saatte doldurur. 3 saat açık kaldıktan sonra kapatılırsa havuzun kaçı dolmuştur?",
      ["1/3", "3", "1/9", "2/3", "1/6"], 0, "3·(1/9) = 3/9 = 1/3.",
      { short: "3/9 = 1/3.", steps: ["Saatlik 1/9.", "3 saat → 1/3."], whyOthersWrong: ["Doluluk = hız·süre."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-isci-116", "Bir işi A 12, B 18 günde bitiriyor. İkisi birlikte başlıyor, 4 gün sonra A ayrılıyor. Kalan işi B kaç günde bitirir?",
      ["7", "5", "9", "6", "8"], 0, "4 günde birlikte 4(1/12+1/18) = 4·5/36 = 20/36 = 5/9 biter; kalan 4/9; B: (4/9)/(1/18) = 8 gün.",
      { short: "Kalan 4/9, B 8 günde bitirir.", steps: ["Birlikte hız = 5/36; 4 günde 5/9.", "Kalan 4/9; (4/9)·18 = 8."], whyOthersWrong: ["Kalan iş B hızına bölünür."] }, 3),
    Q("matematik-mat-isci-117", "Bir havuzu A musluğu 6, B musluğu 8 saatte doldurur; C gideri 12 saatte boşaltır. Üçü birlikte açıkken havuz kaç saatte dolar? (yaklaşık)",
      ["4,8", "5", "6", "4", "3"], 0, "1/6+1/8−1/12 = (4+3−2)/24 = 5/24 → 24/5 = 4,8 sa.",
      { short: "5/24 → 4,8 sa.", steps: ["Net hız = 1/6+1/8−1/12 = 5/24.", "Süre = 24/5 = 4,8."], whyOthersWrong: ["Gider hızı çıkarılır."] }, 3),
    Q("matematik-mat-isci-118", "Bir işi 10 işçi 12 günde bitiriyor. İş 4 gün sürdükten sonra 10 işçi daha katılıyor. İş toplam kaç günde biter?",
      ["8", "10", "9", "12", "7"], 0, "İş 120 işçi-gün; 4 günde 40 biter, kalan 80; 20 işçi → 80/20 = 4; toplam 4+4 = 8.",
      { short: "Toplam 8 gün.", steps: ["İş = 120 işçi-gün.", "İlk 4 gün: 10·4 = 40, kalan 80.", "20 işçi → 80/20 = 4; toplam 8."], whyOthersWrong: ["İşçi-gün korunur."] }, 3),
    Q("matematik-mat-isci-119", "Bir işçi bir işi 20 günde bitiriyor. 5 gün tek başına çalıştıktan sonra ikinci bir işçi katılıyor ve iş 5 gün daha sürüp bitiyor. İkinci işçi tek başına bu işi kaç günde bitirir?",
      ["20", "10", "15", "25", "12"], 1, "1. işçi toplam 10 gün çalışır: 10/20 = 1/2 yapar. Kalan 1/2'yi 2. işçi 5 günde yapar → hızı (1/2)/5 = 1/10 → 10 gün.",
      { short: "2. işçi 10 günde bitirir.", steps: ["1. işçi 10 gün → 10/20 = 1/2.", "2. işçinin 5 günde yaptığı = 1 − 1/2 = 1/2.", "Hız = (1/2)/5 = 1/10 → 10 gün."], whyOthersWrong: ["2. işçinin tek payı ayrılır."] }, 3),
    Q("matematik-mat-isci-120", "A ve B bir işi birlikte 8 günde, B ve C 12 günde, A ve C 24 günde bitiriyor. Üçü birlikte kaç günde bitirir?",
      ["8", "6", "12", "4", "10"], 0, "Toplarsak 2(a+b+c) = 1/8+1/12+1/24 = 6/24 = 1/4 → a+b+c = 1/8 → 8 gün.",
      { short: "Üçü birlikte 8 gün.", steps: ["İkililer toplamı = 2(a+b+c) = 1/4.", "a+b+c = 1/8 → 8 gün."], whyOthersWrong: ["İkili hızlar toplanıp ikiye bölünür."] }, 3),
    Q("matematik-mat-isci-121", "Bir havuzun A musluğu 10, B musluğu 15 dakikada doldurur. Önce yalnız A 4 dakika açık kalıyor, sonra B de açılıyor. Havuz açıldıktan toplam kaç dakika sonra dolar?",
      ["7,6", "8", "7", "9", "6,6"], 0, "A 4 dk'da 4/10 = 2/5 doldurur; kalan 3/5; birlikte hız 1/6; (3/5)·6 = 3,6 dk; toplam 4+3,6 = 7,6 dk.",
      { short: "4 + 3,6 = 7,6 dk.", steps: ["A 4 dk → 2/5; kalan 3/5.", "Birlikte hız 1/10+1/15 = 1/6.", "(3/5)·6 = 3,6 → toplam 7,6."], whyOthersWrong: ["İki aşama ayrı hesaplanır."] }, 3),
    Q("matematik-mat-isci-122", "Bir işi A, B'den 2 kat hızlı yapıyor. İkisi birlikte işi 8 günde bitiriyorsa A tek başına kaç günde bitirir?",
      ["12", "24", "16", "10", "6"], 0, "A hızı 2b; 2b+b = 3b = 1/8 → b = 1/24, A = 2/24 = 1/12 → 12 gün.",
      { short: "A 12 günde bitirir.", steps: ["A = 2B; 3B = 1/8 → B = 1/24.", "A = 1/12 → 12 gün."], whyOthersWrong: ["A daha hızlı → süresi kısa."] }, 3),
    Q("matematik-mat-isci-123", "Bir havuzu bir musluk 18 saatte doldurur. Havuzun dibinde, dolu havuzu 9 saatte boşaltan bir delik vardır. Boş havuz, musluk açık ve delik açıkken dolar mı?",
      ["Hayır, dolmaz", "Evet, 18 saatte", "Evet, 9 saatte", "Evet, 6 saatte", "Evet, 36 saatte"], 0, "Net hız 1/18 − 1/9 = −1/18 < 0; havuz dolmaz.",
      { short: "Net hız negatif → dolmaz.", steps: ["1/18 − 1/9 = −1/18.", "Boşalma baskın → dolmaz."], whyOthersWrong: ["Delik musluktan hızlıdır."] }, 3),
    Q("matematik-mat-isci-124", "Bir işi 6 işçi 10 günde bitiriyor. 4 gün çalışıldıktan sonra 2 işçi ayrılıyor. Kalan iş kaç günde biter?",
      ["9", "6", "8", "12", "10"], 0, "İş 60 işçi-gün; 4 günde 24 biter, kalan 36; 4 işçi → 36/4 = 9 gün.",
      { short: "36/4 = 9 gün.", steps: ["İş = 60 işçi-gün.", "İlk 4 gün: 24, kalan 36.", "4 işçi → 9 gün."], whyOthersWrong: ["Kalan işçi sayısı kullanılır."] }, 3),
    Q("matematik-mat-isci-125", "A musluğu havuzu 6 saatte, B musluğu 12 saatte doldurur. Havuz boşken iki musluk dönüşümlü olarak birer saat açılıyor (önce A). Havuz kaç saatte dolar?",
      ["8", "7", "9", "6", "10"], 0, "Her 2 saatte A+B = 2/12+1/12 = 3/12 = 1/4 dolar; 8 saatte 4·(1/4) = 1 → tam 8 saatte dolar.",
      { short: "Her 2 saatte 1/4 → 8 saat.", steps: ["A saatte 2/12, B saatte 1/12.", "İki saatlik dönüşümde 3/12 = 1/4.", "4 dönüş = 8 saat → tam dolar."], whyOthersWrong: ["Dönüşümlü dolum aşamalı toplanır."] }, 3)
  ]);
})();
