'use client'

import { useEffect } from 'react'

const ScrollParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          '--scroll-y',
          `${window.scrollY}px`
        )
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return null
}

export { ScrollParallax }
