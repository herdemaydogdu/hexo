/* ============================================================
   TYT Hazırlık — İçerik Verisi (ünite/branş yapısı)
   Kaynak: MEB OGM Materyal — MEBİ TYT Konu Özetleri
   (https://ogmmateryal.eba.gov.tr/mebi-konu-ozetleri)

   subjects[].units[] : her ünite hem konu anlatımını (content)
   hem de oyun eşleştirme çiftlerini (pairs) taşır.
   Sosyal ve Fen dersleri branşlara ayrılmıştır (unit.branch).
   questions[].unit : soruyu üniteye bağlar (answer = 0..n-1).
   ============================================================ */

const TYT_DATA = {
  exam: { name: "TYT", totalQuestions: 120, durationMin: 165 },

  subjects: [
    /* ===================== TÜRKÇE ===================== */
    {
      id: "turkce", name: "Türkçe", icon: "📚",
      units: [
        {
          id: "tr-sozcuk", name: "Sözcükte Anlam",
          summary: "Gerçek, yan, mecaz, terim anlam; eş-zıt-sesteş, deyim ve atasözü.",
          content: `
            <h2>Sözcükte Anlam</h2>
            <p>Bir sözcüğün cümle içinde kazandığı anlam bağlama göre değişir.</p>
            <h3>Anlam Türleri</h3>
            <ul>
              <li><b>Gerçek anlam:</b> Sözlükteki ilk anlam. "Soğuk su"</li>
              <li><b>Yan anlam:</b> Benzerlikle kazanılan anlam. "Masanın ayağı"</li>
              <li><b>Mecaz anlam:</b> Gerçek anlamdan tamamen uzaklaşma. "Soğuk insan"</li>
              <li><b>Terim anlam:</b> Bir bilim/sanat dalına özgü. "Üçgenin açısı"</li>
            </ul>
            <ul>
              <li><b>Eş anlamlı:</b> kelime / sözcük</li>
              <li><b>Zıt anlamlı:</b> sıcak / soğuk</li>
              <li><b>Sesteş:</b> yüz (surat) / yüz (100)</li>
              <li><b>Deyim:</b> kalıplaşmış mecazlı söz; <b>Atasözü:</b> öğüt veren kalıp söz</li>
            </ul>`,
          pairs: [
            { term: "Mecaz anlam", def: "Gerçek anlamından tamamen uzaklaşma" },
            { term: "Eş anlamlı", def: "Yazılışı farklı, anlamı aynı sözcük" },
            { term: "Zıt anlamlı", def: "Anlamca birbirine karşıt sözcük" },
            { term: "Sesteş (eşsesli)", def: "Yazılışı aynı, anlamı farklı sözcük" },
            { term: "Deyim", def: "Kalıplaşmış, çoğunlukla mecazlı söz" },
            { term: "Atasözü", def: "Deneyimden öğüt veren kalıp söz" },
            { term: "Terim anlam", def: "Bir bilim/sanat dalına özgü anlam" }
          ]
        },
        {
          id: "tr-cumle", name: "Cümlede Anlam",
          summary: "Neden-sonuç, amaç-sonuç, koşul ve karşılaştırma.",
          content: `
            <h2>Cümlede Anlam</h2>
            <h3>Anlam İlişkileri</h3>
            <ul>
              <li><b>Neden-sonuç:</b> "-dığı için" — "Yağmur yağdığı için maç ertelendi."</li>
              <li><b>Amaç-sonuç:</b> "-mek için" — "Kazanmak için çalıştı."</li>
              <li><b>Koşul:</b> "-se, -dıkça" — "Erken yatarsan erken kalkarsın."</li>
              <li><b>Karşılaştırma:</b> "daha, en, kadar, göre"</li>
            </ul>`,
          pairs: [
            { term: "Neden-sonuç", def: "“-dığı için, -den dolayı”" },
            { term: "Amaç-sonuç", def: "“-mek için, -mek amacıyla”" },
            { term: "Koşul (şart)", def: "“-se, -dıkça”" },
            { term: "Karşılaştırma", def: "“daha, en, kadar, göre”" }
          ]
        },
        {
          id: "tr-paragraf", name: "Paragraf",
          summary: "Ana düşünce, yardımcı düşünce, paragrafta yapı.",
          content: `
            <h2>Paragraf</h2>
            <p>TYT Türkçe'nin yaklaşık yarısı paragraf sorularıdır.</p>
            <ul>
              <li><b>Ana düşünce:</b> Yazarın vermek istediği temel mesaj.</li>
              <li><b>Yardımcı düşünce:</b> Ana düşünceyi destekleyen fikirler.</li>
              <li><b>Yapı:</b> Giriş (bağımsız başlar) – Gelişme – Sonuç.</li>
            </ul>
            <p><b>İpucu:</b> "ama, ancak, çünkü" bağlaçlarını takip et.</p>`,
          pairs: [
            { term: "Ana düşünce", def: "Yazarın vermek istediği temel mesaj" },
            { term: "Yardımcı düşünce", def: "Ana düşünceyi destekleyen fikir" },
            { term: "Giriş cümlesi", def: "Bağımsız, bağlaçsız başlar" },
            { term: "Konu", def: "Paragrafın neyden bahsettiği" }
          ]
        },
        {
          id: "tr-ses", name: "Ses Bilgisi",
          summary: "Ünlü uyumu, ünsüz yumuşaması/benzeşmesi, ünlü düşmesi.",
          content: `
            <h2>Ses Bilgisi</h2>
            <ul>
              <li><b>Büyük ünlü uyumu:</b> Ünlüler ya hep kalın ya hep ince olur.</li>
              <li><b>Ünsüz yumuşaması:</b> p,ç,t,k → b,c,d,g/ğ (kitap→kitabı).</li>
              <li><b>Ünsüz benzeşmesi:</b> kitap+cı → kitapçı.</li>
              <li><b>Ünlü düşmesi:</b> burun → burnu.</li>
            </ul>`,
          pairs: [
            { term: "Ünsüz yumuşaması", def: "p, ç, t, k → b, c, d, g/ğ" },
            { term: "Ünlü düşmesi", def: "burun → burnu" },
            { term: "Ünsüz benzeşmesi", def: "kitap + cı → kitapçı" },
            { term: "Büyük ünlü uyumu", def: "Kalın-ince ünlü uyumu" }
          ]
        },
        {
          id: "tr-yazim", name: "Yazım ve Noktalama",
          summary: "de/da, ki, büyük harf, virgül; pekiştirme.",
          content: `
            <h2>Yazım ve Noktalama</h2>
            <ul>
              <li><b>Bağlaç "de/da":</b> ayrı yazılır ("Ben de geldim"). Ek "-de/-da" bitişik ("evde").</li>
              <li><b>Bağlaç "ki":</b> ayrı yazılır ("Biliyorum ki…"). İlgi "-ki" bitişik ("seninki").</li>
              <li><b>Büyük harf:</b> özel adlar ve cümle başı.</li>
              <li><b>Pekiştirme:</b> masmavi, sapsarı.</li>
            </ul>`,
          pairs: [
            { term: "Bağlaç “de/da”", def: "Ayrı yazılır (“Ben de geldim”)" },
            { term: "Ek “-de/-da”", def: "Bitişik yazılır (“evde”)" },
            { term: "Bağlaç “ki”", def: "Ayrı yazılır (“Biliyorum ki…”)" },
            { term: "Pekiştirme", def: "masmavi, sapsarı" }
          ]
        }
      ]
    },

    /* ===================== TEMEL MATEMATİK ===================== */
    {
      id: "matematik", name: "Temel Matematik", icon: "🔢",
      units: [
        {
          id: "mat-temel", name: "Temel Kavramlar",
          summary: "Sayı kümeleri, tek-çift, ardışık sayılar.",
          content: `
            <h2>Temel Kavramlar</h2>
            <ul>
              <li><b>Tek/Çift:</b> Ç+Ç=Ç, T+T=Ç, T+Ç=T. Çarpımda bir çarpan çiftse sonuç çift.</li>
              <li><b>Ardışık toplam:</b> n·(ilk+son)/2</li>
              <li><b>0! = 1</b>, <b>a⁰ = 1</b> (a≠0)</li>
            </ul>`,
          pairs: [
            { term: "a⁰ (a≠0)", def: "1" },
            { term: "0!", def: "1" },
            { term: "Tek + Tek", def: "Çift" },
            { term: "Ardışık sayı toplamı", def: "n·(ilk + son) / 2" }
          ]
        },
        {
          id: "mat-bolme", name: "Bölme ve Bölünebilme",
          summary: "Bölme algoritması ve bölünebilme kuralları.",
          content: `
            <h2>Bölme ve Bölünebilme</h2>
            <div class="formula">Bölünen = Bölen × Bölüm + Kalan</div>
            <ul>
              <li><b>2:</b> son rakam çift · <b>3:</b> rakam toplamı 3'ün katı</li>
              <li><b>5:</b> son rakam 0/5 · <b>9:</b> rakam toplamı 9'un katı</li>
            </ul>`,
          pairs: [
            { term: "Bölme algoritması", def: "Bölünen = Bölen×Bölüm + Kalan" },
            { term: "3 ile bölünme", def: "Rakamlar toplamı 3'ün katı" },
            { term: "5 ile bölünme", def: "Son rakam 0 veya 5" },
            { term: "9 ile bölünme", def: "Rakamlar toplamı 9'un katı" }
          ]
        },
        {
          id: "mat-uslu", name: "Üslü Sayılar",
          summary: "Üs kuralları, negatif ve sıfır üs.",
          content: `
            <h2>Üslü Sayılar</h2>
            <div class="formula">aᵐ · aⁿ = aᵐ⁺ⁿ &nbsp; | &nbsp; aᵐ / aⁿ = aᵐ⁻ⁿ &nbsp; | &nbsp; (aᵐ)ⁿ = aᵐ·ⁿ</div>
            <p>a⁻ⁿ = 1/aⁿ, &nbsp; a⁰ = 1 (a≠0)</p>`,
          pairs: [
            { term: "aᵐ · aⁿ", def: "aᵐ⁺ⁿ" },
            { term: "aᵐ / aⁿ", def: "aᵐ⁻ⁿ" },
            { term: "(aᵐ)ⁿ", def: "aᵐ·ⁿ" },
            { term: "a⁻ⁿ", def: "1 / aⁿ" }
          ]
        },
        {
          id: "mat-koklu", name: "Köklü Sayılar",
          summary: "Kök çarpımı, sadeleştirme, paydayı rasyonel yapma.",
          content: `
            <h2>Köklü Sayılar</h2>
            <div class="formula">√a · √b = √(ab) &nbsp; | &nbsp; √12 = 2√3 &nbsp; | &nbsp; 1/√2 = √2/2</div>`,
          pairs: [
            { term: "√12", def: "2√3" },
            { term: "√8 · √2", def: "4" },
            { term: "1 / √2", def: "√2 / 2" },
            { term: "|−5|", def: "5" }
          ]
        },
        {
          id: "mat-oran", name: "Oran ve Orantı",
          summary: "Doğru/ters orantı ve içler-dışlar çarpımı.",
          content: `
            <h2>Oran ve Orantı</h2>
            <ul>
              <li><b>Doğru orantı:</b> biri artarken diğeri aynı oranda artar.</li>
              <li><b>Ters orantı:</b> biri artarken diğeri aynı oranda azalır (çarpım sabit).</li>
              <li><b>İçler dışlar:</b> a/b = c/d → a·d = b·c</li>
            </ul>`,
          pairs: [
            { term: "Doğru orantı", def: "Biri artarken diğeri aynı oranda artar" },
            { term: "Ters orantı", def: "Biri artarken diğeri aynı oranda azalır" },
            { term: "Oran", def: "İki çokluğun bölme ile karşılaştırılması" },
            { term: "İçler dışlar çarpımı", def: "a/b = c/d → a·d = b·c" }
          ]
        },
        {
          id: "mat-problem", name: "Problemler",
          summary: "Yüzde, hız ve yaş problemleri.",
          content: `
            <h2>Problemler</h2>
            <div class="formula">Yüzde = (Parça/Bütün)×100 &nbsp; | &nbsp; Yol = Hız × Zaman</div>
            <p>%20 zamlı fiyat = fiyat × 1,20. Yaş farkı her zaman sabittir.</p>`,
          pairs: [
            { term: "200 TL'ye %20 zam", def: "240 TL" },
            { term: "Yol", def: "Hız × Zaman" },
            { term: "Yüzde", def: "(Parça / Bütün) × 100" },
            { term: "Yaş farkı", def: "Yıllar geçse de sabit kalır" }
          ]
        }
      ]
    },

    /* ===================== SOSYAL BİLİMLER (branşlı) ===================== */
    {
      id: "sosyal", name: "Sosyal Bilimler", icon: "🌍",
      branches: [
        { id: "tarih", name: "Tarih", icon: "🏛️" },
        { id: "cografya", name: "Coğrafya", icon: "🗺️" },
        { id: "felsefe", name: "Felsefe", icon: "🤔" },
        { id: "din", name: "Din Kültürü", icon: "🕌" }
      ],
      units: [
        { id: "tar-01", name: "İnsanlığın Hafızası Tarih", branch: "tarih",
          summary: "Tarihin tanımı, yöntemi ve kaynakları.",
          content: `<h2>İnsanlığın Hafızası Tarih</h2><p>Tarih; geçmiş insan topluluklarını yer ve zaman göstererek, neden-sonuç ilişkisi içinde ve belgelere dayanarak inceleyen bilimdir. Kaynaklar yazılı, sözlü ve kalıntı (arkeolojik) olarak ayrılır.</p>`,
          pairs: [
            { term: "Tarih", def: "Geçmişi belge ve neden-sonuçla inceleyen bilim" },
            { term: "Birincil kaynak", def: "Döneme ait özgün belge/kalıntı" },
            { term: "Kronoloji", def: "Olayları zaman sırasına koyma" },
            { term: "Yer ve zaman", def: "Tarihin vazgeçilmez ögeleri" }
          ] },
        { id: "tar-02", name: "Zamanın Taksimi", branch: "tarih",
          summary: "Takvimler ve çağ kavramı.",
          content: `<h2>Zamanın Taksimi</h2><p>İnsanlar zamanı takvimlerle ölçtü. Mısırlılar Güneş, Sümerler Ay esaslı takvim; Türkler 12 Hayvanlı takvimi kullandı. Miladi takvim Hz. İsa'nın doğumunu başlangıç alır.</p>`,
          pairs: [
            { term: "Güneş takvimi", def: "Mısırlılar geliştirdi" },
            { term: "12 Hayvanlı takvim", def: "Türklerin takvimi" },
            { term: "Miladi takvim", def: "Hz. İsa'nın doğumu esas" },
            { term: "Hicri takvim", def: "Hicret (622) esas, Ay yılı" }
          ] },
        { id: "tar-03", name: "İnsanlığın İlk İzleri - Yazının İcadı", branch: "tarih",
          summary: "Tarih öncesi devirler ve yazının bulunuşu.",
          content: `<h2>İnsanlığın İlk İzleri - Yazının İcadı</h2><p>Yazıdan önceki dönem tarih öncesi (Taş ve Maden çağları) sayılır. Sümerlerin yazıyı bulmasıyla (yaklaşık MÖ 3200) tarihî devirler başlar. Neolitik Çağ'da yerleşik hayata geçilmiştir.</p>`,
          pairs: [
            { term: "Yazıyı bulan", def: "Sümerler (çivi yazısı)" },
            { term: "Yazının icadı", def: "Tarihî devirleri başlattı" },
            { term: "Neolitik Çağ", def: "Yerleşik hayata geçiş" },
            { term: "Tarih öncesi son devir", def: "Demir Çağı" }
          ] },
        { id: "tar-04", name: "İlk Çağ'da Başlıca Medeniyet Havzaları", branch: "tarih",
          summary: "Mezopotamya, Anadolu, Mısır ve diğer uygarlıklar.",
          content: `<h2>İlk Çağ'da Başlıca Medeniyet Havzaları</h2><ul><li><b>Sümerler:</b> yazı ve ilk yazılı kanunlar.</li><li><b>Hititler:</b> Kadeş Antlaşması (ilk yazılı antlaşma).</li><li><b>Urartular:</b> su kanalları, kaya mezarları.</li><li><b>Lidyalılar:</b> ilk madeni para.</li></ul>`,
          pairs: [
            { term: "Lidyalılar", def: "İlk madeni parayı icat etti" },
            { term: "Sümerler", def: "Yazıyı (çivi yazısı) buldu" },
            { term: "Hititler", def: "Kadeş Antlaşması'nı imzaladı" },
            { term: "Urartular", def: "Su kanalları ve kaya mezarları" },
            { term: "Frigler", def: "Kibele inancı, tarım toplumu" }
          ] },
        { id: "tar-05", name: "İnsan ve Göç", branch: "tarih",
          summary: "Göçlerin nedenleri ve sonuçları.",
          content: `<h2>İnsan ve Göç</h2><p>İklim değişiklikleri, geçim sıkıntısı, savaş ve güvenlik kaygısı göçlere yol açmıştır. Göçler kültürel etkileşimi artırmış, yeni yurtların kurulmasını sağlamıştır.</p>`,
          pairs: [
            { term: "Göç nedeni", def: "İklim, geçim, güvenlik" },
            { term: "Göçün sonucu", def: "Kültürel etkileşim ve yayılma" }
          ] },
        { id: "tar-06", name: "Kabileden Devlete", branch: "tarih",
          summary: "İlk siyasi örgütlenme ve devletin doğuşu.",
          content: `<h2>Kabileden Devlete</h2><p>Aileden kabileye, kabileden devlete uzanan örgütlenmede ilk devletler şehir devletleri (Sümer site devletleri) biçiminde ortaya çıktı. Devletin ögeleri halk, ülke, egemenlik ve teşkilattır.</p>`,
          pairs: [
            { term: "İlk şehir devletleri", def: "Sümerler" },
            { term: "Devletin ögeleri", def: "Halk, ülke, egemenlik, teşkilat" }
          ] },
        { id: "tar-07", name: "Kanunlar Doğuyor", branch: "tarih",
          summary: "İlk yazılı kanunlar.",
          content: `<h2>Kanunlar Doğuyor</h2><p>Bilinen ilk yazılı kanunları Sümer kralı Urgakina yaptı. Babil kralı Hammurabi'nin kanunları ise sert (kısasa kısas) cezalarıyla bilinir.</p>`,
          pairs: [
            { term: "İlk yazılı kanun", def: "Urgakina (Sümer)" },
            { term: "Hammurabi Kanunları", def: "Babil, kısasa kısas" }
          ] },
        { id: "tar-08", name: "Orta Çağ'da Siyasi Yapılar", branch: "tarih",
          summary: "Feodalite ve Orta Çağ imparatorlukları.",
          content: `<h2>Orta Çağ'da Siyasi Yapılar</h2><p>Avrupa'da güçlü merkezî otoritenin olmadığı feodalite (derebeylik) düzeni egemendi. Doğu'da Bizans ve İslam imparatorlukları güçlü merkezî yapılardı.</p>`,
          pairs: [
            { term: "Feodalite", def: "Orta Çağ Avrupa toprak/koruma düzeni" },
            { term: "Senyör", def: "Toprak sahibi soylu" },
            { term: "Skolastik düşünce", def: "Kilise merkezli dogmatik anlayış" }
          ] },
        { id: "tar-09", name: "Tarımdan Ticarete Ekonomi", branch: "tarih",
          summary: "Üretim biçimleri ve ticaret yolları.",
          content: `<h2>Tarımdan Ticarete Ekonomi</h2><p>İlk Çağ'da temel geçim tarımdı; zamanla ticaret gelişti. İpek Yolu ve Baharat Yolu, Doğu ile Batı arasındaki ticaretin can damarı oldu.</p>`,
          pairs: [
            { term: "İpek Yolu", def: "Çin-Batı ticaret yolu" },
            { term: "Baharat Yolu", def: "Hindistan-Avrupa ticaret yolu" }
          ] },
        { id: "tar-10", name: "Orta Çağ'da Ordu", branch: "tarih",
          summary: "Orta Çağ ordu yapıları.",
          content: `<h2>Orta Çağ'da Ordu</h2><p>Orta Çağ'da ücretli, gönüllü ve toprak gelirine dayalı (tımarlı/iktalı) ordular görülür. Süvari birlikleri belirleyici güçtü.</p>`,
          pairs: [
            { term: "Tımarlı sipahi", def: "Toprak geliriyle beslenen süvari" },
            { term: "İkta sistemi", def: "Toprak gelirinin askere tahsisi" }
          ] },
        { id: "tar-11", name: "Kanunlar Gelişiyor", branch: "tarih",
          summary: "Orta Çağ'da hukukun gelişimi.",
          content: `<h2>Kanunlar Gelişiyor</h2><p>Orta Çağ'da örfi ve dinî (şer'i) hukuk bir arada gelişti. Türk-İslam devletlerinde töre ile şeriat birlikte uygulandı.</p>` },
        { id: "tar-12", name: "Avrasya'da İlk Türk İzleri", branch: "tarih",
          summary: "Orta Asya ve konargöçer yaşam tarzı.",
          content: `<h2>Avrasya'da İlk Türk İzleri</h2><p>Türklerin ilk ana yurdu Orta Asya'dır. Bozkır coğrafyası konargöçer (atlı-göçebe) yaşam tarzını, hayvancılığı ve güçlü süvari ordularını şekillendirmiştir.</p>` },
        { id: "tar-13", name: "Boylardan Devlete - I", branch: "tarih",
          summary: "Asya Hun ve I. Göktürk Devleti.",
          content: `<h2>Boylardan Devlete - I</h2><p>Bilinen ilk Türk devleti Asya Hun Devleti'dir (Mete Han, onlu ordu sistemi). Göktürkler "Türk" adını ilk kez devlet adı olarak kullanmıştır.</p>`,
          pairs: [
            { term: "Asya Hunları", def: "Bilinen ilk Türk devleti (Mete Han)" },
            { term: "Göktürkler", def: "“Türk” adını ilk kez devlet adı yaptı" },
            { term: "Onlu sistem", def: "Mete Han'ın ordu düzeni" }
          ] },
        { id: "tar-14", name: "Boylardan Devlete - II", branch: "tarih",
          summary: "Uygurlar ve diğer Türk toplulukları.",
          content: `<h2>Boylardan Devlete - II</h2><p>Uygurlar yerleşik hayata geçen ilk Türk topluluğudur; matbaa ve kâğıdı kullanmış, kendi alfabelerini geliştirmişlerdir. Orhun Yazıtları ilk Türkçe yazılı kaynaktır.</p>`,
          pairs: [
            { term: "Uygurlar", def: "Yerleşik hayata geçen ilk Türkler" },
            { term: "Orhun Yazıtları", def: "İlk Türkçe yazılı kaynak" }
          ] },
        { id: "tar-15", name: "Kavimler Göçü", branch: "tarih",
          summary: "375 Kavimler Göçü ve sonuçları.",
          content: `<h2>Kavimler Göçü</h2><p>375'te Hunların batıya hareketiyle başlayan Kavimler Göçü, Avrupa'nın etnik ve siyasi yapısını değiştirmiş, Roma'nın ikiye ayrılmasında ve Orta Çağ'ın başlamasında etkili olmuştur.</p>` },
        { id: "tar-16", name: "İslamiyet'in Doğuşu ve Yayılışı", branch: "tarih",
          summary: "Hz. Muhammed dönemi ve ilk yayılma.",
          content: `<h2>İslamiyet'in Doğuşu ve Yayılışı</h2><p>İslamiyet, Cahiliye Dönemi Arabistan'ında Hz. Muhammed ile doğdu. Hicret (622) ve fetihlerle yayıldı; Dört Halife Dönemi'nde geniş alana ulaştı.</p>` },
        { id: "tar-17", name: "Emeviler (661-750)", branch: "tarih",
          summary: "Saltanat sistemi ve Arap milliyetçiliği.",
          content: `<h2>Emeviler (661-750)</h2><p>Emeviler halifeliği saltanata dönüştürdü. Arap milliyetçiliği (mevali politikası) Arap olmayan Müslümanları rahatsız etti ve yıkılışı hızlandırdı.</p>` },
        { id: "tar-18", name: "Abbasiler ve Türkler - Bilim Medeniyeti", branch: "tarih",
          summary: "Beytülhikme ve Türklerle ilişkiler.",
          content: `<h2>Abbasiler ve Bilim Medeniyeti</h2><p>Abbasiler döneminde Beytülhikme ile bilim ve çeviri faaliyetleri zirve yaptı. Türkler orduda ve yönetimde önemli görevler aldı (Avasım şehirleri).</p>` },
        { id: "tar-19", name: "Türklerin İslamiyet'i Kabulü", branch: "tarih",
          summary: "Talas Savaşı ve Karahanlılar.",
          content: `<h2>Türklerin İslamiyet'i Kabulü</h2><p>751 Talas Savaşı'nda Türkler Abbasilerle birlikte Çin'e karşı savaştı; bu, Türk-İslam yakınlaşmasını başlattı. İlk Müslüman Türk devleti Karahanlılardır.</p>`,
          pairs: [
            { term: "Talas Savaşı (751)", def: "Türk-İslam yakınlaşmasını başlattı" },
            { term: "Karahanlılar", def: "İlk Müslüman Türk devleti" }
          ] },
        { id: "tar-20", name: "İslamiyet'in Türk Yapısına Etkisi", branch: "tarih",
          summary: "Devlet ve toplum yapısındaki değişim.",
          content: `<h2>İslamiyet'in Türk Yapısına Etkisi</h2><p>İslamiyet'le birlikte töre yanında şeriat, Türk devlet ve toplum yapısına girdi; sanat, mimari ve hukukta yeni anlayışlar gelişti.</p>` },
        { id: "tar-21", name: "Büyük Selçuklu Devleti", branch: "tarih",
          summary: "Dandanakan, Malazgirt ve teşkilat.",
          content: `<h2>Büyük Selçuklu Devleti</h2><p>Dandanakan Savaşı (1040) ile kurulan Büyük Selçuklu, Malazgirt Zaferi (1071) ile Anadolu'nun kapısını Türklere açtı. İkta sistemi ve Nizamiye medreseleri öne çıkar.</p>`,
          pairs: [
            { term: "Dandanakan (1040)", def: "Büyük Selçuklu'nun kuruluşu" },
            { term: "Malazgirt (1071)", def: "Anadolu'nun kapısı açıldı" }
          ] },
        { id: "tar-22", name: "Türklerin Anadolu'ya Yerleşmesi", branch: "tarih",
          summary: "Anadolu'nun Türkleşmesi süreci.",
          content: `<h2>Türklerin Anadolu'ya Yerleşmesi</h2><p>Malazgirt sonrası Türk boyları Anadolu'ya yerleşti; gaziler ve beylikler aracılığıyla Anadolu hızla Türkleşip İslamlaştı.</p>` },
        { id: "tar-23", name: "Anadolu'nun İlk Siyasi Teşekkülleri", branch: "tarih",
          summary: "İlk Türk beylikleri ve Anadolu Selçukluları.",
          content: `<h2>Anadolu'nun İlk Siyasi Teşekkülleri</h2><p>Danişmentliler, Saltuklular, Mengücekler gibi ilk beylikler Anadolu'da kuruldu. Anadolu Selçuklu Devleti bu birikimi siyasi birliğe taşıdı.</p>` },
        { id: "tar-24", name: "Hilal ve Haç Mücadelesi", branch: "tarih",
          summary: "Haçlı Seferleri ve sonuçları.",
          content: `<h2>Hilal ve Haç Mücadelesi</h2><p>1096'dan itibaren düzenlenen Haçlı Seferleri dinî-siyasi-ekonomik nedenlere dayanır. Avrupa'da skolastik düşünce zayıfladı, Doğu-Batı etkileşimi arttı.</p>` },
        { id: "tar-25", name: "Moğol İstilası ve Anadolu", branch: "tarih",
          summary: "Kösedağ Savaşı ve etkileri.",
          content: `<h2>Moğol İstilası ve Anadolu</h2><p>Kösedağ Savaşı (1243) ile Anadolu Selçuklu Devleti Moğol (İlhanlı) egemenliğine girdi; Anadolu'da siyasi birlik bozuldu, beylikler dönemi başladı.</p>` },
        { id: "tar-26", name: "Osmanlı Beyliği'nin Kuruluşu", branch: "tarih",
          summary: "Kuruluş ve ilk fetihler.",
          content: `<h2>Osmanlı Beyliği'nin Kuruluşu</h2><p>Osman Bey önderliğinde uç beyliği olarak kurulan Osmanlı, coğrafi konumu ve gaza anlayışıyla kısa sürede büyüdü; Bursa başkent oldu.</p>` },
        { id: "tar-27", name: "Rumeli'de İskan ve Politika", branch: "tarih",
          summary: "Rumeli'nin Türkleştirilmesi.",
          content: `<h2>Rumeli'de İskan Politikası</h2><p>Osmanlı, Rumeli'yi kalıcı yurt yapmak için Anadolu'dan getirdiği Türkmenleri buralara yerleştirdi (iskan siyaseti) ve hoşgörülü yönetim uyguladı.</p>` },
        { id: "tar-28", name: "Anadolu'da Türk Siyasi Birliği", branch: "tarih",
          summary: "Beyliklerin Osmanlı'ya katılması.",
          content: `<h2>Anadolu'da Türk Siyasi Birliği</h2><p>Osmanlı, savaş ve evlilik/satın alma yollarıyla Anadolu beyliklerini birleştirmeye çalıştı; bu süreç Yavuz ve Fatih dönemlerinde büyük ölçüde tamamlandı.</p>` },
        { id: "tar-29", name: "Devletleşmede Savaşçılar ve Askerler", branch: "tarih",
          summary: "Yeniçeriler ve devşirme sistemi.",
          content: `<h2>Devletleşmede Savaşçılar ve Askerler</h2><p>Kapıkulu ordusu ve devşirme sistemiyle merkezî, sürekli ve maaşlı bir ordu kuruldu; Yeniçeriler bu ordunun çekirdeğiydi.</p>` },
        { id: "tar-30", name: "Anadolu'nun Mutasavvıfları ve Yönetici Sınıf", branch: "tarih",
          summary: "Tasavvuf, sosyal ve kültürel hayat.",
          content: `<h2>Anadolu'nun Mutasavvıfları</h2><p>Mevlana, Yunus Emre, Hacı Bektaş Veli gibi mutasavvıflar Anadolu'nun manevi birliğine katkı sundu; ahilik esnaf-toplum düzenini sağladı.</p>` },
        { id: "tar-31", name: "İstanbul'un Fethi ve Sonuçları", branch: "tarih",
          summary: "1453 ve etkileri.",
          content: `<h2>İstanbul'un Fethi (1453)</h2><p>Fatih Sultan Mehmet İstanbul'u fethetti. Bizans sona erdi, Orta Çağ kapanıp Yeni Çağ açıldı; Osmanlı imparatorluğa dönüştü.</p>`,
          pairs: [
            { term: "İstanbul'un Fethi", def: "1453, Fatih Sultan Mehmet" },
            { term: "Fethin sonucu", def: "Orta Çağ kapandı, Yeni Çağ açıldı" }
          ] },
        { id: "tar-32", name: "Türk-İslam Dünyasında Birlik Çabaları", branch: "tarih",
          summary: "Doğu'da siyasi birlik.",
          content: `<h2>Türk-İslam Dünyasında Birlik</h2><p>Yavuz Sultan Selim'in Çaldıran ve Mercidabık-Ridaniye seferleriyle halifelik Osmanlı'ya geçti; Doğu'da İslam birliği güçlendi.</p>` },
        { id: "tar-33", name: "Dünyanın Muhteşem Gücü Osmanlı", branch: "tarih",
          summary: "Kanuni dönemi ve yükseliş.",
          content: `<h2>Dünyanın Muhteşem Gücü Osmanlı</h2><p>Kanuni Sultan Süleyman döneminde Osmanlı en geniş sınırlarına ulaştı; hukuk, denizcilik ve diplomaside dünya gücü oldu.</p>` },
        { id: "tar-34", name: "Stratejik Siyaset ve Dünya Gücü Osmanlı", branch: "tarih",
          summary: "Denizcilik ve diplomasi.",
          content: `<h2>Stratejik Siyaset</h2><p>Akdeniz hâkimiyeti (Preveze), kapitülasyonlar ve denge siyasetiyle Osmanlı, Avrupa siyasetinde belirleyici rol oynadı.</p>` },
        { id: "tar-35", name: "Saray, Şehir Kültürü ve Devlet İdaresi", branch: "tarih",
          summary: "Yönetim gelenekleri.",
          content: `<h2>Saray ve Şehir Kültürü</h2><p>Divan-ı Hümayun yönetimin merkeziydi. Saray, medrese ve şehir kültürü Osmanlı devlet idaresinin temelini oluşturdu.</p>` },
        { id: "tar-36", name: "Millet Sistemi ve Kültürel Değişim", branch: "tarih",
          summary: "Gayrimüslimlerin yönetimi.",
          content: `<h2>Millet Sistemi</h2><p>Osmanlı, farklı din ve milletleri "millet sistemi" ile yönetti; her topluluk kendi inanç ve hukukunda serbestti. Bu hoşgörü kültürel zenginlik sağladı.</p>` },
        { id: "tar-37", name: "Toprak Sistemi, Lonca ve Vakıflar", branch: "tarih",
          summary: "Tımar, lonca ve vakıf düzeni.",
          content: `<h2>Toprak Sistemi - Lonca - Vakıflar</h2><p>Tımar sistemi toprak gelirini asker ve üretime bağladı. Loncalar esnafı düzenledi; vakıflar sosyal hizmetleri yürüttü.</p>`,
          pairs: [
            { term: "Tımar sistemi", def: "Toprak geliri - asker/üretim düzeni" },
            { term: "Lonca", def: "Esnaf ve zanaatkâr örgütü" },
            { term: "Vakıf", def: "Sosyal hizmet kurumu" }
          ] },
        { id: "tar-38", name: "Uzun Savaşlardan Diplomasiye", branch: "tarih",
          summary: "Duraklama ve antlaşmalar.",
          content: `<h2>Uzun Savaşlardan Diplomasiye</h2><p>17. yüzyıldan itibaren uzun ve sonuçsuz savaşlar Osmanlı'yı yıprattı. Karlofça Antlaşması (1699) ilk büyük toprak kaybı ve diplomasiye geçişin işaretidir.</p>` },
        { id: "tar-39", name: "Okyanusların Önem Kazanması", branch: "tarih",
          summary: "Coğrafi keşiflerin etkisi.",
          content: `<h2>Okyanusların Önem Kazanması</h2><p>Coğrafi Keşiflerle ticaret yolları okyanuslara kaydı; İpek ve Baharat yolları önemini yitirdi, Osmanlı ekonomisi olumsuz etkilendi.</p>` },
        { id: "tar-40", name: "Fetihlerden Savunmaya", branch: "tarih",
          summary: "Gerileme dönemi.",
          content: `<h2>Fetihlerden Savunmaya</h2><p>18. yüzyılda Osmanlı taarruzdan savunmaya geçti. Pasarofça sonrası Lale Devri ıslahat arayışlarını başlattı; toprak kayıpları sürdü.</p>` },
        { id: "tar-41", name: "Avrupa'da Değişim Çağı", branch: "tarih",
          summary: "Rönesans, Reform, Aydınlanma.",
          content: `<h2>Avrupa'da Değişim Çağı</h2><p>Rönesans, Reform ve Aydınlanma ile Avrupa bilim, düşünce ve teknolojide ilerledi; Sanayi Devrimi'nin önü açıldı.</p>` },
        { id: "tar-42", name: "Osmanlı Devleti'nde Değişim", branch: "tarih",
          summary: "Islahat hareketleri.",
          content: `<h2>Osmanlı'da Değişim</h2><p>Lale Devri'nden itibaren askerî, idari ve eğitim alanında Batı örnekli ıslahatlar yapıldı (matbaa, mühendishaneler).</p>` },
        { id: "tar-43", name: "İsyanlar ve Düzeni Koruma", branch: "tarih",
          summary: "Celali ve eyalet isyanları.",
          content: `<h2>İsyanlar ve Düzeni Koruma</h2><p>Ekonomik bozulma ve merkezî otorite zayıflığı Celali isyanlarına yol açtı; devlet düzeni korumak için çeşitli tedbirler aldı.</p>` },
        { id: "tar-44", name: "İhtilaller Çağı - Sömürgecilik", branch: "tarih",
          summary: "Fransız İhtilali ve milliyetçilik.",
          content: `<h2>İhtilaller Çağı</h2><p>1789 Fransız İhtilali milliyetçilik, eşitlik ve özgürlük fikirlerini yaydı; çok uluslu Osmanlı'da azınlık isyanlarını tetikledi. Sömürgecilik küresel etki yarattı.</p>`,
          pairs: [
            { term: "Fransız İhtilali (1789)", def: "Milliyetçilik fikrini yaydı" },
            { term: "Milliyetçilik", def: "Çok uluslu Osmanlı'yı zorladı" }
          ] },
        { id: "tar-45", name: "XIX. Yüzyılda Modern Orduya Geçiş", branch: "tarih",
          summary: "Yeniçeriliğin kaldırılması.",
          content: `<h2>Modern Orduya Geçiş</h2><p>II. Mahmut Yeniçeri Ocağı'nı kaldırdı (1826, Vaka-i Hayriye) ve Batı tarzı modern ordu (Asakir-i Mansure) kurdu.</p>` },
        { id: "tar-46", name: "XIX. Yüzyılda Sosyal Hayattaki Değişimler", branch: "tarih",
          summary: "Kıyafet, eğitim, basın.",
          content: `<h2>Sosyal Hayattaki Değişimler</h2><p>Kıyafet, eğitim ve basın alanında Batılılaşma görüldü; ilk gazeteler, posta ve modern okullar bu dönemde yaygınlaştı.</p>` },
        { id: "tar-47", name: "Osmanlı'ya Yönelik Tehditler - I", branch: "tarih",
          summary: "Toprak kayıpları ve büyük güçler.",
          content: `<h2>Tehditler - I</h2><p>Rusya'nın güneye inme siyaseti, Mısır ve Balkan sorunları Osmanlı'yı zorladı; "Şark Meselesi" Avrupa'nın Osmanlı'yı paylaşma planına dönüştü.</p>` },
        { id: "tar-48", name: "Demokratikleşme Hareketleri", branch: "tarih",
          summary: "Tanzimat ve Meşrutiyet.",
          content: `<h2>Demokratikleşme Hareketleri</h2><p>Tanzimat (1839) ve Islahat Fermanı eşitlik adımlarıydı. I. Meşrutiyet (1876) ile ilk anayasa (Kanun-i Esasi) ve meclis açıldı.</p>`,
          pairs: [
            { term: "Tanzimat Fermanı", def: "1839, hukuk önünde eşitlik adımı" },
            { term: "I. Meşrutiyet (1876)", def: "İlk anayasa (Kanun-i Esasi)" }
          ] },
        { id: "tar-49", name: "Osmanlı Devleti'nde Darbeler", branch: "tarih",
          summary: "Askerî müdahaleler.",
          content: `<h2>Osmanlı'da Darbeler</h2><p>31 Mart Olayı (1909) gibi olaylarla ordu siyasete müdahale etti; İttihat ve Terakki yönetimde belirleyici hâle geldi.</p>` },
        { id: "tar-50", name: "Osmanlı'ya Yönelik Tehditler - II", branch: "tarih",
          summary: "Trablusgarp ve Balkan Savaşları.",
          content: `<h2>Tehditler - II</h2><p>Trablusgarp (1911) ve Balkan Savaşları (1912-13) ile Osmanlı Kuzey Afrika ve Balkanlardaki topraklarının çoğunu kaybetti.</p>` },
        { id: "tar-51", name: "Osmanlı Sanayileşme Çabaları", branch: "tarih",
          summary: "Fabrikalar ve ekonomi.",
          content: `<h2>Sanayileşme Çabaları</h2><p>Avrupa karşısında geri kalan Osmanlı, devlet eliyle fabrikalar kurmaya çalıştı; ancak kapitülasyonlar ve sermaye yetersizliği başarıyı sınırladı.</p>` },
        { id: "tar-52", name: "XIX-XX. Yüzyıl Nüfus, Salgın ve Kamuoyu", branch: "tarih",
          summary: "Şehirleşme, salgınlar, basın.",
          content: `<h2>Nüfus, Salgın ve Kamuoyu</h2><p>Göçler ve savaşlar nüfus yapısını değiştirdi; salgın hastalıklarla mücadele için karantina uygulandı, basın kamuoyunu etkiledi.</p>` },
        { id: "tar-53", name: "Mustafa Kemal'in Yetişmesi", branch: "tarih",
          summary: "Atatürk'ün eğitim ve askerlik hayatı.",
          content: `<h2>Mustafa Kemal'in Yetişmesi</h2><p>Selanik'te doğan Mustafa Kemal askerî okullarda yetişti; Trablusgarp ve Çanakkale'deki başarıları onu öne çıkardı.</p>` },
        { id: "tar-54", name: "20. Yüzyıl Başlarında Osmanlı", branch: "tarih",
          summary: "Savaş öncesi durum.",
          content: `<h2>20. Yüzyıl Başında Osmanlı</h2><p>Ardı ardına savaşlar, ekonomik sıkıntı ve siyasi çekişmeler içindeki Osmanlı, I. Dünya Savaşı'na Almanya'nın yanında girdi.</p>` },
        { id: "tar-55", name: "I. Dünya Savaşı'nda Osmanlı", branch: "tarih",
          summary: "Cepheler ve Çanakkale.",
          content: `<h2>I. Dünya Savaşı'nda Osmanlı</h2><p>Osmanlı birçok cephede savaştı. Çanakkale Cephesi'nde kazanılan zafer, Mustafa Kemal'i öne çıkardı ve büyük moral kaynağı oldu.</p>`,
          pairs: [
            { term: "Çanakkale Cephesi", def: "Osmanlı'nın kazandığı zafer" },
            { term: "Osmanlı'nın safı", def: "İttifak (Almanya yanında)" }
          ] },
        { id: "tar-56", name: "I. Dünya Savaşı'nın Sonuçları", branch: "tarih",
          summary: "Mondros ve işgaller.",
          content: `<h2>Savaşın Sonuçları</h2><p>Osmanlı yenildi; Mondros Ateşkesi (1918) imzalandı. Anlaşma maddeleri işgallere zemin hazırladı ve Milli Mücadele'yi başlattı.</p>`,
          pairs: [
            { term: "Mondros Ateşkesi (1918)", def: "İşgallere zemin hazırladı" }
          ] },
        { id: "tar-57", name: "Milli Mücadele'ye Hazırlık - I", branch: "tarih",
          summary: "Cemiyetler ve Mustafa Kemal'in Samsun'a çıkışı.",
          content: `<h2>Milli Mücadele'ye Hazırlık - I</h2><p>İşgaller karşısında yararlı/zararlı cemiyetler kuruldu. Mustafa Kemal 19 Mayıs 1919'da Samsun'a çıkarak mücadeleyi örgütlemeye başladı.</p>`,
          pairs: [
            { term: "19 Mayıs 1919", def: "Mustafa Kemal'in Samsun'a çıkışı" }
          ] },
        { id: "tar-58", name: "Milli Mücadele'ye Hazırlık - II", branch: "tarih",
          summary: "Kongreler ve Misak-ı Milli.",
          content: `<h2>Milli Mücadele'ye Hazırlık - II</h2><p>Amasya Genelgesi, Erzurum ve Sivas Kongreleri ile millî birlik sağlandı; Misak-ı Milli ile vatanın sınırları çizildi.</p>`,
          pairs: [
            { term: "Erzurum Kongresi", def: "Bölgesel; millî sınır vurgusu" },
            { term: "Sivas Kongresi", def: "Cemiyetler birleştirildi" }
          ] },
        { id: "tar-59", name: "BMM'nin Açılması - Sevr", branch: "tarih",
          summary: "23 Nisan 1920 ve Sevr Antlaşması.",
          content: `<h2>BMM'nin Açılması</h2><p>23 Nisan 1920'de TBMM açıldı ve millî egemenlik fiilen başladı. Osmanlı'ya imzalatılan Sevr Antlaşması ise ülkeyi paylaşıyordu, TBMM tanımadı.</p>`,
          pairs: [
            { term: "23 Nisan 1920", def: "TBMM'nin açılışı" },
            { term: "Sevr Antlaşması", def: "Ülkeyi paylaşan, uygulanmayan antlaşma" }
          ] },
        { id: "tar-60", name: "Doğu, Güney ve Batı Cepheleri", branch: "tarih",
          summary: "Kurtuluş Savaşı cepheleri.",
          content: `<h2>Cepheler</h2><p>Doğu'da Ermenilerle, Güney'de Fransızlarla mücadele edildi. Batı Cephesi'nde Yunan ordusuna karşı I-II. İnönü, Sakarya ve Büyük Taarruz zaferleri kazanıldı.</p>`,
          pairs: [
            { term: "Sakarya Zaferi (1921)", def: "Savunmadan taarruza geçiş" },
            { term: "Büyük Taarruz (1922)", def: "Yunan ordusunun yenilgisi" }
          ] },
        { id: "tar-61", name: "Milli Mücadele'nin Sonu - Lozan", branch: "tarih",
          summary: "Mudanya ve Lozan Antlaşması.",
          content: `<h2>Lozan Barış Antlaşması (1923)</h2><p>Mudanya Ateşkesi'nin ardından Lozan Antlaşması imzalandı; yeni Türk devletinin bağımsızlığı ve sınırları uluslararası alanda tanındı.</p>`,
          pairs: [
            { term: "Lozan Antlaşması (1923)", def: "Yeni Türkiye'nin tapusu" }
          ] },
        { id: "tar-62", name: "Atatürk İlkeleri ve Siyasi-Hukuki İnkılaplar", branch: "tarih",
          summary: "Cumhuriyet, ilkeler, hukuk.",
          content: `<h2>İlkeler ve Siyasi-Hukuki İnkılaplar</h2><p>Cumhuriyet ilan edildi (1923), saltanat ve hilafet kaldırıldı. Medeni Kanun kabul edildi. Altı Atatürk ilkesi devletin temelini oluşturdu.</p>`,
          pairs: [
            { term: "Cumhuriyetin ilanı", def: "29 Ekim 1923" },
            { term: "Saltanatın kaldırılması", def: "1922" }
          ] },
        { id: "tar-63", name: "Atatürk Dönemi İnkılapları", branch: "tarih",
          summary: "Eğitim, harf, kılık-kıyafet inkılapları.",
          content: `<h2>Atatürk Dönemi İnkılapları</h2><p>Harf İnkılabı (1928), Tevhid-i Tedrisat, kılık-kıyafet, takvim-saat-ölçü ve kadın hakları inkılaplarıyla toplum çağdaşlaştırıldı.</p>`,
          pairs: [
            { term: "Harf İnkılabı (1928)", def: "Yeni Türk alfabesi" },
            { term: "Tevhid-i Tedrisat", def: "Eğitimin birleştirilmesi (1924)" }
          ] },
        { id: "tar-64", name: "Atatürk Dönemi İç Politika", branch: "tarih",
          summary: "Çok partili hayat denemeleri.",
          content: `<h2>Atatürk Dönemi İç Politika</h2><p>Çok partili hayata geçiş denemeleri (Terakkiperver, Serbest Cumhuriyet Fırkası) ve bazı isyanlar bu dönemin iç siyasetini şekillendirdi.</p>` },
        { id: "tar-65", name: "İki Dünya Savaşı Arasında Dünya", branch: "tarih",
          summary: "Ekonomik buhran ve rejimler.",
          content: `<h2>İki Savaş Arası Dünya</h2><p>1929 Dünya Ekonomik Buhranı ülkeleri sarstı; faşizm ve nazizm gibi totaliter rejimler yükseldi, bu da yeni bir savaşın zeminini hazırladı.</p>` },
        { id: "tar-66", name: "Atatürk Dönemi Dış Politika", branch: "tarih",
          summary: "Montrö, Hatay, paktlar.",
          content: `<h2>Atatürk Dönemi Dış Politika</h2><p>"Yurtta sulh, cihanda sulh" ilkesiyle Montrö Boğazlar Sözleşmesi, Balkan ve Sadabat paktları ve Hatay'ın katılım süreci yürütüldü.</p>`,
          pairs: [
            { term: "Montrö Sözleşmesi (1936)", def: "Boğazlar Türk denetimine geçti" }
          ] },
        { id: "tar-67", name: "II. Dünya Savaşı ve Türkiye", branch: "tarih",
          summary: "Savaş süreci ve Türkiye'nin tutumu.",
          content: `<h2>II. Dünya Savaşı ve Türkiye</h2><p>Türkiye savaş boyunca tarafsızlığını korudu, sona doğru fiilen Müttefiklerin yanında yer aldı; savaş büyük yıkım ve iki kutuplu dünya bıraktı.</p>` },
        { id: "tar-68", name: "II. Dünya Savaşı Sonrası Gelişmeler", branch: "tarih",
          summary: "Soğuk Savaş ve Türkiye.",
          content: `<h2>Savaş Sonrası Gelişmeler</h2><p>Soğuk Savaş başladı; Türkiye Batı blokunda yer aldı, NATO'ya girdi (1952) ve çok partili hayata geçti (1946-1950).</p>` },
        { id: "tar-69", name: "1960 Sonrası Türk Dış Politikası", branch: "tarih",
          summary: "Kıbrıs ve dış ilişkiler.",
          content: `<h2>1960 Sonrası Dış Politika</h2><p>Kıbrıs Meselesi (1974 Barış Harekâtı), AB süreci ve değişen blok ilişkileri dönemin dış politikasını belirledi.</p>` },
        { id: "tar-70", name: "1960 Sonrası Dünyadaki Siyasi Gelişmeler", branch: "tarih",
          summary: "Bloklar, bağımsızlıklar.",
          content: `<h2>1960 Sonrası Dünya</h2><p>Sömürgelerin bağımsızlığı, bloklar arası gerginlik-yumuşama ve teknolojik yarış dünyayı şekillendirdi.</p>` },
        { id: "tar-71", name: "Türkiye'de Siyasi, Ekonomik, Sosyokültürel Hayat", branch: "tarih",
          summary: "İç gelişmeler.",
          content: `<h2>Türkiye'de Hayat</h2><p>Darbeler, ekonomik kalkınma planları, göç ve şehirleşme Türkiye'nin siyasi, ekonomik ve sosyokültürel yapısını dönüştürdü.</p>` },
        { id: "tar-72", name: "1990 Sonrasında Türkiye", branch: "tarih",
          summary: "Küreselleşme dönemi.",
          content: `<h2>1990 Sonrasında Türkiye</h2><p>Soğuk Savaş'ın bitişi, küreselleşme, AB adaylığı ve teknolojik dönüşüm Türkiye'nin gündemini belirledi.</p>` },
        { id: "tar-73", name: "1990 Sonrası Gelişmelerin Türkiye'ye Etkileri", branch: "tarih",
          summary: "Bölgesel ve küresel etkiler.",
          content: `<h2>Gelişmelerin Türkiye'ye Etkileri</h2><p>Komşu bölgelerdeki çatışmalar, göç dalgaları ve küresel ekonomik değişimler Türkiye'nin iç ve dış politikasını doğrudan etkiledi.</p>` },
        {
          id: "cog-konum", name: "Türkiye'nin Konumu", branch: "cografya",
          summary: "Matematik ve özel konum, sonuçları.",
          content: `
            <h2>Türkiye'nin Konumu</h2>
            <ul>
              <li><b>Matematik konum:</b> 36°-42° K paralelleri, 26°-45° D meridyenleri. Dört mevsim belirgin; yerel saat doğuda ileri.</li>
              <li><b>Özel konum:</b> üç tarafı denizlerle çevrili, boğazlara sahip, Asya-Avrupa köprüsü.</li>
            </ul>`,
          pairs: [
            { term: "Matematik konum", def: "Paralel ve meridyenlere göre yer" },
            { term: "Özel konum", def: "Boğazlar, denizler, kıtalara göre yer" },
            { term: "Dört mevsim", def: "Orta kuşakta olmanın sonucu" },
            { term: "Yerel saat", def: "Doğuda batıdan ileridir" }
          ]
        },
        {
          id: "cog-iklim", name: "İklim ve Bitki Örtüsü", branch: "cografya",
          summary: "Akdeniz, Karadeniz ve karasal iklim.",
          content: `
            <h2>İklim ve Bitki Örtüsü</h2>
            <ul>
              <li><b>Akdeniz:</b> yazı sıcak-kurak; bitki örtüsü <b>maki</b>.</li>
              <li><b>Karadeniz:</b> her mevsim yağışlı; gür <b>orman</b>.</li>
              <li><b>Karasal:</b> kışı soğuk; bitki örtüsü <b>bozkır (step)</b>.</li>
            </ul>`,
          pairs: [
            { term: "Akdeniz iklimi", def: "Bitki örtüsü maki" },
            { term: "Karadeniz iklimi", def: "Her mevsim yağışlı, gür orman" },
            { term: "Karasal iklim", def: "Bitki örtüsü bozkır (step)" },
            { term: "Maki", def: "Akdeniz'in kısa boylu çalı örtüsü" }
          ]
        },
        {
          id: "fel-giris", name: "Felsefeyi Tanıma", branch: "felsefe",
          summary: "Felsefenin anlamı ve alanları.",
          content: `
            <h2>Felsefeyi Tanıma</h2>
            <p>Felsefe "bilgelik sevgisi"dir; varlık, bilgi ve değerleri akılla sorgular.</p>
            <ul>
              <li><b>Epistemoloji:</b> bilgi felsefesi</li>
              <li><b>Ontoloji:</b> varlık felsefesi</li>
              <li><b>Etik:</b> ahlak felsefesi · <b>Estetik:</b> güzellik/sanat felsefesi</li>
            </ul>`,
          pairs: [
            { term: "Epistemoloji", def: "Bilgi felsefesi" },
            { term: "Ontoloji", def: "Varlık felsefesi" },
            { term: "Etik", def: "Ahlak felsefesi" },
            { term: "Estetik", def: "Güzelliğin/sanatın felsefesi" }
          ]
        },
        {
          id: "din-bilgi", name: "Bilgi ve İnanç", branch: "din",
          summary: "İnancın bilgi kaynakları ve temel kavramlar.",
          content: `
            <h2>Bilgi ve İnanç</h2>
            <ul>
              <li><b>İman:</b> kalben onaylama, inanç.</li>
              <li><b>Vahiy:</b> Allah'ın peygamberlere bildirmesi.</li>
              <li><b>Akıl:</b> dinî sorumluluğun ön şartı.</li>
              <li><b>Tevhid:</b> Allah'ın bir ve tek olduğuna inanmak.</li>
            </ul>`,
          pairs: [
            { term: "İman", def: "Kalben onaylama, inanç" },
            { term: "Vahiy", def: "Allah'ın peygambere bildirmesi" },
            { term: "Akıl", def: "Dinî sorumluluğun ön şartı" },
            { term: "Tevhid", def: "Allah'ın birliğine inanmak" }
          ]
        }
      ]
    },

    /* ===================== FEN BİLİMLERİ (branşlı) ===================== */
    {
      id: "fen", name: "Fen Bilimleri", icon: "🔬",
      branches: [
        { id: "fizik", name: "Fizik", icon: "⚙️" },
        { id: "kimya", name: "Kimya", icon: "⚗️" },
        { id: "biyoloji", name: "Biyoloji", icon: "🧬" }
      ],
      units: [
        {
          id: "fiz-hareket", name: "Hareket", branch: "fizik",
          summary: "Yol, yer değiştirme, sürat, hız, ivme.",
          content: `
            <h2>Hareket</h2>
            <div class="formula">Sürat = Yol/Zaman &nbsp; | &nbsp; Hız = Yer değiştirme/Zaman &nbsp; | &nbsp; İvme = Δv/t</div>
            <p>Yol skaler, yer değiştirme vektöreldir.</p>`,
          pairs: [
            { term: "Sürat", def: "Yol / Zaman" },
            { term: "Hız", def: "Yer değiştirme / Zaman" },
            { term: "İvme", def: "Hız değişimi / Zaman (m/s²)" },
            { term: "Yol", def: "Alınan toplam mesafe (skaler)" },
            { term: "Yer değiştirme", def: "İlk-son konum arası (vektörel)" }
          ]
        },
        {
          id: "fiz-kuvvet", name: "Kuvvet ve Hareket", branch: "fizik",
          summary: "Newton yasaları ve sürtünme.",
          content: `
            <h2>Kuvvet ve Hareket</h2>
            <ul>
              <li><b>1. yasa:</b> eylemsizlik (net kuvvet 0 → hız korunur).</li>
              <li><b>2. yasa:</b> F = m·a.</li>
              <li><b>3. yasa:</b> etki-tepki (eşit ve zıt).</li>
            </ul>`,
          pairs: [
            { term: "F = m · a", def: "Newton'un 2. yasası" },
            { term: "Eylemsizlik", def: "Newton'un 1. yasası" },
            { term: "Etki-tepki", def: "Newton'un 3. yasası" },
            { term: "Sürtünme kuvveti", def: "Harekete zıt yönde etki eder" }
          ]
        },
        {
          id: "kim-atom", name: "Atom ve Yapısı", branch: "kimya",
          summary: "Temel tanecikler ve izotop.",
          content: `
            <h2>Atom ve Yapısı</h2>
            <ul>
              <li><b>Proton:</b> çekirdekte, + yüklü (element kimliği).</li>
              <li><b>Nötron:</b> çekirdekte, yüksüz. <b>Elektron:</b> çevrede, − yüklü.</li>
              <li><b>İzotop:</b> proton aynı, nötron farklı.</li>
            </ul>`,
          pairs: [
            { term: "Proton", def: "Çekirdekte, pozitif yüklü" },
            { term: "Nötron", def: "Çekirdekte, yüksüz" },
            { term: "Elektron", def: "Çekirdek çevresinde, negatif" },
            { term: "İzotop", def: "Proton aynı, nötron farklı" }
          ]
        },
        {
          id: "kim-periyodik", name: "Periyodik Sistem", branch: "kimya",
          summary: "Periyot, grup, metal-ametal.",
          content: `
            <h2>Periyodik Sistem</h2>
            <ul>
              <li><b>Periyot:</b> yatay sıra (7). <b>Grup:</b> dikey sütun.</li>
              <li><b>Metaller</b> elektron verir; <b>ametaller</b> alır; <b>soy gazlar</b> kararlıdır.</li>
            </ul>`,
          pairs: [
            { term: "Periyot", def: "Periyodik tabloda yatay sıra" },
            { term: "Grup", def: "Periyodik tabloda dikey sütun" },
            { term: "Soy gaz", def: "Tepkimeye girmeyen kararlı element" },
            { term: "Metaller", def: "Elektron verir, ısı/elektrik iletir" }
          ]
        },
        {
          id: "biy-hucre", name: "Hücre", branch: "biyoloji",
          summary: "Organeller ve prokaryot-ökaryot.",
          content: `
            <h2>Hücre</h2>
            <ul>
              <li><b>Mitokondri:</b> ATP üretimi. <b>Ribozom:</b> protein sentezi.</li>
              <li><b>Kloroplast:</b> fotosentez (bitki). <b>Çekirdek:</b> DNA.</li>
              <li><b>Lizozom:</b> hücre içi sindirim.</li>
            </ul>`,
          pairs: [
            { term: "Mitokondri", def: "Enerji (ATP) üretimi" },
            { term: "Ribozom", def: "Protein sentezi" },
            { term: "Kloroplast", def: "Fotosentez (sadece bitki)" },
            { term: "Çekirdek", def: "Kalıtım maddesini (DNA) taşır" },
            { term: "Lizozom", def: "Hücre içi sindirim" }
          ]
        }
      ]
    }
  ],

  /* Sorular — subject + unit ile ilişkili. answer = doğru şıkkın index'i */
  questions: [
    /* TÜRKÇE */
    { subject: "turkce", unit: "tr-sozcuk", q: "\"Çok <b>soğuk</b> bir insandı.\" cümlesindeki 'soğuk' hangi anlamdadır?",
      options: ["Gerçek", "Mecaz", "Terim", "Yan", "Sesteş"], answer: 1,
      explain: "Fiziksel ısı değil, sevecen olmayan tavrı anlatır; <b>mecaz</b>." },
    { subject: "turkce", unit: "tr-sozcuk", q: "Hangi sözcük çifti eş anlamlıdır?",
      options: ["sıcak - soğuk", "kelime - sözcük", "yüz - yüz", "ak - kara", "al - ver"], answer: 1,
      explain: "'Kelime' ve 'sözcük' eş anlamlıdır." },
    { subject: "turkce", unit: "tr-sozcuk", q: "\"Herkesin <b>gözüne girdi</b>.\" altı çizili söz nedir?",
      options: ["Atasözü", "Deyim", "İkileme", "Terim", "Yansıma"], answer: 1,
      explain: "'Gözüne girmek' kalıplaşmış mecazlı söz → <b>deyim</b>." },
    { subject: "turkce", unit: "tr-cumle", q: "Hangi cümlede neden-sonuç ilişkisi vardır?",
      options: ["Kazanmak için çalıştı.", "Hava soğuduğu için üşüdük.", "Gelirsen görüşürüz.", "En az kardeşi kadar başarılı.", "Hem çalışır hem okur."], answer: 1,
      explain: "'Soğuduğu için' gerekçe (neden) bildirir." },
    { subject: "turkce", unit: "tr-cumle", q: "\"Sınavı kazanmak için gece gündüz çalıştı.\" hangi ilişki vardır?",
      options: ["Koşul", "Amaç-sonuç", "Karşılaştırma", "Neden-sonuç", "Olasılık"], answer: 1,
      explain: "'Kazanmak için' eylemin amacını belirtir → <b>amaç-sonuç</b>." },
    { subject: "turkce", unit: "tr-paragraf", q: "Yazarın okura vermek istediği temel mesaja ne denir?",
      options: ["Yardımcı düşünce", "Ana düşünce", "Konu", "Başlık", "Anlatım biçimi"], answer: 1,
      explain: "Temel mesaj <b>ana düşünce</b>dir." },
    { subject: "turkce", unit: "tr-paragraf", q: "Paragrafın giriş cümlesi için doğru olan hangisidir?",
      options: ["'Ancak' ile başlar", "Önceki cümleye bağlıdır", "Bağımsız ve bağlaçsız başlar", "Soru cümlesidir", "Sonuç bildirir"], answer: 2,
      explain: "Giriş cümlesi <b>bağımsız ve bağlaçsız</b> başlar." },
    { subject: "turkce", unit: "tr-ses", q: "Hangisinde ünsüz yumuşaması vardır?",
      options: ["kitabı", "kalemi", "evi", "yolu", "suyu"], answer: 0,
      explain: "kitap → kita<b>b</b>ı (p→b)." },
    { subject: "turkce", unit: "tr-ses", q: "\"Burun\" sözcüğü '-u' ekiyle hangi ses olayına uğrar?",
      options: ["Ünsüz türemesi", "Ünlü düşmesi", "Ünsüz benzeşmesi", "Daralma", "Kaynaştırma"], answer: 1,
      explain: "burun → bur<b>n</b>u: <b>ünlü düşmesi</b>." },
    { subject: "turkce", unit: "tr-yazim", q: "Hangi cümlede \"de/da\" bağlacının yazımı yanlıştır?",
      options: ["Sen de bizimle gel.", "Ben de gördüm onu.", "Ali de gelecek.", "Kitap da masada kaldı.", "Oda burada yok."], answer: 4,
      explain: "\"<b>O da</b> burada yok\" olmalı; bağlaç \"da\" ayrı yazılır. 'Oda' bitişik yazılınca 'oda (room)' anlamına gelir." },
    { subject: "turkce", unit: "tr-yazim", q: "\"Biliyorum ___ yarın gelecek.\" boşluğa gelen 'ki' nasıl yazılır?",
      options: ["bitişik", "ayrı", "kesmeyle", "büyük harfle", "tırnakta"], answer: 1,
      explain: "Bağlaç 'ki' <b>ayrı</b> yazılır." },

    /* MATEMATİK */
    { subject: "matematik", unit: "mat-temel", q: "Ardışık üç çift sayının toplamı 36 ise en büyüğü kaçtır?",
      options: ["10", "12", "14", "16", "18"], answer: 2,
      explain: "3n+6=36 → n=10; en büyük 14." },
    { subject: "matematik", unit: "mat-temel", q: "a tek, b çift ise hangisi her zaman çifttir?",
      options: ["a + b", "a · b", "a − b", "a + 1", "b − 1"], answer: 1,
      explain: "Çarpımda çift çarpan (b) → sonuç çift." },
    { subject: "matematik", unit: "mat-bolme", q: "7'ye bölününce bölüm 12, kalan 5 olan sayı kaçtır?",
      options: ["79", "84", "89", "77", "95"], answer: 2,
      explain: "7×12+5 = 89." },
    { subject: "matematik", unit: "mat-bolme", q: "Hangisi 3 ile tam bölünür?",
      options: ["124", "238", "171", "401", "560"], answer: 2,
      explain: "1+7+1=9, 9 → 3'ün katı." },
    { subject: "matematik", unit: "mat-uslu", q: "2³ · 2⁴ kaçtır?",
      options: ["2⁷", "2¹²", "4⁷", "2¹", "8"], answer: 0,
      explain: "Üsler toplanır: 2⁷." },
    { subject: "matematik", unit: "mat-uslu", q: "3⁻² kaçtır?",
      options: ["9", "-9", "1/9", "-1/9", "6"], answer: 2,
      explain: "a⁻ⁿ=1/aⁿ → 1/9." },
    { subject: "matematik", unit: "mat-koklu", q: "√12 ifadesinin en sade hâli?",
      options: ["2√3", "3√2", "4√3", "6", "√6"], answer: 0,
      explain: "√(4·3)=2√3." },
    { subject: "matematik", unit: "mat-koklu", q: "√8 · √2 kaçtır?",
      options: ["2", "4", "√10", "16", "8"], answer: 1,
      explain: "√16 = 4." },
    { subject: "matematik", unit: "mat-oran", q: "a/b = 3/5 ve a = 12 ise b kaçtır?",
      options: ["15", "18", "20", "25", "10"], answer: 2,
      explain: "3b=60 → b=20." },
    { subject: "matematik", unit: "mat-problem", q: "200 TL'ye %20 zam yapılırsa yeni fiyat kaç TL?",
      options: ["220", "240", "180", "260", "200"], answer: 1,
      explain: "200×1,20 = 240." },
    { subject: "matematik", unit: "mat-problem", q: "60 km/sa hızla 150 km kaç saatte alınır?",
      options: ["2", "2,5", "3", "1,5", "4"], answer: 1,
      explain: "150/60 = 2,5 saat." },

    /* SOSYAL — Tarih */
    { subject: "sosyal", unit: "tar-04", q: "İlk madeni parayı kullanan Anadolu uygarlığı?",
      options: ["Hititler", "Urartular", "Frigler", "Lidyalılar", "İyonlar"], answer: 3,
      explain: "Parayı <b>Lidyalılar</b> icat etti." },
    { subject: "sosyal", unit: "tar-04", q: "İlk yazılı antlaşma Kadeş kimler arasında imzalandı?",
      options: ["Sümer-Akad", "Hitit-Mısır", "Babil-Asur", "Lidya-Pers", "Urartu-Frig"], answer: 1,
      explain: "<b>Hititler ile Mısırlılar</b> arasında." },
    { subject: "sosyal", unit: "tar-13", q: "\"Türk\" adını ilk kez devlet adı yapan Türk devleti?",
      options: ["Asya Hunları", "Göktürkler", "Uygurlar", "Avarlar", "Hazarlar"], answer: 1,
      explain: "<b>Göktürkler</b>." },
    { subject: "sosyal", unit: "tar-14", q: "Yerleşik hayata geçen ilk Türk topluluğu?",
      options: ["Hunlar", "Göktürkler", "Uygurlar", "Kırgızlar", "Peçenekler"], answer: 2,
      explain: "<b>Uygurlar</b>." },
    { subject: "sosyal", unit: "cog-konum", q: "Türkiye'de dört mevsimin belirgin yaşanmasının temel nedeni?",
      options: ["Özel konum", "Orta kuşakta (matematik konum) olması", "Denizlerle çevrili olması", "Dağların uzanışı", "Boğazlar"], answer: 1,
      explain: "Orta kuşakta yer alması (matematik konum)." },
    { subject: "sosyal", unit: "cog-iklim", q: "Akdeniz ikliminin doğal bitki örtüsü?",
      options: ["Bozkır", "Maki", "Orman", "Tundra", "Çayır"], answer: 1,
      explain: "Akdeniz → <b>maki</b>." },
    { subject: "sosyal", unit: "fel-giris", q: "Bilginin kaynağını ve sınırlarını inceleyen felsefe alanı?",
      options: ["Ontoloji", "Etik", "Epistemoloji", "Estetik", "Mantık"], answer: 2,
      explain: "<b>Epistemoloji</b> (bilgi felsefesi)." },
    { subject: "sosyal", unit: "din-bilgi", q: "Allah'ın bir ve tek olduğuna inanmaya ne denir?",
      options: ["Vahiy", "Tevhid", "Nübüvvet", "Ahiret", "İhsan"], answer: 1,
      explain: "Allah'ın birliği inancı <b>tevhid</b>." },
    { subject: "sosyal", unit: "din-bilgi", q: "Allah'ın peygamberlerine mesajını bildirmesine ne denir?",
      options: ["İlham", "Vahiy", "Rüya", "Sezgi", "Kıyas"], answer: 1,
      explain: "Bu bildirme <b>vahiy</b>dir." },

    /* FEN */
    { subject: "fen", unit: "fiz-hareket", q: "100 m yolu 5 s'de alan aracın sürati kaç m/s?",
      options: ["10", "15", "20", "25", "5"], answer: 2,
      explain: "100/5 = 20 m/s." },
    { subject: "fen", unit: "fiz-hareket", q: "Hızı 0'dan 20 m/s'ye 4 s'de çıkan aracın ivmesi?",
      options: ["4", "5", "16", "80", "2"], answer: 1,
      explain: "(20-0)/4 = 5 m/s²." },
    { subject: "fen", unit: "fiz-kuvvet", q: "2 kg cisme 10 N kuvvet uygulanırsa ivme kaç m/s²?",
      options: ["2", "5", "10", "20", "0,2"], answer: 1,
      explain: "F=m·a → 10=2·a → 5." },
    { subject: "fen", unit: "fiz-kuvvet", q: "\"Her etkiye eşit ve zıt bir tepki vardır\" hangi yasadır?",
      options: ["1. yasa", "2. yasa", "3. yasa", "Çekim", "Korunum"], answer: 2,
      explain: "Etki-tepki → <b>3. yasa</b>." },
    { subject: "fen", unit: "kim-atom", q: "Atom no 11, kütle no 23 ise nötron sayısı?",
      options: ["11", "12", "23", "34", "10"], answer: 1,
      explain: "23−11 = 12." },
    { subject: "fen", unit: "kim-atom", q: "Proton sayısı aynı, nötron sayısı farklı atomlara ne denir?",
      options: ["İyon", "İzotop", "İzoton", "Allotrop", "Molekül"], answer: 1,
      explain: "<b>İzotop</b>." },
    { subject: "fen", unit: "kim-periyodik", q: "Periyodik tablodaki yatay sıralara ne denir?",
      options: ["Grup", "Periyot", "Blok", "Aile", "Küme"], answer: 1,
      explain: "Yatay sıra → <b>periyot</b>." },
    { subject: "fen", unit: "biy-hucre", q: "ATP (enerji) üretiminden sorumlu organel?",
      options: ["Ribozom", "Mitokondri", "Kloroplast", "Lizozom", "Golgi"], answer: 1,
      explain: "Enerji santrali <b>mitokondri</b>." },
    { subject: "fen", unit: "biy-hucre", q: "Hangisi sadece bitki hücresinde bulunur?",
      options: ["Mitokondri", "Ribozom", "Çekirdek", "Kloroplast", "Hücre zarı"], answer: 3,
      explain: "Fotosentez yapan <b>kloroplast</b> bitkiye özgü." }
  ]
};
