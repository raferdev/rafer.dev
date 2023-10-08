import { expect, test } from '@playwright/test'

const HTTP_ERROR_CODES = [
  300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406,
  407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 420, 422, 423, 424,
  429, 431, 450, 500, 501, 502, 503, 504, 505, 506, 507, 509, 510, 999,
]

test.describe('Test broken links', () => {
  test('Link cant redirect to an error code', async ({ page }) => {
    await page.goto('/')

    const hrefs = await page.evaluate(() => {
      return Array.from(document.links).map((item) => item.href)
    })

    for (let i = 0; i < hrefs.length; i++) {
      try {
        const response = await page.goto(hrefs[i])
        if (!response) {
          throw new Error()
        }

        const request_status = response.status()

        const is_error_code = HTTP_ERROR_CODES.includes(request_status)

        expect(is_error_code).toBeFalsy()
      } catch {
        console.log('No response, check url:', hrefs[i])
      }
    }

    await page.close()
  })
})
