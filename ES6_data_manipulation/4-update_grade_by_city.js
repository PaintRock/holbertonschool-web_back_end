import { students } from "./students";

export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map students to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade in newGrades, or set it to N/A if not found
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Create a new student object with the updated grade
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}

const newGrades = [
  { studentId: 1, grade: 'A+' },
  { studentId: 5, grade: 'B' },
];

const city = 'San Francisco';
const updatedStudents = updateStudentGradeByCity(students, city, newGrades);
console.log(updatedStudents);
