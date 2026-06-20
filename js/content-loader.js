/* ============================================================
   TYT Hazirlik - Icerik Kayit Katmani (content-loader)
   Moduler icerigi (js/data/*.js) TYT_DATA'ya guvenle ekler.
   Surum isareti konsola yazilir; boylece canlida calisip
   calismadigi dogrulanabilir.
   ============================================================ */
(function (global) {
  // data.js veriyi `const TYT_DATA` ile tanımlar; const window'a bağlanmaz.
  // Bu yüzden önce doğrudan (script-scope) TYT_DATA'ya, sonra global'e bakarız.
  function D() {
    try { if (typeof TYT_DATA !== "undefined" && TYT_DATA && TYT_DATA.subjects) return TYT_DATA; } catch (e) {}
    return global.TYT_DATA;
  }

  function getSubject(id) {
    var d = D(); if (!d || !d.subjects) return null;
    for (var i = 0; i < d.subjects.length; i++) { if (d.subjects[i].id === id) return d.subjects[i]; }
    return null;
  }

  function allUnitIds() {
    var ids = {}, d = D(); if (!d) return ids;
    (d.subjects || []).forEach(function (s) { (s.units || []).forEach(function (u) { ids[u.id] = true; }); });
    return ids;
  }

  function ensureQuestionIds() {
    var d = D(); if (!d || !d.questions) return 0;
    var counter = {}, assigned = 0;
    d.questions.forEach(function (q) {
      if (!q.id) {
        var base = (q.subject || "x") + "-" + (q.unit || "x");
        counter[base] = (counter[base] || 0) + 1;
        q.id = base + "-" + String(counter[base]);
        assigned++;
      }
    });
    return assigned;
  }

  var TYT_CONTENT = {
    addSubject: function (subject) {
      var d = D(); if (!d) return null;
      var ex = getSubject(subject.id); if (ex) return ex;
      var s = { id: subject.id, name: subject.name, icon: subject.icon || "" };
      if (subject.branches) s.branches = subject.branches;
      s.units = subject.units || [];
      d.subjects.push(s); return s;
    },
    addUnits: function (subjectId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] addUnits: ders yok:", subjectId); return; }
      var have = allUnitIds();
      (units || []).forEach(function (u) { if (!have[u.id]) { s.units.push(u); have[u.id] = true; } });
    },
    replaceBranchUnits: function (subjectId, branchId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] replaceBranchUnits: ders yok:", subjectId); return; }
      s.units = s.units.filter(function (u) { return u.branch !== branchId; });
      (units || []).forEach(function (u) { s.units.push(u); });
    },
    upsertUnits: function (subjectId, units) {
      var s = getSubject(subjectId);
      if (!s) { console.error("[content-loader] upsertUnits: ders yok:", subjectId); return; }
      (units || []).forEach(function (u) {
        var idx = -1;
        for (var i = 0; i < s.units.length; i++) { if (s.units[i].id === u.id) { idx = i; break; } }
        if (idx >= 0) s.units[idx] = u; else s.units.push(u);
      });
    },
    remapQuestionUnits: function (map) {
      var d = D(); if (!d) return 0; var n = 0;
      d.questions.forEach(function (q) { if (map[q.unit]) { q.unit = map[q.unit]; n++; } });
      return n;
    },
    addQuestions: function (qs) {
      var d = D(); if (!d) return;
      var byId = {};
      d.questions.forEach(function (q) { if (q.id) byId[q.id] = true; });
      (qs || []).forEach(function (q) {
        if (q.id && byId[q.id]) return;
        d.questions.push(q); if (q.id) byId[q.id] = true;
      });
    },
    finalize: function () { return ensureQuestionIds(); }
  };

  global.TYT_CONTENT = TYT_CONTENT;
  if (typeof module !== "undefined" && module.exports) module.exports = TYT_CONTENT;
  try { console.info("[content-loader] yuklendi v26 - TYT_CONTENT hazir, TYT_DATA bagli: " + (!!D())); } catch (e) {}
})(typeof window !== "undefined" ? window : globalThis);
