/* ============================================================
   MATEMATİK — Bölme ve Bölünebilme: 25 özgün TYT hazırlık sorusu
   Kaynaklar yalnız kapsam, tarz ve zorluk analizi için kullanıldı.
   Soru metinleri, sayılar ve çözümler özgün hazırlanmıştır.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-bolme: content-loader yüklenmedi"); return; }

  var Q = function (no, q, options, answer, explain, steps, difficulty, skill) {
    return {
      id: "matematik-mat-bolme-" + String(no).padStart(3, "0"),
      subject: "matematik", unit: "mat-bolme", q: q,
      options: options, answer: answer, explain: explain,
      solution: { short: explain, steps: steps, whyOthersWrong: ["Diğer seçenekler bölme veya bölünebilme koşullarının tamamını sağlamaz."] },
      difficulty: difficulty, skill: skill || "sayısal muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-bolme", [
    Q(1, "347 sayısının 12 ile bölümünden elde edilen bölüm ile kalanın toplamı kaçtır?",
      ["37", "38", "39", "40", "41"], 2,
      "347 = 12·28 + 11 olduğundan bölüm 28, kalan 11 ve toplam 39'dur.",
      ["12·28 = 336 bulunur.", "347 − 336 = 11 kalır.", "28 + 11 = 39."], 1, "bölme algoritması"),

    Q(2, "Bir doğal sayının 17 ile bölümünde bölüm 8, kalan 5'tir. Bu doğal sayı kaçtır?",
      ["131", "136", "141", "146", "151"], 2,
      "Bölünen = bölen·bölüm + kalan bağıntısından sayı 17·8 + 5 = 141'dir.",
      ["Bölünen = 17·8 + 5 yazılır.", "136 + 5 = 141 bulunur."], 1, "bölme algoritması"),

    Q(3, "7a4 üç basamaklı sayısı 9 ile tam bölünebildiğine göre a kaçtır?",
      ["3", "5", "6", "7", "8"], 3,
      "Rakamlar toplamı 7 + a + 4 = 11 + a'dır. Bu toplamın 18 olması için a = 7 olmalıdır.",
      ["9'a bölünebilmede rakamlar toplamı 9'un katıdır.", "11 + a = 18 eşitliğinden a = 7."], 1, "rakam analizi"),

    Q(4, "58b üç basamaklı sayısı 6 ile tam bölünebilmektedir. b'nin alabileceği değerlerin toplamı kaçtır?",
      ["6", "8", "10", "12", "14"], 2,
      "6 için sayı hem 2'ye hem 3'e bölünmelidir. b çift ve 13 + b, 3'ün katı olmalıdır; b = 2 veya 8, toplam 10'dur.",
      ["Çift rakamlar 0, 2, 4, 6, 8'dir.", "13 + b'nin 3'ün katı olması b = 2 veya 8 verir.", "2 + 8 = 10."], 2, "birleşik bölünebilme"),

    Q(5, "4a72 dört basamaklı sayısı 8 ile tam bölünebilmektedir. a rakamı kaç farklı değer alabilir?",
      ["3", "4", "5", "6", "7"], 2,
      "Son üç basamak a72'dir. 100a + 72'nin 8'e bölünmesi için a çift olmalıdır; 0, 2, 4, 6, 8 olmak üzere 5 değer vardır.",
      ["8'e bölünebilmede son üç basamak incelenir.", "100a + 72 ≡ 4a (mod 8).", "a çift olmalı: 5 olasılık."], 2, "modüler düşünme"),

    Q(6, "63a5 dört basamaklı sayısı 11 ile tam bölünebildiğine göre a kaçtır?",
      ["0", "1", "2", "3", "4"], 2,
      "Tek ve çift sıradaki rakamların toplam farkı (6 + a) − (3 + 5) = a − 2'dir. Bu fark 0 olacağından a = 2'dir.",
      ["11 kuralı: dönüşümlü basamak toplamlarının farkı 11'in katıdır.", "a − 2 = 0 → a = 2."], 2, "11'e bölünebilme"),

    Q(7, "2⁴·3² sayısının kaç tane pozitif tam böleni vardır?",
      ["12", "15", "18", "20", "24"], 1,
      "Pozitif bölen sayısı üslerin bir fazlalarının çarpımıdır: (4 + 1)(2 + 1) = 15.",
      ["Asal çarpan üsleri 4 ve 2'dir.", "(4 + 1)(2 + 1) = 5·3 = 15."], 1, "bölen sayısı"),

    Q(8, "360 sayısının pozitif tam bölenlerinin sayısı kaçtır?",
      ["18", "20", "24", "28", "30"], 2,
      "360 = 2³·3²·5 olduğundan bölen sayısı (3 + 1)(2 + 1)(1 + 1) = 24'tür.",
      ["360 = 8·45 = 2³·3²·5.", "Bölen sayısı 4·3·2 = 24."], 2, "asal çarpanlara ayırma"),

    Q(9, "n doğal sayısının 7 ile bölümünden kalan 4'tür. Buna göre 3n + 5 sayısının 7 ile bölümünden kalan kaçtır?",
      ["1", "2", "3", "4", "5"], 2,
      "n ≡ 4 (mod 7) olduğundan 3n + 5 ≡ 3·4 + 5 = 17 ≡ 3 (mod 7).",
      ["n yerine kalan sınıfı olan 4 kullanılır.", "3·4 + 5 = 17.", "17'nin 7 ile bölümünden kalan 3."], 2, "kalan muhakemesi"),

    Q(10, "A sayısının 8 ile bölümünden kalan 5, B sayısının 8 ile bölümünden kalan 6'dır. A + B'nin 8 ile bölümünden kalan kaçtır?",
      ["1", "2", "3", "4", "5"], 2,
      "Kalanlar toplanır: 5 + 6 = 11 ve 11'in 8 ile bölümünden kalan 3'tür.",
      ["A + B ≡ 5 + 6 ≡ 11 (mod 8).", "11 ≡ 3 (mod 8)."], 1, "kalanların toplamı"),

    Q(11, "A sayısının 9 ile bölümünden kalan 4, B sayısının 9 ile bölümünden kalan 7'dir. A·B'nin 9 ile bölümünden kalan kaçtır?",
      ["0", "1", "2", "3", "4"], 1,
      "Çarpımın kalanı 4·7 = 28'in kalanı ile aynıdır. 28 = 9·3 + 1 olduğundan sonuç 1'dir.",
      ["A·B ≡ 4·7 = 28 (mod 9).", "28'in 9'a bölümünden kalan 1."], 2, "kalanların çarpımı"),

    Q(12, "12 ile tam bölünebilen en küçük üç basamaklı doğal sayı kaçtır?",
      ["102", "104", "108", "112", "120"], 2,
      "100'den büyük ilk 12 katı 12·9 = 108'dir.",
      ["12·8 = 96 iki basamaklıdır.", "Bir sonraki kat 12·9 = 108'dir."], 1, "kat bulma"),

    Q(13, "15 ile tam bölünebilen en büyük üç basamaklı doğal sayı kaçtır?",
      ["975", "980", "985", "990", "995"], 3,
      "15'in üç basamaklı en büyük katı 15·66 = 990'dır.",
      ["999 ÷ 15 işleminde bölüm 66'dır.", "15·66 = 990."], 1, "kat bulma"),

    Q(14, "10'dan büyük en küçük doğal sayı; 5 ile bölündüğünde 2, 3 ile bölündüğünde 1 kalanını veriyor. Bu sayı kaçtır?",
      ["12", "17", "22", "27", "32"], 2,
      "5 ile bölümünden 2 kalanını veren sayılar 12, 17, 22, ... biçimindedir. Bunlardan 3 ile bölümünden 1 kalanını veren ilk sayı 22'dir.",
      ["Adaylar: 12, 17, 22, 27, ...", "12'nin kalanı 0, 17'nin 2, 22'nin 1'dir."], 2, "ortak kalan koşulu"),

    Q(15, "n bir tam sayı olmak üzere aşağıdaki ifadelerden hangisi daima çifttir?",
      ["n²", "n + 1", "n(n + 1)", "2n + 1", "n² + 1"], 2,
      "n ve n + 1 ardışık iki tam sayıdır; bunlardan biri mutlaka çift olduğundan çarpımları daima çifttir.",
      ["Ardışık iki sayıdan biri çifttir.", "Bu nedenle n(n + 1) her durumda 2'ye bölünür."], 2, "bölünebilirlik ispatı"),

    Q(16, "Bir doğal sayı 13 ile bölündüğünde bölüm, kalanın 2 katı oluyor. Kalan 6 olduğuna göre bu doğal sayı kaçtır?",
      ["150", "156", "162", "168", "174"], 2,
      "Kalan 6 ise bölüm 12'dir. Sayı 13·12 + 6 = 162 bulunur.",
      ["Bölüm = 2·6 = 12.", "Bölünen = 13·12 + 6 = 162."], 2, "bölme algoritması"),

    Q(17, "2a34b beş basamaklı sayısı 45 ile tam bölünebilmektedir. Buna göre kaç farklı (a, b) rakam çifti vardır?",
      ["1", "2", "3", "4", "5"], 2,
      "45 = 5·9'dur. b, 0 veya 5 olmalıdır. b = 0 için a = 0 veya 9; b = 5 için a = 4 olur. Toplam 3 çift vardır.",
      ["5'e bölünebilme b ∈ {0,5} verir.", "Rakamlar toplamı 9 + a + b, 9'un katı olmalı.", "(a,b) = (0,0), (9,0) veya (4,5)."], 3, "çoklu bölünebilme"),

    Q(18, "7²⁰²⁵ sayısının 6 ile bölümünden kalan kaçtır?",
      ["0", "1", "2", "3", "5"], 1,
      "7 sayısı 6 ile bölümde 1'e denktir. Bu nedenle 7²⁰²⁵ ≡ 1²⁰²⁵ ≡ 1 (mod 6).",
      ["7 = 6 + 1 olduğundan 7 ≡ 1 (mod 6).", "Her pozitif kuvvette kalan 1'dir."], 2, "kuvvetlerde kalan"),

    Q(19, "2¹⁰⁰ sayısının 3 ile bölümünden kalan kaçtır?",
      ["0", "1", "2", "3", "4"], 1,
      "2'nin 3'e göre kuvvet kalanları 2, 1 biçiminde iki adımda tekrar eder. 100 çift olduğundan kalan 1'dir.",
      ["2¹ ≡ 2, 2² ≡ 1 (mod 3).", "Periyot 2 ve 100 çift olduğundan kalan 1."], 2, "periyodik kalan"),

    Q(20, "1 + 2 + 3 + ... + 100 toplamının 9 ile bölümünden kalan kaçtır?",
      ["0", "1", "2", "4", "8"], 1,
      "Toplam 100·101/2 = 5050'dir. 5050 = 9·561 + 1 olduğundan kalan 1'dir.",
      ["Ardışık toplam formülüyle 5050 bulunur.", "5050 − 5049 = 1."], 2, "toplamda kalan"),

    Q(21, "157 kitap, her kutuda en fazla 12 kitap olacak biçimde kutulanacaktır. Tüm kitapların yerleştirilebilmesi için en az kaç kutu gerekir?",
      ["12", "13", "14", "15", "16"], 2,
      "157 = 12·13 + 1'dir. On üç kutu 156 kitap alır; kalan bir kitap için bir kutu daha gerekir. Sonuç 14'tür.",
      ["157'nin 12'ye bölümünde bölüm 13, kalan 1'dir.", "Kalan için ek kutu gerekir: 13 + 1 = 14."], 1, "günlük hayat problemi"),

    Q(22, "Bir salondaki sandalye sayısı 50 ile 70 arasındadır. Sandalyeler sekizerli sıralandığında 5 sandalye artıyor ve toplam sandalye sayısı 3 ile tam bölünüyor. Salonda kaç sandalye vardır?",
      ["53", "57", "61", "65", "69"], 4,
      "50–70 arasında 8 ile bölümünden 5 kalanını veren sayılar 53, 61 ve 69'dur. Bunlardan yalnız 69, 3 ile tam bölünür.",
      ["Adaylar: 53, 61, 69.", "Rakam toplamları sırasıyla 8, 7 ve 15'tir.", "Yalnız 69, 3'ün katıdır."], 2, "koşullu tarama"),

    Q(23, "Bir bölme işleminde bölen kalanın 3 katı, bölüm ise kalandan 2 fazladır. Kalan 4 olduğuna göre bölünen kaçtır?",
      ["68", "72", "76", "80", "84"], 2,
      "Kalan 4 ise bölen 12, bölüm 6'dır. Bölünen = 12·6 + 4 = 76 bulunur.",
      ["Bölen = 3·4 = 12.", "Bölüm = 4 + 2 = 6.", "Bölünen = 12·6 + 4 = 76."], 2, "ilişkilendirme"),

    Q(24, "A = B·q + r ve 0 ≤ r < B olduğuna göre A + 2B sayısının B ile bölümünde bölüm ve kalan sırasıyla hangisidir?",
      ["q, r + 2", "q + 1, r", "q + 2, r", "2q, r", "q + 2, 2r"], 2,
      "A + 2B = B·q + r + 2B = B(q + 2) + r olduğundan yeni bölüm q + 2, kalan r'dir.",
      ["A yerine Bq + r yazılır.", "Bq + 2B + r = B(q + 2) + r."], 3, "cebirsel bölme"),

    Q(25, "6, 8 ve 10 ile bölündüğünde her defasında 2 kalanını veren 100'den büyük en küçük doğal sayı kaçtır?",
      ["112", "118", "120", "122", "128"], 3,
      "Sayıdan 2 çıkarıldığında sonuç 6, 8 ve 10'un ortak katı olmalıdır. EKOK(6,8,10) = 120 olduğundan sayı 120 + 2 = 122'dir.",
      ["n − 2; 6, 8 ve 10'a tam bölünür.", "EKOK(6,8,10) = 2³·3·5 = 120.", "100'den büyük en küçük uygun sayı 122."], 3, "EKOK ve kalan")
  ]);
})();
