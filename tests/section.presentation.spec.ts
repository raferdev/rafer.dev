import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Presentation', () => {
  const SECTION_POSITION = 1
  const PRESENTATION_TITLE = 'Software Engineer'
  const PRESENTATION_SUB_TITLE =
    'Pragmatism and creativity to create new things'
  const PRESENTATION_START_DESCRIPTION =
    ' I have worked since 2019 with development using VBA, Python to create macros and other automations, and Nocode websites.'
  const PRESENTATION_END_DESCRIPTION =
    "I'm working on building web solutions with NodeJS, NextJS, and tests with Jest, database SQL and NoSQL, Docker, deploy servers, and serveless environments with CI/CD."

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

    expect(description_start).toBeVisible()
    expect(descriplion_end).toBeVisible()
  })
})
