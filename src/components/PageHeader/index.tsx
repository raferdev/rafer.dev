import { cn } from '@/utils/cn'

import { PageHeaderDescription } from './pageHeaderDescription'
import { PageHeaderHeading } from './pageHeaderHeading'

const Container = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn(
        'flex max-w-[980px] flex-col items-start gap-2 px-4',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

const PageHeader = {
  Container,
  Heading: PageHeaderHeading,
  HeadingDescription: PageHeaderDescription,
}

export { PageHeader }
