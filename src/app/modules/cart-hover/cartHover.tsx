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

const CartHover = (props: Props) => {
    const plantData = [
        ['Aliquam furniture', '$85.00','× 1'],
        ['Aliquam lobortis', '$87.00','× 1'],
        ['Aliquam sit amet','$12.00','× 1'],
        ['Aliquet autor sem','$76.00','× 1'],
        // ['Auctor gravida enim','$67.00',,'1'],
        // ['Autor sem', '$95.00','1'],
        // ['Commando dolor', '$88','1'],
        // ['Condimentum furniture', '$85.00','1'],
      ];
  return (
    <div className='z-40 min-w-fit p-6 ' >
        <div className='overflow-y-scroll h-80  min-w-fit '>
        {[si0, si1, si2, si3].map((image, index) => (
    <Hoveritems key={index}>
      <Image src={image} alt={`${index + 1}`} width={100} height={100} />
      {plantData[index].map((text, i) => (
        <div key={i}>
            
        <p className=""> {i === 0 && text}</p>
        
          <strong> {i === 1 && text} </strong>
          
          <span>{i === 2 && text} </span>
          
         
        {/* <strong className="">{childrenArr[2]}</strong>} */}
        </div>
      ))}
</Hoveritems>
      ))}

        </div>
        <div className='flex flex-col mt-5 gap-5'>
        
        <CommonButton id="viewcart" >
            <FontAwesomeIcon className='w-5 h-5' icon={faShoppingCart} />
    <p> View Cart</p></CommonButton>  
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