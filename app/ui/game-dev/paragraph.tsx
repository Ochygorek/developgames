import React, { ReactNode } from 'react'

function Paragraph({children}: {children: ReactNode}) {
  return (
    <p className='text-ee text-lg sm:text-xl leading-[1.875rem] font-normal mt-8'>
      {children}
    </p>
  )
}

export default Paragraph