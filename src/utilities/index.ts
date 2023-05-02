// https://raw.githubusercontent.com/joysofcode/sveltekit-markdown-blog/main/src/lib/utils.ts


type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string | Date, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { 
		dateStyle,
		timeZone: 'UTC' 
	})
	return formatter.format(new Date(date))
}


export function slugify(str: string): string {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid characters
           .replace(/\s+/g, '-') // replace white space with hyphens
           .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}



// remove trailing slash

export function removeTrailingSlash(str: string): string {
  if (str.endsWith('/')) {
    return str.slice(0, -1);
  }
  return str;
}
