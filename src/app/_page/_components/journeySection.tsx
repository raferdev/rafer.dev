import { cn } from '@/utils/cn'

import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { trackable } from '@/lib/analytics'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/SectionLabel'

const JourneySection = ({ locale }: { locale: Locale }) => {
  const { journey, ui } = getContent(locale)

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      data-ga-section="journey"
      className="border-t border-line"
    >
      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-0">
        <div className="lg:pr-12">
          <SectionLabel>{journey.label}</SectionLabel>
          <h2
            id="journey-title"
            className="mt-3 font-sans text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]"
          >
            {journey.title}
          </h2>
          <p className="mt-6 max-w-md font-mono text-[13px] leading-7 text-ink-soft">
            {journey.story}
          </p>

          <ul className="mt-8 space-y-3 border-t border-line pt-6 font-mono text-xs leading-5 text-ink-soft">
            {journey.facts.map((fact) => (
              <li key={fact.id}>
                <a
                  href={fact.href}
                  target="_blank"
                  rel="noreferrer"
                  {...trackable('select_content', {
                    content_type: 'profile',
                    content_id: fact.id,
                  })}
                  className="transition-colors hover:text-pen"
                >
                  <span className="font-bold text-ink">{fact.value}</span>{' '}
                  {fact.label}
                  <span className="sr-only"> {ui.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ol className="lg:border-l lg:border-line lg:pl-10">
          {journey.steps.map((step, index) => {
            const current = index === journey.steps.length - 1

            return (
              <li
                key={step.id}
                className="relative grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-line py-4 first:pt-0 last:border-b-0 sm:grid-cols-[8rem_minmax(0,1fr)]"
              >
                <p
                  className={cn(
                    'font-mono text-xs leading-6',
                    current ? 'text-pen' : 'text-ink-subtle'
                  )}
                >
                  {step.period}
                </p>
                <div>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs leading-5 text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

export { JourneySection }
