import { expect, test } from '@playwright/test'

const LANGUAGE_KEY = 'rafer.lang'

test.describe('i18n - Portuguese pages', () => {
  test('Expected - /pt to be served in Portuguese', async ({ page }) => {
    await page.goto('/pt')

    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Resolvo problemas. Construo produtos.'
    )
    await expect(
      page.getByRole('navigation', { name: 'Principal' }).getByRole('link')
    ).toHaveText(['Trabalho', 'Open source', 'Sobre', 'Contato'])
  })

  test('Expected - Portuguese links to stay in Portuguese', async ({
    page,
  }) => {
    await page.goto('/pt')

    await expect(
      page.getByRole('banner').getByRole('link', { name: /RAFAEL/ })
    ).toHaveAttribute('href', '/pt#top')
    await expect(
      page.getByRole('link', { name: 'Política de privacidade' }).first()
    ).toHaveAttribute('href', '/pt/privacidade')
  })
})

test.describe('i18n - Language toggle', () => {
  const PAIRS = [
    { from: '/', to: '/pt', target: /^PT/ },
    { from: '/pt', to: '/', target: /^EN/ },
    { from: '/privacy', to: '/pt/privacidade', target: /^PT/ },
    { from: '/pt/privacidade', to: '/privacy', target: /^EN/ },
  ]

  for (const { from, to, target } of PAIRS) {
    test(`Expected - ${from} to link to ${to}`, async ({ page }) => {
      await page.goto(from)

      const toggle = page.getByRole('navigation', { name: /Language|Idioma/ })

      await expect(toggle.getByRole('link', { name: target })).toHaveAttribute(
        'href',
        to
      )
    })
  }

  test('Expected - Choosing a language to be remembered', async ({ page }) => {
    await page.goto('/')

    await page
      .getByRole('navigation', { name: 'Language' })
      .getByRole('link', { name: /^PT/ })
      .click()

    await expect(page).toHaveURL(/\/pt$/)
    expect(
      await page.evaluate((key) => localStorage.getItem(key), LANGUAGE_KEY)
    ).toBe('pt')
  })
})

test.describe('i18n - Browser language (pt-BR)', () => {
  test.use({ locale: 'pt-BR' })

  test('Expected - / to redirect to /pt', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveURL(/\/pt$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  })

  test('Expected - A saved English choice to win', async ({ page }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'en'),
      LANGUAGE_KEY
    )
    await page.goto('/')

    await expect(page).toHaveURL(/\/$/)
  })

  test('Expected - Direct links to be respected', async ({ page }) => {
    await page.goto('/privacy')

    await expect(page).toHaveURL(/\/privacy$/)
  })
})

test.describe('i18n - Browser language (en-US)', () => {
  test.use({ locale: 'en-US' })

  test('Expected - / to stay in English', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveURL(/\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('Expected - A saved Portuguese choice to win', async ({ page }) => {
    await page.addInitScript(
      (key) => localStorage.setItem(key, 'pt'),
      LANGUAGE_KEY
    )
    await page.goto('/')

    await expect(page).toHaveURL(/\/pt$/)
  })
})
