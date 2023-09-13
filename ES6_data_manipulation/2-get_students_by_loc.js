export default function getStudentsByLocation(students, city) {
  // Use the filter function to get students in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity;
}

// Example usage:
const students = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

const city = 'San Francisco';
const studentsInCity = getStudentsByLocation(students, city);
console.log(studentsInCity);
