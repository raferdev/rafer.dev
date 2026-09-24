type Mockup = 'tree'

type LinkItem = {
  id: string
  label: string
  href: string
}

type Experience = {
  id: string
  period: string
  role: string
  company: string
  context: string
  summary: string[]
  stack: string[]
  note?: string[]
}

type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  status?: string
  links: LinkItem[]
  details: { label: string; text: string }[]
  stack: string[]
  mockup: Mockup
}

type Contribution = {
  id: string
  project: string
  org: string
  summary: string
  status: 'merged' | 'closed'
  links: LinkItem[]
}

type Stat = {
  id: string
  value: string
  label: string
  href: string
}

type JourneyStep = {
  id: string
  period: string
  title: string
  text: string
}

type Tool = {
  id: string
  label: string
  items: string[]
}

type Interest = {
  id: string
  title: string
  description: string
  href?: string
}

type FooterLink = {
  id: string
  label: string
  href: string
  external?: boolean
}

type SectionIntro = {
  label: string
  title: string
  intro: string[]
}

// Interface text that isn't page copy: navigation, labels, the consent banner.
type Ui = {
  skipToContent: string
  primaryNav: string
  nav: LinkItem[]
  language: string
  theme: { label: string; system: string; light: string; dark: string }
  newTab: string
  stack: string
  toolbox: string
  merged: string
  prClosed: string
  columns: { contact: string; social: string; site: string }
  privacyChoices: string
  consent: {
    text: string
    policy: string
    accept: string
    decline: string
    note: string[]
  }
}

// Everything a language has to provide. Both locales implement this type, so
// a missing translation fails the type check.
type SiteContent = {
  ui: Ui
  hero: {
    label: string
    lines: [string, string]
    highlight: string
    summary: string
    focus: string[]
    aside: string[]
    name: string
  }
  work: SectionIntro
  experience: Experience[]
  openSource: SectionIntro & {
    contributions: Contribution[]
    answers: {
      label: string
      summary: string
      profile: string
      items: LinkItem[]
    }
  }
  personal: SectionIntro & {
    archive: { text: string; label: string; href: string }
  }
  projects: Project[]
  engineering: {
    label: string
    title: string
    summary: string[]
    principle: string[]
  }
  toolbox: Tool[]
  journey: {
    label: string
    title: string
    story: string
    steps: JourneyStep[]
    facts: Stat[]
  }
  outside: { label: string; title: string }
  interests: Interest[]
  footer: {
    tagline: string
    location: string
    owner: string
    company: string
    cnpj: string
    farewell: string[]
    contact: FooterLink[]
    social: FooterLink[]
    site: FooterLink[]
  }
}

export type {
  Contribution,
  Experience,
  FooterLink,
  Interest,
  JourneyStep,
  LinkItem,
  Mockup,
  Project,
  SiteContent,
  Stat,
  Tool,
  Ui,
}
