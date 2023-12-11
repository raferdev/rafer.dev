import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Storybook', () => {
  const SECTION_POSITION = 3
  const STORYBOOK_TITLE = 'Storybook'
  const STORYBOOK_SUB_TITLE = 'You can view the documents on StoryBook'
  const STORYBOOK_START_DESCRIPTION =
    "I'm not a professional designer or UI/UX, but I love documentation, and Storybook nailed it."
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState()
  })
  test('Expected - Logo image to be visible', async ({ page }) => {
    await page.goto(HOME)
    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const logo = PAGE_LOCATOR.filter({
      hasText: STORYBOOK_TITLE,
    })
      .locator('img')
      .nth(1)

    await expect(logo).toBeVisible()
  })

  test('Expected - Title to be visible', async ({ page }) => {
    await page.goto('/')

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const headingText = PAGE_LOCATOR.getByRole('heading', {
      name: STORYBOOK_TITLE,
    })

    await expect(headingText).toBeVisible()
  })

  test('Expected - Subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subHeadingText = PAGE_LOCATOR.getByText(STORYBOOK_SUB_TITLE)

    await expect(subHeadingText).toBeVisible()
  })

  test('Expected - Description to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const description = PAGE_LOCATOR.getByText(STORYBOOK_START_DESCRIPTION)

    await expect(description).toBeVisible()
  })

  test('Expected - Link to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const linkToInvite = PAGE_LOCATOR.getByLabel('Storybook Home')

    await expect(linkToInvite).toBeVisible()
  })
})
