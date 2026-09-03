import { Book, type BookPage, type TocEntry } from '@raferdev/book-ui'

import { book } from '@/config/book'

const { Shell, Spread, Cover, TableOfContents, Preface, Chapter, Contact } =
  Book

// Mirrors the order `pages` is built in below — kept in one place so the
// table of contents always jumps to the right spot.
const tocEntries: TocEntry[] = [
  ...book.chapters.map(
    (chapter, index): TocEntry => ({
      id: chapter.id,
      numeral: chapter.numeral,
      tocLabel: chapter.tocLabel,
      tocPage: chapter.tocPage,
      pageIndex: 2 + index,
    })
  ),
  {
    id: book.contact.id,
    numeral: book.contact.numeral,
    tocLabel: book.contact.tocLabel,
    tocPage: book.contact.tocPage,
    pageIndex: 2 + book.chapters.length,
  },
]

const pages: BookPage[] = [
  {
    id: 'cover',
    units: [
      {
        label: 'Cover',
        content: (
          <Spread.Card key="cover">
            <Cover content={book.cover} />
          </Spread.Card>
        ),
      },
    ],
  },
  {
    id: 'contents',
    units: [
      {
        label: 'Contents',
        content: (
          <Spread.Card key="toc">
            <Spread.Page>
              <TableOfContents content={{ ...book.toc, entries: tocEntries }} />
            </Spread.Page>
          </Spread.Card>
        ),
      },
      {
        label: 'Preface',
        content: (
          <Spread.Card key="preface">
            <Spread.Page>
              <Preface content={book.preface} />
            </Spread.Page>
          </Spread.Card>
        ),
      },
    ],
  },
  ...book.chapters.map(
    (chapter): BookPage => ({
      id: chapter.id,
      units: [
        {
          label: `${chapter.numeral} — ${chapter.title}`,
          content: (
            <Spread.Card key={`${chapter.id}-prose`}>
              <Spread.Page>
                <Chapter.Prose chapter={chapter} />
              </Spread.Page>
            </Spread.Card>
          ),
        },
        {
          label: `${chapter.numeral} — Details`,
          content: (
            <Spread.Card key={`${chapter.id}-data`}>
              <Spread.Page>
                <Chapter.Data chapter={chapter} />
              </Spread.Page>
            </Spread.Card>
          ),
        },
      ],
    })
  ),
  {
    id: 'contact',
    units: [
      {
        label: `${book.contact.numeral} — Contact`,
        content: (
          <Spread.Card key="contact-links">
            <Spread.Page>
              <Contact.Links content={book.contact} />
            </Spread.Page>
          </Spread.Card>
        ),
      },
      {
        label: `${book.contact.numeral} — Closing`,
        content: (
          <Spread.Card key="contact-closing">
            <Spread.Page>
              <Contact.Closing content={book.contact} />
            </Spread.Page>
          </Spread.Card>
        ),
      },
    ],
  },
]

const Page = () => <Shell pages={pages} />

export { Page }
export default Page
