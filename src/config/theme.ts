const themes = ['system', 'light', 'dark'] as const

type Theme = (typeof themes)[number]
type Scheme = Exclude<Theme, 'system'>

const THEME_KEY = 'rafer.theme'
const THEME_EVENT = 'rafer:theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

const themeColor: Record<Scheme, string> = {
  light: '#f7f6f3',
  dark: '#161513',
}

const isTheme = (value: unknown): value is Theme =>
  themes.includes(value as Theme)

const themeInit = `(function () {
  try {
    var media = matchMedia('${DARK_QUERY}');
    var apply = function () {
      var saved = localStorage.getItem('${THEME_KEY}');
      var dark = saved === 'dark' || (saved !== 'light' && media.matches);
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    };
    apply();
    media.addEventListener('change', function () {
      if (!localStorage.getItem('${THEME_KEY}')) apply();
    });
  } catch (e) {}
})();`

export {
  DARK_QUERY,
  isTheme,
  THEME_EVENT,
  THEME_KEY,
  themeColor,
  themeInit,
  themes,
}
export type { Scheme, Theme }
