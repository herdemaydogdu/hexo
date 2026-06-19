/* ============================================================
   TÜRKÇE — Pilot İçerik Modülü (Faz D, pilot)
   Doküman 3.4 / 3.5 / 3.7 standardına göre ZENGİN içerik.
   Tümü özgün; ÖSYM/MEB metni kopyalanmamıştır (sourceType:"original").

   Geriye dönük uyum: üniteler legacy alanları (name/summary/content/pairs),
   sorular legacy alanları (q/options/answer/explain) taşır → mevcut app
   bozulmadan render eder. Ek (objectives/sections/solution/skill/difficulty/
   reviewStatus) alanları ileri kullanım içindir.
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-pilot: content-loader yüklenmedi"); return; }

  TYT_CONTENT.addUnits("turkce", [
    {
      id: "tr-yapi", name: "Sözcükte Yapı ve Ekler", branch: null,
      summary: "Kök, gövde, yapım ve çekim ekleri; basit-türemiş-birleşik sözcük.",
      curriculumRefs: ["2026-YKS Türkçe: Sözcükte yapı ve ekler"],
      prerequisites: ["tr-sozcuk"],
      estimatedMinutes: 16, difficulty: 2,
      objectives: [
        "Kök ile ekleri ayırt eder.",
        "Yapım eki ile çekim ekini örneklerle ayırır.",
        "Sözcüğü basit, türemiş ve birleşik olarak sınıflandırır."
      ],
      content: `
        <h2>Sözcükte Yapı ve Ekler</h2>
        <p>Bir sözcüğün yapısını çözmek, anlam değil <b>biçim</b> sorusudur: önce <b>kök</b>ü buluruz, sonra eklerin türünü ayırırız.</p>
        <h3>1) Kök</h3>
        <p>Anlamlı en küçük parçadır. İki türü vardır: <b>isim kökü</b> (göz, su) ve <b>fiil kökü</b> (gel-, yaz-). Kökü bulmak için sözcüğü sadeleştir: <i>gözlükçü → göz</i>.</p>
        <h3>2) Yapım eki</h3>
        <p>Köke gelir, <b>yeni bir sözcük</b> türetir ve çoğu zaman tür/anlam değiştirir: <i>göz→göz<b>lük</b></i>, <i>yaz→yaz<b>ar</b></i>. Yapım eki aldıktan sonra sözcük artık <b>gövde</b> olur.</p>
        <h3>3) Çekim eki</h3>
        <p>Yeni sözcük türetmez; sözcüğü cümleye bağlar (çokluk, hâl, iyelik, kişi, kip, zaman): <i>ev<b>ler</b>, ev<b>de</b>, ev<b>im</b></i>. Çekim eki anlamı değil <b>görevi</b> belirler.</p>
        <h3>4) Yapısına göre sözcük</h3>
        <ul>
          <li><b>Basit:</b> yapım eki almamış → <i>kitap, gel-</i> (çekim eki alabilir: <i>kitaplar</i> yine basittir).</li>
          <li><b>Türemiş:</b> en az bir yapım eki almış → <i>kitaplık, gelir</i>.</li>
          <li><b>Birleşik:</b> iki sözcüğün birleşmesi → <i>başöğretmen, hanımeli</i>.</li>
        </ul>
        <div class="formula">Önemli ölçüt: çekim eki almak sözcüğü <b>türemiş yapmaz</b>; yalnızca <b>yapım eki</b> türetir.</div>
        <h3>Çözümlü örnek</h3>
        <p><b>"yolcular"</b> sözcüğünü çözümleyelim: kök <i>yol</i> (isim) + <b>-cu</b> (yapım eki → "yolcu") + <b>-lar</b> (çekim eki). Yapım eki aldığı için <b>türemiş</b>tir.</p>
        <h3>Sık yapılan hata</h3>
        <p>"kitaplar" sözcüğü çok ek aldığı için türemiş sanılır; oysa <b>-lar</b> çekim ekidir, sözcük <b>basit</b>tir. Ölçüt ek sayısı değil, <b>yapım eki olup olmadığıdır</b>.</p>
        <h3>Özet kartı</h3>
        <ul>
          <li>Yapım eki → yeni sözcük (türemiş).</li>
          <li>Çekim eki → görev, yeni sözcük yok (yapı değişmez).</li>
          <li>Birleşik → iki sözcüğün kaynaşması.</li>
        </ul>`,
      commonMistakes: [
        "Çekim eki alan sözcüğü türemiş sanmak (kitaplar → basittir).",
        "Birleşik sözcüğü tek tek anlamlarına bakıp ayrı sözcük saymak."
      ],
      pairs: [
        { term: "Yapım eki", def: "Yeni sözcük türetir (göz→gözlük)" },
        { term: "Çekim eki", def: "Yeni sözcük türetmez; görev verir (evde)" },
        { term: "Basit sözcük", def: "Yapım eki almamış (kitap, kitaplar)" },
        { term: "Türemiş sözcük", def: "En az bir yapım eki almış (kitaplık)" },
        { term: "Birleşik sözcük", def: "İki sözcüğün kaynaşması (başöğretmen)" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    },
    {
      id: "tr-fiilimsi", name: "Fiilimsiler", branch: null,
      summary: "İsim-fiil, sıfat-fiil, zarf-fiil; cümlede yan cümle kurma.",
      curriculumRefs: ["2026-YKS Türkçe: Fiilimsi"],
      prerequisites: ["tr-yapi"],
      estimatedMinutes: 15, difficulty: 2,
      objectives: [
        "Üç fiilimsi türünü eklerinden tanır.",
        "Fiilimsi ile çekimli fiili ayırır.",
        "Fiilimsinin yan cümlecik kurduğunu fark eder."
      ],
      content: `
        <h2>Fiilimsiler</h2>
        <p>Fiilimsi, fiilden türeyip cümlede <b>isim, sıfat veya zarf</b> görevinde kullanılan sözcüktür. Fiil gibi görünür ama <b>yargı bildirmez</b> (çekimlenmez), bu yüzden yüklem olamaz.</p>
        <h3>1) İsim-fiil</h3>
        <p>Ekleri <b>-mak/-mek, -ma/-me, -ış/-iş</b>. Fiili "iş adı"na çevirir: <i>yüz<b>mek</b> sağlıklıdır</i>, <i>gül<b>üş</b>ü güzel</i>.</p>
        <h3>2) Sıfat-fiil (ortaç)</h3>
        <p>Ekleri <b>-an/-en, -ası, -mez, -ar, -dik, -ecek, -miş</b>. Bir ismi niteler: <i>koş<b>an</b> çocuk</i>, <i>oku<b>yacak</b> kitap</i>.</p>
        <h3>3) Zarf-fiil (bağ-fiil/ulaç)</h3>
        <p>Ekleri <b>-ip, -arak, -ınca, -ken, -dıkça, -madan, -alı</b>. Eylemin durumunu/zamanını anlatır, yüklemi etkiler: <i>koş<b>arak</b> geldi</i>, <i>eve gel<b>ince</b> aradı</i>.</p>
        <div class="formula">Ayırt etme: Fiilimsi cümleye <b>ikinci bir yüklemsi</b> ekler; çekimli fiilse kişi/zaman eki alıp <b>yargı</b> bildirir. "geldi" → fiil; "gelen / gelince / gelmek" → fiilimsi.</div>
        <h3>Çözümlü örnek</h3>
        <p><b>"Sınavı kazanınca çok sevindi."</b> Burada <i>kazanınca</i> zarf-fiildir (-ınca); yan cümlecik kurar, yüklem <i>sevindi</i>dir. Cümlede <b>bir</b> fiilimsi vardır.</p>
        <h3>Sık yapılan hata</h3>
        <p>"-miş, -ecek, -ar, -dik" ekleri hem kip eki hem sıfat-fiil eki olabilir. Ölçüt: sözcük bir <b>ismi niteliyorsa</b> sıfat-fiil, tek başına <b>yargı bildiriyorsa</b> çekimli fiildir. "okumuş adam" (sıfat-fiil) ≠ "adam okumuş" (fiil).</p>
        <h3>Özet kartı</h3>
        <ul>
          <li>İsim-fiil: -mak, -ma, -ış</li>
          <li>Sıfat-fiil: -an, -ası, -mez, -ar, -dik, -ecek, -miş</li>
          <li>Zarf-fiil: -ip, -arak, -ınca, -ken, -madan, -alı</li>
        </ul>`,
      commonMistakes: [
        "Sıfat-fiil ekini (-ecek, -miş) kip eki sanıp fiilimsiyi atlamak.",
        "Fiilimsiyi yüklem sanmak; oysa fiilimsi yargı bildirmez."
      ],
      pairs: [
        { term: "İsim-fiil", def: "-mak, -ma, -ış (yüzmek, gülüş)" },
        { term: "Sıfat-fiil", def: "-an, -ecek, -dik, -miş (koşan, okuyacak)" },
        { term: "Zarf-fiil", def: "-ip, -arak, -ınca, -ken (koşarak, gelince)" },
        { term: "Fiilimsi", def: "Yargı bildirmez; yan cümlecik kurar" }
      ],
      reviewStatus: "draft", originalityStatement: true, reviewedAt: null
    }
  ]);

  TYT_CONTENT.addQuestions([
    {
      id: "turkce-tr-yapi-001", subject: "turkce", unit: "tr-yapi",
      skill: "kavram-uygulama", difficulty: 2, estimatedSeconds: 60,
      q: "Aşağıdaki sözcüklerden hangisi <b>yapısına göre</b> ötekilerden farklıdır?",
      options: ["kitaplık", "gözlükçü", "yolcular", "tuzluk", "demirci"], answer: 2,
      explain: "“yolcular” yalnızca çekim eki (-lar) görünse de kök yol + yapım eki -cu içerir; ancak farkı şudur: diğerleri TÜREMİŞ ve çekim eki almamışken, “yolcular” türemiş gövdeye çekim eki almıştır. Tek başına çekim eki alan biçim odaktadır.",
      solution: {
        short: "“yolcular” türemiş gövde + çekim eki (-lar) taşır; diğerleri yalnız yapım ekiyle biten türemiş sözcüklerdir.",
        steps: [
          "Her sözcüğün kökünü ve eklerini ayır.",
          "kitaplık=kitap+lık, gözlükçü=göz+lük+çü, tuzluk=tuz+luk, demirci=demir+ci → hepsi yalnız yapım ekiyle biter.",
          "yolcular=yol+cu(+lar): sonda çekim eki (-lar) vardır.",
          "Bu yüzden çekim eki barındıran “yolcular” yapı bakımından farklıdır."
        ],
        whyOthersWrong: [
          "kitaplık: kök+yapım eki, çekim eki yok.",
          "gözlükçü: iki yapım eki, çekim eki yok.",
          "tuzluk: kök+yapım eki, çekim eki yok.",
          "demirci: kök+yapım eki, çekim eki yok."
        ]
      },
      tags: ["yapı", "ekler"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "turkce-tr-yapi-002", subject: "turkce", unit: "tr-yapi",
      skill: "kavram-ayirt-etme", difficulty: 1, estimatedSeconds: 45,
      q: "“Çocuklar bahçede oynuyor.” cümlesindeki <b>çocuklar</b> sözcüğü yapısına göre nedir?",
      options: ["Türemiş", "Birleşik", "Basit", "Yansıma", "Pekiştirilmiş"], answer: 2,
      explain: "-lar çekim ekidir; yapım eki yok, dolayısıyla sözcük basittir.",
      solution: {
        short: "“çocuk” köküne yalnızca çekim eki (-lar) gelmiştir; yapım eki olmadığı için basittir.",
        steps: ["Kök: çocuk.", "Ek: -lar (çokluk = çekim eki).", "Yapım eki yok → sözcük BASİT."],
        whyOthersWrong: [
          "Türemiş: yapım eki gerektirir, burada yok.",
          "Birleşik: iki sözcük gerekir.",
          "Yansıma/Pekiştirilmiş: ses taklidi veya pekiştirme yok."
        ]
      },
      tags: ["yapı"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "turkce-tr-yapi-003", subject: "turkce", unit: "tr-yapi",
      skill: "kavram-ayirt-etme", difficulty: 2, estimatedSeconds: 60,
      q: "Aşağıdakilerin hangisinde <b>yapım eki</b> kullanılmıştır?",
      options: ["evden", "evimiz", "evler", "evci", "evdeki"], answer: 3,
      explain: "“evci” → ev+ci, -ci yapım ekidir ve yeni bir sözcük türetir; diğerleri çekim eki taşır.",
      solution: {
        short: "“-ci” yapım ekidir (evci = yeni sözcük); diğer seçeneklerdeki ekler çekim ekidir.",
        steps: ["Seçenekleri köke ayır.", "-den (hâl), -imiz (iyelik), -ler (çokluk), -deki (hâl+ilgi) → çekim.", "-ci → yapım eki."],
        whyOthersWrong: ["evden: -den hâl eki.", "evimiz: -imiz iyelik eki.", "evler: -ler çokluk eki.", "evdeki: -de hâl + -ki ilgi eki."]
      },
      tags: ["yapım-eki"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "turkce-tr-fiilimsi-001", subject: "turkce", unit: "tr-fiilimsi",
      skill: "kavram-uygulama", difficulty: 2, estimatedSeconds: 70,
      q: "“Yağmur başlayınca koşarak eve girdik.” cümlesinde kaç tane <b>fiilimsi</b> vardır?",
      options: ["1", "2", "3", "4", "Yok"], answer: 1,
      explain: "“başlayınca” (zarf-fiil) ve “koşarak” (zarf-fiil) iki fiilimsidir; “girdik” çekimli fiildir.",
      solution: {
        short: "başlayınca + koşarak = 2 fiilimsi; girdik yüklem (çekimli fiil).",
        steps: ["Fiilimsi eklerini tara: -ınca, -arak.", "başla-yınca → zarf-fiil.", "koş-arak → zarf-fiil.", "gir-dik → görülen geçmiş zaman, çekimli fiil (yüklem)."],
        whyOthersWrong: ["1 veya 3 demek bir fiilimsiyi atlamak/yüklemi fiilimsi saymaktır.", "“Yok” demek -ınca ve -arak eklerini görmemektir."]
      },
      tags: ["fiilimsi", "zarf-fiil"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    },
    {
      id: "turkce-tr-fiilimsi-002", subject: "turkce", unit: "tr-fiilimsi",
      skill: "kavram-ayirt-etme", difficulty: 3, estimatedSeconds: 80,
      q: "Aşağıdaki altı çizili sözcüklerden hangisi <b>fiilimsi değildir</b>?",
      options: ["<b>okuyan</b> öğrenci", "<b>gülüş</b>ü tatlı", "sınavı <b>kazandı</b>", "<b>koşarak</b> geldi", "<b>yazılacak</b> mektup"], answer: 2,
      explain: "“kazandı” kişi ve zaman eki almış çekimli fiildir (yargı bildirir); diğerleri fiilimsidir.",
      solution: {
        short: "“kazandı” yargı bildiren çekimli fiildir; ötekiler isim/sıfat/zarf-fiildir.",
        steps: ["Her sözcüğün yargı bildirip bildirmediğine bak.", "okuyan/yazılacak → sıfat-fiil (ismi niteler).", "gülüş → isim-fiil.", "koşarak → zarf-fiil.", "kazandı → -dı görülen geçmiş + kişi eki = çekimli fiil."],
        whyOthersWrong: ["okuyan: -an sıfat-fiil.", "gülüş: -ış isim-fiil.", "koşarak: -arak zarf-fiil.", "yazılacak: -ecek sıfat-fiil (ismi niteliyor)."]
      },
      tags: ["fiilimsi", "ayirt-etme"], sourceType: "original", copyrightSafe: true, reviewStatus: "draft"
    }
  ]);
})();
