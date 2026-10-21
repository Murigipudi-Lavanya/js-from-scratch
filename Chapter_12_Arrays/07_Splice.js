/*
What is splice  - The splice() method adds and/or removes array 
elements.

The splice() method overwrites the original array.

array.splice(index, count, item1, ....., itemX)

if you mention items in the parameter means we are inserting the items 
instead of deletion. Now the insertion happens in 2 ways 
1. if the count is 0 then it will insert the items at the given index
2. if the count is not 0 then the insert happens by overwriting the item 
at the given index 

*/
let arr = [ 1, 2, 3, 5, 6 ]
arr.splice(2,1); 
/* index is 2 and count is 1 which is number of items to delete from 
 index 2
 */ 
console.log(arr);

arr.splice(2, 0, 99);
/* index is 2 and count is 0 here which means it wont delete item instead
 inserts 99 at index */
console.log(arr);

// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);

// [ 1, 2, 99, 5, 6 ]
arr.splice(1, 2, 10, 20);
// inserts at index 1 which means it overwrites the array
console.log(arr);

// [1, 10, 20, 5 , 6]
arr.splice(3); // as the count is not specified so all the items from 
// index 3 will be deleted 
console.log(arr); // [1, 10, 20] 5 n 6 will be deleted

arr.splice(4,1) // there is no value at index 3 so no action is performed and 
//the original array is returned
console.log(arr)

arr.splice(-5,2) // if the index is negative and there is no value at index -5
// even then based on the count the items are deleted 
console.log(arr) // output [20]

arr.splice(-5,5) // In this case the index is negative and there is no value at index -5
// also the count is 5 but there is only 1 item in the array then that item is deleted 
console.log(arr) // output []
