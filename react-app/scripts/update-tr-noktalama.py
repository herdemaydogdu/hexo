# -*- coding: utf-8 -*-
"""tr-noktalama (Noktalama İşaretleri) — Noktalama 1-3, kapsamlı not."""
import json, os, base64

CONTENT = r"""
<h2>Noktalama İşaretleri</h2>
<p><b>Konuya giriş:</b> Noktalama işaretleri; anlamı netleştirmek, duraklamaları ve tonlamayı göstermek için kullanılır. TYT'de "hangi noktalama yanlış/doğru kullanılmış?" ve "getirilmesi gereken işaret" biçiminde sorulur. En çok <b>virgül</b> ve <b>noktalı virgül</b> ile <b>virgülün konmadığı yerler</b> sorulur.</p>

<h3>1) Nokta (.)</h3>
<ul>
  <li>Bitmiş cümlelerin sonunda: "Edebiyat güçlü bir sanattır."</li>
  <li>Bazı kısaltmalarda: Cad., Fr., s. (sayfa).</li>
  <li>Sıra sayılarında (5.), saat-dakika arasında (14.00), tarihlerde (19.05.1919).</li>
  <li>Madde gösteren rakam/harften sonra (1., A.), künyelerde, genel ağ adreslerinde; dört+ basamaklı sayıları üçerli ayırırken (137.000).</li>
</ul>

<h3>2) Virgül (,)</h3>
<ul>
  <li>Eş görevli sözcük/söz gruplarını ayırır: "doğaseverlerin, yürüyüşçülerin, bisikletlilerin gözdesi".</li>
  <li>Sıralı cümleleri ayırır; uzun cümlede <b>özneyi</b> vurgular ("Bu tarihî ev, ... müzeye dönüştürülmüş").</li>
  <li><b>Ara söz/ara cümlenin</b> başında ve sonunda: "Annemi, elleri öpülesi kadını, köye göndermiş."</li>
  <li>Tırnaksız alıntı cümlesinden sonra ("...yapabilirsiniz, deyince"); hitaptan sonra ("Değerli milletvekilleri,"); ret/onay/teşvik sözünden sonra ("Hayır, ...").</li>
  <li>Anlam karışıklığını gidermek için ("Kadın, satıcıya ... söyledi"); konuşma çizgisinden sonraki alıntının sonunda.</li>
</ul>
<p class="formula"><b>KRİTİK — Virgül KONMAYAN yerler (çok sorulur):</b> Metin içinde <b>ve, veya, yahut</b>'tan önce/sonra; <b>zarf-fiil</b> (-ıp, -arak, -madan) ekli sözcükten sonra; bağlaç olan <b>da/de</b>'den sonra; <b>tekrarlı bağlaçlardan</b> (hem…hem) önce/sonra; <b>şart ekinden</b> (-sa/-se) sonra; <b>ikilemelerin</b> arasına (ağır ağır); "-ınca" anlamındaki <b>mı/mi</b>'den sonra; <b>tamlayan-tamlanan</b> arasına.</p>

<h3>3) Noktalı Virgül (;)</h3>
<ul>
  <li>Virgülle ayrılmış <b>tür ve takımları</b> birbirinden ayırır: "filmler, tiyatrolar; romanlar, hikâyeler".</li>
  <li>Ögeleri arasında virgül bulunan <b>sıralı cümleleri</b> ayırır: "içim içime sığmıyor; bağırmak, ağlamak istiyorum".</li>
  <li>Ögeleri arasında virgül bulunan cümlede <b>özneden sonra</b> konabilir: "Yeni şiirimiz; zevksiz, köksüz görünüyordu."</li>
</ul>

<h3>4) İki Nokta (:)</h3>
<ul>
  <li>Kendisinden sonra <b>örnek/açıklama</b> gelecekse: "İki özellik vardır: iyi bir kurgu, güçlü bir düş."</li>
  <li>Karşılıklı konuşmada konuşanı belirten sözden sonra; ses biliminde uzun ünlü; genel ağ adreslerinde; matematikte bölme.</li>
</ul>
<p class="formula"><b>DİKKAT:</b> İki noktadan sonra gelen ifade <b>cümle</b> ise büyük harfle ("...öğretti: Hiçbir öğrenci..."), cümle değil <b>örnek dizisi</b> ise küçük harfle başlar ("...düşmanı vardır: cahillik, tembellik, kibir").</p>

<h3>5) Üç Nokta (…)</h3>
<ul>
  <li>Bitmemiş cümlelerin sonunda; ünlem/seslenmede anlamı pekiştirmek için.</li>
  <li>Yazılmak istenmeyen (kaba/gizli) söz yerine ("E…'nin parmağı vardı"); alıntıda alınmayan yeri göstermek için; sözün okura tamamlatılması için.</li>
</ul>

<h3>6) Soru İşareti (?)</h3>
<ul>
  <li>Soru cümlelerinden sonra; soru eki/sözcüğü taşımasa da soru anlamı olanlarda ("-Doğum yeriniz?").</li>
  <li>Kesin olmayan/şüpheli bilgide yay ayraç içinde: "1496 (?) yılında doğan Fuzuli".</li>
</ul>
<p class="formula"><b>DİKKAT — Soru işareti KONMAYAN yer:</b> "mı/mi" <b>-ınca anlamıyla</b> zarf tümleci olduğunda konmaz ("Bahar geldi mi etraf yeşerir."). Sıralı cümlede <b>son cümle soru değilse</b> konmaz ("...olabilir mi, bilmiyorum."). Soru anlamı sıralı/bağlı cümlede ise işaret <b>en sona</b> konur.</p>

<h3>7) Ünlem İşareti (!)</h3>
<ul>
  <li>Sevinç, acı, heyecan bildiren cümlelerden sonra ("Ne mutlu ... gençlere!").</li>
  <li>Seslenme/hitap/uyarı sözlerinden sonra ("Ey Türk gençliği!").</li>
  <li><b>Alay/küçümseme</b> katmak için yay ayraç içinde: "Çok ucuz(!) bir şehir."</li>
</ul>

<h3>8) Çizgiler ve Diğer İşaretler</h3>
<ul>
  <li><b>Uzun çizgi (—):</b> Satır başında konuşmaları gösterir (—Bu tahminlerim…).</li>
  <li><b>Kısa çizgi (-):</b> Satır sonunda kelime bölme; ek/kök gösterme (-de, oku-, Türk-çe-miz-de); ilişkili sözcük/sayı arası (Türkiye-Mısır, 10.00-15.30); ara sözde; matematikte çıkarma/negatif. <b>Sayı yinelemesinde konmaz</b> (üç beş kişi).</li>
  <li><b>Eğik çizgi (/):</b> Yan yana dizeler arası; adreste (15/3 Karatay/KONYA); tarihte (11/12/1975); ekin biçimleri (-arak/-erek); genel ağ; matematikte bölme; birim orantısı (g/sn).</li>
  <li><b>Tırnak (" "):</b> Aktarılan sözler ve özel vurgu için. <b>Alıntının sonundaki işaret tırnak içinde kalır</b> ("...annemin sütüdür.").</li>
</ul>

<h3>9) Sınavda Sık Karıştırılanlar</h3>
<ul>
  <li><b>Virgül ≠ noktalı virgül:</b> İçinde zaten virgül olan grupları/cümleleri ayırırken <b>noktalı virgül</b> kullanılır.</li>
  <li>Zarf-fiilden (-ıp/-arak) sonra <b>virgül konmaz</b> — en sık tuzak.</li>
  <li>"ve/veya" çevresine virgül konmaz.</li>
  <li>İki noktadan sonra büyük/küçük harf: cümle ise büyük, sıralı örnek ise küçük.</li>
</ul>
""".strip()

HERE = os.path.dirname(os.path.abspath(__file__))
TOPICS = os.path.join(HERE, "data", "topics.json")
d = json.load(open(TOPICS, encoding="utf-8"))
for t in d:
    if t.get("unit_id") == "tr-noktalama":
        t["content"] = CONTENT
json.dump(d, open(TOPICS, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

PLAN = os.path.join(HERE, "turkce-plan.json")
p = json.load(open(PLAN, encoding="utf-8"))
for k in p["konular"]:
    if k["unit_id"] == "tr-noktalama":
        k["done"] = True
json.dump(p, open(PLAN, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

print("uzunluk:", len(CONTENT))
print("BASE64:")
print(base64.b64encode(CONTENT.encode("utf-8")).decode())
