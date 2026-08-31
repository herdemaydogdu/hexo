# -*- coding: utf-8 -*-
"""tr-yapi (Sözcükte Yapı ve Ekler) — Biçim Bilgisi 1-2, kapsamlı not."""
import json, os, base64

CONTENT = r"""
<h2>Sözcükte Yapı ve Ekler</h2>
<p><b>Konuya giriş:</b> Bu konu; kök, ekler (çekim/yapım) ve sözcüğün yapısını (basit/türemiş/birleşik) kapsar. TYT'de "kökün türü", "çekim mi yapım eki mi", "sözcüğün yapısı" ve "birleşik fiil türü" sorulur. Anahtar: eki çıkarınca <b>anlam/tür değişiyor mu</b> sorusunu sormak.</p>

<h3>1) Kök</h3>
<p>Sözcüğün tüm ekleri çıkınca kalan anlamlı en küçük parçadır. İki türü var:</p>
<ul>
  <li><b>İsim (ad) kökü:</b> Varlık, kavram, duygu adı: dağ, masa, neşe, insan. (Yansımalar da isim köküdür: şırıltı, gürültü.)</li>
  <li><b>Fiil (eylem) kökü:</b> İş/oluş/hareket/durum bildirir: koş-, bak-, uyu-, sev-.</li>
</ul>
<p><b>İkili kök:</b> Hem isim hem fiil kökü olabilen sözcükler:</p>
<ul>
  <li><b>Kökteş (ortak) kök:</b> İsim ve fiil hâli arasında <b>anlam ilgisi VAR</b>: boya/boya-, tat/tat-, ekşi/ekşi-.</li>
  <li><b>Sesteş kök:</b> İsim ve fiil hâli arasında <b>anlam ilgisi YOK</b>: yüz/yüz-, gül/gül-, yaz/yaz-.</li>
</ul>

<h3>2) Ekler</h3>
<p><b>A) Çekim ekleri</b> — Kökün türünü/anlamını değiştirmez; cümlede ilgi kurar.</p>
<ul>
  <li><b>İsim çekim ekleri:</b>
    <b>Hâl (durum) ekleri</b> → belirtme -ı/-i/-u/-ü (arabayı), yönelme -e/-a (arabaya), bulunma -de/-da/-te/-ta (arabada), ayrılma -den/-dan (arabadan); ek almayan <b>yalın</b>. <b>Tamlayan (ilgi)</b> -ın/-in (şiirin), <b>tamlanan (iyelik)</b> -ı/-i (dalı), <b>çoğul</b> -lar/-ler.</li>
  <li><b>Fiil çekim ekleri:</b>
    <b>Kip ekleri</b> — Haber kipleri: görülen geçmiş -dı, duyulan geçmiş -mış, şimdiki -yor, gelecek -acak, geniş -r/-maz; Dilek kipleri: gereklilik -meli, istek -e, şart -se, emir (eki yok). <b>Kişi ekleri</b> — okudu-m, okudu-n, okudu-k…</li>
</ul>
<p><b>B) Yapım ekleri</b> — Sözcüğün anlamını/türünü değiştirir. <b>Kök + yapım eki = gövde.</b></p>
<ul>
  <li><b>İsimden isim:</b> -lık (kitaplık), -lı (akıllı), -sız (tatsız), -cı (simitçi), -ıncı (birinci).</li>
  <li><b>İsimden fiil:</b> -la (başla-), -laş (dertleş-), -ar (sarar-), -a (kana-), -ımsa (benimse-).</li>
  <li><b>Fiilden fiil:</b> -dır (yazdır-), -ıl (atıl-), -ın (gezin-), -ır (kaçır-), -ala (ovala-).</li>
  <li><b>Fiilden isim:</b> -men (öğretmen), -ık (yanık), -ak (kaçak), -gı (sevgi), -ıcı (geçici). (Tüm fiilimsi ekleri de fiilden isim yapım ekidir.)</li>
</ul>
<p class="formula"><b>KRİTİK — Ek dizilişi:</b> Genel sıra <b>kök + yapım eki + çekim eki</b>'dir (arabacıya). Ama bazı örneklerde çekim eki yapım ekinden önce gelebilir. "Gövdeden türemiş" sözcükte <b>en az iki yapım eki</b> görülür (sessizlikten: ses-siz-lik-ten).</p>
<p class="formula"><b>DİKKAT — "-de/-da/-den/-dan":</b> Sözcüğün anlamını <b>değiştiriyorsa yapım eki</b> (gözde öğrenci, sıradan film); yer/çıkış bildiriyorsa <b>hâl eki</b> (evde, evden). Bağlaç "de/da" ise her zaman ayrı yazılır.</p>

<h3>3) Sözcüğün Yapısı</h3>
<ul>
  <li><b>Basit sözcük:</b> Yapım eki almamış (çekim eki alabilir): kitap-lar-ım, yürü-yor-lar.</li>
  <li><b>Türemiş sözcük:</b> En az bir yapım eki almış: gül-dür-, su-la-, ses-siz-lik-ten.</li>
  <li><b>Birleşik sözcük:</b> En az iki sözcüğün birleşmesi. İkiye ayrılır:
    <ul>
      <li><b>Birleşik isim:</b> hanımeli, Karadeniz, başhekim, ateşkes.</li>
      <li><b>Birleşik fiil:</b> üç türü var (aşağıda).</li>
    </ul>
  </li>
</ul>
<p><b>Birleşik fiiller:</b></p>
<ul>
  <li><b>Anlamca kaynaşmış:</b> Bir isim + fiil kalıplaşır; mastar hâlindeki deyimler buraya girer: gözden düş-, küplere bin-, bağrına bas-. (vazgeç-, varsay-, öngör-, başvur-, elver- de bu gruptandır.)</li>
  <li><b>Yardımcı eylemle kurulan:</b> İsim + et-/ol-/eyle-/kıl-: park et-, memnun ol-, seyreyle-, mecbur kıl-. (Ses olayı olursa bitişik: affet-, kaydol-; olmazsa ayrı: fark et-.)</li>
  <li><b>Kurallı birleşik fiil:</b>
    <b>Yeterlik</b> (fiil + -e bil-): görebil-; <b>tezlik</b> (-i ver-): gidiver-; <b>sürerlik</b> (-a kal-/-e gel-/-e dur-): şaşakal-, süregel-, gidedur-; <b>yaklaşma</b> (-e yaz-): öleyaz-, düşeyaz-. (Yeterliğin olumsuzunda "bil-" düşer: gidemedim.)</li>
</ul>

<h3>4) Sınavda Sık Karıştırılanlar</h3>
<ul>
  <li><b>İyelik eki mi belirtme eki mi?</b> "-ı/-i" almış ismin başına <b>"onun"</b> getir: anlamlıysa iyelik (onun çantası), değilse belirtme (çantayı bıraktı).</li>
  <li><b>Kip eki ≠ sıfat-fiil eki:</b> "-mış, -acak, -r, -mez" hem kip hem sıfat-fiil olabilir; cümledeki göreve bak (yüklem mi, sıfat mı).</li>
  <li><b>Kökteş ≠ sesteş:</b> İsim-fiil hâlleri arasında anlam ilgisi varsa kökteş, yoksa sesteş.</li>
  <li><b>Çoğul eki "-lar"</b> çokluk dışında anlam katabilir: aile (dayımlar), abartma (ateşler içinde), saygı (Ali Beyler), benzerlik (Fatihler), iğneleme.</li>
</ul>
""".strip()

HERE = os.path.dirname(os.path.abspath(__file__))
TOPICS = os.path.join(HERE, "data", "topics.json")
d = json.load(open(TOPICS, encoding="utf-8"))
for t in d:
    if t.get("unit_id") == "tr-yapi":
        t["content"] = CONTENT
json.dump(d, open(TOPICS, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

PLAN = os.path.join(HERE, "turkce-plan.json")
p = json.load(open(PLAN, encoding="utf-8"))
for k in p["konular"]:
    if k["unit_id"] == "tr-yapi":
        k["done"] = True
json.dump(p, open(PLAN, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

print("uzunluk:", len(CONTENT))
print("BASE64:")
print(base64.b64encode(CONTENT.encode("utf-8")).decode())
