const locales = ['en', 'pt'] as const

type Locale = (typeof locales)[number]

const htmlLang: Record<Locale, string> = { en: 'en', pt: 'pt-BR' }
const ogLocale: Record<Locale, string> = { en: 'en_US', pt: 'pt_BR' }

const paths = {
  en: { home: '/', privacy: '/privacy' },
  pt: { home: '/pt', privacy: '/pt/privacidade' },
} satisfies Record<Locale, Record<string, string>>

type Page = keyof (typeof paths)['en']

const homeAnchor = (locale: Locale, id: string) => {
  const home = paths[locale].home
  return home === '/' ? `/#${id}` : `${home}#${id}`
}

const counterpart = (pathname: string, target: Locale) => {
  const path = pathname.replace(/\/$/, '') || '/'

  for (const locale of locales) {
    const page = (Object.keys(paths[locale]) as Page[]).find(
      (key) => paths[locale][key] === path
    )
    if (page) return paths[target][page]
  }

  return paths[target].home
}

const LANGUAGE_KEY = 'rafer.lang'

const languageRedirect = `(function () {
  try {
    if (location.pathname !== '/') return;
    var saved = localStorage.getItem('${LANGUAGE_KEY}');
    if (saved === 'en') return;
    if (saved === 'pt') return location.replace('/pt' + location.hash);
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var lang = String(langs[i]).toLowerCase();
      if (lang.indexOf('pt') === 0) return location.replace('/pt' + location.hash);
      if (lang.indexOf('en') === 0) return;
    }
  } catch (e) {}
})();`

export {
  counterpart,
  homeAnchor,
  htmlLang,
  LANGUAGE_KEY,
  languageRedirect,
  locales,
  ogLocale,
  paths,
}
export type { Locale, Page }
