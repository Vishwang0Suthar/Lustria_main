import React from 'react'
import CheckOut from '../modules/checkout/Checkout'
import TitleBanner from '../componenets/titleBanner/TitleBanner'

type Props = {}

const CheckRoute = (props: Props) => {
  return (
    <>
<TitleBanner>Checkout</TitleBanner>
        <CheckOut/>
    </>
    )
}

export default CheckRoute