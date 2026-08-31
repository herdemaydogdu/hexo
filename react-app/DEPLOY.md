# TYT Hazırlık — Kurulum ve Yayın Rehberi

Bu klasör (`react-app/`) sitenin React + Vite + Tailwind + Supabase mimarisidir.
Eski vanilla-JS site (`../index.html`, `../js`, `../css`) repoda arşiv olarak durur;
geliştirme ve yayın artık buradan yürür.

**Yayın platformu: Netlify.** (GitHub Pages'ten vazgeçildi — alt yol `/hexo/`
base-path karmaşası yaşandı. Repo kökündeki `.github/workflows/deploy.yml`
Pages kaynağı "branch"e alındığı için pasiftir.)

## Klasör yapısı
```
react-app/
├─ index.html            # Vite giriş HTML'i (#root)
├─ package.json          # bağımlılıklar + scriptler
├─ package-lock.json     # CI için kilit dosyası (commit'li olmalı)
├─ vite.config.js        # base: "/"  ← Netlify kökten sunar
├─ tailwind.config.js    # Tailwind v3 (v4'e yükseltme)
├─ .env                  # VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY (gitignored)
├─ .env.local            # SUPABASE_SERVICE_ROLE_KEY — GİZLİ, sadece seed için
├─ scripts/
│  ├─ build-data.mjs     # js/data → questions.json + topics.json sayaçları
│  └─ seed.mjs           # JSON'ları Supabase'e yükler (service_role ile)
└─ src/
   ├─ main.jsx / App.jsx        # oturum kapısı: session yoksa Auth
   ├─ Auth.jsx                  # e-posta + şifre giriş/kayıt
   ├─ DashboardLayout.jsx       # ana panel + sekme yönlendirme
   ├─ Quiz.jsx                  # Soru Çöz (ders → konu → sorular)
   ├─ LectureNotesView.jsx      # Ders Notları
   ├─ Notes.jsx / NotesSidebar.jsx / NotebookCanvas.jsx
   ├─ useDashboardData.jsx      # attempts'ten türetilen istatistikler
   └─ supabaseClient.js
```

## 1) Yerelde geliştirme
Node.js 20+ kurulu olsun. Terminalde:
```bash
cd react-app
npm install        # ilk sefer
npm run dev        # http://localhost:5173
```
`npm run build` → `dist/` üretir; `npm run preview` derlenmiş hâlini sunar.

## 2) Netlify'a bağlama (tek seferlik)
1. https://app.netlify.com → **Add new site → Import an existing project**.
2. GitHub'ı yetkilendir, **herdemaydogdu/hexo** deposunu seç, dal: `main`.
3. Build ayarlarına **dokunma** — repo kökündeki `netlify.toml` zaten şunları söyler:
   `base = react-app`, `command = npm run build`, `publish = dist`, Node 20.
4. **Site configuration → Environment variables** altına iki değişken ekle:
   - `VITE_SUPABASE_URL` → Supabase → Project Settings → Data API → Project URL
   - `VITE_SUPABASE_ANON_KEY` → aynı sayfadaki **anon / publishable** anahtar
   > Bu iki değer tarayıcıya gider, gizli değildir; veriyi RLS korur.
   > `service_role` anahtarını **asla** Netlify'a veya repoya koyma.
5. **Deploy site**. İlk yayından sonra her `git push origin main` otomatik yayınlanır.

## 3) Yayın sonrası zorunlu duman testi
Yeni bir gizli sekmede canlı adresi aç ve sırayla dene:
- [ ] **Kayıt ol** — yeni e-postayla hesap açılıyor mu? (`user_stats` satırı otomatik oluşmalı)
- [ ] **Giriş yap / çıkış yap**
- [ ] **Ders Notları** — bir ünitenin içeriği geliyor mu?
- [ ] **Soru Çöz** — konu listesi doluyor, soru geliyor, cevap kaydediliyor mu?
- [ ] Ana sayfada "Çözülen soru" sayacı arttı mı?

## Önemli ayrıntılar
- **`base: "/"`** olmalı. GitHub Pages'e dönülürse `"/hexo/"` yapılacak.
- **`package-lock.json` commit'li olmalı** — Netlify `npm ci` ile kurar.
  (Windows'ta kurulmuş `node_modules` Linux'ta çalışmaz; Netlify temiz kurar,
  sorun değildir. Temiz Linux `npm ci + build` doğrulandı: 2026-08-31.)
- `node_modules`, `dist`, `.env*` commit edilmez (`.gitignore`).
- İçerik güncelleme akışı: `node scripts/build-data.mjs` → `node scripts/seed.mjs`.
