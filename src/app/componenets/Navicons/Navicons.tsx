import React from 'react'
import Icons from '../icons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faHeart,
    faCartShopping,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
import CartHover from '@/app/modules/cart-hover/cartHover';
type Props = {}

const Navicons = (props: Props) => {
  return (
<><div className="flex h-6 gap-2 ml-auto items-center ">
        <Icons id="search">
          {" "}
          <FontAwesomeIcon icon={faSearch} />{" "}
        </Icons>
        <div className="hidden gap-2 md:hidden lg:flex lg:pr-5">
          <Icons id="wishlist">
            {" "}
            <FontAwesomeIcon icon={faHeart} />{" "}
          </Icons>
          <div className="group relative">
            <Icons id="cart">
              {" "}
              <FontAwesomeIcon icon={faCartShopping} />{" "}
            </Icons>

            <div className="dropdown hidden  z-20 right-0 w-[25vw] shadow-lg group-hover:block absolute bg-white  ">
              {/* <!-- Dropdown content goes here --> */}
              <CartHover />
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Navicons