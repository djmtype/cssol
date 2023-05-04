const litePreset = require ('cssnano-preset-lite');
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const combineSelectors  = require('postcss-combine-duplicated-selectors');




module.exports = ({ env }) => {

  const isProduction = env === 'production';
  const isDevelopment = env === 'development';
  

  return {
  plugins: [
    postcssImport(),
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
      },
      
    }),
    combineSelectors(),

    
    isProduction ? cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }) : null,
    isDevelopment ? cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: false,
            },
            discardDuplicates: true,
            discardUnused: false,
            reduceIdents: false,
            mergeIdents: false,
            cssDeclarationSorter: false,
          },
        ],
      }) : null,
  ],
}
};
