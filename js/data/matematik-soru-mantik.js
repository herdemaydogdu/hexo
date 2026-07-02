/* ============================================================
   MATEMATİK — Mantık: 25 ÖSYM/YKS tarzı özgün soru
   Zorluk dağılımı: 5 kolay (d1), 10 orta (d2), 10 zor (d3) = %20/%40/%40.
   Tüm sorular özgün; çözümler elle doğrulandı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-soru-mantik: content-loader yüklenmedi"); return; }
  var Q = function (id, q, o, a, ex, sol, d) {
    return { id: id, subject: "matematik", unit: "mat-mantik", q: q, options: o, answer: a,
      explain: ex, solution: sol, difficulty: d || 2, skill: "muhakeme",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.replaceQuestionsForUnit("mat-mantik", [
    /* ---- KOLAY (5) ---- */
    Q("matematik-mat-mantik-101", "\"2 bir asal sayıdır\" önermesinin doğruluk değeri nedir?",
      ["Doğru (1)", "Yanlış (0)", "Belirsiz", "Hem doğru hem yanlış", "Tanımsız"], 0, "2 asaldır → önerme doğru (1).",
      { short: "Doğru (1).", steps: ["2 asal sayıdır.", "Önerme doğru."], whyOthersWrong: ["Kesin yargı → doğru."] }, 1),
    Q("matematik-mat-mantik-102", "p doğru (1) ise ~p (p değil) nedir?",
      ["0", "1", "p", "Belirsiz", "2"], 0, "Değilleme doğruyu yanlışa çevirir: ~1 = 0.",
      { short: "~1 = 0.", steps: ["Değilleme tersine çevirir.", "= 0."], whyOthersWrong: ["~p, p'nin tersidir."] }, 1),
    Q("matematik-mat-mantik-103", "Aşağıdakilerden hangisi bir önerme <b>değildir</b>?",
      ["Bugün hava nasıl?", "5 > 3'tür.", "İstanbul bir şehirdir.", "7 çift sayıdır.", "2+2 = 4'tür."], 0, "Soru cümlesi yargı bildirmez → önerme değildir.",
      { short: "Soru → önerme değil.", steps: ["Önerme doğru/yanlış yargı bildirir.", "Soru cümlesi bildirmez."], whyOthersWrong: ["Diğerleri yargı bildirir."] }, 1),
    Q("matematik-mat-mantik-104", "p ∧ q (ve) işleminin doğru (1) olması için ne gerekir?",
      ["İkisi de doğru", "En az biri doğru", "İkisi de yanlış", "Biri yanlış", "Hiçbiri"], 0, "Konjonksiyon ancak ikisi de 1 iken 1'dir.",
      { short: "İkisi de 1.", steps: ["p ∧ q: ve bağlacı.", "Yalnız 1∧1 = 1."], whyOthersWrong: ["Tek doğru yetmez."] }, 1),
    Q("matematik-mat-mantik-105", "p ∨ q (veya) işleminin yanlış (0) olması için ne gerekir?",
      ["İkisi de yanlış", "İkisi de doğru", "En az biri doğru", "Biri doğru", "Hiçbiri"], 0, "Disjonksiyon ancak ikisi de 0 iken 0'dır.",
      { short: "İkisi de 0.", steps: ["p ∨ q: veya bağlacı.", "Yalnız 0∨0 = 0."], whyOthersWrong: ["Tek doğru bile 1 yapar."] }, 1),

    /* ---- ORTA (10) ---- */
    Q("matematik-mat-mantik-106", "p = 1, q = 0 ise p ∧ q kaçtır?",
      ["0", "1", "p", "q", "2"], 0, "1 ∧ 0 = 0.",
      { short: "1∧0 = 0.", steps: ["Biri yanlışsa ve işlemi 0.", "= 0."], whyOthersWrong: ["İkisi de doğru olmalı."] }, 2),
    Q("matematik-mat-mantik-107", "p = 1, q = 0 ise p ∨ q kaçtır?",
      ["1", "0", "p", "q", "2"], 0, "1 ∨ 0 = 1.",
      { short: "1∨0 = 1.", steps: ["En az biri doğru.", "= 1."], whyOthersWrong: ["Bir doğru yeter."] }, 2),
    Q("matematik-mat-mantik-108", "p ⇒ q (p ise q) koşullu önermesi hangi durumda yanlıştır?",
      ["p doğru, q yanlış", "p yanlış, q doğru", "ikisi de doğru", "ikisi de yanlış", "hiçbiri"], 0, "Koşullu önerme yalnız 1 ⇒ 0 durumunda yanlıştır.",
      { short: "1 ⇒ 0 → yanlış.", steps: ["Koşullu yalnız doğru→yanlış'ta 0.", "Diğerleri 1."], whyOthersWrong: ["Diğer üç durum doğrudur."] }, 2),
    Q("matematik-mat-mantik-109", "p = 0 ise p ⇒ q önermesinin değeri nedir?",
      ["1 (her zaman doğru)", "0", "q'ya eşit", "Belirsiz", "~q"], 0, "Öncül yanlışsa koşullu önerme daima doğrudur.",
      { short: "Öncül 0 → önerme 1.", steps: ["Yanlış öncül → daima doğru.", "= 1."], whyOthersWrong: ["q'dan bağımsız doğrudur."] }, 2),
    Q("matematik-mat-mantik-110", "~(p ∧ q) ifadesi De Morgan kuralıyla neye eşittir?",
      ["~p ∨ ~q", "~p ∧ ~q", "p ∨ q", "p ∧ q", "~p ⇒ q"], 0, "De Morgan: ~(p∧q) = ~p ∨ ~q.",
      { short: "~p ∨ ~q.", steps: ["Değilleme bağlacı çevirir.", "∧ → ∨."], whyOthersWrong: ["De Morgan ∧'yı ∨ yapar."] }, 2),
    Q("matematik-mat-mantik-111", "p ⇒ q önermesinin karşıt tersi (devriği) hangisidir?",
      ["~q ⇒ ~p", "q ⇒ p", "~p ⇒ ~q", "p ⇒ ~q", "~q ⇒ p"], 0, "Karşıt ters: ~q ⇒ ~p (önermeye denktir).",
      { short: "~q ⇒ ~p.", steps: ["Karşıt ters = terslerin yer değişimi.", "~q ⇒ ~p."], whyOthersWrong: ["q ⇒ p tersidir, denk değildir."] }, 2),
    Q("matematik-mat-mantik-112", "p doğru, q doğru, r yanlış ise (p ∧ q) ∨ r kaçtır?",
      ["1", "0", "r", "p", "Belirsiz"], 0, "(1∧1) ∨ 0 = 1 ∨ 0 = 1.",
      { short: "1 ∨ 0 = 1.", steps: ["p∧q = 1.", "1 ∨ 0 = 1."], whyOthersWrong: ["İç işlem önce yapılır."] }, 2),
    Q("matematik-mat-mantik-113", "Bir önerme her durumda doğru (1) ise buna ne ad verilir?",
      ["Totoloji", "Çelişki", "Açık önerme", "Bileşik önerme", "Koşullu"], 0, "Daima doğru olan bileşik önerme totolojidir.",
      { short: "Totoloji.", steps: ["Her satırı 1 → totoloji.", ""], whyOthersWrong: ["Daima yanlış olan çelişkidir."] }, 2),
    Q("matematik-mat-mantik-114", "p ⇔ q (çift koşullu) ne zaman doğrudur?",
      ["p ve q aynı değerde olduğunda", "p ≠ q olduğunda", "yalnız ikisi de doğruyken", "yalnız ikisi de yanlışken", "her zaman"], 0, "Çift koşullu, iki önerme aynı doğruluk değerinde iken 1'dir.",
      { short: "p = q iken 1.", steps: ["1⇔1 = 1, 0⇔0 = 1.", "Farklıysa 0."], whyOthersWrong: ["Aynılık şartı yeterlidir."] }, 2),
    Q("matematik-mat-mantik-115", "~(~p) ifadesi neye eşittir?",
      ["p", "~p", "1", "0", "q"], 0, "Çift değilleme: ~(~p) = p.",
      { short: "~(~p) = p.", steps: ["İki kez değilleme aslına döner.", "= p."], whyOthersWrong: ["Çift olumsuzluk birbirini götürür."] }, 2),

    /* ---- ZOR (10) ---- */
    Q("matematik-mat-mantik-116", "p ⇒ q önermesi, aşağıdaki bileşik önermelerden hangisine denktir?",
      ["~p ∨ q", "p ∨ ~q", "~p ∧ q", "p ∧ q", "~(p ∨ q)"], 0, "Koşullu önerme açılımı: p ⇒ q ≡ ~p ∨ q.",
      { short: "p ⇒ q ≡ ~p ∨ q.", steps: ["Doğruluk tabloları aynıdır.", "p⇒q = ~p∨q."], whyOthersWrong: ["Standart denklik ~p ∨ q'dur."] }, 3),
    Q("matematik-mat-mantik-117", "~(p ⇒ q) ifadesi neye eşittir?",
      ["p ∧ ~q", "~p ∨ q", "~p ∧ q", "p ∨ ~q", "p ⇒ ~q"], 0, "~(p⇒q) = ~(~p∨q) = p ∧ ~q.",
      { short: "p ∧ ~q.", steps: ["p⇒q = ~p∨q.", "Değili: p ∧ ~q (De Morgan)."], whyOthersWrong: ["Koşullunun değili p∧~q'dur."] }, 3),
    Q("matematik-mat-mantik-118", "p = 1, q = 0, r = 1 için (p ⇒ q) ∨ (q ⇒ r) ifadesinin değeri kaçtır?",
      ["1", "0", "p", "r", "Belirsiz"], 0, "p⇒q = 1⇒0 = 0; q⇒r = 0⇒1 = 1; 0 ∨ 1 = 1.",
      { short: "0 ∨ 1 = 1.", steps: ["p⇒q = 0.", "q⇒r = 1.", "0 ∨ 1 = 1."], whyOthersWrong: ["İkinci koşullu doğrudur."] }, 3),
    Q("matematik-mat-mantik-119", "\"Bütün öğrenciler çalışkandır\" önermesinin değili hangisidir?",
      ["En az bir öğrenci çalışkan değildir", "Hiçbir öğrenci çalışkan değildir", "Bütün öğrenciler tembeldir", "Bazı öğrenciler çalışkandır", "Tüm öğrenciler çalışkandır"], 0, "∀ niceleyicisinin değili ∃ olur: 'en az bir öğrenci çalışkan değildir'.",
      { short: "En az biri çalışkan değil.", steps: ["∀'nın değili ∃ ~.", "'En az bir... değildir'."], whyOthersWrong: ["'Hepsi değil' demek 'hiçbiri' demek değildir."] }, 3),
    Q("matematik-mat-mantik-120", "p ∧ (~p ∨ q) ifadesi sadeleştirilirse neye eşittir?",
      ["p ∧ q", "p ∨ q", "~p", "q", "p"], 0, "Dağılma: p∧~p ∨ p∧q = 0 ∨ p∧q = p ∧ q.",
      { short: "p ∧ q.", steps: ["p∧~p = 0.", "Kalan p ∧ q."], whyOthersWrong: ["p∧~p çelişkidir (0)."] }, 3),
    Q("matematik-mat-mantik-121", "Aşağıdaki bileşik önermelerden hangisi bir totolojidir (her zaman doğru)?",
      ["p ∨ ~p", "p ∧ ~p", "p ⇒ ~p", "~p ∧ p", "p ⇔ ~p"], 0, "p ∨ ~p her durumda doğrudur (üçüncü hâlin imkânsızlığı).",
      { short: "p ∨ ~p → totoloji.", steps: ["p=1 → 1; p=0 → 1.", "Daima doğru."], whyOthersWrong: ["p∧~p daima yanlıştır (çelişki)."] }, 3),
    Q("matematik-mat-mantik-122", "p ⇒ q doğru ve q yanlış ise p'nin doğruluk değeri nedir?",
      ["0", "1", "Belirsiz", "q'ya eşit", "Her ikisi"], 0, "p⇒q = 1 ve q = 0 ise p = 0 olmalı (1⇒0 yanlış olurdu).",
      { short: "p = 0.", steps: ["q = 0 ve p⇒q = 1.", "p = 1 olsaydı 1⇒0 = 0 olurdu."], whyOthersWrong: ["p doğru olamaz."] }, 3),
    Q("matematik-mat-mantik-123", "(p ⇒ q) ∧ p doğru ise q'nun değeri nedir? (Modus Ponens)",
      ["1", "0", "Belirsiz", "p", "~p"], 0, "p⇒q ve p doğru ise q da doğrudur.",
      { short: "q = 1.", steps: ["p = 1 ve p⇒q = 1.", "→ q = 1."], whyOthersWrong: ["Modus ponens q'yu doğrular."] }, 3),
    Q("matematik-mat-mantik-124", "~(p ∨ q) ∨ q ifadesi sadeleştirilirse neye eşittir?",
      ["~p ∨ q", "~q", "p", "p ∧ q", "1"], 0, "~(p∨q) = ~p∧~q; (~p∧~q) ∨ q = (~p∨q) ∧ (~q∨q) = (~p∨q) ∧ 1 = ~p ∨ q.",
      { short: "~p ∨ q.", steps: ["~(p∨q) = ~p∧~q.", "(~p∧~q)∨q = ~p∨q (dağılma)."], whyOthersWrong: ["Dağılma kuralıyla ~p∨q çıkar."] }, 3),
    Q("matematik-mat-mantik-125", "p ⇔ q önermesi p ∧ q ile q yanlışken karşılaştırılıyor. q = 0 ve p ⇔ q = 1 ise p kaçtır?",
      ["0", "1", "Belirsiz", "q", "~q"], 0, "p⇔q = 1 ve q = 0 → p de 0 olmalı (aynı değer).",
      { short: "p = 0.", steps: ["Çift koşullu doğru → p = q.", "q = 0 → p = 0."], whyOthersWrong: ["p ⇔ q doğruysa değerleri eşittir."] }, 3)
  ]);
})();
