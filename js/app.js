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
  closeSidebar();
  window.scrollTo(0, 0);
  (routes[route] || renderDashboard)(...args);
  updateSidebarFoot();
  focusMainHeading();
}

/* Sidebar (mobil çekmece) ---------------------------------- */
function openSidebar() {
  const sb = document.getElementById("sidebar"), sc = document.getElementById("sidebarScrim"), mt = document.getElementById("menuToggle");
  if (sb) sb.classList.add("open");
  if (sc) sc.hidden = false;
  if (mt) mt.setAttribute("aria-expanded", "true");
}
function closeSidebar() {
  const sb = document.getElementById("sidebar"), sc = document.getElementById("sidebarScrim"), mt = document.getElementById("menuToggle");
  if (sb) sb.classList.remove("open");
  if (sc) sc.hidden = true;
  if (mt) mt.setAttribute("aria-expanded", "false");
}

/* Sidebar alt kartı: seviye + günlük seri */
function updateSidebarFoot() {
  const el2 = document.getElementById("sidebarFoot");
  if (!el2) return;
  const gp = gameProfile();
  const streak = calcStreak(loadProgress().studyDays);
  el2.innerHTML = `
    <div class="side-card">
      <div class="side-level">Sv. ${gp.level}</div>
      <div class="side-meta"><b>${gp.title}</b><span>${gp.xp} XP</span></div>
      <div class="side-xp"><span style="width:${gp.pct}%"></span></div>
    </div>
    <div class="side-streak"><span class="flame">🔥</span> <b>${streak}</b> günlük seri</div>`;
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

/* Sade, tek görsel dilde çizgi ikonlar (büyük emoji yok) */
function svgIcon(name) {
  const paths = {
    soru: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    deneme: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    konu: '<path d="M4 19V6a2 2 0 0 1 2-2h12v15H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h12"/>',
    yanlis: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
    flame: '<path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 2-4 0 1 1 2 2 2 1-2 0-4 0-6z"/>',
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'
  };
  return `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;
}

/* Ders performansı — cevap kayıtlarından (karışık deneme dahil) */
function subjectPerf() {
  const by = {};
  loadProgress().sessions.forEach(s => {
    if (Array.isArray(s.answers) && s.answers.length) {
      s.answers.forEach(a => {
        const q = questionById[a.questionId]; if (!q) return;
        by[q.subject] = by[q.subject] || { c: 0, t: 0 };
        by[q.subject].t++; if (a.isCorrect) by[q.subject].c++;
      });
    } else if (s.subject && s.subject !== "karisik") {
      by[s.subject] = by[s.subject] || { c: 0, t: 0 };
      by[s.subject].c += s.correct || 0; by[s.subject].t += s.total || 0;
    }
  });
  return by;
}

/* Son 7 günün günlük çözülen soru sayısı */
function weeklyData() {
  const sessions = loadProgress().sessions;
  const names = ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"];
  const today = new Date(); today.setHours(12, 0, 0, 0);
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(today.getDate() - i);
    const key = TYTCore.getLocalDateKey(d);
    const count = sessions.filter(s => TYTCore.toLocalDateKey(s.date) === key).reduce((a, s) => a + (s.total || 0), 0);
    out.push({ key, count, name: names[d.getDay()], full: d.toLocaleDateString("tr-TR", { day: "numeric", month: "long" }) });
  }
  return out;
}

function renderDashboard() {
  const p = loadProgress();
  const active = getActiveSession();
  const due = dueQuestionIds().length;
  const streak = calcStreak(p.studyDays);
  const todayQ = p.sessions.filter(s => TYTCore.toLocalDateKey(s.date) === todayKey()).reduce((a, s) => a + (s.total || 0), 0);
  const goal = DAILY_GOAL, done = todayQ, remaining = Math.max(0, goal - done);
  const goalPct = Math.min(100, Math.round(done / goal * 100));
  const ringOff = Math.round(289 * (1 - goalPct / 100)); // çevre ≈ 2π·46

  const examDate = new Date(TYT_CONFIG.examDate + "T00:00:00");
  const daysLeft = Math.ceil((examDate - new Date()) / 86400000);
  const examFmt = examDate.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  const bigNum = daysLeft > 0 ? daysLeft : daysLeft === 0 ? "🎯" : "—";
  const bigLbl = daysLeft > 0 ? "gün kaldı" : daysLeft === 0 ? "bugün!" : "geçti";
  const tcSub = daysLeft >= 0 ? `${examFmt} · YKS 1. oturum` : "Sınav tarihini güncelle";

  // Akıllı tek CTA — kaldığı test önce, sonra tekrar, sonra yeni
  let ctaLabel, ctaGo, ctaSub;
  if (active) {
    ctaLabel = "Çalışmaya Devam Et"; ctaGo = "resume";
    ctaSub = `Kaldığın test: ${active.title} · ${(active.answers || []).filter(a => a !== null && a !== undefined).length}/${(active.questions || []).length} işaretli`;
  } else if (due > 0) {
    ctaLabel = "Tekrara Başla"; ctaGo = "review"; ctaSub = `${due} soru tekrar zamanı (yanlış defteri)`;
  } else {
    ctaLabel = "Çalışmaya Başla"; ctaGo = "quiz";
    ctaSub = remaining > 0 ? `Günlük hedefe ${remaining} soru kaldı` : "Bugünkü hedefini tamamladın";
  }

  const perf = subjectPerf();
  const subjAbbr = { turkce: "Tü", matematik: "Ma", geometri: "Ge", sosyal: "So", fen: "Fe" };
  const perfRows = ["turkce", "matematik", "sosyal", "fen"].map(id => {
    const sub = getSubject(id), v = perf[id];
    const nameHtml = `<span class="perf-name-wrap"><span class="perf-isq" style="background:var(--c-${id})">${subjAbbr[id]}</span><span class="perf-name">${sub.name}</span></span>`;
    if (!v || !v.t) return `<div class="perf-row">${nameHtml}<span class="perf-empty">Henüz veri yok</span></div>`;
    const rate = Math.round(v.c / v.t * 100);
    return `<div class="perf-row">${nameHtml}
      <span class="perf-bar"><span style="width:${rate}%"></span></span>
      <span class="perf-val">%${rate}</span></div>`;
  }).join("");

  const recent = p.sessions.slice(-5).reverse();
  const recentRows = recent.length ? recent.map((s, i) => {
    const realIdx = p.sessions.length - 1 - i;
    const dk = new Date(s.completedAt || s.date);
    const dstr = isNaN(dk.getTime()) ? "" : dk.toLocaleDateString("tr-TR", { day: "2-digit", month: "long" });
    const subId = s.subject && s.subject !== "karisik" ? s.subject : null;
    const label = subId ? (getSubject(subId) ? getSubject(subId).name : subId) : (s.type === "deneme" ? "Deneme Sınavı" : "Karışık Test");
    const cv = subId ? `--c-${subId}` : "--primary";
    const abbr2 = (subId ? (subjAbbr[subId] || label.slice(0, 2)) : "Kr");
    const reviewable = Array.isArray(s.answers) && s.answers.length;
    return `<button class="recent-row" data-session="${realIdx}"${reviewable ? "" : ' data-noreview="1"'}>
      <span class="rec-isq" style="background:var(${cv})">${abbr2}</span>
      <span class="rec-main"><b>${label}</b><span>${dstr} · ${s.total || 0} soru</span></span>
      <span class="rec-net">${(s.net || 0).toFixed(2)} net</span>
    </button>`;
  }).join("") : `<p class="muted-note">Henüz çalışma yok. İlk testini çöz; burada görünsün.</p>`;

  const week = weeklyData();
  const wmax = Math.max(...week.map(d => d.count), 1);
  const weekBars = week.map(d => {
    const h = d.count ? Math.max(8, Math.round(d.count / wmax * 100)) : 3;
    return `<div class="wcol" title="${d.full}: ${d.count} soru"><div class="wbar${d.count ? "" : " empty"}" style="height:${h}%"></div><span class="wlbl">${d.name}</span></div>`;
  }).join("");

  app.innerHTML = `
    <div class="tyt-countdown" role="img" aria-label="TYT'ye ${daysLeft} gün kaldı">
      <span class="tc-ic">${svgIcon("deneme")}</span>
      <div class="tc-num"><b>${bigNum}</b><span>${bigLbl}</span></div>
      <div class="tc-meta"><b>TYT'ye Kalan Süre</b><span>${tcSub}</span></div>
    </div>

    <div class="dash-row2">
      <section class="today-panel" aria-label="Günlük hedef">
        <div class="panel-head">
          <span class="ph-ic" style="background:rgba(79,110,242,.12);color:var(--primary)">${svgIcon("target")}</span>
          <h2 class="dash-h2" style="margin:0">Günlük Hedef</h2>
        </div>
        <div class="today-grid">
          <div class="ring-wrap" role="img" aria-label="Günlük hedef: ${done} / ${goal} soru">
            <svg class="ring" viewBox="0 0 104 104" aria-hidden="true">
              <circle class="ring-bg" cx="52" cy="52" r="46"/>
              <circle class="ring-fg" cx="52" cy="52" r="46" stroke-dasharray="289" stroke-dashoffset="${ringOff}"/>
            </svg>
            <div class="ring-c"><span class="ring-num">${done}/${goal}</span><span class="ring-lbl">soru</span></div>
          </div>
          <div class="today-metrics">
            <div class="tm"><span class="tm-num">${done}</span><span class="tm-lbl">Çözülen</span></div>
            <div class="tm"><span class="tm-num">${remaining}</span><span class="tm-lbl">Kalan</span></div>
            <div class="tm"><span class="tm-num">${streak}</span><span class="tm-lbl">Günlük seri</span></div>
          </div>
        </div>
        <div class="cta-row">
          <div class="cta-text"><b>Hedefin: ${goal} soru</b><span>${ctaSub}</span></div>
          <button class="btn" data-go="${ctaGo}">${ctaLabel} ${svgIcon("arrow")}</button>
        </div>
      </section>

      <section class="panel quick-panel" aria-label="Hızlı erişim">
        <h2 class="dash-h2">Hızlı erişim</h2>
        <nav class="quick-row q2">
          <button class="quick-tile" data-go="quiz"><span class="isq" style="background:rgba(79,110,242,.12);color:var(--primary)">${svgIcon("soru")}</span><span class="qt-txt"><b>Soru Çöz</b><span>Sorulara başla</span></span></button>
          <button class="quick-tile" data-go="deneme"><span class="isq" style="background:rgba(22,163,74,.13);color:var(--green)">${svgIcon("deneme")}</span><span class="qt-txt"><b>Mini Deneme</b><span>Kısa deneme çöz</span></span></button>
          <button class="quick-tile" data-go="konu"><span class="isq" style="background:rgba(124,108,240,.14);color:var(--primary-2)">${svgIcon("konu")}</span><span class="qt-txt"><b>Konu Çalış</b><span>Anlatımları oku</span></span></button>
          <button class="quick-tile" data-go="review"><span class="isq" style="background:rgba(245,158,11,.14);color:var(--yellow)">${svgIcon("yanlis")}</span><span class="qt-txt"><b>Yanlışlarım${due ? ` (${due})` : ""}</b><span>Yanlışları tekrar et</span></span></button>
        </nav>
      </section>
    </div>

    <section class="panel" aria-label="Ders performansı">
      <h2 class="dash-h2">Ders performansı</h2>
      <div class="perf-list">${perfRows}</div>
      <button class="link-all" data-go="istatistik">Tümünü Gör</button>
    </section>

    <div class="dash-row2">
      <section class="panel" aria-label="Haftalık ilerleme">
        <h2 class="dash-h2">Haftalık ilerleme</h2>
        <div class="week-chart">${weekBars}</div>
      </section>
      <section class="panel" aria-label="Son çalışmalar">
        <h2 class="dash-h2">Son çalışmalar</h2>
        <div class="recent-list">${recentRows}</div>
        ${recent.length ? `<button class="link-all" data-go="istatistik">Tümünü Gör</button>` : ""}
      </section>
    </div>

    <div class="tip-banner">
      <span class="tip-ic">${svgIcon("bulb")}</span>
      <p>Zorlandığın konuları düzenli tekrar ederek ilerlemeni hızlandırabilirsin.</p>
    </div>
  `;
  bindGo();
  app.querySelectorAll("[data-session]").forEach(b => b.onclick = () => {
    if (b.dataset.noreview) { notify("Bu eski oturumda ayrıntılı kayıt yok.", "info"); return; }
    const s = p.sessions[parseInt(b.dataset.session, 10)];
    if (s) renderReview(s, "all");
  });
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
  const subjAbbr = { turkce: "Tü", matematik: "Ma", geometri: "Ge", sosyal: "So", fen: "Fe" };
  let html = `<h1 class="page-title">Konu Anlatımı</h1>
    <p class="page-sub">Çalışmak istediğin dersi seç.</p>
    <div class="grid grid-2">`;
  D.subjects.forEach(sub => {
    const total = sub.units.length;
    const read = sub.units.filter(u => p.readTopics.includes(u.id)).length;
    const pct = total ? Math.round(read / total * 100) : 0;
    const brInfo = (sub.branches && sub.branches.length) ? sub.branches.length + " branş · " : "";
    html += `<button class="card clickable subj-select" data-sub="${sub.id}">
      <div class="subj-tile">
        <span class="subj-abbr" style="background:var(--c-${sub.id});color:#fff">${subjAbbr[sub.id]}</span>
        <div><h3 style="margin:0;font-size:16px">${sub.name}</h3><p style="margin:3px 0 0">${brInfo}${total} ünite · %${pct} okundu</p></div>
      </div>
      <span class="konu-bar"><span style="width:${pct}%"></span></span>
    </button>`;
  });
  html += `</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-sub]").forEach(c => c.onclick = () => renderKonuSubject(c.dataset.sub));
}

function renderKonuSubject(subId) {
  const sub = getSubject(subId);
  if (!sub) return renderKonuList();
  const p = loadProgress();
  const byUnit = {};
  p.sessions.forEach(s => (s.answers || []).forEach(a => {
    const q = questionById[a.questionId]; if (!q || !q.unit) return;
    byUnit[q.unit] = byUnit[q.unit] || { c: 0, t: 0 };
    byUnit[q.unit].t++; if (a.isCorrect) byUnit[q.unit].c++;
  }));
  const unitPct = id => { const v = byUnit[id]; if (v && v.t) return Math.round(v.c / v.t * 100); return p.readTopics.includes(id) ? 100 : 0; };

  const row = (u) => {
    const cv = u.branch ? `--c-${u.branch}` : `--c-${subId}`;
    const cnt = D.questions.filter(q => q.subject === subId && q.unit === u.id).length;
    const pct = unitPct(u.id);
    return `<button class="konu-row" data-unit="${u.id}">
      <span class="konu-isq" style="background:var(${cv})">${u.name.slice(0, 2)}</span>
      <span class="konu-name">${u.name}</span>
      <span class="konu-cnt">${cnt} soru</span>
      <span class="konu-bar"><span style="width:${pct}%"></span></span>
      <span class="konu-pct">%${pct}</span>
    </button>`;
  };

  let html = `<button class="back-link" id="kback">← Derslere dön</button>
    <h1 class="page-title">${sub.name}</h1>
    <p class="page-sub">Üniteye tıklayarak anlatımı oku ve ilerlemeni gör.</p>
    <section class="panel subj-panel">`;
  if (sub.branches && sub.branches.length) {
    sub.branches.forEach(br => {
      const us = sub.units.filter(u => u.branch === br.id);
      if (us.length) html += `<div class="branch-sub">${br.name}</div>` + us.map(row).join("");
    });
  } else {
    html += sub.units.map(row).join("");
  }
  html += `</section>`;
  app.innerHTML = html;
  document.getElementById("kback").onclick = renderKonuList;
  app.querySelectorAll("[data-unit]").forEach(c => c.onclick = () => renderKonuDetail(subId, c.dataset.unit));
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
  document.getElementById("back").onclick = () => renderKonuSubject(subId);
  document.getElementById("back2").onclick = () => renderKonuSubject(subId);
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
  // Dört ana ders — Sosyal/Fen şemsiyesi korunur
  const subjAbbr = { turkce: "Tü", matematik: "Ma", geometri: "Ge", sosyal: "So", fen: "Fe" };
  let html = `<h1 class="page-title">Soru Çöz</h1>
    <p class="page-sub">Bir ders seç; ardından ünite, soru sayısı ve modu belirle.</p>
    <div class="grid grid-2">`;
  D.subjects.forEach(sub => {
    const count = D.questions.filter(q => q.subject === sub.id).length;
    const branched = sub.branches && sub.branches.length;
    const meta = branched ? `${sub.branches.length} branş · ${count} soru` : `${count} soru hazır`;
    html += `
      <div class="card clickable subj-pick" data-quiz="${sub.id}">
        <span class="subj-abbr xl" style="background:var(--c-${sub.id});color:#fff">${subjAbbr[sub.id]}</span>
        <div class="subj-pick-txt"><h3>${sub.name}</h3><p>${meta}</p></div>
        <svg class="subj-pick-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
      </div>`;
  });
  html += `</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-quiz]").forEach(c => c.onclick = () => {
    const sub = getSubject(c.dataset.quiz);
    if (sub.branches && sub.branches.length) renderQuizBranches(sub.id);
    else renderQuizConfig(sub.id, null);
  });
}

/* Branşlı derslerde (Sosyal / Fen) branş seçimi */
function renderQuizBranches(subId) {
  const sub = getSubject(subId);
  if (!sub || !(sub.branches && sub.branches.length)) return renderQuizConfig(subId, null);
  let html = `<button class="back-link" id="qback">← Derslere dön</button>
    <h1 class="page-title">${sub.name}</h1>
    <p class="page-sub">Bir branş seç.</p>
    <div class="grid grid-2">`;
  sub.branches.forEach(br => {
    const count = D.questions.filter(q => q.subject === subId && sub.units.some(u => u.id === q.unit && u.branch === br.id)).length;
    const units = sub.units.filter(u => u.branch === br.id).length;
    html += `
      <div class="card clickable subj-pick" data-branch="${br.id}">
        <span class="subj-abbr xl" style="background:var(--c-${br.id});color:#fff">${br.name.slice(0, 2)}</span>
        <div class="subj-pick-txt"><h3>${br.name}</h3><p>${units} ünite · ${count} soru</p></div>
        <svg class="subj-pick-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
      </div>`;
  });
  html += `</div>`;
  app.innerHTML = html;
  document.getElementById("qback").onclick = renderQuizMenu;
  app.querySelectorAll("[data-branch]").forEach(c => c.onclick = () => renderQuizConfig(subId, c.dataset.branch));
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
  const counts = [5, 10, 20, 9999];
  const modes = [["all", "Tüm sorular"], ["unsolved", "Çözülmemiş"], ["wrong", "Yanlışlarım"], ["mixed", "Karışık tekrar"]];

  // Geçerli seçim durumu (kayıtlı ayardan; ünite izinli değilse "all")
  let curUnit = (st.unit === "all" || allowedUnits.indexOf(st.unit) >= 0) ? st.unit : "all";
  let curCount = counts.indexOf(st.count) >= 0 ? st.count : 10;
  let curMode = modes.some(m => m[0] === st.mode) ? st.mode : "all";
  let curTimed = !!st.timed;

  const chip = (group, val, label, active) =>
    `<button class="chip ${active ? "active" : ""}" data-group="${group}" data-val="${val}">${label}</button>`;
  const unitChips = chip("unit", "all", "Tüm üniteler", curUnit === "all") +
    units.map(u => chip("unit", u.id, u.name, curUnit === u.id)).join("");
  const countChips = counts.map(n => chip("count", n, n === 9999 ? "Tümü" : n + " soru", curCount === n)).join("");
  const modeChips = modes.map(([v, l]) => chip("mode", v, l, curMode === v)).join("");

  app.innerHTML = `
    <div class="narrow-wrap">
    <button class="back-link" id="back">← Ders seç</button>
    <h1 class="page-title">${dispIcon} ${dispName} · Test Oluştur</h1>
    <div class="card config-card">
      <div class="cfg-grid">
      <div class="cfg-block cfg-units"><span class="cfg-label"><svg class="cfg-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19V6a2 2 0 0 1 2-2h12v15H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h12"/></svg>Ünite</span><div class="chip-row" id="grpUnit">${unitChips}</div></div>
      <div class="cfg-side">
      <div class="cfg-block"><span class="cfg-label"><svg class="cfg-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg>Soru sayısı</span><div class="chip-row" id="grpCount">${countChips}</div></div>
      <div class="cfg-block"><span class="cfg-label"><svg class="cfg-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h11M4 12h7M4 18h13"/><circle cx="18" cy="6" r="2"/><circle cx="14" cy="12" r="2"/><circle cx="20" cy="18" r="2"/></svg>Mod</span><div class="chip-row" id="grpMode">${modeChips}</div></div>
      <div class="cfg-block"><span class="cfg-label"><svg class="cfg-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Süre</span><div class="chip-row"><button class="chip toggle ${curTimed ? "active" : ""}" id="cfgTimed">${curTimed ? "⏱ Süreli açık" : "Süresiz"}</button></div></div>
      </div>
      </div>
      <div class="cfg-foot">
        <span id="cfgInfo" class="cfg-info" aria-live="polite"></span>
        <button class="btn" id="start">Teste Başla →</button>
      </div>
    </div>
    </div>
  `;
  document.getElementById("back").onclick = renderQuizMenu;
  const upd = () => {
    const n = buildQuizPool(subId, curUnit, curMode, allowedUnits).length;
    document.getElementById("cfgInfo").textContent = n ? `Bu seçimde uygun ${n} soru var.` : "Bu seçimde uygun soru yok.";
  };
  const bindGroup = (id, setter) => {
    const el = document.getElementById(id);
    el.querySelectorAll(".chip").forEach(b => b.onclick = () => {
      el.querySelectorAll(".chip").forEach(x => x.classList.remove("active"));
      b.classList.add("active"); setter(b.dataset.val); upd();
    });
  };
  bindGroup("grpUnit", v => curUnit = v);
  bindGroup("grpCount", v => curCount = parseInt(v, 10));
  bindGroup("grpMode", v => curMode = v);
  const tBtn = document.getElementById("cfgTimed");
  tBtn.onclick = () => { curTimed = !curTimed; tBtn.classList.toggle("active", curTimed); tBtn.textContent = curTimed ? "⏱ Süreli açık" : "Süresiz"; };
  upd();
  document.getElementById("start").onclick = () => {
    saveQuizSettings({ unit: curUnit, count: curCount, mode: curMode, timed: curTimed });
    let pool = shuffle(buildQuizPool(subId, curUnit, curMode, allowedUnits));
    if (!pool.length) {
      notify(curMode === "wrong" ? "Bu seçimde yanlış soru yok — tebrikler!" :
        curMode === "unsolved" ? "Bu seçimde çözülmemiş soru kalmadı." : "Bu seçimde soru yok.", "info");
      return;
    }
    const want = curCount === 9999 ? pool.length : Math.min(curCount, pool.length);
    if (curCount !== 9999 && pool.length < curCount) notify(`${curCount} istendi; havuzda ${pool.length} soru var. ${pool.length} soruyla başlıyor.`, "info");
    pool = pool.slice(0, want);
    runQuiz({
      title: dispName + (curUnit !== "all" ? " · " + getUnit(subId, curUnit).name : ""),
      subjectId: subId, questions: pool,
      timed: curTimed, durationSec: curTimed ? pool.length * 60 : 0,
      showExplain: !curTimed
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
  const turkceN = Math.min(20, avail.turkce);
  const turkceReady = avail.turkce >= 20;

  app.innerHTML = `
    <h1 class="page-title">Deneme Sınavı</h1>
    <p class="page-sub">Gerçek sınav deneyimi için süreli, karışık deneme. Soru havuzu yapay olarak çoğaltılmaz.</p>
    <div class="grid grid-2">
      <div class="card clickable" data-deneme="mini">
        <span class="icon">⚡</span><h3>Mini TYT Denemesi</h3>
        <p>${miniN} karışık soru · ${miniN} dakika</p>
        <div class="meta">Başla →</div>
      </div>
      <div class="card ${turkceReady ? "clickable" : "disabled-card"}" ${turkceReady ? 'data-deneme="turkce"' : ""}>
        <span class="icon">📚</span><h3>Türkçe Denemesi</h3>
        <p>${turkceReady ? "20 Türkçe sorusu · 30 dakika" : `Türkçe havuzu: ${avail.turkce}/20`}</p>
        <div class="meta">${turkceReady ? "Başla →" : "Havuz yetersiz"}</div>
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
  if (mode === "turkce") {
    const pool = shuffle(subjectQ("turkce")).slice(0, 20);
    runQuiz({ title: "Türkçe Denemesi", subjectId: "turkce", questions: pool, timed: true, durationSec: 30 * 60, showExplain: false });
    return;
  }
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
const SUBJ_HEX = { turkce: "#ef4444", matematik: "#4f6ef2", sosyal: "#8b5cf6", fen: "#0ea5e9" };

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

  const now = new Date();
  const inRange = s => {
    const d = new Date(s.completedAt || s.date); if (isNaN(d.getTime())) return true;
    if (range === "7") return (now - d) <= 7 * 86400000;
    if (range === "30") return (now - d) <= 30 * 86400000;
    if (range === "month") return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    return true;
  };
  const sessions = p.sessions.filter(inRange);

  let totalQ = 0, totalC = 0, totalW = 0, durSum = 0, durN = 0;
  const bySubject = {};
  ["turkce", "matematik", "sosyal", "fen"].forEach(id => bySubject[id] = { c: 0, t: 0, w: 0 });
  sessions.forEach(s => {
    if (Array.isArray(s.answers) && s.answers.length) {
      s.answers.forEach(a => {
        totalQ++;
        if (!a.isBlank && a.isCorrect) totalC++; else if (!a.isBlank) totalW++;
        if (typeof a.durationSeconds === "number" && a.durationSeconds > 0) { durSum += a.durationSeconds; durN++; }
        const q = questionById[a.questionId];
        if (q && bySubject[q.subject]) { bySubject[q.subject].t++; if (a.isCorrect) bySubject[q.subject].c++; else if (!a.isBlank) bySubject[q.subject].w++; }
      });
    } else {
      totalQ += s.total || 0; totalC += s.correct || 0; totalW += s.wrong || 0;
      if (bySubject[s.subject]) { bySubject[s.subject].c += s.correct || 0; bySubject[s.subject].t += s.total || 0; bySubject[s.subject].w += s.wrong || 0; }
    }
  });
  const netTotal = Math.max(0, totalC - totalW / 4);
  const successRate = totalQ ? Math.round(totalC / totalQ * 100) : 0;
  const avgDur = durN ? Math.round(durSum / durN) : 0;

  // Çizgi grafik — son 10 oturumun net %'si
  const recent = sessions.slice(-10);
  const netPct = s => s.total ? Math.max(0, Math.round((s.net || 0) / s.total * 100)) : 0;
  let linePts = "", lineDots = "";
  if (recent.length) {
    const pts = recent.map((s, i) => {
      const x = recent.length > 1 ? 10 + (i / (recent.length - 1)) * 280 : 150;
      const y = 95 - (netPct(s) / 100) * 80;
      return [Math.round(x), Math.round(y)];
    });
    linePts = pts.map(pt => pt.join(",")).join(" ");
    lineDots = pts.map(pt => `<circle cx="${pt[0]}" cy="${pt[1]}" r="3.5" fill="#4f6ef2"/>`).join("");
  }
  const lineChart = recent.length
    ? `<svg class="line-chart" viewBox="0 0 300 110" preserveAspectRatio="none" role="img" aria-label="Net gelişim grafiği">
        <line x1="10" y1="95" x2="290" y2="95" stroke="var(--line)" stroke-width="1"/>
        <polyline points="${linePts}" fill="none" stroke="#4f6ef2" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        ${lineDots}
       </svg>`
    : `<p class="page-sub">Bu aralıkta veri yok.</p>`;

  // Donut — ders bazlı net dağılımı
  const subjNet = {}; let netSum = 0;
  ["turkce", "matematik", "sosyal", "fen"].forEach(id => { const v = bySubject[id]; const n = Math.max(0, v.c - v.w / 4); subjNet[id] = n; netSum += n; });
  const R = 42, CIRC = 2 * Math.PI * R; let off = 0;
  const donutSegs = ["turkce", "matematik", "sosyal", "fen"].map(id => {
    const frac = netSum ? subjNet[id] / netSum : 0;
    const len = frac * CIRC;
    const seg = `<circle cx="60" cy="60" r="${R}" fill="none" stroke="${SUBJ_HEX[id]}" stroke-width="16" stroke-dasharray="${len.toFixed(2)} ${(CIRC - len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 60 60)"/>`;
    off += len; return seg;
  }).join("");
  const donutLegend = ["turkce", "matematik", "sosyal", "fen"].map(id =>
    `<div class="ll"><span class="dot" style="background:${SUBJ_HEX[id]}"></span>${getSubject(id).name}<b>${subjNet[id].toFixed(1)}</b></div>`).join("");
  const donut = netSum
    ? `<div class="donut-wrap"><svg viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="Ders bazlı net dağılımı"><circle cx="60" cy="60" r="${R}" fill="none" stroke="var(--bg-soft)" stroke-width="16"/>${donutSegs}</svg><div class="donut-legend">${donutLegend}</div></div>`
    : `<p class="page-sub">Henüz net yok.</p>`;

  // Son çalışmalar tablosu
  const tableRows = sessions.slice(-8).reverse().map(s => {
    const d = new Date(s.completedAt || s.date);
    const dstr = isNaN(d.getTime()) ? "" : d.toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const typeLbl = s.type === "deneme" ? "Deneme" : s.type === "review" ? "Tekrar" : "Soru Çöz";
    const subLbl = s.subject && s.subject !== "karisik" ? (getSubject(s.subject) ? getSubject(s.subject).name : s.subject) : "Karışık";
    return `<tr><td>${dstr}</td><td>${typeLbl}</td><td>${subLbl}</td><td>${s.total || 0}</td><td>${(s.net || 0).toFixed(2)}</td></tr>`;
  }).join("");

  const fbtn = (k, l) => `<button class="filter-btn ${range === k ? "active" : ""}" data-range="${k}">${l}</button>`;

  app.innerHTML = `
    <h1 class="page-title">İstatistik</h1>
    <div class="filter-bar">${fbtn("7", "7 Gün")}${fbtn("30", "30 Gün")}${fbtn("month", "Bu Ay")}${fbtn("all", "Tümü")}</div>

    <div class="metric-row">
      <div class="metric"><div class="m-lbl">Toplam Soru</div><div class="m-num">${totalQ}</div></div>
      <div class="metric"><div class="m-lbl">Doğru</div><div class="m-num" style="color:var(--green)">${totalC}</div></div>
      <div class="metric"><div class="m-lbl">Yanlış</div><div class="m-num" style="color:var(--red)">${totalW}</div></div>
      <div class="metric"><div class="m-lbl">Net</div><div class="m-num">${netTotal.toFixed(1)}</div></div>
      <div class="metric"><div class="m-lbl">Başarı</div><div class="m-num" style="color:var(--primary)">%${successRate}</div></div>
    </div>

    <div class="stat-cols">
      <section class="panel"><h2 class="dash-h2">Net Grafiği</h2>${lineChart}</section>
      <section class="panel"><h2 class="dash-h2">Ders Dağılımı (Net)</h2>${donut}</section>
    </div>

    <section class="panel">
      <h2 class="dash-h2">Son Çalışmalar</h2>
      ${tableRows
      ? `<table class="stat-table"><thead><tr><th>Tarih</th><th>Tür</th><th>Ders</th><th>Soru</th><th>Net</th></tr></thead><tbody>${tableRows}</tbody></table>`
      : `<p class="muted-note">Bu aralıkta çalışma yok.</p>`}
    </section>

    <div class="btn-row" style="margin-top:20px">
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
const sidebarScrim = document.getElementById("sidebarScrim");
if (menuToggle) menuToggle.onclick = () => {
  const sb = document.getElementById("sidebar");
  if (sb && sb.classList.contains("open")) closeSidebar(); else openSidebar();
};
if (sidebarScrim) sidebarScrim.onclick = closeSidebar;

/* P1-11: Klavye — kart/seçenekleri Enter/Space ile çalıştır; Escape ile sidebar/modal kapat */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeSidebar();
    const ov = document.querySelector(".modal-overlay"); if (ov) { const stay = ov.querySelector("#stay"); if (stay) stay.click(); }
    return;
  }
  if ((e.key === "Enter" || e.key === " ") && document.activeElement &&
    document.activeElement.matches('.clickable,[data-go],[data-unit],[data-sub],[data-game],[data-type],[data-deneme],[data-quiz],[data-topic],[data-diff],[data-filter],[data-nav]')) {
    e.preventDefault(); document.activeElement.click();
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
const _dp = document.getElementById("datePill");
if (_dp) _dp.textContent = new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
if (!location.hash) { suppressHash = true; location.hash = "#/dashboard"; }
doNavigate(routeFromHash());
/* v1.3 — P1 */
