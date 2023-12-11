import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Screenshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    const sizes = await page.evaluate(() => {
      const browserHeight = window.innerHeight
      const pageHeight = document.body.scrollHeight

      return { browserHeight, pageHeight }
    })

    for (let i = 0; i < sizes.pageHeight; i += sizes.browserHeight) {
      await page.mouse.wheel(0, i)
      console.log('scrolled to', i)
      await page.waitForTimeout(1000)
    }
  })

  test('Full page', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true, timeout: 10000 })
  })
})
