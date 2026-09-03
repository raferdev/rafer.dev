import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState()
  })
  test('Should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto(HOME)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
