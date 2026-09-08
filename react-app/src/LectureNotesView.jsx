import { useState, useEffect, useMemo, useRef } from "react";
import { supabase } from "./supabaseClient";
import {
  Search, Bold, Italic, List, ChevronRight, ChevronDown, Check, ListChecks, Gamepad2,
  PenLine, Highlighter, Eraser, Trash2, X, NotebookPen,
} from "lucide-react";
import NotebookCanvas from "./NotebookCanvas.jsx";

/**
 * LectureNotesView — sakin, havadar, premium okuma deneyimi.
 *
 * Tasarım ilkeleri
 *  · Palet: mint & okyanus mavisi ağırlıklı pastel tonlar, kapkara yerine antrasit metin.
 *  · Boşluk: geniş satır aralığı (leading-loose), paragraflar arası nefes payı, cömert padding.
 *  · Derinlik: bembeyaz yerine çok hafif pastel zemin + varla yok arası gölge.
 *  · Sağ panel: "Konularım" ve "Notlarım" sekmeye ayrıldı; not editörü tam yükseklik.
 *  · Scrollbar: standart kalın çubuk gizli, yerine ince ve şeffaf özel çubuk (.scrollbar-slim).
 */

const SUBJECTS = [
  { id: "turkce",    name: "Türkçe",    dot: "#38bdf8", soft: "#e8f6fd", tint: "#f4fbff", ring: "#bae6fd" }, // okyanus mavisi
  { id: "matematik", name: "Matematik", dot: "#8b96f0", soft: "#eceefc", tint: "#f6f7fe", ring: "#c7cdf7" }, // yumuşak indigo
  { id: "geometri",  name: "Geometri",  dot: "#4fd1ac", soft: "#e4f7f1", tint: "#f3fcf9", ring: "#a7e8d5" }, // mint
  { id: "sosyal",    name: "Sosyal",    dot: "#f0a882", soft: "#fdeee6", tint: "#fff8f4", ring: "#f8cdb6" }, // uçuk şeftali
  { id: "fen",       name: "Fen",       dot: "#e79ac0", soft: "#fbeaf2", tint: "#fef6fa", ring: "#f3c5da" }, // pudra
];

/* Ders içi branşlar. unit_id ön ekinden türetilir: "cog-iklim" → Coğrafya.
   Bir derste tek branş varsa başlık gösterilmez, liste düz kalır. */
const BRANCH_LABELS = {
  tar: "Tarih", cog: "Coğrafya", fel: "Felsefe", din: "Din Kültürü",
  fiz: "Fizik", kim: "Kimya", biy: "Biyoloji",
  mat: "Matematik", geo: "Geometri", tr: "Türkçe",
};

/* Branş sırası. Şart: DB'deki sort_order branşları iç içe geçiriyor
   (fel-giris 2, tar-inkilap 49...), bu yüzden sıra burada sabitleniyor. */
const BRANCH_ORDER = {
  sosyal: ["tar", "cog", "fel", "din"],
  fen: ["fiz", "kim", "biy"],
};

const branchOf = (unitId) => String(unitId || "").split("-")[0];

/* Yumuşak, iki katmanlı gölge — kartlara "havada duruyor" hissi verir */
const SOFT_SHADOW = "0 1px 2px rgba(15,23,42,.04), 0 14px 34px -18px rgba(15,23,42,.16)";

function ToolBtn({ on, onClick, label, accent, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={
        "grid h-8 w-8 place-items-center rounded-full transition-all duration-200 " +
        (on ? "text-white shadow-sm" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600")
      }
      style={on ? { backgroundColor: accent } : undefined}
    >
      {children}
    </button>
  );
}

/* Okuma alanı iskeleti */
function ReadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-9 w-2/3 rounded-xl bg-slate-100" />
      <div className="h-1 w-14 rounded-full bg-slate-100" />
      <div className="space-y-3.5 pt-4">
        {[95, 88, 92, 70, 84, 60].map((w, i) => (
          <div key={i} className="h-3.5 rounded-full bg-slate-100" style={{ width: w + "%" }} />
        ))}
      </div>
      <div className="space-y-3.5 pt-5">
        {[90, 78, 84, 55].map((w, i) => (
          <div key={i} className="h-3.5 rounded-full bg-slate-100" style={{ width: w + "%" }} />
        ))}
      </div>
    </div>
  );
}

/* Konu listesi iskeleti */
function ListSkeleton() {
  return (
    <div className="animate-pulse space-y-2 py-1">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 px-2 py-1.5">
          <div className="h-4 w-4 shrink-0 rounded-full bg-slate-100" />
          <div className="h-3 rounded-full bg-slate-100" style={{ width: 55 + ((i * 9) % 35) + "%" }} />
        </div>
      ))}
    </div>
  );
}

export default function LectureNotesView({ onPlay }) {
  const [subjectId, setSubjectId] = useState("turkce");
  const [topics, setTopics] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [userId, setUserId] = useState(null);
  const [noteStatus, setNoteStatus] = useState("");
  const [done, setDone] = useState(new Set());
  const [tab, setTab] = useState("topics"); // "topics" | "notes"
  const [activeBranch, setActiveBranch] = useState(null); // seçili branş (Fizik/Kimya/…)
  const editorRef = useRef(null);
  const saveTimer = useRef(null);

  // Çizim (kalem / fosforlu / silgi)
  const [drawMode, setDrawMode] = useState(false);
  const [drawTool, setDrawTool] = useState("pen");
  const [drawColor, setDrawColor] = useState("#475569");
  const [clearNonce, setClearNonce] = useState(0);
  const SWATCHES = ["#475569", "#38bdf8", "#4fd1ac", "#f0a882", "#e79ac0"];

  const subject = SUBJECTS.find((s) => s.id === subjectId) || SUBJECTS[0];

  useEffect(() => {
    supabase?.auth.getUser().then(({ data }) => setUserId(data?.user?.id || null));
  }, []);

  // Ders değişince konuları çek
  useEffect(() => {
    let cancel = false;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("topics")
        .select("unit_id,name,content")
        .eq("subject", subjectId)
        .order("sort_order");
      if (cancel) return;
      const list = (data || []).filter((t) => t.content);
      setTopics(list);
      setActiveId(list[0]?.unit_id || null);
      setActiveBranch(null);
      setLoading(false);
    })();
    return () => { cancel = true; };
  }, [subjectId]);

  // Tamamlanan konular (localStorage)
  useEffect(() => {
    try {
      setDone(new Set(JSON.parse(localStorage.getItem("tyt-progress-" + subjectId) || "[]")));
    } catch {
      setDone(new Set());
    }
  }, [subjectId]);

  const active = topics.find((t) => t.unit_id === activeId) || null;
  const filtered = topics.filter((t) => t.name.toLowerCase().includes(q.trim().toLowerCase()));

  /* Ders içi branşlar: Fen → Fizik/Kimya/Biyoloji, Sosyal → Tarih/Coğrafya/Felsefe/Din.
     Tek branşlı derslerde (Türkçe, Matematik, Geometri) buton satırı gizlenir. */
  const branches = useMemo(() => {
    const by = new Map();
    for (const t of topics) {
      const b = branchOf(t.unit_id);
      if (!by.has(b)) by.set(b, []);
      by.get(b).push(t);
    }
    const order = BRANCH_ORDER[subjectId] || [];
    return [...by.keys()]
      .sort((a, b) => {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      })
      .map((k) => ({
        key: k,
        label: BRANCH_LABELS[k] || k,
        items: by.get(k),
        doneCount: by.get(k).filter((t) => done.has(t.unit_id)).length,
      }));
  }, [topics, subjectId, done]);

  const multiBranch = branches.length > 1;
  const branch = branches.find((b) => b.key === activeBranch) || branches[0] || null;
  const scope = multiBranch && branch ? branch.items : topics;          // görünen konu kümesi
  const visible = scope.filter((t) => t.name.toLowerCase().includes(q.trim().toLowerCase()));
  const scopeDone = multiBranch && branch ? branch.doneCount : done.size;
  const pct = scope.length ? Math.round((scopeDone / scope.length) * 100) : 0;

  /* Branşa geçince o branşın ilk konusunu aç */
  function pickBranch(key) {
    setActiveBranch(key);
    setQ("");
    const first = branches.find((b) => b.key === key)?.items[0];
    if (first) setActiveId(first.unit_id);
  }

  /* Tek bir konu satırı — hem düz listede hem branş gruplarında kullanılır */
  function renderTopic(t) {
    const on = t.unit_id === activeId;
    const isDone = done.has(t.unit_id);
    return (
                      <div
                        key={t.unit_id}
                        className={
                          "group flex items-center rounded-2xl transition-all duration-200 " +
                          (on ? "shadow-sm" : "hover:bg-slate-50/80")
                        }
                        style={on ? { backgroundColor: subject.soft } : undefined}
                      >
                        <button
                          onClick={(e) => toggleDone(t.unit_id, e)}
                          aria-label={isDone ? t.name + " · tamamlandı" : t.name + " · tamamlanmadı"}
                          aria-pressed={isDone}
                          className="grid shrink-0 place-items-center py-3 pl-3.5 pr-2"
                        >
                          {isDone ? (
                            <span
                              className="grid h-[18px] w-[18px] place-items-center rounded-full text-white transition-transform duration-200"
                              style={{ backgroundColor: subject.dot }}
                            >
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="h-[18px] w-[18px] rounded-full border-[1.5px] border-slate-200 transition-colors duration-200 group-hover:border-slate-300" />
                          )}
                        </button>
                        <button
                          onClick={() => setActiveId(t.unit_id)}
                          className={
                            "flex flex-1 items-center justify-between gap-2 overflow-hidden py-3 pr-3.5 text-left text-sm leading-relaxed transition-colors duration-200 " +
                            (on ? "font-semibold text-slate-700" : isDone ? "font-light text-slate-300" : "font-normal text-slate-500")
                          }
                        >
                          <span className={"truncate " + (isDone && !on ? "line-through decoration-slate-200" : "")}>{t.name}</span>
                          {on && <ChevronRight className="h-4 w-4 shrink-0" style={{ color: subject.dot }} strokeWidth={2.2} />}
                        </button>
                      </div>
    );
  }


  function toggleDone(uid, e) {
    e?.stopPropagation();
    setDone((prev) => {
      const next = new Set(prev);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      try { localStorage.setItem("tyt-progress-" + subjectId, JSON.stringify([...next])); } catch {}
      return next;
    });
  }

  // Konu değişince kişisel notu yükle
  useEffect(() => {
    let cancel = false;
    (async () => {
      if (editorRef.current) editorRef.current.innerHTML = "";
      setNoteStatus("");
      const uid = userId || (await supabase?.auth.getUser())?.data?.user?.id;
      if (!uid || !active) return;
      const { data } = await supabase
        .from("user_notes")
        .select("body")
        .eq("user_id", uid)
        .eq("subject", subjectId)
        .eq("unit_id", active.unit_id)
        .maybeSingle();
      if (cancel || !editorRef.current) return;
      editorRef.current.innerHTML = data?.body || "";
    })();
    return () => { cancel = true; };
  }, [activeId, subjectId, userId]);

  function saveNote() {
    setNoteStatus("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      if (!userId || !active) return;
      const body = editorRef.current?.innerHTML || "";
      const { error } = await supabase.from("user_notes").upsert(
        { user_id: userId, subject: subjectId, unit_id: active.unit_id, body, updated_at: new Date().toISOString() },
        { onConflict: "user_id,subject,unit_id" }
      );
      setNoteStatus(error ? "err" : "saved");
    }, 700);
  }
  const exec = (c) => { document.execCommand(c, false, null); editorRef.current?.focus(); saveNote(); };

  const tabBase =
    "relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200";

  return (
    <div className="mx-auto max-w-6xl">
      {/* ───────── Ders sekmeleri ───────── */}
      <div className="scrollbar-hide mb-8 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible">
        {SUBJECTS.map((s) => {
          const on = s.id === subjectId;
          return (
            <button
              key={s.id}
              onClick={() => setSubjectId(s.id)}
              className={
                "inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all duration-300 " +
                (on
                  ? "font-semibold text-slate-700 shadow-sm"
                  : "font-medium text-slate-400 hover:bg-white/70 hover:text-slate-600")
              }
              style={on ? { backgroundColor: s.soft, boxShadow: `inset 0 0 0 1px ${s.ring}` } : undefined}
            >
              <span
                className="h-2 w-2 rounded-full transition-transform duration-300"
                style={{ backgroundColor: s.dot, transform: on ? "scale(1.15)" : "scale(1)" }}
              />
              {s.name}
            </button>
          );
        })}
      </div>

      {/* ───────── Branş butonları — "Fen" deyince Fizik / Kimya / Biyoloji ───────── */}
      {multiBranch && (
        <div className="scrollbar-hide -mx-1 -mt-5 mb-7 flex gap-2 overflow-x-auto px-1 pb-1">
          {branches.map((b) => {
            const on = b.key === branch?.key;
            return (
              <button
                key={b.key}
                onClick={() => pickBranch(b.key)}
                aria-pressed={on}
                className={
                  "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2.5 text-sm transition-all duration-200 " +
                  (on
                    ? "border-transparent font-semibold text-white shadow-sm"
                    : "border-slate-100 bg-white font-medium text-slate-500 hover:border-slate-200 hover:text-slate-700")
                }
                style={on ? { backgroundColor: subject.dot } : undefined}
              >
                {b.label}
                <span
                  className={
                    "rounded-lg px-1.5 py-0.5 text-[11px] font-semibold tabular-nums " +
                    (on ? "bg-white/25 text-white" : "bg-slate-50 text-slate-400")
                  }
                >
                  {b.doneCount}/{b.items.length}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        {/* ───────── Okuma kartı ───────── */}
        <article
          className="relative min-h-[64vh] overflow-hidden rounded-[28px] border border-white/80 p-5 sm:p-10 lg:p-12"
          style={{
            background: `linear-gradient(180deg, ${subject.tint} 0%, #ffffff 220px)`,
            boxShadow: SOFT_SHADOW,
            "--lec": subject.dot,
            "--lec-soft": subject.soft,
            "--lec-tint": subject.tint,
          }}
        >
          {/* Çizim araç çubuğu */}
          <div className="absolute right-5 top-5 z-30 flex items-center gap-1 rounded-full border border-white/90 bg-white/80 p-1 shadow-sm backdrop-blur-md">
            {drawMode ? (
              <>
                <ToolBtn on={drawTool === "pen"} onClick={() => setDrawTool("pen")} label="Kalem" accent={subject.dot}><PenLine className="h-4 w-4" strokeWidth={1.8} /></ToolBtn>
                <ToolBtn on={drawTool === "highlight"} onClick={() => setDrawTool("highlight")} label="Fosforlu" accent={subject.dot}><Highlighter className="h-4 w-4" strokeWidth={1.8} /></ToolBtn>
                <ToolBtn on={drawTool === "eraser"} onClick={() => setDrawTool("eraser")} label="Silgi" accent={subject.dot}><Eraser className="h-4 w-4" strokeWidth={1.8} /></ToolBtn>
                <span className="mx-1 h-5 w-px bg-slate-100" />
                {SWATCHES.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setDrawColor(c); if (drawTool === "eraser") setDrawTool("pen"); }}
                    aria-label={"Renk " + c}
                    className={
                      "h-5 w-5 rounded-full transition-transform duration-200 hover:scale-110 " +
                      (drawColor === c && drawTool !== "eraser" ? "ring-2 ring-slate-200 ring-offset-2" : "")
                    }
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span className="mx-1 h-5 w-px bg-slate-100" />
                <ToolBtn onClick={() => setClearNonce((n) => n + 1)} label="Temizle"><Trash2 className="h-4 w-4" strokeWidth={1.8} /></ToolBtn>
                <ToolBtn onClick={() => setDrawMode(false)} label="Kapat"><X className="h-4 w-4" strokeWidth={1.8} /></ToolBtn>
              </>
            ) : (
              <>
                {onPlay && active && (
                  <button
                    onClick={() => onPlay(subjectId, active.unit_id)}
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-slate-600"
                    title="Bu konuyu oyunla tekrar et"
                  >
                    <Gamepad2 className="h-4 w-4" strokeWidth={1.8} style={{ color: subject.dot }} /> Oyunla tekrar et
                  </button>
                )}
                <button
                  onClick={() => setDrawMode(true)}
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-slate-600"
                >
                  <PenLine className="h-4 w-4" strokeWidth={1.8} style={{ color: subject.dot }} /> Çiz
                </button>
              </>
            )}
          </div>

          {loading ? (
            <ReadingSkeleton />
          ) : active ? (
            <div
              className="lecture-prose max-w-[70ch] leading-loose text-slate-700"
              dangerouslySetInnerHTML={{ __html: active.content || "" }}
            />
          ) : (
            <div className="grid min-h-[40vh] place-items-center">
              <p className="text-sm font-light tracking-wide text-slate-300">Bu derste henüz konu yok.</p>
            </div>
          )}

          <NotebookCanvas
            active={drawMode}
            tool={drawTool}
            color={drawColor}
            clearNonce={clearNonce}
            storageKey={subjectId + "|" + (active?.unit_id || "")}
          />
        </article>

        {/* ───────── Sağ panel — sekmeli, tam yükseklik ───────── */}
        <aside
          className="flex flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/70 backdrop-blur-sm lg:sticky lg:top-6 lg:h-[calc(100vh-6rem)]"
          style={{ boxShadow: SOFT_SHADOW }}
        >
          {/* Sekme başlıkları */}
          <div className="shrink-0 p-3 pb-0">
            <div className="flex gap-1 rounded-2xl bg-slate-50/80 p-1">
              <button
                onClick={() => setTab("topics")}
                className={tabBase + (tab === "topics" ? " bg-white text-slate-700 shadow-sm" : " text-slate-400 hover:text-slate-600")}
              >
                <ListChecks className="h-4 w-4" strokeWidth={1.8} style={{ color: tab === "topics" ? subject.dot : undefined }} />
                Konularım
              </button>
              <button
                onClick={() => setTab("notes")}
                className={tabBase + (tab === "notes" ? " bg-white text-slate-700 shadow-sm" : " text-slate-400 hover:text-slate-600")}
              >
                <NotebookPen className="h-4 w-4" strokeWidth={1.8} style={{ color: tab === "notes" ? subject.dot : undefined }} />
                Notlarım
              </button>
            </div>
          </div>

          {/* ── Konularım ── */}
          {tab === "topics" && (
            <div className="flex min-h-0 flex-1 flex-col">
              {/* İlerleme */}
              <div className="shrink-0 px-5 pt-5">
                <div className="mb-2.5 flex items-baseline justify-between">
                  <span className="text-xs font-medium tracking-wide text-slate-400">
                    {scopeDone} / {scope.length} konu
                  </span>
                  <span className="text-xs font-semibold" style={{ color: subject.dot }}>%{pct}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: pct + "%", backgroundColor: subject.dot }}
                  />
                </div>
              </div>

              {/* Arama */}
              <div className="shrink-0 px-5 pt-4">
                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50/80 px-3.5 py-2.5 transition-colors duration-200 focus-within:bg-white focus-within:shadow-sm">
                  <Search className="h-4 w-4 shrink-0 text-slate-300" strokeWidth={1.8} />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Konu ara…"
                    className="w-full bg-transparent text-sm font-light text-slate-600 placeholder-slate-300 focus:outline-none"
                  />
                  {q && (
                    <button onClick={() => setQ("")} aria-label="Temizle" className="shrink-0 text-slate-300 hover:text-slate-500">
                      <X className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                  )}
                </div>
              </div>

              {/* Liste */}
              <div className="scrollbar-slim min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {loading ? (
                  <ListSkeleton />
                ) : visible.length ? (
                  visible.map(renderTopic)
                ) : (
                  <p className="px-4 py-8 text-center text-sm font-light text-slate-300">Sonuç bulunamadı.</p>
                )}
              </div>
            </div>
          )}

          {/* ── Notlarım — tam yükseklik editör ── */}
          {tab === "notes" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-5">
                <span className="truncate pr-3 text-xs font-medium tracking-wide text-slate-400">
                  {active?.name || "Konu seçilmedi"}
                </span>
                <div className="flex shrink-0 items-center gap-0.5">
                  {[
                    { cmd: "bold", Icon: Bold, label: "Kalın" },
                    { cmd: "italic", Icon: Italic, label: "İtalik" },
                    { cmd: "insertUnorderedList", Icon: List, label: "Liste" },
                  ].map(({ cmd, Icon, label }) => (
                    <button
                      key={cmd}
                      onClick={() => exec(cmd)}
                      aria-label={label}
                      title={label}
                      className="rounded-lg p-1.5 text-slate-300 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-600"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-0 flex-1 px-3 pb-3">
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={saveNote}
                  data-placeholder="Bu konuyla ilgili düşüncelerin, formüller, aklında kalanlar…"
                  className="note-editor scrollbar-slim h-full min-h-[240px] w-full overflow-y-auto rounded-2xl p-5 text-sm leading-loose text-slate-700 transition-colors duration-300 focus:bg-white focus:outline-none"
                  style={{ backgroundColor: subject.tint }}
                />
              </div>

              <div className="shrink-0 px-5 pb-5">
                <p className="flex items-center gap-2 text-xs font-light tracking-wide text-slate-300">
                  <span
                    className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: noteStatus === "err" ? "#f0a882" : noteStatus === "saving" ? "#cbd5e1" : subject.dot }}
                  />
                  {noteStatus === "saved"
                    ? "Kaydedildi"
                    : noteStatus === "saving"
                    ? "Kaydediliyor…"
                    : noteStatus === "err"
                    ? "Kaydedilemedi"
                    : "Otomatik kaydedilir · her cihazdan erişilir"}
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
