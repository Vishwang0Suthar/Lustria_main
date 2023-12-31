import React from 'react';
import logo from '@/app/assests/logo-white.png'
import Image from 'next/image';
import CommonButton from '@/app/componenets/common_button/common_btn';



const Footer = () => {
   

    return (
        <footer className="bg-[#292929] mt-5 text-white text-center ">
            <div className="flex flex-col md:flex-col lg:flex-row p-10">
                <div className="w-full md:w-2/5 text-left">
                    <span className="text-[#7fa15a]" >
                        Subscribe Us
                    </span>
                    <br />
                    <span style={{ fontSize: '1.5em' }}>Can we get in-touch<br/> closer</span>
                </div>
                <div className="self-center w-full lg:w-full lg:mr-8 py-4">
                    <div className="flex flex-col md:flex-row items-center  justify-between gap-5">
                        <div className='w-full  items-end '>
                        <input type="text"  className=" w-full p-[0.5rem] py-[0.85rem] text-black outline-none bg-gray-100 border-none" placeholder="Enter text "/>

                        </div>
                        <span className="sm:ml-3">
                      <CommonButton id="subscribe"><p>Subscribe Us</p></CommonButton>
                        </span>
                    </div>
                </div>
            </div>
            <div style={{height: '0.4px', background: 'linear-gradient(90deg, #292929 2%, white 2%, white 98%, #292929 98%)'}}></div>
            <div className="flex flex-col px-10 gap-0 items-start pl-4 md:flex-row">
                <div className="w-full md:w-1/4 mx-2 justify-center items-center p-[0.5rem] py-6">
                    <Image src={logo} alt='logo'/>
                </div>
                {/* <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6 text-[15px] gap-3">
                    <div className="text-[#7fa15a]">
                    <svg data-slot="icon" width={27} height={27} fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
`                   </svg>
                    </div>
                    <br />
                    <div className="flex flex-col text-[#9B9B9B] text-[15px] font-semibold ">
                        <h4 className='flex text-[#7FA15A] text-lg'>Phone</h4>
                        <p className='flex md:text-xs text-sm lg:text-sm pt-2 justify-start'>Mobile (+00) 987 877 821</p>
                        <p className='flex md:text-xs text-sm lg:text-sm justify-start'>fax 678 912 1289 121</p>
                    </div>
                </div> */}
                                <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6 text-[15px] lg:gap-3 gap-1">
                                <div className="text-[#7fa15a]">
                    <svg data-slot="icon" width={27} height={27} fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
`                   </svg>
                    </div>
                    <br />
                    <div className="flex flex-col text-[#9B9B9B] text-[15px] font-semibold">
                    <h4 className='flex text-[#7FA15A] text-lg'>Phone</h4>
                        <p className='flex md:text-xs text-sm lg:text-sm pt-2 justify-start'>Mobile (+00) 987 877 821</p>
                        <p className='flex md:text-xs text-sm lg:text-sm justify-start'>fax 678 912 1289 121</p>
                    </div>
                </div>


                <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6 text-[15px] lg:gap-3 gap-1">
                    <div className="text-[#7fa15a]">
                    <svg data-slot="icon" width={27} height={27} fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>

                    </div>
                    <br />
                    <div className="flex flex-col text-[#9B9B9B] text-[15px] font-semibold">
                        <h4 className='flex text-[#7FA15A] text-lg'>Address</h4>
                        <p className='flex md:text-xs text-start text-sm lg:text-sm  '>No 40 Baria Street 15/2 New York City, NY, United States.</p>
                    </div>
                </div>


               <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6 text-[15px] gap-1">
                    <div className="text-[#7fa15a]">
                    <svg data-slot="icon" width={27} height={27} fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
</svg>
                    </div>
                    <br />
                    <div className="flex flex-col text-[#9B9B9B] text-[15px] font-semibold ">
                        <h4 className='flex text-[#7FA15A] text-lg'>Email</h4>
                        <p className='flex md:text-xs text-sm lg:text-sm pt-2'>contact@kustriauk.com</p>
                        <p className='flex md:text-xs text-sm lg:text-sm pt-2'>contactlustria@gmail.com</p>
                    </div>
                </div>
            </div>
            <div style={{height: '1px', background: 'linear-gradient(90deg, #292929 2%, white 2%, white 98%, #292929 9%)'}}></div><br />
            <p>© 2023 Your Galacit Bits. All rights reserved.</p>
            <br /><br />
        </footer>
    );
};

export default Footer;