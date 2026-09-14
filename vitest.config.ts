import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults, defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "**/node_modules/**",
      "**/fixtures/**",
      "**/templates/**",
      "**/packages/tests/**",
    ],
    projects: [
      './vitest.config.ts',
      './packages/tests/vitest.config.ts'
    ],
  },
  plugins: [
    tsconfigPaths({
      ignoreConfigErrors: true,
    }),
  ],
  
})
