"use client";
import React,{useState} from 'react'


type Props = {}

const SingleProf4 = (props: Props) => {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count => count + 1);
    };

    const decrement = () =>{
        if(count > 0){
            setCount(count => count - 1);
        }
        else{
            setCount(0);
        }
    };
  return (
    <>
        <div className="flex flex-col">
                    <h1 className=' flex text-[40px] font-medium leading-normal tracking-normal mb-5'>Aliquam frniture</h1>
                    <div className="flex gap-2">
                    <span className='text-2xl text-[#ababab] font-normal mr-[5px]'><del>$85.00</del></span>
                    <span className='text-2xl h-fit
                    font-normal mr-[5px]'>$79.00</span>
                    </div>
                    <p className='text-[16px] text-[#ababab] pt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet consequatur incidunt qui blanditiis. Veniam quasi repudiandae ipsum vitae harum </p>
                    <div className="mb-[33px] pb-[50px]">
                    <div className="flex flex-col">
                        <div className="flex gap-11 text-[16px]">
                        <div className="flex justify-center items-center">
                            <label className="text-xs font-medium tracking-wide uppercase my-0 py-3 leading-6" htmlFor="quantity">Quantity</label>
                        </div>

                        
                            <div className="flex w-32 h-12">
                            <button className='h-15 w-10 text-[12px] bg-transparent  text-base ' onClick={decrement}>-</button>
                               

<input
                  id="text"
                  name="text"
                  type="tel"
                  autoComplete="text"
                  value={count}
                  required
                  className="w-full outline-none border-b-2 px-12 text-gray-900  focus:border-green-200 focus:border-b-2 sm:text-sm sm:leading-6 flex justify-center"
                />
                                <button className='h-15 w-10 text-[12px]  bg-transparent  text-base ' onClick={increment}>+</button>
                                
                            </div>
                            </div>
                        
                        </div>
                        <div className="flex pt-7 gap-2">
                            <button type='button' className='h-16 inline-flex items-center justify-center text-white p-2.5 bg-[#bfd0ac] hover:bg-transparent hover:text-black hover:border-2 hover:border-[#bfd0ac]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                Add to cart</button>
                            <button className='h-16 w-16  border-2 border-[#bfd0ac] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            </button>

                            <button className='lg:block xl-block md:hidden sm:hidden hidden h-16 w-16 items-center left-[50%] border-2 border-[#bfd0ac]'><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"/></svg></button>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="tag">
                        <div>
                            <span className='text-[#ababab] '>Caterogy: </span>
                            Small Plants</div>
                        <div>
                            <span className='text-[#ababab] '>Tags: </span>
                            experiences,lifestyle
                        </div>
                        <div className='flex
        mt-[17px] text=[#777777] items-center gap-2'>
                            <span className='text-[#ababab] flex'>Share</span>
                            <div className="flex gap-6">
                                <div className="fb">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ababab" height="16" width="10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                                </div>

                                <div className="twt">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="#ababab" width="16" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                                </div>

                                <div className="googl">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="#ababab" width="20" viewBox="0 0 640 512"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" /></svg>
                                </div>

                                <div className="in">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="#ababab" width="14" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>

                                </div>
                                <div className="t">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" fill="#ababab" viewBox="0 0 320 512"><path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" /></svg>

                                </div>
                                <div className="pint">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="#ababab" width="12" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
                                </div>
                            </div>
                        </div>

                    </div>
    </>


    )
}

export default SingleProf4