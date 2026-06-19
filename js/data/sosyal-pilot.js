/* ============================================================
   SOSYAL BİLİMLER — Zayıf Branş Güçlendirme Modülü (Faz E)
   Coğrafya / Felsefe / Din branşlarına birer zengin konu + özgün soru.
   Din içeriği saygılı, kapsayıcı ve kazanım odaklıdır (doküman 3.9).
   Tümü özgün (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-pilot: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("sosyal", [
    {
      id: "cog-harita", name: "Harita Bilgisi", branch: "cografya",
      summary: "Ölçek, ölçek-ayrıntı ilişkisi, izohips ve gerçek uzaklık hesabı.",
      curriculumRefs: ["2026-YKS Coğrafya: Harita bilgisi"],
      prerequisites: ["cog-konum"], estimatedMinutes: 16, difficulty: 2,
      objectives: ["Ölçek türlerini ayırır.", "Ölçek-ayrıntı ilişkisini yorumlar.", "Harita uzunluğundan gerçek uzaklığı hesaplar."],
      content: `
        <h2>Harita Bilgisi</h2>
        <p><b>Ölçek</b>, haritadaki uzunluğun gerçek uzunluğa oranıdır. İki türü vardır: <b>kesir ölçek</b> (1/500.000) ve <b>çizgi (grafik) ölçek</b>.</p>
        <div class="formula">Gerçek uzaklık = Harita uzunluğu × Ölçek paydası</div>
        <h3>Büyük – küçük ölçek</h3>
        <ul>
          <li><b>Büyük ölçek</b> (payda küçük, örn. 1/25.000): dar alan, <b>çok ayrıntı</b>, küçük hata payı.</li>
          <li><b>Küçük ölçek</b> (payda büyük, örn. 1/5.000.000): geniş alan, <b>az ayrıntı</b>.</li>
        </ul>
        <h3>İzohips (eş yükselti eğrisi)</h3>
        <p>Deniz seviyesinden aynı yükseklikteki noktaları birleştiren kapalı eğrilerdir; yer şekillerini gösterir.</p>
        <h3>Çözümlü örnek</h3>
        <p>1/500.000 ölçekli haritada iki şehir arası 4 cm. Gerçek uzaklık: 4 × 500.000 = 2.000.000 cm = <b>20 km</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>Büyük ölçeği "büyük sayı (paydası büyük)" sanmak. Tersi doğrudur: payda <b>küçükse</b> ölçek <b>büyüktür</b> ve ayrıntı artar.</p>
        <h3>Özet kartı</h3>
        <ul><li>Gerçek = harita × payda.</li><li>Payda küçük → büyük ölçek → çok ayrıntı.</li><li>İzohips = eş yükselti.</li></ul>`,
      commonMistakes: ["Büyük/küçük ölçeği ters anlamak.", "cm→km çevriminde 100.000'e bölmeyi unutmak."],
      pairs: [
        { term: "Gerçek uzaklık", def: "Harita uzunluğu × ölçek paydası" },
        { term: "Büyük ölçek", def: "Payda küçük, ayrıntı çok" },
        { term: "İzohips", def: "Eş yükselti eğrisi" },
        { term: "1 km", def: "100.000 cm" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "fel-bilgi", name: "Bilgi Felsefesi", branch: "felsefe",
      summary: "Epistemoloji; bilginin kaynağı (akıl/deney), doğruluk ve kuşkuculuk.",
      curriculumRefs: ["2026-YKS Felsefe: Bilgi felsefesi"],
      prerequisites: ["fel-giris"], estimatedMinutes: 15, difficulty: 2,
      objectives: ["Bilginin kaynağına ilişkin görüşleri ayırır.", "Rasyonalizm-empirizm karşıtlığını açıklar.", "Kuşkuculuğun savını tanır."],
      content: `
        <h2>Bilgi Felsefesi (Epistemoloji)</h2>
        <p>Epistemoloji; bilginin <b>kaynağını</b>, <b>sınırlarını</b> ve <b>doğruluğunu</b> sorgular.</p>
        <h3>Bilginin kaynağı tartışması</h3>
        <ul>
          <li><b>Rasyonalizm (akılcılık):</b> doğru bilginin kaynağı <b>akıl</b>dır (Descartes).</li>
          <li><b>Empirizm (deneycilik):</b> bilgi <b>deney ve gözlemden</b> gelir; zihin başlangıçta boş levhadır (Locke).</li>
        </ul>
        <h3>Doğru bilgi mümkün mü?</h3>
        <ul>
          <li><b>Dogmatizm:</b> kesin bilgi mümkündür.</li>
          <li><b>Septisizm (kuşkuculuk):</b> kesin/genel-geçer bilgiye ulaşılamaz.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>"Bütün bilgilerimiz duyu deneyiyle başlar" diyen bir düşünür <b>empirist</b>tir; bilginin kaynağını deneye bağlar.</p>
        <h3>Sık yapılan hata</h3>
        <p>Rasyonalizm ile empirizmi karıştırmak. İpucu: <b>akıl → rasyonalizm</b>, <b>deney → empirizm</b>.</p>
        <h3>Özet kartı</h3>
        <ul><li>Epistemoloji = bilgi felsefesi.</li><li>Akıl=rasyonalizm, deney=empirizm.</li><li>Kuşkuculuk: kesin bilgi yok.</li></ul>`,
      commonMistakes: ["Rasyonalizm/empirizmi ters eşleştirmek.", "Septisizmi 'bilgi yoktur' diye aşırı yorumlamak."],
      pairs: [
        { term: "Epistemoloji", def: "Bilgi felsefesi" },
        { term: "Rasyonalizm", def: "Bilginin kaynağı akıl" },
        { term: "Empirizm", def: "Bilginin kaynağı deney" },
        { term: "Septisizm", def: "Kesin bilgiden kuşku" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "din-islam", name: "Din ve İslam", branch: "din",
      summary: "Din kavramı; İslam'ın anlamı, temel kaynağı ve iman esasları.",
      curriculumRefs: ["2026-YKS Din Kültürü: Din ve İslam"],
      prerequisites: ["din-bilgi"], estimatedMinutes: 14, difficulty: 1,
      objectives: ["Din kavramını tanımlar.", "İslam'ın temel kaynağını belirtir.", "İman esaslarını sıralar."],
      content: `
        <h2>Din ve İslam</h2>
        <p><b>Din</b>, insanın yaratıcısıyla ve evrenle ilişkisini düzenleyen inanç, ibadet ve ahlak ilkeleri bütünüdür.</p>
        <h3>İslam'ın anlamı ve kaynağı</h3>
        <p>"İslam" sözcüğü <b>barış, esenlik ve teslimiyet</b> anlamlarını taşır. İslam'ın temel kaynağı <b>Kur'an-ı Kerim</b>, ikinci kaynağı Hz. Muhammed'in <b>sünnet</b>idir.</p>
        <h3>İman esasları (Âmentü)</h3>
        <p>Allah'a, meleklere, kitaplara, peygamberlere, ahiret gününe ve kadere iman.</p>
        <h3>İslam'ın şartları</h3>
        <p>Kelime-i şehadet, namaz, oruç, zekât ve hac.</p>
        <h3>Çözümlü örnek</h3>
        <p>İslam'ın temel kaynağı sorulduğunda yanıt <b>Kur'an-ı Kerim</b>'dir; ondan sonra Hz. Peygamber'in sünneti gelir.</p>
        <h3>Özet kartı</h3>
        <ul><li>İslam = barış/teslimiyet.</li><li>Temel kaynak: Kur'an; ikinci: sünnet.</li><li>İman esasları altı maddedir.</li></ul>`,
      commonMistakes: ["İman esasları ile İslam'ın şartlarını karıştırmak.", "Temel kaynağı sünnet sanmak (önce Kur'an)."],
      pairs: [
        { term: "İslam'ın anlamı", def: "Barış, esenlik, teslimiyet" },
        { term: "Temel kaynak", def: "Kur'an-ı Kerim" },
        { term: "İkinci kaynak", def: "Sünnet (Hz. Muhammed'in örnekliği)" },
        { term: "İman esasları", def: "Allah, melek, kitap, peygamber, ahiret, kader" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  TYT_CONTENT.addQuestions([
    /* COĞRAFYA — Harita Bilgisi */
    {
      id: "sosyal-cog-harita-001", subject: "sosyal", unit: "cog-harita", skill: "islem", difficulty: 2, estimatedSeconds: 75,
      q: "1/500.000 ölçekli haritada iki şehir arası 4 cm ölçülmüştür. İki şehir arasındaki gerçek uzaklık kaç km'dir?",
      options: ["2", "20", "200", "40", "2.000"], answer: 1,
      explain: "4 × 500.000 = 2.000.000 cm = 20 km.",
      solution: { short: "4 × 500.000 = 2.000.000 cm = 20 km.",
        steps: ["Gerçek = harita × payda = 4 × 500.000 = 2.000.000 cm.", "cm → km: 2.000.000 / 100.000 = 20 km."],
        whyOthersWrong: ["2: yalnız 200'e bölme.", "200: km çevriminde basamak hatası.", "40: 2× hatası.", "2.000: cm'yi m sanmak."] },
      tags: ["ölçek"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-cog-harita-002", subject: "sosyal", unit: "cog-harita", skill: "kavram", difficulty: 2, estimatedSeconds: 55,
      q: "Aşağıdaki ölçeklerden hangisiyle çizilen harita <b>en ayrıntılıdır</b>?",
      options: ["1/5.000.000", "1/1.000.000", "1/500.000", "1/25.000", "1/250.000"], answer: 3,
      explain: "Payda en küçük olan (1/25.000) en büyük ölçektir; ayrıntı en fazladır.",
      solution: { short: "Payda küçük → büyük ölçek → çok ayrıntı: 1/25.000.",
        steps: ["Ayrıntı, ölçek büyüdükçe artar.", "Büyük ölçek = paydası küçük olan.", "En küçük payda 25.000 → en ayrıntılı."],
        whyOthersWrong: ["Diğerlerinin paydası daha büyük → küçük ölçek → az ayrıntı."] },
      tags: ["ölçek-ayrıntı"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-cog-harita-003", subject: "sosyal", unit: "cog-harita", skill: "kavram", difficulty: 1, estimatedSeconds: 45,
      q: "Deniz seviyesinden aynı yükseklikteki noktaları birleştiren eğrilere ne ad verilir?",
      options: ["İzoterm", "İzohips", "İzobar", "Paralel", "Meridyen"], answer: 1,
      explain: "Eş yükselti eğrileri izohipstir.",
      solution: { short: "Eş yükselti = izohips.",
        steps: ["Aynı yükseklik noktalarını birleştiren eğri.", "Bunun adı izohips (eş yükselti eğrisi)."],
        whyOthersWrong: ["İzoterm: eş sıcaklık.", "İzobar: eş basınç.", "Paralel/meridyen: konum çizgileri."] },
      tags: ["izohips"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-cog-harita-004", subject: "sosyal", unit: "cog-harita", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Bir haritada ölçek 1/200.000 biçiminde verilmişse bu hangi ölçek türüdür?",
      options: ["Çizgi ölçek", "Kesir ölçek", "Grafik ölçek", "Yükseklik ölçeği", "Eğim ölçeği"], answer: 1,
      explain: "Kesir (oran) biçiminde verilen ölçek kesir ölçektir.",
      solution: { short: "1/200.000 oran biçimi → kesir ölçek.",
        steps: ["Ölçek bir kesir/oran olarak verilmiş.", "Bu tür kesir (oran) ölçektir; çizgiyle gösterilse çizgi ölçek olurdu."],
        whyOthersWrong: ["Çizgi/grafik ölçek: çizgiyle gösterilir.", "Yükseklik/eğim: ölçek türü değildir."] },
      tags: ["ölçek-türü"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    /* FELSEFE — Bilgi Felsefesi */
    {
      id: "sosyal-fel-bilgi-001", subject: "sosyal", unit: "fel-bilgi", skill: "kavram", difficulty: 2, estimatedSeconds: 55,
      q: "Doğru bilginin kaynağının <b>akıl</b> olduğunu savunan görüş hangisidir?",
      options: ["Empirizm", "Rasyonalizm", "Septisizm", "Pozitivizm", "Sezgicilik"], answer: 1,
      explain: "Aklı temel kaynak sayan görüş rasyonalizmdir.",
      solution: { short: "Akıl → rasyonalizm.",
        steps: ["Soru bilginin kaynağını akla bağlayan görüşü istiyor.", "Bu görüş rasyonalizm (akılcılık)."],
        whyOthersWrong: ["Empirizm: kaynak deney.", "Septisizm: kesin bilgiden kuşku.", "Pozitivizm: olgu/bilim vurgusu.", "Sezgicilik: kaynak sezgi."] },
      tags: ["rasyonalizm"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-fel-bilgi-002", subject: "sosyal", unit: "fel-bilgi", skill: "kavram", difficulty: 2, estimatedSeconds: 55,
      q: "\"Zihin doğuştan boş bir levhadır; bilgi deney ve gözlemle oluşur.\" görüşü hangi akıma aittir?",
      options: ["Rasyonalizm", "Empirizm", "İdealizm", "Dogmatizm", "Mistisizm"], answer: 1,
      explain: "Bilgiyi deneye dayandıran görüş empirizmdir.",
      solution: { short: "Deney/gözlem → empirizm.",
        steps: ["'Boş levha' ve 'deneyle oluşur' ifadeleri empirizmin temel savıdır.", "Cevap empirizm."],
        whyOthersWrong: ["Rasyonalizm: kaynak akıl.", "İdealizm: varlık görüşü.", "Dogmatizm: kesin bilgi mümkündür der ama kaynağı belirtmez.", "Mistisizm: sezgi/iç deneyim."] },
      tags: ["empirizm"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-fel-bilgi-003", subject: "sosyal", unit: "fel-bilgi", skill: "kavram", difficulty: 2, estimatedSeconds: 50,
      q: "Kesin ve genel-geçer bilginin mümkün olmadığını savunan görüş hangisidir?",
      options: ["Dogmatizm", "Septisizm", "Rasyonalizm", "Realizm", "Empirizm"], answer: 1,
      explain: "Kesin bilgiden kuşku duyan görüş septisizmdir (kuşkuculuk).",
      solution: { short: "Kesin bilgi yok → septisizm.",
        steps: ["Soru kesin bilginin imkânını reddeden görüşü istiyor.", "Bu görüş septisizm (kuşkuculuk)."],
        whyOthersWrong: ["Dogmatizm: kesin bilgi mümkündür (zıt).", "Rasyonalizm/empirizm: kaynağı tartışır.", "Realizm: varlık görüşü."] },
      tags: ["septisizm"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-fel-bilgi-004", subject: "sosyal", unit: "fel-bilgi", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "Felsefenin bilgiyi konu edinen alanı aşağıdakilerden hangisidir?",
      options: ["Ontoloji", "Etik", "Epistemoloji", "Estetik", "Aksiyoloji"], answer: 2,
      explain: "Bilgi felsefesi epistemolojidir.",
      solution: { short: "Bilgi alanı = epistemoloji.",
        steps: ["Bilgiyi konu edinen alan epistemolojidir."],
        whyOthersWrong: ["Ontoloji: varlık.", "Etik: ahlak.", "Estetik: güzel/sanat.", "Aksiyoloji: değerler (genel)."] },
      tags: ["epistemoloji"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    /* DİN KÜLTÜRÜ — Din ve İslam */
    {
      id: "sosyal-din-islam-001", subject: "sosyal", unit: "din-islam", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "İslam dininin temel kaynağı aşağıdakilerden hangisidir?",
      options: ["Sünnet", "Kur'an-ı Kerim", "İcma", "Kıyas", "Tefsir"], answer: 1,
      explain: "İslam'ın temel (birinci) kaynağı Kur'an-ı Kerim'dir.",
      solution: { short: "Temel kaynak: Kur'an-ı Kerim.",
        steps: ["İslam'ın birinci kaynağı Kur'an'dır.", "Sünnet ikinci kaynaktır."],
        whyOthersWrong: ["Sünnet: ikinci kaynak.", "İcma/Kıyas: fıkıh delilleri.", "Tefsir: Kur'an açıklaması, kaynak değil."] },
      tags: ["kaynak"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-din-islam-002", subject: "sosyal", unit: "din-islam", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "\"İslam\" kelimesinin sözlük anlamı aşağıdakilerden hangisidir?",
      options: ["Bilgi ve hikmet", "Barış ve teslimiyet", "Adalet ve eşitlik", "Sabır ve şükür", "Yardım ve paylaşma"], answer: 1,
      explain: "İslam; barış, esenlik ve teslimiyet anlamlarını taşır.",
      solution: { short: "İslam = barış/esenlik/teslimiyet.",
        steps: ["Kelimenin kökü esenlik ve teslimiyet anlamı taşır.", "Cevap: barış ve teslimiyet."],
        whyOthersWrong: ["Diğerleri İslam'ın değerleri arasında olsa da kelimenin sözlük anlamı değildir."] },
      tags: ["kavram"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-din-islam-003", subject: "sosyal", unit: "din-islam", skill: "kavram", difficulty: 2, estimatedSeconds: 50,
      q: "Aşağıdakilerden hangisi <b>iman esaslarından (Âmentü)</b> biri <b>değildir</b>?",
      options: ["Meleklere iman", "Ahirete iman", "Namaz kılmak", "Kadere iman", "Peygamberlere iman"], answer: 2,
      explain: "Namaz bir ibadettir (İslam'ın şartı); iman esası değildir.",
      solution: { short: "Namaz iman esası değil, İslam'ın şartıdır.",
        steps: ["İman esasları: Allah, melek, kitap, peygamber, ahiret, kader.", "Namaz bir ibadettir → İslam'ın şartlarındandır.", "Bu yüzden iman esası değildir."],
        whyOthersWrong: ["Melek, ahiret, kader, peygambere iman → hepsi iman esasıdır."] },
      tags: ["iman-esasları"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "sosyal-din-islam-004", subject: "sosyal", unit: "din-islam", skill: "kavram", difficulty: 1, estimatedSeconds: 40,
      q: "İslam'ın ikinci temel kaynağı olan, Hz. Muhammed'in söz, davranış ve onaylarına ne ad verilir?",
      options: ["Tefsir", "Sünnet", "Fıkıh", "Akaid", "Siyer"], answer: 1,
      explain: "Hz. Peygamber'in söz, fiil ve onayları sünnettir; ikinci kaynaktır.",
      solution: { short: "Hz. Peygamber'in örnekliği = sünnet.",
        steps: ["Söz, davranış ve onaylar bütünü sünnettir.", "Kur'an'dan sonra ikinci kaynaktır."],
        whyOthersWrong: ["Tefsir: Kur'an yorumu.", "Fıkıh: İslam hukuku.", "Akaid: inanç esasları ilmi.", "Siyer: Hz. Peygamber'in hayatı."] },
      tags: ["sünnet"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    }
  ]);
})();
