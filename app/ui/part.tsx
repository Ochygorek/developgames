
'use client'

import React, from 'react'
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

function Part() {
  return (
    <motion.p className="text-aa text-base mt-8 md:mt-12 max-w-lg"
    variants={variants}
    initial="initital"
    animate="animate"
  >
    This is an unofficial website made strictly for learning purposes. The original content was copied from the official develop.games website. All rights to the all assets belong to the owners.
  </motion.p>
  )
}

export default Part