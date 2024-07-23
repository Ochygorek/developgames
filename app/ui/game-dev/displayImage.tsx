import Image from 'next/image'
import React from 'react'

interface DisplayImageProps {
  alt: string
}

function DisplayImage({alt}: DisplayImageProps) {
  return (
    <div className='w-full flex items-center justify-center'>
      <Image
        src={`/images/0 display.png`}
        alt={alt}
        width={460}
        height={215}
        className='rounded-[.75rem]'
      />
    </div>
  )
}

export default DisplayImage