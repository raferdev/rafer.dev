import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getContentTree, getVisibleDepth } from "@/lib/content"

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const tree = getContentTree()
  const visibleDepth = getVisibleDepth()

  return (
    <SidebarProvider>
      <AppSidebar tree={tree} visibleDepth={visibleDepth} />
      <SidebarInset>
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
          <SiteHeader />
          <div className="flex flex-1 gap-8">{children}</div>
          <SiteFooter />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
