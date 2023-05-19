import { defineConfig } from "astro/config";
import { siteMeta } from "./src/app.config";
import remarkUnwrapImages from "remark-unwrap-images";
import AutoImport from 'astro-auto-import';
import markdownIntegration from "@astropub/md";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,

  integrations: [
    AutoImport({
      imports: [
        "./src/components/Forms.astro",
        "./src/components/DefinitionList.astro",
        "./src/components/Component.astro",
        "./src/components/Progress.astro",
        "./src/components/Dialog.astro",

        "./src/components/Headings.astro",
        "./src/components/Lists.astro",
        "./src/components/Blockquote.astro",
        "./src/components/InlineText.astro",

        "./src/components/Buttons.astro",

        "./src/components/Images.astro",
        "./src/components/Tables.astro",
        "./src/components/Details.astro",
      ],
    }),

    markdownIntegration(),

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
