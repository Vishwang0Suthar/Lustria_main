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

type Props = {};

const App = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Banner />
      <section>
        <Newarrival />
        {/* <Plants/>
        <Plantslide/> */}
        <Slide />
      </section>
      <Imagecategory />
      <Gtext />
      <Newcol />

      <Breaker id="home" />
      {/* <Slider/> */}
      <Greentext title="Welcome to Lustria" subtitle="Testimonials" />
      <Slid />
      {/* <Demo/> */}
    </div>
  );
};

export default App;
