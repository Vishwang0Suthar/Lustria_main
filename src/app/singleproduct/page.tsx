"use client";
import React, { useRef, useState } from 'react';

import SingleProf1 from '@/app/modules/SinglePage/SingleProf1'
import SingleProf2 from '@/app/modules/SinglePage/SingleProf2'
import SingleProf3 from '@/app/modules/SinglePage/SingleProf3'
import Slider_cur from '@/app/modules/SinglePage/Slider_cur'
import Cate from '../componenets/catagories/catagorie';
type Props = {}

const page = (props: Props) => {
    

  return (
    <>

    <div className="flex w-screen xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-3 justify-center xl:px-28 lg:px-28 md:px-16 sm:px-8 px-4 ">
        <div className="gap-4">
            <div className="flex gap-x-5 xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-center">
            
                    <div className="flex-1"><SingleProf1/>
                    </div>
                    <div className="flex-1"><SingleProf2/></div>
             
            </div>
                <div className="dec"><SingleProf3/></div>
                <div className="cat"></div>
        
        </div>
        <div className='flex-1'><Cate/></div>
</div>
    <Slider_cur/>
    
</>
  )
}

export default page