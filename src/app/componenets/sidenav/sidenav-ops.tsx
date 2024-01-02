import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

type Props = {
    children: string;
    href: string;

}

const Sidenavops = ({children,href}: Props) => {
  return (
    <>
    <Link
		href={href}
    	className={ clsx ("", {
	    })}> <p className=' px-2 text-base text-white'>{children}</p>

	</Link> 
    </>
  )
}

export default Sidenavops