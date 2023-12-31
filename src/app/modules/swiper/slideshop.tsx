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
    <div className=''>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex flex-wrap" freeMode={true} grabCursor={true} >
        <SwiperSlide>
           {/* <Plants/> */}
           <Shop/>
        </SwiperSlide>
        <SwiperSlide>
            {/* <Plantslide/> */}
            <Shopp/>

        </SwiperSlide>
       
    
        
      </Swiper>
    </div>
  );
}

export default Slideshop