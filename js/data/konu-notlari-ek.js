/* ============================================================
   KONU NOTLARI — EK ZENGİNLEŞTİRME (premium)
   İnce kalan üniteleri özgün, MEB/TYT kapsamında zengin notlarla
   günceller. Mevcut ünite alanları (id, name, branch, pairs, soru
   bağları) korunur; yalnızca content zenginleştirilir. reviewStatus:"draft".
   Kapsam: fiz-hareket (Fizik/Hareket), din-bilgi (Din/Bilgi ve İnanç).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("konu-notlari-ek: content-loader yüklenmedi"); return; }

  function enrich(subjectId, id, content, objectives) {
    var D = (typeof TYT_DATA !== "undefined") ? TYT_DATA : null;
    if (!D) { console.warn("konu-notlari-ek: TYT_DATA yok"); return; }
    var s = (D.subjects || []).filter(function (x) { return x.id === subjectId; })[0];
    if (!s) { console.warn("konu-notlari-ek: ders yok:", subjectId); return; }
    var u = (s.units || []).filter(function (x) { return x.id === id; })[0];
    if (!u) { console.warn("konu-notlari-ek: ünite yok:", id); return; }
    u.content = content;
    if (objectives && (!u.objectives || u.objectives.length === 0)) u.objectives = objectives;
    u.reviewStatus = "draft"; u.originalityStatement = true;
    TYT_CONTENT.upsertUnits(subjectId, [u]);
  }

  /* ---- FİZİK: Hareket (fiz-hareket) ---- */
  enrich("fen", "fiz-hareket",
    "<h2>Hareket</h2>" +
    "<h3>1) Temel Kavramlar</h3>" +
    "<ul>" +
    "<li><b>Konum:</b> Bir cismin seçilen referans (başlangıç) noktasına göre yeri.</li>" +
    "<li><b>Alınan yol:</b> Cismin izlediği patikanın toplam uzunluğu; <b>skalerdir</b>, negatif olmaz.</li>" +
    "<li><b>Yer değiştirme:</b> Başlangıç ile bitiş konumu arasındaki en kısa yönlü uzaklık; <b>vektöreldir</b> (yön + büyüklük).</li>" +
    "</ul>" +
    "<p>Cisim başladığı yere geri dönerse <b>yer değiştirme sıfırdır</b>, ama alınan yol sıfır değildir.</p>" +
    "<h3>2) Sürat ve Hız</h3>" +
    "<ul>" +
    "<li><b>Sürat:</b> Birim zamanda alınan yol; <b>skalerdir</b>.</li>" +
    "<li><b>Hız:</b> Birim zamanda yer değiştirme; <b>vektöreldir</b>.</li>" +
    "</ul>" +
    "<div class=\"formula\">Sürat = Alınan yol / Zaman &nbsp;|&nbsp; Hız = Yer değiştirme / Zaman &nbsp;|&nbsp; birim: m/s</div>" +
    "<p><b>Ortalama sürat</b> toplam yolun toplam zamana oranıdır; <b>anlık hız</b> belirli bir andaki hızdır.</p>" +
    "<h3>3) İvme</h3>" +
    "<p><b>İvme (a):</b> Hızın birim zamandaki değişimi; vektöreldir. Hız artıyorsa ivme hareket yönünde (hızlanan hareket), azalıyorsa ters yöndedir (yavaşlayan hareket).</p>" +
    "<div class=\"formula\">a = (v<sub>son</sub> − v<sub>ilk</sub>) / t &nbsp;|&nbsp; birim: m/s²</div>" +
    "<h3>4) Hareket Türleri</h3>" +
    "<ul>" +
    "<li><b>Düzgün doğrusal hareket:</b> Hız sabit, ivme sıfırdır. Yol: x = v·t.</li>" +
    "<li><b>Düzgün hızlanan/yavaşlayan hareket:</b> İvme sabit, hız düzgün olarak değişir.</li>" +
    "</ul>" +
    "<h3>5) Hareket Grafikleri</h3>" +
    "<ul>" +
    "<li><b>Konum–zaman grafiği:</b> Eğim = hız. Eğim büyükse hız büyüktür; yatay doğru cismin durduğunu gösterir.</li>" +
    "<li><b>Hız–zaman grafiği:</b> Eğim = ivme; grafiğin altında kalan <b>alan = alınan yol</b>.</li>" +
    "</ul>" +
    "<h3>Çözümlü Örnek</h3>" +
    "<p>100 m yolu 5 s'de alan aracın sürati = 100/5 = <b>20 m/s</b>'dir. Hızı 0'dan 20 m/s'ye 4 s'de çıkan aracın ivmesi = (20−0)/4 = <b>5 m/s²</b>'dir.</p>" +
    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Alınan yolu (skaler) yer değiştirmeyle (vektörel) karıştırmak.</li>" +
    "<li>Sürat ile hızı eş anlamlı sanmak.</li>" +
    "<li>Hız–zaman grafiğinde eğimi yol sanmak (eğim ivmedir, <b>alan</b> yoldur).</li>" +
    "</ul>",
    ["Yol ve yer değiştirmeyi ayırır.", "Sürat, hız ve ivmeyi hesaplar.", "Hareket grafiklerini yorumlar."]);

  /* ---- DİN KÜLTÜRÜ: Bilgi ve İnanç (din-bilgi) ---- */
  enrich("sosyal", "din-bilgi",
    "<h2>Bilgi ve İnanç</h2>" +
    "<h3>1) İnsanın İnanma İhtiyacı</h3>" +
    "<p>İnsan; evreni, kendini ve varoluşun anlamını merak eden, aşkın (yüce) bir varlığa yönelme eğilimi taşıyan bir varlıktır. Bu yönelme <b>inanma ihtiyacı</b> olarak adlandırılır ve tarih boyunca her toplumda görülmüştür.</p>" +
    "<h3>2) Bilginin Kaynakları</h3>" +
    "<ul>" +
    "<li><b>Duyular (deney):</b> Gözlem ve deneyimle elde edilen bilgi.</li>" +
    "<li><b>Akıl:</b> Düşünme, çıkarım ve muhakeme yoluyla ulaşılan bilgi; dinî sorumluluğun (mükellefiyet) ön şartıdır.</li>" +
    "<li><b>Vahiy:</b> Allah'ın peygamberler aracılığıyla insanlara bildirdiği bilgi; dinî bilginin temel ve en güvenilir kaynağıdır.</li>" +
    "<li><b>Doğru haber:</b> Peygamber sözü ve mütevatir haber de bilgi kaynağı sayılır.</li>" +
    "</ul>" +
    "<h3>3) İman ve Akıl İlişkisi</h3>" +
    "<p><b>İman</b>, kalben onaylama ve güvenmedir. İslam'a göre akıl imanın hem ön şartı hem de destekçisidir: akıl sağlığı yerinde olmayan kişi dinen sorumlu tutulmaz. İman akılla temellendirilebilir; ancak akıl tek başına imanın yerini tutmaz.</p>" +
    "<h3>4) Din–Bilim İlişkisi</h3>" +
    "<p>Din ve bilim farklı alanları konu edinir: bilim evrenin <b>nasıl</b> işlediğini, din ise varoluşun <b>niçin</b>ini (anlam ve amaç) araştırır. Bu yönüyle birbirini dışlamaz, tamamlayabilirler.</p>" +
    "<h3>5) Temel Kavramlar</h3>" +
    "<ul>" +
    "<li><b>Tevhid:</b> Allah'ın bir ve tek olduğuna inanmak.</li>" +
    "<li><b>Vahiy:</b> Allah'ın mesajını peygambere bildirmesi.</li>" +
    "<li><b>Nübüvvet:</b> Peygamberlik kurumu.</li>" +
    "<li><b>Ahiret:</b> Ölümden sonraki ebedî hayata inanç.</li>" +
    "</ul>" +
    "<h3>Sık Yapılan Hatalar</h3>" +
    "<ul>" +
    "<li>Vahiy ile ilhamı karıştırmak (vahiy yalnız peygamberlere gelir).</li>" +
    "<li>Aklı imanın karşıtı sanmak (İslam'da akıl imanın ön şartıdır).</li>" +
    "</ul>" +
    "<h3>Özet Kartı</h3>" +
    "<ul><li>Bilgi kaynakları: duyu, akıl, vahiy, doğru haber.</li><li>İman = kalben onaylama; akıl = sorumluluğun ön şartı.</li><li>Tevhid = Allah'ın birliği.</li></ul>",
    ["İnsanın inanma ihtiyacını açıklar.", "Bilginin kaynaklarını sıralar.", "İman-akıl ve din-bilim ilişkisini yorumlar."]);
})();
