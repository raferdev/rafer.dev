import { Annotation } from '@/components/Annotation'

type StackColumnProps = {
  label: string
  stack: string[]
  note?: string[]
}

const StackColumn = ({ label, stack, note }: StackColumnProps) => (
  <div className="lg:border-l lg:border-line lg:pl-8">
    <h4 className="font-mono text-sm font-medium text-pen">{label}</h4>
    <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[13px] text-ink-soft">
      {stack.map((item) => (
        <li
          key={item}
          className="after:ml-2 after:text-ink-subtle after:content-['/'] last:after:content-none"
        >
          {item}
        </li>
      ))}
    </ul>
    {note && (
      <div className="mt-8">
        <span aria-hidden="true" className="block h-px w-6 bg-pen" />
        <Annotation
          lines={note}
          underline
          className="ml-4 mt-4 -rotate-[8deg] text-[1.45rem] xl:ml-8"
        />
      </div>
    )}
  </div>
)

export { StackColumn }
