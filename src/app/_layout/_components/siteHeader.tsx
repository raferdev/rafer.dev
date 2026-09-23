import { getContent } from '@/config/content'
import { homeAnchor, Locale, paths } from '@/config/i18n'
import { Container } from '@/components/Container'

import { Brand } from './brand'
import { LanguageToggle } from './languageToggle'
import { Navigation } from './navigation'

const SiteHeader = ({ locale }: { locale: Locale }) => {
  const { ui } = getContent(locale)

  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur md:sticky md:top-0 md:z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
      >
        {ui.skipToContent}
      </a>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 md:h-16 md:flex-nowrap md:py-0">
        <Brand href={homeAnchor(locale, 'top')} />
        <LanguageToggle
          locale={locale}
          label={ui.language}
          className="md:order-last"
        />
        <Navigation
          items={ui.nav}
          label={ui.primaryNav}
          home={paths[locale].home}
          className="order-last w-full md:order-none md:ml-auto md:w-auto"
        />
      </Container>
    </header>
  )
}

export { SiteHeader }
