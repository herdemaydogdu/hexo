## Imported Claude Cowork project instructions

Sınava hazırlık websitesi yapmak

## Ajan ekibi

Bu proje 4 katmanlı uzman ajan ekibiyle yürütülür. Roller ve orkestrasyon: **[docs/AJANLAR.md](docs/AJANLAR.md)**
Tek tek tanımlar: `docs/agents/*.md`

Katmanlar: **koordinasyon** (orkestra-sefi) · **keşif** (mufredat-takip, rakip-arastirma) · **üretim** (konu-anlatimi, soru-uretici) · **kalite** (denetci) · **yayın** (tasarim-qa, yayimlayici).
Ayrı bir **pazarlama & araştırma ekibi** de vardır: **[docs/PAZARLAMA-EKIBI.md](docs/PAZARLAMA-EKIBI.md)** (pazarlama-sefi + pazar/rakip araştırma, konumlandırma, büyüme, içerik pazarlaması). Strateji üretir, ürün önerilerini geliştirme ekibine devreder.
İki ekip arasındaki köprü **is-gelistirme** ajanıdır (docs/agents/is-gelistirme.md): pazarlama çıktıları + docs/backlog.md'yi değerlendirir, önceliklendirir ve güvenli olanları **gerçekten uygular**.
Ajan skill'leri (yardımcı scriptler): **[docs/agents/skills.md](docs/agents/skills.md)** — `denetle`, `rapor`, `surum-artir`.
Hattı **orkestra-sefi** yürütür: keşif → üretim → denetci(birim) → tasarim-qa → denetci(regresyon) → yayimlayici. Her aşamanın net bir "bitti" sözleşmesi vardır; yayını **kullanıcı `yayinla.bat`** ile yapar (ajanlar push etmez).

## Değişmez kurallar (tüm ajanlar)
1. **Telif:** ÖSYM/MEB/soru bankası metni/şık/çözümü kopyalanmaz. Her içerik özgün: `sourceType:"original"`, `copyrightSafe:true`, `reviewStatus:"draft"`. Çıkmış sorular yalnızca resmî ÖSYM bağlantısı.
2. **Soru standardı:** ünite başına 25 soru = %20 kolay / %40 orta / %40 zor (d1/d2/d3 = 5/10/10). Zorlar çok adımlı, ÖSYM/YKS seviyesinde.
3. **Mimari:** `app.js` motor + `js/data/*.js` içerik modülleri; içerik = veri, kod değil. `content-loader` API'sini kullan (`replaceQuestionsForUnit`, `upsertUnits`, `finalize`).
4. **Sürüm:** her CSS/JS değişiminde `index.html`'deki `?v=NN` tek tip artırılır.
5. **Doğrulama:** üretimden sonra izole `node -e` ile şema + aritmetik + dağılım kontrolü; `_harness.js` mount eskimesinde güvenilmez.
6. **Push:** hiçbir ajan `git push`/`commit` yapmaz.
