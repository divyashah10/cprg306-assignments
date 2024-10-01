import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md mb-2">
      <span className="font-semibold text-lg">{name}</span>
      <span className="text-sm text-gray-500">Category: {category}</span>
      <span className="text-blue-600 font-medium">Quantity: {quantity}</span>
    </li>
  );
};

export default Item;