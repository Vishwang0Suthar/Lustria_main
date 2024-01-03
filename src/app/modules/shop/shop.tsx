import React from 'react'

import Image from 'next/image'
// import Plant from '../plants/plant/plant'
import si0 from '@/app/assests/images/1t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si7 from '@/app/assests/images/8t.jpg';
import si8 from '@/app/assests/images/1n.jpg';
import si9 from '@/app/assests/images/2n.jpg';
import si10 from '@/app/assests/images/3n.jpg';
import si11 from '@/app/assests/images/4n.jpg';
import si12 from '@/app/assests/images/5n.jpg';
import si13 from '@/app/assests/images/6n.jpg';
import si14 from '@/app/assests/images/7n.jpg';
import si15 from '@/app/assests/images/8n.jpg';
// import Cate from '../catagories/catagorie'
import Slidermod from './slidermod'
import Cate from '@/app/componenets/catagories/catagorie';
import Rounds from '@/app/componenets/rounds/rounds';
import Option from '@/app/componenets/option/opt';
import TitleBanner from '@/app/componenets/titleBanner/TitleBanner';
// import Rounds from '../round/rounds';
// import Option from '../option/opt';

type Props = {}

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
  {
    title: "Condimentum posuere",
    price: "$90.00",
    originalPrice: "$85.00",
    tag: ["SALE"],
    image: si8
  },
  {
    title: "convallis furniture",
    price: "$115.00",
    originalPrice: "$95.00",
    tag: ["SALE", "HOT"],
    image: si9
  },
  {
    title: "convallis quam sit",
    price: "$85.00",
    originalPrice: "$80.00",
    tag: ["SALE"],
    image: si10
  },
  {
    title: "Curabitur a purus",
    price: "",
    originalPrice: "$115.00",
    tag: [""],
    image: si11
  },
  {
    title: "Diam vel neque",
    price: "$80.00",
    originalPrice: "$75.00",
    tag: ["SALE", "HOT"],
    image: si12
  },
  {
    title: "Dignissim furniture",
    price: "$110.00",
    originalPrice: "$95.00",
    tag: ["SALE"],
    image: si13
  },
  {
    title: "Dignissim venenatis",
    price: "$88.00",
    originalPrice: "$80.00",
    tag: ["SALE"],
    image: si14
  },
  {
    title: "Duis bibendum",
    price: "$90.00",
    originalPrice: "$85.00",
    tag: ["SALE"],
    image: si15
  },
];


const Shop = (props: Props) => {
  return (
    <section>
      <div className=' flex justify-center pt-24 lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse overflow-hidden   '>
        <div className=' lg:w-[27dvw]  flex flex-col md:min-w-60 md:mx-auto lg:mx-0 xl:mx-0 lg:pr-4 '>
          {/* <span><h4 className='text-xl'>Catagories</h4></span> */}
          <Cate/>
        </div>
        <div className='relative w-full grid xl:grid-cols-3 auto-rows-auto auto-cols-max  grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   '>
          {plantData.map((plant) => (
            <div key={plant.title} className='relative group z-0 px-5 pb-16 '>
              {plant.tag.map((x, i) => <Rounds key={x} variant={x} style={{
                top: i * 55 + 10
              }}>{x}</Rounds>)}

              <Option/>
              <div className='relative aspect-square z-0 '>
                <Image src={plant.image} alt={plant.title} objectFit='cover' layout='fill' />
              </div>
              <div className=' pt-4'>
                <p className='text-center pb-2'>{plant.title}</p>
                <div className="flex justify-center gap-x-2 ">
                  <s>{plant.price}</s>
                    <p>{plant.originalPrice}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};
export default Shop