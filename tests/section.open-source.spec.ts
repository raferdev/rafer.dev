import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Open source', () => {
  const CONTRIBUTIONS = [
    {
      project: 'Next.js',
      status: 'merged',
      pr: 'https://github.com/vercel/next.js/pull/63444',
    },
    {
      project: 'oauth-app.js',
      status: 'merged',
      pr: 'https://github.com/octokit/oauth-app.js/pull/494',
    },
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Section title to be visible', async ({ page }) => {
    await expect(
      page
        .locator('#open-source')
        .getByRole('heading', { name: 'In the open.' })
    ).toBeVisible()
  })

  test('Expected - Contributions show their real status', async ({ page }) => {
    const items = page.locator('#open-source ul').first().locator('> li')

    await expect(items).toHaveCount(CONTRIBUTIONS.length)

    for (let index = 0; index < CONTRIBUTIONS.length; index++) {
      const { project, status, pr } = CONTRIBUTIONS[index]
      const item = items.nth(index)

      await expect(item.getByRole('heading', { name: project })).toBeVisible()
      await expect(item.getByText(status, { exact: true })).toBeVisible()
      await expect(item.getByRole('link', { name: /^PR #/ })).toHaveAttribute(
        'href',
        pr
      )
    }
  })

  test('Expected - Stack Overflow answers to be linked', async ({ page }) => {
    const answers = page.locator(
      '#open-source a[href*="stackoverflow.com/questions"]'
    )

    await expect(answers).toHaveCount(4)
    await expect(
      page.getByText('Four answers, all accepted by the people who asked.')
    ).toBeVisible()
  })
})
