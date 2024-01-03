import React from 'react';

const CouponForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
      {/* Input field for coupon */}
      <div className="flex flex-col sm:flex sm:flex-row md:flex md:flex-row items-center space-x-2 space-y-2 w-full">
        <label className="sr-only">Coupon</label>
        <input
          className="w-full md:w-auto px-4 py-2 border border-gray-300 focus:outline-none transition-all"
          type="text"
          placeholder="Coupon Code"
        />

        {/* Apply coupon button */}
        <button className="w-full md:w-auto px-4 py-2 bg-[#EEEEEE] hover:bg-white border hover:border-green-500 transition-all">
          Apply Coupon
        </button>
      </div>

      {/* Update Cart button */}
      <button className="w-full  md:w-auto px-4 py-2 text-white bg-black hover:bg-white hover:text-black border hover:border-green-500 whitespace-nowrap mt-2 md:mt-0 transition-all">
        Update Cart
      </button>
    </div>
  );
};

export default CouponForm;
