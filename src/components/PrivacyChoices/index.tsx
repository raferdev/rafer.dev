'use client'

import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

import { openConsentSettings } from '@/lib/consent'

type PrivacyChoicesProps = OptClassName & {
  label?: string
}

const PrivacyChoices = ({
  label = 'Privacy choices',
  className,
}: PrivacyChoicesProps) => (
  <button
    type="button"
    onClick={openConsentSettings}
    className={cn(
      'font-mono text-xs text-ink-soft transition-colors hover:text-pen',
      className
    )}
  >
    {label}
  </button>
)

export { PrivacyChoices }
