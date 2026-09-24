import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const PAGES = ['/', '/privacy', '/pt', '/pt/privacidade']
const SCHEMES = ['light', 'dark'] as const

test.describe('Accessibility', () => {
  for (const scheme of SCHEMES) {
    for (const path of PAGES) {
      test(`Should not have any automatically detectable accessibility issues on ${path} (${scheme})`, async ({
        page,
      }) => {
        await page.emulateMedia({ colorScheme: scheme })
        await page.goto(path)
        await page.waitForLoadState()
        await expect(page.locator('html')).toHaveAttribute('data-theme', scheme)

        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze()

        expect(accessibilityScanResults.violations).toEqual([])
      })
    }
  }
})
