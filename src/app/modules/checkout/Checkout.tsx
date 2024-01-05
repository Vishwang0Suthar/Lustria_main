import React from "react";
import BillingDetail from "@/app/componenets/CheckOut/BillingDetail";
import ShippingDetail from "@/app/componenets/CheckOut/ShippingDetail";
import YourOrder from "@/app/componenets/CheckOut/YourOrder";
import TitleBanner from "@/app/componenets/titleBanner/TitleBanner";

type Props = {};

function CheckOut({}: Props) {
  return (
    <section>
      <div className="container mx-auto flex flex-col  md:pt-7  w-full ">
        <div className="container  flex gap-3 border-t-2 border-blue-700 bg-[#f7f6f7]  py-4 mb-8  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
          <p>
            {" "}
            Have a coupon?{" "}
            <a href="#" className="text-[#7FA15A] hover:underline  ">
              Click here to enter your code
            </a>
          </p>
        </div>

        <div className="">
          <div className="container flex gap-10  flex-grow xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col w-full  ">
            <BillingDetail />
            <ShippingDetail />
          </div>
        </div>

        <div>
          <YourOrder />
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
