'use client'

import { MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react'

import { cn } from '../../cn'
import { usePrefersReducedMotion } from '../../hooks'
import { PageMenu } from '../PageMenu'
import { BookNavContext } from './context'

type BookPageUnit = {
  label: string
  content: ReactNode
}

type BookPage = {
  id: string
  units: BookPageUnit[]
}

type BookShellProps = {
  pages: BookPage[]
}

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [role="option"]'

const BookShell = ({ pages }: BookShellProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [current, setCurrent] = useState(0)
  const [hasReadHash, setHasReadHash] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { units, labels, startIndex } = useMemo(() => {
    let cursor = 0
    const flatStartIndex: number[] = []
    const flatUnits: ReactNode[] = []
    const flatLabels: string[] = []

    pages.forEach((page) => {
      flatStartIndex.push(cursor)
      page.units.forEach((unit) => {
        flatUnits.push(unit.content)
        flatLabels.push(unit.label)
      })
      cursor += page.units.length
    })

    return { units: flatUnits, labels: flatLabels, startIndex: flatStartIndex }
  }, [pages])

  const total = units.length

  useEffect(() => {
    setCurrent((value) => Math.min(value, total - 1))
  }, [total])

  useEffect(() => {
    if (hasReadHash) return

    const hash = window.location.hash.replace('#', '')
    const pageIndex = pages.findIndex((page) => page.id === hash)

    if (pageIndex >= 0) {
      setCurrent(startIndex[pageIndex])
    }

    setHasReadHash(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasReadHash])

  const go = (index: number) => {
    if (index < 0 || index >= total) return
    setCurrent(index)
    setMenuOpen(false)

    const pageIndex = startIndex.reduce(
      (found, start, i) => (start <= index ? i : found),
      0
    )
    const page = pages[pageIndex]

    if (page) {
      window.history.replaceState(null, '', `#${page.id}`)
    }
  }

  const goToPage = (pageIndex: number) => {
    const target = startIndex[pageIndex]
    if (target !== undefined) go(target)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(current + 1)
      if (event.key === 'ArrowLeft') go(current - 1)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, total])

  const onPageClick = (event: MouseEvent<HTMLDivElement>) => {
    // A click outside the menu while it's open should just dismiss it, not
    // also turn a page.
    if (menuOpen) {
      setMenuOpen(false)
      return
    }

    const target = event.target as HTMLElement
    if (target.closest(INTERACTIVE_SELECTOR)) return
    if (window.getSelection()?.toString()) return

    const rect = event.currentTarget.getBoundingClientRect()
    const clickedLeftHalf = event.clientX - rect.left < rect.width / 2

    go(clickedLeftHalf ? current - 1 : current + 1)
  }

  return (
    <BookNavContext.Provider value={{ current, total, goToPage }}>
      <main className="relative h-[94vh] w-[min(94vw,calc(94vh*210/297))] [perspective:2600px]">
        {units.map((unit, index) => (
          <div
            key={index}
            data-testid={index === current ? 'active-page' : undefined}
            onClick={index === current ? onPageClick : undefined}
            className={cn(
              'absolute inset-0',
              index === current
                ? cn(
                    'block cursor-pointer',
                    !prefersReducedMotion && 'book-turn'
                  )
                : 'hidden'
            )}
          >
            {unit}
          </div>
        ))}

        <PageMenu
          current={current}
          total={total}
          labels={labels}
          onSelect={go}
          open={menuOpen}
          onOpenChange={setMenuOpen}
        />
      </main>
    </BookNavContext.Provider>
  )
}

export { BookShell }
export type { BookPage, BookPageUnit }
