import { Atom, Crown, Footprints, LucideIcon, Music } from 'lucide-react'

import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { trackable } from '@/lib/analytics'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/SectionLabel'

const icons: Record<string, LucideIcon> = {
  chess: Crown,
  running: Footprints,
  guitar: Music,
  physics: Atom,
}

const InterestsSection = ({ locale }: { locale: Locale }) => {
  const { interests, outside, ui } = getContent(locale)

  return (
    <section
      aria-labelledby="interests-title"
      data-ga-section="interests"
      className="border-t border-line"
    >
      <Container className="py-12">
        <SectionLabel>{outside.label}</SectionLabel>
        <h2
          id="interests-title"
          className="mt-3 font-sans text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]"
        >
          {outside.title}
        </h2>

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {interests.map(({ id, title, description, href }) => {
            const Icon = icons[id]

            return (
              <li
                key={id}
                className="flex gap-4 xl:border-l xl:border-line xl:px-6 xl:first:border-l-0 xl:first:pl-0"
              >
                <Icon
                  aria-hidden="true"
                  size={28}
                  strokeWidth={1.25}
                  className="shrink-0 text-pen"
                />
                <div>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-pen"
                        {...trackable('select_content', {
                          content_type: 'interest',
                          content_id: id,
                        })}
                      >
                        {title}
                        <span className="sr-only"> {ui.newTab}</span>
                      </a>
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-5 text-ink-soft">
                    {description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export { InterestsSection }
