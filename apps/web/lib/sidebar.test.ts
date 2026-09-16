import { describe, expect, it } from "vitest"

import type { ContentNode } from "@/lib/content"
import { buildSidebarView } from "@/lib/sidebar"

function folder(slug: string[], children: ContentNode[] = []): ContentNode {
  return {
    slug,
    href: "/" + slug.join("/"),
    title: slug.at(-1) ?? "root",
    order: null,
    date: null,
    isFolder: true,
    children,
  }
}

function page(slug: string[]): ContentNode {
  return { ...folder(slug), isFolder: false, children: [] }
}

const tree: ContentNode[] = [
  folder(
    ["blog"],
    [
      page(["blog", "hello"]),
      folder(
        ["blog", "physics"],
        [
          page(["blog", "physics", "leaf"]),
          folder(
            ["blog", "physics", "geometry"],
            [
              folder(
                ["blog", "physics", "geometry", "euclidean"],
                [
                  folder(
                    ["blog", "physics", "geometry", "euclidean", "history"],
                    [
                      folder(
                        [
                          "blog",
                          "physics",
                          "geometry",
                          "euclidean",
                          "history",
                          "antiquity",
                        ],
                        [
                          page([
                            "blog",
                            "physics",
                            "geometry",
                            "euclidean",
                            "history",
                            "antiquity",
                            "greece",
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      folder(["blog", "chemistry"], [page(["blog", "chemistry", "atoms"])]),
    ]
  ),
  folder(["guides"], [page(["guides", "install"])]),
]

function hrefsAtEachLevel(view: ReturnType<typeof buildSidebarView>) {
  const levels: string[][] = []
  const walk = (entries: typeof view.items, depth: number) => {
    if (entries.length === 0) return
    levels[depth] = [...(levels[depth] ?? []), ...entries.map((e) => e.href)]
    entries.forEach((e) => walk(e.children, depth + 1))
  }
  walk(view.items, 0)
  return levels
}

describe("buildSidebarView", () => {
  it("shows top-level sections at the root with no back link", () => {
    const view = buildSidebarView(tree, "/", 3)
    expect(view.back).toBeNull()
    expect(view.items.map((i) => i.href)).toEqual(["/blog", "/guides"])
  })

  it("renders nothing deeper than the window allows", () => {
    const view = buildSidebarView(tree, "/blog", 3)
    const levels = hrefsAtEachLevel(view)
    expect(levels.length).toBeLessThanOrEqual(3)
  })

  it("keeps the current page visible however deep it is", () => {
    const deep = "/blog/physics/geometry/euclidean/history/antiquity/greece"
    const view = buildSidebarView(tree, deep, 3)
    const all = hrefsAtEachLevel(view).flat()
    expect(all).toContain(deep)
  })

  it("slides the window so the current page sits one level from the bottom", () => {
    const view = buildSidebarView(tree, "/blog/physics/geometry/euclidean", 3)
    expect(view.back).toEqual({ href: "/blog/physics", title: "physics" })
    expect(hrefsAtEachLevel(view)).toEqual([
      ["/blog/physics/leaf", "/blog/physics/geometry"],
      ["/blog/physics/geometry/euclidean"],
      ["/blog/physics/geometry/euclidean/history"],
    ])
  })

  it("shows the children of the folder you are standing on", () => {
    for (const [path, child] of [
      ["/blog", "/blog/physics"],
      ["/blog/physics", "/blog/physics/geometry"],
      ["/blog/physics/geometry", "/blog/physics/geometry/euclidean"],
      [
        "/blog/physics/geometry/euclidean",
        "/blog/physics/geometry/euclidean/history",
      ],
      [
        "/blog/physics/geometry/euclidean/history",
        "/blog/physics/geometry/euclidean/history/antiquity",
      ],
    ] as const) {
      const rendered = hrefsAtEachLevel(buildSidebarView(tree, path, 3)).flat()
      expect(rendered, `standing on ${path}`).toContain(child)
    }
  })

  it("keeps siblings visible and expands only the active branch", () => {
    const view = buildSidebarView(tree, "/blog/physics/geometry", 3)
    const hrefs = view.items.map((i) => i.href)

    expect(hrefs).toContain("/blog/chemistry")
    expect(hrefs).toContain("/blog/physics")

    const chemistry = view.items.find((i) => i.href === "/blog/chemistry")
    const physics = view.items.find((i) => i.href === "/blog/physics")
    expect(chemistry?.children).toEqual([])
    expect(physics?.children.map((c) => c.href)).toContain(
      "/blog/physics/geometry"
    )
  })

  it("marks the current page active and its ancestors as ancestors", () => {
    const view = buildSidebarView(tree, "/blog/physics/geometry", 3)
    const physics = view.items.find((i) => i.href === "/blog/physics")
    const geometry = physics?.children.find(
      (c) => c.href === "/blog/physics/geometry"
    )

    expect(physics?.isAncestor).toBe(true)
    expect(physics?.isActive).toBe(false)
    expect(geometry?.isActive).toBe(true)
    expect(geometry?.isAncestor).toBe(false)
  })

  it("offers a back target once the window has slid past the root", () => {
    expect(buildSidebarView(tree, "/", 3).back).toBeNull()
    expect(buildSidebarView(tree, "/blog", 3).back).toBeNull()
    expect(buildSidebarView(tree, "/blog/physics", 3).back).toBeNull()
    expect(buildSidebarView(tree, "/blog/physics/geometry", 3).back).toEqual({
      href: "/blog",
      title: "blog",
    })
    expect(
      buildSidebarView(tree, "/blog/physics/geometry/euclidean", 3).back
    ).toEqual({ href: "/blog/physics", title: "physics" })
  })

  it("falls back to the nearest resolvable folder for an unknown path", () => {
    const view = buildSidebarView(tree, "/blog/physics/nope/deeper/still", 3)
    expect(view.back).toEqual({ href: "/blog/physics", title: "physics" })
    expect(view.items.map((i) => i.href)).toEqual([
      "/blog/physics/leaf",
      "/blog/physics/geometry",
    ])
  })

  it("keeps the whole tree reachable at twenty levels", () => {
    const deep = "/blog/physics/geometry/euclidean/history/antiquity/greece"
    const view = buildSidebarView(tree, deep, 3)
    expect(hrefsAtEachLevel(view).flat()).toContain(deep)
  })

  it("falls back to the top level when no ancestor resolves", () => {
    const view = buildSidebarView(tree, "/nope/deeper/still/further", 3)
    expect(view.back).toBeNull()
    expect(view.items.map((i) => i.href)).toEqual(["/blog", "/guides"])
  })

  it("honours a different window size", () => {
    const deep = "/blog/physics/geometry/euclidean/history"
    expect(hrefsAtEachLevel(buildSidebarView(tree, deep, 2)).length).toBe(2)
    expect(hrefsAtEachLevel(buildSidebarView(tree, deep, 5)).length).toBe(5)
  })

  it("supports depth far beyond three levels", () => {
    const deep = "/blog/physics/geometry/euclidean/history/antiquity/greece"
    const view = buildSidebarView(tree, deep, 20)
    const all = hrefsAtEachLevel(view).flat()
    expect(all).toContain(deep)
    expect(view.back).toBeNull()
  })
})
