import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('No dev tools on production', () => {
  test('Tailwind Indicator to be null', async ({ page }) => {
    const twIndicator = page.getByTestId('tailwind-indicator')
    expect(twIndicator).toBeNull()
  })
})

test.describe('Home', () => {
  test('Should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
  test('Should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Software Engineer')
  })
  test('Should have the correct page footer', async ({ page }) => {
    await expect(page).toHaveTitle('React TodoMVC')
  })
})

test.describe('First Section - Greetings', () => {
  test('Confirm its the first on page', async ({ page }) => {
    const firstSection = page.locator('section').first()
  })
})
