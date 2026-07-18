// ============================================================
// TYT Hazırlık — Veri tohumlama (seed) script'i
// Kullanım:  react-app klasöründe →  node scripts/seed.mjs
// Gerekli:   react-app/.env.local içinde SUPABASE_SERVICE_ROLE_KEY
//            (Supabase → Project Settings → API Keys → service_role / secret)
// Bu script tüm soruları + konuları Supabase'e yükler. İçerik değişince
// tekrar çalıştır — SQL yapıştırmaya gerek yok.
// ============================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

// .env ve .env.local'ı basitçe oku (VITE_SUPABASE_URL zaten .env'de var).
function parseEnv(file) {
  try {
    for (const line of readFileSync(join(root, file), "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}
parseEnv(".env");
parseEnv(".env.local");

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("\nHATA: SUPABASE_URL ve SUPABASE_SERVICE_ROLE_KEY gerekli.");
  console.error("→ react-app/.env.local dosyasına şu satırı ekle (URL zaten .env'de):");
  console.error("   SUPABASE_SERVICE_ROLE_KEY=eyJ...   (Supabase → Settings → API Keys → service_role / secret)\n");
  process.exit(1);
}

const sb = createClient(url, key, { auth: { persistSession: false } });
const questions = JSON.parse(readFileSync(join(here, "data", "questions.json"), "utf8"));
const topics = JSON.parse(readFileSync(join(here, "data", "topics.json"), "utf8"));

async function seed() {
  console.log(`Bağlanılıyor: ${url}`);

  // 1) Konular (upsert — subject+unit_id benzersiz)
  console.log(`Konular yükleniyor: ${topics.length}`);
  const { error: te } = await sb.from("topics").upsert(topics, { onConflict: "subject,unit_id" });
  if (te) throw new Error("topics: " + te.message);

  // 2) Sorular (temizle + yeniden yükle → idempotent)
  console.log("Eski sorular siliniyor…");
  const { error: de } = await sb.from("questions").delete().gt("id", 0);
  if (de) throw new Error("questions delete: " + de.message);

  console.log(`Sorular yükleniyor: ${questions.length}`);
  const B = 500;
  for (let i = 0; i < questions.length; i += B) {
    const { error } = await sb.from("questions").insert(questions.slice(i, i + B));
    if (error) throw new Error(`questions insert @${i}: ` + error.message);
    process.stdout.write(`  ${Math.min(i + B, questions.length)}/${questions.length}\r`);
  }
  console.log("\nTamamlandı ✔  (sorular + konular yüklendi)");
}

seed().catch((e) => {
  console.error("\nHATA:", e.message);
  process.exit(1);
});
