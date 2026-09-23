import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Journey', () => {
  const STEPS = [
    'IT & automation',
    'Physics + programming',
    'Full-stack',
    'Production',
    'Senior systems engineering',
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Steps to be told in order', async ({ page }) => {
    await expect(page.locator('#journey ol > li h3')).toHaveText(STEPS)
  })

  test('Expected - Physics story to be visible', async ({ page }) => {
    await expect(
      page.locator('#journey').getByText(/I started with physics/)
    ).toBeVisible()
  })

  test('Expected - Facts to link to their source', async ({ page }) => {
    const section = page.locator('#journey')

    await expect(
      section.getByRole('link', { name: /3,700\+/ })
    ).toHaveAttribute('href', 'https://wakatime.com/@raferdev')
    await expect(section.getByRole('link', { name: /^35 / })).toHaveAttribute(
      'href',
      /type=archived/
    )
  })
})
