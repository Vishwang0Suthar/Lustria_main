import React from "react";
import clsx from "clsx";
  
type Props = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  isRequired?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
  
const Input = (props: Props) => {
  const { name, label ,isRequired, ...rest} = props; 
  const inputProps = {
    ...rest,
    ...(isRequired && { required: true }), 
  };
  return (
    <div className={clsx([])}>
        {label && (
        <label htmlFor={name} className={clsx('container text-[#333333] font-semibold mb-2', {})}>
          {label}
          {isRequired && <span className="text-[#FF0000]">*</span>}
        </label>
      )}
      <div className="relative ">
        <input
          type={props.type || 'text'} 
           name={name}
          className={clsx('transition-all duration-100 focus:outline-none focus:border focus:border-lime-700 focus:bg-white bg-[#F5F5F5] w-full h-12')}
          {...inputProps}
        />
      </div>
    </div>
  );
};
export default Input;