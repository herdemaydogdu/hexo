/* ============================================================
   MATEMATİK — Konu Anlatımı Batch 6 (boşluk tamamlama)
   Eski genel "Problemler" ünitesini kapsamlı bir
   "Problem Çözme — Genel Stratejiler" ünitesine dönüştürür.
   SIFIRDAN ÖZGÜN.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-06: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("matematik", [{
    id: "mat-problem", name: "Problem Çözme — Genel Stratejiler", branch: null,
    summary: "Sözel problemleri denkleme çevirme adımları, problem türleri haritası ve genel ipuçları.",
    curriculumRefs: ["2026-YKS Matematik: Problemler (genel yaklaşım)"],
    prerequisites: ["mat-denklem"], estimatedMinutes: 16, difficulty: 2,
    objectives: [
      "Bir sözel problemi adım adım çözüm planına oturtur.",
      "Uygun bilinmeyeni seçip denklem kurar.",
      "Problem türünü tanıyıp doğru yöntemi seçer."
    ],
    content: `
      <h2>Problem Çözme — Genel Stratejiler</h2>
      <p>TYT'de problemler, konu bilgisinden çok <b>okuduğunu denkleme çevirme</b> becerisini ölçer. Aşağıdaki adımlar her tür problemde işe yarar.</p>
      <h3>1) Adım adım yöntem</h3>
      <ol>
        <li><b>Oku ve anla:</b> Soruda <u>ne isteniyor</u>, hangi büyüklükler veriliyor? Altını çiz.</li>
        <li><b>Bilinmeyeni seç:</b> İstenen ya da en çok ilişkili büyüklüğe x de. (Genelde “en küçük” büyüklüğe x demek işi kolaylaştırır.)</li>
        <li><b>İfadeleri kur:</b> Diğer büyüklükleri x cinsinden yaz.</li>
        <li><b>Denklemi yaz:</b> Soruda verilen eşitliği (toplam, fark, kat…) denkleme dök.</li>
        <li><b>Çöz ve kontrol et:</b> x'i bul, sonucu soruya yerleştirip doğrula.</li>
      </ol>
      <h3>2) Hangi tür hangi yöntem?</h3>
      <ul>
        <li><b>Sayı:</b> bilinmeyenle ifade + denklem.</li>
        <li><b>Yaş:</b> yaş farkı sabit; t yıl sonra herkese +t.</li>
        <li><b>Yüzde/Kâr/Faiz:</b> artış-azalış çarpanı; Kâr%=Kâr/Maliyet.</li>
        <li><b>Hareket:</b> Yol=Hız×Zaman; zıt yön hız toplamı, aynı yön farkı.</li>
        <li><b>İşçi-Havuz:</b> hız=1/süre; birlikte → hızlar toplanır.</li>
        <li><b>Karışım:</b> bileşen=oran×toplam.</li>
        <li><b>Kesir:</b> “kalanın” ifadelerinde kalan kesirleri çarp.</li>
      </ul>
      <h3>3) Genel ipuçları</h3>
      <ul>
        <li>Birimleri kontrol et (saat/dakika, TL/kuruş aynı olmalı).</li>
        <li>Tabloyla/şemayla düşün; bilinmeyeni doğru seçmek yarı çözümdür.</li>
        <li>Şıkları kullan: bulduğun değer şıklarda yoksa kurulumu gözden geçir.</li>
      </ul>
      <h3>Çözümlü örnek</h3>
      <p>Bir baba ile oğlunun yaşları toplamı 50'dir. Baba, oğlunun 4 katı yaşındaysa yaşları? Oğul x, baba 4x → x+4x=50 → x=10; oğul 10, baba 40. (Kontrol: 10+40=50 ✓)</p>
      <h3>Özet kartı</h3>
      <ul><li>Oku → bilinmeyen seç → ifade kur → denklem → çöz → kontrol.</li><li>Tür tanı, ilgili formülü uygula.</li></ul>`,
    pairs: [
      { term: "İlk adım", def: "Soruyu anla, ne isteniyor belirle" },
      { term: "Bilinmeyen seçimi", def: "Genelde en küçük büyüklüğe x" },
      { term: "Son adım", def: "Sonucu soruda kontrol et" },
      { term: "Hareket problemi anahtarı", def: "Yol = Hız × Zaman" }
    ],
    reviewStatus: "draft", originalityStatement: true, reviewedAt: null
  }]);
})();
