import { Page } from '@playwright/test'

/**
 * Pages turn by clicking the left/right half of the active page (no arrow
 * buttons). Clicking is at vertical mid-height to stay clear of the page
 * menu chip pinned to the top-right corner.
 */
async function clickPageZone(page: Page, side: 'left' | 'right') {
  const activePage = page.getByTestId('active-page')
  const box = await activePage.boundingBox()

  if (!box) throw new Error('Active page not found')

  const x = side === 'left' ? 20 : box.width - 20
  const y = box.height / 2

  await activePage.click({ position: { x, y } })
}

export { clickPageZone }
