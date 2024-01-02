import React,{ReactNode} from 'react'
import clsx from "clsx";


type Props = {children:ReactNode
id:String}

const CommonButton = ({children,id}: Props) => {
  return (
    <div className='container self-center min-w-60 flex justify-center items-center'>
    <button className={clsx(' py-3 px-10  cursor-pointer flex gap-3 transition-all duration-300 text-center items-center text-lg  ',
    {
    'bg-white hover:bg-black border-[1px] hover:text-white border-black justify-center':id==='shopallplants',
    'bg-[#7fa15a] hover:bg-white text-white hover:text-black border-[#7fa15a] ':id==='addtocart',
    'bg-[#7fa15a] hover:bg-slate-800 w-full justify-center ':id==='subscribe',
    'bg-[#7fa15a] w-60 justify-center hover:bg-[#fefefe] hover:text-black  hover:border-black border-[1px] border-[#7fa15a]':id==='viewcart',
    'bg-black hover:bg-white text-white w-60 justify-center hover:text-black border-black border-[1px] hover:border-[#7fa15a]':id==='checkout'
    })}>{children}</button>
    </div>
  )
}

export default CommonButton