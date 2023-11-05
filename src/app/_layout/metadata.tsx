import { Metadata } from 'next'

import { __site } from '@/config/site'

const { metadata: meta } = __site

export const metadata: Metadata = {
  title: {
    default: meta.name,

    template: `%s | ${meta.name}`,
  },
  description: meta.description,
  referrer: 'origin-when-cross-origin',

  keywords: ['Nextjs', 'Software Engineer', 'Open Source', 'Raferdev'],
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
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [`${meta.url}/opengraph-image.png`],
    url: meta.url,
    title: meta.name,
    description: meta.description,
    siteName: meta.name,
  },
  alternates: {
    canonical: meta.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.name,
    description: meta.description,
    images: [`${meta.url}/opengraph-image.png`],
    creator: '@raferdev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: `${meta.url}/site.webmanifest`,
}
