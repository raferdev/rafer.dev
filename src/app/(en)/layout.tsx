import { Children } from '@/@types/components'

import { buildMetadata, RootLayout, viewport } from '../_layout'

const metadata = buildMetadata('en')

const Layout = ({ children }: Children) => (
  <RootLayout locale="en">{children}</RootLayout>
)

export { metadata, viewport }

export default Layout
