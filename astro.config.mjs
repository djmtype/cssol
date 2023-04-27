import { defineConfig } from "astro/config";
import { siteMeta } from "./src/app.config";



// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,
  integrations: [

  ],
  experimental: {
    assets: false,
  },
  vite: {
    // plugins: [],
    // ssr: {
    //   external: ["svgo"],
    // },
    css: {
      devSourcemap: true,
    },
  },
});
