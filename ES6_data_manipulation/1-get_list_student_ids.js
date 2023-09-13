export default function getListStudentIds(studentArray) {
  // Check if the input is an array
  if (!Array.isArray(studentArray)) {
    return [];
}

// Use the map function to extract ids
const studentIds = studentArray.map(student => student.id);

return studentIds;
}
  
// Example usage:
const students = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
];
  
const studentIds = getListStudentIds(students);
console.log(studentIds); // Output: [1, 2, 5]
  
const notAnArray = 'This is not an array';
const emptyArray = getListStudentIds(notAnArray);
console.log(emptyArray); // Output: []
