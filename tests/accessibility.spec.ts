import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const PAGES = ['/', '/privacy', '/pt', '/pt/privacidade']

test.describe('Accessibility', () => {
  for (const path of PAGES) {
    test(`Should not have any automatically detectable accessibility issues on ${path}`, async ({
      page,
    }) => {
      await page.goto(path)
      await page.waitForLoadState()

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  }
})
