import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

test.describe('Book - Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
    await page.getByRole('button', { name: /Contact/ }).click()
  })

  test('shows contact links with the correct destinations', async ({
    page,
  }) => {
    await expect(page.getByRole('link', { name: /^email/ })).toHaveAttribute(
      'href',
      /^mailto:contact@rafer\.dev/
    )
    await expect(page.getByRole('link', { name: /^linkedin/ })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/raferdev'
    )
    await expect(page.getByRole('link', { name: /^github/ })).toHaveAttribute(
      'href',
      'https://github.com/raferdev'
    )
  })

  test('shows the closing note', async ({ page }) => {
    // Links and the closing note are separate pages.
    await clickPageZone(page, 'right')

    await expect(page.getByText('Thanks for')).toBeVisible()
    await expect(page.getByText('continues in the next edition.')).toBeVisible()
  })
})
