import "./global.css"

import { Children } from "@/@types/components"
import { cn } from "@/utils/cn"
import { fontSans, fontScript, fontSerif } from "@raferdev/book-ui"

import { DevTools } from "@/components/DevTools"

import { GoogleAnalytics } from "./gtag"
import { RumAnalytics } from "./rum"

const DefaultLayout = ({ children }: Children) => (
  <>
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <GoogleAnalytics />
      <RumAnalytics />
      <body
        className={cn(
          "bg-backdrop text-ink flex min-h-screen items-center justify-center overflow-hidden p-3 font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
          fontScript.variable
        )}
      >
        {children}

        <DevTools />
      </body>
    </html>
  </>
)

export { metadata } from "./metadata"

export default DefaultLayout
