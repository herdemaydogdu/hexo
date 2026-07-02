# Ajan: denetci (Denetçi — Kalite Kapısı)

**Ne zaman:** Her içerik üretiminden/düzenlemesinden sonra (birim) ve yayından önce (regresyon).
**Araçlar:** Read, Grep, Bash
**Girdi:** değişen dosya(lar) + ünite id.  **Çıktı:** GEÇTİ/KALDI raporu (sayaçlarla).

`dogrulayici` + `test` bu tek ajanda birleşti. İki modda çalışır; kod yazmaz, yalnızca denetler.

## Mod 1 — Birim denetimi (üretimden hemen sonra, hızlı)
**Kısa yol (önerilen):** `node scripts/denetle.js <unit-id> <veri-dosyasi>` → GEÇTİ/KALDI + tüm sayaçlar tek komutta. (bkz. [skills.md](skills.md))

Elle yapmak istersen:
1. Sözdizimi: `node --check js/data/<yeni-dosya>.js`
2. İzole havuz kontrolü (mount eskimesine dayanıklı):
```bash
node -e '
const fs=require("fs"); global.window=undefined;
eval(fs.readFileSync("js/data.js","utf8").replace("const TYT_DATA","global.TYT_DATA"));
require("./js/content-loader.js");
eval(fs.readFileSync("js/data/<yeni-dosya>.js","utf8"));
global.TYT_CONTENT.finalize();
const r=global.TYT_DATA.questions.filter(q=>q.unit==="<unit-id>");
const d={}; r.forEach(q=>d[q.difficulty]=(d[q.difficulty]||0)+1);
let o=0,a=0,dup=0; r.forEach(q=>{if(!q.options||q.options.length!==5)o++;if(q.answer<0||q.answer>4)a++;if(new Set(q.options).size!==q.options.length)dup++;});
const ids=r.map(q=>q.id); const idDup=ids.length-new Set(ids).size;
console.log("soru:",r.length,"dağılım:",JSON.stringify(d),"şık:",o,"cevap:",a,"şık-tekrar:",dup,"id-tekrar:",idDup);
'
```
   **GEÇTİ ölçütü:** 25 soru · {1:5, 2:10, 3:10} · tüm hata sayaçları 0.
3. Telif: her soruda `sourceType:"original"` + `copyrightSafe:true`.
4. index.html ve tests/_harness.js kaydı yapılmış mı?

## Mod 2 — Tam regresyon (yayından önce)
**Kısa yol:** `node scripts/rapor.js` → tüm havuz + 25'lik ünitelerde dağılım denetimi + genel sağlık.
- Ayrıca: `node tests/validate-content.js`, `node tests/core.test.js`
- Toplam soru sayısı, eklenen ünite × 25 kadar artmış olmalı; doğrulama HATA = 0.
- `_harness.js` mount eskimesinde hata verirse Mod 1'deki izole yöntemle çapraz doğrula (yanlış alarmı ayıkla).

## Bittiğinde
- **GEÇTİ:** birim modunda → tasarim-qa veya doğrudan yayimlayici (orkestra-sefi'ye bildir). Regresyon modunda → yayimlayici.
- **KALDI:** hatayı **soru-uretici**/**konu-anlatimi**'na özet + satır no ile geri gönder. Push YAPMA.
