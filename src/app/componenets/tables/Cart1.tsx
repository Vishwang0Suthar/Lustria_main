// "use client"
import React,{useState,useEffect} from 'react'

type Props = {}

const Cart1: React.FC = () => {
    const [showShippingDetails, setShowShippingDetails] = useState(false);
  
    const handleCalculateShippingClick = () => {
      setShowShippingDetails(!showShippingDetails); // Toggle the state between true and false
    };
  return (
    <>
    <div className='flex  '>

    <section className='p-9'>
    <h1 className='font-bold text-[30px]'>Cart totals</h1>
    <section>
    <table className='w-screen flex-col justify-end items-end gap-6'>
        <tr>
            <th>Subtotal</th>
            <td>$79.00</td>
        </tr>
        <tr>
            <th className=''>Shipping</th>
            <td>Free shipping
            <br></br>
            Shipping to singapore <a href='#'>Change address</a>
            <button className='font-bold' onClick={handleCalculateShippingClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/>
              </svg>
              </button>

              {showShippingDetails && (
                <div className="sm:col-span-3 ">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 disable">
          
      </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
              {/* sm:max-w-xs */}
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
          </div>
      )}

{showShippingDetails && (
  <div className="sm:col-span-3 ">
        <label htmlFor="State" className="block text-sm font-medium leading-6 text-gray-900 disable">
          
      </label>
        <div className="mt-2">
          <select
            id="State"
            name="State"
            autoComplete="state-name"
            className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
            >
            <option> States</option>
            <option>Maxico</option>
            <option>New York</option>
          </select>
        </div>
          </div>
      )}

      {showShippingDetails && (
        <div className="mt-2.5 " >
         <input 
           type="text"
           placeholder="Town/City"
           name="company"
           id="company"
           autoComplete="organization"
           className="block w-full px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           /> <br />
       </div>
     
     
     )}

      {showShippingDetails && (
        <div className="mt-2.5 " >
        <input 
          type="text"
          placeholder="ZIP"
          name="company"
          id="company"
          autoComplete="organization"
          className="block w-full px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
      </div>
      )} 
            </td>
        </tr>
        <tr>
            <th>Total</th>
            <td>$79.00</td>
        </tr>
    </table>
    </section>
    <button type='button' className='bg-green-500 text-white hover:text-black w-full h-16 hover:bg-white  border border-[#7FA15A]'>Proceed to checkout</button>
    </section>
      </div>
    </>
  )
}

export default Cart1





