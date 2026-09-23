import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Outside the code', () => {
  const TITLE = 'A few things I enjoy'
  const INTERESTS = ['Chess', 'Running', 'Guitar', 'Physics']

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Section title to be visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: TITLE })).toBeVisible()
  })

  test('Expected - Interests to be listed', async ({ page }) => {
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: TITLE }),
    })

    await expect(section.getByRole('heading', { level: 3 })).toContainText(
      INTERESTS
    )
  })

  test('Expected - Chess to link to a game invite', async ({ page }) => {
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: TITLE }),
    })

    await expect(section.getByRole('link', { name: /Chess/ })).toHaveAttribute(
      'href',
      /chess\.com/
    )
  })
})
