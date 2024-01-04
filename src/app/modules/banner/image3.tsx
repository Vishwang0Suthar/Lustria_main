import Image from "next/image";
import React from "react";
import b3 from "@/app/assests/banner3.jpg";

type Props = {};

const Banner3 = (props: Props) => {
  return (
    <div className="relative">
      <Image alt="banner" className="select-none" src={b3} />
      <div className="absolute top-12 md:top-14 md:w-52  lg:top-24 lg:left-8  lg:w-72 right-[20%] gap-4 w-44 flex flex-col left-4">
        <strong className="md:text-xl text-base lg:text-2xl">
          Peperomia Ripple Ruby Large
        </strong>
        <span className="text-base md:text-lg lg:text-xl">
          {" "}
          <b> $25.00 </b> <s>$39.00</s>{" "}
        </span>
      </div>
    </div>
  );
};

export default Banner3;
