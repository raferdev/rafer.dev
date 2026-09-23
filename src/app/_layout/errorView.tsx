'use client'

import { useEffect } from 'react'
import { NextErrorProps } from '@/@types/components'

import { Locale } from '@/config/i18n'
import { Container } from '@/components/Container'

const copy: Record<Locale, { title: string; retry: string }> = {
  en: { title: 'Something went wrong!', retry: 'Try again' },
  pt: { title: 'Algo deu errado.', retry: 'Tentar de novo' },
}

const ErrorView = ({
  error,
  reset,
  locale,
}: NextErrorProps & { locale: Locale }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main">
      <Container className="py-24">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-ink">
          {copy[locale].title}
        </h1>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 font-mono text-sm text-pen underline underline-offset-4 hover:text-ink"
        >
          {copy[locale].retry}
        </button>
      </Container>
    </main>
  )
}

export { ErrorView }
