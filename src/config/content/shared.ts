import { __site } from '@/config/site'

import type { FooterLink } from './types'

const { links } = __site

const social: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: links.profile.github, external: true },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: links.profile.linkedin,
    external: true,
  },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow',
    href: links.profile.stackoverflow,
    external: true,
  },
  {
    id: 'wakatime',
    label: 'WakaTime',
    href: links.profile.wakatime,
    external: true,
  },
  {
    id: 'x',
    label: 'X / Twitter',
    href: links.profile.twitter,
    external: true,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: links.profile.youtube,
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: links.profile.instagram,
    external: true,
  },
]

const legal = {
  owner: 'Rafael Fernandes',
  company: 'RAFERDEV LTDA',
  cnpj: '54.970.175/0001-50',
}

export { legal, links, social }
