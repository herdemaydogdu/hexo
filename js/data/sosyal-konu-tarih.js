/* ============================================================
   SOSYAL / TARİH — Kapsamlı konu anlatımı (upsertUnits ile)
   Ünite tam nesne olarak yenilenir (name/branch/pairs korunur, content zenginleşir).
   Tümü özgün (sourceType/originalityStatement:true).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("sosyal-konu-tarih: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("sosyal", [
    {
      id: "tar-bilim", name: "Tarih Bilimi ve Zaman", branch: "tarih",
      summary: "Tarihin tanımı ve özellikleri, kaynak türleri, tarihe yardımcı bilimler, takvim ve çağlar.",
      content:
        "<h2>Tarih Bilimi ve Zaman</h2>" +
        "<h3>Tarih Nedir?</h3>" +
        "<p>Tarih; geçmişteki insan topluluklarının siyasi, sosyal, ekonomik ve kültürel faaliyetlerini <b>yer ve zaman</b> göstererek, <b>neden-sonuç</b> ilişkisi içinde ve <b>belgelere dayanarak</b> inceleyen bilimdir. Amacı geçmişi doğru anlamak ve bugünü açıklamaktır.</p>" +
        "<h3>Tarih Biliminin Özellikleri</h3>" +
        "<ul>" +
        "<li>Olaylar geçmişte yaşandığı ve <b>tekrarlanamadığı</b> için <b>deney ve gözlem</b> yapılamaz.</li>" +
        "<li>Olayın geçtiği <b>yer ve zaman</b> mutlaka belirtilir.</li>" +
        "<li>Olaylar arasında <b>neden-sonuç</b> ilişkisi kurulur.</li>" +
        "<li>Tarihçi <b>objektif (tarafsız)</b> olmalı; olayı kendi döneminin koşulları içinde değerlendirmelidir.</li>" +
        "</ul>" +
        "<h3>Tarihin Kaynakları</h3>" +
        "<p>Türüne göre: <b>Yazılı</b> (ferman, kitabe, gazete, kanun), <b>Sözlü</b> (destan, efsane, atasözü), <b>Kalıntı/Arkeolojik</b> (sikke, mezar, çanak-çömlek). Döneme göre: <b>Birincil (ana) kaynak</b> olayın kendi dönemine aittir; <b>ikincil kaynak</b> daha sonra üretilir.</p>" +
        "<h3>Tarihe Yardımcı Bilimler</h3>" +
        "<ul>" +
        "<li><b>Arkeoloji:</b> kazı yaparak kalıntıları inceler.</li>" +
        "<li><b>Paleografya:</b> eski yazıların okunması.</li>" +
        "<li><b>Epigrafya:</b> kitabe ve yazıtlar.</li>" +
        "<li><b>Nümizmatik:</b> eski paralar (sikkeler).</li>" +
        "<li><b>Kronoloji:</b> zaman ve takvim.</li>" +
        "<li><b>Diplomatik:</b> ferman, berat ve resmî belgeler.</li>" +
        "<li><b>Etnografya:</b> örf, âdet, gelenek ve kültür.</li>" +
        "<li><b>Heraldik:</b> arma ve mühürler.</li>" +
        "<li><b>Filoloji:</b> diller; <b>Antropoloji:</b> insan ırkları.</li>" +
        "</ul>" +
        "<h3>Zaman ve Takvim</h3>" +
        "<p>1 yüzyıl (asır) = <b>100 yıl</b>. Takvimler <b>Güneş yılı</b> (Mısır, Miladi, 12 Hayvanlı Türk, Celali) ya da <b>Ay yılı</b> (Sümer/Babil, Hicri) esaslıdır. <b>Miladi takvim</b> Hz. İsa'nın doğumunu; <b>Hicri takvim</b> Hicret'i (622) başlangıç alır.</p>" +
        "<h3>Çağlar (Tarihî Devirler)</h3>" +
        "<ul>" +
        "<li><b>İlk Çağ:</b> Yazının icadı (≈MÖ 3200) → Kavimler Göçü (375).</li>" +
        "<li><b>Orta Çağ:</b> 375 → İstanbul'un Fethi (1453).</li>" +
        "<li><b>Yeni Çağ:</b> 1453 → Fransız İhtilali (1789).</li>" +
        "<li><b>Yakın Çağ:</b> 1789 → günümüz.</li>" +
        "</ul>",
      objectives: [
        "Tarihin tanımını ve temel özelliklerini açıklar.",
        "Birincil ve ikincil kaynakları ayırt eder.",
        "Tarihe yardımcı bilimleri eşleştirir.",
        "Takvim türlerini ve çağların başlangıç/bitiş olaylarını sıralar."
      ],
      commonMistakes: [
        "Deney-gözlemin tarihte kullanılabileceğini sanmak (kullanılamaz).",
        "Birincil kaynakla ikincil kaynağı karıştırmak.",
        "Hicri takvimi Güneş yılı, Miladi takvimi Ay yılı sanmak (tersi).",
        "Orta Çağ'ı 1453, Yeni Çağ'ı 1789 ile başlatmak (kaydırmak)."
      ],
      pairs: [
        { term: "Yazının icadı", def: "Tarihî devirleri başlattı" },
        { term: "Birincil kaynak", def: "Olayın kendi dönemine ait belge" },
        { term: "Nümizmatik", def: "Eski paraları inceler" },
        { term: "Kronoloji", def: "Zaman ve takvim bilimi" },
        { term: "Hicri takvim", def: "Hicret (622), Ay yılı esaslı" },
        { term: "Kavimler Göçü (375)", def: "Orta Çağ'ı başlattı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: "2026-07-02"
    }
  ]);
})();
