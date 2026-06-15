/* ============================================================
   TYT Hazırlık — Oyunlar ve Oyunlaştırma
   app.js'teki yardımcılar (app, D, el, shuffle, getSubject,
   navigate, currentTimer) burada çalışma anında kullanılır.
   ============================================================ */

/* ---------- Oyunlaştırma deposu ---------- */
const GAMES_STORE_KEY = "tyt_games_v1";

function defaultGames() {
  return { xp: 0, gamesPlayed: 0, badges: [], subjectsPlayed: [], highScores: {} };
}
function loadGames() {
  try { return Object.assign(defaultGames(), JSON.parse(localStorage.getItem(GAMES_STORE_KEY)) || {}); }
  catch { return defaultGames(); }
}
function saveGames(g) { localStorage.setItem(GAMES_STORE_KEY, JSON.stringify(g)); }

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

/* Oyun bitince çağrılır; XP ekler, rozetleri kontrol eder, yeni rozetleri döndürür */
function finishGame({ subjectId, type, xp, score, ctx }) {
  const g = loadGames();
  g.xp += Math.max(0, Math.round(xp));
  g.gamesPlayed += 1;
  if (subjectId && subjectId !== "karisik" && !g.subjectsPlayed.includes(subjectId))
    g.subjectsPlayed.push(subjectId);
  if (type && score != null) {
    if (g.highScores[type] == null || score > g.highScores[type]) g.highScores[type] = score;
  }

  // Rozet kontrolü
  const newBadges = [];
  const level = Math.floor(g.xp / GAMES_DATA.xpPerLevel) + 1;
  const has = id => g.badges.includes(id);
  const unlock = id => { if (!has(id)) { g.badges.push(id); newBadges.push(id); } };

  unlock("ilk-oyun");
  if (g.gamesPlayed >= 10) unlock("caliskan-10");
  if (g.xp >= 500) unlock("xp-500");
  if (level >= 5) unlock("seviye-5");
  if (["turkce", "matematik", "sosyal", "fen"].every(s => g.subjectsPlayed.includes(s))) unlock("tum-dersler");
  if (type === "matching" && ctx && ctx.errors === 0) unlock("eslestirme-tam");
  if (type === "memory" && ctx && ctx.moves <= ctx.pairs * 2 + 2) unlock("hafiza-usta");
  if (type === "timeattack" && ctx && ctx.correct >= 10) unlock("simsek");

  saveGames(g);
  return newBadges.map(id => GAMES_DATA.badges.find(b => b.id === id));
}

function badgeById(id) { return GAMES_DATA.badges.find(b => b.id === id); }

/* ============================================================
   OYUNLAR MENÜSÜ
   ============================================================ */
function renderGamesMenu() {
  const p = gameProfile();
  const earned = p.badges.length, total = GAMES_DATA.badges.length;

  app.innerHTML = `
    <h1 class="page-title">Oyunlar</h1>
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
        <p>60 saniyede mümkün olduğunca çok soruyu doğru cevapla.</p>
      </div>
    </div>

    <h2 class="section-title">Rozetlerin</h2>
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

  app.querySelectorAll("[data-game]").forEach(c =>
    c.onclick = () => pickSubjectForGame(c.dataset.game));
}

const GAME_NAMES = { matching: "Eşleştirme", memory: "Hafıza", flashcard: "Bilgi Kartları", timeattack: "Hızlı Yarış" };

function pickSubjectForGame(gameType) {
  let cards = D.subjects.map(sub => `
    <div class="card clickable game-tile" data-sub="${sub.id}">
      <span class="icon">${sub.icon}</span><h3>${sub.name}</h3>
      <p>${GAME_NAMES[gameType]} oyna</p>
    </div>`).join("");
  if (gameType === "timeattack") {
    cards = `<div class="card clickable game-tile" data-sub="karisik">
      <span class="icon">🎲</span><h3>Karışık</h3><p>Tüm derslerden sorular</p></div>` + cards;
  }

  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <h1 class="page-title">${GAME_NAMES[gameType]}</h1>
    <p class="page-sub">Hangi dersten oynamak istersin?</p>
    <div class="grid grid-3">${cards}</div>
  `;
  document.getElementById("back").onclick = renderGamesMenu;
  app.querySelectorAll("[data-sub]").forEach(c =>
    c.onclick = () => startGame(gameType, c.dataset.sub));
}

function startGame(type, subjectId) {
  if (type === "matching") return gameMatching(subjectId);
  if (type === "memory") return gameMemory(subjectId);
  if (type === "flashcard") return gameFlashcard(subjectId);
  if (type === "timeattack") return gameTimeAttack(subjectId);
}

/* Oyun bitiş ekranı (ortak) */
function gameResult({ title, subjectId, type, xp, score, scoreLabel, ctx, replay }) {
  const newBadges = finishGame({ subjectId, type, xp, score, ctx });
  const p = gameProfile();
  app.innerHTML = `
    <div class="card result-card">
      <div class="game-emoji">🎉</div>
      <h2 style="margin-bottom:6px">${title}</h2>
      <div class="result-score" style="font-size:40px">+${Math.round(xp)} XP</div>
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

function gamePairs(subjectId, n) {
  const pool = shuffle((GAMES_DATA.pairs[subjectId] || []).slice());
  return pool.slice(0, n);
}

/* ============================================================
   1) EŞLEŞTİRME
   ============================================================ */
function gameMatching(subjectId) {
  const pairs = gamePairs(subjectId, 6);
  const sub = getSubject(subjectId);
  const terms = shuffle(pairs.map((p, i) => ({ i, text: p.term })));
  const defs = shuffle(pairs.map((p, i) => ({ i, text: p.def })));
  let selectedTerm = null, matched = 0, errors = 0;
  const start = Date.now();

  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <div class="quiz-head">
      <h1 class="page-title" style="font-size:22px;margin:0">🎯 Eşleştirme · ${sub.name}</h1>
      <span class="pill" id="prog">0 / ${pairs.length}</span>
    </div>
    <p class="page-sub">Soldan bir terim, sağdan tanımını seç.</p>
    <div class="match-wrap">
      <div class="match-col" id="terms"></div>
      <div class="match-col" id="defs"></div>
    </div>
  `;
  document.getElementById("back").onclick = renderGamesMenu;

  const termCol = document.getElementById("terms");
  const defCol = document.getElementById("defs");

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
    termCol.querySelectorAll(".match-item").forEach(x => x.classList.remove("sel"));
    btn.classList.add("sel");
    selectedTerm = { btn, i };
  }
  function selectDef(btn, i) {
    if (btn.classList.contains("done") || !selectedTerm) return;
    if (selectedTerm.i === i) {
      selectedTerm.btn.classList.add("done"); selectedTerm.btn.classList.remove("sel");
      btn.classList.add("done");
      matched++;
      document.getElementById("prog").textContent = `${matched} / ${pairs.length}`;
      selectedTerm = null;
      if (matched === pairs.length) finish();
    } else {
      errors++;
      btn.classList.add("err");
      const st = selectedTerm.btn;
      st.classList.add("err");
      setTimeout(() => { btn.classList.remove("err"); st.classList.remove("err", "sel"); }, 500);
      selectedTerm = null;
    }
  }
  function finish() {
    const secs = (Date.now() - start) / 1000;
    const timeBonus = Math.max(0, 40 - Math.floor(secs)); // hızlıysa bonus
    const xp = 60 + timeBonus - errors * 5;
    gameResult({
      title: errors === 0 ? "Kusursuz!" : "Tamamlandı",
      subjectId, type: "matching", xp, score: pairs.length - 0, scoreLabel: "Eşleşme",
      ctx: { errors }, replay: () => gameMatching(subjectId)
    });
  }
}

/* ============================================================
   2) HAFIZA (eş bulma)
   ============================================================ */
function gameMemory(subjectId) {
  const pairs = gamePairs(subjectId, 6);
  const sub = getSubject(subjectId);
  // her çift için 2 kart: terim ve tanım, aynı pid
  let cards = [];
  pairs.forEach((p, pid) => {
    cards.push({ pid, text: p.term });
    cards.push({ pid, text: p.def });
  });
  cards = shuffle(cards);
  let first = null, lock = false, moves = 0, found = 0;

  app.innerHTML = `
    <button class="back-link" id="back">← Oyunlar</button>
    <div class="quiz-head">
      <h1 class="page-title" style="font-size:22px;margin:0">🧠 Hafıza · ${sub.name}</h1>
      <span class="pill" id="prog">Hamle: 0</span>
    </div>
    <p class="page-sub">Kartları çevir, terim–tanım çiftlerini bul.</p>
    <div class="mem-grid" id="grid"></div>
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
    card.querySelector(".mem-face").textContent = c.text;
    card.classList.add("open");
    if (!first) { first = { card, c }; return; }
    moves++;
    document.getElementById("prog").textContent = `Hamle: ${moves}`;
    if (first.c.pid === c.pid && first.card !== card) {
      first.card.classList.add("done"); card.classList.add("done");
      first = null; found++;
      if (found === pairs.length) finish();
    } else {
      lock = true;
      const a = first.card, b = card;
      setTimeout(() => {
        [a, b].forEach(x => { x.classList.remove("open"); x.querySelector(".mem-face").textContent = "?"; });
        first = null; lock = false;
      }, 750);
    }
  }
  function finish() {
    const ideal = pairs.length; // mükemmel = çift sayısı kadar hamle
    const xp = Math.max(20, 100 - (moves - ideal) * 6);
    gameResult({
      title: "Tüm çiftleri buldun!",
      subjectId, type: "memory", xp, score: moves, scoreLabel: "Hamle (az iyi)",
      ctx: { moves, pairs: pairs.length }, replay: () => gameMemory(subjectId)
    });
  }
}

/* ============================================================
   3) BİLGİ KARTLARI (flashcard)
   ============================================================ */
function gameFlashcard(subjectId) {
  const pairs = shuffle((GAMES_DATA.pairs[subjectId] || []).slice());
  const sub = getSubject(subjectId);
  let idx = 0, known = 0, flipped = false;

  function render() {
    const p = pairs[idx];
    app.innerHTML = `
      <button class="back-link" id="back">← Oyunlar</button>
      <div class="quiz-head">
        <h1 class="page-title" style="font-size:22px;margin:0">📇 Bilgi Kartları · ${sub.name}</h1>
        <span class="pill">${idx + 1} / ${pairs.length}</span>
      </div>
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
    document.getElementById("card").onclick = () => { flipped = !flipped; document.getElementById("card").classList.toggle("flipped"); };
    document.getElementById("know").onclick = () => { known++; next(); };
    document.getElementById("dunno").onclick = () => next();
  }
  function next() {
    if (idx < pairs.length - 1) { idx++; flipped = false; render(); }
    else finish();
  }
  function finish() {
    const xp = 20 + known * 6;
    gameResult({
      title: "Tüm kartları gözden geçirdin!",
      subjectId, type: "flashcard", xp, score: known, scoreLabel: "Bildiğin kart",
      ctx: {}, replay: () => gameFlashcard(subjectId)
    });
  }
  render();
}

/* ============================================================
   4) HIZLI YARIŞ (time attack)
   ============================================================ */
function gameTimeAttack(subjectId) {
  const pool = shuffle(
    subjectId === "karisik" ? D.questions.slice() : D.questions.filter(q => q.subject === subjectId)
  );
  if (!pool.length) return pickSubjectForGame("timeattack");
  let i = 0, correct = 0, wrong = 0, remaining = 60;

  function render() {
    const q = pool[i % pool.length];
    const sub = getSubject(q.subject);
    const letters = ["A", "B", "C", "D", "E"];
    app.innerHTML = `
      <button class="back-link" id="back">← Oyunlar</button>
      <div class="quiz-head">
        <h1 class="page-title" style="font-size:22px;margin:0">⚡ Hızlı Yarış</h1>
        <div style="display:flex;gap:10px">
          <span class="pill timer" id="timer">0:${String(remaining).padStart(2,"0")}</span>
          <span class="pill" id="score">${correct} ✓</span>
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
    const opts = document.querySelectorAll(".option");
    opts.forEach(o => o.disabled = true);
    if (k === q.answer) { correct++; btn.classList.add("correct"); }
    else {
      wrong++; btn.classList.add("wrong");
      opts[q.answer].classList.add("correct");
    }
    document.getElementById("score").textContent = `${correct} ✓`;
    setTimeout(() => { i++; render(); }, 450);
  }
  function tick() {
    const t = document.getElementById("timer");
    if (t) { t.textContent = `0:${String(remaining).padStart(2,"0")}`; t.classList.toggle("warn", remaining <= 10); }
  }
  function stop() { if (currentTimer) { clearInterval(currentTimer); currentTimer = null; } }
  function finish() {
    stop();
    const xp = correct * 10;
    gameResult({
      title: "Süre doldu!",
      subjectId, type: "timeattack", xp, score: correct, scoreLabel: "Doğru sayısı",
      ctx: { correct }, replay: () => gameTimeAttack(subjectId)
    });
  }

  render();
  stop();
  currentTimer = setInterval(() => {
    remaining--;
    tick();
    if (remaining <= 0) finish();
  }, 1000);
}
