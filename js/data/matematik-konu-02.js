/* ============================================================
   MATEMATİK — Kapsamlı Konu Anlatımı Batch 2
   (Üslü, Köklü, Oran-Orantı, Çarpanlara Ayırma, Denklem Çözme)
   Anlatımlar SIFIRDAN ÖZGÜN. Yalnızca konu anlatımı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-02: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("matematik", [
    {
      id: "mat-uslu", name: "Üslü Sayılar", branch: null,
      summary: "Üs kuralları, sıfır ve negatif üs, 10'un kuvvetleri ve bilimsel gösterim.",
      curriculumRefs: ["2026-YKS Matematik: Üslü sayılar"],
      prerequisites: ["mat-temel"], estimatedMinutes: 22, difficulty: 2,
      objectives: ["Üs kurallarını uygular.", "Negatif ve sıfır üssü yorumlar.", "Bilimsel gösterimi kullanır."],
      content: `
        <h2>Üslü Sayılar</h2>
        <p>aⁿ ifadesinde a <b>taban</b>, n <b>üs</b>tür; a'nın n kez çarpımıdır.</p>
        <h3>Temel kurallar</h3>
        <div class="formula">aᵐ·aⁿ = aᵐ⁺ⁿ &nbsp;|&nbsp; aᵐ/aⁿ = aᵐ⁻ⁿ &nbsp;|&nbsp; (aᵐ)ⁿ = aᵐ·ⁿ &nbsp;|&nbsp; (a·b)ⁿ = aⁿ·bⁿ &nbsp;|&nbsp; (a/b)ⁿ = aⁿ/bⁿ</div>
        <ul>
          <li><b>Sıfır üs:</b> a⁰ = 1 (a ≠ 0).</li>
          <li><b>Negatif üs:</b> a⁻ⁿ = 1/aⁿ.</li>
          <li><b>1 ve −1:</b> 1ⁿ = 1; (−1)ⁿ = 1 (n çift), −1 (n tek).</li>
        </ul>
        <h3>İşaret kuralı</h3>
        <p>(−2)⁴ = 16 (parantez varsa taban negatif), ama −2⁴ = −16 (üs yalnız 2'ye etki eder). <b>Parantez önemlidir.</b></p>
        <h3>10'un kuvvetleri ve bilimsel gösterim</h3>
        <p>Büyük/küçük sayılar a·10ⁿ (1 ≤ a &lt; 10) biçiminde yazılır: 45000 = 4,5·10⁴; 0,003 = 3·10⁻³.</p>
        <h3>Çözümlü örnek</h3>
        <p>2³·2⁴ = 2⁷ = 128. &nbsp; 3⁻² = 1/9. &nbsp; (2²)³ = 2⁶ = 64. &nbsp; (−1)¹⁰⁰ = 1.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>Çarpımda üsleri çarpmak (aᵐ·aⁿ ≠ aᵐ·ⁿ; <b>toplanır</b>).</li><li>−2⁴ ile (−2)⁴ farkını gözden kaçırmak.</li><li>a⁰=1 kuralında a=0 istisnasını unutmak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>Çarpım → üsler toplanır; bölüm → çıkarılır; üssün üssü → çarpılır.</li><li>a⁻ⁿ = 1/aⁿ, a⁰ = 1.</li></ul>`,
      pairs: [
        { term: "aᵐ·aⁿ", def: "aᵐ⁺ⁿ" },
        { term: "aᵐ/aⁿ", def: "aᵐ⁻ⁿ" },
        { term: "(aᵐ)ⁿ", def: "aᵐ·ⁿ" },
        { term: "a⁻ⁿ", def: "1/aⁿ" },
        { term: "a⁰ (a≠0)", def: "1" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-koklu", name: "Köklü Sayılar", branch: null,
      summary: "Kök kuralları, kök içine/dışına alma, paydayı rasyonel yapma, üslü-köklü ilişkisi.",
      curriculumRefs: ["2026-YKS Matematik: Köklü sayılar"],
      prerequisites: ["mat-uslu"], estimatedMinutes: 22, difficulty: 2,
      objectives: ["Kök kurallarını uygular.", "Köklü ifadeyi sadeleştirir.", "Paydayı rasyonel yapar."],
      content: `
        <h2>Köklü Sayılar</h2>
        <div class="formula">√a·√b = √(ab) &nbsp;|&nbsp; √a/√b = √(a/b) &nbsp;|&nbsp; (√a)² = a (a ≥ 0)</div>
        <h3>Kök içine / dışına alma</h3>
        <p>√(a²·b) = a√b (dışarı). Tersine a√b = √(a²·b) (içeri). Örnek: √12 = √(4·3) = 2√3.</p>
        <h3>Üslü-köklü ilişkisi</h3>
        <div class="formula">ⁿ√a = a^(1/n) &nbsp;|&nbsp; ⁿ√(aᵐ) = a^(m/n)</div>
        <h3>Paydayı rasyonel yapma</h3>
        <p>Paydadaki kökü gidermek için uygun ifadeyle genişletilir: 1/√2 = √2/2; 1/(√3−1) = (√3+1)/2 (eşleniğiyle).</p>
        <h3>Toplama-çıkarma</h3>
        <p>Yalnız <b>benzer kökler</b> toplanır: 2√3 + 5√3 = 7√3; √2 + √3 sadeleşmez.</p>
        <h3>Çözümlü örnek</h3>
        <p>√8·√2 = √16 = 4. &nbsp; √50 = 5√2. &nbsp; 3√5 − √5 = 2√5. &nbsp; 1/√5 = √5/5.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>√(a+b) = √a + √b sanmak (<b>yanlış</b>).</li><li>Benzer olmayan kökleri toplamak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>√a·√b = √(ab); √(a²b) = a√b.</li><li>Payda rasyonelinde eşlenikle genişlet.</li></ul>`,
      pairs: [
        { term: "√a·√b", def: "√(ab)" },
        { term: "√12", def: "2√3" },
        { term: "1/√2", def: "√2/2" },
        { term: "ⁿ√a", def: "a^(1/n)" },
        { term: "2√3 + 5√3", def: "7√3" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-oran", name: "Oran ve Orantı", branch: null,
      summary: "Oran, doğru/ters orantı, orantı özellikleri, içler-dışlar, bölme/birleşik orantı.",
      curriculumRefs: ["2026-YKS Matematik: Oran-orantı"],
      prerequisites: ["mat-rasyonel"], estimatedMinutes: 20, difficulty: 2,
      objectives: ["Doğru ve ters orantıyı ayırır.", "İçler-dışlar çarpımını kullanır.", "Bölme/birleşik orantı problemlerini çözer."],
      content: `
        <h2>Oran ve Orantı</h2>
        <p><b>Oran:</b> iki çokluğun bölme ile karşılaştırılması (a/b). <b>Orantı:</b> iki oranın eşitliği (a/b = c/d).</p>
        <div class="formula">İçler-dışlar çarpımı: a/b = c/d ⇔ a·d = b·c</div>
        <h3>Doğru ve ters orantı</h3>
        <ul>
          <li><b>Doğru orantı:</b> biri k katına çıkınca diğeri de k katına çıkar; oranları sabittir (x/y = k).</li>
          <li><b>Ters orantı:</b> biri k katına çıkınca diğeri 1/k'ya iner; çarpımları sabittir (x·y = k).</li>
        </ul>
        <h3>Orantı özellikleri</h3>
        <p>a/b = c/d ise (a+b)/b = (c+d)/d ve (a−c)/(b−d) = a/b (orantı sabiti korunur).</p>
        <h3>Çözümlü örnek</h3>
        <p>a/b = 3/5 ve a = 12 ise b? 3·b = 5·12 → b = 20. &nbsp; 4 işçi bir işi 6 günde bitiriyorsa 8 işçi (ters orantı) 3 günde bitirir.</p>
        <h3>Sık yapılan hata</h3>
        <p>Ters orantılı durumu doğru orantı gibi çözmek. "İşçi arttıkça süre azalır" → ters orantı.</p>
        <h3>Özet kartı</h3>
        <ul><li>Doğru orantı: oran sabit. Ters orantı: çarpım sabit.</li><li>a/b = c/d → a·d = b·c.</li></ul>`,
      pairs: [
        { term: "Doğru orantı", def: "Oranları sabit (x/y = k)" },
        { term: "Ters orantı", def: "Çarpımları sabit (x·y = k)" },
        { term: "İçler-dışlar", def: "a/b = c/d → a·d = b·c" },
        { term: "Oran", def: "İki çokluğun bölme ile karşılaştırılması" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-carpan", name: "Çarpanlara Ayırma", branch: null,
      summary: "Ortak çarpan, gruplandırma, özdeşlikler (iki kare farkı, tam kare, küp), ax²+bx+c.",
      curriculumRefs: ["2026-YKS Matematik: Çarpanlara ayırma"],
      prerequisites: ["mat-uslu"], estimatedMinutes: 22, difficulty: 3,
      objectives: ["Ortak çarpan ve gruplandırma yapar.", "Özdeşliklerle çarpanlara ayırır.", "İkinci dereceden ifadeyi çarpanlara ayırır."],
      content: `
        <h2>Çarpanlara Ayırma</h2>
        <h3>1) Ortak çarpan</h3>
        <p>ax + ay = a(x + y). Örnek: 6x² + 9x = 3x(2x + 3).</p>
        <h3>2) Gruplandırma</h3>
        <p>ax + ay + bx + by = a(x+y) + b(x+y) = (x+y)(a+b).</p>
        <h3>3) Özdeşlikler</h3>
        <div class="formula">
          İki kare farkı: a² − b² = (a − b)(a + b)<br>
          Tam kare: a² ± 2ab + b² = (a ± b)²<br>
          Küpler: a³ ± b³ = (a ± b)(a² ∓ ab + b²)
        </div>
        <h3>4) ax² + bx + c (a = 1)</h3>
        <p>Çarpımı c, toplamı b olan iki sayı bulunur. x² + 5x + 6 = (x + 2)(x + 3) (çünkü 2·3 = 6, 2 + 3 = 5).</p>
        <h3>Çözümlü örnek</h3>
        <p>x² − 9 = (x − 3)(x + 3). &nbsp; x² + 6x + 9 = (x + 3)². &nbsp; x² − x − 6 = (x − 3)(x + 2).</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>a² − b² ile a² + b²'yi karıştırmak (toplam çarpanlanmaz).</li><li>Tam kareyi yanlış işaretle açmak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>a²−b² = (a−b)(a+b).</li><li>x²+bx+c → çarpımı c, toplamı b iki sayı.</li></ul>`,
      pairs: [
        { term: "a² − b²", def: "(a − b)(a + b)" },
        { term: "a² + 2ab + b²", def: "(a + b)²" },
        { term: "a³ + b³", def: "(a + b)(a² − ab + b²)" },
        { term: "x² + 5x + 6", def: "(x + 2)(x + 3)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-denklem", name: "Denklem Çözme", branch: null,
      summary: "Birinci dereceden denklem, ikinci dereceden denklem (çarpanlara ayırma, diskriminant, kök formülü).",
      curriculumRefs: ["2026-YKS Matematik: Denklem çözme"],
      prerequisites: ["mat-carpan"], estimatedMinutes: 22, difficulty: 3,
      objectives: ["Birinci dereceden denklemi çözer.", "İkinci dereceden denklemi çarpanlara ayırma ve formülle çözer.", "Diskriminantla kök durumunu yorumlar."],
      content: `
        <h2>Denklem Çözme</h2>
        <h3>1) Birinci dereceden denklem</h3>
        <p>ax + b = 0 → x = −b/a. Bilinmeyeni bir yana, sayıları diğer yana topla. Örnek: 3x − 4 = 11 → 3x = 15 → x = 5.</p>
        <h3>2) İkinci dereceden denklem (ax² + bx + c = 0)</h3>
        <ul>
          <li><b>Çarpanlara ayırma:</b> x² − 5x + 6 = 0 → (x−2)(x−3)=0 → x = 2 veya x = 3.</li>
          <li><b>Diskriminant:</b> Δ = b² − 4ac. Δ&gt;0 → iki gerçek kök; Δ=0 → çift kök; Δ&lt;0 → gerçek kök yok.</li>
        </ul>
        <div class="formula">Kök formülü: x = (−b ± √Δ) / (2a), &nbsp; Δ = b² − 4ac</div>
        <h3>Kök-katsayı bağıntıları (Vieta)</h3>
        <p>x₁ + x₂ = −b/a, &nbsp; x₁·x₂ = c/a.</p>
        <h3>Çözümlü örnek</h3>
        <p>x² − 7x + 12 = 0 → (x−3)(x−4)=0 → x = 3, x = 4. &nbsp; Toplam 7 (=−(−7)/1), çarpım 12.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>İşaret taşırken hata (3x − 4 = 11 → 3x = 7 demek yanlış; 3x = 15).</li><li>Diskriminant negatifken gerçek kök aramak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>ax+b=0 → x=−b/a.</li><li>Δ=b²−4ac; kök formülü x=(−b±√Δ)/(2a).</li><li>x₁+x₂=−b/a, x₁x₂=c/a.</li></ul>`,
      pairs: [
        { term: "ax + b = 0", def: "x = −b/a" },
        { term: "Diskriminant Δ", def: "b² − 4ac" },
        { term: "Kök formülü", def: "x = (−b ± √Δ)/(2a)" },
        { term: "x₁ + x₂", def: "−b/a (Vieta)" },
        { term: "x₁ · x₂", def: "c/a (Vieta)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
