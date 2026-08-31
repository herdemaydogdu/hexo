// TYT konu notlarını Supabase'ten yeniden dışa aktarır.
//
// Kullanım:
//   1) npm install @supabase/supabase-js
//   2) Ortam değişkenlerini ver:
//        SUPABASE_URL=https://jmoimahqkiepgdmwnovs.supabase.co
//        SUPABASE_KEY=<anon veya service_role key>
//   3) node supabase-export.mjs
//
// Çıktı: ./topics.json, ./index.json ve ./notlar/<ders>/<unit_id>.html
//
// Not: Bu betik export klasöründeki dosyaların ÜZERİNE YAZAR.

import { createClient } from "@supabase/supabase-js";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("HATA: SUPABASE_URL ve SUPABASE_KEY ortam değişkenleri gerekli.");
  process.exit(1);
}

const DERS_AD = {
  matematik: "Matematik",
  geometri: "Geometri",
  turkce: "Türkçe",
  fen: "Fen Bilimleri",
  sosyal: "Sosyal Bilimler",
};

const CSS = `
body{max-width:860px;margin:0 auto;padding:24px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.7;color:#1e293b}
h2{font-size:1.7rem;border-bottom:3px solid #0369a1;padding-bottom:8px}
h3{font-size:1.2rem;color:#0369a1;margin-top:32px}
.formula{background:#f1f5f9;border-left:4px solid #0369a1;padding:12px 16px;border-radius:0 8px 8px 0}
table{border-collapse:collapse;width:100%;margin:16px 0;font-size:.93rem}
th,td{border:1px solid #cbd5e1;padding:8px 10px;text-align:left;vertical-align:top}
th{background:#e2e8f0}
svg{display:block;margin:16px 0}
u{text-decoration:none;background:#fef9c3;padding:1px 2px;border-radius:3px}
`.trim();

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const { data, error } = await supabase
  .from("topics")
  .select("subject, unit_id, name, sort_order, question_count, content")
  .order("subject", { ascending: true })
  .order("sort_order", { ascending: true });

if (error) {
  console.error("Supabase hatası:", error.message);
  process.exit(1);
}

// 1) Tam veri
await writeFile(
  join(__dirname, "topics.json"),
  JSON.stringify(data, null, 2),
  "utf-8"
);

// 2) İçeriksiz dizin
const index = data.map((r) => ({
  subject: r.subject,
  unit_id: r.unit_id,
  name: r.name,
  sort_order: r.sort_order,
  question_count: r.question_count,
  karakter: (r.content || "").length,
}));
await writeFile(
  join(__dirname, "index.json"),
  JSON.stringify(index, null, 2),
  "utf-8"
);

// 3) Ünite başına HTML
for (const r of data) {
  const dir = join(__dirname, "notlar", r.subject);
  await mkdir(dir, { recursive: true });
  const doc = `<!DOCTYPE html>
<html lang="tr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${r.name}</title>
<style>
${CSS}
</style></head><body>
${r.content || ""}
</body></html>`;
  await writeFile(join(dir, `${r.unit_id}.html`), doc, "utf-8");
}

const dolu = data.filter((r) => (r.content || "").length > 5000);
console.log(
  `Tamam: ${data.length} kayıt (${dolu.length} tanesi dolu içerik), ` +
    `${Object.keys(DERS_AD).length} ders klasörü yazıldı.`
);
