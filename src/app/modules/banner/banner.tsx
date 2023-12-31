import Image from 'next/image'
import React from 'react'
import s1 from '@/app/assests/slider1.jpg'
import s2 from '@/app/assests/slider1.jpg'
import s3 from '@/app/assests/slider1.jpg'
import b2 from '@/app/assests/banner2.jpg'
import b3 from '@/app/assests/banner3.jpg'
import slash from '@/app/assests/slash.png'
type Props = {}

const Banner = (props: Props) => {
  return (
    <div className=' grid grid-cols-1 gap-6 justify-self-center mx-5  lg:grid-cols-2 lg:mx-8 '>
        <div className='relative row-span-2'> 
        <Image alt='banner' src={s1} />
        <div className="absolute text-sm md:flex bottom-5 hidden left-8">
            <p className="px-6">Plants</p>
            <p className="px-6 border-l-[1px] border-black">Terrasium</p>
            <p className="px-6 border-l-[1px] border-black">Succulent</p>
        </div>
        <div className="absolute bottom-0 px-2 justify-center items-center bg-[#fefefe] right-0 flex flex-col">
            <p className="pt-5">01</p>
            <Image className='px-2' src={slash} alt='divider' />
            <p className="pb-5">03</p>
        </div>
        </div>
        <div className='relative  overflow-hidden'> 
        <Image alt='banner' src={b2} />
        <div className="absolute top-[35%] bottom-[20%] w-44 md:w-48 lg:w-52 left-[60%] right-[10%] ">
            <strong className="lg:text-2xl md:text-2xl text-xl ">Snake Plant Laurentii Small</strong>
            <p className="text-base lg:text-xl ">$49.00</p>
        </div>
        </div>
        <div className='relative'> 
        <Image alt='banner' src={b3} />
        <div className="absolute top-12 md:top-14 md:w-52  lg:top-24 lg:left-8  lg:w-72 right-[20%] gap-4 w-44 flex flex-col left-4">
            <strong className="md:text-xl text-base lg:text-2xl">Peperomia Ripple Ruby Large</strong>
            <span className='text-base md:text-lg lg:text-xl' > <b> $25.00 </b> <s>$39.00</s> </span>
        </div>
        </div>
    </div>
  )
}

export default Banner