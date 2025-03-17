import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Dalab21.github.io",
  base: "/CvDaouDev",
  trailingSlash: "always",
  integrations: [tailwind()],
});
