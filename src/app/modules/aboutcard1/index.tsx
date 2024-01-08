import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import pic1 from '../../../../public/about_image/1stgardencare.png'
import pic2 from '../../../../public/about_image/2ndplantrenovation.png'
import pic3 from '../../../../public/about_image/3rdseedsupply.png'
import pic4 from '../../../../public/about_image/4thwateringgarden.png'


function App() {
  return (
    <section>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-8 ">
      <div className="grid-span-1 justify-center justify-items-center text-center ">
        <Image className='mx-auto pb-7 ' src={pic1} alt="Photo 1"  />
        <h3 className='text-2xl font-bold text-black pb-5 hover:text-[#7fa15a]'>Garden Care</h3>
        <p className=' text-base  pb-2 text-[#777777]'>Let’s find a plant combination to suit </p>
        <p className='text-base text-[#777777]'>your border enjoy your time.</p>
      </div>

      <div className="grid-span-1 justify-center justify-items-center text-center">
        <Image className='mx-auto pb-7' src={pic2} alt="Photo 1" />
        <h3 className='text-2xl font-bold text-black pb-5 hover:text-[#7fa15a]'>Plant Renovation</h3>
        <p className='text-base pb-2 text-[#777777]'>Let’s find a plant combination to suit </p>
        <p className='text-base text-[#777777]'>your border enjoy your time.</p>
      </div>
      
      <div className="grid-span-1 justify-center justify-items-center text-center">
        <Image className='mx-auto pb-7' src={pic3} alt="Photo 1" />
        <h3 className='text-2xl font-bold text-black pb-5 hover:text-[#7fa15a]'>Seed Supply</h3>
        <p className='text-base pb-2 text-[#777777]'>Let’s find a plant combination to suit </p>
        <p className='text-base text-[#777777]'>your border enjoy your time.</p>
      </div>

      <div className="grid-span-1 justify-center justify-items-center text-center">
        <Image className='mx-auto pb-7' src={pic4} alt="Photo 1" />
        <h3 className='text-2xl font-bold text-black pb-5 hover:text-[#7fa15a]'>Watering Graden</h3>
        <p className='text-base pb-2 text-[#777777]'>Let’s find a plant combination to suit </p>
        <p className='text-base text-[#777777]'>your border enjoy your time.</p>
      </div>
    </div>
    </section>
  );
}

export default App;
