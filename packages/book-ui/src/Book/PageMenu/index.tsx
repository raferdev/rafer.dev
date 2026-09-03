'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../cn'

type PageMenuProps = {
  current: number
  total: number
  labels: string[]
  onSelect: (index: number) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

const PageMenu = ({
  current,
  total,
  labels,
  onSelect,
  open,
  onOpenChange,
}: PageMenuProps) => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false)
    }

    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onOpenChange])

  return (
    <div ref={rootRef} className="absolute right-4 top-4 z-20">
      <button
        type="button"
        onClick={() => onOpenChange(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Jump to page — currently page ${current + 1}, ${
          labels[current]
        }`}
        className="border-book-edge bg-paper/95 hover:border-book-pen flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-[0_6px_16px_rgba(28,31,38,0.14)] backdrop-blur-sm transition-colors"
      >
        <span className="text-book-pen font-serif text-sm font-semibold">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-book-slate max-w-[12ch] truncate text-xs">
          {labels[current]}
        </span>
        <ChevronDown
          className={cn(
            'text-book-muted-ink h-3.5 w-3.5 transition-transform',
            open && 'rotate-180'
          )}
          strokeWidth={2.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Jump to page"
          className="border-book-edge bg-paper absolute right-0 top-full mt-2 max-h-[min(60vh,420px)] w-56 overflow-y-auto rounded-lg border py-1.5 shadow-[0_16px_40px_rgba(28,31,38,0.2)]"
        >
          {Array.from({ length: total }).map((_, index) => (
            <li key={index}>
              <button
                type="button"
                role="option"
                aria-selected={index === current}
                onClick={() => {
                  onSelect(index)
                  onOpenChange(false)
                }}
                className={cn(
                  'hover:bg-book-pen-soft flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors',
                  index === current ? 'text-book-pen' : 'text-ink'
                )}
              >
                <span className="text-book-muted-ink w-6 shrink-0 font-serif text-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="truncate">{labels[index]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { PageMenu }
