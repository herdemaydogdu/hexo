import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  PenSquare,
  Timer,
  BarChart3,
  Search,
  Bell,
  ChevronRight,
  Flame,
  Target,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import useProgress from "./useProgress";

/**
 * TYT Hazırlık — Dashboard Layout (localStorage'a bağlı)
 * Tailwind CSS · minimalist · yumuşak pastel tonlar (uçuk mavi / soft lila / mint)
 * Veri: useProgress hook'u (tyt_progress_v1) — StatCard ve ProgressRow'a dinamik akar.
 */

// ——— Sidebar navigasyonu (statik) ———
const NAV = [
  { id: "dashboard", label: "Ana Sayfa", icon: LayoutDashboard },
  { id: "konu", label: "Konu Anlatımı", icon: BookOpen },
  { id: "quiz", label: "Soru Çöz", icon: PenSquare },
  { id: "deneme", label: "Deneme Sınavı", icon: Timer },
  { id: "istatistik", label: "İstatistik", icon: BarChart3 },
];

// ——— Stat kartı key'i -> ikon eşlemesi (hook veriyi, Layout ikonu verir) ———
const STAT_ICON = {
  today: Target,
  streak: Flame,
  net: TrendingUp,
  topics: CheckCircle2,
};

// ——— Pastel renk eşlemeleri (Tailwind çekirdek sınıfları) ———
const TINT = {
  sky: { chip: "bg-sky-100 text-sky-600", bar: "bg-sky-400" },
  violet: { chip: "bg-violet-100 text-violet-600", bar: "bg-violet-400" },
  emerald: { chip: "bg-emerald-100 text-emerald-600", bar: "bg-emerald-400" },
  rose: { chip: "bg-rose-100 text-rose-600", bar: "bg-rose-400" },
  teal: { chip: "bg-teal-100 text-teal-600", bar: "bg-teal-400" },
};
const tintOf = (t) => TINT[t] || TINT.sky;

function NavItem({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={
        "group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors " +
        (active ? "bg-violet-100 text-violet-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700")
      }
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
      <span>{item.label}</span>
    </button>
  );
}

function StatCard({ stat }) {
  const Icon = STAT_ICON[stat.key] || Target;
  const t = tintOf(stat.tint);
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className={"mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl " + t.chip}>
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <p className="text-2xl font-bold tracking-tight text-slate-800">{stat.value}</p>
      <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
      <p className="mt-0.5 text-xs text-slate-400">{stat.hint}</p>
    </div>
  );
}

function ProgressRow({ row }) {
  const t = tintOf(row.tint);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">{row.subject}</span>
        <span className="text-sm font-semibold text-slate-800">%{row.value}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={"h-full rounded-full transition-all " + t.bar} style={{ width: row.value + "%" }} />
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  const [active, setActive] = useState("dashboard");

  // ——— localStorage ilerlemesini oku (backend gelene kadar) ———
  const { ready, stats, progressRows, weakest, overall, streak } = useProgress({ dailyGoal: 50 });

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ——— Sidebar ——— */}
      <aside className="hidden w-64 flex-col border-r border-slate-100 bg-white/70 p-5 backdrop-blur md:flex">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-violet-300 text-sm font-bold text-white">
            TYT
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800">TYT Hazırlık</p>
            <p className="text-xs text-slate-400">Öğrenci Paneli</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((item) => (
            <NavItem key={item.id} item={item} active={active === item.id} onClick={() => setActive(item.id)} />
          ))}
        </nav>

        {/* Sidebar alt: dinamik seri kartı */}
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-violet-50 to-sky-50 p-4">
          <div className="flex items-center gap-2 text-violet-600">
            <Flame className="h-4 w-4" strokeWidth={2} />
            <span className="text-xs font-semibold">{streak} günlük seri</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            {streak > 0 ? "Bugünkü hedefini tamamla, serini sürdür." : "İlk testini çöz, serini başlat."}
          </p>
        </div>
      </aside>

      {/* ——— Sağ kolon: Header + Main ——— */}
      <div className="flex flex-1 flex-col">
        {/* ——— Header ——— */}
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-slate-100 bg-white/70 px-6 py-4 backdrop-blur">
          <div className="flex-1">
            <h1 className="text-lg font-bold tracking-tight text-slate-800">Merhaba, Herdem 👋</h1>
            <p className="text-xs text-slate-400">Bugün çalışmaya kaldığın yerden devam et.</p>
          </div>

          <div className="hidden items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 sm:flex">
            <Search className="h-4 w-4 text-slate-400" strokeWidth={1.8} />
            <input
              placeholder="Konu ara…"
              className="w-32 bg-transparent text-sm text-slate-600 placeholder-slate-400 focus:outline-none"
            />
          </div>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 hover:bg-slate-200">
            <Bell className="h-5 w-5" strokeWidth={1.8} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-400" />
          </button>

          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-200 to-sky-200" />
        </header>

        {/* ——— Main içerik ——— */}
        <main className="flex-1 space-y-8 p-6">
          {/* Öne çıkan öneri şeridi — en zayıf dersten dinamik */}
          <section className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-sky-100 via-violet-100 to-emerald-100 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">Sana özel öneri</p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">
                {weakest ? (
                  <>
                    <span className="font-semibold text-slate-800">{weakest.subject}</span> dersindeki başarın %{weakest.value}.
                    Bu derse odaklı kısa bir tekrar netini yükseltir.
                  </>
                ) : (
                  <>Henüz yeterli veri yok. Kısa bir <span className="font-semibold text-slate-800">seviye testi</span> çözerek başla.</>
                )}
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-violet-600 shadow-sm hover:bg-violet-50">
              {weakest ? "Bu derse çalış" : "Seviye testine başla"}
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </section>

          {/* İstatistik kartları — hook'tan */}
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Bugünkü durum</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <StatCard key={s.key} stat={s} />
              ))}
            </div>
          </section>

          {/* İlerleme + haftalık özet */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Ders bazlı ilerleme çubukları — hook'tan */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-800">Ders bazlı ilerleme</h2>
                <button className="text-xs font-medium text-violet-500 hover:text-violet-600">Tümünü gör</button>
              </div>

              {progressRows.length > 0 ? (
                <div className="space-y-5">
                  {progressRows.map((r) => (
                    <ProgressRow key={r.subject} row={r} />
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-sm text-slate-400">
                  {ready ? "Henüz ders verisi yok — birkaç soru çöz, ilerlemen burada belirsin." : "İlerleme verisi bulunamadı."}
                </p>
              )}
            </div>

            {/* Genel tamamlanma halkası — ilerlemelerin ortalaması */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
              <h2 className="mb-4 self-start text-base font-bold text-slate-800">Genel tamamlanma</h2>
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-violet-100">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-2xl font-bold text-slate-800">%{overall}</span>
                  <span className="text-xs text-slate-400">ortalama</span>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                {progressRows.length
                  ? `${progressRows.length} derste ortalama başarı %${overall}.`
                  : "Veri geldikçe burada özetlenecek."}
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
