type Consent = 'granted' | 'denied'

const STORAGE_KEY = 'rafer.consent'
const CHANGE_EVENT = 'rafer:consent-change'
const OPEN_EVENT = 'rafer:consent-open'

const getConsent = (): Consent | null => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

const setConsent = (value: Consent) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {}
  window.dispatchEvent(
    new CustomEvent<Consent>(CHANGE_EVENT, { detail: value })
  )
}

const hasConsent = () => getConsent() === 'granted'

const onConsentChange = (listener: (value: Consent) => void) => {
  const handler = (event: Event) =>
    listener((event as CustomEvent<Consent>).detail)
  window.addEventListener(CHANGE_EVENT, handler)
  return () => window.removeEventListener(CHANGE_EVENT, handler)
}

const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_EVENT))

const onConsentSettingsOpen = (listener: () => void) => {
  window.addEventListener(OPEN_EVENT, listener)
  return () => window.removeEventListener(OPEN_EVENT, listener)
}

export {
  getConsent,
  hasConsent,
  onConsentChange,
  onConsentSettingsOpen,
  openConsentSettings,
  setConsent,
}
export type { Consent }
