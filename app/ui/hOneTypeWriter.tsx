'use client'

import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion'

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

function HOneTypeWriter() {
  const slideControl = useAnimation()
  
  useEffect(() => {
    slideControl.start('visible')
  }, [])

  return (
    <motion.h1 className="fa mb-4 sm:mb-12 md:mb-0 text-5xl text-fa md:text-7xl lg:text-[5.75rem] font-bold font-me-head leading-none w-full relative"
      variants={variants}
      initial="initital"
      animate="animate"
    >
      Develop.games(
        <Typewriter
          options={{
            strings: ['RPG', 'RTS', 'TBS', 'FPS', 'TPS', 'BR', 'MOBA', 'MMO'],
            autoStart: true,
            loop: true,
          }}
        />
      )
      <motion.div
        variants={{
          hidden: {left: 0},
          visible: {left: '100%'}
        }}
        initial='hidden'
        animate={slideControl}
        transition={{duration: 0.5, ease: 'easeIn'}}
        style={{
          position: 'absolute',
          top: 0,
          bottom: -10,
          right: 0,
          left: 0,
          background: '#DF2036',
          zIndex: 9
        }}
      />
    </motion.h1>
  )
}

export default HOneTypeWriter