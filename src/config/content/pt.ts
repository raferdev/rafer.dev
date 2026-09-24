import { homeAnchor, paths } from '@/config/i18n'

import { legal, links, social } from './shared'
import type { SiteContent } from './types'

const pt: SiteContent = {
  ui: {
    skipToContent: 'Pular para o conteúdo',
    primaryNav: 'Principal',
    nav: [
      { id: 'work', label: 'Trabalho', href: homeAnchor('pt', 'work') },
      {
        id: 'open-source',
        label: 'Open source',
        href: homeAnchor('pt', 'open-source'),
      },
      { id: 'about', label: 'Sobre', href: homeAnchor('pt', 'about') },
      { id: 'contact', label: 'Contato', href: homeAnchor('pt', 'contact') },
    ],
    language: 'Idioma',
    theme: { label: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Escuro' },
    newTab: '(abre em nova aba)',
    stack: 'Stack',
    toolbox: 'Ferramentas',
    merged: 'mergeado',
    prClosed: 'PR fechado',
    columns: { contact: 'Contato', social: 'Em outros lugares', site: 'Site' },
    privacyChoices: 'Preferências de privacidade',
    consent: {
      text: 'Uso o Google Analytics para ver quais projetos as pessoas leem. Sem anúncios, nada é vendido, e nada carrega sem o seu sim.',
      policy: 'Política de privacidade',
      accept: 'Aceitar',
      decline: 'Recusar',
      note: ['você decide :)'],
    },
  },

  hero: {
    label: 'product engineer',
    lines: ['Resolvo problemas.', 'Construo'],
    highlight: 'produtos.',
    summary:
      'Engenharia de produto de ponta a ponta, com base sólida em sistemas backend, arquitetura e produção.',
    focus: ['Backend', 'System design', 'Produto'],
    aside: ['código é só uma', 'consequência.'],
    name: legal.owner,
  },

  work: {
    label: 'experiência',
    title: 'Produtos reais. Problemas reais.',
    intro: ['Produção muda', 'o jeito de pensar software.'],
  },

  experience: [
    {
      id: 'ntt-data',
      period: 'Out 2026 —',
      role: 'Consultor em Engenharia de Sistemas Sênior',
      company: 'NTT DATA',
      context: 'Multinacional de serviços de TI · certificada Top Employer',
      summary: ['Consultor sênior em sistemas corporativos com Java e React.'],
      stack: ['Java', 'React'],
    },
    {
      id: 'pagaleve',
      period: '2024 — 2026',
      role: 'Desenvolvedor de Software',
      company: 'PagaLeve',
      context: 'Fintech · sistemas em produção',
      summary: [
        'Construí APIs e microsserviços do repositório ao deploy, em sistemas críticos que movimentam dinheiro de verdade.',
        'Levei projetos internos do zero à produção e cuidei de pipelines, scripts e deploys em massa.',
        'Liderei uma equipe em um hackathon interno.',
      ],
      stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS', 'CI/CD'],
      note: ['confiabilidade', 'não é opcional.'],
    },
  ],

  openSource: {
    label: 'open source',
    title: 'Em público.',
    intro: ['Trabalhar dentro do sistema dos outros', 'faz parte do trabalho.'],
    contributions: [
      {
        id: 'nextjs',
        project: 'Next.js',
        org: 'Vercel',
        summary:
          'Atualizei o guia de OpenTelemetry para o atributo de nome de serviço que não foi descontinuado.',
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
          'Tornei o refresh token opcional nos tipos da autenticação de GitHub Apps.',
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
      summary: 'Quatro respostas, todas aceitas por quem perguntou.',
      profile: links.profile.stackoverflow,
      items: [
        {
          id: 'so-jest-chained-calls',
          label: 'Jest: mock de chamadas encadeadas',
          href: 'https://stackoverflow.com/questions/79449932/jest-mock-chained-calls/79450174#79450174',
        },
        {
          id: 'so-csp-unsafe-eval',
          label: 'CSP com uma biblioteca que depende de unsafe-eval',
          href: 'https://stackoverflow.com/questions/77680331/using-csp-with-a-library-using-unsafe-eval/77680448#77680448',
        },
        {
          id: 'so-github-actions-two-repos',
          label: 'Juntando dois repositórios no deploy com GitHub Actions',
          href: 'https://stackoverflow.com/questions/77667914/combining-two-repos-for-deployment-with-github-actions/77668288#77668288',
        },
        {
          id: 'so-next-nested-routes',
          label:
            'Next.js App Router: redirecionando todas as rotas para rotas dinâmicas aninhadas',
          href: 'https://stackoverflow.com/questions/77663750/nextjs-app-router-redirect-all-routes-to-two-nested-dynamic-routes-as-root/77664429#77664429',
        },
      ],
    },
  },

  personal: {
    label: 'projetos',
    title: 'Feito por conta própria.',
    intro: ['Projetos pessoais,', 'com código aberto.'],
    archive: {
      text: 'E mais 35 projetos full-stack menores — estudados, documentados e arquivados antes do boom da IA.',
      label: 'Ver no GitHub',
      href: links.profile.archive,
    },
  },

  projects: [
    {
      id: 'myworldx',
      index: '01',
      title: 'MyWorldx',
      subtitle: 'Open source · ferramenta de conteúdo para o GitHub',
      status: 'Pausado — retomando em breve',
      links: [
        { id: 'myworldx-home', label: 'Site', href: links.myworldx.home },
        {
          id: 'myworldx-page',
          label: 'Minha página',
          href: links.myworldx.raferdev,
        },
        {
          id: 'myworldx-repo',
          label: 'Repositório',
          href: links.myworldx.repository,
        },
      ],
      details: [
        {
          label: 'Problema',
          text: 'Mostrar conteúdo que vive em repositórios do GitHub é mais difícil do que deveria.',
        },
        {
          label: 'Resultado',
          text: 'Transforma os arquivos markdown dos seus repositórios em uma árvore de conteúdo que você organiza e compartilha.',
        },
      ],
      stack: ['TypeScript', 'Next.js', 'React', 'Turborepo', 'Vitest'],
      mockup: 'tree',
    },
  ],

  engineering: {
    label: 'engenharia',
    title: 'Engenharia de produto de ponta a ponta.',
    summary: [
      'Construo software de ponta a ponta, com base sólida em backend e system design: APIs REST, microsserviços e sistemas orientados a eventos com Node.js, TypeScript, NestJS e Java, até o frontend com React e Next.js.',
      'Me importo com o produto e com as pessoas ao redor dele, não só com a entrega.',
    ],
    principle: ['As ferramentas mudam.', 'Os princípios de engenharia, não.'],
  },

  toolbox: [
    {
      id: 'backend',
      label: 'Backend',
      items: ['Node.js', 'TypeScript', 'NestJS', 'Java'],
    },
    { id: 'frontend', label: 'Frontend', items: ['React', 'Next.js'] },
    { id: 'data', label: 'Dados', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    {
      id: 'architecture',
      label: 'Arquitetura',
      items: ['APIs REST', 'Microsserviços', 'Orientado a eventos'],
    },
    {
      id: 'cloud',
      label: 'Cloud',
      items: ['AWS', 'Docker', 'Terraform', 'Serverless'],
    },
    {
      id: 'delivery',
      label: 'Entrega',
      items: ['GitHub Actions', 'CI/CD', 'CloudWatch'],
    },
    {
      id: 'quality',
      label: 'Qualidade',
      items: ['Jest', 'Playwright', 'Clean Code', 'SOLID', 'DDD'],
    },
    {
      id: 'ai',
      label: 'IA & próximos',
      items: ['Claude Code', 'Engenharia de prompt', 'Rust'],
    },
  ],

  journey: {
    label: 'trajetória',
    title: 'Como cheguei aqui.',
    story:
      'Comecei pela física. Ela me ensinou a entender um sistema antes de tentar mudá-lo — um hábito que levei para o software.',
    steps: [
      {
        id: 'automation',
        period: '2019 — 2020',
        title: 'TI & automação',
        text: 'VBA, Python e planilhas numa revenda de telefonia empresarial (parceira Claro). Fiz o site da empresa, treinei o time e descobri a programação.',
      },
      {
        id: 'physics',
        period: '2020 — 2021',
        title: 'Física + programação',
        text: 'Estudei física enquanto aprendia a programar por conta própria.',
      },
      {
        id: 'full-stack',
        period: '2022 — 2024',
        title: 'Full-stack',
        text: 'Uma imersão full-stack em Node.js e React, depois projetos independentes com Next.js, SQL e NoSQL, AWS e serverless.',
      },
      {
        id: 'production',
        period: '2024 — 2026',
        title: 'Produção',
        text: 'APIs e microsserviços em sistemas financeiros na PagaLeve.',
      },
      {
        id: 'senior',
        period: 'Out 2026 →',
        title: 'Engenharia de sistemas sênior',
        text: 'Consultor sênior na NTT DATA, com Java e React.',
      },
    ],
    facts: [
      {
        id: 'wakatime',
        value: '3.700+',
        label: 'horas de código registradas desde janeiro de 2022',
        href: links.profile.wakatime,
      },
      {
        id: 'archive',
        value: '35',
        label: 'projetos full-stack construídos, documentados e arquivados',
        href: links.profile.archive,
      },
    ],
  },

  outside: { label: 'fora do código', title: 'Algumas coisas de que gosto' },

  interests: [
    {
      id: 'chess',
      title: 'Xadrez',
      description:
        'Desde 2022. Estratégia, paciência, iteração — e aberto a partidas diárias.',
      href: links.chess.invite,
    },
    {
      id: 'running',
      title: 'Corrida',
      description:
        'Treinando para uma maratona. Constância no longo prazo acima de intensidade no curto.',
    },
    {
      id: 'guitar',
      title: 'Violão',
      description: 'Outro jeito de resolver problemas.',
    },
    {
      id: 'physics',
      title: 'Física',
      description:
        'Entender como as coisas funcionam — sistemas, redes, computação.',
    },
  ],

  footer: {
    tagline:
      'Product engineer construindo software de ponta a ponta, da API à produção.',
    location: 'Remoto · Brasil (UTC−3)',
    ...legal,
    farewell: ['Obrigado pela visita!'],
    contact: [
      {
        id: 'email',
        label: 'contact@rafer.dev',
        href: links.profile.email.pt,
      },
      {
        id: 'whatsapp',
        label: '+55 48 99654-6409',
        href: links.profile.whatsapp,
        external: true,
      },
      { id: 'cv', label: 'CV sob pedido', href: links.profile.email.cvPt },
    ],
    social,
    site: [
      { id: 'work', label: 'Trabalho', href: homeAnchor('pt', 'work') },
      {
        id: 'open-source',
        label: 'Open source',
        href: homeAnchor('pt', 'open-source'),
      },
      { id: 'projects', label: 'Projetos', href: homeAnchor('pt', 'projects') },
      { id: 'about', label: 'Sobre', href: homeAnchor('pt', 'about') },
      { id: 'docs', label: 'Docs', href: links.storybook, external: true },
      {
        id: 'source',
        label: 'Código-fonte',
        href: links.self.repository,
        external: true,
      },
      {
        id: 'privacy',
        label: 'Política de privacidade',
        href: paths.pt.privacy,
      },
    ],
  },
}

export { pt }
