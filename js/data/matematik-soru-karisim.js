/* ============================================================
   MATEMATİK — Karışım Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-karisim: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-karisim", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-karisim", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-karisim-101", "100 gram tuzlu suyun %20'si tuzdur. Karışımda kaç gram tuz vardır?",
      ["20", "80", "5", "100", "10"], 0, "100 · 20/100 = 20 g.",
      { short: "100·0,20 = 20 g.", steps: ["%20 = tuz oranı.", "= 20 g."], whyOthersWrong: ["Tuz = miktar·oran."] }, 1),
    Q("matematik-mat-karisim-102", "200 gram karışımda 40 gram şeker varsa şeker yüzdesi kaçtır?",
      ["20", "40", "160", "10", "25"], 0, "40/200 = %20.",
      { short: "40/200 = %20.", steps: ["Şeker/karışım.", "= %20."], whyOthersWrong: ["Oran yüzdeye çevrilir."] }, 1),
    Q("matematik-mat-karisim-103", "%10'luk 50 gram tuzlu suda kaç gram tuz vardır?",
      ["5", "10", "45", "50", "15"], 0, "50 · 0,10 = 5 g.",
      { short: "50·0,10 = 5 g.", steps: ["%10 = 5 g.", "= 5."], whyOthersWrong: ["Tuz oranla bulunur."] }, 1),
    Q("matematik-mat-karisim-104", "30 gram tuz, 120 gram su ile karıştırılıyor. Karışım kaç gramdır?",
      ["150", "90", "120", "30", "100"], 0, "30 + 120 = 150 g.",
      { short: "30 + 120 = 150.", steps: ["Karışım = tuz + su.", "= 150."], whyOthersWrong: ["Toplam kütle alınır."] }, 1),
    Q("matematik-mat-karisim-105", "150 gram karışımın %40'ı su ise su kaç gramdır?",
      ["60", "90", "40", "110", "50"], 0, "150 · 0,40 = 60 g.",
      { short: "150·0,40 = 60 g.", steps: ["%40 su.", "= 60."], whyOthersWrong: ["Su = miktar·oran."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-karisim-106", "%20'lik 100 gram tuzlu suya 100 gram saf su eklenirse yeni karışımın tuz yüzdesi kaç olur?",
      ["10", "20", "40", "15", "5"], 0, "Tuz 20 g sabit; toplam 200 g; 20/200 = %10.",
      { short: "20/200 = %10.", steps: ["Tuz = 20 g (değişmez).", "Toplam 200 → %10."], whyOthersWrong: ["Su eklemek tuzu seyreltir."] }, 2),
    Q("matematik-mat-karisim-107", "%30'luk 200 gram alkol-su karışımında kaç gram alkol vardır?",
      ["60", "140", "70", "30", "100"], 0, "200 · 0,30 = 60 g.",
      { short: "200·0,30 = 60 g.", steps: ["%30 alkol.", "= 60."], whyOthersWrong: ["Alkol oranla bulunur."] }, 2),
    Q("matematik-mat-karisim-108", "%25'lik tuzlu suda 30 gram tuz varsa karışım kaç gramdır?",
      ["120", "7,5", "75", "150", "100"], 0, "0,25·x = 30 → x = 120.",
      { short: "x = 30/0,25 = 120.", steps: ["Tuz oranı %25.", "x = 120 g."], whyOthersWrong: ["Karışım tuzdan bulunur."] }, 2),
    Q("matematik-mat-karisim-109", "%40'lık 50 gram ile %10'luk 50 gram tuzlu su karıştırılıyor. Yeni karışımın tuz yüzdesi kaçtır?",
      ["25", "30", "20", "50", "15"], 0, "Tuz 20+5 = 25 g; toplam 100 g; %25.",
      { short: "25/100 = %25.", steps: ["Tuzlar: 20 + 5 = 25 g.", "Toplam 100 → %25."], whyOthersWrong: ["Yüzdeler doğrudan ortalanmaz (eşit kütlede ortalama olur)."] }, 2),
    Q("matematik-mat-karisim-110", "%50'lik 80 gram karışımdan 40 gram alınırsa, alınan kısımda kaç gram tuz olur?",
      ["20", "40", "10", "50", "30"], 0, "Alınan kısım da %50; 40·0,50 = 20 g.",
      { short: "40·0,50 = 20 g.", steps: ["Karışım homojen, oran sabit.", "40·%50 = 20."], whyOthersWrong: ["Oran her parçada aynıdır."] }, 2),
    Q("matematik-mat-karisim-111", "%20'lik 300 gram tuzlu suyu %30'luk yapmak için kaç gram tuz eklenmelidir?",
      ["≈42,9", "30", "60", "90", "100"], 0, "Tuz 60; (60+x)/(300+x) = 0,30 → 60+x = 90+0,3x → 0,7x = 30 → x ≈ 42,9 g.",
      { short: "0,7x = 30 → x ≈ 42,9 g.", steps: ["Tuz 60 g.", "(60+x)/(300+x) = 0,3 → x ≈ 42,9."], whyOthersWrong: ["Eklenen tuz hem pay hem paydaya girer."] }, 2),
    Q("matematik-mat-karisim-112", "%60'lık 100 gram karışımdaki suyun kütlesi kaç gramdır?",
      ["40", "60", "100", "160", "20"], 0, "Su oranı %40; 100·0,40 = 40 g.",
      { short: "100·0,40 = 40 g.", steps: ["Su = 1 − 0,60 = %40.", "= 40 g."], whyOthersWrong: ["Su, kalan orandır."] }, 2),
    Q("matematik-mat-karisim-113", "%15'lik 200 gram ile %35'lik 200 gram karışım birleştirilirse yeni yüzde kaç olur?",
      ["25", "20", "30", "50", "15"], 0, "Eşit kütlede ortalama: (15+35)/2 = %25.",
      { short: "(15+35)/2 = %25.", steps: ["Eşit kütle → basit ortalama.", "= %25."], whyOthersWrong: ["Eşit kütlede yüzdelerin ortalaması alınır."] }, 2),
    Q("matematik-mat-karisim-114", "Bir tuzlu su karışımının %25'i tuzdur ve içinde 90 gram su vardır. Karışımda kaç gram tuz vardır?",
      ["30", "22,5", "60", "45", "120"], 0, "Su %75 = 90 g → toplam 120 g; tuz %25 = 30 g.",
      { short: "Toplam 120 → tuz 30 g.", steps: ["Su %75 = 90 → toplam 120.", "Tuz = 120·0,25 = 30."], whyOthersWrong: ["Su oranından toplam bulunur."] }, 2),
    Q("matematik-mat-karisim-115", "%40'lık 150 gram karışımdan bir miktar su buharlaşınca 100 gram karışım kalıyor. Yeni tuz yüzdesi kaçtır?",
      ["60", "40", "50", "20", "%26,7"], 0, "Tuz 60 g sabit; 60/100 = %60.",
      { short: "60/100 = %60.", steps: ["Tuz 60 g (buharlaşmaz).", "Toplam 100 → %60."], whyOthersWrong: ["Buharlaşan sudur, tuz sabittir."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-karisim-116", "%30'luk bir tuzlu sudan 60 gram su buharlaştırılınca tuz oranı %50 oluyor. Başlangıçta karışım kaç gramdı?",
      ["150", "120", "100", "180", "90"], 0, "Tuz = 0,3x sabit; (0,3x)/(x−60) = 0,5 → 0,3x = 0,5x−30 → 0,2x = 30 → x = 150.",
      { short: "0,2x = 30 → x = 150.", steps: ["Tuz 0,3x; su uçunca 0,3x/(x−60)=0,5.", "x = 150 g."], whyOthersWrong: ["Tuz miktarı sabit kalır."] }, 3),
    Q("matematik-mat-karisim-117", "%10'luk 400 gram tuzlu suyu %20'lik yapmak için kaç gram suyun buharlaşması gerekir?",
      ["200", "100", "40", "160", "80"], 0, "Tuz 40; 40/(400−x) = 0,20 → 400−x = 200 → x = 200 g.",
      { short: "400 − x = 200 → x = 200.", steps: ["Tuz 40 g.", "40/(400−x)=0,2 → x = 200."], whyOthersWrong: ["Buharlaşan su payda azaltır."] }, 3),
    Q("matematik-mat-karisim-118", "%20'lik 100 gram ile %50'lik 200 gram tuzlu su karıştırılıyor. Yeni karışımın tuz yüzdesi kaçtır?",
      ["40", "35", "30", "45", "25"], 0, "Tuz 20+100 = 120 g; toplam 300 g; 120/300 = %40.",
      { short: "120/300 = %40.", steps: ["Tuzlar: 20 + 100 = 120.", "Toplam 300 → %40."], whyOthersWrong: ["Farklı kütlede ağırlıklı ortalama gerekir."] }, 3),
    Q("matematik-mat-karisim-119", "%30'luk bir karışıma, eşit miktarda saf su eklenince tuz oranı kaç olur?",
      ["15", "30", "60", "20", "10"], 0, "100 g karışım, 100 g su; tuz 30, toplam 200 → %15.",
      { short: "30/200 = %15.", steps: ["Eşit su ekleme → kütle 2 katı.", "Oran yarıya iner: %15."], whyOthersWrong: ["Su ekleme oranı seyreltir."] }, 3),
    Q("matematik-mat-karisim-120", "Bir kapta %25'lik 80 gram tuzlu su var. Bundan 20 gram dökülüp yerine 20 gram saf su konulursa yeni tuz yüzdesi kaçtır?",
      ["18,75", "25", "20", "15", "22,5"], 0, "20 g dökülünce tuz 80·0,25 − 20·0,25 = 20−5 = 15 g; toplam yine 80 g; 15/80 = %18,75.",
      { short: "15/80 = %18,75.", steps: ["Dökülen 20 g'da 5 g tuz gider.", "Tuz 15 g, toplam 80 → %18,75."], whyOthersWrong: ["Dökülen kısımda da tuz vardır."] }, 3),
    Q("matematik-mat-karisim-121", "%40'lık karışımdan x gram ile %10'luk karışımdan y gram alınıp %25'lik karışım elde ediliyor. x/y oranı kaçtır?",
      ["1", "2", "1/2", "3/2", "2/3"], 0, "40x + 10y = 25(x+y) → 15x = 15y → x/y = 1.",
      { short: "x/y = 1.", steps: ["40x + 10y = 25(x+y).", "15x = 15y → x = y."], whyOthersWrong: ["Alaşım denklemi kurulur."] }, 3),
    Q("matematik-mat-karisim-122", "%50'lik 60 gram alkol-su karışımına kaç gram saf alkol eklenirse karışım %60 olur?",
      ["15", "10", "20", "12", "6"], 0, "Alkol 30; (30+x)/(60+x) = 0,6 → 30+x = 36+0,6x → 0,4x = 6 → x = 15 g.",
      { short: "0,4x = 6 → x = 15 g.", steps: ["Alkol 30 g.", "(30+x)/(60+x)=0,6 → x = 15."], whyOthersWrong: ["Eklenen alkol hem pay hem paydaya eklenir."] }, 3),
    Q("matematik-mat-karisim-123", "İki tür kahve karıştırılıyor: kilosu 60 TL olandan 3 kg, kilosu 100 TL olandan 2 kg. Karışımın kilo fiyatı kaç TL'dir?",
      ["76", "80", "72", "70", "84"], 0, "(60·3 + 100·2)/5 = (180+200)/5 = 380/5 = 76 TL.",
      { short: "380/5 = 76 TL.", steps: ["Toplam değer 380, kütle 5.", "Ort. fiyat 76."], whyOthersWrong: ["Ağırlıklı ortalama alınır."] }, 3),
    Q("matematik-mat-karisim-124", "%80'lik 50 gram ile %20'lik bir miktar karışım birleştirilince %50'lik karışım elde ediliyor. %20'lik karışımdan kaç gram kullanılmıştır?",
      ["50", "25", "75", "100", "60"], 0, "80·50 + 20·y = 50(50+y) → 4000+20y = 2500+50y → 1500 = 30y → y = 50 g.",
      { short: "30y = 1500 → y = 50 g.", steps: ["4000 + 20y = 50(50+y).", "y = 50."], whyOthersWrong: ["Alaşım denkleminden çözülür."] }, 3),
    Q("matematik-mat-karisim-125", "%36'lık bir tuzlu suyun yarısı dökülüp yerine aynı miktarda saf su eklenince tuz oranı kaç olur?",
      ["18", "36", "9", "24", "12"], 0, "Yarısı dökülünce tuz yarıya iner, kütle aynı kalır → oran yarıya: %18.",
      { short: "Oran yarıya → %18.", steps: ["Yarısını dökmek tuzu yarıya indirir.", "Kütle sabit → %18."], whyOthersWrong: ["Saf su eklemek tuz eklemez."] }, 3)
  ]);
})();
