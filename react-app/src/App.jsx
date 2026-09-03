import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import DashboardLayout from "./DashboardLayout.jsx";
import Auth from "./Auth.jsx";

export default function App() {
  const [session, setSession] = useState(undefined); // undefined = yükleniyor
  const [recovery, setRecovery] = useState(false);   // şifre sıfırlama bağlantısıyla gelindi

  useEffect(() => {
    if (!supabase) {
      setSession(null);
      return;
    }
    // Mevcut oturumu al + oturum değişimlerini dinle (giriş/çıkış).
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      // E-postadaki sıfırlama bağlantısına tıklanınca Supabase bu olayı yollar.
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 font-sans text-slate-400">
        Yükleniyor…
      </div>
    );
  }

  // Şifre sıfırlama bağlantısından gelindiyse önce yeni şifre belirlenir.
  if (recovery) {
    return (
      <Auth
        mode="recovery"
        onDone={() => {
          setRecovery(false);
          // Adresteki tek kullanımlık token'ı temizle ki yenilemede tekrar açılmasın.
          window.history.replaceState({}, "", window.location.pathname);
        }}
      />
    );
  }

  // Site üyeliksiz de gezilebilir; giriş ekranı panel içinden açılır.
  return <DashboardLayout session={session} />;
}
