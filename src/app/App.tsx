import React from "react";
import Header from "./modules/header/header";
import Banner from "./modules/banner/banner";
import Plants from "./componenets/plants/plants";
import Gtext from "./componenets/gtext/gtext";
import CommonButton from "./componenets/common_button/common_btn";
import Newarrival from "./modules/new_arrival/newarrival";
import Newcol from "./componenets/plants/newcol";
import Breaker from "./modules/breaker/breaker";
import Imagecategory from "./modules/imagecategory/imageCategory";
import Testi1 from "./modules/carousel/Testi1";
import Slider from "./modules/carousel/Testi";
import Slid from "./modules/carousel/testi2";
import Slide from "./modules/swiper/slide";
import Demo from "./demo/page";
import Greentext from "./componenets/gtext/gtextt/gtextt";
import Plantslide from "./componenets/plants/plantslide";
import Button from "./componenets/buttons/button";


import Checkoutkart from './modules/checkoutkart/checkoutkart'

import Homeproducts from './modules/Homeproducts/Homeproducts'
import Newarrivels from './modules/Newproducts/Newproducts'
import Newproducts from './modules/Newproducts/Newproducts'


type Props = {}

const App = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <Banner/>
        <Homeproducts/> 
        <Imagecategory/>

        <Newproducts/>
        <CommonButton id="shopallplants"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <p> Shop All Plants</p></CommonButton>
    <Breaker id="home"/>
    {/* <Slider/> */}
    <Greentext title='Welcome to Lustria' subtitle='Testimonials' />
    <Slid/>    
    {/* <Checkoutkart/> */}
    </div>
  );
};

export default App;
