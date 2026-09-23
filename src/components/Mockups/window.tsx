import { OptChildClassNameProps } from '@/@types/components'
import { cn } from '@/utils/cn'

type WindowProps = OptChildClassNameProps & {
  chrome?: boolean
}

const Window = ({ children, className, chrome = true }: WindowProps) => (
  <div
    className={cn(
      'rounded-md border border-line bg-paper-card p-4 text-[11px] text-ink shadow-[0_1px_2px_hsl(var(--ink)/0.04)]',
      className
    )}
  >
    {chrome && (
      <div className="mb-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ec6a5e]" />
        <span className="h-2 w-2 rounded-full bg-[#f4bf4f]" />
        <span className="h-2 w-2 rounded-full bg-[#61c554]" />
      </div>
    )}
    {children}
  </div>
)

export { Window }
