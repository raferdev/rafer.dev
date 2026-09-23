import { Children } from '@/@types/components'

import { buildMetadata, RootLayout } from '../_layout'

const metadata = buildMetadata('pt')

const Layout = ({ children }: Children) => (
  <RootLayout locale="pt">{children}</RootLayout>
)

export { metadata }

export default Layout
