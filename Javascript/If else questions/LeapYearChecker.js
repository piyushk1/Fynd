/*
Write a program that checks if a given year is a leap year or not. A leap year is divisible by 4,
except for years that are divisible by 100 but not by 400.

The program should print "Leap year" if the input year is a leap year, and "Not a leap year" otherwise.
*/

const LeapYearChecker = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(year + " is a leap year.");
      } else {
        console.log(year + " is not a leap year.");
      }
    } else {
      console.log(year + " is a leap year.");
    }
  } else {
    console.log(year + " is not a leap year.");
  }
};

console.log("---- ---- ----");

LeapYearChecker(1999);

console.log("---- ---- ----");

LeapYearChecker(2000);

console.log("---- ---- ----");

LeapYearChecker(2020);
