/* ============================================================
   MATEMATİK — Kapsamlı Konu Anlatımı Batch 4
   (Kesir Problemleri, Karışım Problemleri, Kümeler, Mantık)
   Anlatımlar SIFIRDAN ÖZGÜN. Yalnızca konu anlatımı.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-konu-04: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("matematik", [
    {
      id: "mat-kesirprob", name: "Kesir Problemleri", branch: null,
      summary: "Bir bütünün kesri, ardışık kesir işlemleri, kalan üzerinden işlem.",
      curriculumRefs: ["2026-YKS Matematik: Kesir problemleri"],
      prerequisites: ["mat-rasyonel"], estimatedMinutes: 18, difficulty: 3,
      objectives: ["Bir bütünün kesrini hesaplar.", "Ardışık kesir işlemlerini izler.", "Kalan üzerinden kurulan problemleri çözer."],
      content: `
        <h2>Kesir Problemleri</h2>
        <p>Bir bütünün “a/b”si demek, bütünü b'ye bölüp a tanesini almaktır: bütün × (a/b).</p>
        <h3>Ardışık işlemler</h3>
        <p>“Önce 1/3'ünü, sonra kalanın 1/2'sini harcadı” gibi ifadelerde her adımda <b>kalan</b> üzerinden gidilir.</p>
        <h3>Çözümlü örnek</h3>
        <p>Bir kişi parasının önce 1/4'ünü, sonra kalanın 1/3'ünü harcadı; geriye 90 TL kaldı. Başlangıçtaki para?<br>
        İlk harcama sonrası kalan: 3/4. Kalanın 1/3'ü harcanınca kalan: 3/4 × 2/3 = 1/2. Bu 1/2, 90 TL ise tüm para = 180 TL.</p>
        <h3>İpucu</h3>
        <p>“Kalanın” ifadesi varsa kalan kesirleri <b>çarparak</b> ilerle; sonda elde kalan kesri bilinen değere eşitle.</p>
        <h3>Sık yapılan hata</h3>
        <p>İkinci kesri bütüne uygulamak; oysa “kalanın” denmişse kalana uygulanır.</p>
        <h3>Özet kartı</h3>
        <ul><li>Bütünün a/b'si = bütün × a/b.</li><li>“Kalanın” → kalan kesirleri çarp.</li></ul>`,
      pairs: [
        { term: "Bütünün a/b'si", def: "bütün × (a/b)" },
        { term: "“Kalanın” ifadesi", def: "İşlem kalana uygulanır" },
        { term: "1/4 harcayınca kalan", def: "3/4" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-karisim", name: "Karışım Problemleri", branch: null,
      summary: "Bileşen oranı, iki karışımın birleştirilmesi, oran-miktar ilişkisi.",
      curriculumRefs: ["2026-YKS Matematik: Karışım problemleri"],
      prerequisites: ["mat-yuzde"], estimatedMinutes: 18, difficulty: 3,
      objectives: ["Karışımdaki bileşen miktarını orandan bulur.", "İki karışımı birleştirir.", "Su ekleme/buharlaşma durumlarını çözer."],
      content: `
        <h2>Karışım Problemleri</h2>
        <div class="formula">Bileşen miktarı = Oran × Toplam miktar &nbsp;|&nbsp; Oran = Bileşen / Toplam</div>
        <h3>Birleştirme</h3>
        <p>İki karışım birleşince <b>bileşen miktarları toplanır</b>, toplam miktarlar toplanır; yeni oran = (toplam bileşen)/(toplam miktar).</p>
        <h3>Su ekleme / buharlaşma</h3>
        <ul>
          <li>Su eklenince: tuz/şeker miktarı <b>aynı kalır</b>, toplam artar → oran düşer.</li>
          <li>Buharlaşmada: bileşen aynı kalır, su azalır → oran artar.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p>%20 tuzlu 300 g karışımda tuz: 300×0,20 = 60 g. Buna 100 g su eklenirse yeni oran: 60/400 = %15.</p>
        <p>%10'luk 200 g ile %30'luk 200 g karışım: tuz = 20 + 60 = 80 g; toplam 400 g → %20.</p>
        <h3>Sık yapılan hata</h3>
        <p>Yüzdeleri doğrudan ortalamak; doğru yol bileşen miktarlarını toplamaktır (eşit miktarlarda ortalama tesadüfen tutar).</p>
        <h3>Özet kartı</h3>
        <ul><li>Bileşen = oran × toplam.</li><li>Su ekle → bileşen sabit, oran düşer.</li></ul>`,
      pairs: [
        { term: "Bileşen miktarı", def: "Oran × toplam" },
        { term: "Su eklenince", def: "Bileşen sabit, oran düşer" },
        { term: "İki karışım birleşimi", def: "Bileşenler ve toplamlar ayrı ayrı toplanır" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-kume", name: "Kümeler", branch: null,
      summary: "Küme, alt küme (2ⁿ), birleşim/kesişim/fark/tümleyen, eleman sayısı bağıntısı, Venn.",
      curriculumRefs: ["2026-YKS Matematik: Kümeler"],
      prerequisites: ["mat-temel"], estimatedMinutes: 22, difficulty: 3,
      objectives: ["Küme işlemlerini uygular.", "Alt küme sayısını hesaplar.", "Eleman sayısı bağıntısını ve Venn şemasını kullanır."],
      content: `
        <h2>Kümeler</h2>
        <p><b>Küme:</b> iyi tanımlanmış nesneler topluluğu. Bir nesne ya kümededir ya değildir.</p>
        <h3>Alt küme</h3>
        <div class="formula">n elemanlı bir kümenin alt küme sayısı 2ⁿ; özalt küme sayısı 2ⁿ − 1.</div>
        <h3>Küme işlemleri</h3>
        <ul>
          <li><b>Birleşim (A∪B):</b> A veya B'de olanlar.</li>
          <li><b>Kesişim (A∩B):</b> hem A hem B'de olanlar.</li>
          <li><b>Fark (A∖B):</b> A'da olup B'de olmayanlar.</li>
          <li><b>Tümleyen (A′):</b> evrensel kümede A'da olmayanlar.</li>
        </ul>
        <h3>Eleman sayısı bağıntısı</h3>
        <div class="formula">s(A∪B) = s(A) + s(B) − s(A∩B)</div>
        <p>Üç küme için: s(A∪B∪C) = s(A)+s(B)+s(C) − s(A∩B) − s(A∩C) − s(B∩C) + s(A∩B∩C).</p>
        <h3>Çözümlü örnek</h3>
        <p>s(A)=20, s(B)=15, s(A∩B)=5 ise s(A∪B) = 20 + 15 − 5 = 30.</p>
        <p>4 elemanlı kümenin alt küme sayısı 2⁴ = 16.</p>
        <h3>Sık yapılan hata</h3>
        <p>Birleşimde kesişimi iki kez sayıp çıkarmamak.</p>
        <h3>Özet kartı</h3>
        <ul><li>Alt küme: 2ⁿ.</li><li>s(A∪B) = s(A)+s(B)−s(A∩B).</li></ul>`,
      pairs: [
        { term: "n elemanlı küme alt küme sayısı", def: "2ⁿ" },
        { term: "s(A∪B)", def: "s(A)+s(B)−s(A∩B)" },
        { term: "A∩B", def: "Hem A hem B'de olanlar" },
        { term: "A∖B", def: "A'da olup B'de olmayanlar" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-mantik", name: "Mantık", branch: null,
      summary: "Önerme, bağlaçlar (değil/ve/veya/ise), doğruluk tablosu, koşullu önermenin çeşitleri.",
      curriculumRefs: ["2026-YKS Matematik: Mantık"],
      prerequisites: [], estimatedMinutes: 20, difficulty: 3,
      objectives: ["Önermeyi ve doğruluk değerini tanır.", "Bağlaçların doğruluk tablolarını kullanır.", "Koşullu önermenin karşıtını/tersini/karşıt tersini kurar."],
      content: `
        <h2>Mantık</h2>
        <p><b>Önerme:</b> doğru ya da yanlış kesin yargı bildiren ifade. (Soru, ünlem önerme değildir.)</p>
        <h3>Bağlaçlar</h3>
        <ul>
          <li><b>Değil (¬p):</b> doğruluk değerini ters çevirir.</li>
          <li><b>Ve (p∧q):</b> yalnız ikisi de doğruysa doğru.</li>
          <li><b>Veya (p∨q):</b> en az biri doğruysa doğru.</li>
          <li><b>İse (p⇒q):</b> yalnız p doğru, q yanlışsa yanlış; diğer durumlarda doğru.</li>
        </ul>
        <h3>Koşullu önermenin çeşitleri</h3>
        <p>p ⇒ q için: <b>Karşıtı:</b> q ⇒ p · <b>Tersi:</b> ¬p ⇒ ¬q · <b>Karşıt tersi (devrik):</b> ¬q ⇒ ¬p. Bir önerme ile <b>karşıt tersi her zaman aynı doğruluk değerini</b> taşır.</p>
        <h3>Totoloji / Çelişki</h3>
        <p>Her durumda doğru olan önerme <b>totoloji</b>, her durumda yanlış olan <b>çelişki</b>dir.</p>
        <h3>Çözümlü örnek</h3>
        <p>“Yağmur yağarsa yerler ıslanır.” (p⇒q). Karşıt tersi: “Yerler ıslanmadıysa yağmur yağmamıştır.” (¬q⇒¬p) — aynı doğruluk değeri.</p>
        <h3>Sık yapılan hata</h3>
        <p>p⇒q ile karşıtı (q⇒p) aynı sanmak; bunlar denk <b>değildir</b>.</p>
        <h3>Özet kartı</h3>
        <ul><li>∧ ikisi de doğru; ∨ en az biri doğru.</li><li>p⇒q ≡ karşıt tersi (¬q⇒¬p).</li></ul>`,
      pairs: [
        { term: "Önerme", def: "Doğru/yanlış kesin yargı" },
        { term: "p ∧ q (ve)", def: "İkisi de doğruysa doğru" },
        { term: "p ∨ q (veya)", def: "En az biri doğruysa doğru" },
        { term: "Karşıt ters", def: "¬q ⇒ ¬p; aynı doğruluk değeri" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);
})();
