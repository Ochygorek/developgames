import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode
  color?: 'red' | 'gray'
  href: string
  target?: string
}

export const ButtonSolid = ({children, color, href}: ButtonProps) => {
  return (
    <Link href={href} className={clsx('py-3 px-4 rounded-[0.5rem] bg-clip-border border-2 duration-150 text-white', color === 'gray' ? 'border-neutral-500 bg-neutral-500' : 'border-redd bg-redd hover:bg-reddhov')}>
      {children}
    </Link>
  )
}

export const ButtonGhost = ({children, color, href}: ButtonProps) => {
  return (
    <Link href={href} className={clsx('py-3 px-5 rounded-[0.5rem] bg-clip-border border-2 duration-150 text-white', color === 'gray' ? 'border-neutral-500' : 'border-redd hover:bg-reddhov/20')}>
      {children}
    </Link>
  )
}

export const ButtonLink = ({children, color, href, target}: ButtonProps) => {
  return (
    <Link href={href} target={target} className={clsx('duration-150 flex items-center justify-center gap-1', color === 'gray' ? 'decoration-neutral-500' : 'hover:text-reddhov hover:underline')}>
      {children}
    </Link>
  )
}