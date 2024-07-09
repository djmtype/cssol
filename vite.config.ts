import tailwindcss from "@tailwindcss/vite";
// import browserslist from "browserslist"
// import { browserslistToTargets, Features } from "lightningcss"

import { defineConfig } from "vite";
export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    devSourcemap: true,
    transformer: "lightningcss",
    lightningcss: {
      // targets: browserslistToTargets(
      //   browserslist("last 2 major versions and not dead and > .25%")
      // ),
      // include: Features.Nesting,
      // exclude: Features.LabColors | Features.P3Colors,
      // minify: false,
      // sourceMap: true,
    },
  },
  build: {
    cssMinify: "lightningcss",
    // cssMinify: true,
  },
});
