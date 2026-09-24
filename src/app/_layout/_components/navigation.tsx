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
    <nav
      aria-label={label}
      className={cn(
        'overflow-x-auto [scrollbar-width:none] md:overflow-visible [&::-webkit-scrollbar]:hidden',
        className
      )}
    >
      <ul className="flex items-center gap-x-4 whitespace-nowrap font-mono text-xs min-[360px]:gap-x-5 min-[360px]:text-sm sm:gap-x-8 md:gap-x-5 lg:gap-x-8">
        {items.map(({ id, label, href }) => {
          const isActive = id === active

          return (
            <li key={id}>
              <a
                href={href}
                aria-current={isActive ? 'location' : undefined}
                {...trackable('nav_click', { section: id })}
                className={cn(
                  'relative block rounded-sm pb-3 pt-1 text-ink-soft transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pen md:py-1',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-pen after:opacity-0 after:transition-opacity md:after:-bottom-[1.1rem]',
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
