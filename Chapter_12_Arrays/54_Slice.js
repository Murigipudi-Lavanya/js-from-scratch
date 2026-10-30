//The slice() method returns selected elements in a new array. No changes 
// to original array which means no insertion and deletion
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits1.slice(-3, -1);
console.log(myBest)

let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits2.slice()) // output returns original array

console.log(fruits2.slice(5,1)); // output []
