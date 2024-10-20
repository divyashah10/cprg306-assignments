import { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  // Initialize sortBy state
  const [sortBy, setSortBy] = useState('name');

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  // Group items by category if the user selects 'group' sortBy
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {/* Sort by Name Button */}
      <button
        onClick={() => setSortBy('name')}
        style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
      >
        Sort by Name
      </button>

      {/* Sort by Category Button */}
      <button
        onClick={() => setSortBy('category')}
        style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
      >
        Sort by Category
      </button>

      {/* Group by Category Button */}
      <button
        onClick={() => setSortBy('group')}
        style={{ backgroundColor: sortBy === 'group' ? 'lightblue' : 'white' }}
      >
        Group by Category
      </button>

      {/* Conditionally render items based on sortBy state */}
      {sortBy === 'group' ? (
        // Render grouped items
        Object.keys(groupedItems).map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {groupedItems[category].map(item => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        // Render sorted items (by name or category)
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
