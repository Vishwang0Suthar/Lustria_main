import React from 'react';
import clsx from 'clsx';

import Image from 'next/image';
import si0 from '@/app/assests/images/1t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si7 from '@/app/assests/images/8t.jpg';
import Plant from './plant/plant';
import Rounds from '../rounds/rounds';
import Option from '../option/opt';

const plantData = [
  {
    title: "Aliquam furniture",
    price: "$85.00",
    originalPrice: "$79.00",
    tag: ["SALE"],
    image: si0
  },
  {
    title: "Aliquam lobortis",
    price: "$87.00",
    originalPrice: "$75.00",
    tag: ["SALE"],
    image: si1
  },
  {
    title: "Aliquam sit amet",
    price: "",
    originalPrice: "$12.00",
    tag: ["HOT"],
    image: si2
  },
  {
    title: "Aliquet autor sem",
    price: "$76.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si3
  },
  {
    title: "Auctor gravida enim",
    price: "$67.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si4
  },
  {
    title: "Autor sem",
    price: "$95.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si5
  },
  {
    title: "Commando dolor",
    price: "$88.00",
    originalPrice: "$75.00",
    tag: ["SALE", "HOT"],
    image: si6
  },
  {
    title: "Condimentum furniture",
    price: "$85.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si7
  },
];

const Plants = () => {
  // Nested array to store each child's content for each Plant component


  return (
    <div className='relative grid xl:grid-cols-4 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-40 lg:px-32 md:px-20 px-0 gap-y-12 pb-16 gap-x-12'>
      {plantData.map((plant) => (
        <div key={plant.title} className='relative group z-0'>
          {plant.tag.map((x, i) => <Rounds key={x} variant={x} style={{
            top: i* 55 + 10
          }}>{x}</Rounds>)}
       
       <Option/>  
          <div className='relative aspect-square z-0'>
            <Image src={plant.image} alt={plant.title} objectFit='cover' layout='fill' />
          </div>
          
          <p className='text-center'>{plant.title}</p>
          <div className="flex justify-center gap-x-2 ">
          <s>{plant.price}</s>
          <p>{plant.originalPrice}</p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Plants;