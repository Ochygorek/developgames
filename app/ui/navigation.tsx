'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { ButtonLink } from './button'
import Link from 'next/link'

const blockOfLink = [
  {
    content: 'Game dev',
    href: '/game-dev',
  },
  {
    content: 'Streaming',
    href: '/streaming',
  },
  {
    content: 'Game Jam',
    href: 'https://itch.io/jam/pirate',
    target: '_blank',
    icon: true
  },
]

function Navigation() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <nav className='max-h-[5.5rem] w-full hidden items-center justify-between sm:flex z-50'>
        <div className='max-w-7xl mx-auto w-full h-full flex items-center justify-between px-4 md:px-10'>
          <Link href={'/'}>
            <Image 
              src={'/logo.png'}
              alt=''
              width={36}
              height={56}
              className='py-4'
            />
          </Link>
          <div className='flex items-center justify-center gap-6'>
            {blockOfLink.map((link, i) => (
              <ButtonLink key={i} href={link.href} target={link.target}>
                {link.content}
                {link.icon && 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                }
              </ButtonLink>
            ))}
          </div>
        </div>
      </nav>



      <nav className='flex items-center justify-start flex-col gap-0 sm:hidden z-50'>
        <div className='flex w-full justify-between items-center px-4'>
          <Link href={'/'} onClick={() => setOpen(false)}>
            <Image 
              src={'/logo.png'}
              alt=''
              width={36}
              height={56}
              className='py-4'
            />
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-ea">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-ea">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>          
            }
          </button>
        </div>
        {open &&
          <div className='flex items-center justify-start flex-col gap-4 mb-8 sticky top-[5.5rem] bg-[#212121] z-50'>
            {blockOfLink.map((link, i) => (
              <ButtonLink key={i} href={link.href} target={link.target}>
                {link.content}
                {link.icon && 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                }
              </ButtonLink>
            ))}
          </div>
        }
      </nav>
    </>
  )
}

export default Navigation