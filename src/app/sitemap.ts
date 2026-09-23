import { MetadataRoute } from 'next'

import { locales, paths } from '@/config/i18n'
import { __site } from '@/config/site'

const { url } = __site.metadata

const dynamic = 'force-static'

const priority = { home: 1, privacy: 0.3 }

const sitemap = (): MetadataRoute.Sitemap =>
  locales.flatMap((locale) =>
    (Object.keys(paths[locale]) as (keyof typeof priority)[]).map((page) => ({
      url: `${url}${paths[locale][page] === '/' ? '' : paths[locale][page]}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: priority[page],
    }))
  )

export { dynamic }

export default sitemap
