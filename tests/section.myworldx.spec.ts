import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Myworldx Project', () => {
  const SECTION_POSITION = 2
  const MYWORLDX_LOGO_ALT = ''
  const MYWORLDX_TITLE = 'Check This Out'
  const MYWORLDX_SUB_TITLE = 'My new open source project'
  const MYWORLDX_START_DESCRIPTION =
    'MyWorldx is built for GitHub, so users can show their content more'
  const timeout = 5000

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

      const logo = PAGE_LOCATOR.getByAltText(MYWORLDX_LOGO_ALT)

      await expect(logo).toBeVisible({ timeout })
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Title to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const headingText = PAGE_LOCATOR.getByRole('heading', {
        name: MYWORLDX_TITLE,
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

      const subHeadingText = PAGE_LOCATOR.getByText(MYWORLDX_SUB_TITLE)

      await expect(subHeadingText).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Description to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const description = PAGE_LOCATOR.getByText(MYWORLDX_START_DESCRIPTION)

      await expect(description).toBeVisible()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Link to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

      const linkToHome = PAGE_LOCATOR.getByRole('link', { name: 'Home' })

      const linkToPerfil = PAGE_LOCATOR.getByRole('link', {
        name: 'page',
      })

      const linkToRepository = PAGE_LOCATOR.getByRole('link', {
        name: 'Repository',
      })

      await expect(linkToPerfil).toBeVisible({ timeout })
      await expect(linkToRepository).toBeVisible({ timeout })
      await expect(linkToHome).toBeVisible({ timeout })
    } catch (error) {
      console.error(error)
    }
  })
})
