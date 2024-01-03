import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Footerdetail = ({children}: Props) => {
  const arrayChild = React.Children.toArray(children)
    return (
    <>
       <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6 text-[15px] lg:gap-3 gap-1">
                                <div className="text-[#7fa15a]">
                    {arrayChild[0]}
                    </div>
                    <br />
                    {arrayChild[1]}
                </div>
    
    </>
  )
}

export default Footerdetail