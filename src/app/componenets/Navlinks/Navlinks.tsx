import React from 'react'
import Links from '../link/link'
import About from '@/app/modules/about/page'

type Props = {}

const Navlinks = (props: Props) => {
  return (
    <><nav className=" mx-auto lg:flex gap-3 md:hidden  hidden z-10 items-center">
    <Links href="/">Home</Links>
    <Links href="/shop">Shop</Links>
    <Links href="/comingsoon">Categories</Links>
    <Links href="/about">About</Links>
  </nav></>
  )
}

export default Navlinks