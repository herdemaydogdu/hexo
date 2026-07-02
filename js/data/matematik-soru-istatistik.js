/* ============================================================
   MATEMATİK — Veri, Grafik ve Temel İstatistik: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-istatistik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-istatistik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-istatistik", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-istatistik-101", "4, 6, 8 sayılarının aritmetik ortalaması kaçtır?",
      ["6", "18", "8", "4", "9"], 0, "(4+6+8)/3 = 18/3 = 6.",
      { short: "18/3 = 6.", steps: ["Topla: 18.", "3'e böl: 6."], whyOthersWrong: ["Ortalama = toplam/adet."] }, 1),
    Q("matematik-mat-istatistik-102", "3, 5, 5, 7, 9 veri dizisinin modu (en çok tekrar eden) kaçtır?",
      ["5", "7", "9", "3", "29"], 0, "5 iki kez tekrar eder → mod 5.",
      { short: "Mod = 5.", steps: ["En çok tekrar eden.", "5 iki kez."], whyOthersWrong: ["Mod en sık değerdir."] }, 1),
    Q("matematik-mat-istatistik-103", "2, 4, 6, 8, 10 dizisinin medyanı (ortancası) kaçtır?",
      ["6", "5", "8", "4", "30"], 0, "Sıralı 5 verinin ortadaki (3.) değeri 6.",
      { short: "Ortadaki = 6.", steps: ["5 veri → 3. terim.", "= 6."], whyOthersWrong: ["Medyan ortadaki değer."] }, 1),
    Q("matematik-mat-istatistik-104", "10, 15, 20 sayılarının açıklığı (en büyük − en küçük) kaçtır?",
      ["10", "20", "5", "15", "45"], 0, "20 − 10 = 10.",
      { short: "20 − 10 = 10.", steps: ["Maks − min.", "= 10."], whyOthersWrong: ["Açıklık = uç değerler farkı."] }, 1),
    Q("matematik-mat-istatistik-105", "Bir dizide en büyük değer 25, en küçük değer 7 ise açıklık kaçtır?",
      ["18", "32", "25", "7", "16"], 0, "25 − 7 = 18.",
      { short: "= 18.", steps: ["25 − 7.", "= 18."], whyOthersWrong: ["Fark alınır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-istatistik-106", "5, 8, 11, x sayılarının ortalaması 9 ise x kaçtır?",
      ["12", "9", "10", "8", "14"], 0, "Toplam 36; 24 + x = 36 → x = 12.",
      { short: "x = 12.", steps: ["4·9 = 36 toplam.", "36 − 24 = 12."], whyOthersWrong: ["Toplam = ortalama·adet."] }, 2),
    Q("matematik-mat-istatistik-107", "2, 3, 7, 8, 10 dizisinde ortalama kaçtır?",
      ["6", "7", "5", "30", "8"], 0, "(2+3+7+8+10)/5 = 30/5 = 6.",
      { short: "30/5 = 6.", steps: ["Toplam 30.", "5'e böl: 6."], whyOthersWrong: ["Toplam/adet."] }, 2),
    Q("matematik-mat-istatistik-108", "4, 6, 8, 10, 12, 14 dizisinin medyanı kaçtır?",
      ["9", "8", "10", "6", "12"], 0, "6 veri → 3. ve 4. ortalaması: (8+10)/2 = 9.",
      { short: "(8+10)/2 = 9.", steps: ["Çift veri → ortadaki ikinin ortalaması.", "= 9."], whyOthersWrong: ["Çift sayıda veri iki terim ortalanır."] }, 2),
    Q("matematik-mat-istatistik-109", "Bir öğrencinin 3 sınav ortalaması 70'tir. 4. sınavdan 90 alırsa yeni ortalaması kaç olur?",
      ["75", "80", "72", "70", "78"], 0, "(3·70 + 90)/4 = 300/4 = 75.",
      { short: "300/4 = 75.", steps: ["İlk toplam 210, +90 = 300.", "/4 = 75."], whyOthersWrong: ["Yeni toplam/4."] }, 2),
    Q("matematik-mat-istatistik-110", "6, 6, 7, 9, 9, 9 dizisinin modu kaçtır?",
      ["9", "6", "7", "8", "46"], 0, "9 üç kez tekrar eder → mod 9.",
      { short: "Mod = 9.", steps: ["9 en çok (3 kez).", ""], whyOthersWrong: ["En sık değer."] }, 2),
    Q("matematik-mat-istatistik-111", "Bir sınıfın matematik notu ortalaması 60, öğrenci sayısı 20 ise notların toplamı kaçtır?",
      ["1200", "80", "300", "600", "120"], 0, "60·20 = 1200.",
      { short: "60·20 = 1200.", steps: ["Toplam = ortalama·kişi.", "= 1200."], whyOthersWrong: ["Ortalamadan toplam."] }, 2),
    Q("matematik-mat-istatistik-112", "12, 15, 18, 21 dizisinin ortalaması kaçtır?",
      ["16,5", "16", "18", "15", "66"], 0, "(12+15+18+21)/4 = 66/4 = 16,5.",
      { short: "66/4 = 16,5.", steps: ["Toplam 66.", "4'e böl."], whyOthersWrong: ["Toplam/adet."] }, 2),
    Q("matematik-mat-istatistik-113", "Bir daire grafiğinde bir dilim 90° ise bu dilim toplamın yüzde kaçını gösterir?",
      ["25", "90", "50", "30", "45"], 0, "90/360 = 1/4 = %25.",
      { short: "90/360 = %25.", steps: ["Tam daire 360°.", "90/360 = %25."], whyOthersWrong: ["Açı/360 oranı."] }, 2),
    Q("matematik-mat-istatistik-114", "3, 5, 8, 12, 12 dizisinin aritmetik ortalaması ile modu arasındaki fark kaçtır?",
      ["4", "8", "12", "0", "5"], 0, "Ortalama 40/5 = 8; mod 12; fark 12 − 8 = 4.",
      { short: "12 − 8 = 4.", steps: ["Ortalama 8, mod 12.", "Fark 4."], whyOthersWrong: ["İki ölçü ayrı hesaplanır."] }, 2),
    Q("matematik-mat-istatistik-115", "Bir dizide 5 sayının ortalaması 12'dir. Bu sayılara 18 eklenirse 6 sayının ortalaması kaç olur?",
      ["13", "12", "15", "14", "18"], 0, "Toplam 60 + 18 = 78; 78/6 = 13.",
      { short: "78/6 = 13.", steps: ["Eski toplam 60.", "(60+18)/6 = 13."], whyOthersWrong: ["Yeni toplam ve yeni adet."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-istatistik-116", "7 sayının ortalaması 10'dur. Bu sayılardan biri (16) çıkarılırsa kalan 6 sayının ortalaması kaç olur?",
      ["9", "10", "11", "8", "12"], 0, "Toplam 70; 70 − 16 = 54; 54/6 = 9.",
      { short: "54/6 = 9.", steps: ["Toplam 70, çıkar 16 → 54.", "/6 = 9."], whyOthersWrong: ["Yeni toplam/yeni adet."] }, 3),
    Q("matematik-mat-istatistik-117", "A grubunda 4 kişi ortalama 80, B grubunda 6 kişi ortalama 70 alıyor. İki grubun ortak ortalaması kaçtır?",
      ["74", "75", "72", "76", "73"], 0, "(4·80 + 6·70)/10 = (320+420)/10 = 74.",
      { short: "740/10 = 74.", steps: ["Toplamlar: 320 + 420 = 740.", "10 kişi → 74."], whyOthersWrong: ["Ağırlıklı ortalama (kişi sayısına göre)."] }, 3),
    Q("matematik-mat-istatistik-118", "x, x+2, x+4, x+6, x+8 dizisinin ortalaması 20 ise x kaçtır?",
      ["16", "20", "18", "14", "12"], 0, "Ortanca (x+4) = ortalama = 20 → x = 16.",
      { short: "x + 4 = 20 → x = 16.", steps: ["Ardışık → ortanca = ortalama.", "x+4 = 20."], whyOthersWrong: ["Simetrik dizide ortanca = ortalama."] }, 3),
    Q("matematik-mat-istatistik-119", "Bir dizide 10 sayının ortalaması 15'tir. Her sayı 3 artırılırsa yeni ortalama kaç olur?",
      ["18", "15", "45", "48", "12"], 0, "Her veri +3 → ortalama +3 = 18.",
      { short: "15 + 3 = 18.", steps: ["Sabit ekleme ortalamayı aynı kadar artırır.", "= 18."], whyOthersWrong: ["Her değere +3 → ortalama +3."] }, 3),
    Q("matematik-mat-istatistik-120", "8, 10, 12, x dizisinin ortalaması, medyanına eşit ise x kaçtır? (x en büyük)",
      ["14", "12", "10", "16", "11"], 0, "Medyan (10+12)/2 = 11; ortalama (30+x)/4 = 11 → x = 14.",
      { short: "x = 14.", steps: ["Medyan 11.", "(30+x)/4 = 11 → x = 14."], whyOthersWrong: ["İki koşul eşitlenir."] }, 3),
    Q("matematik-mat-istatistik-121", "Bir sınıfta 25 öğrencinin not ortalaması 60'tır. Öğretmen bir notu 40 yerine yanlışlıkla 90 girdiğini fark ediyor. Doğru ortalama kaçtır?",
      ["58", "60", "62", "59", "56"], 0, "Fazla girilen 50; toplam 25·60 = 1500 − 50 = 1450; 1450/25 = 58.",
      { short: "1450/25 = 58.", steps: ["Toplam 1500, 50 fazla.", "1450/25 = 58."], whyOthersWrong: ["Hatalı fazlalık toplamdan düşülür."] }, 3),
    Q("matematik-mat-istatistik-122", "Bir daire grafiğinde 'Matematik' dilimi %30 ise bu dilimin merkez açısı kaç derecedir?",
      ["108", "30", "120", "90", "150"], 0, "%30 · 360 = 0,30·360 = 108°.",
      { short: "0,30·360 = 108°.", steps: ["Yüzde · 360.", "= 108°."], whyOthersWrong: ["Merkez açı = yüzde·360."] }, 3),
    Q("matematik-mat-istatistik-123", "5 sayının ortalaması 20'dir. Bu sayılardan ikisinin ortalaması 15 ise geri kalan üçünün ortalaması kaçtır?",
      ["70/3", "25", "23", "20", "22"], 0, "Toplam 100; iki sayı 30; kalan 70; 70/3 ≈ 23,3 → 70/3.",
      { short: "70/3.", steps: ["Toplam 100 − 30 = 70.", "70/3."], whyOthersWrong: ["Kalan toplam / kalan adet."] }, 3),
    Q("matematik-mat-istatistik-124", "Ardışık üç tam sayının ortalaması 15 ise en büyüğü kaçtır?",
      ["16", "15", "14", "17", "18"], 0, "Ortanca = ortalama = 15; sayılar 14, 15, 16; en büyük 16.",
      { short: "En büyük 16.", steps: ["Ortanca 15.", "14, 15, 16."], whyOthersWrong: ["Ardışıkta ortanca = ortalama."] }, 3),
    Q("matematik-mat-istatistik-125", "Bir dizide 6 sayının ortalaması 9'dur. Diziye eklenen bir sayı ile ortalama 10 olur. Eklenen sayı kaçtır?",
      ["16", "10", "15", "9", "12"], 0, "Eski toplam 54; yeni toplam 7·10 = 70; eklenen 70 − 54 = 16.",
      { short: "70 − 54 = 16.", steps: ["Eski toplam 6·9 = 54.", "Yeni 7·10 = 70 → 16."], whyOthersWrong: ["Yeni toplam − eski toplam."] }, 3)
  ]);
})();
