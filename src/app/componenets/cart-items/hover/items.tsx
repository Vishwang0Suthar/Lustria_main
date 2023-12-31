import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const Hoveritems = ({children}: Props) => {
    const childrenArr = React.Children.toArray(children)
  return (
    <div className='flex p-4'>
        {childrenArr[0]}
        <div className=" flex p-2  flex-col">
               
        {childrenArr[1]}
        <div className="flex text-base">
        {childrenArr[2]}
        
        {childrenArr[3]}
        </div>
        </div>
        <a href="" className="h-2 w-2 ml-auto"  >
            <FontAwesomeIcon icon={faClose} fill='gray' />
        </a>
    </div>
  )
}

export default Hoveritems