import Image from "next/image";
import React from "react";
import b2 from "@/app/assests/banner2.jpg";

type Props = {};

const Banner2 = (props: Props) => {
  return (
    <div className="relative group overflow-hidden">
      <Image
        className=" select-none group-hover:scale-105 transition-all"
        alt="banner"
        src={b2}
      />
      <div className="absolute top-[35%] bottom-[20%] w-44 md:w-48 lg:w-52 left-[60%] right-[10%] ">
        <strong className="lg:text-2xl md:text-2xl text-xl ">
          Snake Plant Laurentii Small
        </strong>
        <p className="text-base lg:text-xl ">$49.00</p>
      </div>
      <div className="bg-shimmer-banner group-hover:opacity-100"></div>
    </div>
  );
};

export default Banner2;
