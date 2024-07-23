import DisplayImage from '@/app/ui/game-dev/displayImage'
import Heading from '@/app/ui/game-dev/heading'
import InlineImage from '@/app/ui/game-dev/inlineImage'
import InlineLink from '@/app/ui/game-dev/inlineLink'
import NextPrv from '@/app/ui/game-dev/nextPrev'
import Paragraph from '@/app/ui/game-dev/paragraph'
import ParagraphImage from '@/app/ui/game-dev/paragraphImage'
import SubHeading from '@/app/ui/game-dev/subHeading'
import React from 'react'

function SkillsRquired() {
  return (
    <article>
      <DisplayImage alt='Skills required display image.' />
      <Heading>What skills do I need?</Heading>
      <Paragraph>
        What if I told you that you didn't need any? Well guess what. You don't. We live in a time where you can learn anything you need to make a game with relative ease. Despite what you may think none of that comes from natural talent. We all just pour our hours into getting better at what we do. You can do the same. Below you will find some examples of games that are already out there that help reinforce this.
      </Paragraph>
      <SubHeading id='art'>You don't need to be an amazing artist.</SubHeading>
      <InlineImage src='/1 thomas was alone.png' alt='Thomas was alone thumbnail.' href='https://store.steampowered.com/app/220780/Thomas_Was_Alone/' content='Thomas Was Alone' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/app/220780/Thomas_Was_Alone/'>Thomas Was Alone</InlineLink> is made of rectangles. All of it. Even the particles. It will also make you cry. Thomas Was Alone is a masterclass in minimalist art and fantastic voice over. You can make simple shapes. You can learn to make particles out of simple shapes. You can create a shell of a game that accomplishes the same basic goals as Thomas Was Alone. You can make a game.
      </ParagraphImage>
      <InlineImage src='/2 suits.png' alt='Suits thumbnail.' href='https://store.steampowered.com/app/410670/Suits_A_Business_RPG/' content='Suits A Business RPG' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/app/410670/Suits_A_Business_RPG/'>Suits A Business RPG</InlineLink> was made with incredibly simplistic pixel art and drawn pencil images that are scanned into a computer. It's entirely unique and incredible. This shows that you can really break out of standard game visuals and still succeed. You can draw doodles on paper. You can make a game.
      </ParagraphImage>
      <InlineImage src='/3 west of loathing.png' alt='West of loathing thumbnail.' href='https://store.steampowered.com/app/597220/West_of_Loathing/' content='West of Loathing' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/app/597220/West_of_Loathing/'>West of Loathing</InlineLink> is the glorious successor to Kingdom of Loathing. It's also entirely stick figures and insane humor. The cartoony simplistic figures really help lean in to the rest of the story and jokes in a way that makes it all even funnier. You can make a stick man. You can make a game.
      </ParagraphImage>
      <InlineImage src='/4 nepenthe.png' alt='Nepenthe thumbnail.' href='https://store.steampowered.com/app/789570/Nepenthe/' content='Nepenthe' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/app/789570/Nepenthe/'>Nepenthe</InlineLink> takes a similar route as Suits A Business RPG. It was made entirely in colored pencil, scanned into a computer, and used as tiles and assets. The effect ends up making a really unique and surreal adventure. You can draw doodles on paper. You can make a game.
      </ParagraphImage>
      <SubHeading id='music'>You don't need to be an amazing musician.</SubHeading>
      <InlineImage src='/5 hidden folks.png' alt='Hidden folks thumbnail.' href='https://store.steampowered.com/app/435400/Hidden_Folks/' content='Hidden Folks' />
      <ParagraphImage>
        <InlineLink href='https://store.steampowered.com/app/435400/Hidden_Folks/'>Hidden Folks</InlineLink> is effectively an evolution on Where's Waldo and while it's simple in concept it's super well executed. The wild thing that sets it apart is the audio. Everything... and I do mean everything, is mouth sounds. All of the music, the effects, all of it was made with someones face. It's incredible. You have a face. You can make a game.
      </ParagraphImage>
      <SubHeading id='programming'>You don't need to be an amazing programmer.</SubHeading>
      <InlineImage src='/6 undertale.png' alt='Undertail thumbnail.' href='https://store.steampowered.com/app/391540/Undertale/' content='Undertale' />
      <ParagraphImage>
        Yes, that's right. <InlineLink href='https://store.steampowered.com/app/391540/Undertale/'>Undertale</InlineLink> is a damn incredible game. It has a unique combat style, great story, the puzzles are ok, and the dad jokes are plentiful. Toby Fox was a much more novice programmer at the time and the code base has some incredibly odd choices throughout it. Does it matter? Is the game less fun? Protip: It doesn't matter. You can learn programming as you go. You can make a game.
      </ParagraphImage>
      <NextPrv
        prevHref='/who-are-you'
        nextHref='/picking-a-genre'
        prevContent='Who Are You?'
        nextContent='Picking a Genre'
      />
    </article>
  )
}

export default SkillsRquired