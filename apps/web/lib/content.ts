import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { parse as parseYaml } from "yaml"

function locateContentRoot(): string {
  let dir = process.cwd()

  for (let depth = 0; depth < 8; depth += 1) {
    const candidate = path.join(dir, "origin")
    if (fs.existsSync(candidate)) return candidate

    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }

  return path.join(process.cwd(), "origin")
}

export const CONTENT_ROOT = locateContentRoot()

export const ORDERING_STRATEGIES = [
  "prefix",
  "alphabetical",
  "timestamp",
] as const
export type Ordering = (typeof ORDERING_STRATEGIES)[number]
export type Direction = "asc" | "desc"

export type FolderConfig = {
  title?: string
  depth?: number
  ordering?: Ordering
  direction?: Direction
  hidden?: boolean
}

export type ContentNode = {
  slug: string[]
  href: string
  title: string
  order: number | null
  date: string | null
  isFolder: boolean
  children: ContentNode[]
}

export type ContentDoc = {
  slug: string[]
  href: string
  title: string
  description: string | null
  date: string | null
  body: string
  filePath: string
}

const MATTER_OPTIONS = { engines: { yaml: (raw: string) => parseYaml(raw) } }

const PAGE_EXTENSIONS = [".mdx", ".md"]
const INDEX_BASENAMES = ["index", "README"]
const PREFIX_PATTERN = /^(\d+)[-_.]/

function stripPrefix(name: string): { order: number | null; rest: string } {
  const match = PREFIX_PATTERN.exec(name)
  if (!match) return { order: null, rest: name }
  return { order: Number(match[1]), rest: name.slice(match[0].length) }
}

function stripExtension(name: string): string {
  const ext = PAGE_EXTENSIONS.find((e) => name.toLowerCase().endsWith(e))
  return ext ? name.slice(0, -ext.length) : name
}

function titleFromSlug(segment: string): string {
  return segment
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function readFolderConfig(dir: string): FolderConfig {
  for (const name of ["config.yml", "config.yaml"]) {
    const candidate = path.join(dir, name)
    if (!fs.existsSync(candidate)) continue
    try {
      const parsed = parseYaml(fs.readFileSync(candidate, "utf8"))
      return parsed && typeof parsed === "object"
        ? (parsed as FolderConfig)
        : {}
    } catch {
      return {}
    }
  }
  return {}
}

function isPageFile(name: string): boolean {
  return PAGE_EXTENSIONS.some((e) => name.toLowerCase().endsWith(e))
}

function isIndexFile(name: string): boolean {
  return INDEX_BASENAMES.includes(stripExtension(stripPrefix(name).rest))
}

function compare(a: ContentNode, b: ContentNode, ordering: Ordering): number {
  if (ordering === "timestamp") {
    if (a.date && b.date) return a.date.localeCompare(b.date)
    if (a.date) return -1
    if (b.date) return 1
    return a.title.localeCompare(b.title)
  }

  if (ordering === "prefix") {
    if (a.order !== null && b.order !== null) return a.order - b.order
    if (a.order !== null) return -1
    if (b.order !== null) return 1
  }

  return a.title.localeCompare(b.title, undefined, { numeric: true })
}

function sortNodes(
  nodes: ContentNode[],
  ordering: Ordering,
  direction: Direction
): ContentNode[] {
  const sorted = [...nodes].sort((a, b) => compare(a, b, ordering))
  return direction === "desc" ? sorted.reverse() : sorted
}

function defaultDirection(ordering: Ordering): Direction {
  return ordering === "timestamp" ? "desc" : "asc"
}

function normalizeDate(value: unknown): string | null {
  if (!value) return null
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

function readFrontmatter(filePath: string): {
  title?: string
  date?: unknown
  description?: string
} {
  try {
    const { data } = matter(fs.readFileSync(filePath, "utf8"), MATTER_OPTIONS)
    return data ?? {}
  } catch {
    return {}
  }
}

function buildTree(
  dir: string,
  slug: string[],
  inheritedOrdering: Ordering
): ContentNode[] {
  if (!fs.existsSync(dir)) return []

  const config = readFolderConfig(dir)
  const ordering = config.ordering ?? inheritedOrdering
  const direction = config.direction ?? defaultDirection(ordering)
  const nodes: ContentNode[] = []

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue

    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const { order, rest } = stripPrefix(entry.name)
      const childConfig = readFolderConfig(full)
      if (childConfig.hidden) continue

      const childSlug = [...slug, rest]
      nodes.push({
        slug: childSlug,
        href: "/" + childSlug.join("/"),
        title: childConfig.title ?? titleFromSlug(rest),
        order,
        date: null,
        isFolder: true,
        children: buildTree(full, childSlug, ordering),
      })
      continue
    }

    if (!isPageFile(entry.name) || isIndexFile(entry.name)) continue

    const { order, rest } = stripPrefix(entry.name)
    const name = stripExtension(rest)
    const front = readFrontmatter(full)
    const childSlug = [...slug, name]

    nodes.push({
      slug: childSlug,
      href: "/" + childSlug.join("/"),
      title: front.title ?? titleFromSlug(name),
      order,
      date: normalizeDate(front.date),
      isFolder: false,
      children: [],
    })
  }

  return sortNodes(nodes, ordering, direction)
}

export function getVisibleDepth(): number {
  const configured = readFolderConfig(CONTENT_ROOT).depth
  return typeof configured === "number" && configured > 0 ? configured : 3
}

export function getContentTree(): ContentNode[] {
  const rootConfig = readFolderConfig(CONTENT_ROOT)
  return buildTree(CONTENT_ROOT, [], rootConfig.ordering ?? "prefix")
}

function resolveFile(slug: string[]): string | null {
  const walk = (dir: string, remaining: string[]): string | null => {
    if (!fs.existsSync(dir)) return null

    if (remaining.length === 0) {
      for (const entry of fs.readdirSync(dir)) {
        if (isPageFile(entry) && isIndexFile(entry))
          return path.join(dir, entry)
      }
      return null
    }

    const [head, ...tail] = remaining
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    if (tail.length === 0) {
      for (const entry of entries) {
        if (entry.isFile() && isPageFile(entry.name)) {
          const { rest } = stripPrefix(entry.name)
          if (stripExtension(rest) === head) return path.join(dir, entry.name)
        }
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      if (stripPrefix(entry.name).rest !== head) continue
      return walk(path.join(dir, entry.name), tail)
    }

    return null
  }

  return walk(CONTENT_ROOT, slug)
}

export function getDoc(slug: string[]): ContentDoc | null {
  const filePath = resolveFile(slug)
  if (!filePath) return null

  const { data, content } = matter(
    fs.readFileSync(filePath, "utf8"),
    MATTER_OPTIONS
  )
  const last = slug.at(-1)

  return {
    slug,
    href: "/" + slug.join("/"),
    title: data.title ?? (last ? titleFromSlug(last) : "Introduction"),
    description: data.description ?? null,
    date: normalizeDate(data.date),
    body: content,
    filePath,
  }
}

export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = []

  const walk = (nodes: ContentNode[]) => {
    for (const node of nodes) {
      if (node.isFolder) {
        if (resolveFile(node.slug)) slugs.push(node.slug)
        walk(node.children)
      } else {
        slugs.push(node.slug)
      }
    }
  }

  walk(getContentTree())
  if (resolveFile([])) slugs.push([])
  return slugs
}

export type Heading = { id: string; title: string; depth: 2 | 3 }

export function extractHeadings(body: string): Heading[] {
  const withoutCode = body.replace(/```[\s\S]*?```/g, "")
  const headings: Heading[] = []

  for (const line of withoutCode.split("\n")) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line)
    if (!match?.[1] || !match[2]) continue

    const title = match[2].replace(/[*_`]/g, "")
    headings.push({
      id: slugifyHeading(title),
      title,
      depth: match[1].length === 2 ? 2 : 3,
    })
  }

  return headings
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}
