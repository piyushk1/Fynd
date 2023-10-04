/*
Write a program that calculates the sum of all natural numbers from 1 to a given positive integer n using a for loop. 
Prompt the user for the value of n and then display the sum.
*/
console.log("---- ---- ----");

function sumOfNaturalNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log("The sum of first natural " + number + " numbers is " + sum);
}

sumOfNaturalNumbers(20);
console.log("---- ---- ----");
