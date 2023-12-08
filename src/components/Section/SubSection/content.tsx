import { Children } from '@/@types/components'

const Container = ({ children }: Children) => (
  <div className="grid grid-cols-1 grid-rows-2 place-items-center items-center gap-16 md:grid-cols-section-1  md:grid-rows-1 md:gap-0">
    {children}
  </div>
)

const Illustration = ({ children }: Children) => (
  <div className="relative flex min-w-[200px] items-center justify-center lg:ml-8">
    {children}
  </div>
)

const Description = ({ children }: Children) => (
  <div className="md:pl-8 md:pr-12">{children}</div>
)

const Content = {
  Container,
  Illustration,
  Description,
}

export { Content }
