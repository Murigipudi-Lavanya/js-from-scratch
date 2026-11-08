// single dimentional array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);    

//multi dimentional array
let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0]); // Output: 10
console.log(grid[1][1]); // Output: 50
console.log(grid[2][2]); // Output: 90

grid[0][0] = 100;
console.log(grid[0][0]); // Output: 100

console.log(grid.length); // Output: 3
console.log(grid[0].length); // Output: 3

console.log(grid);
console.log(grid.flat());

//grid[0][2].pop(); // This line will throw an error because grid[0][2] is a 
// number, not an array.
grid[0].pop(); // This line will remove the last element of the first row 
// of the grid.

// In order to remove the item at index 2 of the first row, we can use splice
grid[0].splice(2,1); // This line will remove the item at index 2 of the first row of the grid. 
console.log(grid);