import type { ContentNode } from "@/lib/content"

export const DEFAULT_VISIBLE_DEPTH = 3

export type SidebarEntry = {
  href: string
  title: string
  isActive: boolean
  isAncestor: boolean
  hasChildren: boolean
  children: SidebarEntry[]
}

export type SidebarView = {
  back: { href: string; title: string } | null
  items: SidebarEntry[]
}

function segmentsOf(pathname: string): string[] {
  return pathname.split("/").filter(Boolean)
}

function findBySegments(
  nodes: ContentNode[],
  segments: string[]
): ContentNode | null {
  let current: ContentNode | null = null
  let level = nodes

  for (const segment of segments) {
    const match: ContentNode | undefined = level.find(
      (node) => node.slug.at(-1) === segment
    )
    if (!match) return null
    current = match
    level = match.children
  }

  return current
}

function toEntry(
  node: ContentNode,
  activeSegments: string[],
  remainingDepth: number
): SidebarEntry {
  const depth = node.slug.length
  const isAncestor =
    depth <= activeSegments.length &&
    node.slug.every((segment, index) => activeSegments[index] === segment)
  const isActive = isAncestor && depth === activeSegments.length

  const expand = isAncestor && remainingDepth > 1 && node.children.length > 0

  return {
    href: node.href,
    title: node.title,
    isActive,
    isAncestor: isAncestor && !isActive,
    hasChildren: node.children.length > 0,
    children: expand
      ? node.children.map((child) =>
          toEntry(child, activeSegments, remainingDepth - 1)
        )
      : [],
  }
}

export function buildSidebarView(
  tree: ContentNode[],
  pathname: string,
  visibleDepth: number = DEFAULT_VISIBLE_DEPTH
): SidebarView {
  const depth = Math.max(1, visibleDepth)
  const activeSegments = segmentsOf(pathname)
  const focusDepth = Math.max(0, activeSegments.length - depth)

  const focus =
    focusDepth > 0
      ? findBySegments(tree, activeSegments.slice(0, focusDepth))
      : null

  const roots = focus ? focus.children : tree

  return {
    back: focus ? { href: focus.href, title: focus.title } : null,
    items: roots.map((node) => toEntry(node, activeSegments, depth)),
  }
}
