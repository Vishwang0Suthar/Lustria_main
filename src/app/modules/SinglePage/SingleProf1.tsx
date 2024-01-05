"use client";
import {useState} from 'react'
import { useEffect } from 'react'
import Image  from 'next/image'
import pic from '@/public/SinglePage_image/product-04.jpg'
import pic1 from '@/public/SinglePage_image/product-04.jpg'
import pic2 from '@/public/SinglePage_image/product-05.jpg'
import pic3 from '@/public/SinglePage_image/product-06.jpg'
import pic4 from '@/public/SinglePage_image/product-12.jpg'




const SingleProf3:React.FC = () => {
    
  useEffect(() => {
    const magnifying_area = document.getElementById("magnifying_area");
    const magnifying_img = document.getElementById("magnifying_img");

    const handleMouseMove = (event: MouseEvent) => {
      const clientX = event.clientX - magnifying_area!.offsetLeft;
      const clientY = event.clientY - magnifying_area!.offsetTop;

      const mWidth = magnifying_area!.offsetWidth;
      const mHeight = magnifying_area!.offsetHeight;

      const newX = (clientX / mWidth) * 100;
      const newY = (clientY / mHeight) * 100;

      magnifying_img!.style.transform = `translate(-${newX}%, -${newY}%) scale(2)`;
    };

    const handleMouseLeave = () => {
      magnifying_img!.style.transform = 'translate(0%, 0%) scale(1)';
    };

    if (magnifying_area && magnifying_img) {
      magnifying_area.addEventListener("mousemove", handleMouseMove);
      magnifying_area.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (magnifying_area && magnifying_img) {
        magnifying_area.removeEventListener("mousemove", handleMouseMove);
        magnifying_area.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
    const [currentImage, setCurrentImage] = useState(pic);

  const handleButtonClick = () => {
    if(currentImage === pic){
        setCurrentImage(pic1);
    }
    else{
        setCurrentImage(pic);
    }
  };

  const handleButtonClick1 = () => {
    if(currentImage === pic){
        setCurrentImage(pic2);
    }

    
  };

  const handleButtonClick2 = () => {
    if(currentImage === pic){
        setCurrentImage(pic2);
    }
    else{
        setCurrentImage(pic3);
    }
  };

  const handleButtonClick3 = () => {
    if(currentImage === pic){
        setCurrentImage(pic3);

    }
    else{
        setCurrentImage(pic4);
    }
  };
  return (
    <>
        <div className="grid grid-cols-4 auto-rows-auto gap-4 overflow-hidden">
                <div className="bg-gray-200 h-fit w-fit overflow-hidden text-center col-span-4 " id='magnifying_area'
                 >
            
                <Image src={currentImage} id='magnifying_img' 
                objectFit='cover' className='hover:cursor-zoom-in bg-transparent' alt='img' />
                </div>

                <div className="bg-gray-200 h-fit w-fit text-center " onClick={handleButtonClick} id='magnifying_area' >
                    <Image src={pic1} id='magnifying_img' alt='img' className='hover:cursor-zoom-in bg-transparent'/>
                </div>

                <div className="bg-gray-200 h-fit w-fit text-center " onClick={handleButtonClick1} id='magnifying_area'>
                    <Image src={pic2} id='magnifying_img' alt='img' className='hover:cursor-zoom-in bg-transparent'/>
                </div>

                <div className="bg-gray-200  h-fit w-fit text-center " onClick={handleButtonClick2} id='magnifying_area' >
                    <Image src={pic3} id='magnifying_img' alt='img' className='hover:cursor-zoom-in bg-transparent'/>
                </div>  

                <div className="bg-gray-200  h-fit w-fit text-center " onClick={handleButtonClick3} id='magnifying_area'>
                    <Image src={pic4} id='magnifying_img' alt='img' className='hover:cursor-zoom-in bg-transparent'/>
                </div>
        </div>

    </>
    )
}

export default SingleProf3;