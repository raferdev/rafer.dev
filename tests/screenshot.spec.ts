import { expect, test } from '@playwright/test'

test('Full page', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveScreenshot({ fullPage: true })
})
