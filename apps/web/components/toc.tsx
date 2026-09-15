import { cn } from "@workspace/ui/lib/utils"
import { sampleToc } from "@/lib/nav"

export function Toc() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] shrink-0 overflow-y-auto py-8 pe-6 xl:block">
      <p className="mb-3 text-sm font-medium text-foreground">On this page</p>
      <nav aria-label="On this page">
        <ul className="border-s text-sm">
          {sampleToc.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "-ms-px block border-s border-transparent py-1 text-muted-foreground transition-colors hover:text-foreground",
                  item.depth === 2 ? "ps-4" : "ps-7"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
