import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Picking a Genre',
}

function PickAGenre() {
  return (
    <article>
      <DisplayImage alt='Picking a genre display image.' />
      <Heading>What kind of game should I make?</Heading>
      <Paragraph>
        Everyone wants to make the biggest most impressive game they&apos;ve ever seen at first. They want to show it off for clout and admiration from others. They want to make something worthy of praise. Many of us want to make our dream game right off the bat and just amaze everyone with how awesome we are. Don&apos;t. Don&apos;t make that game as your first game.
      </Paragraph>
      <Paragraph>
        If you make your dream game it&apos;s the same as fighting the final boss at level one. You need to build up a little bit of know-how by grinding lower level mobs first. You need to learn what kind of developer you are. You need to learn what kinds of games you like making not just the ones you like playing. You need to find your style and form your niche in the world of game development. We all have a voice and making something small helps you find yours.
      </Paragraph>
      <Paragraph>
        This doesn&apos;t mean you need to go sadly run yourself through tutorials or miles of projects that will never see the light of day. It means you should develop something small with the intention of releasing it and getting feedback so you can level up. Play dungeons and dragons and DM a few games with a custom world you built. Make an arcade game, launch it, and get feedback from people. Join a bunch of Game Jams and feel out how you like working with others or what works best for a team. Grow yourself so you can make great games.
      </Paragraph>
      <Paragraph>
        One of the best ways to start this process is by building a <InlineLink href='https://docs.google.com/document/u/0/d/1Vl7BMvzUOhbunJrI_X1gUc6x-LAp3aaBiPwHUf27B70/edit?pli=1'>Game Design Document</InlineLink>. This is a living document to help you organize your entire project and stay in scope. It also lets you investigate different engines or languages that may work with the kind of game you&apos;re making before you commit. Overall a GDD saves you time and money and is always beneficial.
      </Paragraph>
      <Paragraph>
        Even with all of my prior experience I had no idea what I was doing when I went indie at first. I had never launched a game outside of a triple A studio. I had never launched a demo or built a community. We used our first game <InlineLink href='https://store.steampowered.com/app/454380/Champions_of_Breakfast/'>Champions of Breakfast</InlineLink> to do that. We went through Steam Greenlight, made all the icons, learned how to build achievements, Steam trading cards, made a Discord, made a Twitter, reached out to streamers, and everything else that a studio needs to know.
      </Paragraph>
      <Paragraph>
        Our little game didn&apos;t do very well but it taught us everything we needed to know to make <InlineLink href='https://store.steampowered.com/app/567380/Heartbound/'>Heartbound</InlineLink> succeed. Champions of Breakfast was made in twenty four days from concept to release on Steam and it is by far the most important step we ever took as a studio.
      </Paragraph>
      <NextPrv
        prevHref='/skills-required'
        nextHref='/building-a-team'
        prevContent='Skills Required'
        nextContent='Building a Team'
      />
    </article>
  )
}

export default PickAGenre