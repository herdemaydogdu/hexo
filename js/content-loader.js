/* ============================================================
   TYT Hazırlık — İçerik Kayıt Katmanı (Faz B)
   Amaç: Modüler içerik dosyalarını (js/data/*.js) mevcut
   TYT_DATA'ya GÜVENLE ekler. data.js bozulmaz; yeni içerik
   yalnızca bu API üzerinden eklenir.

   Yükleme sırası (index.html):
     data.js → content-loader.js → data/*.js → (finalize) → app.js

   Tarayıcıda global TYT_CONTENT; Node'da module.exports.
   ============================================================ */
(function (global) {
  function D() { return global.TYT_DATA; }

  function getSubject(id) {
    var d = D(); if (!d) return null;
    return d.subjects.find(function (s) { return s.id === id; });
  }

  // Var olan tüm ünite id'lerini topla (mükerrer eklemeyi önlemek için)
  function unitIdSet() {
    var ids = {};
    (D().subjects || []).forEach(function (s) {
      (s.units || []).forEach(function (u) { ids[u.id] = true; });
    });
    return ids;
  }

  /* Kararlı soru id'si: id'si olmayan sorulara subject+unit+sıra ile
     deterministik kimlik verir. Böylece ilerleme/yanlış defteri eşlemesi
     metin değişse de korunur. */
  function ensureQuestionIds() {
    var d = D(); if (!d || !d.questions) return 0;
    var counter = {}; var assigned = 0;
    d.questions.forEach(function (q) {
      if (!q.id) {
        var base = (q.subject || "x") + "-" + (q.unit || "x");
        counter[base] = (counter[base] || 0) + 1;
        q.id = base + "-" + String(counter[base]).padStart(3, "0");
        assigned++;
      }
    });
    return assigned;
  }

  var TYT_CONTENT = {
    /* Yeni bir üst ders ekler (örn. Geometri). Varsa dokunmaz/döner. */
    addSubject: function (subject) {
      var d = D();
      var ex = getSubject(subject.id);
      if (ex) return ex;
      var s = { id: subject.id, name: subject.name, icon: subject.icon || "📐" };
      if (subject.branches) s.branches = subject.branches;
      s.units = subject.units || [];
      d.subjects.push(s);
      return s;
    },

    /* Bir derse (veya branşa) yeni üniteler ekler. Mevcut id varsa atlar. */
    addUnits: function (subjectId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] addUnits: ders bulunamadı:", subjectId); return; }
      var existing = unitIdSet();
      (units || []).forEach(function (u) {
        if (existing[u.id]) { console.warn("[content-loader] ünite zaten var, atlandı:", u.id); return; }
        s.units.push(u); existing[u.id] = true;
      });
    },

    /* Bir branşın TÜM ünitelerini yenileriyle değiştirir (birleştirme için).
       data.js'teki eski üniteler çalışma anında kaldırılır; dosya değişmez. */
    replaceBranchUnits: function (subjectId, branchId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] replaceBranchUnits: ders yok:", subjectId); return; }
      var removed = s.units.filter(function (u) { return u.branch === branchId; }).length;
      s.units = s.units.filter(function (u) { return u.branch !== branchId; });
      (units || []).forEach(function (u) { s.units.push(u); });
      console.info("[content-loader] " + branchId + ": " + removed + " ünite → " + (units || []).length + " ünite");
    },

    /* Üniteyi id'sine göre tam sürümüyle değiştirir; yoksa ekler (içerik
       zenginleştirme için). branch sırası korunur. */
    upsertUnits: function (subjectId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] upsertUnits: ders yok:", subjectId); return; }
      (units || []).forEach(function (u) {
        var i = s.units.findIndex(function (x) { return x.id === u.id; });
        if (i >= 0) s.units[i] = u; else s.units.push(u);
      });
    },

    /* Eski soru unit kimliklerini yenilerine eşler (birleştirme sonrası). */
    remapQuestionUnits: function (map) {
      var d = D(); var n = 0;
      d.questions.forEach(function (q) { if (map[q.unit]) { q.unit = map[q.unit]; n++; } });
      if (n) console.info("[content-loader] yeniden eşlenen soru unit:", n);
      return n;
    },

    /* Yeni sorular ekler. Aynı id'li soru varsa atlar. */
    addQuestions: function (qs) {
      var d = D();
      var byId = {};
      d.questions.forEach(function (q) { if (q.id) byId[q.id] = true; });
      (qs || []).forEach(function (q) {
        if (q.id && byId[q.id]) { console.warn("[content-loader] soru id zaten var, atlandı:", q.id); return; }
        d.questions.push(q); if (q.id) byId[q.id] = true;
      });
    },

    /* Tüm modüller yüklendikten sonra app.js'ten ÖNCE çağrılır. */
    finalize: function () {
      var n = ensureQuestionIds();
      if (n) console.info("[content-loader] kararlı id atanan soru:", n);
      return n;
    },

    _ensureQuestionIds: ensureQuestionIds
  };

  global.TYT_CONTENT = TYT_CONTENT;
  if (typeof module !== "undefined" && module.exports) module.exports = TYT_CONTENT;
})(typeof window !== "undefined" ? window : globalThis);
