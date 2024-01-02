import React from 'react'
import Categories from '../catagories/catagories'
import RangeSlider from '@/app/modules/shop/rangeslider'
import Lable from '../shop-label/lable'
type Props = {}

const Cate = (props: Props) => {
  return (
    <div>
       <Lable>Categories</Lable>
    <div className='flex flex-col gap-y-8'>
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