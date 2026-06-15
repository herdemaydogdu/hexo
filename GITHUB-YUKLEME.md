# GitHub'a Yükleme ve Yayınlama

Aşağıdaki adımları **kendi bilgisayarında**, bu klasörün (`sınav`) içinde bir terminal/komut istemi açarak uygula. (Push işlemi senin GitHub hesabınla yetki gerektirdiği için bunu benim yapmam mümkün değil.)

## 1. Git kurulu mu?

Terminalde şunu yaz:

```bash
git --version
```

Sürüm numarası görüyorsan kuruludur. Görmüyorsan https://git-scm.com adresinden indir.

## 2. Klasörde terminal aç

- **Windows:** `sınav` klasörünü aç → adres çubuğuna `cmd` yazıp Enter.
- Ya da klasöre sağ tıkla → "Git Bash Here".

## 3. Depoyu başlat ve dosyaları gönder

Aşağıdaki komutları sırayla çalıştır:

```bash
git init
git add .
git commit -m "TYT Hazırlık uygulaması"
git branch -M main
git remote add origin https://github.com/herdemaydogdu/s-nav.git
git push -u origin main
```

> İlk push'ta GitHub kullanıcı adı ve şifre (ya da kişisel erişim token'ı) isteyebilir. GitHub artık şifre yerine **Personal Access Token** ister: GitHub → Settings → Developer settings → Personal access tokens → "Generate new token" ile oluşturup şifre yerine yapıştır.

### Depoda zaten dosya varsa

`push` hata verirse, önce uzaktakini çek:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## 4. GitHub Pages ile yayınla (ücretsiz)

1. GitHub'da depona git: https://github.com/herdemaydogdu/s-nav
2. **Settings** → sol menüden **Pages**
3. **Source** altında **Branch: main** ve **/ (root)** seç, **Save**.
4. 1-2 dakika sonra site şu adreste yayında olur:

```
https://herdemaydogdu.github.io/s-nav/
```

## Sonraki güncellemeler

Dosyalarda değişiklik yaptıktan sonra her seferinde:

```bash
git add .
git commit -m "Açıklama"
git push
```

Yayındaki site birkaç dakika içinde otomatik güncellenir.
