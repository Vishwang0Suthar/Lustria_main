// components/buttons/Register.tsx
import React, { useState, useEffect } from 'react';

type RegisterProps = {
  onClose?: () => void;
};

const Register: React.FC<RegisterProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing the register box to create a transition effect
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // You can adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-12 rounded-lg shadow-md transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} style={{ width: '400px' }}>
        {/* Upper content */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-medium mb-4">REGISTER</h2>
          <hr className="w-16 h-1 bg-[#7fa15a] mx-auto mb-6" />
        </div>

        {/* Username input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1 sr-only">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="mt-1 p-4 w-full border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Email input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-600 mb-1 sr-only">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="mt-1 p-4 w-full border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Register button */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="w-3/4 bg-[#161616] text-white py-3 rounded hover:bg-[#7FA15A]"
          >
            Register
          </button>
        </div>

        {/* The password will be emailed to you */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          The password will be emailed to you!
        </p>

        {/* Close button */}
        {onClose && (
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-[#7FA15A] cursor-pointer"
            onClick={onClose}
          >
            &#10006; {/* Unicode character for X symbol */}
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
