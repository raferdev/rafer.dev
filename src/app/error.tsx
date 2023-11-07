'use client'

import { useEffect } from 'react'
import { GlobalErrorProps } from '@/@types/elements'

const Error = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
