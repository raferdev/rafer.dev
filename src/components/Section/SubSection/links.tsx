import { ReactChildrenProps } from '@/@types/components'

const Container = ({ children }: ReactChildrenProps) => (
  <div className="grid min-h-[200px] w-full grid-cols-1 grid-rows-3 place-items-center justify-items-center md:gap-2">
    {children}
  </div>
)
const Links = { Container }

export { Links }
