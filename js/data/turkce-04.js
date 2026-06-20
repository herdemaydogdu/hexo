/* ============================================================
   TÜRKÇE — Batch 4: Sözcükte Yapı & Fiilimsiler'i 10 soruya tamamlama
   (Anlatımlar turkce-pilot.js'te zaten zengin; burada yalnız soru eklenir.)
   Tümü ÖZGÜN (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("turkce-04: content-loader yüklenmedi"); return; }
  var Q = function (id, unit, q, options, answer, explain, sol, diff) {
    return { id: id, subject: "turkce", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, difficulty: diff || 2, skill: "kavram-uygulama",
      sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    /* ---- SÖZCÜKTE YAPI (7 ek → toplam 10) ---- */
    Q("turkce-tr-yapi-201", "tr-yapi",
      "Aşağıdaki sözcüklerden hangisi <b>birleşik</b> yapılıdır?",
      ["kitaplık", "gözlükçü", "hanımeli", "tuzluk", "yolcu"], 2,
      "“hanımeli” iki sözcüğün kaynaşmasıyla oluşan birleşik sözcüktür.",
      { short: "hanımeli = birleşik.", steps: ["Birleşik sözcük iki sözcükten oluşur.", "hanım+eli → hanımeli."], whyOthersWrong: ["Diğerleri yapım ekiyle türemiştir."] }, 2),
    Q("turkce-tr-yapi-202", "tr-yapi",
      "\"Kalemler\" sözcüğünün yapısı için doğru olan hangisidir?",
      ["Türemiş", "Birleşik", "Basit", "Yansıma", "Pekiştirilmiş"], 2,
      "-ler çekim ekidir; yapım eki olmadığı için sözcük basittir.",
      { short: "Çekim eki var, yapım eki yok → basit.", steps: ["kalem + ler (çokluk = çekim).", "Yapım eki yok → basit."], whyOthersWrong: ["Türemiş yapım eki gerektirir."] }, 1),
    Q("turkce-tr-yapi-203", "tr-yapi",
      "Aşağıdaki sözcüklerin hangisinde hem <b>yapım</b> hem <b>çekim</b> eki vardır?",
      ["evler", "kitaplıkta", "gözden", "kalemi", "yoldan"], 1,
      "“kitaplıkta”: kitap + lık (yapım) + ta (çekim).",
      { short: "kitap+lık(yapım)+ta(çekim).", steps: ["Kök: kitap.", "-lık yapım eki (yeni sözcük).", "-ta hâl eki (çekim)."], whyOthersWrong: ["Diğerlerinde yalnız çekim eki var."] }, 2),
    Q("turkce-tr-yapi-204", "tr-yapi",
      "Aşağıdakilerden hangisi <b>fiil kökü</b>dür?",
      ["su", "göz", "yaz-", "taş", "kalem"], 2,
      "“yaz-” bir eylem bildirir; fiil köküdür.",
      { short: "yaz- → fiil kökü.", steps: ["Fiil kökü eylem bildirir ve -mak/-mek alabilir (yazmak).", "Diğerleri isim köküdür."], whyOthersWrong: ["su/göz/taş/kalem isim köküdür."] }, 1),
    Q("turkce-tr-yapi-205", "tr-yapi",
      "Bir sözcüğün <b>yapım eki aldıktan sonra</b> aldığı yeni biçime ne ad verilir?",
      ["Kök", "Gövde", "Ek", "Çekim", "Edat"], 1,
      "Köke yapım eki gelince oluşan biçim gövdedir.",
      { short: "Kök + yapım eki = gövde.", steps: ["Kök en küçük anlamlı birim.", "Yapım eki alınca 'gövde' olur."], whyOthersWrong: ["Kök ek almamış biçimdir; diğerleri tanımı karşılamaz."] }, 2),
    Q("turkce-tr-yapi-206", "tr-yapi",
      "\"Sevgi\" sözcüğünün yapısı aşağıdakilerden hangisidir?",
      ["Basit", "Türemiş", "Birleşik", "Yansıma", "İkileme"], 1,
      "sev- (fiil kökü) + -gi (yapım eki) → türemiş.",
      { short: "sev-+gi → türemiş.", steps: ["Kök: sev-.", "-gi yapım eki → yeni sözcük.", "Türemiş."], whyOthersWrong: ["Basit/birleşik/yansıma/ikileme değil."] }, 2),
    Q("turkce-tr-yapi-207", "tr-yapi",
      "Aşağıdaki sözcüklerden hangisi <b>türemiş değildir</b>?",
      ["başlangıç", "sevinç", "gözlük", "ağaçlar", "yazar"], 3,
      "“ağaçlar” yalnız çekim eki (-lar) alır; türemiş değildir.",
      { short: "ağaçlar → basit (çekim eki).", steps: ["-lar çekim ekidir.", "Yapım eki yok → türemiş değil."], whyOthersWrong: ["başlangıç/sevinç/gözlük/yazar yapım ekiyle türemiştir."] }, 2),

    /* ---- FİİLİMSİLER (8 ek → toplam 10) ---- */
    Q("turkce-tr-fiilimsi-201", "tr-fiilimsi",
      "Aşağıdaki altı çizili sözcüklerden hangisi <b>isim-fiildir</b>?",
      ["<b>koşan</b> çocuk", "<b>gülmek</b> güzeldir", "<b>koşarak</b> geldi", "<b>gelince</b> ara", "<b>okuyacak</b> kitap"], 1,
      "“gülmek” -mak/-mek isim-fiil ekiyle yapılmıştır.",
      { short: "-mek → isim-fiil (gülmek).", steps: ["İsim-fiil ekleri: -mak/-mek, -ma/-me, -ış/-iş.", "gülmek → isim-fiil."], whyOthersWrong: ["koşan/okuyacak sıfat-fiil; koşarak/gelince zarf-fiil."] }, 2),
    Q("turkce-tr-fiilimsi-202", "tr-fiilimsi",
      "Aşağıdaki altı çizili sözcüklerden hangisi <b>sıfat-fiildir</b>?",
      ["<b>gülüş</b>ü tatlı", "<b>bakmak</b> serbest", "<b>okuyan</b> öğrenci", "hızla <b>koşarak</b>", "eve <b>gelince</b>"], 2,
      "“okuyan” -an sıfat-fiil ekiyle bir ismi niteler.",
      { short: "-an → sıfat-fiil (okuyan öğrenci).", steps: ["Sıfat-fiil bir ismi niteler.", "okuyan öğrenci → sıfat-fiil."], whyOthersWrong: ["gülüş/bakmak isim-fiil; koşarak/gelince zarf-fiil."] }, 2),
    Q("turkce-tr-fiilimsi-203", "tr-fiilimsi",
      "Aşağıdaki altı çizili sözcüklerden hangisi <b>zarf-fiildir</b>?",
      ["<b>gelmek</b> zor", "<b>yazan</b> kişi", "<b>koşarak</b> çıktı", "<b>bakış</b>ı derin", "<b>okunacak</b> metin"], 2,
      "“koşarak” -arak zarf-fiil ekiyle eylemin durumunu anlatır.",
      { short: "-arak → zarf-fiil (koşarak).", steps: ["Zarf-fiil yüklemin durumunu/zamanını anlatır.", "koşarak → zarf-fiil."], whyOthersWrong: ["gelmek/bakış isim-fiil; yazan/okunacak sıfat-fiil."] }, 2),
    Q("turkce-tr-fiilimsi-204", "tr-fiilimsi",
      "\"Kitabı okuyup arkadaşına verdi.\" cümlesinde kaç tane <b>fiilimsi</b> vardır?",
      ["Yok", "1", "2", "3", "4"], 1,
      "“okuyup” (-ip zarf-fiili) tek fiilimsidir; “verdi” çekimli fiildir.",
      { short: "okuyup = 1 fiilimsi.", steps: ["-ip zarf-fiil eki.", "verdi çekimli fiil (yüklem)."], whyOthersWrong: ["2/3 demek yüklemi fiilimsi saymaktır."] }, 2),
    Q("turkce-tr-fiilimsi-205", "tr-fiilimsi",
      "Aşağıdaki cümlelerin hangisinde <b>fiilimsi yoktur</b>?",
      ["Gülen yüzünü özledim.", "Çalışmak isteyenler kalsın.", "Sınavı kazandı ve sevindi.", "Koşarak geldi.", "Görülecek hesabımız var."], 2,
      "“kazandı ve sevindi” iki çekimli fiildir; fiilimsi içermez.",
      { short: "Çekimli fiiller → fiilimsi yok.", steps: ["Diğerlerinde -en, -mek, -arak, -ecek fiilimsileri var.", "Bu cümlede yalnız çekimli fiiller."], whyOthersWrong: ["Gülen/isteyen/koşarak/görülecek fiilimsidir."] }, 3),
    Q("turkce-tr-fiilimsi-206", "tr-fiilimsi",
      "\"Yarın <b>okunacak</b> kitapları ayırdım.\" cümlesindeki altı çizili sözcük için doğru olan hangisidir?",
      ["Çekimli fiildir", "İsim-fiildir", "Sıfat-fiildir", "Zarf-fiildir", "Edattır"], 2,
      "“okunacak” bir ismi (kitapları) nitelediği için sıfat-fiildir.",
      { short: "-ecek burada sıfat-fiil (ismi niteliyor).", steps: ["'okunacak kitaplar' → ismi niteler.", "Bu yüzden sıfat-fiil."], whyOthersWrong: ["Tek başına yargı bildirse çekimli fiil olurdu."] }, 3),
    Q("turkce-tr-fiilimsi-207", "tr-fiilimsi",
      "Aşağıdakilerden hangisi <b>isim-fiil</b> ekidir?",
      ["-an / -en", "-arak / -ip", "-mak / -ma / -ış", "-dık / -ecek", "-ınca / -alı"], 2,
      "İsim-fiil ekleri -mak/-mek, -ma/-me, -ış/-iş'tir.",
      { short: "İsim-fiil: -mak, -ma, -ış.", steps: ["İsim-fiil eylemi iş adına çevirir."], whyOthersWrong: ["-an/-dık/-ecek sıfat-fiil; -arak/-ip/-ınca/-alı zarf-fiil."] }, 1),
    Q("turkce-tr-fiilimsi-208", "tr-fiilimsi",
      "Aşağıdakilerden hangisi <b>zarf-fiil</b> ekidir?",
      ["-ma / -ış", "-an / -ecek", "-ınca / -arak", "-dık / -ası", "-mak / -me"], 2,
      "Zarf-fiil ekleri -ip, -arak, -ınca, -ken, -madan, -alı vb.'dir.",
      { short: "Zarf-fiil: -ınca, -arak.", steps: ["Zarf-fiil eylemin durum/zamanını verir."], whyOthersWrong: ["-ma/-ış isim-fiil; -an/-ecek/-dık/-ası sıfat-fiil; -mak/-me isim-fiil."] }, 1)
  ]);
})();
