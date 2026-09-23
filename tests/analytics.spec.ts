import { expect, Page, test } from '@playwright/test'

const HOME = '/'
const CONSENT_KEY = 'rafer.consent'

const dataLayer = (page: Page) =>
  page.evaluate(() =>
    (window.dataLayer ?? []).map((entry) =>
      Array.from(entry as ArrayLike<unknown>)
    )
  )

const events = async (page: Page) =>
  (await dataLayer(page)).filter(([command]) => command === 'event')

test.describe('Analytics - Consent and tracking', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.route(
      /googletagmanager\.com|google-analytics\.com/,
      (route) => route.abort()
    )
    await context.route(/myworldx\.com/, (route) => route.abort())
    page.on('popup', (popup) => popup.close())
  })

  test('Expected - Nothing loads before the visitor answers', async ({
    page,
  }) => {
    await page.goto(HOME)

    const banner = page.getByRole('region', { name: 'Privacy choices' })

    await expect(banner).toBeVisible()
    expect(await page.evaluate(() => typeof window.gtag)).toBe('undefined')
  })

  test('Expected - Declining keeps analytics off', async ({ page }) => {
    await page.goto(HOME)
    await page.getByRole('button', { name: 'Decline' }).click()

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeHidden()
    expect(
      await page.evaluate((key) => localStorage.getItem(key), CONSENT_KEY)
    ).toBe('denied')

    await page
      .locator('#projects')
      .getByRole('link', { name: /^Home MyWorldx/ })
      .click()

    expect(await page.evaluate(() => typeof window.gtag)).toBe('undefined')
    expect(await dataLayer(page)).toEqual([])
  })

  test('Expected - Accepting tracks project clicks', async ({ page }) => {
    await page.goto(HOME)
    await page.getByRole('button', { name: 'Accept' }).click()

    await page
      .locator('#projects')
      .getByRole('link', { name: /^Home MyWorldx/ })
      .click()

    expect(await events(page)).toContainEqual([
      'event',
      'select_content',
      { content_type: 'project', content_id: 'myworldx-home' },
    ])
  })

  test('Expected - Contact links count as contact clicks', async ({ page }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'granted'),
      CONSENT_KEY
    )
    await page.goto(HOME)

    await page
      .getByRole('navigation', { name: 'Elsewhere' })
      .getByRole('link', { name: 'LinkedIn' })
      .click()

    expect(await events(page)).toContainEqual([
      'event',
      'contact_click',
      { method: 'linkedin' },
    ])
  })

  test('Expected - Sections report when scrolled into view', async ({
    page,
  }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'granted'),
      CONSENT_KEY
    )
    await page.goto(HOME)

    await page.evaluate(
      () => document.getElementById('about')?.scrollIntoView({ block: 'start' })
    )

    await expect
      .poll(async () => events(page))
      .toContainEqual(['event', 'section_view', { section: 'about' }])
  })

  test('Expected - A remembered answer hides the banner', async ({ page }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'denied'),
      CONSENT_KEY
    )
    await page.goto(HOME)

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeHidden()
  })

  test('Expected - The choice can be reopened from the footer', async ({
    page,
  }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'denied'),
      CONSENT_KEY
    )
    await page.goto(HOME)

    await page.getByRole('button', { name: 'Privacy choices' }).click()

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'Accept' })).toBeFocused()
  })
})
