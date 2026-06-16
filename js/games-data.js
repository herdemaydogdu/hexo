/* ============================================================
   TYT Hazırlık — Oyun Ayarları
   Eşleştirme/hafıza/kart içerikleri artık ünitelerde (data.js
   → subjects[].units[].pairs). Burada zorluk, seviye, rozet
   ve combo ayarları tutulur.
   ============================================================ */

const GAMES_DATA = {
  /* Zorluk seviyeleri */
  difficulties: {
    kolay: { name: "Kolay", pairs: 4, time: 75, xpMult: 0.8 },
    orta:  { name: "Orta",  pairs: 6, time: 60, xpMult: 1.0 },
    zor:   { name: "Zor",   pairs: 8, time: 45, xpMult: 1.3 }
  },

  /* Seviye: her 100 XP = 1 seviye */
  xpPerLevel: 100,
  levelTitles: ["Çaylak", "Çalışkan", "Azimli", "Bilgili", "Uzman", "Usta", "Şampiyon", "Efsane"],

  comboMessages: ["Süper!", "Harika!", "Müthiş!", "Durdurulamaz!", "Efsane!"],

  badges: [
    { id: "ilk-oyun",       icon: "🎮", name: "İlk Adım",         desc: "İlk oyununu oynadın" },
    { id: "eslestirme-tam", icon: "🎯", name: "Kusursuz Eşleşme", desc: "Eşleştirmeyi hatasız bitirdin" },
    { id: "hafiza-usta",    icon: "🧠", name: "Hafıza Ustası",    desc: "Hafıza oyununu az hamleyle bitirdin" },
    { id: "simsek",         icon: "⚡", name: "Şimşek",           desc: "Hızlı yarışta 10+ doğru yaptın" },
    { id: "combo-king",     icon: "🚀", name: "Combo Ustası",     desc: "Hızlı yarışta 8 combo yakaladın" },
    { id: "zor-mod",        icon: "🦁", name: "Cesur",            desc: "Zor modda bir oyun bitirdin" },
    { id: "seviye-5",       icon: "🌟", name: "Yükselen Yıldız",  desc: "5. seviyeye ulaştın" },
    { id: "caliskan-10",    icon: "🔥", name: "Maraton",          desc: "Toplam 10 oyun oynadın" },
    { id: "xp-500",         icon: "💎", name: "Cevher",           desc: "Toplam 500 XP topladın" },
    { id: "tum-dersler",    icon: "📚", name: "Çok Yönlü",        desc: "Her dersten oyun oynadın" },
    { id: "ilk-100",        icon: "💯", name: "Yüz Soru",         desc: "Toplam 100 soru çözdün" },
    { id: "seri-7",         icon: "📅", name: "Haftalık Seri",    desc: "7 günlük çalışma serisi" },
    { id: "deneme-5",       icon: "📝", name: "Deneme Avcısı",    desc: "5 deneme tamamladın" },
    { id: "ustalik-20",     icon: "🏅", name: "Ustalık",          desc: "20 yanlışı kalıcı öğrendin" }
  ]
};

if (typeof window !== "undefined") window.GAMES_DATA = GAMES_DATA;
