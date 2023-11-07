import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://rafer.dev',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
]

export default sitemap
