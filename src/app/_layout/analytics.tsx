'use client'

import { useEffect } from 'react'

import { clearAnalyticsCookies, send, startAnalytics } from '@/lib/analytics'
import { hasConsent, onConsentChange } from '@/lib/consent'

const useConsentedTags = () => {
  useEffect(() => {
    let started = false

    const start = () => {
      if (started) return
      started = true
      startAnalytics()
    }

    if (hasConsent()) start()

    return onConsentChange((value) => {
      if (value === 'granted') {
        start()
        return
      }

      clearAnalyticsCookies()
      if (started) window.location.reload()
    })
  }, [])
}

const readParams = (element: HTMLElement) => {
  try {
    return JSON.parse(element.dataset.gaParams ?? '{}')
  } catch {
    return {}
  }
}

const useClickTracking = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return

      const element = (event.target as Element | null)?.closest<HTMLElement>(
        '[data-ga-event]'
      )
      const name = element?.dataset.gaEvent

      if (element && name) send(name, readParams(element))
    }

    document.addEventListener('click', onClick, { capture: true })
    document.addEventListener('auxclick', onClick, { capture: true })

    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      document.removeEventListener('auxclick', onClick, { capture: true })
    }
  }, [])
}

const useSectionViews = () => {
  useEffect(() => {
    const seen = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = (entry.target as HTMLElement).dataset.gaSection

          if (!entry.isIntersecting || !section || seen.has(section)) return
          if (!hasConsent()) return

          seen.add(section)
          send('section_view', { section })
        })
      },
      { rootMargin: '0px 0px -50% 0px' }
    )

    document
      .querySelectorAll<HTMLElement>('[data-ga-section]')
      .forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
}

const Analytics = () => {
  useConsentedTags()
  useClickTracking()
  useSectionViews()

  return null
}

export { Analytics }
