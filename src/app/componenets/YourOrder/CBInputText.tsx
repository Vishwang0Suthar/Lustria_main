import React from 'react'

type Props = {placeholder_1:string}
function CBInputText({placeholder_1}: Props) {
  return (
      <div className=''>
        <input className='transition-all duration-75 border border-transparent focus:outline-none   focus:border-lime-600 focus:bg-white bg-[#F5F5F5] w-full h-12 px-5 ' placeholder={placeholder_1}/>
      </div>
  )
}

export default CBInputText