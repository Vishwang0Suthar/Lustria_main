import React, { ReactNode } from 'react'
import clsx from "clsx";

type Props = {children:ReactNode}

function CBLabelRequired({children}:Props) {
  return(
    <div className='container mb-2'>
      <label htmlFor="">{children}<a className='text-[#FF0000] '> *</a></label>
    </div>
  )
}

export default CBLabelRequired 