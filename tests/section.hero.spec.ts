import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Hero', () => {
  const HEADLINE = 'I solve problems. I build products.'
  const SUMMARY =
    'End-to-end product engineering, with a strong foundation in backend systems, architecture and production.'
  const NAME = 'Rafael Fernandes'

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Headline to be the page h1', async ({ page }) => {
    const headline = page.getByRole('heading', { level: 1 })

    await expect(headline).toHaveCount(1)
    await expect(headline).toHaveText(HEADLINE)
  })

  test('Expected - Summary and focus areas to be visible', async ({ page }) => {
    const hero = page.locator('#top')

    await expect(hero.getByText(SUMMARY)).toBeVisible()
    await expect(
      hero.getByText('Backend / System design / Product')
    ).toBeVisible()
  })

  test('Expected - Signature to be visible', async ({ page }) => {
    await expect(page.locator('#top').getByText(NAME)).toBeVisible()
  })
})
