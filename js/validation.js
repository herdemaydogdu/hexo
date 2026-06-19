/* ============================================================
   TYT Hazırlık — İçerik Doğrulama Motoru (Faz C)
   Doküman 3.15 kontrollerini uygular. Tarayıcıda ve Node'da çalışır.
     validateContent(TYT_DATA) -> { errors:[], warnings:[], stats:{} }
   errors = yayını engelleyen; warnings = dikkat edilmesi gereken.
   ============================================================ */
(function (global) {
  function validateContent(D) {
    var errors = [], warnings = [];
    if (!D || !D.subjects) { return { errors: ["TYT_DATA veya subjects yok"], warnings: [], stats: {} }; }

    // 1) Ünite/branş/ders id benzersizliği + ünite haritası
    var unitIds = {}, subjectIds = {};
    var stats = { subjects: {}, totalUnits: 0, totalQuestions: 0, unitsWithoutQuestion: [] };

    D.subjects.forEach(function (s) {
      if (subjectIds[s.id]) errors.push("Mükerrer ders id: " + s.id);
      subjectIds[s.id] = true;
      var brName = {}; (s.branches || []).forEach(function (b) { brName[b.id] = b.name; });
      stats.subjects[s.id] = { name: s.name, units: 0, questions: 0, branches: {} };

      (s.units || []).forEach(function (u) {
        if (unitIds[u.id]) errors.push("Mükerrer ünite id: " + u.id);
        unitIds[u.id] = { subject: s.id, branch: u.branch || null };
        stats.totalUnits++;
        stats.subjects[s.id].units++;
        if (u.branch) {
          stats.subjects[s.id].branches[u.branch] = stats.subjects[s.id].branches[u.branch] || { name: brName[u.branch] || u.branch, units: 0, questions: 0 };
          stats.subjects[s.id].branches[u.branch].units++;
        }
        if (!u.name) errors.push("Ünite adı boş: " + u.id);
        if (!u.content || !String(u.content).trim()) warnings.push("Ünite içeriği boş: " + u.id);
      });
    });

    // 2) Sorular
    var stems = {}, qIds = {};
    (D.questions || []).forEach(function (q, i) {
      var ref = q.id || (q.subject + "/" + q.unit + " #" + i);
      stats.totalQuestions++;

      if (q.id) { if (qIds[q.id]) errors.push("Mükerrer soru id: " + q.id); qIds[q.id] = true; }

      // unit referansı geçerli mi
      var u = unitIds[q.unit];
      if (!u) errors.push("Soru geçersiz üniteye bağlı (orphan): " + ref + " → unit=" + q.unit);
      else {
        stats.subjects[q.subject] && (stats.subjects[q.subject].questions++);
        if (u.branch && stats.subjects[q.subject] && stats.subjects[q.subject].branches[u.branch])
          stats.subjects[q.subject].branches[u.branch].questions++;
      }

      // seçenek sayısı
      var opts = q.options || [];
      if (opts.length !== 5) errors.push("5'ten farklı seçenek (" + opts.length + "): " + ref);
      // boş seçenek
      if (opts.some(function (o) { return !o || !String(o).trim(); })) errors.push("Boş seçenek: " + ref);
      // mükerrer seçenek
      var seen = {};
      opts.forEach(function (o) { var k = String(o).trim(); if (seen[k]) warnings.push("Aynı seçenek iki kez: " + ref + " → " + k); seen[k] = true; });
      // answer aralığı
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= opts.length || q.answer % 1 !== 0)
        errors.push("Geçersiz answer index (" + q.answer + "): " + ref);
      // kök ve açıklama
      var stem = q.stem || q.q;
      if (!stem || !String(stem).trim()) errors.push("Soru kökü boş: " + ref);
      if (!(q.explain || (q.solution && q.solution.short))) warnings.push("Açıklama/çözüm yok: " + ref);

      // mükerrer/yakın soru kökü
      if (stem) {
        var norm = String(stem).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
        if (stems[norm]) warnings.push("Mükerrer/çok benzer soru kökü: " + ref + " ≈ " + stems[norm]);
        else stems[norm] = ref;
      }

      // HTML etiket dengesi (kaba)
      [stem].concat(opts).forEach(function (t) {
        if (!t) return; var s = String(t);
        var open = (s.match(/<[a-z]/gi) || []).length, close = (s.match(/<\//g) || []).length;
        if (open !== close) warnings.push("Dengesiz HTML etiketi olabilir: " + ref);
      });
    });

    // 3) Sorusuz üniteler
    var qByUnit = {};
    (D.questions || []).forEach(function (q) { qByUnit[q.unit] = (qByUnit[q.unit] || 0) + 1; });
    Object.keys(unitIds).forEach(function (uid) { if (!qByUnit[uid]) stats.unitsWithoutQuestion.push(uid); });
    if (stats.unitsWithoutQuestion.length)
      warnings.push("Sorusuz ünite sayısı: " + stats.unitsWithoutQuestion.length);

    return { errors: errors, warnings: warnings, stats: stats };
  }

  global.validateContent = validateContent;
  if (typeof module !== "undefined" && module.exports) module.exports = { validateContent: validateContent };
})(typeof window !== "undefined" ? window : globalThis);
