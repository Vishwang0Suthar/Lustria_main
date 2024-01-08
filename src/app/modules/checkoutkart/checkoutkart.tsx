"use client";

import CouponForm from "@/app/componenets/coupenform/coupenForm";
import Cart1 from "@/app/componenets/tables/Cart1";
import MobileTable from "@/app/componenets/tables/MobileTable";
import Table from "@/app/componenets/tables/table";
import TitleBanner from "@/app/componenets/titleBanner/TitleBanner";
import React, { useState, useEffect } from "react";

type DataItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

const Checkoutkart: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([
    {
      id: 1,
      name: "john don",
      price: 22,
      quantity: 1,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-17-85x100.jpg",
    },
    {
      id: 2,
      name: "john don",
      price: 22,
      quantity: 1,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/11/product_022-85x100.jpg",
    },
    {
      id: 3,
      name: "john don",
      price: 22,
      quantity: 1,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-07-320x320.jpg",
    },
    {
      id: 4,
      name: "john don",
      price: 22,
      quantity: 1,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-19-320x320.jpg",
    },
    {
      id: 5,
      name: "john don",
      price: 22,
      quantity: 5,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-04-320x320.jpg",
    },
    {
      id: 6,
      name: "john don",
      price: 22,
      quantity: 1,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-21-320x320.jpg",
    },
    {
      id: 7,
      name: "john don",
      price: 22,
      quantity: 2,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/12/product-10-320x320.jpg",
    },
    {
      id: 8,
      name: "john don",
      price: 22,
      quantity: 4,
      thumbnail:
        "https://lustria.g5plus.net/wp-content/uploads/2018/11/product_24-320x320.jpg",
    },
  ]);

  const handleRemoveItem = (itemId: number) => {
    // Remove the item with the specified ID from the data array
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Update window width on mount
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <TitleBanner>Kart</TitleBanner>

      <div className="flex flex-col px-10">
        <div>
          {windowWidth <= 768 && (
            <MobileTable data={data} onRemove={handleRemoveItem} />
          )}
          {windowWidth > 768 && windowWidth <= 1024 && (
            <Table data={data} onRemove={handleRemoveItem} />
          )}
          {windowWidth > 1024 && (
            <Table data={data} onRemove={handleRemoveItem} />
          )}
          {/* this MediaQuery caused hydration error */}
          {/* <MediaQuery query="(max-width: 768px)">
            <MobileTable data={data} onRemove={handleRemoveItem} />
          </MediaQuery>
          <MediaQuery query="(min-width: 769px)">
          <Table data={data} onRemove={handleRemoveItem} />
        </MediaQuery> */}
        </div>

        <div>
          <CouponForm />
        </div>
        <div className="mt-5">
          <Cart1 />
        </div>
      </div>
    </section>
  );
};

export default Checkoutkart;
