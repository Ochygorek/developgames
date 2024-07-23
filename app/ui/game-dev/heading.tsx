import React, { ReactNode } from 'react'

function Heading({children}: {children: ReactNode}) {
  return (
    <h2 className='font-semibold text-4xl sm:text-[2.5rem] text-fa w-full mt-[3.75rem]'>
      {children}
    </h2>
  )
}

export default Heading