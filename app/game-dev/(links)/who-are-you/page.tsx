import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Who Are You?',
}

function WhoAreYou() {
  return (
    <article>
      <DisplayImage alt='Who are you display image.' />
      <Heading>Who are you?</Heading>
      <Paragraph>
        My name is Jason Thor Hall but I just go by my middle name of Thor. I started in the games industry in 2004 on World of Warcraft Vanilla. I&apos;ve worked for Blizzard Entertainment, Amazon Games Studios, the United States Department of Energy, and now Pirate Software. I&apos;ve got three black badges from DEFCON, two for cryptography, and one for telephreaking. I&apos;m a programmer, hacker, game developer, and all around giant nerd.
      </Paragraph>
      <Paragraph>
        I left all of that behind and started my studio Pirate Software in 2017 and I haven&apos;t looked back since. As the studio head I wear a lot of hats. I&apos;m the programmer, writer, designer, game director, social media manager, and tons of other jobs. I feel extremely confident in running my studio and in how far we&apos;ve come and how everything has turned out. Any decision that I ever make is based on analytics and research.
      </Paragraph>
      <Paragraph>
        Right now we are working on an RPG called <InlineLink href='https://store.steampowered.com/app/567380/Heartbound/'>Heartbound</InlineLink>. It&apos;s an adventure that focuses heavily on player choice and I stream all of the development live every day on <InlineLink href='https://www.twitch.tv/piratesoftware'>Twitch</InlineLink>. Heartbound made it through Steam Greenlight in 11 days as the top voted submission across the entire platform. We then ran a successful Kickstarter campaign that hit 385% of its funding goal. At the time of this writing Heartbound is in Early Access on Steam and voted 97% positive out of 1,213 reviews. It&apos;s been translated into six languages and is really well liked all over the world.      </Paragraph>
      <Paragraph>
        Listed below are all of the bits of advice that I have for anyone wanting to get into making games. Understand that this line of work is not for everyone. It&apos;s not easy. It can be boring at times. It can be soul crushing at times. Just like any other job. That being said it can also be the most fulfilling thing you&apos;ve ever done in your life. There is nothing that compares to someone playing your creation and enjoying it.
      </Paragraph>
      <NextPrv 
        prevHref='/live-stream'
        nextHref='/skills-required'
        prevContent='Live Stream'
        nextContent='Skills Required'
      />
    </article>
  )
}

export default WhoAreYou