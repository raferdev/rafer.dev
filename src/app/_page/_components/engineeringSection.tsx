import {
  AppWindow,
  CheckCircle2,
  Cloud,
  Database,
  Layers,
  LucideIcon,
  Rocket,
  Server,
  Sparkles,
} from 'lucide-react'

import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { Annotation } from '@/components/Annotation'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/SectionLabel'

const icons: Record<string, LucideIcon> = {
  backend: Server,
  frontend: AppWindow,
  data: Database,
  architecture: Layers,
  cloud: Cloud,
  delivery: Rocket,
  quality: CheckCircle2,
  ai: Sparkles,
}

const EngineeringSection = ({ locale }: { locale: Locale }) => {
  const { engineering, toolbox, ui } = getContent(locale)

  return (
    <section id="about" aria-labelledby="about-title" data-ga-section="about">
      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-0">
        <div className="lg:pr-12">
          <SectionLabel>{engineering.label}</SectionLabel>
          <h2
            id="about-title"
            className="mt-3 font-sans text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]"
          >
            {engineering.title}
          </h2>
          <div className="mt-6 space-y-4">
            {engineering.summary.map((paragraph) => (
              <p
                key={paragraph}
                className="font-mono text-[13px] leading-7 text-ink-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-10">
          <h3 className="font-mono text-sm font-medium text-pen">
            {ui.toolbox}
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-4">
            {toolbox.map(({ id, label, items }) => {
              const Icon = icons[id]

              return (
                <li key={id} className="border-t border-line py-5">
                  <Icon
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.5}
                    className="text-pen"
                  />
                  <h4 className="mt-2 font-mono text-xs font-bold text-ink">
                    {label}
                  </h4>
                  <p className="mt-1 flex flex-wrap gap-x-3 font-mono text-xs leading-5 text-ink-soft">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </p>
                </li>
              )
            })}
          </ul>
          <Annotation
            lines={engineering.principle}
            underline
            className="mt-8 -rotate-[4deg] text-[1.6rem]"
          />
        </div>
      </Container>
    </section>
  )
}

export { EngineeringSection }
