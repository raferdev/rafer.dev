'use client'

import { NextErrorProps } from '@/@types/components'

const GlobalError = ({ error, reset }: NextErrorProps) => {
  console.error(error)
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}

export default GlobalError
