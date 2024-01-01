import React from 'react'

type Props = {children:string,
    count: string;
}

const Categories = ({children,count}: Props) => {
  return (
    
    <div className="flex justify-between box-border text-black hover:text-green-600 transition-all duration-600 text-base font-semibold ">
  <div className=" justify-left justify-start text-left text-base ">
    <p>{children}</p>
  </div>
  <div className="count justify-end ">
    <p>({count})</p>
  </div>
</div>
    
  )
}

export default Categories