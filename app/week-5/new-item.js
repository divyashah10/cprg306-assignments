import { useState } from 'react';

const NewItem = () => {
 
  const [name, setName] = useState(""); 
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter item name"
          />
        </div>

        {/* Assuming Quantity field is already created from Week 4 */}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
