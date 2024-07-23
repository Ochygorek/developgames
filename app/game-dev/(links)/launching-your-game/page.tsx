import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineImage from '@/app/ui/game-dev/inlineImage'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import ParagraphImage from '@/app/ui/game-dev/paragraphImage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Launching Your Game',
}

function LaunchingYourGame() {
  return (
    <article>
      <DisplayImage alt='Launching your game display image.' />
      <Heading>Where should I launch my game?</Heading>
      <Paragraph>
        Yes. No seriously... yes. There are so many different places you can launch your games today. We took a very Steam centric approach because they make it so easy to work with third parties. This let us spread our reach immensely without increasing our total workload by very much. As a small team, that&apos;s pretty enormous and it&apos;s worked out well for us.
      </Paragraph>
      <InlineImage src='/23 steam.png' alt='Steam thumbnail.' href='https://store.steampowered.com/' content='Steam' id='steam' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/'>Steam</InlineLink> is the best monetization platform that exists for games. With a massive frontend geared towards player interaction and feedback, a robust backend to help you manage your assets and finances, and tons of promotional tools Steam really has it all.
      </ParagraphImage>
      <Paragraph>
        Steam has regular platform wide sales that you can join in on. You get to set the sale price and you can opt-in or decline at will. They don&apos;t do anything with your game without your consent at any time. Adding your game to a sale generally gives a large boost to discoverability for the life of the sale. If you put your game on sale for at least 20% off or more then everyone who has wishlisted the game will get an email about it. Use this to help bump up visibility and get your game in more peoples hands.
      </Paragraph>
      <Paragraph>
        For each game you launch you will get five &apos;Visibility Rounds&apos;. These VRs give your game front page time to the tune of 1,000,000 impressions. As a small studio this is a HUGE deal and should only be used for massive updates. This is your time to really show your game off and get a huge amount of burst traffic. You really need to make sure everything is solid before firing one of these off. Also, if you launch your game in Early Access... once you launch fully you get a free VR immediately that doesn&apos;t count against your games five. Launch in Early Access, get feedback, use it to improve, fully launch and get a free burst of visibility.
      </Paragraph>
      <Paragraph>
        Steam takes a 30% cut of all sales but that doesn&apos;t really tell the whole story. They allow regional price localization which is a MASSIVE boost to your income and they also take 0% whenever you sell a Steam key on a third party platform. This means you can sell anywhere in the world or on other platforms with relative ease while still only managing a single distribution base. By localizing our prices our income was increased by 20-25% from Brazil alone. Localize your games. Localize your prices. Steam is great. Don&apos;t let anyone convince you otherwise.
      </Paragraph>
      <InlineImage src='/24 humble bundle.png' alt='Humble bundle thumbnail.' href='https://www.humblebundle.com/' content='Humble Bundle' id='humble-bundle' />
      <ParagraphImage>
        <InlineLink href='https://www.humblebundle.com/'>Humble Bundle</InlineLink> is a great middle-man platform that can help improve your sales by distributing Steam keys. They don&apos;t take any amount from your sale unless you donate some of your profit to them which can really help when you&apos;re just starting out. They&apos;ve also got a partnership program so people who buy things you recommend can give you a small boost to income passively. I generally put up partnership links for tools and games that we use or play on stream.
      </ParagraphImage>
      <InlineImage src='/25 game jolt.png' alt='Game jolt thumbnail.' href='https://gamejolt.com/games/heartbound/275495' content='Game Jolt' id='game-jolt' />
      <ParagraphImage>
        <InlineLink href='https://gamejolt.com/games/heartbound/275495'>Game Jolt</InlineLink> is the god of demo sites. Make a demo for your game and put it on Game Jolt. When we first got a demo for Heartbound up on Steam we saw minimal traffic. Once we put it up on Game Jolt we had thousands of people play it and for the first year nearly 95% of all YouTube videos for Heartbound listed Game Jolt as where they got their download. It was huge for us and really helped get the word out about our game. They also give you a little bit of side cash from the ads that run on your games page. They don&apos;t need to do that and it&apos;s a really nice thing to cash out on every once in a while.
      </ParagraphImage>
      <InlineImage src='/26 itchio.png' alt='Itch.io thumbnail.' href='https://piratesoftware.itch.io/heartbound' content='Itch.io' id='itchio' />
      <ParagraphImage>
        <InlineLink href='https://piratesoftware.itch.io/heartbound'>Itch.io</InlineLink> has more customizability than any other site but unfortunately lacks in the discoverability department. You will definitely be leading most people to find your page here but when they do... oh my science... it will be gorgeous. I mean... just look at ours in the link there. You can also sell Steam keys through Itch.io as yet another source of income to pretty great effect. If you want a fancy and beautiful store front to run your sales through then this is the site for you.
      </ParagraphImage>
      <NextPrv
        prevHref='/marketing'
        nextHref='/secret'
        prevContent='Marketing'
        nextContent='???'
      />
    </article>
  )
}

export default LaunchingYourGame