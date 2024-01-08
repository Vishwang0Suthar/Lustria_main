import React from 'react'
import Input from '@/app/componenets/CheckOut/Input'

type Props = {}

const BillingDetail = (props: Props) => {
  return (
    <div className='container flex gap-10  flex-grow xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col w-full  '>
        <div className='container flex flex-col '>
              <label className='text-2xl font-semibold mb-7'>Billing Details</label>
              <div className='flex gap-8'>
              <div className='w-full'>
                <Input
                  name='first name'
                  label="First Name"
                  type="text"
                  isRequired={true}
                />
              </div>
              <div className='w-full'>
                <Input
                  name='last name'
                  label="Last Name"
                  type="text"
                  isRequired={true}
                />
              </div>
              </div>
              <div className='container mb-4 '>
                <Input
                name='company name'
                label="Company Name"
                type="text"
                />
              </div>
              <div className='container mb-4 '>
                <Input
                name='country'
                label="Country"
                type="text"
                isRequired={true}
                className='hidden'/>
                <select id="countries" className="transition-all duration-100 focus:outline-none focus:border focus:border-lime-700 focus:bg-white bg-[#F5F5F5]  text-sm  w-full  block  h-12 px-5 mb-4 dark:placeholder-gray-400 ">
                  <option selected>India</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className='container mb-4  '>
                <Input
                name='address'
                label="Street Address"
                type="text"
                isRequired={true}
                placeholder='House number and street name'/>
              </div>
              <div className='container mb-4'>
                <Input
                name='address continue'
                placeholder='Apartment,suite,unit etc(optional)'/>              
              </div>
              <div className='container mb-4 '>
                <Input
                name='city'
                label="Town / City"
                type="text"
                />
              </div>
              <div className='container mb-4 '>
                <Input
                name='postal code'
                label="PostCode / ZIP"
                type="text"
                isRequired={true}/>
              </div>
              <div className='container mb-4 '>
                <Input
                name='phone no.'
                label="Phone"
                type="text"
                isRequired={true}/>
              </div>
              <div className='container  '>
                <Input
                name='email address'
                label="Email Address"
                type="text"
                isRequired={true}/>
              </div>
            </div>
        </div>
  )
}

export default BillingDetail