import React from 'react'

type Props = {}

function Email({}: Props) {
  return (
    <div className='container flex justify-center w-screen lg:max-w-[50dvw]  px-4 ' >
        <div className='relative w-full'>
            <input type="text " className=' bg-[#F5F5F5] text-gray-600 pl-5 pr-20 w-full h-16' placeholder='Your email address'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute bg-[#F5F5F5] right-4 top-5 h-6 w-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        </div>
    </div>
  )
}

export default Email