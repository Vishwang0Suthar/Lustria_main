import React from 'react'

type Props = {children:string,
    count: string;
}

const Categories = ({children,count}: Props) => {
  return (
    
    <div className="flex justify-between pl-6 lg:pl-2 box-border text-black hover:text-green-600 transition-all duration-600 text-base font-semibold">
  <div className=" justify-left justify-start text-left py-5">
    <p>{children}</p>
  </div>
  <div className="count justify-end pr-10 pl-10 py-5">
    <p>({count})</p>
  </div>
</div>
    
  )
}

export default Categories