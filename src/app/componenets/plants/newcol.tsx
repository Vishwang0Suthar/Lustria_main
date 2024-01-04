import React from "react";

import Image from "next/image";
import si0 from "@/app/assests/images/1t.jpg";
import si1 from "@/app/assests/images/2t.jpg";
import si2 from "@/app/assests/images/3t.jpg";
import si3 from "@/app/assests/images/4t.jpg";
import si4 from "@/app/assets/images/5t.jpg";
import si5 from "@/app/assets/images/6t.jpg";
import si6 from "@/app/assets/images/7t.jpg";
import si7 from "@/app/assets/images/8t.jpg";
import Plant from "./plant/plant";
import Rounds from "../rounds/rounds";
import Option from "../option/opt";
import Button from "../buttons/button";

const plantData = [
  {
    title: "Aliquam furniture",
    price: "$85.00",
    originalPrice: "$79.00",
    tag: ["SALE"],
    image: si0,
  },
  {
    title: "Aliquam lobortis",
    price: "$87.00",
    originalPrice: "$75.00",
    tag: ["SALE"],
    image: si1,
  },
  {
    title: "Aliquam sit amet",
    price: "",
    originalPrice: "$12.00",
    tag: ["HOT"],
    image: si2,
  },
  {
    title: "Aliquet autor sem",
    price: "$76.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si3,
  },
];

const Newcol = () => {
  // Nested array to store each child's content for each Plant component

  return (
    <section>
      <div className="relative grid xl:grid-cols-4  z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-y-12  pt-8">
        {plantData.map((plant) => (
          <div key={plant.title} className="relative group z-0 px-5 pb-12">
            {plant.tag.map((x, i) => (
              <Rounds
                key={x}
                variant={x}
                style={{
                  top: i * 55 + 10,
                }}
              >
                {x}
              </Rounds>
            ))}

            <Option />
            <div className="relative aspect-square z-0">
              <Image
                src={plant.image}
                alt={plant.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className=" pt-4">
              <p className="text-center pb-2">{plant.title}</p>
              <div className="flex justify-center gap-x-2 ">
                <s>{plant.price}</s>
                <p>{plant.originalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <Button as="a" variant="shopallplants" className="w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p> Shop All Plants</p>
        </Button>
      </div>
    </section>
  );
};


export default Newcol;
