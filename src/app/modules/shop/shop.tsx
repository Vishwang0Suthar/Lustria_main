import React from 'react'
 
import Image from 'next/image'
import Plant from '@/app/componenets/plants/plant/plant'
import si0 from '@/app/assests/images/1t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si7 from '@/app/assests/images/8t.jpg';
import he from     '@/app/assests/images/1n.jpg'
import heh from    '@/app/assests/images/2n.jpg'
import hehe from   '@/app/assests/images/3n.jpg'
import heheh from  '@/app/assests/images/4n.jpg'
import Cate from '@/app/componenets/catagories/catagorie'
import Slidermod from './slidermod'

type Props = {}

const Shop = (props: Props) => {
  const plantData = [
    ['Aliquam furniture', '$85.00','$79.00', 'SALE'],
    ['Aliquam lobortis', '$87.00','$75.00', 'SALE'],
    ['Aliquam sit amet', '','$12.00', 'HOT'],
    ['Aliquet autor sem','$76.00', '$55.00', 'SALE'],
    ['Auctor gravida enim','$67.00', '$55.00', 'SALE'],
    ['Autor sem', '$95.00','$77.00', 'SALE'],
    ['Commando dolor', '$88.00','$75.00', 'SALE', 'HOT'],
    ['Condimentum furniture', '$85.00','$77.00', 'SALE'],
  ];
  return (
    <section>
    <div className="flex flex-wrap justify-around items-center text=[#f9f9f9] ">
        <div className='flex flex-wrap min-w-[96dvw] justify-around items-center py-[76px]'>
        <h1 className='flex flex-wrap text-[55px]'>Shop</h1>
        <ul className='flex flex-wrap gap-4'>
            <li>Home</li>
            <li> &#62; </li>
            <li>Small Plats</li>
            
        </ul>
    </div>
    </div>
  <div className=' flex justify-center pt-24 px-8 gap-4 lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse overflow-hidden  '>
    <div className=' lg:w-fit  flex flex-col md:min-w-60 md:mx-auto lg:mx-0 xl:mx-0 '>
      {/* <span><h4 className='text-xl'>Catagories</h4></span> */}
      <Cate/>
    </div>
    <div className='grid  grid-rows-2 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:px-20 lg:px-4 md:px-10 px-0 gap-y-12 gap-x-20 '>
  {[si0, si1, si2, si3, si4, si5, si6, si7].map((image, index) => (
    <Plant key={index}>
      <Image src={image} alt={`${index + 1}`} objectFit='cover' layout='fill' />
      {plantData[index].map((text, i) => (
        <div key={i}>
          {i === 0 && text}
          {i === 1 && <span><s>{text}</s></span>}
          <strong>{i === 2 && text} </strong>

          {i === 3 && <div className='h-[6dvh] aspect-square bg-[#F0524B] absolute left-1 top-1 rounded-full flex justify-center items-center'>
            <span className='text-white font-bold text-sm'>{text}</span>
          </div>}
        </div>
      ))}
    </Plant>
  ))}
</div>

   </div>
   </section>
  
  )
}

export default Shop