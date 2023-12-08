import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Component - Dev tools', () => {
  test.beforeEach(async ({ page }) => {
    try {
      await page.waitForLoadState()
    } catch (error) {
      console.error(error)
    }
  })
  try {
    const DEV_TOOLS = 'tailwind-indicator'

    test('Expected - Tailwind indicator to not be rendered', async ({
      page,
    }) => {
      await page.goto(HOME)

      const twIndicator = await page.getByTestId(DEV_TOOLS).count()

      expect(twIndicator).toBe(0)
    })
  } catch (error) {
    console.error(error)
  }
})
