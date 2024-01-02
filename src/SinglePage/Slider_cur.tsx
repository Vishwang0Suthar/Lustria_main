"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import Image  from 'next/image'
import pic from '../../public/SinglePage_images/product-04.jpg'
import pic1 from '../../public/SinglePage_images/product-04.jpg'
import pic2 from '../../public/SinglePage_images/product-05.jpg'
import pic3 from '../../public/SinglePage_images/product-06.jpg'
// import pic4 from '../../public/images/product-12.jpg'
import '../SingleProf/Slider_cur.module.css'


// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="my-swipper2"
      >
        <SwiperSlide>
          <Image src={pic}  height={800} alt='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic1} height={800} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic2} height={800} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} height={800} alt='img'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="my-swiper"
      >
        <SwiperSlide>
          <Image src={pic}  height={150} alt='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic1} height={150} alt='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic2} height={150} alt='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} height={150} alt='img'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
