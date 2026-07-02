# Ajan Ekibi ve Orkestrasyon

Ekip **4 katmanlı** ve bir **koordinatör** etrafında kuruludur. Her ajan `docs/agents/` altında tek bir işten sorumludur, net bir girdi/çıktı sözleşmesiyle çalışır ve bir sonrakini tetikler. Zinciri **orkestra-sefi** yürütür.

## Katmanlar ve ajanlar
| Katman | Ajan | Girdi → Çıktı |
|---|---|---|
| **0 Koordinasyon** | [orkestra-sefi](agents/orkestra-sefi.md) | kullanıcı isteği → planlı hat + tek rapor |
| **1 Keşif (intake)** | [mufredat-takip](agents/mufredat-takip.md) | resmî MEB/ÖSYM kaynakları → kapsam farkı raporu |
| | [rakip-arastirma](agents/rakip-arastirma.md) | rakip siteler → boşluk/öneri listesi |
| **2 Üretim** | [konu-anlatimi](agents/konu-anlatimi.md) | ünite id → özgün `content` HTML |
| | [soru-uretici](agents/soru-uretici.md) | ünite id → 25 özgün soru dosyası |
| **3 Kalite** | [denetci](agents/denetci.md) | değişen dosya → GEÇTİ/KALDI raporu |
| **4 Yayın** | [tasarim-qa](agents/tasarim-qa.md) | ekran/CSS → cila + `?v` artışı |
| | [yayimlayici](agents/yayimlayici.md) | yeşil durum → yayın raporu (push YOK) |

## Hat (state machine)
```
                       ┌─────────────── orkestra-sefi (planlar, sırayla tetikler, raporlar)
                       │
   İSTEK ─► [1] mufredat-takip / rakip-arastirma ─► docs/backlog.md
                       │
             ┌─────────┴─────────┐
        [2] konu-anlatimi   [2] soru-uretici
             └─────────┬─────────┘
                       ▼
                 [3] denetci (birim)  ──KALDI──► üreticiye geri (≤2 tur)
                       │ GEÇTİ
                       ▼
                 [4] tasarim-qa (görsel/sürüm değiştiyse → ?v artır)
                       ▼
                 [3] denetci (regresyon)  ── tüm testler yeşil
                       ▼
                 [4] yayimlayici ─► rapor ─► KULLANICI `yayinla.bat`
```

## Devir-teslim sözleşmesi (her aşamanın "bitti" tanımı)
- **soru-uretici bitti:** 25 soru + %20/40/40 dağılım + dosya index.html & _harness'a bağlı → denetci'ye devret.
- **konu-anlatimi bitti:** `content` ≥ ~600 kr, özgün, örnekli → denetci'ye devret.
- **denetci GEÇTİ:** 25 soru, {1:5,2:10,3:10}, tüm hata sayaçları 0, telif bayrakları doğru.
- **tasarim-qa bitti:** CSS dengeli, `?v` tek tip artırılmış, erişilebilirlik korunmuş.
- **yayimlayici bitti:** sürüm tutarlı, git durumu özetlenmiş, "yayinla.bat" hatırlatması verilmiş.

## Değişmez kurallar (tüm ajanlar)
1. **Telif:** ÖSYM/MEB/soru bankası metni/şık/çözümü kopyalanmaz. Her içerik özgün: `sourceType:"original"`, `copyrightSafe:true`, `reviewStatus:"draft"`. Çıkmış sorular yalnızca resmî ÖSYM bağlantısı.
2. **Zorluk:** ünite başına 25 soru = 5 kolay / 10 orta / 10 zor (%20/%40/%40). Zorlar gerçekten çok adımlı.
3. **Mimari:** `app.js` motor + `js/data/*.js` içerik modülleri; ekleme = veri, kod değil. `content-loader` API'si (`replaceQuestionsForUnit`, `upsertUnits`, `finalize`).
4. **Sürüm:** her CSS/JS değişiminde `index.html`'deki `?v=NN` tek tip artırılır.
5. **Doğrulama:** izole `node -e` ile şema+aritmetik+dağılım; mount eskimesinde `_harness.js`'e güvenme.
6. **Push:** hiçbir ajan `git push`/`commit` yapmaz. Yayını kullanıcı `yayinla.bat` ile yapar.
7. **Web:** yalnızca WebFetch/WebSearch; engellenirse alternatif yolla çekme, kullanıcıya bildir.

## Nasıl çağrılır
- **Claude Code / Cowork:** "orkestra-sefi ile Fonksiyonlar ünitesini üret" de → şef tüm hattı yürütür. Ya da tek ajanı doğrudan iste ("soru-uretici'yi Fonksiyonlar için çalıştır").
- **Codex / Antigravity (Gemini):** ilgili `docs/agents/<ajan>.md` dosyasını bağlam olarak ver; kurallar tool-bağımsızdır.
