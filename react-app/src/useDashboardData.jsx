import { useState, useEffect, useCallback, useMemo } from "react";
import { supabase } from "./supabaseClient";

/**
 * useDashboardData — dashboard metriklerini Supabase'ten hesaplar.
 * "Bugün çözülen", "seri" ve ders başarıları artık doğrudan `attempts`
 * (cevap kayıtları) tablosundan türetilir → soru çözdükçe kendiliğinden canlanır.
 * user_stats yalnızca daily_goal / avg_net / completed_topics için kullanılır.
 */

const SUBJECT_META = {
  turkce: { name: "Türkçe", tint: "sky" },
  matematik: { name: "Matematik", tint: "violet" },
  geometri: { name: "Geometri", tint: "teal" },
  sosyal: { name: "Sosyal Bilimler", tint: "emerald" },
  fen: { name: "Fen Bilimleri", tint: "rose" },
};
const SUBJECT_ORDER = ["turkce", "matematik", "geometri", "sosyal", "fen"];

function localDay(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function calcStreakFromDays(daysSet) {
  if (!daysSet.size) return 0;
  const cur = new Date();
  cur.setHours(12, 0, 0, 0);
  let streak = 0;
  if (!daysSet.has(localDay(cur))) cur.setDate(cur.getDate() - 1);
  while (daysSet.has(localDay(cur))) {
    streak++;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

export function useDashboardData() {
  const [statsRow, setStatsRow] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (!supabase) throw new Error("Supabase yapılandırılmamış (.env eksik).");
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setStatsRow(null);
        setAttempts([]);
        return;
      }
      const [statsRes, attRes] = await Promise.all([
        supabase.from("user_stats").select("*").eq("user_id", user.id).maybeSingle(),
        supabase
          .from("attempts")
          .select("subject,is_correct,answered_at")
          .eq("user_id", user.id)
          .order("answered_at", { ascending: false })
          .limit(5000),
      ]);
      if (statsRes.error) throw statsRes.error;
      if (attRes.error) throw attRes.error;
      setStatsRow(statsRes.data);
      setAttempts(attRes.data || []);
    } catch (e) {
      setError(e.message || String(e));
      setStatsRow(null);
      setAttempts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const sub = supabase?.auth.onAuthStateChange(() => load());
    return () => sub?.data?.subscription?.unsubscribe();
  }, [load]);

  const derived = useMemo(() => {
    const dailyGoal = statsRow?.daily_goal ?? 50;
    const avgNet = Number(statsRow?.avg_net ?? 0);
    const completedTopics = statsRow?.completed_topics ?? 0;

    const today = localDay();
    const daysSet = new Set();
    const bySub = {};
    let solvedToday = 0;
    let lastSubject = null; // attempts desc sıralı → ilk gördüğümüz en yeni

    for (const a of attempts) {
      const day = localDay(new Date(a.answered_at));
      daysSet.add(day);
      if (day === today) solvedToday++;
      if (!lastSubject) lastSubject = a.subject;
      const b = (bySub[a.subject] = bySub[a.subject] || { c: 0, t: 0 });
      b.t++;
      if (a.is_correct) b.c++;
    }

    const streak = calcStreakFromDays(daysSet);

    const progressRows = SUBJECT_ORDER.filter((id) => bySub[id] && bySub[id].t).map((id) => {
      const v = bySub[id];
      const meta = SUBJECT_META[id] || { name: id, tint: "sky" };
      return { id, subject: meta.name, tint: meta.tint, value: Math.round((v.c / v.t) * 100) };
    });

    const weakest = progressRows.length
      ? progressRows.slice().sort((a, b) => a.value - b.value)[0]
      : null;

    const resume = lastSubject
      ? {
          id: lastSubject,
          subject: (SUBJECT_META[lastSubject] || { name: lastSubject }).name,
          tint: (SUBJECT_META[lastSubject] || { tint: "sky" }).tint,
          value: bySub[lastSubject] ? Math.round((bySub[lastSubject].c / bySub[lastSubject].t) * 100) : 0,
        }
      : null;

    return {
      dailyGoal,
      solvedToday,
      streak,
      avgNet,
      completedTopics,
      progressRows,
      weakest,
      resume,
      totalSolved: attempts.length,
    };
  }, [statsRow, attempts]);

  return { ready: statsRow != null, loading, error, refresh: load, ...derived };
}

export default useDashboardData;
