let arr = [10, 20, 45, 55, 60, 100, 21, 67];

//Javascript Array Methods
//1. Get length of array -length methods

console.log(arr.length);

//2.push method for adding elements from end

console.log(arr.push(101));

//3.pop () for removing from the end and returns removed element

console.log(arr.pop());

//4.shift() – remove the first element from an array.

//5.splice() – manipulate elements in an array such as deleting, inserting, and replacing elements.
const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2, "kiwi", "grape");
console.log(fruits);

//6.slice() – copy elements of an array.
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']
console.log("Fruits", fruits);

//7.Delete method

const newArr = ["A", "B", "C", "D"];
console.log(newArr);

delete newArr[2];

console.log(newArr);
console.log(newArr.length);

let;
