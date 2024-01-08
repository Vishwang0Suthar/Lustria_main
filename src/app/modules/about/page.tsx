import React from 'react'
import Image from 'next/image'
import Aboutcard from '../../modules/aboutcard/index'
import pic1 from '../../../../public/about_image/OIP.jpeg'
import Aboutcart1 from '../../modules/aboutcard1/index'
import pic2 from '../../../../public/about_image/plantabout.jpg'


type Props = {}

const About = (props: Props) => {
  return (
    <>
      <section className='flex flex-col lg:flex-row  md:items-center'>
        <div className='relative  w-fit md:mx-auto mx-auto lg:ml-0 -z-1 group transition-all bg-black  overflow-hidden'>
          <div className="absolute top-1/2 h-[4px] w-full rotate-45 z-10  ">
          <div className=" bg-white  h-[1px] w-full group-hover:translate-y-40 opacity-0 group-hover:opacity-100 -translate-x-2 transition-all duration-500  z-10"></div>
          <div className=" bg-white  h-[1px] w-full group-hover:-translate-y-40 opacity-0 group-hover:opacity-100 translate-x-5 transition-all duration-500 z-10"></div>
          </div>
          <Image src={pic1} className='hover:opacity-75 transition-all' alt="" />
        </div>
        <div className='sm:text-center lg:w-1/2 md:pt-4 md:text-center'>
  <p className='text-4xl sm:pt-10 text-[#7fa15a] pb-4'>Welcome to Lustria</p>
  
  
  <p className='text-[#777777]'>
    Empowering all people to be plant people — a collection of articles from The Sill’s team of Plant Experts across a variety of plant care topics to inspire confidence in the next generation of plant parents. Welcome to Plant Parenthood™.
  </p>
  
  <p className=' text-[#777777] '>
    Luckily, we have a few ideas on watering for optimum plant health. The Lustria succulents and other smaller specimen.
  </p>
</div>

      </section ><br /><br />
      <Aboutcart1/>
      <section>
      <div className='relative mx-auto text-center  group transition-all bg-black  overflow-hidden w-fit '>
      <div className="absolute top-1/2 h-[2px] w-full rotate-45 z-10  ">
          <div className=" bg-white  h-[1px] w-full group-hover:translate-y-80 opacity-0 group-hover:opacity-100 -translate-x-2 transition-all duration-500  z-10"></div>
          <div className=" bg-white  h-[1px] w-full group-hover:-translate-y-80 opacity-0 group-hover:opacity-100 translate-x-12 transition-all duration-500 z-10"></div>
          </div>
      <Image src={pic2} alt="" className="mx-auto hover:opacity-75 transition-all" />
      </div>




      <div className='text-centerxt md:text-center pt-11 sm:text-2xl lg:text-4xl text-[#7fa15a]'>
        <h1 >“ We’re going to make the experience of discovering the perfect potted plants as wonderful as the plants themselves. “
</h1>
      </div></section>
    <Aboutcard/>
    </>
  )
}

export default About