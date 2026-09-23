import { Children } from '@/@types/components'

import { buildMetadata, RootLayout, viewport } from '../_layout'

const metadata = buildMetadata('pt')

const Layout = ({ children }: Children) => (
  <RootLayout locale="pt">{children}</RootLayout>
)

export { metadata, viewport }

export default Layout
