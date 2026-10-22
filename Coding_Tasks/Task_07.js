//const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = 4;
const data = [4,5,3,8,1]
const arr = data.slice(1, 1+n);
// Write your solution here
console.log(arr);

let sorting_array = arr.sort((a, b) => a - b);
console.log(sorting_array);