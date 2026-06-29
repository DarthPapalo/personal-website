// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
        prefixDefaultLocale: true
    }
  },
  site: "https://darthpapalo.github.io",
  base: "/personal-website",
})
