let original = [1, 2, 3];
let copy1 = [...original]; //copy1 is a new array as spread creates a new one
// console.log(original);
// console.log(copy1);

let copy2 = original.slice(); //copy2 is a new array as spread creates a new one
copy2.push(92); // this will adds new element to array created by spread not to the original array
copy1.push(93);
console.log(original);
console.log(copy1);
console.log(copy2);


// Deep cOPY
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);
/* After push operation here the original and deep copy array containes 
number 91 deep_copy_array and original is same*/
