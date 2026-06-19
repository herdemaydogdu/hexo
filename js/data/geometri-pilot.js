/* ============================================================
   GEOMETRİ — Pilot İçerik Modülü (Faz F, pilot)
   Geometri platformda yeni bir derstir; content-loader.addSubject
   ile eklenir. Tümü özgün (sourceType:"original").
   Not: Gerçek TYT'de geometri soruları matematik testindedir; burada
   ayrı çalışma alanı olarak sunulur (deneme havuzuna ileride katılacak).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("geometri-pilot: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addSubject({ id: "geometri", name: "Geometri", icon: "📐" });

  TYT_CONTENT.addUnits("geometri", [
    {
      id: "geo-acilar", name: "Doğruda ve Üçgende Açılar", branch: null,
      summary: "İç açılar toplamı, dış açı, tümler-bütünler, ikizkenar.",
      curriculumRefs: ["2026-YKS Geometri: Doğruda açılar; Üçgende açı"],
      prerequisites: [], estimatedMinutes: 16, difficulty: 2,
      objectives: [
        "Üçgenin iç açıları toplamının 180° olduğunu kullanır.",
        "Dış açı ile komşu olmayan iç açılar ilişkisini uygular.",
        "İkizkenar üçgende taban açılarının eşitliğini kullanır."
      ],
      content: `
        <h2>Doğruda ve Üçgende Açılar</h2>
        <h3>Doğruda açılar</h3>
        <ul>
          <li><b>Tümler:</b> ölçüleri toplamı <b>90°</b> olan iki açı.</li>
          <li><b>Bütünler:</b> ölçüleri toplamı <b>180°</b> olan iki açı.</li>
          <li>Ters açılar eşittir; bir doğru üzerindeki komşu açılar bütünlerdir.</li>
        </ul>
        <h3>Üçgende açılar</h3>
        <div class="formula">Bir üçgenin iç açıları toplamı = 180°</div>
        <p><b>Dış açı kuralı:</b> Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.</p>
        <h3>İkizkenar üçgen</h3>
        <p>İki kenarı eşit olan üçgende, bu kenarların karşısındaki <b>taban açıları eşittir</b>. Tepe açısı α ise taban açıları (180°−α)/2 olur.</p>
        <h3>Çözümlü örnek</h3>
        <p>İki iç açısı 50° ve 60° olan üçgenin üçüncü açısı: 180 − (50+60) = <b>70°</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>Dış açıyı üçüncü açının kendisiyle karıştırmak. Dış açı = 180° − komşu iç açı; aynı zamanda diğer iki iç açının toplamıdır.</p>
        <h3>Özet kartı</h3>
        <ul><li>İç açı toplamı 180°.</li><li>Dış açı = uzak iki iç açının toplamı.</li><li>İkizkenar: taban açıları eşit.</li></ul>`,
      commonMistakes: ["İç açı toplamını 360° sanmak.", "Dış açıyı komşu iç açıya eşit sanmak."],
      pairs: [
        { term: "İç açılar toplamı", def: "180°" },
        { term: "Tümler açılar", def: "Toplamı 90°" },
        { term: "Bütünler açılar", def: "Toplamı 180°" },
        { term: "Dış açı", def: "Uzak iki iç açının toplamı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "geo-alan", name: "Üçgende Alan", branch: null,
      summary: "Taban×yükseklik/2; dik üçgende alan; tabanla alanın ilişkisi.",
      curriculumRefs: ["2026-YKS Geometri: Üçgende alan"],
      prerequisites: ["geo-acilar"], estimatedMinutes: 14, difficulty: 2,
      objectives: [
        "Üçgenin alanını taban ve yükseklikle hesaplar.",
        "Dik üçgende dik kenarları taban-yükseklik olarak kullanır.",
        "Taban/yükseklik değişiminin alana etkisini yorumlar."
      ],
      content: `
        <h2>Üçgende Alan</h2>
        <div class="formula">Alan = (taban × o tabana ait yükseklik) / 2</div>
        <p>Her üçgenin üç tabanı ve bunlara ait üç yüksekliği vardır; hangi taban seçilirse <b>o tabana ait yükseklik</b> kullanılır.</p>
        <h3>Dik üçgen</h3>
        <p>Dik üçgende dik kenarlar birbirinin yüksekliğidir: <b>Alan = (dik kenar₁ × dik kenar₂)/2</b>.</p>
        <h3>Çözümlü örnek</h3>
        <p>Tabanı 8 br, bu tabana ait yüksekliği 5 br olan üçgenin alanı: (8×5)/2 = <b>20 br²</b>.</p>
        <h3>Oran ilişkisi</h3>
        <p>Yükseklik sabitken taban 2 katına çıkarsa alan da <b>2 katına</b> çıkar (alan tabanla doğru orantılı).</p>
        <h3>Sık yapılan hata</h3>
        <p>Bölme işlemini (/2) unutmak veya tabana ait olmayan bir yüksekliği kullanmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Alan = taban×yükseklik/2.</li><li>Dik üçgen: dik kenarların çarpımı /2.</li><li>Taban×k → alan ×k (yükseklik sabit).</li></ul>`,
      commonMistakes: ["/2 bölmeyi unutmak.", "Tabanla eşleşmeyen yüksekliği kullanmak."],
      pairs: [
        { term: "Üçgenin alanı", def: "taban × yükseklik / 2" },
        { term: "Dik üçgen alanı", def: "dik kenarların çarpımı / 2" },
        { term: "Taban 2 katına", def: "Alan da 2 katına (yükseklik sabit)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  TYT_CONTENT.addQuestions([
    {
      id: "geometri-geo-acilar-001", subject: "geometri", unit: "geo-acilar",
      skill: "islem", difficulty: 1, estimatedSeconds: 45,
      q: "Bir üçgenin iki iç açısı 50° ve 60° ise üçüncü açı kaç derecedir?",
      options: ["60", "70", "80", "110", "50"], answer: 1,
      explain: "İç açılar toplamı 180° → 180 − (50+60) = 70°.",
      solution: { short: "180 − (50+60) = 70°.",
        steps: ["İç açıların toplamı 180°.", "Bilinenler: 50+60 = 110.", "Üçüncü açı = 180 − 110 = 70°."],
        whyOthersWrong: ["110: iki açının toplamı, üçüncü açı değil.", "80/60/50: toplamı 180 yapmaz."] },
      tags: ["üçgen", "iç-açı"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-acilar-002", subject: "geometri", unit: "geo-acilar",
      skill: "kavram-uygulama", difficulty: 2, estimatedSeconds: 60,
      q: "Bir üçgenin iki iç açısı 45° ve 65°'dir. Üçüncü açıya ait dış açı kaç derecedir?",
      options: ["70", "110", "115", "125", "135"], answer: 1,
      explain: "Dış açı = komşu olmayan iki iç açının toplamı = 45+65 = 110°.",
      solution: { short: "Dış açı kuralı: 45 + 65 = 110°.",
        steps: ["Üçüncü iç açı = 180 − (45+65) = 70°.", "Dış açı = 180 − 70 = 110°.", "Ya da doğrudan: dış açı = uzak iki iç açının toplamı = 45+65 = 110°."],
        whyOthersWrong: ["70: bu üçüncü iç açının kendisi.", "115/125/135: hatalı toplama."] },
      tags: ["dış-açı"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-acilar-003", subject: "geometri", unit: "geo-acilar",
      skill: "islem", difficulty: 1, estimatedSeconds: 40,
      q: "Ölçüsü 70° olan bir açının bütünleri kaç derecedir?",
      options: ["20", "110", "90", "290", "70"], answer: 1,
      explain: "Bütünler açılar toplamı 180° → 180 − 70 = 110°.",
      solution: { short: "180 − 70 = 110°.",
        steps: ["Bütünler açılar toplamı 180°.", "180 − 70 = 110°."],
        whyOthersWrong: ["20: bu tümlerdir (90−70).", "90: tümler toplamı.", "290: 360 ile karıştırma.", "70: açının kendisi."] },
      tags: ["bütünler"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-acilar-004", subject: "geometri", unit: "geo-acilar",
      skill: "kavram-uygulama", difficulty: 2, estimatedSeconds: 55,
      q: "Tepe açısı 40° olan ikizkenar üçgende taban açılarından biri kaç derecedir?",
      options: ["40", "70", "100", "140", "50"], answer: 1,
      explain: "Taban açıları eşit: (180−40)/2 = 70°.",
      solution: { short: "(180 − 40)/2 = 70°.",
        steps: ["İkizkenar üçgende taban açıları eşittir.", "İki taban açısının toplamı = 180 − 40 = 140°.", "Her biri = 140/2 = 70°."],
        whyOthersWrong: ["140: iki taban açısının toplamı.", "40: tepe açısı.", "100/50: hatalı bölme."] },
      tags: ["ikizkenar"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-alan-001", subject: "geometri", unit: "geo-alan",
      skill: "islem", difficulty: 1, estimatedSeconds: 45,
      q: "Tabanı 8 br ve bu tabana ait yüksekliği 5 br olan üçgenin alanı kaç br²'dir?",
      options: ["13", "20", "40", "26", "30"], answer: 1,
      explain: "Alan = taban×yükseklik/2 = 8×5/2 = 20.",
      solution: { short: "(8×5)/2 = 20 br².",
        steps: ["Alan = taban × yükseklik / 2.", "8 × 5 = 40.", "40 / 2 = 20 br²."],
        whyOthersWrong: ["40: /2 bölmeyi unutmak.", "13: toplama hatası (8+5).", "26/30: yanlış işlem."] },
      tags: ["alan"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-alan-002", subject: "geometri", unit: "geo-alan",
      skill: "islem", difficulty: 1, estimatedSeconds: 45,
      q: "Dik kenarları 6 br ve 8 br olan dik üçgenin alanı kaç br²'dir?",
      options: ["14", "24", "48", "28", "30"], answer: 1,
      explain: "Dik kenarlar yükseklik-taban: 6×8/2 = 24.",
      solution: { short: "(6×8)/2 = 24 br².",
        steps: ["Dik üçgende dik kenarlar taban ve yüksekliktir.", "6 × 8 = 48.", "48 / 2 = 24 br²."],
        whyOthersWrong: ["48: /2 unutma.", "14: toplama (6+8).", "28/30: yanlış işlem."] },
      tags: ["dik-üçgen", "alan"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-alan-003", subject: "geometri", unit: "geo-alan",
      skill: "islem", difficulty: 2, estimatedSeconds: 60,
      q: "Alanı 24 br² olan bir üçgenin tabanı 6 br ise bu tabana ait yükseklik kaç br'dir?",
      options: ["4", "8", "12", "6", "9"], answer: 1,
      explain: "Alan = t×h/2 → 24 = 6×h/2 → h = 8.",
      solution: { short: "24 = (6×h)/2 → h = 8 br.",
        steps: ["Alan = taban × yükseklik / 2.", "24 = (6 × h)/2.", "48 = 6 × h.", "h = 48/6 = 8 br."],
        whyOthersWrong: ["4: 24/6, /2'yi tersten uygulamak.", "12: 2× hatası.", "6/9: hatalı çözüm."] },
      tags: ["alan", "geri-hesap"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "geometri-geo-alan-004", subject: "geometri", unit: "geo-alan",
      skill: "akil-yurutme", difficulty: 2, estimatedSeconds: 60,
      q: "Bir üçgende yükseklik sabit tutulup taban 2 katına çıkarılırsa alan nasıl değişir?",
      options: ["Değişmez", "2 katına çıkar", "Yarıya iner", "4 katına çıkar", "3 katına çıkar"], answer: 1,
      explain: "Alan tabanla doğru orantılıdır; taban 2 katına çıkınca alan da 2 katına çıkar.",
      solution: { short: "Alan ∝ taban (yükseklik sabit) → 2 katı.",
        steps: ["Alan = taban × yükseklik / 2.", "Yükseklik sabit → alan tabanla doğru orantılı.", "Taban ×2 → alan ×2."],
        whyOthersWrong: ["Değişmez/yarıya: orantıyı yok saymak.", "4 katı: hem taban hem yükseklik değişmiş gibi düşünmek.", "3 katı: dayanaksız."] },
      tags: ["alan", "orantı"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    }
  ]);
})();
