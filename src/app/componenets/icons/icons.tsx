import clsx from 'clsx';
import React, { ReactNode } from 'react'

type Props = {children : ReactNode;
id:string}

function Icons({children,id}: Props) {
  return (
    <div  className={clsx(' relative  transition-all  fill-transparent  lg:w-7 lg:h-7 md:h-0 md:w-0 h-0 w-0  p-1 hover:stroke-[#7ea15b] duration-500',{
      'md:h-7 lg:mr-auto  md:w-7 h-7 w-7':id==='search',
      '':id==='wishlist',
      '':id==='cart'
    })} >
        {children}
        {id === 'wishlist' && (
        <div className="hidden lg:block rounded-full h-[16px] aspect-square text-center text-[10px] top-0 mt-[-25%] mr-[-25%] right-0 bg-[#7ea15b] absolute text-[#fefefe]">
          <strong>1</strong>
        </div>
      )}
      {id === 'cart' && (
        <div className="hidden lg:block rounded-full h-[16px] aspect-square text-center text-[10px] top-0 mt-[-30%] mr-[-30%] right-0 bg-[#7ea15b] absolute text-[#fefefe]">
          <strong>0</strong>
        </div>
      )}
    </div>
  )
}

export default Icons