import React from 'react'
import Image from 'next/image'
import pic from '@/app/assests/icon-testimonials-01.jpg'
type Props = {}

const Testi1 = (props: Props) => {
  return (
    <>
    <div className="flex justify-around w-screen p-14">
          <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex place-items-start">
                    <Image src={pic} width={100} alt='img1' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Florence Pittman</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Model</p>

                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex ">
                    <Image src={pic} width={100} alt='img2' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Florence Pittman</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Model</p>

                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start">
            <div className="tet">
                <p className='text-[20px] leading-7 text-[#777] opacity-[0.8] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt ex sequi?
                </p>
            </div>
            <div className="flex gap-2 pt-14">
                <div className="flex ">
                    <Image src={pic} width={100} alt='img3' height={100} className='rounded-full' />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className='mt-0 mb-0 text-[18px]font-500 text-[#292929]'>Florence Pittman</h1>
                    <p className='text-[16px] font-normal leading-5 text[#7e7e7e] '>/Model</p>

                </div>
            </div>
        </div>

        </div>
    </>  
    )
}

export default Testi1