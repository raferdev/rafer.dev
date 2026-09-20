import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Presentation', () => {
  const SECTION_POSITION = 1
  const PRESENTATION_TITLE = 'Product Engineer'
  const PRESENTATION_SUB_TITLE =
    'Building products end to end, from the first commit to scaling in production'
  const PRESENTATION_START_DESCRIPTION =
    'I build software end to end, with a strong foundation in backend and system design.'
  const PRESENTATION_END_DESCRIPTION =
    'More than shipping features, I care about the product and the people around it.'

  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState()
  })
  test('Expected - Presentation section heading to be visible', async ({
    page,
  }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const sectionHeading = PAGE_LOCATOR.getByRole('heading', {
      name: PRESENTATION_TITLE,
    })

    await expect(sectionHeading).toBeVisible()
  })

  test('Expected - Subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subTitle = PAGE_LOCATOR.getByText(PRESENTATION_SUB_TITLE)

    await expect(subTitle).toBeVisible()
  })

  test('Expected - Description text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const description_start = PAGE_LOCATOR.getByText(
      PRESENTATION_START_DESCRIPTION
    )
    const descriplion_end = PAGE_LOCATOR.getByText(PRESENTATION_END_DESCRIPTION)

    await expect(description_start).toBeVisible()
    await expect(descriplion_end).toBeVisible()
  })
})
