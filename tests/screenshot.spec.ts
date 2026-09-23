import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Screenshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem('rafer.consent', 'denied')
    )
    await page.goto(HOME)
    await page.evaluate(() => document.fonts.ready)
  })

  test('Full page', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true, timeout: 10000 })
  })
})
