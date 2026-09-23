'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

import type { LinkItem } from '@/config/content'
import { trackable } from '@/lib/analytics'

type NavigationProps = OptClassName & {
  items: LinkItem[]
  label: string
  home: string
}

const useActiveSection = (ids: string, home: string) => {
  const pathname = usePathname()
  const [active, setActive] = useState<string | null>(
    pathname === home ? 'work' : null
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    ids.split(',').forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    const onScroll = () => {
      const { scrollY, innerHeight } = window
      if (scrollY + innerHeight >= document.body.scrollHeight - 4) {
        setActive('contact')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}

const Navigation = ({ items, label, home, className }: NavigationProps) => {
  const active = useActiveSection(items.map(({ id }) => id).join(','), home)

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm sm:gap-x-8">
        {items.map(({ id, label, href }) => {
          const isActive = id === active

          return (
            <li key={id}>
              <a
                href={href}
                aria-current={isActive ? 'location' : undefined}
                {...trackable('nav_click', { section: id })}
                className={cn(
                  'relative block py-1 text-ink-soft transition-colors hover:text-ink',
                  'after:absolute after:-bottom-[1.1rem] after:left-0 after:h-0.5 after:w-full after:bg-pen after:opacity-0 after:transition-opacity',
                  isActive && 'text-ink after:opacity-100'
                )}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Navigation }
