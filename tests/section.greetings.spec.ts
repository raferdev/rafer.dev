import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Greetings', () => {
  const SECTION_POSITION = 0
  const LOGO_SRC = 'logo-250x250.png'
  const SECTION_P_ONE = " Hi! My name's Rafael"
  const SECTION_P_TWO = 'I like to solve problems'
  const SECTION_P_THREE = 'And build solutions'
  const SECTION_P_FOUR = 'Code is just a consequence'

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

      const logo = PAGE_LOCATOR.locator('img')
      const logoName = await PAGE_LOCATOR.locator('img').getAttribute('src')

      expect(logoName).toContain(LOGO_SRC)
      await expect(logo).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Greetings text to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const pOne = PAGE_LOCATOR.getByText(SECTION_P_ONE)
      const pTwo = PAGE_LOCATOR.getByText(SECTION_P_TWO)
      const pThree = PAGE_LOCATOR.getByText(SECTION_P_THREE)
      const pFour = PAGE_LOCATOR.getByText(SECTION_P_FOUR)

      await expect(pOne).toBeVisible()
      await expect(pTwo).toBeVisible()
      await expect(pThree).toBeVisible()
      await expect(pFour).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })
  test('Expected - Correct height and width, full viewport', async ({
    page,
  }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const firstSectiongBox = await PAGE_LOCATOR.boundingBox()
      const viewPort = page.viewportSize()

      if (viewPort === null) throw new Error('Viewport is null')

      const { width, height } = viewPort

      expect(firstSectiongBox?.height).toBe(height)
      expect(firstSectiongBox?.width).toBe(width)
    } catch (error) {
      console.error(error)
    }
  })
})
