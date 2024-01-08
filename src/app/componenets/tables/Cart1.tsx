// "use client"
import React, { useState } from 'react';

type Props = {};

const Cart1: React.FC = () => {
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  const handleCalculateShippingClick = () => {
    setShowShippingDetails(!showShippingDetails);

  };

  return (
    <div className='flex  justify-end items-center'>
      {/* <div className='relative flex '> */}
        <div className='mt-5 flex flex-col w-full md:w-1/2 lg:w-1/2 '>
          <p className='font-semibold text-[30px]'>Cart totals</p>
          <div className='mt-10'>
            <table className='w-full flex-col gap-6'>
              <tbody>
                <tr className='mt-5 '>
                  <th className='py-4 flex justify-start font-semibold'>Subtotal</th>
                  <td className=''>
                    <span className='flex justify-end md:justify-start'>$
                      <span>79</span>
                    </span>
                  </td>
                </tr>
                <tr className='mt-5 '>
                  <th className='py-4 flex justify-start font-semibold'>Shipping</th>
                  <td className=''>
                   

                   <span className='flex justify-end md:justify-start'> Free shipping</span>
                   
                    <span className='flex justify-end md:justify-start'>Shipping to Singapore</span>
                    <span className='flex justify-end md:justify-start'>

                    <button
                      className='font-semibold flex'
                      onClick={handleCalculateShippingClick}
                      >
                     <span>Change address</span> <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-truck'
                        >
                        <path d='M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11' />
                        <path d='M14 9h4l4 4v4c0 .6-.4 1-1 1h-2' />
                        <circle cx='7' cy='18' r='2' />
                        <path d='M15 18H9' />
                        <circle cx='17' cy='18' r='2' />
                      </svg>
                    </button>
                    </span>
                 {/* <div className=''> */}

                      <span className='flex flex-col justify-end md:justify-start'>
                    {showShippingDetails && (
                      <div className='mt-2'>
                        <label
                          htmlFor='country'
                          className='block sr-only w-fit text-sm font-medium leading-6 text-gray-900'
                          >
                          Country
                        </label>
                        <select
                          id='country'
                          name='country'
                          autoComplete='country-name'
                          className='block w-fit py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6'
                          >
                            
                          <option className='text-gray-300'>United States</option>
                          <option className='text-gray-300'>Canada</option>
                          <option className='text-gray-300'>Mexico</option>
                        </select>
                      </div>
                    )}

                  

                    {showShippingDetails && (
                      <div className='mt-2.5'>
                        <input
                          type='text'
                          placeholder='Town/City'
                          name='company'
                          id='company'
                          autoComplete='organization'
                          className='block w-fit px-3.5 py-2 text-gray-500 shadow-sm  placeholder:text-gray-400   sm:text-sm sm:leading-6'
                          />
                    
                      </div>
                    )}

                    {showShippingDetails && (
                      <div className='mt-2.5'>
                        <input
                          type='text'
                          placeholder='ZIP'
                          name='company'
                          id='company'
                          autoComplete='organization'
                          className='block w-fit px-3.5 py-2 text-gray-500 shadow-sm  placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6'
                          />
                      </div>
                   
                   )}
                   {showShippingDetails && (<button className='font-semibold flex place-content-center  py-2  mt-2.5 h-10 w-20 border hover:border-green-500 bg-black hover:bg-white text-white hover:text-black'>Update</button>
                   )}
                  
                  </span>
                   {/* </div> */}
                  
                  </td>
                </tr>
                <tr className=''>
                  <th className='py-4 flex justify-start font-semibold'>Total</th>
                  <td className=''>
                  <span className='flex justify-end md:justify-start'>$
                      <span>79</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type='button'
            className='bg-[#7fa15a] text-white hover:text-black w-full h-14 hover:bg-white border border-[#7FA15A]'
            >
            Proceed to checkout
          </button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Cart1;
