import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Storybook', () => {
  const SECTION_POSITION = 3
  const STORYBOOK_LOGO_NAME = 'storybook logo'
  const STORYBOOK_TITLE = 'Storybook'
  const STORYBOOK_SUB_TITLE = 'You can view the documents on StoryBook'
  const STORYBOOK_START_DESCRIPTION =
    "I'm not a professional designer or UI/UX, but I love documentation, and Storybook nailed it."
  test.beforeEach(async ({ page }) => {
    try {
      await page.waitForLoadState()
    } catch (error) {
      console.error(error)
    }
  })
  test('Expected - Logo image to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)
      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const logo = PAGE_LOCATOR.getByRole('img', { name: STORYBOOK_LOGO_NAME })

      await expect(logo).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Title to be visible', async ({ page }) => {
    try {
      await page.goto('/')

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const headingText = PAGE_LOCATOR.getByRole('heading', {
        name: STORYBOOK_TITLE,
      })

      await expect(headingText).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Subtitle to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const subHeadingText = PAGE_LOCATOR.getByText(STORYBOOK_SUB_TITLE)

      await expect(subHeadingText).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Description to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const description = PAGE_LOCATOR.getByText(STORYBOOK_START_DESCRIPTION)

      await expect(description).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Link to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const linkToInvite = PAGE_LOCATOR.getByLabel('Storybook Home')

      await expect(linkToInvite).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })
})
