import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Loader2, Check, X, ChevronRight, ChevronLeft, RotateCcw, BookOpen } from "lucide-react";

/**
 * Soru Çöz — Ders → Konu → Sorular.
 * Konular `topics`, sorular `questions` tablosundan gelir.
 * Her cevap `attempts`'e yazılır → dashboard canlanır. onFinish: dashboard'u tazeler.
 */

const SUBJECTS = [
  { id: "turkce", name: "Türkçe", tint: "sky" },
  { id: "matematik", name: "Matematik", tint: "violet" },
  { id: "geometri", name: "Geometri", tint: "teal" },
  { id: "sosyal", name: "Sosyal Bilimler", tint: "emerald" },
  { id: "fen", name: "Fen Bilimleri", tint: "rose" },
];
const CHIP = {
  sky: "bg-sky-100 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  teal: "bg-teal-100 text-teal-700",
  emerald: "bg-emerald-100 text-emerald-700",
  rose: "bg-rose-100 text-rose-700",
};
const SESSION_SIZE = 10;

function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Quiz({ onFinish }) {
  const [userId, setUserId] = useState(null);
  const [phase, setPhase] = useState("subject"); // subject | topic | quiz | done
  const [subject, setSubject] = useState(null); // {id,name,tint}
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(null); // {unit_id, name}
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    supabase?.auth.getUser().then(({ data }) => setUserId(data?.user?.id || null));
  }, []);

  async function openSubject(s) {
    setSubject(s);
    setErr(null);
    setLoading(true);
    setPhase("topic");
    try {
      const { data, error } = await supabase
        .from("topics")
        .select("unit_id,name,question_count")
        .eq("subject", s.id)
        .gt("question_count", 0)
        .order("sort_order");
      if (error) throw error;
      setTopics(data || []);
    } catch (e) {
      setErr(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  async function startTopic(t) {
    // t.unit_id null → o dersin tüm konularından karışık
    setTopic(t);
    setErr(null);
    setLoading(true);
    try {
      let query = supabase
        .from("questions")
        .select("id,subject,topic,q,options,answer,explanation")
        .eq("subject", subject.id);
      if (t.unit_id) query = query.eq("topic", t.unit_id);
      const { data, error } = await query.limit(300);
      if (error) throw error;
      const pool = shuffle(data || []).slice(0, SESSION_SIZE);
      if (!pool.length) {
        setErr("Bu konuda soru bulunamadı.");
        return;
      }
      setQuestions(pool);
      setIdx(0);
      setSelected(null);
      setAnswered(false);
      setScore(0);
      setPhase("quiz");
    } catch (e) {
      setErr(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  function pick(i) {
    if (answered) return;
    const cur = questions[idx];
    const correct = i === cur.answer;
    setSelected(i);
    setAnswered(true);
    if (correct) setScore((s) => s + 1);
    if (userId) {
      supabase
        .from("attempts")
        .insert({ user_id: userId, question_id: cur.id, subject: cur.subject, is_correct: correct })
        .then(({ error }) => error && console.warn("attempt yazılamadı:", error.message));
    }
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setPhase("done");
      if (typeof onFinish === "function") onFinish();
    } else {
      setIdx((n) => n + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  // ——— 1) Ders seçimi ———
  if (phase === "subject") {
    return (
      <div className="mx-auto max-w-3xl">
        <h1 className="text-xl font-bold tracking-tight text-slate-800">Soru Çöz</h1>
        <p className="mt-1 text-sm text-slate-400">Önce bir ders seç.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              onClick={() => openSubject(s)}
              className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <span className={"grid h-11 w-11 place-items-center rounded-2xl " + (CHIP[s.tint] || CHIP.sky)}>
                <BookOpen className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="font-semibold text-slate-800">{s.name}</span>
              <ChevronRight className="ml-auto h-5 w-5 text-slate-300" strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ——— 2) Konu seçimi ———
  if (phase === "topic") {
    return (
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => setPhase("subject")}
          className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700"
        >
          <ChevronLeft className="h-4 w-4" /> Dersler
        </button>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">{subject?.name}</h1>
        <p className="mt-1 text-sm text-slate-400">Bir konu seç, {SESSION_SIZE} soruluk test başlasın.</p>

        {loading ? (
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <Loader2 className="h-4 w-4 animate-spin" /> Konular yükleniyor…
          </p>
        ) : err ? (
          <p className="mt-6 rounded-2xl bg-rose-50 px-4 py-2.5 text-sm text-rose-600">{err}</p>
        ) : (
          <div className="mt-6 space-y-2.5">
            {/* Karışık — tüm konular */}
            <button
              onClick={() => startTopic({ unit_id: null, name: "Karışık" })}
              className="flex w-full items-center justify-between rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3.5 text-left hover:bg-violet-100"
            >
              <span className="font-semibold text-violet-700">🎲 Karışık — tüm konular</span>
              <ChevronRight className="h-5 w-5 text-violet-400" strokeWidth={2} />
            </button>

            {topics.map((t) => (
              <button
                key={t.unit_id}
                onClick={() => startTopic(t)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3.5 text-left shadow-sm hover:border-violet-200 hover:bg-violet-50"
              >
                <span className="font-medium text-slate-700">{t.name}</span>
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  {t.question_count} soru
                  <ChevronRight className="h-4 w-4 text-slate-300" strokeWidth={2} />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ——— 4) Sonuç ———
  if (phase === "done") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-violet-100 text-2xl font-bold text-violet-600">
            %{pct}
          </div>
          <h2 className="text-lg font-bold text-slate-800">Test tamamlandı!</h2>
          <p className="mt-1 text-sm text-slate-500">
            {subject?.name} · {topic?.name} — {questions.length} soruda{" "}
            <span className="font-semibold text-slate-800">{score} doğru</span>. Sonuçların panele işlendi.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => startTopic(topic)}
              className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-600"
            >
              <RotateCcw className="h-4 w-4" /> Aynı konudan tekrar
            </button>
            <button
              onClick={() => setPhase("topic")}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Başka konu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ——— 3) Soru ———
  const cur = questions[idx];
  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => setPhase("topic")}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700"
      >
        <ChevronLeft className="h-4 w-4" /> {subject?.name} · {topic?.name}
      </button>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          Soru {idx + 1} / {questions.length}
        </span>
        <span className="text-sm font-semibold text-slate-800">{score} doğru</span>
      </div>
      <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-violet-400 transition-all"
          style={{ width: ((idx + (answered ? 1 : 0)) / questions.length) * 100 + "%" }}
        />
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <p className="text-base font-semibold leading-relaxed text-slate-800">{cur.q}</p>

        <div className="mt-5 space-y-2.5">
          {cur.options.map((opt, i) => {
            const isCorrect = i === cur.answer;
            const isSelected = i === selected;
            let cls = "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50";
            if (answered && isCorrect) cls = "border-emerald-300 bg-emerald-50 text-emerald-800";
            else if (answered && isSelected && !isCorrect) cls = "border-rose-300 bg-rose-50 text-rose-800";
            else if (answered) cls = "border-slate-200 bg-white opacity-60";
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={answered}
                className={"flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition-colors " + cls}
              >
                <span>{opt}</span>
                {answered && isCorrect && <Check className="h-4 w-4 text-emerald-600" strokeWidth={2.5} />}
                {answered && isSelected && !isCorrect && <X className="h-4 w-4 text-rose-600" strokeWidth={2.5} />}
              </button>
            );
          })}
        </div>

        {answered && cur.explanation && (
          <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-700">Açıklama: </span>
            <span dangerouslySetInnerHTML={{ __html: cur.explanation }} />
          </div>
        )}

        {answered && (
          <button
            onClick={next}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-600"
          >
            {idx + 1 >= questions.length ? "Testi bitir" : "Sonraki soru"}
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
}
