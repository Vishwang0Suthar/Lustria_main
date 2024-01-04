"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swip/slide.components.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Plants from '../plants/plants';
import Plantslide from '../plants/plantslide';
import Shop from '../shop/shop';
import Shopp from '../shop/shopp';

type Props = {}

const Slideshop = (props: Props) => {
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
           {/* <Plants/> */}
           <Shop/>
        </SwiperSlide>
        <SwiperSlide>
            {/* <Plantslide/> */}
            <Shopp/>

        </SwiperSlide>
       
    
        
      </Swiper>
    </>
  );
}

export default Slideshop