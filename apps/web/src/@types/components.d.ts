type Children = {
  children: React.ReactNode
}

type NextErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export type { Children, NextErrorProps }
