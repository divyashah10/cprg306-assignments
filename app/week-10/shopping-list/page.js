import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [meals, setMeals] = useState([]);

  const user = { uid: "current_user_id" };

  async function loadItems() {
    const shoppingListItems = await getItems(user.uid);
    setItems(shoppingListItems);
  }

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  }

  const loadMealIdeas = async (ingredient) => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanedName);
    loadMealIdeas(cleanedName);
  };

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems([...items, { id, ...newItem }]);
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <main>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas meals={meals} />
      </div>
    </main>
  );
};

export default Page;
