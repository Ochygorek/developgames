import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface InlineImageProps {
  src: string
  alt: string
  href: string
  content: string
  id?: string
}

function InlineImage({src, alt, href, content, id}: InlineImageProps) {
  return (
    <div id={id} className='w-full flex items-center justify-center mt-[3.5rem]'>
      <Link href={href} target='_blank' className='relative group'>
        <Image
          src={`/images${src}`}
          alt={alt}
          width={460}
          height={215}
          className='rounded-[.75rem] hover:brightness-50 hover:blur-[2px] duration-150'
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:opacity-100 -translate-y-1/2 opacity-0 px-3 gap-2 py-1 flex items-center justify-center text-xs text-ea font-light bg-neutral-600 rounded-full duration-150 hover:bg-neutral-500 hover:text-white'>
          {content}

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default InlineImage