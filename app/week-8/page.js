import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 
import React, { useState, useEffect } from 'react';

const [meals, setMeals] = useState([]);
const handleItemSelect = (item) => {
  const cleanedName = item.name.split(",")[0].trim();
  setSelectedItemName(cleanedName);
};

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  }
  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };
  <div style={{ display: "flex" }}>
  <div>
    <NewItem />
    <ItemList items={items} onItemSelect={handleItemSelect} />
  </div>
  <MealIdeas ingredient={selectedItemName} />
</div>

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);
  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
  
const Page = () => 
  {
 
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("itemsData");

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