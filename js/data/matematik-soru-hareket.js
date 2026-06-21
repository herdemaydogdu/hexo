/* ============================================================
   MATEMATİK — Hareket (Hız) Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-hareket: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-hareket", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-hareket", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-hareket-101", "Bir araç 60 km/sa hızla 2 saatte kaç km yol alır?",
      ["120", "30", "62", "180", "90"], 0, "Yol = hız · zaman = 60 · 2 = 120.",
      { short: "60·2 = 120 km.", steps: ["Yol = hız·zaman.", "= 120."], whyOthersWrong: ["Hız ve zaman çarpılır."] }, 1),
    Q("matematik-mat-hareket-102", "300 km'lik yolu 5 saatte alan aracın hızı kaç km/sa'tir?",
      ["60", "1500", "50", "65", "75"], 0, "Hız = yol/zaman = 300/5 = 60.",
      { short: "300/5 = 60.", steps: ["Hız = yol/zaman.", "= 60."], whyOthersWrong: ["Yol zamana bölünür."] }, 1),
    Q("matematik-mat-hareket-103", "80 km/sa hızla giden bir araç 240 km'yi kaç saatte alır?",
      ["3", "2", "4", "320", "5"], 0, "Zaman = yol/hız = 240/80 = 3.",
      { short: "240/80 = 3.", steps: ["Zaman = yol/hız.", "= 3."], whyOthersWrong: ["Yol hıza bölünür."] }, 1),
    Q("matematik-mat-hareket-104", "Bir koşucu 10 m/s hızla 100 metreyi kaç saniyede koşar?",
      ["10", "1000", "90", "5", "20"], 0, "Zaman = 100/10 = 10 s.",
      { short: "100/10 = 10 s.", steps: ["Zaman = yol/hız.", "= 10."], whyOthersWrong: ["Mesafe hıza bölünür."] }, 1),
    Q("matematik-mat-hareket-105", "Hızı 50 km/sa olan bir araç yarım saatte kaç km gider?",
      ["25", "100", "50", "75", "30"], 0, "50 · 0,5 = 25.",
      { short: "50·0,5 = 25.", steps: ["Yol = hız·zaman.", "= 25."], whyOthersWrong: ["Yarım saat 0,5 saattir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-hareket-106", "Bir araç ilk 2 saatte 120 km, sonraki 3 saatte 150 km yol alıyor. Ortalama hızı kaç km/sa'tir?",
      ["54", "60", "50", "55", "27"], 0, "Toplam 270 km / 5 sa = 54.",
      { short: "270/5 = 54.", steps: ["Toplam yol = 270, zaman = 5.", "Ort. hız = 54."], whyOthersWrong: ["Hızların ortalaması alınmaz."] }, 2),
    Q("matematik-mat-hareket-107", "Aralarında 200 km olan iki şehirden karşılıklı çıkan iki araç 50 ve 30 km/sa hızla yaklaşıyor. Kaç saat sonra karşılaşırlar?",
      ["2,5", "4", "2", "5", "3"], 0, "Yaklaşma hızı 80; 200/80 = 2,5 sa.",
      { short: "200/80 = 2,5 sa.", steps: ["Yaklaşma hızı = 50+30 = 80.", "Süre = 2,5."], whyOthersWrong: ["Karşılıklı hareket → hızlar toplanır."] }, 2),
    Q("matematik-mat-hareket-108", "Bir tren 90 km/sa hızla gidiyor. Bu hız kaç m/s'dir?",
      ["25", "90", "324", "15", "50"], 0, "90·(1000/3600) = 25 m/s.",
      { short: "90/3,6 = 25 m/s.", steps: ["km/sa → m/s: ÷3,6.", "90/3,6 = 25."], whyOthersWrong: ["1 km/sa = 1/3,6 m/s."] }, 2),
    Q("matematik-mat-hareket-109", "Bir araç A'dan B'ye 60 km/sa ile 4 saatte gidiyor. Dönüşte aynı yolu 80 km/sa ile kaç saatte alır?",
      ["3", "4", "2", "5", "3,5"], 0, "Yol 240 km; dönüş 240/80 = 3 sa.",
      { short: "240/80 = 3 sa.", steps: ["Yol = 60·4 = 240.", "Dönüş = 240/80 = 3."], whyOthersWrong: ["Önce yol bulunur."] }, 2),
    Q("matematik-mat-hareket-110", "Aynı yönde, aralarında 100 km olan iki araçtan arkadaki 90, öndeki 70 km/sa hızla gidiyor. Arkadaki öndekini kaç saatte yakalar?",
      ["5", "2", "10", "4", "1"], 0, "Hız farkı 20; 100/20 = 5 sa.",
      { short: "100/20 = 5 sa.", steps: ["Aynı yön → hız farkı = 20.", "100/20 = 5."], whyOthersWrong: ["Aynı yönde hızlar çıkarılır."] }, 2),
    Q("matematik-mat-hareket-111", "Bir araç 40 dakikada 50 km yol alıyor. Hızı kaç km/sa'tir?",
      ["75", "50", "60", "80", "45"], 0, "50/(40/60) = 50·(60/40) = 75.",
      { short: "50·60/40 = 75.", steps: ["40 dk = 2/3 sa.", "Hız = 50/(2/3) = 75."], whyOthersWrong: ["Dakika saate çevrilir."] }, 2),
    Q("matematik-mat-hareket-112", "Bir yolcu 3 saat 90 km/sa, 2 saat 60 km/sa hızla gidiyor. Toplam kaç km yol alır?",
      ["390", "150", "450", "270", "300"], 0, "3·90 + 2·60 = 270 + 120 = 390.",
      { short: "270 + 120 = 390.", steps: ["İlk bölüm 270, ikinci 120.", "Toplam 390."], whyOthersWrong: ["Bölümler ayrı hesaplanır."] }, 2),
    Q("matematik-mat-hareket-113", "Bir araç 100 km'yi 1 saat 15 dakikada alıyor. Ortalama hızı kaç km/sa'tir?",
      ["80", "75", "100", "85", "60"], 0, "1 sa 15 dk = 1,25 sa; 100/1,25 = 80.",
      { short: "100/1,25 = 80.", steps: ["15 dk = 0,25 sa → 1,25 sa.", "Hız = 80."], whyOthersWrong: ["Süre ondalığa çevrilir."] }, 2),
    Q("matematik-mat-hareket-114", "İki araç aynı noktadan zıt yönlerde 45 ve 55 km/sa hızla aynı anda yola çıkıyor. 3 saat sonra aralarındaki uzaklık kaç km'dir?",
      ["300", "30", "150", "100", "330"], 0, "Uzaklaşma hızı 100; 100·3 = 300.",
      { short: "100·3 = 300.", steps: ["Zıt yön → 45+55 = 100.", "100·3 = 300."], whyOthersWrong: ["Zıt yönde hızlar toplanır."] }, 2),
    Q("matematik-mat-hareket-115", "Bir bisikletli 15 km/sa hızla 1 saat 20 dakika giderse kaç km yol alır?",
      ["20", "15", "18", "1200", "22"], 0, "1 sa 20 dk = 4/3 sa; 15·4/3 = 20.",
      { short: "15·4/3 = 20.", steps: ["1 sa 20 dk = 4/3 sa.", "Yol = 20 km."], whyOthersWrong: ["20 dk = 1/3 saat."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-hareket-116", "Bir araç gidişte 60, dönüşte 40 km/sa hızla aynı yolu kat ediyor. Gidiş-dönüş ortalama hızı kaç km/sa'tir?",
      ["48", "50", "52", "45", "100"], 0, "İki eşit yol için ort. hız = 2·60·40/(60+40) = 4800/100 = 48.",
      { short: "2·60·40/100 = 48.", steps: ["Harmonik ortalama: 2·v1·v2/(v1+v2).", "= 48."], whyOthersWrong: ["Aritmetik ortalama (50) yanlıştır."] }, 3),
    Q("matematik-mat-hareket-117", "Bir tren 200 m uzunluğundaki bir köprüyü, 20 m/s hızla 15 saniyede tamamen geçiyor. Trenin uzunluğu kaç metredir?",
      ["100", "300", "200", "150", "50"], 0, "Alınan yol 20·15 = 300; tren = 300 − 200 = 100 m.",
      { short: "300 − 200 = 100 m.", steps: ["Yol = köprü + tren = 20·15 = 300.", "Tren = 300 − 200 = 100."], whyOthersWrong: ["Köprüyü geçmek için tren boyu da eklenir."] }, 3),
    Q("matematik-mat-hareket-118", "İki şehir arası 360 km'dir. Bir araç bu yolun ilk yarısını 60, ikinci yarısını 90 km/sa hızla gidiyor. Toplam süre kaç saattir?",
      ["5", "6", "4", "4,5", "5,5"], 0, "180/60 + 180/90 = 3 + 2 = 5 sa.",
      { short: "3 + 2 = 5 sa.", steps: ["Her yarı 180 km.", "180/60 + 180/90 = 5."], whyOthersWrong: ["Süreler ayrı hesaplanıp toplanır."] }, 3),
    Q("matematik-mat-hareket-119", "Bir araç saatte 70 km hızla gidiyor. 30 dakika önce aynı yoldan 50 km/sa hızla çıkan aracı kaç saat sonra yakalar?",
      ["1,25", "1,5", "2", "1", "0,5"], 0, "Öndeki 30 dk'da 25 km gitti; fark hızı 20; 25/20 = 1,25 sa.",
      { short: "25/20 = 1,25 sa.", steps: ["Önce çıkan 50·0,5 = 25 km önde.", "Fark hızı 20 → 25/20 = 1,25."], whyOthersWrong: ["Önceki aracın aldığı yol hesaplanır."] }, 3),
    Q("matematik-mat-hareket-120", "Bir motorlu tekne durgun suda 20 km/sa hız yapıyor. Akıntı hızı 4 km/sa olan nehirde akıntı yönünde 48 km'yi kaç saatte gider?",
      ["2", "3", "2,4", "1,5", "4"], 0, "Akıntı yönü hızı 24; 48/24 = 2 sa.",
      { short: "48/24 = 2 sa.", steps: ["Akıntı yönü: 20+4 = 24.", "48/24 = 2."], whyOthersWrong: ["Akıntı yönünde hızlar toplanır."] }, 3),
    Q("matematik-mat-hareket-121", "Yukarıdaki tekne aynı nehirde akıntıya karşı 48 km'yi kaç saatte gider?",
      ["3", "2", "2,4", "4", "6"], 0, "Karşı yön hızı 20−4 = 16; 48/16 = 3 sa.",
      { short: "48/16 = 3 sa.", steps: ["Karşı yön: 20−4 = 16.", "48/16 = 3."], whyOthersWrong: ["Akıntıya karşı hızlar çıkarılır."] }, 3),
    Q("matematik-mat-hareket-122", "Bir araç belli bir yolu 80 km/sa hızla giderse 3 saatte alıyor. Aynı yolu 2 saatte almak için hızı kaç km/sa olmalıdır?",
      ["120", "100", "160", "90", "110"], 0, "Yol 240 km; 240/2 = 120.",
      { short: "240/2 = 120.", steps: ["Yol = 80·3 = 240.", "240/2 = 120."], whyOthersWrong: ["Önce yol sabittir."] }, 3),
    Q("matematik-mat-hareket-123", "İki araç aralarında 240 km mesafeyle karşılıklı çıkıyor. Biri 50, diğeri 70 km/sa hızla gidiyor. Karşılaştıklarında hızlı araç kaç km yol almıştır?",
      ["140", "100", "120", "160", "70"], 0, "Karşılaşma süresi 240/120 = 2 sa; hızlı araç 70·2 = 140 km.",
      { short: "70·2 = 140 km.", steps: ["Süre = 240/120 = 2 sa.", "Hızlı: 70·2 = 140."], whyOthersWrong: ["Önce karşılaşma süresi bulunur."] }, 3),
    Q("matematik-mat-hareket-124", "Bir araç A'dan B'ye 90 km/sa ile gidip 60 km/sa ile dönüyor. Gidiş süresi dönüşten 1 saat azsa, A-B arası kaç km'dir?",
      ["180", "150", "120", "90", "270"], 0, "x/60 − x/90 = 1 → (3x−2x)/180 = 1 → x = 180.",
      { short: "x/60 − x/90 = 1 → x = 180.", steps: ["Dönüş − gidiş = 1 sa.", "x/180 = 1 → x = 180."], whyOthersWrong: ["Süre farkı denklemi kurulur."] }, 3),
    Q("matematik-mat-hareket-125", "Bir koşucu pisti 6 m/s, yürüyüşçü 2 m/s hızla aynı noktadan aynı yönde aynı anda çıkıyor. Pist uzunluğu 400 m ise koşucu yürüyüşçüyü ilk kez kaç saniye sonra tam bir tur farkla geçer?",
      ["100", "200", "50", "80", "400"], 0, "Bir tur fark için hız farkı (4 m/s) ile 400 m kapatılır: 400/4 = 100 s.",
      { short: "400/4 = 100 s.", steps: ["Hız farkı = 6−2 = 4 m/s.", "Bir tur (400 m) farkı: 400/4 = 100."], whyOthersWrong: ["Tur farkı = pist boyu / hız farkı."] }, 3)
  ]);
})();
