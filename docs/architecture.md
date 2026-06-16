# Mimari Notları (TYT Hazırlık)

Saf HTML/CSS/JavaScript. Build adımı yok; `index.html` doğrudan GitHub Pages'te çalışır. Veri tarayıcıda `localStorage`'da tutulur.

## Dosya sorumlulukları

| Dosya | Sorumluluk |
| --- | --- |
| `index.html` | İskelet, script yükleme sırası, anlamsal landmark'lar (header/nav/main/footer), skip-link |
| `js/config.js` | `TYT_CONFIG` — storage anahtarları, net politikası, TYT dağılımı, XP değerleri, tekrar aralıkları, skor yönleri |
| `js/core.js` | `TYTCore` — saf, DOM'suz, test edilebilir yardımcılar (tarih, net, shuffle, normalize/migration, yüksek skor, XP normalize, aralıklı tekrar, validator) |
| `js/data.js` | İçerik: `subjects[].units[]` (konu anlatımı + oyun çiftleri), branşlar, `questions[]` |
| `js/games-data.js` | Oyun ayarları: zorluk, seviye, rozetler, combo |
| `js/games.js` | Oyunlar, oyunlaştırma, XP/seviye/rozet, `awardXpEvent` |
| `js/app.js` | Navigasyon (hash router), quiz/deneme motoru, sonuç inceleme, yanlış defteri, istatistik, storage |
| `tests/` | Dev-only Node testleri ve içerik raporu |

Yükleme sırası (bağımlılık yönü): `config → core → data → games-data → games → app`. `core` ve `config` hiçbir şeye bağımlı değildir; `app` hepsini kullanır.

## Veri modeli (localStorage)

`tyt_progress_v1` (şema v3):
```json
{ "version": 3, "settings": { "dailyGoal": 10, "negativeNetAllowed": true, "quiz": {} },
  "sessions": [], "activeSession": null, "readTopics": [],
  "studyDays": ["YYYY-MM-DD"], "wrongBook": {}, "activities": [] }
```
`tyt_games_v1` (şema v2): `{ version, xp, gamesPlayed, badges, subjectsPlayed, highScores, xpEvents }`

Oturum (`sessions[]`): `sessionId, type, status, startedAt, completedAt, config, total, correct, wrong, blank, net, answers[], schemaVersion`. Her cevap: `{questionId, selectedAnswer, correctAnswer, isCorrect, isBlank, durationSeconds}`.

Yanlış defteri kaydı: `{wrongCount, correctStreak, mastered, lastWrongAt, lastReviewedAt, nextReviewAt, addedAt}`.

## Mimari kararlar (ADR özeti)

1. **Build yok, framework yok.** GitHub Pages'te tek tık çalışsın diye saf JS; modülerlik script sırası + global fonksiyonlarla sağlanır (ES modules yerel sunucu gerektireceğinden tercih edilmedi).
2. **Saf çekirdek.** Tüm kritik iş kuralları (tarih, net, seri, shuffle, migration, aralıklı tekrar, yüksek skor, XP) DOM'suz `core.js`'te toplanır → Node ile test edilebilir.
3. **Tek doğruluk kaynağı: cevap kayıtları.** İstatistikler ve ders dağılımı oturumların `answers[]` dizisinden türetilir; karışık deneme doğru derslere dağıtılır.
4. **Yerel takvim tarihi.** Tüm "bugün/seri" karşılaştırmaları yerel takvim günü üzerinden yapılır (UTC değil); eski ISO kayıtlar geriye dönük okunur.
5. **Sürümlü + idempotent migration.** Şema değişince veri silinmez; migration tekrar çalıştırılınca bozulmaz.
6. **Idempotent XP.** Her XP olayı `eventId` ile bir kez işlenir (çift sayım yok).
7. **Yalnızca uygulama anahtarları.** Reset `localStorage.clear()` kullanmaz; sadece `tyt_*` anahtarlarını temizler.
8. **Hash router.** Ekranlar `#/route` ile adreslenir; yenileme/geri-ileri çalışır; aktif test çıkış koruması geri butonunda da devrededir.

## Faz durumu

- **P0** (kritik hatalar): tamam — tarih/seri, reset, hafıza skoru, timer yarışı, ilerleme çubuğu, de/da + validator, net politikası, storage normalize/migration, aktif oturum, XP gösterimi, Fisher–Yates, regresyon testleri.
- **P1** (öğrenme deneyimi): tamam — soru id'leri, quiz ayarları, ayrıntılı oturum, sonuç inceleme, yanlış defteri + aralıklı tekrar, mini/tam TYT, istatistik yeniden tasarımı, aktivite log, öğrenmeye bağlı XP, hash router, erişilebilirlik, içerik kalite raporu.
- **P2** (mimari): kısmen — dokümantasyon, test kapsamı, merkezi boş-durum/hata. Modülerleştirme ve merkezi state, tarayıcıda adım adım doğrulanarak sürdürülecek.
- **P3** (PWA/yedekleme/SEO/performans): planlandı.
