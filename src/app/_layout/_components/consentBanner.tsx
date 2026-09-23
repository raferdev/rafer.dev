'use client'

import { useEffect, useRef, useState } from 'react'

import {
  Consent,
  getConsent,
  onConsentSettingsOpen,
  setConsent,
} from '@/lib/consent'
import { Annotation } from '@/components/Annotation'

type ConsentBannerProps = {
  region: string
  text: string
  policy: string
  policyHref: string
  accept: string
  decline: string
  note: string[]
}

const ConsentBanner = ({
  region,
  text,
  policy,
  policyHref,
  accept,
  decline,
  note,
}: ConsentBannerProps) => {
  const [open, setOpen] = useState(false)
  const [reopened, setReopened] = useState(false)
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (getConsent() === null) setOpen(true)

    return onConsentSettingsOpen(() => {
      setOpen(true)
      setReopened(true)
    })
  }, [])

  useEffect(() => {
    if (open && reopened) acceptRef.current?.focus()
  }, [open, reopened])

  if (!open) return null

  const choose = (value: Consent) => {
    setConsent(value)
    setOpen(false)
    setReopened(false)
  }

  return (
    <section
      aria-label={region}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-md border border-line bg-paper-card p-5 shadow-[0_8px_30px_hsl(var(--ink)/0.12)] sm:inset-x-6 sm:bottom-6"
    >
      <p className="font-mono text-xs leading-5 text-ink-soft">
        {text}{' '}
        <a
          href={policyHref}
          className="text-pen underline underline-offset-2 hover:text-ink"
        >
          {policy}
        </a>
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          ref={acceptRef}
          type="button"
          onClick={() => choose('granted')}
          className="rounded bg-ink px-4 py-2 font-mono text-xs text-paper transition-colors hover:bg-pen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
        >
          {accept}
        </button>
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded border border-line px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
        >
          {decline}
        </button>
        <Annotation
          lines={note}
          className="ml-auto hidden -rotate-6 text-xl sm:inline-block"
        />
      </div>
    </section>
  )
}

export { ConsentBanner }
