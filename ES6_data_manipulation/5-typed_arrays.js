export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to work with the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return buffer;
}

// Example usage:
try {
  const length = 5;
  const position = 2;
  const value = 42;

  const result = createInt8TypedArray(length, position, value);

  // Convert the result ArrayBuffer back to DataView to access the stored value
  const resultView = new DataView(result);
  const storedValue = resultView.getInt8(position);

  console.log(storedValue); // Output will be 42
} catch (error) {
  console.error(error.message); // Handle the "Position outside range" error if the position is invalid
}
