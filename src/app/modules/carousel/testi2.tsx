"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import Image from "next/image"; 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/modules/carousel/testi2.carousel.module.app.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Greentext from "@/app/componenets/gtext/gtextt/gtextt";
import Testi1 from "./Testi1";
// import carouselData from "./app";
// import { carouselData } from './app'
import pic from "@/app/assests/icon-testimonials-01.jpg";
import pic1 from "@/app/assests/testimonials-20.jpg";
import pic2 from "@/app/assests/testimonials-21.jpg";
type Props={}
const carouselData  =[
  {
      title:'Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.',
      name:'Florence Pittman',
      image: pic,
      profession:'/Model',
  },
  {
      title:'Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.',
      name:'Sally Ramsey',
      image:pic2,
      profession:'/Reporter',
  },
  {
      title:'Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.',
      name:'Lois Thompson',
      image:pic1,
      profession:'/Actor',
  },
  {
      title:'Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.',
      name:'Florence Pittman',
      image:pic,
      profession:'/Model',
  },
]
function Testi2 (props:Props){
 

  return (
    <section>
      <Greentext title="Welcome to Lustria" subtitle="Testimonials" />

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1280: {
            slidesPerView: 3,
            // spaceBetween:2,
          },
        }}
      >
        {carouselData.map ((product,index) =>(
          <>
        <SwiperSlide>
          <div key={product.title} key={index} className="flex flex-col justify-start p-2" >
            <div className="">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>{product.title}
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={product.image} width={100} height={100} alt={product.title} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>{product.name}</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>{product.profession}</p>

                </div>
            </div>
        </div>
        </SwiperSlide>
        </>
        ))}
            

        
        
          
        

      
    
        
      </Swiper>
    </section>
  );
}

export default Testi2
