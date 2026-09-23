import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Header', () => {
  const NAV_LINKS = ['Work', 'Open source', 'About', 'Contact']

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Brand to link back to the top', async ({ page }) => {
    const brand = page.getByRole('banner').getByRole('link', { name: /RAFAEL/ })

    await expect(brand).toBeVisible()
    await expect(brand).toHaveAttribute('href', '/#top')
  })

  test('Expected - Primary navigation links to be visible', async ({
    page,
  }) => {
    const nav = page.getByRole('navigation', { name: 'Primary' })

    await expect(nav.getByRole('link')).toHaveText(NAV_LINKS)
  })

  test('Expected - Nav link to scroll to its section', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Primary' })

    await nav.getByRole('link', { name: 'About' }).click()

    await expect(page).toHaveURL(/#about$/)
    await expect(page.locator('#about')).toBeInViewport()
  })
})
