import { OptChildClassNameProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const Container = ({ children, className }: OptChildClassNameProps) => (
  <div className={cn('mx-auto w-full max-w-page px-5 sm:px-8', className)}>
    {children}
  </div>
)

export { Container }
