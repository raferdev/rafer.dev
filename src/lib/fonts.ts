import { Ubuntu } from 'next/font/google'

export const fontSans = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],

  preload: true,
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
})
