type PresentationSectionProps = {
  children: React.ReactNode
  className?: string
}

type MarqueeProps = {
  className: string
  props?: React.HTMLAttributes<HTMLDivElement>
}

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export { PresentationSectionProps, MarqueeProps, GlobalErrorProps }
