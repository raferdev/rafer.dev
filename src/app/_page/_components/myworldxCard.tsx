import Balance from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/Card'
import { Icons } from '@/components/Icons'

export const MyworldxCard = () => {
  return (
    <Card className="w-full border-0 bg-inherit shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Check This Out</CardTitle>
        <CardDescription>My new open source project Myworldx</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <img
            className="mr-4 h-20"
            src="myworldx-logo.png"
            alt="myworldx logo"
          />

          <Balance className="text-base font-light text-slate-800 sm:text-lg">
            Myworldx it's builded to github user's can show your content more
            easily based on markdown files on your repo's.
          </Balance>
        </div>
        <div className="grid grid-rows-3 gap-2">
          <Button variant="outline" className="h-22" asChild>
            <a href="https://myworldx.dev">
              <div>Link </div>
            </a>
          </Button>
          <Button variant="outline" className="h-22" asChild>
            <a href="https://myworldx.dev/raferdev">
              <p> My page</p>
            </a>
          </Button>
          <Button variant="outline" className="h-22" asChild>
            <a href="https://github.com/myworldx/myworldx">
              <Icons.github className="mr-1 h-4" />
              <div>
                <p className="text-center">Repo</p>
              </div>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
