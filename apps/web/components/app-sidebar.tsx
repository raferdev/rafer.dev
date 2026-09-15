"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@workspace/ui/components/sidebar"
import type { ContentNode } from "@/lib/content"
import { siteConfig } from "@/lib/config"

function NodeLink({ node, active }: { node: ContentNode; active: string }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={active === node.href}
        render={<Link href={node.href} />}
      >
        {node.title}
      </SidebarMenuButton>
      {node.children.length > 0 ? (
        <SidebarMenuSub>
          {node.children.map((child) => (
            <SidebarMenuSubItem key={child.href}>
              <SidebarMenuSubButton
                isActive={active === child.href}
                render={<Link href={child.href} />}
              >
                {child.title}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      ) : null}
    </SidebarMenuItem>
  )
}

export function AppSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: ContentNode[] }) {
  const pathname = usePathname()

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
        {tree.map((node) =>
          node.isFolder ? (
            <SidebarGroup key={node.href}>
              <SidebarGroupLabel>
                <Link href={node.href}>{node.title}</Link>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {node.children.map((child) => (
                    <NodeLink key={child.href} node={child} active={pathname} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <SidebarGroup key={node.href}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <NodeLink node={node} active={pathname} />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        )}
      </SidebarContent>

      <SidebarFooter>
        <span className="px-2 py-1 text-xs text-muted-foreground">
          {siteConfig.url.replace("https://", "")}
        </span>
      </SidebarFooter>
    </Sidebar>
  )
}
