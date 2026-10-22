//const data = require('fs').readFileSync(0, 'utf8');
//const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
//const n = tokens[0];
//const arr = tokens.slice(1, 1 + n);

const arr = [1,2,3,2,4,1,3];
// Write your solution here
let duplicate_elements = arr.filter((item, index) => arr.indexOf(item) != index);//
console.log(duplicate_elements);

/*
item =2
index=3
indexof(2) ! = 2

*/

// using for each
const seen = [];
const duplicates = [];

arr.forEach(element => {
    if(seen.includes(element))
    {
        duplicates.push(element)
    }
    else{
        seen.push(element)
    }
});
console.log(duplicates);