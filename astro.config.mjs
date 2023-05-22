import { defineConfig } from "astro/config";
import { siteMeta } from "./src/app.config";
import remarkUnwrapImages from "remark-unwrap-images";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,

  integrations: [
   

    mdx({
      shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: "css-variables",
        wrap: true,
      },
    }),
  ],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkUnwrapImages],
  },

  experimental: {
    assets: true,
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
