import React, { ReactNode } from 'react'

function SubHeading({children, id}: {children: ReactNode, id: string}) {
  return (
    <h3 className='font-semibold text-xl sm:text-2xl text-fa w-full mt-20' id={id}>
      {children}
    </h3>
  )
}

export default SubHeading