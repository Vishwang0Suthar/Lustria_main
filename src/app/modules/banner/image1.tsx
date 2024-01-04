import Image from "next/image";
import React from "react";
import slash from "@/app/assests/slash.png";
import s1 from "@/app/assests/slider1.jpg";

type Props = {};

const Banner1 = (props: Props) => {
  return (
    <div className="relative row-span-2">
      <Image alt="banner" className="select-none" src={s1} />
      <div className="absolute text-sm md:flex bottom-5 hidden left-8">
        <p className="px-6">Plants</p>
        <p className="px-6 border-l-[1px] border-black">Terrasium</p>
        <p className="px-6 border-l-[1px] border-black">Succulent</p>
      </div>
      <div className="absolute bottom-0 px-2 justify-center items-center bg-[#fefefe] right-0 flex flex-col">
        <p className="pt-5">01</p>
        <Image className="px-2" src={slash} alt="divider" />
        <p className="pb-5">03</p>
      </div>
    </div>
  );
};

export default Banner1;
