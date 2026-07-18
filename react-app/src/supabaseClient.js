import { createClient } from "@supabase/supabase-js";

// Anahtarlar .env dosyasından gelir (VITE_ önekli değişkenler tarayıcıya açılır).
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Env eksikse uygulamayı çökertme; client null olur, hook bunu düzgün karşılar.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;

if (!supabase) {
  console.warn(
    "[Supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY eksik. " +
      ".env dosyasını doldurup dev sunucusunu yeniden başlat."
  );
}
