import React from 'react'
import YOValue from '@/app/componenets/CheckOut/YoValue'
import YOElement from '@/app/componenets/CheckOut/YoElement'

type Props = {}

function YourOrder({}: Props) {
  return (
    <div>
        <div className='container w-full '>
            <label  className='mb-7 text-2xl'>Your order</label>
            <div className='grid grid-flow-col grid-cols-[0.6fr_0.4fr]'>
              <div className='grid '>
                <div className=' grid'>
                <YOElement >Products</YOElement>
                <YOValue id='productname'>xyz</YOValue>
                </div>
                <div className=' grid'>
                <YOElement >Subtotal</YOElement>
                <YOElement>Shipping</YOElement>
                <YOElement>Total</YOElement>
                </div>
              </div>
              <div className='grid lg:text-left text-right'>
                <div className='grid'>
                <YOElement >Subtotal</YOElement>
                <YOValue id='productprice'>abc</YOValue> 
                </div>
                
                <div className='grid'>
                <YOValue id='total'>sb1</YOValue>
                <YOValue id='shipping'>free Shipping</YOValue>
                <YOValue id='total'>total</YOValue>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default YourOrder