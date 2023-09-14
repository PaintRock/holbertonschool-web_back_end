export default function cleanSet(set, startString) {
  const result = [];

  // Iterate over the set elements
  set.forEach((value) => {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the part of the value after startString to the result array
      result.push(value.substring(startString.length));
    }
  });

  // Join the result array elements with hyphens to create the final string
  return result.join('-');
}
