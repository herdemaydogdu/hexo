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

/**
 * TYT Hazırlık — Dashboard Layout iskeleti
 * Tailwind CSS · minimalist · yumuşak pastel tonlar (uçuk mavi / soft lila / mint)
 * Tek dosya, bağımsız çalışır. Örnek veriler bileşen içinde tutulur.
 */

// ——— Örnek veri (skeleton; gerçek veriyle değiştirilebilir) ———
const NAV = [
  { id: "dashboard", label: "Ana Sayfa", icon: LayoutDashboard },
  { id: "konu", label: "Konu Anlatımı", icon: BookOpen },
  { id: "quiz", label: "Soru Çöz", icon: PenSquare },
  { id: "deneme", label: "Deneme Sınavı", icon: Timer },
  { id: "istatistik", label: "İstatistik", icon: BarChart3 },
];

const STATS = [
  { label: "Bugün çözülen", value: "42", hint: "hedefin 50", icon: Target, tint: "sky" },
  { label: "Günlük seri", value: "7", hint: "gün üst üste", icon: Flame, tint: "rose" },
  { label: "Ortalama net", value: "68", hint: "son 5 deneme", icon: TrendingUp, tint: "violet" },
  { label: "Tamamlanan konu", value: "23", hint: "48 konudan", icon: CheckCircle2, tint: "emerald" },
];

const PROGRESS = [
  { subject: "Türkçe", value: 74, tint: "sky" },
  { subject: "Matematik", value: 58, tint: "violet" },
  { subject: "Sosyal Bilimler", value: 81, tint: "emerald" },
  { subject: "Fen Bilimleri", value: 46, tint: "rose" },
];

// ——— Pastel renk eşlemeleri (Tailwind çekirdek sınıfları) ———
const TINT = {
  sky: { soft: "bg-sky-50", chip: "bg-sky-100 text-sky-600", bar: "bg-sky-400", ring: "ring-sky-200" },
  violet: { soft: "bg-violet-50", chip: "bg-violet-100 text-violet-600", bar: "bg-violet-400", ring: "ring-violet-200" },
  emerald: { soft: "bg-emerald-50", chip: "bg-emerald-100 text-emerald-600", bar: "bg-emerald-400", ring: "ring-emerald-200" },
  rose: { soft: "bg-rose-50", chip: "bg-rose-100 text-rose-600", bar: "bg-rose-400", ring: "ring-rose-200" },
};

function NavItem({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={
        "group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors " +
        (active
          ? "bg-violet-100 text-violet-700"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-700")
      }
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
      <span>{item.label}</span>
    </button>
  );
}

function StatCard({ stat }) {
  const Icon = stat.icon;
  const t = TINT[stat.tint];
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
  const t = TINT[row.tint];
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">{row.subject}</span>
        <span className="text-sm font-semibold text-slate-800">%{row.value}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={"h-full rounded-full transition-all " + t.bar}
          style={{ width: row.value + "%" }}
        />
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  const [active, setActive] = useState("dashboard");

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
            <NavItem
              key={item.id}
              item={item}
              active={active === item.id}
              onClick={() => setActive(item.id)}
            />
          ))}
        </nav>

        {/* Sidebar alt: motivasyon kartı */}
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-violet-50 to-sky-50 p-4">
          <div className="flex items-center gap-2 text-violet-600">
            <Flame className="h-4 w-4" strokeWidth={2} />
            <span className="text-xs font-semibold">7 günlük seri</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            Bugünkü hedefini tamamla, serini sürdür.
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
          {/* Öne çıkan öneri şeridi */}
          <section className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-sky-100 via-violet-100 to-emerald-100 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">Sana özel öneri</p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-800">Matematik · Temel Kavramlar</span> konusunda başarın %46.
                10 soruluk hedefli bir tekrar netini yükseltir.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-violet-600 shadow-sm hover:bg-violet-50">
              Bu konuyu çalış
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </section>

          {/* İstatistik kartları */}
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Bugünkü durum</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {STATS.map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </div>
          </section>

          {/* İlerleme + haftalık özet */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Ders bazlı ilerleme çubukları */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-800">Ders bazlı ilerleme</h2>
                <button className="text-xs font-medium text-violet-500 hover:text-violet-600">Tümünü gör</button>
              </div>
              <div className="space-y-5">
                {PROGRESS.map((r) => (
                  <ProgressRow key={r.subject} row={r} />
                ))}
              </div>
            </div>

            {/* Haftalık hedef (placeholder halka) */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
              <h2 className="mb-4 self-start text-base font-bold text-slate-800">Haftalık hedef</h2>
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-violet-100">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-2xl font-bold text-slate-800">%72</span>
                  <span className="text-xs text-slate-400">tamamlandı</span>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-500">Bu hafta 5 günde 210 soru çözdün.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
