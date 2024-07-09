import pluginCSS from "@cobalt-ui/plugin-css";
import { camelCase, kebabCase } from "change-case";

/** @type {import("@cobalt-ui/core").Config} */
export default {
  tokens: "./src/cobalt/tokens/tokens.json",
  outDir: "./src/cobalt/tokens/output/",
  // color: {
  //   convertToHex: true, // Convert all colors to sRGB hexadecimal (default: false). By default, colors are kept in their formats
  //   gamut: 'srgb', // 'srgb' | 'p3'
  // },
  plugins: [
    pluginCSS({
      /** set the filename inside outDir */
      filename: "./tokens.css",
      // transform: (variableId, token, mode) => {
      //   if (token.$value === "#bada55") {
      //     return "#ffffff"; // generates `--token-i-want: my-custom-value;`
      //   }
      // },

    //   generateName(variableName, variableId, token, tokens) {

    //     function getIdSuffix(variable) {
    //       const type = variable.$type;
    //       const id = variable.id;
        
    //       if (id.startsWith(type)) {
    //         return id.replace(`${type}.`, '');
    //       }
        
    //       return id;
    //     }

    //     const transformedId = getIdSuffix(variableId);
        
    //     if (variableId.$type === 'color') {
    //     return kebabCase(`${variableId.$type}-sol-${transformedId}`);
    //     } else {
    //       return kebabCase(variableName);
    //     }
    // },

     // transform(token, mode) {
    //   const oldName = "#bada55";
    //   const newName = "initial";
    //   if (token.$type === "color") {
    //     return token.$value.map((value) => (value === oldName ? newName : value));
    //   }
    // },

      transform(token, mode) {
        if (token.id.includes('*')) {
            if (typeof token.$value === 'string') {
                return 'initial';
            } else {
                return token.$value;
            }
        }
        return token.$value;  // Ensure to return the value if id doesn't include '*'
    },

      /** create selector wrappers around modes */
      modeSelectors: [
        {
          mode: "light", // match all tokens with $extensions.mode.light
          selectors: ["@media (prefers-color-scheme: light)", '[data-color-mode="light"]'], // the following CSS selectors trigger the mode swap
          tokens: ["color.*"], // (optional) limit to specific tokens, if desired (by default any tokens with this mode will be included)
        },
        {
          mode: "dark",
          selectors: ["@media (prefers-color-scheme: dark)", '[data-color-mode="dark"]'],
          tokens: ["color.*"],
        },
        {
          mode: "reduced",
          selectors: ["@media (prefers-reduced-motion)"],
        },
      ],
      /** embed file tokens? */
      // embedFiles: false,
      /** (optional) transform specific token values */
      // transform: () => null,
      /** (deprecated, use generateName instead) add custom namespace to CSS vars */
      // prefix: "sol-",
      /** enable P3 support? */
      p3: false,
      /** normalize all colors */
      // colorFormat: "oklch",
      /** used to generate the name of each CSS variable */
      // generateName: defaultNameGenerator,
    }),
  ],
};