/* Write a program that takes an integer as input and uses an if statement to determine if the number is even or odd. 
If it's even, the program should print "Even," and if it's odd, it should print "Odd."
*/

console.log("---- ---- ----");

const evenOdd = (n) => {
  if (n % 2 === 0) console.log(n, " is even number.");
  else {
    console.log(n, " is odd number.");
  }
};

evenOdd(23);
evenOdd(20);
console.log("---- ---- ----");
