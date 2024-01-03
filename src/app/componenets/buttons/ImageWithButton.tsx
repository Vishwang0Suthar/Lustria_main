import React, { ReactNode } from "react";
import Button from "@/app/componenets/buttons/button";

interface ImageWithButtonProps {
  src: string;
  alt: string;
  buttonName: string;
  quantitySize: string;
}

const ImageWithButton: React.FC<ImageWithButtonProps> = ({
  src,
  alt,
  buttonName,
  quantitySize,
}) => (
  <div className="relative">
    <img className="w-full h-auto" src={src} alt={alt} />
    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center pb-4">
      <Button variant="image-grid" >
        <span>
          {buttonName}
          {<sup>{quantitySize}</sup>}
        </span>
      </Button>
    </div>
  </div>
);

export default ImageWithButton;
