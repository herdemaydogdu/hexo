/* ============================================================
   FEN — Fizik / Hareket: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı. g = 10 m/s².
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-soru-hareket: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "fen", unit: "fiz-hareket", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "islem",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("fiz-hareket", [
    /* ---- KOLAY (5) ---- */
    Q("fen-fiz-hareket-101", "90 m yolu 5 s'de alan bir cismin sabit sürati kaç m/s'dir?",
      ["18", "15", "20", "45", "9"], 0, "Sürat = yol / zaman = 90 / 5 = 18 m/s.",
      { short: "v = 90/5 = 18 m/s.", steps: ["v = x / t.", "90 / 5 = 18 m/s."], whyOthersWrong: ["Yol zamana bölünür; çarpma veya yanlış bölme diğer değerleri verir."] }, 1),
    Q("fen-fiz-hareket-102", "12 m/s sabit süratle giden bir araç 7 s'de kaç m yol alır?",
      ["84", "72", "96", "19", "60"], 0, "Yol = sürat × zaman = 12 · 7 = 84 m.",
      { short: "x = 12·7 = 84 m.", steps: ["x = v · t.", "12 · 7 = 84 m."], whyOthersWrong: ["Toplama (19) ya da yanlış çarpım hatalı seçenekleri üretir."] }, 1),
    Q("fen-fiz-hareket-103", "150 m yolu 30 m/s sabit süratle alan bir cisim kaç saniyede varır?",
      ["5", "6", "4", "45", "120"], 0, "Zaman = yol / sürat = 150 / 30 = 5 s.",
      { short: "t = 150/30 = 5 s.", steps: ["t = x / v.", "150 / 30 = 5 s."], whyOthersWrong: ["Yol süratle çarpılırsa ya da ters bölünürse yanlış olur."] }, 1),
    Q("fen-fiz-hareket-104", "Duran bir araç 8 s'de 24 m/s sürate ulaşıyor. Ortalama ivmesi kaç m/s²'dir?",
      ["3", "4", "2", "8", "6"], 0, "İvme = hız değişimi / zaman = 24 / 8 = 3 m/s².",
      { short: "a = 24/8 = 3 m/s².", steps: ["a = Δv / Δt.", "(24 − 0)/8 = 3 m/s²."], whyOthersWrong: ["Zamanı hıza bölmek ya da yanlış bölüm diğer değerleri verir."] }, 1),
    Q("fen-fiz-hareket-105", "54 km/h hız kaç m/s'dir?",
      ["15", "54", "18", "150", "10"], 0, "km/h → m/s için 3,6'ya bölünür: 54 / 3,6 = 15 m/s.",
      { short: "54 / 3,6 = 15 m/s.", steps: ["m/s = (km/h) / 3,6.", "54 / 3,6 = 15."], whyOthersWrong: ["3,6 ile çarpmak ya da bölmemek yanlış sonuç verir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("fen-fiz-hareket-106", "Bir araç 300 m'yi 30 m/s, sonraki 300 m'yi 20 m/s süratle alıyor. Tüm yol için ortalama sürati kaç m/s'dir?",
      ["24", "25", "26", "50", "22"], 0, "t₁ = 300/30 = 10 s, t₂ = 300/20 = 15 s; ort = 600/25 = 24 m/s.",
      { short: "600 m / 25 s = 24 m/s.", steps: ["t₁ = 10 s, t₂ = 15 s.", "Toplam yol 600 m, toplam süre 25 s.", "600/25 = 24 m/s."], whyOthersWrong: ["İki süratin aritmetik ortalaması (25) yanlıştır; süreler farklıdır."] }, 2),
    Q("fen-fiz-hareket-107", "Duran bir cisim 4 m/s² sabit ivmeyle 5 s hızlanıyor. Aldığı yol kaç m'dir?",
      ["50", "40", "100", "20", "25"], 0, "x = ½·a·t² = ½·4·25 = 50 m.",
      { short: "x = ½·4·5² = 50 m.", steps: ["x = ½·a·t² (v₀ = 0).", "½·4·25 = 50 m."], whyOthersWrong: ["½'yi atlamak 100, t²'yi atlamak daha küçük değer verir."] }, 2),
    Q("fen-fiz-hareket-108", "İlk hızı 6 m/s olan bir cisim 2 m/s² ivmeyle hızlanıyor. 7 s sonra hızı kaç m/s olur?",
      ["20", "14", "26", "18", "13"], 0, "v = v₀ + a·t = 6 + 2·7 = 20 m/s.",
      { short: "v = 6 + 2·7 = 20 m/s.", steps: ["v = v₀ + a·t.", "6 + 14 = 20 m/s."], whyOthersWrong: ["İlk hızı eklememek (14) ya da yanlış çarpım hatalıdır."] }, 2),
    Q("fen-fiz-hareket-109", "Serbest bırakılan bir cisim 4 s sonra kaç m/s hıza ulaşır? (g = 10 m/s²)",
      ["40", "20", "80", "10", "44"], 0, "v = g·t = 10·4 = 40 m/s.",
      { short: "v = 10·4 = 40 m/s.", steps: ["Serbest düşmede v = g·t.", "10·4 = 40 m/s."], whyOthersWrong: ["g'yi 5 almak ya da t'yi karesel kullanmak yanlıştır."] }, 2),
    Q("fen-fiz-hareket-110", "Serbest bırakılan bir cisim 3 s'de kaç m düşer? (g = 10 m/s²)",
      ["45", "30", "90", "15", "60"], 0, "h = ½·g·t² = ½·10·9 = 45 m.",
      { short: "h = ½·10·3² = 45 m.", steps: ["h = ½·g·t².", "½·10·9 = 45 m."], whyOthersWrong: ["v = g·t (30) hız verir, yol değil; ½'yi atlamak 90 verir."] }, 2),
    Q("fen-fiz-hareket-111", "Aralarında 180 m olan iki araç birbirine doğru 25 m/s ve 20 m/s süratle gidiyor. Kaç s sonra karşılaşırlar?",
      ["4", "5", "3", "9", "6"], 0, "Yaklaşma sürati 25 + 20 = 45 m/s; t = 180/45 = 4 s.",
      { short: "t = 180/45 = 4 s.", steps: ["Bağıl (yaklaşma) sürat = 45 m/s.", "180/45 = 4 s."], whyOthersWrong: ["Süratleri çıkarmak (fark 5) uzaklaşan hareket için olur."] }, 2),
    Q("fen-fiz-hareket-112", "Önde 12 m/s ile giden bir araca, 100 m geriden 17 m/s ile gelen ikinci araç kaç s sonra yetişir?",
      ["20", "25", "15", "10", "5"], 0, "Yaklaşma sürati 17 − 12 = 5 m/s; t = 100/5 = 20 s.",
      { short: "t = 100/5 = 20 s.", steps: ["Aynı yön: bağıl sürat = 17 − 12 = 5 m/s.", "100/5 = 20 s."], whyOthersWrong: ["Süratleri toplamak (29) yalnızca zıt yönde geçerlidir."] }, 2),
    Q("fen-fiz-hareket-113", "40 m/s ile giden bir araç 5 m/s² sabit ivmeyle yavaşlayıp duruyor. Durması kaç s sürer?",
      ["8", "5", "10", "4", "200"], 0, "t = v₀ / a = 40 / 5 = 8 s.",
      { short: "t = 40/5 = 8 s.", steps: ["Durma: 0 = v₀ − a·t → t = v₀/a.", "40/5 = 8 s."], whyOthersWrong: ["v₀·a (200) ya da yanlış bölüm hatalıdır."] }, 2),
    Q("fen-fiz-hareket-114", "30 m/s hız kaç km/h'dir?",
      ["108", "90", "120", "30", "300"], 0, "m/s → km/h için 3,6 ile çarpılır: 30 · 3,6 = 108 km/h.",
      { short: "30 · 3,6 = 108 km/h.", steps: ["km/h = (m/s) · 3,6.", "30 · 3,6 = 108."], whyOthersWrong: ["3,6'ya bölmek ya da 3 ile çarpmak yanlış olur."] }, 2),
    Q("fen-fiz-hareket-115", "Bir araç bir yolu gidişte 60 km/h, dönüşte 30 km/h süratle alıyor. Tüm yolculuğun ortalama sürati kaç km/h'dir?",
      ["40", "45", "50", "90", "30"], 0, "Eşit yolda ort = 2·v₁·v₂/(v₁+v₂) = 2·60·30/90 = 40 km/h.",
      { short: "2·60·30/90 = 40 km/h.", steps: ["Eşit uzaklıkta harmonik ortalama.", "3600/90 = 40 km/h."], whyOthersWrong: ["Aritmetik ortalama (45) süreler farklı olduğu için yanlıştır."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("fen-fiz-hareket-116", "Serbest bırakılan bir cisim hareketinin 3. saniyesinde kaç m yol alır? (g = 10 m/s²)",
      ["25", "45", "20", "30", "5"], 0, "3 s'de 45 m, 2 s'de 20 m düşer; 3. saniyedeki yol 45 − 20 = 25 m.",
      { short: "45 − 20 = 25 m.", steps: ["h(3) = ½·10·9 = 45 m.", "h(2) = ½·10·4 = 20 m.", "3. saniye = 45 − 20 = 25 m."], whyOthersWrong: ["45 m ilk 3 s'nin toplamıdır; 3. saniyenin tek başına değeri değildir."] }, 3),
    Q("fen-fiz-hareket-117", "Duran bir araç sabit ivmeyle 6 s'de 72 m yol alıyor. İvmesi kaç m/s²'dir?",
      ["4", "3", "6", "2", "12"], 0, "72 = ½·a·6² = 18·a → a = 4 m/s².",
      { short: "72 = 18a → a = 4 m/s².", steps: ["x = ½·a·t².", "72 = ½·a·36 = 18a.", "a = 72/18 = 4 m/s²."], whyOthersWrong: ["½'yi unutmak a = 2, t²'yi atlamak farklı değer verir."] }, 3),
    Q("fen-fiz-hareket-118", "5 m/s ile giden bir araç 2 m/s² sabit ivmeyle 50 m yol aldıktan sonra hızı kaç m/s olur?",
      ["15", "10", "20", "25", "55"], 0, "v² = v₀² + 2·a·x = 25 + 2·2·50 = 225 → v = 15 m/s.",
      { short: "v² = 25 + 200 = 225 → v = 15.", steps: ["v² = v₀² + 2ax.", "25 + 200 = 225.", "√225 = 15 m/s."], whyOthersWrong: ["Karekök almayı unutmak (225) ya da v₀'ı atlamak yanlıştır."] }, 3),
    Q("fen-fiz-hareket-119", "Bir araç önce 4 s boyunca 5 m/s² ile duruştan hızlanıyor, sonra ulaştığı hızla 6 s sabit gidiyor. Toplam yol kaç m'dir?",
      ["160", "120", "200", "140", "180"], 0, "1. evre: x₁ = ½·5·16 = 40 m, son hız 20 m/s. 2. evre: x₂ = 20·6 = 120 m. Toplam 160 m.",
      { short: "40 + 120 = 160 m.", steps: ["v = 5·4 = 20 m/s, x₁ = ½·5·4² = 40 m.", "x₂ = 20·6 = 120 m.", "Toplam = 160 m."], whyOthersWrong: ["Yalnızca sabit evreyi (120) saymak ilk evreyi göz ardı eder."] }, 3),
    Q("fen-fiz-hareket-120", "Bir koşucu 6 m/s ile koşuyor. 10 s sonra aynı noktadan ikinci koşucu 8 m/s ile başlıyor. İkinci koşucu, kendi başlangıcından kaç s sonra birinciyi yakalar?",
      ["30", "20", "40", "10", "25"], 0, "Birincinin önü 6·10 = 60 m; kapanma sürati 8 − 6 = 2 m/s; t = 60/2 = 30 s.",
      { short: "60 / 2 = 30 s.", steps: ["Öncül fark = 6·10 = 60 m.", "Bağıl sürat = 8 − 6 = 2 m/s.", "t = 60/2 = 30 s."], whyOthersWrong: ["Süratleri toplamak (14) aynı yönde yanlıştır."] }, 3),
    Q("fen-fiz-hareket-121", "45 m yükseklikten serbest bırakılan bir cismin yere çarpma hızı kaç m/s'dir? (g = 10 m/s²)",
      ["30", "45", "20", "90", "25"], 0, "v² = 2·g·h = 2·10·45 = 900 → v = 30 m/s.",
      { short: "v = √(2·10·45) = 30 m/s.", steps: ["v² = 2gh.", "2·10·45 = 900.", "√900 = 30 m/s."], whyOthersWrong: ["Karekök almamak ya da yüksekliği hız sanmak yanlıştır."] }, 3),
    Q("fen-fiz-hareket-122", "Bir araç ilk 4 s'de duruştan düzgün hızlanarak 20 m/s'ye ulaşıyor, sonra 4 s daha 20 m/s sabit gidiyor. 8 s sonundaki toplam yolu kaç m'dir?",
      ["120", "160", "80", "100", "140"], 0, "Hızlanma evresi ortalama hız 10 m/s → 10·4 = 40 m; sabit evre 20·4 = 80 m; toplam 120 m.",
      { short: "40 + 80 = 120 m.", steps: ["x₁ = ½·(0+20)·4 = 40 m.", "x₂ = 20·4 = 80 m.", "Toplam = 120 m."], whyOthersWrong: ["Tüm süreyi 20 m/s saymak (160) ilk evreyi şişirir."] }, 3),
    Q("fen-fiz-hareket-123", "Aralarında 240 km olan iki istasyondan aynı anda karşılıklı 70 km/h ve 50 km/h ile iki tren yola çıkıyor. Karşılaştıklarında hızlı tren kaç km yol almıştır?",
      ["140", "120", "100", "160", "240"], 0, "Karşılaşma süresi 240/(70+50) = 2 h; hızlı tren 70·2 = 140 km.",
      { short: "70 · 2 = 140 km.", steps: ["Yaklaşma sürati = 120 km/h.", "t = 240/120 = 2 h.", "Hızlı tren = 70·2 = 140 km."], whyOthersWrong: ["120 km yolun tam ortasıdır; hızlar farklı olduğundan buluşma orta nokta değildir."] }, 3),
    Q("fen-fiz-hareket-124", "20 m/s ile giden bir araç 4 m/s² sabit ivmeyle yavaşlayıp duruyor. Durana kadar kaç m yol alır?",
      ["50", "40", "100", "25", "80"], 0, "0 = v₀² − 2·a·x → x = 400/8 = 50 m.",
      { short: "x = 400 / 8 = 50 m.", steps: ["0 = v₀² − 2ax.", "x = v₀²/(2a) = 400/8.", "= 50 m."], whyOthersWrong: ["2a yerine a'ya bölmek 100, yanlış kare kullanımı diğerlerini verir."] }, 3),
    Q("fen-fiz-hareket-125", "Bir cisim ilk 10 s'de sabit 15 m/s ile gidiyor, sonraki 10 s'de düzgün hızlanarak 15 m/s'den 25 m/s'ye çıkıyor. 20 s'lik hareketin ortalama sürati kaç m/s'dir?",
      ["17,5", "20", "18", "15", "19"], 0, "1. evre 150 m, 2. evre ½·(15+25)·10 = 200 m; toplam 350 m / 20 s = 17,5 m/s.",
      { short: "350 / 20 = 17,5 m/s.", steps: ["x₁ = 15·10 = 150 m.", "x₂ = ½·(15+25)·10 = 200 m.", "Ort = 350/20 = 17,5 m/s."], whyOthersWrong: ["İki uç hızın ortalaması (20) süreleri göz ardı eder."] }, 3)
  ]);
})();
