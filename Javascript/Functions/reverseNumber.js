//Reverse a Number: Implement a function that reverses the digits of a given number.

const reverse = (number) => {
  let res = 0;
  while (number > 0) {
    let digit = number % 10;
    res = res * 10 + digit;
    number = Math.floor(number / 10);
  }

  return res;
};

console.log(reverse(123));
