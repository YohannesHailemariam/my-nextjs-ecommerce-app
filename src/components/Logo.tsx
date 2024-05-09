import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { text } from 'stream/consumers'

interface Props {
    className?: string;
    spanClassName?: string;
}

const Logo = ( { className, spanClassName }: Props ) => {
  return (
    <Link href={"/"}
    className={cn('text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group', className)}>Logo</Link>
  )
}

export default Logo