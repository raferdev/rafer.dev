import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const __env = createEnv({
  server: {
    NODE_ENV: z.enum(['production', 'development']),
  },

  client: {
    NEXT_PUBLIC_GA_SRC: z.string(),
    NEXT_PUBLIC_GA_TAG_ID: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GA_SRC: process.env.NEXT_PUBLIC_GA_SRC,
    NEXT_PUBLIC_GA_TAG_ID: process.env.NEXT_PUBLIC_GA_TAG_ID,
  },
})

export { __env }
