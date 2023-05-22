import { z, defineCollection } from 'astro:content';

import { SITE } from '../consts';

const docs = defineCollection({
	schema: z.object({
		title: z.string().default(SITE.title),
		description: z.string().default(SITE.description),
		lang: z.literal('en-us').default(SITE.defaultLanguage),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		ogLocale: z.string().optional(),
	}),
});

const blog = defineCollection({
	
  schema: z.object({
		permalink: z.string().optional(),
    title: z.string().max(100),
		subtitle: z.string().max(100).optional(),
		description: z.string(),
    date: z.coerce.date().transform((str) => new Date(str)),
    image: z.object({
      src: z.string(),
      alt: z.string(),
			width: z.number().optional(),
			height: z.number().optional(),
    }).optional(),
    status: z.string()
  })
});


export const collections = {
  'blog': blog,
  'docs': docs
};