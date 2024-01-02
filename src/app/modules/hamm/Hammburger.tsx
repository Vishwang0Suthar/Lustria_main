"use client"
import Links from '@/app/componenets/link/link';
import Sidenavops from '@/app/componenets/sidenav/sidenav-ops';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import necessary modules and types
// import React, { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';


const Hammburger = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <>
      <div className={`menu-button ${menuOpen ? 'cross' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
     
      <div className="flex">
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
        
          <ul className="flex flex-col gap-4 p-4 ">
          <Sidenavops href="/">Home</Sidenavops>
          <hr className='bg-gray-700 h-[1px] appearance-none border-none ' />

          <Sidenavops href="/shop"  >Shop</Sidenavops>
          <hr className='bg-gray-700 h-[1px] appearance-none border-none ' />

          <Sidenavops href="/cart"  >Home</Sidenavops>
          <hr className='bg-gray-700 h-[1px] appearance-none border-none ' />

          <Sidenavops href="/categories" >Home</Sidenavops>
        </ul>
        </div>
        <div className={` ${menuOpen ? 'overlay' : ''}`} onClick={toggleMenu} ></div>

      </div>
    </>
  );
};

export default Hammburger;
