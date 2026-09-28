import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = "https://lucassemaansommelier.vercel.app";

export default defineConfig({
  output: "static",
  site,
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/404") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
