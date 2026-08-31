/* ============================================================
   TYT Hazırlık — Seed verisi üretici (build-data)
   Kullanım:  react-app klasöründe →  node scripts/build-data.mjs
   Ne yapar:  js/data/*.js içeriklerini izole bir VM'de yükler,
              scripts/data/questions.json dosyasını yeniden üretir ve
              scripts/data/topics.json içindeki question_count alanlarını
              gerçek soru sayılarıyla günceller (content'e dokunmaz).
   Sonra:     node scripts/seed.mjs  ile Supabase'e yükle.
   ============================================================ */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..", "..");      // repo kökü (sınav/)
const outDir = path.join(here, "data");
const jsDir = path.join(root, "js");
const dataDir = path.join(jsDir, "data");

/* js/data'daki ünite kimliği ile Supabase topics.unit_id farklıysa eşleştir.
   (Eşleşmezse sorular "yetim" kalır ve sitede hiçbir konuda görünmez.) */
const UNIT_MAP = {
  "geo-benzerlik": "geo-eslik-benzerlik",
  "geo-ozelucgen": "geo-pisagor",
  "kim-tur": "kim-turler",
  "kim-bilim": "kim-disiplin",
};

const errors = [];
const sandbox = {
  console: { log() {}, info() {}, warn() {}, error(...a) { errors.push(a.join(" ")); } },
  document: { addEventListener() {}, querySelector: () => null, createElement: () => ({ style: {}, appendChild() {} }) },
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  setTimeout, clearTimeout,
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
const ctx = vm.createContext(sandbox);

function run(file, label) {
  let src = fs.readFileSync(file, "utf8").replace(/\0/g, "");
  if (src.charCodeAt(0) === 0xfeff) src = src.slice(1);
  try { vm.runInContext(src, ctx, { filename: label }); return true; }
  catch (e) { errors.push(`EVAL FAIL ${label}: ${e.message}`); return false; }
}

// data.js `const TYT_DATA` ile tanımlar; globale bağla.
const dataSrc = fs.readFileSync(path.join(jsDir, "data.js"), "utf8").replace(/\0/g, "");
vm.runInContext(dataSrc + "\n;globalThis.TYT_DATA = TYT_DATA;", ctx, { filename: "data.js" });
run(path.join(jsDir, "content-loader.js"), "content-loader.js");

// index.html sırası + index'te olmayan dosyalar
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const seen = new Set(); const order = [];
for (const m of indexHtml.matchAll(/js\/data\/([a-zA-Z0-9._-]+\.js)/g)) {
  if (!seen.has(m[1])) { seen.add(m[1]); order.push(m[1]); }
}
const extras = fs.readdirSync(dataDir).filter((f) => f.endsWith(".js") && !seen.has(f)).sort();
order.push(...extras);
for (const f of order) {
  const p = path.join(dataDir, f);
  if (fs.existsSync(p)) run(p, f); else errors.push(`MISSING ${f}`);
}
sandbox.TYT_CONTENT.finalize();

// questions.json — Supabase questions tablosunun kolon şeması
const questions = (sandbox.TYT_DATA.questions || []).map((q) => ({
  subject: q.subject,
  topic: UNIT_MAP[q.unit] || q.unit,
  difficulty: Number(q.difficulty) || 2,
  q: q.q,
  options: q.options || [],
  answer: Number(q.answer),
  explanation: q.explain || q.explanation || "",
}));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "questions.json"), JSON.stringify(questions), "utf8");

// topics.json — question_count'u gerçek sayıya çek (content'e dokunma)
const counts = {};
for (const q of questions) counts[q.topic] = (counts[q.topic] || 0) + 1;
const topicsPath = path.join(outDir, "topics.json");
const topics = JSON.parse(fs.readFileSync(topicsPath, "utf8"));
let changed = 0;
for (const t of topics) {
  const n = counts[t.unit_id] || 0;
  if (t.question_count !== n) { t.question_count = n; changed++; }
}
fs.writeFileSync(topicsPath, JSON.stringify(topics), "utf8");

const orphans = Object.keys(counts).filter((k) => !topics.some((t) => t.unit_id === k));
console.log(`questions.json: ${questions.length} soru`);
console.log(`topics.json: ${topics.length} ünite, ${changed} tanesinin question_count'u güncellendi`);
console.log(`sorusuz ünite: ${topics.filter((t) => !t.question_count).length}`);
console.log(orphans.length ? `!! YETİM konu (topics'te yok): ${orphans.join(", ")}` : "yetim konu yok");
if (errors.length) console.log(`UYARI ${errors.length} hata:\n` + errors.slice(0, 10).join("\n"));
