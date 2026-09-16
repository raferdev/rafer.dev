"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeftIcon } from "lucide-react"

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

function SubTree({ entries }: { entries: SidebarEntry[] }) {
  if (entries.length === 0) return null

  return (
    <SidebarMenuSub>
      {entries.map((entry) => (
        <SidebarMenuSubItem key={entry.href}>
          <SidebarMenuSubButton
            isActive={entry.isActive}
            render={<Link href={entry.href} />}
          >
            {entry.title}
          </SidebarMenuSubButton>
          <SubTree entries={entry.children} />
        </SidebarMenuSubItem>
      ))}
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
        {view.back ? (
          <SidebarGroup className="pb-0">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="text-muted-foreground"
                    render={<Link href={view.back.href} />}
                  >
                    <ChevronLeftIcon />
                    <span className="truncate">{view.back.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {view.items.map((entry) => (
                <SidebarMenuItem key={entry.href}>
                  <SidebarMenuButton
                    isActive={entry.isActive}
                    render={<Link href={entry.href} />}
                  >
                    {entry.title}
                  </SidebarMenuButton>
                  <SubTree entries={entry.children} />
                </SidebarMenuItem>
              ))}
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
