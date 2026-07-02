/* ============================================================
   MATEMATİK — Oran ve Orantı: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı. (Rebalans)
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-oran: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-oran", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-oran", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-oran-101", "15/20 oranının en sade biçimi nedir?",
      ["3/4", "4/3", "1/2", "5/6", "2/3"], 0, "15 ve 20'nin EBOB'u 5; 15/20 = 3/4.",
      { short: "15/20 = 3/4.", steps: ["Pay ve paydayı 5'e böl.", "= 3/4."], whyOthersWrong: ["EBOB 5 ile sadeleşir."] }, 1),
    Q("matematik-mat-oran-102", "a/b = 2/5 ve a = 4 ise b kaçtır?",
      ["10", "8", "20", "2", "5"], 0, "4/b = 2/5 → 2b = 20 → b = 10.",
      { short: "b = 10.", steps: ["Çapraz çarpım: 2b = 20.", "b = 10."], whyOthersWrong: ["Oran korunur."] }, 1),
    Q("matematik-mat-oran-103", "6 özdeş kalem 24 TL ise 1 kalem kaç TL'dir?",
      ["4", "6", "3", "144", "5"], 0, "24/6 = 4 TL.",
      { short: "24/6 = 4.", steps: ["Birim fiyat = toplam/adet.", "= 4."], whyOthersWrong: ["Birim = 4 TL."] }, 1),
    Q("matematik-mat-oran-104", "Bir sınıfta kız/erkek oranı 3/4'tür. 9 kız varsa kaç erkek vardır?",
      ["12", "9", "16", "6", "7"], 0, "3/4 = 9/e → e = 12.",
      { short: "e = 12.", steps: ["9/e = 3/4 → e = 12."], whyOthersWrong: ["Oran orantısı kurulur."] }, 1),
    Q("matematik-mat-oran-105", "12 : 8 oranının en sade biçimi nedir?",
      ["3/2", "2/3", "4/3", "3/4", "6/5"], 0, "EBOB 4; 12/8 = 3/2.",
      { short: "12/8 = 3/2.", steps: ["4'e böl.", "= 3/2."], whyOthersWrong: ["EBOB 4 ile sadeleşir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-oran-106", "300 TL, 2 : 3 oranında iki kişiye paylaştırılıyor. Büyük pay kaç TL'dir?",
      ["180", "120", "150", "200", "100"], 0, "Toplam 5 pay; birim 300/5 = 60; büyük 3·60 = 180.",
      { short: "3·60 = 180.", steps: ["Pay toplamı 5, birim 60.", "Büyük = 180."], whyOthersWrong: ["Küçük 120 olur."] }, 2),
    Q("matematik-mat-oran-107", "a : b = 2 : 3 ve b = 12 ise a kaçtır?",
      ["8", "18", "6", "24", "9"], 0, "2/3 = a/12 → a = 8.",
      { short: "a = 8.", steps: ["a/12 = 2/3 → a = 8."], whyOthersWrong: ["Oran orantısı."] }, 2),
    Q("matematik-mat-oran-108", "3 kg elma 45 TL ise 5 kg elma kaç TL'dir? (doğru orantı)",
      ["75", "60", "90", "135", "80"], 0, "Birim 45/3 = 15; 5·15 = 75.",
      { short: "5·15 = 75.", steps: ["Kg başı 15 TL.", "5 kg = 75."], whyOthersWrong: ["Doğru orantı."] }, 2),
    Q("matematik-mat-oran-109", "6 işçi bir işi 10 günde bitiriyor. 4 işçi aynı işi kaç günde bitirir? (ters orantı)",
      ["15", "6", "12", "8", "20"], 0, "İşçi·gün sabit: 6·10 = 60; 60/4 = 15.",
      { short: "60/4 = 15.", steps: ["İşçi ve gün ters orantılı.", "= 15."], whyOthersWrong: ["İşçi azalınca süre artar."] }, 2),
    Q("matematik-mat-oran-110", "a/b = 4/5 olduğuna göre (a + b)/b oranı kaçtır?",
      ["9/5", "5/9", "4/9", "9/4", "1/5"], 0, "a = 4k, b = 5k → (4k+5k)/5k = 9/5.",
      { short: "9/5.", steps: ["a=4k, b=5k.", "(a+b)/b = 9k/5k = 9/5."], whyOthersWrong: ["Pay ve payda k ile sadeleşir."] }, 2),
    Q("matematik-mat-oran-111", "40 sayısı 2 : 3 : 5 oranında üçe bölünüyor. En büyük pay kaçtır?",
      ["20", "15", "12", "8", "25"], 0, "Pay toplamı 10; birim 4; en büyük 5·4 = 20.",
      { short: "5·4 = 20.", steps: ["Toplam 10 pay, birim 4.", "En büyük = 20."], whyOthersWrong: ["En büyük katsayı 5'tir."] }, 2),
    Q("matematik-mat-oran-112", "Bir haritada 1 cm gerçekte 5 km'yi gösteriyor. Haritadaki 8 cm gerçekte kaç km'dir?",
      ["40", "13", "1,6", "35", "45"], 0, "8·5 = 40 km.",
      { short: "8·5 = 40.", steps: ["Ölçek doğru orantı.", "= 40 km."], whyOthersWrong: ["Her cm 5 km'dir."] }, 2),
    Q("matematik-mat-oran-113", "a/3 = b/4 = c/5 ve a + b + c = 24 ise a kaçtır?",
      ["6", "8", "10", "4", "12"], 0, "Ortak k: (3+4+5)k = 12k = 24 → k = 2; a = 3·2 = 6.",
      { short: "k = 2 → a = 6.", steps: ["12k = 24 → k = 2.", "a = 3k = 6."], whyOthersWrong: ["b=8, c=10 olur."] }, 2),
    Q("matematik-mat-oran-114", "Bir karışımda tuz : su = 3 : 2 oranındadır. 250 gram karışımda kaç gram su vardır?",
      ["100", "150", "125", "50", "200"], 0, "Pay toplamı 5; birim 50; su 2·50 = 100.",
      { short: "2·50 = 100 g.", steps: ["Toplam 5 pay, birim 50.", "Su = 100 g."], whyOthersWrong: ["Tuz 150 g olur."] }, 2),
    Q("matematik-mat-oran-115", "Sabit hızla giden bir araç 60 km'yi 45 dakikada alıyor. 80 km'yi kaç dakikada alır?",
      ["60", "50", "90", "55", "75"], 0, "Doğru orantı: 45·(80/60) = 60 dk.",
      { short: "45·80/60 = 60 dk.", steps: ["Yol ile süre doğru orantılı.", "= 60."], whyOthersWrong: ["Hız sabit → orantı."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-oran-116", "a : b = 2 : 3 ve b : c = 4 : 5 ise a : c oranı kaçtır?",
      ["8/15", "2/5", "15/8", "3/4", "8/5"], 0, "b'yi eşitle: a:b=8:12, b:c=12:15 → a:b:c=8:12:15; a:c = 8/15.",
      { short: "a : c = 8 : 15.", steps: ["b ortak 12: 8:12 ve 12:15.", "a:c = 8/15."], whyOthersWrong: ["Ortak terim eşitlenir."] }, 3),
    Q("matematik-mat-oran-117", "a/b = 3/4 ve 2a + b = 20 ise a kaçtır?",
      ["6", "8", "4", "12", "5"], 0, "a=3k, b=4k → 6k+4k = 10k = 20 → k = 2; a = 6.",
      { short: "10k = 20 → a = 6.", steps: ["a=3k, b=4k.", "2(3k)+4k=10k=20 → k=2, a=6."], whyOthersWrong: ["b = 8 olur."] }, 3),
    Q("matematik-mat-oran-118", "8 makine bir işi 15 günde bitiriyor. Aynı işi 10 günde bitirmek için kaç makine gerekir?",
      ["12", "10", "16", "20", "6"], 0, "Makine·gün sabit: 8·15 = 120; 120/10 = 12.",
      { short: "120/10 = 12.", steps: ["Makine ve gün ters orantılı.", "= 12 makine."], whyOthersWrong: ["Süre kısalınca makine artar."] }, 3),
    Q("matematik-mat-oran-119", "a/b = 5/3 olduğuna göre (a − b)/(a + b) oranı kaçtır?",
      ["1/4", "1/2", "2/3", "1/8", "3/5"], 0, "a=5k, b=3k → (5k−3k)/(5k+3k) = 2/8 = 1/4.",
      { short: "2/8 = 1/4.", steps: ["a=5k, b=3k.", "(a−b)/(a+b) = 2k/8k = 1/4."], whyOthersWrong: ["k sadeleşir."] }, 3),
    Q("matematik-mat-oran-120", "İki sayının oranı 5 : 8'dir. Sayıların farkı 12 ise küçük sayı kaçtır?",
      ["20", "32", "12", "15", "24"], 0, "Fark 3 pay = 12 → birim 4; küçük 5·4 = 20.",
      { short: "5·4 = 20.", steps: ["Fark = 8k−5k = 3k = 12 → k = 4.", "Küçük = 20."], whyOthersWrong: ["Büyük 32 olur."] }, 3),
    Q("matematik-mat-oran-121", "4 işçi 6 saatte 2 duvar örüyor. Aynı hızla 6 işçi 8 saatte kaç duvar örer?",
      ["4", "3", "6", "8", "5"], 0, "İş ∝ işçi·saat: 4·6 = 24 → 2 duvar; 6·8 = 48 → 4 duvar.",
      { short: "48/24 · 2 = 4.", steps: ["4·6 = 24 → 2 duvar.", "6·8 = 48 → 4 duvar."], whyOthersWrong: ["Hem işçi hem saat orantılı."] }, 3),
    Q("matematik-mat-oran-122", "180 sayısı a : b : c = 1 : 2 : 3 oranında bölünüyor. Ortanca pay kaçtır?",
      ["60", "30", "90", "45", "72"], 0, "Toplam 6 pay; birim 30; ortanca 2·30 = 60.",
      { short: "2·30 = 60.", steps: ["Toplam 6 pay, birim 30.", "Ortanca = 60."], whyOthersWrong: ["a=30, c=90 olur."] }, 3),
    Q("matematik-mat-oran-123", "Bir işi A ile B'nin verim oranı 3 : 2'dir. Birlikte 200 birimlik işi bitirdiklerinde A kaç birim iş yapmıştır?",
      ["120", "80", "100", "150", "60"], 0, "A payı 3/5; 3/5·200 = 120.",
      { short: "3/5·200 = 120.", steps: ["Verim 3:2, A payı 3/5.", "= 120 birim."], whyOthersWrong: ["B 80 birim yapar."] }, 3),
    Q("matematik-mat-oran-124", "Ölçeği 1 : 200000 olan bir haritada iki şehir arası 4 cm'dir. Gerçek uzaklık kaç km'dir?",
      ["8", "800", "80", "0,8", "20"], 0, "4·200000 = 800000 cm = 8 km.",
      { short: "800000 cm = 8 km.", steps: ["Gerçek = 4·200000 cm.", "= 8 km."], whyOthersWrong: ["cm → km: /100000."] }, 3),
    Q("matematik-mat-oran-125", "a, b ile ters orantılı; b, c ile doğru orantılıdır. b iki katına çıkarsa a ve c nasıl değişir?",
      ["a yarıya iner, c iki katına çıkar", "İkisi de iki katına çıkar", "İkisi de yarıya iner", "a iki katına, c yarıya iner", "Değişmezler"], 0, "a·b sabit → b 2 kat ise a yarı; b/c sabit → b 2 kat ise c 2 kat.",
      { short: "a: yarı, c: iki kat.", steps: ["Ters orantı: a·b sabit → a yarıya.", "Doğru orantı: b/c sabit → c iki katına."], whyOthersWrong: ["Ters ve doğru orantı zıt yönde etkiler."] }, 3)
  ]);
})();
