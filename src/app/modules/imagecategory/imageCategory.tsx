import React from 'react'
import ImageWithButton from '@/app/componenets/buttons/ImageWithButton'
import image1 from '@/modules/imagecategory/Cat_images/Category-01.jpg'

type Props = {}

const Imagecategory = (props: Props) => {
  return (
    <section>
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2  md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-4'>
          <div className='relative md:col-span-2 lg:col-span-2 lg:row-span-2'>
            {/* Image with Button */}
            <ImageWithButton src='/Cat_images/Category-01.jpg' alt='pic' buttonName='Seeds' quantitySize='(1)'/>
          </div>
          <div className='col-span-1 row-span-1'>
            <ImageWithButton src='/Cat_images/Category-02.jpg' alt='pic' buttonName='Terrariums' quantitySize='(1)'/>
          </div>
          <div className='col-span-1 row-span-1'>
            <ImageWithButton src='/Cat_images/Category-06.jpg' alt='pic' buttonName='House Plants'quantitySize='(8)' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr_1fr] lg:grid-cols-2 lg:grid-rows-3 gap-4'>
          <div className='md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1'>
            <ImageWithButton src='/Cat_images/Category-04.jpg' alt='pic' buttonName='Potter Plants' quantitySize='(4)'/>
          </div>
          <div className='md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'>
            <ImageWithButton src='/Cat_images/Category-07.jpg' alt='pic' buttonName='Succelents' quantitySize='(3)'/>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

export default Imagecategory