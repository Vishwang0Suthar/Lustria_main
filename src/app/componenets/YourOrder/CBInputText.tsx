import React from 'react'

type Props = {placeholder_1:string}
function CBInputText({placeholder_1}: Props) {
  return (
      <div className=''>
        <input className='bg-[#f5f5f5] w-full h-12 px-5 ' placeholder={placeholder_1}/>
      </div>
  )
}

export default CBInputText