import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Footer', () => {
  const CONTACT = [
    { name: 'contact@rafer.dev', href: /^mailto:contact@rafer\.dev/ },
    { name: /\+55 48 99654-6409/, href: 'https://wa.me/5548996546409' },
    { name: 'CV on request', href: /^mailto:contact@rafer\.dev\?subject=CV/ },
  ]
  const SOCIAL = [
    'GitHub',
    'LinkedIn',
    'Stack Overflow',
    'WakaTime',
    'X / Twitter',
    'YouTube',
    'Instagram',
  ]
  const SITE = [
    'Work',
    'Open source',
    'Projects',
    'About',
    'Docs',
    'Source code',
    'Privacy policy',
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
  })

  test('Expected - Contact channels to be listed', async ({ page }) => {
    const footer = page.getByRole('contentinfo')

    for (const { name, href } of CONTACT) {
      await expect(footer.getByRole('link', { name })).toHaveAttribute(
        'href',
        href
      )
    }
  })

  test('Expected - Social and site links to be grouped', async ({ page }) => {
    const social = page.getByRole('navigation', { name: 'Elsewhere' })
    const site = page.getByRole('navigation', { name: 'Site' })

    await expect(social.getByRole('link')).toContainText(SOCIAL)
    await expect(site.getByRole('link')).toContainText(SITE)
    await expect(
      site.getByRole('button', { name: 'Privacy choices' })
    ).toBeVisible()
  })

  test('Expected - Location to be visible', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo').getByText('Remote · Brazil (UTC−3)')
    ).toBeVisible()
  })

  test('Expected - Legal line with company and CNPJ', async ({ page }) => {
    const footer = page.getByRole('contentinfo')

    await expect(footer.getByText(/© \d{4} Rafael Fernandes/)).toBeVisible()
    await expect(footer.getByText(/RAFERDEV LTDA/)).toBeVisible()
    await expect(footer.getByText(/CNPJ 54\.970\.175\/0001-50/)).toBeVisible()
  })

  test('Expected - Farewell note to be visible', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo').getByText('Thanks for stopping by!')
    ).toBeVisible()
  })
})
