/* ============================================================
   MATEMATİK — Kümeler: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-kume: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-kume", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-kume", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-kume-101", "A = {1, 2, 3, 4} kümesinin eleman sayısı kaçtır?",
      ["4", "3", "5", "10", "1"], 0, "Kümede 1, 2, 3, 4 → 4 eleman.",
      { short: "s(A) = 4.", steps: ["Elemanları say.", "= 4."], whyOthersWrong: ["Eleman sayısı listedeki adettir."] }, 1),
    Q("matematik-mat-kume-102", "A = {1, 2, 3}, B = {3, 4, 5} ise A ∩ B nedir?",
      ["{3}", "{1,2,3,4,5}", "{ }", "{1,2}", "{4,5}"], 0, "Ortak eleman yalnız 3.",
      { short: "A ∩ B = {3}.", steps: ["Ortak elemanları al.", "= {3}."], whyOthersWrong: ["Kesişim ortak elemanlardır."] }, 1),
    Q("matematik-mat-kume-103", "A = {1, 2}, B = {2, 3} ise A ∪ B nedir?",
      ["{1,2,3}", "{2}", "{1,3}", "{1,2,2,3}", "{ }"], 0, "Birleşim: tüm elemanlar (tekrar yok) → {1,2,3}.",
      { short: "A ∪ B = {1,2,3}.", steps: ["Tüm elemanları birleştir.", "Tekrar yazılmaz."], whyOthersWrong: ["Birleşimde her eleman bir kez yazılır."] }, 1),
    Q("matematik-mat-kume-104", "Boş kümenin eleman sayısı kaçtır?",
      ["0", "1", "2", "Sonsuz", "Belirsiz"], 0, "Boş kümede eleman yoktur; s(∅) = 0.",
      { short: "s(∅) = 0.", steps: ["Boş küme = { }.", "Eleman sayısı 0."], whyOthersWrong: ["Boş kümede eleman bulunmaz."] }, 1),
    Q("matematik-mat-kume-105", "A = {a, b, c} kümesinin alt küme sayısı kaçtır?",
      ["8", "3", "6", "9", "4"], 0, "2³ = 8.",
      { short: "2³ = 8.", steps: ["3 elemanlı küme → 2³.", "= 8."], whyOthersWrong: ["Alt küme sayısı 2ⁿ'dir."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-kume-106", "s(A) = 5 olan bir kümenin özalt küme sayısı kaçtır?",
      ["31", "32", "30", "25", "16"], 0, "Özalt küme = 2⁵ − 1 = 31.",
      { short: "2⁵ − 1 = 31.", steps: ["Alt küme 2⁵ = 32.", "Özalt: kendisi hariç → 31."], whyOthersWrong: ["Özalt küme kümenin kendisini içermez."] }, 2),
    Q("matematik-mat-kume-107", "s(A) = 8, s(B) = 5, s(A ∩ B) = 3 ise s(A ∪ B) kaçtır?",
      ["10", "13", "16", "9", "11"], 0, "8 + 5 − 3 = 10.",
      { short: "8+5−3 = 10.", steps: ["s(A∪B) = s(A)+s(B)−s(A∩B).", "= 10."], whyOthersWrong: ["Kesişim bir kez sayılır."] }, 2),
    Q("matematik-mat-kume-108", "Bir sınıftaki 30 öğrenciden 18'i matematik, 15'i fizik kursuna gidiyor. Her öğrenci en az birine gidiyorsa ikisine birden giden kaç kişidir?",
      ["3", "33", "12", "5", "7"], 0, "18 + 15 − 30 = 3.",
      { short: "18+15−30 = 3.", steps: ["s(A∪B) = 30 = 18+15−ortak.", "Ortak = 3."], whyOthersWrong: ["Her öğrenci en az birinde → birleşim 30."] }, 2),
    Q("matematik-mat-kume-109", "A = {x : 1 ≤ x < 6, x doğal sayı} kümesinin eleman sayısı kaçtır?",
      ["5", "6", "4", "7", "3"], 0, "x = 1, 2, 3, 4, 5 → 5 eleman.",
      { short: "{1,2,3,4,5} → 5.", steps: ["1 dahil, 6 hariç.", "5 eleman."], whyOthersWrong: ["6 kümeye dahil değildir."] }, 2),
    Q("matematik-mat-kume-110", "s(A) = 4 olan bir kümenin 2 elemanlı alt kümelerinin sayısı kaçtır?",
      ["6", "8", "4", "12", "2"], 0, "C(4,2) = 6.",
      { short: "C(4,2) = 6.", steps: ["4 elemandan 2'li seçim.", "= 6."], whyOthersWrong: ["Kombinasyon ile bulunur."] }, 2),
    Q("matematik-mat-kume-111", "Evrensel küme E'de s(E) = 20, s(A) = 12 ise s(A') (tümleyen) kaçtır?",
      ["8", "12", "20", "32", "4"], 0, "20 − 12 = 8.",
      { short: "20 − 12 = 8.", steps: ["s(A') = s(E) − s(A).", "= 8."], whyOthersWrong: ["Tümleyen E'den çıkarılır."] }, 2),
    Q("matematik-mat-kume-112", "A ⊂ B, s(A) = 3, s(B) = 7 ise s(B \\ A) (B fark A) kaçtır?",
      ["4", "10", "3", "7", "21"], 0, "A ⊂ B olduğundan s(B\\A) = 7 − 3 = 4.",
      { short: "7 − 3 = 4.", steps: ["A, B'nin alt kümesi.", "s(B\\A) = 7 − 3 = 4."], whyOthersWrong: ["A tamamen B içinde olduğundan fark 4'tür."] }, 2),
    Q("matematik-mat-kume-113", "s(A ∪ B) = 25, s(A) = 15, s(B) = 18 ise s(A ∩ B) kaçtır?",
      ["8", "10", "7", "33", "12"], 0, "15 + 18 − 25 = 8.",
      { short: "15+18−25 = 8.", steps: ["s(A∩B) = s(A)+s(B)−s(A∪B).", "= 8."], whyOthersWrong: ["Birleşim formülünden çekilir."] }, 2),
    Q("matematik-mat-kume-114", "Yalnız A'da bulunan eleman sayısı s(A) − s(A∩B) ile bulunur. s(A) = 14, s(A∩B) = 6 ise yalnız A'da kaç eleman vardır?",
      ["8", "20", "6", "14", "2"], 0, "14 − 6 = 8.",
      { short: "14 − 6 = 8.", steps: ["Yalnız A = s(A) − ortak.", "= 8."], whyOthersWrong: ["Ortak elemanlar çıkarılır."] }, 2),
    Q("matematik-mat-kume-115", "A = {1, 2, 3, 4, 5}, B = {2, 4, 6} ise A \\ B kümesinin eleman sayısı kaçtır?",
      ["3", "2", "5", "1", "4"], 0, "A'dan B'dekiler çıkar: {1,3,5} → 3.",
      { short: "{1,3,5} → 3.", steps: ["2 ve 4 çıkar.", "Kalan {1,3,5}."], whyOthersWrong: ["6 zaten A'da yok."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-kume-116", "Bir grupta 40 kişi var. 25'i çay, 20'si kahve içiyor, 8'i ikisini de içmiyor. Hem çay hem kahve içen kaç kişidir?",
      ["13", "5", "32", "10", "8"], 0, "En az birini içen 40−8 = 32; 25+20−32 = 13.",
      { short: "25+20−32 = 13.", steps: ["En az biri = 40−8 = 32.", "Ortak = 45−32 = 13."], whyOthersWrong: ["Önce birleşim (içenler) bulunur."] }, 3),
    Q("matematik-mat-kume-117", "s(A) = 6, s(B) = 4 ve A ∩ B = ∅ ise s(A ∪ B) kaçtır?",
      ["10", "24", "2", "6", "8"], 0, "Ayrık kümeler: 6 + 4 = 10.",
      { short: "6 + 4 = 10.", steps: ["Kesişim boş → ortak yok.", "Toplam = 10."], whyOthersWrong: ["Ayrık kümede birleşim toplamdır."] }, 3),
    Q("matematik-mat-kume-118", "Bir kümenin alt küme sayısı, özalt küme sayısından 1 fazladır ve toplam alt küme sayısı 64'tür. Bu kümenin eleman sayısı kaçtır?",
      ["6", "5", "7", "8", "4"], 0, "2ⁿ = 64 → n = 6.",
      { short: "2ⁿ = 64 → n = 6.", steps: ["Alt küme 2ⁿ = 64.", "n = 6."], whyOthersWrong: ["2⁶ = 64'tür."] }, 3),
    Q("matematik-mat-kume-119", "30 kişilik bir sınıfta 12 kişi İngilizce, 18 kişi Almanca, 6 kişi her ikisini biliyor. Hiçbirini bilmeyen kaç kişidir?",
      ["6", "0", "24", "12", "4"], 0, "En az biri = 12+18−6 = 24; bilmeyenler 30−24 = 6.",
      { short: "30 − 24 = 6.", steps: ["Birleşim = 12+18−6 = 24.", "Bilmeyen = 6."], whyOthersWrong: ["Önce en az birini bilenler bulunur."] }, 3),
    Q("matematik-mat-kume-120", "A ve B kümeleri için s(A) = 20, s(B) = 16, yalnız A'da 9 eleman varsa s(A ∩ B) kaçtır?",
      ["11", "9", "7", "5", "4"], 0, "Yalnız A = s(A) − ortak → 9 = 20 − ortak → ortak = 11.",
      { short: "20 − 11 = 9 → ortak 11.", steps: ["Yalnız A = s(A) − s(A∩B).", "s(A∩B) = 20 − 9 = 11."], whyOthersWrong: ["Yalnız A formülünden çözülür."] }, 3),
    Q("matematik-mat-kume-121", "Üç kümede s(A∪B∪C) = 50, s(A) = 25, s(B) = 20, s(C) = 18, ikili kesişimler toplamı 15, üçlü kesişim 3 ise formül doğrulanır mı? s(A∪B∪C) bu verilerle kaçtır?",
      ["51", "50", "48", "63", "30"], 0, "25+20+18 − 15 + 3 = 51.",
      { short: "63 − 15 + 3 = 51.", steps: ["Tekiller toplamı 63.", "− ikili (15) + üçlü (3) = 51."], whyOthersWrong: ["İçerme-dışarma formülü: Σtek − Σikili + üçlü."] }, 3),
    Q("matematik-mat-kume-122", "s(A) = n olan bir kümenin alt küme sayısı 256 ise n kaçtır?",
      ["8", "16", "7", "9", "6"], 0, "2ⁿ = 256 = 2⁸ → n = 8.",
      { short: "2ⁿ = 256 → n = 8.", steps: ["256 = 2⁸.", "n = 8."], whyOthersWrong: ["256 ikinin 8. kuvvetidir."] }, 3),
    Q("matematik-mat-kume-123", "Bir kümenin 3 elemanlı alt kümelerinin sayısı 10 ise bu kümenin eleman sayısı kaçtır?",
      ["5", "10", "6", "4", "3"], 0, "C(n,3) = 10 → n = 5.",
      { short: "C(5,3) = 10 → n = 5.", steps: ["C(n,3) = 10.", "C(5,3) = 10 → n = 5."], whyOthersWrong: ["Deneme: C(5,3) = 10."] }, 3),
    Q("matematik-mat-kume-124", "s(A) = 10, s(B) = 7, s(A ∩ B) = k olduğuna göre s(A ∪ B)'nin alabileceği en küçük değer kaçtır?",
      ["10", "17", "7", "3", "13"], 0, "En küçük birleşim, B ⊂ A iken: k = 7 → s(A∪B) = 10.",
      { short: "B ⊂ A → s(A∪B) = 10.", steps: ["Kesişim en fazla 7 (s(B)).", "k=7 → birleşim = 10."], whyOthersWrong: ["Birleşim en az s(A)=10 olabilir."] }, 3),
    Q("matematik-mat-kume-125", "40 kişilik bir grupta herkes en az bir spor yapıyor. 22 kişi futbol, 18 kişi basketbol oynuyorsa yalnız futbol oynayan kaç kişidir?",
      ["22", "18", "4", "0", "20"], 0, "İkisini de oynayan 22+18−40 = 0; yalnız futbol = 22 − 0 = 22.",
      { short: "Ortak 0 → yalnız futbol 22.", steps: ["Ortak = 40 = 22+18−ortak → ortak = 0.", "Yalnız futbol = 22."], whyOthersWrong: ["Bu verilerde kesişim boştur."] }, 3)
  ]);
})();
