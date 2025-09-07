// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ketul3012.github.io/portfolio/",
  base: "/portfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
