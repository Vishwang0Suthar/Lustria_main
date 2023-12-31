"use client"
import React, { useRef, useState } from 'react';

// Import Swiper React components
import Image from 'next/image';
import pic from '@/app/assests/icon-testimonials-01.jpg'
import pic1 from '@/app/assests/testimonials-20.jpg'
import pic2 from '@/app/assests/testimonials-21.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/app/modules/carousel/testi2.carousel.module.app.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Testi2() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex flex-wrap" freeMode={true} grabCursor={true}
      breakpoints={{
        0: {
            slidesPerView:1,
            spaceBetween:2,
        },
        480:{
            slidesPerView:1,
            spaceBetween:2,
        },
        768:{
            slidesPerView:1,
            spaceBetween:2,
        },
        1024:{
            slidesPerView:2,
            spaceBetween:2,
        },
        1280:{
            slidesPerView:3,
            // spaceBetween:2,
        },
      }}
      >
        <SwiperSlide>
            <div className="flex justify-around  p-14">
          <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={pic} width={100} alt='rew1' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Florence Pittman</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Model</p>

                </div>
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="flex justify-around p-14">
          <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={pic2} width={100} alt='rew2' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Sally Ramsey</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Reporter</p>

                </div>
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-around p-14">
          <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={pic1} width={100} alt='rew3' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Lois Thompson</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Actor</p>

                </div>
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-around p-14">
          <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={pic} width={100} alt='rew4' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Florence Pittman</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Model</p>

                </div>
            </div>
        </div>
        </div>
        </SwiperSlide>
    
        
      </Swiper>
    </>
  );
}
