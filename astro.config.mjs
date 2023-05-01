import { defineConfig } from "astro/config";
import { siteMeta } from "./src/app.config";
import remarkUnwrapImages from 'remark-unwrap-images'


// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkUnwrapImages],
  },
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
