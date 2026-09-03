import { cn } from '../../cn'
import { OptClassName } from '../../components'

type FolioProps = OptClassName & {
  n: number
}

const Folio = ({ n, className }: FolioProps) => (
  <span
    className={cn(
      'text-book-muted-ink absolute bottom-6 left-8 font-serif text-sm md:left-14',
      className
    )}
  >
    {String(n).padStart(2, '0')}
  </span>
)

export { Folio }
