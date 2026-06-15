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
index.html      → Sayfa iskeleti
css/style.css   → Tasarım
js/data.js      → İçerik (dersler, konular, sorular)
js/app.js       → Uygulama mantığı
```

## Sonraki adımlar

- Daha fazla soru ve konu eklemek
- LGS, KPSS gibi diğer sınavlar için ayrı uygulamalar
