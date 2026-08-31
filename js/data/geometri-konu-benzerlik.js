/* ============================================================
   GEOMETRİ — Üçgende Eşlik ve Benzerlik: ünite tanımı (özgün içerik)
   content-loader.upsertUnits ile "geometri" dersine eklenir.
   Tümü özgün (sourceType/originalityStatement:true).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-konu-benzerlik: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("geometri", [
    {
      id: "geo-benzerlik", name: "Üçgende Eşlik ve Benzerlik", branch: null,
      summary: "Eşlik ve benzerlik koşulları (AA, KAK, KKK), benzerlik oranı, temel benzerlik (paralellik), alan ve çevre oranları.",
      curriculumRefs: ["2026-YKS Geometri: Üçgende eşlik ve benzerlik"],
      prerequisites: ["geo-acilar", "geo-ozelucgen"], estimatedMinutes: 24, difficulty: 3,
      objectives: [
        "Eşlik ile benzerlik arasındaki farkı açıklar.",
        "AA benzerlik koşuluyla benzer üçgenleri belirler.",
        "Benzerlik oranını kullanarak bilinmeyen kenarı hesaplar.",
        "Bir kenara paralel doğrunun oluşturduğu temel benzerliği uygular.",
        "Benzer üçgenlerde çevre ve alan oranlarını (k ve k²) kullanır."
      ],
      content: `
        <h2>Üçgende Eşlik ve Benzerlik</h2>
        <h3>Eşlik nedir, benzerlik nedir?</h3>
        <p><b>Eş üçgenler</b> hem biçim hem boyut olarak aynıdır: karşılıklı kenarlar ve açılar eşittir. <b>Benzer üçgenler</b> ise yalnızca biçim olarak aynıdır: açılar eşit, kenarlar orantılıdır.</p>
        <div class="formula">Benzerlik oranı: k = a/a' = b/b' = c/c'  (karşılıklı kenarların oranı)</div>
        <h3>Benzerlik koşulları</h3>
        <ul>
          <li><b>AA (Açı-Açı):</b> İki açısı eş olan üçgenler benzerdir (üçüncü açı zaten eşit olur).</li>
          <li><b>KAK:</b> İki kenar orantılı ve aradaki açılar eş ise benzerdir.</li>
          <li><b>KKK:</b> Üç kenar da orantılıysa benzerdir.</li>
        </ul>
        <h3>Temel benzerlik (paralellik)</h3>
        <p>Üçgenin bir kenarına paralel çizilen doğru, diğer iki kenarı kestiğinde küçük üçgen büyük üçgene benzerdir (AA: paralellikten yöndeş açılar eşit).</p>
        <div class="formula">[DE] // [BC] ise:  AD/AB = AE/AC = DE/BC</div>
        <h3>Çevre ve alan oranı</h3>
        <p>Benzerlik oranı k olan iki üçgende <b>çevreler oranı k</b>, <b>alanlar oranı k²</b>'dir.</p>
        <div class="formula">Çevre(küçük)/Çevre(büyük) = k · · · Alan(küçük)/Alan(büyük) = k²</div>
        <h3>Çözümlü örnek</h3>
        <p>ABC üçgeninde [DE] // [BC]; |AD| = 4, |DB| = 6, |DE| = 6 olsun. AD/AB = 4/10 = 2/5 olduğundan DE/BC = 2/5 → |BC| = 6 · 5/2 = <b>15</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>Paralellikte oranı AD/DB (parça/parça) almak. Benzerlik oranı daima <b>tepe noktasından</b> ölçülür: AD/AB (parça/bütün).</p>
        <h3>Özet kartı</h3>
        <ul><li>Benzerlikte açılar eş, kenarlar orantılı.</li><li>AA en sık kullanılan koşuldur.</li><li>Paralel kenar → AD/AB = AE/AC = DE/BC.</li><li>Çevre oranı k, alan oranı k².</li></ul>`,
      commonMistakes: [
        "Benzerlik oranında AD/AB yerine AD/DB (parça/parça) kullanmak.",
        "Alan oranını k² yerine k almak.",
        "Karşılıklı olmayan kenarları oranlamak (eşleşme sırasına dikkat)."
      ],
      pairs: [
        { term: "AA koşulu", def: "İki açısı eş olan üçgenler benzerdir" },
        { term: "Benzerlik oranı k", def: "Karşılıklı kenarların oranı" },
        { term: "Temel benzerlik", def: "Kenara paralel doğru benzer üçgen oluşturur" },
        { term: "Çevreler oranı", def: "k" },
        { term: "Alanlar oranı", def: "k²" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
