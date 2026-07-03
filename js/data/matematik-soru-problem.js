/* ============================================================
   MATEMATİK — Problem Çözme — Genel Stratejiler: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Sayı, yaş, yüzde/kâr-zarar, hareket, işçi-havuz, karışım ve kesir problemlerini
   karışık olarak kapsar. Tüm sorular özgün; işlemler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-problem: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-problem", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-problem", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-problem-101", "İki sayının toplamı 40, farkı 8'dir. Büyük sayı kaçtır?",
      ["24", "16", "20", "28", "32"], 0, "x+y=40, x−y=8 → 2x=48 → x=24.",
      { short: "x = 24.", steps: ["İki denklemi topla: 2x = 48.", "x = 24."], whyOthersWrong: ["16 küçük sayıdır."] }, 1),
    Q("matematik-mat-problem-102", "Ali'nin yaşı, kızının yaşının 3 katıdır. Kızı 8 yaşında olduğuna göre Ali kaç yaşındadır?",
      ["24", "16", "32", "11", "27"], 0, "Ali = 3 × 8 = 24.",
      { short: "Ali = 24.", steps: ["Kız = 8.", "Ali = 3 × 8 = 24."], whyOthersWrong: ["Katsayı 3 ile çarpılır."] }, 1),
    Q("matematik-mat-problem-103", "200 TL'nin %15'i kaç TL'dir?",
      ["30", "15", "20", "35", "45"], 0, "200 × 0,15 = 30.",
      { short: "30 TL.", steps: ["%15 = 15/100.", "200 × 15/100 = 30."], whyOthersWrong: ["Yüzde doğrudan çarpanla bulunur."] }, 1),
    Q("matematik-mat-problem-104", "Bir araç 60 km/saat sabit hızla 3 saatte kaç km yol alır?",
      ["180", "63", "57", "20", "240"], 0, "Yol = Hız × Zaman = 60 × 3 = 180.",
      { short: "180 km.", steps: ["Yol = Hız × Zaman.", "60 × 3 = 180."], whyOthersWrong: ["Toplama değil çarpma yapılır."] }, 1),
    Q("matematik-mat-problem-105", "Bir sayının 1/4'ü 12 olduğuna göre bu sayı kaçtır?",
      ["48", "3", "16", "24", "36"], 0, "x/4 = 12 → x = 48.",
      { short: "x = 48.", steps: ["x/4 = 12.", "x = 12 × 4 = 48."], whyOthersWrong: ["Kesrin tersiyle çarpılır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-problem-106", "İki sayının toplamı 90'dır. Biri diğerinin 2 katı olduğuna göre küçük sayı kaçtır?",
      ["30", "60", "45", "15", "20"], 0, "x + 2x = 90 → 3x = 90 → x = 30.",
      { short: "Küçük sayı = 30.", steps: ["x + 2x = 90.", "3x = 90 → x = 30."], whyOthersWrong: ["60 büyük sayıdır."] }, 2),
    Q("matematik-mat-problem-107", "Bir babanın yaşı, oğlunun yaşının 4 katıdır. Aralarındaki fark 27 yıl olduğuna göre oğul kaç yaşındadır?",
      ["9", "27", "36", "18", "12"], 0, "4x − x = 27 → 3x = 27 → x = 9.",
      { short: "Oğul = 9.", steps: ["Baba = 4x, oğul = x.", "4x − x = 27 → x = 9."], whyOthersWrong: ["27 farkın kendisidir, oğulun yaşı değil."] }, 2),
    Q("matematik-mat-problem-108", "Bir ürüne %20 zam yapılınca fiyatı 300 TL oluyor. Ürünün eski fiyatı kaç TL'dir?",
      ["250", "240", "280", "260", "270"], 0, "1,2x = 300 → x = 250.",
      { short: "Eski fiyat = 250 TL.", steps: ["Yeni fiyat = 1,2 × eski fiyat.", "300 / 1,2 = 250."], whyOthersWrong: ["%20 zam, 300'ün %20'si değil eski fiyatın %20'sidir."] }, 2),
    Q("matematik-mat-problem-109", "80 soruluk bir sınavda bir öğrenci soruların %75'ini doğru yapıyor. Öğrencinin kaç doğrusu vardır?",
      ["60", "20", "64", "75", "66"], 0, "80 × 0,75 = 60.",
      { short: "60 doğru.", steps: ["%75 = 3/4.", "80 × 3/4 = 60."], whyOthersWrong: ["20, yanlış sayısına yakın bir değerdir."] }, 2),
    Q("matematik-mat-problem-110", "İki şehir arası 240 km'dir. Aynı anda karşılıklı yola çıkan iki araçtan biri 50 km/saat, diğeri 70 km/saat hızla gidiyor. Kaç saat sonra karşılaşırlar?",
      ["2", "3", "1,5", "4", "2,5"], 0, "240 / (50+70) = 240/120 = 2.",
      { short: "2 saat.", steps: ["Yaklaşma hızı = 50+70 = 120.", "240/120 = 2."], whyOthersWrong: ["Zıt yönde hızlar toplanır."] }, 2),
    Q("matematik-mat-problem-111", "Bir havuzu A musluğu tek başına 6 saatte, B musluğu tek başına 12 saatte dolduruyor. İkisi birlikte açılırsa havuz kaç saatte dolar?",
      ["4", "8", "3", "9", "6"], 0, "1/6 + 1/12 = 3/12 = 1/4 → 4 saat.",
      { short: "4 saat.", steps: ["Birim saatte doldurulan: 1/6 + 1/12.", "= 3/12 = 1/4 → 4 saat."], whyOthersWrong: ["Süreler toplanmaz, hızlar toplanır."] }, 2),
    Q("matematik-mat-problem-112", "%30 tuz oranına sahip 20 kg tuzlu suda kaç kg tuz vardır?",
      ["6", "14", "3", "10", "4"], 0, "20 × 0,30 = 6.",
      { short: "6 kg tuz.", steps: ["Tuz miktarı = oran × toplam.", "20 × 0,30 = 6."], whyOthersWrong: ["14, sudaki miktarı gösterir, tuzu değil."] }, 2),
    Q("matematik-mat-problem-113", "Bir sayının 2/3'ü, kendisinden 10 eksiktir. Bu sayı kaçtır?",
      ["30", "15", "45", "20", "10"], 0, "x − (2/3)x = 10 → (1/3)x = 10 → x = 30.",
      { short: "x = 30.", steps: ["x'in 1/3'ü 10'dur.", "x = 10 × 3 = 30."], whyOthersWrong: ["Kalan kesir (1/3) ile sayı bulunur."] }, 2),
    Q("matematik-mat-problem-114", "Bir işi A tek başına 10 günde, B tek başına 15 günde bitiriyor. Birlikte çalışırlarsa iş kaç günde biter?",
      ["6", "12", "8", "10", "5"], 0, "1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 → 6 gün.",
      { short: "6 gün.", steps: ["Günlük iş hızları toplanır: 1/10 + 1/15.", "= 5/30 = 1/6 → 6 gün."], whyOthersWrong: ["Süreler doğrudan toplanmaz."] }, 2),
    Q("matematik-mat-problem-115", "%10 zararla satılan bir malın satış fiyatı 180 TL'dir. Malın maliyeti kaç TL'dir?",
      ["200", "198", "190", "220", "210"], 0, "0,9x = 180 → x = 200.",
      { short: "Maliyet = 200 TL.", steps: ["Satış fiyatı = 0,9 × maliyet.", "180 / 0,9 = 200."], whyOthersWrong: ["Zarar maliyet üzerinden hesaplanır."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-problem-116", "Üç sayının toplamı 90'dır. İkinci sayı birincinin 2 katı, üçüncü sayı ikincinin 3 katıdır. Birinci sayı kaçtır?",
      ["10", "20", "30", "15", "5"], 0, "x + 2x + 6x = 90 → 9x = 90 → x = 10.",
      { short: "Birinci sayı = 10.", steps: ["İkinci = 2x, üçüncü = 6x.", "9x = 90 → x = 10."], whyOthersWrong: ["20 ikinci, 30 üçüncü sayının 1/2'sidir."] }, 3),
    Q("matematik-mat-problem-117", "%40 alkol oranlı 5 litre solüsyona bir miktar saf su (%0 alkol) eklenerek %25 alkol oranlı bir karışım elde ediliyor. Eklenen su kaç litredir?",
      ["3", "2", "4", "5", "6"], 0, "0,4×5 = 0,25×(5+x) → 2 = 1,25 + 0,25x → x = 3.",
      { short: "3 litre su.", steps: ["Alkol miktarı sabit kalır: 0,4×5 = 2.", "2 = 0,25(5+x) → x = 3."], whyOthersWrong: ["Su eklenince toplam hacim ve oran birlikte değişir."] }, 3),
    Q("matematik-mat-problem-118", "Bir anne ile kızının yaşları toplamı 44'tür. 4 yıl önce anne, kızının yaşının 5 katıymış. Kızın şimdiki yaşı kaçtır?",
      ["10", "8", "12", "6", "14"], 0, "(44−x)−4 = 5(x−4) → 40−x = 5x−20 → x = 10.",
      { short: "Kız = 10.", steps: ["Anne = 44−x.", "40−x = 5x−20 → 6x = 60 → x = 10."], whyOthersWrong: ["4 yıl önceki yaşlar denkleme dahil edilmeli."] }, 3),
    Q("matematik-mat-problem-119", "İki şehir arası 360 km'dir. Bir araç gidişte 60 km/saat, dönüşte 90 km/saat hızla gidiyor. Aracın ortalama hızı kaç km/saat'tir?",
      ["72", "75", "70", "80", "65"], 0, "Ortalama hız = 2ab/(a+b) = 2×60×90/150 = 72.",
      { short: "72 km/saat.", steps: ["Ortalama hız aritmetik ortalama değildir.", "2×60×90/(60+90) = 72."], whyOthersWrong: ["(60+90)/2 = 75 yanlış yöntemdir."] }, 3),
    Q("matematik-mat-problem-120", "Bir havuzu dolduran musluk tek başına 5 saatte, boşaltan musluk tek başına 15 saatte boşaltıyor. İkisi birlikte açılırsa havuz kaç saatte dolar?",
      ["7,5", "10", "6", "8", "9"], 0, "1/5 − 1/15 = 2/15 → havuz 15/2 = 7,5 saatte dolar.",
      { short: "7,5 saat.", steps: ["Net doldurma hızı: 1/5 − 1/15 = 2/15.", "Süre = 15/2 = 7,5."], whyOthersWrong: ["Boşaltan musluk net hızı azaltır, çıkarma yapılır."] }, 3),
    Q("matematik-mat-problem-121", "Bir malın fiyatı önce %20 artırılıyor, sonra yeni fiyattan %20 indirim yapılıyor. Son fiyat, ilk fiyata göre yüzde kaç değişmiştir?",
      ["%4 azalış", "%4 artış", "%20 azalış", "Değişmez", "%2 azalış"], 0, "1,2 × 0,8 = 0,96 → ilk fiyatın %96'sı, yani %4 azalış.",
      { short: "%4 azalış.", steps: ["Çarpanlar birleştirilir: 1,2 × 0,8 = 0,96.", "0,96 → %4 azalış."], whyOthersWrong: ["Eşit yüzde artış-azalış birbirini götürmez."] }, 3),
    Q("matematik-mat-problem-122", "Bir havuzun 2/5'i doluyken 30 litre su daha eklenince havuz tamamen doluyor. Havuzun tam kapasitesi kaç litredir?",
      ["50", "40", "60", "75", "45"], 0, "Boş kısım 3/5'lik kısımdır: (3/5)K = 30 → K = 50.",
      { short: "50 litre.", steps: ["Boş kısım oranı: 1 − 2/5 = 3/5.", "(3/5)K = 30 → K = 50."], whyOthersWrong: ["30 litre, havuzun tamamı değil boş kısmıdır."] }, 3),
    Q("matematik-mat-problem-123", "Bir sayının 3 katının 5 fazlası, aynı sayının 2 katının 15 fazlasına eşittir. Bu sayı kaçtır?",
      ["10", "5", "15", "20", "25"], 0, "3x + 5 = 2x + 15 → x = 10.",
      { short: "x = 10.", steps: ["3x + 5 = 2x + 15.", "x = 15 − 5 = 10."], whyOthersWrong: ["Terimler doğru tarafa taşınmalı."] }, 3),
    Q("matematik-mat-problem-124", "Aynı yönde giden iki araçtan yavaş olanı 40 km/saat hızla 2 saat önce yola çıkıyor. Hızlı araç 60 km/saat hızla aynı noktadan yola çıkarsa yavaş olanı kaç saatte yakalar?",
      ["4", "3", "5", "2", "6"], 0, "Yavaş araç 2 saatte 80 km almıştır; fark hızı 20 km/saat: 80/20 = 4.",
      { short: "4 saat.", steps: ["Baştaki fark: 40×2 = 80 km.", "Fark hızı 60−40=20; 80/20 = 4 saat."], whyOthersWrong: ["Sadece hız farkı değil, baştaki mesafe farkı da hesaba katılmalı."] }, 3),
    Q("matematik-mat-problem-125", "%60 meyve suyu içeren 8 litre karışıma, meyve suyu içermeyen (%0) kaç litre su eklenirse karışımın oranı %40'a düşer?",
      ["4", "3", "5", "6", "2"], 0, "Meyve suyu miktarı sabit: 0,6×8 = 4,8 = 0,4×(8+x) → x = 4.",
      { short: "4 litre su.", steps: ["Meyve suyu miktarı değişmez: 4,8 litre.", "4,8 = 0,4(8+x) → x = 4."], whyOthersWrong: ["Su eklenince yalnızca toplam hacim artar, meyve suyu miktarı sabit kalır."] }, 3)
  ]);
})();
