import React from 'react'
import YOValue from '@/app/componenets/YourOrder/YoValue'
import YOElement from '@/app/componenets/YourOrder/YoElement'
import CBLabelOptional from '@/app/componenets/YourOrder/CBLabelOptional'
import CBInputText from '@/app/componenets/YourOrder/CBInputText'
import CBLabelRequired from '@/app/componenets/YourOrder/CBLabelRequired'

type Props = {}

const CheckOut = (props: Props) => {
  return (
    <section className='w-full  py-20'>
        <div className='container mx-auto flex flex-col  md:pt-7 w-full '>
          <div className='container  flex gap-3 border-t-2 border-blue-700 bg-[#f7f6f7] pr-8 pl-8 py-4 mb-8  ' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg>
          <p > Have a coupon? <a href="#" className='text-[#7FA15A] hover:underline  '>Click here to enter your code</a></p>
          </div>

          <div className='container flex gap-10  flex-grow xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col w-full  '>
            <div className='container flex flex-col '>
              <label className='text-2xl mb-7'>Billing Details</label>
              <div className='flex container gap-8 mb-4 '>
                <div className='container '>
                  <CBLabelRequired>First Name</CBLabelRequired>
                  <CBInputText placeholder_1=""></CBInputText>
                </div>
                <div className='container '>
                  <CBLabelRequired >Last Name</CBLabelRequired>
                  <CBInputText placeholder_1=""></CBInputText>
                </div>
              </div>
              <div className='container mb-4 '>
                <CBLabelOptional>Company Name</CBLabelOptional>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>Country</CBLabelRequired>
                <select id="countries" className="bg-[#f5f5f5]  text-sm  w-full  block  h-12 px-5 mb-4 dark:placeholder-gray-400 ">
                  <option selected>India</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className='container mb-4  '>
                <CBLabelOptional>Street Address</CBLabelOptional>
                <CBInputText placeholder_1="House number and street name"></CBInputText>
              </div>
              <div className='container mb-4'>
                <CBInputText placeholder_1="Apartment,suite,unit etc (optional)"></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelOptional>Town / City</CBLabelOptional>
                <CBInputText placeholder_1="" ></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>PostCode / ZIP</CBLabelRequired>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>Phone</CBLabelRequired>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              <div className='container  '>
                <CBLabelRequired>Email Address</CBLabelRequired>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
            </div>
            <div className='flex flex-col w-full mb-10'>
              <label className='text-2xl mb-7'>Shiping to a different address?</label>
              <div className='flex container gap-8 mb-4 '>
                <div className='container '>
                  <CBLabelRequired>First Name</CBLabelRequired>
                  <CBInputText placeholder_1=""></CBInputText>
                </div>
                <div className='container '>
                  <CBLabelRequired>Last Name</CBLabelRequired>
                  <CBInputText placeholder_1=""></CBInputText>
                </div>
              </div>
              <div className='container mb-4 '>
                <CBLabelOptional>Company Name</CBLabelOptional>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>Country</CBLabelRequired>
                <select id="countries" className="bg-[#f5f5f5]  text-sm  w-full  block  h-12 px-5 mb-4 dark:placeholder-gray-400 ">
                  <option selected>India</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>Street Address</CBLabelRequired>
                <CBInputText placeholder_1="House number and street name"></CBInputText>
              </div>
              <div className='container mb-4'>
                <CBInputText placeholder_1="Apartment,suite,unit etc (optional)"></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelOptional>Town / City</CBLabelOptional>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              <div className='container mb-4 '>
                <CBLabelRequired>PostCode / ZIP</CBLabelRequired>
                <CBInputText placeholder_1=""></CBInputText>
              </div>
              {/* checkbox till here */}
              <div className='container mb-4 '>
                <CBLabelOptional>Other Notes</CBLabelOptional>
                <textarea name="othernotes" className='bg-[#f5f5f5] w-full px-5 mb-4' id=""  placeholder="Notes about your order ,eg. special notes for delivery."></textarea>
              </div>
            </div>
          </div>


          <div className='container w-full '>
            <label  className='mb-7 text-2xl'>Your order</label>
            <div className='grid grid-flow-col grid-cols-[0.55fr_0.5fr]'>
              <div className='grid '>
                <div className=' grid'>
                <YOElement >Products</YOElement>
                <YOValue id='productname'>xyz</YOValue>
                </div>
                <div className=' grid'>
                <YOElement >Subtotal</YOElement>
                <YOElement>Shipping</YOElement>
                <YOElement>Total</YOElement>
                </div>
              </div>
              <div className='grid lg:text-left text-right'>
                <div className='grid'>
                <YOElement >Subtotal</YOElement>
                <YOValue id='productprice'>abc</YOValue> 
                </div>
                
                <div className='grid'>
                <YOValue id='total'>sb1</YOValue>
                <YOValue id='shipping'>free Shipping</YOValue>
                <YOValue id='total'>total</YOValue>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default CheckOut