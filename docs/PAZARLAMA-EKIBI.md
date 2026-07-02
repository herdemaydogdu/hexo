# Pazarlama & Araştırma Ekibi

Geliştirme/içerik ekibinden (bkz. [AJANLAR.md](AJANLAR.md)) **ayrı** bir ekip. Çıktısı kod değil, **strateji ve öneri dokümanlarıdır** (`docs/pazarlama/` altında). Ürün değişikliği gerektiğinde geliştirme ekibinin **orkestra-sefi**'ne öneri olarak devreder.

## Ajanlar
| Ajan | Görev |
|---|---|
| [pazarlama-sefi](agents-pazarlama/pazarlama-sefi.md) | Koordinatör; hattı yürütür, birleşik strateji üretir |
| [pazar-arastirma](agents-pazarlama/pazar-arastirma.md) | Hedef kitle, pazar büyüklüğü, davranış |
| [rakip-pazarlama](agents-pazarlama/rakip-pazarlama.md) | Rakip fiyat/konum/kanal analizi |
| [konumlandirma](agents-pazarlama/konumlandirma.md) | Değer önerisi + mesaj mimarisi |
| [buyume-kanallari](agents-pazarlama/buyume-kanallari.md) | Edinim kanalları + öncelik + 30/60/90 |
| [icerik-pazarlama](agents-pazarlama/icerik-pazarlama.md) | SEO + içerik takvimi (özgün içerikten) |

## Hat
```
İSTEK ─► pazar-arastirma + rakip-pazarlama
              ▼
        konumlandirma
              ▼
   buyume-kanallari + icerik-pazarlama
              ▼
   pazarlama-sefi → docs/pazarlama/strateji-<tarih>.md
              ▼
   (ürün/site önerisi) ─► geliştirme ekibi: orkestra-sefi
```

## İki ekip nasıl bağlanır
- **Pazarlama → Geliştirme:** SEO/özellik önerileri geliştirme ekibinin backlog'una (`docs/backlog.md`) düşer; orkestra-sefi önceliklendirir.
- **Geliştirme → Pazarlama:** yeni yayınlanan içerik/özellik, icerik-pazarlama'ya sosyal/SEO malzemesi olur.

## Ortak kurallar
- Rakip metin/görsel kopyalanmaz; yalnızca gözlem + özgün strateji.
- Web engellenirse alternatif yolla çekme, kullanıcıya bildir.
- Sadece öneri; yayın, harcama ve fiyat kararını **kullanıcı** verir.
