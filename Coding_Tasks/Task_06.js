//const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
//const n = data[0];
//const arr = data.slice(1, 1 + n);
// Write your solution here

const arr = [12,34,10,1]
console.log(arr);
let smallest_number = arr.sort((a, b) => a - b);
console.log(smallest_number[0]);