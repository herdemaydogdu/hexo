/* ============================================================
   TÜRKÇE — Premium İçerik Batch 2 (Paragraf, Ses Bilgisi)
   Tüm anlatım ve sorular SIFIRDAN ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-02: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("turkce", [
    {
      id: "tr-paragraf", name: "Paragraf", branch: null,
      summary: "Konu, ana düşünce, yardımcı düşünce, başlık; yapı, akış, cümle yerleştirme ve tamamlama.",
      curriculumRefs: ["2026-YKS Türkçe: Paragrafta konu/ana düşünce; yapı, akış, tamamlama"],
      prerequisites: ["tr-cumle"], estimatedMinutes: 26, difficulty: 3,
      objectives: [
        "Paragrafın konusunu, ana düşüncesini ve yardımcı düşüncelerini ayırır.",
        "Paragrafın giriş-gelişme-sonuç yapısını ve düşünce akışını çözümler.",
        "Akışı bozan cümleyi bulur, boşa uygun cümleyi yerleştirir, paragrafı tamamlar."
      ],
      content: `
        <h2>Paragraf</h2>
        <p><b>Ön bilgi:</b> TYT Türkçe'nin yaklaşık yarısı paragraf sorularıdır. Anahtar beceri "metni hızlı okuyup <b>ne demek istediğini</b> kavramak"tır.</p>
        <h3>1) Temel kavramlar</h3>
        <ul>
          <li><b>Konu:</b> paragrafın <b>neden</b> söz ettiği (genel).</li>
          <li><b>Ana düşünce:</b> yazarın vermek istediği <b>temel mesaj/yargı</b>.</li>
          <li><b>Yardımcı düşünce:</b> ana düşünceyi destekleyen ara fikirler.</li>
          <li><b>Başlık:</b> konuyu en iyi özetleyen kısa söz.</li>
        </ul>
        <h3>2) Paragrafın yapısı</h3>
        <p><b>Giriş</b> cümlesi bağımsız ve bağlaçsız başlar; <b>gelişme</b> düşünceyi açar; <b>sonuç</b> bağlar. "Ama, ancak, çünkü, oysa, bu nedenle" gibi bağlayıcılar cümlelerin sırasını ele verir.</p>
        <h3>3) Soru tipleri ve stratejileri</h3>
        <ul>
          <li><b>Akışı bozan cümle:</b> konudan kopan, başka şeyden söz eden cümleyi at.</li>
          <li><b>Cümle yerleştirme:</b> verilen cümlenin zamiri/bağlacı hangi cümleyle bağ kuruyor, ona bak.</li>
          <li><b>Paragraf tamamlama:</b> son cümle, paragrafın yöneldiği sonucu mantıkça sürdürmeli.</li>
          <li><b>Anlatımın yönü:</b> giriş-gelişme arasındaki düşünce zinciri kopmamalı.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>"Okumak, yalnızca bilgi edinmek değildir. İnsan, okudukça başkalarının dünyasını da tanır. Böylece kendi yargılarını sorgulamayı öğrenir." → Ana düşünce: <b>Okumak insanı çok yönlü geliştirir / başkalarını anlamayı ve kendini sorgulamayı sağlar.</b></p>
        <h3>Sık yapılan hata</h3>
        <p>Yardımcı düşünceyi ana düşünce sanmak. Ana düşünce paragrafın <b>tamamını</b> kapsar; tek bir cümleyi değil.</p>
        <h3>Hızlı yöntem</h3>
        <p>Paragrafı okuduktan sonra "Yazar bunu <b>niçin</b> yazdı?" diye sor; yanıt çoğu zaman ana düşüncedir. "Ama/ancak" sonrası genelde asıl vurgu gelir.</p>
        <h3>Özet kartı</h3>
        <ul><li>Konu = neyden; ana düşünce = ne mesaj.</li><li>Giriş bağlaçsız başlar.</li><li>"ama/ancak" sonrası asıl vurgu.</li></ul>`,
      commonMistakes: ["Yardımcı düşünceyi ana düşünce sanmak.", "Konu ile ana düşünceyi karıştırmak."],
      pairs: [
        { term: "Konu", def: "Paragrafın neyden söz ettiği" },
        { term: "Ana düşünce", def: "Yazarın temel mesajı/yargısı" },
        { term: "Yardımcı düşünce", def: "Ana düşünceyi destekleyen ara fikir" },
        { term: "Giriş cümlesi", def: "Bağımsız, bağlaçsız başlar" },
        { term: "Akışı bozan cümle", def: "Konudan kopan, ilgisiz cümle" },
        { term: "Paragraf tamamlama", def: "Düşünceyi mantıkça sürdüren son cümle" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-ses", name: "Ses Bilgisi", branch: null,
      summary: "Ünlü uyumları; ünsüz yumuşaması/benzeşmesi; ünlü düşmesi/daralması; kaynaştırma ve ulama.",
      curriculumRefs: ["2026-YKS Türkçe: Ses bilgisi"],
      prerequisites: [], estimatedMinutes: 20, difficulty: 2,
      objectives: [
        "Büyük ve küçük ünlü uyumunu uygular.",
        "Ünsüz yumuşaması, benzeşmesi (sertleşme), ünlü düşmesi ve daralmasını tanır.",
        "Kaynaştırma ünsüzlerini ve ulamayı fark eder."
      ],
      content: `
        <h2>Ses Bilgisi</h2>
        <h3>1) Ünlü uyumları</h3>
        <ul>
          <li><b>Büyük ünlü uyumu:</b> Ünlüler ya hep kalın (a,ı,o,u) ya hep ince (e,i,ö,ü) olur. "yollar" uyar; "kardeş" uymaz.</li>
          <li><b>Küçük ünlü uyumu:</b> düzlük-yuvarlaklık uyumu (kapı, koşu).</li>
        </ul>
        <h3>2) Ünsüz olayları</h3>
        <ul>
          <li><b>Ünsüz yumuşaması:</b> p, ç, t, k → b, c, d, g/ğ (kitap → kita<b>b</b>ı).</li>
          <li><b>Ünsüz benzeşmesi (sertleşme):</b> sert ünsüzden sonra c, d, g sertleşir (dolap + da → dola<b>pt</b>a; ağaç + cı → ağaç<b>çı</b>).</li>
        </ul>
        <h3>3) Ünlü olayları</h3>
        <ul>
          <li><b>Ünlü düşmesi:</b> burun → bur<b>n</b>u, ağız → ağzı.</li>
          <li><b>Ünlü daralması:</b> a/e → ı/i/u/ü (başla-yor → başl<b>ı</b>yor; de-yor → d<b>i</b>yor).</li>
        </ul>
        <h3>4) Kaynaştırma ve ulama</h3>
        <ul>
          <li><b>Kaynaştırma ünsüzleri (y, ş, s, n):</b> iki ünlü arasına girer (su-<b>y</b>-u, kapı-<b>s</b>-ı, iki-<b>ş</b>-er).</li>
          <li><b>Ulama:</b> ünsüzle biten sözcüğün ünlüyle başlayan sözcüğe bağlanarak okunması (akşa<b>m_o</b>lunca).</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>"ağaç" + "-ı" → "ağacı": sondaki <b>ç → c</b> yumuşamıştır (ünsüz yumuşaması).</p>
        <h3>Sık yapılan hata</h3>
        <p>Ünlü düşmesi ile daralmayı karıştırmak: düşmede bir <b>ünlü kaybolur</b> (ağız→ağzı), daralmada <b>geniş ünlü daralır</b> (başlayor→başlıyor).</p>
        <h3>Özet kartı</h3>
        <ul><li>p,ç,t,k → b,c,d,g (yumuşama).</li><li>Sert + c,d,g → sert (benzeşme).</li><li>Kaynaştırma: y, ş, s, n.</li></ul>`,
      commonMistakes: ["Ünlü düşmesi ile daralmayı karıştırmak.", "Yumuşama ile benzeşmeyi karıştırmak."],
      pairs: [
        { term: "Ünsüz yumuşaması", def: "p,ç,t,k → b,c,d,g/ğ" },
        { term: "Ünsüz benzeşmesi", def: "Sert ünsüzden sonra sertleşme (dolapta)" },
        { term: "Ünlü düşmesi", def: "burun → burnu" },
        { term: "Ünlü daralması", def: "başla-yor → başlıyor" },
        { term: "Kaynaştırma ünsüzleri", def: "y, ş, s, n" },
        { term: "Ulama", def: "Ünsüz–ünlü bağlanarak okuma" }
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
    /* ---- PARAGRAF (10) ---- */
    Q("turkce-tr-paragraf-101", "tr-paragraf",
      "\"Bir kitabı bitirdiğimde onu rafa koymam; bir süre düşüncelerimde taşırım. Çünkü asıl okuma, sayfalar bittikten sonra zihnimde sürer.\" Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?",
      ["Kitaplar raflarda saklanmalıdır.", "Okumanın etkisi kitap bitince de sürer.", "Hızlı okumak önemlidir.", "Her kitap bir kez okunmalıdır.", "Kitap toplamak bir tutkudur."], 1,
      "Yazar, okumanın etkisinin kitap bitince zihinde sürdüğünü vurgular.",
      { short: "Okumanın etkisi kitap bitince de sürer.", steps: ["'asıl okuma sayfalar bittikten sonra sürer' anahtar cümle.", "Ana düşünce budur."], whyOthersWrong: ["Diğerleri ayrıntı veya paragrafta yok."] }, 2),
    Q("turkce-tr-paragraf-102", "tr-paragraf",
      "(I) Deniz, insanı hep dingin kılar. (II) Dalgaların sesi kaygıları bastırır. (III) Bu yüzden birçok kişi tatilini kıyıda geçirir. (IV) Oysa dağ yürüyüşleri de oldukça yorucudur. (V) Kıyıdaki bu huzur, şehrin gürültüsünden kaçış sağlar. Bu parçada anlatımın akışını bozan cümle hangisidir?",
      ["I", "II", "III", "IV", "V"], 3,
      "IV. cümle dağ yürüyüşünden söz ederek deniz/huzur konusundan kopar.",
      { short: "IV akışı bozar (dağ yürüyüşü).", steps: ["Paragraf deniz ve huzuru anlatıyor.", "IV başka konuya (dağ) geçiyor."], whyOthersWrong: ["I-II-III-V hep deniz/huzur ekseninde."] }, 2),
    Q("turkce-tr-paragraf-103", "tr-paragraf",
      "\"Sanat, yalnızca güzeli aramak değildir; ___\" Bu cümle aşağıdakilerden hangisiyle anlamca en uygun biçimde tamamlanır?",
      ["çünkü sanatçılar çok çalışır.", "aynı zamanda gerçeği farklı bir gözle göstermektir.", "bu yüzden müzeler kalabalıktır.", "oysa resim pahalı bir uğraştır.", "ve sanatçılar yalnız yaşar."], 1,
      "Noktalı virgülden sonra 'değildir; aynı zamanda …' yapısı anlamı tamamlar.",
      { short: "“…değildir; aynı zamanda …dir.”", steps: ["İlk bölüm 'yalnızca … değildir' diyor.", "Devamı ek bir tanım vermeli → 'aynı zamanda …'"], whyOthersWrong: ["Diğerleri anlam/dil bağını kurmaz."] }, 3),
    Q("turkce-tr-paragraf-104", "tr-paragraf",
      "\"Başarılı bir yazar, çok okuyan yazardır. Çünkü okumak, kelime dağarcığını ve bakış açısını genişletir.\" Bu parçada asıl anlatılmak istenen nedir?",
      ["Yazarlar zengin olmalıdır.", "Okumak yazarlığı besler.", "Kelime ezberlemek gerekir.", "Her okuyan yazar olur.", "Yazmak okumaktan zordur."], 1,
      "Parça, okumanın yazarlığı geliştirdiğini söyler.",
      { short: "Okumak yazarlığı besler.", steps: ["'çok okuyan yazar başarılıdır' + gerekçe.", "Ana fikir: okumak yazarlığı geliştirir."], whyOthersWrong: ["Diğerleri aşırı/yanlış genelleme."] }, 1),
    Q("turkce-tr-paragraf-105", "tr-paragraf",
      "\"Şu an üzerinde durduğumuz sorun, aslında çok eskiye dayanıyor.\" cümlesi bir paragrafın neresinde yer almaya en uygundur?",
      ["Girişte, ilk cümle olarak", "Gelişmenin ortasında, önceki cümleye bağlı", "Sonuç cümlesi olarak", "Başlık olarak", "Bağımsız bir paragraf olarak"], 1,
      "“Şu an üzerinde durduğumuz sorun” önceden bir sorundan söz edildiğini gösterir; giriş olamaz.",
      { short: "Önceki cümleye bağlı → gelişmede.", steps: ["'üzerinde durduğumuz sorun' ifadesi öncesini gerektirir.", "Bağımsız/giriş olamaz."], whyOthersWrong: ["Giriş bağımsız başlar; başlık/sonuç uymaz."] }, 3),
    Q("turkce-tr-paragraf-106", "tr-paragraf",
      "\"Teknoloji hayatımızı kolaylaştırıyor; ama onu bilinçsiz kullanmak yeni sorunlar doğuruyor.\" Bu cümlede yazar asıl olarak neyi vurgulamıştır?",
      ["Teknolojinin yalnızca yararını", "Teknolojinin bilinçli kullanılması gerektiğini", "Teknolojiden uzak durmayı", "Eski yöntemlerin üstünlüğünü", "Sorunların çözülemeyeceğini"], 1,
      "'ama' sonrası asıl vurgu: bilinçsiz kullanım sorun doğurur → bilinçli kullanım gerekir.",
      { short: "'ama' sonrası vurgu: bilinçli kullanım.", steps: ["İlk bölüm yarar, 'ama' sonrası uyarı.", "Asıl mesaj bilinçli kullanım."], whyOthersWrong: ["Uzak durma/eskinin üstünlüğü/çözümsüzlük abartı."] }, 2),
    Q("turkce-tr-paragraf-107", "tr-paragraf",
      "\"Çocukların hayal gücünü beslemenin en iyi yolu, onlara hazır cevaplar sunmak değil, soru sormalarına olanak tanımaktır.\" Bu cümleden aşağıdakilerden hangisi çıkarılabilir?",
      ["Çocuklara her şey öğretilmelidir.", "Merak, öğrenmeyi besler.", "Hayal gücü doğuştan gelir.", "Çocuklar soru sormamalıdır.", "Hazır bilgi her zaman yararlıdır."], 1,
      "Soru sormaya olanak tanımak merakı, dolayısıyla öğrenmeyi besler.",
      { short: "Merak öğrenmeyi besler.", steps: ["'soru sormaya olanak tanımak' merakı destekler.", "Çıkarım: merak öğrenmeyi geliştirir."], whyOthersWrong: ["Diğerleri cümleyle çelişir/yok."] }, 2),
    Q("turkce-tr-paragraf-108", "tr-paragraf",
      "Bir paragrafın <b>başlığı</b> için aşağıdakilerden hangisi söylenebilir?",
      ["Paragraftaki en uzun cümledir.", "Konuyu en iyi özetleyen kısa sözdür.", "Her zaman ilk cümledir.", "Yardımcı düşüncedir.", "Yazarın adıdır."], 1,
      "Başlık, konuyu en iyi yansıtan kısa ifadedir.",
      { short: "Başlık = konuyu özetleyen kısa söz.", steps: ["Başlık metnin tümünü yansıtmalı, kısa olmalı."], whyOthersWrong: ["En uzun cümle/ilk cümle/yardımcı düşünce değildir."] }, 1),
    Q("turkce-tr-paragraf-109", "tr-paragraf",
      "(I) Yürüyüş, hem bedeni hem zihni dinlendirir. (II) Düzenli yürüyen kişilerin uyku kalitesi artar. (III) Ayrıca yürüyüş, yeni fikirlerin doğmasına da yardımcı olur. Bu üç cümlenin ortak konusu nedir?",
      ["Uyku düzeni", "Yürüyüşün yararları", "Spor çeşitleri", "Beyin sağlığı", "Sağlıklı beslenme"], 1,
      "Üç cümle de yürüyüşün yararlarını sıralar.",
      { short: "Ortak konu: yürüyüşün yararları.", steps: ["Her cümle yürüyüşün bir yararını veriyor."], whyOthersWrong: ["Uyku/beyin yalnız bir cümlede; beslenme yok."] }, 1),
    Q("turkce-tr-paragraf-110", "tr-paragraf",
      "\"Gerçek bir gezgin, gördüğü yerleri değil, o yerlerin kendisinde bıraktığı izleri anlatır.\" Bu cümlede vurgulanan düşünce aşağıdakilerden hangisidir?",
      ["Gezmek pahalıdır.", "Önemli olan, gezinin insanda bıraktığı etkidir.", "Fotoğraf çekmek gereksizdir.", "Her yer gezilmelidir.", "Gezginler çok konuşur."], 1,
      "Vurgu, gezinin kişide bıraktığı iz/etkidedir.",
      { short: "Önemli olan gezinin bıraktığı etki.", steps: ["'kendisinde bıraktığı izler' anahtar.", "Vurgu: iç etki."], whyOthersWrong: ["Maliyet/fotoğraf/çokluk cümlede yok."] }, 2),

    /* ---- SES BİLGİSİ (10) ---- */
    Q("turkce-tr-ses-101", "tr-ses",
      "Aşağıdaki sözcüklerin hangisinde <b>ünsüz yumuşaması</b> vardır?",
      ["yurdu", "kalemi", "evi", "gözü", "kolu"], 0,
      "yurt → yurdu: sondaki t → d yumuşamıştır.",
      { short: "yurt → yurdu (t→d).", steps: ["Sert ünsüz p,ç,t,k ünlüyle yumuşar.", "yurt+u → yurdu."], whyOthersWrong: ["kalem/ev/göz/kol zaten yumuşak/değişmez."] }, 1),
    Q("turkce-tr-ses-102", "tr-ses",
      "\"Ağız\" sözcüğü \"-ı\" ekini aldığında hangi ses olayı görülür?",
      ["Ünsüz türemesi", "Ünlü düşmesi", "Ünsüz benzeşmesi", "Ünlü daralması", "Kaynaştırma"], 1,
      "ağız → ağzı: ikinci ünlü düşer (ünlü düşmesi).",
      { short: "ağız → ağzı (ünlü düşmesi).", steps: ["İki heceli bazı sözcükler ek alınca ünlü düşürür.", "ağız → ağzı."], whyOthersWrong: ["Türeme/benzeşme/daralma/kaynaştırma değil."] }, 1),
    Q("turkce-tr-ses-103", "tr-ses",
      "Aşağıdakilerin hangisinde <b>ünlü daralması</b> vardır?",
      ["geliyor", "kitaplar", "evler", "yoldan", "kalemlik"], 0,
      "gel-e-yor → geliyor: geniş 'e' daralarak 'i' olur.",
      { short: "gele-yor → geliyor (daralma).", steps: ["'-yor' eki önündeki a/e'yi daraltır.", "gele-yor → geliyor."], whyOthersWrong: ["Diğerlerinde daralma yok."] }, 2),
    Q("turkce-tr-ses-104", "tr-ses",
      "\"Dolap\" sözcüğüne \"-da\" eki getirildiğinde oluşan \"dolapta\" biçiminde görülen ses olayı hangisidir?",
      ["Ünsüz yumuşaması", "Ünsüz benzeşmesi (sertleşme)", "Ünlü düşmesi", "Kaynaştırma", "Ulama"], 1,
      "Sert ünsüz 'p'den sonra 'd' sertleşip 't' olur: dolapta.",
      { short: "p'den sonra d→t (benzeşme).", steps: ["Sert ünsüzle biten sözcükten sonra c,d,g sertleşir.", "dolap+da → dolapta."], whyOthersWrong: ["Yumuşama tam tersidir; düşme/kaynaştırma/ulama değil."] }, 2),
    Q("turkce-tr-ses-105", "tr-ses",
      "Aşağıdaki sözcüklerin hangisinde <b>kaynaştırma ünsüzü</b> vardır?",
      ["kitaplar", "su-y-u (suyu)", "evden", "gözlük", "yoldaş"], 1,
      "suyu: iki ünlü arasına 'y' kaynaştırma ünsüzü girmiştir.",
      { short: "suyu → 'y' kaynaştırma.", steps: ["İki ünlü yan yana gelmez; araya y,ş,s,n girer.", "su+u → suyu."], whyOthersWrong: ["Diğerlerinde iki ünlü karşılaşması yok."] }, 1),
    Q("turkce-tr-ses-106", "tr-ses",
      "Aşağıdaki sözcüklerden hangisi <b>büyük ünlü uyumuna</b> uymaz?",
      ["yollar", "çocuklar", "kardeş", "kapılar", "okullu"], 2,
      "kardeş: a (kalın) ve e (ince) bir arada → uymaz.",
      { short: "kardeş (a+e) uymaz.", steps: ["Büyük ünlü uyumu: ya hep kalın ya hep ince.", "kardeş: a kalın, e ince → uymaz."], whyOthersWrong: ["yollar/çocuklar/kapılar/okullu kalın uyumlu."] }, 2),
    Q("turkce-tr-ses-107", "tr-ses",
      "\"Akşam olunca sokaklar boşaldı.\" cümlesinde hangi ses olayı (sözcükler arası) görülebilir?",
      ["Ünlü düşmesi", "Ulama", "Ünsüz türemesi", "Daralma", "Yumuşama"], 1,
      "'akşam' (m ile biter) ve 'olunca' (o ile başlar) ulanarak okunur.",
      { short: "akşam_olunca → ulama.", steps: ["Ünsüzle biten + ünlüyle başlayan sözcük bağlanır.", "akşam-olunca ulama."], whyOthersWrong: ["Diğer olaylar sözcük içidir, burada yok."] }, 2),
    Q("turkce-tr-ses-108", "tr-ses",
      "\"Renk\" sözcüğü \"-i\" ekini aldığında \"rengi\" olur. Bu değişim hangi ses olayıdır?",
      ["Ünsüz benzeşmesi", "Ünsüz yumuşaması", "Ünlü düşmesi", "Kaynaştırma", "Ulama"], 1,
      "renk → rengi: 'k' → 'g' yumuşaması.",
      { short: "renk → rengi (k→g yumuşama).", steps: ["Sondaki k ünlüyle g'ye yumuşar.", "renk+i → rengi."], whyOthersWrong: ["Benzeşme/düşme/kaynaştırma/ulama değil."] }, 1),
    Q("turkce-tr-ses-109", "tr-ses",
      "Aşağıdakilerin hangisinde <b>ünlü düşmesi yoktur</b>?",
      ["gönül → gönlüm", "burun → burnu", "şehir → şehri", "kitap → kitabı", "ağız → ağzı"], 3,
      "kitap → kitabı'da ünlü düşmesi değil, ünsüz yumuşaması (p→b) vardır.",
      { short: "kitabı → yumuşama, düşme yok.", steps: ["Diğerlerinde ikinci ünlü düşer.", "kitabı'da yalnızca p→b yumuşar."], whyOthersWrong: ["gönlüm/burnu/şehri/ağzı: ünlü düşmesi var."] }, 3),
    Q("turkce-tr-ses-110", "tr-ses",
      "\"Ağaç\" sözcüğüne \"-cı\" eki getirildiğinde \"ağaççı\" olur. Buradaki ses olayı hangisidir?",
      ["Ünsüz yumuşaması", "Ünsüz benzeşmesi (sertleşme)", "Ünlü daralması", "Kaynaştırma", "Ünlü düşmesi"], 1,
      "Sert 'ç'den sonra 'c' sertleşip 'ç' olur: ağaççı.",
      { short: "ç'den sonra c→ç (benzeşme).", steps: ["Sert ünsüzle biten sözcükten sonra c sertleşir.", "ağaç+cı → ağaççı."], whyOthersWrong: ["Yumuşama/daralma/kaynaştırma/düşme değil."] }, 2)
  ]);
})();
