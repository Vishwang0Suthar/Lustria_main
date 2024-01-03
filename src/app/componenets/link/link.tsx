import Link from 'next/link'
import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './link.component.css'
type Props = {
    href: string;
    children:ReactNode;
}

function Links({children, href}: Props) {
  return (
    <>
    <Link
		href={href}
    	className={ clsx ("link", {
	    })}> <p className='text-lg font-normal text-black'>{children}</p>
        <FontAwesomeIcon className='h-3 transition-transform transform' icon={faChevronDown} />
	</Link> 
    </>
  )
}

export default Links