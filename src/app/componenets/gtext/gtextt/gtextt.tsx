import React from 'react'

type Props = {
  children?: React.ReactNode;
  title:string;
  subtitle:string;
}

const Greentext = ({children,title,subtitle}: Props) => {
  return (
    <div className='flex mt-16  justify-center w-full flex-col items-center gap-5 flex-wrap  '>
        <p className='font-medium  text-lime-600'>{title}</p>
        <p className='text-4xl font-medium lg:px-14 md:px-10 sm:px-4 text-center'>{subtitle}</p>    </div>
  )
}

export default Greentext