/**
 * Values kept in sync with packages/ui/src/styles/globals.css:
 * --background is oklch(1 0 0) in :root and oklch(0.141 0.005 285.823) in .dark.
 * The inline script in app/layout.tsx swaps the meta tag before first paint so
 * the browser chrome does not flash the wrong colour.
 */
export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
} as const

export const siteConfig = {
  name: "Rafael Fernandes",
  url: "https://rafer.dev",
  description: "Software engineer. Notes, projects and things I am building.",
  author: "raferdev",
  links: {
    github: "https://github.com/raferdev",
  },
} as const

export type SiteConfig = typeof siteConfig
