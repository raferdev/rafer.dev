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

  test('Expected - Analytics runs by default while the notice is shown', async ({
    page,
  }) => {
    await page.goto(HOME)

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeVisible()
    await expect
      .poll(async () => (await dataLayer(page)).map(([command]) => command))
      .toContain('config')
  })

  test('Expected - OK keeps tracking and hides the notice', async ({
    page,
  }) => {
    await page.goto(HOME)
    await page.getByRole('button', { name: 'OK', exact: true }).click()

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeHidden()
    expect(
      await page.evaluate((key) => localStorage.getItem(key), CONSENT_KEY)
    ).toBe('granted')

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

  test('Expected - No thanks stops tracking at once, without a reload', async ({
    page,
  }) => {
    await page.goto(HOME)
    await page.evaluate(() => {
      ;(window as unknown as { marker: boolean }).marker = true
      document.cookie = '_ga=GA1.1.test; path=/'
    })

    await page.getByRole('button', { name: 'No thanks' }).click()

    await expect(
      page.getByRole('region', { name: 'Privacy choices' })
    ).toBeHidden()
    expect(
      await page.evaluate((key) => localStorage.getItem(key), CONSENT_KEY)
    ).toBe('denied')
    expect(
      await page.evaluate(
        () => (window as unknown as { marker?: boolean }).marker
      )
    ).toBe(true)
    expect(await page.evaluate(() => document.cookie)).not.toContain('_ga=')
    expect(await dataLayer(page)).toContainEqual([
      'consent',
      'update',
      { analytics_storage: 'denied' },
    ])

    await page
      .locator('#projects')
      .getByRole('link', { name: /^Home MyWorldx/ })
      .click()

    expect(
      (await events(page)).filter(([, name]) => name === 'select_content')
    ).toEqual([])
  })

  test('Expected - A remembered opt-out keeps analytics off', async ({
    page,
  }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'denied'),
      CONSENT_KEY
    )
    await page.goto(HOME)

    expect(await page.evaluate(() => typeof window.gtag)).toBe('undefined')
    expect(await dataLayer(page)).toEqual([])
  })

  for (const signal of ['globalPrivacyControl', 'doNotTrack'] as const) {
    test(`Expected - A ${signal} signal keeps analytics off until OK`, async ({
      page,
    }) => {
      await page.addInitScript((name) => {
        Object.defineProperty(Navigator.prototype, name, {
          get: () => (name === 'doNotTrack' ? '1' : true),
        })
      }, signal)
      await page.goto(HOME)

      await expect(
        page.getByRole('region', { name: 'Privacy choices' })
      ).toBeVisible()
      expect(await page.evaluate(() => typeof window.gtag)).toBe('undefined')

      await page.getByRole('button', { name: 'OK', exact: true }).click()

      expect(await page.evaluate(() => typeof window.gtag)).toBe('function')
    })
  }

  test('Expected - Opting back in resumes tracking', async ({ page }) => {
    await page.goto(HOME)
    await page.getByRole('button', { name: 'No thanks' }).click()
    await page.getByRole('button', { name: 'Privacy choices' }).click()
    await page.getByRole('button', { name: 'OK', exact: true }).click()

    expect(await dataLayer(page)).toContainEqual([
      'consent',
      'update',
      { analytics_storage: 'granted' },
    ])

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
    await expect(
      page.getByRole('button', { name: 'OK', exact: true })
    ).toBeFocused()
  })
})

test.describe('Analytics - Insights', () => {
  const config = async (page: Page) =>
    (await dataLayer(page)).find(([command]) => command === 'config')

  const userProperties = async (page: Page) =>
    (await dataLayer(page))
      .filter(
        ([command, target]) => command === 'set' && target === 'user_properties'
      )
      .map(([, , value]) => value)

  test.beforeEach(async ({ page, context }) => {
    await context.route(
      /googletagmanager\.com|google-analytics\.com/,
      (route) => route.abort()
    )
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'granted'),
      CONSENT_KEY
    )
  })

  test('Expected - Language and color scheme sent as user properties', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(HOME)

    await expect
      .poll(() => userProperties(page))
      .toEqual([{ site_language: 'en', color_scheme: 'light' }])

    const commands = (await dataLayer(page)).map(([command]) => command)
    expect(commands.indexOf('set')).toBeLessThan(commands.indexOf('config'))
  })

  test('Expected - Portuguese in dark mode reported as such', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/pt')

    await expect
      .poll(() => userProperties(page))
      .toEqual([{ site_language: 'pt-BR', color_scheme: 'dark' }])
  })

  test('Expected - Switching theme updates the color scheme', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(HOME)

    await page
      .getByRole('group', { name: 'Theme' })
      .getByRole('button', { name: 'Dark', exact: true })
      .click()

    await expect
      .poll(async () => (await userProperties(page)).at(-1))
      .toEqual({ site_language: 'en', color_scheme: 'dark' })
  })

  test('Expected - Regular visits carry no internal or debug flags', async ({
    page,
  }) => {
    await page.goto(HOME)

    await expect.poll(async () => (await config(page))?.[2]).toEqual({})
  })

  test('Expected - ?internal=1 tags this browser until ?internal=0', async ({
    page,
  }) => {
    await page.goto('/?internal=1#work')

    await expect(page).toHaveURL(/\/#work$/)
    await expect
      .poll(async () => (await config(page))?.[2])
      .toEqual({ traffic_type: 'internal' })

    await page.goto('/pt')
    await expect
      .poll(async () => (await config(page))?.[2])
      .toEqual({ traffic_type: 'internal' })

    await page.goto('/?internal=0')
    await expect(page).toHaveURL(/\/$/)
    await expect.poll(async () => (await config(page))?.[2]).toEqual({})
    expect(
      await page.evaluate(() => localStorage.getItem('rafer.internal'))
    ).toBeNull()
  })

  test('Expected - ?ga_debug=1 enables DebugView for the tab only', async ({
    page,
    context,
  }) => {
    await page.goto('/?ga_debug=1')

    await expect(page).toHaveURL(/\/$/)
    await expect
      .poll(async () => (await config(page))?.[2])
      .toEqual({ debug_mode: true })

    const other = await context.newPage()
    await other.goto(HOME)
    await expect.poll(async () => (await config(other))?.[2]).toEqual({})
  })

  test('Expected - Flags are stored even when analytics is off', async ({
    browser,
  }) => {
    const context = await browser.newContext()
    await context.route(
      /googletagmanager\.com|google-analytics\.com/,
      (route) => route.abort()
    )
    const page = await context.newPage()
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'denied'),
      CONSENT_KEY
    )

    await page.goto('/?internal=1')

    await expect(page).toHaveURL(/\/$/)
    expect(
      await page.evaluate(() => localStorage.getItem('rafer.internal'))
    ).toBe('1')
    expect(await page.evaluate(() => typeof window.gtag)).toBe('undefined')

    await context.close()
  })
})
