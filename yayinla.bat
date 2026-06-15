@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   TYT Hazirlik - GitHub'a Yayinlama
echo ============================================
echo.

REM Git kurulu mu kontrol et
git --version >nul 2>&1
if errorlevel 1 (
  echo [HATA] Git kurulu degil. https://git-scm.com adresinden kur.
  pause
  exit /b
)

REM Ilk kez ise depoyu hazirla
if not exist ".git" (
  echo Ilk kurulum yapiliyor...
  git init
  git branch -M main
  git remote add origin https://github.com/herdemaydogdu/hexo.git
)

echo Degisiklikler gonderiliyor...
git add .
git commit -m "Guncelleme %date% %time%"
git push -u origin main

echo.
echo ============================================
echo   Tamamlandi. Site birkac dakika icinde guncellenir:
echo   https://herdemaydogdu.github.io/hexo/
echo ============================================
pause
