/* ============================================================
   TEMEL MATEMATİK — Pilot İçerik Modülü (Faz D, pilot)
   Doküman 3.4 / 3.5 / 3.7 standardı. Tümü özgün (sourceType:"original").
   Matematikte hiçbir kritik işlem atlanmamıştır (doküman 3.7).
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("matematik-pilot: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("matematik", [
    {
      id: "mat-rasyonel", name: "Rasyonel Sayılar", branch: null,
      summary: "Kesirler, sıralama, dört işlem ve sayı doğrusu.",
      curriculumRefs: ["2026-YKS Matematik: Rasyonel sayılar"],
      prerequisites: ["mat-temel"], estimatedMinutes: 18, difficulty: 2,
      objectives: [
        "Rasyonel sayıyı a/b (b≠0) biçiminde tanır.",
        "Kesirlerde dört işlemi paydayı eşitleyerek yapar.",
        "Kesirleri ondalığa çevirip sıralar."
      ],
      content: `
        <h2>Rasyonel Sayılar</h2>
        <p>Rasyonel sayı, <b>a/b</b> (a, b tam sayı ve <b>b ≠ 0</b>) biçiminde yazılabilen sayıdır. Her tam sayı da rasyoneldir (5 = 5/1).</p>
        <h3>Toplama – Çıkarma</h3>
        <p>Paydalar <b>eşitlenir</b>, paylar işleme girer. <i>1/2 + 1/3</i>: payda 6 → <i>3/6 + 2/6 = 5/6</i>.</p>
        <h3>Çarpma – Bölme</h3>
        <p>Çarpma: pay×pay, payda×payda. Bölme: ikinciyi <b>ters çevirip çarp</b>. <i>(3/5) ÷ (9/10) = (3/5)·(10/9) = 30/45 = 2/3</i>.</p>
        <h3>Sıralama</h3>
        <p>En güveniliri ondalığa çevirmektir: <i>2/3 ≈ 0,67</i>; <i>3/4 = 0,75</i>; <i>5/6 ≈ 0,83</i>. Demek ki <i>5/6 > 3/4 > 2/3</i>.</p>
        <div class="formula">İki kesri karşılaştırmak için çapraz çarp: a/b ? c/d → a·d ile b·c karşılaştırılır.</div>
        <h3>Çözümlü örnek</h3>
        <p><b>1/3 ile 1/2 arasında</b> hangi sayı var? Ondalığa çevir: 0,33 ve 0,5. <i>2/5 = 0,4</i> tam aralarındadır.</p>
        <h3>Sık yapılan hata</h3>
        <p>Kesir toplarken payları ve paydaları <b>doğrudan toplamak</b> (1/2 + 1/3 = 2/5 demek) yanlıştır; önce payda eşitlenir.</p>
        <h3>Özet kartı</h3>
        <ul>
          <li>Toplama/çıkarma → önce payda eşitle.</li>
          <li>Bölme → ters çevir, çarp.</li>
          <li>Sıralama → ondalığa çevir veya çapraz çarp.</li>
        </ul>`,
      commonMistakes: ["Payda eşitlemeden pay+pay, payda+payda toplamak.", "Bölmede tersini almayı unutmak."],
      pairs: [
        { term: "1/2 + 1/3", def: "5/6" },
        { term: "(3/5) ÷ (9/10)", def: "2/3" },
        { term: "Çapraz çarpım", def: "a/b ? c/d → a·d ile b·c" },
        { term: "Rasyonel sayı", def: "a/b biçiminde, b ≠ 0" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "mat-ebobekok", name: "EBOB – EKOK", branch: null,
      summary: "Asal çarpanlara ayırma; ortak bölen ve ortak kat problemleri.",
      curriculumRefs: ["2026-YKS Matematik: EBOB–EKOK"],
      prerequisites: ["mat-bolme"], estimatedMinutes: 16, difficulty: 2,
      objectives: [
        "Sayıları asal çarpanlarına ayırır.",
        "EBOB ve EKOK'u doğru kuralla bulur.",
        "Ortak bölen/ortak kat problemlerini çözer."
      ],
      content: `
        <h2>EBOB – EKOK</h2>
        <p>Önce sayıları <b>asal çarpanlarına</b> ayırırız.</p>
        <ul>
          <li><b>EBOB</b> (en büyük ortak bölen): ortak asal çarpanların <b>en küçük</b> üslüsü.</li>
          <li><b>EKOK</b> (en küçük ortak kat): tüm asal çarpanların <b>en büyük</b> üslüsü.</li>
        </ul>
        <h3>Çözümlü örnek</h3>
        <p><b>36 ve 48:</b> 36 = 2²·3², 48 = 2⁴·3.<br>
        EBOB = ortak çarpanların küçüğü = 2²·3 = <b>12</b>.<br>
        EKOK = en büyük üslüler = 2⁴·3² = <b>144</b>.</p>
        <div class="formula">Yararlı bağıntı: EBOB(a,b) · EKOK(a,b) = a · b</div>
        <h3>Nerede EBOB, nerede EKOK?</h3>
        <ul>
          <li><b>EBOB:</b> "eşit gruplara böl, en çok kaç parça/grup" → ortak <b>bölme</b>.</li>
          <li><b>EKOK:</b> "birlikte tekrar ne zaman, aynı anda" → ortak <b>kat</b>.</li>
        </ul>
        <h3>Sık yapılan hata</h3>
        <p>EBOB ile EKOK'u karıştırmak. İpucu: "en çok kaç" → EBOB (küçülür); "ne zaman yine birlikte" → EKOK (büyür).</p>
        <h3>Özet kartı</h3>
        <ul><li>EBOB = ortak ∧ en küçük üs.</li><li>EKOK = hepsi ∧ en büyük üs.</li><li>EBOB·EKOK = a·b.</li></ul>`,
      commonMistakes: ["EBOB ve EKOK kuralını ters uygulamak.", "Asal çarpanlara ayırmadan tahminle bulmak."],
      pairs: [
        { term: "EBOB(36,48)", def: "12" },
        { term: "EKOK(8,12)", def: "24" },
        { term: "EBOB·EKOK", def: "a · b" },
        { term: "EKOK ne zaman?", def: "“Aynı anda/birlikte tekrar” problemleri" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  TYT_CONTENT.addQuestions([
    {
      id: "matematik-mat-rasyonel-001", subject: "matematik", unit: "mat-rasyonel",
      skill: "islem", difficulty: 1, estimatedSeconds: 60,
      q: "1/2 + 1/3 işleminin sonucu kaçtır?",
      options: ["2/5", "5/6", "2/6", "1/6", "5/12"], answer: 1,
      explain: "Payda eşitlenir: 3/6 + 2/6 = 5/6.",
      solution: { short: "Ortak payda 6 → 3/6 + 2/6 = 5/6.",
        steps: ["Paydaların EKOK'u: EKOK(2,3)=6.", "1/2 = 3/6, 1/3 = 2/6.", "3/6 + 2/6 = 5/6."],
        whyOthersWrong: ["2/5: pay+pay, payda+payda toplama hatası.", "2/6: yalnız payları toplayıp paydayı 6 bırakma.", "1/6: çıkarma yapma.", "5/12: paydaları çarpıp düzeltmeme."] },
      tags: ["rasyonel", "toplama"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-rasyonel-002", subject: "matematik", unit: "mat-rasyonel",
      skill: "karsilastirma", difficulty: 2, estimatedSeconds: 75,
      q: "Aşağıdaki kesirlerden hangisi <b>en büyüktür</b>?",
      options: ["2/3", "3/4", "5/6", "7/12", "1/2"], answer: 2,
      explain: "Ondalığa çevir: 0,67 / 0,75 / 0,83 / 0,58 / 0,5 → en büyük 5/6.",
      solution: { short: "5/6 ≈ 0,83 ile en büyüktür.",
        steps: ["Hepsini ondalığa çevir.", "2/3≈0,67; 3/4=0,75; 5/6≈0,83; 7/12≈0,58; 1/2=0,5.", "En büyük değer 0,83 → 5/6."],
        whyOthersWrong: ["3/4: 0,75, 5/6'dan küçük.", "2/3: 0,67.", "7/12: 0,58.", "1/2: 0,5 en küçüklerden."] },
      tags: ["rasyonel", "siralama"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-rasyonel-003", subject: "matematik", unit: "mat-rasyonel",
      skill: "islem", difficulty: 2, estimatedSeconds: 70,
      q: "(3/5) ÷ (9/10) işleminin sonucu kaçtır?",
      options: ["2/3", "3/2", "27/50", "6/5", "2/5"], answer: 0,
      explain: "Bölmede ikinci kesir ters çevrilir: (3/5)·(10/9) = 30/45 = 2/3.",
      solution: { short: "Ters çevir ve çarp: (3/5)·(10/9)=30/45=2/3.",
        steps: ["Bölme = ikinciyi ters çevirip çarpma.", "(3/5)·(10/9) = (3·10)/(5·9) = 30/45.", "30/45 sadeleşir: 2/3."],
        whyOthersWrong: ["3/2: ters çevirmeyi ilk kesre uygulamak.", "27/50: ters çevirmeden çarpmak.", "6/5: hatalı sadeleştirme.", "2/5: payı yanlış sadeleştirme."] },
      tags: ["rasyonel", "bolme"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-rasyonel-004", subject: "matematik", unit: "mat-rasyonel",
      skill: "akil-yurutme", difficulty: 2, estimatedSeconds: 75,
      q: "Aşağıdakilerden hangisi 1/3 ile 1/2 <b>arasında</b> yer alır?",
      options: ["1/4", "2/5", "3/5", "1/6", "5/8"], answer: 1,
      explain: "1/3≈0,33 ve 1/2=0,5. 2/5=0,4 tam aralarındadır.",
      solution: { short: "0,33 < 2/5(=0,4) < 0,5 olduğundan 2/5 aradadır.",
        steps: ["Sınırları ondalığa çevir: 1/3≈0,33, 1/2=0,5.", "Seçenekleri çevir: 1/4=0,25; 2/5=0,4; 3/5=0,6; 1/6≈0,17; 5/8=0,625.", "0,33–0,5 aralığındaki tek değer 0,4 = 2/5."],
        whyOthersWrong: ["1/4=0,25: aralığın altında.", "3/5=0,6: üstünde.", "1/6≈0,17: çok küçük.", "5/8=0,625: üstünde."] },
      tags: ["rasyonel", "araya-yerlestirme"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-ebobekok-001", subject: "matematik", unit: "mat-ebobekok",
      skill: "islem", difficulty: 1, estimatedSeconds: 60,
      q: "36 ve 48 sayılarının EBOB'u (en büyük ortak böleni) kaçtır?",
      options: ["6", "12", "4", "24", "144"], answer: 1,
      explain: "36=2²·3², 48=2⁴·3 → ortak çarpanların küçüğü 2²·3 = 12.",
      solution: { short: "EBOB = ortak asal çarpanların en küçük üslüleri = 2²·3 = 12.",
        steps: ["36 = 2²·3².", "48 = 2⁴·3.", "Ortak: 2 ve 3. En küçük üsler: 2² ve 3¹.", "EBOB = 2²·3 = 12."],
        whyOthersWrong: ["6: yalnız 2·3 alıp 2'nin üssünü düşürme.", "4: yalnız 2²'yi alıp 3'ü unutma.", "24: EKOK'un parçasıyla karıştırma.", "144: bu EKOK'tur, EBOB değil."] },
      tags: ["ebob"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-ebobekok-002", subject: "matematik", unit: "mat-ebobekok",
      skill: "islem", difficulty: 1, estimatedSeconds: 55,
      q: "8 ve 12 sayılarının EKOK'u (en küçük ortak katı) kaçtır?",
      options: ["24", "4", "48", "96", "2"], answer: 0,
      explain: "8=2³, 12=2²·3 → en büyük üsler 2³·3 = 24.",
      solution: { short: "EKOK = tüm asal çarpanların en büyük üslüleri = 2³·3 = 24.",
        steps: ["8 = 2³.", "12 = 2²·3.", "En büyük üsler: 2³ ve 3¹.", "EKOK = 2³·3 = 24."],
        whyOthersWrong: ["4: bu EBOB'tur.", "48: 2⁴ alma hatası.", "96: fazladan çarpan.", "2: yalnız ortak asalı alma."] },
      tags: ["ekok"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-ebobekok-003", subject: "matematik", unit: "mat-ebobekok",
      skill: "problem", difficulty: 2, estimatedSeconds: 85,
      q: "Bir deniz feneri 15 saniyede, diğeri 20 saniyede bir yanıp sönüyor. Az önce ikisi birlikte yandı. En erken kaç saniye sonra yine birlikte yanarlar?",
      options: ["60", "30", "300", "5", "35"], answer: 0,
      explain: "“Birlikte tekrar” → EKOK(15,20)=60 saniye.",
      solution: { short: "Birlikte tekrar etme = EKOK(15,20) = 60 sn.",
        steps: ["“Aynı anda yine” ifadesi ortak kat → EKOK.", "15 = 3·5, 20 = 2²·5.", "EKOK = 2²·3·5 = 60.", "Cevap 60 saniye."],
        whyOthersWrong: ["30: 15 ve 20'nin ortak katı değil (20'yi bölmez).", "300: 15·20, gereksiz büyük.", "5: bu EBOB'tur.", "35: 15+20 toplama hatası."] },
      tags: ["ekok", "problem"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "matematik-mat-ebobekok-004", subject: "matematik", unit: "mat-ebobekok",
      skill: "problem", difficulty: 2, estimatedSeconds: 85,
      q: "24 kalem ve 36 defter, hiç artmayacak şekilde eşit gruplara ayrılacaktır. En çok kaç grup oluşturulabilir?",
      options: ["6", "12", "4", "72", "18"], answer: 1,
      explain: "“Eşit gruplara böl, en çok kaç” → EBOB(24,36)=12.",
      solution: { short: "En çok eşit grup = EBOB(24,36) = 12.",
        steps: ["“Eşit gruplara böl, en çok” ifadesi ortak bölen → EBOB.", "24 = 2³·3, 36 = 2²·3².", "Ortak en küçük üsler: 2²·3 = 12.", "En çok 12 grup."],
        whyOthersWrong: ["6: 2·3 alıp 2'nin üssünü düşürme.", "4: 3'ü unutma.", "72: bu EKOK'tur.", "18: yalnız 36'nın bölenine bakma."] },
      tags: ["ebob", "problem"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    }
  ]);
})();
