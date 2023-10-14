import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const __env = createEnv({
  server: {
    NODE_ENV: z.enum(['production', 'development']),
    DEPLOY_STAGE: z.enum(['production', 'development', 'test']),
    PORT: z.string(),
  },

  client: {
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: z.string(),
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: z.string(),
    NEXT_PUBLIC_DATADOG_SITE: z.string(),
    NEXT_PUBLIC_DATADOG_ENV: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DEPLOY_STAGE: process.env.DEPLOY_STAGE,
    PORT: process.env.PORT,
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN:
      process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
    NEXT_PUBLIC_DATADOG_APPLICATION_ID:
      process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
    NEXT_PUBLIC_DATADOG_SITE: process.env.NEXT_PUBLIC_DATADOG_SITE,
    NEXT_PUBLIC_DATADOG_ENV: process.env.NEXT_PUBLIC_DATADOG_ENV,
  },
})
