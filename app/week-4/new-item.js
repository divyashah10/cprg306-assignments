'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment function (limits the quantity to 20)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function (limits the quantity to a minimum of 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>
      <div className="flex justify-center items-center space-x-4">
        {/* Decrement button */}
        <button
          onClick={decrement}
          className={`px-3 py-1 bg-red-500 text-white rounded-md ${
            quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={quantity === 1}
        >
          -
        </button>

        {/* Display quantity */}
        <span className="text-lg font-semibold">{quantity}</span>

        {/* Increment button */}
        <button
          onClick={increment}
          className={`px-3 py-1 bg-green-500 text-white rounded-md ${
            quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}