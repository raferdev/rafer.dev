import { __env } from '@/config/env'

import { hasConsent } from './consent'

type AnalyticsEvents = {
  select_content: {
    content_type: 'project' | 'interest' | 'contribution' | 'answer' | 'profile'
    content_id: string
  }
  social_click: { network: string }
  contact_click: { method: string }
  nav_click: { section: string }
  language_change: { language: string }
  theme_change: { theme: string }
  section_view: { section: string }
}

type AnalyticsEvent = keyof AnalyticsEvents

const isProduction = process.env.NODE_ENV === 'production'

const INTERNAL_KEY = 'rafer.internal'
const DEBUG_KEY = 'rafer.ga-debug'

type Flag = { key: string; param: string; storage: () => Storage }

const flags = {
  internal: {
    key: INTERNAL_KEY,
    param: 'internal',
    storage: () => window.localStorage,
  },
  debug: {
    key: DEBUG_KEY,
    param: 'ga_debug',
    storage: () => window.sessionStorage,
  },
} satisfies Record<string, Flag>

const readFlag = ({ key, storage }: Flag) => {
  try {
    return storage().getItem(key) === '1'
  } catch {
    return false
  }
}

const applyAnalyticsFlags = () => {
  const url = new URL(window.location.href)
  let changed = false

  Object.values(flags).forEach(({ key, param, storage }) => {
    const value = url.searchParams.get(param)
    if (value === null) return

    try {
      if (value === '1') storage().setItem(key, '1')
      if (value === '0') storage().removeItem(key)
    } catch {}

    url.searchParams.delete(param)
    changed = true
  })

  if (changed) window.history.replaceState(window.history.state, '', url)
}

const userProperties = () => ({
  site_language: document.documentElement.lang,
  color_scheme: document.documentElement.getAttribute('data-theme') ?? 'light',
})

const updateUserProperties = () => {
  if (!hasConsent()) return
  window.gtag?.('set', 'user_properties', userProperties())
}

const configParams = () => ({
  ...(readFlag(flags.internal) && { traffic_type: 'internal' }),
  ...(readFlag(flags.debug) && { debug_mode: true }),
})

const send = (event: string, params: Record<string, unknown>) => {
  if (!hasConsent()) return
  window.gtag?.('event', event, params)
}

const track = <E extends AnalyticsEvent>(
  event: E,
  params: AnalyticsEvents[E]
) => send(event, params)

const trackable = <E extends AnalyticsEvent>(
  event: E,
  params: AnalyticsEvents[E]
) => ({
  'data-ga-event': event,
  'data-ga-params': JSON.stringify(params),
})

const loadScript = (src: string) => {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

const startAnalytics = () => {
  if (window.gtag) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  })
  window.gtag('set', 'user_properties', userProperties())
  window.gtag('js', new Date())
  window.gtag('config', __env.NEXT_PUBLIC_GA_TAG_ID, configParams())

  if (isProduction) loadScript(__env.NEXT_PUBLIC_GA_SRC)
}

const clearAnalyticsCookies = () => {
  const host = window.location.hostname
  const apex = host.split('.').slice(-2).join('.')
  const domains = ['', host, `.${host}`, `.${apex}`]

  document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      domains.forEach((domain) => {
        const scope = domain ? `; domain=${domain}` : ''
        document.cookie = `${name}=; Max-Age=0; path=/${scope}`
      })
    })
}

export {
  applyAnalyticsFlags,
  clearAnalyticsCookies,
  send,
  startAnalytics,
  track,
  trackable,
  updateUserProperties,
}
export type { AnalyticsEvent, AnalyticsEvents }
