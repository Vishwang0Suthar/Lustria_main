import React from 'react'

type Props = {
    children:string;
}

const Lable = ({children}: Props) => {
  return (
    <div className='pb-3.5 mb-6 lg:px-0  text-2xl border-b-2 border-gray-100 '>
    <label >{children}</label>
    </div>
  )
}

export default Lable