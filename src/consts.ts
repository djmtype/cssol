export const SITE = {
  title: "SOL CSS",
  description: "CSS without the FUSS",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
// 	indexName: 'XXXXXXXXXX',
// 	appId: 'XXXXXXXXXX',
// 	apiKey: 'XXXXXXXXXX',
// };

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Getting Started": [{ text: "Intro", link: "docs/en/intro" }],
    Elements: [
      { text: "Colors", link: "docs/en/colors" },
      { text: "Space", link: "docs/en/space" },
			{ text: "Typography", link: "docs/en/typography" },
		],
    Components: [
      { text: "Buttons", link: "docs/en/buttons" },
      { text: "Details", link: "docs/en/details" },
      { text: "Dialog", link: "docs/en/dialog" },
      { text: "Images", link: "docs/en/images" },
      { text: "Forms", link: "docs/en/forms" },
      { text: "Progress", link: "docs/en/progress" },
			{ text: "Tables", link: "docs/en/tables" },
		],
  },
};

export type Mainnav = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const MAINNAV: Mainnav = {
  en: {
    "Main Navigation": [
      { text: "Home", link: "" },
      { text: "Docs", link: "docs/en/intro" },
      { text: "Demo", link: "blog" },
    ],
  },
};
