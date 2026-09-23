import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

import { Scribble } from '@/components/Scribble'

type AnnotationProps = OptClassName & {
  lines: string[]
  underline?: boolean
}

const Annotation = ({
  lines,
  underline = false,
  className,
}: AnnotationProps) => (
  <p
    className={cn(
      'relative inline-block font-hand text-2xl leading-[1.05] text-pen',
      underline && 'pb-3',
      className
    )}
  >
    {lines.map((line) => (
      <span key={line} className="block whitespace-nowrap">
        {line}
      </span>
    ))}
    {underline && (
      <Scribble.Underline className="absolute bottom-0 left-0 h-2.5 w-full" />
    )}
  </p>
)

export { Annotation }
