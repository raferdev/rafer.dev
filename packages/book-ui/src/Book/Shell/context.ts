'use client'

import { createContext, useContext } from 'react'

type BookNavContextValue = {
  current: number
  total: number
  goToPage: (pageIndex: number) => void
}

const BookNavContext = createContext<BookNavContextValue | null>(null)

const useBookNav = () => {
  const context = useContext(BookNavContext)

  if (!context) {
    throw new Error('useBookNav must be used within Book.Shell')
  }

  return context
}

export { BookNavContext, useBookNav }
