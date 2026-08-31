/* ============================================================
   GEOMETRİ — Üçgende Eşlik ve Benzerlik: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-soru-benzerlik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "geometri", unit: "geo-benzerlik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("geo-benzerlik", [
    /* ---- KOLAY (5) ---- */
    Q("geometri-geo-benzerlik-101", "ABC ~ DEF benzerliğinde AB/DE = 2/3'tür. |AB| = 6 cm ise |DE| kaç cm'dir?",
      ["9", "4", "12", "6", "18"], 0, "AB/DE = 2/3 → 6/DE = 2/3 → DE = 9.",
      { short: "6·3/2 = 9.", steps: ["AB/DE = 2/3 oranı yazılır.", "6/DE = 2/3 → DE = 18/2 = 9."], whyOthersWrong: ["4: oran ters kullanılmış (6·2/3).", "12: 2 katı alınmış.", "18: 3 katı alınmış."] }, 1),
    Q("geometri-geo-benzerlik-102", "Benzerlik oranı 1/3 olan iki üçgenden büyüğünün çevresi 36 cm'dir. Küçük üçgenin çevresi kaç cm'dir?",
      ["12", "4", "108", "24", "18"], 0, "Benzer üçgenlerde çevreler oranı benzerlik oranına eşittir: 36·1/3 = 12.",
      { short: "36/3 = 12.", steps: ["Çevreler oranı = k = 1/3.", "Küçük çevre = 36·1/3 = 12."], whyOthersWrong: ["4: 36/9 (alan oranı k² ile karıştırılmış).", "108: 36·3.", "24: 36·2/3."] }, 1),
    Q("geometri-geo-benzerlik-103", "ABC ~ DEF benzerliğinde |AB| = 4, |BC| = 6, |DE| = 8 cm'dir. |EF| kaç cm'dir?",
      ["12", "10", "3", "16", "24"], 0, "DE/AB = 8/4 = 2 → EF = 2·BC = 12.",
      { short: "Oran 2 → 6·2 = 12.", steps: ["Karşılıklı kenarlar: AB↔DE, BC↔EF.", "DE/AB = 2.", "EF = 6·2 = 12."], whyOthersWrong: ["10: 4+6.", "3: oran ters (6/2).", "16: 8·2 (yanlış kenar)."] }, 1),
    Q("geometri-geo-benzerlik-104", "Benzerlik oranı 1/2 olan iki benzer üçgenin alanları oranı kaçtır?",
      ["1/4", "1/2", "1/8", "2", "1/16"], 0, "Alanlar oranı benzerlik oranının karesidir: (1/2)² = 1/4.",
      { short: "k² = 1/4.", steps: ["Alanlar oranı = k².", "(1/2)² = 1/4."], whyOthersWrong: ["1/2: çevre oranıyla karıştırılmış.", "1/8: k³ alınmış.", "2: oran ters."] }, 1),
    Q("geometri-geo-benzerlik-105", "Eş iki üçgenin benzerlik oranı kaçtır?",
      ["1", "0", "2", "1/2", "√2"], 0, "Eş üçgenler kenarları birebir eşit benzer üçgenlerdir; oran 1'dir.",
      { short: "Eşlik = oranı 1 olan benzerlik.", steps: ["Eş üçgenlerde karşılıklı kenarlar eşittir.", "k = kenar/kenar = 1."], whyOthersWrong: ["0: oran hiçbir zaman 0 olamaz.", "2 ve 1/2: kenarlar farklı olurdu.", "√2: dayanaksız."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("geometri-geo-benzerlik-106", "ABC üçgeninde [DE] // [BC]; D ∈ [AB], E ∈ [AC]. |AD| = 3, |DB| = 6, |DE| = 4 cm ise |BC| kaç cm'dir?",
      ["12", "8", "6", "9", "24"], 0, "AD/AB = 3/9 = 1/3 → DE/BC = 1/3 → BC = 12.",
      { short: "3/9 = 4/BC → BC = 12.", steps: ["AB = 3+6 = 9.", "Temel benzerlik: AD/AB = DE/BC.", "1/3 = 4/BC → BC = 12."], whyOthersWrong: ["8: AD/DB = 3/6 oranı kullanılmış (parça/parça hatası).", "6: 4+2 tahmini.", "9: AB ile karıştırılmış."] }, 2),
    Q("geometri-geo-benzerlik-107", "ABC üçgeninde [DE] // [BC]; |AD| = 4, |AB| = 10, |AE| = 6 cm ise |AC| kaç cm'dir?",
      ["15", "12", "9", "10", "24"], 0, "AD/AB = AE/AC → 4/10 = 6/AC → AC = 15.",
      { short: "AC = 6·10/4 = 15.", steps: ["Temel benzerlik: AD/AB = AE/AC.", "4/10 = 6/AC.", "AC = 60/4 = 15."], whyOthersWrong: ["12: 6·2.", "9: 6+3.", "10: AB ile aynı sanılmış."] }, 2),
    Q("geometri-geo-benzerlik-108", "Benzerlik oranı 3/5 olan iki benzer üçgenden küçüğünün alanı 18 cm² ise büyüğünün alanı kaç cm²'dir?",
      ["50", "30", "45", "54", "25"], 0, "Alanlar oranı k² = 9/25 → büyük alan = 18·25/9 = 50.",
      { short: "18·25/9 = 50.", steps: ["k² = (3/5)² = 9/25.", "18/A = 9/25.", "A = 18·25/9 = 50."], whyOthersWrong: ["30: k ile çarpılmış (18·5/3).", "45: 18·5/2.", "54: 18·3."] }, 2),
    Q("geometri-geo-benzerlik-109", "Benzer iki üçgenin çevreleri 24 cm ve 36 cm'dir. Küçük üçgende 8 cm olan kenarın büyük üçgendeki karşılığı kaç cm'dir?",
      ["12", "10", "16", "9", "14"], 0, "k = 24/36 = 2/3 → 8/x = 2/3 → x = 12.",
      { short: "8·3/2 = 12.", steps: ["Çevreler oranı = k = 2/3.", "8/x = 2/3.", "x = 24/2 = 12."], whyOthersWrong: ["10: 8+2.", "16: 8·2.", "9: 8·9/8 dayanaksız."] }, 2),
    Q("geometri-geo-benzerlik-110", "ABC üçgeninde [DE] // [BC] ve AD/DB = 2/3'tür. |DE| = 8 cm ise |BC| kaç cm'dir?",
      ["20", "12", "16", "10", "24"], 0, "AD/DB = 2/3 → AD/AB = 2/5 → DE/BC = 2/5 → BC = 20.",
      { short: "8·5/2 = 20.", steps: ["AD/DB = 2/3 ise AB = 2t+3t = 5t.", "Benzerlik oranı AD/AB = 2/5.", "8/BC = 2/5 → BC = 40/2 = 20."], whyOthersWrong: ["12: 8·3/2 — parça/parça oranı kullanma hatası.", "16: 8·2.", "10: 8·5/4."] }, 2),
    Q("geometri-geo-benzerlik-111", "ABC üçgeninde D ∈ [AB], E ∈ [AC] ve ∠ADE = ∠ACB'dir. |AD| = 4, |AC| = 8, |AB| = 12 cm ise |AE| kaç cm'dir?",
      ["6", "8", "4", "12", "3"], 0, "∠A ortak, ∠ADE = ∠ACB → ADE ~ ACB (AA). AD/AC = AE/AB → 4/8 = AE/12 → AE = 6.",
      { short: "4/8 = AE/12 → AE = 6.", steps: ["∠A ortak, ∠ADE = ∠ACB → AA benzerliği (ADE ~ ACB).", "Eşleşme: D↔C, E↔B → AD/AC = AE/AB.", "4/8 = AE/12 → AE = 6."], whyOthersWrong: ["8: AC ile karıştırılmış.", "4: AD kopyalanmış.", "3: oran ters kurulmuş (4·8/12 ≈ düz benzerlik hatası)."] }, 2),
    Q("geometri-geo-benzerlik-112", "Benzer iki üçgenin alanları oranı 9/16'dır. Büyük üçgenin çevresi 32 cm ise küçüğünün çevresi kaç cm'dir?",
      ["24", "18", "27", "16", "28"], 0, "k = √(9/16) = 3/4 → küçük çevre = 32·3/4 = 24.",
      { short: "32·3/4 = 24.", steps: ["Alan oranı k² = 9/16 → k = 3/4.", "Çevre oranı = k.", "32·3/4 = 24."], whyOthersWrong: ["18: 32·9/16 (alan oranıyla çarpma hatası).", "27: 36·3/4 hesap hatası.", "16: 32/2."] }, 2),
    Q("geometri-geo-benzerlik-113", "ABC üçgeninde [DE] // [BC]; |AE| = 5, |EC| = 10, |DE| = 7 cm ise |BC| kaç cm'dir?",
      ["21", "14", "10", "28", "18"], 0, "AE/AC = 5/15 = 1/3 → BC = 7·3 = 21.",
      { short: "7·3 = 21.", steps: ["AC = 5+10 = 15.", "AE/AC = 1/3 = DE/BC.", "BC = 21."], whyOthersWrong: ["14: 7·2 (AE/EC oranı kullanılmış).", "10: EC kopyalanmış.", "28: 7·4."] }, 2),
    Q("geometri-geo-benzerlik-114", "Kenarları 6, 8 ve 10 cm olan üçgene benzer bir üçgenin en uzun kenarı 25 cm'dir. Bu üçgenin çevresi kaç cm'dir?",
      ["60", "50", "48", "72", "55"], 0, "k = 25/10 = 5/2; çevre = (6+8+10)·5/2 = 60.",
      { short: "24·5/2 = 60.", steps: ["En uzun kenarlar eşleşir: k = 25/10 = 5/2.", "Küçük çevre = 24.", "Büyük çevre = 24·5/2 = 60."], whyOthersWrong: ["50: 24+25 tahmini ya da 25·2.", "48: 24·2.", "72: 24·3."] }, 2),
    Q("geometri-geo-benzerlik-115", "ABC üçgeninde D, [AB]'nin orta noktası; [DE] // [BC] (E ∈ [AC]). Alan(ABC) = 36 cm² ise Alan(ADE) kaç cm²'dir?",
      ["9", "18", "12", "6", "24"], 0, "AD/AB = 1/2 → alan oranı 1/4 → 36/4 = 9.",
      { short: "36·(1/2)² = 9.", steps: ["D orta nokta → k = 1/2.", "Alan oranı = k² = 1/4.", "Alan(ADE) = 36/4 = 9."], whyOthersWrong: ["18: k ile bölünmüş (36/2).", "12: 36/3.", "6: 36/6."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("geometri-geo-benzerlik-116", "ABC üçgeninde [DE] // [BC] ve AD/AB = 1/2'dir. Alan(ADE) = 8 cm² ise DECB dörtgeninin (yamuğun) alanı kaç cm²'dir?",
      ["24", "16", "32", "8", "12"], 0, "Alan(ABC) = 8·4 = 32; yamuk = 32 − 8 = 24.",
      { short: "32 − 8 = 24.", steps: ["k = 1/2 → Alan(ADE)/Alan(ABC) = 1/4.", "Alan(ABC) = 8·4 = 32.", "Alan(DECB) = 32 − 8 = 24."], whyOthersWrong: ["16: 8·2 (oran k sanılmış).", "32: tüm üçgenin alanı.", "12: 8·3/2."] }, 3),
    Q("geometri-geo-benzerlik-117", "ABC üçgeninde [DE] // [BC]; Alan(ADE) = 9 cm², DECB dörtgeninin alanı 27 cm²'dir. |AD| = 6 cm ise |DB| kaç cm'dir?",
      ["6", "3", "12", "9", "4"], 0, "Alan(ABC) = 36 → k² = 9/36 = 1/4 → k = 1/2 → AB = 12 → DB = 6.",
      { short: "k = 1/2 → AB = 12 → DB = 6.", steps: ["Alan(ABC) = 9+27 = 36.", "k² = 9/36 = 1/4 → k = AD/AB = 1/2.", "AB = 6·2 = 12.", "DB = 12 − 6 = 6."], whyOthersWrong: ["3: AD/2.", "12: AB ile karıştırılmış.", "9: alan değeri kopyalanmış."] }, 3),
    Q("geometri-geo-benzerlik-118", "ABC üçgeninde D ∈ [AB], E ∈ [AC] ve ∠AED = ∠ABC'dir. |AE| = 4, |AB| = 8, |AD| = 6 cm ise |EC| kaç cm'dir?",
      ["8", "6", "12", "4", "10"], 0, "AED ~ ABC (AA): AE/AB = AD/AC → 4/8 = 6/AC → AC = 12 → EC = 12 − 4 = 8.",
      { short: "AC = 12 → EC = 8.", steps: ["∠A ortak, ∠AED = ∠ABC → AED ~ ABC.", "Eşleşme: E↔B, D↔C → AE/AB = AD/AC.", "4/8 = 6/AC → AC = 12.", "EC = AC − AE = 8."], whyOthersWrong: ["6: AD kopyalanmış.", "12: AC ile karıştırılmış (son adım unutulmuş).", "4: AE kopyalanmış."] }, 3),
    Q("geometri-geo-benzerlik-119", "ABC dik üçgeninde dik açı A'dadır; A'dan hipotenüse inilen yüksekliğin ayağı H'dir. |AH| = 6, |BH| = 4 cm ise |HC| kaç cm'dir?",
      ["9", "12", "8", "6", "10"], 0, "ABH ~ CAH benzerliğinden AH² = BH·HC → 36 = 4·HC → HC = 9.",
      { short: "36/4 = 9.", steps: ["Yükseklik iki küçük dik üçgeni birbirine benzetir: ABH ~ CAH.", "BH/AH = AH/HC → AH² = BH·HC.", "36 = 4·HC → HC = 9."], whyOthersWrong: ["12: 6·2.", "8: 4·2.", "10: 6+4."] }, 3),
    Q("geometri-geo-benzerlik-120", "Boyu 1,8 m olan bir kişinin gölgesi 1,2 m iken aynı anda bir ağacın gölgesi 8 m ölçülüyor. Ağacın boyu kaç metredir?",
      ["12", "10", "9", "16", "14"], 0, "Güneş ışınları paralel → üçgenler benzer: 1,8/1,2 = boy/8 → boy = 12.",
      { short: "8·1,8/1,2 = 12.", steps: ["Aynı anda ışınlar paralel → AA benzerliği.", "boy/gölge oranı sabit: 1,8/1,2 = 3/2.", "Ağaç boyu = 8·3/2 = 12."], whyOthersWrong: ["10: 8+2.", "9: 8·9/8 dayanaksız.", "16: 8·2."] }, 3),
    Q("geometri-geo-benzerlik-121", "ABC üçgeninde D ∈ [AB], E ∈ [AC], F ∈ [BC]; [DE] // [BC] ve [EF] // [AB]'dir. |AD| = 2, |DB| = 4, |BC| = 12 cm ise |BF| kaç cm'dir?",
      ["4", "6", "8", "3", "2"], 0, "AD/AB = 1/3 → DE = 4; DE//BF ve EF//DB → DBFE paralelkenar → BF = DE = 4.",
      { short: "DE = 4; DBFE paralelkenar → BF = 4.", steps: ["AB = 6, AD/AB = 1/3.", "DE = BC·1/3 = 4.", "DE//BF ve EF//DB → DBFE paralelkenardır.", "BF = DE = 4."], whyOthersWrong: ["6: BC/2.", "8: BC·2/3 (FC ile karıştırılmış).", "3: 12/4."] }, 3),
    Q("geometri-geo-benzerlik-122", "Benzerlik oranı 2/5 olan iki benzer üçgenin alanları farkı 84 cm²'dir. Küçük üçgenin alanı kaç cm²'dir?",
      ["16", "20", "25", "32", "12"], 0, "Alanlar 4t ve 25t → 21t = 84 → t = 4 → küçük alan = 16.",
      { short: "21t = 84 → 4t = 16.", steps: ["k² = 4/25 → alanlar 4t ve 25t.", "25t − 4t = 21t = 84.", "t = 4 → küçük alan = 4·4 = 16."], whyOthersWrong: ["20: 84·5/21.", "25: t·25 karışıklığı / oran payı.", "32: 16·2."] }, 3),
    Q("geometri-geo-benzerlik-123", "AB // CD olan ABCD yamuğunda köşegenler O noktasında kesişiyor. |AB| = 12, |CD| = 8, |AO| = 6 cm ise |OC| kaç cm'dir?",
      ["4", "6", "9", "3", "8"], 0, "AOB ~ COD (AA, ters açılar) → AO/OC = AB/CD = 3/2 → OC = 4.",
      { short: "6·2/3 = 4.", steps: ["AB//CD → iç ters açılar eş, ∠AOB = ∠COD → AOB ~ COD.", "AO/OC = AB/CD = 12/8 = 3/2.", "6/OC = 3/2 → OC = 4."], whyOthersWrong: ["6: AO kopyalanmış.", "9: 6·3/2 (oran ters).", "3: 6/2."] }, 3),
    Q("geometri-geo-benzerlik-124", "Benzer iki üçgenin alanları oranı 9/16, çevreleri farkı 12 cm'dir. Küçük üçgenin çevresi kaç cm'dir?",
      ["36", "48", "24", "40", "30"], 0, "k = 3/4 → çevreler 3t ve 4t → t = 12 → küçük çevre = 36.",
      { short: "3t = 3·12 = 36.", steps: ["k = √(9/16) = 3/4.", "Çevreler 3t ve 4t; 4t − 3t = t = 12.", "Küçük çevre = 3t = 36."], whyOthersWrong: ["48: büyük üçgenin çevresi.", "24: 12·2.", "30: dayanaksız ara değer."] }, 3),
    Q("geometri-geo-benzerlik-125", "ABC üçgeninde [DE] // [BC]; |DE| = 6, |BC| = 9 cm ve Alan(ABC) − Alan(ADE) = 30 cm²'dir. Alan(ABC) kaç cm²'dir?",
      ["54", "45", "24", "36", "60"], 0, "k = 6/9 = 2/3 → alanlar 4t ve 9t → 5t = 30 → t = 6 → Alan(ABC) = 54.",
      { short: "9t = 9·6 = 54.", steps: ["k = DE/BC = 2/3 → k² = 4/9.", "Alanlar 4t (ADE) ve 9t (ABC).", "9t − 4t = 5t = 30 → t = 6.", "Alan(ABC) = 54."], whyOthersWrong: ["45: 9·5 karışıklığı.", "24: küçük üçgenin alanı.", "36: 6t.", "60: 30·2."] }, 3)
  ]);
})();
