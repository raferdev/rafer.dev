import './global.css'

import { cn } from '@/utils/cn'

import { fontMono } from '@/lib/fonts'
import { TailwindIndicator } from '@/components/ScreenIndicator'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'flex min-h-screen items-center justify-center bg-background font-sans antialiased',
            fontMono.variable
          )}
        >
          {children}

          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
