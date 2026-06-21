/* ============================================================
   MATEMATİK — Yaş Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-yas: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-yas", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-yas", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-yas-101", "Ali 12 yaşındadır. 5 yıl sonra kaç yaşında olur?",
      ["17", "7", "16", "18", "15"], 0, "12 + 5 = 17.",
      { short: "12 + 5 = 17.", steps: ["Gelecek yaş = şimdi + yıl.", "= 17."], whyOthersWrong: ["'Sonra' eklemedir."] }, 1),
    Q("matematik-mat-yas-102", "Bir kişi şu an 20 yaşındaysa 8 yıl önce kaç yaşındaydı?",
      ["12", "28", "16", "10", "13"], 0, "20 − 8 = 12.",
      { short: "20 − 8 = 12.", steps: ["Geçmiş yaş = şimdi − yıl.", "= 12."], whyOthersWrong: ["'Önce' çıkarmadır."] }, 1),
    Q("matematik-mat-yas-103", "Bir babanın yaşı oğlunun yaşının 3 katıdır. Oğul 9 yaşındaysa baba kaç yaşındadır?",
      ["27", "12", "3", "18", "30"], 0, "3 · 9 = 27.",
      { short: "3 · 9 = 27.", steps: ["Baba = 3·oğul.", "= 27."], whyOthersWrong: ["'Katı' çarpmadır."] }, 1),
    Q("matematik-mat-yas-104", "İki kardeşin yaşları toplamı 25'tir. Biri 14 ise diğeri kaç yaşındadır?",
      ["11", "39", "9", "13", "12"], 0, "25 − 14 = 11.",
      { short: "25 − 14 = 11.", steps: ["Diğeri = toplam − bilinen.", "= 11."], whyOthersWrong: ["Çıkarma yapılır."] }, 1),
    Q("matematik-mat-yas-105", "Ayşe annesinden 24 yaş küçüktür. Anne 35 yaşındaysa Ayşe kaç yaşındadır?",
      ["11", "59", "13", "24", "12"], 0, "35 − 24 = 11.",
      { short: "35 − 24 = 11.", steps: ["Ayşe = anne − fark.", "= 11."], whyOthersWrong: ["Yaş farkı çıkarılır."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-yas-106", "Bir baba ile oğlunun yaşları toplamı 40'tır. Baba oğlundan 30 yaş büyükse oğul kaç yaşındadır?",
      ["5", "35", "10", "15", "7"], 0, "Oğul = (40−30)/2 = 5.",
      { short: "(40−30)/2 = 5.", steps: ["Oğul x, baba x+30.", "2x+30 = 40 → x = 5."], whyOthersWrong: ["Baba 35 olur."] }, 2),
    Q("matematik-mat-yas-107", "Şu an 8 yaşında olan bir çocuğun 6 yıl sonraki yaşı, bugünkü yaşının kaç katı olur?",
      ["1,75", "2", "1,5", "3", "1,25"], 0, "14/8 = 1,75.",
      { short: "14/8 = 1,75.", steps: ["6 yıl sonra: 14.", "14/8 = 1,75."], whyOthersWrong: ["Oran bölme ile bulunur."] }, 2),
    Q("matematik-mat-yas-108", "Bir annenin yaşı kızının yaşının 4 katıdır. Yaşları toplamı 50 ise anne kaç yaşındadır?",
      ["40", "10", "30", "45", "35"], 0, "x + 4x = 50 → x = 10 → anne 40.",
      { short: "5x = 50 → anne 40.", steps: ["Kız x, anne 4x.", "5x = 50 → x = 10, anne = 40."], whyOthersWrong: ["Kız 10 olur."] }, 2),
    Q("matematik-mat-yas-109", "İki kardeşin yaşları farkı 5'tir. Küçük kardeş 12 yaşındaysa 3 yıl sonra büyük kardeş kaç yaşında olur?",
      ["20", "17", "15", "22", "19"], 0, "Büyük şimdi 17; 3 yıl sonra 20.",
      { short: "17 + 3 = 20.", steps: ["Büyük = 12 + 5 = 17.", "3 yıl sonra 20."], whyOthersWrong: ["Önce büyük yaş, sonra +3."] }, 2),
    Q("matematik-mat-yas-110", "Bir kişinin yaşının 2 katının 5 fazlası 35 ise bu kişi kaç yaşındadır?",
      ["15", "20", "12,5", "18", "10"], 0, "2x + 5 = 35 → x = 15.",
      { short: "2x = 30 → x = 15.", steps: ["2x + 5 = 35.", "x = 15."], whyOthersWrong: ["Önce 5 çıkarılır."] }, 2),
    Q("matematik-mat-yas-111", "Bugün Can 10, kardeşi 4 yaşındadır. Kaç yıl sonra Can'ın yaşı kardeşinin yaşının 2 katı olur?",
      ["2", "6", "4", "8", "3"], 0, "10+t = 2(4+t) → 10+t = 8+2t → t = 2.",
      { short: "t = 2.", steps: ["10+t = 2(4+t).", "10+t = 8+2t → t = 2."], whyOthersWrong: ["Yıl ikisine de eklenir."] }, 2),
    Q("matematik-mat-yas-112", "Bir babanın yaşı, iki çocuğunun yaşları toplamına eşittir. Çocuklar 8 ve 12 yaşındaysa baba kaç yaşındadır?",
      ["20", "24", "16", "32", "10"], 0, "8 + 12 = 20.",
      { short: "8 + 12 = 20.", steps: ["Baba = çocukların toplamı.", "= 20."], whyOthersWrong: ["Doğrudan toplamdır."] }, 2),
    Q("matematik-mat-yas-113", "Bir öğretmenin yaşı, öğrencisinin yaşının 3 katından 2 eksiktir. Öğrenci 12 yaşındaysa öğretmen kaç yaşındadır?",
      ["34", "38", "36", "30", "32"], 0, "3·12 − 2 = 34.",
      { short: "36 − 2 = 34.", steps: ["3·12 = 36.", "36 − 2 = 34."], whyOthersWrong: ["'2 eksik' çıkarmadır."] }, 2),
    Q("matematik-mat-yas-114", "5 yıl önce yaşı 18 olan bir kişinin 4 yıl sonraki yaşı kaç olur?",
      ["27", "22", "23", "26", "29"], 0, "Şimdi 23; 4 yıl sonra 27.",
      { short: "23 + 4 = 27.", steps: ["Şimdi = 18 + 5 = 23.", "4 yıl sonra 27."], whyOthersWrong: ["Önce bugünkü yaş bulunur."] }, 2),
    Q("matematik-mat-yas-115", "Üç kardeşin yaşları ardışık çift sayılardır. Toplamları 36 ise en büyüğü kaç yaşındadır?",
      ["14", "12", "10", "16", "13"], 0, "Ortanca 12 → 10, 12, 14; en büyük 14.",
      { short: "Ortanca 12 → en büyük 14.", steps: ["Toplam/3 = 12.", "10, 12, 14."], whyOthersWrong: ["En büyük 14'tür."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-yas-116", "Bir babanın bugünkü yaşı oğlunun yaşının 4 katıdır. 5 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacaktır. Oğul bugün kaç yaşındadır?",
      ["10", "40", "15", "8", "12"], 0, "4x+5 = 3(x+5) → 4x+5 = 3x+15 → x = 10.",
      { short: "x = 10.", steps: ["Baba 4x.", "4x+5 = 3(x+5) → x = 10."], whyOthersWrong: ["5 yıl ikisine de eklenir."] }, 3),
    Q("matematik-mat-yas-117", "Bir anne ile kızının yaşları toplamı bugün 48'dir. 4 yıl önce annenin yaşı kızının yaşının 4 katıydı. Anne bugün kaç yaşındadır?",
      ["36", "12", "40", "32", "38"], 0, "Bugün kız k, anne 48−k. 4 yıl önce: (48−k)−4 = 4(k−4) → 44−k = 4k−16 → 60 = 5k → k = 12; anne = 36.",
      { short: "Kız 12, anne 36.", steps: ["Kız k, anne 48−k.", "44−k = 4(k−4) → 60 = 5k → k = 12.", "Anne = 48 − 12 = 36."], whyOthersWrong: ["Geçmişte yıl ikisinden de çıkarılır."] }, 3),
    Q("matematik-mat-yas-118", "Ahmet'in yaşı Mehmet'in yaşının 2 katıdır. 6 yıl sonra yaşları toplamı 42 olacaktır. Ahmet bugün kaç yaşındadır?",
      ["20", "10", "14", "24", "16"], 0, "2x+x+12 = 42 → 3x = 30 → x = 10 → Ahmet 2x = 20.",
      { short: "3x = 30 → Ahmet 20.", steps: ["Mehmet x, Ahmet 2x.", "(2x+6)+(x+6) = 42 → x = 10, Ahmet = 20."], whyOthersWrong: ["6 yıl her ikisine eklenir."] }, 3),
    Q("matematik-mat-yas-119", "Bir babanın yaşı oğlunun yaşının 5 katıdır. Aralarındaki yaş farkı 28 ise oğul kaç yaşındadır?",
      ["7", "35", "14", "5", "9"], 0, "5x − x = 4x = 28 → x = 7.",
      { short: "4x = 28 → x = 7.", steps: ["Fark = 5x − x = 4x.", "x = 7."], whyOthersWrong: ["Baba 35 olur."] }, 3),
    Q("matematik-mat-yas-120", "Bugün yaşları toplamı 30 olan iki kardeşin 5 yıl sonra yaşları toplamı kaç olur?",
      ["40", "35", "30", "45", "50"], 0, "Her birine 5 eklenir: 30 + 10 = 40.",
      { short: "30 + 2·5 = 40.", steps: ["İki kişiye de 5 yıl eklenir.", "Toplam +10 → 40."], whyOthersWrong: ["Toplama 5 değil 10 eklenir."] }, 3),
    Q("matematik-mat-yas-121", "10 yıl önce bir baba ile oğlunun yaşları toplamı 30'du. Bugün yaşları toplamı kaçtır?",
      ["50", "40", "30", "20", "45"], 0, "10 yılda iki kişiye toplam 20 eklenir: 30 + 20 = 50.",
      { short: "30 + 2·10 = 50.", steps: ["Her birine 10 yıl eklenir.", "Toplam +20 → 50."], whyOthersWrong: ["İki kişi olduğundan +20."] }, 3),
    Q("matematik-mat-yas-122", "Bir annenin yaşı kızının yaşının 3 katıdır. 8 yıl sonra annenin yaşı kızının yaşının 2 katı olacaktır. Anne bugün kaç yaşındadır?",
      ["24", "8", "16", "32", "20"], 0, "3x+8 = 2(x+8) → 3x+8 = 2x+16 → x = 8 → anne 3x = 24.",
      { short: "x = 8 → anne 24.", steps: ["Kız x, anne 3x.", "3x+8 = 2(x+8) → x = 8, anne = 24."], whyOthersWrong: ["Kız 8 olur."] }, 3),
    Q("matematik-mat-yas-123", "İki kardeşin bugünkü yaşları oranı 2/5'tir. Yaşları farkı 9 ise büyük kardeş kaç yaşındadır?",
      ["15", "6", "9", "12", "18"], 0, "2k ve 5k; fark 3k = 9 → k = 3 → büyük 5k = 15.",
      { short: "3k = 9 → büyük 15.", steps: ["Yaşlar 2k, 5k.", "5k−2k = 9 → k = 3, büyük = 15."], whyOthersWrong: ["Küçük 6 olur."] }, 3),
    Q("matematik-mat-yas-124", "Bir baba 30, oğlu 6 yaşındadır. Kaç yıl sonra babanın yaşı oğlunun yaşının 3 katı olur?",
      ["6", "3", "9", "12", "4"], 0, "30+t = 3(6+t) → 30+t = 18+3t → 12 = 2t → t = 6.",
      { short: "t = 6.", steps: ["30+t = 3(6+t).", "12 = 2t → t = 6."], whyOthersWrong: ["Yıl ikisine de eklenir."] }, 3),
    Q("matematik-mat-yas-125", "Üç kişinin yaş ortalaması 20'dir. Aralarından biri ayrılınca kalan ikisinin yaş ortalaması 22 olur. Ayrılan kişi kaç yaşındadır?",
      ["16", "20", "22", "24", "18"], 0, "Toplam 60; kalan ikili 44 → ayrılan 60 − 44 = 16.",
      { short: "60 − 44 = 16.", steps: ["3·20 = 60; 2·22 = 44.", "Ayrılan = 60 − 44 = 16."], whyOthersWrong: ["Ortalamadan toplamlar kullanılır."] }, 3)
  ]);
})();
