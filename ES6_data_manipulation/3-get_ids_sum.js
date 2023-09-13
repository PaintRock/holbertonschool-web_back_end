export default function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student IDs
  const sum = students.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0); // Initialize the accumulator to 0

  return sum;
}

// Example usage:
const students = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

const totalIdsSum = getStudentIdsSum(students);
console.log(totalIdsSum); // Output: 8 (1 + 2 + 5 = 8)
