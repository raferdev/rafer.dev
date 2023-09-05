import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/Card'

export const ChessInvite = () => {
  return (
    <Card className="w-full border-0 bg-inherit shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Let's play a Chess?</CardTitle>
        <CardDescription>
          I started to play chess a few months, have mercy please
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <img
            className="mr-6 h-20 w-20"
            src="chess-icon.png"
            alt="chess.com logo"
          />

          <Balancer className="text-lg font-light text-slate-800">
            Invite me to play a chess game on chess.com
          </Balancer>
        </div>
        <div className="grid items-center">
          <Button variant="outline" className="h-22" asChild>
            <a
              href="https://www.chess.com/play/online/new?isInvited=1&opponent=raferdev"
              target="_blank"
            >
              <div>Link </div>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
