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

// Geçici ağ hatalarına karşı otomatik yeniden deneme (4 deneme, artan bekleme).
async function withRetry(label, fn, tries = 4) {
  let lastErr;
  for (let a = 1; a <= tries; a++) {
    try {
      const res = await fn();
      if (res && res.error) throw res.error;
      return res;
    } catch (e) {
      lastErr = e;
      if (a < tries) await new Promise((r) => setTimeout(r, 1000 * a));
    }
  }
  throw new Error(label + ": " + (lastErr?.message || lastErr));
}

async function seed() {
  console.log(`Bağlanılıyor: ${url}`);

  // 1) Konular (upsert — subject+unit_id benzersiz)
  console.log(`Konular yükleniyor: ${topics.length}`);
  await withRetry("topics", () => sb.from("topics").upsert(topics, { onConflict: "subject,unit_id" }));

  // 2) Sorular (temizle + yeniden yükle → idempotent)
  console.log("Eski sorular siliniyor…");
  await withRetry("questions delete", () => sb.from("questions").delete().gt("id", 0));

  console.log(`Sorular yükleniyor: ${questions.length}`);
  const B = 300;
  for (let i = 0; i < questions.length; i += B) {
    await withRetry(`questions @${i}`, () => sb.from("questions").insert(questions.slice(i, i + B)));
    process.stdout.write(`  ${Math.min(i + B, questions.length)}/${questions.length}\r`);
  }
  console.log("\nTamamlandı ✔  (sorular + konular yüklendi)");
}

seed().catch((e) => {
  console.error("\nHATA:", e.message);
  process.exitCode = 1;
});
