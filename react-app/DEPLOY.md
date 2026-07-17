# TYT Hazırlık — React (Vite) Kurulum ve Yayın Rehberi

Bu klasör (`react-app/`), sitenin yeni React + Vite + Tailwind mimarisidir.
Eski vanilla-JS site (`../index.html`, `../js`, `../css`) repoda durur ama
Pages kaynağı "GitHub Actions" yapıldığında **canlı site artık bu React build'i olur.**

## Klasör yapısı
```
react-app/
├─ index.html            # Vite giriş HTML'i (#root)
├─ package.json          # bağımlılıklar + scriptler
├─ package-lock.json     # CI için kilit dosyası (commit'li olmalı)
├─ vite.config.js        # base: "/hexo/"  ← Pages alt yolu
├─ tailwind.config.js    # içerik yolları
├─ postcss.config.js     # tailwind + autoprefixer
└─ src/
   ├─ main.jsx           # React kökü (createRoot)
   ├─ App.jsx            # DashboardLayout'u render eder
   ├─ index.css          # @tailwind base/components/utilities
   ├─ DashboardLayout.jsx
   └─ useProgress.js     # localStorage köprüsü (tyt_progress_v1)
```

## 1) Yerelde geliştirme
Bilgisayarında Node.js 20+ kurulu olsun (https://nodejs.org). Terminalde:
```bash
cd react-app
npm install        # bağımlılıkları kur (ilk sefer)
npm run dev        # http://localhost:5173 canlı önizleme
```
`npm run build` → `dist/` üretir, `npm run preview` ile derlenmiş halini test edersin.

## 2) GitHub Pages'i "GitHub Actions" kaynağına al (tek seferlik)
1. GitHub'da `herdemaydogdu/hexo` deposunu aç.
2. **Settings → Pages**.
3. **Build and deployment → Source** kısmını **"GitHub Actions"** yap.
   (Eskiden "Deploy from a branch / main" idi; onu değiştiriyoruz.)

## 3) Yayın (otomatik)
Repo köküne `.github/workflows/deploy.yml` eklendi. Artık `main`'e her push'ta
GitHub şu adımları otomatik yapar: `npm ci → vite build → Pages'e deploy`.

Yani yayın akışın:
```bash
git add .
git commit -m "React dashboard"
git push origin main
```
1-2 dakika sonra site güncellenir: **https://herdemaydogdu.github.io/hexo/**
İlerlemeyi **Actions** sekmesinden (yeşil tik) izleyebilirsin.

> Not: `yayinla.bat` de push yaptığı için çalışmaya devam eder; workflow onu da tetikler.

## Önemli ayrıntılar
- **`base: "/hexo/"`** şart. Proje sitesi alt yolda sunulduğu için olmazsa
  JS/CSS 404 verir ve boş sayfa görürsün. Depo adı değişirse burayı güncelle.
- **`package-lock.json` commit'li olmalı** — CI `npm ci` bunu ister.
- `node_modules` ve `dist` commit edilmez (`.gitignore`'da).
- `useProgress.js` eski sitenin `localStorage` anahtarını (`tyt_progress_v1`)
  aynen okur; iki uygulama aynı tarayıcıda aynı veriyi paylaşır.
