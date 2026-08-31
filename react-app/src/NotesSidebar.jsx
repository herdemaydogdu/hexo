import { useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import {
  Pencil, Pin, Undo2, Redo2, Bold, Italic, Underline, List, ListOrdered, Palette,
  ListChecks, Check, ArrowRight, Target,
} from "lucide-react";

/* ============================================================
   Ders Notları — sağ yan panel (3 kart)
   Not: defter içeriği/ana alan DEĞİŞTİRİLMEDİ.
   ============================================================ */

/* ---------- Zengin metin araç çubuğu ---------- */
function RichTextToolbar({ onCmd }) {
  const cls = "flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white hover:text-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-200";
  const Btn = ({ cmd, val, label, children }) => (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cls}
      onMouseDown={(e) => { e.preventDefault(); onCmd(cmd, val); }}
    >
      {children}
    </button>
  );
  const Sep = () => <span className="mx-0.5 h-5 w-px bg-slate-200" aria-hidden="true" />;
  return (
    <div className="mb-2 flex items-center justify-between gap-0.5 rounded-xl bg-slate-50 px-1.5 py-1">
      <Btn cmd="undo" label="Geri al"><Undo2 className="h-4 w-4" /></Btn>
      <Btn cmd="redo" label="İleri al"><Redo2 className="h-4 w-4" /></Btn>
      <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
      <Btn cmd="bold" label="Kalın"><Bold className="h-4 w-4" /></Btn>
      <Btn cmd="italic" label="İtalik"><Italic className="h-4 w-4" /></Btn>
      <Btn cmd="underline" label="Altı çizili"><Underline className="h-4 w-4" /></Btn>
      <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
      <Btn cmd="insertUnorderedList" label="Madde işaretli liste"><List className="h-4 w-4" /></Btn>
      <Btn cmd="insertOrderedList" label="Numaralı liste"><ListOrdered className="h-4 w-4" /></Btn>
      <Btn cmd="foreColor" val="#7c3aed" label="Yazı rengi"><Palette className="h-4 w-4" /></Btn>
    </div>
  );
}

/* ---------- 1) Notlarım (Supabase'e kayıtlı zengin metin) ---------- */
function LessonNotesPanel({ subjectId, topic, userId, theme }) {
  const ref = useRef(null);
  const timer = useRef(null);
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (ref.current) ref.current.innerHTML = "";
      setCount(0);
      setStatus("");
      if (!userId || !topic || !supabase) return;
      const { data } = await supabase
        .from("user_notes").select("body")
        .eq("user_id", userId).eq("subject", subjectId).eq("unit_id", topic.unit_id)
        .maybeSingle();
      if (cancelled || !ref.current) return;
      ref.current.innerHTML = data?.body || "";
      setCount(ref.current.innerText.trim().length);
    }
    load();
    return () => { cancelled = true; clearTimeout(timer.current); };
  }, [subjectId, topic, userId]);

  function scheduleSave() {
    setStatus("saving");
    setCount(ref.current ? ref.current.innerText.trim().length : 0);
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      if (!userId || !topic || !supabase) return;
      const body = ref.current ? ref.current.innerHTML : "";
      const { error } = await supabase.from("user_notes").upsert(
        { user_id: userId, subject: subjectId, unit_id: topic.unit_id, body, updated_at: new Date().toISOString() },
        { onConflict: "user_id,subject,unit_id" }
      );
      setStatus(error ? "err" : "saved");
    }, 800);
  }

  // execCommand deprecated ama kütüphanesiz zengin metin için en pratik yol.
  function cmd(c, v) {
    document.execCommand(c, false, v);
    ref.current?.focus();
    scheduleSave();
  }

  return (
    <section className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm lg:shrink-0">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800">
          <Pencil className="h-4 w-4" style={{ color: theme?.nb }} strokeWidth={2} /> Notlarım
        </h3>
        <button aria-label="Notu sabitle" className="text-slate-300 hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 rounded">
          <Pin className="h-4 w-4" />
        </button>
      </div>

      <RichTextToolbar onCmd={cmd} />

      <div className="relative">
        <div
          ref={ref}
          role="textbox"
          aria-multiline="true"
          aria-label="Kişisel not editörü"
          contentEditable
          suppressContentEditableWarning
          onInput={scheduleSave}
          data-placeholder="Bu konuyla ilgili kendi notlarını buraya yaz…"
          className="note-editor min-h-[120px] w-full overflow-auto rounded-xl border border-violet-100 bg-violet-50/30 p-3 pb-7 text-sm leading-relaxed text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
        />
        <span className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-slate-400">{count} karakter</span>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400" aria-live="polite">
        {status === "saved" && (<><span className="h-2 w-2 rounded-full bg-emerald-400" /> Kaydedildi</>)}
        {status === "saving" && <span>Kaydediliyor…</span>}
        {status === "err" && <span className="text-rose-500">Kaydedilemedi</span>}
        {!status && <span>Otomatik kaydedilir · her cihazdan erişilir</span>}
      </div>
    </section>
  );
}

/* ---------- 2) Konularım (ilerleme — localStorage) ---------- */
function TopicProgressCard({ subjectId, topics, currentUnitId, theme }) {
  const [done, setDone] = useState(new Set());
  useEffect(() => {
    try {
      setDone(new Set(JSON.parse(localStorage.getItem("tyt-progress-" + subjectId) || "[]")));
    } catch {
      setDone(new Set());
    }
  }, [subjectId]);

  function toggle(uid) {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      try { localStorage.setItem("tyt-progress-" + subjectId, JSON.stringify([...next])); } catch {}
      return next;
    });
  }

  const pct = topics.length ? Math.round((done.size / topics.length) * 100) : 0;

  return (
    <section className="flex flex-col rounded-2xl border border-violet-100 bg-white p-4 shadow-sm lg:min-h-0 lg:flex-1">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800">
          <ListChecks className="h-4 w-4" style={{ color: theme?.nb }} strokeWidth={2} /> Konularım
        </h3>
        <span className="text-xs font-medium text-slate-400">İlerleme: %{pct}</span>
      </div>
      <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full transition-all" style={{ width: pct + "%", backgroundColor: theme?.nb || "#a78bfa" }} />
      </div>
      <ul className="max-h-56 space-y-0.5 overflow-auto pr-1 lg:max-h-none lg:min-h-0 lg:flex-1">
        {topics.map((t) => {
          const isDone = done.has(t.unit_id);
          const isCurrent = t.unit_id === currentUnitId;
          return (
            <li key={t.unit_id}>
              <button
                onClick={() => toggle(t.unit_id)}
                aria-label={t.name + (isDone ? " · tamamlandı" : " · tamamlanmadı")}
                aria-pressed={isDone}
                className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
              >
                {isDone ? (
                  <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full text-white" style={{ backgroundColor: theme?.nb || "#8b5cf6" }}>
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                ) : isCurrent ? (
                  <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full" style={{ backgroundColor: theme?.soft || "#fef3c7", color: theme?.dark || "#d97706" }}>
                    <ArrowRight className="h-3 w-3" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-slate-200" />
                )}
                <span className={"truncate " + (isDone ? "text-slate-400 line-through" : isCurrent ? "font-semibold text-slate-800" : "text-slate-600")}>
                  {t.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------- 3) Pekiştirme CTA ---------- */
function PracticeCTA({ onNavigate, theme }) {
  return (
    <section
      className="rounded-2xl p-5 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:shrink-0"
      style={{ backgroundImage: "linear-gradient(135deg, " + (theme?.dark || "#6d28d9") + ", #221a4d)" }}
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
        <Target className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="text-base font-bold text-amber-200">Bugün öğrendiklerini pekiştir!</h3>
      <p className="mt-1 text-sm text-violet-100/80">5 soru çözerek konuyu tekrar et.</p>
      <button
        onClick={() => onNavigate && onNavigate("quiz")}
        className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-violet-900 transition-colors hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
      >
        Soru Çöz <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </section>
  );
}

export default function NotesSidebar({ subjectId, topic, topics, userId, onNavigate, theme }) {
  return (
    <div className="flex flex-col gap-4 lg:h-full lg:min-h-0">
      <LessonNotesPanel subjectId={subjectId} topic={topic} userId={userId} theme={theme} />
      <TopicProgressCard subjectId={subjectId} topics={topics} currentUnitId={topic?.unit_id} theme={theme} />
    </div>
  );
}
