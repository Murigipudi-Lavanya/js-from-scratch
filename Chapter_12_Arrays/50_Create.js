let scores = new Array(3);
scores[0] = "1";
console.log(scores); // Output: 1

let scores2 = new Array(1, 2, 3);
console.log(scores2); // Output: [1, 2, 3]

let test = Array.of(10, 20, 30, 40, 50);
console.log(test); // Output: [10, 20, 30, 40, 50]
console.log(test.length);

let chars = Array.from("hello"); 
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']