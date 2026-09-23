import { MetadataRoute } from 'next'

import { __site } from '@/config/site'

const dynamic = 'force-static'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    crawlDelay: 10,
  },
  sitemap: `${__site.metadata.url}/sitemap.xml`,
})

export { dynamic }

export default robots
