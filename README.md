# TYT Hazırlık

Saf HTML/CSS/JavaScript ile yapılmış TYT sınavına hazırlık uygulaması. Kurulum/build gerektirmez.

## Özellikler

- **Konu Anlatımı** — Türkçe, Matematik, Sosyal ve Fen derslerinde özet konular
- **Soru Çöz** — Derse göre testler; anında doğru cevap ve açıklama
- **Deneme Sınavı** — Süreli, karışık sorulardan oluşan deneme
- **İstatistik** — Net gelişimi grafiği, ders bazlı başarı (ilerleme tarayıcıda `localStorage`'da saklanır)
- **Net hesabı** — TYT kuralı: 4 yanlış 1 doğruyu götürür
- **Oyunlar** — Eşleştirme, hafıza, bilgi kartları ve hızlı yarış; her ders için
- **Oyunlaştırma** — XP, seviye, rozetler ve en yüksek skorlar ile uzun süre sıkılmadan pratik

## Çalıştırma

`index.html` dosyasını tarayıcıda aç. Yerel sunucu istersen:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## GitHub Pages ile yayınlama

1. Dosyaları repoya yükle (push et).
2. GitHub'da **Settings → Pages → Source: main branch / root** seç.
3. Birkaç dakika sonra site `https://kullanıcıadı.github.io/repo-adı` adresinde yayında olur.

## İçerik ekleme

Tüm dersler, konular ve sorular `js/data.js` içindedir. Yeni soru eklemek için `questions` dizisine yeni nesne ekle (`answer` = doğru şıkkın sırası, 0=A). Yeni konu için ilgili dersin `topics` dizisine ekle.

## Yapı

```
index.html        → Sayfa iskeleti, script yükleme sırası
css/style.css     → Tema, bileşen ve responsive stiller
js/config.js      → Merkezi konfigürasyon (storage anahtarları, net politikası, skor yönleri…)
js/core.js        → Saf, test edilebilir yardımcılar (tarih, net, shuffle, storage normalize, migration, validator)
js/data.js        → İçerik (dersler, konular, sorular)
js/games-data.js  → Oyun içerikleri (eşleştirme çiftleri, rozetler, zorluk)
js/games.js       → Oyunlar + oyunlaştırma (XP, seviye, rozet, skor)
js/app.js         → Navigasyon, quiz, deneme, istatistik, localStorage
tests/core.test.js → P0 birim/regresyon testleri
```

## Testleri çalıştırma

Saf fonksiyonlar Node ile test edilir (üretim için build gerekmez):

```bash
node tests/core.test.js
```

Çıktı `... geçti, 0 kaldı.` ve sıfır çıkış kodu vermelidir. Kapsam: yerel tarih/seri, net, Fisher–Yates shuffle, storage normalizasyon + migration, yüksek skor yönü, XP normalize ve içerik validator.

### Manuel smoke test
Ana sayfa, konu anlatımı, soru çöz, deneme, dört oyun ve istatistik ekranlarını gez; console'da yeni hata olmamalı.

## Veri / localStorage

| Anahtar | İçerik |
| --- | --- |
| `tyt_progress_v1` | `{version, settings, sessions, readTopics, studyDays, activeSession}` |
| `tyt_games_v1` | `{version, xp, gamesPlayed, badges, subjectsPlayed, highScores}` |
| `tyt_diff` / `tyt_sfx` | Zorluk ve ses tercihi |

- **Net** sayısal saklanır, ekranda biçimlendirilir; varsayılan olarak negatif nete izin verilir (`config.negativeNetAllowed`).
- **Tarih** karşılaştırmaları yerel takvim günü üzerinden yapılır (UTC değil).
- **Migration** idempotenttir; eski v1 verisi silinmeden yeni şemaya taşınır.
- **Sıfırlama** yalnızca uygulamanın kendi anahtarlarını temizler (`localStorage.clear` kullanılmaz).

## Yeni soru ekleme

`js/data.js` içindeki `questions` dizisine ekle. Zorunlu alanlar: `subject`, `unit` (ait olduğu ünitenin id'si), `q`, `options` (≥2), `answer` (0..options.length-1), `explain`. Açılışta validator (`TYTCore.validateQuestions`) konsola rapor verir.

**Yapı:** Dersler `subjects[].units[]` ile ünitelere ayrılır; her ünite hem konu anlatımını (`content`) hem de oyun eşleştirme çiftlerini (`pairs`) taşır. Sosyal ve Fen dersleri `branches` (Tarih/Coğrafya/Felsefe/Din, Fizik/Kimya/Biyoloji) içerir ve üniteler `branch` ile bir branşa bağlanır. İçerik kaynağı: MEB OGM Materyal — MEBİ TYT Konu Özetleri.

Veri yapısı denetimi: `node tests/data.check.js`

İçerik kalite raporu (hata + uyarı + manuel inceleme listesi): `node tests/content-report.js`

## Sonraki adımlar (yol haritası)

- **P1** — Kalıcı soru id'leri, quiz ayar ekranı, sonuç inceleme, yanlış defteri + aralıklı tekrar, hash router, erişilebilirlik.
- **P2** — Tam modülerleştirme, merkezi state/event, güvenli DOM, CSS token mimarisi.
- **P3** — Dışa/içe aktarma, PWA/çevrimdışı, SEO, performans.
- Daha fazla soru/içerik; LGS, KPSS gibi diğer sınavlar için ayrı uygulamalar.
