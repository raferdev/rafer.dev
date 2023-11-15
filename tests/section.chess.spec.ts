import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Chess Invite', () => {
  const SECTION_POSITION = 4
  const CHESS_LOGO_ALT = 'chess.com logo'
  const CHESS_TITLE = "Let's play chess"
  const CHESS_SUB_TITLE = 'Invite me to play a chess game on chess.com'
  const CHESS_START_DESCRIPTION =
    " I started to play chess in 2022, and I'm accepting new daily"
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

      const logo = PAGE_LOCATOR.getByAltText(CHESS_LOGO_ALT)

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
        name: CHESS_TITLE,
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

      const subHeadingText = PAGE_LOCATOR.getByText(CHESS_SUB_TITLE)

      await expect(subHeadingText).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Description to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const description = PAGE_LOCATOR.getByText(CHESS_START_DESCRIPTION)

      await expect(description).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Link to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const linkToInvite = await PAGE_LOCATOR.getByLabel(
        'Chess.com "Play with a friend" page'
      )
      await expect(linkToInvite).toBeVisible({ timeout: 20000 })
    } catch (error) {
      console.error(error)
    }
  })
})
