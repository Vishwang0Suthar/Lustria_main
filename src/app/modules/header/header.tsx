import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faHeart, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';
import Image from 'next/image';
import logo from '@/app/assests/logo.png';
import Links from '@/app/componenets/link/link';
import Icons from '@/app/componenets/icons/icons';
import CartHover from '../cart-hover/cartHover';
import Authbuttons from '../authentication/authbuttons';
import  './header.modules.css'
type Props = {}

const Header = (props: Props) => {
  
  return (
    
    <header className="header">
        
    <div className="justify-start mr-auto lg:hidden ">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
<Link href='/'> 
    <Image className='mr-auto' src={logo} width='170' height='115' alt='logo' />
    </Link>
    <nav className=' mx-auto lg:flex gap-6 md:hidden  hidden z-10 items-center'>
    <Links href="/" >
        Home</Links>    
    <Links href="/shop" >
        
        Shop</Links>
        <Links href="/account" >
        
        Categories</Links>
        <Links href="/account" >
        
        About</Links>
        
    </nav>
    <Authbuttons/>
    <div className='flex h-6 gap-3  items-center '>
            
            <Icons id='search' >  <FontAwesomeIcon   icon={faSearch} /> </Icons>   
            <div className='hidden gap-3 md:hidden lg:flex'>
            <Icons id='wishlist' >  <FontAwesomeIcon  icon={faHeart} />           </Icons> 
            <div className="group relative">
            <Icons id='cart' >  <FontAwesomeIcon  icon={faCartShopping} />    </Icons>

<div className="hidden  z-20 right-0 w-[25vw] shadow-lg group-hover:block absolute bg-white  p-2">
{/* <!-- Dropdown content goes here --> */}
<CartHover/>
</div>
</div>

            
            </div>
    </div>
</header>
)
}

export default Header