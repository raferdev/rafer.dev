import { expect, Page, test } from '@playwright/test'

const THEME_KEY = 'rafer.theme'
const DARK_PAPER = 'rgb(22, 21, 19)'
const LIGHT_PAPER = 'rgb(247, 246, 243)'

const toggle = (page: Page, name: string) =>
  page
    .getByRole('group', { name: 'Theme' })
    .getByRole('button', { name, exact: true })

test.describe('Theme', () => {
  test('Expected - To follow a dark system preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.locator('body')).toHaveCSS('background-color', DARK_PAPER)
    await expect(toggle(page, 'System')).toHaveAttribute('aria-pressed', 'true')
  })

  test('Expected - To follow a light system preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      LIGHT_PAPER
    )
  })

  test('Expected - To switch live when the system preference changes', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    await page.emulateMedia({ colorScheme: 'dark' })

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })

  test('Expected - A manual choice to override the system and persist', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')

    await toggle(page, 'Dark').click()

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(toggle(page, 'Dark')).toHaveAttribute('aria-pressed', 'true')
    expect(
      await page.evaluate((key) => localStorage.getItem(key), THEME_KEY)
    ).toBe('dark')

    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(toggle(page, 'Dark')).toHaveAttribute('aria-pressed', 'true')

    await page.goto('/pt')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(
      page
        .getByRole('group', { name: 'Tema' })
        .getByRole('button', { name: 'Escuro', exact: true })
    ).toHaveAttribute('aria-pressed', 'true')
  })

  test('Expected - The theme to be set before the page paints', async ({
    page,
  }) => {
    await page.addInitScript((key) => {
      localStorage.setItem(key, 'dark')
      document.addEventListener('DOMContentLoaded', () => {
        document.documentElement.dataset.themeAtParse =
          document.documentElement.getAttribute('data-theme') ?? ''
      })
    }, THEME_KEY)
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute(
      'data-theme-at-parse',
      'dark'
    )
  })

  test('Expected - Choosing System to hand control back', async ({ page }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'light'),
      THEME_KEY
    )
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

    await toggle(page, 'System').click()

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    expect(
      await page.evaluate((key) => localStorage.getItem(key), THEME_KEY)
    ).toBeNull()
  })

  test('Expected - The browser theme color to match a manual choice', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')

    await toggle(page, 'Dark').click()

    const colors = await page
      .locator('meta[name="theme-color"]')
      .evaluateAll((metas) =>
        metas.map((meta) => (meta as HTMLMetaElement).content)
      )
    expect(colors.length).toBeGreaterThan(0)
    expect(new Set(colors)).toEqual(new Set(['#161513']))
  })
})
