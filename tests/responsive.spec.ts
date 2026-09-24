import { expect, test } from '@playwright/test'

const PAGES = ['/', '/privacy', '/pt', '/pt/privacidade']
const WIDTHS = [320, 360, 414, 768, 1024]

test.describe('Responsive layout', () => {
  for (const width of WIDTHS) {
    for (const path of PAGES) {
      test(`Expected - ${path} to fit ${width}px with a single-row nav`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.goto(path)
        await page.evaluate(() => document.fonts.ready)

        const layout = await page.evaluate(() => {
          const nav = document.querySelector<HTMLElement>(
            'header nav:not(:has([hreflang]))'
          )!
          const rows = new Set(
            Array.from(nav.querySelectorAll('li')).map((li) =>
              Math.round(li.getBoundingClientRect().top)
            )
          )
          const header = document.querySelector('header')!
          const underline = Array.from(nav.querySelectorAll('a')).map(
            (link) => {
              const bottom = parseFloat(
                getComputedStyle(link, '::after').bottom
              )
              return link.getBoundingClientRect().bottom - bottom
            }
          )

          return {
            pageOverflow:
              document.documentElement.scrollWidth -
              document.documentElement.clientWidth,
            navOverflow: nav.scrollWidth - nav.clientWidth,
            navRows: rows.size,
            underlineOffsets: underline.map((y) =>
              Math.abs(y - header.getBoundingClientRect().bottom)
            ),
          }
        })

        expect(layout.pageOverflow).toBeLessThanOrEqual(0)
        expect(layout.navOverflow).toBeLessThanOrEqual(1)
        expect(layout.navRows).toBe(1)
        for (const offset of layout.underlineOffsets) {
          expect(offset).toBeLessThanOrEqual(3)
        }
      })
    }
  }
})
