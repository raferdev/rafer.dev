import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

test.describe('Book - Table of contents', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
  })

  test('lists all chapters with roman numerals', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
    await expect(page.getByRole('button', { name: /The origin/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /The craft/ })).toBeVisible()
    await expect(
      page.getByRole('button', { name: /In production/ })
    ).toBeVisible()
    await expect(page.getByRole('button', { name: /Contact/ })).toBeVisible()
  })

  test('shows the preface', async ({ page }) => {
    // Contents and preface are separate pages, not a spread.
    await clickPageZone(page, 'right')

    await expect(
      page.getByRole('heading', { name: 'Why a book' })
    ).toBeVisible()
  })

  test('clicking a chapter jumps directly to it', async ({ page }) => {
    await page.getByRole('button', { name: /The craft/ }).click()

    await expect(page.getByRole('heading', { name: 'The craft' })).toBeVisible()
  })
})
