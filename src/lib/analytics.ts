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
  section_view: { section: string }
}

type AnalyticsEvent = keyof AnalyticsEvents

const isProduction = process.env.NODE_ENV === 'production'

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
  window.gtag('js', new Date())
  window.gtag('config', __env.NEXT_PUBLIC_GA_TAG_ID)

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

export { clearAnalyticsCookies, send, startAnalytics, track, trackable }
export type { AnalyticsEvent, AnalyticsEvents }
