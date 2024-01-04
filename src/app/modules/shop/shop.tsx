import React from 'react'
import Cate from '@/app/componenets/catagories/catagorie';
import Productlist from '@/app/componenets/Product-list/Productlist';


type Props = {}
const Shop = (props: Props) => {
  return (
    <section>
      <div className=' flex justify-center pt-24 lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse overflow-hidden   '>
        <div className=' lg:w-[27dvw]  flex flex-col md:min-w-60 md:mx-auto lg:mx-0 xl:mx-0 lg:pr-4 lg:pl-5 '>
          {/* <span><h4 className='text-xl'>Catagories</h4></span> */}
          <Cate/>
        </div>
        <Productlist/>
        
      </div>
    </section>

  );
};
export default Shop