import { Chapter } from './Chapter'
import { Contact } from './Contact'
import { Cover } from './Cover'
import { Folio } from './Folio'
import { Marginalia } from './Marginalia'
import { PageMenu } from './PageMenu'
import { BookShell } from './Shell'
import { Spread } from './Spread'
import { TableOfContents } from './TableOfContents'
import { Preface } from './TableOfContents/preface'

const Book = {
  Shell: BookShell,
  Spread,
  Cover,
  TableOfContents,
  Preface,
  Chapter,
  Contact,
  Marginalia,
  Folio,
  PageMenu,
}

export { Book }
export type { BookPage, BookPageUnit } from './Shell'
export type {
  Chapter,
  ChapterNumeral,
  ContactChapter,
  ContactLink,
  CoverContent,
  DataListItem,
  MarginaliaNote,
  PrefaceContent,
  TocContent,
  TocEntry,
} from './content'
