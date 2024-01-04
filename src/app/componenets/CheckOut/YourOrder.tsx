import React from 'react'
import YOValue from '@/app/componenets/CheckOut/YoValue'
import YOElement from '@/app/componenets/CheckOut/YoElement'
import { plantData } from '@/lib/constData'

type Props = {}

function YourOrder({}: Props) {
  return (
    <div>
        <div className='container w-full '>
            <label  className='mb-7 text-2xl'>Your order</label>
            <div className='grid '>
              <div className='grid grid-flow-col grid-cols-[0.6fr_0.4fr]'>
                <div className=' grid'>
                <YOElement >Products</YOElement>
                {plantData.map((plant) => (<>

                <YOValue id='productname'>
                    <>
                    {plant.title}
                    <span className=""> &nbsp; × {plant.count}</span>
                    </>
                </YOValue>                
                </>
                ))}

                </div>
                <div className='grid'>
                <YOElement >Subtotal</YOElement>
                {plantData.map((plant) => (<>
                <YOValue id='productprice'>{plant.price ||plant.originalPrice}</YOValue> 
                </>
                ))}
                </div>

              </div>
              <div className='grid lg:text-left text-right grid-flow-col grid-cols-[0.6fr_0.4fr]'>
                
                <div className=' grid'>
                <YOElement >Subtotal</YOElement>
                <YOElement>Shipping</YOElement>
                <YOElement>Total</YOElement>
                </div>
                <div className='grid'>
                <YOValue id='total'>sub total</YOValue>
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