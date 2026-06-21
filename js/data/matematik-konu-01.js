/* ============================================================
   MATEMATİK — Kapsamlı Konu Anlatımı Batch 1
   (Temel Kavramlar, Bölme-Bölünebilme, Rasyonel, Ondalık,
    Basit Eşitsizlikler, Mutlak Değer)
   Kaynak kapsam referansı; anlatımlar SIFIRDAN ÖZGÜN.
   Bu aşamada yalnızca konu anlatımı eklenir (soru sonra).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-01: content-loader yüklenmedi"); return; }

  TYT_CONTENT.upsertUnits("matematik", [
    {
      id: "mat-temel", name: "Temel Kavramlar ve Sayı Kümeleri", branch: null,
      summary: "Rakam-sayı, sayı kümeleri (N, Z, Q, Q', R), tek-çift, ardışık, asal, faktöriyel.",
      curriculumRefs: ["2026-YKS Matematik: Temel kavramlar ve sayı kümeleri"],
      prerequisites: [], estimatedMinutes: 24, difficulty: 2,
      objectives: ["Sayı kümelerini ve aralarındaki kapsama ilişkisini bilir.", "Tek-çift ve ardışık sayı kurallarını uygular.", "Asal sayı ve faktöriyel kavramını kullanır."],
      content: `
        <h2>Temel Kavramlar ve Sayı Kümeleri</h2>
        <h3>1) Rakam ve sayı</h3>
        <p>Sayıları yazmaya yarayan sembollere <b>rakam</b> denir: {0,1,2,3,4,5,6,7,8,9}. Rakamların kurala göre dizilmesiyle <b>sayı</b> oluşur.</p>
        <h3>2) Sayı kümeleri</h3>
        <ul>
          <li><b>Sayma sayıları:</b> N⁺ = {1, 2, 3, …}</li>
          <li><b>Doğal sayılar:</b> N = {0, 1, 2, 3, …}</li>
          <li><b>Tam sayılar:</b> Z = {…, −2, −1, 0, 1, 2, …}</li>
          <li><b>Rasyonel sayılar:</b> Q = { a/b : a, b ∈ Z, b ≠ 0 } (devirli/sonlu ondalıklar)</li>
          <li><b>İrrasyonel sayılar:</b> Q′ — virgülden sonra düzensiz devam eder (√2, π, e)</li>
          <li><b>Gerçek (reel) sayılar:</b> R = Q ∪ Q′</li>
        </ul>
        <div class="formula">Kapsama: N⁺ ⊂ N ⊂ Z ⊂ Q ⊂ R. &nbsp; 0 tam sayıdır, işareti yoktur.</div>
        <h3>3) Tek-çift sayılar</h3>
        <ul>
          <li>Ç+Ç=Ç, T+T=Ç, T+Ç=T. (Toplamda tek sayıda tek terim varsa sonuç tektir.)</li>
          <li>Çarpımda <b>bir çarpan bile çiftse sonuç çifttir</b>; sonuç tek ise tüm çarpanlar tektir.</li>
          <li>Ardışık iki tam sayının çarpımı her zaman çifttir.</li>
        </ul>
        <h3>4) Ardışık sayılar</h3>
        <p>Ardışık tam sayılar 1'er artar: n, n+1, n+2, … Ardışık sayıların toplamı:</p>
        <div class="formula">Toplam = (ilk + son) · terim sayısı / 2</div>
        <h3>5) Asal sayılar</h3>
        <p>1'den büyük, yalnızca 1'e ve kendisine bölünen doğal sayılardır: 2, 3, 5, 7, 11, 13, … <b>2 tek çift asaldır.</b> 1 asal değildir. <b>Aralarında asal:</b> 1'den başka ortak böleni olmayan sayılar (örn. 4 ve 9).</p>
        <h3>6) Faktöriyel</h3>
        <div class="formula">n! = 1·2·3·…·n &nbsp;|&nbsp; 0! = 1, &nbsp; 1! = 1</div>
        <h3>Çözümlü örnek</h3>
        <p>Ardışık üç çift sayının toplamı 36 ise sayılar? Ortancası x olsun: (x−2)+x+(x+2)=3x=36 → x=12; sayılar 10, 12, 14.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>1'i asal sanmak (değildir).</li><li>0'ı pozitif/negatif sanmak (işareti yoktur).</li><li>Çarpımda tek-çift kuralını toplamla karıştırmak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>N ⊂ Z ⊂ Q ⊂ R, Q′ ayrı.</li><li>Çarpımda bir çift → sonuç çift.</li><li>2 tek çift asal; 0! = 1.</li></ul>`,
      pairs: [
        { term: "Doğal sayılar (N)", def: "{0, 1, 2, 3, …}" },
        { term: "Tam sayılar (Z)", def: "{…, −1, 0, 1, …}" },
        { term: "Rasyonel (Q)", def: "a/b biçiminde, b ≠ 0" },
        { term: "İrrasyonel (Q′)", def: "√2, π gibi düzensiz ondalıklar" },
        { term: "En küçük asal", def: "2 (tek çift asal)" },
        { term: "0!", def: "1" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-bolme", name: "Bölme ve Bölünebilme", branch: null,
      summary: "Bölme algoritması, kalan; 2-3-4-5-6-8-9-10-11 bölünebilme kuralları.",
      curriculumRefs: ["2026-YKS Matematik: Bölme ve bölünebilme"],
      prerequisites: ["mat-temel"], estimatedMinutes: 22, difficulty: 2,
      objectives: ["Bölme algoritmasını ve kalan bağıntısını kullanır.", "Bölünebilme kurallarını uygular.", "Kalan problemlerini çözer."],
      content: `
        <h2>Bölme ve Bölünebilme</h2>
        <h3>1) Bölme algoritması</h3>
        <div class="formula">Bölünen = Bölen × Bölüm + Kalan &nbsp; (0 ≤ Kalan < Bölen)</div>
        <p>Kalan 0 ise sayı <b>tam bölünür</b>. Kalan, bölenden her zaman küçüktür.</p>
        <h3>2) Bölünebilme kuralları</h3>
        <ul>
          <li><b>2:</b> birler basamağı çift.</li>
          <li><b>3:</b> rakamlar toplamı 3'ün katı.</li>
          <li><b>4:</b> son iki basamağın oluşturduğu sayı 00 veya 4'ün katı.</li>
          <li><b>5:</b> birler basamağı 0 veya 5.</li>
          <li><b>6:</b> hem 2 hem 3 ile bölünür (3'ün katı çift sayı).</li>
          <li><b>8:</b> son üç basamak 000 veya 8'in katı.</li>
          <li><b>9:</b> rakamlar toplamı 9'un katı.</li>
          <li><b>10:</b> birler basamağı 0.</li>
          <li><b>11:</b> birler basamağından başlayarak +,−,+,− işaretlenen rakamların toplamı 0 veya 11'in katı.</li>
        </ul>
        <p><b>Bileşik kurallar:</b> 12 → 3 ve 4; 15 → 3 ve 5; 18 → 2 ve 9 ile bölünür. (Çarpanlar <b>aralarında asal</b> olmalı.)</p>
        <h3>3) Kalan ile işlemler</h3>
        <p>A'nın x'e bölümünden kalan m, B'nin kalanı n ise: A·B'nin kalanı (m·n)'nin, A±B'nin kalanı (m±n)'nin x'e bölümünden kalandır.</p>
        <h3>Çözümlü örnek</h3>
        <p>Bir sayı 7 ile bölününce bölüm 12, kalan 5 ise sayı? 7·12 + 5 = 89.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>Kalanın bölenden küçük olması kuralını unutmak.</li><li>6 ile bölünebilmede yalnız 3'e bakıp çift olmayı atlamak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>Bölünen = Bölen×Bölüm + Kalan, 0 ≤ K < Bölen.</li><li>3 ve 9 → rakam toplamı; 4 → son iki, 8 → son üç basamak.</li></ul>`,
      pairs: [
        { term: "Bölme algoritması", def: "Bölünen = Bölen×Bölüm + Kalan" },
        { term: "3 ile bölünme", def: "Rakamlar toplamı 3'ün katı" },
        { term: "4 ile bölünme", def: "Son iki basamak 4'ün katı" },
        { term: "9 ile bölünme", def: "Rakamlar toplamı 9'un katı" },
        { term: "11 ile bölünme", def: "+,−,+ … toplamı 11'in katı" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-ondalik", name: "Ondalık Gösterim", branch: null,
      summary: "Ondalık sayı, basamak değerleri, dört işlem, devirli ondalık ve kesre çevirme.",
      curriculumRefs: ["2026-YKS Matematik: Ondalık gösterim"],
      prerequisites: ["mat-rasyonel"], estimatedMinutes: 18, difficulty: 2,
      objectives: ["Ondalık sayılarda dört işlemi yapar.", "Ondalık ↔ kesir dönüşümünü uygular.", "Devirli ondalığı kesre çevirir."],
      content: `
        <h2>Ondalık Gösterim</h2>
        <p>Bir rasyonel sayının virgüllü yazılışıdır: 3/4 = 0,75. Virgülden sonra <b>onda birler, yüzde birler…</b> basamakları gelir.</p>
        <h3>İşlemler</h3>
        <ul>
          <li><b>Toplama/çıkarma:</b> virgüller alt alta gelecek şekilde yaz.</li>
          <li><b>Çarpma:</b> virgülleri yok say, çarp; sonra toplam virgül basamağı kadar sağdan ayır. (0,2·0,3 = 0,06)</li>
          <li><b>Bölme:</b> böleni tam sayı yapacak şekilde her ikisini 10'un kuvvetiyle genişlet.</li>
        </ul>
        <h3>Devirli ondalık → kesir</h3>
        <p>0,333… = 3/9 = 1/3. Devreden kısım paya, devir basamağı kadar 9 paydaya yazılır.</p>
        <div class="formula">0,ab… (saf devirli) = devir / (9…9) &nbsp;|&nbsp; 0,75 = 75/100 = 3/4</div>
        <h3>Çözümlü örnek</h3>
        <p>0,25 + 1,4 = 1,65. &nbsp; 1,2 × 0,5 = 0,60 = 0,6. &nbsp; 0,666… = 6/9 = 2/3.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>Çarpmada virgül basamağını yanlış saymak.</li><li>Devirli ondalığı sonlu sanıp yanlış kesir yazmak.</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>Çarpımda virgül basamakları toplanır.</li><li>0,a… saf devirli = a/9.</li></ul>`,
      pairs: [
        { term: "0,75", def: "3/4" },
        { term: "0,333…", def: "1/3" },
        { term: "0,2 × 0,3", def: "0,06" },
        { term: "Devirli ondalık", def: "Virgülden sonra tekrar eden rakamlar" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-esitsizlik", name: "Basit Eşitsizlikler", branch: null,
      summary: "Eşitsizlik çözümü, işaret kuralı, aralık gösterimi, çift eşitsizlik.",
      curriculumRefs: ["2026-YKS Matematik: Basit eşitsizlikler"],
      prerequisites: ["mat-temel"], estimatedMinutes: 18, difficulty: 2,
      objectives: ["Birinci dereceden eşitsizliği çözer.", "Negatifle çarpma/bölmede yön değiştirmeyi uygular.", "Çözümü sayı doğrusu/aralıkla gösterir."],
      content: `
        <h2>Basit Eşitsizlikler</h2>
        <p>İçinde &lt;, &gt;, ≤, ≥ bulunan ifadelerdir. Çözüm, bilinmeyeni yalnız bırakmaktır.</p>
        <div class="formula">ÖNEMLİ: Eşitsizliğin iki yanı <b>negatif</b> bir sayıyla çarpılır/bölünürse yön <b>ters</b> döner. (−2x &lt; 6 → x &gt; −3)</div>
        <h3>Aralık gösterimi</h3>
        <ul>
          <li>x &gt; 2 → (2, ∞) &nbsp; (uç dahil değil, açık)</li>
          <li>x ≥ 2 → [2, ∞) &nbsp; (uç dahil, kapalı)</li>
          <li>−1 &lt; x ≤ 3 → (−1, 3]</li>
        </ul>
        <h3>Çift eşitsizlik</h3>
        <p>a &lt; bx + c &lt; d biçiminde her üç parçaya aynı işlem uygulanır.</p>
        <h3>Çözümlü örnek</h3>
        <p>3x − 4 ≤ 11 → 3x ≤ 15 → x ≤ 5, yani (−∞, 5]. &nbsp; −2 ≤ x+1 &lt; 4 → −3 ≤ x &lt; 3.</p>
        <h3>Sık yapılan hata</h3>
        <p>Negatifle bölerken yön çevirmeyi unutmak — en kritik hata.</p>
        <h3>Özet kartı</h3>
        <ul><li>Negatifle çarp/böl → yön döner.</li><li>Açık uç ( ), kapalı uç [ ].</li></ul>`,
      pairs: [
        { term: "Negatifle çarpma", def: "Eşitsizlik yönü ters döner" },
        { term: "x ≥ 2 aralığı", def: "[2, ∞) — kapalı uç" },
        { term: "x > 2 aralığı", def: "(2, ∞) — açık uç" },
        { term: "Çift eşitsizlik", def: "Üç parçaya aynı işlem" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-mutlak", name: "Mutlak Değer", branch: null,
      summary: "Mutlak değerin tanımı, özellikleri ve mutlak değerli denklem-eşitsizlik.",
      curriculumRefs: ["2026-YKS Matematik: Mutlak değer"],
      prerequisites: ["mat-esitsizlik"], estimatedMinutes: 18, difficulty: 2,
      objectives: ["Mutlak değeri tanımlar ve özelliklerini kullanır.", "|x|=a denklemini çözer.", "|x|<a ve |x|>a eşitsizliklerini çözer."],
      content: `
        <h2>Mutlak Değer</h2>
        <p>Bir sayının sayı doğrusunda <b>sıfıra olan uzaklığıdır</b>; her zaman negatif değildir.</p>
        <div class="formula">|x| = x &nbsp;(x ≥ 0 ise), &nbsp; |x| = −x &nbsp;(x &lt; 0 ise). &nbsp; |x| ≥ 0</div>
        <h3>Özellikler</h3>
        <ul>
          <li>|a·b| = |a|·|b| &nbsp;|&nbsp; |a/b| = |a|/|b|</li>
          <li>|−a| = |a| &nbsp;|&nbsp; |a|² = a²</li>
          <li>Üçgen eşitsizliği: |a+b| ≤ |a| + |b|</li>
        </ul>
        <h3>Denklem ve eşitsizlik</h3>
        <ul>
          <li><b>|x| = a</b> (a≥0) → x = a veya x = −a.</li>
          <li><b>|x| &lt; a</b> → −a &lt; x &lt; a (aralık).</li>
          <li><b>|x| &gt; a</b> → x &lt; −a veya x &gt; a (iki kol).</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>|x − 3| = 5 → x − 3 = 5 ya da x − 3 = −5 → x = 8 veya x = −2. &nbsp; |x| ≤ 4 → −4 ≤ x ≤ 4.</p>
        <h3>Sık yapılan hatalar</h3>
        <ul><li>|x|=−3 gibi negatife eşitlemenin çözümsüz olduğunu görmemek.</li><li>|x|&gt;a çözümünde tek aralık yazmak (iki kol olmalı).</li></ul>
        <h3>Özet kartı</h3>
        <ul><li>|x| sıfıra uzaklık, ≥ 0.</li><li>|x|&lt;a → tek aralık; |x|&gt;a → iki kol.</li></ul>`,
      pairs: [
        { term: "|x|", def: "Sayının sıfıra uzaklığı (≥0)" },
        { term: "|x| = a çözümü", def: "x = a veya x = −a" },
        { term: "|x| < a", def: "−a < x < a (tek aralık)" },
        { term: "|x| > a", def: "x < −a veya x > a (iki kol)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
