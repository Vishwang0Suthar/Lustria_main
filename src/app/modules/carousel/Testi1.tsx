import React from 'react'
import Image from 'next/image'
// import {} from './index'
import { Carousel } from '../../modules/carousel/index'
type Props ={}
// import pic from '@/app/assests/icon-testimonials-01.jpg'
// type Props = {}

function Testi1 (props:Props){
    return(
        <>
        <div className="flex justify-around p-14">
                
          <div className="flex flex-col justify-start" key={index}>
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>{product.title}
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={product.image} width={100} alt='rew2' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>{product.name}</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>{product.profession}</p>

                </div>
            </div>
        </div>
            {/* ))} */}
        </div>
        </>
    )
}

export default Testi1