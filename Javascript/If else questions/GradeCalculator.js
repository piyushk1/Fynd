/*
Create a program that takes a numerical grade as input and uses if and else if statements to determine the corresponding letter grade. The grading scale is as follows:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: Below 60
The program should output the letter grade.

*/

console.log("---- ---- ----");

const GradeCalculator = (marks) => {
  if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
  } else if (marks >= 81 && marks <= 89) {
    console.log("Grade B");
  } else if (marks >= 70 && marks <= 70) {
    console.log("Grade C");
  } else if (marks >= 60 && marks <= 69) {
    console.log("Grade D");
  } else if (marks < 60 && marks >= 0) {
    console.log("Grade F");
  }
};

GradeCalculator(50);
console.log("---- ---- ----");
GradeCalculator(91);

console.log("---- ---- ----");
