import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const TitleBanner = ({children,...props}: Props) => {
    const childrenArray = React.Children.toArray(children)

    return (
    <>
        <div className=" bg-[#f8f8f8] mt-10 flex flex-wrap justify-around items-center text=[#f9f9f9]">
        <div className='flex flex-wrap w-screen justify-around items-center py-[76px]'>
        <strong className='flex flex-wrap text-[55px]'>{childrenArray[0]}</strong>
        <ul className='flex flex-wrap gap-4'>
            <li>Home</li>
            <li> &#62; </li>
            <li>Small Plats</li>
            <li> &#62; </li>
            <li>{childrenArray[0]}</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default TitleBanner