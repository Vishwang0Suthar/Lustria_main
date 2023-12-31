import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
    // buttonName: string;
    // quantitySize:string,

}

const Button = ({children}: Props) => {
    const Array = React.Children.toArray(children);
  return (
    <div className='w-1/2 h-[7dvh] font-medium bg-slate-50 hover:bg-[#7FA15A] transition-all flex justify-center items-center'>
      {/* <button className=''> <span>{Array[0]}<sup>{Array[1]}</sup></span></button> */}
      <button >
        <span>{Array[0]}
        {<sup>{Array[1]}</sup>}</span>
      </button>

    </div>
  )
}

export default Button