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

test.describe('Component - Marquee', () => {
  const TOTAL_IMAGES = 9
  const MARQUEE_HEIGHT = 70
  const MARQUEE_SPAN = 'Some of my main stack'
  const MARQUEE_IMAGES = [
    'Mongodb',
    'Jest',
    'Nodejs',
    'Docker',
    'Nextjs',
    'Tailwind',
    'Postgresql',
    'Playwright',
    'AWS',
  ]

  test.beforeEach(async ({ page }) => {
    try {
      await page.waitForLoadState()
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Marquee to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

      await expect(PAGE_LOCATOR).toBeVisible()
    } catch (error) {
      console.log(error)
    }
  })
  test('Expected - Correct height and width, 70px 100vw', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

      const marquee = await PAGE_LOCATOR.boundingBox()

      const viewPort = page.viewportSize()

      if (viewPort === null) throw new Error('Viewport is null')

      const { width } = viewPort

      expect(marquee?.width).toBe(width)
      expect(marquee?.height).toBe(MARQUEE_HEIGHT)
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - Total images number', async ({ page }) => {
    try {
      await page.goto(HOME)

      const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })
      const marqueeImages = PAGE_LOCATOR.locator('img')

      expect(await marqueeImages.count()).toBe(TOTAL_IMAGES)
    } catch (error) {
      console.error(error)
    }
  })

  test('Expected - All images to be visible', async ({ page }) => {
    try {
      await page.goto(HOME)
      const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

      const marqueeImages = await PAGE_LOCATOR.locator('img').all()

      for (const image of marqueeImages) {
        const alt = await image.getAttribute('alt')
        await expect(image).toBeVisible()
        expect(MARQUEE_IMAGES).toContain(alt)
      }
    } catch (error) {
      console.error(error)
    }
  })
})
