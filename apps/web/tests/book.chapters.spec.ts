import { expect, test } from '@playwright/test'

import { clickPageZone } from './utils/bookNav'

const HOME = '/'

const CHAPTERS = [
  {
    tocMatch: /The origin/,
    title: 'The origin',
    marginalia: 'the way of thinking came before the code.',
    dataKey: 'base',
  },
  {
    tocMatch: /The craft/,
    title: 'The craft',
    marginalia: 'craft: doing it well, not just making it work.',
    dataKey: 'stack',
  },
  {
    tocMatch: /In production/,
    title: 'In production',
    marginalia: 'keeping it standing is as noble as building it.',
    dataKey: 'scale',
  },
]

test.describe('Book - Chapters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME)
    await page.waitForLoadState()
    await clickPageZone(page, 'right')
    await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
  })

  for (const chapter of CHAPTERS) {
    test(`${chapter.title} shows heading, marginalia and the data list`, async ({
      page,
    }) => {
      await page.getByRole('button', { name: chapter.tocMatch }).click()

      await expect(
        page.getByRole('heading', { name: chapter.title })
      ).toBeVisible()
      await expect(page.getByText(chapter.marginalia)).toBeVisible()

      // Each chapter is prose, then a data page — a separate turn.
      await clickPageZone(page, 'right')

      await expect(
        page.getByText(chapter.dataKey, { exact: true })
      ).toBeVisible()
    })
  }
})
