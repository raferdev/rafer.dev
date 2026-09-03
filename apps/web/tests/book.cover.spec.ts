import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

test.describe('Book - Cover', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
    await page.getByTestId('active-page').waitFor()
  })

  test('shows the name, role and manifesto', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()
    await expect(page.getByText('Product Engineer')).toBeVisible()
    await expect(page.getByText('a book about building')).toBeVisible()
    await expect(page.getByText('people')).toBeVisible()
  })

  test('clicking left on the first page does not go further back', async ({
    page,
  }) => {
    await clickPageZone(page, 'left')

    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()
  })

  test('clicking right advances to the next page', async ({ page }) => {
    await clickPageZone(page, 'right')

    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
  })
})
