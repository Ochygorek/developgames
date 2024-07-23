import React, { ReactNode } from 'react'
import Navigation from '../ui/navigation'
import QuickNavigation from '../ui/quickNavigation'

function template({children}: {children: ReactNode}) {
  return (
    <>
      <Navigation />
      <div className='flex w-full items-start justify-center max-w-7xl mx-auto px-4 md:px-10'>
        <div className='w-[43.125rem] mx-0 md:mx-10'>
          {children}
        </div>
      </div>
    </>
  )
}

export default template