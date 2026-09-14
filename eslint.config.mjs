import { config } from "@workspace/eslint-config/base"

/**
 * Root ESLint config.
 *
 * Each workspace owns its own `eslint.config.js`; this one only covers the
 * loose files at the repository root (config files, CI helper scripts) so that
 * `eslint` and lint-staged have something to resolve when they run from here.
 * Without it, ESLint 10 aborts with "couldn't find an eslint.config.* file"
 * the moment a root-level file is staged.
 *
 * @type {import("eslint").Linter.Config[]}
 */
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
