'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const variants = {
  initital: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 100,
    y: 0
  }
}

function ImageAnimation() {
  return (
    <div className='relative'>
      <motion.div className='flex items-center flex-col relative group'
        whileHover={{ scale: 1.02 }}
        variants={variants}
        initial={variants.initital}
        animate={variants.animate}
      >
        <Link href={'https://gopiratesoftware.com/games/'} target='_blank' className='w-full flex items-center flex-col'>
          <div className='w-full flex items-center justify-center relative z-20 top-[3rem]'>
            <Image
              src={'/header 3.png'}
              alt=''
              width={600}
              height={327}
              className='group-hover:blur--[2px] duration-150'
            />
          </div>
          <div className='flex items-center justify-center absolute z-10 top-[1.5rem] w-[91.67%]'>
            <Image
              src={'/header 2.png'}
              alt=''
              width={600}
              height={327}
              className='brightness-50 group-hover:brightness-[.25] group-hover:blur-[2px] duration-150'
            />
          </div>
          <div className='flex items-center justify-center absolute z-0 top-0 w-[83.33%]'>
            <Image
              src={'/header 1.png'}
              alt=''
              width={600}
              height={327}
              className='brightness-[.25] group-hover:blur-[2px] duration-150'
            />
          </div>
        </Link>
        <Link href={'https://gopiratesoftware.com/games/'} target='_blank' className='group-hover:opacity-100 opacity-0 w-full absolute top-[3rem] left-0 bottom-[-3rem] bg-black/40 z-[21] rounded-[0.75rem] flex items-center justify-center duration-150' >
          <div className='px-3 gap-2 py-1 flex items-center justify-center text-xs text-ea font-light bg-neutral-600 rounded-full duration-150 hover:bg-neutral-500 hover:text-white'>
            Games by Pirate Software

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export default ImageAnimation