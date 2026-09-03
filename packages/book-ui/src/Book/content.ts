type MarginaliaNote = {
  text: string
}

type DataListItem = {
  key: string
  value: string
}

type ChapterNumeral = 'I' | 'II' | 'III'

type Chapter = {
  id: string
  numeral: ChapterNumeral
  title: string
  folioLeft: number
  folioRight: number
  tocLabel: string
  tocPage: string
  prose: string[]
  marginalia?: MarginaliaNote
  dataList: DataListItem[]
}

type ContactLink = {
  label: string
  href: string
  value: string
}

type ContactChapter = {
  id: string
  numeral: 'IV'
  title: string
  folioLeft: number
  folioRight: number
  tocLabel: string
  tocPage: string
  prose: string[]
  links: ContactLink[]
  closing: {
    heading: string
    note: string
  }
}

type CoverContent = {
  kicker: string
  name: string
  role: string
  manifesto: string[]
}

type TocEntry = {
  id: string
  numeral: ChapterNumeral | 'IV'
  tocLabel: string
  tocPage: string
  pageIndex: number
}

type TocContent = {
  title: string
  subtitle: string
  colophon: string
  folio: number
  entries: TocEntry[]
}

type PrefaceContent = {
  kicker: string
  title: string
  prose: string[]
  marginalia?: MarginaliaNote
  folio: number
}

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
}
