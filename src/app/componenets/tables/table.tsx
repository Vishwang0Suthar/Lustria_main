'use client'
import React, { useEffect, useState } from 'react';


type DataItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

type Props = {
  data: DataItem[];
  onRemove: (itemId: number) => void;
};

const Table: React.FC<Props> = ({ data, onRemove }) => {
  // const [screenSize, setScreenSize] = useState<string>('');

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Assuming you have a state setter function to update the data
    // For example, if you're using React Hooks:
    // setData(updatedData);
  };

 




  return (
    <div className="flex  text-left py-2">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-2  py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              {/* Empty heading for the Remove column */}
            </th>
            {/* {screenSize === 'desktop' && ( */}
              <th scope="col" className="w-24  px-2 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* Empty heading for Thumbnail column */}
              </th>
            {/* )} */}
            <th scope="col" className="px-2 py-3  text-xs font-medium uppercase tracking-wider text-black">
              Product
            </th>
            <th scope="col" className="px-2 py-3  text-xs font-medium uppercase tracking-wider text-black">
              Price
            </th>
            <th scope="col" className="px-2 py-3  text-xs font-medium uppercase tracking-wider text-black">
              Quantity
            </th>
            <th scope="col" className=" w-10 px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item: DataItem) => (
            <tr key={item.id}>
              <td className="px-2 py-4 whitespace-nowrap font-semibold text-gray-500">
                <button  onClick={() => onRemove(item.id)}>x</button>
              </td>
              {/* {screenSize === 'desktop' && ( */}
                <td className="h-40 px-2 py-4 whitespace-nowrap">
                  <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover" />
                </td>
              {/* )} */}
              <td className="px-2 py-4 whitespace-nowrap text-black">
                {item.name}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-black">
                ${(parseFloat(item.price.toString()) * parseFloat(item.quantity.toString())).toFixed(2)}
              </td>
            </tr>



          ))}


        </tbody>
      </table>
    </div>
  );
};

export default Table;
