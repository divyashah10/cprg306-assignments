import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity: parseInt(quantity, 10),
      category
    };

    onAddItem(newItem);


    setName('');
    setQuantity(1);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Quantity: </label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          min="1"
          required
        />
      </div>
      <div>
        <label>Category: </label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
