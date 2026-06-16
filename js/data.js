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
        {
          id: "tar-ilkcag", name: "İlk Çağ Uygarlıkları", branch: "tarih",
          summary: "Mezopotamya, Anadolu ve Mısır uygarlıkları.",
          content: `
            <h2>İlk Çağ Uygarlıkları</h2>
            <ul>
              <li><b>Sümerler:</b> yazıyı (çivi yazısı) ve ilk yazılı kanunları buldu.</li>
              <li><b>Hititler:</b> Kadeş Antlaşması (ilk yazılı antlaşma).</li>
              <li><b>Urartular:</b> su kanalları, kaya mezarları.</li>
              <li><b>Frigler:</b> Kibele inancı, tarım. <b>Lidyalılar:</b> ilk madeni para.</li>
            </ul>`,
          pairs: [
            { term: "Lidyalılar", def: "İlk madeni parayı icat etti" },
            { term: "Sümerler", def: "Yazıyı (çivi yazısı) buldu" },
            { term: "Hititler", def: "Kadeş Antlaşması'nı imzaladı" },
            { term: "Urartular", def: "Su kanalları ve kaya mezarları" },
            { term: "Frigler", def: "Kibele inancı, tarım toplumu" }
          ]
        },
        {
          id: "tar-ilkturk", name: "İlk Türk Devletleri", branch: "tarih",
          summary: "Asya Hun, Göktürk ve Uygur devletleri.",
          content: `
            <h2>İlk Türk Devletleri</h2>
            <ul>
              <li><b>Asya Hunları:</b> bilinen ilk Türk devleti (Mete Han, onlu sistem).</li>
              <li><b>Göktürkler:</b> "Türk" adını ilk kez devlet adı yaptı; Orhun Yazıtları.</li>
              <li><b>Uygurlar:</b> yerleşik hayata geçen ilk Türkler; matbaa/kâğıt.</li>
            </ul>`,
          pairs: [
            { term: "Asya Hunları", def: "Bilinen ilk Türk devleti (Mete Han)" },
            { term: "Göktürkler", def: "“Türk” adını ilk kez devlet adı yaptı" },
            { term: "Uygurlar", def: "Yerleşik hayata geçen ilk Türkler" },
            { term: "Orhun Yazıtları", def: "İlk Türkçe yazılı kaynak" }
          ]
        },
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
    { subject: "sosyal", unit: "tar-ilkcag", q: "İlk madeni parayı kullanan Anadolu uygarlığı?",
      options: ["Hititler", "Urartular", "Frigler", "Lidyalılar", "İyonlar"], answer: 3,
      explain: "Parayı <b>Lidyalılar</b> icat etti." },
    { subject: "sosyal", unit: "tar-ilkcag", q: "İlk yazılı antlaşma Kadeş kimler arasında imzalandı?",
      options: ["Sümer-Akad", "Hitit-Mısır", "Babil-Asur", "Lidya-Pers", "Urartu-Frig"], answer: 1,
      explain: "<b>Hititler ile Mısırlılar</b> arasında." },
    { subject: "sosyal", unit: "tar-ilkturk", q: "\"Türk\" adını ilk kez devlet adı yapan Türk devleti?",
      options: ["Asya Hunları", "Göktürkler", "Uygurlar", "Avarlar", "Hazarlar"], answer: 1,
      explain: "<b>Göktürkler</b>." },
    { subject: "sosyal", unit: "tar-ilkturk", q: "Yerleşik hayata geçen ilk Türk topluluğu?",
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
