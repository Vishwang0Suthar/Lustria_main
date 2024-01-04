import React from 'react'
import Shop from '../modules/shop/shop'
import TitleBanner from '../componenets/titleBanner/TitleBanner'

type Props = {}

const Shoppg = (props: Props) => {
  return (
    <>
        <TitleBanner>Shop</TitleBanner>

        <Shop/>

        </>
  )
}

export default Shoppg