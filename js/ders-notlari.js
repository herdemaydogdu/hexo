/* ============================================================
   TYT Hazırlık — "Ders Notları" defter görünümü (cila katmanı)
   app.js/style.css'e DOKUNMADAN çalışır: kendi stilini enjekte eder,
   "Konu Anlatımı" etiketini "Ders Notları" yapar ve her ünitenin
   konu ekranını (.konu-body) otomatik sayfalanan spiralli deftere
   çevirir. Kalem/fosforlu/silgi ile not alınır, tarayıcıya kaydedilir.
   Hata olursa orijinal ekran bozulmadan kalır (güvenli geri düşüş).
   ============================================================ */
(function () {
  "use strict";
  if (window.__dersNotlariYuklendi) return;
  window.__dersNotlariYuklendi = true;

  var LS = "dn_notes_";

  /* ---------- STİL ---------- */
  function injectStyles() {
    if (document.getElementById("dn-style")) return;
    var s = document.createElement("style");
    s.id = "dn-style";
    s.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;600;700&display=swap');",
      ".dn-wrap{--dn-a:#7c5cff;--dn-as:#f2eeff;--dn-ai:#5433d6;margin:0 0 10px;font-family:'Inter',-apple-system,Segoe UI,Roboto,sans-serif;}",
      ".dn-serif{font-family:'Fraunces',Georgia,serif;}",
      ".dn-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:7px;flex-wrap:wrap;}",
      ".dn-brand{display:flex;align-items:center;gap:9px;color:#5a5f77;font-size:12.5px;font-weight:600;}",
      ".dn-brand .mk{width:26px;height:26px;border-radius:8px;background:var(--dn-a);color:#fff;display:grid;place-items:center;}",
      ".dn-brand .mk svg{width:15px;height:15px}",
      ".dn-modes{display:inline-flex;background:#fff;border:1px solid #e0e2ee;border-radius:99px;padding:4px;box-shadow:0 4px 14px rgba(35,36,51,.08);}",
      ".dn-modes button{border:0;background:transparent;font:inherit;font-size:12.5px;font-weight:600;color:#666b85;padding:7px 14px;border-radius:99px;cursor:pointer;display:flex;align-items:center;gap:7px;}",
      ".dn-modes button svg{width:15px;height:15px}",
      ".dn-modes button.on{background:#232433;color:#fff;}",
      ".dn-stage{display:flex;align-items:stretch;gap:13px;}",
      ".dn-toc{width:196px;flex-shrink:0;background:#fff;border:1px solid #eceef6;border-radius:16px;padding:14px 10px;box-shadow:0 12px 30px rgba(35,36,51,.08);display:flex;flex-direction:column;}",
      ".dn-toc h4{margin:0 0 10px;font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:#a2a6bb;padding-left:8px;font-weight:700;}",
      ".dn-toc button{position:relative;display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:0;background:transparent;font:inherit;font-size:12.5px;font-weight:500;color:#4c5069;padding:8px 9px 8px 12px;border-radius:11px;cursor:pointer;margin-bottom:1px;}",
      ".dn-toc button .no{font-size:10px;font-weight:700;color:#b7bacb;width:15px;font-family:'Fraunces',serif;}",
      ".dn-toc button .nm{flex:1;line-height:1.25;overflow:hidden;text-overflow:ellipsis;}",
      ".dn-toc button .dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;opacity:.85;}",
      ".dn-toc button:hover{background:#f6f5fb;color:#232433;}",
      ".dn-toc button.active{background:var(--dn-as);color:var(--dn-ai);font-weight:700;}",
      ".dn-toc button.active::before{content:'';position:absolute;left:0;top:7px;bottom:7px;width:3px;border-radius:9px;background:var(--dn-a);}",
      ".dn-nav{align-self:center;width:48px;height:48px;flex-shrink:0;border:1px solid #e2e0ee;border-radius:50%;cursor:pointer;background:#fff;color:var(--dn-a);box-shadow:0 8px 20px rgba(35,36,51,.12);display:grid;place-items:center;transition:.16s;}",
      ".dn-nav:hover:not(:disabled){background:var(--dn-a);color:#fff;transform:scale(1.06);}",
      ".dn-nav:disabled{opacity:.3;cursor:default;box-shadow:none;}",
      ".dn-nav svg{width:21px;height:21px}",
      ".dn-book{flex:1;min-width:0;position:relative;height:58vh;}",
      ".dn-book.dn-single{max-width:780px;margin:0 auto;}",
      ".dn-paper{position:relative;height:100%;border-radius:14px;padding:24px 26px;display:flex;gap:46px;overflow:hidden;background:linear-gradient(#fdfcf8,#fdfcf8) padding-box,repeating-linear-gradient(#fdfcf8 0 27px,#f0ede3 27px 28px);box-shadow:0 20px 46px rgba(35,36,51,.22),inset 0 0 0 1px #f4efe1,0 3px 0 #ece4d3;border:1px solid #efeadb;justify-content:center;}",
      ".dn-book:not(.dn-single) .dn-paper::before{content:'';position:absolute;top:14px;bottom:14px;left:50%;transform:translateX(-50%);width:44px;z-index:2;pointer-events:none;background:linear-gradient(90deg,rgba(35,36,51,0),rgba(35,36,51,.05) 44%,rgba(35,36,51,.08) 50%,rgba(35,36,51,.05) 56%,rgba(35,36,51,0));}",
      ".dn-spine{position:absolute;top:16px;bottom:16px;left:50%;transform:translateX(-50%);width:30px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;z-index:6;pointer-events:none;}",
      ".dn-book.dn-single .dn-spine{left:16px;width:26px;}",
      ".dn-book.dn-single .dn-paper{justify-content:flex-start;}",
      ".dn-book.dn-single .dn-leaf{padding-left:26px;}",
      ".dn-coil{position:relative;width:100%;height:10px;}",
      ".dn-coil .h{position:absolute;top:2px;width:6px;height:6px;border-radius:50%;background:radial-gradient(60% 65% at 50% 30%,#5b5f70,#262833 62%,#131419);box-shadow:inset 0 1px 1.5px rgba(0,0,0,.75),0 1px 0 rgba(255,255,255,.5);}",
      ".dn-coil .h.l{left:0}.dn-coil .h.r{right:0}",
      ".dn-coil .w{position:absolute;left:3px;right:3px;top:0;height:10px;border-radius:7px;transform:skewX(-24deg);background:linear-gradient(180deg,#fff 0%,#dfe2ea 15%,#abb0be 38%,#7b8090 50%,#f1f3f8 60%,#b2b7c4 75%,#787d8c 92%,#969ba9 100%);box-shadow:0 1.5px 3px rgba(35,36,51,.4),inset 0 1px 1px rgba(255,255,255,.95),inset 0 -1px 1px rgba(0,0,0,.28);}",
      ".dn-leaf{flex:0 0 auto;height:100%;overflow:auto;padding-right:5px;}",
      ".dn-leaf::-webkit-scrollbar{width:0}",
      ".dn-ink{position:absolute;inset:0;z-index:5;pointer-events:none;border-radius:14px;touch-action:none;}",
      ".dn-book.dn-draw .dn-ink{pointer-events:auto;cursor:crosshair;}",
      ".dn-c0{--sec:#2f5fd0;--secbg:#eef4ff;--secbd:#d5e3fb}",
      ".dn-c1{--sec:#b83a72;--secbg:#fdeef4;--secbd:#f5d6e4}",
      ".dn-c2{--sec:#0f8a63;--secbg:#eafaf4;--secbd:#cceede}",
      ".dn-c3{--sec:#b5730a;--secbg:#fff5e6;--secbd:#f4e2c2}",
      ".dn-c4{--sec:#5b46c9;--secbg:#f1eefc;--secbd:#e0d8f7}",
      ".dn-hero{margin:0 0 16px;background:linear-gradient(135deg,var(--dn-al,#a78bfa),var(--dn-a));border-radius:15px;padding:16px 20px;box-shadow:0 12px 26px rgba(35,36,51,.16);}",
      ".dn-eyebrow{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.9);margin-bottom:6px;}",
      ".dn-hero h1{margin:0;font-size:24px;font-weight:600;line-height:1.1;letter-spacing:-.01em;color:#fff;}",
      ".dn-hero .meta{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;}",
      ".dn-hero .meta span{font-size:10.5px;font-weight:600;color:#fff;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.28);border-radius:99px;padding:3px 10px;}",
      ".dn-hero .rule{display:none;}",
      ".dn-sec{display:flex;align-items:center;gap:11px;margin:12px 0 11px;}",
      ".dn-sec .b{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;flex-shrink:0;background:var(--secbg,var(--dn-as));color:var(--sec,var(--dn-a));}",
      ".dn-sec .b svg{width:18px;height:18px}",
      ".dn-sec h2{margin:0;font-size:16.5px;font-weight:600;letter-spacing:-.01em;flex:1;color:var(--sec,#232433);}",
      ".dn-sec .ln{flex:1;height:2px;border-radius:9px;background:repeating-linear-gradient(90deg,var(--secbd,#e7e5ee) 0 6px,transparent 6px 11px);max-width:70px;}",
      ".dn-p{font-size:13px;line-height:1.62;color:#3a3d52;margin:0 0 11px;}",
      ".dn-p b,.dn-li b{color:#232433;font-weight:600;}",
      ".dn-card{background:var(--secbg,#fff);border:1px solid var(--secbd,#e7e5ee);border-left:3px solid var(--sec,var(--dn-a));border-radius:11px;padding:11px 14px;margin:0 0 11px;box-shadow:0 3px 11px rgba(35,36,51,.05);}",
      ".dn-card ul{margin:0;padding:0;list-style:none;}",
      ".dn-li{position:relative;font-size:12.5px;line-height:1.5;color:#3a3d52;padding-left:15px;margin-bottom:5px;}",
      ".dn-li:last-child{margin-bottom:0}",
      ".dn-li::before{content:'';position:absolute;left:2px;top:7px;width:5px;height:5px;border-radius:50%;background:var(--sec,var(--dn-a));opacity:.7;}",
      ".dn-formula{background:var(--secbg,var(--dn-as));border:1px solid var(--secbd,#e6e0fb);border-radius:10px;padding:11px 14px;font-family:ui-monospace,Menlo,monospace;font-size:13px;color:#3a3550;margin:0 0 12px;overflow-x:auto;}",
      ".dn-note{background:#fff0f1;border:1px solid #f6dbe1;border-radius:11px;padding:10px 13px 10px 36px;font-size:12.5px;color:#5a2f3a;position:relative;margin:0 0 9px;}",
      ".dn-note .ni{position:absolute;left:11px;top:10px;color:#c0435a;}",
      ".dn-note .ni svg{width:15px;height:15px}",
      ".dn-note b{color:#c0435a;font-weight:700;}",
      ".dn-chip{background:#fff;border:1px solid #eae7f3;border-radius:10px;padding:9px 13px;font-size:12.5px;color:#3a3d52;display:flex;align-items:center;gap:10px;box-shadow:0 3px 9px rgba(35,36,51,.05);margin:0 0 8px;}",
      ".dn-chip .k{font-family:'Fraunces',serif;background:var(--dn-as);color:var(--dn-ai);font-weight:600;font-size:11px;border-radius:7px;padding:3px 8px;flex-shrink:0;}",
      ".dn-tools{width:58px;flex-shrink:0;background:#fff;border:1px solid #eceef6;border-radius:16px;padding:8px 7px;box-shadow:0 12px 30px rgba(35,36,51,.08);display:flex;flex-direction:column;align-items:center;gap:4px;}",
      ".dn-tbtn{width:42px;height:38px;border-radius:11px;border:1px solid transparent;background:transparent;color:#5b6080;cursor:pointer;display:grid;place-items:center;}",
      ".dn-tbtn svg{width:19px;height:19px}",
      ".dn-tbtn:hover{background:#f4f5fb;color:#232433}",
      ".dn-tbtn.on{background:var(--dn-as);color:var(--dn-ai);border:1px solid #e2dbfb}",
      ".dn-sep{width:26px;height:1px;background:#eceef2;margin:2px 0}",
      ".dn-sw{width:22px;height:22px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #dcdfea;cursor:pointer;margin:2px 0;}",
      ".dn-sw.on{box-shadow:0 0 0 2px var(--dn-a);transform:scale(1.1)}",
      ".dn-pager{display:flex;align-items:center;justify-content:center;gap:13px;margin-top:8px;}",
      ".dn-pager .dots{display:flex;gap:6px;}",
      ".dn-pager .dots i{width:7px;height:7px;border-radius:50%;background:#c7cad8;transition:.2s;}",
      ".dn-pager .dots i.on{background:var(--dn-a);width:19px;border-radius:9px;}",
      ".dn-pager .ind{font-size:12px;font-weight:600;color:#6a6f88;font-family:'Fraunces',serif;}",
      ".dn-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(18px);background:#232433;color:#fff;font-size:12.5px;font-weight:600;padding:9px 18px;border-radius:99px;box-shadow:0 10px 26px rgba(35,36,51,.3);opacity:0;pointer-events:none;transition:.25s;z-index:9000;}",
      ".dn-toast.show{opacity:1;transform:translateX(-50%) translateY(0);}",
      ".dn-navCollapse{position:absolute;top:16px;right:12px;width:30px;height:30px;border-radius:9px;border:1px solid #e6e9f4;background:#fff;color:#4c5069;cursor:pointer;display:grid;place-items:center;z-index:20;box-shadow:0 2px 8px rgba(35,36,51,.08);}",
      ".dn-navCollapse:hover{background:#f4f5fb;color:#232433}",
      ".dn-navCollapse svg{width:17px;height:17px}",
      ".dn-navShow{position:fixed;top:14px;left:14px;z-index:1000;width:40px;height:40px;border-radius:11px;border:1px solid #e2e0ee;background:#fff;color:#4f6ef2;cursor:pointer;display:none;place-items:center;box-shadow:0 8px 22px rgba(35,36,51,.18);}",
      ".dn-navShow:hover{background:#4f6ef2;color:#fff}",
      ".dn-navShow svg{width:21px;height:21px}",
      ".sidebar{transition:transform .24s ease;}",
      ".main-wrap{transition:margin-left .24s ease;}",
      "body.dn-nav-hidden .dn-navShow{display:grid;}",
      "body.dn-nav-hidden .sidebar{transform:translateX(-100%);}",
      "body.dn-nav-hidden .main-wrap{margin-left:0!important;}",
      "@media(max-width:900px){.dn-navCollapse,.dn-navShow{display:none!important}}",
      "@media(max-width:767px){.dn-toc{display:none}.dn-stage{gap:8px;min-width:0}.dn-book{width:100%}.dn-tools{width:46px}.dn-tools .dn-tbtn{width:36px;height:34px}.dn-stage>.dn-nav{width:38px;height:38px}.dn-stage>.dn-nav svg{width:17px;height:17px}.dn-paper{padding:16px 14px;gap:34px}.dn-hero h1{font-size:20px}.dn-hero{padding:13px 15px}.dn-modes button[data-mode='spread']{display:none}.dn-pager{gap:16px}.dn-pager .dn-nav{width:38px;height:38px;box-shadow:0 4px 13px rgba(35,36,51,.16)}.dn-pager .dn-nav svg{width:18px;height:18px}}"
    ].join("\n");
    document.head.appendChild(s);
  }

  var ICONS = {
    book: "<rect x='4' y='4' width='16' height='16' rx='2'/><path d='M9 4v16'/>",
    two: "<rect x='3' y='5' width='8' height='14' rx='1.5'/><rect x='13' y='5' width='8' height='14' rx='1.5'/>",
    one: "<rect x='6' y='4' width='12' height='16' rx='1.5'/>",
    eye: "<path d='M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z'/><circle cx='12' cy='12' r='2.6'/>",
    pen: "<path d='M4 20l1-4L15 6l3 3L8 19z'/><path d='M13.5 7.5l3 3'/>",
    marker: "<path d='M4 19h6'/><path d='M7 16l8-8 3 3-8 8H7z'/><path d='M13 6l3 3'/>",
    eraser: "<path d='M4 15l7-7 6 6-3 3H8z'/><path d='M9 20h9'/>",
    trash: "<path d='M5 7h14'/><path d='M9 7V5h6v2'/><path d='M7 7l1 12h8l1-12'/>",
    check: "<path d='M5 12l4 4 10-10'/>",
    chevL: "<path d='M15 5l-7 7 7 7'/>",
    chevR: "<path d='M9 5l7 7-7 7'/>",
    landmark: "<path d='M12 3l8 5H4z'/><path d='M5 20V10M9.5 20V10M14.5 20V10M19 20V10'/><path d='M3 20h18'/>",
    star: "<path d='M12 3.5l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.9l6.1-.8z'/>",
    alert: "<path d='M12 4l8.5 15H3.5z'/><path d='M12 10v4'/><circle cx='12' cy='16.8' r='.9' fill='currentColor' stroke='none'/>",
    target: "<circle cx='12' cy='12' r='8'/><circle cx='12' cy='12' r='3'/>",
    menu: "<path d='M4 6h16M4 12h16M4 18h16'/>",
    panel: "<rect x='3' y='4' width='18' height='16' rx='2'/><path d='M9 4v16'/>",
    compass: "<circle cx='12' cy='12' r='9'/><path d='M15.5 8.5l-2.2 5.3-4.8 1.7 2.2-5.3z'/>"
  };
  function svg(name, sw) {
    return "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='" + (sw || 1.7) + "' stroke-linecap='round' stroke-linejoin='round'>" + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- ETİKET: Konu Anlatımı -> Ders Notları ---------- */
  function renameLabels(root) {
    try {
      var els = (root || document).querySelectorAll("a,button,span,h1,h2,li,div");
      for (var i = 0; i < els.length; i++) {
        var n = els[i];
        if (n.children.length === 0 && n.textContent && n.textContent.trim() === "Konu Anlatımı") {
          n.textContent = "Ders Notları";
        }
      }
    } catch (e) {}
  }

  /* ---------- YARDIMCI ---------- */
  function slug(s) { return (s || "").toLowerCase().replace(/[^a-z0-9ğüşiöç]+/gi, "-").replace(/^-|-$/g, "").slice(0, 60); }
  function resolveColor(host, cssColor) {
    try {
      var t = document.createElement("span"); t.style.color = cssColor; t.style.display = "none";
      host.appendChild(t); var c = getComputedStyle(t).color; host.removeChild(t);
      var m = c.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (m) return [+m[1], +m[2], +m[3]];
    } catch (e) {}
    return [124, 92, 255];
  }

  /* ---------- ANA DÖNÜŞÜM ---------- */
  function enhance(body) {
    body.setAttribute("data-dn", "1");
    var head = document.querySelector(".konu-head");
    var objBox = document.querySelector(".konu-box-obj");
    var misBox = document.querySelector(".konu-box-mis");
    if (!head) throw new Error("konu-head yok");

    var titleEl = head.querySelector(".konu-head-title");
    var title = titleEl ? titleEl.textContent.trim() : "Ders Notu";
    var eyebrow = (head.querySelector(".konu-head-eyebrow") || {}).textContent || "";
    var metaEl = head.querySelector(".konu-head-meta");
    var metaBits = metaEl ? [].map.call(metaEl.querySelectorAll("span"), function (s) { return s.textContent.trim(); }) : [];

    var rgb = resolveColor(head, getComputedStyle(head).getPropertyValue("--accent") || "#7c5cff");
    var A = "rgb(" + rgb.join(",") + ")";
    var As = "rgba(" + rgb.join(",") + ",.10)";
    var Ai = "rgb(" + rgb.map(function (v) { return Math.round(v * 0.62); }).join(",") + ")";
    var Al = "rgb(" + rgb.map(function (v) { return Math.round(v + (255 - v) * 0.34); }).join(",") + ")";

    /* içerik bloklarını topla */
    var blocks = [], marks = [];
    function P(el, cls, html) { var d = document.createElement(el); if (cls) d.className = cls; if (html != null) d.innerHTML = html; return d; }

    // HERO
    var hero = P("div", "dn-hero");
    var heroHtml = "<div class='dn-eyebrow'>" + svg("book") + (eyebrow ? eyebrow.toUpperCase() : "DERS NOTU") + "</div>" +
      "<h1 class='dn-serif'>" + title + "</h1>";
    if (metaBits.length) heroHtml += "<div class='meta'>" + metaBits.map(function (m) { return "<span>" + m + "</span>"; }).join("") + "</div>";
    heroHtml += "<div class='rule'></div>";
    hero.innerHTML = heroHtml;
    blocks.push(hero); marks.push({ label: "Giriş", node: hero, no: true });

    // içerik: body'nin çocuklarını dolaş — bölüm başına renk döndür
    var kids = [].slice.call(body.children);
    var firstH2skipped = false;
    var secColor = -1;
    var secIcons = ["landmark", "target", "star", "book", "compass"];
    function cc() { return "dn-c" + (secColor < 0 ? 0 : secColor % 5); }
    kids.forEach(function (k) {
      var tag = k.tagName ? k.tagName.toLowerCase() : "";
      if (tag === "h2" && !firstH2skipped) { firstH2skipped = true; return; } // ilk h2 = başlık, hero'da zaten var
      if (tag === "h2" || tag === "h3") {
        secColor++;
        var ic = secIcons[secColor % secIcons.length];
        var sec = P("div", "dn-sec dn-move " + cc(), "<div class='b'>" + svg(ic) + "</div><h2 class='dn-serif'>" + k.innerHTML + "</h2><div class='ln'></div>");
        blocks.push(sec); marks.push({ label: k.textContent.trim(), node: sec });
      } else if (k.classList && k.classList.contains("formula")) {
        blocks.push(P("div", "dn-formula " + cc(), k.innerHTML));
      } else if (tag === "ul" || tag === "ol") {
        var card = P("div", "dn-card " + cc());
        var ul = P("ul");
        [].forEach.call(k.children, function (li) { ul.appendChild(P("li", "dn-li", li.innerHTML)); });
        card.appendChild(ul); blocks.push(card);
      } else if (tag === "p") {
        blocks.push(P("p", "dn-p", k.innerHTML));
      } else if (k.innerHTML != null && k.textContent.trim()) {
        blocks.push(P("div", "dn-p", k.innerHTML));
      }
    });

    // KAZANIMLAR (objectives)
    if (objBox) {
      var oli = objBox.querySelectorAll("li");
      if (oli.length) {
        var os = P("div", "dn-sec", "<div class='b'>" + svg("target") + "</div><h2 class='dn-serif'>Kazanımlar</h2><div class='ln'></div>");
        os.classList.add("dn-move"); blocks.push(os); marks.push({ label: "Kazanımlar", node: os });
        [].forEach.call(oli, function (li, i) {
          blocks.push(P("div", "dn-chip", "<span class='k'>" + (i + 1) + "</span><span>" + li.innerHTML + "</span>"));
        });
      }
    }
    // SIK YAPILAN HATALAR (commonMistakes)
    if (misBox) {
      var mli = misBox.querySelectorAll("li");
      if (mli.length) {
        var ms = P("div", "dn-sec", "<div class='b' style='background:#fff0f1;color:#c0435a'>" + svg("alert") + "</div><h2 class='dn-serif'>Sık Yapılan Hatalar</h2><div class='ln'></div>");
        ms.classList.add("dn-move"); blocks.push(ms); marks.push({ label: "Sık Yapılan Hatalar", node: ms });
        [].forEach.call(mli, function (li) {
          blocks.push(P("div", "dn-note", "<span class='ni'>" + svg("alert") + "</span>" + li.innerHTML));
        });
      }
    }

    /* ---------- KABUK ---------- */
    var wrap = P("div", "dn-wrap");
    wrap.style.setProperty("--dn-a", A); wrap.style.setProperty("--dn-as", As); wrap.style.setProperty("--dn-ai", Ai); wrap.style.setProperty("--dn-al", Al);
    wrap.innerHTML =
      "<div class='dn-toolbar'>" +
        "<div class='dn-brand'><span class='mk'>" + svg("book", 1.8) + "</span>Ders Notları · Defter</div>" +
        "<div class='dn-modes'>" +
          "<button data-mode='spread' class='on'>" + svg("two") + "İki Sayfa</button>" +
          "<button data-mode='single'>" + svg("one") + "Tek Sayfa</button>" +
        "</div>" +
      "</div>" +
      "<div class='dn-stage'>" +
        "<nav class='dn-toc'><h4>İçindekiler</h4><div class='dn-toc-list'></div><div style='flex:1'></div></nav>" +
        "<button class='dn-nav dn-prev' aria-label='Önceki'>" + svg("chevL", 2.4) + "</button>" +
        "<div class='dn-book'><canvas class='dn-ink'></canvas><div class='dn-spine'></div><div class='dn-paper'></div></div>" +
        "<button class='dn-nav dn-next' aria-label='Sonraki'>" + svg("chevR", 2.4) + "</button>" +
        "<div class='dn-tools'>" +
          "<button class='dn-tbtn on' data-tool='none' title='Oku'>" + svg("eye", 1.6) + "</button>" +
          "<button class='dn-tbtn' data-tool='pen' title='Kalem'>" + svg("pen", 1.6) + "</button>" +
          "<button class='dn-tbtn' data-tool='hi' title='Fosforlu'>" + svg("marker", 1.6) + "</button>" +
          "<button class='dn-tbtn' data-tool='eraser' title='Silgi'>" + svg("eraser", 1.6) + "</button>" +
          "<div class='dn-swatches'></div><div class='dn-sep'></div>" +
          "<button class='dn-tbtn dn-clear' title='Temizle'>" + svg("trash", 1.6) + "</button>" +
          "<button class='dn-tbtn dn-save' title='Kaydet'>" + svg("check", 1.6) + "</button>" +
        "</div>" +
      "</div>" +
      "<div class='dn-pager'><span class='dots'></span><span class='ind'></span></div>";

    // ekle & orijinali gizle
    head.parentNode.insertBefore(wrap, head);
    [head, objBox, body, misBox].forEach(function (n) { if (n) n.style.display = "none"; });

    setup(wrap, blocks, marks, slug(eyebrow + "-" + title));
  }

  /* ---------- SAYFALAMA + ETKİLEŞİM ---------- */
  function setup(wrap, blocks, marks, noteKey) {
    var book = wrap.querySelector(".dn-book"), paper = wrap.querySelector(".dn-paper"), spine = wrap.querySelector(".dn-spine");
    var tocList = wrap.querySelector(".dn-toc-list"), prev = wrap.querySelector(".dn-prev"), next = wrap.querySelector(".dn-next");
    var ind = wrap.querySelector(".ind"), dots = wrap.querySelector(".dots"), modes = wrap.querySelector(".dn-modes");
    var ink = wrap.querySelector(".dn-ink"), ctx = ink.getContext("2d"), tools = wrap.querySelector(".dn-tools"), swWrap = wrap.querySelector(".dn-swatches");
    var mode = "spread", base = 0, leaves = [], N = 0, markLeaf = [];

    function pageMetrics() {
      var cs = getComputedStyle(paper);
      var padL = parseFloat(cs.paddingLeft) || 28, padT = parseFloat(cs.paddingTop) || 24, gap = parseFloat(cs.columnGap || cs.gap) || 60;
      var innerW = paper.clientWidth - padL * 2;
      var pageW;
      if (mode === "single") {
        // Tek sayfa: mevcut genişliği doldur ama ASLA paper'ı aşma → yatay taşma/kesilme yok
        pageW = Math.min(Math.max(200, innerW - 30), innerW);
      } else {
        pageW = Math.max(200, Math.floor((innerW - gap) / 2));
      }
      var pageH = paper.clientHeight - padT * 2 - 4;
      return { pageW: pageW, pageH: pageH };
    }
    function targetH() {
      var top = book.getBoundingClientRect().top;
      var reserve = window.innerWidth < 768 ? 150 : 220; // altındaki pager + butonlar + konu-nav için yer
      return Math.max(340, Math.min(820, window.innerHeight - top - reserve));
    }
    function paginate() {
      book.style.height = targetH() + "px";
      var m = pageMetrics();
      var meas = document.createElement("div");
      meas.style.cssText = "position:absolute;left:-99999px;top:0;visibility:hidden;";
      book.appendChild(meas);
      function newPage() { var p = document.createElement("div"); p.className = "dn-leaf"; p.style.width = m.pageW + "px"; return p; }
      var pages = [], p = newPage(); meas.appendChild(p);
      for (var i = 0; i < blocks.length; i++) {
        var b = blocks[i]; p.appendChild(b);
        if (p.scrollHeight > m.pageH && p.childElementCount > 1) {
          p.removeChild(b);
          var carry = null, last = p.lastElementChild;
          if (last && last.classList.contains("dn-move")) { carry = last; p.removeChild(last); }
          pages.push(p); p = newPage(); meas.appendChild(p);
          if (carry) p.appendChild(carry);
          p.appendChild(b);
        }
      }
      pages.push(p);
      paper.innerHTML = "";
      pages.forEach(function (pg) { pg.style.width = m.pageW + "px"; paper.appendChild(pg); });
      book.removeChild(meas);
      leaves = pages; N = pages.length;
      markLeaf = marks.map(function (mk) { for (var j = 0; j < pages.length; j++) if (pages[j].contains(mk.node)) return j; return 0; });
      buildToc();
      if (base > N - 1) base = 0; if (mode === "spread") base -= base % 2;
    }
    function buildToc() {
      tocList.innerHTML = "";
      marks.forEach(function (mk, i) {
        var b = document.createElement("button"); b.dataset.leaf = markLeaf[i];
        b.innerHTML = "<span class='no'>" + ("0" + (i + 1)).slice(-2) + "</span><span class='nm'>" + mk.label + "</span><span class='dot' style='background:var(--dn-a)'></span>";
        b.addEventListener("click", function () { go(+b.dataset.leaf); });
        tocList.appendChild(b);
      });
      dots.innerHTML = ""; for (var k = 0; k < N; k++) dots.appendChild(document.createElement("i"));
    }
    function step() { return mode === "spread" ? 2 : 1; }
    function visible() { return mode === "spread" ? [base, base + 1] : [base]; }
    function layoutRings() {
      var h = paper.offsetHeight - 30, n = Math.max(9, Math.floor(h / 22));
      spine.innerHTML = "";
      for (var i = 0; i < n; i++) { var c = document.createElement("div"); c.className = "dn-coil"; c.innerHTML = "<span class='h l'></span><span class='h r'></span><span class='w'></span>"; spine.appendChild(c); }
    }
    function render() {
      persist();
      var vis = visible();
      var real = vis.filter(function (i) { return i < N; });
      var lone = mode === "spread" && real.length === 1;
      book.classList.toggle("dn-single", mode === "single" || lone);
      leaves.forEach(function (l, i) { l.style.display = real.indexOf(i) > -1 ? "block" : "none"; l.scrollTop = 0; });
      var T = targetH(), maxc = 0;
      real.forEach(function (i) { maxc = Math.max(maxc, leaves[i].scrollHeight); });
      // tek sayfa/lone: içeriğe göre kısal; iki sayfa: sabit hedef yükseklik
      book.style.height = ((mode === "single" || lone) ? Math.max(300, Math.min(maxc + 50, T)) : T) + "px";
      ind.textContent = (mode === "spread" && real.length === 2) ? (base + 1) + "–" + (base + 2) + " / " + N : (base + 1) + " / " + N;
      prev.disabled = base <= 0; next.disabled = base + step() >= N;
      [].forEach.call(tocList.children, function (b) { b.classList.toggle("active", real.indexOf(+b.dataset.leaf) > -1); });
      [].forEach.call(dots.children, function (d, i) { d.classList.toggle("on", real.indexOf(i) > -1); });
      layoutRings(); sizeCanvas(); restore();
    }
    function go(b) { base = Math.max(0, Math.min(b, N - 1)); if (mode === "spread") base -= base % 2; render(); }
    prev.addEventListener("click", function () { go(base - step()); });
    next.addEventListener("click", function () { go(base + step()); });
    modes.addEventListener("click", function (e) {
      var btn = e.target.closest("button"); if (!btn) return;
      mode = btn.dataset.mode; book.classList.toggle("dn-single", mode === "single");
      [].forEach.call(modes.children, function (x) { x.classList.toggle("on", x.dataset.mode === mode); });
      if (mode === "spread") base -= base % 2;
      setTimeout(function () { paginate(); render(); }, 60);
    });

    /* --- not alma --- */
    var notes = {}; try { notes = JSON.parse(localStorage.getItem(LS + noteKey)) || {}; } catch (e) {}
    var tool = "none", curKey = null, cssW = 0, cssH = 0, drawing = false, lx = 0, ly = 0;
    var penPal = ["#232433", "#2563eb", "#e11d48", "#16a34a", "#7c5cff"], hiPal = ["#fde047", "#fca5a5", "#86efac", "#93c5fd", "#d8b4fe"];
    var penColor = penPal[0], hiColor = hiPal[0];
    function keyOf() { return mode + "-" + base; }
    function sizeCanvas() {
      var r = paper.getBoundingClientRect(); cssW = r.width; cssH = r.height;
      var dpr = window.devicePixelRatio || 1;
      ink.width = Math.round(cssW * dpr); ink.height = Math.round(cssH * dpr);
      ink.style.width = cssW + "px"; ink.style.height = cssH + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.lineCap = "round"; ctx.lineJoin = "round";
    }
    function persist() { if (curKey != null && ink.width) try { notes[curKey] = ink.toDataURL(); } catch (e) {} }
    function saveStore() { try { localStorage.setItem(LS + noteKey, JSON.stringify(notes)); } catch (e) {} }
    function restore() {
      curKey = keyOf(); ctx.clearRect(0, 0, cssW, cssH);
      var d = notes[curKey]; if (d) { var im = new Image(); im.onload = function () { ctx.drawImage(im, 0, 0, cssW, cssH); }; im.src = d; }
    }
    function styleFor() {
      if (tool === "pen") { ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1; ctx.strokeStyle = penColor; ctx.lineWidth = 2.6; }
      else if (tool === "hi") { ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = .32; ctx.strokeStyle = hiColor; ctx.lineWidth = 15; }
      else if (tool === "eraser") { ctx.globalCompositeOperation = "destination-out"; ctx.globalAlpha = 1; ctx.lineWidth = 22; }
    }
    ink.addEventListener("pointerdown", function (e) {
      if (tool === "none") return; drawing = true; try { ink.setPointerCapture(e.pointerId); } catch (_) {}
      styleFor(); lx = e.offsetX; ly = e.offsetY; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx + .01, ly + .01); ctx.stroke();
    });
    ink.addEventListener("pointermove", function (e) {
      if (!drawing) return; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); lx = e.offsetX; ly = e.offsetY;
    });
    function endDraw() { if (!drawing) return; drawing = false; persist(); saveStore(); }
    ink.addEventListener("pointerup", endDraw); ink.addEventListener("pointercancel", endDraw); window.addEventListener("pointerup", endDraw);
    function buildSwatches() {
      swWrap.innerHTML = ""; var pal = tool === "pen" ? penPal : tool === "hi" ? hiPal : null; if (!pal) return;
      var cur = tool === "pen" ? penColor : hiColor;
      pal.forEach(function (c) { var s = document.createElement("div"); s.className = "dn-sw" + (c === cur ? " on" : ""); s.style.background = c; s.addEventListener("click", function () { if (tool === "pen") penColor = c; else hiColor = c; buildSwatches(); }); swWrap.appendChild(s); });
    }
    function setTool(t) {
      tool = t; [].forEach.call(tools.querySelectorAll(".dn-tbtn[data-tool]"), function (b) { b.classList.toggle("on", b.dataset.tool === t); });
      book.classList.toggle("dn-draw", t !== "none"); buildSwatches();
    }
    tools.addEventListener("click", function (e) { var b = e.target.closest(".dn-tbtn"); if (b && b.dataset.tool) setTool(b.dataset.tool); });
    function toast(msg) { var t = document.createElement("div"); t.className = "dn-toast"; t.textContent = msg; document.body.appendChild(t); requestAnimationFrame(function () { t.classList.add("show"); }); setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 1500); }
    wrap.querySelector(".dn-clear").addEventListener("click", function () { ctx.clearRect(0, 0, cssW, cssH); notes[curKey] = null; saveStore(); toast("Sayfa temizlendi"); });
    wrap.querySelector(".dn-save").addEventListener("click", function () { persist(); saveStore(); toast("Notlar kaydedildi"); });

    // klavye (yalnızca bu ekran görünürken)
    function onKey(e) { if (!document.body.contains(wrap)) { document.removeEventListener("keydown", onKey); return; } if (e.key === "ArrowRight") next.click(); if (e.key === "ArrowLeft") prev.click(); }
    document.addEventListener("keydown", onKey);
    // yeniden boyut
    var rt; window.addEventListener("resize", function () {
      if (!document.body.contains(wrap)) return;
      clearTimeout(rt);
      rt = setTimeout(function () {
        // mobile'a küçülünce iki sayfada kalmışsa tek sayfaya zorla (iki sayfa mobilde gizli)
        if (window.innerWidth < 768 && mode === "spread") {
          mode = "single"; book.classList.add("dn-single");
          [].forEach.call(modes.children, function (x) { x.classList.toggle("on", x.dataset.mode === "single"); });
        }
        paginate(); render();
      }, 200);
    });

    // mobilde (<768px) varsayılan tek sayfa + gezinme oklarını alt pager'a taşı
    // (böylece defter yatayda daralmaz; "İki Sayfa" seçeneği CSS ile gizli)
    if (window.innerWidth < 768) {
      mode = "single"; book.classList.add("dn-single");
      [].forEach.call(modes.children, function (x) { x.classList.toggle("on", x.dataset.mode === "single"); });
      var pagerEl = wrap.querySelector(".dn-pager");
      if (pagerEl && prev && next) { pagerEl.insertBefore(prev, pagerEl.firstChild); pagerEl.appendChild(next); }
    }
    // ilk çizim (fontlar yüklendikten sonra ölçüm daha doğru)
    paginate(); render();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (document.body.contains(wrap)) { paginate(); render(); } });
    setTimeout(function () { if (document.body.contains(wrap)) { paginate(); render(); } }, 350);
  }

  /* ---------- BAŞLAT ---------- */
  function enhanceIfKonu() {
    var body = document.querySelector(".konu-body:not([data-dn])");
    if (!body) return;
    try { enhance(body); }
    catch (e) { console.warn("[ders-notlari] atlandı:", e && e.message); body.setAttribute("data-dn", "skip"); }
  }
  /* ---------- KENAR ÇUBUĞU AÇ/KAPA ---------- */
  function setupNavToggle() {
    var sb = document.querySelector(".sidebar");
    if (!sb || document.getElementById("dn-navCollapse")) return;
    function apply(h) {
      document.body.classList.toggle("dn-nav-hidden", h);
      try { localStorage.setItem("dn_nav_hidden", h ? "1" : "0"); } catch (e) {}
      setTimeout(function () { try { window.dispatchEvent(new Event("resize")); } catch (e) {} }, 260);
    }
    var cb = document.createElement("button");
    cb.id = "dn-navCollapse"; cb.className = "dn-navCollapse"; cb.type = "button";
    cb.setAttribute("aria-label", "Menüyü gizle"); cb.title = "Menüyü gizle";
    cb.innerHTML = svg("chevL", 2.1);
    cb.addEventListener("click", function () { apply(true); });
    sb.appendChild(cb);
    var xb = document.createElement("button");
    xb.id = "dn-navShow"; xb.className = "dn-navShow"; xb.type = "button";
    xb.setAttribute("aria-label", "Menüyü göster"); xb.title = "Menüyü göster";
    xb.innerHTML = svg("menu", 2.1);
    xb.addEventListener("click", function () { apply(false); });
    document.body.appendChild(xb);
    var saved = false; try { saved = localStorage.getItem("dn_nav_hidden") === "1"; } catch (e) {}
    if (saved) document.body.classList.add("dn-nav-hidden");
  }

  function boot() {
    injectStyles();
    setupNavToggle();
    renameLabels(document); enhanceIfKonu();
    var target = document.getElementById("app") || document.body;
    var mo = new MutationObserver(function () {
      mo.disconnect();
      renameLabels(document); enhanceIfKonu();
      mo.observe(target, { childList: true, subtree: true });
    });
    mo.observe(target, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  window.DersNotlari = { enhanceIfKonu: enhanceIfKonu };
})();
