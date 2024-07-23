import React from 'react'
import StartRead from '../ui/game-dev/readStart'
import Heading from '../ui/game-dev/heading'
import DisplayImage from '../ui/game-dev/displayImage'
import Paragraph from '../ui/game-dev/paragraph'
import SubHeading from '../ui/game-dev/subHeading'
import InlineLink from '../ui/game-dev/inlineLink'

function GameDev() {
  return (
    <article>
      <DisplayImage alt='Game dev display image.' />
      <Heading>Game Dev Overview</Heading>
      <Paragraph>
        This game development guide shares Jason Thor Hall's perspective and experience in the industry. In this guide, you'll learn about Thor's background, the essential skills for game development, how to choose a genre, assemble a team, select the your toolkit, secure financing, market your game, and prepare for a successful launch.
      </Paragraph>
      <SubHeading id='live-stream' >Live stream</SubHeading>
      <Paragraph>
        Watch Thor develop <InlineLink href='https://store.steampowered.com/app/567380/Heartbound/'>Heartbound</InlineLink> and other games live almost every day (except for tuesdays). The official streaming schedule can be found on <InlineLink href='https://www.twitch.tv/piratesoftware/schedule'>Thor's Twhitch account</InlineLink> page.
      </Paragraph>
      <SubHeading id='skills-required' >Skills Required</SubHeading>
      <Paragraph>
        In this section, you'll discover what skills are essential for game development like art, music and programming. However, be prepared for some surprising realities about what's truly needed to successfully make a game.
      </Paragraph>
      <SubHeading id='picking-a-genre' >Picking a Genre</SubHeading>
      <Paragraph>
        Understand that your dream game might initially seem complex, especially when you're just starting. Treat it as a journey of growth, and don't expect to tackle the most challenging aspects right from the start. Progress gradually rather than trying to take on the final boss at level one.
      </Paragraph>
      <SubHeading id='building-a-team' >Building a Team</SubHeading>
      <Paragraph>
        Find a community and join a team, or connect with one through our game jam. Once you've assembled your team, define roles and start developing your game together.
      </Paragraph>
      <SubHeading id='tools' >Tools</SubHeading>
      <Paragraph>
        Remember, tools don't make the maker. It's not the software you use but how you use it that matters most in game development.
      </Paragraph>
      <SubHeading id='financing' >Financing</SubHeading>
      <Paragraph>
        Explore the various ways to secure funding for your game development project along with a few thing to look out for.
      </Paragraph>
      <SubHeading id='marketing' >Marketing</SubHeading>
      <Paragraph>
        Build a community, raise awareness, and convert interest into action.
      </Paragraph>
      <SubHeading id='launching-your-game' >Launching Your Game</SubHeading>
      <Paragraph>
        Prepare to tackle the initial challenges and publish your game on your chosen platform. Whether to go solo or partner with a publisher is a matter of debate and a specific case.
      </Paragraph>
      <StartRead 
        startHref='/live-stream'
        startContent='Live stream'
      />
    </article>
  )
}

export default GameDev