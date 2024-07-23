import React, { ReactNode } from 'react'

function ParagraphImage({children}: {children: ReactNode}) {
  return (
    <p className='text-ee text-lg sm:text-xl leading-[1.875rem] font-normal mt-10'>
      {children}
    </p>
  )
}

export default ParagraphImage