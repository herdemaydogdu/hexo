/* ============================================================
   MATEMATİK — Permütasyon, Kombinasyon ve Olasılık: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; hesaplar elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-olasilik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-olasilik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-olasilik", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-olasilik-101", "3! (3 faktöriyel) kaçtır?",
      ["6", "3", "9", "1", "8"], 0, "3! = 3·2·1 = 6.",
      { short: "3·2·1 = 6.", steps: ["Faktöriyel çarpımdır.", "= 6."], whyOthersWrong: ["3'e kadar çarpım."] }, 1),
    Q("matematik-mat-olasilik-102", "Hilesiz bir zar atıldığında 4 gelme olasılığı kaçtır?",
      ["1/6", "1/4", "4/6", "1/2", "1/3"], 0, "6 eşit olasılıktan biri: 1/6.",
      { short: "1/6.", steps: ["6 yüz, 1 istenen.", "= 1/6."], whyOthersWrong: ["İstenen/tüm durum."] }, 1),
    Q("matematik-mat-olasilik-103", "Bir madeni para atıldığında yazı gelme olasılığı kaçtır?",
      ["1/2", "1", "1/4", "2", "1/3"], 0, "İki eşit sonuç: 1/2.",
      { short: "1/2.", steps: ["Yazı/tura eşit.", "= 1/2."], whyOthersWrong: ["2 durumdan 1'i."] }, 1),
    Q("matematik-mat-olasilik-104", "0! (sıfır faktöriyel) kaçtır?",
      ["1", "0", "Tanımsız", "10", "2"], 0, "Tanım gereği 0! = 1.",
      { short: "0! = 1.", steps: ["Tanım: 0! = 1.", ""], whyOthersWrong: ["Faktöriyel tanımı."] }, 1),
    Q("matematik-mat-olasilik-105", "İçinde 3 kırmızı, 2 mavi top olan torbadan bir top çekiliyor. Kırmızı gelme olasılığı kaçtır?",
      ["3/5", "2/5", "3/2", "1/3", "1/5"], 0, "3 kırmızı / 5 toplam = 3/5.",
      { short: "3/5.", steps: ["Kırmızı/toplam.", "= 3/5."], whyOthersWrong: ["Toplam 5 top."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-olasilik-106", "5 farklı kitap bir rafa kaç farklı şekilde dizilebilir?",
      ["120", "25", "20", "60", "5"], 0, "5! = 120.",
      { short: "5! = 120.", steps: ["Sıralama = 5!.", "= 120."], whyOthersWrong: ["Permütasyon = n!."] }, 2),
    Q("matematik-mat-olasilik-107", "C(5, 2) (5'in 2'li kombinasyonu) kaçtır?",
      ["10", "20", "25", "15", "5"], 0, "5!/(2!·3!) = 10.",
      { short: "= 10.", steps: ["5·4/2 = 10.", ""], whyOthersWrong: ["Seçimde sıra önemsiz."] }, 2),
    Q("matematik-mat-olasilik-108", "P(4, 2) (4'ün 2'li permütasyonu) kaçtır?",
      ["12", "6", "8", "24", "16"], 0, "4·3 = 12.",
      { short: "4·3 = 12.", steps: ["P(n,r)=n·(n−1)...", "4·3 = 12."], whyOthersWrong: ["Sıralı seçim."] }, 2),
    Q("matematik-mat-olasilik-109", "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?",
      ["1/2", "1/3", "2/3", "1/6", "3/6"], 0, "Çiftler 2,4,6 → 3/6 = 1/2.",
      { short: "3/6 = 1/2.", steps: ["Çiftler: 2,4,6.", "= 1/2."], whyOthersWrong: ["3 çift / 6 yüz."] }, 2),
    Q("matematik-mat-olasilik-110", "8 kişilik bir gruptan 3 kişilik komite kaç farklı şekilde seçilir?",
      ["56", "336", "24", "512", "40"], 0, "C(8,3) = 8·7·6/6 = 56.",
      { short: "C(8,3) = 56.", steps: ["8·7·6/3! = 336/6.", "= 56."], whyOthersWrong: ["Komitede sıra önemsiz."] }, 2),
    Q("matematik-mat-olasilik-111", "İki zar atıldığında zarların toplamının 7 olma olasılığı kaçtır?",
      ["1/6", "1/12", "7/36", "1/9", "5/36"], 0, "Toplam 7 için 6 durum / 36 → 1/6.",
      { short: "6/36 = 1/6.", steps: ["(1,6)...(6,1) → 6 durum.", "6/36 = 1/6."], whyOthersWrong: ["36 eşit durum."] }, 2),
    Q("matematik-mat-olasilik-112", "52 kartlık desteden bir kart çekiliyor. As gelme olasılığı kaçtır?",
      ["1/13", "1/52", "4/13", "1/4", "13/52"], 0, "4 as / 52 = 1/13.",
      { short: "4/52 = 1/13.", steps: ["4 as var.", "4/52 = 1/13."], whyOthersWrong: ["As sayısı 4."] }, 2),
    Q("matematik-mat-olasilik-113", "\"KALEM\" kelimesinin harfleri kaç farklı şekilde sıralanır?",
      ["120", "60", "24", "20", "720"], 0, "5 farklı harf → 5! = 120.",
      { short: "5! = 120.", steps: ["Harfler farklı.", "= 120."], whyOthersWrong: ["Tekrarsız 5 harf."] }, 2),
    Q("matematik-mat-olasilik-114", "Bir torbada 4 beyaz, 6 siyah top var. Çekilen topun siyah olmama olasılığı kaçtır?",
      ["2/5", "3/5", "4/10", "1/6", "6/10"], 0, "Siyah olmama = beyaz: 4/10 = 2/5.",
      { short: "4/10 = 2/5.", steps: ["Beyaz olasılığı.", "= 2/5."], whyOthersWrong: ["Tümleyen = beyaz."] }, 2),
    Q("matematik-mat-olasilik-115", "C(6, 4) kaçtır?",
      ["15", "30", "360", "24", "20"], 0, "C(6,4) = C(6,2) = 15.",
      { short: "= 15.", steps: ["C(6,4)=C(6,2)=6·5/2.", "= 15."], whyOthersWrong: ["Simetri: C(n,r)=C(n,n−r)."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-olasilik-116", "\"KİTAP\" kelimesinin harfleri, K ve P yan yana (bir arada) olacak şekilde kaç farklı şekilde sıralanır?",
      ["48", "24", "120", "12", "60"], 0, "K,P bir blok: 4 birim → 4! = 24; blok içi 2! = 2; 24·2 = 48.",
      { short: "4!·2! = 48.", steps: ["KP bir blok → 4 öğe: 4!=24.", "Blok içi 2! → 48."], whyOthersWrong: ["Yan yana → blok yöntemi."] }, 3),
    Q("matematik-mat-olasilik-117", "Bir torbada 3 kırmızı, 2 mavi top var. Ardışık iki top (geri koymadan) çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?",
      ["3/10", "9/25", "1/2", "6/20", "2/5"], 0, "(3/5)·(2/4) = 6/20 = 3/10.",
      { short: "3/5·2/4 = 3/10.", steps: ["İlk kırmızı 3/5.", "İkinci 2/4 → 3/10."], whyOthersWrong: ["Geri konmaz, sayı azalır."] }, 3),
    Q("matematik-mat-olasilik-118", "İki zar atıldığında en az bir zarda 6 gelme olasılığı kaçtır?",
      ["11/36", "1/6", "1/3", "12/36", "10/36"], 0, "1 − (5/6)² = 1 − 25/36 = 11/36.",
      { short: "1 − 25/36 = 11/36.", steps: ["Hiç 6 gelmeme: 25/36.", "Tümleyen: 11/36."], whyOthersWrong: ["'En az bir' → tümleyen."] }, 3),
    Q("matematik-mat-olasilik-119", "5 kişi yuvarlak bir masaya kaç farklı şekilde oturabilir? (dairesel permütasyon)",
      ["24", "120", "20", "60", "12"], 0, "Dairesel: (5−1)! = 4! = 24.",
      { short: "(5−1)! = 24.", steps: ["Dairesel = (n−1)!.", "4! = 24."], whyOthersWrong: ["Dönmeler aynı sayılır."] }, 3),
    Q("matematik-mat-olasilik-120", "6 kişilik gruptan 2'si kesinlikle seçilecek şekilde 4 kişilik takım kaç şekilde kurulur?",
      ["6", "15", "4", "20", "10"], 0, "2 kişi sabit; kalan 4'ten 2 seçilir: C(4,2) = 6.",
      { short: "C(4,2) = 6.", steps: ["2 kişi kesin → kalan 2'yi 4'ten seç.", "C(4,2)=6."], whyOthersWrong: ["Sabit üyeler çıkarılır."] }, 3),
    Q("matematik-mat-olasilik-121", "Bir sınıfta 12 kız, 8 erkek var. Rastgele seçilen bir öğrencinin erkek olma olasılığı kaçtır?",
      ["2/5", "3/5", "8/12", "1/2", "2/3"], 0, "8 / 20 = 2/5.",
      { short: "8/20 = 2/5.", steps: ["Toplam 20 öğrenci.", "8/20 = 2/5."], whyOthersWrong: ["Erkek/toplam."] }, 3),
    Q("matematik-mat-olasilik-122", "3 farklı matematik, 2 farklı fizik kitabı, aynı türler yan yana olacak şekilde bir rafa kaç şekilde dizilir?",
      ["24", "12", "48", "120", "6"], 0, "Bloklar: 2! (türlerin sırası) · 3! (mat) · 2! (fizik) = 2·6·2 = 24.",
      { short: "2!·3!·2! = 24.", steps: ["Tür blokları 2! sıralı.", "İçler 3! ve 2! → 24."], whyOthersWrong: ["Her tür kendi içinde + bloklar."] }, 3),
    Q("matematik-mat-olasilik-123", "1'den 20'ye kadar sayılardan biri seçiliyor. Seçilen sayının asal olma olasılığı kaçtır?",
      ["2/5", "1/2", "1/4", "8/20", "3/10"], 0, "20'ye kadar 8 asal (2,3,5,7,11,13,17,19): 8/20 = 2/5.",
      { short: "8/20 = 2/5.", steps: ["8 asal var.", "8/20 = 2/5."], whyOthersWrong: ["Asal sayısı 8."] }, 3),
    Q("matematik-mat-olasilik-124", "Bir madeni para 3 kez atılıyor. Tam olarak 2 kez tura gelme olasılığı kaçtır?",
      ["3/8", "1/2", "1/8", "1/4", "3/4"], 0, "C(3,2)·(1/2)³ = 3/8.",
      { short: "3/8.", steps: ["2 tura yeri: C(3,2)=3.", "3·(1/8) = 3/8."], whyOthersWrong: ["8 eşit dizilimden 3'ü."] }, 3),
    Q("matematik-mat-olasilik-125", "8 kişilik gruptan başkan ve yardımcı (iki farklı görev) kaç şekilde seçilir?",
      ["56", "28", "64", "40", "16"], 0, "Sıralı seçim P(8,2) = 8·7 = 56.",
      { short: "8·7 = 56.", steps: ["Görevler farklı → sıralı.", "P(8,2)=56."], whyOthersWrong: ["Sıra önemli → permütasyon."] }, 3)
  ]);
})();
