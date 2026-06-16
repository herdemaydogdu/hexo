/* ============================================================
   TYT Hazırlık — Core (saf, test edilebilir yardımcılar)
   DOM kullanmaz; hem tarayıcıda (window.TYTCore) hem Node'da
   (module.exports) çalışır. (Bölüm 3, 8.2, 10)
   ============================================================ */
(function () {
  "use strict";

  function isFiniteNumber(n) { return typeof n === "number" && isFinite(n); }

  /* ---------- Tarih (yerel takvim) ---------- */
  function getLocalDateKey(date) {
    const d = date || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  // Eski ISO (UTC) veya tarih girdisini yerel takvim anahtarına çevir (geriye dönük okuma)
  function toLocalDateKey(value) {
    if (!value) return null;
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : getLocalDateKey(d);
  }

  // Üst üste çalışılan gün serisi. Tarihi yerel öğleye sabitleyerek DST kaymasını önler.
  function calcStreak(days, today) {
    if (!Array.isArray(days) || !days.length) return 0;
    const set = new Set(days);
    const cursor = today ? new Date(today) : new Date();
    cursor.setHours(12, 0, 0, 0);
    let streak = 0;
    if (!set.has(getLocalDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (set.has(getLocalDateKey(cursor))) { streak++; cursor.setDate(cursor.getDate() - 1); }
    return streak;
  }

  /* ---------- Net ---------- */
  // TYT: doğru - yanlış/4. Varsayılan negatif nete izin verir (gizli kırpma yok).
  function calcNet(correct, wrong, allowNegative) {
    const c = isFiniteNumber(correct) ? correct : 0;
    const w = isFiniteNumber(wrong) ? wrong : 0;
    const net = c - w / 4;
    return allowNegative === false ? Math.max(0, net) : net;
  }

  /* ---------- Karıştırma (Fisher–Yates, mutasyonsuz) ---------- */
  function fisherYates(arr) {
    if (!Array.isArray(arr)) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* ---------- Storage normalizasyon + migration ---------- */
  function normalizeProgress(value) {
    const v = value && typeof value === "object" ? value : {};
    return {
      version: 3,
      settings: v.settings && typeof v.settings === "object" ? v.settings : { dailyGoal: 10, negativeNetAllowed: true },
      sessions: Array.isArray(v.sessions) ? v.sessions : [],
      readTopics: Array.isArray(v.readTopics) ? v.readTopics : [],
      studyDays: Array.isArray(v.studyDays) ? v.studyDays.filter(x => typeof x === "string") : [],
      activeSession: v.activeSession && typeof v.activeSession === "object" ? v.activeSession : null,
      wrongBook: v.wrongBook && typeof v.wrongBook === "object" ? v.wrongBook : {},
      activities: Array.isArray(v.activities) ? v.activities : []
    };
  }
  function normalizeGames(value) {
    const v = value && typeof value === "object" ? value : {};
    return {
      version: 2,
      xp: isFiniteNumber(v.xp) ? v.xp : 0,
      gamesPlayed: isFiniteNumber(v.gamesPlayed) ? v.gamesPlayed : 0,
      badges: Array.isArray(v.badges) ? v.badges : [],
      subjectsPlayed: Array.isArray(v.subjectsPlayed) ? v.subjectsPlayed : [],
      highScores: v.highScores && typeof v.highScores === "object" ? v.highScores : {},
      xpEvents: Array.isArray(v.xpEvents) ? v.xpEvents : []
    };
  }
  // Idempotent: aynı veri iki kez taşınınca bozulmaz.
  function migrateProgress(value) {
    const n = normalizeProgress(value);
    n.studyDays = Array.from(new Set(n.studyDays.map(toLocalDateKey).filter(Boolean)));
    n.sessions = n.sessions.map(s => {
      if (s && typeof s === "object") {
        const net = typeof s.net === "string" ? parseFloat(s.net) : s.net;
        return Object.assign({}, s, { net: isFiniteNumber(net) ? net : 0 });
      }
      return s;
    });
    return n;
  }
  function migrateGames(value) {
    const n = normalizeGames(value);
    Object.keys(n.highScores).forEach(k => {
      if (!isFiniteNumber(n.highScores[k])) delete n.highScores[k];
    });
    return n;
  }

  /* ---------- Yüksek skor & XP ---------- */
  // direction: "low" → küçük daha iyi (hafıza), "high" → büyük daha iyi
  function isBetterScore(direction, current, candidate) {
    if (!isFiniteNumber(candidate)) return false;
    if (!isFiniteNumber(current)) return true; // ilk skor
    return direction === "low" ? candidate < current : candidate > current;
  }
  function normalizeXp(xp) { return Math.max(0, Math.round(isFiniteNumber(xp) ? xp : 0)); }

  /* ---------- Aralıklı tekrar (Yanlış Defteri) ---------- */
  const DAY = 86400000;
  function calcNextReview(correctStreak, intervalsDays, nowMs) {
    const ivs = Array.isArray(intervalsDays) && intervalsDays.length ? intervalsDays : [1, 3, 7, 14];
    const idx = Math.min(Math.max(0, correctStreak - 1), ivs.length - 1);
    return (nowMs || Date.now()) + ivs[idx] * DAY;
  }
  // Saf: yanlış defteri kaydını günceller (yeni nesne döndürür)
  function updateWrongBook(book, questionId, isCorrect, opts) {
    const b = book && typeof book === "object" ? Object.assign({}, book) : {};
    const now = (opts && opts.nowMs) || Date.now();
    const masteredStreak = (opts && opts.masteredStreak) || 3;
    const intervals = (opts && opts.intervalsDays) || [1, 3, 7, 14];
    if (!isCorrect) {
      const cur = b[questionId]
        ? Object.assign({}, b[questionId])
        : { wrongCount: 0, correctStreak: 0, mastered: false, lastWrongAt: null, lastReviewedAt: null, nextReviewAt: null, addedAt: now };
      cur.wrongCount += 1;
      cur.correctStreak = 0;
      cur.mastered = false;
      cur.lastWrongAt = now;
      cur.nextReviewAt = now + intervals[0] * DAY;
      if (!cur.addedAt) cur.addedAt = now;
      b[questionId] = cur;
    } else if (b[questionId]) {
      const cur = Object.assign({}, b[questionId]);
      cur.correctStreak += 1;
      cur.lastReviewedAt = now;
      if (cur.correctStreak >= masteredStreak) { cur.mastered = true; cur.nextReviewAt = null; }
      else cur.nextReviewAt = calcNextReview(cur.correctStreak, intervals, now);
      b[questionId] = cur;
    }
    return b;
  }
  function isDue(entry, nowMs) {
    if (!entry || entry.mastered || !entry.nextReviewAt) return false;
    return entry.nextReviewAt <= (nowMs || Date.now());
  }

  /* ---------- İçerik doğrulama (validator) ---------- */
  function validateQuestions(questions) {
    const errors = [], warnings = [];
    if (!Array.isArray(questions)) { errors.push("questions bir dizi değil"); return { errors, warnings }; }
    const ids = new Set(), texts = new Set();
    questions.forEach((q, i) => {
      const ref = q && q.id ? q.id : "#" + i;
      if (!q || typeof q !== "object") { errors.push(ref + ": geçersiz soru nesnesi"); return; }
      if (!q.subject) errors.push(ref + ": 'subject' eksik");
      const text = q.q || q.question;
      if (!text) errors.push(ref + ": soru metni eksik");
      if (!Array.isArray(q.options) || q.options.length < 2) errors.push(ref + ": 'options' en az 2 olmalı");
      if (!isFiniteNumber(q.answer)) errors.push(ref + ": 'answer' sayı değil");
      else if (Array.isArray(q.options) && (q.answer < 0 || q.answer >= q.options.length))
        errors.push(ref + ": 'answer' index aralık dışı (" + q.answer + ")");
      const exp = q.explain || q.explanation;
      if (!exp) warnings.push(ref + ": açıklama yok (manuel inceleme)");
      else if (String(exp).replace(/<[^>]+>/g, "").trim().length < 15) warnings.push(ref + ": açıklama çok kısa (manuel inceleme)");
      if (Array.isArray(q.options)) {
        const seen = new Set();
        q.options.forEach(o => { if (seen.has(o)) warnings.push(ref + ': tekrarlı seçenek "' + o + '"'); seen.add(o); });
      }
      if (q.id) { if (ids.has(q.id)) errors.push("Mükerrer id: " + q.id); else ids.add(q.id); }
      if (text) { if (texts.has(text)) warnings.push("Tekrarlı soru metni: " + String(text).slice(0, 40)); else texts.add(text); }
    });
    return { errors, warnings };
  }

  const TYTCore = {
    isFiniteNumber, getLocalDateKey, toLocalDateKey, calcStreak, calcNet,
    fisherYates, normalizeProgress, normalizeGames, migrateProgress, migrateGames,
    isBetterScore, normalizeXp, validateQuestions,
    calcNextReview, updateWrongBook, isDue
  };

  if (typeof window !== "undefined") window.TYTCore = TYTCore;
  if (typeof module !== "undefined" && module.exports) module.exports = TYTCore;
})();
