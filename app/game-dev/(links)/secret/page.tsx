import Heading from '@/app/ui/game-dev/heading'
import ReadEnd from '@/app/ui/game-dev/readEnd'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Secret',
}

function Secret() {
  return (
    <article>
      <Heading>Solve this!</Heading>
      <div className='w-full h-8'></div>
      <img
        src={'/images/shhh.jpg'}
        alt='Steganography.'
        width={1120}
        height={1120}
        className='rounded-[0.75rem]'
      />
      <ReadEnd
        endHref='/launching-your-game'
        endContent='Launching Your Game'
      />
    </article>
  )
}

export default Secret