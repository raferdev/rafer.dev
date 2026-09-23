import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Engineering', () => {
  const TITLE = 'End-to-end product engineering.'
  const TOOLBOX = [
    'Backend',
    'Frontend',
    'Data',
    'Architecture',
    'Cloud',
    'Delivery',
    'Quality',
    'AI & next',
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Section title to be visible', async ({ page }) => {
    const section = page.locator('#about')

    await expect(section.getByRole('heading', { name: TITLE })).toBeVisible()
  })

  test('Expected - Toolbox categories to be visible', async ({ page }) => {
    const categories = page.locator('#about').getByRole('heading', { level: 4 })

    await expect(categories).toHaveText(TOOLBOX)
  })
})
