import Link from 'next/link'
import React from 'react'

interface NextPrvProps {
  prevHref: string
  nextHref: string
  prevContent: string
  nextContent: string
}

function NextPrv({prevHref, nextHref, prevContent, nextContent}: NextPrvProps) {
  return (
    <div className='w-full flex items-center justify-between my-20'>
      <Link href={`/game-dev${prevHref}`} className='rounded-[0.5rem] duration-150 text-ea hover:text-dd flex items-start flex-col justify-start'>
        {prevContent}
        <span className='text-xs font-light text-aa'>Previous</span>
      </Link>
      <Link href={`/game-dev${nextHref}`} className='rounded-[0.5rem] duration-150 text-ea hover:text-dd flex items-start flex-col justify-start'>
        {nextContent}
        <span className='text-xs font-light text-aa'>Next</span>
      </Link>
    </div>
  )
}

export default NextPrv