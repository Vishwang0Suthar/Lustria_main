import React from 'react'

type Props = {}

const Newarrival = (props: Props) => {
  return (
    <section>

    <div className='mt-20' >
        <ul className=' gap-0 hidden transition-all md:flex lg:flex justify-center transition-all text-4xl px-4 py-4'>
            <li className='border-r px-10'><a href="#" className='text-[#ABABAB] focus:text-black hover:text-black font-bold'>All Plants</a></li>
            <li className='border-l border-r px-10'><a href="#" className='text-[#ABABAB] focus:text-black hover:text-black font-bold'>New Arrival</a></li>
            <li className='border-l px-10 '><a href="#" className='text-[#ABABAB] focus:text-black hover:text-black font-bold'>Sale</a></li>
        </ul>
    </div>
    <div className="flex items-center text-3xl md:hidden lg:hidden transition-all text-[#ABABAB] hover:text-black justify-center mt-10">
    <ul className=' gap-0 flex  md:hidden lg:hidden justify-center transition-all text-4xl px-4 py-4'>
    <li className='border-r px-6'><a href="#" className='text-[#ABABAB] hover:text-black text-2xl font-bold'>All Plants</a></li>

      <li><select
        id="dropdown"
        className="p-1 text-3xl max-w-36 bg-transparent text-center focus:outline-none"

      >
        {/* <option value="option1" className='text-green-400 hidden'>More</option> */}
        <option value="option1" className='text-green-400  text-2xl font-bold hover:text-black  '>More</option>
        <option value="option2" className='text-green-400 hover:underline-offset-2 underline-offset-2    text-2xl font-bold hover:text-black hover:bg-white'>New Arrival</option>
        <option value="option3" className='text-green-400 text-2xl font-bold hover:text-black hover:bg-white'>Sale</option>
      </select></li>
      </ul>
    </div>
    </section>
  )
}

export default Newarrival