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
import  '../header/header.modules.css'
import Hammburger from '../hamm/Hammburger';
type Props = {}

const Header = (props: Props) => {
  
  
  return (
    
    <header className="header">
        
    <Hammburger/>
<Link href='/'>  
    <Image className=' lg:mr-auto ml-auto left-1/2 mr-0 ' src={logo} width='170' height='115' alt='logo' />
    </Link>
    <nav className=' mx-auto lg:flex gap-4 md:hidden  hidden z-10 items-center'>
    <Links href="/" >
        Home</Links>    
    <Links href="/shop">
        
        Shop</Links>
        <Links href="/demo" >
        
        Categories</Links>
        <Links href="/account" >
        
        About</Links>
        
    </nav>
    <Authbuttons/>
    <div className='flex h-6 gap-3 ml-auto items-center '>
            
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