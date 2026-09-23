declare global {
  type Gtag = (...args: unknown[]) => void

  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
  }
}

export {}
