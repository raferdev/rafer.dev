import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

test.describe('Screenshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
  })

  test('Every page of the book', async ({ page }) => {
    await page.getByRole('button', { name: /^Jump to page/ }).click()
    const total = await page.getByRole('option').count()
    await page.keyboard.press('Escape')

    for (let index = 0; index < total; index += 1) {
      await page.waitForTimeout(700)
      await expect(page).toHaveScreenshot(`page-${index}.png`)

      if (index < total - 1) {
        await clickPageZone(page, 'right')
      }
    }
  })
})
