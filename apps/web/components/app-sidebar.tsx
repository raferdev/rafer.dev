"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronLeftIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@workspace/ui/components/sidebar"
import type { ContentNode } from "@/lib/content"
import { buildSidebarView, type SidebarEntry } from "@/lib/sidebar"
import { siteConfig } from "@/lib/config"

function NodeIcon({
  isFolder,
  isOpen,
}: {
  isFolder: boolean
  isOpen: boolean
}) {
  if (!isFolder) return <FileTextIcon className="text-muted-foreground" />
  return isOpen ? <FolderOpenIcon /> : <FolderIcon />
}

function useCollapsed(pathname: string) {
  const [collapsed, setCollapsed] = useState<string[]>([])

  useEffect(() => setCollapsed([]), [pathname])

  const isCollapsed = (href: string) => collapsed.includes(href)
  const toggle = (href: string) =>
    setCollapsed((current) =>
      current.includes(href)
        ? current.filter((item) => item !== href)
        : [...current, href]
    )

  return { isCollapsed, toggle }
}

type BranchProps = {
  entries: SidebarEntry[]
  isCollapsed: (href: string) => boolean
  toggle: (href: string) => void
}

function Branch({ entries, isCollapsed, toggle }: BranchProps) {
  if (entries.length === 0) return null

  return (
    <SidebarMenuSub>
      {entries.map((entry) => {
        const open = entry.children.length > 0 && !isCollapsed(entry.href)

        return (
          <SidebarMenuSubItem key={entry.href}>
            <SidebarMenuSubButton
              isActive={entry.isActive}
              onClick={(event) => {
                if (!entry.isActive || entry.children.length === 0) return
                event.preventDefault()
                toggle(entry.href)
              }}
              render={<Link href={entry.href} />}
            >
              <NodeIcon isFolder={entry.isFolder} isOpen={open} />
              <span className="truncate">{entry.title}</span>
            </SidebarMenuSubButton>
            {open ? (
              <Branch
                entries={entry.children}
                isCollapsed={isCollapsed}
                toggle={toggle}
              />
            ) : null}
          </SidebarMenuSubItem>
        )
      })}
    </SidebarMenuSub>
  )
}

export function AppSidebar({
  tree,
  visibleDepth,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: ContentNode[]
  visibleDepth: number
}) {
  const pathname = usePathname()
  const { isCollapsed, toggle } = useCollapsed(pathname)
  const view = buildSidebarView(tree, pathname, visibleDepth)

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary font-mono text-xs text-sidebar-primary-foreground">
                rd
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">{siteConfig.name}</span>
                <span className="text-xs text-muted-foreground">origin</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {view.sections.map((section) => {
                const expanded = section.isOpen && !isCollapsed(section.href)

                return (
                  <SidebarMenuItem key={section.href}>
                    <SidebarMenuButton
                      isActive={section.isActive}
                      onClick={(event) => {
                        if (!section.isActive || !section.isOpen) return
                        event.preventDefault()
                        toggle(section.href)
                      }}
                      render={<Link href={section.href} />}
                    >
                      <NodeIcon isFolder={section.isFolder} isOpen={expanded} />
                      <span className="truncate">{section.title}</span>
                    </SidebarMenuButton>

                    {expanded && section.back ? (
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            className="text-muted-foreground"
                            render={<Link href={section.back.href} />}
                          >
                            <ChevronLeftIcon />
                            <span className="truncate">
                              {section.back.title}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ) : null}

                    {expanded ? (
                      <Branch
                        entries={section.items}
                        isCollapsed={isCollapsed}
                        toggle={toggle}
                      />
                    ) : null}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <span className="px-2 py-1 text-xs text-muted-foreground">
          {siteConfig.url.replace("https://", "")}
        </span>
      </SidebarFooter>
    </Sidebar>
  )
}
