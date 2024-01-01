import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react'

type Props = {
    variant:'HOT' | 'SALE' ;
} & React.HTMLAttributes<HTMLDivElement>

const Rounds = ({children,variant, className, ...props}: Props) => {
  return (
    <div className={clsx('absolute z-50 top-3 left-8 flex flex-col p-2 h-12 aspect-square rounded-full justify-center items-center text-slate-700  ',{
        'bg-[#F5CC63]': variant==='HOT',
        'bg-[#F0524B]':variant==='SALE',
        [`${className}`]: !!className
    })}
    {...props}>
    <span className=' font-bold text-xs text-white '>{children}</span>
    
    
  </div>
  )
}

export default Rounds