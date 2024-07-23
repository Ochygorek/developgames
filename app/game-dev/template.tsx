import React, { ReactNode } from 'react'
import Navigation from '../ui/navigation'
import QuickNavigation from '../ui/quickNavigation'

function template({children}: {children: ReactNode}) {
  return (
    <>
      <Navigation />
      <div className='flex w-full items-start justify-between flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-10'>
        <QuickNavigation />
        <div className='max-w-[43.125rem] mx-0 md:mx-10'>
          {children}
        </div>
        <div className='w-[10.25rem]'></div>
      </div>
    </>
  )
}

export default template