import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    crawlDelay: 10,
  },
  sitemap: 'https://acme.com/sitemap.xml',
})

export default robots
