import React from 'react'
 
import Image from 'next/image'
import Plant from '../plants/plant/plant'
import furniture from '../plants/plant/images/5n.jpg'
import si from '../plants/plant/images/6n.jpg'
import sii from '../plants/plant/images/7n.jpg'
import siii from '../plants/plant/images/8n.jpg'
import siu from '../plants/plant/images/5f.jpg'
import siuu from '../plants/plant/images/6f.jpg'
import siuuu from '../plants/plant/images/7f.jpg'
import siuuuu from '../plants/plant/images/8f.jpg'
import he from '../plants/plant/images/9f.jpg'
import Cate from '../catagories/catagorie'


type Props = {}

const Shopp = (props: Props) => {
  return (
    <div className='flex justify-center pt-24 gap-6 lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse overflow-hidden min-w-[98dvw]'>
    <div className='h-screen lg:w-[20dvw] bg-red-100 flex flex-col md:w-screen  '>
      {/* <span><h4 className='text-xl'>Catagories</h4></span> */}
    <Cate/>
    </div>
    <div className='relative grid lg:grid-cols-3 grid-rows-3 gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   '>
    <Plant><Image
                            src={furniture}
                            alt='5'
                            objectFit='cover'
                            layout='fill'
                        />
                        Diam vel neque
                        <span><s>$80.00</s></span>
                        $75.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
          </Plant>
    <Plant><Image
                            src={si}
                            alt='6'
                            objectFit='cover'
                            layout='fill'
                        />
                        Dignissim furniture
                        <span><s>$110.00</s></span>
                        $95.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
    <Plant><Image
                            src={sii}
                            alt='7'
                            objectFit='cover'
                            layout='fill'
                        />
                        Dignissim venenatis
                        <span><s>$88.00</s></span>
                        $80.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
    <Plant><Image
                            src={siii}
                            alt='8'
                            objectFit='cover'
                            layout='fill'
                        />
                        Duis bibendum
                        <span><s>$90.00</s></span>
                        $85.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
    <Plant><Image
                            src={siu}
                            alt='5'
                            objectFit='cover'
                            layout='fill'
                        />
                        Diam vel neque
                        <span><s>$80.00</s></span>
                        $75.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
          </Plant>
    <Plant><Image
                            src={siuu}
                            alt='6'
                            objectFit='cover'
                            layout='fill'
                        />
                        Dignissim furniture
                        <span><s>$110.00</s></span>
                        $95.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
    <Plant><Image
                            src={siuuu}
                            alt='7'
                            objectFit='cover'
                            layout='fill'
                        />
                        Dignissim venenatis
                        <span><s>$88.00</s></span>
                        $80.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
    <Plant><Image
                            src={siuuuu}
                            alt='8'
                            objectFit='cover'
                            layout='fill'
                        />
                        Duis bibendum
                        <span><s>$90.00</s></span>
                        $85.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
                        <Plant><Image
                            src={he}
                            alt='9'
                            objectFit='cover'
                            layout='fill'
                        />
                        
                        Condimentum posuere
                        <span><s>$90.00</s></span>
                        $85.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
          {/* <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-14  rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div> */}
                        </Plant>
   
   
    </div>

  // </div>
  
  )
}

export default Shopp