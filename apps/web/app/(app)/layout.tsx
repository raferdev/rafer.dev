import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getContentTree } from "@/lib/content"

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const tree = getContentTree()

  return (
    <SidebarProvider>
      <AppSidebar tree={tree} variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-6">
          {children}
        </div>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
