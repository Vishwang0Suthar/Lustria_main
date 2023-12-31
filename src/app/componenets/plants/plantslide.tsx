import React from 'react';
import clsx from 'clsx';

import Image from 'next/image';
import si0 from '@/app/assests/images/1n.jpg';
import si1 from '@/app/assests/images/2n.jpg';
import si2 from '@/app/assests/images/3n.jpg';
import si3 from '@/app/assests/images/4n.jpg';
import si4 from '@/app/assests/images/5n.jpg';
import si5 from '@/app/assests/images/6n.jpg';
import si6 from '@/app/assests/images/7n.jpg';
import si7 from '@/app/assests/images/8n.jpg';
import Plant from './plant/plant';
import Rounds from '../rounds/rounds';
import Option from '../option/opt';

const plantData = [
  {
    title: "Condimentum posuere",
    price: "$90.00",
    originalPrice: "$85.00",
    tag: ["SALE"],
    image: si0
  },
  {
    title: "convallis furniture",
    price: "$115.00",
    originalPrice: "$95.00",
    tag: ["SALE","HOT"],
    image: si1
  },
  {
    title: "convallis quam sit",
    price: "$85.00",
    originalPrice: "$80.00",
    tag: ["SALE"],
    image: si2
  },
  {
    title: "Curabitur a purus",
    price: "",
    originalPrice: "$115.00",
    tag: [""],
    image: si3
  },
  {
    title: "Diam vel neque",
    price: "$80.00",
    originalPrice: "$75.00",
    tag: ["SALE","HOT"],
    image: si4
  },
  {
    title: "Dignissim furniture",
    price: "$110.00",
    originalPrice: "$95.00",
    tag: ["SALE"],
    image: si5
  },
  {
    title: "Dignissim venenatis",
    price: "$88.00",
    originalPrice: "$80.00",
    tag: ["SALE"],
    image: si6
  },
  {
    title: "Duis bibendum",
    price: "$90.00",
    originalPrice: "$85.00",
    tag: ["SALE"],
    image: si7
  },
];

const Plantslide = () => {
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

export default Plantslide;