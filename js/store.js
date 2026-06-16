/* ============================================================
   TYT Hazırlık — Storage Çekirdeği
   localStorage erişimi, güvenli okuma/yazma ve ilerleme
   yükleme/kaydetme (normalize + migration core üzerinden).
   Bağımlılık: config.js (TYT_CONFIG), core.js (TYTCore).
   notify() çalışma anında app.js'ten kullanılır.
   ============================================================ */

const STORE_KEY = TYT_CONFIG.storageKeys.progress;
const GAMES_KEY = TYT_CONFIG.storageKeys.games;

function safeGetItem(key) {
  try { return localStorage.getItem(key); }
  catch (e) { console.warn("Storage okunamadı:", key, e); return null; }
}
function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); return true; }
  catch (e) {
    console.error("Storage yazılamadı:", key, e);
    if (typeof notify === "function") notify("Veri kaydedilemedi (depolama dolu veya kısıtlı olabilir).", "error");
    return false;
  }
}

function loadProgress() {
  let raw = null;
  try { raw = JSON.parse(safeGetItem(STORE_KEY)); }
  catch (e) { console.warn("Bozuk ilerleme verisi; güvenli varsayılana dönülüyor."); raw = null; }
  return TYTCore.migrateProgress(raw); // normalize + migration (idempotent)
}
function defaultProgress() { return TYTCore.normalizeProgress(null); }
function saveProgress(p) { safeSetItem(STORE_KEY, JSON.stringify(p)); }

function todayKey() { return TYTCore.getLocalDateKey(); } // yerel takvim günü

function recordSession(session) {
  const p = loadProgress();
  p.sessions.push(session);
  const t = todayKey();
  if (!p.studyDays.includes(t)) p.studyDays.push(t); // aynı gün tek kayıt
  saveProgress(p);
}

/* P1-8: Aktivite kaydı — anlamlı çalışma davranışları seriyi besler */
function recordActivity(type, meta) {
  const p = loadProgress();
  p.activities = p.activities || [];
  p.activities.push({ type, at: new Date().toISOString(), meta: meta || null });
  if (p.activities.length > 600) p.activities = p.activities.slice(-600);
  const t = todayKey();
  if (!p.studyDays.includes(t)) p.studyDays.push(t); // o gün çalışma günü sayılır
  saveProgress(p);
}
function todayActivities() {
  const t = todayKey();
  return (loadProgress().activities || []).filter(a => TYTCore.toLocalDateKey(a.at) === t);
}

function calcStreak(days) { return TYTCore.calcStreak(days); }
function markTopicRead(topicId) {
  const p = loadProgress();
  if (!p.readTopics.includes(topicId)) { p.readTopics.push(topicId); saveProgress(p); }
}

/* Net — config'e göre negatif nete izin verilir (gizli kırpma yok) */
function calcNet(correct, wrong) { return TYTCore.calcNet(correct, wrong, TYT_CONFIG.negativeNetAllowed); }

/* Tüm ilerlemeyi güvenli sıfırla — yalnızca uygulamanın anahtarları (localStorage.clear YOK) */
function resetAllData() {
  let okAll = true;
  [STORE_KEY, GAMES_KEY].forEach(k => { try { localStorage.removeItem(k); } catch (e) { okAll = false; } });
  try { saveProgress(defaultProgress()); } catch (e) { okAll = false; }
  return okAll;
}

/* ---------- Aktif (yarım kalan) oturum ---------- */
function getActiveSession() { return loadProgress().activeSession; }
function setActiveSession(s) { const p = loadProgress(); p.activeSession = s; saveProgress(p); }
function clearActiveSession() { const p = loadProgress(); p.activeSession = null; saveProgress(p); }

/* ---------- Yanlış Defteri (P1-5) ---------- */
function getWrongBook() { return loadProgress().wrongBook || {}; }
function saveWrongBook(wb) { const p = loadProgress(); p.wrongBook = wb; saveProgress(p); }
function reviewOpts() { return { intervalsDays: TYT_CONFIG.reviewIntervalsDays, masteredStreak: TYT_CONFIG.masteredStreak, nowMs: Date.now() }; }
function dueQuestionIds() {
  const wb = getWrongBook(), now = Date.now();
  return Object.keys(wb).filter(id => questionById[id] && TYTCore.isDue(wb[id], now));
}
function wrongBookActiveIds() { // mastered olmayan tüm kayıtlar
  const wb = getWrongBook();
  return Object.keys(wb).filter(id => questionById[id] && !wb[id].mastered);
}
function toggleWrongBook(qid) {
  const wb = getWrongBook();
  if (wb[qid]) { delete wb[qid]; }
  else { wb[qid] = { wrongCount: 1, correctStreak: 0, mastered: false, lastWrongAt: Date.now(), lastReviewedAt: null, nextReviewAt: Date.now() + TYT_CONFIG.reviewIntervalsDays[0] * 86400000, addedAt: Date.now() }; }
  saveWrongBook(wb);
  return !!wb[qid];
}

/* ---------- Quiz oluşturma (P1-2) ---------- */
function answeredIds() {
  const set = new Set();
  loadProgress().sessions.forEach(s => (s.answers || []).forEach(a => { if (!a.isBlank) set.add(a.questionId); }));
  return set;
}
function getQuizSettings() {
  const s = (loadProgress().settings || {}).quiz || {};
  return Object.assign({ unit: "all", count: 10, mode: "all", timed: false }, s);
}
function saveQuizSettings(qs) {
  const p = loadProgress(); p.settings = p.settings || {}; p.settings.quiz = qs; saveProgress(p);
}
function buildQuizPool(subId, unitId, mode) {
  let pool = D.questions.filter(q => q.subject === subId && (unitId === "all" || q.unit === unitId));
  if (mode === "unsolved") { const ans = answeredIds(); pool = pool.filter(q => !ans.has(q.id)); }
  else if (mode === "wrong") { const wb = getWrongBook(); pool = pool.filter(q => wb[q.id] && !wb[q.id].mastered); }
  return pool; // "all" ve "mixed" → tüm havuz (karıştırma sonra)
}
function subjectQ(subId) { return D.questions.filter(q => q.subject === subId); }
