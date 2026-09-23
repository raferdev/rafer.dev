import { Caveat, Inter, JetBrains_Mono } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system'],
  preload: true,
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  preload: true,
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

const fontHand = Caveat({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['cursive'],
  preload: true,
  variable: '--font-hand',
  weight: ['400', '600', '700'],
})

export { fontHand, fontMono, fontSans }
