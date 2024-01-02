"use client";
import {useState} from 'react'
import { useEffect } from 'react'
import Image  from 'next/image'
import pic from '../../public/SinglePage_images/product-04.jpg'
import pic1 from '../../public/SinglePage_images/product-04.jpg'
import pic2 from '../../public/SinglePage_images/product-05.jpg'
import pic3 from '../../public/SinglePage_images/product-06.jpg'
import pic4 from '../../public/SinglePage_images/product-12.jpg'




const SingleProf3:React.FC = () => {
    
    useEffect(() => {
        const magnifyingArea = document.getElementById("magnifying_area");
        const magnifyingImg = document.getElementById("magnifying_img");
    
        if (!magnifyingArea || !magnifyingImg) 
        return;
          const handleMouseMove = (event: MouseEvent) => {
          const { clientX, clientY } = event;
          const rect = magnifyingArea.getBoundingClientRect();
          const offsetX = clientX - rect.left;
          const offsetY = clientY - rect.top;
          const mWidth = magnifyingArea.offsetWidth;
          const mHeight = magnifyingArea.offsetHeight;
          
          const clientXPercent = (offsetX / mWidth) * 100;
          const clientYPercent = (offsetY / mHeight) * 100;
          
          magnifyingImg.style.transform = `translate(-${clientXPercent}%, -${clientYPercent}%) scale(2)`;
      };
    
        const handleMouseLeave = () => {
          magnifyingImg.style.transform = 'translate(0%,0%) scale(1)';
        };
    
        magnifyingArea.addEventListener("mousemove", handleMouseMove);
        magnifyingArea.addEventListener("mouseleave", handleMouseLeave);
    
        return () => {
          magnifyingArea.removeEventListener("mousemove", handleMouseMove);
          magnifyingArea.removeEventListener("mouseleave", handleMouseLeave);
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
        <div className="grid grid-cols-4 auto-rows-auto gap-4 ">
                <div className="bg-gray-200 h-fit w-fit text-center col-span-4 " id='magnifying_area'
                 >
            
                <Image src={currentImage} id='magnifying_img' 
                objectFit='cover' className='hover:cursor-zoom-in' alt='img' />
                </div>

                <div className="bg-gray-200 h-fit w-fit text-center " onClick={handleButtonClick} id='magnifying_area' >
                    <Image src={pic1} id='magnifying_img' alt='img'/>
                </div>

                <div className="bg-gray-200 h-fit w-fit text-center " onClick={handleButtonClick1} id='magnifying_area'>
                    <Image src={pic2} id='magnifying_img' alt='img' />
                </div>

                <div className="bg-gray-200  h-fit w-fit text-center " onClick={handleButtonClick2} id='magnifying_area' >
                    <Image src={pic3} id='magnifying_img' alt='img'/>
                </div>  

                <div className="bg-gray-200  h-fit w-fit text-center " onClick={handleButtonClick3} id='magnifying_area'>
                    <Image src={pic4} id='magnifying_img' alt='img'/>
                </div>
        </div>

    </>
    )
}

export default SingleProf3;