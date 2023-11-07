import { Ubuntu } from 'next/font/google'

const fontSans = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system'],
  preload: true,
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
})

export { fontSans }
