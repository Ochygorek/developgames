import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import TwitchFrame from '@/app/ui/twitchFrame'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Live Streaming',
}

function LiveStream() {
  return (
    <article>
      <Heading>Live Twitch Dev Stream</Heading>
      <Paragraph>For the stream schedule, please refer to <InlineLink href='https://www.twitch.tv/piratesoftware/schedule'>this schedule</InlineLink> from Thor&apos;s official Twitch page.</Paragraph>
      <div className='w-full h-8'></div>
      <TwitchFrame />
      <NextPrv 
        prevHref=''
        nextHref='/who-are-you'
        prevContent='Game Dev'
        nextContent='Who Are You?'
      />
    </article>
  )
}

export default LiveStream