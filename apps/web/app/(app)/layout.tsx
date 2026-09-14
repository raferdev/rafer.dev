import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toc } from "@/components/toc"

/**
 * Three-region shell: sidebar, content, and the right-hand rail.
 *
 * The sidebar uses variant="inset", which paints the page in --sidebar and
 * floats the content as a rounded, shadowed panel on top of it. That is what
 * gives the panel its distinct corner against the sidebar rather than the two
 * sharing one flat surface.
 *
 * Header and footer live *inside* SidebarInset, so the content, its heading
 * bar and its footer read as one object next to the navigation.
 */
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
