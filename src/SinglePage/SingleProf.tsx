"use client";
import React, { useRef, useState } from 'react';

import SingleProf1 from './SingleProf1';
import SingleProf2 from './SingleProf2';
import SingleProf3 from './SingleProf3';
import Slider_cur from './Slider_cur';
type Props = {}

const SingleProf = (props: Props) => {
    const [count, setCount] = useState(0)

  return (
<>
    <SingleProf/>
    <div className="flex min-w-[100dvh] xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-3 justify-center xl:px-28 lg:px-28 md:px-16 sm:px-8 px-4 ">
        <div className="gap-4">
            <div className="flex gap-x-5 xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-center">
            
                    <div className="flex-1"><SingleProf1/>
                    </div>
                    <div className="flex-1"><SingleProf2/></div>
             
            </div>
                <div className="dec"><SingleProf3/></div>
                <div className="cat"></div>
        
        </div>
        <div className="fa2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cupiditate temporibus pariatur consequuntur non </div>
</div>
    <Slider_cur/>
</>
  )
}

export default SingleProf