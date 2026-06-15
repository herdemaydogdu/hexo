/* ============================================================
   TYT Hazırlık — Uygulama Mantığı
   ============================================================ */

const app = document.getElementById("app");
const D = TYT_DATA;

/* ---------- İlerleme deposu (localStorage) ---------- */
const STORE_KEY = "tyt_progress_v1";

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || defaultProgress(); }
  catch { return defaultProgress(); }
}
function defaultProgress() {
  return { sessions: [], readTopics: [], studyDays: [] };
}
function saveProgress(p) { localStorage.setItem(STORE_KEY, JSON.stringify(p)); }

function todayKey() { return new Date().toISOString().slice(0, 10); } // YYYY-MM-DD

function recordSession(session) {
  const p = loadProgress();
  p.sessions.push(session);
  const t = todayKey();
  if (!p.studyDays) p.studyDays = [];
  if (!p.studyDays.includes(t)) p.studyDays.push(t);
  saveProgress(p);
}

/* Üst üste çalışılan gün serisi (streak) */
function calcStreak(days) {
  if (!days || !days.length) return 0;
  const set = new Set(days);
  let streak = 0;
  let d = new Date();
  // Bugün çalışılmadıysa dünden başlayarak say
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
function markTopicRead(topicId) {
  const p = loadProgress();
  if (!p.readTopics.includes(topicId)) { p.readTopics.push(topicId); saveProgress(p); }
}

/* ---------- Net hesabı (4 yanlış 1 doğruyu götürür) ---------- */
function calcNet(correct, wrong) {
  return Math.max(0, correct - wrong / 4);
}

/* ---------- Yardımcılar ---------- */
function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function getSubject(id) { return D.subjects.find(s => s.id === id); }
function getTopic(subId, topicId) { return getSubject(subId)?.topics.find(t => t.id === topicId); }

/* ============================================================
   ROUTER
   ============================================================ */
const routes = {
  dashboard: renderDashboard,
  konu: renderKonuList,
  quiz: renderQuizMenu,
  deneme: renderDenemeMenu,
  oyunlar: renderGamesMenu,
  istatistik: renderStats
};

let currentTimer = null;

function navigate(route, ...args) {
  if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
  document.querySelectorAll(".nav-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.nav === route));
  document.getElementById("navMenu")?.classList.remove("open");
  window.scrollTo(0, 0);
  (routes[route] || renderDashboard)(...args);
}

/* ============================================================
   DASHBOARD
   ============================================================ */
const DAILY_GOAL = 10; // günlük hedef soru sayısı

function renderDashboard() {
  const p = loadProgress();
  const totalQ = p.sessions.reduce((a, s) => a + s.total, 0);
  const totalCorrect = p.sessions.reduce((a, s) => a + s.correct, 0);
  const bestNet = p.sessions.length ? Math.max(...p.sessions.map(s => s.net)).toFixed(2) : "0";
  const streak = calcStreak(p.studyDays);
  const gp = gameProfile();
  const todayQ = p.sessions.filter(s => s.date.slice(0, 10) === todayKey()).reduce((a, s) => a + s.total, 0);
  const goalPct = Math.min(100, Math.round(todayQ / DAILY_GOAL * 100));

  app.innerHTML = `
    <div class="hero">
      <h1>TYT'ye hazırlanmaya başla 🚀</h1>
      <p>Konuları çalış, soru çöz, süreli deneme sınavlarına gir ve gelişimini takip et. Tüm ilerlemen bu tarayıcıda güvenle saklanır.</p>
      <div class="btn-row">
        <button class="btn" data-go="quiz">Soru Çözmeye Başla</button>
        <button class="btn secondary" data-go="konu">Konu Çalış</button>
      </div>
    </div>

    <div class="card goal-card">
      <div class="goal-head">
        <div><span class="fire">🔥</span> <b>${streak} günlük</b> çalışma serisi</div>
        <div class="goal-count">Bugün: ${todayQ} / ${DAILY_GOAL} soru</div>
      </div>
      <div class="progress-track" style="margin:12px 0 0"><div class="progress-fill" style="width:${goalPct}%"></div></div>
      <p class="goal-msg">${goalPct >= 100 ? "Günlük hedefini tamamladın, harikasın! 🎉" : "Her gün biraz çalışarak seriyi büyüt."}</p>
    </div>

    <div class="grid grid-3">
      <div class="card stat"><div class="num">${totalQ}</div><div class="label">Çözülen Soru</div></div>
      <div class="card stat"><div class="num">${totalCorrect}</div><div class="label">Doğru Cevap</div></div>
      <div class="card stat"><div class="num">${bestNet}</div><div class="label">En İyi Net</div></div>
    </div>

    <h2 class="section-title">Ne yapmak istersin?</h2>
    <div class="grid grid-2">
      <div class="card clickable" data-go="konu">
        <span class="icon">📖</span><h3>Konu Anlatımı</h3>
        <p>Derslere göre ayrılmış özet konu anlatımlarını oku.</p>
      </div>
      <div class="card clickable" data-go="quiz">
        <span class="icon">✍️</span><h3>Soru Çöz</h3>
        <p>Derse göre testler çöz, anında doğru cevabı ve açıklamayı gör.</p>
      </div>
      <div class="card clickable" data-go="deneme">
        <span class="icon">⏱️</span><h3>Deneme Sınavı</h3>
        <p>Süreli, karışık sorulardan oluşan deneme ile kendini sına.</p>
      </div>
      <div class="card clickable" data-go="oyunlar">
        <span class="icon">🎮</span><h3>Oyunlar</h3>
        <p>Eşleştirme, hafıza, bilgi kartları ve hızlı yarış ile eğlenerek çalış.</p>
        <div class="meta">Sv. ${gp.level} · ${gp.xp} XP →</div>
      </div>
      <div class="card clickable" data-go="istatistik">
        <span class="icon">📊</span><h3>İstatistik</h3>
        <p>Net gelişimini ve ders bazlı performansını grafiklerle gör.</p>
      </div>
    </div>
  `;
  bindGo();
}

/* ============================================================
   KONU ANLATIMI
   ============================================================ */
function renderKonuList() {
  const p = loadProgress();
  let html = `<h1 class="page-title">Konu Anlatımı</h1>
    <p class="page-sub">Bir ders seç, ardından konuya tıklayarak anlatımı oku.</p>`;

  D.subjects.forEach(sub => {
    html += `<h2 class="section-title">${sub.icon} ${sub.name}</h2><div class="grid grid-3">`;
    sub.topics.forEach(t => {
      const done = p.readTopics.includes(t.id);
      html += `
        <div class="card clickable" data-topic="${sub.id}|${t.id}">
          <h3>${t.title}</h3>
          <p>${t.summary}</p>
          <span class="badge ${done ? "done" : ""}">${done ? "✓ Okundu" : "Okunmadı"}</span>
        </div>`;
    });
    html += `</div>`;
  });

  app.innerHTML = html;
  app.querySelectorAll("[data-topic]").forEach(c =>
    c.onclick = () => {
      const [s, t] = c.dataset.topic.split("|");
      renderKonuDetail(s, t);
    });
}

function renderKonuDetail(subId, topicId) {
  const sub = getSubject(subId);
  const topic = getTopic(subId, topicId);
  markTopicRead(topicId);

  app.innerHTML = `
    <button class="back-link" id="back">← Konulara dön</button>
    <div class="konu-body">${topic.content}</div>
    <div class="btn-row" style="margin-top:22px">
      <button class="btn" id="solve">Bu Dersten Soru Çöz</button>
      <button class="btn secondary" id="back2">Diğer Konular</button>
    </div>
  `;
  document.getElementById("back").onclick = renderKonuList;
  document.getElementById("back2").onclick = renderKonuList;
  document.getElementById("solve").onclick = () => startQuiz(subId);
}

/* ============================================================
   QUIZ (Soru Çöz)
   ============================================================ */
function renderQuizMenu() {
  let html = `<h1 class="page-title">Soru Çöz</h1>
    <p class="page-sub">Bir ders seç. Sorular tek tek gelir, cevabını işaretleyince doğrusunu ve açıklamasını görürsün.</p>
    <div class="grid grid-2">`;
  D.subjects.forEach(sub => {
    const count = D.questions.filter(q => q.subject === sub.id).length;
    html += `
      <div class="card clickable" data-quiz="${sub.id}">
        <span class="icon">${sub.icon}</span>
        <h3>${sub.name}</h3>
        <p>${count} soru hazır</p>
        <div class="meta">Çözmeye başla →</div>
      </div>`;
  });
  html += `</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-quiz]").forEach(c =>
    c.onclick = () => startQuiz(c.dataset.quiz));
}

function startQuiz(subId) {
  const pool = shuffle(D.questions.filter(q => q.subject === subId));
  if (!pool.length) { renderQuizMenu(); return; }
  runQuiz({
    title: getSubject(subId).name + " — Soru Çöz",
    subjectId: subId,
    questions: pool,
    timed: false,
    showExplain: true
  });
}

/* Ortak quiz motoru — hem soru çöz hem deneme kullanır */
function runQuiz(cfg) {
  let idx = 0;
  const answers = new Array(cfg.questions.length).fill(null); // seçilen index

  function renderQuestion() {
    const q = cfg.questions[idx];
    const sub = getSubject(q.subject);
    const pct = Math.round((idx) / cfg.questions.length * 100);

    app.innerHTML = `
      <div class="quiz-head">
        <div>
          <h1 class="page-title" style="font-size:22px;margin:0">${cfg.title}</h1>
          <p class="page-sub" style="margin:4px 0 0">Soru ${idx + 1} / ${cfg.questions.length}</p>
        </div>
        <div style="display:flex;gap:10px">
          ${cfg.timed ? `<span class="pill timer" id="timer">--:--</span>` : ""}
          <span class="pill">${sub.icon} ${sub.name}</span>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>

      <div class="question-card">
        <div class="q-subject">${sub.name}</div>
        <div class="q-text">${q.q}</div>
        <div class="options" id="options"></div>
        <div id="explainBox"></div>
      </div>

      <div class="btn-row" style="margin-top:20px;justify-content:space-between">
        <button class="btn ghost" id="prev" ${idx === 0 ? "disabled" : ""}>← Önceki</button>
        <button class="btn" id="next">${idx === cfg.questions.length - 1 ? "Bitir" : "Sonraki →"}</button>
      </div>
    `;

    const optBox = document.getElementById("options");
    const letters = ["A", "B", "C", "D", "E"];
    q.options.forEach((opt, i) => {
      const btn = el(`<button class="option"><span class="key">${letters[i]}</span><span>${opt}</span></button>`);
      if (answers[idx] === i) btn.classList.add("selected");
      btn.onclick = () => selectAnswer(i);
      optBox.appendChild(btn);
    });

    // Soru çöz modunda cevap verildiyse açıklama göster
    if (cfg.showExplain && answers[idx] !== null) revealAnswer();

    document.getElementById("prev").onclick = () => { if (idx > 0) { idx--; renderQuestion(); } };
    document.getElementById("next").onclick = () => {
      if (idx === cfg.questions.length - 1) finish();
      else { idx++; renderQuestion(); }
    };

    if (cfg.timed) tickTimer();
  }

  function selectAnswer(i) {
    answers[idx] = i;
    if (cfg.showExplain) renderQuestion(); // açıklamayı göstermek için yeniden çiz
    else {
      document.querySelectorAll(".option").forEach((o, k) =>
        o.classList.toggle("selected", k === i));
    }
  }

  function revealAnswer() {
    const q = cfg.questions[idx];
    const opts = document.querySelectorAll(".option");
    opts.forEach((o, k) => {
      o.disabled = true;
      if (k === q.answer) o.classList.add("correct");
      else if (k === answers[idx]) o.classList.add("wrong");
    });
    const box = document.getElementById("explainBox");
    const right = answers[idx] === q.answer;
    box.innerHTML = `<div class="explain"><b>${right ? "✓ Doğru!" : "✗ Yanlış."}</b> ${q.explain}</div>`;
  }

  /* ---- Süre (deneme) ---- */
  let remaining = cfg.timed ? cfg.durationSec : 0;
  function tickTimer() {
    const t = document.getElementById("timer");
    if (!t) return;
    paint();
    function paint() {
      const m = String(Math.floor(remaining / 60)).padStart(2, "0");
      const s = String(remaining % 60).padStart(2, "0");
      t.textContent = `${m}:${s}`;
      t.classList.toggle("warn", remaining <= 60);
    }
  }
  if (cfg.timed && !currentTimer) {
    currentTimer = setInterval(() => {
      remaining--;
      const t = document.getElementById("timer");
      if (t) {
        const m = String(Math.floor(remaining / 60)).padStart(2, "0");
        const s = String(remaining % 60).padStart(2, "0");
        t.textContent = `${m}:${s}`;
        t.classList.toggle("warn", remaining <= 60);
      }
      if (remaining <= 0) { clearInterval(currentTimer); currentTimer = null; finish(); }
    }, 1000);
  }

  function finish() {
    if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
    let correct = 0, wrong = 0, blank = 0;
    cfg.questions.forEach((q, i) => {
      if (answers[i] === null) blank++;
      else if (answers[i] === q.answer) correct++;
      else wrong++;
    });
    const net = calcNet(correct, wrong);

    recordSession({
      date: new Date().toISOString(),
      type: cfg.timed ? "deneme" : "quiz",
      subject: cfg.subjectId || "karisik",
      total: cfg.questions.length,
      correct, wrong, blank,
      net: Number(net.toFixed(2))
    });

    renderResult({ title: cfg.title, total: cfg.questions.length, correct, wrong, blank, net, subjectId: cfg.subjectId, retry: () => runQuiz({ ...cfg }) });
  }

  renderQuestion();
}

function renderResult(r) {
  const pct = Math.round(r.correct / r.total * 100);
  app.innerHTML = `
    <div class="card result-card">
      <div class="result-score">${pct}%</div>
      <div class="result-net">Net: <b>${r.net.toFixed(2)}</b> / ${r.total}</div>
      <div class="result-breakdown">
        <div class="rb ok"><div class="n">${r.correct}</div><div class="l">Doğru</div></div>
        <div class="rb no"><div class="n">${r.wrong}</div><div class="l">Yanlış</div></div>
        <div class="rb skip"><div class="n">${r.blank}</div><div class="l">Boş</div></div>
      </div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn" id="retry">Tekrar Çöz</button>
        <button class="btn secondary" id="stats">İstatistiklerim</button>
        <button class="btn ghost" id="home">Ana Sayfa</button>
      </div>
    </div>
  `;
  document.getElementById("retry").onclick = r.retry;
  document.getElementById("stats").onclick = () => navigate("istatistik");
  document.getElementById("home").onclick = () => navigate("dashboard");
}

/* ============================================================
   DENEME SINAVI (süreli, karışık)
   ============================================================ */
function renderDenemeMenu() {
  const all = D.questions.length;
  app.innerHTML = `
    <h1 class="page-title">Deneme Sınavı</h1>
    <p class="page-sub">Tüm derslerden karışık sorular, süreli olarak gelir. Gerçek sınav deneyimi için süreni iyi yönet!</p>
    <div class="grid grid-2">
      <div class="card clickable" data-deneme="mini">
        <span class="icon">⚡</span><h3>Mini Deneme</h3>
        <p>${all} karışık soru · 15 dakika</p>
        <div class="meta">Hızlı pratik →</div>
      </div>
      <div class="card clickable" data-deneme="full">
        <span class="icon">⏱️</span><h3>Hızlı Deneme</h3>
        <p>${all} karışık soru · 8 dakika</p>
        <div class="meta">Zamana karşı →</div>
      </div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>📌 Net nasıl hesaplanır?</h3>
      <p>TYT'de <b>4 yanlış 1 doğruyu götürür</b>. Net = Doğru − (Yanlış / 4). Bu uygulama da netini bu kurala göre hesaplar.</p>
    </div>
  `;
  app.querySelectorAll("[data-deneme]").forEach(c =>
    c.onclick = () => startDeneme(c.dataset.deneme));
}

function startDeneme(mode) {
  const pool = shuffle(D.questions);
  const durationSec = mode === "mini" ? 15 * 60 : 8 * 60;
  runQuiz({
    title: "Deneme Sınavı",
    subjectId: "karisik",
    questions: pool,
    timed: true,
    durationSec,
    showExplain: false
  });
}

/* ============================================================
   İSTATİSTİK
   ============================================================ */
function renderStats() {
  const p = loadProgress();
  if (!p.sessions.length) {
    app.innerHTML = `
      <h1 class="page-title">İstatistik</h1>
      <div class="empty">
        <span class="icon">📊</span>
        <p>Henüz veri yok. Birkaç soru çözdükten sonra gelişimini burada göreceksin.</p>
        <div class="btn-row" style="justify-content:center;margin-top:16px">
          <button class="btn" data-go="quiz">Soru Çözmeye Başla</button>
        </div>
      </div>`;
    bindGo();
    return;
  }

  const totalQ = p.sessions.reduce((a, s) => a + s.total, 0);
  const totalC = p.sessions.reduce((a, s) => a + s.correct, 0);
  const totalW = p.sessions.reduce((a, s) => a + s.wrong, 0);
  const successRate = totalQ ? Math.round(totalC / totalQ * 100) : 0;

  // Ders bazlı başarı
  const bySubject = {};
  p.sessions.forEach(s => {
    if (s.subject === "karisik") return;
    bySubject[s.subject] = bySubject[s.subject] || { c: 0, t: 0 };
    bySubject[s.subject].c += s.correct;
    bySubject[s.subject].t += s.total;
  });

  // Son 8 oturumun net trendi
  const recent = p.sessions.slice(-8);
  const maxNet = Math.max(...recent.map(s => s.net), 1);

  let bars = recent.map((s, i) => {
    const h = Math.round(s.net / maxNet * 100);
    return `<div class="bar-col">
      <div class="bar-val">${s.net.toFixed(1)}</div>
      <div class="bar" style="height:${h}%"></div>
      <div class="bar-label">${i + 1}</div>
    </div>`;
  }).join("");

  let subjCards = Object.entries(bySubject).map(([id, v]) => {
    const sub = getSubject(id);
    const rate = Math.round(v.c / v.t * 100);
    return `<div class="card">
      <h3>${sub.icon} ${sub.name}</h3>
      <div class="progress-track" style="margin:12px 0 8px"><div class="progress-fill" style="width:${rate}%"></div></div>
      <p>${v.c}/${v.t} doğru · %${rate} başarı</p>
    </div>`;
  }).join("") || `<p class="page-sub">Ders bazlı veri için 'Soru Çöz' bölümünü kullan.</p>`;

  app.innerHTML = `
    <h1 class="page-title">İstatistik</h1>
    <p class="page-sub">Toplam ${p.sessions.length} oturum tamamladın.</p>

    <div class="grid grid-4">
      <div class="card stat"><div class="num">${totalQ}</div><div class="label">Çözülen Soru</div></div>
      <div class="card stat"><div class="num" style="color:var(--green)">${totalC}</div><div class="label">Doğru</div></div>
      <div class="card stat"><div class="num" style="color:var(--red)">${totalW}</div><div class="label">Yanlış</div></div>
      <div class="card stat"><div class="num">%${successRate}</div><div class="label">Başarı Oranı</div></div>
    </div>

    <h2 class="section-title">Net Gelişimi (son ${recent.length} oturum)</h2>
    <div class="card"><div class="bars">${bars}</div></div>

    <h2 class="section-title">Ders Bazlı Başarı</h2>
    <div class="grid grid-3">${subjCards}</div>

    <div class="btn-row" style="margin-top:24px">
      <button class="btn ghost" id="reset">İlerlemeyi Sıfırla</button>
    </div>
  `;
  document.getElementById("reset").onclick = () => {
    if (confirm("Tüm ilerleme verilerin silinecek. Emin misin?")) {
      saveProgress(defaultProgress());
      renderStats();
    }
  };
}

/* ============================================================
   Olay bağlama
   ============================================================ */
function bindGo() {
  app.querySelectorAll("[data-go]").forEach(b =>
    b.onclick = () => navigate(b.dataset.go));
}

document.querySelectorAll(".nav-btn, .brand").forEach(b =>
  b.onclick = () => navigate(b.dataset.nav));

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");
navMenu.id = "navMenu";
menuToggle.onclick = () => navMenu.classList.toggle("open");

/* Başlat */
navigate("dashboard");
/* v1.1 */
