'use client'

import { useEffect } from 'react'
import { NextErrorProps } from '@/@types/components'

const Error = ({ error, reset }: NextErrorProps) => {
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
