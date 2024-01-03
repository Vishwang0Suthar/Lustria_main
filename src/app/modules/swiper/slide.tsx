"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper/slide.components.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Plants from '@/app/componenets/plants/plants';
import Plantslide from '@/app/componenets/plants/plantslide';
// import Plantslide from '../plants/plantslide';

type Props = {}

const Slide = (props: Props) => {
  return (
    <>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true, 
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Plants/>
        </SwiperSlide>
        <SwiperSlide>
            <Plantslide/>

        </SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default Slide