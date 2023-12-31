import React from 'react';
import Plant from './plant/plant';
import Image from 'next/image';
import si0 from '@/app/assests/images/1t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si7 from '@/app/assests/images/8t.jpg';



const Plants = () => {
  // Nested array to store each child's content for each Plant component
  const plantData = [
    ['Aliquam furniture', '$85.00','$79.00', 'SALE'],
    ['Aliquam lobortis', '$87.00','$75.00', 'SALE'],
    ['Aliquam sit amet', '','$12.00', 'HOT'],
    ['Aliquet autor sem','$76.00', '$55.00', 'SALE'],
    ['Auctor gravida enim','$67.00', '$55.00', 'SALE'],
    ['Autor sem', '$95.00','$77.00', 'SALE'],
    ['Commando dolor', '$88.00','$75.00', 'SALE', 'HOT'],
    ['Condimentum furniture', '$85.00','$77.00', 'SALE'],
  ];

  return (
    <div className='grid xl:grid-cols-4 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-40 lg:px-32 md:px-20 px-0 gap-y-12 gap-x-12'>
  {[si0, si1, si2, si3, si4, si5, si6, si7].map((image, index) => (
    <Plant key={index}>
      <Image src={image} alt={`${index + 1}`} objectFit='cover' layout='fill' />
      {plantData[index].map((text, i) => (
        <div key={i}>
          {i === 0 && text}
          {i === 1 && <span><s>{text}</s></span>}
          <strong>{i === 2 && text} </strong>

          {i === 3 && <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>{text}</span>
          </div>}
        </div>
      ))}
    </Plant>
  ))}
</div>

  );
};

export default Plants;
