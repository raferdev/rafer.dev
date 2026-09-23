import { expect, test } from '@playwright/test'

const PAGES = [
  {
    path: '/privacy',
    lang: 'en',
    title: 'Privacy policy',
    alternate: { name: 'Leia em português', path: '/pt/privacidade' },
    choices: 'Privacy choices',
  },
  {
    path: '/pt/privacidade',
    lang: 'pt-BR',
    title: 'Política de privacidade',
    alternate: { name: 'Read in English', path: '/privacy' },
    choices: 'Preferências de privacidade',
  },
]

test.describe('Page - Privacy policy', () => {
  for (const { path, lang, title, alternate, choices } of PAGES) {
    test(`Expected - ${path} to name the controller`, async ({ page }) => {
      await page.goto(path)

      const main = page.getByRole('main')

      await expect(page.locator('html')).toHaveAttribute('lang', lang)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(title)
      await expect(main.getByText(/RAFERDEV LTDA/).first()).toBeVisible()
      await expect(
        main.getByText(/54\.970\.175\/0001-50/).first()
      ).toBeVisible()
    })

    test(`Expected - ${path} to link to the other language`, async ({
      page,
    }) => {
      await page.goto(path)

      await expect(
        page.getByRole('link', { name: alternate.name })
      ).toHaveAttribute('href', alternate.path)
    })

    test(`Expected - ${path} to reopen the consent banner`, async ({
      page,
    }) => {
      await page.addInitScript(() =>
        localStorage.setItem('rafer.consent', 'denied')
      )
      await page.goto(path)

      await page
        .getByRole('main')
        .getByRole('button', { name: choices })
        .click()

      await expect(page.getByRole('region', { name: choices })).toBeVisible()
    })
  }

  test('Expected - Footer to link to the policy', async ({ page }) => {
    await page.goto('/')

    await page
      .getByRole('navigation', { name: 'Site' })
      .getByRole('link', { name: 'Privacy policy' })
      .click()

    await expect(page).toHaveURL(/\/privacy$/)
  })
})
