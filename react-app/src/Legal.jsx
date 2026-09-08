import { ArrowLeft } from "lucide-react";

/**
 * Yasal sayfalar — iyzico üye iş yeri başvurusu için zorunlu.
 *
 * ⚠️ SATICI bilgilerini doldurmadan yayına alma. iyzico başvuruyu
 * bu bilgilerin eksiksizliğine bakarak değerlendiriyor.
 */

export const SATICI = {
  unvan: "[AD SOYAD / UNVAN]",
  adres: "[AÇIK ADRES — il, ilçe dahil]",
  telefon: "[TELEFON]",
  eposta: "[E-POSTA]",
  vergiDairesi: "[VERGİ DAİRESİ — bireysel satıcıysan “—” yaz]",
  vergiNo: "[VERGİ / TC KİMLİK NO]",
  site: "https://tythazirlik.netlify.app",
  urunAdi: "TYT Hazırlık — 1 Yıllık Üyelik",
  fiyat: "50,00 TL",
  fiyatNot: "Tüm vergiler dahil",
};

const bugun = "8 Eylül 2026";

/* ------------------------------------------------------------------ */

const P = ({ children }) => (
  <p className="mb-3 text-sm font-light leading-relaxed text-slate-600">{children}</p>
);
const H = ({ children }) => (
  <h3 className="mb-2 mt-6 text-sm font-bold text-slate-800">{children}</h3>
);
const L = ({ items }) => (
  <ul className="mb-3 space-y-1.5">
    {items.map((t, i) => (
      <li key={i} className="flex gap-2 text-sm font-light leading-relaxed text-slate-600">
        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);
const Kutu = ({ children }) => (
  <div className="mb-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-light leading-relaxed text-slate-600">
    {children}
  </div>
);

/* ------------------------------------------------------------------ */

function Hakkimizda() {
  return (
    <>
      <P>
        TYT Hazırlık, Temel Yeterlilik Testi'ne hazırlanan öğrenciler için hazırlanmış
        bir çevrim içi çalışma platformudur. Amacı, öğrencinin konuyu okuduktan sonra
        soruyla pekiştirmesini ve öğrendiğini kalıcı hale getirmesini sağlamaktır.
      </P>
      <H>Platformda neler var?</H>
      <L items={[
        "167 ünitede konu anlatımı — Türkçe, Matematik, Geometri, Fen Bilimleri ve Sosyal Bilimler",
        "3.995 özgün soru; her konuda kolay, orta ve zor dağılımıyla",
        "Dört tekrar oyunu: Eşleştirme, Hafıza, Bilgi Kartları ve Hızlı Yarış",
        "Aralıklı tekrar sistemi — bildiğin kartlar seyrekleşir, bilmediklerin sık gelir",
        "Yanlış defteri, günlük çalışma serisi ve ders bazlı başarı takibi",
      ]} />
      <P>
        Tüm konu anlatımları ve sorular platform için özgün olarak hazırlanmıştır;
        üçüncü kişilere ait yayınlardan alıntı içermez.
      </P>
      <H>Satıcı bilgileri</H>
      <L items={[
        `Unvan: ${SATICI.unvan}`,
        `Adres: ${SATICI.adres}`,
        `Telefon: ${SATICI.telefon}`,
        `E-posta: ${SATICI.eposta}`,
      ]} />
    </>
  );
}

function Iletisim() {
  return (
    <>
      <P>
        Üyelik, ödeme veya içerikle ilgili her konuda bize aşağıdaki kanallardan
        ulaşabilirsiniz. Mesajlar en geç <b className="font-semibold">2 iş günü</b> içinde yanıtlanır.
      </P>
      <Kutu>
        <div className="space-y-1.5">
          <div><b className="font-semibold text-slate-700">Unvan:</b> {SATICI.unvan}</div>
          <div><b className="font-semibold text-slate-700">Adres:</b> {SATICI.adres}</div>
          <div><b className="font-semibold text-slate-700">Telefon:</b> {SATICI.telefon}</div>
          <div><b className="font-semibold text-slate-700">E-posta:</b> {SATICI.eposta}</div>
          <div><b className="font-semibold text-slate-700">Vergi dairesi / no:</b> {SATICI.vergiDairesi} / {SATICI.vergiNo}</div>
          <div><b className="font-semibold text-slate-700">Web:</b> {SATICI.site}</div>
        </div>
      </Kutu>
      <P>
        Şikâyet ve itirazlarınız için öncelikle bizimle iletişime geçmenizi rica ederiz.
        Çözülemeyen uyuşmazlıklarda, Ticaret Bakanlığı'nca her yıl belirlenen parasal
        sınırlar çerçevesinde ikametgâhınızın bulunduğu yerdeki Tüketici Hakem Heyetine
        veya Tüketici Mahkemesine başvurabilirsiniz.
      </P>
    </>
  );
}

function Gizlilik() {
  return (
    <>
      <P>
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
        veri sorumlusu sıfatıyla {SATICI.unvan} tarafından hazırlanmıştır.
        Son güncelleme: {bugun}.
      </P>

      <H>Hangi verileri topluyoruz?</H>
      <L items={[
        "E-posta adresiniz — hesabınızı oluşturmak ve giriş yapmanız için",
        "Şifreniz — şifreleri okunamaz biçimde (hash) saklarız, düz metin olarak görmeyiz",
        "Çalışma verileriniz — çözdüğünüz sorular, doğru/yanlış sayıları, oyun sonuçları, tekrar kartlarınız ve aldığınız notlar",
        "Teknik kayıtlar — oturum bilgisi ve hata kayıtları",
      ]} />
      <P>
        Adınız, telefonunuz, adresiniz veya kimlik bilgileriniz <b className="font-semibold">istenmez ve tutulmaz</b>.
        Ödeme sırasında girdiğiniz kart bilgileri bize hiçbir aşamada ulaşmaz; ödeme
        altyapısı üzerinde işlenir.
      </P>

      <H>Neden işliyoruz?</H>
      <L items={[
        "Üyeliğinizi oluşturmak ve sürdürmek",
        "İlerlemenizi kaydedip size göstermek (günlük seri, doğru oranı, zayıf ders analizi)",
        "Hizmeti güvenli tutmak ve kötüye kullanımı önlemek",
        "Yasal yükümlülüklerimizi yerine getirmek",
      ]} />

      <H>Kimlerle paylaşıyoruz?</H>
      <P>
        Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez.
        Yalnızca hizmetin çalışması için zorunlu olan altyapı sağlayıcılarıyla paylaşılır:
      </P>
      <L items={[
        "Veritabanı ve kimlik doğrulama altyapısı (Supabase)",
        "Site yayın altyapısı (Netlify)",
        "Ödeme kuruluşu — yalnızca ödeme işlemi için, çalışma verileriniz aktarılmaz",
        "Yetkili kamu kurumları — yalnızca yasal zorunluluk hâlinde",
      ]} />

      <H>Ne kadar süre saklıyoruz?</H>
      <P>
        Verileriniz üyeliğiniz sürdüğü müddetçe saklanır. Hesabınızın silinmesini
        talep ettiğinizde, yasal saklama yükümlülükleri dışındaki tüm verileriniz
        30 gün içinde silinir.
      </P>

      <H>Haklarınız</H>
      <P>
        KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme,
        işlenmişse bilgi talep etme, işlenme amacını öğrenme, eksik veya yanlış
        işlenmişse düzeltilmesini, silinmesini veya yok edilmesini isteme ve
        işlemenin kanuna aykırı olması sebebiyle zarara uğramanız hâlinde zararın
        giderilmesini talep etme haklarına sahipsiniz.
      </P>
      <P>
        Bu haklarınızı kullanmak için <b className="font-semibold">{SATICI.eposta}</b> adresine
        yazabilirsiniz. Talebiniz en geç 30 gün içinde sonuçlandırılır.
      </P>

      <H>Çerezler</H>
      <P>
        Site yalnızca oturumunuzun açık kalması ve tercihlerinizin (ses açık/kapalı,
        seçili ders gibi) hatırlanması için tarayıcınızda veri saklar. Reklam veya
        takip amaçlı üçüncü taraf çerezi kullanılmaz.
      </P>
    </>
  );
}

function Mesafeli() {
  return (
    <>
      <Kutu>
        Bu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
        Sözleşmeler Yönetmeliği uyarınca düzenlenmiştir. Ödeme işlemini tamamlamanız,
        bu sözleşmeyi okuyup kabul ettiğiniz anlamına gelir.
      </Kutu>

      <H>1. Taraflar</H>
      <P><b className="font-semibold">SATICI:</b> {SATICI.unvan} · {SATICI.adres} · {SATICI.telefon} · {SATICI.eposta}</P>
      <P><b className="font-semibold">ALICI:</b> Siteye üye olan ve hizmeti satın alan kişi (üyelik sırasında bildirdiği e-posta adresiyle tanımlanır).</P>

      <H>2. Sözleşmenin konusu</H>
      <P>
        İşbu sözleşmenin konusu, ALICI'nın {SATICI.site} adresinden elektronik ortamda
        satın aldığı, aşağıda nitelikleri ve satış fiyatı belirtilen dijital hizmetin
        sunulmasına ilişkin tarafların hak ve yükümlülüklerinin belirlenmesidir.
      </P>

      <H>3. Hizmetin nitelikleri ve bedeli</H>
      <L items={[
        `Hizmet: ${SATICI.urunAdi}`,
        "Kapsam: Platformdaki tüm soru bankasına (3.995 soru), tekrar oyunlarına, aralıklı tekrar sistemine, yanlış defterine ve ilerleme takibine erişim",
        "Süre: Ödemenin onaylandığı tarihten itibaren 12 ay",
        `Satış bedeli: ${SATICI.fiyat} (${SATICI.fiyatNot})`,
        "Ödeme şekli: Kredi kartı / banka kartı ile tek çekim",
      ]} />
      <P>
        Konu anlatımı sayfaları üyelik gerektirmeksizin herkese açıktır; ücretli
        üyelik yukarıda sayılan ek özellikleri kapsar.
      </P>

      <H>4. İfa ve teslimat</H>
      <P>
        Hizmet dijitaldir; fiziksel teslimat söz konusu değildir. Ödemenin onaylanmasının
        ardından ALICI'nın üyeliği en geç <b className="font-semibold">24 saat içinde</b> aktive edilir
        ve ALICI kendi hesabıyla giriş yaparak hizmetin tamamına erişir. Aktivasyon
        e-posta ile bildirilir.
      </P>

      <H>5. Cayma hakkı</H>
      <Kutu>
        Mesafeli Sözleşmeler Yönetmeliği'nin 15/1-(ğ) maddesi uyarınca,{" "}
        <b className="font-semibold">elektronik ortamda anında ifa edilen ve tüketiciye anında teslim edilen
        gayrimaddi mallara ilişkin sözleşmelerde cayma hakkı kullanılamaz.</b> Bu hizmet
        anında erişime açıldığından, ödeme sonrasında cayma hakkı bulunmamaktadır.
        ALICI, ödeme adımında bu durumu bildiğini ve kabul ettiğini beyan eder.
      </Kutu>
      <P>
        Bununla birlikte, teknik bir arıza nedeniyle hizmete hiç erişilememesi veya
        hizmetin tanıtıldığı şekilde sunulamaması hâlinde, aşağıdaki İade Koşulları
        uygulanır.
      </P>

      <H>6. SATICI'nın yükümlülükleri</H>
      <L items={[
        "Hizmeti sözleşmede belirtilen kapsam ve sürede sunmak",
        "Platformun sürekli erişilebilir olması için makul özeni göstermek",
        "ALICI'nın kişisel verilerini Gizlilik Politikası'na uygun işlemek",
      ]} />

      <H>7. ALICI'nın yükümlülükleri</H>
      <L items={[
        "Hesap bilgilerini üçüncü kişilerle paylaşmamak; hesap tek kişinin kullanımına yöneliktir",
        "Platform içeriğini kopyalamamak, çoğaltmamak, ücretli veya ücretsiz olarak dağıtmamak",
        "Sisteme zarar verecek veya işleyişini engelleyecek girişimlerde bulunmamak",
      ]} />
      <P>
        Bu yükümlülüklere aykırılık hâlinde SATICI, üyeliği bedel iadesi yapmaksızın
        sonlandırma hakkını saklı tutar.
      </P>

      <H>8. Uyuşmazlıkların çözümü</H>
      <P>
        Ticaret Bakanlığı'nca ilan edilen parasal sınırlar dâhilinde ALICI'nın
        yerleşim yerindeki Tüketici Hakem Heyetleri, bu sınırların üzerindeki
        uyuşmazlıklarda Tüketici Mahkemeleri yetkilidir.
      </P>
      <P className="mt-6">Yürürlük tarihi: {bugun}</P>
    </>
  );
}

function Iade() {
  return (
    <>
      <H>Teslimat</H>
      <P>
        Satın alınan üyelik dijital bir hizmettir; kargo veya fiziksel teslimat yoktur.
        Ödemeniz onaylandıktan sonra hesabınız <b className="font-semibold">en geç 24 saat içinde</b> ücretli
        üyeliğe geçirilir ve bilgilendirme e-postası gönderilir. Erişim, üyelik
        süreniz boyunca (12 ay) kesintisiz devam eder.
      </P>

      <H>Cayma hakkı</H>
      <P>
        Mesafeli Sözleşmeler Yönetmeliği'nin 15/1-(ğ) maddesi gereğince, elektronik
        ortamda anında sunulan dijital hizmetlerde cayma hakkı bulunmamaktadır.
        Ödeme adımında bu durum ayrıca hatırlatılır ve onayınız alınır.
      </P>

      <H>Hangi durumlarda iade yapılır?</H>
      <P>Cayma hakkının kapsam dışı olmasına rağmen, aşağıdaki hâllerde ödemeniz eksiksiz iade edilir:</P>
      <L items={[
        "Ödeme alındığı hâlde üyeliğiniz 24 saat içinde aktive edilmediyse",
        "Teknik bir arıza nedeniyle hizmete erişemediyseniz ve sorun bildirimden sonra 7 gün içinde giderilemediyse",
        "Aynı ödeme yanlışlıkla iki kez alındıysa (mükerrer ödeme)",
        "Hizmet, sitede tanıtıldığı kapsamda sunulamıyorsa",
      ]} />

      <H>İade nasıl talep edilir?</H>
      <P>
        <b className="font-semibold">{SATICI.eposta}</b> adresine, ödemede kullandığınız e-posta
        adresi ve ödeme tarihiyle birlikte yazmanız yeterlidir. Talebiniz 2 iş günü
        içinde değerlendirilir.
      </P>

      <H>İade süresi</H>
      <P>
        Onaylanan iadeler, ödemenin yapıldığı kart veya hesaba{" "}
        <b className="font-semibold">14 gün içinde</b> yapılır. Tutarın kartınıza yansıma süresi
        bankanıza bağlı olarak birkaç iş günü sürebilir; bu süre SATICI'nın
        kontrolünde değildir.
      </P>

      <H>Üyelik iptali</H>
      <P>
        Üyeliğiniz süre sonunda kendiliğinden biter; otomatik yenileme veya
        tekrarlayan tahsilat yoktur. Süre dolmadan hesabınızın silinmesini
        istemeniz hâlinde verileriniz silinir; kalan süre için bedel iadesi
        yapılmaz.
      </P>
    </>
  );
}

/* ------------------------------------------------------------------ */

export const YASAL = {
  hakkimizda: { baslik: "Hakkımızda", Icerik: Hakkimizda },
  iletisim: { baslik: "İletişim", Icerik: Iletisim },
  gizlilik: { baslik: "Gizlilik Politikası ve KVKK Aydınlatma Metni", Icerik: Gizlilik },
  mesafeli: { baslik: "Mesafeli Satış Sözleşmesi", Icerik: Mesafeli },
  iade: { baslik: "Teslimat ve İade Koşulları", Icerik: Iade },
};

export function LegalPage({ slug, onBack }) {
  const doc = YASAL[slug];
  if (!doc) return null;
  const { Icerik } = doc;
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <button
        onClick={onBack}
        className="mb-5 flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2} /> Geri
      </button>
      <article className="rounded-3xl border border-slate-100 bg-white p-7 sm:p-9">
        <h1 className="mb-5 text-xl font-bold tracking-tight text-slate-800">{doc.baslik}</h1>
        <Icerik />
      </article>
    </div>
  );
}

export function Footer({ onOpen }) {
  return (
    <footer className="mt-10 border-t border-slate-100 px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {Object.entries(YASAL).map(([slug, d]) => (
            <button
              key={slug}
              onClick={() => onOpen(slug)}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700"
            >
              {slug === "gizlilik" ? "Gizlilik ve KVKK" : slug === "iade" ? "Teslimat ve İade" : d.baslik}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium text-slate-300">Güvenli ödeme</span>
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-500">iyzico</span>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-500">VISA</span>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-500">mastercard</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-[11px] font-light text-slate-300">
        © 2026 {SATICI.unvan} · Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
