import packageJson from '@/../package.json'

const { version } = packageJson

const __site = {
  metadata: {
    name: 'Software Engineer | Raferdev',
    description: 'An open source landing page of Raferdev Software Engineer.',
    url: 'https://rafer.dev',
    ogImage: 'https://rafer.dev/og.jpg',
    links: {
      twitter: 'https://twitter.com/raferdev',
      github: 'https://github.com/raferdev/landing-page',
    },
  },
  rum: { version },
  links: {
    wakatime: {
      profile: 'https://wakatime.com/@ac875cb4-d4ee-453f-b6fc-44cb2103c59d',
      badge:
        'https://wakatime.com/badge/user/ac875cb4-d4ee-453f-b6fc-44cb2103c59d.svg',
    },
    myworldx: {
      home: 'https://myworldx.com',
      raferdev: 'https://myworldx.com/raferdev',
      repository: 'https://github.com/myworldx/myworldx',
    },
    chess: {
      invite:
        'https://www.chess.com/play/online/new?isInvited=1&opponent=raferdev',
    },
    self: {
      repository: 'https://github.com/raferdev/landing-page',
    },
    profile: {
      github: 'https://github.com/raferdev',
      youtube: 'https://www.youtube.com/channel/UClg1tYQi4CvnPRL2SAswVcg',
      linkedin: 'https://linkedin.com/in/raferdev',
      email: {
        raferdev:
          'mailto:contact@rafer.dev?subject=Contact&body=Hello, i want to talk about...',
      },
      twitter: 'https://twitter.com/raferdev',

      instagram: 'https://instagram.com/raferdev',
    },
    storybook: 'https://storybook.rafer.dev',
  },
}

export { __site }
