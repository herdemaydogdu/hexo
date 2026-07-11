/* ============================================================
   SOSYAL / FELSEFE — FELSEFE TARİHİ dönemleri: yeni ünite + içerik.
   İlk Çağ, Orta Çağ, 15-17. yy, 18-19. yy, 20. yy.
   branch: "felsefe". Stub'lardan SONRA yüklenir. Tümü özgündür.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-felsefe-tarih: content-loader yüklenmedi"); return; }

  var mevcut = function (id) {
    try { var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null; if (!D) return null;
      var s = D.subjects.filter(function (x) { return x.id === "sosyal"; })[0];
      if (!s) return null; return s.units.filter(function (u) { return u.id === id; })[0] || null;
    } catch (e) { return null; }
  };

  function setUnit(id, name, summary, content) {
    var u = mevcut(id) || { id: id, branch: "felsefe", prerequisites: ["fel-giris"], objectives: [], difficulty: 2, estimatedMinutes: 22 };
    u.name = name; u.summary = summary; u.branch = "felsefe";
    u.content = content; u.reviewedAt = "2026-07-11"; u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits("sosyal", [u]);
  }

  /* =============== fel-ilkcag =============== */
  setUnit("fel-ilkcag", "İlk Çağ Felsefesi (MÖ 6 – MS 2)", "Felsefenin doğuşu, doğa filozofları, Sofistler, Sokrates, Platon, Aristoteles ve Helenistik dönem.",
    "<h2>İlk Çağ Felsefesi (MÖ 6 – MS 2)</h2>" +
    "<p>Felsefe MÖ 6. yüzyılda <b>Batı Anadolu'daki İyonya (Miletos)</b> kentlerinde doğdu. Bu, evreni doğaüstü öykülerle açıklayan <b>mitostan</b>, akılla ve nedenlerle açıklayan <b>logosa</b> geçiştir.</p>" +

    "<h3>Doğa Filozofları — Arkhe (ilk madde) arayışı</h3>" +
    "<ul>" +
    "<li><b>Thales:</b> arkhe sudur. <b>Anaximandros:</b> sonsuz-belirsiz 'apeiron'. <b>Anaximenes:</b> hava.</li>" +
    "<li><b>Herakleitos:</b> arkhe ateş; her şey sürekli <b>oluş (değişim)</b> içindedir. <b>Parmenides:</b> varlık <b>değişmez ve birdir</b>.</li>" +
    "<li><b>Demokritos:</b> her şey <b>atom</b> ve boşluktan oluşur. <b>Pythagoras:</b> her şeyin özü <b>sayı</b>dır.</li>" +
    "</ul>" +

    "<h3>Sofistler ve Sokrates</h3>" +
    "<p><b>Sofistler</b> gezgin öğretmenlerdi; bilgiyi göreli sayarlardı. <b>Protagoras:</b> \"İnsan her şeyin ölçüsüdür\" (görecelik). <b>Gorgias:</b> bilgi elde edilemez/aktarılamaz. <b>Sokrates</b> ise nesnel doğruyu savundu: \"Erdem bilgidir\", <b>maiotik (doğurtma)</b> yöntemiyle soru sorarak doğruyu buldurdu; \"Kendini bil\" dedi.</p>" +

    "<h3>Platon ve Aristoteles</h3>" +
    "<p><b>Platon:</b> Asıl gerçeklik değişmez <b>idealar</b>dır (mağara benzetmesi); ideal devleti <b>filozof-kral</b> yönetmelidir. <b>Aristoteles:</b> varlığı <b>madde ve form</b> ile açıklar; <b>mantığın</b> (kıyas) kurucusudur; erdemi <b>altın orta</b>, en yüksek iyiyi <b>mutluluk</b> sayar.</p>" +

    "<h3>Helenistik Dönem</h3>" +
    "<p><b>Stoacılık:</b> doğaya ve kadere uyum, duygudan arınma (apatheia). <b>Epikürcülük:</b> ölçülü haz ve iç huzur (ataraksia). <b>Septikler:</b> kesin bilgiden kuşku duyup yargıyı askıya alma.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Herakleitos (oluş) ile Parmenides (kalıcılık) karşıttır; karıştırma.</li>" +
    "<li>Sofistler görecelik, Sokrates nesnel doğru savunur — zıt konumlardadır.</li></ul>");

  /* =============== fel-ortacag =============== */
  setUnit("fel-ortacag", "Orta Çağ Felsefesi (MS 2 – MS 15)", "İnanç-akıl ilişkisi; Patristik, Skolastik ve İslam dünyası felsefesi.",
    "<h2>Orta Çağ Felsefesi (MS 2 – MS 15)</h2>" +
    "<p>Orta Çağ'da felsefenin merkezinde <b>din ve inanç</b> vardır. Temel sorun <b>iman ile aklın ilişkisi</b>dir: İnanç mı önce gelir, akıl mı?</p>" +

    "<h3>Hristiyan felsefesi</h3>" +
    "<ul>" +
    "<li><b>Patristik dönem — Augustinus:</b> \"Anlamak için inanıyorum.\" İman aklın önünde gelir; akıl imanı destekler.</li>" +
    "<li><b>Skolastik dönem — Thomas Aquinas:</b> Akıl ile iman <b>çelişmez, uzlaşır</b>. Tanrı'nın varlığına akli kanıtlar (nedensellik, düzen) getirir.</li>" +
    "<li><b>Tümeller tartışması:</b> Kavramlar (tümeller) gerçekten var mıdır (realizm), yoksa yalnızca ad mıdır (nominalizm)?</li>" +
    "</ul>" +

    "<h3>İslam dünyasında felsefe</h3>" +
    "<ul>" +
    "<li><b>Farabi:</b> Akla büyük önem verdi; \"erdemli şehir\" ve mutluluk öğretisi. 'Muallim-i Sani' (İkinci Öğretmen).</li>" +
    "<li><b>İbn Sina:</b> Varlık felsefesi; <b>zorunlu varlık (Tanrı)</b> ile mumkün varlık ayrımı.</li>" +
    "<li><b>İbn Rüşd:</b> Din ile felsefenin (aklın) uzlaşabileceğini savundu; Aristoteles yorumcusu.</li>" +
    "<li><b>Gazali:</b> Salt akılcı felsefeyi eleştirdi; bilgide sezgi ve tasavvufa yöneldi.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Augustinus imanı öne alır; Aquinas akıl-iman uzlaşısını kurar — ayrımı gözet.</li>" +
    "<li>İbn Rüşd akıl-din uyumunu savunur; Gazali salt felsefeyi eleştirir — karşıt eğilimlerdir.</li></ul>");

  /* =============== fel-1517 =============== */
  setUnit("fel-1517", "15. – 17. Yüzyıl Felsefesi", "Rönesans, hümanizm, bilimsel devrim; Bacon, Descartes ve Makyavel.",
    "<h2>15. – 17. Yüzyıl Felsefesi</h2>" +
    "<p>Bu dönem <b>Rönesans</b> ve <b>bilimsel devrim</b>le öne çıkar. İlgi Tanrı-merkezli düşünceden <b>insan-merkezli (hümanizm)</b> düşünceye kayar; deney ve akıl öne çıkar.</p>" +

    "<h3>Rönesans ve insan</h3>" +
    "<p><b>Hümanizm</b> insanın değerini, aklını ve yaratıcılığını yüceltir. Antik Yunan-Roma kaynaklarına dönülür. Evren tasarımı değişir: <b>yer merkezli (Batlamyus)</b> anlayıştan <b>güneş merkezli (Kopernik)</b> anlayışa geçilir; Galileo ve Newton bilimsel devrimi ileri taşır.</p>" +

    "<h3>Bilgi yöntemi tartışması</h3>" +
    "<ul>" +
    "<li><b>Francis Bacon:</b> Bilginin kaynağı <b>deney ve gözlem</b>dir; <b>tümevarım</b> yöntemini savunur. \"Bilgi güçtür.\"</li>" +
    "<li><b>René Descartes:</b> <b>Yöntemli kuşku</b> ile sağlam bilgiye ulaşır: \"Düşünüyorum, öyleyse varım.\" Bilginin kaynağı <b>akıl</b>dır (rasyonalizm).</li>" +
    "</ul>" +

    "<h3>Siyaset: Makyavel</h3>" +
    "<p><b>Niccolò Machiavelli</b> siyaseti ahlaktan ayırdı; iktidarı korumak için gerektiğinde ahlak dışı araçların kullanılabileceğini (\"amaç araçları meşrulaştırır\" biçiminde özetlenen tutum) savundu.</p>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Bacon deney/tümevarımı (empirizm), Descartes akıl/kuşkuyu (rasyonalizm) temsil eder — karıştırma.</li>" +
    "<li>Güneş merkezli model Kopernik'e aittir; yer merkezli model eski (Batlamyus) anlayıştır.</li></ul>");

  /* =============== fel-1819 =============== */
  setUnit("fel-1819", "18. – 19. Yüzyıl Felsefesi", "Aydınlanma, Kant, Hegel diyalektiği, pozitivizm, faydacılık ve Marx.",
    "<h2>18. – 19. Yüzyıl Felsefesi</h2>" +
    "<p><b>Aydınlanma</b>, aklı ve bilimi öne çıkaran, insanın kendi aklıyla düşünmesini savunan bir çağdır. Kant bunu \"aklını kullanma cesareti göster\" diye özetler.</p>" +

    "<h3>Kant</h3>" +
    "<p><b>Immanuel Kant:</b> Bilgide <b>kritisizm</b> (akıl ve deneyi uzlaştırır); ahlakta <b>ödev ahlakı</b> ve koşulsuz buyruk: \"Öyle davran ki, ilkeleştirdiğin kural evrensel bir yasa olabilsin.\"</p>" +

    "<h3>Alman idealizmi ve diyalektik</h3>" +
    "<p><b>Hegel:</b> Tarih ve düşünce <b>diyalektik</b> ilerler: <b>tez → antitez → sentez</b>. Gerçeklik akıl (tin) olarak kendini açar.</p>" +

    "<h3>Pozitivizm, faydacılık ve Marx</h3>" +
    "<ul>" +
    "<li><b>Auguste Comte (pozitivizm):</b> Bilgi üç aşamadan geçer (teolojik → metafizik → <b>pozitif/bilimsel</b>); yalnızca olgusal bilgi geçerlidir.</li>" +
    "<li><b>Bentham ve Mill (faydacılık):</b> \"En çok sayıya en çok yarar\" ilkesi.</li>" +
    "<li><b>Karl Marx:</b> <b>Diyalektik/tarihsel materyalizm</b>; tarihi belirleyen ekonomik (üretim) ilişkileridir; sınıf çatışması.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Kant'ın kritisizmi ne salt akılcılık ne salt deneyciliktir; ikisini uzlaştırır.</li>" +
    "<li>Hegel'in diyalektiği idealist (tin), Marx'ınki materyalist (ekonomi) temellidir.</li></ul>");

  /* =============== fel-20yy =============== */
  setUnit("fel-20yy", "20. Yüzyıl Felsefesi", "Varoluşçuluk, fenomenoloji, analitik felsefe, pragmatizm ve eleştirel kuram.",
    "<h2>20. Yüzyıl Felsefesi</h2>" +
    "<p>20. yüzyıl felsefesi çok çeşitlidir; insanın varoluşu, dil, bilinç ve bilim üzerine farklı akımlar gelişir.</p>" +

    "<h3>Varoluşçuluk (Egzistansiyalizm)</h3>" +
    "<p><b>Jean-Paul Sartre:</b> \"<b>Varoluş özden önce gelir</b>\"; insan önce vardır, sonra kendini seçimleriyle var eder. İnsan <b>özgür</b> ve seçimlerinden <b>sorumludur</b>. <b>Camus</b> yaşamın anlamını (absürt) sorgular; <b>Heidegger</b> varlık sorusuna döner.</p>" +

    "<h3>Fenomenoloji ve dil felsefesi</h3>" +
    "<ul>" +
    "<li><b>Edmund Husserl (fenomenoloji):</b> \"Şeylerin kendisine dön\"; bilinci ve olguların özünü betimlemeye yönelir.</li>" +
    "<li><b>Analitik felsefe (Wittgenstein, Russell):</b> Felsefe sorunlarının çoğu <b>dilin</b> yanlış kullanımından doğar; dilin çözümlenmesini önemser.</li>" +
    "</ul>" +

    "<h3>Pragmatizm ve eleştirel kuram</h3>" +
    "<ul>" +
    "<li><b>Pragmatizm (James, Dewey):</b> Bir düşüncenin doğruluğu <b>pratikteki yararı ve sonuçlarıyla</b> ölçülür.</li>" +
    "<li><b>Frankfurt Okulu (Adorno, Horkheimer):</b> Toplumu ve kültürü <b>eleştirel</b> biçimde çözümler.</li>" +
    "<li><b>Bilim felsefesi:</b> Popper (yanlışlama) ve Kuhn (paradigma) bu yüzyılda öne çıkar.</li>" +
    "</ul>" +

    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul><li>Sartre'ın \"varoluş özden önce gelir\" sözü insanın önceden belirlenmiş bir özü olmadığını, özgür olduğunu anlatır.</li>" +
    "<li>Fenomenoloji (Husserl) öze yönelir; analitik felsefe dili çözümler — farklı yönelimlerdir.</li></ul>");

})();
