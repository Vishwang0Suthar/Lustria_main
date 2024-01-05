import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode
time?: string
id1:string
id2:string}

function CountElement({children , time,id1,id2}: Props) {
  return (
    <div>
        <div className={clsx("",
        {
            'lg:text-8xl md:text-7xl text-4xl font-bold' :id1==='comingsoon',
            'rounded-full w-10 h-10  text-center px-2 py-2 bg-slate-500  text-[#292929]' :id1==='homebanner'
        })}>
          {children}
          <div className={clsx("",
          {
            'lg:text-base md:text-sm text-xs' :id2==='comingsoon',
            'text-xs text-[#333333] mt-3' :id2==='homebanner'
          })}>
          {time}</div>
        </div>
    </div>
  )
}

export default CountElement