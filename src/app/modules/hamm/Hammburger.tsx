"use client"

import React from 'react'
import { useState } from 'react';

type Props = {}

const Hammburger = (props: Props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
      setMenuOpen(true);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
  return (
    <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></>

  )
}

export default Hammburger