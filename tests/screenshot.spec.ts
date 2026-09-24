import { expect, test } from '@playwright/test'

const HOME = '/'
const SCHEMES = ['light', 'dark'] as const

test.describe('Screenshot', () => {
  for (const scheme of SCHEMES) {
    test(`Full page (${scheme})`, async ({ page }) => {
      await page.addInitScript(() =>
        localStorage.setItem('rafer.consent', 'denied')
      )
      await page.emulateMedia({ colorScheme: scheme })
      await page.goto(HOME)
      await page.evaluate(() => document.fonts.ready)

      await expect(page).toHaveScreenshot({ fullPage: true, timeout: 10000 })
    })
  }
})
