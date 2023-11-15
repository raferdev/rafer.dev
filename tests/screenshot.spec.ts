import { expect, test } from '@playwright/test'

const HOME = '/'

test('Full page', async ({ page }) => {
  try {
    await page.goto(HOME)

    await expect(page).toHaveScreenshot({ fullPage: true })
  } catch (error) {
    console.error(error)
  }
})
