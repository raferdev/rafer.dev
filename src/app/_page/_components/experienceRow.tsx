import type { Experience } from '@/config/content'

import { StackColumn } from './stackColumn'

type ExperienceRowProps = {
  item: Experience
  stackLabel: string
}

const ExperienceRow = ({ item, stackLabel }: ExperienceRowProps) => (
  <li className="grid gap-x-8 gap-y-5 border-b border-line py-10 lg:grid-cols-[8.5rem_minmax(0,1fr)_minmax(0,0.7fr)]">
    <p className="pt-1 font-mono text-sm text-pen">{item.period}</p>

    <div>
      <h3 className="font-sans text-2xl font-semibold tracking-tight text-ink">
        {item.role}
      </h3>
      <p className="mt-1 font-mono text-sm text-ink-soft">
        <span className="font-bold text-ink">{item.company}</span>
        <span> · </span>
        {item.context}
      </p>
      <ul className="mt-5 max-w-2xl space-y-2 font-mono text-[13px] leading-6 text-ink-soft">
        {item.summary.map((line) => (
          <li key={line} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-3 h-px w-3 shrink-0 bg-pen"
            />
            {line}
          </li>
        ))}
      </ul>
    </div>

    <StackColumn label={stackLabel} stack={item.stack} note={item.note} />
  </li>
)

export { ExperienceRow }
