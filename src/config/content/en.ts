import { homeAnchor, paths } from '@/config/i18n'

import { legal, links, social } from './shared'
import type { SiteContent } from './types'

const en: SiteContent = {
  ui: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    nav: [
      { id: 'work', label: 'Work', href: homeAnchor('en', 'work') },
      {
        id: 'open-source',
        label: 'Open source',
        href: homeAnchor('en', 'open-source'),
      },
      { id: 'about', label: 'About', href: homeAnchor('en', 'about') },
      { id: 'contact', label: 'Contact', href: homeAnchor('en', 'contact') },
    ],
    language: 'Language',
    theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
    newTab: '(opens in a new tab)',
    stack: 'Stack',
    toolbox: 'Toolbox',
    merged: 'merged',
    prClosed: 'PR closed',
    columns: { contact: 'Contact', social: 'Elsewhere', site: 'Site' },
    privacyChoices: 'Privacy choices',
    consent: {
      text: 'I use Google Analytics to see which projects people read. No ads, nothing is sold, and nothing loads unless you say yes.',
      policy: 'Privacy policy',
      accept: 'Accept',
      decline: 'Decline',
      note: ['your call :)'],
    },
  },

  hero: {
    label: 'product engineer',
    lines: ['I solve problems.', 'I build'],
    highlight: 'products.',
    summary:
      'End-to-end product engineering, with a strong foundation in backend systems, architecture and production.',
    focus: ['Backend', 'System design', 'Product'],
    aside: ['code is just a', 'consequence.'],
    name: legal.owner,
  },

  work: {
    label: 'experience',
    title: 'Real products. Real problems.',
    intro: ['Production changes', 'how you think about software.'],
  },

  experience: [
    {
      id: 'ntt-data',
      period: 'Oct 2026 —',
      role: 'Senior Systems Engineering Consultant',
      company: 'NTT DATA',
      context: 'Multinational IT services · Top Employer certified',
      summary: [
        'Senior consultant on enterprise systems built with Java and React.',
      ],
      stack: ['Java', 'React'],
    },
    {
      id: 'pagaleve',
      period: '2024 — 2026',
      role: 'Software Developer',
      company: 'PagaLeve',
      context: 'Fintech · production systems',
      summary: [
        'Built APIs and microservices from the repository to deploy, in critical systems handling real money.',
        'Took internal projects from zero to production, and owned pipelines, scripts and mass deploys.',
        'Led a team in an internal hackathon.',
      ],
      stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS', 'CI/CD'],
      note: ['reliability', 'isn’t optional.'],
    },
  ],

  openSource: {
    label: 'open source',
    title: 'In the open.',
    intro: ['Working inside other people’s systems', 'is part of the job.'],
    contributions: [
      {
        id: 'nextjs',
        project: 'Next.js',
        org: 'Vercel',
        summary:
          'Updated the OpenTelemetry guide to the non-deprecated service-name attribute.',
        status: 'merged',
        links: [
          {
            id: 'nextjs-pr',
            label: 'PR #63444',
            href: 'https://github.com/vercel/next.js/pull/63444',
          },
          {
            id: 'nextjs-issue',
            label: 'Issue #63443',
            href: 'https://github.com/vercel/next.js/issues/63443',
          },
        ],
      },
      {
        id: 'octokit-oauth-app',
        project: 'oauth-app.js',
        org: 'Octokit · GitHub',
        summary:
          'Made the refresh token optional in the types for GitHub App authentication.',
        status: 'merged',
        links: [
          {
            id: 'oauth-app-pr',
            label: 'PR #494',
            href: 'https://github.com/octokit/oauth-app.js/pull/494',
          },
          {
            id: 'oauth-app-issue',
            label: 'Issue #492',
            href: 'https://github.com/octokit/oauth-app.js/issues/492',
          },
        ],
      },
    ],
    answers: {
      label: 'Stack Overflow',
      summary: 'Four answers, all accepted by the people who asked.',
      profile: links.profile.stackoverflow,
      items: [
        {
          id: 'so-jest-chained-calls',
          label: 'Jest: mocking chained calls',
          href: 'https://stackoverflow.com/questions/79449932/jest-mock-chained-calls/79450174#79450174',
        },
        {
          id: 'so-csp-unsafe-eval',
          label: 'Using CSP with a library that relies on unsafe-eval',
          href: 'https://stackoverflow.com/questions/77680331/using-csp-with-a-library-using-unsafe-eval/77680448#77680448',
        },
        {
          id: 'so-github-actions-two-repos',
          label:
            'Combining two repositories for deployment with GitHub Actions',
          href: 'https://stackoverflow.com/questions/77667914/combining-two-repos-for-deployment-with-github-actions/77668288#77668288',
        },
        {
          id: 'so-next-nested-routes',
          label:
            'Next.js App Router: redirecting all routes to nested dynamic routes',
          href: 'https://stackoverflow.com/questions/77663750/nextjs-app-router-redirect-all-routes-to-two-nested-dynamic-routes-as-root/77664429#77664429',
        },
      ],
    },
  },

  personal: {
    label: 'projects',
    title: 'Built on my own time.',
    intro: ['Personal work,', 'kept in the open.'],
    archive: {
      text: 'Plus 35 smaller full-stack projects — studied, documented and archived before the AI boom.',
      label: 'Browse them on GitHub',
      href: links.profile.archive,
    },
  },

  projects: [
    {
      id: 'myworldx',
      index: '01',
      title: 'MyWorldx',
      subtitle: 'Open source · GitHub content tool',
      status: 'Paused — picking it back up',
      links: [
        { id: 'myworldx-home', label: 'Home', href: links.myworldx.home },
        {
          id: 'myworldx-page',
          label: 'My page',
          href: links.myworldx.raferdev,
        },
        {
          id: 'myworldx-repo',
          label: 'Repository',
          href: links.myworldx.repository,
        },
      ],
      details: [
        {
          label: 'Problem',
          text: 'Showing content that lives in GitHub repositories is harder than it should be.',
        },
        {
          label: 'Outcome',
          text: 'Turns the markdown files in your repositories into a content tree you can organize and share.',
        },
      ],
      stack: ['TypeScript', 'Next.js', 'React', 'Turborepo', 'Vitest'],
      mockup: 'tree',
    },
  ],

  engineering: {
    label: 'engineering',
    title: 'End-to-end product engineering.',
    summary: [
      'I build software end to end, with a strong foundation in backend and system design: REST APIs, microservices and event-driven systems on Node.js, TypeScript, NestJS and Java, all the way to the frontend with React and Next.js.',
      'I care about the product and the people around it, not only the delivery.',
    ],
    principle: [
      'The specific tools change.',
      'The engineering principles don’t.',
    ],
  },

  toolbox: [
    {
      id: 'backend',
      label: 'Backend',
      items: ['Node.js', 'TypeScript', 'NestJS', 'Java'],
    },
    { id: 'frontend', label: 'Frontend', items: ['React', 'Next.js'] },
    { id: 'data', label: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    {
      id: 'architecture',
      label: 'Architecture',
      items: ['REST APIs', 'Microservices', 'Event-driven'],
    },
    {
      id: 'cloud',
      label: 'Cloud',
      items: ['AWS', 'Docker', 'Terraform', 'Serverless'],
    },
    {
      id: 'delivery',
      label: 'Delivery',
      items: ['GitHub Actions', 'CI/CD', 'CloudWatch'],
    },
    {
      id: 'quality',
      label: 'Quality',
      items: ['Jest', 'Playwright', 'Clean Code', 'SOLID', 'DDD'],
    },
    {
      id: 'ai',
      label: 'AI & next',
      items: ['Claude Code', 'Prompt engineering', 'Rust'],
    },
  ],

  journey: {
    label: 'journey',
    title: 'How I got here.',
    story:
      'I started with physics. It taught me to understand a system before trying to change it — a habit I carried into software.',
    steps: [
      {
        id: 'automation',
        period: '2019 — 2020',
        title: 'IT & automation',
        text: 'VBA, Python and spreadsheets at a business telecom reseller (Claro partner). Built the company website, trained the team, and found programming.',
      },
      {
        id: 'physics',
        period: '2020 — 2021',
        title: 'Physics + programming',
        text: 'Studied physics while teaching myself to program.',
      },
      {
        id: 'full-stack',
        period: '2022 — 2024',
        title: 'Full-stack',
        text: 'A full-stack immersion in Node.js and React, then independent projects with Next.js, SQL and NoSQL, AWS and serverless.',
      },
      {
        id: 'production',
        period: '2024 — 2026',
        title: 'Production',
        text: 'APIs and microservices in financial systems at PagaLeve.',
      },
      {
        id: 'senior',
        period: 'Oct 2026 →',
        title: 'Senior systems engineering',
        text: 'Senior consultant at NTT DATA, on Java and React.',
      },
    ],
    facts: [
      {
        id: 'wakatime',
        value: '3,700+',
        label: 'hours of recorded coding since January 2022',
        href: links.profile.wakatime,
      },
      {
        id: 'archive',
        value: '35',
        label: 'full-stack projects built, documented and archived',
        href: links.profile.archive,
      },
    ],
  },

  outside: { label: 'outside the code', title: 'A few things I enjoy' },

  interests: [
    {
      id: 'chess',
      title: 'Chess',
      description:
        'Since 2022. Strategy, patience, iteration — and open to daily games.',
      href: links.chess.invite,
    },
    {
      id: 'running',
      title: 'Running',
      description:
        'Training for a marathon. Long-term consistency over short-term intensity.',
    },
    {
      id: 'guitar',
      title: 'Guitar',
      description: 'A different kind of problem solving.',
    },
    {
      id: 'physics',
      title: 'Physics',
      description:
        'Understanding how things work — systems, networks, computation.',
    },
  ],

  footer: {
    tagline:
      'Product engineer building software end to end, from API to production.',
    location: 'Remote · Brazil (UTC−3)',
    ...legal,
    farewell: ['Thanks for stopping by!'],
    contact: [
      {
        id: 'email',
        label: 'contact@rafer.dev',
        href: links.profile.email.raferdev,
      },
      {
        id: 'whatsapp',
        label: '+55 48 99654-6409',
        href: links.profile.whatsapp,
        external: true,
      },
      { id: 'cv', label: 'CV on request', href: links.profile.email.cv },
    ],
    social,
    site: [
      { id: 'work', label: 'Work', href: homeAnchor('en', 'work') },
      {
        id: 'open-source',
        label: 'Open source',
        href: homeAnchor('en', 'open-source'),
      },
      { id: 'projects', label: 'Projects', href: homeAnchor('en', 'projects') },
      { id: 'about', label: 'About', href: homeAnchor('en', 'about') },
      { id: 'docs', label: 'Docs', href: links.storybook, external: true },
      {
        id: 'source',
        label: 'Source code',
        href: links.self.repository,
        external: true,
      },
      { id: 'privacy', label: 'Privacy policy', href: paths.en.privacy },
    ],
  },
}

export { en }
