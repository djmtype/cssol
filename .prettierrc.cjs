module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.md",
      options: {
        singleQuote: false,
        printWidth: 60,
        bracketSameLine: true,
        useTabs: false
      },
    },
    {
      files: "*.mdx",
      options: {
        singleQuote: false,
        printWidth: 60,
        bracketSameLine: true,
        useTabs: false
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
        semi: false,
        bracketSameLine: true,
        useTabs: false,
       printWidth: 2000,
       
      },
    },
  ],
};
