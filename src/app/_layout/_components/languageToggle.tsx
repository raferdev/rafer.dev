'use client'

import { MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'

import {
  counterpart,
  htmlLang,
  LANGUAGE_KEY,
  Locale,
  locales,
  paths,
} from '@/config/i18n'
import { trackable } from '@/lib/analytics'

const names: Record<Locale, { short: string; full: string }> = {
  en: { short: 'EN', full: 'English' },
  pt: { short: 'PT', full: 'Português' },
}

type LanguageToggleProps = {
  locale: Locale
  label: string
  className?: string
}

const LanguageToggle = ({ locale, label, className }: LanguageToggleProps) => {
  const pathname = usePathname() ?? paths[locale].home

  const choose = (event: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, target)
    } catch {}
    if (target === locale) return

    event.preventDefault()
    window.location.assign(event.currentTarget.href + window.location.hash)
  }

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1 font-mono text-xs">
        {locales.map((target, index) => {
          const current = target === locale

          return (
            <li key={target} className="flex items-center gap-1">
              {index > 0 && (
                <span aria-hidden="true" className="text-ink-subtle">
                  /
                </span>
              )}
              <a
                href={counterpart(pathname, target)}
                hrefLang={htmlLang[target]}
                lang={htmlLang[target]}
                aria-current={current ? 'true' : undefined}
                onClick={(event) => choose(event, target)}
                {...trackable('language_change', { language: target })}
                className={cn(
                  'rounded px-1 py-0.5 transition-colors',
                  current
                    ? 'font-bold text-ink'
                    : 'text-ink-subtle hover:text-pen'
                )}
              >
                {names[target].short}
                <span className="sr-only"> {names[target].full}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { LanguageToggle }
