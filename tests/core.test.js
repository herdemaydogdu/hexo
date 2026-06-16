/* ============================================================
   P0 Regresyon / Birim Testleri (saf fonksiyonlar)
   Çalıştır:  node tests/core.test.js
   Üretimi etkilemez; yalnızca geliştirme içindir.
   ============================================================ */
const C = require("../js/core.js");

let pass = 0, fail = 0;
function eq(actual, expected, msg) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a === e) { pass++; }
  else { fail++; console.log("  ✗ " + msg + "\n     beklenen: " + e + "\n     gelen:    " + a); }
}
function ok(cond, msg) { if (cond) pass++; else { fail++; console.log("  ✗ " + msg); } }

/* --- Tarih / seri --- */
eq(C.getLocalDateKey(new Date(2026, 5, 16, 0, 30)), "2026-06-16", "00:30 yerel gün doğru (gün kaymaz)");
(function () {
  const today = new Date(2026, 5, 16, 9, 0);
  const k = d => C.getLocalDateKey(new Date(2026, 5, d, 12, 0));
  eq(C.calcStreak([k(16), k(15)], today), 2, "dün+bugün → seri 2");
  eq(C.calcStreak([k(15), k(14)], today), 2, "bugün boş, dünden geri → seri 2");
  eq(C.calcStreak([k(16), k(15), k(14)], today), 3, "ardışık 3 gün → 3");
  eq(C.calcStreak([k(16), k(14)], today), 1, "arada boş gün → 1");
  eq(C.calcStreak([], today), 0, "boş → 0");
  eq(C.calcStreak([k(10)], today), 0, "sadece 5 gün önce → 0");
})();

/* --- Net --- */
eq(C.calcNet(0, 8), -2, "0D 8Y → -2 (negatif net)");
eq(C.calcNet(10, 4), 9, "10D 4Y → 9");
eq(C.calcNet(10, 0), 10, "boş soru neti etkilemez");
eq(C.calcNet(0, 8, false), 0, "negatif kapalıyken 0");

/* --- Shuffle (Fisher–Yates) --- */
(function () {
  const input = [1, 2, 3, 4, 5];
  const copy = input.slice();
  const out = C.fisherYates(input);
  eq(input, copy, "girdi dizisi değişmez (mutasyonsuz)");
  eq(out.slice().sort(), copy.slice().sort(), "çıktı aynı elemanları içerir");
  eq(C.fisherYates([]), [], "boş dizi");
  eq(C.fisherYates([7]), [7], "tek eleman");
})();

/* --- Storage normalize / migration --- */
eq(C.normalizeProgress({ sessions: null }).sessions, [], "sessions:null → []");
ok(C.normalizeProgress(null).version === 2, "null progress güvenli varsayılan");
ok(C.normalizeGames({ xp: "abc" }).xp === 0, "xp sonlu değilse 0");
ok(Array.isArray(C.normalizeGames({ badges: 5 }).badges), "badges dizi değilse []");
(function () {
  const old = { sessions: [{ net: "9.00" }], studyDays: ["2026-06-16T21:30:00.000Z"], readTopics: [] };
  const m1 = C.migrateProgress(old);
  ok(typeof m1.sessions[0].net === "number", "session.net string→number");
  ok(/^\d{4}-\d{2}-\d{2}$/.test(m1.studyDays[0]), "studyDays yerel anahtara taşındı");
  const m2 = C.migrateProgress(m1);
  eq(m2.studyDays, m1.studyDays, "migration idempotent (iki kez aynı)");
})();

/* --- Yüksek skor --- */
ok(C.isBetterScore("low", 20, 12) === true, "hafıza: 20→12 daha iyi");
ok(C.isBetterScore("low", 12, 18) === false, "hafıza: 12→18 daha kötü");
ok(C.isBetterScore("high", 100, 150) === true, "yüksek-iyi: 150 > 100");
ok(C.isBetterScore("low", undefined, 15) === true, "ilk skor her zaman geçer");

/* --- XP normalize --- */
eq(C.normalizeXp(-30), 0, "negatif ham XP → 0");
eq(C.normalizeXp(70.6), 71, "yuvarlama");

/* --- Validator --- */
(function () {
  const good = [{ subject: "mat", q: "1?", options: ["a", "b"], answer: 1, explain: "x" }];
  eq(C.validateQuestions(good).errors, [], "geçerli soru hatasız");
  const bad = [{ subject: "mat", q: "1?", options: ["a", "b"], answer: 5 }];
  ok(C.validateQuestions(bad).errors.length > 0, "answer aralık dışı → hata");
  const dup = [{ id: "x", subject: "m", q: "?", options: ["a", "b"], answer: 0 }, { id: "x", subject: "m", q: "?", options: ["a", "b"], answer: 0 }];
  ok(C.validateQuestions(dup).errors.some(e => /Mükerrer id/.test(e)), "mükerrer id → hata");
})();

/* --- P1: Aralıklı tekrar / Yanlış Defteri --- */
const NOW = 1000000000000;
const IV = [1, 3, 7, 14];
eq(C.calcNextReview(1, IV, NOW), NOW + 1 * 86400000, "streak 1 → +1 gün");
eq(C.calcNextReview(2, IV, NOW), NOW + 3 * 86400000, "streak 2 → +3 gün");
eq(C.calcNextReview(4, IV, NOW), NOW + 14 * 86400000, "streak 4 → +14 gün");
eq(C.calcNextReview(9, IV, NOW), NOW + 14 * 86400000, "streak taşması son aralıkta kalır");
(function () {
  let b = {};
  b = C.updateWrongBook(b, "q1", false, { nowMs: NOW, intervalsDays: IV });
  ok(b.q1 && b.q1.wrongCount === 1, "yanlış → deftere eklenir");
  b = C.updateWrongBook(b, "q1", false, { nowMs: NOW, intervalsDays: IV });
  ok(b.q1.wrongCount === 2 && b.q1.correctStreak === 0, "tekrar yanlış → sayaç artar");
  b = C.updateWrongBook(b, "q1", true, { nowMs: NOW, intervalsDays: IV, masteredStreak: 3 });
  ok(b.q1.correctStreak === 1 && !b.q1.mastered, "doğru → streak 1");
  b = C.updateWrongBook(b, "q1", true, { nowMs: NOW, intervalsDays: IV, masteredStreak: 3 });
  b = C.updateWrongBook(b, "q1", true, { nowMs: NOW, intervalsDays: IV, masteredStreak: 3 });
  ok(b.q1.mastered === true && b.q1.nextReviewAt === null, "3 doğru → mastered");
  const b2 = C.updateWrongBook({}, "qX", true, { nowMs: NOW });
  ok(!b2.qX, "defterde olmayan soru doğruyla eklenmez");
})();
ok(C.isDue({ nextReviewAt: NOW - 1, mastered: false }, NOW) === true, "zamanı gelen tekrar due");
ok(C.isDue({ nextReviewAt: NOW + 1, mastered: false }, NOW) === false, "zamanı gelmeyen due değil");
ok(C.isDue({ nextReviewAt: NOW - 1, mastered: true }, NOW) === false, "mastered due değil");

/* --- v3 migration --- */
(function () {
  const v2 = { version: 2, sessions: [], readTopics: [], studyDays: [] };
  const m = C.migrateProgress(v2);
  ok(m.version === 3 && typeof m.wrongBook === "object" && Array.isArray(m.activities), "v2 → v3 (wrongBook+activities)");
})();

/* --- P2: Validator + normalize ek testleri --- */
(function () {
  const short = [{ subject: "m", unit: "u", q: "Soru?", options: ["a", "b"], answer: 0, explain: "kısa" }];
  const w = C.validateQuestions(short).warnings;
  ok(w.some(x => /manuel inceleme/.test(x)), "çok kısa açıklama → manuel inceleme uyarısı");
  const full = [{ subject: "m", unit: "u", q: "Soru?", options: ["a", "b"], answer: 0, explain: "Yeterince uzun ve açıklayıcı bir metin." }];
  ok(C.validateQuestions(full).warnings.length === 0, "yeterli açıklama → uyarı yok");
  const noExp = [{ subject: "m", q: "Soru?", options: ["a", "b"], answer: 0 }];
  ok(C.validateQuestions(noExp).warnings.some(x => /açıklama yok/.test(x)), "açıklama yok → uyarı");
})();
ok(Array.isArray(C.normalizeGames(null).xpEvents), "normalizeGames xpEvents dizi");
ok(C.normalizeGames({ xpEvents: "x" }).xpEvents.length === 0, "geçersiz xpEvents → []");
(function () {
  // storage roundtrip: normalize → migrate idempotent (oyun)
  const g1 = C.migrateGames({ xp: 120, highScores: { memory: 8, bad: "x" } });
  ok(g1.xp === 120 && g1.highScores.memory === 8 && g1.highScores.bad === undefined, "migrateGames geçersiz skoru atar");
  const g2 = C.migrateGames(g1);
  eq(g2, g1, "migrateGames idempotent");
})();

console.log(`\nP0+P1+P2 core testleri: ${pass} geçti, ${fail} kaldı.`);
process.exit(fail ? 1 : 0);
