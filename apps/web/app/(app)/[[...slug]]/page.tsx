import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Mdx } from "@/components/mdx"
import { Toc } from "@/components/toc"
import { extractHeadings, getAllDocSlugs, getDoc } from "@/lib/content"

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({
    slug: slug.length ? slug : undefined,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getDoc(slug ?? [])
  if (!doc) return {}

  return { title: doc.title, description: doc.description ?? undefined }
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const doc = getDoc(slug ?? [])
  if (!doc) notFound()

  return (
    <>
      <div className="min-w-0 flex-1 py-8">
        <article className="max-w-2xl">
          <header className="flex flex-col gap-3">
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-balance">
              {doc.title}
            </h1>
            {doc.description ? (
              <p className="text-lg text-pretty text-muted-foreground">
                {doc.description}
              </p>
            ) : null}
            {doc.date ? (
              <p className="font-mono text-xs text-muted-foreground">
                {new Date(doc.date).toISOString().slice(0, 10)}
              </p>
            ) : null}
          </header>
          <Mdx source={doc.body} />
        </article>
      </div>
      <Toc headings={extractHeadings(doc.body)} />
    </>
  )
}
