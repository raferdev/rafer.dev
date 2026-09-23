import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { Annotation } from '@/components/Annotation'
import { Container } from '@/components/Container'
import { Scribble } from '@/components/Scribble'
import { SectionLabel } from '@/components/SectionLabel'

const SketchBox = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 190"
    className="h-40 w-44 text-pen sm:h-44 sm:w-48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M10 16 L194 14" />
    <path d="M18 6 L20 186" />
    <path d="M6 176 L192 178" />
    <path d="M182 4 L184 188" />
  </svg>
)

const Monogram = ({ name }: { name: string }) => (
  <figure className="w-fit">
    <div className="relative">
      <SketchBox />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex -rotate-6 items-center justify-center font-hand text-[5.5rem] font-bold leading-none text-ink"
      >
        R/
      </span>
    </div>
    <figcaption className="mt-3 font-mono text-sm">
      <span className="block text-ink">{name}</span>
      <span className="block text-xs text-pen">rafer.dev</span>
    </figcaption>
  </figure>
)

const HeroSection = ({ locale }: { locale: Locale }) => {
  const { hero } = getContent(locale)

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-b border-line"
    >
      <Container className="grid gap-y-14 py-14 md:py-20 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,0.7fr)_auto] xl:gap-x-10">
        <div>
          <SectionLabel>{hero.label}</SectionLabel>
          <h1
            id="hero-title"
            className="mt-5 font-sans text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[3.5rem] 2xl:text-6xl"
          >
            <span className="block sm:whitespace-nowrap">{hero.lines[0]}</span>{' '}
            <span className="block sm:whitespace-nowrap">
              {hero.lines[1]}{' '}
              <span className="relative inline-block text-pen">
                {hero.highlight}
                <Scribble.Underline className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-sm font-mono text-sm leading-6 text-ink-soft">
            {hero.summary}
          </p>
          <p className="mt-8 flex items-center gap-4 font-mono text-xs text-ink-soft">
            <span aria-hidden="true" className="h-px w-10 bg-pen" />
            {hero.focus.join('  /  ')}
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-x-16 gap-y-10 xl:contents">
          <div className="xl:justify-self-end xl:pt-16">
            <Annotation
              lines={hero.aside}
              className="-rotate-[9deg] text-[1.9rem]"
            />
            <Scribble.Arrow className="-mt-2 ml-20 hidden h-8 w-24 -rotate-6 sm:block" />
          </div>

          <Monogram name={hero.name} />
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
