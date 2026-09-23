const Brand = ({ href }: { href: string }) => (
  <a href={href} className="flex items-baseline gap-3 font-mono text-sm">
    <span className="font-bold tracking-[0.2em] text-ink">RAFAEL</span>
    <span aria-hidden="true" className="text-ink-subtle">
      /
    </span>
    <span className="text-pen">rafer.dev</span>
  </a>
)

export { Brand }
