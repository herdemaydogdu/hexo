import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  BookOpen,
  PenSquare,
  Timer,
  BarChart3,
  Bell,
  Flame,
  Target,
  CheckCircle2,
  TrendingUp,
  Play,
  ChevronRight,
  LogOut,
  ChevronDown,
  CalendarDays,
  Sparkles,
  Loader2,
  Menu,
  X,
  Gamepad2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { supabase } from "./supabaseClient";
import useDashboardData from "./useDashboardData";
import Quiz from "./Quiz.jsx";
import LectureNotesView from "./LectureNotesView.jsx";
import Games from "./Games.jsx";
import Auth from "./Auth.jsx";
import { LegalPage, Footer, SATICI } from "./Legal.jsx";

/**
 * TYT Hazırlık — Dashboard (Supabase'e bağlı)
 * Pastel · minimalist · günlük hedef odaklı.
 */

// Yalnızca "dashboard" uygulanmış durumda; diğerleri "Yakında".
/* guest: üyeliksiz ziyaretçiye de açık mı? */
const NAV = [
  { id: "dashboard", label: "Ana Sayfa", icon: LayoutDashboard, ready: true, guest: true },
  { id: "konu", label: "Ders Notları", icon: BookOpen, ready: true, guest: true },
  { id: "oyun", label: "Oyunlar", icon: Gamepad2, ready: true, guest: true },
  { id: "quiz", label: "Soru Çöz", icon: PenSquare, ready: true, guest: false },
  { id: "deneme", label: "Deneme Sınavı", icon: Timer, ready: false, guest: false },
  { id: "istatistik", label: "İstatistik", icon: BarChart3, ready: false, guest: false },
];

const TINT = {
  sky: { chip: "bg-sky-100 text-sky-600", bar: "bg-sky-400" },
  violet: { chip: "bg-violet-100 text-violet-600", bar: "bg-violet-400" },
  emerald: { chip: "bg-emerald-100 text-emerald-600", bar: "bg-emerald-400" },
  rose: { chip: "bg-rose-100 text-rose-600", bar: "bg-rose-400" },
  teal: { chip: "bg-teal-100 text-teal-600", bar: "bg-teal-400" },
};
const tintOf = (t) => TINT[t] || TINT.sky;

// TYT (YKS 1. oturum) tarihi — değişirse burayı güncelle.
const EXAM_DATE = "2027-06-19";

// Türkçe sayı formatı (ondalıkta virgül).
const fmt = (n, d = 0) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: d }).format(Number(n) || 0);

function NavItem({ item, active, onClick, locked }) {
  const Icon = item.icon;
  if (!item.ready) {
    return (
      <div className="flex w-full cursor-not-allowed items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
        <span>{item.label}</span>
        <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
          Yakında
        </span>
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className={
        "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors " +
        (active ? "bg-violet-100 text-violet-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700")
      }
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
      <span>{item.label}</span>
      {locked && <Lock className="ml-auto h-3.5 w-3.5 text-slate-300" strokeWidth={2} />}
    </button>
  );
}

/* Üyeliksiz ziyaretçinin gördüğü ana sayfa */
function GuestLanding({ onAuth, onBrowse }) {
  const highlights = [
    { n: "162", l: "konu anlatımı", d: "Türkçe, Matematik, Geometri, Fen ve Sosyal" },
    { n: "3.995", l: "özgün soru", d: "Her konuda kolay–orta–zor dağılımı" },
    { n: "4", l: "tekrar oyunu", d: "Eşleştirme, Hafıza, Bilgi Kartları, Hızlı Yarış" },
  ];
  return (
    <div className="mx-auto w-full max-w-4xl">
      <section className="rounded-3xl border border-slate-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-8 sm:p-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-violet-600">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} /> TYT Hazırlık
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl">
          Konuyu oku, soruyla pekiştir,<br className="hidden sm:block" /> oyunla kalıcı hale getir.
        </h1>
        <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-slate-500">
          Bütün konu anlatımları üyelik gerekmeden açık. Soru çözmek, ilerlemeni kaydetmek
          ve nerede zayıf olduğunu görmek için ücretsiz hesap aç.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={onAuth}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Ücretsiz üye ol <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </button>
          <button
            onClick={onBrowse}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:text-slate-800"
          >
            Ders notlarına göz at
          </button>
        </div>
      </section>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.l} className="rounded-3xl border border-slate-100 bg-white p-5">
            <div className="text-2xl font-bold tabular-nums text-slate-800">{h.n}</div>
            <div className="text-sm font-semibold text-slate-600">{h.l}</div>
            <p className="mt-1.5 text-xs font-light leading-relaxed text-slate-400">{h.d}</p>
          </div>
        ))}
      </div>

      {/* Fiyat — iyzico başvurusunda ürün ve bedelin açıkça görünmesi şart */}
      <div className="mt-5 rounded-3xl border-2 border-violet-100 bg-white p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">Üyelik</p>
            <h2 className="mt-1 text-lg font-bold text-slate-800">{SATICI.urunAdi}</h2>
            <p className="mt-1 text-sm font-light text-slate-500">
              12 ay boyunca soru bankası, oyunlar ve ilerleme takibi
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold tracking-tight text-slate-800">{SATICI.fiyat}</div>
            <div className="text-xs font-light text-slate-400">{SATICI.fiyatNot} · yıllık</div>
          </div>
        </div>
        <button
          onClick={onAuth}
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
        >
          Üyeliği başlat <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </button>
        <p className="mt-3 text-xs font-light text-slate-400">
          Konu anlatımları ücretsiz ve üyeliksiz açıktır. Otomatik yenileme yoktur.
        </p>
      </div>

      <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-6">
        <h2 className="text-sm font-semibold text-slate-700">Üye olunca ne açılıyor?</h2>
        <ul className="mt-3 space-y-2.5">
          {[
            "3.995 sorunun tamamı ve konu konu soru çözme",
            "Çözdüğün her sorunun kaydı: günlük seri, doğru oranı, zayıf ders",
            "Yanlış defteri ve kaldığın yerden devam",
            "Oyun rekorlarının hesabına kaydı — telefondan girince de durur",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-slate-500">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" strokeWidth={2} />
              {t}
            </li>
          ))}
        </ul>
        <button
          onClick={onAuth}
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
        >
          Hesap oluştur <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

function ProfileMenu({ email }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const initial = (email || "?").charAt(0).toUpperCase();
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Profil menüsü"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-2xl p-1 pr-2 hover:bg-slate-100"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-200 to-sky-200 text-sm font-bold text-white">
          {initial}
        </span>
        <ChevronDown className="h-4 w-4 text-slate-400" strokeWidth={2} />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-xs text-slate-400">Giriş yapıldı</p>
            <p className="truncate text-sm font-medium text-slate-700">{email || "—"}</p>
          </div>
          <button
            onClick={() => supabase?.auth.signOut()}
            className="flex w-full items-center gap-2 px-4 py-3 text-sm font-medium text-rose-600 hover:bg-rose-50"
          >
            <LogOut className="h-4 w-4" strokeWidth={1.8} />
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
}

function StatCard({ card }) {
  const Icon = card.icon;
  const t = tintOf(card.tint);
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className={"inline-flex h-10 w-10 items-center justify-center rounded-2xl " + t.chip}>
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          {card.scope}
        </span>
      </div>
      <p className="text-2xl font-bold tracking-tight text-slate-800">{card.value}</p>
      <p className="mt-0.5 text-sm font-medium text-slate-500">{card.label}</p>
    </div>
  );
}

function ProgressRow({ row }) {
  const t = tintOf(row.tint);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">{row.subject}</span>
        <span className="text-sm font-semibold text-slate-800">%{fmt(row.value)}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={"h-full rounded-full transition-all " + t.bar} style={{ width: row.value + "%" }} />
      </div>
    </div>
  );
}

export default function DashboardLayout({ session }) {
  const guest = !session;
  const [active, setActive] = useState("dashboard");
  const [email, setEmail] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // giriş/kayıt ekranı
  const [gameSeed, setGameSeed] = useState(null);  // ders notundan oyuna geçiş
  const [legal, setLegal] = useState(null);        // açık yasal sayfa (slug)

  /* Ders Notları → "Oyunla tekrar et" */
  function playUnit(subjectId, unitId) {
    setGameSeed({ subjectId, unitId });
    setActive("oyun");
    setSidebarOpen(false);
  }

  /* Misafir kilitli bir sekmeye tıklarsa üyelik ekranını aç */
  function go(id) {
    const item = NAV.find((n) => n.id === id);
    if (guest && item && !item.guest) { setShowAuth(true); return; }
    setActive(id);
    setSidebarOpen(false);
  }

  const {
    dailyGoal, solvedToday, streak, avgNet, completedTopics,
    progressRows, weakest, resume, ready, loading, error, refresh,
  } = useDashboardData();

  useEffect(() => {
    supabase?.auth.getUser().then(({ data }) => setEmail(data?.user?.email || ""));
  }, []);

  // Üyelik ekranı açıkken her şeyin önüne geçer
  if (showAuth) {
    return (
      <div className="relative min-h-screen">
        <button
          onClick={() => setShowAuth(false)}
          className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-xl bg-white/80 px-3 py-2 text-sm font-medium text-slate-500 backdrop-blur transition-colors hover:text-slate-700"
        >
          <X className="h-4 w-4" strokeWidth={2} /> Siteye dön
        </button>
        <Auth />
      </div>
    );
  }

  // İlk yükleme: veri gelene kadar spinner (misafirde beklenecek veri yok).
  if (!guest && loading && !ready) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 font-sans text-slate-400">
        <span className="inline-flex items-center gap-2 text-sm">
          <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2} /> Yükleniyor…
        </span>
      </div>
    );
  }

  // Günlük hedef halkası
  const goalPct = Math.min(100, dailyGoal ? Math.round((solvedToday / dailyGoal) * 100) : 0);
  const remaining = Math.max(0, (dailyGoal || 0) - (solvedToday || 0));
  const C = 2 * Math.PI * 40;
  const ringOff = C * (1 - goalPct / 100);

  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(EXAM_DATE + "T00:00:00") - new Date()) / 86400000)
  );

  const cards = [
    { key: "today", icon: Target, tint: "sky", value: fmt(solvedToday), label: "Çözülen soru", scope: "Bugün" },
    { key: "streak", icon: Flame, tint: "rose", value: fmt(streak), label: "Günlük seri", scope: "gün" },
    { key: "net", icon: TrendingUp, tint: "violet", value: fmt(avgNet, 1), label: "Ortalama net", scope: "Tüm denemeler" },
    { key: "topics", icon: CheckCircle2, tint: "emerald", value: fmt(completedTopics), label: "Biten konu", scope: "Toplam" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ——— Mobil scrim ——— */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/20 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* ——— Sidebar (mobilde çekmece) ——— */}
      <aside
        className={
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-100 bg-white p-5 transition-transform duration-200 md:static md:z-auto md:translate-x-0 md:bg-white/70 md:backdrop-blur " +
          (sidebarOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-violet-300 text-sm font-bold text-white">
            TYT
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold leading-tight text-slate-800">TYT Hazırlık</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Menüyü kapat"
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 md:hidden"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              active={active === item.id}
              locked={guest && !item.guest}
              onClick={() => go(item.id)}
            />
          ))}
        </nav>

        <div className="mt-4 rounded-3xl bg-gradient-to-br from-violet-50 to-sky-50 p-4">
          <div className="flex items-center gap-2 text-violet-600">
            <Flame className="h-4 w-4" strokeWidth={2} />
            <span className="text-xs font-semibold">{fmt(streak)} günlük seri</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            {streak > 0 ? "Bugünkü hedefini tamamla, serini sürdür." : "İlk testini çöz, serini başlat."}
          </p>
        </div>
      </aside>

      {/* ——— Sağ kolon ——— */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-slate-100 bg-white/70 px-6 py-4 backdrop-blur">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Menüyü aç"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 hover:bg-slate-200 md:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold tracking-tight text-slate-800">Merhaba! 👋</h1>
            <p className="text-xs text-slate-400">Bugün çalışmaya kaldığın yerden devam et.</p>
          </div>
          <span
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-100 to-sky-100 px-3 py-1.5 text-xs font-semibold text-violet-700 sm:inline-flex"
            title="TYT'ye kalan gün (YKS 1. oturum)"
          >
            <CalendarDays className="h-3.5 w-3.5" strokeWidth={2} />
            TYT'ye {fmt(daysLeft)} gün
          </span>
          <button
            aria-label="Bildirimler (yakında)"
            title="Bildirimler — yakında"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 hover:bg-slate-200"
          >
            <Bell className="h-5 w-5" strokeWidth={1.8} />
          </button>
          {guest ? (
            <button
              onClick={() => setShowAuth(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              Giriş yap / Üye ol
            </button>
          ) : (
            <ProfileMenu email={email} />
          )}
        </header>

        {/* Main */}
        <main className="flex-1 space-y-6 p-6">
          {error && (
            <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              Veri yüklenemedi: {error}
            </div>
          )}

          {!legal && active === "quiz" && <Quiz onFinish={refresh} />}

          {!legal && active === "konu" && <LectureNotesView onPlay={playUnit} />}

          {!legal && active === "oyun" && <Games guest={guest} onAuth={() => setShowAuth(true)} seed={gameSeed} onSeedUsed={() => setGameSeed(null)} />}

          {legal && <LegalPage slug={legal} onBack={() => setLegal(null)} />}

          {!legal && active === "dashboard" && guest && (
            <GuestLanding onAuth={() => setShowAuth(true)} onBrowse={() => setActive("konu")} />
          )}

          {!legal && active === "dashboard" && !guest && (
            <>
          {/* ——— Hero: Kaldığın yer + Günlük hedef ——— */}
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Kaldığın yerden devam et */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Kaldığın yerden devam et</p>
                {resume ? (
                  <div className="mt-2 flex items-center gap-3">
                    <span className={"grid h-11 w-11 place-items-center rounded-2xl " + tintOf(resume.tint).chip}>
                      <BookOpen className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-lg font-bold text-slate-800">{resume.subject}</p>
                      <p className="text-sm text-slate-400">Bu derste doğru oranın %{fmt(resume.value)}</p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-slate-500">
                    Henüz bir çalışman yok. İlk dersini seçip başlayabilirsin.
                  </p>
                )}
              </div>
              <button
                title="Çalışma sayfası yakında bağlanacak"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-600"
              >
                <Play className="h-4 w-4" strokeWidth={2} fill="currentColor" />
                {resume ? "Devam Et" : "Çalışmaya Başla"}
              </button>
            </div>

            {/* Günlük hedef (halka + CTA) */}
            <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
              <p className="self-start text-xs font-semibold uppercase tracking-wide text-slate-400">Günlük hedef</p>
              <div className="relative my-3 flex h-32 w-32 items-center justify-center">
                <svg className="h-32 w-32 -rotate-90" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#eef2f7" strokeWidth="9" />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    strokeDashoffset={ringOff}
                  />
                </svg>
                <div className="absolute flex flex-col">
                  <span className="text-xl font-bold text-slate-800">
                    {fmt(solvedToday)}/{fmt(dailyGoal)}
                  </span>
                  <span className="text-xs text-slate-400">soru</span>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                {remaining > 0 ? `Hedefine ${fmt(remaining)} soru kaldı` : "Bugünkü hedefini tamamladın 🎯"}
              </p>
            </div>
          </section>

          {/* ——— Kişiselleştirilmiş öneri (kompakt şerit) ——— */}
          <section className="flex flex-col gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 shrink-0 text-violet-500" strokeWidth={2} />
              <p className="text-sm text-slate-600">
                {weakest ? (
                  <>
                    En düşük başarın <span className="font-semibold text-slate-800">{weakest.subject}</span> (%{fmt(weakest.value)}) — önce buna odaklan.
                  </>
                ) : (
                  <>Birkaç soru çözünce sana özel öneri burada belirir.</>
                )}
              </p>
            </div>
            {weakest && (
              <button className="inline-flex shrink-0 items-center justify-center gap-1 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-600">
                {weakest.subject} tekrarına başla
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            )}
          </section>

          {/* ——— Özet kartları ——— */}
          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Durumun</h2>
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {cards.map((c) => (
                <StatCard key={c.key} card={c} />
              ))}
            </div>
          </section>

          {/* ——— Ders bazlı doğru oranı ——— */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-1 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-800">Ders bazlı başarı</h2>
              <span className="text-xs font-medium text-slate-400">doğru / çözülen</span>
            </div>
            <p className="mb-5 text-xs text-slate-400">Yüzdeler, o derste çözdüğün sorulardaki doğru oranını gösterir.</p>
            {progressRows.length > 0 ? (
              <div className="space-y-4">
                {progressRows.map((r) => (
                  <ProgressRow key={r.id} row={r} />
                ))}
              </div>
            ) : (
              <p className="py-6 text-center text-sm text-slate-400">
                Henüz ders verisi yok — birkaç soru çöz, başarın burada belirsin.
              </p>
            )}
          </section>
            </>
          )}

          <Footer onOpen={(slug) => { setLegal(slug); setSidebarOpen(false); }} />
        </main>
      </div>
    </div>
  );
}
