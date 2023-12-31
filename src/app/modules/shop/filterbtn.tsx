import React from 'react'

type Props = {}

const Filterbtn = (props: Props) => {
  return (
    <div>
        <button className="bg-[#222222] border border-black text-white px-6 py-3 font-semibold transition-all duration-700 hover:bg-white hover:text-black duration-800 ">
      Filter
    </button>
    </div>
  )
}

export default Filterbtn