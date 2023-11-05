'use client'

import { GlobalErrorProps } from '@/@types/elements'

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
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
