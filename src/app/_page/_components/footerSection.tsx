import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card'

export const FooterSection = () => {
  return (
    <Card className="w-full border-0 bg-inherit shadow-none">
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Balancer>
            This landing page are open source and you can find it
            <Button variant="outline" className="ml-4" asChild>
              <a
                href="https://github.com/raferdev/landing-page"
                target="_blank"
              >
                <div>here</div>
              </a>
            </Button>
          </Balancer>
        </div>
      </CardContent>
      <CardFooter className=" flex w-full items-center justify-center text-sm text-muted-foreground">
        @raferdev 2023
      </CardFooter>
    </Card>
  )
}
