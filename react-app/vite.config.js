import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Netlify (ve yerel geliştirme) siteyi kök dizinde sunar → base "/".
// Not: GitHub Pages'e (alt yol /hexo/) dönersen base'i "/hexo/" yap.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
