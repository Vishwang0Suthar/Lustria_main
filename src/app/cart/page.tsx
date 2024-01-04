import React from "react";
import Checkoutkart from "../modules/checkoutkart/checkoutkart";
import TitleBanner from "../componenets/titleBanner/TitleBanner";

type Props = {};

const Cart = (props: Props) => {
  return (
    <>
      <TitleBanner>Kart</TitleBanner>

      <Checkoutkart />
    </>
  );
};

export default Cart;
