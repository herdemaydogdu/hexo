/* ============================================================
   FEN BİLİMLERİ — Pilot Güçlendirme Modülü (Faz E)
   Fizik / Kimya / Biyoloji branşlarına birer zengin konu + özgün soru.
   Tümü özgün (sourceType:"original"); fizik hesapları g=10 m/s² ile.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("fen-pilot: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("fen", [
    {
      id: "fiz-enerji", name: "İş, Güç ve Enerji", branch: "fizik",
      summary: "İş = kuvvet × yol; güç = iş/zaman; kinetik ve potansiyel enerji.",
      curriculumRefs: ["2026-YKS Fizik: İş, güç ve enerji"],
      prerequisites: ["fiz-kuvvet"], estimatedMinutes: 16, difficulty: 2,
      objectives: ["İşi kuvvet ve yol ile hesaplar.", "Gücü iş ve zamanla ilişkilendirir.", "Kinetik ve potansiyel enerjiyi ayırır."],
      content: `
        <h2>İş, Güç ve Enerji</h2>
        <div class="formula">İş: W = F · x &nbsp;|&nbsp; Güç: P = W / t &nbsp;|&nbsp; Kinetik: E<sub>k</sub> = ½·m·v² &nbsp;|&nbsp; Potansiyel: E<sub>p</sub> = m·g·h</div>
        <p>Fizikte <b>iş</b>, kuvvet uygulanıp cismin kuvvet yönünde <b>yol almasıyla</b> oluşur. Kuvvet varsa ama yol yoksa (duvarı itmek) fiziksel iş sıfırdır.</p>
        <h3>Birimler</h3>
        <p>İş ve enerji <b>joule (J)</b>, güç <b>watt (W)</b> ile ölçülür. 1 W = 1 J/s.</p>
        <h3>Çözümlü örnek</h3>
        <p>Bir cisme hareket yönünde 10 N kuvvet uygulanıp 5 m yol aldırılırsa: W = F·x = 10·5 = <b>50 J</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>Gücü hesaplarken zamana bölmeyi unutmak; ya da kinetik enerjide ½ ve v² kısmını atlamak.</p>
        <h3>Özet kartı</h3>
        <ul><li>İş = F·x (aynı yönde).</li><li>Güç = İş/zaman.</li><li>Ek = ½mv², Ep = mgh.</li></ul>`,
      commonMistakes: ["Güçte /zaman'ı unutmak.", "Kinetik enerjide hızın karesini almamak."],
      pairs: [
        { term: "İş (W)", def: "Kuvvet × yol (F·x)" },
        { term: "Güç (P)", def: "İş / zaman (J/s = watt)" },
        { term: "Kinetik enerji", def: "½·m·v²" },
        { term: "Potansiyel enerji", def: "m·g·h" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "kim-hal", name: "Maddenin Hâlleri ve Hâl Değişimi", branch: "kimya",
      summary: "Katı-sıvı-gaz; erime, donma, buharlaşma, yoğuşma, süblimleşme.",
      curriculumRefs: ["2026-YKS Kimya: Maddenin hâlleri"],
      prerequisites: [], estimatedMinutes: 14, difficulty: 1,
      objectives: ["Üç hâli tanecik düzeninde ayırır.", "Hâl değişimlerini doğru adlandırır.", "Isı alış-verişini hâl değişimiyle ilişkilendirir."],
      content: `
        <h2>Maddenin Hâlleri ve Hâl Değişimi</h2>
        <p>Madde <b>katı</b>, <b>sıvı</b> ve <b>gaz</b> hâllerinde bulunur. Taneciklerin düzeni ve hareketi hâlden hâle değişir: katıda sıkı düzen, gazda serbest hareket.</p>
        <h3>Hâl değişimleri</h3>
        <ul>
          <li><b>Erime:</b> katı → sıvı &nbsp; · &nbsp; <b>Donma:</b> sıvı → katı</li>
          <li><b>Buharlaşma:</b> sıvı → gaz &nbsp; · &nbsp; <b>Yoğuşma:</b> gaz → sıvı</li>
          <li><b>Süblimleşme:</b> katı → gaz (doğrudan) &nbsp; · &nbsp; <b>Kırağılaşma:</b> gaz → katı</li>
        </ul>
        <p>Isı <b>alan</b> değişimler (erime, buharlaşma, süblimleşme) endotermiktir; ısı <b>veren</b> değişimler (donma, yoğuşma) ekzotermiktir.</p>
        <h3>Çözümlü örnek</h3>
        <p>Buzdolabından çıkan soğuk bardağın dışında su damlacıkları oluşur: havadaki su buharı soğuk yüzeyde <b>yoğuşur</b> (gaz → sıvı).</p>
        <h3>Sık yapılan hata</h3>
        <p>Süblimleşmeyi (katı→gaz) buharlaşmayla karıştırmak. Naftalin ve kuru buz süblimleşir.</p>
        <h3>Özet kartı</h3>
        <ul><li>Erime/buharlaşma/süblimleşme → ısı alır.</li><li>Donma/yoğuşma → ısı verir.</li></ul>`,
      commonMistakes: ["Yoğuşma ile buharlaşmayı karıştırmak.", "Süblimleşmeyi atlamak."],
      pairs: [
        { term: "Erime", def: "Katı → sıvı" },
        { term: "Yoğuşma", def: "Gaz → sıvı" },
        { term: "Süblimleşme", def: "Katı → gaz (doğrudan)" },
        { term: "Buharlaşma", def: "Sıvı → gaz" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "biy-bilesen", name: "Canlıların Temel Bileşenleri", branch: "biyoloji",
      summary: "Su, mineraller; karbonhidrat, lipit, protein, nükleik asit, enzim.",
      curriculumRefs: ["2026-YKS Biyoloji: Canlıların temel bileşenleri"],
      prerequisites: [], estimatedMinutes: 15, difficulty: 2,
      objectives: ["İnorganik ve organik bileşenleri ayırır.", "Her bileşenin görevini eşleştirir.", "Enzimin protein yapısını açıklar."],
      content: `
        <h2>Canlıların Temel Bileşenleri</h2>
        <h3>İnorganik bileşenler</h3>
        <p><b>Su</b> hücrede en çok bulunan moleküldür; çözücü ve taşıyıcıdır. <b>Mineraller</b> düzenleyici ve yapıcı görev görür.</p>
        <h3>Organik bileşenler</h3>
        <ul>
          <li><b>Karbonhidrat:</b> temel ve hızlı enerji kaynağı.</li>
          <li><b>Lipit (yağ):</b> enerji depolama, zar yapısı, yalıtım.</li>
          <li><b>Protein:</b> yapıcı-onarıcı; enzimlerin yapısına katılır.</li>
          <li><b>Nükleik asit (DNA/RNA):</b> kalıtım ve protein sentezi bilgisi.</li>
          <li><b>Enzim:</b> tepkimeleri hızlandıran, protein yapılı biyolojik katalizör.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>Bir hücrede en bol bulunan inorganik madde sorulduğunda yanıt <b>su</b>dur; en bol organik enerji vereni ise <b>karbonhidrat</b>tır.</p>
        <h3>Sık yapılan hata</h3>
        <p>Enzimi ayrı bir bileşen sanmak; oysa enzim <b>protein</b> yapısındadır. Vitaminleri "enerji verici" sanmak da yanlıştır (düzenleyicidir).</p>
        <h3>Özet kartı</h3>
        <ul><li>İnorganik: su, mineral, asit-baz-tuz.</li><li>Organik: karbonhidrat, lipit, protein, nükleik asit, (vitamin).</li><li>Enzim = protein.</li></ul>`,
      commonMistakes: ["Enzimi proteinden ayrı bir grup sanmak.", "Vitamini enerji kaynağı sanmak."],
      pairs: [
        { term: "Su", def: "Hücrede en çok bulunan inorganik madde" },
        { term: "Karbonhidrat", def: "Temel/hızlı enerji kaynağı" },
        { term: "Protein", def: "Yapıcı; enzimlerin yapısına katılır" },
        { term: "Nükleik asit", def: "DNA/RNA — kalıtım bilgisi" },
        { term: "Enzim", def: "Protein yapılı biyolojik katalizör" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  TYT_CONTENT.addQuestions([
    /* FİZİK — İş, Güç, Enerji */
    {
      id: "fen-fiz-enerji-001", subject: "fen", unit: "fiz-enerji", skill: "islem", difficulty: 1, estimatedSeconds: 50,
      q: "Hareket yönünde 10 N kuvvet uygulanan cisim 5 m yol alıyor. Yapılan iş kaç joule'dür?",
      options: ["2", "15", "50", "5", "100"], answer: 2,
      explain: "W = F·x = 10·5 = 50 J.",
      solution: { short: "W = F·x = 10·5 = 50 J.", steps: ["İş = kuvvet × yol.", "10 N × 5 m = 50 J."],
        whyOthersWrong: ["15: toplama (10+5).", "2: bölme (10/5).", "5: kuvveti yok sayma.", "100: 2× hatası."] },
      tags: ["iş"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-fiz-enerji-002", subject: "fen", unit: "fiz-enerji", skill: "islem", difficulty: 2, estimatedSeconds: 55,
      q: "100 J'lük işi 5 saniyede yapan motorun gücü kaç watt'tır?",
      options: ["20", "500", "95", "105", "25"], answer: 0,
      explain: "P = W/t = 100/5 = 20 W.",
      solution: { short: "P = W/t = 100/5 = 20 W.", steps: ["Güç = iş / zaman.", "100 J / 5 s = 20 W."],
        whyOthersWrong: ["500: çarpma (100·5).", "95/105: çıkarma/toplama.", "25: hatalı bölme."] },
      tags: ["güç"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-fiz-enerji-003", subject: "fen", unit: "fiz-enerji", skill: "islem", difficulty: 2, estimatedSeconds: 60,
      q: "Kütlesi 2 kg, hızı 3 m/s olan cismin kinetik enerjisi kaç joule'dür?",
      options: ["6", "9", "18", "12", "3"], answer: 1,
      explain: "Ek = ½·m·v² = ½·2·3² = ½·2·9 = 9 J.",
      solution: { short: "½·2·3² = 9 J.", steps: ["Ek = ½·m·v².", "v² = 3² = 9.", "½ · 2 · 9 = 9 J."],
        whyOthersWrong: ["6: ½·2·... yerine 2·3.", "18: ½'yi unutma (2·9).", "12: hızı karesini almamak.", "3: yalnız hız."] },
      tags: ["kinetik-enerji"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-fiz-enerji-004", subject: "fen", unit: "fiz-enerji", skill: "islem", difficulty: 2, estimatedSeconds: 55,
      q: "Kütlesi 2 kg olan cisim 5 m yükseğe çıkarılıyor (g = 10 m/s²). Potansiyel enerjideki artış kaç joule'dür?",
      options: ["10", "70", "100", "17", "50"], answer: 2,
      explain: "Ep = m·g·h = 2·10·5 = 100 J.",
      solution: { short: "Ep = m·g·h = 2·10·5 = 100 J.", steps: ["Ep = m·g·h.", "2 · 10 · 5 = 100 J."],
        whyOthersWrong: ["10: yalnız g.", "70: toplama.", "17: toplama (2+10+5).", "50: g'yi yarı alma."] },
      tags: ["potansiyel-enerji"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    /* KİMYA — Maddenin Hâlleri */
    {
      id: "fen-kim-hal-001", subject: "fen", unit: "kim-hal", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Bir maddenin <b>gaz</b> hâlinden <b>sıvı</b> hâline geçmesine ne ad verilir?",
      options: ["Erime", "Buharlaşma", "Yoğuşma", "Süblimleşme", "Donma"], answer: 2,
      explain: "Gaz → sıvı geçişi yoğuşmadır (yoğunlaşma).",
      solution: { short: "Gaz → sıvı = yoğuşma.", steps: ["Hangi hâlden hangisine? Gaz → sıvı.", "Bu geçişin adı yoğuşma (yoğunlaşma)."],
        whyOthersWrong: ["Erime: katı→sıvı.", "Buharlaşma: sıvı→gaz (ters).", "Süblimleşme: katı→gaz.", "Donma: sıvı→katı."] },
      tags: ["hâl-değişimi"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-kim-hal-002", subject: "fen", unit: "kim-hal", skill: "kavram", difficulty: 2, estimatedSeconds: 45,
      q: "Naftalinin katı hâlden doğrudan gaz hâline geçmesi hangi olaydır?",
      options: ["Buharlaşma", "Süblimleşme", "Erime", "Yoğuşma", "Kırağılaşma"], answer: 1,
      explain: "Katı → gaz doğrudan geçiş süblimleşmedir.",
      solution: { short: "Katı → gaz (doğrudan) = süblimleşme.", steps: ["Ara sıvı hâl yok, katıdan doğrudan gaza geçiş.", "Bu olayın adı süblimleşme."],
        whyOthersWrong: ["Buharlaşma: sıvı→gaz.", "Erime: katı→sıvı.", "Yoğuşma: gaz→sıvı.", "Kırağılaşma: gaz→katı."] },
      tags: ["süblimleşme"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-kim-hal-003", subject: "fen", unit: "kim-hal", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Aşağıdaki hâl değişimlerinden hangisinde madde <b>ısı verir</b>?",
      options: ["Erime", "Buharlaşma", "Süblimleşme", "Yoğuşma", "Hiçbiri"], answer: 3,
      explain: "Yoğuşma (gaz→sıvı) ısı veren (ekzotermik) bir değişimdir.",
      solution: { short: "Yoğuşma ısı verir; erime/buharlaşma/süblimleşme ısı alır.", steps: ["Isı alanlar: erime, buharlaşma, süblimleşme.", "Isı verenler: donma, yoğuşma, kırağılaşma.", "Seçenekler içinde ısı veren: yoğuşma."],
        whyOthersWrong: ["Erime/buharlaşma/süblimleşme: ısı alır (endotermik)."] },
      tags: ["endotermik-ekzotermik"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-kim-hal-004", subject: "fen", unit: "kim-hal", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Suyun donarak buz olması hangi hâl değişimidir?",
      options: ["Erime", "Donma", "Yoğuşma", "Buharlaşma", "Süblimleşme"], answer: 1,
      explain: "Sıvı → katı geçişi donmadır.",
      solution: { short: "Sıvı → katı = donma.", steps: ["Su (sıvı) → buz (katı).", "Bu geçiş donma."],
        whyOthersWrong: ["Erime: katı→sıvı (ters).", "Yoğuşma: gaz→sıvı.", "Buharlaşma: sıvı→gaz.", "Süblimleşme: katı→gaz."] },
      tags: ["donma"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    /* BİYOLOJİ — Temel Bileşenler */
    {
      id: "fen-biy-bilesen-001", subject: "fen", unit: "biy-bilesen", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Hücrede en fazla bulunan inorganik madde aşağıdakilerden hangisidir?",
      options: ["Protein", "Su", "Karbonhidrat", "Lipit", "Mineral"], answer: 1,
      explain: "Hücrenin en bol bileşeni sudur (inorganik).",
      solution: { short: "En bol bileşen ve inorganik: su.", steps: ["Soru inorganik ve en bol istiyor.", "Protein/karbonhidrat/lipit organiktir.", "Su hem inorganik hem en bol → cevap su."],
        whyOthersWrong: ["Protein/karbonhidrat/lipit: organik.", "Mineral: inorganik ama miktarca sudan az."] },
      tags: ["inorganik"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-biy-bilesen-002", subject: "fen", unit: "biy-bilesen", skill: "kavram", difficulty: 2, estimatedSeconds: 45,
      q: "Enzimlerin temel yapısını aşağıdaki organik bileşenlerden hangisi oluşturur?",
      options: ["Karbonhidrat", "Lipit", "Protein", "Su", "Vitamin"], answer: 2,
      explain: "Enzimler protein yapılı biyolojik katalizörlerdir.",
      solution: { short: "Enzim = protein yapılı.", steps: ["Enzim biyolojik katalizördür.", "Yapısı proteindir."],
        whyOthersWrong: ["Karbonhidrat/lipit: enerji/yapı, enzim değil.", "Su: inorganik çözücü.", "Vitamin: düzenleyici, enzim yapısı değil."] },
      tags: ["protein", "enzim"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-biy-bilesen-003", subject: "fen", unit: "biy-bilesen", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Hücrenin temel ve hızlı enerji kaynağı olan organik bileşen hangisidir?",
      options: ["Protein", "Karbonhidrat", "Nükleik asit", "Mineral", "Su"], answer: 1,
      explain: "Temel ve hızlı enerji kaynağı karbonhidrattır.",
      solution: { short: "Hızlı enerji = karbonhidrat.", steps: ["Hücre ilk olarak karbonhidratı enerji için kullanır.", "Cevap karbonhidrat."],
        whyOthersWrong: ["Protein: yapıcı, son çare enerji.", "Nükleik asit: kalıtım.", "Mineral/su: inorganik, enerji vermez."] },
      tags: ["karbonhidrat"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "fen-biy-bilesen-004", subject: "fen", unit: "biy-bilesen", skill: "kavram", difficulty: 2, estimatedSeconds: 45,
      q: "DNA ve RNA aşağıdaki bileşen gruplarından hangisine girer?",
      options: ["Karbonhidrat", "Lipit", "Protein", "Nükleik asit", "Mineral"], answer: 3,
      explain: "DNA ve RNA nükleik asitlerdir.",
      solution: { short: "DNA/RNA = nükleik asit.", steps: ["DNA ve RNA kalıtım moleküleridir.", "Bunların bileşen grubu nükleik asittir."],
        whyOthersWrong: ["Karbonhidrat/lipit/protein: farklı organik gruplar.", "Mineral: inorganik."] },
      tags: ["nükleik-asit"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    }
  ]);
})();
