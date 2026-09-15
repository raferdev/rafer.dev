import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toc } from "@/components/toc"

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-6">
          <div className="min-w-0 flex-1 py-8">{children}</div>
          <Toc />
        </div>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
