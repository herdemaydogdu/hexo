# -*- coding: utf-8 -*-
"""tr-paragraf (Paragraf) — Paragrafta Anlam 2-3 + Paragrafın Yapısı, kapsamlı not."""
import json, os, base64

CONTENT = r"""
<h2>Paragraf</h2>
<p><b>Konuya giriş:</b> Paragraf, tek bir konu etrafında toplanmış cümleler bütünüdür; küçük bir kompozisyon gibi <b>giriş, gelişme, sonuç</b> bölümlerinden oluşur. TYT'de paragraf; anlatımın nitelikleri, konu/ana düşünce bulma ve yapı (sıralama, akışı bozan cümle, ikiye bölme, cümle ekleme) olarak sorulur. Anahtar beceri: paragrafı bir bütün olarak okuyup <b>bağlayıcı ifadeleri</b> ve <b>anahtar kavramları</b> takip etmektir.</p>

<h3>1) Anlatımın (İyi Anlatımın) Özellikleri</h3>
<ul>
  <li><b>Açıklık:</b> Anlatımın tek bir yargı taşıması, birden çok anlama gelmemesi. Gereksiz uzun cümleler ve anlatım bozuklukları açıklığı engeller. Örn: "Kitap okumayı arkadaşından çok seviyordu." → kim/neyi karşılaştırıyor belirsiz, açıklık bozulmuş.</li>
  <li><b>Duruluk:</b> Aynı anlama gelen söz/söz öbeklerinin ve gereksiz eklerin bulunmaması. Örn: "ıskartaya çıkarmak" ve "değersiz bulmak" birlikte kullanılırsa duruluk bozulur.</li>
  <li><b>Yalınlık:</b> Süslü, anlaşılması zor sözcüklerden ve gereksiz söz sanatlarından uzak olma. Ağır/eskimiş sözcükler yalınlığı bozar.</li>
  <li><b>Akıcılık:</b> Okumayı zorlaştıran ses/söz yığılmalarının ve gereksiz <b>kelime tekrarlarının</b> olmaması.</li>
  <li><b>Sağlamlık:</b> Anlatımın <b>dil bilgisi</b> kurallarına uygun olması. Öge eksikliği (özne/nesne/tümleç) sağlamlığı bozar.</li>
  <li><b>Tutarlılık:</b> Anlatımın <b>mantık</b> kurallarına uygun olması; düşünsel/duygusal çelişki taşımaması.</li>
  <li><b>Doğallık (samimiyet):</b> Anlatımın günlük dildeki gibi, yapmacıktan uzak olması. Deneme türü doğallığa örnektir.</li>
  <li><b>Özgünlük:</b> Anlatımın başkasına benzememesi, taklitten uzak, kendine has olması.</li>
  <li><b>Özlülük:</b> Az sözle çok şey anlatma; anlatımın yoğun olması ("Biz evvela kelimeleri öğreniriz, sonra yaşadıkça manalarını.").</li>
</ul>

<h3>2) Konu, Başlık, Ana Düşünce, Yardımcı Düşünce</h3>
<ul>
  <li><b>Konu:</b> Parçada ele alınan düşünce, olay veya durum. Genellikle ilk cümlede verilip geliştirilir. Soru kalıpları: "Bu parçada aşağıdakilerin hangisi üzerinde durulmuştur / hangisinden söz edilmektedir / hangisinden yakınılmaktadır?"</li>
  <li><b>Başlık:</b> Konuyu kısaca tanıtan, konunun özeti niteliğindeki bir/birkaç kelime. Doğrudan konuyla ilgilidir. (Ör: "Sanat ve İnsan")</li>
  <li><b>Ana düşünce:</b> Yazarın okura iletmek istediği <b>asıl mesaj</b>; en kapsamlı yargı. Soru kalıpları: "Bu parçada asıl anlatılmak istenen / vurgulanan / iletilmek istenen mesaj / çıkarılabilecek en kapsamlı yargı hangisidir?"</li>
  <li><b>Yardımcı düşünce:</b> Ana düşünceyi destekleyen, konuyu geliştiren ara düşünceler. Soru kalıpları: "Hangisine değinilmiştir/değinilmemiştir?", "Hangisi bu parçadan çıkarılabilir/çıkarılamaz?", "Hangisi söylenebilir/söylenemez?"</li>
</ul>
<p class="formula"><b>KRİTİK — Konu ≠ ana düşünce:</b> <b>Konu</b> "neyden söz ediliyor?" (genel, tek kelime/kavram olabilir). <b>Ana düşünce</b> "yazar ne demek istiyor?" (bir <b>yargı</b>, cümle biçiminde). Ana düşünce, konuyu da içeren en kapsamlı yargıdır.</p>
<p class="formula"><b>İPUCU — "değinilmemiştir" soruları:</b> Yardımcı düşünce sorularında seçenekleri tek tek parçada ara; parçada karşılığı OLMAYAN seçenek cevaptır. Kendi yorumunu değil, parçadaki bilgiyi esas al.</p>

<h3>3) Paragrafın Yapısı</h3>
<ul>
  <li><b>Giriş bölümü:</b> İlk ve genellikle tek cümle. Konuyu ortaya koyar, gelişmeye hazırlar. <b>Kendinden önceki bir yargıya bağlanan</b> "ama, fakat, ancak, çünkü, oysa, bu nedenle, bu yüzden" gibi ifadeler <b>içermez</b>; açıklanmaya elverişli genel bir yargıdır.</li>
  <li><b>Gelişme bölümü:</b> Konunun geliştirildiği bölüm. Yardımcı düşünceler ve örnekleme, tanımlama, sayısal veri gibi geliştirme yolları yer alır; cümleler bağlayıcı ifadelerle birbirine sıkıca bağlıdır.</li>
  <li><b>Sonuç bölümü:</b> Bitiş; genellikle tek cümle. Anlatılanı özetler/sonuca bağlar. "Sonuç olarak, böylece, kısacası, demek ki" gibi ifadeler içerebilir; kendisinden sonra yeni yargı çağrıştırmaz.</li>
</ul>
<p><b>Yapıya dayalı soru tipleri:</b></p>
<ul>
  <li><b>Paragraf oluşturma (sıralama):</b> Dağınık cümleler anlamlı bütün oluşturacak biçimde dizilir. Önce giriş cümlesi bulunur; bağlayıcı ifadeler ve olaya dayalı metinlerde <b>kronolojik sıra</b> gözetilir.</li>
  <li><b>Paragraf düzenleme:</b> Yeri yanlış olan cümle, önceki-sonraki cümlelerle ilişkisine ve geçiş ifadelerine göre doğru yere taşınır.</li>
  <li><b>Akışı bozan cümle:</b> Konu dışına çıkan, konuyu başka yöne götüren cümle akışı bozar. Önce parçanın konusu belirlenir, sonra <b>konudan sapan</b> cümle bulunur (bağlayıcı ifadeler ve anahtar kavramlar ipucudur).</li>
  <li><b>Paragrafı ikiye bölme:</b> Bir paragrafta yeni bir konuya/konunun farklı yönüne geçildiğinde ikinci paragraf başlar. Cümleler konularına göre gruplanır; yeni konunun hangi cümleyle başladığı (çoğunlukla "ama, fakat" gibi bir dönüşle) belirlenir.</li>
  <li><b>Paragrafa cümle ekleme:</b> Verilen cümlenin neyi anlattığı ile paragrafın konusu eşleştirilir; eklenen cümlenin komşu cümlelerle dilsel ve anlamsal bütünlüğü (bağlayıcı ifade, anahtar kavram) sağlanır.</li>
</ul>
<p class="formula"><b>KRİTİK — Giriş cümlesini yakala:</b> Giriş cümlesi <b>bağlayıcı ifadeyle başlamaz</b> ("Ama…", "Bu nedenle…", "Ona göre…" ile başlayan cümle giriş olamaz) ve tek başına anlamlı, genel bir yargıdır. Sıralama sorularının anahtarı budur.</p>

<h3>4) Sınavda Sık Karıştırılanlar</h3>
<ul>
  <li><b>Açıklık ≠ duruluk:</b> Açıklıkta sorun <b>birden çok anlama gelme</b>; durulukta sorun <b>gereksiz/eş anlamlı söz</b> kullanımıdır.</li>
  <li><b>Sağlamlık ≠ tutarlılık:</b> Sağlamlık <b>dil bilgisi</b> (öge eksikliği vb.); tutarlılık <b>mantık/çelişki</b> ile ilgilidir.</li>
  <li><b>Akışı bozan cümle</b> dil bilgisi açısından doğru olabilir; onu ele veren şey <b>konudan sapmasıdır</b>.</li>
  <li>Ana düşünce sorusunda en <b>kapsamlı</b> ve parçanın bütününü kucaklayan seçeneği seç; tek bir ayrıntıyı anlatan seçenek yardımcı düşüncedir.</li>
</ul>
""".strip()

HERE = os.path.dirname(os.path.abspath(__file__))
TOPICS = os.path.join(HERE, "data", "topics.json")
d = json.load(open(TOPICS, encoding="utf-8"))
for t in d:
    if t.get("unit_id") == "tr-paragraf":
        t["content"] = CONTENT
json.dump(d, open(TOPICS, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

PLAN = os.path.join(HERE, "turkce-plan.json")
p = json.load(open(PLAN, encoding="utf-8"))
for k in p["konular"]:
    if k["unit_id"] == "tr-paragraf":
        k["done"] = True
json.dump(p, open(PLAN, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

print("uzunluk:", len(CONTENT))
print("BASE64:")
print(base64.b64encode(CONTENT.encode("utf-8")).decode())
