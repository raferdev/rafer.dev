import type { MDXComponents } from "mdx/types"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { slugifyHeading } from "@/lib/content"

function headingId(children: React.ReactNode): string | undefined {
  return typeof children === "string" ? slugifyHeading(children) : undefined
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      id={headingId(children)}
      className="mt-10 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={headingId(children)}
      className="mt-8 scroll-m-20 text-base font-medium tracking-tight"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-7 text-muted-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 ml-6 flex list-disc flex-col gap-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 ml-6 flex list-decimal flex-col gap-2 text-muted-foreground">
      {children}
    </ol>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-foreground underline underline-offset-4"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-4 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mt-4 overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b px-4 py-2 text-left font-medium">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b px-4 py-2 text-muted-foreground last:border-0">
      {children}
    </td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-s-2 ps-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  Button,
  Separator,
}

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  )
}
