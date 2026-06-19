/* ============================================================
   Kaynak Kataloğu (doküman 3.13 / 3.14)
   "Kaynak güvenli" = serbest kopyalanabilir DEĞİLDİR. Her kaynak
   yalnızca belirtilen amaçla kullanılır; soru/metin kopyalanmaz.
   ============================================================ */
(function (global) {
  var SOURCES = [
    { id: "src-meb-2026", title: "MEB TTKB — 2026 YKS Konu ve Kazanımları",
      publisher: "MEB Talim ve Terbiye Kurulu",
      url: "https://ttkb.meb.gov.tr/",
      license: "Tüm hakları saklı", licenseUrl: "https://ttkb.meb.gov.tr/",
      accessDate: "2026-06-20", allowedUse: "Yalnızca kapsam/kazanım eşleştirmesi; metin çoğaltılmaz.",
      attributionText: "Kapsam referansı: MEB TTKB 2026 YKS konu-kazanımları." },
    { id: "src-osym", title: "ÖSYM — YKS Soru Kitapçıkları ve Cevap Anahtarları",
      publisher: "ÖSYM",
      url: "https://www.osym.gov.tr/",
      license: "Tüm hakları saklı (yazılı izin gerekir)", licenseUrl: "https://www.osym.gov.tr/",
      accessDate: "2026-06-20", allowedUse: "Yalnızca beceri analizi ve resmî sayfaya dış bağlantı; soru metni yayımlanmaz.",
      attributionText: "Çıkmış sorular ÖSYM'ye aittir; bağlantılar resmî kaynağa yönlendirir." },
    { id: "src-ogm", title: "OGM Materyal — YKS Hazırlık",
      publisher: "MEB OGM",
      url: "https://ogmmateryal.eba.gov.tr/",
      license: "Tüm hakları saklı", licenseUrl: "https://ogmmateryal.eba.gov.tr/",
      accessDate: "2026-06-20", allowedUse: "Kapsam ve pedagojik yaklaşım için incelenir; içerik kopyalanmaz.",
      attributionText: "Pedagojik karşılaştırma: OGM Materyal." },
    { id: "src-odsgm", title: "MEB ÖDSGM — Kazanım Testleri",
      publisher: "MEB ÖDSGM",
      url: "https://odsgm.meb.gov.tr/",
      license: "Telif/yayın izni gerekebilir", licenseUrl: "https://odsgm.meb.gov.tr/",
      accessDate: "2026-06-20", allowedUse: "Kazanım/beceri haritası için; soru içeriği yayımlanmaz.",
      attributionText: "Kazanım kontrolü: ÖDSGM kazanım testleri." },
    { id: "src-openstax", title: "OpenStax — Açık Ders Kitapları",
      publisher: "OpenStax (Rice University)",
      url: "https://openstax.org/subjects",
      license: "Çoğunlukla CC BY 4.0 (kitaba göre)", licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      accessDate: "2026-06-20", allowedUse: "Fen/matematik bilgisini doğrulama; uyarlama yapılırsa CC BY atfı verilir.",
      attributionText: "Bilgi doğrulama: OpenStax (CC BY 4.0)." },
    { id: "src-wikimedia", title: "Wikimedia Commons — Görseller",
      publisher: "Wikimedia Foundation",
      url: "https://commons.wikimedia.org/",
      license: "Dosya bazında değişir", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Licensing",
      accessDate: "2026-06-20", allowedUse: "Yalnızca lisansı dosya bazında doğrulanmış görseller; atıf zorunlu olabilir.",
      attributionText: "Görsel: Wikimedia Commons (dosya lisansına göre atıf)." },
    { id: "src-tdk", title: "TDK — Yazım ve Sözlük",
      publisher: "Türk Dil Kurumu",
      url: "https://www.tdk.gov.tr/",
      license: "Tüm hakları saklı", licenseUrl: "https://www.tdk.gov.tr/",
      accessDate: "2026-06-20", allowedUse: "Kuralı doğrulama; tanım/metin kopyalanmaz, açıklama özgün yazılır.",
      attributionText: "Yazım doğrulama: TDK." }
  ];

  global.SOURCES = SOURCES;
  if (typeof module !== "undefined" && module.exports) module.exports = SOURCES;
})(typeof window !== "undefined" ? window : globalThis);
