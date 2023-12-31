import React, { Children, ReactNode } from 'react'

type Props = { children:ReactNode ,}

const Opt = ({children}: Props) => {
  return (
    <div className='h-[6dvh] aspect-square bg-white  flex justify-center items-center  text-slate-700 hover:text-white hover:bg-black transition-all '>
    <span className=' font-bold text-sm '>{children}</span>
    
    
  </div>
  
  )
}

export default Opt