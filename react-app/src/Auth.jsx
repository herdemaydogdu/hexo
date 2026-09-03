import { useState } from "react";
import { supabase } from "./supabaseClient";
import { GraduationCap, Loader2, ArrowLeft, MailCheck } from "lucide-react";

/**
 * Giriş / kayıt / şifre sıfırlama ekranı.
 *
 * Dört mod:
 *  · signin   — e-posta + şifre
 *  · signup   — yeni hesap
 *  · forgot   — sıfırlama bağlantısı iste
 *  · recovery — e-postadaki bağlantıdan gelindi, yeni şifre belirle
 *
 * Supabase hataları İngilizce döner; öğrenciye Türkçe gösteriyoruz (bkz. trHata).
 */

const HATA_TR = {
  "Invalid login credentials": "E-posta veya şifre hatalı. Tekrar dene.",
  "User already registered": "Bu e-posta zaten kayıtlı. Giriş yapmayı dene ya da şifreni sıfırla.",
  "Email not confirmed": "E-postanı doğrulaman gerekiyor. Gelen kutunu (ve spam klasörünü) kontrol et.",
  "Unable to validate email address: invalid format": "E-posta adresi geçerli görünmüyor.",
  "New password should be different from the old password.": "Yeni şifren eskisiyle aynı olamaz.",
  "Auth session missing!": "Bağlantının süresi dolmuş. Sıfırlama e-postasını yeniden iste.",
};

function trHata(err) {
  const m = (err && err.message) || String(err || "");
  if (HATA_TR[m]) return HATA_TR[m];
  if (/at least 6|password.*6|weak password/i.test(m)) return "Şifre en az 6 karakter olmalı.";
  if (/rate limit|too many|only request this after/i.test(m))
    return "Çok fazla deneme yaptın. Birkaç dakika bekleyip tekrar dene.";
  if (/network|fetch|failed to fetch/i.test(m))
    return "Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.";
  if (/invalid.*email|email.*invalid/i.test(m)) return "E-posta adresi geçerli görünmüyor.";
  if (/expired|invalid.*token/i.test(m)) return "Bağlantının süresi dolmuş. Yeni bir sıfırlama e-postası iste.";
  return "Beklenmedik bir sorun oldu. Tekrar dener misin?";
}

const INPUT =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100";

export default function Auth({ mode: initialMode = "signin", onDone }) {
  const [mode, setMode] = useState(initialMode); // signin | signup | forgot | recovery
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState(null); // { type: "ok" | "err", text }
  const [busy, setBusy] = useState(false);

  const go = (m) => { setMode(m); setMsg(null); setPassword(""); setPassword2(""); };

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      if (!supabase) throw new Error("Supabase yapılandırılmamış (.env eksik).");

      if (mode === "signup") {
        if (password.length < 6) throw new Error("at least 6");
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMsg({ type: "ok", text: "Kayıt başarılı! Şimdi giriş yapabilirsin." });
        setMode("signin");
        setPassword("");
      } else if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // Başarılı → App onAuthStateChange ile panele geçer.
      } else if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin,
        });
        if (error) throw error;
        setMsg({
          type: "ok",
          text: "Sıfırlama bağlantısı e-postana gönderildi. Gelen kutunu ve spam klasörünü kontrol et.",
        });
      } else if (mode === "recovery") {
        if (password.length < 6) throw new Error("at least 6");
        if (password !== password2) throw new Error("__eslesmiyor");
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setMsg({ type: "ok", text: "Şifren güncellendi. Giriş yapılıyor…" });
        setTimeout(() => onDone?.(), 900);
      }
    } catch (err) {
      const text = err?.message === "__eslesmiyor" ? "Şifreler birbiriyle eşleşmiyor." : trHata(err);
      setMsg({ type: "err", text });
    } finally {
      setBusy(false);
    }
  }

  const baslik = {
    signin: "Hesabına giriş yap",
    signup: "Yeni hesap oluştur",
    forgot: "Şifreni mi unuttun?",
    recovery: "Yeni şifreni belirle",
  }[mode];

  const dugme = {
    signin: "Giriş Yap",
    signup: "Kayıt Ol",
    forgot: "Sıfırlama bağlantısı gönder",
    recovery: "Şifreyi güncelle",
  }[mode];

  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 p-4 font-sans text-slate-800">
      <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-violet-300 text-white">
            {mode === "forgot" ? <MailCheck className="h-6 w-6" strokeWidth={1.8} />
                               : <GraduationCap className="h-6 w-6" strokeWidth={1.8} />}
          </div>
          <h1 className="text-xl font-bold tracking-tight">TYT Hazırlık</h1>
          <p className="mt-1 text-sm text-slate-400">{baslik}</p>
          {mode === "forgot" && (
            <p className="mt-2 text-xs font-light leading-relaxed text-slate-400">
              Hesabının e-postasını yaz; şifreni yenileyebileceğin bir bağlantı gönderelim.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode !== "recovery" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">E-posta</label>
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@eposta.com" className={INPUT}
              />
            </div>
          )}

          {mode !== "forgot" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                {mode === "recovery" ? "Yeni şifre" : "Şifre"}
              </label>
              <input
                type="password" required minLength={6} value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="En az 6 karakter" className={INPUT}
              />
            </div>
          )}

          {mode === "recovery" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">Yeni şifre (tekrar)</label>
              <input
                type="password" required minLength={6} value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Aynı şifreyi tekrar yaz" className={INPUT}
              />
            </div>
          )}

          {msg && (
            <p className={
              "rounded-2xl px-4 py-2.5 text-xs leading-relaxed " +
              (msg.type === "ok" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600")
            }>
              {msg.text}
            </p>
          )}

          <button
            type="submit" disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-600 disabled:opacity-60"
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {dugme}
          </button>
        </form>

        {mode === "signin" && (
          <button
            onClick={() => go("forgot")}
            className="mt-3 w-full text-center text-xs font-medium text-slate-400 transition-colors hover:text-violet-500"
          >
            Şifremi unuttum
          </button>
        )}

        {(mode === "signin" || mode === "signup") && (
          <p className="mt-5 text-center text-xs text-slate-400">
            {mode === "signin" ? "Hesabın yok mu? " : "Zaten hesabın var mı? "}
            <button
              onClick={() => go(mode === "signin" ? "signup" : "signin")}
              className="font-semibold text-violet-500 hover:text-violet-600"
            >
              {mode === "signin" ? "Kayıt ol" : "Giriş yap"}
            </button>
          </p>
        )}

        {mode === "forgot" && (
          <button
            onClick={() => go("signin")}
            className="mt-5 flex w-full items-center justify-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-slate-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Girişe dön
          </button>
        )}
      </div>
    </div>
  );
}
