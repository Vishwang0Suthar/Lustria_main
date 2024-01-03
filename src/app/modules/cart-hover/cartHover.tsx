import Hoveritems from '@/app/componenets/cart-items/hover/items'
import Image from 'next/image'
import React from 'react'
import si0 from '@/app/assests/images/1t.jpg';
import si1 from '@/app/assests/images/2t.jpg';
import si2 from '@/app/assests/images/3t.jpg';
import si3 from '@/app/assests/images/4t.jpg';
import si4 from '@/app/assests/images/5t.jpg';
import si5 from '@/app/assests/images/6t.jpg';
import si6 from '@/app/assests/images/7t.jpg';
import si7 from '@/app/assests/images/8t.jpg';
import CommonButton from '@/app/componenets/common_button/common_btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CheckRoute from '@/app/checkout/page';
type Props = {}

const plantData = [
  {
    title: "Aliquam furniture",
    price: "$85.00",
    originalPrice: "$79.00",
    tag: ["SALE"],
    image: si0,
    
  },
  {
    title: "Aliquam lobortis",
    price: "$87.00",
    originalPrice: "$75.00",
    tag: ["SALE"],
    image: si1,
    
  },
  {
    title: "Aliquam sit amet",
    price: "",
    originalPrice: "$12.00",
    tag: ["HOT"],
    image: si2,
    
  },
  {
    title: "Aliquet autor sem",
    price: "$76.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si3,
    
  },
  {
    title: "Auctor gravida enim",
    price: "$67.00",
    originalPrice: "$55.00",
    tag: ["SALE"],
    image: si4,
    
  },
  {
    title: "Autor sem",
    price: "$95.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si5,
    
  },
  {
    title: "Commando dolor",
    price: "$88.00",
    originalPrice: "$75.00",
    tag: ["SALE", "HOT"],
    image: si6,
    
  },
  {
    title: "Condimentum furniture",
    price: "$85.00",
    originalPrice: "$77.00",
    tag: ["SALE"],
    image: si7,
    
  },
];


const CartHover = (props: Props) => {
    
  return (
    <div className='z-40 min-w-fit p-6 ' >
        <div className='overflow-y-scroll h-80  min-w-fit '>
    <Hoveritems >
      {plantData.map((plant, i) => (
        <div key={plant.title}>
        <Image src={plant.image} key={plant.title} alt={`${i + 1}`} width={100} height={100} />

            
         <p className=""> {plant.title}</p>
        
           <strong> {plant.originalPrice} </strong>
          
           <span>{plant.price} </span>
          
         
        {/* <strong className=  "">{childrenArr[2]}</strong>} */}
         </div>
      ))}
</Hoveritems>
      

        </div>
        <div className='flex flex-col mt-5 gap-5'>
        <Link href="../kart">
        <CommonButton id="viewcart" >
            <FontAwesomeIcon className='w-5 h-5' icon={faShoppingCart} />
    <p> View Cart</p></CommonButton>  
    </Link>
    <Link href="../checkout">
    <CommonButton id="checkout">
        <FontAwesomeIcon className='w-5 h-5' icon={faCreditCard} />
    <p> Checkout</p></CommonButton> 
    </Link>
    
          </div>
    </div>
  )
}

export default CartHover