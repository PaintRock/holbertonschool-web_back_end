export default function hasValuesFromArray(set, array) {
  // Convert the array to a set to remove duplicate values, if any
  const arraySet = new Set(array);

  // Check if all elements in the arraySet are also in the provided set
  for (const element of arraySet) {
    if (!set.has(element)) {
      return false;
    }
  }

  // If all elements in the arraySet exist in the set, return true
  return true;
}

// Example usage:
const mySet = new Set([1, 2, 3, 4, 5]);
const myArray = [2, 3, 4];

const result = hasValuesFromArray(mySet, myArray);
console.log(result); // Output will be true because all elements in myArray exist in mySet.

