import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import SubHeading from '@/app/ui/game-dev/subHeading'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Marketing',
}

function Marketing() {
  return (
    <article>
      <DisplayImage alt='Marketing display image.' />
      <Heading>Marketing</Heading>
      <Paragraph>
        There are all kinds of different ways to approach marketing for indie developers. The major thing to always remember is if someone says there is a best way then they are probably selling you something and it usually just makes them money. Do what feels right for your studio, your games, and your community. Always.
      </Paragraph>
      <SubHeading id='building-a-community' >Building A Community</SubHeading>
      <Paragraph>
        Building a community is the most important thing in all of this. Without your community you are absolutely nothing no matter how awesome your game is. This rule is true no matter the size or funding of your studio. If you lose the faith of your players then you lose everything.
      </Paragraph>
      <Paragraph>
        You are never above your community and you are never too important to spend time responding to them. The moment you think you are they will show you how untrue that really is. Don&apos;t forget that.
      </Paragraph>
      <SubHeading id='social-media' >Social Media</SubHeading>
      <Paragraph>
        There are tons of places online for you to post about your games or whatever it is you&apos;re working on. Never miss an opportunity to do this. You&apos;re an indie developer and you need to stand at the top of the mountain and shout about it. You&apos;re not a Triple A with millions of dollars for a marketing budget so take every chance you can to show people your work. Your work doesn&apos;t have to be perfect to talk about it so get it out there!
      </Paragraph>
      <Paragraph>
        The way we started this process was by setting up social accounts to help get people all in one place. We set up <InlineLink href='https://discord.com/invite/piratesoftware'>Discord</InlineLink> as the core community center which allowed people a common place to hang out and mingle with one another. Then we set up satellite accounts to funnel people back to the Discord. This includes things like <InlineLink href='https://x.com/PirateSoftware'>X (Twitter)</InlineLink>, <InlineLink href='https://www.instagram.com/pirate_software/'>Instagram</InlineLink>, <InlineLink href='https://store.steampowered.com/app/567380/Heartbound/'>Steam</InlineLink>, <InlineLink href='https://gamejolt.com/games/heartbound/275495'>Game Jolt</InlineLink>, <InlineLink href='https://piratesoftware.itch.io/heartbound'>Itch.io</InlineLink>, <InlineLink href='https://www.twitch.tv/piratesoftware'>Twitch</InlineLink>, <InlineLink href='https://www.youtube.com/c/piratesoftware'>YouTube</InlineLink>, <InlineLink href='https://www.reddit.com/r/Heartbound/'>Reddit</InlineLink>, and <InlineLink href='https://www.guilded.gg/piratesoftware'>Guilded</InlineLink>. This funnel effect ballooned our Discord to over 4,000 members and keeps everyone on the same page so updates don&apos;t go missed by the most engaged players.
      </Paragraph>
      <Paragraph>
        The best and most active social media platforms will change over time based on the whim of the internet. It&apos;s really important to stay ahead of these changes or at least keep in step with them to make sure you don&apos;t get caught off guard. I routinely go through tons of websites and make accounts for Pirate Software to make sure we&apos;re set up for the future.
      </Paragraph>
      <Paragraph>
        It&apos;s important to see your social media presence as a very personal thing for your players. Simply responding on posts here and there, liking them, or popping into someones stream when they play your game is huge. It may be a simple thing for you but it is absolutely world shattering for someone who loves your work. Do it. Go comment on every YouTube video for your game. Respond on Twitter any time someone mentions your game positively and talk to the people who respond negatively about how you can make your game better. BE THERE for them and they will be there for you.
      </Paragraph>
      <Paragraph>
        A lot of newer devs will immediately try to shoot for famous streamers or youtubers in order to reach the spotlight. These people get thousands if not tens of thousands of requests every day. Focus on your community and eventually one of the big names may take notice and boost your stuff to their audience.
      </Paragraph>
      <SubHeading id='paid-advertisement' >Paid Advertisement</SubHeading>
      <Paragraph>
        I generally stay away from any kind of paid promotion. As an indie dev you may not have a lot of money to throw around so it&apos;s hard to compete for eyes on the internet with so many big players out there. Time and resources are much better spent on your community over anything else.
      </Paragraph>
      <Paragraph>
        That being said you may want to play around with different advertising methods. You might find something that works for you. Just because our studio didn&apos;t find a benefit here doesn&apos;t mean you won&apos;t.
      </Paragraph>
      <SubHeading id='conventions' >Conventions</SubHeading>
      <Paragraph>
        Definitely take part in conventions but make sure not to burn out your studios wallet in the process. It&apos;s really easy to forget the cost of travel, food, and other expenses if you don&apos;t plan for them in advance. Budgeting each trip before you go is important when you&apos;re just starting out.
      </Paragraph>
      <Paragraph>
        You should really test the waters with smaller more local conventions first. Our first one was Eugene Comic Con in Eugene Oregon and the booth only cost us 20$ for an entire weekend. We met tons of people, gained a lot of fans, and learned how to run our booth better for future conventions. This kind of stuff is invaluable and really helped us get ourselves out there.
      </Paragraph>
      <Paragraph>
        Merchandise can really help offset convention costs if you&apos;ve got some good stuff. Try to bring Stickers, Pins, or Plushes to these kinds of shows because they end up getting sold pretty fast. Stay away from breakables like mugs or size restricted stuff like clothing because it&apos;s much harder to sell in a convention setting.
      </Paragraph>
      <SubHeading id='awards' >Awards</SubHeading>
      <Paragraph>
        Awards are not just granted to amazing games in the industry. You need to apply for these and they will almost always carry a cover charge. The general price is between 50-100$ USD as a standard. Look for submission forms for any of the awards you&apos;ve heard of and also keep on the lookout for new smaller award shows.
      </Paragraph>
      <Paragraph>
        There is almost always something going on and an award can really help put you and your work on the map. They sometimes also come with trophies or cool images you can link to your public launch pages.
      </Paragraph>
      <NextPrv
        prevHref='/financing'
        nextHref='/launching-your-game'
        prevContent='Financing'
        nextContent='Launching Your Game'
      />
    </article>
  )
}

export default Marketing