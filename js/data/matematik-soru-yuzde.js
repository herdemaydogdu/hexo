/* ============================================================
   MATEMATİK — Yüzde, Kâr-Zarar ve Faiz: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-yuzde: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-yuzde", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-yuzde", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-yuzde-101", "200'ün %10'u kaçtır?",
      ["20", "10", "2", "200", "100"], 0, "200 · 10/100 = 20.",
      { short: "200·0,10 = 20.", steps: ["%10 = 10/100.", "200·10/100 = 20."], whyOthersWrong: ["%10, onda birdir."] }, 1),
    Q("matematik-mat-yuzde-102", "Bir malın fiyatı 100 TL'den 120 TL'ye çıktı. Artış yüzde kaçtır?",
      ["20", "120", "12", "80", "2"], 0, "Artış 20; 20/100 = %20.",
      { short: "20/100 = %20.", steps: ["Artış = 120 − 100 = 20.", "20/100 = %20."], whyOthersWrong: ["Artış ilk fiyata oranlanır."] }, 1),
    Q("matematik-mat-yuzde-103", "Bir sınıftaki 40 öğrencinin %25'i kızdır. Kaç kız öğrenci vardır?",
      ["10", "25", "15", "20", "8"], 0, "40 · 25/100 = 10.",
      { short: "40·0,25 = 10.", steps: ["%25 = 1/4.", "40/4 = 10."], whyOthersWrong: ["%25 dörtte birdir."] }, 1),
    Q("matematik-mat-yuzde-104", "Bir ürün %50 indirimle 60 TL'ye satılıyor. İndirimsiz fiyatı kaç TL'dir?",
      ["120", "30", "90", "110", "100"], 0, "%50 indirim → yarı fiyat; 60·2 = 120.",
      { short: "60·2 = 120.", steps: ["%50 indirim → fiyatın yarısı.", "Asıl = 120."], whyOthersWrong: ["İndirimli fiyat yarısıdır."] }, 1),
    Q("matematik-mat-yuzde-105", "0,3 sayısı yüzde kaça eşittir?",
      ["%30", "%3", "%0,3", "%300", "%33"], 0, "0,3 = 30/100 = %30.",
      { short: "0,3 = %30.", steps: ["Ondalığı 100 ile çarp.", "= %30."], whyOthersWrong: ["0,3 = 30/100'dür."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-yuzde-106", "Bir esnaf 80 TL'ye aldığı malı %25 kârla satıyor. Satış fiyatı kaç TL'dir?",
      ["100", "105", "20", "60", "95"], 0, "Kâr 80·25/100 = 20; satış 80+20 = 100.",
      { short: "80 + 20 = 100.", steps: ["Kâr = 80·0,25 = 20.", "Satış = 100."], whyOthersWrong: ["Kâr maliyete eklenir."] }, 2),
    Q("matematik-mat-yuzde-107", "Bir malın fiyatı önce %20 artırılıyor. 200 TL'lik malın yeni fiyatı kaç TL olur?",
      ["240", "220", "160", "180", "260"], 0, "200·1,20 = 240.",
      { short: "200·1,20 = 240.", steps: ["%20 artış → 1,20 katı.", "= 240."], whyOthersWrong: ["Artış fiyata eklenir."] }, 2),
    Q("matematik-mat-yuzde-108", "Bir sayının %40'ı 60 ise bu sayı kaçtır?",
      ["150", "24", "100", "120", "240"], 0, "x·40/100 = 60 → x = 150.",
      { short: "x = 60·100/40 = 150.", steps: ["0,40x = 60.", "x = 150."], whyOthersWrong: ["Tersine orantı kurulur."] }, 2),
    Q("matematik-mat-yuzde-109", "120 TL'ye alınan bir mal 90 TL'ye satılıyor. Zarar yüzde kaçtır?",
      ["25", "30", "20", "75", "33"], 0, "Zarar 30; 30/120 = %25.",
      { short: "30/120 = %25.", steps: ["Zarar = 120 − 90 = 30.", "30/120 = %25."], whyOthersWrong: ["Zarar maliyete oranlanır."] }, 2),
    Q("matematik-mat-yuzde-110", "Bir ürün %20 indirimle 160 TL'ye satılıyor. İndirimsiz fiyatı kaç TL'dir?",
      ["200", "192", "180", "128", "210"], 0, "0,80·x = 160 → x = 200.",
      { short: "0,80x = 160 → x = 200.", steps: ["%20 indirim → 0,80 katı.", "x = 160/0,80 = 200."], whyOthersWrong: ["İndirimli fiyat asılın %80'idir."] }, 2),
    Q("matematik-mat-yuzde-111", "10000 TL, yıllık %12 basit faizle bankaya yatırılıyor. 1 yıl sonra faiz kaç TL olur?",
      ["1200", "12000", "120", "11200", "2400"], 0, "10000·12/100 = 1200.",
      { short: "10000·0,12 = 1200.", steps: ["Faiz = ana·oran·süre.", "= 1200."], whyOthersWrong: ["1 yıllık faiz 1200'dür."] }, 2),
    Q("matematik-mat-yuzde-112", "Bir okulda 600 öğrencinin %15'i bisikletle geliyor. Kaç öğrenci bisikletle gelir?",
      ["90", "60", "150", "85", "120"], 0, "600·15/100 = 90.",
      { short: "600·0,15 = 90.", steps: ["%15 = 15/100.", "600·15/100 = 90."], whyOthersWrong: ["Yüzde hesabı 90 verir."] }, 2),
    Q("matematik-mat-yuzde-113", "Bir maaş %10 zamlanınca 4400 TL oluyor. Zamdan önceki maaş kaç TL'dir?",
      ["4000", "3960", "4360", "3900", "4040"], 0, "1,10·x = 4400 → x = 4000.",
      { short: "1,10x = 4400 → x = 4000.", steps: ["%10 zam → 1,10 katı.", "x = 4000."], whyOthersWrong: ["4400 zamlı tutardır."] }, 2),
    Q("matematik-mat-yuzde-114", "Bir malın %30'u 90 TL ise tamamının fiyatı kaç TL'dir?",
      ["300", "270", "120", "180", "330"], 0, "0,30·x = 90 → x = 300.",
      { short: "x = 90/0,30 = 300.", steps: ["%30 → 90.", "Tamamı = 300."], whyOthersWrong: ["%30'dan tamamı bulunur."] }, 2),
    Q("matematik-mat-yuzde-115", "60 sayısı 75 sayısının yüzde kaçıdır?",
      ["80", "75", "25", "125", "15"], 0, "60/75 = 0,80 = %80.",
      { short: "60/75 = %80.", steps: ["Parça/bütün = 60/75.", "= 0,80 = %80."], whyOthersWrong: ["Oran yüzdeye çevrilir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-yuzde-116", "Bir malın fiyatı önce %20 artırılıyor, sonra %20 indiriliyor. Son fiyat ilk fiyatın yüzde kaçıdır?",
      ["96", "100", "104", "98", "92"], 0, "1,20·0,80 = 0,96 → %96.",
      { short: "1,20·0,80 = %96.", steps: ["Art arda yüzdeler çarpılır.", "0,96 → %96."], whyOthersWrong: ["Artış ve indirim eşitlenmez."] }, 3),
    Q("matematik-mat-yuzde-117", "Bir esnaf maliyetinin %25 fazlasına etiketlediği malı, etiket fiyatından %10 indirim yaparak satıyor. Maliyet 200 TL ise kâr kaç TL'dir?",
      ["25", "50", "30", "45", "20"], 0, "Etiket 250; satış 250·0,90 = 225; kâr 225 − 200 = 25.",
      { short: "225 − 200 = 25.", steps: ["Etiket = 200·1,25 = 250.", "Satış = 250·0,90 = 225.", "Kâr = 25."], whyOthersWrong: ["İndirim etiketten yapılır."] }, 3),
    Q("matematik-mat-yuzde-118", "Bir sınıfta öğrencilerin %60'ı kız, kızların %25'i gözlüklüdür. Sınıfın yüzde kaçı gözlüklü kızdır?",
      ["15", "25", "60", "85", "20"], 0, "0,60·0,25 = 0,15 → %15.",
      { short: "0,60·0,25 = %15.", steps: ["Gözlüklü kız = tüm·0,60·0,25.", "= %15."], whyOthersWrong: ["İki oran çarpılır."] }, 3),
    Q("matematik-mat-yuzde-119", "8000 TL, yıllık %15 basit faizle 8 ay süreyle yatırılıyor. Elde edilen faiz kaç TL'dir?",
      ["800", "1200", "960", "600", "1000"], 0, "8000·0,15·(8/12) = 1200·(2/3) = 800.",
      { short: "8000·0,15·8/12 = 800.", steps: ["Yıllık faiz = 1200.", "8 ay → 1200·8/12 = 800."], whyOthersWrong: ["Süre yıl cinsinden alınır."] }, 3),
    Q("matematik-mat-yuzde-120", "Bir ürünün fiyatı iki yıl üst üste %10 artarsa, başlangıçta 1000 TL olan ürün iki yıl sonra kaç TL olur?",
      ["1210", "1200", "1100", "1220", "1320"], 0, "1000·1,10·1,10 = 1210.",
      { short: "1000·1,21 = 1210.", steps: ["Bileşik artış: 1,10².", "1000·1,21 = 1210."], whyOthersWrong: ["İki yıl %20 değil, bileşiktir."] }, 3),
    Q("matematik-mat-yuzde-121", "Bir malın satış fiyatı 240 TL olup bu fiyat %20 kâr içermektedir. Malın maliyeti kaç TL'dir?",
      ["200", "192", "220", "48", "210"], 0, "1,20·maliyet = 240 → maliyet = 200.",
      { short: "1,20·m = 240 → m = 200.", steps: ["Satış = maliyet·1,20.", "m = 240/1,20 = 200."], whyOthersWrong: ["Kâr maliyet üzerinden hesaplanır."] }, 3),
    Q("matematik-mat-yuzde-122", "Su buharlaştığında bir çözeltinin kütlesi %20 azalıyor. 250 g çözeltiden geriye kaç gram kalır?",
      ["200", "230", "50", "210", "220"], 0, "250·0,80 = 200.",
      { short: "250·0,80 = 200.", steps: ["%20 azalma → 0,80 katı.", "= 200 g."], whyOthersWrong: ["Kalan, başlangıcın %80'idir."] }, 3),
    Q("matematik-mat-yuzde-123", "Bir öğrencinin bir sınavdaki net sayısı, önceki sınava göre 40'tan 50'ye çıkmıştır. Bu artış yüzde kaçtır?",
      ["25", "20", "10", "50", "80"], 0, "Artış 10; 10/40 = %25.",
      { short: "10/40 = %25.", steps: ["Artış = 10.", "10/40 = %25."], whyOthersWrong: ["Artış eski değere oranlanır."] }, 3),
    Q("matematik-mat-yuzde-124", "Bir tüccar bir malı %20 kârla satınca 60 TL kâr ediyor. Malın satış fiyatı kaç TL'dir?",
      ["360", "300", "72", "240", "320"], 0, "Maliyet·0,20 = 60 → maliyet 300; satış 300+60 = 360.",
      { short: "Maliyet 300 → satış 360.", steps: ["0,20·m = 60 → m = 300.", "Satış = 300+60 = 360."], whyOthersWrong: ["Önce maliyet bulunur."] }, 3),
    Q("matematik-mat-yuzde-125", "Bir malın fiyatı %25 artırılınca 250 TL oluyor. Bu mala %10 indirim uygulanırsa son fiyat kaç TL olur?",
      ["225", "200", "180", "220", "240"], 0, "Artıştan önce 250/1,25 = 200; %10 indirim 250'ye değil... son fiyat = 250·0,90 = 225.",
      { short: "250·0,90 = 225.", steps: ["Artmış fiyat 250.", "%10 indirim: 250·0,90 = 225."], whyOthersWrong: ["İndirim güncel (250) fiyata uygulanır."] }, 3)
  ]);
})();
