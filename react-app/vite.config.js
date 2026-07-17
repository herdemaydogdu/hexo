import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages proje sitesi alt yolda sunulur: https://herdemaydogdu.github.io/hexo/
// base bu alt yola ayarlanmazsa build sonrası JS/CSS yolları 404 verir.
export default defineConfig({
  plugins: [react()],
  base: "/hexo/",
});
