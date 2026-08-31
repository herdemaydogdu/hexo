import { useState, useEffect, useMemo, useLayoutEffect, useRef } from "react";
import { supabase } from "./supabaseClient";
import { Loader2, ChevronRight, ChevronLeft, BookOpen, FileText, PenLine, Highlighter, Eraser, Trash2, X } from "lucide-react";
import NotesSidebar from "./NotesSidebar.jsx";
import NotebookCanvas from "./NotebookCanvas.jsx";

/**
 * Ders Notları — Ders → Konu → defter görünümlü anlatım + sağda not/ilerleme/CTA paneli.
 * Anlatım: topics.content (js/data'dan seed ile). Kişisel not: user_notes (Supabase).
 */

const SUBJECTS = [
  { id: "turkce", name: "Türkçe", tint: "sky", desc: "Sözcük, cümle, paragraf ve dil bilgisi" },
  { id: "matematik", name: "Matematik", tint: "violet", desc: "Temel kavramlar, sayılar, denklemler" },
  { id: "geometri", name: "Geometri", tint: "teal", desc: "Açılar, üçgenler, alan ve hacim" },
  { id: "sosyal", name: "Sosyal Bilimler", tint: "emerald", desc: "Tarih, coğrafya, felsefe, din" },
  { id: "fen", name: "Fen Bilimleri", tint: "rose", desc: "Fizik, kimya, biyoloji" },
];
const CHIP = {
  sky: "bg-sky-100 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  teal: "bg-teal-100 text-teal-700",
  emerald: "bg-emerald-100 text-emerald-700",
  rose: "bg-rose-100 text-rose-700",
};

// Ders bazlı yumuşak pastel tema (defter aksanları).
const THEME = {
  turkce:    { nb: "#38bdf8", soft: "#e0f2fe", ruled: "rgba(56,189,248,.10)", dark: "#0284c7" },
  matematik: { nb: "#f472b6", soft: "#fce7f3", ruled: "rgba(244,114,182,.10)", dark: "#be185d" },
  geometri:  { nb: "#34d399", soft: "#d1fae5", ruled: "rgba(52,211,153,.12)", dark: "#059669" },
  sosyal:    { nb: "#a78bfa", soft: "#ede9fe", ruled: "rgba(167,139,250,.12)", dark: "#7c3aed" },
  fen:       { nb: "#fbbf24", soft: "#fef9c3", ruled: "rgba(251,191,36,.14)", dark: "#d97706" },
};

// İçeriği "atom"lara ayır: her blok; listeler ise her <li> ayrı atom (uzun listeler bölünebilsin).
function buildAtoms(html) {
  if (!html) return [];
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const atoms = [];
  for (const el of Array.from(tmp.children)) {
    const tag = el.tagName;
    if (tag === "UL" || tag === "OL") {
      const lt = tag.toLowerCase();
      for (const li of Array.from(el.children)) atoms.push({ list: lt, html: li.outerHTML, head: false });
    } else {
      atoms.push({ list: null, html: el.outerHTML, head: tag === "H2" || tag === "H3" });
    }
  }
  return atoms;
}
// Ölçüm için: her atom bağımsız bir üst-eleman (li'ler kendi listesine sarılı).
function atomMeasureHtml(atoms) {
  return atoms.map((a) => (a.list ? `<${a.list}>${a.html}</${a.list}>` : a.html)).join("");
}
// Bir sayfadaki atomları HTML'e çevir: ardışık aynı-tür li'ler tek listede birleşir.
function atomsToHtml(atoms) {
  let out = "", i = 0;
  while (i < atoms.length) {
    if (atoms[i].list) {
      const lt = atoms[i].list;
      let items = "";
      while (i < atoms.length && atoms[i].list === lt) { items += atoms[i].html; i++; }
      out += `<${lt}>${items}</${lt}>`;
    } else { out += atoms[i].html; i++; }
  }
  return out;
}

export default function Notes({ onNavigate }) {
  const [phase, setPhase] = useState("subject"); // subject | topic | note
  const [subject, setSubject] = useState(null);
  const [topics, setTopics] = useState([]);
  const [note, setNote] = useState(null); // { unit_id, name, content }
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [userId, setUserId] = useState(null);
  const [pageMode, setPageMode] = useState(() => {
    try { return localStorage.getItem("tyt-notes-pagemode") || "single"; } catch { return "single"; }
  });
  const [pageIndex, setPageIndex] = useState(0);
  const [drawMode, setDrawMode] = useState(false);
  const [drawTool, setDrawTool] = useState("pen");
  const [drawColor, setDrawColor] = useState("#1e293b");
  const [clearNonce, setClearNonce] = useState(0);

  useEffect(() => {
    supabase?.auth.getUser().then(({ data }) => setUserId(data?.user?.id || null));
  }, []);

  const atoms = useMemo(() => buildAtoms(note?.content), [note]);
  const measureHtml = useMemo(() => atomMeasureHtml(atoms), [atoms]);
  const [pages, setPages] = useState([]);
  const measureRef = useRef(null);
  const areaRef = useRef(null);

  useLayoutEffect(() => {
    function paginate() {
      const area = areaRef.current;
      const meas = measureRef.current;
      if (!area || !atoms.length) { setPages(atoms.length ? [atomsToHtml(atoms)] : []); return; }
      const availH = area.clientHeight - 8;
      const els = meas ? Array.from(meas.children) : [];
      if (!els.length || availH < 60) { setPages([atomsToHtml(atoms)]); return; }
      const heightOf = (i) => {
        const el = els[i]; if (!el) return 0;
        const cs = getComputedStyle(el);
        return el.offsetHeight + (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0);
      };
      const groups = [];
      let cur = []; // [{ atom, h }]
      let curH = 0;
      for (let i = 0; i < atoms.length; i++) {
        const h = heightOf(i);
        if (curH + h > availH && cur.length) {
          // Boş başlık olmasın: sayfa başlıkla bitmesin, başlığı sonraki sayfaya taşı.
          const carry = [];
          while (cur.length && cur[cur.length - 1].atom.head) carry.unshift(cur.pop());
          if (cur.length) groups.push(cur.map((x) => x.atom));
          cur = carry;
          curH = carry.reduce((s, x) => s + x.h, 0);
        }
        cur.push({ atom: atoms[i], h });
        curH += h;
      }
      if (cur.length) groups.push(cur.map((x) => x.atom));
      setPages(groups.length ? groups.map(atomsToHtml) : [atomsToHtml(atoms)]);
    }
    paginate();
    window.addEventListener("resize", paginate);
    return () => window.removeEventListener("resize", paginate);
  }, [atoms, pageMode]);

  useEffect(() => { setPageIndex(0); }, [note, pageMode]);

  async function openSubject(s) {
    setSubject(s);
    setErr(null);
    setLoading(true);
    setPhase("topic");
    try {
      const { data, error } = await supabase
        .from("topics")
        .select("unit_id,name,content")
        .eq("subject", s.id)
        .order("sort_order");
      if (error) throw error;
      setTopics((data || []).filter((t) => t.content));
    } catch (e) {
      setErr(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  function openNote(t) {
    setNote(t);
    setPhase("note");
    try { window.scrollTo(0, 0); } catch {}
  }

  function changeMode(m) {
    setPageMode(m);
    try { localStorage.setItem("tyt-notes-pagemode", m); } catch {}
  }

  // ——— 1) Ders ———
  if (phase === "subject") {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Ders Notları</h1>
          <p className="mt-2 text-base text-slate-400">Bir ders seç; konu anlatımlarını oku, kendi notlarını al.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              onClick={() => openSubject(s)}
              className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-violet-100 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ backgroundColor: THEME[s.id]?.soft, color: THEME[s.id]?.dark }}
                >
                  <BookOpen className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-800">{s.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ——— 2) Konu listesi ———
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
        <p className="mt-1 text-sm text-slate-400">Bir konu seç, anlatımı oku ve kendi notunu al.</p>

        {loading ? (
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <Loader2 className="h-4 w-4 animate-spin" /> Konular yükleniyor…
          </p>
        ) : err ? (
          <p className="mt-6 rounded-2xl bg-rose-50 px-4 py-2.5 text-sm text-rose-600">{err}</p>
        ) : (
          <div className="mt-6 space-y-2.5">
            {topics.map((t) => (
              <button
                key={t.unit_id}
                onClick={() => openNote(t)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3.5 text-left shadow-sm hover:border-violet-200 hover:bg-violet-50"
              >
                <span className="flex items-center gap-2.5 font-medium text-slate-700">
                  <FileText className="h-4 w-4 text-slate-400" strokeWidth={1.8} />
                  {t.name}
                </span>
                <ChevronRight className="h-4 w-4 text-slate-300" strokeWidth={2} />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ——— 3) Defter: anlatım (sol) + panel (sağ) ———
  const twoPage = pageMode === "double";
  const t = THEME[subject?.id] || THEME.matematik;
  const total = pages.length;
  const step = twoPage ? 2 : 1;
  const safeIndex = Math.min(pageIndex, Math.max(0, total - 1));
  const topicIdx = topics.findIndex((x) => x.unit_id === note?.unit_id);
  const prevTopic = topicIdx > 0 ? topics[topicIdx - 1] : null;
  const nextTopic = topicIdx >= 0 && topicIdx < topics.length - 1 ? topics[topicIdx + 1] : null;
  const goPrev = () => setPageIndex(Math.max(0, safeIndex - step));
  const goNext = () => setPageIndex(Math.min(total - 1, safeIndex + step));
  const pageLabel = twoPage
    ? `${safeIndex + 1}–${Math.min(safeIndex + 2, total)} / ${total}`
    : `${safeIndex + 1} / ${total}`;
  return (
    <div className="mx-auto flex max-w-6xl flex-col lg:h-[calc(100dvh-8rem)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <button
          onClick={() => setPhase("topic")}
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700"
        >
          <ChevronLeft className="h-4 w-4" /> {subject?.name}
        </button>
        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-0.5 text-xs font-semibold">
          <button
            onClick={() => changeMode("single")}
            className={"rounded-lg px-3 py-1.5 transition-colors " + (!twoPage ? "bg-violet-100 text-violet-700" : "text-slate-500 hover:text-slate-700")}
          >
            Tek sayfa
          </button>
          <button
            onClick={() => changeMode("double")}
            className={"rounded-lg px-3 py-1.5 transition-colors " + (twoPage ? "bg-violet-100 text-violet-700" : "text-slate-500 hover:text-slate-700")}
          >
            İki sayfa
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:min-h-0 lg:flex-1 lg:grid-cols-[1fr_360px]">
        {/* Anlatım — spiralli defter; kaydırma yok, ← → ile sayfa çevrilir */}
        <div className="nb-wrap relative lg:min-h-0">
          <div className="nb-coils" aria-hidden="true" />
          <article
            className="notebook-page relative flex flex-col lg:h-full"
            style={{ "--nb": t.nb, "--nb-soft": t.soft, "--nb-ruled": t.ruled, "--nb-dark": t.dark }}
          >
            {/* Çizim araç çubuğu */}
            <div className="absolute right-4 top-4 z-30 flex items-center gap-1 rounded-xl border border-slate-200 bg-white/95 p-1 shadow-sm">
              {drawMode ? (
                <>
                  <button onClick={() => setDrawTool("pen")} title="Kalem" aria-label="Kalem" className={"flex h-7 w-7 items-center justify-center rounded-lg " + (drawTool === "pen" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-100")}><PenLine className="h-4 w-4" /></button>
                  <button onClick={() => setDrawTool("highlight")} title="Fosforlu" aria-label="Fosforlu" className={"flex h-7 w-7 items-center justify-center rounded-lg " + (drawTool === "highlight" ? "bg-amber-400 text-white" : "text-slate-500 hover:bg-slate-100")}><Highlighter className="h-4 w-4" /></button>
                  <button onClick={() => setDrawTool("eraser")} title="Silgi" aria-label="Silgi" className={"flex h-7 w-7 items-center justify-center rounded-lg " + (drawTool === "eraser" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-100")}><Eraser className="h-4 w-4" /></button>
                  <span className="mx-0.5 h-5 w-px bg-slate-200" />
                  {["#1e293b", "#2563eb", "#dc2626", "#16a34a", "#f59e0b"].map((c) => (
                    <button key={c} onClick={() => setDrawColor(c)} aria-label={"Renk " + c} className="h-5 w-5 rounded-full border border-white" style={{ backgroundColor: c, boxShadow: drawColor === c ? "0 0 0 2px #64748b" : "none" }} />
                  ))}
                  <span className="mx-0.5 h-5 w-px bg-slate-200" />
                  <button onClick={() => setClearNonce((n) => n + 1)} title="Temizle" aria-label="Temizle" className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"><Trash2 className="h-4 w-4" /></button>
                  <button onClick={() => setDrawMode(false)} title="Çizimi kapat" aria-label="Çizimi kapat" className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"><X className="h-4 w-4" /></button>
                </>
              ) : (
                <button onClick={() => setDrawMode(true)} title="Deftere çiz" className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                  <PenLine className="h-4 w-4" /> Çiz
                </button>
              )}
            </div>

            <div ref={areaRef} className="relative min-h-0 flex-1 overflow-hidden">
              {/* gizli ölçüm katmanı — sayfa yüksekliğine göre bölmek için */}
              <div
                ref={measureRef}
                className="notes-content"
                aria-hidden="true"
                style={{ position: "absolute", top: 0, left: 0, visibility: "hidden", pointerEvents: "none", width: twoPage ? "calc(50% - 20px)" : "100%" }}
                dangerouslySetInnerHTML={{ __html: measureHtml }}
              />
              {twoPage ? (
                <div className="grid h-full grid-cols-2 gap-10">
                  <div className="notes-content overflow-hidden" dangerouslySetInnerHTML={{ __html: pages[safeIndex] || "" }} />
                  <div className="notes-content overflow-hidden" dangerouslySetInnerHTML={{ __html: pages[safeIndex + 1] || "" }} />
                </div>
              ) : (
                <div className="notes-content h-full overflow-hidden" dangerouslySetInnerHTML={{ __html: pages[safeIndex] || "" }} />
              )}

              <NotebookCanvas
                active={drawMode}
                tool={drawTool}
                color={drawColor}
                clearNonce={clearNonce}
                storageKey={(subject?.id || "") + "|" + (note?.unit_id || "") + "|" + safeIndex}
              />
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <button
                onClick={() => prevTopic && openNote(prevTopic)}
                disabled={!prevTopic}
                title={prevTopic ? prevTopic.name : ""}
                className="inline-flex max-w-[32%] items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" /> <span className="truncate">Önceki konu</span>
              </button>

              {total > 1 ? (
                <div className="flex items-center gap-2.5">
                  <button onClick={goPrev} disabled={safeIndex === 0} aria-label="Önceki sayfa" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40">
                    <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                  <span className="whitespace-nowrap text-xs font-semibold text-slate-500">Sayfa {pageLabel}</span>
                  <button onClick={goNext} disabled={safeIndex + step >= total} aria-label="Sonraki sayfa" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40">
                    <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                </div>
              ) : (
                <span />
              )}

              <button
                onClick={() => nextTopic && openNote(nextTopic)}
                disabled={!nextTopic}
                title={nextTopic ? nextTopic.name : ""}
                className="inline-flex max-w-[32%] items-center justify-end gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-30"
              >
                <span className="truncate">Sonraki konu</span> <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </article>
        </div>

        {/* Sağ panel — 3 kart (ekrana sığar, kaydırmasız) */}
        <div className="lg:min-h-0">
          <NotesSidebar
            subjectId={subject.id}
            topic={note}
            topics={topics}
            userId={userId}
            onNavigate={onNavigate}
            theme={t}
          />
        </div>
      </div>
    </div>
  );
}
