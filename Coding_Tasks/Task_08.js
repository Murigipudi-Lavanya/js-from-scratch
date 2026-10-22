//const data = require('fs').readFileSync(0, 'utf8');
//const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
//const n = tokens[0];
// Input - 1 2 3 4 5 where n= length 
const n = 5
const tokens = [1,2,3,4,5]
const arr = tokens.slice(0, 1 + n);


// Write your solution here
const reversed = [];

arr.forEach(element => {
    reversed.unshift((element)) //unshit inserts element at beginning
});
console.log(reversed)
console.log(reversed.join(" "));