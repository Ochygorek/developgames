import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineImage from '@/app/ui/game-dev/inlineImage'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import ParagraphImage from '@/app/ui/game-dev/paragraphImage'
import SubHeading from '@/app/ui/game-dev/subHeading'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Financing',
}

function Financing() {
  return (
    <article>
      <DisplayImage alt='Financing display image.' />
      <Heading>How do I raise money?</Heading>
      <Paragraph>
        Making money as an indie dev can be a really daunting task especially when you&apos;re just starting out. The advice I will always give is to not quit your day job. Make games as a hobby at first. Come home every day from work and spend time on your game for a few hours. Make it a routine. Save money each pay check in your indie fund to help get assets and software for your hobby. Keep things small and this is absolutely doable.
      </Paragraph>
      <Paragraph>
        There are a number of ways you can raise funds for your games from the outside. I will list a number of them below and the strengths and weaknesses of each. Every platform has its benefit and every platform has its weakness. Spreading your game to more platforms makes things harder to manage but might extend your reach as well. It&apos;s all about balance and impact and it will be different for every game. Go slow, figure things out, move when it feels right and you know you can do it.
      </Paragraph>
      <Paragraph>
        You also have to look out for people trying to get a free piece of your pie. We get tons of scam offers every day from all kinds of sources. If you accidentally step on any of these land mines it could be the death of your project without you realizing it until months or even years later. Don&apos;t sell yourself short and look out for some of the pitfalls below. That&apos;s your pie and you need to protect it.
      </Paragraph>
      <Paragraph>
        All that being said here are a few methods we used and still use to raise money to keep the lights on.
      </Paragraph>
      <SubHeading id='streaming' >Streaming</SubHeading>
      <InlineImage src='/17 twitch.png' alt='Twitch thumbnail.' href='https://www.twitch.tv/piratesoftware' content='Twitch' />
      <ParagraphImage>
        <InlineLink href='https://www.twitch.tv/piratesoftware'>Twitch</InlineLink> has been the cornerstone of our studios income throughout everything we&apos;ve done. It serves as a great way to interact with the community, a source of revenue, and a real time interactive advertisement for the work we do. We literally would not exist without Twitch.
      </ParagraphImage>
      <Paragraph>
        After a <InlineLink href='https://twitch.uservoice.com/forums/310210-discover-browsing-and-searching/suggestions/42795278-create-a-game-development-category'>long campaign</InlineLink> Twitch recently created the <InlineLink href='https://www.twitch.tv/directory/category/software-and-game-development'>Software and Game Development</InlineLink> category for our community. We finally have a home as game devs and I couldn&apos;t be happier. Go check out the <InlineLink href='/streaming'>Streaming</InlineLink> section of the site for more information about this because there is a lot to unpack.
      </Paragraph>
      <SubHeading id='publishers' >Publishers</SubHeading>
      <InlineImage src='/18 pointing.png' alt='Pointing thumbnail.' href='https://en.wikipedia.org/wiki/List_of_video_game_publishers' content='Publishers' />
      <ParagraphImage>
        Any time you are thinking about going with a publisher just keep one question in mind. Will their help lead to profits above and beyond the revenue cut they take? If you don&apos;t know the answer or if the answer is no then you don&apos;t need a publisher. If you can release your game without a publisher then you absolutely should.
      </ParagraphImage>
      <Paragraph>
        On average, most publishers ask for 30-70% of the income of your game. This cost is a dinosaur carry-over from the days when publishers handled physical cartidges and units on shelves in retail stores. We don&apos;t need that anymore due to digital distribution like Steam, Humble Bundle, etc.
      </Paragraph>
      <SubHeading id='kickstarter' >Kickstarter</SubHeading>
      <InlineImage src='/19 kickstarter.png' alt='Kickstarter thumbnail.' href='https://www.kickstarter.com/projects/piratesoftware/heartbound' content='Kickstarter' />
      <ParagraphImage>
        <InlineLink href='https://www.kickstarter.com/projects/piratesoftware/heartbound'>Kickstarter</InlineLink> is a great place to raise funding when you&apos;ve already got a community base and a workable demo. I definitely wouldn&apos;t advise going this route before you have those things ready. I also wouldn&apos;t rely on Kickstarter as something that will fund the entire development of your game. We used it as a marketing platform and to get initial funding for hardware, software, and audio samples. Wait to launch your Kickstarter until you know you will succeed. Don&apos;t leave it up to chance.
      </ParagraphImage>
      <SubHeading id='merchandise' >Merchandise</SubHeading>
      <InlineImage src='/20 flamethrower.png' alt='Merchandise thumbnail.' href='https://piratesoftware.bigcartel.com/' content='Merchandise' />
      <ParagraphImage>
        <InlineLink href='https://piratesoftware.bigcartel.com/products'>Merchandise</InlineLink> has been a lot of fun to create and distribute around the world. With changing shipping rates and material costs things have been pretty rough but we always find a way to adapt to the new meta.
      </ParagraphImage>
      <Paragraph>
        We use <InlineLink href='https://www.pirateship.com/'>Pirate Ship</InlineLink> for shipping because they let you upload a csv, are super cheap, and are ridiculously on-brand for us. We get our stickers made through <InlineLink href='https://www.stickermule.com/'>Sticker Mule</InlineLink> because they are very high quality, don&apos;t break the bank, and ship super quickly. For prints and clothing we go through <InlineLink href='https://www.printful.com/'>Printful</InlineLink> which does both the manufacturing and the shipping. They also automatically hook up to store fronts like <InlineLink href='https://www.bigcartel.com/'>Big Cartel</InlineLink> and <InlineLink href='https://www.shopify.com/'>Shopify</InlineLink> which makes things super easy.
      </Paragraph>
      <SubHeading id='subscription-services' >Subscription Services</SubHeading>
      <InlineImage src='/21 kofi.png' alt='Kofi thumbnail.' href='https://ko-fi.com/piratesoftware/tiers' content='Ko-Fi' />
      <ParagraphImage>
        <InlineLink href='https://ko-fi.com/piratesoftware/tiers'>Ko-Fi</InlineLink> is like Patreon if Patreon wasn&apos;t the actual devil. Unlike the actual devil, Ko-Fi charges a flat fee for their subscription service. Right now it&apos;s 54$ a year. That&apos;s 4.50$ per month. No hidden percentages or other garbage. Literally all the functionality that Patreon offers but without the 8% helltax tacked on.
      </ParagraphImage>
      <Paragraph>
        When people join in on Tiers they also pay immediately so no more offset payments or stolen content when someone declines their card at the end of the month. They also have an alert system for your stream and you can accept donations through them. Switch to Ko-Fi. Seriously.
      </Paragraph>
      <SubHeading id='scams' >Scams</SubHeading>
      <InlineImage src='/22 scam face.png' alt='Scams thumbnail.' href='https://www.fdic.gov/resources/consumers/consumer-news/2021-10.html' content='Scam Preventions' />
      <ParagraphImage>
        <InlineLink href='https://www.fdic.gov/resources/consumers/consumer-news/2021-10.html'>Scams</InlineLink> are a super prevalent pitfall in the world of the indie dev. Do not sign anything you haven&apos;t read. If you&apos;re unsure of what something means in a contract then talk to a lawyer. If you do accidentally give out keys for your game you can burn them through the Steam Partner tools so don&apos;t worry. Outside of that here are a few examples of some scams we&apos;ve encountered and avoided.
      </ParagraphImage>
      <SubHeading id='the-influencer-scam' >The Influencer Scam</SubHeading>
      <Paragraph>
        This is the most common form of scam targeting indie developers. <br/>
        You will get these. <br/>
        All of us do.      
      </Paragraph>
      <Paragraph>
        The scam works generally over email and starts with someone claiming they are a streamer or game reviewer. They will be using the correct icon for their profile, show legitimate links to social media accounts, and talk a little bit about their content. However, the email will not be correct. Always check for an influencer&apos;s business email before sending keys. You can usually find this on their YouTube About section. It may just be one letter off but it&apos;s not the real creator contacting you if they don&apos;t match up.
      </Paragraph>
      <Paragraph>
        These emails are automated and the key eventually winds up on a third party website to be sold at a price lower than your games price. Out of thousands of emails we have only received a handful of legitimate human beings. Be vigilant in your checks and don&apos;t be wowed by a potentially famous creator emailing you.
      </Paragraph>
      <Paragraph>
        With that in mind my way of handling this has changed a bit in the last few years. I now give them the Steam Key and then burn it 12-24 hours later. On the scammers side their automated system checks the key and puts it up for sale. Then someone buys it and it doesn&apos;t work. That customer is then likely to leave a negative review for the scam seller. Hit them where it hurts. In their reputation. After starting this tactic my influencer scam emails decreased by roughly 90% and haven&apos;t come back. Guessing they have a blacklist.
      </Paragraph>
      <SubHeading id='the-bundle-scam' >The Bundle Scam</SubHeading>
      <Paragraph>
        Many times you will receive offers to be part of a bundle. Scammers will claim you will get between 10-30% of the bundle sales if you give them 10,000-30,000 steam keys for your game. If you sign the contract and send the keys they will start selling them as normal up until a point. From here they will start a &quot;Happy Hour&quot; and sell 5-10x as many keys per purchase. Another company knows when this Happy Hour begins and will buy all of the keys in the next few minutes.
      </Paragraph>
      <Paragraph>
        You are then left with 10-20% of the initial amount you believed you were getting. At the same time another company now has tens of thousands of your games keys and will undercut your steam prices on every third party key site on the net. This will considerably impact your ability to sell copies of your game.
      </Paragraph>
      <Paragraph>
        These scams are rare, well thought out, and seem logical from a business perspective. Talk to a legal rep and make sure you know what you are getting into before you sign anything. Don&apos;t get caught up in shiny sales numbers.
      </Paragraph>
      <NextPrv
        prevHref='/tools'
        nextHref='/marketing'
        prevContent='Tools'
        nextContent='Marketing'
      />
    </article>
  )
}

export default Financing