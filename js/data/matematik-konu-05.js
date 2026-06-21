/* ============================================================
   MATEMATİK — Kapsamlı Konu Anlatımı Batch 5 (son grup)
   (Fonksiyonlar, Polinomlar, Permütasyon-Kombinasyon-Olasılık,
    Veri-Grafik-İstatistik)
   Anlatımlar SIFIRDAN ÖZGÜN. Yalnızca konu anlatımı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-05: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("matematik", [
    {
      id: "mat-fonksiyon", name: "Fonksiyonlar", branch: null,
      summary: "Fonksiyon kavramı, tanım-değer kümesi, f(x) değeri, bire bir/örten, bileşke ve ters.",
      curriculumRefs: ["2026-YKS Matematik: Fonksiyonun temel kavramları"],
      prerequisites: ["mat-denklem"], estimatedMinutes: 22, difficulty: 3,
      objectives: ["Fonksiyon olma koşulunu bilir.", "f(x) değerini hesaplar.", "Bileşke ve ters fonksiyonu kullanır."],
      content: `
        <h2>Fonksiyonlar</h2>
        <p>Tanım kümesindeki <b>her elemanı</b>, değer kümesinde <b>bir tek</b> elemana eşleyen bağıntıya fonksiyon denir. (Her x'in tek bir karşılığı olur.)</p>
        <h3>Temel kavramlar</h3>
        <ul>
          <li><b>Tanım kümesi:</b> x değerlerinin kümesi. <b>Değer (görüntü) kümesi:</b> f(x) çıktıları.</li>
          <li><b>Fonksiyon değeri:</b> f(x) ifadesinde x yerine sayı konur. f(x)=2x+1 → f(3)=7.</li>
        </ul>
        <h3>Türler</h3>
        <ul>
          <li><b>Bire bir:</b> farklı x'ler farklı f(x) verir.</li>
          <li><b>Örten:</b> değer kümesindeki her eleman bir görüntüdür.</li>
          <li><b>Sabit fonksiyon:</b> her x için aynı değer; <b>birim:</b> f(x)=x.</li>
        </ul>
        <h3>Bileşke ve ters</h3>
        <div class="formula">(f∘g)(x) = f(g(x)) &nbsp;|&nbsp; Ters fonksiyon f⁻¹: y = f(x) ↔ x = f⁻¹(y)</div>
        <p>Doğrusal f(x)=ax+b'nin tersi: f⁻¹(x) = (x − b)/a.</p>
        <h3>Çözümlü örnek</h3>
        <p>f(x)=3x−2 için f(4)=10. &nbsp; g(x)=x+1 ise (f∘g)(2)=f(3)=7. &nbsp; f⁻¹(x)=(x+2)/3.</p>
        <h3>Sık yapılan hata</h3>
        <p>(f∘g)(x) ile (g∘f)(x)'i aynı sanmak (genelde eşit değildir).</p>
        <h3>Özet kartı</h3>
        <ul><li>Her x → tek f(x).</li><li>(f∘g)(x)=f(g(x)).</li><li>f(x)=ax+b → f⁻¹(x)=(x−b)/a.</li></ul>`,
      pairs: [
        { term: "Fonksiyon koşulu", def: "Her x'in tek görüntüsü olur" },
        { term: "(f∘g)(x)", def: "f(g(x))" },
        { term: "f(x)=ax+b tersi", def: "(x−b)/a" },
        { term: "Birim fonksiyon", def: "f(x)=x" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-polinom", name: "Polinomlar", branch: null,
      summary: "Polinom kavramı, derece, polinomlarda işlemler, çarpanlara ayırma ve bölme.",
      curriculumRefs: ["2026-YKS Matematik: Polinomlar (temel düzey)"],
      prerequisites: ["mat-carpan"], estimatedMinutes: 20, difficulty: 3,
      objectives: ["Polinomun derecesini ve sabit terimini bulur.", "Polinomlarda dört işlemi yapar.", "P(x) değerini ve kalan teoremini kullanır."],
      content: `
        <h2>Polinomlar</h2>
        <p>P(x) = aₙxⁿ + … + a₁x + a₀ biçimindeki, üsleri <b>doğal sayı</b> olan ifadelerdir.</p>
        <h3>Temel kavramlar</h3>
        <ul>
          <li><b>Derece:</b> en yüksek üstür. <b>Baş katsayı:</b> en yüksek dereceli terimin katsayısı.</li>
          <li><b>Sabit terim:</b> P(0). <b>Katsayılar toplamı:</b> P(1).</li>
        </ul>
        <h3>İşlemler</h3>
        <p>Toplama/çıkarmada benzer terimler; çarpmada her terim her terimle çarpılır; derece çarpımda toplanır.</p>
        <h3>Kalan teoremi</h3>
        <div class="formula">P(x)'in (x − a)'ya bölümünden kalan = P(a). &nbsp; (x − a) bölen ise ve P(a)=0 ise a köktür.</div>
        <h3>Çözümlü örnek</h3>
        <p>P(x)=2x³−x+5 için derece 3, sabit terim P(0)=5, katsayılar toplamı P(1)=2−1+5=6. &nbsp; P(x)'in (x−2)'ye bölümünden kalan P(2)=16−2+5=19.</p>
        <h3>Sık yapılan hata</h3>
        <p>Katsayılar toplamını P(0) sanmak; doğrusu P(1)'dir (sabit terim P(0)'dır).</p>
        <h3>Özet kartı</h3>
        <ul><li>Sabit terim = P(0); katsayılar toplamı = P(1).</li><li>(x−a)'ya bölümden kalan = P(a).</li></ul>`,
      pairs: [
        { term: "Polinomun derecesi", def: "En yüksek üs" },
        { term: "Sabit terim", def: "P(0)" },
        { term: "Katsayılar toplamı", def: "P(1)" },
        { term: "Kalan teoremi", def: "(x−a)'ya bölümden kalan = P(a)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-olasilik", name: "Permütasyon, Kombinasyon ve Olasılık", branch: null,
      summary: "Sayma (çarpma kuralı), permütasyon, kombinasyon ve olasılık temel kavramları.",
      curriculumRefs: ["2026-YKS Matematik: Permütasyon, kombinasyon, olasılık"],
      prerequisites: ["mat-temel"], estimatedMinutes: 24, difficulty: 3,
      objectives: ["Çarpma/toplama sayma kuralını uygular.", "Permütasyon ve kombinasyonu ayırır.", "Basit olasılığı hesaplar."],
      content: `
        <h2>Permütasyon, Kombinasyon ve Olasılık</h2>
        <h3>1) Sayma kuralı</h3>
        <p>Bir iş m, ardından bağımsız bir iş n yolla yapılıyorsa toplam m·n yol vardır (<b>çarpma kuralı</b>).</p>
        <h3>2) Permütasyon (sıralama önemli)</h3>
        <div class="formula">P(n, r) = n! / (n − r)! &nbsp; (n elemandan r'sinin sıralı dizilişi)</div>
        <h3>3) Kombinasyon (sıralama önemsiz)</h3>
        <div class="formula">C(n, r) = n! / [r!·(n − r)!] &nbsp; (n elemandan r'sinin seçimi)</div>
        <p>“Sıra/diziliş” varsa permütasyon, yalnız “seçim/grup” varsa kombinasyon.</p>
        <h3>4) Olasılık</h3>
        <div class="formula">P(A) = istenen durum sayısı / tüm durum sayısı &nbsp; (0 ≤ P(A) ≤ 1)</div>
        <h3>Çözümlü örnek</h3>
        <p>5 kişiden 3'ü sıralı dizilecek: P(5,3)=5·4·3=60. &nbsp; 5 kişiden 3'ü seçilecek: C(5,3)=10. &nbsp; Bir zarda çift gelme olasılığı 3/6=1/2.</p>
        <h3>Sık yapılan hata</h3>
        <p>Sıralama önemliyken kombinasyon, önemsizken permütasyon kullanmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Sıra önemli → permütasyon; seçim → kombinasyon.</li><li>P(A)=istenen/tüm.</li></ul>`,
      pairs: [
        { term: "Çarpma kuralı", def: "m·n (bağımsız işler)" },
        { term: "Permütasyon P(n,r)", def: "n!/(n−r)! (sıralı)" },
        { term: "Kombinasyon C(n,r)", def: "n!/[r!(n−r)!] (seçim)" },
        { term: "Olasılık", def: "istenen / tüm durumlar" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-istatistik", name: "Veri, Grafik ve Temel İstatistik", branch: null,
      summary: "Aritmetik ortalama, ortanca, mod, açıklık; tablo ve grafik okuma.",
      curriculumRefs: ["2026-YKS Matematik: Veri, grafik ve temel istatistik"],
      prerequisites: ["mat-temel"], estimatedMinutes: 18, difficulty: 2,
      objectives: ["Ortalama, ortanca, mod ve açıklığı hesaplar.", "Tablo ve grafiklerden veri okur.", "Merkezî eğilim ölçülerini yorumlar."],
      content: `
        <h2>Veri, Grafik ve Temel İstatistik</h2>
        <h3>Merkezî eğilim ölçüleri</h3>
        <ul>
          <li><b>Aritmetik ortalama:</b> verilerin toplamı / veri sayısı.</li>
          <li><b>Ortanca (medyan):</b> sıralı verinin ortasındaki değer (çift sayıda veride ortadaki ikisinin ortalaması).</li>
          <li><b>Mod (tepe değer):</b> en sık tekrarlanan değer.</li>
          <li><b>Açıklık (ranj):</b> en büyük − en küçük.</li>
        </ul>
        <h3>Grafik türleri</h3>
        <p>Sütun, çizgi, daire (yüzde dağılımı) ve tablo. Daire grafiğinde her dilim 360°·(oran) ile bulunur.</p>
        <h3>Çözümlü örnek</h3>
        <p>4, 6, 6, 10 verisinde: ortalama = 26/4 = 6,5; ortanca = (6+6)/2 = 6; mod = 6; açıklık = 10−4 = 6.</p>
        <h3>Sık yapılan hata</h3>
        <p>Ortancayı bulmadan önce verileri sıralamayı unutmak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Ortalama = toplam/adet; ortanca = sıralı ortadaki; mod = en sık.</li><li>Açıklık = en büyük − en küçük.</li></ul>`,
      pairs: [
        { term: "Aritmetik ortalama", def: "Toplam / veri sayısı" },
        { term: "Ortanca (medyan)", def: "Sıralı verinin ortası" },
        { term: "Mod", def: "En sık tekrarlanan değer" },
        { term: "Açıklık (ranj)", def: "En büyük − en küçük" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
