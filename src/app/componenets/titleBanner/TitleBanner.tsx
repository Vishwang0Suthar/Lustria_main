import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TitleBanner = ({ children, ...props }: Props) => {
  // const childrenArray = React.Children.toArray(children)

  return (
    <>
      <section className=" bg-[#f8f8f8] mt-10 flex flex-wrap justify-around items-center text=[#f9f9f9]">
        <div className="flex flex-wrap w-screen justify-between items-center py-20 ">
          <strong className="flex flex-wrap text-[55px] lg:pl-5">
            {children}
          </strong>
          <ul className="flex flex-wrap gap-4 lg:pr-5">
            <li>Home</li>
            <li> &#62; </li>
            <li>Small Plats</li>
            <li> &#62; </li>
            <li>{children}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TitleBanner;
