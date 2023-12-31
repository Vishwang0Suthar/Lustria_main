import React from 'react'
import Categories from '../catagories/catagories'
import RangeSlider from '@/app/modules/shop/rangeslider'
type Props = {}

const Cate = (props: Props) => {
  return (
    <div>
       <div className='pb-3.5 mb-6 lg:px-0 px-5 text-2xl  '>
    <label >Categories</label>
    </div>
    <div>
                <Categories count='8' >House Plants </Categories>
                <Categories count='4' >Potter Plants </Categories>
                <Categories count='1' >Seeds </Categories>
                <Categories count='13' >Small Plants </Categories>
                <Categories count='3' >Succulents </Categories>
                <Categories count='1' >Terrariums </Categories>
                

    </div>
    <RangeSlider/>
    </div>
    
  )
}

export default Cate