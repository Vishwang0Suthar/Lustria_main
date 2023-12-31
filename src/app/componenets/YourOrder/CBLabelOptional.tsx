import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

function CBLabelOptional({children}:Props) {
    return(
      <div className='container mb-2'>
        <label htmlFor="" >{children}<a> (Optional)</a></label>
      </div>
    )
  }

export default CBLabelOptional