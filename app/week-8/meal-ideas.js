import React, { useState, useEffect } from 'react';
const [meals, setMeals] = useState([]);
async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  }
  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };
  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);
  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
