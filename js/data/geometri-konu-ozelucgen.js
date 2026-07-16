/* ============================================================
   GEOMETRİ — Dik ve Özel Üçgenler: ünite tanımı (özgün içerik)
   content-loader.upsertUnits ile "geometri" dersine eklenir.
   Tümü özgün (sourceType/originalityStatement:true).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-konu-ozelucgen: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("geometri", [
    {
      id: "geo-ozelucgen", name: "Dik ve Özel Üçgenler", branch: null,
      summary: "Pisagor bağıntısı, Pisagor üçlüleri, 30-60-90 ve 45-45-90 özel üçgenleri, Öklid bağıntıları.",
      curriculumRefs: ["2026-YKS Geometri: Dik üçgen ve trigonometri; Pisagor; Öklid"],
      prerequisites: ["geo-acilar", "geo-alan"], estimatedMinutes: 22, difficulty: 3,
      objectives: [
        "Pisagor bağıntısı ile dik üçgenin kenarlarını hesaplar.",
        "Sık kullanılan Pisagor üçlülerini tanır ve katlarını kullanır.",
        "30-60-90 ve 45-45-90 özel üçgenlerinde kenar oranlarını uygular.",
        "Öklid bağıntılarıyla yükseklik ve izdüşüm uzunluklarını bulur."
      ],
      content: `
        <h2>Dik ve Özel Üçgenler</h2>
        <h3>Pisagor bağıntısı</h3>
        <div class="formula">Dik kenar² + Dik kenar² = Hipotenüs²  →  a² + b² = c²</div>
        <p>Hipotenüs, dik açının karşısındaki en uzun kenardır. Verilen iki kenardan üçüncüsü daima bu bağıntıyla bulunur.</p>
        <h3>Pisagor üçlüleri (ezberlenmesi hız kazandırır)</h3>
        <ul>
          <li><b>3 - 4 - 5</b> ve katları (6-8-10, 9-12-15, 12-16-20…)</li>
          <li><b>5 - 12 - 13</b>, <b>8 - 15 - 17</b>, <b>7 - 24 - 25</b>, <b>20 - 21 - 29</b></li>
        </ul>
        <h3>Özel üçgenler</h3>
        <p><b>45-45-90:</b> kenarlar oranı <b>1 : 1 : √2</b>. Dik kenar a ise hipotenüs a√2.</p>
        <p><b>30-60-90:</b> kenarlar oranı <b>1 : √3 : 2</b>. 30°'nin karşısı en kısa kenar (a), 60°'nin karşısı a√3, hipotenüs 2a.</p>
        <h3>Öklid bağıntıları</h3>
        <p>Dik açıdan hipotenüse inilen yükseklik h, hipotenüsü p ve k parçalarına ayırırsa:</p>
        <div class="formula">h² = p·k · · · a² = p·(p+k) · · · b² = k·(p+k) · · · h = (dik kenarların çarpımı)/hipotenüs</div>
        <h3>Çözümlü örnek</h3>
        <p>Dik kenarları 6 ve 8 olan dik üçgende hipotenüs = 10 (6-8-10 üçlüsü); hipotenüse ait yükseklik = (6·8)/10 = <b>4,8</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>30-60-90'da 60°'nin karşısındaki kenarı hipotenüs sanmak; hipotenüs daima 2a'dır, a√3 değil.</p>
        <h3>Özet kartı</h3>
        <ul><li>a²+b²=c².</li><li>45-45-90: 1:1:√2.</li><li>30-60-90: 1:√3:2.</li><li>Yükseklik = dik kenarlar çarpımı / hipotenüs.</li></ul>`,
      commonMistakes: ["Hipotenüsü dik kenar sanmak.", "30-60-90'da a√3 kenarını hipotenüs sanmak.", "Öklid'de h²=p·k yerine h=p·k yazmak."],
      pairs: [
        { term: "Pisagor bağıntısı", def: "a² + b² = c²" },
        { term: "45-45-90 oranı", def: "1 : 1 : √2" },
        { term: "30-60-90 oranı", def: "1 : √3 : 2" },
        { term: "Hipotenüse ait yükseklik", def: "dik kenarlar çarpımı / hipotenüs" },
        { term: "Öklid (yükseklik)", def: "h² = p · k" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
