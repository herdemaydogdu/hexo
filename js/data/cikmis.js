/* ============================================================
   Çıkmış Sınavlar — Telif Güvenli Yönlendirme (doküman 3.11)
   ÖSYM soru metni/PDF'i BURADA barındırılmaz. Yalnızca resmî
   ÖSYM sayfasına bağlantı verilir. 2025 için doğrulanmış derin
   bağlantı; diğer yıllar resmî ÖSYM sitesine yönlendirir.
   ============================================================ */
(function (global) {
  var OSYM_BASE = "https://www.osym.gov.tr/";
  var CIKMIS = {
    note: "Çıkmış sorular ÖSYM'ye aittir. Bu sayfa hiçbir soru metnini, seçeneği veya çözümü yeniden yayımlamaz; yalnızca resmî ÖSYM sayfasına yönlendirir.",
    osymBase: OSYM_BASE,
    years: [
      { year: 2025, tests: "TYT · AYT · YDT temel soru kitapçıkları ve cevap anahtarları",
        url: "https://www.osym.gov.tr/TR,33280/2025-yks-tyt-ayt-ve-ydt-temel-soru-kitciklari-ve-cevap-anahtarlari.html",
        verified: true },
      { year: 2024, tests: "TYT · AYT · YDT (resmî ÖSYM arşivi)", url: OSYM_BASE, verified: false },
      { year: 2023, tests: "TYT · AYT · YDT (resmî ÖSYM arşivi)", url: OSYM_BASE, verified: false },
      { year: 2022, tests: "TYT · AYT · YDT (resmî ÖSYM arşivi)", url: OSYM_BASE, verified: false },
      { year: 2021, tests: "TYT · AYT · YDT (resmî ÖSYM arşivi)", url: OSYM_BASE, verified: false },
      { year: 2020, tests: "TYT · AYT · YDT (resmî ÖSYM arşivi)", url: OSYM_BASE, verified: false }
    ]
  };
  global.CIKMIS = CIKMIS;
  if (typeof module !== "undefined" && module.exports) module.exports = CIKMIS;
})(typeof window !== "undefined" ? window : globalThis);
