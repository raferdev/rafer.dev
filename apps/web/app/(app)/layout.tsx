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
      <AppSidebar tree={tree} visibleDepth={visibleDepth} variant="inset" />
      <SidebarInset className="md:h-[calc(100svh-0.5rem)] md:[scrollbar-gutter:stable] md:overflow-y-auto md:border-s md:border-t md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:mt-2 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:rounded-tl-xl md:peer-data-[variant=inset]:shadow-none">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
          <SiteHeader />
          <div className="flex flex-1 gap-8">{children}</div>
          <SiteFooter />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
