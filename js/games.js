/* ============================================================
   TYT Hazırlık — Oyunlar ve Oyunlaştırma
   app.js'teki yardımcılar (app, D, el, shuffle, getSubject,
   navigate, currentTimer) çalışma anında kullanılır.
   ============================================================ */

/* ---------- Oyunlaştırma deposu ---------- */
const GAMES_STORE_KEY = TYT_CONFIG.storageKeys.games;
const DIFF_KEY = TYT_CONFIG.storageKeys.diff;
const SFX_KEY = TYT_CONFIG.storageKeys.sfx;

function defaultGames() { return TYTCore.normalizeGames(null); }
function loadGames() {
  let raw = null;
  try { raw = JSON.parse(safeGetItem(GAMES_STORE_KEY)); } catch (e) { raw = null; }
  return TYTCore.migrateGames(raw); // normalize + migration
}
function saveGames(g) { safeSetItem(GAMES_STORE_KEY, JSON.stringify(g)); }

function gameProfile() {
  const g = loadGames();
  const per = GAMES_DATA.xpPerLevel;
  const level = Math.floor(g.xp / per) + 1;
  const inLevel = g.xp % per;
  const titleIdx = Math.min(level - 1, GAMES_DATA.levelTitles.length - 1);
  return {
    xp: g.xp, level, title: GAMES_DATA.levelTitles[titleIdx],
    inLevel, per, pct: Math.round(inLevel / per * 100),
    gamesPlayed: g.gamesPlayed, badges: g.badges, subjectsPlayed: g.subjectsPlayed,
    highScores: g.highScores
  };
}

/* ---------- Zorluk ---------- */
function getDiffKey() {
  const d = localStorage.getItem(DIFF_KEY);
  return GAMES_DATA.difficulties[d] ? d : "orta";
}
function setDiffKey(d) { localStorage.setItem(DIFF_KEY, d); }
function diffCfg(key) { return GAMES_DATA.difficulties[key]; }

/* ---------- Ses efektleri (Web Audio, harici dosya yok) ---------- */
let _actx = null;
function sfxEnabled() { return localStorage.getItem(SFX_KEY) !== "0"; }
function toggleSfx() { localStorage.setItem(SFX_KEY, sfxEnabled() ? "0" : "1"); }
function _ctx() {
  if (!_actx) { try { _actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { _actx = null; } }
  return _actx;
}
function tone(freq, dur, type, when, gain) {
  if (!sfxEnabled()) return;
  const ctx = _ctx(); if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  const t0 = ctx.currentTime + (when || 0);
  const osc = ctx.createOscillator(), g = ctx.createGain();
  osc.type = type || "sine"; osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain || 0.14, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.15));
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + (dur || 0.15) + 0.03);
}
const sfx = {
  correct() { tone(660, 0.12, "triangle"); tone(880, 0.12, "triangle", 0.07); },
  wrong()   { tone(190, 0.22, "sawtooth", 0, 0.11); },
  flip()    { tone(440, 0.06, "square", 0, 0.07); },
  match()   { tone(740, 0.1, "triangle"); tone(990, 0.12, "triangle", 0.07); },
  combo(m)  { const b = 560 + m * 70; tone(b, 0.1, "triangle"); tone(b * 1.25, 0.12, "triangle", 0.06); },
  win()     { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.2, "triangle", i * 0.1, 0.16)); }
};

/* ---------- Konfeti ---------- */
function launchConfetti() {
  const colors = ["#6366f1", "#22d3ee", "#34d399", "#fbbf24", "#f87171", "#a78bfa"];
  const wrap = document.createElement("div");
  wrap.className = "confetti";
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.background = colors[i % colors.length];
    s.style.animationDelay = (Math.random() * 0.5) + "s";
    s.style.animationDuration = (1.8 + Math.random() * 1.3) + "s";
    wrap.appendChild(s);
  }
  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 3600);
}

/* ---------- Oyun bitişi: XP, rozet, skor ---------- */
function finishGame({ subjectId, type, xp, score, ctx }) {
  const g = loadGames();
  const awardedXp = TYTCore.normalizeXp(xp);   // negatif olamaz, tam sayı
  g.xp += awardedXp;
  g.gamesPlayed += 1;
  if (subjectId && subjectId !== "karisik" && !g.subjectsPlayed.includes(subjectId))
    g.subjectsPlayed.push(subjectId);
  if (type && score != null) {
    // Yüksek skor yönü oyun türüne göre: hafıza "az iyi", diğerleri "çok iyi"
    const dir = TYT_CONFIG.scoreDirection[type] || "high";
    if (TYTCore.isBetterScore(dir, g.highScores[type], score)) g.highScores[type] = score;
  }

  const newBadges = [];
  const level = Math.floor(g.xp / GAMES_DATA.xpPerLevel) + 1;
  const has = id => g.badges.includes(id);
  const unlock = id => { if (!has(id)) { g.badges.push(id); newBadges.push(id); } };

  unlock("ilk-oyun");
  if (g.gamesPlayed >= 10) unlock("caliskan-10");
  if (g.xp >= 500) unlock("xp-500");
  if (level >= 5) unlock("seviye-5");
  if (["turkce", "matematik", "sosyal", "fen"].every(s => g.subjectsPlayed.includes(s))) unlock("tum-dersler");
  if (ctx && ctx.difficulty === "zor") unlock("zor-mod");
  if (type === "matching" && ctx && ctx.errors === 0) unlock("eslestirme-tam");
  if (type === "memory" && ctx && ctx.moves <= ctx.pairs * 2 + 2) unlock("hafiza-usta");
  if (type === "timeattack" && ctx && ctx.correct >= 10) unlock("simsek");
  if (type === "timeattack" && ctx && ctx.maxCombo >= 8) unlock("combo-king");

  saveGames(g);
  if (typeof recordActivity === "function") recordActivity("game_completed", { gameType: type, subjectId });
  return { awardedXp, newBadges: newBadges.map(id => GAMES_DATA.badges.find(b => b.id === id)) };
}

/* P1-9: Merkezi, idempotent XP event sistemi (oyun dışı öğrenme de XP verir) */
function awardXpEvent(eventId, amount, ctx) {
  const g = loadGames();
  g.xpEvents = g.xpEvents || [];
  if (eventId && g.xpEvents.indexOf(eventId) >= 0) return { awardedXp: 0, newBadges: [] }; // aynı event iki kez XP vermez
  const awardedXp = TYTCore.normalizeXp(amount);
  g.xp += awardedXp;
  if (eventId) { g.xpEvents.push(eventId); if (g.xpEvents.length > 1000) g.xpEvents = g.xpEvents.slice(-1000); }

  const newBadges = [];
  const level = Math.floor(g.xp / GAMES_DATA.xpPerLevel) + 1;
  const has = id => g.badges.includes(id);
  const unlock = id => { if (!has(id)) { g.badges.push(id); newBadges.push(id); } };
  if (g.xp >= 500) unlock("xp-500");
  if (level >= 5) unlock("seviye-5");
  if (ctx) {
    if (ctx.totalSolved >= 100) unlock("ilk-100");
    if (ctx.streak >= 7) unlock("seri-7");
    if (ctx.denemeCount >= 5) unlock("deneme-5");
    if (ctx.masteredCount >= 20) unlock("ustalik-20");
  }
  saveGames(g);
  return { awardedXp, newBadges: newBadges.map(id => GAMES_DATA.badges.find(b => b.id === id)).filter(Boolean) };
}

/* ============================================================
   OYUNLAR MENÜSÜ
   ============================================================ */
function renderGamesMenu() {
  const p = gameProfile();
  const earned = p.badges.length, total = GAMES_DATA.badges.length;

  app.innerHTML = `
    <div class="games-head">
      <h1 class="page-title">Oyunlar</h1>
      <button class="sfx-btn" id="sfx" title="Ses aç/kapat">${sfxEnabled() ? "🔊" : "🔇"}</button>
    </div>
    <p class="page-sub">Oynayarak öğren! Her oyun sana XP kazandırır, seviye atlatır ve rozet açar.</p>

    <div class="card level-card">
      <div class="level-top">
        <div class="level-badge">Sv. ${p.level}</div>
        <div>
          <div class="level-title">${p.title}</div>
          <div class="level-xp">${p.xp} XP · ${earned}/${total} rozet</div>
        </div>
      </div>
      <div class="progress-track" style="margin-top:14px"><div class="progress-fill" style="width:${p.pct}%"></div></div>
      <div class="level-next">Sonraki seviyeye ${p.per - p.inLevel} XP</div>
    </div>

    <h2 class="section-title">Oyun seç</h2>
    <div class="grid grid-2">
      <div class="card clickable game-tile" data-game="matching">
        <span class="icon">🎯</span><h3>Eşleştirme</h3>
        <p>Terimleri doğru tanımlarıyla eşleştir. Hatasız bitir, bonus kap.</p>
      </div>
      <div class="card clickable game-tile" data-game="memory">
        <span class="icon">🧠</span><h3>Hafıza</h3>
        <p>Kapalı kartları çevir, eş çiftleri bul. Az hamle = çok XP.</p>
      </div>
      <div class="card clickable game-tile" data-game="flashcard">
        <span class="icon">📇</span><h3>Bilgi Kartları</h3>
        <p>Kartı çevir, terimi ve tanımını hızlıca tekrar et.</p>
      </div>
      <div class="card clickable game-tile" data-game="timeattack">
        <span class="icon">⚡</span><h3>Hızlı Yarış</h3>
        <p>Süre dolmadan çok soru çöz; combo yakala, puanı katla!</p>
      </div>
    </div>

    <h2 class="section-title">Rozetlerin (${earned}/${total})</h2>
    <div class="grid grid-4 badge-grid">
      ${GAMES_DATA.badges.map(b => {
        const got = p.badges.includes(b.id);
        return `<div class="badge-card ${got ? "got" : "locked"}" title="${b.desc}">
          <span class="b-icon">${got ? b.icon : "🔒"}</span>
          <span class="b-name">${b.name}</span>
          <span class="b-desc">${b.desc}</span>
        </div>`;
      }).join("")}
    </div>
  `;
  document.getElementById("sfx").onclick = (e) => {
    toggleSfx();
    e.currentTarget.textContent = sfxEnabled() ? "🔊" : "🔇";
    if (sfxEnabled()) sfx.flip();
  };
  app.querySelectorAll("[data-game]").forEach(c =>
    c.onclick = () => pickSubjectForGame(c.dataset.game));
}

const GAME_NAMES = { matching: "Eşleştirme", memory: "Hafıza", flashcard: "Bilgi Kartları", timeattack: "Hızlı Yarış" };

/* 1) Ders seç */
function pickSubjectForGame(gameType) {
  const cards = D.subjects.map(sub => `
    <div class="card clickable game-tile" data-sub="${sub.id}">
      <span class="icon">${sub.icon}</span><h3>${sub.name}</h3>
      <p>${GAME_NAMES[gameType]} · ünite seç</p>
    </div>`).join("");
  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <h1 class="page-title">${GAME_NAMES[gameType]}</h1>
    <p class="page-sub">Önce bir ders seç.</p>
    <div class="grid grid-3">${cards}</div>
  `;
  document.getElementById("back").onclick = renderGamesMenu;
  app.querySelectorAll("[data-sub]").forEach(c =>
    c.onclick = () => pickUnitForGame(gameType, c.dataset.sub));
}

/* Bir ünitenin bu oyun için içeriği var mı? */
function unitHasContent(gameType, subId, u) {
  if (gameType === "timeattack") return D.questions.some(q => q.subject === subId && q.unit === u.id);
  return (u.pairs || []).length >= 2;
}

/* 2) Ünite seç (branşlara göre gruplu) + zorluk */
function pickUnitForGame(gameType, subjectId) {
  const sub = getSubject(subjectId);
  const showDiff = gameType !== "flashcard";
  const diffKey = getDiffKey();
  const diffBar = showDiff ? `
    <div class="diff-bar" id="diffBar">
      <span class="diff-label">Zorluk:</span>
      ${Object.entries(GAMES_DATA.difficulties).map(([k, v]) =>
        `<button class="diff-btn ${k === diffKey ? "active" : ""}" data-diff="${k}">${v.name}</button>`).join("")}
    </div>` : "";

  const uCard = u => `<div class="card clickable game-tile" data-unit="${u.id}"><h3>${u.name}</h3><p>${u.summary || ""}</p></div>`;
  let body = "";
  if (sub.branches && sub.branches.length) {
    sub.branches.forEach(br => {
      const us = sub.units.filter(u => u.branch === br.id && unitHasContent(gameType, subjectId, u));
      if (us.length) body += `<h3 class="branch-title">${br.icon} ${br.name}</h3><div class="grid grid-3">${us.map(uCard).join("")}</div>`;
    });
  } else {
    const us = sub.units.filter(u => unitHasContent(gameType, subjectId, u));
    body = `<div class="grid grid-3">${us.map(uCard).join("")}</div>`;
  }
  const mix = gameType === "timeattack"
    ? `<div class="grid grid-3" style="margin-bottom:8px"><div class="card clickable game-tile" data-unit="karisik"><span class="icon">🎲</span><h3>Karışık</h3><p>Tüm ${sub.name} soruları</p></div></div>` : "";

  app.innerHTML = `
    <button class="back-link" id="back">← Ders seç</button>
    <h1 class="page-title">${sub.icon} ${sub.name}</h1>
    <p class="page-sub">${GAME_NAMES[gameType]} · bir ünite seç.</p>
    ${diffBar}
    ${mix}
    ${body || `<p class="page-sub">Bu derste bu oyun için içerik yok.</p>`}
  `;
  document.getElementById("back").onclick = () => pickSubjectForGame(gameType);
  if (showDiff) app.querySelectorAll("[data-diff]").forEach(b => b.onclick = () => {
    setDiffKey(b.dataset.diff);
    document.querySelectorAll("[data-diff]").forEach(x => x.classList.toggle("active", x === b));
    sfx.flip();
  });
  app.querySelectorAll("[data-unit]").forEach(c =>
    c.onclick = () => startGame(gameType, subjectId, c.dataset.unit));
}

/* Konu detayından: bu ünite için oyun türü seç */
function pickGameForUnit(subjectId, unitId) {
  const unit = getUnit(subjectId, unitId);
  const hasQ = D.questions.some(q => q.subject === subjectId && q.unit === unitId);
  const types = [["matching", "🎯", "Eşleştirme"], ["memory", "🧠", "Hafıza"], ["flashcard", "📇", "Bilgi Kartları"]];
  app.innerHTML = `
    <button class="back-link" id="back">← Konuya dön</button>
    <h1 class="page-title">${unit.name}</h1>
    <p class="page-sub">Bu üniteyle bir oyun seç.</p>
    <div class="grid grid-2">
      ${types.map(([t, ic, nm]) => `<div class="card clickable game-tile" data-type="${t}"><span class="icon">${ic}</span><h3>${nm}</h3></div>`).join("")}
      ${hasQ ? `<div class="card clickable game-tile" data-type="timeattack"><span class="icon">⚡</span><h3>Hızlı Yarış</h3></div>` : ""}
    </div>
  `;
  document.getElementById("back").onclick = () => renderKonuDetail(subjectId, unitId);
  app.querySelectorAll("[data-type]").forEach(c =>
    c.onclick = () => startGame(c.dataset.type, subjectId, unitId));
}

/* 3) Oyunu başlat */
function startGame(type, subjectId, unitId) {
  const diffKey = type === "flashcard" ? "orta" : getDiffKey();
  if (type === "matching") return gameMatching(subjectId, unitId, diffKey);
  if (type === "memory") return gameMemory(subjectId, unitId, diffKey);
  if (type === "flashcard") return gameFlashcard(subjectId, unitId);
  if (type === "timeattack") return gameTimeAttack(subjectId, unitId, diffKey);
}

/* Oyun bitiş ekranı (ortak) */
function gameResult({ title, subtitle, subjectId, type, xp, score, scoreLabel, ctx, replay }) {
  const { awardedXp, newBadges } = finishGame({ subjectId, type, xp, score, ctx });
  const p = gameProfile();
  sfx.win();
  launchConfetti();
  app.innerHTML = `
    <div class="card result-card">
      <div class="game-emoji">🎉</div>
      <h2 style="margin-bottom:4px">${title}</h2>
      ${subtitle ? `<p class="page-sub" style="margin:0 0 6px">${subtitle}</p>` : ""}
      <div class="result-score" style="font-size:40px">+${awardedXp} XP</div>
      ${score != null ? `<div class="result-net">${scoreLabel}: <b>${score}</b></div>` : ""}
      <div class="result-net">Seviye ${p.level} · ${p.title} · Toplam ${p.xp} XP</div>
      <div class="progress-track" style="max-width:320px;margin:14px auto 0"><div class="progress-fill" style="width:${p.pct}%"></div></div>
      ${newBadges.length ? `<div class="new-badges">${newBadges.map(b => `<span class="badge-pop">${b.icon} ${b.name}</span>`).join("")}</div>` : ""}
      <div class="btn-row" style="justify-content:center;margin-top:22px">
        <button class="btn" id="again">Tekrar Oyna</button>
        <button class="btn secondary" id="menu">Başka Oyun</button>
        <button class="btn ghost" id="home">Ana Sayfa</button>
      </div>
    </div>
  `;
  document.getElementById("again").onclick = replay;
  document.getElementById("menu").onclick = renderGamesMenu;
  document.getElementById("home").onclick = () => navigate("dashboard");
}

function gamePairs(subjectId, unitId, n) {
  const unit = getUnit(subjectId, unitId);
  const pool = shuffle((unit && unit.pairs ? unit.pairs : []).slice());
  return pool.slice(0, Math.min(n, pool.length));
}

/* ============================================================
   1) EŞLEŞTİRME
   ============================================================ */
function gameMatching(subjectId, unitId, diffKey) {
  const diff = diffCfg(diffKey);
  const pairs = gamePairs(subjectId, unitId, diff.pairs);
  const sub = getSubject(subjectId);
  const unit = getUnit(subjectId, unitId);
  const terms = shuffle(pairs.map((p, i) => ({ i, text: p.term })));
  const defs = shuffle(pairs.map((p, i) => ({ i, text: p.def })));
  let selectedTerm = null, matched = 0, errors = 0;
  const start = Date.now();

  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <div class="quiz-head">
      <h1 class="page-title" style="font-size:22px;margin:0">🎯 ${unit ? unit.name : sub.name}</h1>
      <div style="display:flex;gap:8px">
        <span class="pill diff-pill">${diff.name}</span>
        <span class="pill" id="prog">0 / ${pairs.length}</span>
      </div>
    </div>
    <p class="page-sub">Soldan bir terim, sağdan tanımını seç.</p>
    <div class="match-wrap">
      <div class="match-col" id="terms"></div>
      <div class="match-col" id="defs"></div>
    </div>
  `;
  document.getElementById("back").onclick = renderGamesMenu;
  const termCol = document.getElementById("terms"), defCol = document.getElementById("defs");

  terms.forEach(t => {
    const b = el(`<button class="match-item" data-i="${t.i}">${t.text}</button>`);
    b.onclick = () => selectTerm(b, t.i);
    termCol.appendChild(b);
  });
  defs.forEach(d => {
    const b = el(`<button class="match-item" data-i="${d.i}">${d.text}</button>`);
    b.onclick = () => selectDef(b, d.i);
    defCol.appendChild(b);
  });

  function selectTerm(btn, i) {
    if (btn.classList.contains("done")) return;
    sfx.flip();
    termCol.querySelectorAll(".match-item").forEach(x => x.classList.remove("sel"));
    btn.classList.add("sel");
    selectedTerm = { btn, i };
  }
  function selectDef(btn, i) {
    if (btn.classList.contains("done") || !selectedTerm) return;
    if (selectedTerm.i === i) {
      sfx.match();
      selectedTerm.btn.classList.add("done", "pop"); selectedTerm.btn.classList.remove("sel");
      btn.classList.add("done", "pop");
      matched++;
      document.getElementById("prog").textContent = `${matched} / ${pairs.length}`;
      selectedTerm = null;
      if (matched === pairs.length) setTimeout(finish, 350);
    } else {
      sfx.wrong();
      errors++;
      btn.classList.add("err");
      const st = selectedTerm.btn; st.classList.add("err");
      setTimeout(() => { btn.classList.remove("err"); st.classList.remove("err", "sel"); }, 500);
      selectedTerm = null;
    }
  }
  function finish() {
    const secs = (Date.now() - start) / 1000;
    const timeBonus = Math.max(0, 40 - Math.floor(secs));
    const xp = (50 + timeBonus - errors * 5) * diff.xpMult;
    gameResult({
      title: errors === 0 ? "Kusursuz! 🎯" : "Tamamlandı",
      subtitle: errors === 0 ? "Hiç hata yapmadın!" : `${errors} hata yaptın`,
      subjectId, type: "matching", xp, score: pairs.length, scoreLabel: "Eşleşme",
      ctx: { errors, difficulty: diffKey }, replay: () => gameMatching(subjectId, unitId, diffKey)
    });
  }
}

/* ============================================================
   2) HAFIZA (eş bulma)
   ============================================================ */
function gameMemory(subjectId, unitId, diffKey) {
  const diff = diffCfg(diffKey);
  const pairs = gamePairs(subjectId, unitId, diff.pairs);
  const sub = getSubject(subjectId);
  const unit = getUnit(subjectId, unitId);
  let cards = [];
  pairs.forEach((p, pid) => { cards.push({ pid, text: p.term }); cards.push({ pid, text: p.def }); });
  cards = shuffle(cards);
  let first = null, lock = false, moves = 0, found = 0;

  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <div class="quiz-head">
      <h1 class="page-title" style="font-size:22px;margin:0">🧠 ${unit ? unit.name : sub.name}</h1>
      <div style="display:flex;gap:8px">
        <span class="pill diff-pill">${diff.name}</span>
        <span class="pill" id="prog">Hamle: 0</span>
      </div>
    </div>
    <p class="page-sub">Kartları çevir, terim–tanım çiftlerini bul.</p>
    <div class="mem-grid mem-${diff.pairs}" id="grid"></div>
  `;
  document.getElementById("back").onclick = renderGamesMenu;
  const grid = document.getElementById("grid");

  cards.forEach((c, idx) => {
    const card = el(`<button class="mem-card" data-idx="${idx}"><span class="mem-face">?</span></button>`);
    card.onclick = () => flip(card, c);
    grid.appendChild(card);
  });

  function flip(card, c) {
    if (lock || card.classList.contains("open") || card.classList.contains("done")) return;
    sfx.flip();
    card.querySelector(".mem-face").textContent = c.text;
    card.classList.add("open");
    if (!first) { first = { card, c }; return; }
    moves++;
    document.getElementById("prog").textContent = `Hamle: ${moves}`;
    if (first.c.pid === c.pid && first.card !== card) {
      sfx.match();
      first.card.classList.add("done", "pop"); card.classList.add("done", "pop");
      first = null; found++;
      if (found === pairs.length) setTimeout(finish, 400);
    } else {
      sfx.wrong();
      lock = true;
      const a = first.card, b = card;
      setTimeout(() => {
        [a, b].forEach(x => { x.classList.remove("open"); x.querySelector(".mem-face").textContent = "?"; });
        first = null; lock = false;
      }, 750);
    }
  }
  function finish() {
    const ideal = pairs.length;
    const xp = Math.max(20, 100 - (moves - ideal) * 6) * diff.xpMult;
    gameResult({
      title: "Tüm çiftleri buldun! 🧠",
      subtitle: `${moves} hamlede tamamladın`,
      subjectId, type: "memory", xp, score: moves, scoreLabel: "Hamle (az iyi)",
      ctx: { moves, pairs: pairs.length, difficulty: diffKey }, replay: () => gameMemory(subjectId, unitId, diffKey)
    });
  }
}

/* ============================================================
   3) BİLGİ KARTLARI (flashcard)
   ============================================================ */
function gameFlashcard(subjectId, unitId) {
  const unit = getUnit(subjectId, unitId);
  const pairs = shuffle((unit && unit.pairs ? unit.pairs : []).slice());
  const sub = getSubject(subjectId);
  let idx = 0, known = 0, flipped = false;

  function render() {
    const p = pairs[idx];
    app.innerHTML = `
      <button class="back-link" id="back">← Oyunlar</button>
      <div class="quiz-head">
        <h1 class="page-title" style="font-size:22px;margin:0">📇 ${unit ? unit.name : sub.name}</h1>
        <span class="pill">${idx + 1} / ${pairs.length}</span>
      </div>
      <div class="progress-track" style="margin:6px 0 20px"><div class="progress-fill" style="width:${Math.round((idx) / pairs.length * 100)}%"></div></div>
      <div class="flash-wrap">
        <div class="flashcard ${flipped ? "flipped" : ""}" id="card">
          <div class="flash-inner">
            <div class="flash-front"><span class="flash-label">TERİM</span>${p.term}</div>
            <div class="flash-back"><span class="flash-label">TANIM</span>${p.def}</div>
          </div>
        </div>
        <p class="flash-hint">Çevirmek için karta dokun</p>
      </div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn secondary" id="dunno">Bilmiyordum</button>
        <button class="btn" id="know">Biliyordum ✓</button>
      </div>
    `;
    document.getElementById("back").onclick = renderGamesMenu;
    document.getElementById("card").onclick = () => {
      flipped = !flipped; sfx.flip();
      document.getElementById("card").classList.toggle("flipped");
    };
    document.getElementById("know").onclick = () => { known++; sfx.correct(); next(); };
    document.getElementById("dunno").onclick = () => { sfx.flip(); next(); };
  }
  function next() {
    if (idx < pairs.length - 1) { idx++; flipped = false; render(); }
    else finish();
  }
  function finish() {
    const xp = 20 + known * 5;
    gameResult({
      title: "Tüm kartları gözden geçirdin! 📇",
      subtitle: `${known} / ${pairs.length} kartı biliyordun`,
      subjectId, type: "flashcard", xp, score: known, scoreLabel: "Bildiğin kart",
      ctx: {}, replay: () => gameFlashcard(subjectId, unitId)
    });
  }
  render();
}

/* ============================================================
   4) HIZLI YARIŞ (time attack + combo)
   ============================================================ */
function gameTimeAttack(subjectId, unitId, diffKey) {
  const diff = diffCfg(diffKey);
  const pool = shuffle(
    (!unitId || unitId === "karisik")
      ? D.questions.filter(q => q.subject === subjectId)
      : D.questions.filter(q => q.subject === subjectId && q.unit === unitId)
  );
  if (!pool.length) return pickUnitForGame("timeattack", subjectId);
  let i = 0, correct = 0, wrong = 0, remaining = diff.time, score = 0, combo = 0, maxCombo = 0;
  let ended = false, pending = null;

  function comboMult() { return Math.min(5, 1 + Math.floor(combo / 3)); }

  function render() {
    const q = pool[i % pool.length];
    const sub = getSubject(q.subject);
    const letters = ["A", "B", "C", "D", "E"];
    app.innerHTML = `
      <button class="back-link" id="back">← Oyunlar</button>
      <div class="quiz-head">
        <h1 class="page-title" style="font-size:22px;margin:0">⚡ Hızlı Yarış</h1>
        <div style="display:flex;gap:8px;align-items:center">
          <span class="pill timer" id="timer">0:${String(remaining).padStart(2, "0")}</span>
          <span class="pill" id="score">${score} puan</span>
          <span class="combo-tag ${combo >= 2 ? "show" : ""}" id="combo">🔥 x${comboMult()}</span>
        </div>
      </div>
      <div class="question-card">
        <div class="q-subject">${sub.name}</div>
        <div class="q-text">${q.q}</div>
        <div class="options" id="opts"></div>
      </div>
    `;
    document.getElementById("back").onclick = () => { stop(); renderGamesMenu(); };
    const box = document.getElementById("opts");
    q.options.forEach((opt, k) => {
      const b = el(`<button class="option"><span class="key">${letters[k]}</span><span>${opt}</span></button>`);
      b.onclick = () => answer(k, q, b);
      box.appendChild(b);
    });
  }
  function answer(k, q, btn) {
    if (ended) return;                       // süre bitince cevap işlenmez
    document.querySelectorAll(".option").forEach(o => o.disabled = true);
    if (k === q.answer) {
      combo++; maxCombo = Math.max(maxCombo, combo);
      const mult = comboMult();
      score += 10 * mult; correct++;
      btn.classList.add("correct");
      if (combo >= 2) sfx.combo(mult); else sfx.correct();
    } else {
      combo = 0; wrong++;
      btn.classList.add("wrong");
      document.querySelectorAll(".option")[q.answer].classList.add("correct");
      sfx.wrong();
    }
    pending = setTimeout(() => { pending = null; if (ended) return; i++; render(); }, 420);
  }
  function tick() {
    const t = document.getElementById("timer");
    if (t) { t.textContent = `0:${String(remaining).padStart(2, "0")}`; t.classList.toggle("warn", remaining <= 10); }
  }
  function stop() {
    if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
    if (pending) { clearTimeout(pending); pending = null; }
  }
  function finish() {
    if (ended) return;                       // çift sonuçlandırmayı önle
    ended = true;
    stop();
    const xp = score * 0.6 * diff.xpMult;
    gameResult({
      title: "Süre doldu! ⚡",
      subtitle: `${correct} doğru · en yüksek combo x${Math.min(5, 1 + Math.floor(maxCombo / 3))} (${maxCombo} seri)`,
      subjectId, type: "timeattack", xp, score, scoreLabel: "Puan",
      ctx: { correct, maxCombo, difficulty: diffKey }, replay: () => gameTimeAttack(subjectId, unitId, diffKey)
    });
  }

  render();
  stop();
  currentTimer = setInterval(() => { remaining--; tick(); if (remaining <= 0) finish(); }, 1000);
}
