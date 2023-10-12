import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Zero | No dev tools on production', () => {
  const DEV_TOOLS = 'tailwind-indicator'

  test('Expected tailwind indicator to be zero', async ({ page }) => {
    await page.goto(HOME)

    const twIndicator = await page.getByTestId(DEV_TOOLS).count()

    expect(twIndicator).toBe(0)
  })
})

test.describe('First | Greetings Section', () => {
  const SECTION_POSITION = 0
  const LOGO_SRC = 'logo-250x250.png'
  const SECTION_P_ZERO = 'Hello,'
  const SECTION_P_ONE = "my name's Rafael"
  const SECTION_P_TWO = 'I like to solve problems'
  const SECTION_P_THREE = 'And build solutions'
  const SECTION_P_FOUR = 'Code is just consequence'

  test('Expected logo image to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const logo = PAGE_LOCATOR.locator('img')
    const logoName = await PAGE_LOCATOR.locator('img').getAttribute('src')

    expect(logoName).toContain(LOGO_SRC)
    await expect(logo).toBeVisible()
  })

  test('Expected to greetings text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const greetings = PAGE_LOCATOR.getByText(SECTION_P_ZERO)
    const pOne = PAGE_LOCATOR.getByText(SECTION_P_ONE)
    const pTwo = PAGE_LOCATOR.getByText(SECTION_P_TWO)
    const pThree = PAGE_LOCATOR.getByText(SECTION_P_THREE)
    const pFour = PAGE_LOCATOR.getByText(SECTION_P_FOUR)

    expect(pOne).toBeVisible()
    expect(pTwo).toBeVisible()
    expect(pThree).toBeVisible()
    expect(pFour).toBeVisible()
    expect(greetings).toBeVisible()
  })
  test('Expected correct height and width', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const firstSectiongBox = await PAGE_LOCATOR.boundingBox()
    const viewPort = page.viewportSize()

    if (viewPort === null) throw new Error('Viewport is null')

    const { width, height } = viewPort

    expect(firstSectiongBox?.height).toBe(height)
    expect(firstSectiongBox?.width).toBe(width)
  })
})

test.describe('Second | Section Presentation', () => {
  const SECTION_POSITION = 1
  const PRESENTATION_WAKATIME = 'Total time coded since Jan 17 2022'
  const PRESENTATION_TITLE = 'Software Engineer'
  const PRESENTATION_SUB_TITLE =
    'Pragmatism with creativity to create new things'
  const PRESENTATION_START_DESCRIPTION =
    'Working building web solutions with NodeJS, NextJS, tests with Jest, database'

  test('Expected presentation section heading to be visible', async ({
    page,
  }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const sectionHeading = PAGE_LOCATOR.getByRole('heading', {
      name: PRESENTATION_TITLE,
    })

    await expect(sectionHeading).toBeVisible()
  })

  test('Expected to wakatime badge to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const wakatimeBadge = PAGE_LOCATOR.getByRole('img', {
      name: PRESENTATION_WAKATIME,
    })

    await expect(wakatimeBadge).toBeVisible()
  })

  test('Expected to subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subTitle = PAGE_LOCATOR.getByText(PRESENTATION_SUB_TITLE)

    await expect(subTitle).toBeVisible()
  })

  test('Expected to description to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const description = PAGE_LOCATOR.getByText(PRESENTATION_START_DESCRIPTION)

    expect(description).toBeVisible()
  })
})

test.describe('Third | Marquee', () => {
  const TOTAL_IMAGES = 18
  const MARQUEE_HEIGHT = 90
  const MARQUEE_SPAN = 'Some of my main stack'
  const MARQUEE_BG_COLOR = 'rgb(231, 229, 228)'
  const MARQUEE_IMAGES = [
    'Mongodb',
    'Jest',
    'Nodejs',
    'Docker',
    'Nextjs',
    'Tailwind',
    'Postgresql',
    'Playwright',
    'AWS',
  ]

  test('Expected to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

    await expect(PAGE_LOCATOR).toBeVisible()
  })
  test('Expected correct height and width', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

    const marquee = await PAGE_LOCATOR.boundingBox()

    const viewPort = page.viewportSize()

    if (viewPort === null) throw new Error('Viewport is null')

    const { width } = viewPort

    expect(marquee?.width).toBe(width)
    expect(marquee?.height).toBe(MARQUEE_HEIGHT)
  })
  test('Expected correct background color', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

    const marqueeElement = await PAGE_LOCATOR.elementHandle()

    const bgColor = await marqueeElement?.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color')
    })

    expect(bgColor).toBe(MARQUEE_BG_COLOR)
  })

  test('Expected all image icons correct count number', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

    const marqueeImages = PAGE_LOCATOR.locator('img')

    expect(await marqueeImages.count()).toBe(TOTAL_IMAGES)
  })

  test('Expected all image are visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('div').filter({ hasText: MARQUEE_SPAN })

    const marqueeImages = await PAGE_LOCATOR.locator('img').all()

    for (const image of marqueeImages) {
      const alt = await image.getAttribute('alt')
      expect(image).toBeVisible()
      expect(MARQUEE_IMAGES).toContain(alt)
    }
  })
})
test.describe('Fourth | Myworldx Project', () => {
  const SECTION_POSITION = 3
  const MYWORLDX_LOGO_NAME = 'myworldx-logo.png'
  const MYWORLDX_TITLE = 'Check This Out'
  const MYWORLDX_SUB_TITLE = 'My new open source project Myworldx'
  const MYWORLDX_START_DESCRIPTION =
    "Myworldx it's builded to github user's can show your content"

  test('Expected logo image to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const logo = PAGE_LOCATOR.getByRole('img', { name: MYWORLDX_LOGO_NAME })

    await expect(logo).toBeVisible()
  })

  test('Expected title to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const headingText = PAGE_LOCATOR.getByRole('heading', {
      name: MYWORLDX_TITLE,
    })

    await expect(headingText).toBeVisible()
  })
  test('Expected subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subHeadingText = PAGE_LOCATOR.getByText(MYWORLDX_SUB_TITLE)

    await expect(subHeadingText).toBeVisible()
  })

  test('Expected description to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const description = PAGE_LOCATOR.getByText(MYWORLDX_START_DESCRIPTION)

    await expect(description).toBeVisible()
  })
  test('Expected link to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const linkToHome = PAGE_LOCATOR.getByRole('link', { name: 'Myworldx Home' })
    const linkToPerfil = PAGE_LOCATOR.getByRole('link', {
      name: 'Myworldx My page',
    })
    const linkToRepository = PAGE_LOCATOR.getByRole('link', {
      name: 'Myworldx Repository',
    })

    expect(linkToHome).toBeVisible()
    expect(linkToPerfil).toBeVisible()
    expect(linkToRepository).toBeVisible()
  })
})

test.describe('Fifth | Chess Invite Project', () => {
  const SECTION_POSITION = 3
  const CHESS_LOGO_NAME = 'chess.com logo'
  const CHESS_TITLE = "Let's play a Chess?"
  const CHESS_SUB_TITLE = 'Invite me to play a chess game on chess.com'
  const CHESS_START_DESCRIPTION =
    "I started to play chess in 2022, and i'm accepting new daily games"

  test('Expected logo image to be visible', async ({ page }) => {
    await page.goto(HOME)
    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const logo = PAGE_LOCATOR.getByRole('img', { name: CHESS_LOGO_NAME })

    await expect(logo).toBeVisible()
  })

  test('Expected title to be visible', async ({ page }) => {
    await page.goto('/')

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const headingText = PAGE_LOCATOR.getByRole('heading', { name: CHESS_TITLE })

    await expect(headingText).toBeVisible()
  })

  test('Expected subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subHeadingText = PAGE_LOCATOR.getByText(CHESS_SUB_TITLE)

    await expect(subHeadingText).toBeVisible()
  })

  test('Expected description to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const description = PAGE_LOCATOR.getByText(CHESS_START_DESCRIPTION)

    await expect(description).toBeVisible()
  })

  test('Expected link to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const linkToInvite = PAGE_LOCATOR.getByRole('link', {
      name: 'Chess.com Invite',
    })
    expect(linkToInvite).toBeVisible()
  })
})

test.describe('Sixth | See more', () => {
  const SECTION_POSITION = 4
  const SEE_MORE_TITLE = 'See more'
  const SEE_MORE_SUB_TITLE = 'You can see more about me in the following links'
  const SEE_MORE_LINKS = [
    'Github',
    'Youtube',
    'Twitter / X',
    'Linkedin',
    'Instagram',
  ]

  test('Expected title to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const headingText = PAGE_LOCATOR.getByRole('heading', {
      name: SEE_MORE_TITLE,
    })

    await expect(headingText).toBeVisible()
  })

  test('Expected subtitle to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const subHeadingText = PAGE_LOCATOR.getByText(SEE_MORE_SUB_TITLE)

    await expect(subHeadingText).toBeVisible()
  })

  test('Expected link to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('section').nth(SECTION_POSITION)

    const marqueeImages = await PAGE_LOCATOR.locator('img').all()

    for (const image of marqueeImages) {
      const alt = await image.getAttribute('alt')
      expect(image).toBeVisible()
      expect(SEE_MORE_LINKS).toContain(alt)
    }
  })
})

test.describe('Seventh | Footer', () => {
  const FOOTER_TEXT =
    'This landing page are open source and you can find ithere, see you soon!'
  const FOOTER_CORPORATE = '@raferdev 2023'

  test('Expected text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('footer')
    const textFooter = PAGE_LOCATOR.getByText(FOOTER_TEXT)

    await expect(textFooter).toBeVisible()
  })
  test('Expected corporate text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('footer')
    const textFooter = PAGE_LOCATOR.getByText(FOOTER_CORPORATE)

    await expect(textFooter).toBeVisible()
  })
})
