# Ajan Skill'leri (yardımcı scriptler)

Ajanların tek komutla çağırdığı, repoda duran yeniden kullanılabilir araçlar. `scripts/` altında; Node ile çalışır, mount eskimesinden etkilenmez.

| Skill | Komut | Kullanan ajan |
|---|---|---|
| **denetle** | `node scripts/denetle.js <unit-id> <dosya>` | denetci (birim modu) |
| **rapor** | `node scripts/rapor.js` | denetci (regresyon), yayimlayici |
| **surum-artir** | `node scripts/surum-artir.js [hedef\|--kontrol]` | tasarim-qa, yayimlayici |

## denetle
Bir ünitenin 25 sorusunu yayına uygunluk açısından denetler: soru sayısı, **%20/40/40 dağılım**, 5 şık, cevap aralığı, şık/id tekrarı, **telif bayrakları** (`sourceType:"original"`, `copyrightSafe`), boş alan. GEÇTİ/KALDI + çıkış kodu (0/1).
```
node scripts/denetle.js mat-fonksiyon js/data/matematik-soru-fonksiyon.js
```

## rapor
Tüm havuzun sağlık raporu: ders/ünite/soru sayıları, 25'lik ünitelerde dağılım denetimi, genel şık/cevap/telif kontrolü. Modül listesini **index.html'den otomatik** okur (yeni dosyalar kendiliğinden dahil).
```
node scripts/rapor.js
```

## surum-artir
`index.html`'deki tüm `?v=NN` asset sürümünü tek tip yönetir.
```
node scripts/surum-artir.js            # mevcut → +1
node scripts/surum-artir.js 60         # hedefe sabitle
node scripts/surum-artir.js --kontrol  # yalnız tutarlılık kontrolü
```

## Not
- Bu skill'ler **repo-içi araçlardır**; Cowork'ün kurulu skill sistemine (Ayarlar > Capabilities) kayıt DEĞİLDİR. İstenirse `.skill` paketine dönüştürülüp oradan kurulabilir.
- Yeni skill eklerken: `scripts/<ad>.js` + bu tabloya satır + ilgili ajan dosyasına komut referansı.
