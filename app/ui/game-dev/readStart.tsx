import Link from 'next/link'
import React from 'react'

interface StartReadProps {
  startHref: string
  startContent: string
}

function StartRead({startHref, startContent}: StartReadProps) {
  return (
    <div className='w-full flex items-center justify-end my-20'>
      <Link href={`/game-dev${startHref}`} className='rounded-[0.5rem] duration-150 text-ea hover:text-dd flex items-start flex-col justify-start'>
        {startContent}
        <span className='text-xs font-light text-aa'>Start</span>
      </Link>
    </div>
  )
}

export default StartRead