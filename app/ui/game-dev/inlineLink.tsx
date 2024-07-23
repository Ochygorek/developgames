import Link from 'next/link'
import React, { ReactNode } from 'react'

interface InlineLinkProps {
  children: ReactNode
  href: string
}

function InlineLink({children, href}: InlineLinkProps) {
  return (
    <Link href={href} target='_blank' className='text-redd hover:text-reddhov duration-150'>
      {children}
    </Link>
  )
}

export default InlineLink