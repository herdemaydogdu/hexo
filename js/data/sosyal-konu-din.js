/* ============================================================
   SOSYAL / DİN KÜLTÜRÜ — TYT 8 konu alanı: yeni ünite + içerik.
   2020 YÖK/YKS kazanımlarına göre: İnsan ve Din, İslam ve İnanç,
   İbadetler, Hz. Muhammed, Kur'an, Mezhepler, Ahlak, Medeniyet.
   branch: "din". Stub'lardan SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-din: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "din", prerequisites: [], objectives: [], difficulty: 2, estimatedMinutes: 20 };
    u.name = name; u.summary = summary; u.branch = "din";
    u.content = content; u.reviewedAt = "2026-07-12"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  /* =============== din-insan =============== */
  setUnit("din-insan", "İnsan ve Din", "Din kavramı, dinin insan hayatındaki yeri, inanç biçimleri ve ilahi dinler.",
    "<h2>İnsan ve Din</h2>" +
    "<p><b>Din</b>, genellikle aşkın (yaratılana benzemeyen) bir varlığa bağlanan, <b>kutsalları</b> bulunan, ahlaki öğeler taşıyan; inanç, ibadet, değer ve kurallar bütünüdür. <b>İslam'a göre din</b>, Allah tarafından <b>vahiy</b> yoluyla gönderilen, bireyin <b>hür iradesiyle</b> kabul ettiği, insanın dünya ve ahiret mutluluğunu amaçlayan kurallar bütünüdür.</p>" +

    "<h3>İnsanın doğası ve din</h3>" +
    "<p>İnanma ihtiyacı insanın doğasında vardır; din tarih boyunca her kültürde görülen <b>evrensel bir olgu</b>dur. Dinin biçimleri kültürden kültüre değişse de her dinde ortak öğeler bulunur: <b>kutsal, inanç, ibadet/ayin, ahlak ve semboller</b> (cami, kilise, sinagog gibi).</p>" +

    "<h3>İnanmanın (inancın) çeşitli biçimleri</h3>" +
    "<ul>" +
    "<li><b>Monoteizm (tek tanrıcılık):</b> Tek bir Tanrı'ya inanmak.</li>" +
    "<li><b>Politeizm (çok tanrıcılık):</b> Birden çok tanrıya inanmak.</li>" +
    "<li><b>Teizm:</b> Evreni yaratan ve yöneten bir Tanrı vardır. <b>Deizm:</b> Tanrı yaratmış ama karışmaz.</li>" +
    "<li><b>Panteizm:</b> Tanrı ile evren özdeştir. <b>Ateizm:</b> Tanrı yoktur. <b>Agnostisizm:</b> bilinemez.</li>" +
    "</ul>" +

    "<h3>Vahye dayalı (ilahi/semavi) dinler</h3>" +
    "<p>Vahye dayanan üç ilahi din <b>Yahudilik, Hristiyanlık ve İslam</b>'dır. İslam, Kur'an'a göre tüm vahiylerin ortak adı ve son ilahi dindir.</p>" +

    "<h3>Güncel dini meseleler</h3>" +
    "<p><b>Batıl inanç ve hurafeler</b> (uğur/uğursuzluk, muska vb.) dinin özünden değildir. Dinin siyasi/ekonomik çıkar için kullanılması <b>dini istismar</b>dır; İslam bunları reddeder.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Teizm</b> (müdahale eden Tanrı) ile <b>deizm</b>i (karışmayan Tanrı) karıştırma.</li>" +
    "<li>Hurafe/batıl inanç dinin özü değildir; din bunları onaylamaz.</li></ul>");

  /* =============== din-inanc =============== */
  setUnit("din-inanc", "İslam ve İnanç", "İman, iman türleri, iman esasları (Âmentü) ve Allah'ın sıfatları.",
    "<h2>İslam ve İnanç</h2>" +
    "<p><b>İman</b>, Allah'ın varlığını ve birliğini, Hz. Peygamber'i ve getirdiği dini <b>kalp ile tasdik (onay), dil ile ikrar (söyleme)</b> etmektir. İman eden kişiye <b>mümin</b> denir.</p>" +

    "<h3>İman çeşitleri</h3>" +
    "<ul>" +
    "<li><b>İcmali iman:</b> İnanılacak şeylere toptan (özet) inanmak.</li>" +
    "<li><b>Tafsili iman:</b> İnanç esaslarının her birine ayrıntılı inanmak (daha bilinçli).</li>" +
    "<li><b>Taklidi iman:</b> Delile dayanmayan, çevreden edinilen iman.</li>" +
    "<li><b>Tahkiki iman:</b> Araştırma sonucu delile/bilgiye dayanan iman.</li>" +
    "</ul>" +

    "<h3>İman esasları (Âmentü — 6 esas)</h3>" +
    "<p><b>Allah'a</b>, <b>meleklere</b>, <b>kitaplara</b>, <b>peygamberlere</b>, <b>ahiret gününe</b> ve <b>kadere (hayır ve şerrin Allah'tan olduğuna)</b> iman.</p>" +

    "<h3>Allah'ın sıfatları</h3>" +
    "<p><b>Zati sıfatlar</b> (yalnız Allah'a ait): Vücud (var olma), Kıdem (başlangıcı olmama), Beka (sonu olmama), Vahdaniyet (bir olma), Muhalefetün li'l-havadis (yaratılmışlara benzememe), Kıyam bi-nefsihi (varlığının kendinden olması).</p>" +
    "<p><b>Subuti sıfatlar:</b> Hayat, İlim, İrade, Kudret, Semi (işitme), Basar (görme), Kelam (söz), Tekvin (yaratma).</p>" +
    "<p><b>Esma-i Hüsna:</b> Allah'ın en güzel isimleri (Rahman, Rahim, Rezzak, Gafur...). Allah'la iletişimin yolu <b>dua ve ibadet</b>tir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>İman = <b>kalp ile tasdik + dil ile ikrar</b>; yalnız dille söylemek tam iman değildir.</li>" +
    "<li><b>Zati</b> sıfatlar yalnız Allah'a aittir; <b>subuti</b> sıfatların benzeri sınırlı biçimde yaratılmışta bulunabilir.</li></ul>");

  /* =============== din-ibadet =============== */
  setUnit("din-ibadet", "İslam ve İbadetler", "İbadetin anlamı, ilkeleri, sınıflandırılması; namaz, oruç, zekât, hac, kurban.",
    "<h2>İslam ve İbadetler</h2>" +
    "<p><b>İbadet</b>; Allah'a saygı ve bağlılığı belirtmek, kulluk görevini yerine getirmek, O'nun emirlerine uyup yasaklarından kaçınmaktır. Başlıca ibadetler <b>namaz, oruç, zekât ve hac</b>tır; Allah'ın rızası için yapılan her güzel iş de ibadettir.</p>" +

    "<h3>İbadetin temel ilkeleri</h3>" +
    "<ul>" +
    "<li><b>İhlas (samimiyet):</b> İbadet yalnız Allah rızası için yapılır (gösteriş = riya, yasaktır).</li>" +
    "<li><b>Güç yettiğince:</b> Din kolaylık esasına dayanır; kimse gücünün üstünde sorumlu tutulmaz.</li>" +
    "<li>İbadet imanı güçlendirir, kulu Allah'a yaklaştırır, sorumluluk bilinci ve güzel ahlak kazandırır.</li>" +
    "</ul>" +

    "<h3>İbadetlerin sınıflandırılması</h3>" +
    "<ul>" +
    "<li><b>Bedenle yapılanlar:</b> Namaz, oruç.</li>" +
    "<li><b>Mal ile yapılanlar:</b> Zekât, fitre, sadaka.</li>" +
    "<li><b>Hem beden hem mal ile yapılanlar:</b> Hac.</li>" +
    "</ul>" +

    "<h3>Başlıca ibadetler</h3>" +
    "<p><b>Namaz:</b> Günde beş vakit. <b>Oruç:</b> Ramazan ayında tutulur. <b>Zekât:</b> Nisap miktarı mala sahip olan zenginin malının kırkta birini (1/40) ihtiyaç sahiplerine vermesi. <b>Hac:</b> Gücü yeten Müslümanın ömründe bir kez Kâbe'yi ziyaret etmesi. <b>Kurban:</b> Allah'a yakınlaşmak için ibadet niyetiyle hayvan kesmek.</p>" +
    "<p>Hükümlerine göre: <b>Farz</b> (kesin emir), <b>vacip</b>, <b>sünnet</b> (peygamberin uygulaması), <b>salih amel</b> (yararlı/iyi iş).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Zekât <b>mal</b>, namaz-oruç <b>beden</b>, hac ise <b>hem mal hem beden</b> ile yapılır.</li>" +
    "<li>Gösteriş için ibadet (<b>riya</b>) ihlası bozar.</li></ul>");

  /* =============== din-muhammed =============== */
  setUnit("din-muhammed", "Hz. Muhammed'in Hayatı ve Örnekliği", "Hz. Muhammed'in hayatı, örnekliği (üsve-i hasene), hadis ve sünnet.",
    "<h2>Hz. Muhammed'in Hayatı ve Örnekliği</h2>" +
    "<p>Hz. Muhammed <b>571</b>'de <b>Mekke</b>'de doğdu. Güvenilirliğiyle tanındığı için <b>\"Muhammedü'l-Emin\"</b> denildi. <b>610</b>'da <b>Hira Mağarası</b>'nda ilk vahyi (<b>Alak</b> suresinin ilk ayetleri) aldı. <b>622</b>'de Mekke'den Medine'ye <b>Hicret</b> etti (Hicri takvimin başlangıcı). <b>632</b>'de Medine'de vefat etti.</p>" +

    "<h3>Hayatında öne çıkan olaylar</h3>" +
    "<p>Ticaretle uğraştı, Hz. Hatice ile evlendi; peygamberlikten önce erdemli davranışlarıyla tanındı. Medine'de İslam toplumunu ve devletini kurdu; <b>Veda Hutbesi</b>'nde insan hakları, eşitlik ve emanet vurgusu yaptı.</p>" +

    "<h3>Kur'an'a göre Hz. Muhammed</h3>" +
    "<p>O bir <b>beşer</b> (insan) ve <b>son peygamber</b>dir; <b>âlemlere rahmet</b> olarak gönderilmiştir. Müminler için <b>en güzel örnek (üsve-i hasene)</b>tir. Görevi vahyi tebliğ etmek, açıklamak ve yaşayarak örnek olmaktır.</p>" +

    "<h3>Hadis ve sünnet — dinin anlaşılmasındaki rolü</h3>" +
    "<p><b>Hadis:</b> Hz. Peygamber'in sözleri. <b>Sünnet:</b> O'nun söz, fiil ve onaylarından oluşan uygulamaları. Kur'an'dan sonra <b>ikinci temel kaynak</b>tır; ayetlerin nasıl uygulanacağını gösterir (örneğin namazın kılınış biçimi sünnetle öğrenilir).</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Hz. Muhammed bir <b>beşerdir</b>; ilahlaştırılmaz.</li>" +
    "<li><b>Hadis</b> söz, <b>sünnet</b> ise söz-fiil-onay bütünüdür; sünnet Kur'an'ı açıklar.</li></ul>");

  /* =============== din-kuran =============== */
  setUnit("din-kuran", "Kur'an'ın Anlaşılması", "Kur'an'ın gönderilişi, toplanması, temel amacı; akıl-vahiy ve temel kavramlar.",
    "<h2>Kur'an-ı Kerim'in Anlaşılması</h2>" +
    "<p>Kur'an, Hz. Muhammed'e <b>610-632</b> yılları arasında <b>yaklaşık 23 yılda</b>, <b>Cebrail (vahiy meleği)</b> aracılığıyla indirilmiştir. İlk inen ayetler <b>Alak</b> suresindendir. Kur'an <b>114 sure</b>den oluşur.</p>" +

    "<h3>Kur'an'ın toplanması ve çoğaltılması</h3>" +
    "<ul>" +
    "<li>Hz. Peygamber döneminde ayetler yazıldı ve ezberlendi (hafızlar).</li>" +
    "<li><b>Hz. Ebû Bekir</b> döneminde ayetler bir araya getirilerek <b>toplandı (cem)</b>.</li>" +
    "<li><b>Hz. Osman</b> döneminde çoğaltılıp (<b>istinsah</b>) çeşitli merkezlere gönderildi; bu nüshalara <b>Mushaf</b> denir.</li>" +
    "</ul>" +

    "<h3>Temel amaç, akıl ve vahiy</h3>" +
    "<p>Kur'an'ın temel amacı insanı <b>doğru yola (hidayete)</b> iletmektir. İslam <b>akla</b> büyük önem verir; vahiy ile akıl birbirini tamamlar. Kur'an insanı <b>düşünmeye, araştırmaya</b> çağırır.</p>" +

    "<h3>Öne çıkan bazı kavramlar</h3>" +
    "<p><b>Tevhid</b> (Allah'ın birliği), <b>nübüvvet</b> (peygamberlik), <b>ahiret</b>, <b>ibadet</b>, <b>adalet</b>, <b>takva</b> (Allah'a karşı sorumluluk bilinci). <b>Tefsir</b> ayetin açıklaması, <b>meal</b> ise anlam çevirisidir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Kur'an'ı <b>toplayan</b> Hz. Ebû Bekir, <b>çoğaltan</b> Hz. Osman'dır — karıştırma.</li>" +
    "<li><b>Tefsir</b> (açıklama) ile <b>meal</b>i (anlam çevirisi) karıştırma.</li></ul>");

  /* =============== din-mezhep =============== */
  setUnit("din-mezhep", "İslam Düşüncesinde Yorumlar (Mezhepler)", "Din ve din anlayışı; mezheplerin doğuş sebepleri; itikadi, ameli ve tasavvufi yorumlar.",
    "<h2>İslam Düşüncesinde Yorumlar (Mezhepler)</h2>" +
    "<p><b>Din</b>, Allah'ın peygamber aracılığıyla bildirdiği <b>evrensel ve değişmez</b> kurallardır. <b>Din anlayışı</b> ise dini anlamaya çalışan <b>insan aklının ürünü</b>dür; bölgesel, değişebilir ve doğrulanabilir/yanlışlanabilirdir. <b>Mezhep</b>, İslam'daki yorum farklılıklarına (yol, yöntem) verilen addır.</p>" +

    "<h3>Yorum farklılıklarının (mezheplerin) sebepleri</h3>" +
    "<p>İnsanın <b>yapısından</b> (akıl, ilgi, yetenek farkı), <b>sosyal, kültürel ve coğrafi</b> sebeplerden kaynaklanır. Peygamber'in vefatından sonra genişleyen coğrafyada yeni sorunlara <b>ictihad</b> ile çözüm arandıkça farklı yorumlar doğdu.</p>" +

    "<h3>Temel kavramlar</h3>" +
    "<p><b>İctihad:</b> Âlimin Kur'an ve sünnetten yeni hüküm çıkarması. <b>Müctehid:</b> İctihad yapan âlim. <b>Kıyas:</b> Hakkında hüküm bulunmayan meseleyi benzerine göre çözme. <b>İcma:</b> Müctehitlerin bir konuda görüş birliği. <b>Fıkıh:</b> İslam hukuku. <b>İtikad:</b> inanç. <b>Tasavvuf:</b> nefsi terbiye edip güzel ahlaka ulaşma yolu.</p>" +

    "<h3>Yorum türleri</h3>" +
    "<ul>" +
    "<li><b>İtikadi (inançla ilgili) yorumlar:</b> Mâtûridîlik, Eş'arîlik (ayrıca Selefîlik).</li>" +
    "<li><b>Ameli-Fıkhi (ibadet/uygulamayla ilgili) yorumlar:</b> Hanefîlik, Şâfiîlik, Mâlikîlik, Hanbelîlik (ve Ca'ferîlik).</li>" +
    "<li><b>Tasavvufi yorumlar:</b> Yesevîlik, Mevlevîlik, Bektaşîlik gibi yollar.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Din</b> değişmez ve ilahidir; <b>din anlayışı/mezhep</b> insan yorumudur, mezhepler dinin önüne geçmemelidir.</li>" +
    "<li>İtikadi mezhepler <b>inançla</b>, fıkhi mezhepler <b>ibadet/uygulamayla</b> ilgilidir.</li></ul>");

  /* =============== din-ahlak =============== */
  setUnit("din-ahlak", "Ahlak ve Değerler", "Din-ahlak ilişkisi; öne çıkan ahlaki değerler ve kaçınılması gereken kötü davranışlar.",
    "<h2>Ahlak ve Değerler</h2>" +
    "<p><b>Ahlak</b>, insanın iyi ve doğru davranışlar edinmesini sağlayan huy ve davranış biçimidir. İslam'da <b>inanç, ibadet ve ahlak</b> birbirini tamamlar; din, ahlaki değerleri <b>temellendirir</b> ve güçlendirir. Hz. Peygamber \"Ben güzel ahlakı tamamlamak için gönderildim\" anlayışıyla en güzel ahlak örneğidir.</p>" +

    "<h3>Öne çıkan ahlaki değerler</h3>" +
    "<p><b>Dürüstlük ve doğruluk (sıdk)</b>, <b>adalet</b>, <b>merhamet</b>, <b>sabır</b>, <b>hoşgörü</b>, <b>saygı ve sevgi</b>, <b>yardımlaşma ve dayanışma</b>, <b>emanete sadakat</b>, <b>cömertlik</b>, <b>tevazu (alçakgönüllülük)</b>, <b>ihsan (işi güzel yapmak)</b> ve <b>takva</b> öne çıkan değerlerdir.</p>" +

    "<h3>Kaçınılması gereken kötü davranışlar</h3>" +
    "<p><b>Yalan</b>, <b>gıybet (dedikodu)</b>, <b>iftira</b>, <b>haset (kıskançlık)</b>, <b>kibir (büyüklenme)</b>, <b>israf</b>, <b>hırsızlık</b>, <b>zulüm</b> ve zararlı alışkanlıklar (<b>içki, kumar, uyuşturucu</b>) İslam ahlakında yasaklanmış ve kınanmıştır.</p>" +

    "<h3>Din ve ahlak ilişkisi</h3>" +
    "<p>Ahlaki davranış hem topluma yarar sağlar hem de ibadet değeri taşır. Ahlakın kaynağı yalnız gelenek değil, aynı zamanda <b>vicdan</b> ve <b>dinî değerler</b>dir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li><b>Gıybet</b> (bir kişinin arkasından hoşlanmayacağı şeyi söylemek) ile <b>iftira</b>yı (olmayan suçu yüklemek) karıştırma.</li>" +
    "<li>İslam'da inanç-ibadet-ahlak ayrılmaz bir bütündür.</li></ul>");

  /* =============== din-medeniyet =============== */
  setUnit("din-medeniyet", "İslam ve Bilim, Kültür ve Medeniyet", "İslam'ın bilime bakışı, İslam bilim insanları, sanat ve medeniyet.",
    "<h2>İslam ve Bilim, Kültür ve Medeniyet</h2>" +
    "<p>İslam <b>ilme ve öğrenmeye</b> büyük önem verir; ilk inen emir <b>\"Oku\"</b> (Alak suresi) olmuştur. Kur'an insanı düşünmeye, evreni araştırmaya çağırır. Bu anlayış, İslam medeniyetinde bilim ve sanatın gelişmesini sağlamıştır.</p>" +

    "<h3>İslam bilim insanları</h3>" +
    "<ul>" +
    "<li><b>İbn Sînâ:</b> Tıp (el-Kânûn). <b>Bîrûnî:</b> Astronomi/coğrafya.</li>" +
    "<li><b>Hârizmî:</b> Matematik (cebir/algoritma). <b>Câbir bin Hayyân:</b> Kimya.</li>" +
    "<li><b>İbn Haldûn:</b> Tarih/sosyoloji. <b>Farabi</b> ve <b>İbn Rüşd:</b> Felsefe.</li>" +
    "</ul>" +

    "<h3>İslam, kültür ve estetik (sanat)</h3>" +
    "<p>İslam sanatında <b>hat (güzel yazı), tezhip, minyatür, ebru</b> ve <b>mimari</b> (cami, minare, medrese) öne çıkar. Estetik anlayış, ölçü, denge ve incelikle kendini gösterir; süslemede daha çok yazı ve bezeme kullanılır.</p>" +

    "<h3>İslam medeniyeti</h3>" +
    "<p>İlim merkezleri (<b>Beytü'l-Hikme</b> gibi), <b>medreseler</b>, kütüphaneler ve hastaneler (darüşşifa) kuruldu. Farklı kültürlerin bilgisi Arapçaya çevrilip geliştirildi; bu birikim daha sonra dünyaya aktarıldı. <b>Din, kültür ve medeniyet</b> birbiriyle iç içedir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>İslam bilime karşı değildir; aksine öğrenmeyi teşvik eder (ilk emir \"Oku\").</li>" +
    "<li>Bilim insanlarını alanlarıyla karıştırma: Hârizmî matematik, İbn Sînâ tıp, İbn Haldûn tarih/sosyoloji.</li></ul>");

})();
