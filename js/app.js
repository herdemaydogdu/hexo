/* ============================================================
   TYT Hazırlık — Uygulama Mantığı
   ============================================================ */

const app = document.getElementById("app");
const D = TYT_DATA;

/* P1-1: Deterministik, kararlı soru kimlikleri (ünite + sıra) + id→soru indeksi */
(function assignQuestionIds() {
  const counters = {};
  D.questions.forEach(q => {
    const base = q.unit || q.subject || "q";
    counters[base] = (counters[base] || 0) + 1;
    if (!q.id) q.id = base + "-" + String(counters[base]).padStart(2, "0");
  });
})();
const questionById = {};
D.questions.forEach(q => { questionById[q.id] = q; });

/* İlerleme deposu (storage çekirdeği js/store.js'tedir):
   STORE_KEY, GAMES_KEY, safeGetItem, safeSetItem, loadProgress,
   defaultProgress, saveProgress — tümü global olarak burada kullanılır. */

/* İlerleme/oturum/yanlış-defteri/quiz-ayar yardımcıları js/store.js'tedir:
   todayKey, recordSession, recordActivity, todayActivities, calcStreak,
   markTopicRead, calcNet, resetAllData, get/set/clearActiveSession,
   wrong-book ve quiz-pool fonksiyonları — tümü global. */

/* ---------- Basit erişilebilir bildirim (toast) ---------- */
function notify(message, type) {
  let host = document.getElementById("toastHost");
  if (!host) {
    host = document.createElement("div");
    host.id = "toastHost"; host.className = "toast-host";
    host.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
    document.body.appendChild(host);
  }
  const t = document.createElement("div");
  t.className = "toast " + (type || "info");
  t.textContent = message;
  host.appendChild(t);
  setTimeout(() => t.classList.add("show"), 10);
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ---------- Yardımcılar ---------- */
function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
function shuffle(arr) { return TYTCore.fisherYates(arr); }
function getSubject(id) { return D.subjects.find(s => s.id === id); }
function getUnit(subId, unitId) { return getSubject(subId)?.units.find(u => u.id === unitId); }

/* P2-5: Merkezi boş-durum bileşeni */
function emptyState(icon, msg, actionHtml) {
  return `<div class="empty"><span class="icon">${icon}</span><p>${msg}</p>${actionHtml || ""}</div>`;
}

/* ============================================================
   ROUTER
   ============================================================ */
const routes = {
  dashboard: renderDashboard,
  konu: renderKonuList,
  quiz: renderQuizMenu,
  deneme: renderDenemeMenu,
  oyunlar: renderGamesMenu,
  istatistik: renderStats,
  resume: resumeActiveSession,
  review: startReviewQuiz
};

/* P1-5: Yanlış Defteri tekrar oturumu */
function startReviewQuiz() {
  let ids = dueQuestionIds();
  if (!ids.length) ids = wrongBookActiveIds(); // zamanı gelmemişse defterdeki aktif sorular
  const qs = ids.map(id => questionById[id]).filter(Boolean);
  if (!qs.length) { notify("Yanlış defterin boş. Önce birkaç soru çöz!", "info"); doNavigate("dashboard"); return; }
  runQuiz({ title: "Yanlış Defteri Tekrarı", subjectId: "karisik", questions: shuffle(qs), timed: false, showExplain: true, reviewMode: true });
}

let currentTimer = null;
let quizInProgress = false; // aktif (tamamlanmamış) test var mı
let lastSession = null;     // son tamamlanan oturum (inceleme ekranı için)

/* P1-10: Hash router — yalnızca ana ekranlar adreslenir */
const SCREEN_ROUTES = ["dashboard", "konu", "quiz", "deneme", "oyunlar", "istatistik"];
let currentScreen = "dashboard";
let suppressHash = false;
function routeFromHash() {
  const h = (location.hash || "").replace(/^#\/?/, "");
  return SCREEN_ROUTES.indexOf(h) >= 0 ? h : "dashboard";
}
function focusMainHeading() {
  const h = app.querySelector("h1");
  if (h) { h.setAttribute("tabindex", "-1"); try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); } }
}

function doNavigate(route, ...args) {
  if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
  quizInProgress = false;
  if (SCREEN_ROUTES.indexOf(route) >= 0) currentScreen = route;
  document.querySelectorAll(".nav-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.nav === route));
  const nm = document.getElementById("navMenu");
  if (nm) nm.classList.remove("open");
  const mt = document.getElementById("menuToggle");
  if (mt) mt.setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
  (routes[route] || renderDashboard)(...args);
  focusMainHeading();
}

function navigate(route, ...args) {
  // Aktif testten çıkışta uyar; oturum zaten kayıtlı olduğundan "Kaydet ve çık" güvenli
  if (quizInProgress && route !== "resume") {
    showExitGuard(() => { quizInProgress = false; navigate(route, ...args); });
    return;
  }
  // Ana ekranlar hash üzerinden (yenileme + geri/ileri); aksiyon rotaları doğrudan
  if (SCREEN_ROUTES.indexOf(route) >= 0 && !args.length) {
    const target = "#/" + route;
    if (location.hash !== target) { location.hash = target; return; } // hashchange render eder
  }
  doNavigate(route, ...args);
}

window.addEventListener("hashchange", () => {
  if (suppressHash) { suppressHash = false; return; }
  const route = routeFromHash();
  if (quizInProgress) {
    // Tarayıcı geri/ileri ile aktif testten çıkış koruması
    showExitGuard(
      () => { quizInProgress = false; doNavigate(route); },
      () => { suppressHash = true; location.hash = "#/" + currentScreen; } // "Testte kal" → adresi geri al
    );
    return;
  }
  doNavigate(route);
});

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
  const active = getActiveSession();
  const dueCount = dueQuestionIds().length;
  const todayActs = todayActivities().length;
  const todayQ = p.sessions.filter(s => TYTCore.toLocalDateKey(s.date) === todayKey()).reduce((a, s) => a + s.total, 0);
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

    ${active ? `
    <div class="card resume-card clickable" data-go="resume">
      <div><span class="icon" style="font-size:22px">⏸️</span> <b>Kaldığın yerden devam et</b>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13.5px">${active.title} · ${(active.answers || []).filter(a => a !== null).length}/${(active.questions || []).length} işaretli</p>
      </div>
      <span class="btn" style="pointer-events:none">Devam et →</span>
    </div>` : ""}

    <div class="card goal-card">
      <div class="goal-head">
        <div><span class="fire">🔥</span> <b>${streak} günlük</b> çalışma serisi</div>
        <div class="goal-count">Bugün: ${todayQ} / ${DAILY_GOAL} soru</div>
      </div>
      <div class="progress-track" style="margin:12px 0 0"><div class="progress-fill" style="width:${goalPct}%"></div></div>
      <p class="goal-msg">${goalPct >= 100 ? "Günlük hedefini tamamladın, harikasın! 🎉" : "Her gün biraz çalışarak seriyi büyüt."}${todayActs ? ` · Bugün ${todayActs} çalışma aktivitesi` : ""}</p>
    </div>

    ${dueCount > 0 ? `
    <div class="card resume-card clickable" data-go="review" style="border-color:rgba(251,191,36,.4);background:linear-gradient(135deg,rgba(251,191,36,.10),rgba(99,102,241,.06))">
      <div><span class="icon" style="font-size:22px">📒</span> <b>Bugün tekrar etmen gereken ${dueCount} soru</b>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13.5px">Yanlış defterindeki sorular aralıklı tekrarla kalıcı olur.</p>
      </div>
      <span class="btn" style="pointer-events:none">Tekrara başla →</span>
    </div>` : ""}

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
function unitCard(subId, u, p) {
  const done = p.readTopics.includes(u.id);
  return `<div class="card clickable" data-unit="${subId}|${u.id}">
      <h3>${u.name}</h3>
      <p>${u.summary}</p>
      <span class="badge ${done ? "done" : ""}">${done ? "✓ Okundu" : "Okunmadı"}</span>
    </div>`;
}

function renderKonuList() {
  const p = loadProgress();
  let html = `<h1 class="page-title">Konu Anlatımı</h1>
    <p class="page-sub">Bir ders seç, üniteye tıklayarak anlatımı oku. Sosyal ve Fen dersleri branşlara ayrılmıştır.</p>`;

  D.subjects.forEach(sub => {
    html += `<h2 class="section-title">${sub.icon} ${sub.name}</h2>`;
    if (sub.branches && sub.branches.length) {
      sub.branches.forEach(br => {
        const units = sub.units.filter(u => u.branch === br.id);
        if (!units.length) return;
        html += `<h3 class="branch-title">${br.icon} ${br.name}</h3><div class="grid grid-3">`;
        units.forEach(u => { html += unitCard(sub.id, u, p); });
        html += `</div>`;
      });
    } else {
      html += `<div class="grid grid-3">`;
      sub.units.forEach(u => { html += unitCard(sub.id, u, p); });
      html += `</div>`;
    }
  });

  app.innerHTML = html;
  app.querySelectorAll("[data-unit]").forEach(c =>
    c.onclick = () => { const [s, u] = c.dataset.unit.split("|"); renderKonuDetail(s, u); });
}

function renderKonuDetail(subId, unitId) {
  const unit = getUnit(subId, unitId);
  if (!unit) return renderKonuList();
  markTopicRead(unitId);
  recordActivity("topic_read", { unit: unitId });
  if (typeof awardXpEvent === "function") {
    const r = awardXpEvent("topicread-" + unitId, TYT_CONFIG.xp.topicRead, { streak: calcStreak(loadProgress().studyDays) });
    if (r.awardedXp) notify("+" + r.awardedXp + " XP · konu okundu", "success");
  }

  const hasQ = D.questions.some(q => q.subject === subId && q.unit === unitId);
  const hasPairs = (unit.pairs || []).length >= 2;

  app.innerHTML = `
    <button class="back-link" id="back">← Konulara dön</button>
    <div class="konu-body">${unit.content}</div>
    <div class="btn-row" style="margin-top:22px">
      ${hasQ ? `<button class="btn" id="solve">Bu Üniteden Soru Çöz</button>` : ""}
      ${hasPairs ? `<button class="btn secondary" id="game">Bu Üniteyle Oyna</button>` : ""}
      <button class="btn ghost" id="back2">Diğer Üniteler</button>
    </div>
  `;
  document.getElementById("back").onclick = renderKonuList;
  document.getElementById("back2").onclick = renderKonuList;
  if (hasQ) document.getElementById("solve").onclick = () => startQuizUnit(subId, unitId);
  if (hasPairs) document.getElementById("game").onclick = () => pickGameForUnit(subId, unitId);
}

function startQuizUnit(subId, unitId) {
  const pool = shuffle(D.questions.filter(q => q.subject === subId && q.unit === unitId));
  if (!pool.length) { notify("Bu ünitede henüz soru yok.", "info"); return; }
  runQuiz({ title: getUnit(subId, unitId).name + " — Soru Çöz", subjectId: subId, questions: pool, timed: false, showExplain: true });
}

/* ============================================================
   QUIZ (Soru Çöz)
   ============================================================ */
function renderQuizMenu() {
  // Her ders/branş ayrı kart — Sosyal/Fen şemsiyesi yok
  const items = [];
  D.subjects.forEach(sub => {
    if (sub.branches && sub.branches.length) {
      sub.branches.forEach(br => {
        const count = D.questions.filter(q => q.subject === sub.id && sub.units.some(u => u.id === q.unit && u.branch === br.id)).length;
        if (count) items.push({ subId: sub.id, branchId: br.id, name: br.name, icon: br.icon, count });
      });
    } else {
      items.push({ subId: sub.id, branchId: "", name: sub.name, icon: sub.icon, count: D.questions.filter(q => q.subject === sub.id).length });
    }
  });

  let html = `<h1 class="page-title">Soru Çöz</h1>
    <p class="page-sub">Bir ders seç; ardından ünite, soru sayısı ve modu belirle.</p>
    <div class="grid grid-3">`;
  items.forEach(it => {
    html += `
      <div class="card clickable" data-quiz="${it.subId}" data-branch="${it.branchId}">
        <span class="icon">${it.icon}</span>
        <h3>${it.name}</h3>
        <p>${it.count} soru hazır</p>
        <div class="meta">Çözmeye başla →</div>
      </div>`;
  });
  html += `</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-quiz]").forEach(c =>
    c.onclick = () => renderQuizConfig(c.dataset.quiz, c.dataset.branch || null));
}

/* P1-2: Quiz oluşturma ayar ekranı (branş-farkında) */
function renderQuizConfig(subId, branchId) {
  const sub = getSubject(subId);
  const st = getQuizSettings();
  let units = sub.units.filter(u => D.questions.some(q => q.subject === subId && q.unit === u.id));
  if (branchId) units = units.filter(u => u.branch === branchId);
  const allowedUnits = units.map(u => u.id);
  const br = branchId ? (sub.branches || []).find(b => b.id === branchId) : null;
  const dispName = br ? br.name : sub.name;
  const dispIcon = br ? br.icon : sub.icon;
  const unitOpts = `<option value="all">Tüm üniteler</option>` +
    units.map(u => `<option value="${u.id}" ${st.unit === u.id ? "selected" : ""}>${u.name}</option>`).join("");
  const countOpts = [5, 10, 20, 9999].map(n => `<option value="${n}" ${st.count === n ? "selected" : ""}>${n === 9999 ? "Tümü" : n + " soru"}</option>`).join("");
  const modes = [["all", "Tüm sorular"], ["unsolved", "Çözülmemiş sorular"], ["wrong", "Daha önce yanlış yapılanlar"], ["mixed", "Karışık tekrar"]];

  app.innerHTML = `
    <button class="back-link" id="back">← Ders seç</button>
    <h1 class="page-title">${dispIcon} ${dispName} · Test Oluştur</h1>
    <div class="card config-card">
      <label class="cfg-row" for="cfgUnit"><span>Ünite</span><select id="cfgUnit">${unitOpts}</select></label>
      <label class="cfg-row" for="cfgCount"><span>Soru sayısı</span><select id="cfgCount">${countOpts}</select></label>
      <label class="cfg-row" for="cfgMode"><span>Mod</span><select id="cfgMode">${modes.map(([v, l]) => `<option value="${v}" ${st.mode === v ? "selected" : ""}>${l}</option>`).join("")}</select></label>
      <label class="cfg-row check" for="cfgTimed"><input type="checkbox" id="cfgTimed" ${st.timed ? "checked" : ""}><span>Süreli (yaklaşık 1 dk/soru)</span></label>
      <div id="cfgInfo" class="cfg-info" aria-live="polite"></div>
      <div class="btn-row"><button class="btn" id="start">Teste Başla</button></div>
    </div>
  `;
  document.getElementById("back").onclick = renderQuizMenu;
  const upd = () => {
    const unit = document.getElementById("cfgUnit").value;
    const mode = document.getElementById("cfgMode").value;
    const n = buildQuizPool(subId, unit, mode, allowedUnits).length;
    document.getElementById("cfgInfo").textContent = n ? `Bu seçimde uygun ${n} soru var.` : "Bu seçimde uygun soru yok.";
  };
  document.getElementById("cfgUnit").onchange = upd;
  document.getElementById("cfgMode").onchange = upd;
  upd();
  document.getElementById("start").onclick = () => {
    const unit = document.getElementById("cfgUnit").value;
    const count = parseInt(document.getElementById("cfgCount").value, 10);
    const mode = document.getElementById("cfgMode").value;
    const timed = document.getElementById("cfgTimed").checked;
    saveQuizSettings({ unit, count, mode, timed });
    let pool = shuffle(buildQuizPool(subId, unit, mode, allowedUnits));
    if (!pool.length) {
      notify(mode === "wrong" ? "Bu seçimde yanlış soru yok — tebrikler!" :
        mode === "unsolved" ? "Bu seçimde çözülmemiş soru kalmadı." : "Bu seçimde soru yok.", "info");
      return;
    }
    const want = count === 9999 ? pool.length : Math.min(count, pool.length);
    if (count !== 9999 && pool.length < count) notify(`${count} istendi; havuzda ${pool.length} soru var. ${pool.length} soruyla başlıyor.`, "info");
    pool = pool.slice(0, want);
    runQuiz({
      title: dispName + (unit !== "all" ? " · " + getUnit(subId, unit).name : ""),
      subjectId: subId, questions: pool,
      timed, durationSec: timed ? pool.length * 60 : 0,
      showExplain: !timed
    });
  };
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

/* Ortak quiz motoru — soru çöz + deneme; aktif oturum kaydı ve devam desteği */
function runQuiz(cfg) {
  let idx = cfg._resumeIdx || 0;
  const answers = cfg._resumeAnswers ? cfg._resumeAnswers.slice() : new Array(cfg.questions.length).fill(null);
  let finished = false;
  quizInProgress = true;
  cfg._startedAt = cfg._startedAt || new Date().toISOString();
  const durations = cfg._resumeDurations ? cfg._resumeDurations.slice() : new Array(cfg.questions.length).fill(0);
  let lastShownAt = Date.now();

  // Süre timestamp tabanlı: sayfa kapansa bile tutarlı (politika: süre akmaya devam eder)
  let deadline = cfg.timed ? (cfg._resumeDeadline || Date.now() + cfg.durationSec * 1000) : null;
  function remainingSec() { return deadline ? Math.max(0, Math.ceil((deadline - Date.now()) / 1000)) : 0; }
  function fmt(sec) { return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0"); }

  function saveSnap() {
    setActiveSession({
      type: cfg.timed ? "deneme" : "quiz", title: cfg.title, subjectId: cfg.subjectId || "karisik",
      timed: !!cfg.timed, showExplain: !!cfg.showExplain, durationSec: cfg.durationSec || 0,
      deadline, idx, answers, questions: cfg.questions, startedAt: cfg._startedAt
    });
  }
  saveSnap();

  function renderQuestion() {
    const q = cfg.questions[idx];
    const sub = getSubject(q.subject);
    const pct = Math.min(100, Math.max(0, Math.round((idx + 1) / cfg.questions.length * 100)));

    app.innerHTML = `
      <div class="quiz-head">
        <div>
          <h1 class="page-title" style="font-size:22px;margin:0">${cfg.title}</h1>
          <p class="page-sub" style="margin:4px 0 0">Soru ${idx + 1} / ${cfg.questions.length}</p>
        </div>
        <div style="display:flex;gap:10px">
          ${cfg.timed ? `<span class="pill timer" id="timer">${fmt(remainingSec())}</span>` : ""}
          <span class="pill">${sub.icon} ${sub.name}</span>
        </div>
      </div>
      <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Test ilerlemesi: soru ${idx + 1} / ${cfg.questions.length}">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>

      <div class="question-card">
        <div class="q-subject">${sub.name}</div>
        <div class="q-text">${q.q}</div>
        <div class="options" id="options"></div>
        <div id="explainBox" aria-live="polite"></div>
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

    if (cfg.showExplain && answers[idx] !== null) revealAnswer();

    document.getElementById("prev").onclick = () => { if (idx > 0) { idx--; saveSnap(); renderQuestion(); } };
    document.getElementById("next").onclick = () => {
      if (idx === cfg.questions.length - 1) finish();
      else { idx++; saveSnap(); renderQuestion(); }
    };
    lastShownAt = Date.now(); // soru süresi ölçümü için
  }

  function selectAnswer(i) {
    answers[idx] = i;
    durations[idx] = Math.round((Date.now() - lastShownAt) / 1000); // soru başına süre
    saveSnap();
    if (cfg.showExplain) renderQuestion();
    else document.querySelectorAll(".option").forEach((o, k) => o.classList.toggle("selected", k === i));
  }

  function revealAnswer() {
    const q = cfg.questions[idx];
    const opts = document.querySelectorAll(".option");
    opts.forEach((o, k) => {
      o.disabled = true;
      if (k === q.answer) o.classList.add("correct");
      else if (k === answers[idx]) o.classList.add("wrong");
    });
    const right = answers[idx] === q.answer;
    document.getElementById("explainBox").innerHTML =
      `<div class="explain"><b>${right ? "✓ Doğru!" : "✗ Yanlış."}</b> ${q.explain}</div>`;
  }

  // Süre — timestamp tabanlı tek interval
  if (cfg.timed) {
    if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
    currentTimer = setInterval(() => {
      const rs = remainingSec();
      const t = document.getElementById("timer");
      if (t) { t.textContent = fmt(rs); t.classList.toggle("warn", rs <= 60); }
      if (rs <= 0) finish();
    }, 1000);
  }

  function finish() {
    if (finished) return;               // çift sonuçlandırmayı önle
    finished = true;
    quizInProgress = false;
    if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
    clearActiveSession();               // tamamlanan oturum aktiften çıkar

    let correct = 0, wrong = 0, blank = 0;
    const answerRecords = cfg.questions.map((q, i) => {
      const sel = answers[i];
      const isBlank = sel === null || sel === undefined;
      const isCorrect = !isBlank && sel === q.answer;
      if (isBlank) blank++; else if (isCorrect) correct++; else wrong++;
      return { questionId: q.id, selectedAnswer: isBlank ? null : sel, correctAnswer: q.answer, isCorrect, isBlank, durationSeconds: durations[i] || 0 };
    });
    const net = calcNet(correct, wrong);

    // Yanlış Defteri: cevaplanan her soruyu işle (boşları atla)
    let wb = getWrongBook();
    answerRecords.forEach(a => { if (!a.isBlank) wb = TYTCore.updateWrongBook(wb, a.questionId, a.isCorrect, reviewOpts()); });
    saveWrongBook(wb);

    const session = {
      sessionId: "s-" + Date.now(),
      date: new Date().toISOString(),
      startedAt: cfg._startedAt,
      completedAt: new Date().toISOString(),
      status: "completed",
      type: cfg.reviewMode ? "review" : (cfg.timed ? "deneme" : "quiz"),
      subject: cfg.subjectId || "karisik",
      config: { subjectId: cfg.subjectId || "karisik", timed: !!cfg.timed, total: cfg.questions.length },
      total: cfg.questions.length,
      correct, wrong, blank,
      net: Number(net.toFixed(2)),       // sayısal saklanır
      answers: answerRecords,
      schemaVersion: 1
    };
    recordSession(session);
    recordActivity(cfg.reviewMode ? "review_completed" : (cfg.timed ? "deneme_completed" : "quiz_completed"), { subject: cfg.subjectId || "karisik", total: cfg.questions.length, correct });
    lastSession = session;

    // P1-9: öğrenmeye bağlı XP (idempotent — eventId = sessionId)
    if (typeof awardXpEvent === "function") {
      const all = loadProgress();
      const ctx = {
        totalSolved: all.sessions.reduce((x, ss) => x + (ss.total || 0), 0),
        streak: calcStreak(all.studyDays),
        denemeCount: all.sessions.filter(ss => ss.type === "deneme").length,
        masteredCount: Object.values(all.wrongBook || {}).filter(e => e && e.mastered).length
      };
      const xpRes = awardXpEvent(session.sessionId, correct * TYT_CONFIG.xp.perCorrect + TYT_CONFIG.xp.quizBonus, ctx);
      const todayQ = all.sessions.filter(ss => TYTCore.toLocalDateKey(ss.date) === todayKey()).reduce((x, ss) => x + (ss.total || 0), 0);
      if (todayQ >= DAILY_GOAL) awardXpEvent("goal-" + todayKey(), TYT_CONFIG.xp.dailyGoal, ctx);
      if (xpRes.awardedXp) notify("+" + xpRes.awardedXp + " XP", "success");
      xpRes.newBadges.forEach(b => notify("🏅 Yeni rozet: " + b.name, "success"));
    }

    renderResult({
      title: cfg.title, total: cfg.questions.length, correct, wrong, blank, net, subjectId: cfg.subjectId, session,
      retry: () => runQuiz({ title: cfg.title, subjectId: cfg.subjectId, questions: shuffle(cfg.questions), timed: cfg.timed, showExplain: cfg.showExplain, durationSec: cfg.durationSec, reviewMode: cfg.reviewMode })
    });
  }

  renderQuestion();
}

/* Yarım kalan oturumu kaldığı yerden başlat */
function resumeActiveSession() {
  const s = getActiveSession();
  if (!s || !Array.isArray(s.questions) || !s.questions.length) { clearActiveSession(); navigate("dashboard"); return; }
  runQuiz({
    title: s.title, subjectId: s.subjectId, questions: s.questions,
    timed: !!s.timed, showExplain: !!s.showExplain, durationSec: s.durationSec || 0,
    _resumeIdx: Math.min(s.idx || 0, s.questions.length - 1),
    _resumeAnswers: Array.isArray(s.answers) ? s.answers : null,
    _resumeDeadline: s.timed ? s.deadline : null,
    _startedAt: s.startedAt
  });
}

/* Aktif testten çıkış koruması (modal) */
function showExitGuard(onLeave, onStay) {
  const overlay = el(`<div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="exitTitle">
    <div class="modal">
      <h3 id="exitTitle">Testten çıkılsın mı?</h3>
      <p>İlerlemen kaydedildi. Daha sonra “Kaldığın yerden devam et” ile geri dönebilirsin.</p>
      <div class="btn-row" style="justify-content:flex-end;margin-top:8px">
        <button class="btn secondary" id="stay">Testte kal</button>
        <button class="btn" id="leave">Kaydet ve çık</button>
      </div>
    </div></div>`);
  document.body.appendChild(overlay);
  const stay = () => { overlay.remove(); if (typeof onStay === "function") onStay(); };
  overlay.addEventListener("click", e => { if (e.target === overlay) stay(); });
  overlay.querySelector("#stay").onclick = stay;
  overlay.querySelector("#leave").onclick = () => { overlay.remove(); onLeave(); };
  overlay.querySelector("#leave").focus();
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
        ${r.session ? `<button class="btn" id="review">Soruları İncele</button>` : ""}
        <button class="btn secondary" id="retry">Tekrar Çöz</button>
        <button class="btn secondary" id="stats">İstatistiklerim</button>
        <button class="btn ghost" id="home">Ana Sayfa</button>
      </div>
    </div>
  `;
  if (r.session) document.getElementById("review").onclick = () => renderReview(r.session, "all");
  document.getElementById("retry").onclick = r.retry;
  document.getElementById("stats").onclick = () => navigate("istatistik");
  document.getElementById("home").onclick = () => navigate("dashboard");
}

/* P1-4: Test sonuç inceleme ekranı */
function renderReview(session, filter) {
  filter = filter || "all";
  const wb = getWrongBook();
  const A = session.answers || [];
  const match = a => filter === "wrong" ? (!a.isBlank && !a.isCorrect) : filter === "blank" ? a.isBlank : filter === "correct" ? a.isCorrect : true;
  const recs = A.filter(match);
  const counts = {
    all: A.length,
    wrong: A.filter(a => !a.isBlank && !a.isCorrect).length,
    blank: A.filter(a => a.isBlank).length,
    correct: A.filter(a => a.isCorrect).length
  };
  const fbtn = (k, l) => `<button class="filter-btn ${filter === k ? "active" : ""}" data-filter="${k}">${l} (${counts[k]})</button>`;
  const letters = ["A", "B", "C", "D", "E"];

  const cards = recs.map(a => {
    const q = questionById[a.questionId];
    if (!q) return "";
    const inBook = !!wb[a.questionId];
    const opts = q.options.map((opt, k) => {
      let cls = "", tag = "";
      if (k === a.correctAnswer) { cls = "correct"; tag = ` <span class="ans-tag ok">✓ Doğru cevap</span>`; }
      if (!a.isBlank && k === a.selectedAnswer && k !== a.correctAnswer) { cls = "wrong"; tag = ` <span class="ans-tag no">✗ Senin cevabın</span>`; }
      else if (!a.isBlank && k === a.selectedAnswer && k === a.correctAnswer) { tag += ` <span class="ans-tag ok">(senin cevabın)</span>`; }
      return `<div class="rev-opt ${cls}"><span class="key">${letters[k]}</span><span>${opt}</span>${tag}</div>`;
    }).join("");
    const sub = getSubject(q.subject), unit = getUnit(q.subject, q.unit);
    const status = a.isBlank ? `<span class="badge">○ Boş</span>` : (a.isCorrect ? `<span class="badge done">✓ Doğru</span>` : `<span class="badge badge-wrong">✗ Yanlış</span>`);
    return `<div class="card rev-card">
      <div class="rev-head"><div class="q-subject">${sub ? sub.name : q.subject}${unit ? " · " + unit.name : ""}</div>${status}</div>
      <div class="q-text" style="font-size:16px;margin:10px 0 14px">${q.q}</div>
      <div class="rev-opts">${opts}</div>
      ${(q.explain || q.explanation) ? `<div class="explain">${q.explain || q.explanation}</div>` : ""}
      <div class="btn-row" style="margin-top:14px">
        <button class="btn secondary book-btn" data-q="${a.questionId}">${inBook ? "★ Defterden çıkar" : "☆ Yanlış defterine ekle"}</button>
        <button class="btn ghost" data-retry="${a.questionId}">Tekrar çöz</button>
      </div>
    </div>`;
  }).join("") || emptyState("🔍", "Bu filtrede soru yok.");

  app.innerHTML = `
    <button class="back-link" id="back">← Ana sayfa</button>
    <h1 class="page-title">Soruları İncele</h1>
    <p class="page-sub">Doğru ${counts.correct} · Yanlış ${counts.wrong} · Boş ${counts.blank}</p>
    <div class="filter-bar">${fbtn("all", "Tümü")}${fbtn("wrong", "Yanlışlar")}${fbtn("blank", "Boşlar")}${fbtn("correct", "Doğrular")}</div>
    ${cards}
  `;
  document.getElementById("back").onclick = () => navigate("dashboard");
  app.querySelectorAll("[data-filter]").forEach(b => b.onclick = () => renderReview(session, b.dataset.filter));
  app.querySelectorAll(".book-btn").forEach(b => b.onclick = () => { const added = toggleWrongBook(b.dataset.q); notify(added ? "Yanlış defterine eklendi." : "Defterden çıkarıldı.", "success"); renderReview(session, filter); });
  app.querySelectorAll("[data-retry]").forEach(b => b.onclick = () => startQuizSingle(b.dataset.retry));
}

function startQuizSingle(qid) {
  const q = questionById[qid];
  if (!q) return;
  runQuiz({ title: "Tekrar Çöz", subjectId: q.subject, questions: [q], timed: false, showExplain: true });
}

/* ============================================================
   DENEME SINAVI (süreli, karışık)
   ============================================================ */
function renderDenemeMenu() {
  const dist = TYT_CONFIG.tyt; // {turkce:40, matematik:40, sosyal:20, fen:20, durationMin:165}
  const avail = { turkce: subjectQ("turkce").length, matematik: subjectQ("matematik").length, sosyal: subjectQ("sosyal").length, fen: subjectQ("fen").length };
  const fullReady = avail.turkce >= dist.turkce && avail.matematik >= dist.matematik && avail.sosyal >= dist.sosyal && avail.fen >= dist.fen;
  const miniN = Math.min(20, D.questions.length);

  app.innerHTML = `
    <h1 class="page-title">Deneme Sınavı</h1>
    <p class="page-sub">Gerçek sınav deneyimi için süreli, karışık deneme. Soru havuzu yapay olarak çoğaltılmaz.</p>
    <div class="grid grid-2">
      <div class="card clickable" data-deneme="mini">
        <span class="icon">⚡</span><h3>Mini TYT Denemesi</h3>
        <p>${miniN} karışık soru · ${miniN} dakika</p>
        <div class="meta">Başla →</div>
      </div>
      <div class="card ${fullReady ? "clickable" : "disabled-card"}" ${fullReady ? 'data-deneme="full"' : ""}>
        <span class="icon">🎯</span><h3>Tam TYT Denemesi</h3>
        <p>Türkçe 40 · Matematik 40 · Sosyal 20 · Fen 20 · ${dist.durationMin} dk</p>
        <div class="meta">${fullReady ? "Başla →" : "Havuz yetersiz"}</div>
      </div>
    </div>
    ${fullReady ? "" : `<div class="card" style="margin-top:14px">
      <h3>ℹ️ Tam TYT için soru havuzu henüz yeterli değil</h3>
      <p>Mevcut: Türkçe ${avail.turkce}/40 · Matematik ${avail.matematik}/40 · Sosyal ${avail.sosyal}/20 · Fen ${avail.fen}/20. Havuz büyüdükçe Tam TYT modu otomatik açılır; şimdilik Mini TYT ile pratik yapabilirsin.</p>
    </div>`}
    <div class="card" style="margin-top:14px">
      <h3>📌 Net nasıl hesaplanır?</h3>
      <p>TYT'de <b>4 yanlış 1 doğruyu götürür</b>. Net = Doğru − (Yanlış / 4).</p>
    </div>
  `;
  app.querySelectorAll("[data-deneme]").forEach(c =>
    c.onclick = () => startDeneme(c.dataset.deneme));
}

function startDeneme(mode) {
  if (mode === "full") {
    const dist = TYT_CONFIG.tyt;
    let pool = [];
    ["turkce", "matematik", "sosyal", "fen"].forEach(s => { pool = pool.concat(shuffle(subjectQ(s)).slice(0, dist[s])); });
    runQuiz({ title: "Tam TYT Denemesi", subjectId: "karisik", questions: shuffle(pool), timed: true, durationSec: dist.durationMin * 60, showExplain: false });
  } else {
    const miniN = Math.min(20, D.questions.length);
    const pool = shuffle(D.questions).slice(0, miniN);
    runQuiz({ title: "Mini TYT Denemesi", subjectId: "karisik", questions: pool, timed: true, durationSec: miniN * 60, showExplain: false });
  }
}

/* ============================================================
   İSTATİSTİK
   ============================================================ */
function renderStats(range) {
  range = range || "all";
  const p = loadProgress();
  if (!p.sessions.length) {
    app.innerHTML = `<h1 class="page-title">İstatistik</h1>` +
      emptyState("📊", "Henüz veri yok. Birkaç soru çözdükten sonra gelişimini burada göreceksin.",
        `<div class="btn-row" style="justify-content:center;margin-top:16px"><button class="btn" data-go="quiz">Soru Çözmeye Başla</button></div>`);
    bindGo();
    return;
  }

  const now = Date.now();
  const rangeMs = range === "7" ? 7 * 86400000 : range === "30" ? 30 * 86400000 : Infinity;
  const sessions = p.sessions.filter(s => {
    const t = new Date(s.completedAt || s.date).getTime();
    return isFinite(t) ? (now - t) <= rangeMs : true;
  });

  // Toplamlar: answers varsa cevaplardan (karışık denemeyi derslere dağıtır), yoksa özetten
  let totalQ = 0, totalC = 0, durSum = 0, durN = 0;
  const bySubject = {}, byUnit = {};
  sessions.forEach(s => {
    if (Array.isArray(s.answers) && s.answers.length) {
      s.answers.forEach(a => {
        totalQ++;
        if (!a.isBlank && a.isCorrect) totalC++;
        if (typeof a.durationSeconds === "number" && a.durationSeconds > 0) { durSum += a.durationSeconds; durN++; }
        const q = questionById[a.questionId];
        if (q) {
          bySubject[q.subject] = bySubject[q.subject] || { c: 0, t: 0 };
          bySubject[q.subject].t++; if (a.isCorrect) bySubject[q.subject].c++;
          if (q.unit) { byUnit[q.unit] = byUnit[q.unit] || { c: 0, t: 0, subject: q.subject }; byUnit[q.unit].t++; if (a.isCorrect) byUnit[q.unit].c++; }
        }
      });
    } else {
      totalQ += s.total || 0; totalC += s.correct || 0;
      if (s.subject && s.subject !== "karisik") { bySubject[s.subject] = bySubject[s.subject] || { c: 0, t: 0 }; bySubject[s.subject].c += s.correct || 0; bySubject[s.subject].t += s.total || 0; }
    }
  });
  const successRate = totalQ ? Math.round(totalC / totalQ * 100) : 0;
  const avgDur = durN ? Math.round(durSum / durN) : 0;

  // En iyi net — tür ve soru sayısına göre AYRI (farklı ölçekler kıyaslanmaz)
  const bestByCat = {};
  sessions.forEach(s => {
    const cat = (s.type || "quiz") + " · " + (s.total || 0) + " soru";
    if (bestByCat[cat] == null || (s.net || 0) > bestByCat[cat]) bestByCat[cat] = s.net || 0;
  });

  // Net % trendi (karşılaştırılabilir) — son 10 oturum
  const recent = sessions.slice(-10);
  const netPct = s => s.total ? Math.max(0, Math.round((s.net || 0) / s.total * 100)) : 0;
  const bars = recent.map((s, i) => `<div class="bar-col"><div class="bar-val">%${netPct(s)}</div><div class="bar" style="height:${netPct(s)}%"></div><div class="bar-label">${i + 1}</div></div>`).join("") || `<p class="page-sub">Bu aralıkta veri yok.</p>`;
  const tableRows = recent.map((s, i) => `<tr><td>${i + 1}</td><td>${s.type || "quiz"}</td><td>${s.total || 0}</td><td>${(s.net || 0).toFixed(2)}</td><td>%${netPct(s)}</td></tr>`).join("");

  const subjCards = Object.entries(bySubject).map(([id, v]) => {
    const sub = getSubject(id), rate = v.t ? Math.round(v.c / v.t * 100) : 0;
    return `<div class="card"><h3>${sub ? sub.icon + " " + sub.name : id}</h3>
      <div class="progress-track" style="margin:12px 0 8px"><div class="progress-fill" style="width:${rate}%"></div></div>
      <p>${v.c}/${v.t} doğru · %${rate} başarı</p></div>`;
  }).join("") || `<p class="page-sub">Ders bazlı veri için soru çöz.</p>`;

  const weak = Object.entries(byUnit).filter(([, v]) => v.t >= 2).map(([id, v]) => ({ id, rate: v.c / v.t, c: v.c, t: v.t, subject: v.subject })).sort((a, b) => a.rate - b.rate).slice(0, 3);
  const weakHtml = weak.length ? `<h2 class="section-title">En çok zorlandığın üniteler</h2><div class="grid grid-3">${weak.map(w => { const u = getUnit(w.subject, w.id); return `<div class="card"><h3>${u ? u.name : w.id}</h3><p>%${Math.round(w.rate * 100)} başarı · ${w.c}/${w.t} doğru</p></div>`; }).join("")}</div>` : "";

  const bestHtml = Object.entries(bestByCat).map(([cat, net]) => `<div class="card stat"><div class="num">${net.toFixed(2)}</div><div class="label">En iyi net · ${cat}</div></div>`).join("");
  const fbtn = (k, l) => `<button class="filter-btn ${range === k ? "active" : ""}" data-range="${k}">${l}</button>`;

  app.innerHTML = `
    <h1 class="page-title">İstatistik</h1>
    <p class="page-sub">${sessions.length} oturum (seçili aralık).</p>
    <div class="filter-bar">${fbtn("7", "Son 7 gün")}${fbtn("30", "Son 30 gün")}${fbtn("all", "Tüm zamanlar")}</div>

    <div class="grid grid-4">
      <div class="card stat"><div class="num">${sessions.length}</div><div class="label">Oturum</div></div>
      <div class="card stat"><div class="num">${totalQ}</div><div class="label">Çözülen Soru</div></div>
      <div class="card stat"><div class="num">%${successRate}</div><div class="label">Başarı</div></div>
      <div class="card stat"><div class="num">${avgDur ? avgDur + " sn" : "—"}</div><div class="label">Ort. Süre/Soru</div></div>
    </div>

    <h2 class="section-title">Net Gelişimi (net %, son ${recent.length})</h2>
    <div class="card">
      <div class="bars">${bars}</div>
      <details class="table-alt"><summary>Tablo olarak gör</summary>
        <table class="stat-table"><thead><tr><th>#</th><th>Tür</th><th>Soru</th><th>Net</th><th>Net %</th></tr></thead><tbody>${tableRows}</tbody></table>
      </details>
    </div>

    ${bestHtml ? `<h2 class="section-title">En iyi netler <span style="font-weight:400;color:var(--muted);font-size:13px">(tür/soru sayısına göre ayrı)</span></h2><div class="grid grid-3">${bestHtml}</div>` : ""}

    <h2 class="section-title">Ders Bazlı Başarı</h2>
    <div class="grid grid-3">${subjCards}</div>

    ${weakHtml}

    <div class="btn-row" style="margin-top:24px">
      <button class="btn danger" id="reset">İlerlemeyi Sıfırla</button>
    </div>
  `;
  app.querySelectorAll("[data-range]").forEach(b => b.onclick = () => renderStats(b.dataset.range));
  document.getElementById("reset").onclick = () => {
    if (!confirm("Tüm ilerlemen silinecek: çözülen sorular, seri, XP, seviye, rozetler ve yüksek skorlar. Bu işlem geri alınamaz.\n\nDevam etmek istiyor musun?")) return;
    if (!confirm("Son onay: Tüm veriler kalıcı olarak silinsin mi?")) return;
    const ok = resetAllData();
    notify(ok ? "Tüm ilerleme sıfırlandı." : "Sıfırlama sırasında bir sorun oluştu.", ok ? "success" : "error");
    navigate("dashboard");
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
menuToggle.setAttribute("aria-controls", "navMenu");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.onclick = () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
};

/* P1-11: Klavye — kart/seçenekleri Enter/Space ile çalıştır; Escape ile menü/modal kapat */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (navMenu.classList.contains("open")) { navMenu.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }
    const ov = document.querySelector(".modal-overlay"); if (ov) { const stay = ov.querySelector("#stay"); if (stay) stay.click(); }
    return;
  }
  if ((e.key === "Enter" || e.key === " ") && document.activeElement &&
    document.activeElement.matches('.clickable,[data-go],[data-unit],[data-sub],[data-game],[data-type],[data-deneme],[data-quiz],[data-topic],[data-diff],[data-filter],[data-nav]')) {
    e.preventDefault(); document.activeElement.click();
  }
});

/* Mobil menü dışına tıklayınca kapat */
document.addEventListener("click", e => {
  if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && e.target !== menuToggle) {
    navMenu.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
  }
});

/* P1-11: Render edilen tıklanabilir öğeleri klavyeyle odaklanabilir/erişilebilir yap */
new MutationObserver(() => {
  app.querySelectorAll('.clickable,[data-go],[data-unit],[data-sub],[data-game],[data-type],[data-deneme]').forEach(elx => {
    if (!elx.hasAttribute("tabindex")) elx.setAttribute("tabindex", "0");
    if (!elx.hasAttribute("role")) elx.setAttribute("role", "button");
  });
}).observe(app, { childList: true, subtree: true });

/* Geliştirme: içerik doğrulama — konsola raporla, yalnızca gerçek hata varsa kullanıcıyı uyar */
(function validateContent() {
  try {
    const r = TYTCore.validateQuestions(D.questions);
    if (r.warnings.length) console.warn("İçerik uyarıları:", r.warnings);
    if (r.errors.length) {
      console.error("İçerik HATALARI:", r.errors);
      notify(r.errors.length + " içerik hatası bulundu (konsolu kontrol edin).", "error");
    } else {
      console.info("İçerik doğrulama OK: " + D.questions.length + " soru, kritik hata yok.");
    }
  } catch (e) { console.warn("Validator çalıştırılamadı:", e); }
})();

/* Başlat — hash router (yenilemede ekran korunur) */
if (!location.hash) { suppressHash = true; location.hash = "#/dashboard"; }
doNavigate(routeFromHash());
/* v1.3 — P1 */
