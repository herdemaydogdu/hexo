/* ============================================================
   TÜRKÇE — Anlatım Bozuklukları + Cümlenin Ögeleri (ÖSYM/TYT seviyesi)
   Tümü SIFIRDAN ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-07: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("turkce", [
    {
      id: "tr-bozukluk", name: "Anlatım Bozuklukları", branch: null,
      summary: "Gereksiz sözcük, çelişen sözcük, özne-yüklem uyumu, tümleç eksikliği, mantık ve sözcük yanlışları.",
      curriculumRefs: ["2026-YKS Türkçe: Anlatım bozukluğu"],
      prerequisites: ["tr-ogeler"], estimatedMinutes: 22, difficulty: 3,
      objectives: [
        "Anlamsal anlatım bozukluklarını (gereksiz/çelişen/yanlış sözcük) bulur.",
        "Yapısal bozuklukları (özne-yüklem uyumsuzluğu, tümleç/ek eksikliği) ayırır.",
        "Bir cümledeki bozukluğun türünü açıklar."
      ],
      content: `
        <h2>Anlatım Bozuklukları</h2>
        <h3>1) Anlamsal bozukluklar</h3>
        <ul>
          <li><b>Gereksiz sözcük:</b> aynı anlamı tekrar (“yaklaşık 5 yıl <u>kadar</u>”, “<u>küçük</u> bir ayrıntı”).</li>
          <li><b>Çelişen sözcükler:</b> “<u>kesinlikle</u> <u>belki</u> gelir”.</li>
          <li><b>Yanlış/uygunsuz sözcük:</b> “azımsanmayacak” yerine yanlış kullanım.</li>
          <li><b>Mantık hatası:</b> “Hızlı koştuğu için geç kaldı.”</li>
        </ul>
        <h3>2) Yapısal bozukluklar</h3>
        <ul>
          <li><b>Özne-yüklem uyumsuzluğu:</b> Hayvan/cansız çoğul öznede yüklem tekil olur: “Kuşlar uçtu” (uçtular ✗).</li>
          <li><b>Tümleç/nesne eksikliği:</b> “Onu hem sevdi hem nefret etti.” → “ondan nefret etti” gerekir.</li>
          <li><b>Ek eksikliği/fazlalığı, tamlama yanlışı.</b></li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>“Bu olayı <u>gözümle gördüm</u>.” → “görmek” zaten gözle olur; <b>gereksiz sözcük</b> bozukluğu.</p>
        <h3>Hızlı yöntem</h3>
        <p>Önce gereksiz/eş anlamlı tekrarları ara; sonra yüklemin özneyle (tekil-çoğul) ve tümleçlerin (-i, -e, -den) eksik olup olmadığını dene.</p>
        <h3>Özet kartı</h3>
        <ul><li>Eş anlam tekrarı → gereksiz sözcük.</li><li>Cansız/hayvan çoğul özne → tekil yüklem.</li><li>İki farklı tümleç isteyen yüklemde ortak tümleç → eksiklik.</li></ul>`,
      commonMistakes: ["Gereksiz sözcüğü fark etmemek.", "Ortak tümleç kullanımındaki eksikliği atlamak."],
      pairs: [
        { term: "Gereksiz sözcük", def: "Aynı anlamın tekrarı (yaklaşık ~ kadar)" },
        { term: "Özne-yüklem uyumsuzluğu", def: "Çoğul cansız özne → tekil yüklem olmalı" },
        { term: "Tümleç eksikliği", def: "Farklı tümleç isteyen yüklemlere ortak tümleç" },
        { term: "Çelişen sözcük", def: "Kesinlikle ↔ belki gibi" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-ogeler", name: "Cümlenin Ögeleri", branch: null,
      summary: "Yüklem, özne, belirtili/belirtisiz nesne, dolaylı tümleç, zarf tümleci, edat tümleci.",
      curriculumRefs: ["2026-YKS Türkçe: Cümlenin ögeleri"],
      prerequisites: ["tr-adlar"], estimatedMinutes: 20, difficulty: 3,
      objectives: [
        "Cümlenin temel ögelerini (yüklem, özne) bulur.",
        "Nesne (belirtili/belirtisiz), dolaylı tümleç ve zarf tümlecini ayırır.",
        "Bir sözcük öbeğinin cümledeki görevini belirler."
      ],
      content: `
        <h2>Cümlenin Ögeleri</h2>
        <ul>
          <li><b>Yüklem:</b> cümlenin temel ögesi; iş/oluş/yargı bildirir. Önce o bulunur.</li>
          <li><b>Özne:</b> işi yapan/olan. Yükleme “kim/ne” sorulur.</li>
          <li><b>Belirtili nesne:</b> “-i” hâli (neyi/kimi). <b>Belirtisiz nesne:</b> yalın (ne).</li>
          <li><b>Dolaylı tümleç:</b> “-e, -de, -den” (nereye/nerede/nereden, kime).</li>
          <li><b>Zarf tümleci:</b> nasıl/ne zaman/niçin/ne kadar.</li>
          <li><b>Edat tümleci:</b> “ile, için, gibi” öbekleri.</li>
        </ul>
        <div class="formula">Yöntem: Önce <b>yüklemi</b> bul; sonra yükleme “kim/ne?” (özne), “neyi/kimi?” (belirtili nesne), “nereye/nerede/nereden/kime?” (dolaylı tümleç), “nasıl/ne zaman?” (zarf tümleci) diye sor.</div>
        <h3>Çözümlü örnek</h3>
        <p>“Ali, mektubu dün postaya verdi.” → <b>verdi</b> (yüklem), <b>Ali</b> (özne), <b>mektubu</b> (belirtili nesne), <b>dün</b> (zarf tümleci), <b>postaya</b> (dolaylı tümleç).</p>
        <h3>Sık yapılan hata</h3>
        <p>Belirtili nesne (-i) ile dolaylı tümleci (-e/-de/-den) karıştırmak. “Evi gördüm” (nesne) ≠ “Eve gittim” (dolaylı tümleç).</p>
        <h3>Özet kartı</h3>
        <ul><li>“neyi/kimi?” → belirtili nesne.</li><li>“nereye/nerede/nereden/kime?” → dolaylı tümleç.</li><li>“nasıl/ne zaman?” → zarf tümleci.</li></ul>`,
      commonMistakes: ["Belirtili nesne ile dolaylı tümleci karıştırmak.", "Gizli özneyi gözden kaçırmak."],
      pairs: [
        { term: "Yüklem", def: "Cümlenin temel ögesi (yargı bildirir)" },
        { term: "Belirtili nesne", def: "“-i” hâli (neyi/kimi)" },
        { term: "Dolaylı tümleç", def: "“-e/-de/-den” (nereye/nerede/nereden)" },
        { term: "Zarf tümleci", def: "nasıl/ne zaman/niçin" },
        { term: "Özne", def: "İşi yapan/olan (kim/ne)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 3, skill: "dil-bilgisi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- ANLATIM BOZUKLUKLARI (10) ---- */
    Q("turkce-tr-bozukluk-101", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>gereksiz sözcük kullanımından</b> kaynaklanan bir anlatım bozukluğu vardır?",
      ["Toplantı yaklaşık iki saat kadar sürdü.", "Yarın sabah erkenden yola çıkacağız.", "Bu konuyu daha sonra konuşalım.", "Öğrenciler sınava iyi hazırlandı.", "Akşam eve geç döndük."], 0,
      "“yaklaşık” ve “kadar” aynı anlamı taşır; biri gereksizdir.",
      { short: "yaklaşık + kadar gereksiz tekrar.", steps: ["İkisi de 'tahmini' anlamı verir.", "Biri çıkarılmalı → gereksiz sözcük."], whyOthersWrong: ["Diğer cümlelerde anlamca tekrar yok."] }, 2),
    Q("turkce-tr-bozukluk-102", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>özne-yüklem uyumsuzluğu</b> vardır?",
      ["Çocuklar bahçede oynuyor.", "Ağaçtaki kuşlar birden havalandılar.", "Misafirler salonda bekliyor.", "Öğretmenler toplantıya katıldı.", "İşçiler molaya çıktı."], 1,
      "Hayvan (cansız sayılan) çoğul öznede yüklem tekil olmalı: “kuşlar havalandı”.",
      { short: "Hayvan çoğul özne → yüklem tekil.", steps: ["'kuşlar' insan değil; yüklem tekil olur.", "'havalandılar' yanlış → 'havalandı'."], whyOthersWrong: ["İnsan öznelerde tekil yüklem zaten uygun."] }, 3),
    Q("turkce-tr-bozukluk-103", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>çelişen sözcüklerin</b> bir arada kullanılması bozukluğa yol açmıştır?",
      ["Sınavı kesinlikle kazanacağım.", "Belki yarın uğrarım.", "Bu işi mutlaka belki bitiririm.", "Eminim ki haklısın.", "Galiba yağmur yağacak."], 2,
      "“mutlaka” (kesinlik) ile “belki” (olasılık) çelişir.",
      { short: "mutlaka ↔ belki çelişir.", steps: ["'mutlaka' kesinlik, 'belki' olasılık bildirir.", "Birlikte kullanımı çelişkidir."], whyOthersWrong: ["Diğerlerinde tek ve tutarlı bir kesinlik/olasılık var."] }, 2),
    Q("turkce-tr-bozukluk-104", "tr-bozukluk",
      "“Onu hem çok sevdi hem de nefret etti.” cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?",
      ["Özne eksikliği", "Yüklem eksikliği", "Tümleç (nesne/dolaylı tümleç) eksikliği", "Gereksiz sözcük", "Özne-yüklem uyumsuzluğu"], 2,
      "“sevmek” nesne (onu), “nefret etmek” dolaylı tümleç (ondan) ister; ortak kullanım eksikliğe yol açar.",
      { short: "Farklı tümleç isteyen yüklemler.", steps: ["sevdi → 'onu' (nesne).", "nefret etti → 'ondan' (dolaylı tümleç).", "Ortak 'onu' bozukluk yaratır → '…ondan nefret etti' olmalı."], whyOthersWrong: ["Özne/yüklem var; gereksiz sözcük veya uyumsuzluk değil."] }, 3),
    Q("turkce-tr-bozukluk-105", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>mantık (anlam) hatası</b> vardır?",
      ["Hava karardığı için lambaları yaktık.", "Çok hızlı koştuğu için yarışta sona kaldı.", "Yorulduğu için dinlenmek istedi.", "Acıktığı için bir şeyler yedi.", "Üşüdüğü için kapıyı kapattı."], 1,
      "Hızlı koşan birinin sona kalması mantıkça çelişir.",
      { short: "Hızlı koşma → sona kalma çelişkisi.", steps: ["Neden-sonuç mantıksal olmalı.", "'hızlı koştuğu için sona kaldı' çelişir."], whyOthersWrong: ["Diğer neden-sonuçlar tutarlı."] }, 3),
    Q("turkce-tr-bozukluk-106", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <b>yoktur</b>?",
      ["Sana bir küçük sır vereceğim.", "İçeriye sessizce ve gürültüyle girdi.", "Bu haber beni çok sevindirdi ve mutlu etti.", "Toplantı verimli geçti.", "Yaklaşık on dakika kadar bekledim."], 3,
      "“Toplantı verimli geçti.” cümlesinde anlatım bozukluğu yoktur.",
      { short: "Sağlam cümle: 'Toplantı verimli geçti.'", steps: ["Diğerlerinde gereksiz/çelişen sözcük var.", "Bu cümle kusursuz."], whyOthersWrong: ["bir küçük (yer), sessizce-gürültüyle (çelişki), sevindirdi-mutlu etti (tekrar), yaklaşık-kadar (tekrar)."] }, 2),
    Q("turkce-tr-bozukluk-107", "tr-bozukluk",
      "“Bu olayı kendi gözlerimle bizzat gördüm.” cümlesindeki anlatım bozukluğunun türü nedir?",
      ["Özne eksikliği", "Gereksiz sözcük kullanımı", "Mantık hatası", "Tümleç eksikliği", "Yüklem yanlışlığı"], 1,
      "“kendi gözlerimle” ve “bizzat” aynı anlamı verir; biri gereksizdir.",
      { short: "gözlerimle + bizzat gereksiz tekrar.", steps: ["Görmek zaten gözle olur; 'bizzat' da aynı vurgu.", "Gereksiz sözcük."], whyOthersWrong: ["Özne/yüklem/tümleç tam; mantık tutarlı."] }, 2),
    Q("turkce-tr-bozukluk-108", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>özne eksikliğinden</b> kaynaklanan bir bozukluk vardır?",
      ["Çantasını aldı ve dışarı çıktı.", "Sınıfa girdi ve yoklama alındı.", "Kapıyı açtı ve içeri girdi.", "Yemeği yedi ve mutfaktan çıktı.", "Ödevini bitirdi ve uyudu."], 1,
      "İlk yüklemin öznesi (o) ile ikinci yüklemin (yoklama alındı) öznesi farklıdır; ortak özne kullanılamaz.",
      { short: "Farklı özneli yüklemler ortak özneyle.", steps: ["'sınıfa girdi' → öznesi 'o'.", "'yoklama alındı' → öznesi 'yoklama'.", "Ortak özne bozukluk yaratır."], whyOthersWrong: ["Diğerlerinde her iki yüklemin öznesi aynıdır (o)."] }, 3),
    Q("turkce-tr-bozukluk-109", "tr-bozukluk",
      "“Sınava hazırlanırken hem dikkatli hem de özenle çalıştı.” cümlesindeki bozukluğun nedeni nedir?",
      ["Çelişen sözcükler", "Eşit görevli olmayan sözcüklerin bağlanması", "Özne-yüklem uyumsuzluğu", "Yüklem eksikliği", "Mantık hatası"], 1,
      "“dikkatli” (sıfat) ile “özenle” (zarf) aynı görevdeymiş gibi “hem…hem” ile bağlanmış; uyumsuz.",
      { short: "Sıfat ile zarf eş görevli sayılmış.", steps: ["'dikkatli' ad/sıfat, 'özenle' zarf.", "Eşit görevli olmayanlar 'hem…hem' ile bağlanmış → bozukluk."], whyOthersWrong: ["Çelişki/uyumsuzluk/eksiklik/mantık değil."] }, 3),
    Q("turkce-tr-bozukluk-110", "tr-bozukluk",
      "Aşağıdaki cümlelerin hangisinde <b>deyimin yanlış kullanımından</b> kaynaklanan bir anlatım bozukluğu vardır?",
      ["Çok sevindiği için etekleri zil çalıyordu.", "Sınavı kazanınca ağzı kulaklarına vardı.", "Üzüntüden burnundan kıl aldırmıyordu.", "Heyecandan eli ayağına dolaştı.", "Başarınca göğsü kabardı."], 2,
      "“burnundan kıl aldırmamak” huysuzluk/aksilik anlatır; “üzüntü” bağlamına uymaz.",
      { short: "Deyim bağlama uymuyor.", steps: ["'burnundan kıl aldırmamak' = aşırı titiz/huysuz.", "'üzüntüden' bağlamıyla çelişir → yanlış deyim kullanımı."], whyOthersWrong: ["Diğer deyimler bağlamlarına uygun."] }, 3),

    /* ---- CÜMLENİN ÖGELERİ (10) ---- */
    Q("turkce-tr-ogeler-101", "tr-ogeler",
      "“Ali, mektubu dün postaya verdi.” cümlesinde <b>“mektubu”</b> sözcüğü hangi ögedir?",
      ["Özne", "Belirtili nesne", "Dolaylı tümleç", "Zarf tümleci", "Yüklem"], 1,
      "“neyi verdi?” → mektubu; “-i” hâli → belirtili nesne.",
      { short: "neyi? → belirtili nesne.", steps: ["Yüklem 'verdi'.", "'neyi verdi?' → mektubu (-i) → belirtili nesne."], whyOthersWrong: ["postaya dolaylı tümleç, dün zarf tümleci, Ali özne."] }, 2),
    Q("turkce-tr-ogeler-102", "tr-ogeler",
      "“Akşamları parkta uzun uzun yürürdü.” cümlesinde aşağıdaki ögelerden hangisi <b>yoktur</b>?",
      ["Zarf tümleci", "Dolaylı tümleç", "Nesne", "Yüklem", "Özne (gizli)"], 2,
      "Yüklem 'yürürdü' nesne almaz; cümlede nesne yoktur.",
      { short: "Nesne yok.", steps: ["yürürdü (yüklem), gizli özne 'o'.", "Akşamları/uzun uzun → zarf tüml., parkta → dolaylı tüml.", "'neyi yürürdü?' sorusu anlamsız → nesne yok."], whyOthersWrong: ["Zarf/dolaylı tümleç, yüklem, gizli özne var."] }, 3),
    Q("turkce-tr-ogeler-103", "tr-ogeler",
      "Aşağıdaki cümlelerin hangisinde <b>belirtisiz nesne</b> vardır?",
      ["Kitabı okudum.", "Eve gittim.", "Mektup yazdım.", "Dün geldi.", "Okulda kaldı."], 2,
      "“ne yazdım? → mektup” yalın hâlde, belirtisiz nesne.",
      { short: "Yalın 'mektup' → belirtisiz nesne.", steps: ["'ne yazdım?' → mektup (yalın).", "Belirtisiz nesnedir."], whyOthersWrong: ["Kitabı belirtili nesne; eve/okulda dolaylı tümleç; dün zarf."] }, 2),
    Q("turkce-tr-ogeler-104", "tr-ogeler",
      "“Yorgun çocuk, sıcacık yatağında mışıl mışıl uyuyordu.” cümlesinin yüklemi ve öznesi aşağıdakilerden hangisinde doğru verilmiştir?",
      ["uyuyordu / yatağında", "uyuyordu / yorgun çocuk", "mışıl mışıl / çocuk", "yatağında / çocuk", "uyuyordu / mışıl mışıl"], 1,
      "Yüklem 'uyuyordu'; 'kim uyuyordu?' → yorgun çocuk (özne).",
      { short: "Yüklem uyuyordu, özne yorgun çocuk.", steps: ["Yüklem: uyuyordu.", "'kim uyuyordu?' → yorgun çocuk."], whyOthersWrong: ["yatağında dolaylı tümleç, mışıl mışıl zarf tümleci."] }, 2),
    Q("turkce-tr-ogeler-105", "tr-ogeler",
      "Aşağıdaki cümlelerin hangisinde <b>dolaylı tümleç</b> vardır?",
      ["Bütün gün çalıştı.", "Arkadaşına güzel bir hediye aldı.", "Çok hızlı konuştu.", "Yağmur sabaha kadar yağdı.", "Herkes onu bekliyordu."], 1,
      "“kime aldı? → arkadaşına” (-e hâli) → dolaylı tümleç.",
      { short: "arkadaşına (-e) → dolaylı tümleç.", steps: ["'kime aldı?' → arkadaşına.", "-e hâli → dolaylı tümleç."], whyOthersWrong: ["Bütün gün/hızlı/sabaha kadar zarf; onu nesne."] }, 2),
    Q("turkce-tr-ogeler-106", "tr-ogeler",
      "“Sınav sonuçları bugün açıklandı.” cümlesinde “bugün” sözcüğü hangi ögedir?",
      ["Özne", "Belirtili nesne", "Dolaylı tümleç", "Zarf tümleci", "Yüklem"], 3,
      "“ne zaman açıklandı? → bugün” → zarf tümleci.",
      { short: "ne zaman? → zarf tümleci.", steps: ["Yüklem 'açıklandı'.", "'ne zaman?' → bugün → zarf tümleci."], whyOthersWrong: ["Özne 'sınav sonuçları'; nesne/dolaylı tümleç yok."] }, 2),
    Q("turkce-tr-ogeler-107", "tr-ogeler",
      "Aşağıdaki cümlelerin hangisi yalnızca <b>yüklem ve özneden</b> oluşmuştur?",
      ["Kuşlar göçtü.", "Mektubu okudum.", "Eve erken döndük.", "Onu parkta gördüm.", "Sabah erken kalktı."], 0,
      "“Kuşlar (özne) göçtü (yüklem)” — başka öge yok.",
      { short: "Özne + yüklem: 'Kuşlar göçtü.'", steps: ["Yüklem göçtü, özne kuşlar.", "Nesne/tümleç yok."], whyOthersWrong: ["Diğerlerinde nesne ve/veya tümleç de var."] }, 2),
    Q("turkce-tr-ogeler-108", "tr-ogeler",
      "“Çocuk, topu duvardan duvara vuruyordu.” cümlesinde “duvardan duvara” sözü hangi ögedir?",
      ["Belirtili nesne", "Özne", "Dolaylı tümleç", "Zarf tümleci", "Edat tümleci"], 2,
      "“nereden nereye vuruyordu?” → duvardan duvara; yer-yön (-den/-e) → dolaylı tümleç.",
      { short: "nereden-nereye → dolaylı tümleç.", steps: ["'-den' ve '-e' yer-yön ekleri.", "Dolaylı tümleç."], whyOthersWrong: ["Nesne 'topu'; özne 'çocuk'."] }, 3),
    Q("turkce-tr-ogeler-109", "tr-ogeler",
      "“Senin için her şeyi göze aldım.” cümlesinde “senin için” sözü hangi ögedir?",
      ["Dolaylı tümleç", "Edat tümleci", "Zarf tümleci", "Belirtili nesne", "Özne"], 1,
      "“için” edatıyla kurulan “senin için” öbeği → edat tümleci.",
      { short: "'için' öbeği → edat tümleci.", steps: ["'senin için' edat öbeğidir.", "Edat tümlecidir."], whyOthersWrong: ["her şeyi nesne; dolaylı/zarf tümleç değil."] }, 3),
    Q("turkce-tr-ogeler-110", "tr-ogeler",
      "Aşağıdaki cümlelerin hangisinin yüklemi <b>ad (isim)</b> soyludur?",
      ["Çocuk hızla koştu.", "Bu, yılların emeğidir.", "Mektubu dün yazdım.", "Sınava iyi hazırlandı.", "Herkes erken geldi."], 1,
      "“…emeğidir” ek fiille çekimlenmiş bir addır → isim cümlesi.",
      { short: "'emeğidir' → ad yüklem.", steps: ["Yüklem 'emeğidir' (ad + ek fiil).", "İsim soylu yüklem."], whyOthersWrong: ["koştu/yazdım/hazırlandı/geldi → fiil yüklem."] }, 3)
  ]);
})();
