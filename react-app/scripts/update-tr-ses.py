# -*- coding: utf-8 -*-
"""tr-ses (Ses Bilgisi) — Ses Bilgisi 1-2, kapsamlı not."""
import json, os, base64

CONTENT = r"""
<h2>Ses Bilgisi</h2>
<p><b>Konuya giriş:</b> Ses bilgisi, Türkçedeki seslerin özelliklerini ve sözcük türerken/çekimlenirken uğradıkları <b>ses olaylarını</b> inceler. TYT'de en çok <b>ünlü/ünsüz uyumları</b> ve ses olaylarının (düşme, türeme, yumuşama, benzeşme…) tanınması sorulur.</p>

<h3>1) Ses ve Harf</h3>
<ul>
  <li><b>Ses:</b> Kulağın duyabildiği titreşim.</li>
  <li><b>Harf:</b> Bir sesi gösteren, alfabeyi oluşturan işaret.</li>
</ul>

<h3>2) Ünlüler (Sesli Harfler)</h3>
<p>Ses yolunda engele uğramadan çıkan seslerdir: <b>a, e, ı, i, o, ö, u, ü</b> (8 ünlü). Sınıflandırma:</p>
<ul>
  <li><b>Kalın:</b> a, ı, o, u — <b>İnce:</b> e, i, ö, ü</li>
  <li><b>Geniş:</b> a, e, o, ö — <b>Dar:</b> ı, i, u, ü</li>
  <li><b>Düz:</b> a, e, ı, i — <b>Yuvarlak:</b> o, ö, u, ü</li>
</ul>
<p><b>Ünlü Uyumları:</b></p>
<ul>
  <li><b>Büyük ünlü uyumu (kalınlık-incelik):</b> İlk hecede kalın ünlü varsa sonrakiler de kalın, ince varsa ince olur. Uyar: karanlık, sevgiler. Uymaz: kardeş, şişman (kök hâlinde), ayrıca <b>-yor, -ken, -ki, -leyin, -daş, -gil, -imtırak</b> gibi ekler uyumu bozabilir.</li>
  <li><b>Küçük ünlü uyumu (düzlük-yuvarlaklık):</b> Düz ünlüden (a, e, ı, i) sonra düz; yuvarlak ünlüden (o, ö, u, ü) sonra ya "a, e" ya da "u, ü" gelir. Uyar: uçurtma, gezinti. Uymaz: çamur, onunki.</li>
</ul>
<p class="formula"><b>DİKKAT:</b> "o, ö" ünlüleri Türkçe sözcüklerde yalnızca <b>ilk hecede</b> bulunur; sonraki hecelerde bulunuyorsa küçük ünlü uyumu aranmaz (kelime ya alıntıdır ya da uyum dışıdır).</p>

<h3>3) Ünlülerle İlgili Ses Olayları</h3>
<ul>
  <li><b>Ünlü düşmesi:</b> Ek alınca içteki dar ünlü düşer. Çekim: karın-ım → karnım, ömür-ü → ömrü. Yapım: beniz-e → benze-, koku-la → kokla-. Birleşmede: kahır+olmak → kahrolmak, cuma+ertesi → cumartesi.</li>
  <li><b>Ünlü türemesi:</b> "-cık/-cik" küçültme ekinde: dar-cık → daracık, az-cık → azıcık. Pekiştirmede (m, p, r, s): sağlam → sapasağlam, yalnız → yapayalnız, çevre → çepeçevre.</li>
  <li><b>Ünlü daralması:</b> "-yor" ekindeki "y", önündeki geniş "a/e" ünlüsünü daraltır: söyle-yor → söylüyor, bakma-yor → bakmıyor. Ayrıca "de-, ye-" ve "ne": de-y-e → diye, ye-y-ecek → yiyecek, ne-y-e → niye.</li>
  <li><b>Ünlü değişimi:</b> "ben, sen" sözcüklerine yönelme eki gelince kök ünlüsü değişir: ben-e → bana, sen-e → sana.</li>
  <li><b>Ulama:</b> Ünsüzle biten sözcüğün, ünlüyle başlayan sonraki sözcüğe bağlanarak okunması. "Artarak_gönlümün_aydınlığı her saniyede". (Araya noktalama girerse ulama olmaz.)</li>
</ul>

<h3>4) Ünsüzler (Sessiz Harfler)</h3>
<p>Ses yolunda engele çarparak çıkan seslerdir. <b>Yumuşak (süreklilik/tonlu):</b> b, c, d, g, ğ, j, l, m, n, r, v, y, z. <b>Sert (tonsuz):</b> ç, f, h, k, p, s, ş, t. (Sert ünsüzler "FıSTıKÇı ŞaHaP" ile hatırlanır.)</p>

<h3>5) Ünsüzlerle İlgili Ses Olayları</h3>
<ul>
  <li><b>Ünsüz benzeşmesi (sertleşmesi):</b> Sert ünsüzle (ç, f, h, k, p, s, ş, t) biten sözcüğe "c, d, g" ile başlayan ek gelirse ek sertleşir → ç, t, k. saf-ca → safça, seç-di → seçti, şaş-gın → şaşkın.</li>
  <li><b>Ünsüz yumuşaması (değişimi):</b> "p, ç, t, k" ile biten sözcüğe ünlüyle başlayan ek gelince yumuşar → b, c, d, g/ğ. kitap-ı → kitabı, ağaç-a → ağaca, dert-i → derdi, çok-ul → çoğul, kalp-im → kalbim.</li>
  <li><b>Ünsüz türemesi:</b> Arapçadan gelen tek heceli bazı sözcükler ünlüyle başlayan ek/yardımcı fiil alınca ünsüz türer. sır-ımız → sırrımız, zan+etmek → zannetmek, hal+olmak → hallolmak.</li>
  <li><b>Ünsüz düşmesi:</b> Bazı sözcükler ek alınca ünsüz düşer. minik-cik → minicik, küçük-cük → küçücük, alçak-l- → alçalmak, ad-daş → adaş.</li>
  <li><b>Kaynaştırma ünsüzleri (y, ş, s, n):</b> Ünlüyle biten sözcüğe ünlüyle başlayan ek gelince araya girer. kapı-s-ı, altı-ş-ar, pencere-n-in, kimse-y-e. (Türkçede iki ünlü yan yana gelmez.)</li>
  <li><b>"n-m" değişimi:</b> "b" sesi, önündeki "n"yi "m"ye çevirir. tenbel → tembel, saklanbaç → saklambaç, çenber → çember.</li>
</ul>
<p class="formula"><b>KRİTİK — Yumuşama mı sertleşme mi?</b> Sözcüğün <b>sonundaki</b> ünsüz (p,ç,t,k) ünlü ekle <b>yumuşuyorsa</b> yumuşama; <b>ekin başındaki</b> c,d,g sert ünsüzden sonra <b>sertleşiyorsa</b> benzeşme. Yön farklıdır: biri kökte, biri ekte.</p>

<h3>6) Sınavda Sık Karıştırılanlar</h3>
<ul>
  <li><b>Ünlü daralması yalnızca "-yor" ve de-/ye-/ne'de</b> olur; her "a→ı" değişimi daralma değildir.</li>
  <li><b>Kaynaştırma harfi</b> araya sonradan girer (kapı-s-ı); kökün parçası değildir. "su" sözcüğünde kaynaştırma <b>y/n</b> değil özel biçimlerdir (su-y-u).</li>
  <li><b>Ulama</b> yazımı değil <b>okumayı</b> ilgilendirir; şiirde ölçü/akıcılık için kullanılır.</li>
  <li>Bir sözcükte <b>birden çok</b> ses olayı görülebilir (ör. "diyecek": ünlü daralması + kaynaştırma).</li>
</ul>
""".strip()

HERE = os.path.dirname(os.path.abspath(__file__))
TOPICS = os.path.join(HERE, "data", "topics.json")
d = json.load(open(TOPICS, encoding="utf-8"))
for t in d:
    if t.get("unit_id") == "tr-ses":
        t["content"] = CONTENT
json.dump(d, open(TOPICS, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

PLAN = os.path.join(HERE, "turkce-plan.json")
p = json.load(open(PLAN, encoding="utf-8"))
for k in p["konular"]:
    if k["unit_id"] == "tr-ses":
        k["done"] = True
json.dump(p, open(PLAN, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

print("uzunluk:", len(CONTENT))
print("BASE64:")
print(base64.b64encode(CONTENT.encode("utf-8")).decode())
