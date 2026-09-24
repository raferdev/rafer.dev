import {
  DARK_QUERY,
  isTheme,
  Scheme,
  Theme,
  THEME_EVENT,
  THEME_KEY,
  themeColor,
} from '@/config/theme'

const readTheme = (): Theme => {
  try {
    const saved = window.localStorage.getItem(THEME_KEY)
    return isTheme(saved) ? saved : 'system'
  } catch {
    return 'system'
  }
}

const systemScheme = (): Scheme =>
  window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'

const resolveScheme = (theme: Theme): Scheme =>
  theme === 'system' ? systemScheme() : theme

const withoutTransitions = (change: () => void) => {
  const style = document.createElement('style')
  style.textContent = '*,*::before,*::after{transition:none!important}'
  document.head.appendChild(style)
  change()
  void window.getComputedStyle(document.body).opacity
  style.remove()
}

const applyTheme = (theme: Theme) => {
  const scheme = resolveScheme(theme)

  withoutTransitions(() => {
    document.documentElement.setAttribute('data-theme', scheme)
  })

  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => {
      const media: Scheme = meta.media.includes('dark') ? 'dark' : 'light'
      meta.content = themeColor[theme === 'system' ? media : scheme]
    })
}

const setTheme = (theme: Theme) => {
  try {
    if (theme === 'system') window.localStorage.removeItem(THEME_KEY)
    else window.localStorage.setItem(THEME_KEY, theme)
  } catch {}

  applyTheme(theme)
  window.dispatchEvent(new Event(THEME_EVENT))
}

const subscribeTheme = (onChange: () => void) => {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_KEY && event.key !== null) return
    applyTheme(readTheme())
    onChange()
  }

  window.addEventListener('storage', onStorage)
  window.addEventListener(THEME_EVENT, onChange)

  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(THEME_EVENT, onChange)
  }
}

export { readTheme, setTheme, subscribeTheme }
