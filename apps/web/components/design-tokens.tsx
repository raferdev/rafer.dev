const BRAND_STEPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const

const TYPE_STEPS = [
  { token: "text-5xl", rem: "3.0518", use: "Display" },
  { token: "text-4xl", rem: "2.4414", use: "Page title" },
  { token: "text-3xl", rem: "1.9531", use: "h1" },
  { token: "text-2xl", rem: "1.5625", use: "h2" },
  { token: "text-xl", rem: "1.25", use: "h3" },
  { token: "text-lg", rem: "1.125", use: "Lead" },
  { token: "text-base", rem: "1", use: "Body" },
  { token: "text-sm", rem: "0.875", use: "UI, code" },
  { token: "text-xs", rem: "0.75", use: "Meta" },
] as const

const RADIUS_STEPS = [
  { token: "rounded-sm", px: "6px" },
  { token: "rounded-md", px: "8px" },
  { token: "rounded-lg", px: "10px" },
  { token: "rounded-xl", px: "14px" },
  { token: "rounded-2xl", px: "18px" },
] as const

export function ColorScale() {
  return (
    <div className="mt-5 overflow-hidden rounded-lg border">
      <div className="flex h-16">
        {BRAND_STEPS.map((step) => (
          <div
            key={step}
            className="flex-1"
            style={{ backgroundColor: `var(--brand-${step})` }}
          />
        ))}
      </div>
      <div className="flex border-t font-mono text-xs text-muted-foreground">
        {BRAND_STEPS.map((step) => (
          <div key={step} className="flex-1 py-1.5 text-center">
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SemanticSwatches() {
  const swatches = [
    { name: "background", fg: "foreground" },
    { name: "card", fg: "card-foreground" },
    { name: "primary", fg: "primary-foreground" },
    { name: "secondary", fg: "secondary-foreground" },
    { name: "muted", fg: "muted-foreground" },
    { name: "accent", fg: "accent-foreground" },
    { name: "destructive", fg: "destructive-foreground" },
  ]
  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-2">
      {swatches.map(({ name, fg }) => (
        <div
          key={name}
          className="flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs"
          style={{
            backgroundColor: `var(--${name})`,
            color: `var(--${fg})`,
          }}
        >
          <span>{name}</span>
          <span className="opacity-70">{fg}</span>
        </div>
      ))}
    </div>
  )
}

export function TypeScale() {
  return (
    <div className="mt-5 flex flex-col divide-y rounded-lg border">
      {TYPE_STEPS.map(({ token, rem, use }) => (
        <div key={token} className="flex items-baseline gap-4 px-4 py-3">
          <span className={`${token} min-w-0 flex-1 truncate font-medium`}>
            rafer.dev
          </span>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {token}
          </span>
          <span className="w-16 shrink-0 text-right font-mono text-xs text-muted-foreground">
            {rem}rem
          </span>
          <span className="hidden w-20 shrink-0 text-right text-xs text-muted-foreground sm:block">
            {use}
          </span>
        </div>
      ))}
    </div>
  )
}

export function RadiusScale() {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {RADIUS_STEPS.map(({ token, px }) => (
        <div key={token} className="flex flex-col items-center gap-2">
          <div
            className={`size-16 border border-primary/40 bg-accent ${token}`}
          />
          <span className="font-mono text-xs text-muted-foreground">
            {token}
          </span>
          <span className="font-mono text-xs text-muted-foreground opacity-70">
            {px}
          </span>
        </div>
      ))}
    </div>
  )
}
