import { Metadata } from 'next'

import { legal } from '@/config/content/shared'
import type { Policy } from '@/config/privacy'
import { __site } from '@/config/site'
import { Container } from '@/components/Container'
import { PrivacyChoices } from '@/components/PrivacyChoices'
import { SectionLabel } from '@/components/SectionLabel'

const { url } = __site.metadata

const policyMetadata = (policy: Policy): Metadata => ({
  title: policy.title,
  description: policy.description,
  alternates: {
    canonical: `${url}${policy.path}`,
    languages: {
      [policy.lang]: `${url}${policy.path}`,
      [policy.alternate.lang]: `${url}${policy.alternate.href}`,
    },
  },
})

const text = 'font-mono text-[13px] leading-7 text-ink-soft'

const PolicyPage = ({ policy }: { policy: Policy }) => (
  <main id="main">
    <Container className="py-14 md:py-20">
      <article className="max-w-2xl">
        <SectionLabel>{policy.label}</SectionLabel>
        <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-ink">
          {policy.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-ink-subtle">
          {policy.updated}
        </p>
        <a
          href={policy.alternate.href}
          hrefLang={policy.alternate.lang}
          lang={policy.alternate.lang}
          className="mt-4 inline-block font-mono text-xs text-pen underline underline-offset-4 hover:text-ink"
        >
          {policy.alternate.label}
        </a>

        <div className="mt-8 space-y-4">
          {policy.intro.map((paragraph) => (
            <p key={paragraph} className={text}>
              {paragraph}
            </p>
          ))}
        </div>

        {policy.sections.map(({ id, title, paragraphs, list, after }) => (
          <section key={id} aria-labelledby={`policy-${id}`} className="mt-10">
            <h2
              id={`policy-${id}`}
              className="font-sans text-xl font-semibold tracking-tight text-ink"
            >
              {title}
            </h2>
            <div className="mt-3 space-y-3">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className={text}>
                  {paragraph}
                </p>
              ))}
              {list && (
                <ul className={`list-disc space-y-1 pl-5 ${text}`}>
                  {list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {after?.map((paragraph) => (
                <p key={paragraph} className={text}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section
          aria-labelledby="policy-controller"
          className="mt-12 border-t border-line pt-8"
        >
          <h2
            id="policy-controller"
            className="font-mono text-sm font-medium text-pen"
          >
            {policy.controller.title}
          </h2>
          <p className={`mt-3 ${text}`}>
            {legal.company} · CNPJ {legal.cnpj}
            <br />
            <a
              href={`mailto:${policy.controller.email}`}
              className="text-pen underline underline-offset-4 hover:text-ink"
            >
              {policy.controller.email}
            </a>
          </p>
          <PrivacyChoices
            label={policy.choices}
            className="mt-6 rounded border border-line px-4 py-2 text-ink hover:border-ink"
          />
        </section>
      </article>
    </Container>
  </main>
)

export { PolicyPage, policyMetadata }
