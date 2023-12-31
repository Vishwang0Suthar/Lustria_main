import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode
id:string}

function YOValue({children,id}: Props) {
  return (
    <div className='py-2 '>
        <label className={clsx(' ',{
            'text-[#333333] font-light text-base ':id==='productname',
            'text-[#ABABAB] text-base':id==='productprice',
            'text-[#333333] text-lg ':id==='total',
            'text-[#777777] font-bold text-base':id==='shipping',
        })}>{children}</label>
    </div>
  )
}

export default YOValue