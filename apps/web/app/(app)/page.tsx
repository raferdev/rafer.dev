import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <article className="flex max-w-2xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Getting started
        </p>
        <h1
          id="overview"
          className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance"
        >
          Introduction
        </h1>
        <p className="text-lg text-pretty text-muted-foreground">
          The shell for this site: navigation on the left, content in the
          middle, section links on the right.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2
          id="layout-regions"
          className="scroll-m-20 text-xl font-semibold tracking-tight"
        >
          Layout regions
        </h2>
        <p className="leading-7 text-muted-foreground">
          The sidebar is rendered with the <code>inset</code> variant, so the
          page is painted in the sidebar colour and this panel floats on top of
          it with a rounded corner and a soft shadow. The header and footer sit
          inside that panel, which is what makes the content read as one object
          beside the navigation instead of a column sharing the same flat
          background.
        </p>

        <h3
          id="sidebar"
          className="scroll-m-20 pt-2 text-base font-medium tracking-tight"
        >
          Sidebar
        </h3>
        <p className="leading-7 text-muted-foreground">
          Navigation is grouped into sections and driven by data in{" "}
          <code>lib/nav.ts</code>. The active item is resolved from the current
          pathname, so links light up without any extra wiring. Collapse it with
          the trigger in the header, or press <kbd>Ctrl</kbd> + <kbd>B</kbd>.
        </p>

        <h3
          id="content"
          className="scroll-m-20 pt-2 text-base font-medium tracking-tight"
        >
          Content
        </h3>
        <p className="leading-7 text-muted-foreground">
          The middle column is capped at a comfortable measure so long prose
          does not stretch across the full panel on a wide display.
        </p>

        <h3
          id="on-this-page"
          className="scroll-m-20 pt-2 text-base font-medium tracking-tight"
        >
          On this page
        </h3>
        <p className="leading-7 text-muted-foreground">
          The right rail lists the sections of the current page. It sticks below
          the header while you scroll and is hidden under <code>xl</code>, where
          the space is better spent on the content.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2
          id="responsive"
          className="scroll-m-20 text-xl font-semibold tracking-tight"
        >
          Responsive behaviour
        </h2>
        <p className="leading-7 text-muted-foreground">
          Below <code>md</code> the sidebar becomes a sheet opened from the
          header. Between <code>md</code> and <code>xl</code> the sidebar and
          content remain, and the right rail drops away.
        </p>
        <div className="flex gap-3 pt-2">
          <Button>Primary action</Button>
          <Button variant="outline">Secondary</Button>
        </div>
      </section>
    </article>
  )
}
