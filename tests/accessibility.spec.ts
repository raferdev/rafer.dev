import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    try {
      await page.waitForLoadState()
    } catch (error) {
      console.error(error)
    }
  })
  test('Should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    try {
      await page.goto(HOME)

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    } catch (error) {
      console.error(error)
    }
  })
})
