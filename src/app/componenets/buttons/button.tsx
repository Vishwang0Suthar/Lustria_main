import React, { memo } from "react";
import clsx from "clsx";

type Props = {
  className?: any;
  title?: string;
  isLoading?: boolean;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" })
) & {
    variant?:
      | "shopallplants"
      | "addtocart"
      | "subscribe"
      | "viewcart"
      | "checkout"
      | "image-grid";
  };

const Button = ({
  isLoading,
  variant,
  color,
  as: As = "button",
  className,
  title,
  ...props
}: Props) => {
  return (
    <As
      className={clsx(
        " py-3 px-10 cursor-pointer flex gap-3 transition-all duration-300 text-center items-center text-lg  ",
        {
          "bg-white hover:bg-black border-[1px] hover:text-white border-black justify-center":
            variant === "shopallplants",
          "bg-[#7fa15a]  hover:bg-white text-white hover:text-black border-[#7fa15a] ":
            variant === "addtocart",
          "bg-[#7fa15a] hover:bg-slate-800 w-full justify-center ":
            variant === "subscribe",
          "bg-[#7fa15a] justify-center hover:bg-[#fefefe] hover:text-black  hover:border-black border-[1px] border-[#7fa15a]":
            variant === "viewcart",
          "bg-black hover:bg-white text-white justify-center hover:text-black border-black border-[1px] hover:border-[#7fa15a]":
            variant === "checkout",
          "bg-white hover:bg-[#7fa15a] hover:text-white ":
            variant === "image-grid",
        }
      )}
      {...props}
    >
      {isLoading ? "Loading..." : <>{props.children}</>}
      {title && <span className="sr-only ">{title}</span>}
    </As>
  );
};

export default memo(Button);

// import React, { ReactNode } from 'react'

// type Props = {
//     children:ReactNode,
//     // buttonName: string;
//     // quantitySize:string,

// }

// const Button = ({children}: Props) => {
//     const Array = React.Children.toArray(children);
//   return (
//     <div className='w-1/2 h-[7dvh] font-medium bg-slate-50 hover:bg-[#7FA15A] transition-all flex justify-center items-center hover:text-white'>
//       {/* <button className=''> <span>{Array[0]}<sup>{Array[1]}</sup></span></button> */}
//       <button >
//         <span>{Array[0]}
//         {<sup>{Array[1]}</sup>}</span>
//       </button>

//     </div>
//   )
// }

// export default Button
