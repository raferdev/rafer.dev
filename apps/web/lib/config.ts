export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#0a0e16",
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
