import Link from 'next/link'
import React from 'react'

interface ReadEndProps {
  endHref: string
  endContent: string
}

function ReadEnd({endHref, endContent}: ReadEndProps) {
  return (
    <div className='w-full flex items-center justify-start my-20'>
      <Link href={`/game-dev${endHref}`} className='rounded-[0.5rem] duration-150 text-ea hover:text-dd flex items-start flex-col justify-start'>
        {endContent}
        <span className='text-xs font-light text-aa'>Previous</span>
      </Link>
    </div>
  )
}

export default ReadEnd