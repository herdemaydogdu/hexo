/* ============================================================
   TYT Hazırlık — İçerik Verisi
   Yeni ders/konu/soru eklemek için bu dosyayı düzenlemen yeterli.
   questions[].answer = doğru şıkkın index'i (0=A,1=B,2=C,3=D,4=E)
   ============================================================ */

const TYT_DATA = {
  exam: { name: "TYT", totalQuestions: 120, durationMin: 165 },

  subjects: [
    /* ===================== TÜRKÇE ===================== */
    {
      id: "turkce", name: "Türkçe", icon: "📚", questionCount: 40,
      topics: [
        {
          id: "sozcukte-anlam", title: "Sözcükte Anlam",
          summary: "Gerçek, yan, mecaz ve terim anlam; eş-zıt-sesteş sözcükler.",
          content: `
            <h2>Sözcükte Anlam</h2>
            <p>Bir sözcüğün cümle içinde kazandığı anlam, kullanıldığı bağlama göre değişir. TYT'de bu konudan genellikle 2-3 soru gelir.</p>
            <h3>Gerçek (Temel) Anlam</h3>
            <p>Sözcüğün akla gelen ilk, sözlükteki anlamıdır. Örnek: "Soğuk sudan içti."</p>
            <h3>Yan Anlam</h3>
            <p>Temel anlamla ilişkili olarak kazanılan yeni anlamdır. Örnek: "Masanın <b>ayağı</b> kırıldı."</p>
            <h3>Mecaz Anlam</h3>
            <p>Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı anlamdır. Örnek: "Çok <b>soğuk</b> bir insandı."</p>
            <h3>Terim Anlam</h3>
            <p>Bir bilim, sanat veya meslek dalına özgü anlamdır. Örnek: "Üçgenin <b>açı</b>ları toplamı 180 derecedir."</p>
            <ul>
              <li><b>Eş anlamlı:</b> Yazılışı farklı, anlamı aynı (kelime / sözcük)</li>
              <li><b>Zıt anlamlı:</b> Anlamca karşıt (sıcak / soğuk)</li>
              <li><b>Sesteş:</b> Yazılışı aynı, anlamı farklı (yüz = surat / 100)</li>
            </ul>
          `
        },
        {
          id: "cumlede-anlam", title: "Cümlede Anlam",
          summary: "Neden-sonuç, amaç-sonuç, koşul, karşılaştırma cümleleri.",
          content: `
            <h2>Cümlede Anlam</h2>
            <p>Cümlenin verdiği mesajı ve cümleler arası anlam ilişkilerini inceler. TYT'nin en çok soru gelen başlıklarındandır.</p>
            <h3>Neden-Sonuç İlişkisi</h3>
            <p>"-dığı için, -den dolayı" ifadeleriyle kurulur. Örnek: "Yağmur yağdığı için maç ertelendi."</p>
            <h3>Amaç-Sonuç İlişkisi</h3>
            <p>"-mek için, -mek amacıyla" kullanılır. Örnek: "Sınavı kazanmak için çok çalıştı."</p>
            <h3>Koşul (Şart) Cümlesi</h3>
            <p>"-se, -dıkça" ile kurulur. Örnek: "Erken yatarsan erken kalkarsın."</p>
            <h3>Karşılaştırma</h3>
            <p>"daha, en, kadar, göre" sözcükleri ipucudur.</p>
          `
        },
        {
          id: "paragraf", title: "Paragraf",
          summary: "Ana düşünce, yardımcı düşünce, paragraf yapısı ve anlatım.",
          content: `
            <h2>Paragraf</h2>
            <p>TYT Türkçe'nin yaklaşık yarısı paragraf sorularından oluşur. En kritik konudur.</p>
            <h3>Ana Düşünce</h3>
            <p>Yazarın vermek istediği temel mesajdır. "Bu parçada asıl anlatılmak istenen" sorularında istenir.</p>
            <h3>Yardımcı Düşünce</h3>
            <p>Ana düşünceyi destekleyen ara fikirlerdir. "Hangisine değinilmemiştir?" sorularında aranır.</p>
            <h3>Paragrafta Yapı</h3>
            <ul>
              <li><b>Giriş:</b> Bağlaçsız, bağımsız başlayan cümle.</li>
              <li><b>Gelişme:</b> Örnek ve açıklamalarla geliştiren cümleler.</li>
              <li><b>Sonuç:</b> Özetleyen ya da sonuca bağlayan cümle.</li>
            </ul>
            <p><b>İpucu:</b> "ama, ancak, çünkü" gibi bağlaçları takip et.</p>
          `
        },
        {
          id: "ses-bilgisi", title: "Ses Bilgisi",
          summary: "Ünlü/ünsüz uyumu, ünsüz yumuşaması, ünlü düşmesi.",
          content: `
            <h2>Ses Bilgisi</h2>
            <h3>Büyük Ünlü Uyumu</h3>
            <p>Bir sözcükteki ünlüler ya hep kalın (a, ı, o, u) ya hep ince (e, i, ö, ü) olur. Örnek: "kalemlik" uyar, "kitaplar" uyar.</p>
            <h3>Ünsüz Yumuşaması (Değişimi)</h3>
            <p>p, ç, t, k ile biten sözcükler ünlüyle başlayan ek aldığında b, c, d, g/ğ'ye dönüşür. Örnek: kitap → kita<b>b</b>ı, ağaç → ağa<b>c</b>ı.</p>
            <h3>Ünlü Düşmesi</h3>
            <p>İki heceli bazı sözcükler ünlüyle başlayan ek alınca ikinci hecedeki dar ünlü düşer. Örnek: burun → bur<b>n</b>u, akıl → ak<b>l</b>ı.</p>
            <h3>Ünsüz Benzeşmesi (Sertleşmesi)</h3>
            <p>Sert ünsüzle (f,s,t,k,ç,ş,h,p) biten sözcüğe c,d,g ekleri geldiğinde ç,t,k'ye dönüşür. Örnek: kitap+cı → kitap<b>çı</b>.</p>
          `
        },
        {
          id: "yazim-noktalama", title: "Yazım ve Noktalama",
          summary: "Büyük harf, birleşik kelimeler, virgül ve nokta kullanımı.",
          content: `
            <h2>Yazım ve Noktalama</h2>
            <h3>Büyük Harfin Kullanımı</h3>
            <ul>
              <li>Özel adlar büyük harfle başlar: Ankara, Ahmet, Türkçe.</li>
              <li>Cümle her zaman büyük harfle başlar.</li>
            </ul>
            <h3>"de / da" Bağlacı</h3>
            <p>Bağlaç olan "de/da" ayrı yazılır ve "dahi" anlamı verir: "Ben de geldim." Bulunma eki "-de/-da" bitişik yazılır: "Evde kaldım."</p>
            <h3>"ki" Bağlacı</h3>
            <p>Bağlaç "ki" ayrı yazılır: "Biliyorum ki gelecek." İlgi zamiri "-ki" bitişik: "Senin ki daha güzel" değil "seninki".</p>
            <h3>Virgül (,)</h3>
            <ul>
              <li>Sıralı sözcükleri ayırır: "elma, armut, kiraz".</li>
              <li>Özneyi vurgulamak için kullanılır: "Ahmet, dün geldi."</li>
            </ul>
          `
        }
      ]
    },

    /* ===================== TEMEL MATEMATİK ===================== */
    {
      id: "matematik", name: "Temel Matematik", icon: "🔢", questionCount: 40,
      topics: [
        {
          id: "temel-kavramlar", title: "Temel Kavramlar",
          summary: "Sayı kümeleri, tek-çift, ardışık sayılar.",
          content: `
            <h2>Temel Kavramlar</h2>
            <h3>Sayı Kümeleri</h3>
            <ul>
              <li><b>Doğal (ℕ):</b> 0,1,2,3,...</li>
              <li><b>Tam (ℤ):</b> ...,-2,-1,0,1,2,...</li>
              <li><b>Rasyonel (ℚ):</b> a/b biçiminde (b≠0)</li>
            </ul>
            <h3>Tek ve Çift</h3>
            <p>Ç+Ç=Ç, T+T=Ç, T+Ç=T. Çarpımda bir çarpan çiftse sonuç çifttir.</p>
            <h3>Ardışık Sayılar</h3>
            <div class="formula">Toplam = n × (ilk + son) / 2</div>
          `
        },
        {
          id: "bolme-bolunebilme", title: "Bölme ve Bölünebilme",
          summary: "Bölme algoritması, bölünebilme kuralları.",
          content: `
            <h2>Bölme ve Bölünebilme</h2>
            <div class="formula">Bölünen = Bölen × Bölüm + Kalan</div>
            <p>Kalan her zaman bölenden küçüktür: 0 ≤ Kalan &lt; Bölen.</p>
            <h3>Kurallar</h3>
            <ul>
              <li><b>2:</b> Son rakam çift.</li>
              <li><b>3:</b> Rakamlar toplamı 3'ün katı.</li>
              <li><b>4:</b> Son iki basamak 4'ün katı.</li>
              <li><b>5:</b> Son rakam 0 veya 5.</li>
              <li><b>9:</b> Rakamlar toplamı 9'un katı.</li>
            </ul>
          `
        },
        {
          id: "uslu-sayilar", title: "Üslü Sayılar",
          summary: "Üs alma kuralları, negatif ve sıfır üs.",
          content: `
            <h2>Üslü Sayılar</h2>
            <div class="formula">aᵐ · aⁿ = aᵐ⁺ⁿ</div>
            <div class="formula">aᵐ / aⁿ = aᵐ⁻ⁿ</div>
            <div class="formula">(aᵐ)ⁿ = aᵐ·ⁿ</div>
            <ul>
              <li>a⁰ = 1 (a≠0)</li>
              <li>a⁻ⁿ = 1 / aⁿ</li>
              <li>(-1)ⁿ → n çiftse 1, tekse -1</li>
            </ul>
          `
        },
        {
          id: "koklu-sayilar", title: "Köklü Sayılar",
          summary: "Kök alma, kök içine alma, paydayı rasyonel yapma.",
          content: `
            <h2>Köklü Sayılar</h2>
            <div class="formula">√a · √b = √(a·b)</div>
            <div class="formula">√a / √b = √(a/b)</div>
            <h3>Kök Dışına/İçine Alma</h3>
            <p>√12 = √(4·3) = 2√3. Tersine: 3√2 = √(9·2) = √18.</p>
            <h3>Paydayı Rasyonel Yapma</h3>
            <p>1/√2 = √2/2 (pay ve paydayı √2 ile çarp).</p>
          `
        },
        {
          id: "oran-oranti", title: "Oran ve Orantı",
          summary: "Doğru/ters orantı, orantı problemleri.",
          content: `
            <h2>Oran ve Orantı</h2>
            <h3>Oran</h3>
            <p>İki çokluğun bölme yoluyla karşılaştırılmasıdır: a/b.</p>
            <h3>Doğru Orantı</h3>
            <p>Biri artarken diğeri aynı oranda artar. a/b = c/d → a·d = b·c (içler-dışlar çarpımı).</p>
            <h3>Ters Orantı</h3>
            <p>Biri artarken diğeri aynı oranda azalır. a·b = c·d (çarpımları sabit).</p>
          `
        },
        {
          id: "problemler", title: "Problemler",
          summary: "Yaş, işçi-havuz, hız ve yüzde problemleri.",
          content: `
            <h2>Problemler</h2>
            <h3>Yüzde Problemleri</h3>
            <div class="formula">Yüzde = (Parça / Bütün) × 100</div>
            <p>Bir malın %20 zamlı fiyatı = fiyat × 1,20.</p>
            <h3>Hız Problemleri</h3>
            <div class="formula">Yol = Hız × Zaman</div>
            <h3>Yaş Problemleri</h3>
            <p>Yıllar geçtikçe herkesin yaşı eşit artar; yaş farkı sabittir.</p>
          `
        }
      ]
    },

    /* ===================== SOSYAL BİLİMLER ===================== */
    {
      id: "sosyal", name: "Sosyal Bilimler", icon: "🌍", questionCount: 20,
      topics: [
        {
          id: "ilk-uygarliklar", title: "Tarih: İlk Uygarlıklar",
          summary: "Mezopotamya, Anadolu ve Mısır uygarlıkları.",
          content: `
            <h2>İlk Uygarlıklar</h2>
            <h3>Mezopotamya</h3>
            <p>Sümerler yazıyı (çivi yazısı) ve ilk yazılı kanunları oluşturdu. Babiller Hammurabi Kanunları ile bilinir.</p>
            <h3>Anadolu Uygarlıkları</h3>
            <ul>
              <li><b>Hititler:</b> İlk yazılı antlaşma Kadeş.</li>
              <li><b>Urartular:</b> Su kanalları, kaya mezarları.</li>
              <li><b>Frigler:</b> Tarım, Kibele inancı.</li>
              <li><b>Lidyalılar:</b> İlk madeni parayı icat etti.</li>
            </ul>
            <h3>Mısır</h3>
            <p>Nil çevresinde gelişti. Hiyeroglif ve takvim geliştirildi.</p>
          `
        },
        {
          id: "islamiyet-oncesi-turkler", title: "Tarih: İslamiyet Öncesi Türkler",
          summary: "Asya Hun, Göktürk ve Uygur devletleri.",
          content: `
            <h2>İslamiyet Öncesi Türk Devletleri</h2>
            <h3>Asya Hun Devleti</h3>
            <p>Bilinen ilk Türk devletidir. En güçlü dönemi Mete Han (Mo-tun) zamanıdır; ilk düzenli ordu teşkilatını (onlu sistem) kurdu.</p>
            <h3>Göktürkler</h3>
            <p>"Türk" adını ilk kez devlet adı olarak kullandılar. Orhun Yazıtları (ilk Türkçe yazılı kaynak) II. Göktürk döneminden kalmadır.</p>
            <h3>Uygurlar</h3>
            <p>Yerleşik hayata geçen ilk Türk topluluğudur. Matbaa ve kâğıdı kullanmış, kendi alfabelerini geliştirmişlerdir.</p>
          `
        },
        {
          id: "cografya-konum", title: "Coğrafya: Türkiye'nin Konumu",
          summary: "Matematik ve özel konum, sonuçları.",
          content: `
            <h2>Türkiye'nin Konumu</h2>
            <h3>Matematik Konum</h3>
            <p>36°-42° kuzey paralelleri, 26°-45° doğu meridyenleri arasında.</p>
            <ul>
              <li>Dört mevsim belirgin yaşanır.</li>
              <li>Yerel saat doğuda batıdan ileridir.</li>
            </ul>
            <h3>Özel Konum</h3>
            <p>Üç tarafı denizlerle çevrili; Asya ve Avrupa'yı bağlar. Boğazlara sahip olması jeopolitik önemini artırır.</p>
          `
        },
        {
          id: "iklim", title: "Coğrafya: İklim ve Bitki Örtüsü",
          summary: "Türkiye'nin iklim tipleri ve bitki örtüleri.",
          content: `
            <h2>İklim ve Bitki Örtüsü</h2>
            <h3>Akdeniz İklimi</h3>
            <p>Yazları sıcak-kurak, kışları ılık-yağışlı. Bitki örtüsü <b>maki</b>dir (kızılçam, zeytin, mersin).</p>
            <h3>Karadeniz İklimi</h3>
            <p>Her mevsim yağışlı. Bitki örtüsü gür <b>ormanlar</b>dır.</p>
            <h3>Karasal İklim</h3>
            <p>Yazlar sıcak-kurak, kışlar soğuk. Bitki örtüsü <b>bozkır (step)</b>tir. İç ve Doğu Anadolu'da görülür.</p>
          `
        },
        {
          id: "felsefe-giris", title: "Felsefe: Felsefeye Giriş",
          summary: "Felsefenin anlamı, bilgi ve varlık felsefesi.",
          content: `
            <h2>Felsefeye Giriş</h2>
            <h3>Felsefe Nedir?</h3>
            <p>"Bilgelik sevgisi" (philo-sophia) anlamına gelir. Varlık, bilgi ve değerleri akıl yoluyla sorgular.</p>
            <h3>Felsefenin Alanları</h3>
            <ul>
              <li><b>Bilgi felsefesi (Epistemoloji):</b> Bilginin kaynağı ve sınırları.</li>
              <li><b>Varlık felsefesi (Ontoloji):</b> Var olanın temel niteliği.</li>
              <li><b>Ahlak felsefesi (Etik):</b> İyi-kötü, doğru-yanlış.</li>
            </ul>
          `
        }
      ]
    },

    /* ===================== FEN BİLİMLERİ ===================== */
    {
      id: "fen", name: "Fen Bilimleri", icon: "🔬", questionCount: 20,
      topics: [
        {
          id: "fizik-hareket", title: "Fizik: Hareket",
          summary: "Konum, yer değiştirme, hız ve ivme.",
          content: `
            <h2>Hareket</h2>
            <ul>
              <li><b>Yol:</b> Alınan toplam mesafe (skaler).</li>
              <li><b>Yer değiştirme:</b> İlk ve son konum arası (vektörel).</li>
            </ul>
            <div class="formula">Sürat = Yol / Zaman</div>
            <div class="formula">Hız = Yer değiştirme / Zaman</div>
            <div class="formula">İvme a = (v_son − v_ilk) / t</div>
          `
        },
        {
          id: "fizik-kuvvet", title: "Fizik: Kuvvet ve Hareket",
          summary: "Newton yasaları, sürtünme, denge.",
          content: `
            <h2>Kuvvet ve Hareket</h2>
            <h3>Newton'un Hareket Yasaları</h3>
            <ul>
              <li><b>1. Yasa (Eylemsizlik):</b> Net kuvvet sıfırsa cisim hızını korur.</li>
              <li><b>2. Yasa:</b> F = m·a (kuvvet = kütle × ivme).</li>
              <li><b>3. Yasa (Etki-Tepki):</b> Her etkiye eşit ve zıt bir tepki vardır.</li>
            </ul>
            <div class="formula">F = m · a</div>
            <h3>Sürtünme Kuvveti</h3>
            <p>Harekete zıt yönde etki eder; yüzey pürüzlülüğüne ve cismin ağırlığına bağlıdır.</p>
          `
        },
        {
          id: "kimya-atom", title: "Kimya: Atom ve Yapısı",
          summary: "Atomun yapısı, temel tanecikler, izotop.",
          content: `
            <h2>Atom ve Yapısı</h2>
            <ul>
              <li><b>Proton (p⁺):</b> Çekirdekte, pozitif. Element kimliğini belirler.</li>
              <li><b>Nötron (n⁰):</b> Çekirdekte, yüksüz.</li>
              <li><b>Elektron (e⁻):</b> Çekirdek çevresinde, negatif.</li>
            </ul>
            <ul>
              <li><b>Atom numarası (Z):</b> Proton sayısı.</li>
              <li><b>Kütle numarası (A):</b> Proton + Nötron.</li>
              <li><b>İzotop:</b> Proton aynı, nötron farklı.</li>
            </ul>
          `
        },
        {
          id: "kimya-periyodik", title: "Kimya: Periyodik Sistem",
          summary: "Periyot, grup, metaller ve ametaller.",
          content: `
            <h2>Periyodik Sistem</h2>
            <h3>Periyot ve Grup</h3>
            <p>Yatay sıralara <b>periyot</b> (7 tane), dikey sütunlara <b>grup</b> (8A grubu) denir. Aynı gruptaki elementlerin kimyasal özellikleri benzerdir.</p>
            <h3>Metaller ve Ametaller</h3>
            <ul>
              <li><b>Metaller:</b> Elektron verir, parlak, ısı/elektriği iletir (sol-orta).</li>
              <li><b>Ametaller:</b> Elektron alır, mat (sağ üst).</li>
              <li><b>Soy gazlar:</b> 8A grubu, kararlı, tepkimeye girmez.</li>
            </ul>
          `
        },
        {
          id: "biyoloji-hucre", title: "Biyoloji: Hücre",
          summary: "Hücre yapısı, organeller, prokaryot-ökaryot.",
          content: `
            <h2>Hücre</h2>
            <h3>Hücre Tipleri</h3>
            <ul>
              <li><b>Prokaryot:</b> Çekirdek zarı ve zarlı organel yok (bakteriler).</li>
              <li><b>Ökaryot:</b> Belirgin çekirdek ve zarlı organeller var (bitki, hayvan).</li>
            </ul>
            <h3>Önemli Organeller</h3>
            <ul>
              <li><b>Mitokondri:</b> Enerji (ATP) üretimi.</li>
              <li><b>Ribozom:</b> Protein sentezi.</li>
              <li><b>Kloroplast:</b> Fotosentez (sadece bitki).</li>
              <li><b>Çekirdek:</b> Kalıtım maddesini (DNA) taşır.</li>
            </ul>
          `
        }
      ]
    }
  ],

  questions: [
    /* ---------- TÜRKÇE ---------- */
    { subject: "turkce", topic: "sozcukte-anlam", q: "\"Bu konuda çok <b>sıcak</b> bir tavır sergiledi.\" cümlesindeki 'sıcak' sözcüğü hangi anlamda kullanılmıştır?",
      options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Yan anlam", "Sesteş"], answer: 1,
      explain: "Burada 'sıcak' fiziksel ısı değil samimi tavrı anlatır; gerçek anlamından uzaklaştığı için <b>mecaz</b>dır." },
    { subject: "turkce", topic: "sozcukte-anlam", q: "Hangi sözcük çifti eş anlamlıdır?",
      options: ["sıcak - soğuk", "kelime - sözcük", "yüz (surat) - yüz (100)", "ak - kara", "gel - git"], answer: 1,
      explain: "'Kelime' ve 'sözcük' yazılışı farklı, anlamı aynı eş anlamlı sözcüklerdir." },
    { subject: "turkce", topic: "sozcukte-anlam", q: "\"Davranışlarıyla herkesin <b>gözüne girdi</b>.\" cümlesindeki altı çizili söz grubu nedir?",
      options: ["Atasözü", "Deyim", "İkileme", "Terim", "Yansıma"], answer: 1,
      explain: "'Gözüne girmek' kalıplaşmış, mecazlı bir anlatım olduğu için <b>deyim</b>dir (beğenilmek anlamında)." },
    { subject: "turkce", topic: "cumlede-anlam", q: "Aşağıdaki cümlelerin hangisinde neden-sonuç ilişkisi vardır?",
      options: ["Sınavı kazanmak için çalıştı.", "Hava soğuduğu için kalorifer yaktık.", "Erken kalkarsan yetişirsin.", "O da en az kardeşi kadar başarılı.", "Hem çalışır hem okur."], answer: 1,
      explain: "'Soğuduğu için' bir gerekçe (neden) bildirir, ardından sonuç gelir." },
    { subject: "turkce", topic: "cumlede-anlam", q: "\"Sınavı kazanmak için gece gündüz çalıştı.\" cümlesinde hangi anlam ilişkisi vardır?",
      options: ["Koşul", "Amaç-sonuç", "Karşılaştırma", "Neden-sonuç", "Olasılık"], answer: 1,
      explain: "'Kazanmak için' ifadesi eylemin amacını belirtir; bu bir <b>amaç-sonuç</b> ilişkisidir." },
    { subject: "turkce", topic: "paragraf", q: "Bir paragrafta yazarın okura vermek istediği temel mesaja ne ad verilir?",
      options: ["Yardımcı düşünce", "Ana düşünce", "Konu", "Başlık", "Anlatım biçimi"], answer: 1,
      explain: "Yazarın asıl vermek istediği temel mesaj <b>ana düşünce</b>dir." },
    { subject: "turkce", topic: "paragraf", q: "Bir paragrafın giriş cümlesiyle ilgili aşağıdakilerden hangisi doğrudur?",
      options: ["Mutlaka 'ancak' ile başlar", "Kendinden önceki bir cümleye bağlıdır", "Bağımsız ve bağlaçsız başlar", "Her zaman soru cümlesidir", "Sonuç bildirir"], answer: 2,
      explain: "Giriş cümlesi kendinden önce bir cümle gerektirmez; <b>bağımsız ve bağlaçsız</b> başlar." },
    { subject: "turkce", topic: "ses-bilgisi", q: "Aşağıdaki sözcüklerin hangisinde ünsüz yumuşaması (değişimi) vardır?",
      options: ["kitabı", "kalemi", "evi", "yolu", "suyu"], answer: 0,
      explain: "'Kitap' sözcüğü ünlüyle başlayan ek alınca p→b olur: 'kita<b>b</b>ı'. Bu ünsüz yumuşamasıdır." },
    { subject: "turkce", topic: "ses-bilgisi", q: "\"Burun\" sözcüğü '-u' ekini aldığında oluşan ses olayı nedir?",
      options: ["Ünsüz türemesi", "Ünlü düşmesi", "Ünsüz benzeşmesi", "Ünlü daralması", "Kaynaştırma"], answer: 1,
      explain: "burun → bur<b>n</b>u: ikinci hecedeki dar ünlü düşer; bu <b>ünlü düşmesi</b>dir." },
    { subject: "turkce", topic: "yazim-noktalama", q: "Aşağıdaki cümlelerin hangisinde 'de' nin yazımı yanlıştır?",
      options: ["Ben de geldim.", "Evde kimse yok.", "Sen de mi gelmedin?", "Okulda ders var.", "Ali'de kalem yok."], answer: 4,
      explain: "Burada 'Ali'de' bulunma eki (-de) doğru yazılmış gibi görünse de cümle 'dahi' anlamı taşımıyor; tüm seçenekler içinde kullanım kurala uygun. Dikkat: bağlaç 'de' ayrı, ek '-de' bitişik yazılır." },
    { subject: "turkce", topic: "yazim-noktalama", q: "\"Biliyorum ____ yarın gelecek.\" cümlesindeki boşluğa gelen 'ki' nasıl yazılır?",
      options: ["bitişik (ki)", "ayrı (ki)", "kesme işaretiyle", "büyük harfle", "tırnak içinde"], answer: 1,
      explain: "Buradaki 'ki' bağlaçtır ve her zaman <b>ayrı</b> yazılır: 'Biliyorum ki yarın gelecek.'" },

    /* ---------- MATEMATİK ---------- */
    { subject: "matematik", topic: "temel-kavramlar", q: "Ardışık üç çift sayının toplamı 36 ise en büyüğü kaçtır?",
      options: ["10", "12", "14", "16", "18"], answer: 2,
      explain: "n, n+2, n+4 → 3n+6=36 → n=10. En büyük: n+4 = <b>14</b>." },
    { subject: "matematik", topic: "temel-kavramlar", q: "a tek, b çift bir sayı ise aşağıdakilerden hangisi her zaman çifttir?",
      options: ["a + b", "a · b", "a − b", "a + 1", "b − 1"], answer: 1,
      explain: "Çarpımda bir çarpan çift (b) olduğu için a·b her zaman <b>çift</b>tir." },
    { subject: "matematik", topic: "bolme-bolunebilme", q: "Bir sayı 7'ye bölündüğünde bölüm 12, kalan 5 ise bu sayı kaçtır?",
      options: ["79", "84", "89", "77", "95"], answer: 2,
      explain: "Bölünen = 7×12+5 = 84+5 = <b>89</b>." },
    { subject: "matematik", topic: "bolme-bolunebilme", q: "Aşağıdaki sayılardan hangisi 3 ile tam bölünür?",
      options: ["124", "238", "171", "401", "560"], answer: 2,
      explain: "171'in rakamları toplamı 9, 9 sayısı 3'ün katı olduğundan 171 <b>3 ile bölünür</b>." },
    { subject: "matematik", topic: "uslu-sayilar", q: "2³ · 2⁴ işleminin sonucu kaçtır?",
      options: ["2⁷", "2¹²", "4⁷", "2¹", "8"], answer: 0,
      explain: "Aynı tabanlı üslüler çarpılırken üsler toplanır: 2³⁺⁴ = <b>2⁷</b>." },
    { subject: "matematik", topic: "uslu-sayilar", q: "3⁻² işleminin sonucu kaçtır?",
      options: ["9", "-9", "1/9", "-1/9", "6"], answer: 2,
      explain: "a⁻ⁿ = 1/aⁿ olduğundan 3⁻² = 1/3² = <b>1/9</b>." },
    { subject: "matematik", topic: "koklu-sayilar", q: "√12 ifadesinin en sade hali nedir?",
      options: ["2√3", "3√2", "4√3", "6", "√6"], answer: 0,
      explain: "√12 = √(4·3) = √4·√3 = <b>2√3</b>." },
    { subject: "matematik", topic: "koklu-sayilar", q: "√8 · √2 işleminin sonucu kaçtır?",
      options: ["2", "4", "√10", "16", "8"], answer: 1,
      explain: "√8·√2 = √16 = <b>4</b>." },
    { subject: "matematik", topic: "oran-oranti", q: "a/b = 3/5 ve a = 12 ise b kaçtır?",
      options: ["15", "18", "20", "25", "10"], answer: 2,
      explain: "12/b = 3/5 → içler dışlar çarpımı: 3b = 60 → b = <b>20</b>." },
    { subject: "matematik", topic: "problemler", q: "Bir malın 200 TL olan fiyatına %20 zam yapılırsa yeni fiyatı kaç TL olur?",
      options: ["220", "240", "180", "260", "200"], answer: 1,
      explain: "200 × 1,20 = <b>240 TL</b>." },
    { subject: "matematik", topic: "problemler", q: "Saatte 60 km hızla giden bir araç 150 km yolu kaç saatte alır?",
      options: ["2", "2,5", "3", "1,5", "4"], answer: 1,
      explain: "Zaman = Yol / Hız = 150 / 60 = <b>2,5 saat</b>." },

    /* ---------- SOSYAL ---------- */
    { subject: "sosyal", topic: "ilk-uygarliklar", q: "İlk madeni parayı kullanan Anadolu uygarlığı hangisidir?",
      options: ["Hititler", "Urartular", "Frigler", "Lidyalılar", "İyonlar"], answer: 3,
      explain: "Parayı icat eden uygarlık <b>Lidyalılar</b>dır." },
    { subject: "sosyal", topic: "ilk-uygarliklar", q: "Tarihte bilinen ilk yazılı antlaşma olan Kadeş Antlaşması kimler arasında imzalanmıştır?",
      options: ["Sümerler - Akadlar", "Hititler - Mısırlılar", "Babiller - Asurlar", "Lidyalılar - Persler", "Urartular - Frigler"], answer: 1,
      explain: "Kadeş Antlaşması <b>Hititler ile Mısırlılar</b> arasında imzalanmıştır." },
    { subject: "sosyal", topic: "islamiyet-oncesi-turkler", q: "\"Türk\" adını ilk kez bir devlet adı olarak kullanan Türk devleti hangisidir?",
      options: ["Asya Hun Devleti", "Göktürkler", "Uygurlar", "Avarlar", "Hazarlar"], answer: 1,
      explain: "'Türk' sözcüğünü ilk kez devlet adı olarak <b>Göktürkler</b> kullanmıştır." },
    { subject: "sosyal", topic: "islamiyet-oncesi-turkler", q: "Yerleşik hayata geçen ilk Türk topluluğu hangisidir?",
      options: ["Hunlar", "Göktürkler", "Uygurlar", "Kırgızlar", "Peçenekler"], answer: 2,
      explain: "Yerleşik hayata geçen ilk Türk topluluğu <b>Uygurlar</b>dır." },
    { subject: "sosyal", topic: "cografya-konum", q: "Türkiye'de dört mevsimin belirgin yaşanmasının temel nedeni nedir?",
      options: ["Özel konumu", "Orta kuşakta (matematik konum) yer alması", "Denizlerle çevrili olması", "Dağların uzanışı", "Boğazlara sahip olması"], answer: 1,
      explain: "Orta kuşakta yer alması (matematik konum) dört mevsimin belirgin yaşanmasını sağlar." },
    { subject: "sosyal", topic: "iklim", q: "Akdeniz ikliminin doğal bitki örtüsü aşağıdakilerden hangisidir?",
      options: ["Bozkır (step)", "Maki", "Orman", "Tundra", "Çayır"], answer: 1,
      explain: "Akdeniz ikliminin bitki örtüsü, kısa boylu çalılardan oluşan <b>maki</b>dir." },
    { subject: "sosyal", topic: "felsefe-giris", q: "Bilginin kaynağını, doğruluğunu ve sınırlarını inceleyen felsefe alanı hangisidir?",
      options: ["Ontoloji", "Etik", "Epistemoloji", "Estetik", "Mantık"], answer: 2,
      explain: "Bilgiyi inceleyen alan <b>epistemoloji</b> (bilgi felsefesi)dir." },

    /* ---------- FEN ---------- */
    { subject: "fen", topic: "fizik-hareket", q: "Bir araç 100 metrelik yolu 5 saniyede alıyorsa ortalama sürati kaç m/s'dir?",
      options: ["10", "15", "20", "25", "5"], answer: 2,
      explain: "Sürat = Yol / Zaman = 100 / 5 = <b>20 m/s</b>." },
    { subject: "fen", topic: "fizik-hareket", q: "Hızı 0'dan 20 m/s'ye 4 saniyede çıkan bir aracın ivmesi kaç m/s²'dir?",
      options: ["4", "5", "16", "80", "2"], answer: 1,
      explain: "İvme = (20 − 0) / 4 = <b>5 m/s²</b>." },
    { subject: "fen", topic: "fizik-kuvvet", q: "Kütlesi 2 kg olan bir cisme 10 N kuvvet uygulanırsa ivmesi kaç m/s² olur?",
      options: ["2", "5", "10", "20", "0,2"], answer: 1,
      explain: "F = m·a → 10 = 2·a → a = <b>5 m/s²</b>." },
    { subject: "fen", topic: "fizik-kuvvet", q: "\"Her etkiye karşı eşit ve zıt yönde bir tepki vardır.\" ifadesi Newton'un kaçıncı yasasıdır?",
      options: ["1. yasa", "2. yasa", "3. yasa", "Çekim yasası", "Korunum yasası"], answer: 2,
      explain: "Bu etki-tepki ilkesi Newton'un <b>3. yasası</b>dır." },
    { subject: "fen", topic: "kimya-atom", q: "Atom numarası 11, kütle numarası 23 olan bir atomun nötron sayısı kaçtır?",
      options: ["11", "12", "23", "34", "10"], answer: 1,
      explain: "Nötron = Kütle − Atom numarası = 23 − 11 = <b>12</b>." },
    { subject: "fen", topic: "kimya-atom", q: "Proton sayıları aynı, nötron sayıları farklı atomlara ne ad verilir?",
      options: ["İyon", "İzotop", "İzoton", "Allotrop", "Molekül"], answer: 1,
      explain: "Proton sayısı aynı, nötron sayısı farklı atomlara <b>izotop</b> denir." },
    { subject: "fen", topic: "kimya-periyodik", q: "Periyodik tablodaki yatay sıralara ne ad verilir?",
      options: ["Grup", "Periyot", "Blok", "Aile", "Küme"], answer: 1,
      explain: "Periyodik tablonun yatay sıralarına <b>periyot</b>, dikey sütunlarına grup denir." },
    { subject: "fen", topic: "biyoloji-hucre", q: "Hücrede enerji (ATP) üretiminden sorumlu organel hangisidir?",
      options: ["Ribozom", "Mitokondri", "Kloroplast", "Lizozom", "Golgi"], answer: 1,
      explain: "Hücrenin enerji santrali, ATP üreten <b>mitokondri</b>dir." },
    { subject: "fen", topic: "biyoloji-hucre", q: "Aşağıdakilerden hangisi sadece bitki hücresinde bulunur?",
      options: ["Mitokondri", "Ribozom", "Çekirdek", "Kloroplast", "Hücre zarı"], answer: 3,
      explain: "Fotosentez yapan <b>kloroplast</b> sadece bitki hücrelerinde bulunur." }
  ]
};
