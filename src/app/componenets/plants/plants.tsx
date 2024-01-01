import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import si0 from '@/app/assests/images/1t.jpg';
import si0Hover from '@/app/assests/images/2t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si1Hover from '@/app/assests/images/1t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si2Hover from '@/app/assests/images/1t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si3Hover from '@/app/assests/images/1t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si4Hover from '@/app/assests/images/1t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si5Hover from '@/app/assests/images/1t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si6Hover from '@/app/assests/images/1t.jpg';
import si7 from '@/app/assests/images/8t.jpg';
import si7Hover from '@/app/assests/images/1t.jpg';
import Plant from './plant/plant';
import Rounds from '../rounds/rounds';
import Option from '../option/opt';

const plantData = [
  {
    title: "Aliquam furniture",
    price: "$85.00",
    originalPrice: "$79.00",
    tag: ["SALE"],
    image: si0,
    hoverImage: si0Hover,
  },
  {
    title: "Aliquam lobortis",
    price: "$87.00",
    originalPrice: "$75.00",
    tag: ["SALE"],
    image: si1,
    hoverImage: si1Hover,
  },
  {
    title: "Aliquam sit amet",
    price: "",
    originalPrice: "$12.00",
    tag: ["HOT"],
    image: si2,
    hoverImage: si2Hover,
  },
  {
    title: "Aliquet autor sem",
    price: "$76.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si3,
    hoverImage: si3Hover,
  },
  {
    title: "Auctor gravida enim",
    price: "$67.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si4,
    hoverImage: si4Hover,
  },
  {
    title: "Autor sem",
    price: "$95.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si5,
    hoverImage: si5Hover,
  },
  {
    title: "Commando dolor",
    price: "$88.00",
    originalPrice: "$75.00",
    tag: ["SALE", "HOT"],
    image: si6,
    hoverImage: si6Hover,
  },
  {
    title: "Condimentum furniture",
    price: "$85.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si7,
    hoverImage: si7Hover,
  },
];

const Plants = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='relative grid xl:grid-cols-4 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12'>
      {plantData.map((plant, index) => (
        <div
          key={plant.title}
          className='relative group z-0 px-5 pb-12'
        >
          {plant.tag.map((x, i) => (
            <Rounds key={x} variant={x} style={{ top: i * 55 + 10 }}>
              {x}
            </Rounds>
          ))}
          <Option />
          <div
            className='relative aspect-square z-0 transition-image transition-all duration-1000 ease-in-out '
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={hoveredIndex === index ? plant.hoverImage : plant.image}
              alt={plant.title}
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div className='pt-4'>
            <p className='text-center pb-2'>{plant.title}</p>
            <div className='flex justify-center gap-x-2'>
              <s>{plant.price}</s>
              <p>{plant.originalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plants;
