'use client'

import { Button } from '@/components/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card'
import { Icons } from '@/components/Icons'

export function LinksSection() {
  return (
    <Card className="w-full border-0 bg-inherit shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">See more</CardTitle>
        <CardDescription>
          You can see more about me in the following links
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" asChild>
            <a href="https://github.com/raferdev" target="_blank">
              <Icons.github className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://youtube.com/raferdev" target="_blank">
              <Icons.youtube className="mr-2 h-4 w-4" />
              Youtube
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/u/raferdev" target="_blank">
              <Icons.linkedin className="mr-2 h-4 w-4" />
              Linkedin
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="mailto:contact@rafer.dev?subject=Contact&body=Hello, i want talk about..."
              target="_blank"
            >
              <Icons.email className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
