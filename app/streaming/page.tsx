import React from 'react'
import DisplayImage from '../ui/game-dev/displayImage'
import Heading from '../ui/game-dev/heading'
import Paragraph from '../ui/game-dev/paragraph'
import SubHeading from '../ui/game-dev/subHeading'
import ParagraphImage from '../ui/game-dev/paragraphImage'
import InlineImage from '../ui/game-dev/inlineImage'
import InlineLink from '../ui/game-dev/inlineLink'
import End from '../ui/game-dev/end'
import TwitchFrame from '../ui/twitchFrame'

function Streaming() {
  return (
    <article>
      <DisplayImage alt='Streaming display image.' />
      <Heading>Platform</Heading>
      <Paragraph>
        There is no perfect platform. Every one of these can and should be used to create a web of content across the net for viewers to find you. If you do livestreams then take content from those and put them on static video sites. Every site you generate content to is another chance for someone to find you.
      </Paragraph>
      <SubHeading id='twitch'>Twitch</SubHeading>
      <InlineImage src='/17 twitch.png' alt='Twitch thumbnail.' href='https://www.twitch.tv/piratesoftware' content='Twitch' />
      <ParagraphImage>
        <InlineLink href='https://www.twitch.tv/piratesoftware'>Twitch</InlineLink> is currently the best live streaming site for the majority of content types online. It's got great monetization options but the splits are also rather horrible at the same time. They don't allow adult content but a lot of creators skirt that line anyway. Just follow the TOS and you'll be just fine.
      </ParagraphImage>
      <Paragraph>
        Subs <br />
        Placeholder about Subs
      </Paragraph>
      <Paragraph>
        Bits <br />
        Placeholder about Bits
      </Paragraph>
      <SubHeading id='twitch'>Youtube</SubHeading>
      <InlineImage src='/27 youtube.png' alt='Youtube thumbnail.' href='https://www.youtube.com/c/piratesoftware' content='YouTube' />
      <ParagraphImage>
        Placeholder text about <InlineLink href='https://www.youtube.com/c/piratesoftware'>YouTube</InlineLink>.
      </ParagraphImage>
      <SubHeading id='twitch'>Picarto</SubHeading>
      <InlineImage src='/28 picarto.png' alt='Picarto thumbnail.' href='https://picarto.tv/' content='Picarto' />
      <ParagraphImage>
        Placeholder text about <InlineLink href='https://picarto.tv/'>Picarto</InlineLink>.
      </ParagraphImage>
      <SubHeading id='live-twitch-dev-stream'>Live Twitch Dev Stream</SubHeading>
      <div className='w-full h-8'></div>
      <TwitchFrame />
      <End />
    </article>
  )
}

export default Streaming