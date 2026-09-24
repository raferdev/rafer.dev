import localFont from 'next/font/local'

const fontSans = localFont({
  src: '../fonts/inter-latin.woff2',
  weight: '100 900',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system'],
  preload: true,
  variable: '--font-sans',
})

const fontMono = localFont({
  src: '../fonts/jetbrains-mono-latin.woff2',
  weight: '400 800',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  preload: true,
  variable: '--font-mono',
})

const fontHand = localFont({
  src: '../fonts/caveat-latin.woff2',
  weight: '400 700',
  display: 'swap',
  fallback: ['cursive'],
  preload: true,
  variable: '--font-hand',
})

export { fontHand, fontMono, fontSans }
