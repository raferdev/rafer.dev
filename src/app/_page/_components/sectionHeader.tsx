import { SectionLabel } from '@/components/SectionLabel'

type SectionHeaderProps = {
  id: string
  label: string
  title: string
  intro: string[]
}

const SectionHeader = ({ id, label, title, intro }: SectionHeaderProps) => (
  <div className="flex flex-col gap-4 border-b border-line pb-6 pt-14 md:flex-row md:items-end md:justify-between">
    <div>
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={id}
        className="mt-3 font-sans text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]"
      >
        {title}
      </h2>
    </div>
    <p className="font-mono text-xs leading-5 text-ink-soft md:text-right">
      {intro.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  </div>
)

export { SectionHeader }
