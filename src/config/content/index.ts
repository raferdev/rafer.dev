import type { Locale } from '@/config/i18n'

import { en } from './en'
import { pt } from './pt'
import type { SiteContent } from './types'

const content: Record<Locale, SiteContent> = { en, pt }

const getContent = (locale: Locale) => content[locale]

export { getContent }
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
} from './types'
