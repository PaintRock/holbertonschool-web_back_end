export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }

  return groceryMap;
}

// Example usage:
const groceryMap = new Map([
  ['Apples', 10],
  ['Tomatoes', 10],
  ['Pasta', 1],
  ['Rice', 1],
  ['Banana', 5]
]);

try {
  const updatedMap = updateUniqueItems(groceryMap);
  console.log(updatedMap);
} catch (error) {
  console.error('Error:', error.message);
}
