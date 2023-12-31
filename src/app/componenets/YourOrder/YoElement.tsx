import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

const YOElement = ({children}: Props) => {
  return (
    <div className='py-2 pr-3'>
        <label className='text-lg'>{children}</label>
</div>
  )
}

export default YOElement