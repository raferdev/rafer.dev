'use client'

import { useSyncExternalStore } from 'react'
import { cn } from '@/utils/cn'
import { Monitor, Moon, Sun } from 'lucide-react'

import type { SiteContent } from '@/config/content'
import { Theme, themes } from '@/config/theme'
import { trackable } from '@/lib/analytics'
import { readTheme, setTheme, subscribeTheme } from '@/lib/theme'

const icons: Record<Theme, typeof Sun> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
}

type ThemeToggleProps = {
  labels: SiteContent['ui']['theme']
  className?: string
}

const ThemeToggle = ({ labels, className }: ThemeToggleProps) => {
  const current = useSyncExternalStore<Theme>(
    subscribeTheme,
    readTheme,
    () => 'system'
  )

  return (
    <div
      role="group"
      aria-label={labels.label}
      className={cn(
        'flex items-center gap-0.5 rounded-md border border-line p-0.5',
        className
      )}
    >
      {themes.map((theme) => {
        const Icon = icons[theme]
        const active = theme === current

        return (
          <button
            key={theme}
            type="button"
            aria-pressed={active}
            title={labels[theme]}
            onClick={() => setTheme(theme)}
            {...trackable('theme_change', { theme })}
            className={cn(
              'grid h-6 w-6 place-items-center rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-pen',
              active ? 'bg-pen-soft text-ink' : 'text-ink-subtle hover:text-pen'
            )}
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="sr-only">{labels[theme]}</span>
          </button>
        )
      })}
    </div>
  )
}

export { ThemeToggle }
