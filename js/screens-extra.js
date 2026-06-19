/* ============================================================
   Ek Ekranlar (Faz G): Çıkmış Sorular + Kaynaklar/Telif
   app.js'e dokunmadan, route'lara kayıt olur (app.js'ten SONRA yüklenir).
   ============================================================ */
(function () {
  if (typeof routes === "undefined" || typeof SCREEN_ROUTES === "undefined") {
    console.error("screens-extra: app.js router'ı bulunamadı"); return;
  }
  var app = document.getElementById("app");

  function renderCikmis() {
    var C = window.CIKMIS || { note: "", years: [] };
    var cards = C.years.map(function (y) {
      return '<div class="card">' +
        '<h3 style="margin:0 0 6px">' + y.year + ' YKS</h3>' +
        '<p style="min-height:38px">' + y.tests + '</p>' +
        '<a class="btn" href="' + y.url + '" target="_blank" rel="noopener noreferrer">ÖSYM\'de Görüntüle</a>' +
        (y.verified ? '' : '<p style="margin:8px 0 0;font-size:12px;color:var(--muted)">Resmî ÖSYM sitesine yönlendirir.</p>') +
        '</div>';
    }).join("");

    app.innerHTML =
      '<h1 class="page-title">Çıkmış Sorular</h1>' +
      '<p class="page-sub">Yıllara göre resmî ÖSYM kaynakları. Soru metinleri burada yayımlanmaz.</p>' +
      '<div class="tip-banner" style="margin:0 0 18px"><span class="tip-ic">©</span><p>' + C.note + '</p></div>' +
      '<div class="grid grid-3">' + cards + '</div>' +
      '<p class="muted-note" style="margin-top:18px">Telif gereği bu platform yalnızca kendi ürettiği özgün soruları yayımlar; çıkmış sorulara erişim için resmî ÖSYM bağlantıları sunulur. Ayrıntı için <a href="#/kaynak">Kaynaklar ve Telif</a> sayfasına bakın.</p>';
  }

  function renderKaynak() {
    var S = window.SOURCES || [];
    var rows = S.map(function (s) {
      return '<tr>' +
        '<td><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + s.title + '</a><br><span style="color:var(--muted);font-size:12px">' + s.publisher + '</span></td>' +
        '<td>' + s.allowedUse + '</td>' +
        '<td>' + s.license + '</td>' +
        '</tr>';
    }).join("");

    app.innerHTML =
      '<h1 class="page-title">Kaynaklar ve Telif</h1>' +
      '<p class="page-sub">Bu platformdaki tüm konu anlatımı, soru, seçenek ve çözümler özgün üretimdir.</p>' +
      '<div class="panel" style="margin-bottom:16px">' +
        '<p>ÖSYM ve MEB soruları, kitapçıkları ve çözümleri bu sitede <b>kopyalanmaz veya yeniden yayımlanmaz</b>. Resmî kaynaklar yalnızca kapsam ve beceri analizi için incelenmiş; öğrenciye resmî sayfaya <b>dış bağlantı</b> sunulmuştur. Yapay zekâ destekli üretilen içerikler <b>taslak</b> statüsündedir ve alan uzmanı kontrolünden sonra yayın kalitesine ulaşır.</p>' +
      '</div>' +
      '<div class="panel"><h2 class="dash-h2">Kullanılan/İncelenen Kaynaklar</h2>' +
        '<table class="stat-table"><thead><tr><th>Kaynak</th><th>Kullanım amacı</th><th>Lisans</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table>' +
      '</div>' +
      '<p class="muted-note" style="margin-top:14px">Not: "Kaynak güvenli" ifadesi içeriğin serbestçe kopyalanabileceği anlamına gelmez; her kaynak yalnızca belirtilen amaçla kullanılır.</p>';
  }

  // Route'lara kaydet
  routes.cikmis = renderCikmis;
  routes.kaynak = renderKaynak;
  if (SCREEN_ROUTES.indexOf("cikmis") < 0) SCREEN_ROUTES.push("cikmis");
  if (SCREEN_ROUTES.indexOf("kaynak") < 0) SCREEN_ROUTES.push("kaynak");

  // Doğrudan #/cikmis veya #/kaynak ile açıldıysa ilk render'ı düzelt
  try {
    var h = (location.hash || "").replace(/^#\/?/, "");
    if ((h === "cikmis" || h === "kaynak") && typeof doNavigate === "function") doNavigate(h);
  } catch (e) {}
})();
