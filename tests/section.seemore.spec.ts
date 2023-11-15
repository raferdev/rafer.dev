import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - See more', () => {
  const SECTION_POSITION = 5
  const SEE_MORE_TITLE = 'See more'
  const SEE_MORE_SUB_TITLE = 'You can see more about me at the following links:'
  const SEE_MORE_LINKS = [
    'Github',
    'Youtube',
    'Twitter / X',
    'Linkedin',
    'Instagram',
  ]
  test.beforeEach(async ({ page }) => {
    try {
      await page.waitForLoadState()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Title to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const headingText = PAGE_LOCATOR.getByRole('heading', {
        name: SEE_MORE_TITLE,
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

      const subHeadingText = PAGE_LOCATOR.getByText(SEE_MORE_SUB_TITLE)

      await expect(subHeadingText).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Link to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const marqueeImages = await PAGE_LOCATOR.locator('img').all()

      for (const image of marqueeImages) {
        const alt = await image.getAttribute('alt')
        expect(image).toBeVisible()
        expect(SEE_MORE_LINKS).toContain(alt)
      }
    } catch (error) {
      console.error(error)
    }
  })
})
