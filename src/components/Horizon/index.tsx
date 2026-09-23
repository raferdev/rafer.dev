const Horizon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[220px] w-full"
  >
    <defs>
      <linearGradient id="horizon-ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(38 70% 75%)" stopOpacity="0" />
        <stop offset="100%" stopColor="hsl(38 60% 55%)" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <path
      d="M0,120 C240,60 480,180 720,110 C960,40 1200,150 1440,90 L1440,220 L0,220 Z"
      fill="url(#horizon-ground)"
    />
    <path
      d="M0,120 C240,60 480,180 720,110 C960,40 1200,150 1440,90"
      fill="none"
      stroke="hsl(38 90% 70% / 0.5)"
      strokeWidth="1.5"
    />
    {[80, 260, 430, 610, 780, 950, 1120, 1300].map((x, i) => (
      <circle
        key={x}
        cx={x}
        cy={130 + (i % 3) * 14}
        r={i % 2 === 0 ? 1.6 : 1}
        fill="white"
        opacity={0.5}
      />
    ))}
  </svg>
)

export { Horizon }
