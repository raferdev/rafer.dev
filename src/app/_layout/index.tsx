import './global.css'

import { cn } from '@/utils/cn'

import { getContent } from '@/config/content'
import { htmlLang, languageRedirect, Locale, paths } from '@/config/i18n'
import { themeInit } from '@/config/theme'
import { fontHand, fontMono, fontSans } from '@/lib/fonts'
import { DevTools } from '@/components/DevTools'

import { ConsentBanner } from './_components/consentBanner'
import { SiteFooter } from './_components/siteFooter'
import { SiteHeader } from './_components/siteHeader'
import { Analytics } from './analytics'

type RootLayoutProps = {
  locale: Locale
  children: React.ReactNode
}

const RootLayout = ({ locale, children }: RootLayoutProps) => {
  const { ui } = getContent(locale)

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <head>
        {locale === 'en' && (
          <script dangerouslySetInnerHTML={{ __html: languageRedirect }} />
        )}
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-paper font-sans text-ink antialiased',
          fontSans.variable,
          fontMono.variable,
          fontHand.variable
        )}
      >
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />

        <ConsentBanner
          region={ui.privacyChoices}
          policyHref={paths[locale].privacy}
          {...ui.consent}
        />
        <Analytics />
        <DevTools />
      </body>
    </html>
  )
}

export { buildMetadata, viewport } from './metadata'

export { RootLayout }
