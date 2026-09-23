import { OptChildClassNameProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionLabel = ({ children, className }: OptChildClassNameProps) => (
  <p className={cn('font-mono text-xs text-pen', className)}>
    <span aria-hidden="true">&lt; </span>
    {children}
    <span aria-hidden="true"> /&gt;</span>
  </p>
)

export { SectionLabel }
