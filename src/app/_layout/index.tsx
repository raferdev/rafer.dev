import './global.css'

import { Children } from '@/@types/components'
import { cn } from '@/utils/cn'

import { fontSans } from '@/lib/fonts'
import { DevTools } from '@/components/DevTools'

import { GoogleAnalytics } from './gtag'
import { RumAnalytics } from './rum'

const DefaultLayout = ({ children }: Children) => (
  <>
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/logo-250x250.png" as="image" />
      </head>
      <GoogleAnalytics />
      <RumAnalytics />
      <body
        className={cn(
          'flex min-h-screen items-center justify-center bg-background bg-gradient-to-b from-gray-950 from-50% via-gray-800 to-sky-500 font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}

        <DevTools />
      </body>
    </html>
  </>
)

export { metadata } from './metadata'

export default DefaultLayout
