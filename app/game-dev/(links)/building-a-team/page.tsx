import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Build a Team',
}

function BuildingATeam() {
  return (
    <article>
      <DisplayImage alt='Building a team display image.' />
      <Heading>How do I build a team?</Heading>
      <Paragraph>
        In todays world this is a lot easier than you think. We actually run four game jams a year over on our <InlineLink href='https://discord.com/invite/piratesoftware'>Discord</InlineLink> servers specifically to help people get comfortable with making games together. Join game jams there or on <InlineLink href='https://itch.io/jams'>Itch.io</InlineLink>. You can find HUNDREDS of game jams there and really mingle with a bunch of people out there. The more you do this the more confident you will be in your abilities and the more you will learn what you are looking for in a team.
      </Paragraph>
      <Paragraph>
        From there it's just a matter of determining how your team is going to run on the financial side of things. This is entirely up to you and the laws of your area. For us we split the sales of our games between the devs working on it. The OST sales are also given entirely to our musician so they get a nice bump for that. It's really important that people are fairly compensated for their work and that the payment structure is defined and agreed upon early on. Helps avoid hurt feelings and legal issues down the line.
      </Paragraph>
      <Paragraph>
        Just like with making games this is a learned skill that takes time to get better at. The more game jams or social projects you work on the better you will get at them. Learn from each experience, keep notes, learn about yourself and what your limits are, learn to read when others are at their limit or overworking themselves. Becoming a leader takes time and is a never ending process so don't feel bad if you mess up once in a while.
      </Paragraph>
      <NextPrv
        prevHref='/picking-a-genre'
        nextHref='/tools'
        prevContent='Picking a Genre'
        nextContent='Tools'
      />
    </article>
  )
}

export default BuildingATeam