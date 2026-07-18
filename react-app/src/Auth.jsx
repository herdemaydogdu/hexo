import { useState } from "react";
import { supabase } from "./supabaseClient";
import { GraduationCap, Loader2 } from "lucide-react";

/**
 * Basit Supabase giriş / kayıt ekranı (pastel tema).
 * Başarılı girişte App otomatik olarak dashboard'a geçer.
 */
export default function Auth() {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null); // { type: "ok" | "err", text }
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      if (!supabase) throw new Error("Supabase yapılandırılmamış (.env eksik).");

      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMsg({ type: "ok", text: "Kayıt başarılı! Şimdi giriş yapabilirsin." });
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // Başarılı → App onAuthStateChange ile dashboard'a geçer.
      }
    } catch (err) {
      setMsg({ type: "err", text: err.message || String(err) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 p-4 font-sans text-slate-800">
      <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-violet-300 text-white">
            <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">TYT Hazırlık</h1>
          <p className="mt-1 text-sm text-slate-400">
            {mode === "signin" ? "Hesabına giriş yap" : "Yeni hesap oluştur"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">E-posta</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@eposta.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Şifre</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="En az 6 karakter"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {msg && (
            <p
              className={
                "rounded-2xl px-4 py-2.5 text-xs " +
                (msg.type === "ok" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600")
              }
            >
              {msg.text}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-600 disabled:opacity-60"
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "signin" ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-400">
          {mode === "signin" ? "Hesabın yok mu? " : "Zaten hesabın var mı? "}
          <button
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setMsg(null);
            }}
            className="font-semibold text-violet-500 hover:text-violet-600"
          >
            {mode === "signin" ? "Kayıt ol" : "Giriş yap"}
          </button>
        </p>
      </div>
    </div>
  );
}
