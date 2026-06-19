/* ============================================================
   TYT Hazırlık — Merkezi Konfigürasyon
   Dağınık "magic number" yerine tek kaynak.
   (Bölüm 8.3 — Konfigürasyonların merkezileştirilmesi)
   ============================================================ */
const TYT_CONFIG = {
  schemaVersion: 2,

  storageKeys: {
    progress: "tyt_progress_v1",
    games: "tyt_games_v1",
    diff: "tyt_diff",
    sfx: "tyt_sfx"
  },

  dailyGoal: 10,

  // Net politikası: TYT formülü, negatif nete izin var (gizli Math.max yok)
  negativeNetAllowed: true,

  // Tam TYT dağılımı ve süresi
  tyt: { turkce: 40, matematik: 40, sosyal: 20, fen: 20, durationMin: 165 },

  // TYT sınav tarihi (geri sayım için) — her yıl güncelle
  examDate: "2027-06-19",

  // Oyunlaştırma
  xpPerLevel: 100,
  timerWarnSec: 10,

  // Aralıklı tekrar (Yanlış Defteri) — gün cinsinden
  reviewIntervalsDays: [1, 3, 7, 14],
  masteredStreak: 3,        // bu kadar üst üste doğru → mastered

  // Quiz varsayılanları
  quizDefaultCount: 10,

  // Öğrenmeye bağlı XP değerleri (P1-9)
  xp: { perCorrect: 2, quizBonus: 10, topicRead: 10, dailyGoal: 30 },

  // Yüksek skor karşılaştırma yönü (oyun türüne göre)
  scoreDirection: {
    matching: "high",   // çok eşleşme iyi
    memory: "low",      // az hamle iyi
    flashcard: "high",  // çok bilinen kart iyi
    timeattack: "high"  // çok puan iyi
  }
};

if (typeof window !== "undefined") window.TYT_CONFIG = TYT_CONFIG;
if (typeof module !== "undefined") module.exports = TYT_CONFIG;
