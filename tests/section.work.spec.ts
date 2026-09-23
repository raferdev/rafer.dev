import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Experience', () => {
  const TITLE = 'Real products. Real problems.'
  const ROLES = ['Senior Systems Engineering Consultant', 'Software Developer']
  const COMPANIES = ['NTT DATA', 'PagaLeve']

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Section title to be visible', async ({ page }) => {
    const section = page.locator('#work')

    await expect(section.getByRole('heading', { name: TITLE })).toBeVisible()
  })

  test('Expected - Roles to be listed, most recent first', async ({ page }) => {
    await expect(page.locator('#work ol > li h3')).toHaveText(ROLES)
  })

  test('Expected - Each role to name its company and stack', async ({
    page,
  }) => {
    const rows = page.locator('#work ol > li')

    await expect(rows).toHaveCount(COMPANIES.length)

    for (let index = 0; index < COMPANIES.length; index++) {
      const row = rows.nth(index)

      await expect(
        row.getByText(COMPANIES[index], { exact: true })
      ).toBeVisible()
      await expect(
        row.getByRole('heading', { name: 'Stack', exact: true })
      ).toBeVisible()
    }
  })
})
