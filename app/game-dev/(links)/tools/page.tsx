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
  title: 'Tools',
}

function Tools() {
  return (
    <article>
      <DisplayImage alt='Tools display image.' />
      <Heading>Tools</Heading>
      <Paragraph>
        Right now is the best time in history to make a game. Tools are easier to access and tons of cheap or free versions are available for any discipline. Social programs such as <InlineLink href='https://www.guilded.gg/piratesoftware'>Guilded</InlineLink> and <InlineLink href='https://discord.com/invite/piratesoftware'>Discord</InlineLink> allow people to work together collaboratively from anywhere. With storage solutions like Google Drive and Github we can share files and work without a huge amount of financial buy in.
      </Paragraph>
      <SubHeading id='engines'>There is no best engine.</SubHeading>
      <Paragraph>
        Choose an engine that supports your style of game and your financial situation. Don't choose an engine based on what people say is the 'best' engine. There is no 'best' engine. There are great engines for different kinds of games. Tools are not diminished in value based on their price or lack thereof. There are also hundreds of engines available out there. Go <InlineLink href='https://enginesdatabase.com/'>explore</InlineLink> your options!
      </Paragraph>
      <Paragraph>
        <InlineLink href='https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/'>Doki Doki Literature Club</InlineLink> was made in a free to use python tool called <InlineLink href='https://www.renpy.org/'>Ren'Py</InlineLink> that is specifically designed to make visual novels. <InlineLink href='https://store.steampowered.com/app/248820/Risk_of_Rain_2013/'>Risk of Rain</InlineLink> was made in <InlineLink href='https://www.yoyogames.com/en/gamemaker'>GameMaker</InlineLink> and <InlineLink href='https://web.archive.org/web/20210920062120/https://riskofraingame.com/team/'>MS Paint</InlineLink>. Yes, you read that right... MS Paint. The cost of your tools does not define the value of what you make.
      </Paragraph>
      <Paragraph>
        Understand that this isn't an exhausive list of engines. There are tons of engines out there that are good or great for a variety of game styles. Go out there, find stuff, build stuff, and don't be an elitist about tools.
      </Paragraph>
      <InlineImage src='/7 godot.png' alt='Godot thumbnail.' href='https://godotengine.org/' content='Godot' />
      <ParagraphImage>
        <InlineLink href='https://godotengine.org/'>Godot</InlineLink> is a beast. Completely built by its community, fully open source, and entirely free. It excels in 3d is great for 2d and is now being used by major studios. You literally can't get a better deal as a small studio than free. Actually free. Not free with royalties. Real free. Use Godot. Seriously. Godot was used to make <InlineLink href='https://store.steampowered.com/app/1637320/Dome_Keeper/'>Dome Keeper</InlineLink> and <InlineLink href='https://store.steampowered.com/app/2124780/Endoparasitic/'>Endoparasitic</InlineLink>.
      </ParagraphImage>
      <InlineImage src='/8 game maker.png' alt='GameMaker thumbnail.' href='https://gamemaker.io/en' content='GameMaker' />
      <ParagraphImage>
        <InlineLink href='https://gamemaker.io/en'>GameMaker</InlineLink> is a great engine for making 2d games but not very strong with 3d. You can use the free trial indefinitely for non-commercial use and it allows exports to Desktop targets as well as Web and Mobile. The monetization model is very competitive at 100$ one time for a lifetime license. For Console it's 80$ per month or 800$ per year. All of these prices have regionalized pricing making it affordable pretty much anywhere. They don't take royalties which is pretty great if your game takes off as well. Game Maker Studio was used to make <InlineLink href='https://store.steampowered.com/app/567380/Heartbound/'>Heartbound</InlineLink>, <InlineLink href='https://store.steampowered.com/app/257850/Hyper_Light_Drifter/'>Hyper Light Drifter</InlineLink>, <InlineLink href='https://store.steampowered.com/app/248820/Risk_of_Rain_2013/'>Risk of Rain</InlineLink>, <InlineLink href='https://store.steampowered.com/app/242680/Nuclear_Throne/'>Nuclear Throne</InlineLink>, <InlineLink href='https://store.steampowered.com/app/2231450/Pizza_Tower/'>Pizza Tower</InlineLink> and <InlineLink href='https://store.steampowered.com/app/391540/Undertale/'>Undertale</InlineLink>.
      </ParagraphImage>
      <InlineImage src='/9 ue.png' alt='Unreal engine thumbnail.' href='https://www.unrealengine.com/en-US/download' content='Unreal Engine' />
      <ParagraphImage>
        <InlineLink href='https://www.unrealengine.com/en-US/download'>Unreal Engine</InlineLink> is a powerhouse in the 3d arena that has a great monetization model. If your game makes under 1,000,000$ over its lifetime you pay them nothing. Anything beyond that has a 5% royalty tagged onto it. They are also entirely free to use for unmonetized projects. Definitely great for startups but it can have a steep learning curve. Unreal was used to make <InlineLink href='https://www.fortnite.com/?lang=en-US'>Fortnite</InlineLink>, <InlineLink href='https://store.steampowered.com/app/440900/Conan_Exiles/'>Conan Exiles</InlineLink>, <InlineLink href='https://www.kingdomhearts.com/3/us/home/'>Kingdom Hearts 3</InlineLink> and <InlineLink href='https://www.nintendo.com/us/store/products/octopath-traveler-switch/'>Octopath Traveler</InlineLink>.
      </ParagraphImage>
      <InlineImage src='/10 renpy.png' alt='Renpy thumbnail.' href='https://www.renpy.org/' content='RenPy' />
      <ParagraphImage>
        <InlineLink href='https://www.renpy.org/'>Ren'Py</InlineLink> is a fantastic engine specifically made for Visual Novels. It's completely free, easy to use, and has a great community around it. Definitely able to make some powerful and interesting games. Ren'py was used to make <InlineLink href='https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/'>Doki Doki Literature Club</InlineLink>.
      </ParagraphImage>
      <SubHeading id='art-programs' >There is no best art program.</SubHeading>
      <Paragraph>
        Just like with an engine you should choose an art program that works best for you. Just because a program costs more or is more revered in certain circles doesn't mean it's better for you or your workflow. Everyone works differently and everyone feels more or less comfortable with different software and hardware. If you want to use MS Paint on a tablet it's fine. If you want to use Photoshop on a Cintiq that's also fine.
      </Paragraph>
      <InlineImage src='/11 aseprite.png' alt='Aseprite thumbnail.' href='https://www.aseprite.org/' content='Aseprite' />
      <ParagraphImage>
        <InlineLink href='https://www.aseprite.org/'>Aseprite</InlineLink> is the actual god of pixel art tools. Running at a cheap 20$ this powerhouse is super affordable but also carries an extra bonus. You can get it for free. If you compile Aseprite from <InlineLink href='https://github.com/aseprite/aseprite'>their github</InlineLink> it's entirely free software. Get this, use this, make sick pixel art.
      </ParagraphImage>
      <InlineImage src='/12 gimp.png' alt='Gimp thumbnail.' href='https://www.gimp.org/' content='Gimp' />
      <ParagraphImage>
        <InlineLink href='https://www.gimp.org/'>Gimp</InlineLink> is an incredibly fantastic image editing tool generally looked down on for being the ugly brother of photoshop. That being said it has a few super powers that photoshop doesn't have... it's not owned by Adobe and it's completely free. We've used gimp for tons of stuff over the years from promotional art, to touch ups on logos, or making in-game assets. Definitely give this a look if you haven't before.
      </ParagraphImage>
      <InlineImage src='/13 blender.png' alt='Blender thumbnail.' href='https://www.blender.org/' content='Blender' />
      <ParagraphImage>
        <InlineLink href='https://www.blender.org/'>Blender</InlineLink> is a really powerful and entirely free 3d modeling and animation tool. It can do some absolutely insane stuff and as it continues to evolve it has met or exceeded the power of the best 3d modeling tools out there. If you want to build awesome 3d stuff then this is your go to workhorse.
      </ParagraphImage>
      <SubHeading id='audio-programs'>There is no best audio program.</SubHeading>
      <Paragraph>
        I spoke to our musician <InlineLink href='http://stijnvanwakeren.com/'>Stijn van Wakeren</InlineLink> for this information as it's not really my area of expertise. You should definitely hit them up if you have questions about these programs or want more insight into why they are so powerful. That being said, here are some rad programs you can use to make music or sound effects with relative ease.
      </Paragraph>
      <InlineImage src='/14 fami studio.png' alt='Fami studio thumbnail.' href='https://famistudio.org/' content='FamiStudio' />
      <ParagraphImage>
        <InlineLink href='https://famistudio.org/'>FamiStudio</InlineLink> is an awesome free tool for making NES style chiptunes and sound effects. There is a pretty massive fan community built around it and a ton of easy to follow <InlineLink href='https://www.youtube.com/watch?v=UyECgqFbZPQ'>YouTube tutorials</InlineLink> to get you started making stuff. I really love the sounds that come out of this thing and it really hits that nostalgia factor. You can even review the <InlineLink href='https://github.com/BleuBleu/FamiStudio'>source</InlineLink> or compile it yourself. Honestly awesome.
      </ParagraphImage>
      <InlineImage src='/15 anvil studio.png' alt='Anvil studio thumbnail.' href='https://www.anvilstudio.com/' content='Anvil' />
      <ParagraphImage>
        <InlineLink href='https://www.anvilstudio.com/'>Anvil</InlineLink> Studio is a completely free MIDI audio design platform. If you're just starting out or really want a nice oldschool feel to your audio I really recommend checking this out. You can even print sheet music from your creations with one of their addons.
      </ParagraphImage>
      <InlineImage src='/16 fl studio.png' alt='Fl studio thumbnail.' href='https://www.image-line.com/fl-studio' content='FL Studio' />
      <ParagraphImage>
        <InlineLink href='https://www.image-line.com/fl-studio'>FL Studio</InlineLink> is by far the gold standard for audio tools. All of our music and sound effects were made in it. It's incredibly easy to use, insanely versatile letting you make a wide range of awesome stuff, and it's pretty affordable with a 100$ price tag for lifetime updates. If you're serious about making audio magic and want something powerful and long lasting then FL Studio is the right choice.
      </ParagraphImage>
      <NextPrv
        prevHref='/building-a-team'
        nextHref='/financing'
        prevContent='Building a Team'
        nextContent='Financing'
      />
    </article>
  )
}

export default Tools