const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const combineSelectors  = require('postcss-combine-duplicated-selectors');

// const postcssOKLabFunction = require('@csstools/postcss-oklab-function');

module.exports = {
  plugins: [
    postcssImport(),
    
    // postcssOKLabFunction({ 
    //   preserve: true,
    //     // enableProgressiveCustomProperties: false,
    //     // subFeatures: {
    //     //   displayP3: false
    //     // } 
    //   }),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: false,
      features: {
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        'place-properties': false,
        'not-pseudo-class': false,
        "dir-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "color-functional-notation": false,
        'double-position-gradients': false,
        // "has-pseudo-class": false
        'oklab-function': {
          preserve: true,
          // enableProgressiveCustomProperties: false,
          // subFeatures: {
          //   displayP3: false
          // }
        },
        // "custom-media-queries": {
        //   importFrom: ["./src/styles/common/queries.css"],
        // },
      },
      
    }),

    combineSelectors(),
    cssnano({
      preset: 'default'
    })

    
    // postcssJitProps(OpenProps),
  ],
};
