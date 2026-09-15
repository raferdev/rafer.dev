import { config } from "@workspace/eslint-config/base"

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/.turbo/**",
      "**/coverage/**",
      "apps/**",
      "packages/**",
      "skills/**",
      "infra/**",
    ],
  },
  ...config,
  {
    files: [".github/**/*.js", "*.cjs"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        module: "writable",
        require: "readonly",
      },
    },
  },
]
