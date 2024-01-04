import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// import Image from 'next/image';
import Image from "next/image";
import logo from "@/app/assests/logo.png";
import Links from "@/app/componenets/link/link";
import Icons from "@/app/componenets/icons/icons";
import CartHover from "../cart-hover/cartHover";
import Authbuttons from "../authentication/authbuttons";
import "../header/header.modules.css";
import Hammburger from "../hamm/Hammburger";
import Navlinks from "@/app/componenets/Navlinks/Navlinks";
import Navicons from "@/app/componenets/Navicons/Navicons";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header sticky scroll-m-3 bg-white top-0 z-50">
      <Hammburger />
      <Link href="/">
        <Image className=" lg:mr-auto lg:pl-5  md:ml-auto left-1/2 mr-0 "
          src={logo}
          width="170"
          height="115"
          alt="logo"/>
      </Link>
      <Navlinks/>
      <Authbuttons />
      <Navicons/>
    </header>
  );
};

export default Header;
