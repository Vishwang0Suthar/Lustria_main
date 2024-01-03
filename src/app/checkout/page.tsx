import React from 'react'
import CheckOut from '../modules/checkout/Checkout'
import TitleBanner from '../componenets/titleBanner/TitleBanner'

type Props = {}

const CheckRoute = (props: Props) => {
  return (
    <>
        <TitleBanner children="Checkout"></TitleBanner>
        <CheckOut/>
    </>
    )
}

export default CheckRoute