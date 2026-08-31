// ============================================================
// TYT Hazırlık — Konu içeriklerini Supabase'e it (SQL yapıştırmadan)
// Kullanım:  react-app klasöründe →  node scripts/push-topics.mjs
// Gerekli:   react-app/.env.local içinde SUPABASE_SERVICE_ROLE_KEY
// topics.json'daki her konunun name + content'ini Supabase'e upsert eder.
// İçerik değişince tek komut çalıştır — otomatik güncellenir.
// ============================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

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
  console.error("\nHATA: SUPABASE_SERVICE_ROLE_KEY gerekli (react-app/.env.local).\n");
  process.exit(1);
}

const sb = createClient(url, key, { auth: { persistSession: false } });
const topics = JSON.parse(readFileSync(join(here, "data", "topics.json"), "utf8"));

// Sadece belirli konuları güncellemek istersen:  node scripts/push-topics.mjs tr-sozcuk tr-cumle
const only = process.argv.slice(2);
const list = only.length ? topics.filter((t) => only.includes(t.unit_id)) : topics;

async function withRetry(label, fn, tries = 4) {
  let lastErr;
  for (let i = 1; i <= tries; i++) {
    try { return await fn(); }
    catch (e) { lastErr = e; console.warn(`  ${label}: deneme ${i} başarısız, tekrar…`); await new Promise((r) => setTimeout(r, 500 * i)); }
  }
  throw lastErr;
}

console.log(`\n${list.length} konu güncelleniyor…`);
let ok = 0;
for (const t of list) {
  await withRetry(t.unit_id, async () => {
    const { error } = await sb
      .from("topics")
      .update({ name: t.name, content: t.content })
      .eq("unit_id", t.unit_id);
    if (error) throw error;
  });
  ok++;
  process.stdout.write(`\r  ${ok}/${list.length} — ${t.unit_id}          `);
}
console.log(`\n\nTamamlandı ✔  (${ok} konu güncellendi)\n`);
