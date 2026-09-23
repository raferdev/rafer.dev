import {
  ArrowUpRight,
  Clock,
  FileText,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Twitter,
  Youtube,
} from 'lucide-react'

import { FooterLink, getContent } from '@/config/content'
import { homeAnchor, Locale } from '@/config/i18n'
import { trackable } from '@/lib/analytics'
import { Annotation } from '@/components/Annotation'
import { Container } from '@/components/Container'
import { PrivacyChoices } from '@/components/PrivacyChoices'

import { Brand } from './brand'

const icons: Record<string, LucideIcon> = {
  email: Mail,
  whatsapp: MessageCircle,
  cv: FileText,
  github: Github,
  linkedin: Linkedin,
  stackoverflow: MessagesSquare,
  wakatime: Clock,
  x: Twitter,
  youtube: Youtube,
  instagram: Instagram,
}

type Column = 'contact' | 'social' | 'site'

const tracking = (column: Column, id: string) => {
  if (column === 'contact' || id === 'linkedin') {
    return trackable('contact_click', { method: id })
  }
  if (column === 'social') return trackable('social_click', { network: id })
  return trackable('nav_click', { section: id })
}

const FooterLinks = ({
  column,
  links,
  newTab,
  children,
}: {
  column: Column
  links: FooterLink[]
  newTab: string
  children?: React.ReactNode
}) => (
  <ul className="mt-4 space-y-3 font-mono text-xs text-ink-soft">
    {links.map(({ id, label, href, external }) => {
      const Icon = icons[id]

      return (
        <li key={id}>
          <a
            href={href}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
            {...tracking(column, id)}
            className="inline-flex items-center gap-2 transition-colors hover:text-pen"
          >
            {Icon && <Icon aria-hidden="true" size={14} strokeWidth={1.75} />}
            {label}
            {external && !Icon && (
              <ArrowUpRight
                aria-hidden="true"
                size={12}
                strokeWidth={1.75}
                className="text-ink-subtle"
              />
            )}
            {external && <span className="sr-only"> {newTab}</span>}
          </a>
        </li>
      )
    })}
    {children && <li>{children}</li>}
  </ul>
)

const ColumnTitle = ({ id, children }: { id: string; children: string }) => (
  <h2 id={id} className="font-mono text-sm font-medium text-pen">
    {children}
  </h2>
)

const SiteFooter = ({ locale }: { locale: Locale }) => {
  const { footer, ui } = getContent(locale)

  return (
    <footer
      id="contact"
      data-ga-section="contact"
      className="border-t border-line"
    >
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Brand href={homeAnchor(locale, 'top')} />
            <p className="mt-4 max-w-xs font-mono text-xs leading-5 text-ink-soft">
              {footer.tagline}
            </p>
            <p className="mt-3 flex items-center gap-2 font-mono text-xs text-ink-soft">
              <MapPin aria-hidden="true" size={14} strokeWidth={1.75} />
              {footer.location}
            </p>
          </div>

          <div>
            <ColumnTitle id="footer-contact">{ui.columns.contact}</ColumnTitle>
            <FooterLinks
              column="contact"
              links={footer.contact}
              newTab={ui.newTab}
            />
          </div>

          <nav aria-labelledby="footer-social">
            <ColumnTitle id="footer-social">{ui.columns.social}</ColumnTitle>
            <FooterLinks
              column="social"
              links={footer.social}
              newTab={ui.newTab}
            />
          </nav>

          <nav aria-labelledby="footer-site">
            <ColumnTitle id="footer-site">{ui.columns.site}</ColumnTitle>
            <FooterLinks column="site" links={footer.site} newTab={ui.newTab}>
              <PrivacyChoices label={ui.privacyChoices} />
            </FooterLinks>
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-line py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] leading-5 text-ink-subtle">
            © {new Date().getFullYear()} {footer.owner}
            <span> · </span>
            <br className="sm:hidden" />
            {footer.company}
            <span> · </span>
            CNPJ {footer.cnpj}
          </p>
          <Annotation
            lines={footer.farewell}
            underline
            className="-rotate-6 text-2xl"
          />
        </div>
      </Container>
    </footer>
  )
}

export { SiteFooter }
