import React from 'react';
import logo from 'C:/Users/Vasu/my-next-app/public/assests/logo-white.png';
import Image from 'next/image';
import imag from '@/app/assests/images/commig.jpg'
import Countdown from '@/app/componenets/Countdown/Countdown';
import Email from '@/app/componenets/Coming-Email/Email';

type Props = {};

const ComingSoon = (props: Props) => {
  return (
   <> <Image 
    src={imag} 
    alt="" 
    className="overflow-hidden absolute h-full w-full  " 
    style={{ objectFit: 'cover' }}
  />
    {/* <div className={`bg-cover bg-no-repeat bg-center w-screen h-screen`} > */}
      <div className=' bg-black bg-opacity-20 items-center justify-center flex flex-col h-full w-full px-6 text-center absolute'>
        <div className="flex text-center justify-center ">
          <div className="inline-block mt-16 ">
            <a href="https://lustria.g5plus.net/" target="_self" className="inline-block overflow-hidden">
              <img src="https://lustria.g5plus.net/wp-content/uploads/2019/05/logo-light.png" alt="" className="block  h-14 object-cover"/>            
            </a>
          </div>
        </div>
        <div className='mb-24 md:mb-28 lg:mb-40'></div>
        <h1 className='lg:text-4xl text-3xl text-center text-white '>We're Coming Soon.</h1>
        <div><br /><br /></div>
        <div>
          <Countdown/>
        </div>
        <div><br /><br />
          <Email/>
        </div>
        <div><br /><p className='text-white text-base'>Subscribe to more news.</p></div>
        <div><br /></div>
      </div>
     
    {/* </div> */}
    </>
  );
};

export default ComingSoon;
