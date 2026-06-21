/* ============================================================
   MATEMATİK — Rasyonel Sayılar: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; aritmetik elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-rasyonel: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-rasyonel", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-rasyonel", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-rasyonel-101", "1/2 + 1/3 işleminin sonucu kaçtır?",
      ["1/5", "2/5", "5/6", "1/6", "2/3"], 2, "Payda 6: 3/6 + 2/6 = 5/6.",
      { short: "3/6 + 2/6 = 5/6.", steps: ["Ortak payda 6.", "3/6 + 2/6 = 5/6."], whyOthersWrong: ["Paydalar toplanmaz; 5/6 doğru."] }, 1),
    Q("matematik-mat-rasyonel-102", "3/4 − 1/4 işleminin sonucu kaçtır?",
      ["1/2", "1/4", "3/4", "1", "3/8"], 0, "Paydalar eşit: (3−1)/4 = 2/4 = 1/2.",
      { short: "2/4 = 1/2.", steps: ["Paylar çıkar: 3−1=2.", "2/4 sadeleşir → 1/2."], whyOthersWrong: ["Pay çıkarılır, payda aynı kalır."] }, 1),
    Q("matematik-mat-rasyonel-103", "2/3 · 3/5 işleminin sonucu kaçtır?",
      ["2/5", "6/8", "1/5", "5/6", "2/8"], 0, "Paylar ve paydalar çarpılır: 6/15 = 2/5.",
      { short: "6/15 = 2/5.", steps: ["2·3=6, 3·5=15.", "6/15 sadeleşir → 2/5."], whyOthersWrong: ["Çarpmada çapraz toplanmaz."] }, 1),
    Q("matematik-mat-rasyonel-104", "(1/2) ÷ (1/4) işleminin sonucu kaçtır?",
      ["1/8", "2", "1/2", "8", "4"], 1, "Bölme = ters ile çarpma: 1/2 · 4/1 = 2.",
      { short: "1/2 · 4 = 2.", steps: ["Bölen ters çevrilir: 1/4 → 4.", "1/2 · 4 = 2."], whyOthersWrong: ["Bölme doğrudan çarpma değildir."] }, 1),
    Q("matematik-mat-rasyonel-105", "Aşağıdakilerden hangisi <b>rasyonel sayı değildir</b>?",
      ["1/2", "0,75", "√2", "−3", "0,5"], 2, "√2 = 1,4142... ne biter ne devreder; a/b biçiminde yazılamaz.",
      { short: "√2 irrasyoneldir.", steps: ["Rasyonel = a/b (b≠0).", "√2 bu biçimde yazılamaz."], whyOthersWrong: ["−3=−3/1; 0,75 ve 0,5 kesre çevrilir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-rasyonel-106", "2/3 + 1/6 işleminin sonucu kaçtır?",
      ["3/9", "5/6", "1/2", "2/9", "4/9"], 1, "Payda 6: 4/6 + 1/6 = 5/6.",
      { short: "4/6 + 1/6 = 5/6.", steps: ["2/3 = 4/6.", "4/6 + 1/6 = 5/6."], whyOthersWrong: ["Ortak payda alınmadan toplanmaz."] }, 2),
    Q("matematik-mat-rasyonel-107", "5/6 − 2/3 işleminin sonucu kaçtır?",
      ["1/2", "1/6", "1/3", "3/9", "7/6"], 1, "Payda 6: 5/6 − 4/6 = 1/6.",
      { short: "5/6 − 4/6 = 1/6.", steps: ["2/3 = 4/6.", "5/6 − 4/6 = 1/6."], whyOthersWrong: ["1/6 doğru fark."] }, 2),
    Q("matematik-mat-rasyonel-108", "2/3 · 9/4 işleminin sonucu kaçtır?",
      ["3/2", "2/3", "3/4", "6/5", "9/4"], 0, "18/12 = 3/2 (önce sadeleştirme: 2/4·9/3 = 1/2·3 = 3/2).",
      { short: "18/12 = 3/2.", steps: ["2·9=18, 3·4=12.", "18/12 = 3/2."], whyOthersWrong: ["Sadeleştirme 3/2 verir."] }, 2),
    Q("matematik-mat-rasyonel-109", "(3/4) ÷ (6/5) işleminin sonucu kaçtır?",
      ["5/8", "8/5", "3/5", "5/6", "9/10"], 0, "3/4 · 5/6 = 15/24 = 5/8.",
      { short: "3/4 · 5/6 = 5/8.", steps: ["6/5 ters → 5/6.", "15/24 = 5/8."], whyOthersWrong: ["Bölen ters çevrilmelidir."] }, 2),
    Q("matematik-mat-rasyonel-110", "1/2 + 2/3 − 1/4 işleminin sonucu kaçtır?",
      ["11/12", "13/12", "7/12", "5/12", "1"], 0, "Payda 12: 6/12 + 8/12 − 3/12 = 11/12.",
      { short: "6/12+8/12−3/12 = 11/12.", steps: ["Ortak payda 12.", "6+8−3 = 11 → 11/12."], whyOthersWrong: ["İşlem sırası ve payda önemli."] }, 2),
    Q("matematik-mat-rasyonel-111", "2/3, 3/4 ve 5/8 sayılarından <b>en küçüğü</b> hangisidir?",
      ["2/3", "3/4", "5/8", "Üçü eşittir", "1"], 2, "Payda 24: 16/24, 18/24, 15/24 → en küçük 15/24 = 5/8.",
      { short: "5/8 = 15/24 en küçük.", steps: ["Ortak payda 24.", "16/24, 18/24, 15/24."], whyOthersWrong: ["3/4 en büyük, 5/8 en küçük."] }, 2),
    Q("matematik-mat-rasyonel-112", "0,25 + 1/3 işleminin sonucu kaçtır?",
      ["7/12", "5/12", "1/7", "7/24", "1/2"], 0, "0,25 = 1/4; 3/12 + 4/12 = 7/12.",
      { short: "1/4 + 1/3 = 7/12.", steps: ["0,25 = 1/4.", "3/12 + 4/12 = 7/12."], whyOthersWrong: ["Ondalık önce kesre çevrilir."] }, 2),
    Q("matematik-mat-rasyonel-113", "3/5 kesrinin yalnızca payına 4 eklenirse kesir kaç olur?",
      ["7/5", "3/9", "7/9", "4/5", "3/5"], 0, "Pay 3+4=7, payda 5 → 7/5.",
      { short: "(3+4)/5 = 7/5.", steps: ["Yalnız pay değişir.", "Payda 5 kalır → 7/5."], whyOthersWrong: ["Paydaya da eklemek yanlış."] }, 2),
    Q("matematik-mat-rasyonel-114", "(1/2 + 1/3) / (1/2 − 1/3) işleminin sonucu kaçtır?",
      ["5", "1/5", "6", "5/6", "1"], 0, "Pay 5/6, payda 1/6 → (5/6)/(1/6) = 5.",
      { short: "(5/6)/(1/6) = 5.", steps: ["Üst: 5/6, alt: 1/6.", "5/6 ÷ 1/6 = 5."], whyOthersWrong: ["Bileşik kesirde önce pay/payda ayrı hesaplanır."] }, 2),
    Q("matematik-mat-rasyonel-115", "Bir sayının 2/3'ü 12 ise bu sayı kaçtır?",
      ["8", "18", "24", "16", "36"], 1, "x·2/3 = 12 → x = 12·3/2 = 18.",
      { short: "x = 12·3/2 = 18.", steps: ["x·2/3 = 12.", "x = 18."], whyOthersWrong: ["18'in 2/3'ü = 12."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-rasyonel-116", "Devirli ondalık 0,4242... (0,<u>42</u>) sayısının en sade kesir biçimi nedir?",
      ["42/100", "14/33", "42/90", "21/50", "7/15"], 1, "İki basamak devrediyor → 42/99; sadeleşir: 42/99 = 14/33.",
      { short: "42/99 = 14/33.", steps: ["Devir 2 basamak → payda 99.", "42/99 = 14/33 (÷3)."], whyOthersWrong: ["Devirli sayıda payda 9'lardan oluşur."] }, 3),
    Q("matematik-mat-rasyonel-117", "0,1666... (0,1<u>6</u>) sayısının kesir biçimi nedir?",
      ["1/6", "16/100", "16/90", "1/60", "1/16"], 0, "100x−10x = 90x = 16,6...−1,6... = 15 → x = 15/90 = 1/6.",
      { short: "90x = 15 → x = 1/6.", steps: ["x=0,1666; 10x=1,666; 100x=16,666.", "90x=15 → 1/6."], whyOthersWrong: ["Devreden tek basamak (6) ayrı ele alınır."] }, 3),
    Q("matematik-mat-rasyonel-118", "1 / (1 + 1/(1 + 1/2)) işleminin sonucu kaçtır?",
      ["3/5", "5/3", "2/3", "2/5", "1"], 0, "İçten: 1+1/2 = 3/2; 1/(3/2)=2/3; 1+2/3=5/3; 1/(5/3)=3/5.",
      { short: "1/(5/3) = 3/5.", steps: ["1+1/2 = 3/2.", "1+2/3 = 5/3.", "1/(5/3) = 3/5."], whyOthersWrong: ["İçeriden dışarıya hesaplanır."] }, 3),
    Q("matematik-mat-rasyonel-119", "x/(x+1) = 3/4 olduğuna göre x kaçtır?",
      ["3", "4", "1", "6", "2"], 0, "İçler-dışlar: 4x = 3(x+1) → 4x = 3x+3 → x = 3.",
      { short: "4x = 3x+3 → x = 3.", steps: ["Çapraz çarpım: 4x = 3x+3.", "x = 3."], whyOthersWrong: ["3/4 yalnız x=3 ile sağlanır."] }, 3),
    Q("matematik-mat-rasyonel-120", "Bir havuzun ilk gün 1/3'ü, ikinci gün kalanın yarısı dolduruluyor. Havuzun kaçı boş kalır?",
      ["1/3", "1/6", "2/3", "1/2", "1/4"], 0, "Gün1: 1/3 dolu, 2/3 boş. Gün2: 2/3'ün yarısı = 1/3 dolar. Toplam dolu 2/3, boş 1/3.",
      { short: "Boş kalan 1/3.", steps: ["Kalan = 2/3.", "Yarısı = 1/3 dolar.", "Boş: 2/3 − 1/3 = 1/3."], whyOthersWrong: ["'Kalanın yarısı' tüm havuzun yarısı değildir."] }, 3),
    Q("matematik-mat-rasyonel-121", "2/5 < x/15 < 3/5 eşitsizliğini sağlayan kaç tane <b>tam sayı</b> x vardır?",
      ["1", "2", "3", "4", "0"], 1, "2/5=6/15, 3/5=9/15 → 6 < x < 9 → x = 7, 8 → 2 tane.",
      { short: "6 < x < 9 → 2 tam sayı.", steps: ["Payda 15'e çevir: 6/15 ve 9/15.", "x = 7, 8."], whyOthersWrong: ["6 ve 9 sınır dışıdır."] }, 3),
    Q("matematik-mat-rasyonel-122", "(3/4 − 2/3) / (1/2) işleminin sonucu kaçtır?",
      ["1/6", "1/12", "1/24", "1/2", "2/3"], 0, "Üst: 9/12 − 8/12 = 1/12; (1/12)/(1/2) = 1/12 · 2 = 1/6.",
      { short: "(1/12)/(1/2) = 1/6.", steps: ["3/4 − 2/3 = 1/12.", "1/12 · 2 = 1/6."], whyOthersWrong: ["Önce parantez içi hesaplanır."] }, 3),
    Q("matematik-mat-rasyonel-123", "a/b = 2/3 olduğuna göre (2a + b)/(a + 2b) ifadesinin değeri kaçtır?",
      ["7/8", "2/3", "8/7", "1", "3/4"], 0, "a=2k, b=3k al: (4k+3k)/(2k+6k) = 7k/8k = 7/8.",
      { short: "(4k+3k)/(2k+6k) = 7/8.", steps: ["a=2k, b=3k.", "Pay 7k, payda 8k → 7/8."], whyOthersWrong: ["Oran sabit; değer 7/8."] }, 3),
    Q("matematik-mat-rasyonel-124", "1/2 + 1/6 + 1/12 + 1/20 toplamı kaçtır?",
      ["4/5", "5/6", "3/4", "1", "9/20"], 0, "Terimler 1/(n(n+1)) = 1/n − 1/(n+1); teleskopik: 1 − 1/5 = 4/5.",
      { short: "1 − 1/5 = 4/5.", steps: ["1/2+1/6 = 2/3; +1/12 = 3/4; +1/20 = 4/5.", "Teleskopik: 1−1/5."], whyOthersWrong: ["Teleskopik sadeleşme 4/5 verir."] }, 3),
    Q("matematik-mat-rasyonel-125", "Bir işçi bir işin saatte 1/4'ünü, diğeri 1/6'sını yapıyor. İkisi birlikte çalışırsa işin tamamı kaç saatte biter?",
      ["12/5", "5/12", "10", "2", "5/2"], 0, "Birlikte hız 1/4 + 1/6 = 5/12 (iş/saat); süre = 1 / (5/12) = 12/5 saat.",
      { short: "Hız 5/12 → süre 12/5 saat.", steps: ["1/4 + 1/6 = 5/12.", "Süre = 12/5 = 2,4 saat."], whyOthersWrong: ["Süre, hızların tersidir."] }, 3)
  ]);
})();
