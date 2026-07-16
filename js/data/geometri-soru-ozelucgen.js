/* ============================================================
   GEOMETRİ — Dik ve Özel Üçgenler: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-soru-ozelucgen: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "geometri", unit: "geo-ozelucgen", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("geo-ozelucgen", [
    /* ---- KOLAY (5) ---- */
    Q("geometri-geo-ozelucgen-101", "Dik kenarları 3 cm ve 4 cm olan bir dik üçgenin hipotenüsü kaç cm'dir?",
      ["5", "7", "6", "25", "12"], 0, "a²+b²=c² → 9+16=25 → c=5.",
      { short: "3²+4²=25 → c=5.", steps: ["Pisagor: 3²+4²=9+16=25.", "c=√25=5."], whyOthersWrong: ["7: kenarların toplamı.", "25: karekök alınmamış.", "12: çarpım."] }, 1),
    Q("geometri-geo-ozelucgen-102", "Dik kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüsü kaç cm'dir?",
      ["10", "14", "12", "48", "100"], 0, "6-8-10 üçlüsü: 36+64=100 → c=10.",
      { short: "6²+8²=100 → c=10.", steps: ["36+64=100.", "c=√100=10."], whyOthersWrong: ["14: toplam.", "48: çarpım.", "100: karekök alınmamış."] }, 1),
    Q("geometri-geo-ozelucgen-103", "Hipotenüsü 13 cm, bir dik kenarı 5 cm olan dik üçgenin diğer dik kenarı kaç cm'dir?",
      ["12", "8", "18", "144", "10"], 0, "b²=13²−5²=169−25=144 → b=12.",
      { short: "√(169−25)=12.", steps: ["b²=169−25=144.", "b=12."], whyOthersWrong: ["8: 13−5.", "18: 13+5.", "144: karekök alınmamış."] }, 1),
    Q("geometri-geo-ozelucgen-104", "Bir dik kenarı 5 cm olan ikizkenar (45-45-90) dik üçgenin hipotenüsü kaç cm'dir?",
      ["5√2", "10", "5", "25√2", "10√2"], 0, "45-45-90: hipotenüs = dik kenar·√2 = 5√2.",
      { short: "5·√2 = 5√2.", steps: ["Oran 1:1:√2.", "Hipotenüs = 5√2."], whyOthersWrong: ["10: 2·5.", "5: dik kenarın kendisi.", "10√2: iki kat hata."] }, 1),
    Q("geometri-geo-ozelucgen-105", "Bir 30-60-90 dik üçgeninde 30°'nin karşısındaki kenar 4 cm ise hipotenüs kaç cm'dir?",
      ["8", "4√3", "4", "16", "8√3"], 0, "30°'nin karşısı en kısa kenar; hipotenüs = 2·4 = 8.",
      { short: "2·4 = 8.", steps: ["Oran 1:√3:2.", "Hipotenüs = 2a = 8."], whyOthersWrong: ["4√3: 60°'nin karşısı.", "4: kenarın kendisi.", "16: 4²."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("geometri-geo-ozelucgen-106", "Dik kenarları 8 cm ve 15 cm olan dik üçgenin hipotenüsü kaç cm'dir?",
      ["17", "19", "23", "13", "289"], 0, "8-15-17 üçlüsü: 64+225=289 → c=17.",
      { short: "√289 = 17.", steps: ["64+225=289.", "c=17."], whyOthersWrong: ["19: toplam yaklaşık.", "13: farklı üçlü.", "289: karekök alınmamış."] }, 2),
    Q("geometri-geo-ozelucgen-107", "Hipotenüsü 12 cm olan bir 30-60-90 dik üçgeninde 60°'nin karşısındaki kenar kaç cm'dir?",
      ["6√3", "6", "12√3", "3√3", "6√2"], 0, "Hipotenüs 2a=12 → a=6; 60°'nin karşısı a√3 = 6√3.",
      { short: "a=6, 6√3.", steps: ["2a=12 → a=6.", "60°'nin karşısı = a√3 = 6√3."], whyOthersWrong: ["6: 30°'nin karşısı.", "12√3: hipotenüs değil.", "6√2: yanlış oran."] }, 2),
    Q("geometri-geo-ozelucgen-108", "Hipotenüsü 8√2 cm olan bir ikizkenar (45-45-90) dik üçgenin dik kenarı kaç cm'dir?",
      ["8", "16", "4√2", "8√2", "4"], 0, "Dik kenar = hipotenüs/√2 = 8√2/√2 = 8.",
      { short: "8√2/√2 = 8.", steps: ["Hipotenüs = a√2.", "a = 8√2/√2 = 8."], whyOthersWrong: ["16: 2 kat.", "4√2: yarı hata.", "8√2: hipotenüsün kendisi."] }, 2),
    Q("geometri-geo-ozelucgen-109", "Kenar uzunluğu 6 cm olan eşkenar üçgenin yüksekliği kaç cm'dir?",
      ["3√3", "6√3", "3", "6", "9"], 0, "Eşkenar yükseklik = a√3/2 = 6√3/2 = 3√3.",
      { short: "6√3/2 = 3√3.", steps: ["h = a√3/2.", "= 3√3."], whyOthersWrong: ["6√3: /2 unutuldu.", "3: √3 unutuldu.", "9: dayanaksız."] }, 2),
    Q("geometri-geo-ozelucgen-110", "Dik kenarları 9 cm ve 12 cm olan dik üçgenin hipotenüsü kaç cm'dir?",
      ["15", "21", "18", "225", "13"], 0, "3-4-5'in 3 katı (9-12-15): 81+144=225 → c=15.",
      { short: "√225 = 15.", steps: ["81+144=225.", "c=15."], whyOthersWrong: ["21: toplam.", "225: karekök alınmamış.", "13: farklı üçlü."] }, 2),
    Q("geometri-geo-ozelucgen-111", "Dik kenarları 6 cm ve 8 cm olan dik üçgende hipotenüse ait yükseklik kaç cm'dir?",
      ["4,8", "5", "4", "6", "2,4"], 0, "Hipotenüs 10; yükseklik = (6·8)/10 = 4,8.",
      { short: "48/10 = 4,8.", steps: ["Hipotenüs = 10.", "h = dik kenarlar çarpımı / hipotenüs = 48/10 = 4,8."], whyOthersWrong: ["5: kaba yuvarlama.", "4: yanlış.", "2,4: yarısı."] }, 2),
    Q("geometri-geo-ozelucgen-112", "Dik kenarları 7 cm ve 24 cm olan dik üçgenin hipotenüsü kaç cm'dir?",
      ["25", "23", "26", "31", "625"], 0, "7-24-25 üçlüsü: 49+576=625 → c=25.",
      { short: "√625 = 25.", steps: ["49+576=625.", "c=25."], whyOthersWrong: ["31: toplam.", "23: fark.", "625: karekök alınmamış."] }, 2),
    Q("geometri-geo-ozelucgen-113", "Bir 30-60-90 dik üçgeninde 30°'nin karşısındaki kenar 5 cm ise 60°'nin karşısındaki kenar kaç cm'dir?",
      ["5√3", "10", "5√2", "15", "5"], 0, "60°'nin karşısı = (30°'nin karşısı)·√3 = 5√3.",
      { short: "5√3.", steps: ["Oran 1:√3:2.", "60°'nin karşısı = a√3 = 5√3."], whyOthersWrong: ["10: hipotenüs.", "5√2: yanlış oran.", "5: kısa kenar."] }, 2),
    Q("geometri-geo-ozelucgen-114", "Dik kenarı 6 cm olan ikizkenar (45-45-90) dik üçgenin alanı kaç cm²'dir?",
      ["18", "36", "9", "12", "18√2"], 0, "İki dik kenar da 6; alan = 6·6/2 = 18.",
      { short: "6·6/2 = 18.", steps: ["Dik kenarlar eşit = 6.", "Alan = 36/2 = 18."], whyOthersWrong: ["36: /2 unutuldu.", "9: yanlış.", "18√2: gereksiz √2."] }, 2),
    Q("geometri-geo-ozelucgen-115", "Hipotenüsü 10 cm, bir dik kenarı 6 cm olan dik üçgenin alanı kaç cm²'dir?",
      ["24", "30", "48", "60", "12"], 0, "Diğer dik kenar = 8; alan = 6·8/2 = 24.",
      { short: "Diğer kenar 8 → 6·8/2 = 24.", steps: ["b=√(100−36)=8.", "Alan = 6·8/2 = 24."], whyOthersWrong: ["30: hipotenüsü kenar sanmak.", "48: /2 unutuldu.", "60: yanlış."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("geometri-geo-ozelucgen-116", "Bir dik üçgende dik açıdan hipotenüse inilen yükseklik, hipotenüsü 4 cm ve 9 cm'lik iki parçaya ayırıyor. Bu yükseklik kaç cm'dir?",
      ["6", "36", "13", "12", "18"], 0, "Öklid: h²=p·k=4·9=36 → h=6.",
      { short: "h²=4·9=36 → h=6.", steps: ["Öklid yükseklik bağıntısı: h²=p·k.", "h²=4·9=36.", "h=6."], whyOthersWrong: ["36: karekök alınmamış.", "13: p+k.", "12: dayanaksız."] }, 3),
    Q("geometri-geo-ozelucgen-117", "Bir dik üçgende dik açıdan hipotenüse inilen yükseklik hipotenüsü 4 cm ve 9 cm'lik parçalara ayırıyor. Kısa parçaya (4 cm) komşu dik kenar kaç cm'dir?",
      ["2√13", "6", "√13", "4", "2√26"], 0, "Öklid: a²=p·(p+k)=4·13=52 → a=2√13.",
      { short: "a²=4·13=52 → a=2√13.", steps: ["Hipotenüs = 4+9 = 13.", "a²=4·13=52.", "a=√52=2√13."], whyOthersWrong: ["6: yükseklik.", "√13: karekök yarım.", "4: parçanın kendisi."] }, 3),
    Q("geometri-geo-ozelucgen-118", "Hipotenüsü 20 cm olan bir 30-60-90 dik üçgeninin çevresi kaç cm'dir?",
      ["30+10√3", "30√3", "60", "20+10√3", "10+30√3"], 0, "Kenarlar 10, 10√3, 20 → çevre = 30+10√3.",
      { short: "10+10√3+20 = 30+10√3.", steps: ["2a=20 → a=10.", "Kenarlar: 10, 10√3, 20.", "Çevre = 10+20+10√3 = 30+10√3."], whyOthersWrong: ["60: √3'lü kenar sayısal alınmış.", "20+10√3: bir kenar eksik.", "30√3: yanlış."] }, 3),
    Q("geometri-geo-ozelucgen-119", "Dik kenarları 5 cm ve 12 cm olan dik üçgende hipotenüse ait yükseklik kaç cm'dir?",
      ["60/13", "13/60", "30/13", "12/5", "5/12"], 0, "Hipotenüs 13; yükseklik = (5·12)/13 = 60/13.",
      { short: "60/13.", steps: ["Hipotenüs = √(25+144) = 13.", "h = 5·12/13 = 60/13."], whyOthersWrong: ["13/60: ters.", "30/13: çarpımın yarısı.", "12/5: alakasız."] }, 3),
    Q("geometri-geo-ozelucgen-120", "Dik kenarlarının uzunlukları oranı 3:4 olan bir dik üçgenin çevresi 36 cm ise alanı kaç cm²'dir?",
      ["54", "108", "36", "27", "60"], 0, "Kenarlar 3k,4k,5k; 12k=36 → k=3; kenarlar 9,12,15; alan=9·12/2=54.",
      { short: "k=3 → 9,12,15 → alan 54.", steps: ["Kenarlar 3k,4k,5k.", "Çevre 12k=36 → k=3.", "Dik kenarlar 9 ve 12.", "Alan = 9·12/2 = 54."], whyOthersWrong: ["108: /2 unutuldu.", "36: çevreyle karışım.", "27: yanlış."] }, 3),
    Q("geometri-geo-ozelucgen-121", "Bir karenin köşegen uzunluğu 8√2 cm ise karenin alanı kaç cm²'dir?",
      ["64", "128", "32", "16", "8"], 0, "Köşegen = a√2 = 8√2 → a=8; alan = 8² = 64.",
      { short: "a=8 → alan 64.", steps: ["Köşegen = a√2.", "a√2=8√2 → a=8.", "Alan = 64."], whyOthersWrong: ["128: köşegen² /... hatası.", "32: yarısı.", "16: 2a."] }, 3),
    Q("geometri-geo-ozelucgen-122", "Kenar uzunluğu 12 cm olan eşkenar üçgenin alanı kaç cm²'dir?",
      ["36√3", "72√3", "18√3", "144√3", "36"], 0, "Eşkenar alan = a²√3/4 = 144√3/4 = 36√3.",
      { short: "144√3/4 = 36√3.", steps: ["Alan = a²√3/4.", "= 144√3/4 = 36√3."], whyOthersWrong: ["72√3: /4 yerine /2.", "18√3: fazla bölme.", "144√3: /4 unutuldu."] }, 3),
    Q("geometri-geo-ozelucgen-123", "Dik kenarları 9 cm ve 12 cm olan dik üçgende, 9 cm'lik kenarın hipotenüs üzerindeki izdüşümü kaç cm'dir?",
      ["5,4", "9,6", "4", "6", "3,6"], 0, "Hipotenüs 15; izdüşüm = 9²/15 = 81/15 = 5,4.",
      { short: "81/15 = 5,4.", steps: ["Hipotenüs = 15.", "İzdüşüm = kenar²/hipotenüs = 81/15 = 5,4."], whyOthersWrong: ["9,6: 12 kenarının izdüşümü.", "4: yanlış.", "6: dayanaksız."] }, 3),
    Q("geometri-geo-ozelucgen-124", "Hipotenüsü 25 cm, bir dik kenarı 7 cm olan dik üçgenin alanı kaç cm²'dir?",
      ["84", "168", "175", "42", "96"], 0, "Diğer kenar = √(625−49) = 24; alan = 7·24/2 = 84.",
      { short: "Diğer kenar 24 → 7·24/2 = 84.", steps: ["b=√(625−49)=√576=24.", "Alan = 7·24/2 = 84."], whyOthersWrong: ["168: /2 unutuldu.", "175: 7·25.", "42: yanlış."] }, 3),
    Q("geometri-geo-ozelucgen-125", "ABC dik üçgeninde dik açı C'dedir; AC=6 cm, BC=8 cm, AB=10 cm'dir. C'den AB'ye inilen yüksekliğin ayağı H ise AH uzunluğu kaç cm'dir?",
      ["3,6", "6,4", "4,8", "5", "2,4"], 0, "AH = AC²/AB = 36/10 = 3,6.",
      { short: "AC²/AB = 36/10 = 3,6.", steps: ["Öklid: AH = AC²/AB.", "= 36/10 = 3,6.", "(Kontrol: BH = 64/10 = 6,4; AH+BH=10.)"], whyOthersWrong: ["6,4: BH.", "4,8: yükseklik CH.", "5: yanlış."] }, 3)
  ]);
})();
