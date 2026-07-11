/* ============================================================
   SOSYAL / FELSEFE — DERİN konu anlatımı + yeni ünite tanımları.
   Felsefenin 7 branşı: Bilgi, Varlık, Bilim, Ahlak, Sanat, Din, Siyaset.
   fel-bilgi zaten sosyal-pilot.js'te tanımlı (content'i korunur).
   Bu dosya 6 yeni branş ünitesini (varlik/bilim/ahlak/sanat/din/siyaset)
   tanımlar ve dolu içerik verir. Stub'lardan SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-felsefe: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  // Yeni ünite tanımı (yoksa oluşturur, varsa günceller); branch: "felsefe"
  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "felsefe", prerequisites: ["fel-giris"], objectives: [], difficulty: 2, estimatedMinutes: 20 };
    u.name = name; u.summary = summary; u.branch = "felsefe";
    u.content = content; u.reviewedAt = "2026-07-11"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  /* =============== fel-varlik =============== */
  setUnit("fel-varlik", "Varlık Felsefesi", "Ontoloji ve metafizik; varlığın var olup olmadığı, niceliği ve niteliği.",
    "<h2>Varlık Felsefesi (Ontoloji)</h2>" +
    "<p><b>Ontoloji</b> varlığı <b>var olması bakımından</b> ele alır; \"Varlık var mıdır, varsa nedir?\" sorusunu sorar. Varlığı bir bütün olarak ve en genel biçimde inceleyen alana <b>metafizik</b> denir.</p>" +

    "<h3>Varlık var mıdır?</h3>" +
    "<ul>" +
    "<li><b>Nihilizm (hiççilik):</b> Hiçbir şey yoktur; varlık yoktur. Sofist <b>Gorgias</b> \"Hiçbir şey yoktur; olsaydı bilinemezdi; bilinseydi aktarılamazdı\" der.</li>" +
    "<li><b>Realizm:</b> Varlık, bizden bağımsız olarak gerçekten vardır.</li>" +
    "</ul>" +

    "<h3>Varlığın niceliği (kaç tanedir?)</h3>" +
    "<ul>" +
    "<li><b>Monizm (tekçilik):</b> Varlığın temeli tek bir ilkedir (yalnız madde ya da yalnız ruh).</li>" +
    "<li><b>Düalizm (ikicilik):</b> Varlık iki ana ilkeden oluşur (madde ve ruh) — Descartes.</li>" +
    "<li><b>Plüralizm (çokçuluk):</b> Varlığın temeli birden çok ilkedir (Empedokles: toprak, su, hava, ateş).</li>" +
    "</ul>" +

    "<h3>Varlığın niteliği (özü nedir?)</h3>" +
    "<ul>" +
    "<li><b>İdealizm:</b> Varlığın özü <b>düşünce/ruh/idea</b>dır. <b>Platon</b>'a göre asıl gerçeklik değişmeyen <b>idealar</b>dır; nesneler onların gölgesidir.</li>" +
    "<li><b>Materyalizm:</b> Varlığın özü <b>madde</b>dir; her şey maddeden türer (Demokritos: atomlar).</li>" +
    "</ul>" +

    "<h3>Oluş mu, kalıcılık mı?</h3>" +
    "<p><b>Herakleitos:</b> \"Aynı nehirde iki kez yıkanılmaz\"; her şey sürekli <b>oluş (değişim)</b> içindedir; arkhe ateştir. <b>Parmenides:</b> Varlık <b>değişmez, kalıcı ve birdir</b>; değişim bir yanılsamadır. <b>Aristoteles</b> varlığı <b>madde (potansiyel) ve form (öz)</b> birlikteliğiyle açıklar.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Ontoloji varlığı \"var olması\" bakımından, metafizik ise \"bütün olarak\" ele alır; ikisini karıştırma.</li>" +
    "<li><b>İdealizm</b> (öz = düşünce) ile <b>düalizm</b> (iki ilke) farklı sorulara yanıttır: nitelik vs nicelik.</li>" +
    "</ul>");

  /* =============== fel-bilim =============== */
  setUnit("fel-bilim", "Bilim Felsefesi", "Bilimin doğası; ürün ve etkinlik olarak bilim, doğrulama ve yanlışlama.",
    "<h2>Bilim Felsefesi</h2>" +
    "<p>Bilim felsefesi bilimi bir <b>inceleme konusu</b> yapar: Bilimsel bilgi nasıl üretilir, nasıl doğrulanır, bilimi bilim-dışından ne ayırır?</p>" +

    "<h3>Bilimsel bilginin özellikleri</h3>" +
    "<p>Bilimsel bilgi <b>olgusal</b> (gözlenebilir olguya dayanır), <b>nesnel</b>, <b>eleştirel</b>, <b>sistemli</b>, <b>evrensel</b> ve <b>birikimli</b>dir.</p>" +

    "<h3>Ürün olarak bilim</h3>" +
    "<p><b>Mantıkçı pozitivizm (Viyana Çevresi):</b> Bilim, ulaştığı önermelerin bütünü yani bir <b>üründür</b>. Bir önermenin anlamlı-bilimsel olması için <b>doğrulanabilir</b> olması gerekir (<b>doğrulama ilkesi</b>). Bilgi <b>tümevarımla</b> (gözlemlerden genellemeye) birikir.</p>" +

    "<h3>Etkinlik olarak bilim</h3>" +
    "<ul>" +
    "<li><b>Karl Popper:</b> Bir teori doğrulanmasıyla değil, <b>yanlışlanabilir</b> olmasıyla bilimseldir (<b>yanlışlama ilkesi</b>). Doğrulanamayan değil, çürütülemeyen teoriler sözde-bilimdir.</li>" +
    "<li><b>Thomas Kuhn:</b> Bilim <b>paradigmalar</b> içinde ilerler. <b>Normal bilim</b> döneminde bilim insanları ortak paradigmayla çalışır; biriken sorunlar bunalıma ve <b>paradigma değişimine (bilimsel devrim)</b> yol açar. Bilim toplumsal bir <b>etkinliktir</b>.</li>" +
    "</ul>" +

    "<h3>Temel kavramlar</h3>" +
    "<p><b>Hipotez</b> sınanabilir bir öndeyidir; sınanıp desteklenince <b>teori</b>, çok sağlam ilişkiler <b>yasa</b> olur. <b>Tümevarım</b>: tekil gözlemlerden genele; <b>tümdengelim</b>: genelden tekile.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Doğrulama</b> = pozitivizm/Viyana Çevresi; <b>yanlışlama</b> = Popper; <b>paradigma</b> = Kuhn. Bu eşleştirmeleri karıştırma.</li>" +
    "<li>Teori \"ispatlanmamış tahmin\" değildir; sınanmış, açıklayıcı bir yapıdır.</li>" +
    "</ul>");

  /* =============== fel-ahlak =============== */
  setUnit("fel-ahlak", "Ahlak Felsefesi", "Etik; iyi-kötü, özgürlük-determinizm, evrensel ahlak yasası tartışmaları.",
    "<h2>Ahlak Felsefesi (Etik)</h2>" +
    "<p><b>Etik</b>, ahlaki eylemi ve \"iyi, kötü, erdem, ödev, özgürlük, sorumluluk\" gibi kavramları felsefi olarak sorgular. <b>Ahlak</b> belli bir toplumun kurallarıyken, <b>etik</b> bu kuralları temellendiren düşünmedir.</p>" +

    "<h3>İnsan özgür müdür?</h3>" +
    "<ul>" +
    "<li><b>Determinizm:</b> Her eylem önceki nedenlerce belirlenmiştir; özgürlük yoktur.</li>" +
    "<li><b>İndeterminizm:</b> İnsan eylemleri nedensellikle tümüyle belirlenmez.</li>" +
    "<li><b>Özgürlükçülük (otonomizm):</b> Ahlaki sorumluluk için özgür irade şarttır; insan seçebilir.</li>" +
    "</ul>" +

    "<h3>Evrensel ahlak yasası VAR diyenler</h3>" +
    "<ul>" +
    "<li><b>Sokrates:</b> Erdem bilgidir; bilen kişi kötülük yapmaz.</li>" +
    "<li><b>Aristoteles:</b> En yüksek iyi <b>mutluluk (eudaimonia)</b>tır; erdem iki aşırı ucun ortasıdır (<b>altın orta</b>).</li>" +
    "<li><b>Kant:</b> Ahlakın ölçütü <b>ödev</b>dir. \"Öyle davran ki, davranışının ilkesi evrensel bir yasa olabilsin.\" İyi niyet ve ödeve uygunluk esastır.</li>" +
    "<li><b>Faydacılık (Bentham, Mill):</b> \"En çok sayıda insana en çok mutluluk\" veren eylem iyidir.</li>" +
    "</ul>" +

    "<h3>Evrensel ahlak yasası YOK diyenler</h3>" +
    "<p><b>Hazcılık (hedonizm):</b> İyi olan hazdır. <b>Egoizm:</b> İyi olan bireyin kendi çıkarıdır. <b>Nihilizm:</b> Nesnel ahlak değerleri yoktur. Sofistlerin <b>görececiliği</b> (Protagoras): ahlak kişiden kişiye/toplumdan topluma değişir.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Kant</b> sonucu değil <b>niyeti/ödevi</b>; <b>faydacılık</b> ise <b>sonucu (yararı)</b> ölçüt alır — ters kurma.</li>" +
    "<li>Determinizm özgürlüğü, indeterminizm belirlenimi reddeder; \"özgürlükçülük\" ise sorumluluğu özgürlüğe bağlar.</li>" +
    "</ul>");

  /* =============== fel-sanat =============== */
  setUnit("fel-sanat", "Sanat Felsefesi", "Estetik; güzel nedir, sanat taklit mi yaratma mı, estetik yargının nesnelliği.",
    "<h2>Sanat Felsefesi (Estetik)</h2>" +
    "<p><b>Estetik</b> güzeli ve sanattaki güzeli konu edinir. \"Güzel nedir? Sanat nedir? Estetik yargı öznel mi nesnel mi?\" sorularını sorar.</p>" +

    "<h3>Sanat nedir? — Üç temel görüş</h3>" +
    "<ul>" +
    "<li><b>Taklit (mimesis) olarak sanat:</b> Sanat doğanın/gerçekliğin taklididir. <b>Platon</b>'a göre sanat, idealardan pay alan nesnelerin taklidi olduğu için \"gölgenin gölgesi\"dir. <b>Aristoteles</b> taklidi olumlar: sanat insanı arındırır (<b>katharsis</b>).</li>" +
    "<li><b>Yaratma olarak sanat:</b> Sanat, sanatçının özgün <b>yaratımıdır</b> (Croce: sezgi ve ifade). Eser biriciktir.</li>" +
    "<li><b>Oyun olarak sanat:</b> Sanat, çıkar gözetmeyen özgür bir <b>oyundur</b> (Schiller, Kant).</li>" +
    "</ul>" +

    "<h3>Güzellik öznel mi nesnel mi?</h3>" +
    "<ul>" +
    "<li><b>Öznelci görüş:</b> Güzellik nesnede değil, ona bakanın duygusundadır; \"güzel, hoşuma gidendir\".</li>" +
    "<li><b>Nesnelci görüş:</b> Güzellik nesnenin kendisinde bulunan bir özelliktir (oran, ölçü, uyum).</li>" +
    "</ul>" +

    "<h3>Temel kavramlar</h3>" +
    "<p><b>Estetik yargı</b> beğeniye dayanır (\"Bu güzeldir\") ve <b>mantıksal/bilimsel yargıdan</b> ayrıdır. <b>Sanat</b> özgünlük ve biricikliğiyle, <b>zanaat</b> ise yarar ve çoğaltılabilirliğiyle ayrılır. <b>Yüce (sublime)</b>, güzelden farklı olarak hayranlıkla korkuyu birlikte uyandırır.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Sanat</b> (özgün, biricik, estetik amaçlı) ile <b>zanaat</b>ı (yararlı, çoğaltılabilir) karıştırma.</li>" +
    "<li>Platon sanata mesafeli, Aristoteles ise taklidi <b>olumlar</b> (katharsis) — ters hatırlama.</li>" +
    "</ul>");

  /* =============== fel-din =============== */
  setUnit("fel-din", "Din Felsefesi", "Tanrı, evren ve inanç üzerine akıl yürütme; teizm, deizm, panteizm, ateizm, agnostisizm.",
    "<h2>Din Felsefesi</h2>" +
    "<p>Din felsefesi; <b>Tanrı, evrenin yaratılışı, ruhun ölümsüzlüğü, vahiy, iman-akıl ilişkisi</b> gibi konuları <b>akıl yoluyla, tarafsızca</b> ele alır. <b>Teoloji (ilahiyat)</b> belli bir dinin doğruluğunu esas alıp onu temellendirirken, <b>din felsefesi</b> hiçbir dini önceden doğru kabul etmeden sorgular.</p>" +

    "<h3>Tanrı'nın varlığı üzerine tutumlar</h3>" +
    "<ul>" +
    "<li><b>Teizm:</b> Evreni yaratan ve ona sürekli müdahale eden bir Tanrı vardır.</li>" +
    "<li><b>Deizm:</b> Tanrı evreni yaratmıştır ama sonrasına karışmaz; akıl ve doğa yeterlidir.</li>" +
    "<li><b>Panteizm:</b> Tanrı ile evren özdeştir; \"her şey Tanrı'dır\" (Spinoza).</li>" +
    "<li><b>Ateizm:</b> Tanrı'nın var olmadığını savunur.</li>" +
    "<li><b>Agnostisizm (bilinemezcilik):</b> Tanrı'nın var olup olmadığı bilinemez.</li>" +
    "</ul>" +

    "<h3>Tanrı'nın varlığına dair kanıtlar</h3>" +
    "<ul>" +
    "<li><b>Ontolojik kanıt:</b> En yetkin varlık kavramı zorunlu olarak var olmayı gerektirir (Anselmus).</li>" +
    "<li><b>Kozmolojik kanıt:</b> Her şeyin bir nedeni vardır; nedenler zinciri <b>ilk neden</b>e (Tanrı) dayanır.</li>" +
    "<li><b>Teleolojik (düzen/erek) kanıtı:</b> Evrendeki düzen ve amaçlılık bir düzenleyiciyi gösterir.</li>" +
    "</ul>" +

    "<h3>İman ve akıl</h3>" +
    "<p>Kimi düşünürler imanı akılla temellendirmeye çalışır (uzlaştırıcı tutum), kimi imanı aklın ötesinde bir <b>güven/teslimiyet</b> olarak görür.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li><b>Deizm</b> (yaratıp karışmaz) ile <b>teizm</b>i (yaratır ve müdahale eder) karıştırma.</li>" +
    "<li><b>Ateizm</b> \"yoktur\" der; <b>agnostisizm</b> \"bilinemez\" der — aynı şey değildir.</li>" +
    "<li>Din felsefesi bir dini savunmaz; <b>teoloji</b> savunur/temellendirir.</li>" +
    "</ul>");

  /* =============== fel-siyaset =============== */
  setUnit("fel-siyaset", "Siyaset Felsefesi", "İktidar, meşruiyet, adalet ve devlet; toplum sözleşmesi ve ideal düzen arayışları.",
    "<h2>Siyaset Felsefesi</h2>" +
    "<p>Siyaset felsefesi; <b>iktidar, egemenlik, meşruiyet, adalet, hak, özgürlük, eşitlik</b> ve <b>birey-devlet ilişkisi</b> gibi kavramları sorgular. \"En iyi yönetim nedir? İktidar neye dayanmalı? Devlet neden vardır?\" sorularını sorar.</p>" +

    "<h3>Temel kavramlar</h3>" +
    "<ul>" +
    "<li><b>İktidar:</b> Toplumu yönetme ve karar aldırabilme gücü. <b>Meşruiyet:</b> İktidarın haklı ve kabul edilebilir sayılması.</li>" +
    "<li><b>Egemenlik:</b> En üstün karar yetkisi. <b>Adalet:</b> Herkese hakkını verme ilkesi.</li>" +
    "<li><b>Birey-devlet:</b> Bireyci görüş bireyin hak ve özgürlüğünü, toplumcu görüş toplumun bütününü önceler.</li>" +
    "</ul>" +

    "<h3>Devletin kökeni: Toplum sözleşmesi</h3>" +
    "<ul>" +
    "<li><b>Thomas Hobbes:</b> Doğa durumunda \"insan insanın kurdudur\"; güvenlik için insanlar haklarını mutlak bir egemene (devlete) devreder.</li>" +
    "<li><b>John Locke:</b> Doğa durumunda insanın <b>doğal hakları</b> (yaşam, özgürlük, mülkiyet) vardır; devlet bu hakları korumak için kurulur, koruyamazsa direnme hakkı doğar.</li>" +
    "<li><b>Jean-Jacques Rousseau:</b> Egemenlik halkın <b>genel iradesine</b> dayanır; meşru düzen toplum sözleşmesiyle kurulur.</li>" +
    "</ul>" +

    "<h3>İdeal düzen arayışları (ütopyalar)</h3>" +
    "<p><b>Platon (Devlet):</b> Adil düzeni <b>filozof-kral</b> yönetmelidir; herkes yeteneğine uygun işi yapar. <b>Farabi (Erdemli Şehir):</b> Toplum, erdemli bir başkanın yönetiminde mutluluğa ulaşır. <b>Thomas More (Ütopya):</b> Eşitlikçi, kusursuz \"olmayan yer\" tasarımı.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Hobbes mutlak egemeni, Locke doğal hakları/sınırlı devleti, Rousseau genel iradeyi vurgular — üçünü karıştırma.</li>" +
    "<li><b>İktidar</b> (fiili güç) ile <b>meşruiyet</b>i (haklılık/kabul) ayır.</li>" +
    "</ul>");

})();
