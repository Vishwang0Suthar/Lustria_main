import Image from "next/image";
import React from "react";
import s1 from "@/app/assests/slider1.jpg";
import s2 from "@/app/assests/slider1.jpg";
import s3 from "@/app/assests/slider1.jpg";
import b2 from "@/app/assests/banner2.jpg";
import b3 from "@/app/assests/banner3.jpg";
import slash from "@/app/assests/slash.png";
import "../banner/banner.modules.css";
import Banner1 from "./image1";
import Banner2 from "./image2";
import Banner3 from "./image3";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" grid grid-cols-1 gap-6 justify-self-center mx-5  lg:grid-cols-2 lg:mx-8 ">
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div>
  );
};

export default Banner;
