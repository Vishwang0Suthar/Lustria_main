import React from 'react';
import logo from '@/app/assests/logo-white.png'
import Image from 'next/image';
import CommonButton from '@/app/componenets/common_button/common_btn';
import Footerdetail from '@/app/componenets/Footercard/footerdetail';



const Footer = () => {
   

    return (
        <footer className="bg-[#292929] mt-5 text-white text-center  ">
           <br /><br /> <div className="flex flex-col md:flex-col lg:flex-row py-6">
                <div className="w-full md:w-2/5 text-left">
                    <span className="text-[#7fa15a]" >
                        Subscribe Us
                    </span>
                    <br />
                    <span style={{ fontSize: '2em' }}>Can we get in-touch<br/> closer</span>
                </div>
                <div className="self-center w-full lg:w-full  py-4">
                    <div className="flex flex-col md:flex-row items-center  justify-between gap-1">
                        <div className='w-full  items-end '>
                        <input type="text"  className=" w-full p-[0.5rem] py-[0.85rem] text-black outline-none bg-gray-100 border-none" placeholder="Your email address "/>

                        </div>
                        <span className="lg:w-auto w-full">
                      <CommonButton id="subscribe"><p>Subscribe Us</p></CommonButton>
                        </span>
                    </div>
                </div>
            </div><br /><br />
            <hr className='border-none h-[1px] bg-slate-400' /><br />
           
        </footer>
    );
};

export default Footer;