/* ============================================================
   MATEMATİK — Kapsamlı Konu Anlatımı Batch 3 (Problemler)
   Sayı, Yaş, Yüzde-Kâr-Faiz, Hareket, İşçi-Havuz.
   Anlatımlar SIFIRDAN ÖZGÜN. Yalnızca konu anlatımı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-03: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("matematik", [
    {
      id: "mat-sayi", name: "Sayı Problemleri", branch: null,
      summary: "Bilinmeyeni kurma, ardışık sayılar, basamak değeri, çözüm denklemi yazma.",
      curriculumRefs: ["2026-YKS Matematik: Sayı problemleri"],
      prerequisites: ["mat-denklem"], estimatedMinutes: 18, difficulty: 2,
      objectives: ["Sözel ifadeyi denkleme çevirir.", "Ardışık ve basamak problemlerini kurar.", "Kurduğu denklemi çözer."],
      content: `
        <h2>Sayı Problemleri</h2>
        <p>Sözel anlatımı <b>bilinmeyenle</b> (x) ifade edip denklem kurmaya dayanır.</p>
        <h3>Sık kullanılan ifadeler</h3>
        <ul>
          <li>"Bir sayının 3 fazlası" → x + 3; "5 eksiği" → x − 5.</li>
          <li>"2 katının 1 fazlası" → 2x + 1; "yarısı" → x/2.</li>
          <li>Ardışık tam sayılar: x, x+1, x+2 … ; ardışık çiftler: x, x+2, x+4.</li>
        </ul>
        <h3>Basamak değeri</h3>
        <div class="formula">İki basamaklı sayı: 10·(onlar) + (birler). “ab” = 10a + b</div>
        <h3>Çözümlü örnek</h3>
        <p>Bir sayının 3 katının 4 fazlası 25 ise sayı? 3x + 4 = 25 → 3x = 21 → x = 7.</p>
        <p>İki basamaklı bir sayının rakamları toplamı 9, birler basamağı onlar basamağının 2 katıdır. Sayı? a + b = 9, b = 2a → 3a = 9 → a = 3, b = 6; sayı 36.</p>
        <h3>Sık yapılan hata</h3>
        <p>"Fazlası/eksiği" ile "katı"nı karıştırmak; basamak değerini rakam toplamıyla karıştırmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Önce bilinmeyeni seç, sonra cümleyi denkleme çevir.</li><li>“ab” = 10a + b.</li></ul>`,
      pairs: [
        { term: "Bir sayının 3 fazlası", def: "x + 3" },
        { term: "İki basamaklı 'ab'", def: "10a + b" },
        { term: "Ardışık çift sayılar", def: "x, x+2, x+4" },
        { term: "Bir sayının yarısı", def: "x/2" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-yas", name: "Yaş Problemleri", branch: null,
      summary: "Yaş farkı sabit, t yıl sonra herkese +t, yaş toplamları.",
      curriculumRefs: ["2026-YKS Matematik: Yaş problemleri"],
      prerequisites: ["mat-denklem"], estimatedMinutes: 16, difficulty: 2,
      objectives: ["Yaş farkının sabit olduğunu kullanır.", "Geçmiş/gelecek yaşları kurar.", "Yaş toplamı problemlerini çözer."],
      content: `
        <h2>Yaş Problemleri</h2>
        <div class="formula">İki kişinin yaş farkı <b>her zaman sabittir</b> (değişmez).</div>
        <ul>
          <li><b>t yıl sonra:</b> herkesin yaşına +t eklenir.</li>
          <li><b>t yıl önce:</b> herkesin yaşından −t.</li>
          <li>n kişinin yaş toplamı t yıl sonra: (toplam) + n·t artar.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>Baba 40, oğul 10 yaşında. Kaç yıl sonra babanın yaşı oğlunun 2 katı olur? 40 + t = 2(10 + t) → 40 + t = 20 + 2t → t = 20.</p>
        <p>İki kardeşin yaşları farkı 6'dır; toplamları 20 ise yaşları? x + (x+6) = 20 → 2x = 14 → x = 7; yaşlar 7 ve 13.</p>
        <h3>Sık yapılan hata</h3>
        <p>"t yıl sonra" derken yalnız bir kişiye t eklemek; oysa <b>herkese</b> eklenir.</p>
        <h3>Özet kartı</h3>
        <ul><li>Yaş farkı sabit.</li><li>t yıl sonra herkese +t.</li></ul>`,
      pairs: [
        { term: "Yaş farkı", def: "Her zaman sabit kalır" },
        { term: "t yıl sonra", def: "Herkesin yaşına +t" },
        { term: "n kişi, t yıl sonra toplam", def: "Toplam + n·t" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-yuzde", name: "Yüzde, Kâr-Zarar ve Faiz Problemleri", branch: null,
      summary: "Yüzde hesabı, artış/azalış çarpanı, kâr-zarar (maliyet-satış), basit faiz.",
      curriculumRefs: ["2026-YKS Matematik: Yüzde, kâr-zarar, faiz"],
      prerequisites: ["mat-oran"], estimatedMinutes: 22, difficulty: 3,
      objectives: ["Yüzde artış/azalışı çarpanla hesaplar.", "Kâr-zarar oranını bulur.", "Basit faizi hesaplar."],
      content: `
        <h2>Yüzde, Kâr-Zarar ve Faiz</h2>
        <h3>1) Yüzde</h3>
        <div class="formula">Yüzde = (Parça / Bütün) × 100 &nbsp;|&nbsp; %x'i = sayı × x/100</div>
        <ul>
          <li><b>%x artış:</b> sayı × (1 + x/100). %20 zam → ×1,20.</li>
          <li><b>%x azalış:</b> sayı × (1 − x/100). %25 indirim → ×0,75.</li>
          <li>Ardışık değişimde çarpanlar <b>çarpılır</b> (toplanmaz): %20 artıp %20 azalan → ×1,2×0,8 = ×0,96 (net %4 azalış).</li>
        </ul>
        <h3>2) Kâr-Zarar</h3>
        <div class="formula">Kâr = Satış − Maliyet; &nbsp; Kâr % = (Kâr / Maliyet) × 100</div>
        <p>Maliyetin %20 kârıyla satış: Maliyet × 1,20.</p>
        <h3>3) Basit faiz</h3>
        <div class="formula">Faiz = (Anapara × Yıllık oran × Süre) / 100 &nbsp; (süre yıl cinsinden)</div>
        <h3>Çözümlü örnek</h3>
        <p>200 TL'ye %20 zam → 200×1,20 = 240 TL. &nbsp; 1000 TL, yıllık %10 faizle 2 yılda: 1000×10×2/100 = 200 TL faiz.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>Ardışık yüzdeleri toplamak (çarpılmalı).</li><li>Kâr yüzdesini satışa göre alıp maliyete göre almayı unutmak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>%x artış → ×(1+x/100).</li><li>Kâr% = Kâr/Maliyet×100.</li><li>Basit faiz = A·n·t/100.</li></ul>`,
      pairs: [
        { term: "%20 zam çarpanı", def: "×1,20" },
        { term: "%25 indirim çarpanı", def: "×0,75" },
        { term: "Kâr yüzdesi", def: "(Kâr/Maliyet)×100" },
        { term: "Basit faiz", def: "Anapara×oran×süre/100" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-hareket", name: "Hareket (Hız) Problemleri", branch: null,
      summary: "Yol-hız-zaman, aynı/zıt yönde hareket, yetişme ve karşılaşma.",
      curriculumRefs: ["2026-YKS Matematik: Hareket problemleri"],
      prerequisites: ["mat-oran"], estimatedMinutes: 20, difficulty: 3,
      objectives: ["Yol = hız × zaman bağıntısını kullanır.", "Zıt/aynı yön hareketini çözer.", "Yetişme ve karşılaşma sürelerini bulur."],
      content: `
        <h2>Hareket (Hız) Problemleri</h2>
        <div class="formula">Yol = Hız × Zaman &nbsp;|&nbsp; Hız = Yol / Zaman &nbsp;|&nbsp; Zaman = Yol / Hız</div>
        <h3>İki hareketli</h3>
        <ul>
          <li><b>Zıt yönde / karşılıklı:</b> hızlar <b>toplanır</b> (yaklaşma hızı = v₁ + v₂). Aradaki mesafe / (v₁+v₂) = karşılaşma süresi.</li>
          <li><b>Aynı yönde (yetişme):</b> hızlar <b>çıkarılır</b> (v₁ − v₂). Aradaki fark / (v₁−v₂) = yetişme süresi.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>60 km/sa ile 150 km kaç saatte alınır? 150/60 = 2,5 saat.</p>
        <p>Aralarında 200 km olan iki araç karşılıklı, 50 ve 30 km/sa ile yola çıkıyor. Kaç saatte karşılaşırlar? 200/(50+30) = 2,5 saat.</p>
        <h3>Birim dönüşümü</h3>
        <p>1 m/s = 3,6 km/sa. (m/s → km/sa için ×3,6.)</p>
        <h3>Sık yapılan hata</h3>
        <p>Aynı yön ile zıt yönü karıştırmak (toplama/çıkarma yönünü şaşırmak); birim karıştırmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Yol = Hız×Zaman.</li><li>Zıt yön → hız toplamı; aynı yön → hız farkı.</li></ul>`,
      pairs: [
        { term: "Yol", def: "Hız × Zaman" },
        { term: "Zıt yön hareket", def: "Hızlar toplanır" },
        { term: "Aynı yön (yetişme)", def: "Hızlar çıkarılır" },
        { term: "1 m/s", def: "3,6 km/sa" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-isci", name: "İşçi ve Havuz Problemleri", branch: null,
      summary: "Birim zamanda yapılan iş, birlikte çalışma, dolduran-boşaltan musluklar.",
      curriculumRefs: ["2026-YKS Matematik: İşçi-havuz problemleri"],
      prerequisites: ["mat-rasyonel"], estimatedMinutes: 20, difficulty: 3,
      objectives: ["Bir işi birim kabul edip hızları toplar.", "Birlikte çalışma süresini bulur.", "Dolduran-boşaltan musluk problemini çözer."],
      content: `
        <h2>İşçi ve Havuz Problemleri</h2>
        <p>Tüm iş <b>1 birim</b> kabul edilir. Bir işi t sürede bitiren, birim zamanda işin <b>1/t</b>'sini yapar.</p>
        <div class="formula">Birlikte çalışma: 1/t<sub>ortak</sub> = 1/a + 1/b &nbsp;⇒&nbsp; t<sub>ortak</sub> = (a·b)/(a+b)</div>
        <h3>Havuz-musluk</h3>
        <ul>
          <li>Dolduran musluk işe <b>+</b>, boşaltan <b>−</b> katkı yapar.</li>
          <li>Net hız = (dolduranların toplamı) − (boşaltanların toplamı).</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>Bir işi A 6 günde, B 3 günde bitiriyor. Birlikte? t = (6·3)/(6+3) = 18/9 = 2 gün.</p>
        <p>Bir havuzu A musluğu 4 saatte doldurur, B musluğu 6 saatte boşaltır. İkisi açıkken: net = 1/4 − 1/6 = 1/12 → 12 saatte dolar.</p>
        <h3>Sık yapılan hata</h3>
        <p>Süreleri doğrudan toplamak (yanlış). Süreler değil, <b>birim zamandaki işler (1/t)</b> toplanır.</p>
        <h3>Özet kartı</h3>
        <ul><li>Hız = 1/süre; birlikte → hızlar toplanır.</li><li>t<sub>ortak</sub> = a·b/(a+b).</li><li>Boşaltan musluk negatif.</li></ul>`,
      pairs: [
        { term: "t sürede biten işin hızı", def: "1/t (birim/zaman)" },
        { term: "Birlikte süre", def: "a·b/(a+b)" },
        { term: "Boşaltan musluk", def: "Net hıza negatif katkı" },
        { term: "Tüm iş", def: "1 birim kabul edilir" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
