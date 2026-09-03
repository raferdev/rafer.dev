import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

test.describe('Book - Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
    await page.getByTestId('active-page').waitFor()
  })

  test('clicking the right side advances a page', async ({ page }) => {
    await clickPageZone(page, 'right')

    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
  })

  test('clicking the left side goes back a page', async ({ page }) => {
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()

    await clickPageZone(page, 'left')
    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()
  })

  test('clicking a link or button does not also turn the page', async ({
    page,
  }) => {
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()

    // If this click fell through to the page-turn handler as well as the
    // button's own handler, we'd land one page off from chapter III.
    await page.getByRole('button', { name: /In production/ }).click()

    await expect(
      page.getByRole('heading', { name: 'In production' })
    ).toBeVisible()
  })

  test('keyboard arrows change pages', async ({ page }) => {
    // A click confirms hydration finished (Playwright retries clicks until
    // the handler is wired up); a raw keyboard.press() has no such retry,
    // so only start pressing keys once we know listeners are attached.
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
    await clickPageZone(page, 'left')
    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()

    await page.keyboard.press('ArrowRight')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()

    await page.keyboard.press('ArrowLeft')
    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()
  })

  test('clicking right on the last page does not advance further', async ({
    page,
  }) => {
    await page.getByRole('button', { name: /^Jump to page/ }).click()
    const options = page.getByRole('option')
    const lastIndex = (await options.count()) - 1
    await options.nth(lastIndex).click()

    await expect(page.getByText('Thanks for')).toBeVisible()

    await clickPageZone(page, 'right')
    await expect(page.getByText('Thanks for')).toBeVisible()
  })

  test('the page menu reflects the current page', async ({ page }) => {
    await clickPageZone(page, 'right')

    await expect(
      page.getByRole('button', { name: /^Jump to page.*page 2, Contents/ })
    ).toBeVisible()

    await page.getByRole('button', { name: /^Jump to page/ }).click()
    await expect(
      page.getByRole('option', { name: /Contents/ })
    ).toHaveAttribute('aria-selected', 'true')
  })

  test('clicking the page while the menu is open closes it without turning the page', async ({
    page,
  }) => {
    await page.getByRole('button', { name: /^Jump to page/ }).click()
    await expect(page.getByRole('listbox')).toBeVisible()

    await clickPageZone(page, 'left')

    await expect(page.getByRole('listbox')).toBeHidden()
    await expect(
      page.getByRole('heading', { name: 'Rafael', level: 1 })
    ).toBeVisible()
  })
})
