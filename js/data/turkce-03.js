/* ============================================================
   TÜRKÇE — Premium İçerik Batch 3 (Yazım Kuralları, Noktalama)
   Yazım+Noktalama iki ayrı üniteye ayrılır. Tümü ÖZGÜN.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-03: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("turkce", [
    {
      id: "tr-yazim", name: "Yazım Kuralları", branch: null,
      summary: "de/da, ki, mi yazımı; büyük harf; sayı ve kısaltma; pekiştirme; düzeltme işareti.",
      curriculumRefs: ["2026-YKS Türkçe: Yazım kuralları"],
      prerequisites: [], estimatedMinutes: 20, difficulty: 2,
      objectives: [
        "Bağlaç olan de/da/ki/mi ile ekleri ayırır.",
        "Büyük harf, sayı ve kısaltma yazımını uygular.",
        "Pekiştirme ve düzeltme işareti kurallarını tanır."
      ],
      content: `
        <h2>Yazım Kuralları</h2>
        <h3>1) Ayrı yazılan bağlaçlar</h3>
        <ul>
          <li><b>Bağlaç "de/da":</b> "ve, dahi" anlamı verir, <b>ayrı</b> yazılır ("Sen <u>de</u> gel"). Hâl eki "-de/-da" <b>bitişik</b>tir ("ev<u>de</u>").</li>
          <li><b>Bağlaç "ki":</b> ayrı yazılır ("Biliyorum <u>ki</u>…"). İlgi/sıfat eki "-ki" bitişiktir ("yarın<u>ki</u>", "seninki").</li>
          <li><b>Soru eki "mi":</b> her zaman <b>ayrı</b> yazılır, kendinden önceki sözcüğe ses uyumu sağlar ("Geldin <u>mi</u>?").</li>
        </ul>
        <h3>2) Büyük harf</h3>
        <p>Cümle başı ve <b>özel adlar</b> büyük yazılır: kişi, yer, kurum, unvan ("Ahmet Bey", "Ankara"). Özel ada gelen ek <b>kesme</b> ile ayrılır ("Ankara'da").</p>
        <h3>3) Sayılar ve kısaltmalar</h3>
        <ul>
          <li>Sayılara gelen ekler kesme ile: "5'te", "1923'te".</li>
          <li>Kısaltmalara gelen ekler okunuşa göre: "TBMM'nin", "km'yi".</li>
        </ul>
        <h3>4) Pekiştirme ve düzeltme işareti</h3>
        <ul>
          <li><b>Pekiştirme</b> sıfatları bitişik: "mas<b>mavi</b>", "sap<b>sarı</b>".</li>
          <li><b>Düzeltme (^):</b> hem uzunluk hem ince okunuş için: "kâğıt", "rüzgâr", "hâlâ".</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>"Oda gelecek" yanlıştır; "ve" anlamı verdiği için <b>bağlaç</b>tır: doğrusu "<b>O da</b> gelecek". (Bitişik "oda" = room.)</p>
        <h3>Sık yapılan hata</h3>
        <p>"herkes"i "herkez", "yanlış"ı "yalnış" yazmak; bağlaç "de"yi bitişik yazmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>"ve" anlamı → ayrı (de/da, ki).</li><li>"mi" her zaman ayrı.</li><li>Özel ad eki → kesme.</li></ul>`,
      commonMistakes: ["Bağlaç de/da'yı bitişik yazmak.", "Özel ad ekinde kesmeyi unutmak."],
      pairs: [
        { term: "Bağlaç de/da", def: "Ayrı yazılır (Sen de gel)" },
        { term: "Hâl eki -de/-da", def: "Bitişik yazılır (evde)" },
        { term: "Bağlaç ki", def: "Ayrı yazılır (Biliyorum ki)" },
        { term: "Soru eki mi", def: "Her zaman ayrı yazılır" },
        { term: "Özel ad eki", def: "Kesme ile ayrılır (Ankara'da)" },
        { term: "Pekiştirme", def: "Bitişik (masmavi)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-noktalama", name: "Noktalama İşaretleri", branch: null,
      summary: "Nokta, virgül, noktalı virgül, iki nokta, üç nokta, soru, ünlem, tırnak, kesme.",
      curriculumRefs: ["2026-YKS Türkçe: Noktalama işaretleri"],
      prerequisites: ["tr-yazim"], estimatedMinutes: 18, difficulty: 2,
      objectives: [
        "Temel noktalama işaretlerinin işlevini ayırır.",
        "Virgül ve noktalı virgülün kullanım yerlerini uygular.",
        "Kesme ve tırnak işaretini doğru kullanır."
      ],
      content: `
        <h2>Noktalama İşaretleri</h2>
        <ul>
          <li><b>Nokta (.):</b> cümle sonu; kısaltma ve sıra sayısı ("Dr.", "5.").</li>
          <li><b>Virgül (,):</b> eş görevli sözcük/öğeleri ayırır; sıralı cümleleri bağlar; ara sözü ayırır.</li>
          <li><b>Noktalı virgül (;):</b> virgülle ayrılmış öğe gruplarını ayırır; "ama, fakat, çünkü" gibi bağlaçlardan önce gelebilir.</li>
          <li><b>İki nokta (:):</b> açıklama, örnek veya alıntı öncesi.</li>
          <li><b>Üç nokta (…):</b> söz tamamlanmamış ya da atlanmış.</li>
          <li><b>Soru işareti (?):</b> soru bildiren cümle/söz sonunda.</li>
          <li><b>Ünlem (!):</b> seslenme, heyecan, uyarı.</li>
          <li><b>Tırnak (" "):</b> aktarılan söz, özel vurgu, eser adı.</li>
          <li><b>Kesme ('):</b> özel ada gelen çekim ekini ayırır ("İstanbul'a").</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>"Ali, Veli ve Ayşe geldi." → eş görevli özneleri ayırmak için <b>virgül</b> kullanılır (son ögeden önce "ve" varsa virgül konmaz).</p>
        <h3>Önemli ayrım — virgül mü, noktalı virgül mü?</h3>
        <p>Öğeler kendi içinde virgül taşıyorsa, gruplar arasına <b>noktalı virgül</b> konur: "Ankara, İzmir, Bursa; kuzeyde Sinop, Samsun gezildi."</p>
        <h3>Sık yapılan hata</h3>
        <p>Özne ile yüklem arasına gereksiz virgül koymak; soru eki olmayan dolaylı soruda (–dolaylı anlatım–) soru işareti kullanmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Eş görevli → virgül.</li><li>Virgüllü gruplar arası → noktalı virgül.</li><li>Açıklama/örnek öncesi → iki nokta.</li></ul>`,
      commonMistakes: ["Özne-yüklem arasına virgül koymak.", "Virgül yerine noktalı virgül (veya tersi) kullanmak."],
      pairs: [
        { term: "Virgül (,)", def: "Eş görevli öğeleri ayırır" },
        { term: "Noktalı virgül (;)", def: "Virgüllü grupları ayırır" },
        { term: "İki nokta (:)", def: "Açıklama/örnek öncesi" },
        { term: "Üç nokta (…)", def: "Söz tamamlanmamış/atlanmış" },
        { term: "Kesme (')", def: "Özel ada gelen eki ayırır" },
        { term: "Tırnak (\" \")", def: "Aktarılan söz, eser adı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 2, skill: "kural-uygulama",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- YAZIM KURALLARI (10) ---- */
    Q("turkce-tr-yazim-101", "tr-yazim",
      "Aşağıdaki cümlelerin hangisinde \"de/da\"nın yazımı <b>yanlıştır</b>?",
      ["Sen de bizimle gel.", "Ali de geldi.", "Kitap da masada.", "Oda gelecekmiş.", "Ben de gördüm."], 3,
      "“ve” anlamı taşıdığı için bağlaçtır: doğrusu “O da gelecekmiş.”",
      { short: "“O da gelecekmiş” olmalı (bağlaç ayrı).", steps: ["'da' burada 've/dahi' anlamı verir → bağlaç.", "Bağlaç ayrı yazılır: O da."], whyOthersWrong: ["Diğerlerinde de/da bağlacı doğru ayrı yazılmış."] }, 2),
    Q("turkce-tr-yazim-102", "tr-yazim",
      "Aşağıdaki cümlelerin hangisinde \"ki\"nin yazımı <b>doğrudur</b>?",
      ["Duydumki gelmişsin.", "Evde ki kitap senin mi?", "Yarınki maç ertelendi.", "Senin ki nerede?", "Bana öyle geldiki."], 2,
      "“yarınki” ilgi eki -ki bitişik yazılır; doğru olan budur.",
      { short: "“yarınki” doğru (ek -ki bitişik).", steps: ["İlgi/sıfat eki -ki bitişiktir (yarınki, seninki).", "Bağlaç ki ayrıdır (Duydum ki)."], whyOthersWrong: ["'Duydumki'→'Duydum ki'; 'Evde ki'→'Evdeki'; 'Senin ki'→'Seninki'; 'geldiki'→'geldi ki'."] }, 3),
    Q("turkce-tr-yazim-103", "tr-yazim",
      "\"Bu soruyu sen ___ çözebildin ___\" Cümledeki boşluklara sırasıyla aşağıdakilerden hangisi gelmelidir?",
      ["de / mi", "mi / de", "mı / de", "mi / mi", "de / de"], 0,
      "“sen de” (bağlaç, ayrı) ve soru “çözebildin mi?” (ayrı) doğru biçimdir.",
      { short: "sen de … çözebildin mi?", steps: ["İlk boşluk 'dahi' anlamı → bağlaç 'de'.", "İkinci boşluk soru → 'mi'."], whyOthersWrong: ["Diğer sıralamalar anlam/kural bozar."] }, 2),
    Q("turkce-tr-yazim-104", "tr-yazim",
      "Aşağıdaki sözcüklerden hangisinin yazımı <b>doğrudur</b>?",
      ["yalnış", "herkez", "yanlız", "kâğıt", "süpriz"], 3,
      "Doğru yazım “kâğıt”tır (düzeltme işaretiyle).",
      { short: "Doğru: kâğıt.", steps: ["Yaygın yanlışlar: yalnış, herkez, yanlız, süpriz.", "Doğru biçim 'kâğıt'."], whyOthersWrong: ["yalnış→yanlış; herkez→herkes; yanlız→yalnız; süpriz→sürpriz."] }, 1),
    Q("turkce-tr-yazim-105", "tr-yazim",
      "Aşağıdaki cümlelerin hangisinde büyük harf/kesme yazımı <b>yanlıştır</b>?",
      ["Ankara'da yağmur var.", "Atatürk 1881'de doğdu.", "ahmet bey bizi aradı.", "Türkçe dersi zor değil.", "Cuma günü geleceğim."], 2,
      "Özel ad ve unvan büyük yazılır: “Ahmet Bey bizi aradı.”",
      { short: "“Ahmet Bey” büyük yazılmalı.", steps: ["Kişi adı ve unvan özel addır.", "Büyük harfle: Ahmet Bey."], whyOthersWrong: ["Diğerlerinde büyük harf/kesme doğru."] }, 2),
    Q("turkce-tr-yazim-106", "tr-yazim",
      "Aşağıdakilerin hangisinde \"-ki\" eki <b>ilgi eki</b> (bitişik) olarak kullanılmıştır?",
      ["Sanırım ki gelir.", "Öyle yorgunum ki!", "Masadaki kalem kimin?", "Biliyorum ki haklısın.", "Duydum ki taşınmışsın."], 2,
      "“masadaki” → -ki ilgi ekidir, bitişik yazılır.",
      { short: "“masadaki” ilgi eki.", steps: ["Bir ismi niteleyip yerini bildiren -ki ektir.", "masadaki: bitişik."], whyOthersWrong: ["Diğerleri 'ki' bağlacıdır (ayrı)."] }, 2),
    Q("turkce-tr-yazim-107", "tr-yazim",
      "Aşağıdaki sözcüklerden hangisi <b>pekiştirme</b> kuralına göre doğru yazılmıştır?",
      ["mas mavi", "sım sıcak", "yemyeşil", "kıp kırmızı", "düm düz"], 2,
      "Pekiştirme sıfatları bitişik yazılır: “yemyeşil”.",
      { short: "Pekiştirme bitişik: yemyeşil.", steps: ["Pekiştirme öğesi sözcükle bitişik yazılır."], whyOthersWrong: ["Doğruları: masmavi, sımsıcak, kıpkırmızı, dümdüz (hepsi bitişik)."] }, 1),
    Q("turkce-tr-yazim-108", "tr-yazim",
      "\"1919 ___ Samsun ___ çıktı.\" Boşluklara getirilecek eklerin yazımı için doğru olan hangisidir?",
      ["da / a", "'da / 'a", "de / e", "'de / a", "da / 'a"], 1,
      "Sayıya ve özel ada gelen ekler kesme ile: “1919'da Samsun'a”.",
      { short: "1919'da Samsun'a (kesmeli).", steps: ["Sayı ve özel ad ekleri kesme ile ayrılır."], whyOthersWrong: ["Kesmesiz veya ünlü uyumu hatalı seçenekler yanlış."] }, 2),
    Q("turkce-tr-yazim-109", "tr-yazim",
      "Aşağıdaki cümlelerin hangisinde soru eki \"mi\"nin yazımı <b>yanlıştır</b>?",
      ["Yarın gelecek misin?", "Bunu sen mi yaptın?", "Hava güzel mi?", "Gelirmi acaba?", "Doğru mu söylüyorsun?"], 3,
      "Soru eki “mi” ayrı yazılır: doğrusu “Gelir mi acaba?”",
      { short: "“Gelir mi” ayrı olmalı.", steps: ["'mi' soru eki her zaman ayrı yazılır."], whyOthersWrong: ["Diğerlerinde 'mi' doğru biçimde ayrı."] }, 1),
    Q("turkce-tr-yazim-110", "tr-yazim",
      "Aşağıdaki cümlelerin hangisinde bir yazım yanlışı <b>yoktur</b>?",
      ["Sınava iyi çalış malısın.", "Bu kitabı oku duktan sonra ver.", "Lütfen burada bekleyiniz.", "Yarın ki toplantı iptal.", "Herkez bunu biliyor."], 2,
      "“Lütfen burada bekleyiniz.” cümlesinde yazım yanlışı yoktur.",
      { short: "Doğru cümle: 'Lütfen burada bekleyiniz.'", steps: ["Diğerlerinde bitişik/ayrı veya kelime yanlışı var."], whyOthersWrong: ["çalışmalısın; okuduktan; yarınki; herkes."] }, 2),

    /* ---- NOKTALAMA (10) ---- */
    Q("turkce-tr-noktalama-101", "tr-noktalama",
      "\"Defterini kalemini ve kitabını çantasına koydu.\" cümlesinde eksik olan noktalama işareti ve yeri için doğru olan hangisidir?",
      ["Defterini'den sonra iki nokta", "Defterini ve kalemini arasına virgül", "Cümle sonuna ünlem", "kitabını'dan sonra noktalı virgül", "Hiçbiri gerekmez"], 1,
      "Eş görevli sözcükler virgülle ayrılır: “Defterini, kalemini ve kitabını…”.",
      { short: "Eş görevli sözler arasına virgül.", steps: ["'Defterini' ve 'kalemini' eş görevli nesnelerdir.", "Aralarına virgül gelir."], whyOthersWrong: ["İki nokta/ünlem/noktalı virgül burada uygun değil."] }, 2),
    Q("turkce-tr-noktalama-102", "tr-noktalama",
      "Aşağıdaki cümlelerin hangisinde <b>iki nokta (:)</b> doğru kullanılmıştır?",
      ["Geldi: gördü ve yendi.", "Şunları aldım: defter, kalem, silgi.", "Eve gittim: ve uyudum.", "Ali: okula gitti.", "Yağmur yağdı: ama çıktık."], 1,
      "İki nokta, açıklama/örnek (sıralama) öncesinde kullanılır.",
      { short: "Örnekleme öncesi iki nokta doğru.", steps: ["'Şunları aldım:' sonrası örnekler sıralanır.", "İki nokta burada doğrudur."], whyOthersWrong: ["Diğerlerinde iki nokta yersizdir."] }, 2),
    Q("turkce-tr-noktalama-103", "tr-noktalama",
      "\"Trabzon Rize Artvin yağmurlu Konya Aksaray Niğde ise kurak geçti.\" Bu cümlede grupları ayırmak için en uygun işaret hangisidir?",
      ["Yalnız virgül", "Noktalı virgül (gruplar arası)", "İki nokta", "Üç nokta", "Tırnak"], 1,
      "Kendi içinde virgülle ayrılan iki grup, aralarında noktalı virgülle ayrılır.",
      { short: "Virgüllü gruplar → noktalı virgül.", steps: ["İki şehir grubu virgül taşıyor.", "Gruplar arasına noktalı virgül konur."], whyOthersWrong: ["Tek virgül grupları karıştırır; diğerleri uygun değil."] }, 3),
    Q("turkce-tr-noktalama-104", "tr-noktalama",
      "Aşağıdaki cümlelerin hangisinde <b>kesme işareti</b> doğru kullanılmıştır?",
      ["Kalem'i masaya koy.", "Ankara'nın havası soğuk.", "Ev'e geldim.", "Kitap'ı okudum.", "Çiçek'ler açtı."], 1,
      "Kesme yalnızca özel ada gelen çekim ekini ayırır: “Ankara'nın”.",
      { short: "Özel ad eki → kesme: Ankara'nın.", steps: ["Kesme özel adlara gelen ekte kullanılır.", "Tür adlarına (kalem, ev, kitap) gelmez."], whyOthersWrong: ["kalem/ev/kitap/çiçek tür adıdır, kesme almaz."] }, 2),
    Q("turkce-tr-noktalama-105", "tr-noktalama",
      "\"Sözünü bitirmeden durdu, sanki bir şey hatırlamış gibi___\" Bu cümlenin sonuna anlamca en uygun işaret hangisidir?",
      ["Nokta", "Üç nokta", "Ünlem", "Soru işareti", "İki nokta"], 1,
      "Söz tamamlanmamış/sürdürülmemiş izlenimi için üç nokta uygundur.",
      { short: "Yarım kalmış söz → üç nokta.", steps: ["'bitirmeden durdu' söz askıda kalmış.", "Üç nokta bu duraksamayı verir."], whyOthersWrong: ["Nokta tam bitiş; ünlem/soru/iki nokta anlamı uymaz."] }, 2),
    Q("turkce-tr-noktalama-106", "tr-noktalama",
      "Aşağıdaki cümlelerin hangisinde gereksiz/yanlış virgül kullanılmıştır?",
      ["Yorgun olduğu için, erken yattı.", "Ali, kapıyı açtı ve, içeri girdi.", "Defter, kalem ve silgi aldım.", "Akşam olunca, eve döndük.", "Evet, geliyorum."], 1,
      "“ve” bağlacından sonra virgül konmaz: “…açtı ve içeri girdi.”",
      { short: "'ve'den sonra virgül olmaz.", steps: ["'ve' zaten bağlar; ardına virgül gereksiz."], whyOthersWrong: ["Diğer virgüller (ara/eş görevli/seslenme) kabul edilebilir."] }, 3),
    Q("turkce-tr-noktalama-107", "tr-noktalama",
      "\"Öğretmen ___ Yarın sınav var ___ dedi.\" Boşluklara sırasıyla en uygun işaretler hangisidir?",
      ["virgül / nokta", "iki nokta / tırnak kapama", "tırnak / virgül", "iki nokta ve tırnak / tırnak kapama ve virgül", "noktalı virgül / nokta"], 3,
      "Aktarılan söz iki nokta + tırnakla verilir; sonra tırnak kapanır ve virgülle 'dedi'ye bağlanır.",
      { short: "Öğretmen: “Yarın sınav var,” dedi.", steps: ["Aktarma öncesi iki nokta ve tırnak açılır.", "Söz bitince tırnak kapanır, virgülle 'dedi'."], whyOthersWrong: ["Diğer sıralamalar aktarma kuralına uymaz."] }, 3),
    Q("turkce-tr-noktalama-108", "tr-noktalama",
      "Aşağıdaki cümlelerin hangisinin sonuna <b>soru işareti</b> gelmez?",
      ["Bunu kim yaptı", "Nereye gidiyorsun", "Gelip gelmeyeceğini bilmiyorum", "Saat kaçta buluşuyoruz", "Sınav ne zaman"], 2,
      "Dolaylı anlatımda gerçek soru yoktur: “…bilmiyorum.” cümlesi soru değildir.",
      { short: "Dolaylı soru → soru işareti yok.", steps: ["'bilmiyorum' ile biten cümle yargı bildirir.", "Soru anlamı taşımaz."], whyOthersWrong: ["Diğerleri doğrudan sorudur."] }, 2),
    Q("turkce-tr-noktalama-109", "tr-noktalama",
      "\"Ne güzel bir gün ___\" Bu cümlenin sonuna anlamca en uygun işaret hangisidir?",
      ["Nokta", "Soru işareti", "Ünlem", "Üç nokta", "Virgül"], 2,
      "Hayranlık/heyecan bildirdiği için ünlem uygundur.",
      { short: "Heyecan/hayranlık → ünlem.", steps: ["'Ne güzel bir gün' coşku bildirir.", "Ünlem uygundur."], whyOthersWrong: ["Nokta düz; soru/üç nokta/virgül anlamı uymaz."] }, 1),
    Q("turkce-tr-noktalama-110", "tr-noktalama",
      "Aşağıdaki cümlelerin hangisinde noktalama doğru kullanılmıştır?",
      ["Ali, geldi.", "Bugün, hava çok güzel.", "Yağmur yağınca, içeri girdik.", "Kitabı, masaya koydu.", "Ben, seni bekledim."], 2,
      "Yan cümleden sonra (zarf tümleci) virgül uygundur; diğerlerinde özne-yüklem arası gereksiz virgül var.",
      { short: "'Yağmur yağınca,' uygun virgül.", steps: ["Zaman/koşul belirten yan cümleden sonra virgül olabilir.", "Diğerlerinde özne ile yüklem arasına yersiz virgül konmuş."], whyOthersWrong: ["Ali/Bugün/Kitabı/Ben'den sonraki virgüller gereksiz."] }, 3)
  ]);
})();
