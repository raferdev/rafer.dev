import './global.css'

import { Metadata } from 'next'
import { cn } from '@/utils/cn'

import { siteConfig } from '@/config/meta'
import { fontMono } from '@/lib/fonts'
import { TailwindIndicator } from '@/components/ScreenIndicator'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  keywords: [
    'Next.js',
    'Landing Page',
    'Tailwind CSS',
    'Open Source',
    'Raferdev',
  ],
  authors: [
    {
      name: 'raferdev',
      url: 'https://rafer.dev',
    },
  ],
  creator: 'raferdev',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'flex min-h-screen items-center justify-center bg-background font-sans antialiased',
            fontMono.variable
          )}
        >
          {children}

          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
