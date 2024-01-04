// components/MobileTable.tsx
'use client'
import React, { useEffect, useState } from 'react';

type DataItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

type MobileTableProps = {
  data: DataItem[];
  onRemove: (itemId: number) => void;
};

const MobileTable: React.FC<MobileTableProps> = ({ data, onRemove }) => {
  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    // Implement your logic for quantity change
    console.log('Handling quantity change for item:', itemId, 'New Quantity:', newQuantity);
  };


  return (
    <div className=" flex ">
      <table className="min-w-full">
        <tbody>
          {data.map((item: DataItem) => (
            <React.Fragment key={item.id}>
                 <tr className='p-2 '>
                <td className=" flex py-2 justify-end font-semibold text-gray-400">
                  <button onClick={() => onRemove(item.id)}>×</button>
                </td>
              </tr>
              <tr className='p-2 '>
                <td className=" flex py-2 justify-between" data-title='Product'>
                <span className=" font-medium">Product:</span>
                  <span className="value">{item.name}</span>
                </td>
              </tr>
              <tr className='p-2  '>
                <td className="flex py-2 justify-between" data-title='Price'>
                  <span className="font-medium text-gray-500">Price:</span>
                  <span className=" text-gray-500">${item.price.toFixed(2)}</span>
                </td>
              </tr>
              <tr className='p-2 '>
                <td className="flex py-2 justify-between" data-title='Quantity'>
                  <span className="font-medium text-gray-500">Quantity:</span>
                  <span className="text-gray-500">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </span>
                </td>
              </tr>
              <tr className='p-2 '>
                <td className="flex py-2 justify-between" data-title='Subtotal'>
                  <span className="font-medium text-gray-500">Subtotal:</span>
                  <span className="value">
                    ${(parseFloat(item.price.toString()) * parseFloat(item.quantity.toString())).toFixed(2)}
                  </span>
                </td>
              </tr>
             
             
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobileTable;
