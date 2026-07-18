import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import DashboardLayout from "./DashboardLayout.jsx";
import Auth from "./Auth.jsx";

export default function App() {
  const [session, setSession] = useState(undefined); // undefined = yükleniyor

  useEffect(() => {
    if (!supabase) {
      setSession(null);
      return;
    }
    // Mevcut oturumu al + oturum değişimlerini dinle (giriş/çıkış).
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 font-sans text-slate-400">
        Yükleniyor…
      </div>
    );
  }

  // Giriş yoksa Auth ekranı, varsa dashboard.
  return session ? <DashboardLayout /> : <Auth />;
}
