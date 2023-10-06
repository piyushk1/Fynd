//Check Palindrome: Write a function to check if a given word is a palindrome (reads the same forwards and backward).

const checkPalindrome = (word) => {
  let str = "";
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    if (word[start] !== word[end]) {
      return `${word} is not a palindrome.`;
    }
    start++;
    end--;
  }

  return `${word} is palindrome.`;
};

console.log(checkPalindrome("HELLO"));

console.log(checkPalindrome("RACECAR"));
