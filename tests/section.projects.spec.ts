import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Projects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - MyWorldx to be the featured project', async ({ page }) => {
    await expect(page.locator('#projects ol > li h3')).toHaveText(['MyWorldx'])
  })

  test('Expected - MyWorldx to link home, page and repository', async ({
    page,
  }) => {
    const row = page.locator('#projects ol > li').first()

    await expect(row.getByText('Paused — picking it back up')).toBeVisible()
    await expect(row.getByRole('link', { name: /^Home/ })).toHaveAttribute(
      'href',
      'https://myworldx.com'
    )
    await expect(row.getByRole('link', { name: /^My page/ })).toHaveAttribute(
      'href',
      'https://myworldx.com/raferdev'
    )
    await expect(
      row.getByRole('link', { name: /^Repository/ })
    ).toHaveAttribute('href', 'https://github.com/myworldx/myworldx')
  })

  test('Expected - Archive to link to the archived repositories', async ({
    page,
  }) => {
    await expect(
      page
        .locator('#projects')
        .getByRole('link', { name: /Browse them on GitHub/ })
    ).toHaveAttribute('href', /type=archived/)
  })
})
