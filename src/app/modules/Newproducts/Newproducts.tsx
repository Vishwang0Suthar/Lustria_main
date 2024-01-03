import Greentext from '@/app/componenets/gtext/gtextt/gtextt'
import Newcol from '@/app/componenets/plants/newcol'
import React from 'react'



type Props = {}

const Newproducts = (props: Props) => {
  return (
    <>
    <Greentext title='find your dream plants' subtitle='New Summer Collection'/>
        <Newcol/>
    </>
  )
}

export default Newproducts;