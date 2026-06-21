/* ============================================================
   TÜRKÇE — Fiiller (kip/kişi/ek fiil) + Tamlamalar (ÖSYM/TYT seviyesi)
   Tümü SIFIRDAN ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-08: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("turkce", [
    {
      id: "tr-fiil", name: "Fiiller (Kip, Kişi, Ek Fiil)", branch: null,
      summary: "Haber ve dilek kipleri, kişi ekleri, ek fiil; kip kaymaları ve fiilde anlam.",
      curriculumRefs: ["2026-YKS Türkçe: Fiil, kip, kişi ve ek fiil"],
      prerequisites: [], estimatedMinutes: 22, difficulty: 3,
      objectives: [
        "Haber ve dilek kiplerini eklerinden tanır.",
        "Ek fiilin (idi/imiş/ise) görevlerini ayırır.",
        "Kip (anlam) kaymalarını fark eder."
      ],
      content: `
        <h2>Fiiller: Kip, Kişi, Ek Fiil</h2>
        <h3>1) Haber (bildirme) kipleri</h3>
        <ul>
          <li><b>Görülen geçmiş:</b> -dı (geldi) · <b>Duyulan geçmiş:</b> -mış (gelmiş)</li>
          <li><b>Şimdiki:</b> -yor (geliyor) · <b>Gelecek:</b> -ecek (gelecek) · <b>Geniş:</b> -r (gelir)</li>
        </ul>
        <h3>2) Dilek (tasarlama) kipleri</h3>
        <ul>
          <li><b>Gereklilik:</b> -malı (gelmeli) · <b>Şart/Dilek:</b> -se (gelse)</li>
          <li><b>İstek:</b> -e (gele) · <b>Emir:</b> (gel, gelsin)</li>
        </ul>
        <h3>3) Ek fiil (idi, imiş, ise)</h3>
        <p>İki görevi vardır: <b>İsim soylu sözcüğü yüklem yapar</b> (“Hava güzel<b>di</b>.”) ve <b>basit zamanlı fiili birleşik zamanlı yapar</b> (“geliyor<b>du</b>”).</p>
        <h3>4) Kip (anlam) kayması</h3>
        <p>Bir kip eki başka bir zaman anlamı verebilir: “Yarın sınav <b>başlıyor</b>.” (şimdiki zaman eki → gelecek anlamı).</p>
        <h3>Çözümlü örnek</h3>
        <p>“Çocuk sabahtan beri uyu<b>muş</b>.” → -mış eki burada <b>duyulan/başkasından öğrenilen</b> geçmiş kipidir.</p>
        <h3>Sık yapılan hata</h3>
        <p>Ek fiilin “-di”sini görülen geçmiş zaman ekiyle karıştırmak. İsim soylu sözcüğe gelmişse ek fiildir (“öğretmendi”).</p>
        <h3>Özet kartı</h3>
        <ul><li>-malı → gereklilik; -se → şart/dilek.</li><li>Ek fiil ismi yüklem yapar.</li><li>Şimdiki zaman eki gelecek anlamı verebilir (kip kayması).</li></ul>`,
      commonMistakes: ["Ek fiili görülen geçmiş zamanla karıştırmak.", "Kip kaymasını fark etmemek."],
      pairs: [
        { term: "Gereklilik kipi", def: "-malı/-meli (gelmeli)" },
        { term: "Duyulan geçmiş", def: "-mış (gelmiş)" },
        { term: "Ek fiil", def: "İsmi yüklem yapar / birleşik zaman kurar" },
        { term: "Kip kayması", def: "Bir kip ekinin başka zaman anlamı vermesi" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-tamlama", name: "Tamlamalar", branch: null,
      summary: "Belirtili/belirtisiz isim tamlaması, takısız tamlama, zincirleme tamlama, sıfat tamlaması.",
      curriculumRefs: ["2026-YKS Türkçe: Tamlamalar"],
      prerequisites: ["tr-adlar"], estimatedMinutes: 18, difficulty: 3,
      objectives: [
        "İsim tamlamasının türlerini ayırır.",
        "Sıfat tamlaması ile isim tamlamasını ayırır.",
        "Zincirleme tamlamayı tanır."
      ],
      content: `
        <h2>Tamlamalar</h2>
        <h3>İsim tamlaması</h3>
        <ul>
          <li><b>Belirtili:</b> tamlayan -ın, tamlanan -ı eki alır → “kapı<b>nın</b> kol<b>u</b>”.</li>
          <li><b>Belirtisiz:</b> yalnız tamlanan -ı alır → “okul bahçe<b>si</b>”.</li>
          <li><b>Takısız:</b> ikisi de ek almaz; nitelik/maddeyi anlatır → “altın yüzük”, “demir kapı”.</li>
          <li><b>Zincirleme:</b> en az üç addan oluşur → “okul bahçesi<b>nin</b> kapı<b>sı</b>”.</li>
        </ul>
        <h3>Sıfat tamlaması</h3>
        <p>Bir sıfatın bir ismi nitelemesiyle kurulur; <b>ek almaz</b>: “<b>kırmızı</b> elma”, “<b>üç</b> kalem”.</p>
        <div class="formula">Ayırt etme: Tamlanan “-ı/-si” iyelik eki alıyorsa İSİM tamlaması; almayıp yalnızca niteleniyorsa SIFAT tamlaması. “demir kapı” (sıfat/takısız) ≠ “kapının demiri” (belirtili isim).</div>
        <h3>Çözümlü örnek</h3>
        <p>“Bahçenin duvarı yıkılmış.” → tamlayan “bahçe<b>nin</b>” (-ın), tamlanan “duvar<b>ı</b>” (-ı) → <b>belirtili isim tamlaması</b>.</p>
        <h3>Sık yapılan hata</h3>
        <p>“Demir kapı” gibi takısız tamlamayı belirtisiz isim tamlamasıyla karıştırmak. Takısızda hiçbir ek yoktur ve madde/nitelik bildirir.</p>
        <h3>Özet kartı</h3>
        <ul><li>İkisi de ek → belirtili.</li><li>Yalnız tamlanan ek → belirtisiz.</li><li>Hiç ek yok, nitelik/madde → takısız.</li><li>Sıfat + isim, ek yok → sıfat tamlaması.</li></ul>`,
      commonMistakes: ["Takısız tamlamayı belirtisiz isim tamlamasıyla karıştırmak.", "Sıfat tamlamasını isim tamlaması sanmak."],
      pairs: [
        { term: "Belirtili isim tamlaması", def: "kapının kolu (-ın / -ı)" },
        { term: "Belirtisiz isim tamlaması", def: "okul bahçesi (yalnız -si)" },
        { term: "Takısız tamlama", def: "altın yüzük (ek yok, madde/nitelik)" },
        { term: "Zincirleme tamlama", def: "okul bahçesinin kapısı" },
        { term: "Sıfat tamlaması", def: "kırmızı elma (sıfat + isim)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 3, skill: "dil-bilgisi",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- FİİLLER (10) ---- */
    Q("turkce-tr-fiil-101", "tr-fiil",
      "“Bu kitabı geçen yıl okumuştum.” cümlesindeki fiilin kipi aşağıdakilerden hangisidir?",
      ["Görülen geçmiş zaman", "Duyulan geçmiş zaman", "Şimdiki zaman", "Geniş zaman", "Gelecek zaman"], 0,
      "“okumuştum” → -dı (hikâye) temelli; kök kip görülen geçmiş zamandır (okudu+m → birleşik).",
      { short: "okumuştum → görülen geçmiş (hikâye).", steps: ["'oku-muş-tu-m' yapısı.", "Asıl kip görülen geçmiştir; ek fiille birleşik zaman."], whyOthersWrong: ["Şimdiki/geniş/gelecek değil."] }, 3),
    Q("turkce-tr-fiil-102", "tr-fiil",
      "Aşağıdaki cümlelerin hangisinde fiil <b>gereklilik kipiyle</b> çekimlenmiştir?",
      ["Yarın erken gelirim.", "Bu işi bugün bitirmeliyiz.", "Keşke yağmur yağsa.", "Hemen buraya gel!", "Sınavı kazanmış."], 1,
      "“bitirmeliyiz” → -malı/-meli gereklilik kipidir.",
      { short: "-meli → gereklilik.", steps: ["'-meli' eki gereklilik bildirir."], whyOthersWrong: ["gelirim geniş, yağsa şart/dilek, gel emir, kazanmış duyulan geçmiş."] }, 2),
    Q("turkce-tr-fiil-103", "tr-fiil",
      "“Maç yarın akşam başlıyor.” cümlesinde altı çizili olmayan fiilde görülen durum aşağıdakilerden hangisidir?",
      ["Şimdiki zaman, şimdiki zaman anlamı", "Şimdiki zaman eki, gelecek zaman anlamı", "Gelecek zaman eki, geniş anlam", "Geniş zaman, emir anlamı", "Geçmiş zaman, gelecek anlamı"], 1,
      "“başlıyor” şimdiki zaman ekiyledir ama “yarın” ile gelecek anlamı taşır → kip kayması.",
      { short: "Şimdiki zaman eki → gelecek anlamı.", steps: ["'başlıyor' şimdiki zaman eki taşır.", "'yarın akşam' gelecek anlamı verir → kip kayması."], whyOthersWrong: ["Ek-anlam eşleşmesi yalnız B'de doğru."] }, 3),
    Q("turkce-tr-fiil-104", "tr-fiil",
      "Aşağıdaki cümlelerin hangisinde <b>ek fiil</b> bir ismi yüklem yapmıştır?",
      ["Çocuk hızla koştu.", "O zamanlar çok gençtik.", "Sabah erken kalktı.", "Mektubu yazdı.", "Yağmur yağıyordu."], 1,
      "“gençtik” = genç (isim) + -ti (ek fiil); ismi yüklem yapmış.",
      { short: "gençtik → ek fiil ismi yüklem yaptı.", steps: ["'genç' isim; '-ti' ek fiil eklenmiş.", "İsim yüklem olmuş."], whyOthersWrong: ["koştu/kalktı/yazdı fiil; yağıyordu birleşik zamanlı fiil."] }, 3),
    Q("turkce-tr-fiil-105", "tr-fiil",
      "“Keşke biraz daha sabırlı olsaydın.” cümlesindeki fiilin kipi aşağıdakilerden hangisidir?",
      ["Gereklilik", "Şart (dilek-şart)", "İstek", "Emir", "Geniş zaman"], 1,
      "“olsaydın” → -se şart/dilek kipidir (keşke ile dilek anlamı).",
      { short: "-se → şart/dilek kipi.", steps: ["'ol-sa-y-dın' → -se şart eki.", "'Keşke' dilek anlamı verir."], whyOthersWrong: ["Gereklilik/istek/emir/geniş değil."] }, 2),
    Q("turkce-tr-fiil-106", "tr-fiil",
      "Aşağıdaki fiillerden hangisi <b>oluş</b> bildirir?",
      ["koşmak", "yazmak", "sararmak", "düşünmek", "kesmek"], 2,
      "“sararmak” öznenin kendiliğinden geçirdiği değişimi (oluş) anlatır.",
      { short: "sararmak → oluş.", steps: ["Oluş: özne kendiliğinden değişir (sarar-, büyü-).", "'sararmak' oluştur."], whyOthersWrong: ["koş/yaz/kes iş-kılış; düşün- durum/kılış."] }, 3),
    Q("turkce-tr-fiil-107", "tr-fiil",
      "“Arkadaşım sınavı kazanmış.” cümlesindeki fiilin kipi ve taşıdığı anlam aşağıdakilerden hangisidir?",
      ["Görülen geçmiş, tanıklık", "Duyulan geçmiş, başkasından öğrenme", "Şimdiki zaman, süreklilik", "Gelecek zaman, tahmin", "Geniş zaman, alışkanlık"], 1,
      "“kazanmış” → -mış duyulan geçmiş; olay başkasından öğrenilmiştir.",
      { short: "-mış → duyulan geçmiş (öğrenme).", steps: ["'-mış' eki tanık olunmayan, öğrenilen geçmişi bildirir."], whyOthersWrong: ["Diğer kip-anlam eşleşmeleri yanlış."] }, 2),
    Q("turkce-tr-fiil-108", "tr-fiil",
      "Aşağıdaki cümlelerin hangisinde fiil <b>emir kipiyle</b> çekimlenmiştir?",
      ["Yarın gelirim.", "Burayı hemen temizle.", "Gelmeliyim.", "Keşke görseydim.", "Çoktan gitmiş."], 1,
      "“temizle” → emir kipidir (2. kişi).",
      { short: "temizle → emir.", steps: ["Emir kipi ek almadan kişiye buyruk verir.", "'temizle' emirdir."], whyOthersWrong: ["gelirim geniş, gelmeliyim gereklilik, görseydim şart, gitmiş duyulan geçmiş."] }, 2),
    Q("turkce-tr-fiil-109", "tr-fiil",
      "“Çocuklar bahçede oynuyordu.” cümlesindeki fiilin zamanı için doğru olan hangisidir?",
      ["Basit zamanlı (şimdiki)", "Birleşik zamanlı (şimdiki zamanın hikâyesi)", "Birleşik zamanlı (geniş zamanın rivayeti)", "Gelecek zaman", "Görülen geçmiş zaman"], 1,
      "“oynuyordu” = oynuyor (şimdiki) + -du (ek fiil) → şimdiki zamanın hikâyesi (birleşik zaman).",
      { short: "oynuyordu → şimdiki zamanın hikâyesi.", steps: ["'oynuyor' + '-du' ek fiil.", "Birleşik zaman: şimdiki zamanın hikâyesi."], whyOthersWrong: ["Basit değil; rivayet/gelecek/görülen geçmiş değil."] }, 3),
    Q("turkce-tr-fiil-110", "tr-fiil",
      "“Bu yolu daha önce de yürümüştüm.” Bu cümlede ek fiilin görevi aşağıdakilerden hangisidir?",
      ["İsmi yüklem yapmak", "Basit zamanlı fiili birleşik zamanlı yapmak", "Olumsuzluk katmak", "Soru anlamı katmak", "Özne türetmek"], 1,
      "“yürümüştüm” = yürü-müş + -tü(m) ek fiili; basit zamanı birleşik zamana çevirmiş.",
      { short: "Ek fiil → birleşik zaman kurar.", steps: ["'yürümüş' + '-tü' ek fiil.", "Birleşik zaman oluşturur (öğrenilen geçmişin hikâyesi)."], whyOthersWrong: ["İsmi yüklem yapma burada söz konusu değil; olumsuzluk/soru/özne yok."] }, 3),

    /* ---- TAMLAMALAR (10) ---- */
    Q("turkce-tr-tamlama-101", "tr-tamlama",
      "“Evin kapısı sabaha kadar açık kalmış.” cümlesindeki “evin kapısı” söz öbeği hangi tür tamlamadır?",
      ["Belirtisiz isim tamlaması", "Belirtili isim tamlaması", "Takısız isim tamlaması", "Sıfat tamlaması", "Zincirleme tamlama"], 1,
      "Tamlayan “ev-in” (-in), tamlanan “kapı-sı” (-ı) ek almış → belirtili isim tamlaması.",
      { short: "İkisi de ek almış → belirtili.", steps: ["ev-in (-in) + kapı-sı (-ı).", "Belirtili isim tamlaması."], whyOthersWrong: ["Belirtisizde tamlayan eksiz olurdu; takısızda hiç ek olmaz."] }, 2),
    Q("turkce-tr-tamlama-102", "tr-tamlama",
      "Aşağıdakilerden hangisi <b>belirtisiz isim tamlamasıdır</b>?",
      ["bahçenin çiçeği", "çocuğun oyuncağı", "kitap kabı", "altın bilezik", "kırmızı gül"], 2,
      "“kitap kabı” → tamlayan eksiz, tamlanan “-ı” almış → belirtisiz isim tamlaması.",
      { short: "Yalnız tamlanan ek → belirtisiz.", steps: ["kitap (eksiz) + kab-ı (-ı).", "Belirtisiz isim tamlaması."], whyOthersWrong: ["İlk ikisi belirtili; altın bilezik takısız; kırmızı gül sıfat tamlaması."] }, 2),
    Q("turkce-tr-tamlama-103", "tr-tamlama",
      "Aşağıdakilerden hangisi <b>sıfat tamlamasıdır</b>?",
      ["okulun bahçesi", "demir parmaklık", "şehrin gürültüsü", "ağacın dalı", "masa örtüsü"], 1,
      "“demir parmaklık” → “demir” parmaklığı niteler, ek yok → (takısız/sıfat işlevli) niteleme; isim tamlaması değil.",
      { short: "Niteleme + ek yok → sıfat/takısız.", steps: ["'demir' parmaklığı niteliyor, iyelik eki yok.", "İsim tamlaması değildir."], whyOthersWrong: ["okulun bahçesi/şehrin gürültüsü/ağacın dalı belirtili; masa örtüsü belirtisiz isim tamlaması."] }, 3),
    Q("turkce-tr-tamlama-104", "tr-tamlama",
      "“Okul bahçesinin duvarı yıkıldı.” cümlesindeki “okul bahçesinin duvarı” öbeği hangi tür tamlamadır?",
      ["Belirtili isim tamlaması", "Belirtisiz isim tamlaması", "Zincirleme isim tamlaması", "Sıfat tamlaması", "Takısız tamlama"], 2,
      "Üç addan (okul + bahçe + duvar) oluşan, iç içe geçmiş tamlama → zincirleme.",
      { short: "Üç ad iç içe → zincirleme.", steps: ["'okul bahçesi' belirtisiz tamlama, ona '-nin duvarı' eklenmiş.", "Zincirleme tamlama."], whyOthersWrong: ["Tek belirtili/belirtisiz değil; sıfat/takısız değil."] }, 3),
    Q("turkce-tr-tamlama-105", "tr-tamlama",
      "Aşağıdakilerden hangisi <b>takısız isim tamlamasıdır</b>?",
      ["bahçenin gülü", "okul servisi", "gümüş yüzük", "üç öğrenci", "güzel manzara"], 2,
      "“gümüş yüzük” → yapıldığı maddeyi bildirir, ek yok → takısız isim tamlaması.",
      { short: "Madde + ek yok → takısız.", steps: ["'gümüş' yüzüğün maddesini bildirir.", "Hiç ek yok → takısız isim tamlaması."], whyOthersWrong: ["bahçenin gülü belirtili; okul servisi belirtisiz; üç öğrenci/güzel manzara sıfat tamlaması."] }, 3),
    Q("turkce-tr-tamlama-106", "tr-tamlama",
      "“Yağmurun sesi beni uyuttu.” cümlesindeki tamlamada tamlayan ve tamlanan sırasıyla hangi ekleri almıştır?",
      ["-ı / -in", "-in / -ı", "ek yok / -ı", "-in / ek yok", "ek yok / ek yok"], 1,
      "“yağmur-un” tamlayan (-in), “ses-i” tamlanan (-ı).",
      { short: "yağmur-un (-in) + ses-i (-ı).", steps: ["Tamlayan -in, tamlanan -ı alır → belirtili."], whyOthersWrong: ["Sıralama yalnız B'de doğru."] }, 2),
    Q("turkce-tr-tamlama-107", "tr-tamlama",
      "Aşağıdaki cümlelerin hangisinde <b>sıfat tamlaması</b> vardır?",
      ["Kapının kolu kırılmış.", "Bahçede yaşlı bir ağaç var.", "Evin çatısı akıyor.", "Şehrin trafiği yoğun.", "Sınıfın kapısı açık."], 1,
      "“yaşlı bir ağaç” → sıfat (yaşlı) + isim → sıfat tamlaması.",
      { short: "yaşlı ağaç → sıfat tamlaması.", steps: ["'yaşlı' ağacı niteliyor, iyelik eki yok.", "Sıfat tamlaması."], whyOthersWrong: ["Diğerleri belirtili isim tamlaması."] }, 2),
    Q("turkce-tr-tamlama-108", "tr-tamlama",
      "“Türkiye’nin başkenti Ankara’dır.” cümlesindeki “Türkiye’nin başkenti” öbeği hangi tür tamlamadır?",
      ["Belirtisiz isim tamlaması", "Belirtili isim tamlaması", "Sıfat tamlaması", "Takısız tamlama", "Zincirleme tamlama"], 1,
      "Tamlayan “Türkiye’nin” (-nin), tamlanan “başkent-i” (-i) → belirtili isim tamlaması.",
      { short: "İkisi de ek → belirtili.", steps: ["Türkiye'nin (-nin) + başkent-i (-i).", "Belirtili isim tamlaması."], whyOthersWrong: ["Belirtisiz/sıfat/takısız/zincirleme değil."] }, 2),
    Q("turkce-tr-tamlama-109", "tr-tamlama",
      "Aşağıdaki öbeklerden hangisinde tamlama türü ötekilerden <b>farklıdır</b>?",
      ["pencere camı", "duvar saati", "çay bardağı", "okulun bahçesi", "diş fırçası"], 3,
      "“okulun bahçesi” belirtili (tamlayan -ın eki almış); diğerleri belirtisiz isim tamlamasıdır.",
      { short: "okulun bahçesi → belirtili; diğerleri belirtisiz.", steps: ["Diğerlerinde tamlayan eksiz (belirtisiz).", "'okulun' -ın almış → belirtili."], whyOthersWrong: ["pencere/duvar/çay/diş eksiz tamlayan → belirtisiz."] }, 3),
    Q("turkce-tr-tamlama-110", "tr-tamlama",
      "“Annemin pişirdiği o nefis yemekleri çok özledim.” cümlesinde geçen “o nefis yemekler” öbeği için aşağıdakilerden hangisi doğrudur?",
      ["Belirtili isim tamlamasıdır.", "Birden çok sıfatın bir adı nitelediği sıfat tamlamasıdır.", "Belirtisiz isim tamlamasıdır.", "Zincirleme tamlamadır.", "Takısız tamlamadır."], 1,
      "“o” (işaret) ve “nefis” (niteleme) sıfatları “yemekler” adını niteler → sıfat tamlaması.",
      { short: "İki sıfat + isim → sıfat tamlaması.", steps: ["'o' ve 'nefis' yemekleri niteliyor.", "İyelik eki yok → sıfat tamlaması."], whyOthersWrong: ["İsim tamlaması/zincirleme/takısız değil."] }, 3)
  ]);
})();
