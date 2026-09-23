import { cn } from '@/utils/cn'
import {
  ArrowUpRight,
  GitMerge,
  GitPullRequestClosed,
  MessagesSquare,
} from 'lucide-react'

import { Contribution, getContent, Ui } from '@/config/content'
import { Locale } from '@/config/i18n'
import { trackable } from '@/lib/analytics'
import { Container } from '@/components/Container'

import { SectionHeader } from './sectionHeader'

const external = { target: '_blank', rel: 'noreferrer' }

const NewTab = ({ text }: { text: string }) => (
  <span className="sr-only"> {text}</span>
)

type StatusProps = Pick<Contribution, 'status'> & {
  labels: Pick<Ui, 'merged' | 'prClosed'>
}

const Status = ({ status, labels }: StatusProps) => {
  const merged = status === 'merged'
  const Icon = merged ? GitMerge : GitPullRequestClosed

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px]',
        merged ? 'border-pen/40 text-pen' : 'border-line text-ink-subtle'
      )}
    >
      <Icon aria-hidden="true" size={11} strokeWidth={2} />
      {merged ? labels.merged : labels.prClosed}
    </span>
  )
}

type ContributionItemProps = {
  item: Contribution
  ui: Pick<Ui, 'merged' | 'prClosed' | 'newTab'>
}

const ContributionItem = ({ item, ui }: ContributionItemProps) => (
  <li className="border-b border-line py-6 first:pt-0 last:border-b-0">
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <h3 className="font-sans text-lg font-semibold text-ink">
        {item.project}
      </h3>
      <span className="font-mono text-xs text-ink-subtle">{item.org}</span>
      <Status status={item.status} labels={ui} />
    </div>
    <p className="mt-2 font-mono text-[13px] leading-6 text-ink-soft">
      {item.summary}
    </p>
    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
      {item.links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            {...external}
            {...trackable('select_content', {
              content_type: 'contribution',
              content_id: link.id,
            })}
            className="inline-flex items-center gap-1 text-pen underline underline-offset-4 hover:text-ink"
          >
            {link.label}
            <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.75} />
            <NewTab text={ui.newTab} />
          </a>
        </li>
      ))}
    </ul>
  </li>
)

const OpenSourceSection = ({ locale }: { locale: Locale }) => {
  const { openSource, ui } = getContent(locale)

  return (
    <section
      id="open-source"
      aria-labelledby="open-source-title"
      data-ga-section="open-source"
    >
      <Container>
        <SectionHeader
          id="open-source-title"
          label={openSource.label}
          title={openSource.title}
          intro={openSource.intro}
        />

        <div className="grid gap-12 border-b border-line py-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-0">
          <ul className="lg:pr-12">
            {openSource.contributions.map((item) => (
              <ContributionItem key={item.id} item={item} ui={ui} />
            ))}
          </ul>

          <div className="lg:border-l lg:border-line lg:pl-10">
            <div>
              <h3 className="font-mono text-sm font-medium text-pen">
                <a
                  href={openSource.answers.profile}
                  {...external}
                  {...trackable('select_content', {
                    content_type: 'profile',
                    content_id: 'stackoverflow',
                  })}
                  className="inline-flex items-center gap-2 hover:text-ink"
                >
                  <MessagesSquare
                    aria-hidden="true"
                    size={15}
                    strokeWidth={1.75}
                  />
                  {openSource.answers.label}
                  <NewTab text={ui.newTab} />
                </a>
              </h3>
              <p className="mt-2 font-mono text-xs text-ink-subtle">
                {openSource.answers.summary}
              </p>
              <ul className="mt-4 space-y-3 font-mono text-[13px] leading-6">
                {openSource.answers.items.map((answer) => (
                  <li key={answer.id}>
                    <a
                      href={answer.href}
                      {...external}
                      {...trackable('select_content', {
                        content_type: 'answer',
                        content_id: answer.id,
                      })}
                      className="text-ink-soft transition-colors hover:text-pen"
                    >
                      {answer.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={12}
                        strokeWidth={1.75}
                        className="ml-1 inline-block text-ink-subtle"
                      />
                      <NewTab text={ui.newTab} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { OpenSourceSection }
