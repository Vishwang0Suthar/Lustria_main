"use client"
import React from 'react';
import Slider from 'rc-slider';  //npm install rc-slider
import 'rc-slider/assets/index.css';
import Filterbtn from './filterbtn';
import TagLink from './tags';

const RangeSlider: React.FC = () => {
  const [range, setRange] = React.useState<[number, number]>([20, 80]);

  const handleSliderChange = (newRange: [number, number]) => {
    setRange(newRange);
  };
  const calculateMarginTop = (height: number) => `-${height / 3}px`;
  return (
    <div className="xl:w-64 lg:w-64 md:w-[98dvw] grid gap-2 mt-12   ">
      <div className='pb-3.5 mb-6 text-2xl  '>
    <label >Filter</label>
    </div>
      <div>
      <Slider
        range
        min={10}
        max={120}
        step={1}
        value={range}
        // onChange={handleSliderChange}
        trackStyle={[{ backgroundColor: 'black' }]} 
        handleStyle={[
          { borderColor: 'black', backgroundColor: 'black', width:'12px', height:'12px', marginTop:calculateMarginTop(12)}, // Left handle
          { borderColor: 'black', backgroundColor: 'black', width:'18px', height:'18px',marginTop:calculateMarginTop(18)}, // Right handle
        ]}
      
      />
      </div>
      <div className='grid grid-flow-col gap-3'>
        <div>
        <Filterbtn/>
        </div>
        <div className='lg:grid text-right text-sm mb-2'>
        <label >Price:<a>$</a> {range[0]} - </label><label ><a>$</a>{range[1]}</label>
        </div>

      </div>
      <TagLink/>
    </div>
  );
};

export default RangeSlider;