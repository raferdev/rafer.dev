import { Children } from '@/@types/components'

import { buildMetadata, RootLayout } from '../_layout'

const metadata = buildMetadata('en')

const Layout = ({ children }: Children) => (
  <RootLayout locale="en">{children}</RootLayout>
)

export { metadata }

export default Layout
