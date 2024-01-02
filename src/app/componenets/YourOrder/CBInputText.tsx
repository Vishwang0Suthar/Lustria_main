import React from 'react'

type Props = {
  variant?: 'required';

  placeholder_1:String}
function CBInputText({variant,placeholder_1}: Props) {
  return (
      <div className=''>
            <input {...(variant === 'required' && { required: true })} className='transition-all duration-100    focus:outline-none  focus:border  focus:border-lime-700 focus:bg-white  bg-[#F5F5F5] w-full h-12 px-5 ' placeholder={placeholder_1}/>
 
    </div>
  )
}

export default CBInputText