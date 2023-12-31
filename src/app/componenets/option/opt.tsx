import React from 'react'

import { IoShuffleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Opt from '../plants/opt';
type Props = {}

const Option = (props: Props) => {
  return (
    <div className='flex items-end w-[4dvw] h-[30dvh] right-1 pt-2 pr-2 pb-1 mr-[-20px] absolute flex-col gap-1  group-hover:translate-x-[-18px] opacity-0 group-hover:opacity-100 z-10 transition-all duration-[400ms] '>
    <a href=''> <Opt>
       <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  ">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
       </svg>
     </Opt></a>
     <a href=''> <Opt>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
       </svg>
     </Opt></a>
     <a href=''><Opt>
     <IoIosSearch style={{ width: '1.5em', height: '1.5em' }}  />
     </Opt></a>
     <a href=''><Opt>
       <IoShuffleOutline style={{ width: '1.5em', height: '1.5em' }} />
     </Opt></a>
   </div>
  )
}

export default Option