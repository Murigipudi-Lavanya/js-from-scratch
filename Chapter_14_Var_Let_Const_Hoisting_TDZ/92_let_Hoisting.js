// console.log(greeting); // Reference error
let greeting = "Hello";
console.log(greeting);


// Behind the scenes:
// let greeting;              <-- hoisted with no value
// console.log(greeting);    <-- reference
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"