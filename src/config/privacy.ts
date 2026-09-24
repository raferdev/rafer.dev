import { legal } from '@/config/content/shared'
import { paths } from '@/config/i18n'

type PolicySection = {
  id: string
  title: string
  paragraphs: string[]
  list?: string[]
  after?: string[]
}

type Policy = {
  lang: 'en' | 'pt-BR'
  label: string
  title: string
  description: string
  updated: string
  path: string
  intro: string[]
  sections: PolicySection[]
  controller: { title: string; email: string }
  choices: string
  alternate: { label: string; href: string; lang: 'en' | 'pt-BR' }
}

const { company, cnpj, owner } = legal
const email = 'contact@rafer.dev'

const en: Policy = {
  lang: 'en',
  label: 'privacy',
  title: 'Privacy policy',
  description:
    'What data rafer.dev collects, why, and what you can do about it.',
  updated: 'Last updated: September 23, 2026',
  path: paths.en.privacy,
  intro: [
    'This policy explains what data rafer.dev collects, why, and what you can do about it.',
    `The site is run by ${company} (CNPJ ${cnpj}), the company of ${owner}, which acts as the controller of this data under Brazil’s General Data Protection Law (LGPD, Law 13.709/2018).`,
  ],
  sections: [
    {
      id: 'collected',
      title: 'What is collected',
      paragraphs: [
        'Nothing, unless you accept analytics. Until you do, no analytics script is loaded and no tracking cookie is set.',
        'If you accept, Google Analytics 4 records how the site is used:',
      ],
      list: [
        'pages and sections viewed;',
        'links clicked, such as a project or a contact channel;',
        'approximate location (country and city, derived from your IP address);',
        'device type, operating system and browser;',
        'the site that referred you.',
      ],
      after: [
        'Your answer to the consent banner is kept in your browser’s local storage, under the key “rafer.consent”, so you aren’t asked again. If you pick a language or a light or dark theme, those choices are kept the same way, under “rafer.lang” and “rafer.theme”. None of them ever leaves your device.',
      ],
    },
    {
      id: 'purpose',
      title: 'Why, and on what legal basis',
      paragraphs: [
        'To understand which content is useful and to improve the site. The legal basis is your consent (LGPD, article 7, I).',
        'The data is not used for advertising, is not sold, and is not shared for marketing. Google’s advertising features are turned off.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      paragraphs: [
        '“_ga” and “_ga_<ID>” are set by Google Analytics, only after you accept, to tell visits apart. They last up to 2 years, or until you decline or clear them.',
      ],
    },
    {
      id: 'processors',
      title: 'Who processes the data',
      paragraphs: [
        'Google LLC provides Google Analytics and may process the data on servers outside Brazil, including in the United States, under its own data protection terms.',
        'Analytics data is kept no longer than Google Analytics’ retention period, which is 14 months at most.',
        'The web server that delivers this site is configured not to keep access logs. As on any website, your IP address is used to deliver the pages, but this site doesn’t store it.',
      ],
    },
    {
      id: 'links',
      title: 'Links to other sites',
      paragraphs: [
        'Links to GitHub, LinkedIn, WhatsApp, YouTube, Instagram, chess.com and other services take you to sites with their own privacy policies.',
      ],
    },
    {
      id: 'rights',
      title: 'Your rights',
      paragraphs: [
        'Under the LGPD you can ask whether data about you is processed, and to access, correct or delete it. You can also withdraw your consent at any time.',
        'To withdraw consent, use “Privacy choices” below or at the bottom of any page. Declining stops analytics and deletes its cookies.',
        `For any other request, email ${email}. You can also file a complaint with Brazil’s data protection authority (ANPD).`,
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: [
        'If this policy changes, the date at the top of this page is updated.',
      ],
    },
  ],
  controller: { title: 'Controller', email },
  choices: 'Privacy choices',
  alternate: {
    label: 'Leia em português',
    href: paths.pt.privacy,
    lang: 'pt-BR',
  },
}

const pt: Policy = {
  lang: 'pt-BR',
  label: 'privacidade',
  title: 'Política de privacidade',
  description:
    'Quais dados o rafer.dev coleta, por quê, e o que você pode fazer a respeito.',
  updated: 'Última atualização: 23 de setembro de 2026',
  path: paths.pt.privacy,
  intro: [
    'Esta política explica quais dados o rafer.dev coleta, por quê, e o que você pode fazer a respeito.',
    `O site é mantido pela ${company} (CNPJ ${cnpj}), empresa de ${owner}, que atua como controladora desses dados nos termos da Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).`,
  ],
  sections: [
    {
      id: 'collected',
      title: 'O que é coletado',
      paragraphs: [
        'Nada, a menos que você aceite a análise de uso. Até lá, nenhum script de análise é carregado e nenhum cookie de rastreamento é criado.',
        'Se você aceitar, o Google Analytics 4 registra como o site é usado:',
      ],
      list: [
        'páginas e seções visualizadas;',
        'links clicados, como um projeto ou um canal de contato;',
        'localização aproximada (país e cidade, a partir do seu endereço IP);',
        'tipo de dispositivo, sistema operacional e navegador;',
        'o site que trouxe você até aqui.',
      ],
      after: [
        'Sua resposta ao aviso de consentimento fica guardada no armazenamento local do seu navegador, na chave “rafer.consent”, para que a pergunta não se repita. Se você escolher um idioma ou um tema claro ou escuro, essas escolhas ficam guardadas do mesmo jeito, nas chaves “rafer.lang” e “rafer.theme”. Nenhuma delas sai do seu dispositivo.',
      ],
    },
    {
      id: 'purpose',
      title: 'Finalidade e base legal',
      paragraphs: [
        'Entender quais conteúdos são úteis e melhorar o site. A base legal é o seu consentimento (LGPD, art. 7º, I).',
        'Os dados não são usados para publicidade, não são vendidos e não são compartilhados para marketing. Os recursos de publicidade do Google estão desativados.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      paragraphs: [
        '“_ga” e “_ga_<ID>” são criados pelo Google Analytics, somente depois que você aceita, para diferenciar visitas. Duram até 2 anos, ou até você recusar ou apagá-los.',
      ],
    },
    {
      id: 'processors',
      title: 'Quem trata os dados',
      paragraphs: [
        'O Google LLC fornece o Google Analytics e pode tratar os dados em servidores fora do Brasil, inclusive nos Estados Unidos, conforme os próprios termos de proteção de dados.',
        'Os dados de análise são mantidos por no máximo o período de retenção do Google Analytics, que é de até 14 meses.',
        'O servidor que entrega este site é configurado para não guardar logs de acesso. Como em qualquer site, seu endereço IP é usado para entregar as páginas, mas este site não o armazena.',
      ],
    },
    {
      id: 'links',
      title: 'Links para outros sites',
      paragraphs: [
        'Os links para GitHub, LinkedIn, WhatsApp, YouTube, Instagram, chess.com e outros serviços levam a sites com políticas de privacidade próprias.',
      ],
    },
    {
      id: 'rights',
      title: 'Seus direitos',
      paragraphs: [
        'Pela LGPD, você pode confirmar se dados seus são tratados, e pedir acesso, correção ou exclusão. Também pode retirar o consentimento a qualquer momento.',
        'Para retirar o consentimento, use “Preferências de privacidade” abaixo ou no rodapé de qualquer página. Recusar interrompe a análise de uso e apaga os cookies dela.',
        `Para qualquer outro pedido, escreva para ${email}. Você também pode registrar uma reclamação na Autoridade Nacional de Proteção de Dados (ANPD).`,
      ],
    },
    {
      id: 'changes',
      title: 'Alterações nesta política',
      paragraphs: [
        'Se esta política mudar, a data no topo desta página é atualizada.',
      ],
    },
  ],
  controller: { title: 'Controladora', email },
  choices: 'Preferências de privacidade',
  alternate: { label: 'Read in English', href: paths.en.privacy, lang: 'en' },
}

const privacy = { en, pt }

export { privacy }
export type { Policy, PolicySection }
