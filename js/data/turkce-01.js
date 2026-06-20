/* ============================================================
   TÜRKÇE — Premium İçerik Batch 1 (Sözcükte Anlam, Cümlede Anlam)
   Kaynak: TYT Türkçe kapsamı ve soru tarzı referans alınmış; tüm
   anlatım ve sorular SIFIRDAN ÖZGÜN yazılmıştır (sourceType:"original").
   Mevcut ince üniteler upsertUnits ile tam sürümle değiştirilir.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-01: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("turkce", [
    {
      id: "tr-sozcuk", name: "Sözcükte Anlam", branch: null,
      summary: "Gerçek/yan/mecaz/terim anlam; eş-zıt-sesteş; deyim-atasözü; somut-soyut, ad aktarması, ikileme.",
      curriculumRefs: ["2026-YKS Türkçe: Sözcükte anlam; söz öbekleri; deyim ve atasözü"],
      prerequisites: [], estimatedMinutes: 22, difficulty: 2,
      objectives: [
        "Bir sözcüğün gerçek, yan, mecaz ve terim anlamını bağlamdan ayırır.",
        "Eş/zıt/sesteş anlamlı sözcükleri ve anlam ilişkilerini tanır.",
        "Deyim ile atasözünü ayırır; ad aktarması ve dolaylama gibi söz sanatlarını fark eder."
      ],
      content: `
        <h2>Sözcükte Anlam</h2>
        <p><b>Ön bilgi:</b> Bir sözcüğün anlamı sözlükte sabit değildir; <b>cümle (bağlam)</b> içinde belirginleşir. Bu yüzden soruları çözerken sözcüğü tek başına değil, geçtiği cümleyle düşün.</p>
        <h3>1) Anlam türleri</h3>
        <ul>
          <li><b>Gerçek (temel) anlam:</b> Sözlükteki ilk, herkesçe bilinen anlam. "Soğuk <u>su</u> içti."</li>
          <li><b>Yan anlam:</b> Temel anlamla <b>benzerlik</b> kurularak türeyen anlam. "Masanın <u>ayağı</u> kırıldı."</li>
          <li><b>Mecaz anlam:</b> Gerçek anlamdan <b>tamamen</b> uzaklaşma. "<u>Soğuk</u> bir insandı." (sevecen değil)</li>
          <li><b>Terim anlam:</b> Bir bilim/sanat/meslek dalına özgü. "Üçgenin <u>açısı</u>."</li>
        </ul>
        <h3>2) Anlam ilişkileri</h3>
        <ul>
          <li><b>Eş anlam:</b> yazılışı farklı, anlamı aynı (kelime–sözcük).</li>
          <li><b>Zıt anlam:</b> karşıt anlam (sıcak–soğuk).</li>
          <li><b>Sesteş (eş sesli):</b> yazılışı aynı, anlamı farklı (yüz: surat / yüz: 100).</li>
          <li><b>Somut–soyut:</b> beş duyuyla algılanan / algılanamayan (taş / sevgi).</li>
          <li><b>Genel–özel:</b> kapsamı geniş / dar (ağaç → çam).</li>
        </ul>
        <h3>3) Söz öbekleri ve söz sanatları</h3>
        <ul>
          <li><b>Deyim:</b> kalıplaşmış, çoğunlukla mecazlı söz; öğüt vermez ("göze girmek").</li>
          <li><b>Atasözü:</b> deneyimden <b>öğüt/yargı</b> veren kalıp söz ("Damlaya damlaya göl olur").</li>
          <li><b>Ad aktarması (mecaz-ı mürsel):</b> bir şeyi parça/bütün ilişkisiyle anma ("Sınıf güldü" = öğrenciler).</li>
          <li><b>Dolaylama:</b> tek sözcükle anlatılabileni birden çok sözcükle anlatma ("file bekçisi" = kaleci).</li>
          <li><b>İkileme:</b> anlamı güçlendiren söz tekrarı ("yavaş yavaş").</li>
        </ul>
        <h3>Çözümlü örnekler</h3>
        <p><b>(Kolay)</b> "Bu çocuğun çok <u>keskin</u> bir zekâsı var." → "keskin" bıçak için gerçek; burada zekâ için <b>mecaz</b>.</p>
        <p><b>(Orta)</b> "Köye <u>baca</u> tütmeye başladı." → bacalar değil, evlerde yaşam/ateş yandığını anlatır: <b>ad aktarması</b>.</p>
        <p><b>(TYT düzeyi)</b> "Ağzı olan konuşuyor." cümlesinde altı çizili söz bir <b>deyim</b> değil; herkesin yorum yaptığını anlatan, yargı bildiren <b>atasözü</b> niteliğindedir.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul>
          <li>Yan anlam ile mecazı karıştırmak: yan anlamda <b>benzerlik</b> ve somutluk vardır (masanın ayağı), mecazda gerçeklikten tam kopuş.</li>
          <li>Deyimi atasözü sanmak: atasözü <b>öğüt/genel yargı</b> verir, deyim vermez.</li>
        </ul>
        <h3>Hızlı yöntem</h3>
        <p>Altı çizili sözcüğü önce <b>gerçek</b> anlamıyla düşün; cümleye uymuyorsa mecaza; bir nesnenin parçasıysa yan anlama; bir alana özgüyse terim anlama yönel.</p>
        <h3>Özet kartı</h3>
        <ul><li>Gerçek→yan→mecaz→terim sırasıyla dene.</li><li>Atasözü öğüt verir, deyim vermez.</li><li>Parça-bütünle anma = ad aktarması.</li></ul>`,
      commonMistakes: ["Yan anlam ile mecazı karıştırmak.", "Deyimi atasözünden ayıramamak."],
      pairs: [
        { term: "Gerçek anlam", def: "Sözlükteki ilk, temel anlam" },
        { term: "Yan anlam", def: "Benzerlikle türeyen anlam (masanın ayağı)" },
        { term: "Mecaz anlam", def: "Gerçeklikten tam uzaklaşma" },
        { term: "Terim anlam", def: "Bir bilim/sanat dalına özgü anlam" },
        { term: "Ad aktarması", def: "Parça-bütün ilişkisiyle anma" },
        { term: "Dolaylama", def: "Tek sözcüklük kavramı çok sözcükle anlatma" },
        { term: "Atasözü", def: "Öğüt/yargı veren kalıp söz" },
        { term: "Deyim", def: "Kalıplaşmış, mecazlı söz (öğüt vermez)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-cumle", name: "Cümlede Anlam", branch: null,
      summary: "Neden-sonuç, amaç-sonuç, koşul, karşılaştırma; öznel-nesnel, kesinlik-olasılık, tanım, öneri, eleştiri.",
      curriculumRefs: ["2026-YKS Türkçe: Cümlede anlam ve anlam ilişkileri"],
      prerequisites: ["tr-sozcuk"], estimatedMinutes: 22, difficulty: 2,
      objectives: [
        "Cümleler arası neden-sonuç, amaç-sonuç, koşul ve karşılaştırma ilişkilerini ayırır.",
        "Öznel-nesnel, kesinlik-olasılık, tanım-öneri-eleştiri yargılarını tanır.",
        "Cümlenin kesin yargısını bağlamdan çıkarır."
      ],
      content: `
        <h2>Cümlede Anlam</h2>
        <p><b>Ön bilgi:</b> Cümlede anlam soruları, cümlenin <b>ne söylediğini</b> ve cümleler arası <b>ilişkiyi</b> ölçer. Anahtar, bağlaç ve eklerdir.</p>
        <h3>1) Anlam ilişkileri</h3>
        <ul>
          <li><b>Neden-sonuç:</b> "-dığı için, -den dolayı". "Yağmur yağdığı için maç ertelendi."</li>
          <li><b>Amaç-sonuç:</b> "-mek için, -mek amacıyla". "Kazanmak için çalıştı."</li>
          <li><b>Koşul (şart):</b> "-se, -dıkça, -ınca". "Erken yatarsan erken kalkarsın."</li>
          <li><b>Karşılaştırma:</b> "daha, en, kadar, göre". "Kardeşi kadar çalışkan."</li>
        </ul>
        <h3>2) Yargı türleri</h3>
        <ul>
          <li><b>Öznel:</b> kişiden kişiye değişen, kanıtlanamayan görüş. "Bu, en güzel roman."</li>
          <li><b>Nesnel:</b> kanıtlanabilir, herkes için aynı. "Roman 320 sayfadır."</li>
          <li><b>Kesinlik–olasılık:</b> "kesinlikle" / "belki, -ebilir, sanırım".</li>
          <li><b>Tanım:</b> "nedir?" sorusuna yanıt verir. "Tiyatro, sahnede oynanan eserdir."</li>
          <li><b>Öneri / eleştiri:</b> yol gösterme / olumlu-olumsuz değerlendirme.</li>
        </ul>
        <h3>Çözümlü örnekler</h3>
        <p><b>(Kolay)</b> "Hava soğuduğu için kalın giyindik." → "-dığı için" → <b>neden-sonuç</b>.</p>
        <p><b>(Orta)</b> "Belki yarın gelir, kim bilir?" → "belki/kim bilir" → kesin değil, <b>olasılık</b>.</p>
        <p><b>(TYT düzeyi)</b> "Yazarın dili sade; ancak kurgusu zayıf." cümlesinde hem olumlu hem olumsuz değerlendirme vardır: <b>eleştiri</b> (öznel).</p>
        <h3>Sık yapılan hata</h3>
        <p>Amaç-sonuç ile neden-sonucu karıştırmak. İpucu: "<b>-mek için</b>" amaç, "<b>-dığı için</b>" nedendir.</p>
        <h3>Hızlı yöntem</h3>
        <p>Önce bağlacı/eki yakala (için, -se, daha…); sonra cümlenin <b>kanıtlanabilir</b> mi (nesnel) yoksa <b>görüş</b> mü (öznel) olduğuna bak.</p>
        <h3>Özet kartı</h3>
        <ul><li>-dığı için → neden; -mek için → amaç.</li><li>belki/-ebilir → olasılık.</li><li>Kanıtlanabilir = nesnel.</li></ul>`,
      commonMistakes: ["Amaç-sonuç ile neden-sonucu karıştırmak.", "Öznel cümleyi nesnel sanmak."],
      pairs: [
        { term: "Neden-sonuç", def: "“-dığı için, -den dolayı”" },
        { term: "Amaç-sonuç", def: "“-mek için, -mek amacıyla”" },
        { term: "Koşul (şart)", def: "“-se, -dıkça, -ınca”" },
        { term: "Karşılaştırma", def: "“daha, en, kadar, göre”" },
        { term: "Öznel yargı", def: "Kişiye göre değişir, kanıtlanamaz" },
        { term: "Nesnel yargı", def: "Kanıtlanabilir, herkes için aynı" },
        { term: "Olasılık", def: "“belki, -ebilir, sanırım”" },
        { term: "Tanım cümlesi", def: "“nedir?” sorusuna yanıt verir" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 2, skill: "yorum",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- SÖZCÜKTE ANLAM (10) ---- */
    Q("turkce-tr-sozcuk-101", "tr-sozcuk",
      "\"Yıllar sonra memleketine dönünce <b>taş</b> taş üstünde bulamadı.\" Bu cümledeki altı çizili sözcüğün anlamı aşağıdakilerden hangisine en yakındır?",
      ["Sertlik", "Hiçbir şeyin sağlam kalmaması", "Değerli maden", "Ağırlık", "Soğukluk"], 1,
      "“Taş taş üstünde kalmamak” yıkım/hiçbir şeyin sağlam kalmaması anlamında deyimdir.",
      { short: "Deyim: tam yıkım, hiçbir şeyin kalmaması.", steps: ["Sözcük gerçek 'taş' değil.", "Kalıp söz yıkımı anlatır."], whyOthersWrong: ["Sertlik/maden/ağırlık gerçek anlam çağrışımı.", "Soğukluk ilgisiz."] }, 2),
    Q("turkce-tr-sozcuk-102", "tr-sozcuk",
      "Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>mecaz</b> anlamda kullanılmıştır?",
      ["<b>Keskin</b> bıçakla kesti.", "<b>Keskin</b> bir dönüş yaptı.", "<b>Keskin</b> bir zekâsı vardı.", "<b>Keskin</b> sirke içti.", "<b>Keskin</b> kayalar vardı."], 2,
      "Zekâ için 'keskin' gerçeklikten kopar; mecazdır.",
      { short: "“Keskin zekâ” mecaz.", steps: ["Diğerlerinde keskin somut/gerçek.", "Zekâ soyut → mecaz."], whyOthersWrong: ["Bıçak/dönüş/sirke/kaya gerçek-yan anlam."] }, 2),
    Q("turkce-tr-sozcuk-103", "tr-sozcuk",
      "\"<b>Saçları</b> ağarınca işi bırakmaya karar verdi.\" cümlesindeki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?",
      ["Hastalanmak", "Yaşlanmak", "Üzülmek", "Yorulmak", "Zenginleşmek"], 1,
      "“Saçı ağarmak” yaşlanmayı anlatan bir söz öbeğidir.",
      { short: "Saç ağarması = yaşlanma.", steps: ["Saçın ağarması yaşla ilişkilidir.", "Cümle yaşlanınca bırakmayı anlatır."], whyOthersWrong: ["Hastalık/üzüntü/yorgunluk/zenginlik çağrışımı yok."] }, 2),
    Q("turkce-tr-sozcuk-104", "tr-sozcuk",
      "Aşağıdakilerin hangisinde bir <b>atasözü</b> vardır?",
      ["Etekleri zil çalıyor.", "İğneyle kuyu kazıyor.", "Sona kalan dona kalır.", "Ağzı kulaklarına vardı.", "Pabucu dama atıldı."], 2,
      "“Sona kalan dona kalır” öğüt veren bir atasözüdür; diğerleri deyimdir.",
      { short: "Atasözü = öğüt verir → 'Sona kalan dona kalır'.", steps: ["Atasözü genel yargı/öğüt içerir.", "Diğerleri durum anlatan deyimlerdir."], whyOthersWrong: ["Etekleri zil çalmak/iğneyle kuyu/ağzı kulaklarına/pabucu dama: deyim."] }, 2),
    Q("turkce-tr-sozcuk-105", "tr-sozcuk",
      "\"Maçtan sonra bütün <b>stat</b> ayağa kalktı.\" Bu cümlede altı çizili sözcükte görülen söz sanatı aşağıdakilerden hangisidir?",
      ["Dolaylama", "Ad aktarması", "Benzetme", "Kişileştirme", "Abartma"], 1,
      "Stat değil, içindeki seyirciler kastedilir: ad aktarması (parça-bütün).",
      { short: "Stat = seyirciler → ad aktarması.", steps: ["Mekân, içindeki insanları anlatır.", "Bu, ad aktarmasıdır."], whyOthersWrong: ["Dolaylama bir kavramı çok sözcükle anlatır.", "Benzetme/kişileştirme/abartma yok."] }, 3),
    Q("turkce-tr-sozcuk-106", "tr-sozcuk",
      "\"<b>Beyaz perde</b>nin unutulmaz oyuncusuydu.\" cümlesindeki altı çizili söz için aşağıdakilerden hangisi doğrudur?",
      ["Deyimdir", "Dolaylamadır", "İkilemedir", "Terim anlamlıdır", "Atasözüdür"], 1,
      "“Beyaz perde” = sinema; bir kavramın dolaylı anlatımı → dolaylama.",
      { short: "Beyaz perde = sinema → dolaylama.", steps: ["Tek sözcükle 'sinema' denebilirdi.", "Çok sözcükle anlatım → dolaylama."], whyOthersWrong: ["Deyim/atasözü/ikileme değil; terim de değil."] }, 3),
    Q("turkce-tr-sozcuk-107", "tr-sozcuk",
      "Aşağıdaki sözcük çiftlerinden hangisi <b>eş anlamlı</b> değildir?",
      ["kıymet – değer", "yanıt – cevap", "ak – kara", "vakit – zaman", "konuk – misafir"], 2,
      "“ak – kara” zıt anlamlıdır; diğerleri eş anlamlıdır.",
      { short: "ak-kara zıt anlamlı.", steps: ["Eş anlam: aynı anlam.", "ak ile kara karşıttır."], whyOthersWrong: ["kıymet-değer, yanıt-cevap, vakit-zaman, konuk-misafir eş anlamlı."] }, 1),
    Q("turkce-tr-sozcuk-108", "tr-sozcuk",
      "\"Çocuk <b>yüz</b>üne su çarpınca uyandı.\" ve \"Havuzda iki <b>yüz</b> kişi vardı.\" cümlelerindeki 'yüz' sözcükleri arasındaki ilişki nedir?",
      ["Eş anlam", "Zıt anlam", "Sesteş (eş sesli)", "Yan anlam", "Mecaz anlam"], 2,
      "Yazılışları aynı, anlamları farklı (surat / 100): sesteş.",
      { short: "Aynı yazılış, farklı anlam → sesteş.", steps: ["Biri 'surat', diğeri '100'.", "Yazılış aynı → sesteş."], whyOthersWrong: ["Eş/zıt/yan/mecaz anlam ilişkisi değil."] }, 1),
    Q("turkce-tr-sozcuk-109", "tr-sozcuk",
      "Aşağıdaki cümlelerin hangisinde <b>soyut</b> bir kavram somutlaştırılmıştır?",
      ["Masanın üstünde kitap var.", "Sevgisini gözlerinde gördüm.", "Bahçede iki ağaç var.", "Su bardağa döküldü.", "Araba garajda duruyor."], 1,
      "“Sevgi” soyut; görülür hâle getirilerek somutlaştırılmıştır.",
      { short: "Sevgiyi 'görmek' → soyutu somutlama.", steps: ["Sevgi beş duyuyla algılanmaz (soyut).", "'Gözlerinde görmek' somut algıya taşır."], whyOthersWrong: ["Diğerleri zaten somut nesnelerdir."] }, 3),
    Q("turkce-tr-sozcuk-110", "tr-sozcuk",
      "\"Bu konuda <b>kılı kırk yaran</b> bir araştırmacıdır.\" cümlesindeki altı çizili deyimin anlamı aşağıdakilerden hangisidir?",
      ["Çok titiz/ayrıntıcı olmak", "Çok yavaş çalışmak", "İşten kaçmak", "Tartışmacı olmak", "Cömert olmak"], 0,
      "“Kılı kırk yarmak” aşırı titiz, ince eleyip sık dokuyan demektir.",
      { short: "Kılı kırk yarmak = aşırı titizlik.", steps: ["Deyim ayrıntıya önem vermeyi anlatır."], whyOthersWrong: ["Yavaşlık/kaçma/tartışma/cömertlik anlamı yok."] }, 1),

    /* ---- CÜMLEDE ANLAM (10) ---- */
    Q("turkce-tr-cumle-101", "tr-cumle",
      "Aşağıdaki cümlelerin hangisinde <b>amaç-sonuç</b> ilişkisi vardır?",
      ["Yağmur yağdığı için ıslandık.", "Sınavı kazanmak için gece gündüz çalıştı.", "Çalıştıkça başarılı oldu.", "Kardeşi kadar uzun.", "Hem güler hem ağlar."], 1,
      "“Kazanmak için” eylemin amacını bildirir → amaç-sonuç.",
      { short: "“-mek için” → amaç-sonuç.", steps: ["'için' amaç bildirir.", "Çalışmanın amacı kazanmak."], whyOthersWrong: ["'-dığı için' neden.", "'-dıkça' koşul.", "'kadar' karşılaştırma."] }, 2),
    Q("turkce-tr-cumle-102", "tr-cumle",
      "\"Bu film, izlediğim en etkileyici yapımdı.\" cümlesi için aşağıdakilerden hangisi söylenebilir?",
      ["Nesnel bir yargıdır", "Öznel bir yargıdır", "Tanım cümlesidir", "Koşul bildirir", "Neden-sonuç bildirir"], 1,
      "“En etkileyici” kişiden kişiye değişir; kanıtlanamaz → öznel.",
      { short: "Kanıtlanamayan beğeni → öznel.", steps: ["'Etkileyici' kişisel değerlendirmedir.", "Kanıtlanamaz → öznel."], whyOthersWrong: ["Nesnel olsa ölçülebilirdi.", "Tanım/koşul/neden yok."] }, 2),
    Q("turkce-tr-cumle-103", "tr-cumle",
      "Aşağıdaki cümlelerin hangisinde <b>kesinlik</b> anlamı vardır?",
      ["Belki yarın gelir.", "Sanırım haklısın.", "Bu iş kesinlikle bugün biter.", "Yağmur yağabilir.", "Gelmiş olmalı."], 2,
      "“Kesinlikle” tartışmasız yargı bildirir.",
      { short: "'kesinlikle' → kesinlik.", steps: ["Diğer seçenekler olasılık/tahmin.", "'kesinlikle' kesin yargı."], whyOthersWrong: ["belki/sanırım/-abilir/-malı olasılık-tahmin."] }, 1),
    Q("turkce-tr-cumle-104", "tr-cumle",
      "\"Tiyatro, bir öykünün sahnede canlandırılmasıdır.\" cümlesi anlamca aşağıdakilerden hangisidir?",
      ["Öneri", "Eleştiri", "Tanım", "Varsayım", "Karşılaştırma"], 2,
      "Cümle “tiyatro nedir?” sorusuna yanıt verir → tanım.",
      { short: "“nedir?” yanıtı → tanım.", steps: ["Bir kavramın ne olduğu açıklanıyor.", "Bu bir tanım cümlesidir."], whyOthersWrong: ["Öneri/eleştiri/varsayım/karşılaştırma yok."] }, 1),
    Q("turkce-tr-cumle-105", "tr-cumle",
      "\"Daha çok kitap okusan kelime hazinen gelişir.\" cümlesinde hangi anlam ilişkisi vardır?",
      ["Koşul (şart)", "Amaç-sonuç", "Karşılaştırma", "Neden-sonuç", "Tanım"], 0,
      "“okusan” (-se) koşul bildirir; sonucu kelime hazinesinin gelişmesi.",
      { short: "“-sa/-se” → koşul.", steps: ["'okusan' şart kipi.", "Şarta bağlı sonuç → koşul."], whyOthersWrong: ["Amaç/karşılaştırma/neden/tanım değil."] }, 2),
    Q("turkce-tr-cumle-106", "tr-cumle",
      "Aşağıdaki cümlelerin hangisi <b>nesnel</b> bir yargı bildirir?",
      ["Romanın dili çok akıcı.", "Roman 416 sayfadan oluşuyor.", "Bu, yılın en iyi romanı.", "Kahramanı çok sevimli.", "Sonu biraz zayıf kalmış."], 1,
      "Sayfa sayısı ölçülebilir/kanıtlanabilir → nesnel.",
      { short: "Kanıtlanabilir veri → nesnel.", steps: ["'416 sayfa' herkes için aynı, ölçülebilir."], whyOthersWrong: ["akıcı/en iyi/sevimli/zayıf öznel değerlendirme."] }, 2),
    Q("turkce-tr-cumle-107", "tr-cumle",
      "\"Çalışmadan başardı; ancak bu, herkes için geçerli bir yol değildir.\" cümlesinde aşağıdakilerden hangisi vardır?",
      ["Yalnızca neden-sonuç", "Beklenmezlik ve değerlendirme", "Yalnızca tanım", "Koşul", "Yalnızca karşılaştırma"], 1,
      "İlk bölüm beklenmedik durumu, 'ancak' sonrası değerlendirmeyi verir.",
      { short: "Beklenmezlik + değerlendirme.", steps: ["'Çalışmadan başardı' beklenmedik.", "'ancak…değil' değerlendirme/uyarı."], whyOthersWrong: ["Tek başına neden/tanım/koşul/karşılaştırma değil."] }, 3),
    Q("turkce-tr-cumle-108", "tr-cumle",
      "Aşağıdaki cümlelerin hangisinde <b>öneri</b> anlamı vardır?",
      ["Bu kitabı mutlaka okumalısın.", "Bu kitap 2010'da basıldı.", "Kitabı çok sıkıcı buldum.", "Kitap raftan düştü.", "Yazar geçen yıl öldü."], 0,
      "“-malısın” yol gösterme/öneri bildirir.",
      { short: "'okumalısın' → öneri.", steps: ["Öneri, yol gösterir.", "'mutlaka okumalısın' tavsiye."], whyOthersWrong: ["Diğerleri bilgi/öznel yargı."] }, 1),
    Q("turkce-tr-cumle-109", "tr-cumle",
      "\"Sen gelmeden başlamayız.\" cümlesinden kesin olarak çıkarılabilecek yargı aşağıdakilerden hangisidir?",
      ["Sen gelsen de gelmesen de başlarız.", "Başlamamız senin gelmene bağlıdır.", "Sen hiç gelmeyeceksin.", "Biz çoktan başladık.", "Sen geç kaldın."], 1,
      "Cümle, başlamanın senin gelmene bağlı olduğunu kesinler.",
      { short: "Başlama = sen gelince.", steps: ["'gelmeden başlamayız' koşulu verir.", "Başlamak gelmene bağlı."], whyOthersWrong: ["Diğerleri cümleden çıkmaz/çelişir."] }, 2),
    Q("turkce-tr-cumle-110", "tr-cumle",
      "\"Yazarın anlatımı sade olduğu kadar etkileyicidir de.\" cümlesinde aşağıdaki anlam ilişkilerinden hangisi vardır?",
      ["Karşılaştırma", "Neden-sonuç", "Koşul", "İki olumlu özelliğin birlikteliği", "Olasılık"], 3,
      "“sade olduğu kadar etkileyici de” iki olumlu niteliği birlikte verir.",
      { short: "İki olumlu özellik bir arada.", steps: ["'sade' ve 'etkileyici' birlikte olumlu.", "'kadar…de' ekleme/birliktelik."], whyOthersWrong: ["Karşılaştırma üstünlük arar; neden/koşul/olasılık yok."] }, 3)
  ]);
})();
