import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.seric-japon.com",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "ja", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr", en: "en", ja: "ja", ko: "ko" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
