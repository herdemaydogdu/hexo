/* ============================================================
   TÜRKÇE — Premium İçerik Batch 5 (Sözcük Türleri: Ad/Sıfat/Zamir/Zarf,
   Edat-Bağlaç-Ünlem). Tüm anlatım ve sorular ÖZGÜN.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-05: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("turkce", [
    {
      id: "tr-adlar", name: "Sözcük Türleri: Ad, Sıfat, Zamir, Zarf", branch: null,
      summary: "İsim, sıfat (niteleme/belirtme), zamir (ad yerine), zarf (belirteç) ayrımı.",
      curriculumRefs: ["2026-YKS Türkçe: İsim, sıfat, zamir, zarf"],
      prerequisites: [], estimatedMinutes: 20, difficulty: 2,
      objectives: [
        "Adı, sıfatı, zamiri ve zarfı görevinden tanır.",
        "Sıfat ile zamiri ayırır (sıfat ismin önünde, zamir ismin yerinde).",
        "Zarfın türlerini (zaman, yer-yön, durum, miktar, soru) ayırır."
      ],
      content: `
        <h2>Sözcük Türleri: Ad, Sıfat, Zamir, Zarf</h2>
        <h3>1) İsim (ad)</h3>
        <p>Varlıkları karşılar: <i> kitap, sevgi, İstanbul</i>. Cins/özel, somut/soyut olabilir.</p>
        <h3>2) Sıfat (ön ad)</h3>
        <p>İsmi <b>niteler</b> ya da <b>belirtir</b>, ismin önüne gelir.</p>
        <ul>
          <li><b>Niteleme:</b> nasıl? → "<u>kırmızı</u> elma"</li>
          <li><b>Belirtme:</b> işaret (<u>bu</u> ev), sayı (<u>üç</u> kalem), belgisiz (<u>birkaç</u> kişi), soru (<u>hangi</u> yol?)</li>
        </ul>
        <h3>3) Zamir (adıl)</h3>
        <p>İsmin <b>yerini</b> tutar: kişi (ben, sen), işaret (bu, şu), soru (kim, ne), belgisiz (kimse, herkes). İsimsiz kullanılır.</p>
        <h3>4) Zarf (belirteç)</h3>
        <p>Fiili, sıfatı ya da başka bir zarfı etkiler: zaman (dün), yer-yön (içeri), durum (hızlı koştu), miktar (çok güzel), soru (nasıl?).</p>
        <div class="formula">Sıfat–zamir ayrımı: Sözcük bir ismin ÖNÜNDE ve onu belirtiyorsa SIFAT; ismin YERİNE geçip tek başına kullanılıyorsa ZAMİR. "<u>Bu</u> kitap" (sıfat) ≠ "<u>Bu</u>, benim" (zamir).</div>
        <h3>Çözümlü örnek</h3>
        <p>"<u>İki</u> öğrenci geldi; <u>ikisi</u> de başarılı." → "iki" ismi belirten sıfat; "ikisi" ismin yerini tutan zamir.</p>
        <h3>Sık yapılan hata</h3>
        <p>İşaret sözcüğünü her yerde sıfat sanmak. İsim varsa sıfat, isim yoksa zamirdir.</p>
        <h3>Özet kartı</h3>
        <ul><li>Sıfat ismin önünde + isim var.</li><li>Zamir ismin yerinde + isim yok.</li><li>Zarf fiili/sıfatı etkiler, çekim eki almaz.</li></ul>`,
      commonMistakes: ["İşaret zamirini sıfat sanmak.", "Durum zarfı ile sıfatı karıştırmak."],
      pairs: [
        { term: "Sıfat", def: "İsmi niteler/belirtir, önünde gelir" },
        { term: "Zamir", def: "İsmin yerini tutar (isim yok)" },
        { term: "Zarf", def: "Fiili/sıfatı etkiler" },
        { term: "Niteleme sıfatı", def: "nasıl? (kırmızı elma)" },
        { term: "Belirtme sıfatı", def: "işaret/sayı/belgisiz/soru" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-edat", name: "Edat, Bağlaç ve Ünlem", branch: null,
      summary: "Edat (ilgeç), bağlaç ve ünlem; ile/de/ki ayrımları.",
      curriculumRefs: ["2026-YKS Türkçe: Edat, bağlaç ve ünlem"],
      prerequisites: ["tr-adlar"], estimatedMinutes: 18, difficulty: 2,
      objectives: [
        "Edat, bağlaç ve ünlemi görevinden ayırır.",
        "“ile”, “de”, “ki”nin edat/bağlaç/ek ayrımını yapar.",
        "Bağlacın cümleden çıkarılabilirliğini ölçüt olarak kullanır."
      ],
      content: `
        <h2>Edat, Bağlaç ve Ünlem</h2>
        <h3>1) Edat (ilgeç)</h3>
        <p>Tek başına anlamı yoktur; başka sözcüklerle <b>anlam ilgisi</b> kurar: <i>gibi, kadar, için, göre, ile, dek, doğru, karşı, rağmen</i>. Cümleden çıkarılırsa anlam bozulur.</p>
        <h3>2) Bağlaç</h3>
        <p>Sözcükleri/cümleleri <b>bağlar</b>: <i>ve, ama, fakat, çünkü, ya da, hem…hem, ne…ne, oysa, ki, de/da</i>. Çoğu zaman cümleden <b>çıkarılabilir</b>, anlam tümden bozulmaz.</p>
        <h3>3) Ünlem</h3>
        <p>Sevinç, korku, seslenme bildirir: <i>ah!, eyvah!, ey!, hey!, oh!</i></p>
        <div class="formula">“ile” ayrımı: “ve” ile değiştirilebiliyorsa BAĞLAÇ ("Ali ile Veli = Ali ve Veli"); değiştirilemiyorsa EDAT ("kalem ile yazdı" = araç).</div>
        <h3>Çözümlü örnek</h3>
        <p>"Seninle <u>gurur duyuyorum</u>." → "ile (-le)" araç/birliktelik ilgisi kurar, "ve" denemez → <b>edat</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>Bağlaç "de/da"yı ek "-de/-da" ile, bağlaç "ki"yi ek "-ki" ile karıştırmak (bkz. Yazım Kuralları).</p>
        <h3>Özet kartı</h3>
        <ul><li>Edat: çıkınca anlam bozulur (gibi, için, kadar).</li><li>Bağlaç: çıkınca anlam büyük ölçüde durur (ve, ama).</li><li>"ile" = "ve" oluyorsa bağlaç.</li></ul>`,
      commonMistakes: ["Edat ile bağlacı karıştırmak.", "“ile”yi her yerde bağlaç sanmak."],
      pairs: [
        { term: "Edat (ilgeç)", def: "Tek başına anlamsız; ilgi kurar (gibi, için)" },
        { term: "Bağlaç", def: "Sözcük/cümle bağlar (ve, ama, çünkü)" },
        { term: "Ünlem", def: "Duygu/seslenme (ah!, ey!)" },
        { term: "“ile” bağlaç", def: "“ve” ile değiştirilebilir" },
        { term: "“ile” edat", def: "Araç/birliktelik (kalemle yazdı)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 2, skill: "kavram-uygulama",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- AD/SIFAT/ZAMİR/ZARF (10) ---- */
    Q("turkce-tr-adlar-101", "tr-adlar",
      "\"<b>Bu</b> soruyu kimse çözemedi.\" cümlesindeki altı çizili sözcüğün türü nedir?",
      ["Zamir", "İşaret sıfatı", "Zarf", "Edat", "Bağlaç"], 1,
      "“Bu”, “soru” isminin önünde onu belirtiyor → işaret sıfatı.",
      { short: "İsim var (soru) → işaret sıfatı.", steps: ["'Bu' ismin önünde ve onu işaret ediyor.", "İsim olduğu için sıfattır."], whyOthersWrong: ["İsim olmasaydı (Bu, benim) zamir olurdu."] }, 2),
    Q("turkce-tr-adlar-102", "tr-adlar",
      "Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>zamirdir</b>?",
      ["<b>Üç</b> kalem aldım.", "<b>Bazı</b> insanlar geç kalır.", "<b>Bu</b> ev satılık.", "<b>Hepsi</b> gelmiş.", "<b>Kırmızı</b> araba hızlı."], 3,
      "“Hepsi” bir ismin yerini tutar, önünde isim yoktur → zamir.",
      { short: "İsim yok, yerini tutuyor → zamir.", steps: ["'Hepsi' tek başına, isim yok.", "İsmin yerini tuttuğu için zamir."], whyOthersWrong: ["Üç/Bazı/Bu/Kırmızı bir ismi belirtiyor → sıfat."] }, 2),
    Q("turkce-tr-adlar-103", "tr-adlar",
      "\"Çocuk <b>hızlı</b> koştu.\" cümlesindeki altı çizili sözcüğün türü nedir?",
      ["Sıfat", "Zarf", "İsim", "Zamir", "Edat"], 1,
      "“hızlı” fiili (koştu) nasıl olduğunu belirtiyor → durum zarfı.",
      { short: "Fiili etkiliyor → zarf.", steps: ["'hızlı' 'koştu' fiilini niteliyor (nasıl koştu?).", "Fiili etkilediği için zarf."], whyOthersWrong: ["İsmi nitelese sıfat olurdu (hızlı araba)."] }, 2),
    Q("turkce-tr-adlar-104", "tr-adlar",
      "\"<b>Yarın</b> sınav var.\" cümlesindeki altı çizili sözcük hangi tür zarftır?",
      ["Durum", "Zaman", "Yer-yön", "Miktar", "Soru"], 1,
      "“Yarın” işin ne zaman olacağını bildirir → zaman zarfı.",
      { short: "Ne zaman? → zaman zarfı.", steps: ["'Yarın' zamanı belirtiyor."], whyOthersWrong: ["Durum/yer/miktar/soru anlamı yok."] }, 1),
    Q("turkce-tr-adlar-105", "tr-adlar",
      "\"<b>İki</b> kardeş, <b>ikisi</b> de çalışkandı.\" cümlesindeki altı çizili sözcüklerin türü sırasıyla nedir?",
      ["Sıfat - Zamir", "Zamir - Sıfat", "Sıfat - Sıfat", "Zamir - Zamir", "Zarf - Zamir"], 0,
      "“İki” ismi (kardeş) belirtir → sıfat; “ikisi” ismin yerini tutar → zamir.",
      { short: "iki=sıfat, ikisi=zamir.", steps: ["'İki kardeş' → isim var → sıfat.", "'ikisi' → isim yok → zamir."], whyOthersWrong: ["Diğer sıralamalar görevle uyuşmaz."] }, 3),
    Q("turkce-tr-adlar-106", "tr-adlar",
      "Aşağıdaki cümlelerin hangisinde <b>niteleme sıfatı</b> vardır?",
      ["Hangi otobüse bineceğiz?", "Birkaç öğrenci geldi.", "Yeşil çimenlere uzandık.", "Bu kitap çok güzel.", "Üç saat bekledik."], 2,
      "“yeşil” çimeni nasıl? sorusuna yanıt verir → niteleme sıfatı.",
      { short: "nasıl? → niteleme (yeşil).", steps: ["'yeşil çimen' rengi/niteliği bildiriyor."], whyOthersWrong: ["Hangi=soru, Birkaç=belgisiz, Bu=işaret, Üç=sayı (belirtme sıfatları)."] }, 2),
    Q("turkce-tr-adlar-107", "tr-adlar",
      "\"Onu <b>çok</b> beğendim.\" cümlesindeki altı çizili sözcüğün türü nedir?",
      ["Sıfat", "Miktar (azlık-çokluk) zarfı", "Zaman zarfı", "Zamir", "Edat"], 1,
      "“çok” fiildeki (beğendim) derecesini bildirir → miktar zarfı.",
      { short: "Fiilin derecesi → miktar zarfı.", steps: ["'çok beğendim' ne kadar? → miktar zarfı."], whyOthersWrong: ["İsmi nitelese sıfat olurdu (çok kitap)."] }, 2),
    Q("turkce-tr-adlar-108", "tr-adlar",
      "Aşağıdaki cümlelerin hangisinde <b>kişi zamiri</b> kullanılmıştır?",
      ["Bu, senin defterin.", "Biz erken geldik.", "Hangi yol kısa?", "Kimse cevap vermedi.", "Şunu bana ver."], 1,
      "“Biz” bir kişi zamiridir.",
      { short: "'Biz' → kişi zamiri.", steps: ["Kişi zamirleri: ben, sen, o, biz, siz, onlar.", "'Biz' bunlardan biridir."], whyOthersWrong: ["Bu/Şunu işaret, Hangi soru, Kimse belgisiz zamir."] }, 1),
    Q("turkce-tr-adlar-109", "tr-adlar",
      "\"<b>İçeri</b> girdi ve oturdu.\" cümlesindeki altı çizili sözcük hangi tür zarftır?",
      ["Zaman", "Durum", "Yer-yön", "Miktar", "Soru"], 2,
      "“İçeri” fiilin yönünü bildirir → yer-yön zarfı.",
      { short: "Yön bildiriyor → yer-yön zarfı.", steps: ["'İçeri girdi' nereye/hangi yöne? → yer-yön."], whyOthersWrong: ["Zaman/durum/miktar/soru değil."] }, 2),
    Q("turkce-tr-adlar-110", "tr-adlar",
      "\"<b>Birçok</b> insan bu filmi izledi.\" cümlesindeki altı çizili sözcüğün türü nedir?",
      ["Niteleme sıfatı", "Belgisiz sıfat", "Sayı sıfatı", "Zamir", "Zarf"], 1,
      "“Birçok” ismi (insan) belirsiz biçimde belirtir → belgisiz sıfat.",
      { short: "Belirsiz miktar + isim → belgisiz sıfat.", steps: ["'Birçok insan' kesin sayı vermez, ismi belirtir."], whyOthersWrong: ["Niteleme nasıl? sorusuna yanıt verir; sayı kesin sayıdır; isim var, zamir/zarf değil."] }, 2),

    /* ---- EDAT/BAĞLAÇ/ÜNLEM (10) ---- */
    Q("turkce-tr-edat-101", "tr-edat",
      "\"Sınava <b>çok</b> çalıştığı <b>için</b> başardı.\" cümlesindeki “için” sözcüğünün türü nedir?",
      ["Bağlaç", "Edat (ilgeç)", "Zarf", "Ünlem", "Zamir"], 1,
      "“için” neden/amaç ilgisi kuran bir edattır.",
      { short: "'için' → edat.", steps: ["'için' tek başına anlamsız, ilgi kurar.", "Edattır."], whyOthersWrong: ["Bağlaç/zarf/ünlem/zamir değil."] }, 1),
    Q("turkce-tr-edat-102", "tr-edat",
      "Aşağıdaki cümlelerin hangisinde “ile” <b>bağlaç</b> görevindedir?",
      ["Kalemle yazdı.", "Ali ile Veli geldi.", "Otobüsle gittik.", "Sevgiyle baktı.", "Bıçakla kesti."], 1,
      "“Ali ile Veli” = “Ali ve Veli” → “ile” bağlaçtır.",
      { short: "'ve' ile değişiyorsa bağlaç.", steps: ["'Ali ile Veli' = 'Ali ve Veli' → bağlaç.", "Diğerlerinde 'ile' araç (edat)."], whyOthersWrong: ["Kalemle/otobüsle/sevgiyle/bıçakla → araç/durum, edat."] }, 2),
    Q("turkce-tr-edat-103", "tr-edat",
      "\"<b>Eyvah</b>, otobüsü kaçırdım!\" cümlesindeki altı çizili sözcüğün türü nedir?",
      ["Edat", "Bağlaç", "Ünlem", "Zarf", "Zamir"], 2,
      "“Eyvah” bir duygu (telaş) bildiren ünlemdir.",
      { short: "Duygu bildiriyor → ünlem.", steps: ["'Eyvah' ani duygu/telaş anlatır."], whyOthersWrong: ["Edat/bağlaç/zarf/zamir değil."] }, 1),
    Q("turkce-tr-edat-104", "tr-edat",
      "Aşağıdaki cümlelerin hangisinde <b>bağlaç</b> kullanılmıştır?",
      ["Bir kuş gibi özgürdü.", "Akşama kadar bekledik.", "Çalıştı ama kazanamadı.", "Bana göre haklısın.", "Sınav için hazırlandı."], 2,
      "“ama” iki cümleyi bağlayan bir bağlaçtır.",
      { short: "'ama' → bağlaç.", steps: ["'Çalıştı ama kazanamadı' iki yargıyı bağlıyor."], whyOthersWrong: ["gibi/kadar/göre/için → edat."] }, 2),
    Q("turkce-tr-edat-105", "tr-edat",
      "\"Onun <b>kadar</b> çalışkan birini görmedim.\" cümlesindeki “kadar” sözcüğünün türü nedir?",
      ["Bağlaç", "Edat", "Zarf", "Sıfat", "Ünlem"], 1,
      "“kadar” karşılaştırma ilgisi kuran bir edattır.",
      { short: "'kadar' → edat.", steps: ["'kadar' tek başına anlamsız, karşılaştırma ilgisi kurar."], whyOthersWrong: ["Bağlaç/zarf/sıfat/ünlem değil."] }, 2),
    Q("turkce-tr-edat-106", "tr-edat",
      "Aşağıdaki cümlelerin hangisinde edat (ilgeç) <b>yoktur</b>?",
      ["Bir melek gibi nazikti.", "Sabaha dek çalıştı.", "Hem güldü hem ağladı.", "Senin için geldim.", "Buz gibi suydu."], 2,
      "“hem…hem” bir bağlaçtır; bu cümlede edat yoktur.",
      { short: "'hem…hem' bağlaç → edat yok.", steps: ["Diğerlerinde gibi/dek/için edatı var.", "Bu cümlede yalnız bağlaç var."], whyOthersWrong: ["gibi, dek, için → edat içeriyor."] }, 3),
    Q("turkce-tr-edat-107", "tr-edat",
      "\"Yağmur yağdı, <b>bu yüzden</b> maç ertelendi.\" Altı çizili söz öbeği hangi anlam ilişkisini kuran bağlaçtır?",
      ["Karşılaştırma", "Neden-sonuç", "Koşul", "Amaç", "Açıklama"], 1,
      "“bu yüzden” neden-sonuç bağlacıdır.",
      { short: "'bu yüzden' → neden-sonuç.", steps: ["Önceki cümle neden, sonraki sonuç.", "'bu yüzden' bunları bağlar."], whyOthersWrong: ["Karşılaştırma/koşul/amaç/açıklama değil."] }, 2),
    Q("turkce-tr-edat-108", "tr-edat",
      "Aşağıdaki cümlelerin hangisinde “de/da” <b>bağlaç</b> olarak kullanılmıştır?",
      ["Kitap masada duruyor.", "Sen de bizimle gel.", "Evde kimse yok.", "Yolda kaldık.", "Bahçede oynadılar."], 1,
      "“Sen de” → “dahi/ve” anlamı → bağlaç (ayrı yazılır).",
      { short: "'Sen de' → bağlaç.", steps: ["'de' burada 'dahi' anlamı verir.", "Bağlaçtır, ayrı yazılır."], whyOthersWrong: ["masada/evde/yolda/bahçede → bulunma hâl eki."] }, 2),
    Q("turkce-tr-edat-109", "tr-edat",
      "\"<b>Ne</b> yedi <b>ne</b> içti.\" cümlesindeki altı çizili sözler için doğru olan hangisidir?",
      ["Soru zamiri", "Bağlaç (ne…ne)", "Edat", "Ünlem", "Zarf"], 1,
      "“ne…ne” olumsuzluk bildiren bir bağlaç öbeğidir.",
      { short: "'ne…ne' → bağlaç.", steps: ["İki ögeyi olumsuz bağlar.", "Bağlaç öbeğidir."], whyOthersWrong: ["Soru/edat/ünlem/zarf değil."] }, 2),
    Q("turkce-tr-edat-110", "tr-edat",
      "Aşağıdaki cümlelerin hangisinde edat cümleden çıkarıldığında anlam <b>bozulur</b>?",
      ["Ali ve Veli geldi.", "Çalıştı ama yorulmadı.", "Kuş gibi hafifti.", "Hem okudu hem yazdı.", "Geldi de gitti."], 2,
      "Edatlar (gibi) çıkınca anlam bozulur; “Kuş hafifti” karşılaştırmayı yitirir.",
      { short: "'gibi' (edat) çıkınca anlam bozulur.", steps: ["Edat çıkınca ilgi kaybolur.", "'Kuş gibi hafif' → 'Kuş hafif' anlam değişir."], whyOthersWrong: ["ve/ama/hem/de bağlaçtır; çıkınca anlam büyük ölçüde korunur."] }, 3)
  ]);
})();
