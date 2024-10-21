import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 

const Page = () => 
  {
 
  const [items, setItems] = useState(itemsData);


  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1>Shopping List</h1>
   
      <NewItem onAddItem={handleAddItem} />
      
         <ItemList items={items} />
    </main>
  );
};

export default Page;