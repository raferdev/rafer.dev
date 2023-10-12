import { Metadata } from 'next'

import { siteConfig } from '@/config/meta'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,

    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
  creator: 'Rafael',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [`${siteConfig.url}/og.jpg`],
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
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
  manifest: `${siteConfig.url}/site.webmanifest`,
}
