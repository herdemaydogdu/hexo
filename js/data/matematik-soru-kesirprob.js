/* ============================================================
   MATEMATİK — Kesir Problemleri: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-kesirprob: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-kesirprob", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-kesirprob", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-kesirprob-101", "Bir sayının 1/3'ü 12 ise bu sayı kaçtır?",
      ["36", "4", "15", "9", "24"], 0, "x/3 = 12 → x = 36.",
      { short: "x = 12·3 = 36.", steps: ["x/3 = 12.", "x = 36."], whyOthersWrong: ["1/3'ü 12 ise tamı 36."] }, 1),
    Q("matematik-mat-kesirprob-102", "Bir pastanın 3/8'i yeniyorsa geriye kaçta kaçı kalır?",
      ["5/8", "3/8", "1/8", "5/3", "8/5"], 0, "1 − 3/8 = 5/8.",
      { short: "1 − 3/8 = 5/8.", steps: ["Tüm pasta 1.", "1 − 3/8 = 5/8."], whyOthersWrong: ["Kalan, bütünden çıkarılır."] }, 1),
    Q("matematik-mat-kesirprob-103", "24 sayfalık bir kitabın 1/4'ü okunmuşsa kaç sayfa okunmuştur?",
      ["6", "4", "8", "12", "20"], 0, "24 · 1/4 = 6.",
      { short: "24/4 = 6.", steps: ["1/4 → bölü 4.", "= 6."], whyOthersWrong: ["Dörtte biri 6'dır."] }, 1),
    Q("matematik-mat-kesirprob-104", "Bir kovanın 2/5'i 10 litre su alıyorsa kovanın tamamı kaç litre alır?",
      ["25", "4", "20", "50", "15"], 0, "(2/5)x = 10 → x = 25.",
      { short: "x = 10·5/2 = 25.", steps: ["2/5'i 10.", "Tamamı = 25."], whyOthersWrong: ["Orantı kurulur."] }, 1),
    Q("matematik-mat-kesirprob-105", "Bir ipin 3/4'ü 12 metre ise ipin tamamı kaç metredir?",
      ["16", "9", "48", "15", "8"], 0, "(3/4)x = 12 → x = 16.",
      { short: "x = 12·4/3 = 16.", steps: ["3/4'ü 12.", "Tamamı = 16."], whyOthersWrong: ["Parçadan bütüne orantı."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-kesirprob-106", "Bir kitabın 1/3'ü ilk gün, 1/4'ü ikinci gün okunuyor. Toplam kaçta kaçı okunmuştur?",
      ["7/12", "2/7", "5/12", "1/7", "2/12"], 0, "1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
      { short: "4/12 + 3/12 = 7/12.", steps: ["Ortak payda 12.", "= 7/12."], whyOthersWrong: ["Paydalar eşitlenir."] }, 2),
    Q("matematik-mat-kesirprob-107", "Bir deponun 2/3'ü doludur. 1/6'sı boşaltılırsa deponun kaçta kaçı dolu kalır?",
      ["1/2", "1/3", "5/6", "1/6", "2/3"], 0, "2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2.",
      { short: "2/3 − 1/6 = 1/2.", steps: ["4/6 − 1/6 = 3/6.", "= 1/2."], whyOthersWrong: ["Boşaltılan dolu kısımdan çıkar."] }, 2),
    Q("matematik-mat-kesirprob-108", "Bir paranın 1/5'ini harcayan biri 80 TL harcamıştır. Başlangıçta kaç TL'si vardı?",
      ["400", "16", "100", "160", "320"], 0, "(1/5)x = 80 → x = 400.",
      { short: "x = 80·5 = 400.", steps: ["1/5'i 80.", "Tamamı = 400."], whyOthersWrong: ["Beşte biri 80 ise tamı 400."] }, 2),
    Q("matematik-mat-kesirprob-109", "Bir sayının 2/3'ü ile 1/6'sının toplamı 15 ise bu sayı kaçtır?",
      ["18", "12", "30", "10", "24"], 0, "2/3 + 1/6 = 5/6; (5/6)x = 15 → x = 18.",
      { short: "(5/6)x = 15 → x = 18.", steps: ["2/3 + 1/6 = 5/6.", "x = 15·6/5 = 18."], whyOthersWrong: ["Önce kesirler toplanır."] }, 2),
    Q("matematik-mat-kesirprob-110", "Bir öğrenci parasının 1/4'ünü kitaba, 1/3'ünü kırtasiyeye harcadı. Parasının kaçta kaçı kaldı?",
      ["5/12", "7/12", "1/2", "1/12", "2/7"], 0, "Harcanan 1/4+1/3 = 7/12; kalan 1 − 7/12 = 5/12.",
      { short: "1 − 7/12 = 5/12.", steps: ["Harcanan = 7/12.", "Kalan = 5/12."], whyOthersWrong: ["Önce harcanan toplanır."] }, 2),
    Q("matematik-mat-kesirprob-111", "Bir su tankının 3/5'i 60 litre ise tankın tamamı kaç litredir?",
      ["100", "36", "120", "80", "180"], 0, "(3/5)x = 60 → x = 100.",
      { short: "x = 60·5/3 = 100.", steps: ["3/5'i 60.", "Tamamı = 100."], whyOthersWrong: ["Parça-bütün orantısı."] }, 2),
    Q("matematik-mat-kesirprob-112", "Bir miktar unun 2/7'si kullanılınca geriye 25 kg kalıyor. Başlangıçta kaç kg un vardı?",
      ["35", "50", "32", "75", "70"], 0, "Kalan 5/7'si 25 → tamamı 25·7/5 = 35.",
      { short: "Kalan 5/7 = 25 → 35 kg.", steps: ["Kalan oran = 1 − 2/7 = 5/7.", "(5/7)x = 25 → x = 35."], whyOthersWrong: ["Kalan oran 5/7'dir."] }, 2),
    Q("matematik-mat-kesirprob-113", "Bir kumaşın 1/2'si bir elbiseye, 1/3'ü bir eteğe kullanılıyor. Geriye 3 metre kalıyorsa kumaş kaç metreydi?",
      ["18", "12", "6", "9", "24"], 0, "Kalan oran 1 − (1/2+1/3) = 1/6; (1/6)x = 3 → x = 18.",
      { short: "Kalan 1/6 = 3 → 18 m.", steps: ["Kullanılan = 5/6, kalan 1/6.", "x = 3·6 = 18."], whyOthersWrong: ["Kalan oran 1/6'dır."] }, 2),
    Q("matematik-mat-kesirprob-114", "Bir havuzun 3/4'ü dolu iken 1/2'si boşaltılırsa havuzun kaçta kaçı dolu kalır?",
      ["1/4", "1/2", "3/8", "1/8", "5/8"], 0, "3/4 − 1/2 = 3/4 − 2/4 = 1/4.",
      { short: "3/4 − 1/2 = 1/4.", steps: ["2/4 çıkar.", "= 1/4."], whyOthersWrong: ["Boşaltma havuzun yarısı kadardır."] }, 2),
    Q("matematik-mat-kesirprob-115", "Bir sayının 3/5'i 18 ise bu sayının 2/3'ü kaçtır?",
      ["20", "30", "12", "15", "24"], 0, "Sayı 30; 2/3·30 = 20.",
      { short: "Sayı 30 → 2/3·30 = 20.", steps: ["(3/5)x = 18 → x = 30.", "2/3·30 = 20."], whyOthersWrong: ["Önce sayı bulunur."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-kesirprob-116", "Bir yolculukta yolun 1/4'ü kara, kalanın 2/3'ü deniz, geri kalanı hava yoluyla alınıyor. Hava yolu tüm yolun kaçta kaçıdır?",
      ["1/4", "1/3", "1/2", "1/6", "1/12"], 0, "Kara 1/4; kalan 3/4'ün 2/3'ü deniz = 1/2; geri kalan 3/4 − 1/2 = 1/4.",
      { short: "Hava yolu = 1/4.", steps: ["Kara 1/4, kalan 3/4.", "Deniz = (2/3)(3/4) = 1/2.", "Hava = 1 − 1/4 − 1/2 = 1/4."], whyOthersWrong: ["'Kalanın' oranı tüm yola çevrilir."] }, 3),
    Q("matematik-mat-kesirprob-117", "Bir kişi parasının önce 1/3'ünü, sonra kalanın 1/2'sini harcıyor. Geriye 200 TL kalıyorsa başlangıçta kaç TL'si vardı?",
      ["600", "400", "500", "300", "800"], 0, "1/3 sonra kalan 2/3; onun 1/2'si harcanır → kalan (2/3)(1/2) = 1/3; (1/3)x = 200 → x = 600.",
      { short: "Kalan oran 1/3 = 200 → 600.", steps: ["İlk harcama sonrası kalan 2/3.", "Sonra yarısı → kalan 1/3.", "(1/3)x = 200 → x = 600."], whyOthersWrong: ["İkinci oran kalana uygulanır."] }, 3),
    Q("matematik-mat-kesirprob-118", "Bir deponun 2/5'i doludur. Depoya 30 litre eklenince 4/5'i dolar. Deponun tamamı kaç litredir?",
      ["75", "50", "60", "100", "45"], 0, "Eklenen oran 4/5 − 2/5 = 2/5; (2/5)x = 30 → x = 75.",
      { short: "(2/5)x = 30 → x = 75.", steps: ["Doluluk artışı = 2/5.", "x = 30·5/2 = 75."], whyOthersWrong: ["Eklenen oran farktan bulunur."] }, 3),
    Q("matematik-mat-kesirprob-119", "Bir sayının 1/2'si ile 1/3'ünün farkı 9 ise bu sayı kaçtır?",
      ["54", "27", "18", "45", "36"], 0, "1/2 − 1/3 = 1/6; (1/6)x = 9 → x = 54.",
      { short: "(1/6)x = 9 → x = 54.", steps: ["1/2 − 1/3 = 1/6.", "x = 54."], whyOthersWrong: ["Önce kesir farkı bulunur."] }, 3),
    Q("matematik-mat-kesirprob-120", "Bir kitabın ilk gün 1/4'ü, ikinci gün kalanın 1/3'ü okunuyor. İki günde kitabın kaçta kaçı okunmuştur?",
      ["1/2", "7/12", "5/12", "1/3", "2/3"], 0, "İlk 1/4; kalan 3/4'ün 1/3'ü = 1/4; toplam 1/4 + 1/4 = 1/2.",
      { short: "1/4 + 1/4 = 1/2.", steps: ["İlk gün 1/4, kalan 3/4.", "İkinci gün (1/3)(3/4) = 1/4.", "Toplam 1/2."], whyOthersWrong: ["İkinci oran kalana uygulanır."] }, 3),
    Q("matematik-mat-kesirprob-121", "Bir baba parasının 1/2'sini büyük çocuğuna, kalanın 2/3'ünü küçük çocuğuna veriyor. Babaya kalan para başlangıcın kaçta kaçıdır?",
      ["1/6", "1/3", "1/2", "2/3", "1/4"], 0, "Büyük 1/2; kalan 1/2'nin 2/3'ü = 1/3 küçük; baba = 1 − 1/2 − 1/3 = 1/6.",
      { short: "Baba = 1/6.", steps: ["Büyük 1/2, kalan 1/2.", "Küçük = (2/3)(1/2) = 1/3.", "Baba = 1 − 1/2 − 1/3 = 1/6."], whyOthersWrong: ["İkinci pay kalana uygulanır."] }, 3),
    Q("matematik-mat-kesirprob-122", "Bir testten geçen öğrencilerin sayısı, geçemeyenlerin 3/2 katıdır. Sınıf 30 kişilik ise kaç kişi geçmiştir?",
      ["18", "12", "20", "15", "10"], 0, "Geçen 3k, geçemeyen 2k; 5k = 30 → k = 6 → geçen 18.",
      { short: "5k = 30 → geçen 18.", steps: ["Geçen:geçemeyen = 3:2.", "5k = 30 → geçen 3k = 18."], whyOthersWrong: ["Oran 3:2 olarak kurulur."] }, 3),
    Q("matematik-mat-kesirprob-123", "Bir kovada bulunan suyun 1/4'ü dökülünce geriye 9 litre kalıyor. Başlangıçta kovada kaç litre su vardı?",
      ["12", "36", "11,25", "13", "45"], 0, "Kalan oran 3/4; (3/4)x = 9 → x = 12.",
      { short: "(3/4)x = 9 → x = 12.", steps: ["Kalan = 1 − 1/4 = 3/4.", "x = 9·4/3 = 12."], whyOthersWrong: ["Kalan oran 3/4'tür."] }, 3),
    Q("matematik-mat-kesirprob-124", "Bir sayının 3/4'ü, başka bir sayının 2/3'üne eşittir. Bu sayıların oranı (birinci/ikinci) kaçtır?",
      ["8/9", "9/8", "1/2", "2/1", "3/4"], 0, "(3/4)a = (2/3)b → a/b = (2/3)/(3/4) = (2/3)·(4/3) = 8/9.",
      { short: "a/b = 8/9.", steps: ["(3/4)a = (2/3)b.", "a/b = (2/3)·(4/3) = 8/9."], whyOthersWrong: ["Eşitlikten oran çözülür."] }, 3),
    Q("matematik-mat-kesirprob-125", "Bir işçi bir işin 2/5'ini 4 günde yapıyor. Aynı hızla işin tamamını kaç günde bitirir?",
      ["10", "8", "12", "9", "6"], 0, "Hız: (2/5)/4 = 1/10 (gün başı); tamamı 10 gün.",
      { short: "Hız 1/10 → 10 gün.", steps: ["Günlük = (2/5)/4 = 1/10.", "Tüm iş = 10 gün."], whyOthersWrong: ["Günlük hız tersine çevrilir."] }, 3)
  ]);
})();
