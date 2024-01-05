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

import Checkoutkart from "./modules/checkoutkart/checkoutkart";

import Homeproducts from "./modules/Homeproducts/Homeproducts";
import Newarrivels from "./modules/Newproducts/Newproducts";
import Newproducts from "./modules/Newproducts/Newproducts";

import Image from "next/image";
// import Photo from "@/public/Cat_images/Category-01.jpg";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      {" "}
      <Banner />
      <Homeproducts />
      <Imagecategory />
      <Newproducts />
      <Breaker id="home" />
      {/* <Slider/> */}
      <Slid />
      {/* <Image src={Photo} alt="" height={100} width={100} /> */}
      {/* <Checkoutkart/> */}
    </>
  );
};

export default App;
