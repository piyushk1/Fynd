// Count Vowels: Create a function that counts the number of vowels in a given string.

const countVowels = (str) => {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));
