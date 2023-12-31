// components/Menu.js
import { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`menu fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
        <a href="#" className="block py-4 px-6" onClick={closeMenu}>Close</a>
        <a href="#" className="block py-4 px-6">Menu Item 1</a>
        <a href="#" className="block py-4 px-6">Menu Item 2</a>
        <a href="#" className="block py-4 px-6">Menu Item 3</a>
      </div>
      <div className="main">
        <span className="menu-btn cursor-pointer" onClick={openMenu}>&#9776; Open Menu</span>
      </div>
    </>
  );
};

export default Menu
