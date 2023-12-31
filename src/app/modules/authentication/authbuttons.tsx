// components/buttons/authbuttons.tsx
"use client"
import React, {useState } from 'react';
import Login from './login'; // Corrected import statement
import Register from './register'; // Corrected import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRifle, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson';

type AuthButtonsProps = {};

const Authbuttons: React.FC<AuthButtonsProps> = () => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showRegisterBox, setShowRegisterBox] = useState(false);

  const handleLoginClick = () => {
    setShowLoginBox(true);
    setShowRegisterBox(false);
  };

  const handleRegisterClick = () => {
    setShowLoginBox(false);
    setShowRegisterBox(true);
  };

  return (
    <div className='z-40  '>
      <div className="hidden lg:flex items-center">
        <FontAwesomeIcon icon={faUser}/>
      <button className=' px-2 text-base hover:text-[#7FA15A]' onClick={handleLoginClick}>Login</button>
      <span className="text-gray-500">/</span>
      <button className='px-2 text-base hover:text-[#7FA15A]' onClick={handleRegisterClick}>Register</button>
      </div>
      {showLoginBox && <Login onClose={() => setShowLoginBox(false)} />}
      {showRegisterBox && <Register onClose={() => setShowRegisterBox(false)} />}
    </div>
  );
};

export default Authbuttons;
