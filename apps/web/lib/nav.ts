/**
 * Navigation shown in the left sidebar. Kept as data rather than markup so the
 * sidebar stays a rendering concern and routes live in one place.
 */
export type NavItem = {
  title: string
  href: string
  /** Rendered as a muted pill next to the label. */
  label?: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const mainNav: NavSection[] = [
  {
    title: "Getting started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/installation" },
      { title: "Project structure", href: "/structure" },
    ],
  },
  {
    title: "Design system",
    items: [
      { title: "Tokens", href: "/tokens" },
      { title: "Typography", href: "/typography" },
      { title: "Components", href: "/components", label: "New" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Deploying", href: "/deploying" },
      { title: "Theming", href: "/theming" },
    ],
  },
]

/** Placeholder anchors for the right-hand rail. */
export type TocItem = {
  title: string
  href: string
  depth: 2 | 3
}

export const sampleToc: TocItem[] = [
  { title: "Overview", href: "#overview", depth: 2 },
  { title: "Layout regions", href: "#layout-regions", depth: 2 },
  { title: "Sidebar", href: "#sidebar", depth: 3 },
  { title: "Content", href: "#content", depth: 3 },
  { title: "On this page", href: "#on-this-page", depth: 3 },
  { title: "Responsive behaviour", href: "#responsive", depth: 2 },
]
