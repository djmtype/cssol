import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import { camelCase } from "change-case"

export default defineConfig({
  tokens: "./src/tokens/tokens.json",
  outDir: "./src/tokens/output/",

  //  color: {
  //   convertToHex: true, // Convert all colors to sRGB hexadecimal (default: false). By default, colors are kept in their formats
  //   gamut: 'p3', // 'srgb' | 'p3'
  // },
  plugins: [css({
    
    
    // generateName(variableId, token, ) {
    //   if (token.$value === "color(srgb 0.7294117647058823 0.8549019607843137 0.3333333333333333)") {
    //     return "initial";
    //   }
    //   // if nothing returned, fall back to default behavior
    // },

    // transform(token, mode) {
    //   const oldName = "#bada55";
    //   const newName = "initial";
    //   if (token.$type === "color") {
    //     return token.$value.map((value) => (value === oldName ? newName : value));
    //   }
    // },

    // transform: (variableId, token, mode) => {
    //   if (token.id === "color.primitive.gray.1" && mode === ".") {
    //     return "my-custom-value"; // generates `--token-i-want: my-custom-value;`
    //   }
    // },
    modeSelectors: [
      {
        mode: "light",
        selectors: [
          "@media (prefers-color-scheme: light)",
          '[data-mode="light"]',
        ],
        tokens: ["color.*"]
      },
      {
        mode: "dark",
        selectors: [
          "@media (prefers-color-scheme: dark)",
          '[data-mode="dark"]',
        ],
        tokens: ["color.*"]
      },
      { mode: "mobile", selectors: ["@media (width < 600px)"] },
      { mode: "desktop", selectors: ["@media (width >= 600px)"] },
      {
        mode: "reduced-motion",
        selectors: ["@media (prefers-reduced-motion)"],
      },
    ],
  })],
});