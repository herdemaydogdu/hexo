import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { supabase } from "./supabaseClient";
import {
  Puzzle, Brain, Layers, Zap, ArrowLeft, RotateCcw, Volume2, VolumeX,
  Check, X, Timer, Trophy, Shuffle, CalendarClock,
} from "lucide-react";

/**
 * Games — ilk sürümdeki oyun modülünün React + Supabase karşılığı.
 *
 *  · Eşleştirme / Hafıza / Bilgi Kartları  → topics.pairs (terim–tanım)
 *  · Hızlı Yarış                            → questions tablosu
 *  · Sonuçlar game_results'a yazılır (XP/rozet katmanı yok — kişisel rekor var).
 */

const SUBJECTS = [
  { id: "turkce",    name: "Türkçe",    dot: "#38bdf8", soft: "#e8f6fd", tint: "#f4fbff" },
  { id: "matematik", name: "Matematik", dot: "#8b96f0", soft: "#eceefc", tint: "#f6f7fe" },
  { id: "geometri",  name: "Geometri",  dot: "#4fd1ac", soft: "#e4f7f1", tint: "#f3fcf9" },
  { id: "sosyal",    name: "Sosyal",    dot: "#f0a882", soft: "#fdeee6", tint: "#fff8f4" },
  { id: "fen",       name: "Fen",       dot: "#e79ac0", soft: "#fbeaf2", tint: "#fef6fa" },
];

const BRANCH_LABELS = {
  tar: "Tarih", cog: "Coğrafya", fel: "Felsefe", din: "Din Kültürü",
  fiz: "Fizik", kim: "Kimya", biy: "Biyoloji",
  mat: "Matematik", geo: "Geometri", tr: "Türkçe",
};
const BRANCH_ORDER = { sosyal: ["tar", "cog", "fel", "din"], fen: ["fiz", "kim", "biy"] };
const branchOf = (u) => String(u || "").split("-")[0];

const GAMES = [
  { id: "matching",   name: "Eşleştirme",    Icon: Puzzle, needs: "pairs",
    desc: "Terimleri doğru tanımlarıyla eşleştir." },
  { id: "memory",     name: "Hafıza",         Icon: Brain,  needs: "pairs",
    desc: "Kapalı kartları çevir, eş çiftleri bul." },
  { id: "flashcard",  name: "Bilgi Kartları", Icon: Layers, needs: "pairs",
    desc: "Kartı çevir, terimi ve tanımını hızlıca tekrar et." },
  { id: "timeattack", name: "Hızlı Yarış",    Icon: Zap,    needs: "questions",
    desc: "Süre dolmadan çok soru çöz, combo yakala." },
];
const GAME_BY_ID = Object.fromEntries(GAMES.map((g) => [g.id, g]));

const DIFFS = {
  kolay: { name: "Kolay", pairs: 4, time: 75, reverse: false },
  orta:  { name: "Orta",  pairs: 6, time: 60, reverse: false },
  // Zor'da eşleştirme ters yöne döner: tanımı okuyup terimi bulursun (hatırlama yönü daha zor).
  zor:   { name: "Zor",   pairs: 8, time: 45, reverse: true },
};

/* Leitner kutuları: doğru bilinen kart bir üst kutuya çıkar, aralık uzar.
   Yanlış/emin değil → 1. kutuya düşer ve aynı gün tekrar gelir. */
const BOX_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 21 };
const nextDue = (box) => new Date(Date.now() + (BOX_DAYS[box] ?? 0) * 86400000 + (box === 1 ? 10 * 60000 : 0)).toISOString();

const SOFT_SHADOW = "0 1px 2px rgba(15,23,42,.04), 0 14px 34px -18px rgba(15,23,42,.16)";
const SFX_KEY = "tyt-oyun-ses";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Ses (Web Audio; harici dosya yok) ---------- */
let _actx = null;
function tone(freq, dur = 0.12, type = "sine", gain = 0.12) {
  if (localStorage.getItem(SFX_KEY) === "0") return;
  try {
    if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
    if (_actx.state === "suspended") _actx.resume();
    const t0 = _actx.currentTime;
    const osc = _actx.createOscillator(), g = _actx.createGain();
    osc.type = type; osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(_actx.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  } catch { /* ses yoksa oyun yine çalışır */ }
}
const sfx = {
  tap:   () => tone(520, 0.07, "sine", 0.07),
  good:  () => { tone(660, 0.1); setTimeout(() => tone(880, 0.12), 70); },
  bad:   () => tone(180, 0.18, "square", 0.08),
  done:  () => { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.16), i * 90)); },
};

/* ===================================================================== */

export default function Games({ guest = false, onAuth, seed, onSeedUsed }) {
  const [view, setView] = useState("menu");     // menu | units | play
  const [gameId, setGameId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [unit, setUnit] = useState(null);       // {unit_id, name, pairs?}
  const [diff, setDiff] = useState("orta");
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [bests, setBests] = useState({});       // "game|unit_id" → en iyi skor
  const [muted, setMuted] = useState(() => localStorage.getItem(SFX_KEY) === "0");
  const [seedUnit, setSeedUnit] = useState(null);   // ders notundan gelen ünite
  const [dueCount, setDueCount] = useState(0);      // tekrar zamanı gelen kart sayısı
  const [reviewCards, setReviewCards] = useState(null); // karışık tekrar oturumu

  const game = gameId ? GAME_BY_ID[gameId] : null;
  const subject = SUBJECTS.find((s) => s.id === subjectId) || SUBJECTS[0];

  useEffect(() => { supabase?.auth.getUser().then(({ data }) => setUserId(data?.user?.id || null)); }, []);

  /* Ders Notları'ndan "bu konuyu oyunla tekrar et" ile gelindiğinde
     doğrudan o ünitenin oyun seçimine düş. */
  useEffect(() => {
    if (!seed?.unitId) return;
    let cancel = false;
    (async () => {
      const { data } = await supabase.from("topics")
        .select("unit_id,name,pairs,question_count").eq("unit_id", seed.unitId).maybeSingle();
      if (cancel || !data) return;
      setSubjectId(seed.subjectId);
      setSeedUnit(data);
      setGameId(null);
      setView("menu");
      onSeedUsed?.();
    })();
    return () => { cancel = true; };
  }, [seed?.unitId]);

  /* Kişisel rekorlar */
  const loadBests = useCallback(async () => {
    if (!userId) return;
    const { data } = await supabase
      .from("game_results").select("game,unit_id,score").eq("user_id", userId);
    const map = {};
    for (const r of data || []) {
      const k = r.game + "|" + (r.unit_id || "");
      if (!(k in map) || r.score > map[k]) map[k] = r.score;
    }
    setBests(map);
  }, [userId]);
  useEffect(() => { loadBests(); }, [loadBests]);

  /* Tekrar zamanı gelen kart sayısı */
  const loadDue = useCallback(async () => {
    if (!userId) { setDueCount(0); return; }
    const { count } = await supabase
      .from("card_reviews").select("term", { count: "exact", head: true })
      .eq("user_id", userId).lte("due_at", new Date().toISOString());
    setDueCount(count || 0);
  }, [userId]);
  useEffect(() => { loadDue(); }, [loadDue]);

  /* Tekrar oturumunu kur: vadesi gelen kartları ünitelerinin tanımlarıyla birleştir */
  async function startReview() {
    if (!userId) { onAuth?.(); return; }
    sfx.tap();
    const { data: rows } = await supabase
      .from("card_reviews").select("unit_id,term,box")
      .eq("user_id", userId).lte("due_at", new Date().toISOString())
      .order("due_at").limit(30);
    if (!rows?.length) return;
    const unitIds = [...new Set(rows.map((r) => r.unit_id))];
    const { data: tops } = await supabase.from("topics").select("unit_id,name,pairs").in("unit_id", unitIds);
    const defOf = new Map();
    for (const t of tops || []) for (const pr of t.pairs || []) defOf.set(t.unit_id + "|" + pr.term, pr.def);
    const cards = rows
      .map((r) => ({ uid: r.unit_id, box: r.box, term: r.term, def: defOf.get(r.unit_id + "|" + r.term) }))
      .filter((c) => c.def);
    if (!cards.length) return;
    setReviewCards(shuffle(cards));
    setGameId("flashcard");
    setUnit({ unit_id: null, name: "Bugünün tekrarı" });
    setView("play");
  }

  /* Ünite listesi */
  useEffect(() => {
    if (view !== "units" || !subjectId || !game) return;
    let cancel = false;
    (async () => {
      setLoading(true);
      let res;
      if (game.needs === "pairs") {
        res = await supabase.from("topics").select("unit_id,name,pairs")
          .eq("subject", subjectId).not("pairs", "is", null).order("sort_order");
      } else {
        res = await supabase.from("topics").select("unit_id,name,question_count")
          .eq("subject", subjectId).gt("question_count", 0).order("sort_order");
      }
      if (cancel) return;
      const list = (res.data || []).filter((t) =>
        game.needs === "pairs" ? (t.pairs || []).length >= 2 : t.question_count > 0);
      setUnits(list);
      setLoading(false);
    })();
    return () => { cancel = true; };
  }, [view, subjectId, gameId]);

  const groups = useMemo(() => {
    const by = new Map();
    for (const u of units) {
      const b = branchOf(u.unit_id);
      if (!by.has(b)) by.set(b, []);
      by.get(b).push(u);
    }
    const order = BRANCH_ORDER[subjectId] || [];
    return [...by.keys()]
      .sort((a, b) => {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      })
      .map((k) => ({ key: k, label: BRANCH_LABELS[k] || k, items: by.get(k) }));
  }, [units, subjectId]);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    localStorage.setItem(SFX_KEY, next ? "0" : "1");
    if (!next) sfx.tap();
  }

  async function saveResult(payload) {
    if (!userId) return;
    try {
      await supabase.from("game_results").insert({ user_id: userId, ...payload });
      loadBests();
    } catch { /* sonuç kaydedilemezse oyun yine bitmiş sayılır */ }
  }

  function openGame(id) {
    // Hızlı Yarış soru bankasını kullanır; soru bankası üyelik arkasında.
    if (guest && GAME_BY_ID[id].needs === "questions") { onAuth?.(); return; }
    sfx.tap(); setGameId(id); setSubjectId(null); setView("menu");
  }
  function chooseSubject(id) { sfx.tap(); setSubjectId(id); setView("units"); }
  function startUnit(u) { sfx.tap(); setUnit(u); setView("play"); }
  function backToMenu() { setView("menu"); setGameId(null); setSubjectId(null); setUnit(null); }

  /* ---------------- Görünüm: oyun bitti / oynanıyor ---------------- */
  if (view === "play" && unit && game) {
    return (
      <GameRunner
        game={game} subject={subject} unit={unit} diff={diff}
        best={bests[game.id + "|" + unit.unit_id]}
        userId={userId}
        reviewCards={reviewCards}
        onSave={saveResult}
        onExit={() => { setReviewCards(null); loadDue(); setView(reviewCards ? "menu" : "units"); }}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
      {/* Başlık */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">Oyunlar</h1>
          <p className="mt-1 text-sm font-light text-slate-400">
            Kısa oyunlarla tekrar et; terimleri ve formülleri kalıcı hale getir.
          </p>
        </div>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Sesi aç" : "Sesi kapat"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-slate-100 bg-white text-slate-400 transition-colors hover:text-slate-600"
        >
          {muted ? <VolumeX className="h-4 w-4" strokeWidth={1.8} /> : <Volume2 className="h-4 w-4" strokeWidth={1.8} />}
        </button>
      </div>

      {guest && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 px-4 py-3">
          <p className="text-sm font-light text-slate-600">
            Oyunları üyeliksiz oynayabilirsin — rekorların kaydedilsin istersen hesap aç.
          </p>
          <button
            onClick={() => onAuth?.()}
            className="shrink-0 rounded-xl bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Ücretsiz üye ol
          </button>
        </div>
      )}

      {/* 0) Ders notundan gelindi: bu üniteyle oyun seç */}
      {seedUnit && !gameId && (
        <div className="mb-6">
          <BackBar label="Tüm oyunlar" onClick={() => setSeedUnit(null)} />
          <div className="mb-3 rounded-2xl px-4 py-3" style={{ backgroundColor: subject.soft }}>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Bu üniteyle tekrar</p>
            <p className="text-base font-bold text-slate-800">{seedUnit.name}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {GAMES.map((g) => {
              const varMi = g.needs === "pairs"
                ? (seedUnit.pairs || []).length >= 2
                : seedUnit.question_count > 0 && !guest;
              return (
                <button
                  key={g.id}
                  disabled={!varMi}
                  onClick={() => { sfx.tap(); setGameId(g.id); setUnit(seedUnit); setView("play"); }}
                  className={
                    "flex items-start gap-4 rounded-3xl border p-5 text-left transition-all duration-200 " +
                    (varMi ? "border-slate-100 bg-white hover:-translate-y-0.5" : "border-slate-100 bg-slate-50 opacity-60")
                  }
                  style={varMi ? { boxShadow: SOFT_SHADOW } : undefined}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 text-slate-500">
                    <g.Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-slate-700">{g.name}</span>
                    <span className="mt-0.5 block text-sm font-light text-slate-400">
                      {varMi ? g.desc
                        : g.needs === "questions" && guest ? "Üye olunca açılır"
                        : "Bu ünitede yeterli içerik yok"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bugünün tekrarı — Leitner kuyruğu */}
      {!gameId && !seedUnit && !guest && (
        dueCount > 0 ? (
          <button
            onClick={startReview}
            className="mb-3 flex w-full items-center gap-4 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-sky-50 p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: SOFT_SHADOW }}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-violet-500">
              <CalendarClock className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-semibold text-slate-800">Bugünün tekrarı</span>
              <span className="mt-0.5 block text-sm font-light text-slate-500">
                Unutmak üzere olduğun <b className="font-semibold text-violet-600">{dueCount} kart</b> hazır.
                Bilgi kartı olarak gelir; bildiklerin daha seyrek sorulur.
              </span>
            </span>
          </button>
        ) : (
          <p className="mb-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-light text-slate-400">
            Tekrar kuyruğun şu an boş. Bilgi Kartları oynarken verdiğin
            “biliyorum / tekrar bak” kararları kuyruğu doldurur; bildiğin kartlar
            1 → 3 → 7 → 21 gün aralıklarla geri gelir.
          </p>
        )
      )}

      {/* 1) Oyun seç */}
      {!gameId && !seedUnit && (
        <div className="grid gap-3 sm:grid-cols-2">
          {GAMES.map((g) => (
            <button
              key={g.id}
              onClick={() => openGame(g.id)}
              className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: SOFT_SHADOW }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-slate-100">
                <g.Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-base font-semibold text-slate-700">
                  {g.name}
                  {guest && g.needs === "questions" && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                      Üyelere özel
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-sm font-light leading-relaxed text-slate-400">{g.desc}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {/* 2) Ders seç */}
      {gameId && !subjectId && (
        <div>
          <BackBar label="Oyunlar" onClick={backToMenu} />
          <h2 className="mb-3 text-sm font-semibold text-slate-600">{game.name} · ders seç</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                onClick={() => chooseSubject(s.id)}
                className="rounded-3xl border border-slate-100 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: SOFT_SHADOW }}
              >
                <span className="mb-2 block h-2 w-2 rounded-full" style={{ backgroundColor: s.dot }} />
                <span className="block text-base font-semibold text-slate-700">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3) Ünite + zorluk */}
      {gameId && subjectId && (
        <div>
          <BackBar label={game.name + " · ders seç"} onClick={() => { setSubjectId(null); setView("menu"); }} />

          {game.id !== "flashcard" && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium text-slate-400">Zorluk</span>
              {Object.entries(DIFFS).map(([k, v]) => (
                <button
                  key={k}
                  onClick={() => { setDiff(k); sfx.tap(); }}
                  className={
                    "rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors duration-200 " +
                    (diff === k ? "text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100")
                  }
                  style={diff === k ? { backgroundColor: subject.dot } : undefined}
                >
                  {v.name}
                  <span className="ml-1.5 font-normal opacity-70">
                    {game.id === "timeattack" ? v.time + " sn" : v.pairs + " çift"}
                  </span>
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-100/70" />
              ))}
            </div>
          ) : units.length === 0 ? (
            <p className="rounded-2xl bg-slate-50 px-4 py-8 text-center text-sm font-light text-slate-400">
              Bu derste bu oyun için içerik yok.
            </p>
          ) : (
            <div className="space-y-5">
              {game.id === "timeattack" && (
                <button
                  onClick={() => startUnit({ unit_id: null, name: "Karışık — tüm " + subject.name })}
                  className="flex w-full items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-3.5 text-left transition-colors hover:bg-slate-50"
                >
                  <Shuffle className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.8} />
                  <span className="text-sm font-semibold text-slate-600">Karışık — tüm {subject.name} soruları</span>
                </button>
              )}

              {groups.map((g) => (
                <section key={g.key}>
                  {groups.length > 1 && (
                    <h3 className="mb-2 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: subject.dot }} />
                      {g.label}
                    </h3>
                  )}
                  <div className="grid gap-2 sm:grid-cols-2">
                    {g.items.map((u) => {
                      const best = bests[game.id + "|" + u.unit_id];
                      return (
                        <button
                          key={u.unit_id}
                          onClick={() => startUnit(u)}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5"
                          style={{ boxShadow: SOFT_SHADOW }}
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-slate-600">{u.name}</span>
                            <span className="mt-0.5 block text-xs font-light text-slate-400">
                              {game.needs === "pairs" ? (() => {
                                const have = (u.pairs || []).length;
                                const want = game.id === "flashcard" ? have : DIFFS[diff].pairs;
                                const real = Math.min(want, have);
                                return real + " kart" + (real < want ? " (bu ünitede o kadar var)" : "");
                              })() : u.question_count + " soru"}
                            </span>
                          </span>
                          {best != null && (
                            <span className="flex shrink-0 items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-500">
                              <Trophy className="h-3 w-3" strokeWidth={2} /> {best}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function BackBar({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
    >
      <ArrowLeft className="h-4 w-4" strokeWidth={2} /> {label}
    </button>
  );
}

/* ===================================================================== */
/* Oyun motoru — seçilen oyunu kurar, bitince sonucu üst bileşene verir   */
/* ===================================================================== */

function GameRunner({ game, subject, unit, diff, best, userId, reviewCards, onSave, onExit }) {
  const [phase, setPhase] = useState("loading"); // loading | play | done
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);
  const [nonce, setNonce] = useState(0);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    let cancel = false;
    (async () => {
      setPhase("loading");
      startedAt.current = Date.now();
      if (reviewCards) {
        if (!cancel) { setData(reviewCards); setPhase("play"); }
      } else if (game.needs === "pairs") {
        const all = (unit.pairs || []).map((p) => ({ ...p, uid: unit.unit_id }));
        const n = game.id === "flashcard" ? all.length : Math.min(DIFFS[diff].pairs, all.length);
        if (!cancel) { setData(shuffle(all).slice(0, n)); setPhase("play"); }
      } else {
        let q = supabase.from("questions").select("id,q,options,answer,explanation").eq("subject", subject.id);
        if (unit.unit_id) q = q.eq("topic", unit.unit_id);
        const { data: rows } = await q.limit(200);
        if (cancel) return;
        setData(shuffle(rows || []));
        setPhase("play");
      }
    })();
    return () => { cancel = true; };
  }, [game.id, unit.unit_id, diff, nonce]);

  function finish(r) {
    const duration = Math.round((Date.now() - startedAt.current) / 1000);
    setResult({ ...r, duration });
    setPhase("done");
    sfx.done();
    onSave({
      game: game.id, subject: subject.id, unit_id: unit.unit_id,
      score: r.score, correct: r.correct, total: r.total,
      duration_sec: duration, difficulty: game.id === "flashcard" ? null : diff,
    });
  }

  const replay = () => { setResult(null); setNonce((n) => n + 1); };

  /* Bilgi Kartları'nda verilen her karar Leitner kutusuna işlenir:
     "Biliyorum" bir üst kutuya çıkarır ve aralığı uzatır, "Tekrar bak" 1. kutuya düşürür. */
  const recordCard = useCallback(async (card, known) => {
    if (!userId || !card?.uid || !card?.term) return;
    const box = Math.max(1, Math.min(5, known ? (card.box || 0) + 1 : 1));
    try {
      await supabase.from("card_reviews").upsert({
        user_id: userId, unit_id: card.uid, term: card.term,
        box, due_at: nextDue(box), last_seen: new Date().toISOString(),
      }, { onConflict: "user_id,unit_id,term" });
    } catch { /* kayıt olmasa da tekrar akışı bozulmaz */ }
  }, [userId]);

  /* Hızlı Yarış'ta verilen her cevap normal soru çözümü gibi kaydedilir:
     günlük seri, çözülen soru sayacı ve zayıf ders analizi böylece oyunu da sayar. */
  const recordAnswer = useCallback(async (question, isCorrect) => {
    if (!userId || !question?.id) return;
    try {
      await supabase.from("attempts").insert({
        user_id: userId, question_id: question.id, subject: subject.id, is_correct: isCorrect,
      });
      if (!isCorrect) {
        await supabase.from("wrong_book")
          .upsert({ user_id: userId, question_id: question.id }, { onConflict: "user_id,question_id" });
      }
    } catch { /* kayıt başarısız olsa da oyun akmaya devam eder */ }
  }, [userId, subject.id]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <BackBar label="Ünite seç" onClick={onExit} />
          <h1 className="truncate text-xl font-bold tracking-tight text-slate-800">{unit.name}</h1>
          <p className="mt-0.5 text-sm font-light text-slate-400">
            {game.name}
            {game.id !== "flashcard" && " · " + DIFFS[diff].name}
            {best != null && " · rekorun " + best}
          </p>
        </div>
      </div>

      {phase === "loading" && (
        <div className="grid gap-2 sm:grid-cols-2">
          {[...Array(6)].map((_, i) => <div key={i} className="h-20 animate-pulse rounded-2xl bg-slate-100/70" />)}
        </div>
      )}

      {phase === "play" && data && (
        <>
          {game.id === "matching"  && <MatchingGame pairs={data} subject={subject} reverse={DIFFS[diff].reverse} onFinish={finish} />}
          {game.id === "memory"    && <MemoryGame   pairs={data} subject={subject} onFinish={finish} />}
          {game.id === "flashcard" && <FlashcardGame pairs={data} subject={subject} onMark={recordCard} onFinish={finish} />}
          {game.id === "timeattack" && (
            data.length
              ? <TimeAttackGame questions={data} subject={subject} seconds={DIFFS[diff].time} onAnswer={recordAnswer} onFinish={finish} />
              : <p className="rounded-2xl bg-slate-50 px-4 py-8 text-center text-sm font-light text-slate-400">
                  Bu ünitede soru bulunamadı.
                </p>
          )}
        </>
      )}

      {phase === "done" && result && (
        <ResultCard result={result} subject={subject} best={best} onReplay={replay} onExit={onExit} />
      )}
    </div>
  );
}

function ResultCard({ result, subject, best, onReplay, onExit }) {
  const yeniRekor = best != null && result.score > best;
  return (
    <div
      className="rounded-3xl border border-slate-100 bg-white p-8 text-center"
      style={{ boxShadow: SOFT_SHADOW }}
    >
      <div
        className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl text-white"
        style={{ backgroundColor: subject.dot }}
      >
        <Trophy className="h-6 w-6" strokeWidth={1.8} />
      </div>
      <h2 className="text-lg font-bold text-slate-800">{result.title || "Tamamlandı"}</h2>
      {yeniRekor && <p className="mt-1 text-sm font-semibold" style={{ color: subject.dot }}>Yeni rekor! 🎉</p>}

      <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-3">
        <Stat label="Skor" value={result.score} accent={subject.dot} />
        <Stat label="Doğru" value={result.correct + "/" + result.total} />
        <Stat label="Süre" value={result.duration + " sn"} />
      </div>

      <div className="mt-7 flex justify-center gap-2">
        <button
          onClick={onReplay}
          className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: subject.dot }}
        >
          <RotateCcw className="h-4 w-4" strokeWidth={2} /> Tekrar oyna
        </button>
        <button
          onClick={onExit}
          className="rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100"
        >
          Başka ünite
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className="rounded-2xl bg-slate-50/80 px-3 py-3">
      <div className="text-lg font-bold tabular-nums" style={accent ? { color: accent } : { color: "#334155" }}>{value}</div>
      <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}

/* ---------------------------- 1) Eşleştirme ---------------------------- */

function MatchingGame({ pairs: rawPairs, subject, reverse, onFinish }) {
  // Zor modda yön ters: solda tanım, sağda terim. Hatırlama yönü değiştiği için gerçekten zorlaşır.
  const pairs = useMemo(
    () => (reverse ? rawPairs.map((p) => ({ term: p.def, def: p.term })) : rawPairs),
    [rawPairs, reverse]
  );
  const [defs] = useState(() => shuffle(pairs.map((p, i) => ({ ...p, i }))));
  const [picked, setPicked] = useState(null);   // seçili terim index'i
  const [solved, setSolved] = useState(() => new Set());
  const [wrong, setWrong] = useState(null);     // yanlış deneme (animasyon)
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (solved.size && solved.size === pairs.length) {
      const score = Math.max(0, pairs.length * 10 - errors * 3);
      const t = setTimeout(() => onFinish({
        score, correct: pairs.length, total: pairs.length,
        title: errors === 0 ? "Hatasız bitirdin! 🎯" : "Tüm çiftleri buldun",
      }), 450);
      return () => clearTimeout(t);
    }
  }, [solved, errors, pairs.length]);

  function pickDef(d) {
    if (picked == null || solved.has(d.i)) return;
    if (d.i === picked) {
      sfx.good();
      setSolved((s) => new Set(s).add(d.i));
      setPicked(null);
    } else {
      sfx.bad();
      setErrors((e) => e + 1);
      setWrong(d.i);
      setTimeout(() => setWrong(null), 420);
      setPicked(null);
    }
  }

  return (
    <div>
      <ProgressBar done={solved.size} total={pairs.length} accent={subject.dot} extra={errors ? errors + " hata" : "hatasız"} />
      {reverse && (
        <p className="mb-3 rounded-xl bg-slate-50 px-3 py-2 text-xs font-light text-slate-500">
          Ters yön: soldaki <b className="font-semibold">tanımı</b> oku, sağdan doğru terimi seç.
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {pairs.map((p, i) => {
            const done = solved.has(i), on = picked === i;
            return (
              <button
                key={i}
                disabled={done}
                onClick={() => { sfx.tap(); setPicked(i); }}
                className={
                  "w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 " +
                  (done ? "bg-slate-50 text-slate-300 line-through"
                        : on ? "text-white shadow-sm"
                             : "border border-slate-100 bg-white text-slate-600 hover:bg-slate-50")
                }
                style={on && !done ? { backgroundColor: subject.dot } : undefined}
              >
                {p.term}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {defs.map((d) => {
            const done = solved.has(d.i), bad = wrong === d.i;
            return (
              <button
                key={d.i}
                disabled={done}
                onClick={() => pickDef(d)}
                className={
                  "w-full rounded-2xl px-4 py-3 text-left text-sm font-light leading-relaxed transition-all duration-200 " +
                  (done ? "bg-slate-50 text-slate-300 line-through"
                        : bad ? "border border-rose-200 bg-rose-50 text-rose-500"
                              : "border border-slate-100 bg-white text-slate-600 hover:bg-slate-50")
                }
              >
                {d.def}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ 2) Hafıza ------------------------------ */

function MemoryGame({ pairs, subject, onFinish }) {
  const [cards] = useState(() =>
    shuffle(pairs.flatMap((p, i) => [
      { key: "t" + i, pid: i, text: p.term, kind: "term" },
      { key: "d" + i, pid: i, text: p.def,  kind: "def" },
    ])));
  const [open, setOpen] = useState([]);          // açık kart key'leri
  const [solved, setSolved] = useState(() => new Set());
  const [moves, setMoves] = useState(0);
  const lock = useRef(false);

  useEffect(() => {
    if (solved.size && solved.size === pairs.length) {
      const ideal = pairs.length;
      const score = Math.max(0, pairs.length * 10 - Math.max(0, moves - ideal) * 2);
      const t = setTimeout(() => onFinish({
        score, correct: pairs.length, total: pairs.length,
        title: moves <= ideal + 2 ? "Müthiş hafıza! 🧠" : "Tüm çiftleri buldun",
      }), 450);
      return () => clearTimeout(t);
    }
  }, [solved, moves, pairs.length]);

  function flip(c) {
    if (lock.current || solved.has(c.pid) || open.includes(c.key) || open.length === 2) return;
    sfx.tap();
    const next = [...open, c.key];
    setOpen(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next.map((k) => cards.find((x) => x.key === k));
      if (a.pid === b.pid && a.kind !== b.kind) {
        sfx.good();
        setTimeout(() => { setSolved((s) => new Set(s).add(a.pid)); setOpen([]); }, 350);
      } else {
        lock.current = true;
        sfx.bad();
        setTimeout(() => { setOpen([]); lock.current = false; }, 750);
      }
    }
  }

  return (
    <div>
      <ProgressBar done={solved.size} total={pairs.length} accent={subject.dot} extra={moves + " hamle"} />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {cards.map((c) => {
          const isOpen = open.includes(c.key) || solved.has(c.pid);
          const isSolved = solved.has(c.pid);
          return (
            <button
              key={c.key}
              onClick={() => flip(c)}
              className={
                "grid min-h-[92px] place-items-center rounded-2xl p-3 text-center text-xs leading-snug transition-all duration-200 " +
                (isSolved ? "bg-slate-50 text-slate-300"
                          : isOpen ? "border border-slate-100 bg-white font-medium text-slate-600 shadow-sm"
                                   : "text-white hover:opacity-90")
              }
              style={!isOpen ? { backgroundColor: subject.dot, opacity: 0.85 } : undefined}
            >
              {isOpen ? c.text : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------- 3) Bilgi Kartları -------------------------- */

function FlashcardGame({ pairs, subject, onMark, onFinish }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(() => new Set());
  const card = pairs[i];

  function mark(isKnown) {
    sfx.tap();
    onMark?.(card, isKnown);
    const next = new Set(known);
    if (isKnown) next.add(i); else next.delete(i);
    setKnown(next);
    if (i + 1 < pairs.length) { setI(i + 1); setFlipped(false); }
    else onFinish({
      score: next.size * 5, correct: next.size, total: pairs.length,
      title: "Tüm kartları gözden geçirdin 📇",
    });
  }

  return (
    <div>
      <ProgressBar done={i} total={pairs.length} accent={subject.dot} extra={known.size + " biliyorum"} />
      <button
        onClick={() => { setFlipped((f) => !f); sfx.tap(); }}
        className="grid min-h-[220px] w-full place-items-center rounded-3xl border border-slate-100 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-0.5"
        style={{ boxShadow: SOFT_SHADOW, backgroundColor: flipped ? subject.tint : undefined }}
      >
        <div>
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
            {flipped ? "Tanım" : "Terim"}
          </span>
          <span className={flipped
            ? "block text-base font-light leading-relaxed text-slate-600"
            : "block text-xl font-semibold text-slate-800"}>
            {flipped ? card.def : card.term}
          </span>
          {!flipped && <span className="mt-4 block text-xs font-light text-slate-300">Çevirmek için tıkla</span>}
        </div>
      </button>

      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => mark(false)}
          className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100"
        >
          <X className="h-4 w-4" strokeWidth={2} /> Tekrar bak
        </button>
        <button
          onClick={() => mark(true)}
          className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: subject.dot }}
        >
          <Check className="h-4 w-4" strokeWidth={2} /> Biliyorum
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- 4) Hızlı Yarış --------------------------- */

function TimeAttackGame({ questions, subject, seconds, onAnswer, onFinish }) {
  const [i, setI] = useState(0);
  const [left, setLeft] = useState(seconds);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [asked, setAsked] = useState(0);
  const [combo, setCombo] = useState(0);
  const [picked, setPicked] = useState(null);
  const doneRef = useRef(false);

  const end = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onFinish({
      score, correct, total: asked,
      title: correct >= 10 ? "Şimşek gibiydin! ⚡" : "Süre doldu",
    });
  }, [score, correct, asked, onFinish]);

  useEffect(() => {
    if (left <= 0) { end(); return; }
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left, end]);

  const q = questions[i];
  if (!q) return null;

  function answer(idx) {
    if (picked != null) return;
    setPicked(idx);
    setAsked((a) => a + 1);
    const ok = idx === q.answer;
    onAnswer?.(q, ok);
    if (ok) {
      sfx.good();
      const nc = combo + 1;
      setCombo(nc);
      setCorrect((c) => c + 1);
      setScore((s) => s + 10 + Math.min(nc - 1, 5) * 2);
    } else {
      sfx.bad();
      setCombo(0);
    }
    setTimeout(() => {
      setPicked(null);
      if (i + 1 < questions.length) setI(i + 1); else end();
    }, ok ? 380 : 900);
  }

  const pct = Math.max(0, Math.round((left / seconds) * 100));

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm font-bold tabular-nums text-slate-600">
          <Timer className="h-4 w-4 text-slate-300" strokeWidth={2} /> {left}
        </div>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-linear"
            style={{ width: pct + "%", backgroundColor: left <= 10 ? "#f43f5e" : subject.dot }}
          />
        </div>
        <div className="text-sm font-bold tabular-nums text-slate-600">{score}</div>
        {combo >= 2 && (
          <span className="rounded-lg px-2 py-0.5 text-[11px] font-bold text-white" style={{ backgroundColor: subject.dot }}>
            x{combo}
          </span>
        )}
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-6" style={{ boxShadow: SOFT_SHADOW }}>
        <p className="mb-5 whitespace-pre-line text-base font-medium leading-relaxed text-slate-700">{q.q}</p>
        <div className="space-y-2">
          {(q.options || []).map((o, idx) => {
            const isPicked = picked === idx;
            const isAnswer = picked != null && idx === q.answer;
            return (
              <button
                key={idx}
                onClick={() => answer(idx)}
                disabled={picked != null}
                className={
                  "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition-all duration-200 " +
                  (isAnswer ? "border border-emerald-200 bg-emerald-50 font-semibold text-emerald-700"
                    : isPicked ? "border border-rose-200 bg-rose-50 font-semibold text-rose-600"
                      : "border border-slate-100 bg-white font-light text-slate-600 hover:bg-slate-50")
                }
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-slate-50 text-[11px] font-bold text-slate-400">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{o}</span>
                {isAnswer && <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.4} />}
                {isPicked && !isAnswer && <X className="h-4 w-4 shrink-0 text-rose-400" strokeWidth={2.4} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Yardımcı ------------------------------- */

function ProgressBar({ done, total, accent, extra }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-slate-500">{done} / {total}</span>
        {extra && <span className="font-light text-slate-400">{extra}</span>}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full transition-all duration-300" style={{ width: pct + "%", backgroundColor: accent }} />
      </div>
    </div>
  );
}
