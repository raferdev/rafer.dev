import { Metadata, Viewport } from 'next'

import { Locale, ogLocale, paths } from '@/config/i18n'
import { __site } from '@/config/site'
import { themeColor } from '@/config/theme'

const { metadata: meta } = __site

const description: Record<Locale, string> = {
  en: meta.description,
  pt: 'Rafael Fernandes (raferdev), product engineer construindo software de ponta a ponta com Node.js, TypeScript, NestJS, Java e React.',
}

const homeUrl = (locale: Locale) =>
  locale === 'en' ? meta.url : `${meta.url}${paths[locale].home}`
const buildMetadata = (locale: Locale): Metadata => ({
  title: {
    default: meta.name,

    template: `%s | ${meta.name}`,
  },
  description: description[locale],
  referrer: 'origin-when-cross-origin',

  keywords: [
    'Rafael Fernandes',
    'Raferdev',
    'Product Engineer',
    'Software Engineer',
    'Backend',
    'System Design',
    'Full Stack',
    'Node.js',
    'TypeScript',
    'NestJS',
    'Java',
    'React',
    'Next.js',
    'Open Source',
  ],
  authors: [
    {
      name: 'raferdev',
      url: 'https://rafer.dev',
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  creator: '@raferdev',
  openGraph: {
    type: 'website',
    locale: ogLocale[locale],
    images: [`${meta.url}/opengraph-image.png`],
    url: homeUrl(locale),
    title: meta.name,
    description: description[locale],
    siteName: meta.name,
  },
  alternates: {
    canonical: homeUrl(locale),
    languages: {
      en: homeUrl('en'),
      'pt-BR': homeUrl('pt'),
      'x-default': homeUrl('en'),
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.name,
    description: description[locale],
    images: [`${meta.url}/opengraph-image.png`],
    creator: '@raferdev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.webmanifest',
})

const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themeColor.light },
    { media: '(prefers-color-scheme: dark)', color: themeColor.dark },
  ],
}

export { buildMetadata, viewport }
