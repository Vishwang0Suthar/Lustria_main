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
// import Plantslide from '../plants/plantslide';

type Props = {}

const Slide = (props: Props) => {
  return (
    <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex flex-wrap" freeMode={true} grabCursor={true}>
        <SwiperSlide>
           <Plants/>
        </SwiperSlide>
        <SwiperSlide>
            <Plants/>

        </SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default Slide