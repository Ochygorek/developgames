'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
function Sub() {
  return (
    <motion.p className="text-xl md:text-[1.5rem] lg:text-[1.75rem] font-medium font-me-sub mt-2 sm:mt-4"
      variants={variants}
      initial="initital"
      animate="animate"
    >
      Do it, you won&apos;t regret it.
    </motion.p>

  )
}

export default Sub