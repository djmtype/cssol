export const SITE = {
	title: 'SOL CSS',
	description: 'CSS without the FUSS',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
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
		'Section Header': [
			{ text: 'Intro', link: 'docs/en/intro' },
		],
		'Another Section': [{ text: 'Page 2', link: 'docs/en/page-2' }],
	},
};


export type Mainnav = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const MAINNAV: Mainnav = {
	en: {
		'Section Header': [
			{ text: 'Home', link: '/' },
			{ text: 'Docs', link: 'docs/en/intro' },
			{ text: 'Blog', link: 'blog' },
		],
		
	},
};
