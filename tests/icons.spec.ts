import { expect, test } from '@playwright/test'

const PAGES = ['/', '/pt']

test.describe('Icons and manifest', () => {
  for (const path of PAGES) {
    test(`Expected - Every icon and manifest linked from ${path} to load`, async ({
      page,
      request,
    }) => {
      await page.goto(path)

      const links = await page
        .locator(
          'head link[rel~="icon"], head link[rel="apple-touch-icon"], head link[rel="manifest"]'
        )
        .evaluateAll((elements) =>
          elements.map((element) => ({
            rel: element.getAttribute('rel'),
            type: element.getAttribute('type'),
            href: (element as HTMLLinkElement).href,
          }))
        )

      expect(links.map(({ rel }) => rel)).toEqual(
        expect.arrayContaining(['icon', 'apple-touch-icon', 'manifest'])
      )

      for (const { rel, type, href } of links) {
        const response = await request.get(href)
        const contentType = response.headers()['content-type']
        expect(response.status(), `${rel} ${href}`).toBe(200)
        if (rel !== 'manifest') expect(contentType, href).toMatch(/^image\//)
        if (type) expect(contentType).toContain(type)

        if (rel === 'manifest') {
          expect(contentType).toContain('application/manifest+json')
          const manifest = await response.json()
          for (const icon of manifest.icons) {
            const iconResponse = await request.get(new URL(icon.src, href).href)
            expect(iconResponse.status(), icon.src).toBe(200)
            expect(iconResponse.headers()['content-type'], icon.src).toMatch(
              /^image\//
            )
          }
        }
      }
    })
  }

  for (const asset of [
    '/missing.svg',
    '/missing.js',
    '/missing.css',
    '/missing.json',
  ]) {
    test(`Expected - A missing ${asset} to 404 instead of serving a page`, async ({
      request,
    }) => {
      const response = await request.get(asset)

      expect(response.status()).toBe(404)
    })
  }

  test('Expected - The SVG icon to follow the color scheme', async ({
    request,
  }) => {
    const response = await request.get('/icon.svg')
    const svg = await response.text()

    expect(response.headers()['content-type']).toContain('image/svg+xml')
    expect(svg.startsWith('<svg')).toBe(true)
    expect(svg).toContain('prefers-color-scheme:dark')
  })
})
