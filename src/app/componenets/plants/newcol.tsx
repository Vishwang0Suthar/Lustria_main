import React from 'react'
import Plant from './plant/plant'
import Image from 'next/image'
import furniture from '@/app/assests/images/1t.jpg'
import si from '@/app/assests/images/2t.jpg'
import sii from '@/app/assests/images/3t.jpg'
import siii from '@/app/assests/images/4t.jpg'
import siu from '@/app/assests/images/5t.jpg'
import siuu from '@/app/assests/images/6t.jpg'
import siuuu from '@/app/assests/images/7t.jpg'
import siuuuu from '@/app/assests/images/8t.jpg'

type Props = {}

const Newcol = (props: Props) => {
  return (
    <div className='grid  xl:grid-cols-4 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-40 lg:px-32 md:px-20 px-0  gap-y-12 gap-x-12 pt-16'>
    <Plant><Image
                            src={furniture}
                            alt='l'
                            objectFit='cover'
                            layout='fill'
                        />
                        Aliquam furniture
                        <span><s>$85.00</s></span>
                        $79.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
                        </Plant>
    <Plant><Image
                            src={si}
                            alt='2'
                            objectFit='cover'
                            layout='fill'
                            
                        />
                        Aliquam lobortis
                        <span><s>$87.00</s></span>
                        $75.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
                        </Plant>
    <Plant><Image
                            src={sii}
                            alt='3'
                            objectFit='cover'
                            layout='fill'
                        />
                        Aliquam sit amet
                        <span><s></s></span>
                        $12.00
                        <div className='h-[6dvh] aspect-square bg-[#F5CC63] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>HOT</span>
          </div>
                        </Plant>
    <Plant><Image
                            src={siii}
                            alt='4'
                            objectFit='cover'
                            layout='fill'
                        />
                        Aliquet autor sem
                        <span><s>$76.00</s></span>
                        $55.00
                        <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>SALE</span>
          </div>
                        </Plant>
                        </div>
  )
}

export default Newcol