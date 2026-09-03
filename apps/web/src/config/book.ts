import type {
  Chapter,
  ContactChapter,
  CoverContent,
  PrefaceContent,
  TocContent,
} from '@raferdev/book-ui'

import { __site } from '@/config/site'

type BookContent = {
  cover: CoverContent
  toc: Omit<TocContent, 'entries'>
  preface: PrefaceContent
  chapters: Chapter[]
  contact: ContactChapter
}

const book: BookContent = {
  cover: {
    kicker: 'a book about building',
    name: 'Rafael',
    role: 'Product Engineer',
    manifesto: ['logic', 'value', 'craft', 'people'],
  },
  toc: {
    title: 'Contents',
    subtitle: 'where to begin',
    colophon:
      'No infinite scroll, no glamour. A site you page through like you read — one idea per page, blue ink, light paper.',
    folio: 1,
  },
  preface: {
    kicker: 'preface',
    title: 'Why a book',
    prose: [
      'I started in physics and logic, where you learn to think before you act. I carried that into software: understand the problem, model it, then build. This site is a short version of that story.',
    ],
    marginalia: { text: 'humanity above all — the rest is tooling.' },
    folio: 2,
  },
  chapters: [
    {
      id: 'origin',
      numeral: 'I',
      title: 'The origin',
      folioLeft: 3,
      folioRight: 4,
      tocLabel: 'The origin',
      tocPage: '03',
      prose: [
        'Physics and mathematics came first. Not as a diploma, but as a way of reasoning: precision, method, the patience to understand a system before touching it.',
        "When I discovered programming, I recognized the same logic in a different language — and that's when I decided to build.",
      ],
      marginalia: { text: 'the way of thinking came before the code.' },
      dataList: [
        { key: 'base', value: 'Physics & logic — reasoning and modeling' },
        { key: 'turn', value: 'Discovering programming and web development' },
        { key: 'method', value: 'Understand → model → build → maintain' },
      ],
    },
    {
      id: 'craft',
      numeral: 'II',
      title: 'The craft',
      folioLeft: 5,
      folioRight: 6,
      tocLabel: 'The craft',
      tocPage: '05',
      prose: [
        'Back-end is where I live. APIs, data, what holds a product up underneath. I like code someone else can read, maintain, and evolve without fear.',
      ],
      marginalia: { text: 'craft: doing it well, not just making it work.' },
      dataList: [
        { key: 'stack', value: 'Node · TypeScript · NestJS' },
        { key: 'data', value: 'PostgreSQL · MongoDB · events' },
        { key: 'infra', value: 'Docker · AWS · CI/CD' },
        { key: 'practice', value: 'Testing · code review · DDD' },
      ],
    },
    {
      id: 'production',
      numeral: 'III',
      title: 'In production',
      folioLeft: 7,
      folioRight: 8,
      tocLabel: 'In production',
      tocPage: '07',
      prose: [
        'I have built and kept critical systems running — from the repository to deploy, under real load, where a failure actually costs something. That teaches reliability in a way no course does.',
      ],
      marginalia: { text: 'keeping it standing is as noble as building it.' },
      dataList: [
        {
          key: 'scale',
          value: 'Microservices in production, high-volume deploys',
        },
        { key: 'trust', value: 'Observability: monitor, diagnose, prevent' },
        { key: 'team', value: 'Led a team at a hackathon; I pull my weight' },
      ],
    },
  ],
  contact: {
    id: 'contact',
    numeral: 'IV',
    title: 'Contact',
    folioLeft: 9,
    folioRight: 10,
    tocLabel: 'Contact',
    tocPage: '09',
    prose: [
      'Open to good conversations about product, back-end, and things built well.',
    ],
    links: [
      {
        label: 'email',
        href: __site.links.profile.email.raferdev,
        value: 'contact@rafer.dev',
      },
      {
        label: 'linkedin',
        href: __site.links.profile.linkedin,
        value: '/in/raferdev',
      },
      {
        label: 'github',
        href: __site.links.profile.github,
        value: '/raferdev',
      },
    ],
    closing: {
      heading: 'Thanks for\nreading.',
      note: '— continues in the next edition.',
    },
  },
}

export { book }
export type { BookContent }
