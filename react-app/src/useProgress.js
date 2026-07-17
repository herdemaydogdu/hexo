import { useState, useEffect, useCallback, useMemo } from "react";

/**
 * useProgress — mevcut vanilla-JS sitenin localStorage ilerlemesini
 * React'e köprüleyen geçici hook (backend kurulana kadar).
 *
 * Site verisini `tyt_progress_v1` anahtarında, şu şemayla tutuyor:
 *   { sessions:[{date, completedAt, total, correct, net, subject, type,
 *                answers:[{questionId, isCorrect, isBlank}]}],
 *     studyDays:["YYYY-MM-DD"], readTopics:[unitId...], wrongBook, activeSession }
 *
 * Hook salt-okunurdur: veriyi okur, türetir ve StatCard/ProgressRow'a
 * hazır diziler döndürür. Yazma işini eski site (store.js) yapmaya devam eder.
 */

const STORAGE_KEY = "tyt_progress_v1";

/* ---------- Küçük yardımcılar (site core.js'inden bağımsız kopya) ---------- */
function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toDateKey(value) {
  if (!value) return null;
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : localDateKey(d);
}

// Üst üste çalışılan gün serisi (yerel öğleye sabitleyerek DST kaymasını önler).
function calcStreak(days) {
  if (!Array.isArray(days) || !days.length) return 0;
  const set = new Set(days.map(toDateKey).filter(Boolean));
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  let streak = 0;
  if (!set.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (set.has(localDateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

// Güvenli okuma (SSR + bozuk JSON + kısıtlı depolama korumalı).
function readProgress(key) {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("useProgress: ilerleme okunamadı", e);
    return null;
  }
}

/* ---------- Ders meta: id -> ad + pastel ton ---------- */
const SUBJECT_META = {
  turkce: { name: "Türkçe", tint: "sky" },
  matematik: { name: "Matematik", tint: "violet" },
  geometri: { name: "Geometri", tint: "teal" },
  sosyal: { name: "Sosyal Bilimler", tint: "emerald" },
  fen: { name: "Fen Bilimleri", tint: "rose" },
};
const SUBJECT_ORDER = ["turkce", "matematik", "geometri", "sosyal", "fen"];

/**
 * Ders performansı — oturum cevaplarından.
 * Karışık denemelerde soru->ders eşlemesi için questionById gerekir
 * (opsiyonel; verilmezse oturum düzeyi s.subject ile toplanır).
 */
function computeSubjectPerf(sessions, questionById) {
  const by = {};
  sessions.forEach((s) => {
    if (Array.isArray(s.answers) && s.answers.length && questionById) {
      s.answers.forEach((a) => {
        const q = questionById[a.questionId];
        if (!q) return;
        const b = (by[q.subject] = by[q.subject] || { c: 0, t: 0 });
        b.t++;
        if (a.isCorrect) b.c++;
      });
    } else if (s.subject && s.subject !== "karisik") {
      const b = (by[s.subject] = by[s.subject] || { c: 0, t: 0 });
      b.c += s.correct || 0;
      b.t += s.total || 0;
    }
  });
  return by;
}

/**
 * @param {object}  opts
 * @param {string}  opts.storageKey   varsayılan "tyt_progress_v1"
 * @param {number}  opts.dailyGoal    günlük soru hedefi (kart ipucu için)
 * @param {object}  opts.questionById { [questionId]: { subject } } — karışık deneme kırılımı için (opsiyonel)
 */
export function useProgress({ storageKey = STORAGE_KEY, dailyGoal = 50, questionById = null } = {}) {
  const [progress, setProgress] = useState(() => readProgress(storageKey));

  const refresh = useCallback(() => setProgress(readProgress(storageKey)), [storageKey]);

  useEffect(() => {
    // Sekmeler arası senkron (storage) + geri odaklanınca yenile (focus).
    const onStorage = (e) => {
      if (!e.key || e.key === storageKey) refresh();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", refresh);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", refresh);
    };
  }, [storageKey, refresh]);

  // Türetilmiş veriler — progress değişince yeniden hesapla.
  const derived = useMemo(() => {
    const sessions = Array.isArray(progress?.sessions) ? progress.sessions : [];
    const studyDays = Array.isArray(progress?.studyDays) ? progress.studyDays : [];
    const readTopics = Array.isArray(progress?.readTopics) ? progress.readTopics : [];

    const streak = calcStreak(studyDays);
    const today = localDateKey();
    const todaySolved = sessions
      .filter((s) => toDateKey(s.completedAt || s.date) === today)
      .reduce((a, s) => a + (s.total || 0), 0);

    // Net: varsa denemeler, yoksa tüm oturumlar.
    const denemeler = sessions.filter((s) => s.type === "deneme");
    const netSource = denemeler.length ? denemeler : sessions;
    const nets = netSource.map((s) => (typeof s.net === "number" ? s.net : 0));
    const avgNet = nets.length ? nets.reduce((a, n) => a + n, 0) / nets.length : 0;
    const netHistory = netSource.slice(-7).map((s) => ({
      date: toDateKey(s.completedAt || s.date),
      net: typeof s.net === "number" ? s.net : 0,
    }));

    // Ders bazlı ilerleme (yalnızca veri olan dersler).
    const perf = computeSubjectPerf(sessions, questionById);
    const progressRows = SUBJECT_ORDER.filter((id) => perf[id] && perf[id].t).map((id) => {
      const v = perf[id];
      const meta = SUBJECT_META[id] || { name: id, tint: "sky" };
      return { subject: meta.name, tint: meta.tint, value: Math.round((v.c / v.t) * 100) };
    });

    // En zayıf ders — kişiselleştirilmiş öneri için.
    const weakest = progressRows.length
      ? progressRows.slice().sort((a, b) => a.value - b.value)[0]
      : null;

    // Genel tamamlanma (ilerleme çubuklarının ortalaması) — haftalık halka için.
    const overall = progressRows.length
      ? Math.round(progressRows.reduce((a, r) => a + r.value, 0) / progressRows.length)
      : 0;

    // StatCard'a hazır kartlar (icon'u Layout eşler; hook sadece key/label/value verir).
    const stats = [
      { key: "today", label: "Bugün çözülen", value: String(todaySolved), hint: `hedefin ${dailyGoal}`, tint: "sky" },
      { key: "streak", label: "Günlük seri", value: String(streak), hint: "gün üst üste", tint: "rose" },
      {
        key: "net",
        label: "Ortalama net",
        value: avgNet.toFixed(1),
        hint: netSource.length ? `${netSource.length} ${denemeler.length ? "deneme" : "çalışma"}` : "veri yok",
        tint: "violet",
      },
      { key: "topics", label: "Tamamlanan konu", value: String(readTopics.length), hint: "okunan konu", tint: "emerald" },
    ];

    return { stats, progressRows, netHistory, weakest, overall, streak, todaySolved, avgNet };
  }, [progress, dailyGoal, questionById]);

  return {
    ready: progress != null,   // localStorage'da kayıt var mı
    raw: progress,             // ham ilerleme (gerekirse)
    refresh,                   // elle yenile
    ...derived,
  };
}

export default useProgress;
