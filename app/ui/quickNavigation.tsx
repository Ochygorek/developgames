'use client'

import Link from 'next/link'
import React, { useState } from 'react'

function QuickNavigation() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className='hidden lg:flex items-start justify-start flex-col text-xs font-light text-aa sticky top-[2rem] overflow-y-auto min-w-[164px]'>
        <Link href={'/game-dev'} className='mb-[0.313rem] text-base text-ea font-normal'>Quick Navigation</Link>
        <Link href={'/game-dev/live-stream'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
          </svg>

          Live stream
        </Link>
        <Link href={'/game-dev/who-are-you'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>

          Who are you?
        </Link>

        <Link href={'/game-dev/skills-required'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>

          Skills Required
        </Link>
        <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
          <Link href={'/game-dev/skills-required#art'}>Art</Link>
          <Link href={'/game-dev/skills-required#music'}>Music</Link>
          <Link href={'/game-dev/skills-required#programming'}>Programming</Link>
        </div>
        <Link href={'/game-dev/picking-a-genre'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
          </svg>

          Picking a Genre
        </Link>
        <Link href={'/game-dev/building-a-team'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>

          Building a Team
        </Link>
        
        <Link href={'/game-dev/tools'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
          <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
          <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>

          Tools
        </Link>
        <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
          <Link href={'/game-dev/tools#engines'}>Engines</Link>
          <Link href={'/game-dev/tools#art-programs'}>Art Programs</Link>
          <Link href={'/game-dev/tools#audio-programs'}>Audio Programs</Link>
        </div>

        <Link href={'/game-dev/financing'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
          </svg>

          Financing
        </Link>
        <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
          <Link href={'/game-dev/financing#streaming'}>Streaming</Link>
          <Link href={'/game-dev/financing#publishers'}>Publishers</Link>
          <Link href={'/game-dev/financing#kickstarter'}>Kickstarter</Link>
          <Link href={'/game-dev/financing#merchandise'}>Merchandise</Link>
          <Link href={'/game-dev/financing#subscription-services'}>Subscriptions Services</Link>
          <Link href={'/game-dev/financing#scams'}>Scams</Link>
        </div>

        <Link href={'/game-dev/marketing'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
          </svg>

          Marketing
        </Link>
        <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
          <Link href={'/game-dev/marketing#building-a-community'}>Building a Community</Link>
          <Link href={'/game-dev/marketing#social-media'}>Social Media</Link>
          <Link href={'/game-dev/marketing#paid-advertisement'}>Paid Advertisement</Link>
          <Link href={'/game-dev/marketing#conventions'}>Conventions</Link>
          <Link href={'/game-dev/marketing#awards'}>Awards</Link>
        </div>

        <Link href={'/game-dev/launching-your-game'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
          </svg>

          Launching Your Game
        </Link>
        <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
          <Link href={'/game-dev/launching-your-game#steam'}>Steam</Link>
          <Link href={'/game-dev/launching-your-game#humble-bundle'}>Humble Bundle</Link>
          <Link href={'/game-dev/launching-your-game#game-jolt'}>Game Jolt</Link>
          <Link href={'/game-dev/launching-your-game#itchio'}>Itch.io</Link>
        </div>
      </div>







      {open && <div className='sticky w-full h-8 top-0 bg-[#212121] z-[99]'></div>}
      <button onClick={() => setOpen(!open)} className='w-full bg-neutral-700 sticky top-4 flex lg:hidden items-center justify-center rounded-full z-[101]'>
        {open ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-ea">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-ea">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        }
      </button>
      {open &&
          <div className='flex lg:hidden items-start justify-start flex-col text-xs font-light text-aa sticky top-8 overflow-auto w-full bg-[#212121] overflow-y-auto h-screen z-[100] pb-4'>
            <Link onClick={() => setOpen(false)} href={'/game-dev'} className='mb-[0.313rem] mt-4 text-base text-ea font-normal'>Quick Navigation</Link>
            <Link onClick={() => setOpen(false)} href={'/game-dev/live-stream'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
              </svg>
    
              Live stream
            </Link>
            <Link onClick={() => setOpen(false)} href={'/game-dev/who-are-you'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
    
              Who are you?
            </Link>
    
            <Link onClick={() => setOpen(false)} href={'/game-dev/skills-required'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
    
              Skills Required
            </Link>
            <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
              <Link onClick={() => setOpen(false)} href={'/game-dev/skills-required#art'}>Art</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/skills-required#music'}>Music</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/skills-required#programming'}>Programming</Link>
            </div>
            <Link onClick={() => setOpen(false)} href={'/game-dev/picking-a-genre'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
              </svg>
    
              Picking a Genre
            </Link>
            <Link onClick={() => setOpen(false)} href={'/game-dev/building-a-team'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
    
              Building a Team
            </Link>
            
            <Link onClick={() => setOpen(false)} href={'/game-dev/tools'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
              <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
              <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
              <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
    
              Tools
            </Link>
            <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
              <Link onClick={() => setOpen(false)} href={'/game-dev/tools#engines'}>Engines</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/tools#art-programs'}>Art Programs</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/tools#audio-programs'}>Audio Programs</Link>
            </div>
    
            <Link onClick={() => setOpen(false)} href={'/game-dev/financing'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>
    
              Financing
            </Link>
            <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#streaming'}>Streaming</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#publishers'}>Publishers</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#kickstarter'}>Kickstarter</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#merchandise'}>Merchandise</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#subscription-services'}>Subscriptions Services</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/financing#scams'}>Scams</Link>
            </div>
    
            <Link onClick={() => setOpen(false)} href={'/game-dev/marketing'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
              </svg>
    
              Marketing
            </Link>
            <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
              <Link onClick={() => setOpen(false)} href={'/game-dev/marketing#building-a-community'}>Building a Community</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/marketing#social-media'}>Social Media</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/marketing#paid-advertisement'}>Paid Advertisement</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/marketing#conventions'}>Conventions</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/marketing#awards'}>Awards</Link>
            </div>
    
            <Link onClick={() => setOpen(false)} href={'/game-dev/launching-your-game'} className='font-normal text-dd mt-[0.313rem] flex items-start justify-start gap-2 w-full hover:text-white duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
              </svg>
    
              Launching Your Game
            </Link>
            <div className='flex items-start justify-start pl-9 flex-col [&>a]:mt-[0.313rem] [&>a]:w-full w-full hover:[&>a]:text-ea [&>a]:duration-150'>
              <Link onClick={() => setOpen(false)} href={'/game-dev/launching-your-game#steam'}>Steam</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/launching-your-game#humble-bundle'}>Humble Bundle</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/launching-your-game#game-jolt'}>Game Jolt</Link>
              <Link onClick={() => setOpen(false)} href={'/game-dev/launching-your-game#itchio'}>Itch.io</Link>
            </div>
          </div>
      }
    </>
  )
}

export default QuickNavigation