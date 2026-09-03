import { Caveat, Fraunces, Inter } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system'],
  preload: true,
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const fontSerif = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-serif', 'Georgia', 'serif'],
  preload: true,
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const fontScript = Caveat({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['cursive'],
  preload: false,
  variable: '--font-script',
  weight: ['500', '600'],
})

export { fontSans, fontScript, fontSerif }
