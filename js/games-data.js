/* ============================================================
   TYT Hazırlık — Oyun Verisi
   pairs: her ders için terim ↔ tanım çiftleri.
   Eşleştirme, hafıza ve bilgi kartı oyunlarını besler.
   Hızlı yarış ise data.js'teki sorulardan beslenir.
   Yeni çift eklemek için ilgili dersin dizisine ekle.
   ============================================================ */

const GAMES_DATA = {
  pairs: {
    turkce: [
      { term: "Mecaz anlam", def: "Gerçek anlamından tamamen uzaklaşma" },
      { term: "Eş anlamlı", def: "Yazılışı farklı, anlamı aynı sözcük" },
      { term: "Sesteş (eşsesli)", def: "Yazılışı aynı, anlamı farklı sözcük" },
      { term: "Deyim", def: "Kalıplaşmış, çoğunlukla mecazlı söz" },
      { term: "Ünsüz yumuşaması", def: "p, ç, t, k → b, c, d, g/ğ" },
      { term: "Ünlü düşmesi", def: "burun → burnu" },
      { term: "Terim anlam", def: "Bir bilim/sanat dalına özgü anlam" },
      { term: "Ana düşünce", def: "Yazarın vermek istediği temel mesaj" }
    ],
    matematik: [
      { term: "aᵐ · aⁿ", def: "aᵐ⁺ⁿ" },
      { term: "√12", def: "2√3" },
      { term: "3⁻²", def: "1/9" },
      { term: "Bölme algoritması", def: "Bölünen = Bölen×Bölüm + Kalan" },
      { term: "200 TL'ye %20 zam", def: "240 TL" },
      { term: "√8 · √2", def: "4" },
      { term: "a⁰ (a≠0)", def: "1" },
      { term: "Doğru orantı", def: "Biri artarken diğeri aynı oranda artar" }
    ],
    sosyal: [
      { term: "Lidyalılar", def: "İlk madeni parayı icat etti" },
      { term: "Göktürkler", def: "'Türk' adını ilk kez devlet adı yaptı" },
      { term: "Uygurlar", def: "Yerleşik hayata geçen ilk Türkler" },
      { term: "Hititler", def: "Kadeş Antlaşması'nı imzaladı" },
      { term: "Akdeniz iklimi", def: "Bitki örtüsü maki" },
      { term: "Epistemoloji", def: "Bilgi felsefesi" },
      { term: "Sümerler", def: "Yazıyı (çivi yazısı) buldu" },
      { term: "Ontoloji", def: "Varlık felsefesi" }
    ],
    fen: [
      { term: "Mitokondri", def: "Enerji (ATP) üretimi" },
      { term: "Ribozom", def: "Protein sentezi" },
      { term: "Kloroplast", def: "Fotosentez (sadece bitki)" },
      { term: "F = m · a", def: "Newton'un 2. yasası" },
      { term: "İzotop", def: "Proton aynı, nötron farklı" },
      { term: "Periyot", def: "Periyodik tabloda yatay sıra" },
      { term: "Etki-tepki", def: "Newton'un 3. yasası" },
      { term: "Nötron", def: "Çekirdekte, yüksüz tanecik" }
    ]
  },

  /* Seviye: her 100 XP = 1 seviye atlama */
  xpPerLevel: 100,
  levelTitles: ["Çaylak", "Çalışkan", "Azimli", "Bilgili", "Uzman", "Usta", "Şampiyon", "Efsane"],

  /* Rozetler — koşulları games.js'te kontrol edilir */
  badges: [
    { id: "ilk-oyun",      icon: "🎮", name: "İlk Adım",        desc: "İlk oyununu oynadın" },
    { id: "eslestirme-tam", icon: "🎯", name: "Kusursuz Eşleşme", desc: "Eşleştirmeyi hatasız bitirdin" },
    { id: "hafiza-usta",   icon: "🧠", name: "Hafıza Ustası",    desc: "Hafıza oyununu az hamleyle bitirdin" },
    { id: "simsek",        icon: "⚡", name: "Şimşek",           desc: "Hızlı yarışta 10+ doğru yaptın" },
    { id: "seviye-5",      icon: "🌟", name: "Yükselen Yıldız",  desc: "5. seviyeye ulaştın" },
    { id: "caliskan-10",   icon: "🔥", name: "Maraton",          desc: "Toplam 10 oyun oynadın" },
    { id: "xp-500",        icon: "💎", name: "Cevher",           desc: "Toplam 500 XP topladın" },
    { id: "tum-dersler",   icon: "📚", name: "Çok Yönlü",        desc: "Her dersten oyun oynadın" }
  ]
};
